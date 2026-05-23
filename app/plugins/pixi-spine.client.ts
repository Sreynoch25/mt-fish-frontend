import "@pixi-spine/loader-uni";
import "@pixi-spine/loader-3.8";
import type { AssetExtension, Loader, ResolvedAsset } from "@pixi/assets";
import { LoaderParserPriority } from "@pixi/assets";
import { extensions, ExtensionType, settings, utils } from "@pixi/core";
import { TextureAtlas } from "@pixi-spine/base";
import type { ISpineMetadata } from "@pixi-spine/loader-base";
import { makeSpineTextureAtlasLoaderFunctionFromPixiLoaderObject } from "@pixi-spine/loader-base";

type RawAtlas = string;


const spineAtlasTxtExtension: AssetExtension<
  RawAtlas | TextureAtlas,
  ISpineMetadata
> = {
  extension: ExtensionType.Asset,
  loader: {
    extension: {
      type: ExtensionType.LoadParser,
      priority: LoaderParserPriority.Normal,
    },

    test(url: string): boolean {
      return url.toLowerCase().endsWith(".atlas.txt");
    },

    async load<T>(url: string): Promise<T> {
      const response = await settings.ADAPTER.fetch(url);
      const txt = await response.text();
      return txt as unknown as T;
    },

    testParse(
      asset: unknown,
      options?: ResolvedAsset<ISpineMetadata>,
    ): Promise<boolean> {
      const isAtlasTxt = String(options?.src)
        .toLowerCase()
        .endsWith(".atlas.txt");
      const isString = typeof asset === "string";
      return Promise.resolve(isAtlasTxt && isString);
    },

    async parse<T>(
      asset: RawAtlas | TextureAtlas,
      options?: ResolvedAsset<ISpineMetadata>,
      loader?: Loader,
    ): Promise<T> {
      const metadata: ISpineMetadata = options?.data ?? {};
      let basePath = utils.path.dirname(options?.src ?? "");
      if (basePath && basePath.lastIndexOf("/") !== basePath.length - 1) {
        basePath += "/";
      }

      let resolve: (value: TextureAtlas) => void = () => {};
      let reject: (reason?: any) => void = () => {};
      const retPromise = new Promise<TextureAtlas>((res, rej) => {
        resolve = res;
        reject = rej;
      });

      let retval: TextureAtlas;
      const resolveCallback = (newAtlas: TextureAtlas): void => {
        if (!newAtlas) {
          reject(
            "Something went terribly wrong loading a spine .atlas file\nMost likely your texture failed to load.",
          );
        }
        resolve(retval);
      };

      if (metadata?.image || metadata?.images) {
        const pages = Object.assign(
          metadata.image ? { default: metadata.image } : {},
          metadata.images,
        );

        retval = new TextureAtlas(
          asset as RawAtlas,
          (line: any, callback: any) => {
            const page = pages[line] || (pages.default as any);
            if (page && page.baseTexture) callback(page.baseTexture);
            else callback(page);
          },
          resolveCallback,
        );
      } else {
        retval = new TextureAtlas(
          asset as RawAtlas,
          makeSpineTextureAtlasLoaderFunctionFromPixiLoaderObject(
            loader!,
            basePath,
            metadata?.imageMetadata,
          ),
          resolveCallback,
        );
      }

      return retPromise as unknown as Promise<T>;
    },

    unload(asset: RawAtlas | TextureAtlas) {
      if (asset instanceof TextureAtlas) {
        asset.dispose();
      }
    },
  },
};

extensions.add(spineAtlasTxtExtension);

export default defineNuxtPlugin(() => {
  // Side-effect import registers the universal spine loader with Pixi.
});
