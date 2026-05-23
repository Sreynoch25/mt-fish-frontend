import * as PIXI from "pixi.js";

export const FISH_BASE_PATH = "/fish/fish-all-star";
export const FILE_CONFIG_URL = `${FISH_BASE_PATH}/file_config.json`;
export const EFFECT_ATLAS_URL = `${FISH_BASE_PATH}/resources/effect.atlas.txt`;
export const EFFECT_IMAGE_URL = `${FISH_BASE_PATH}/resources/effect.png`;
export const LOCALIZE_ATLAS_URLS = {
  en: `${FISH_BASE_PATH}/resources/localize_text/en.atlas.txt`,
  km: `${FISH_BASE_PATH}/resources/localize_text/km.atlas.txt`,
} as const;

type FishFileConfig = {
  files?: Record<string, string[]>;
};

type AtlasFrameRect = {
  idx: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

type AtlasFrameEntry = {
  frame: AtlasFrameRect;
};

type AtlasData = {
  meta?: {
    image?: string;
  };
  frames?: Record<string, AtlasFrameEntry>;
};

type LocalizeLanguage = keyof typeof LOCALIZE_ATLAS_URLS;
type AtlasTextureMap = Map<string, PIXI.Texture>;

const imageExtensions = new Set(["png", "webp", "jpg", "jpeg"]);
const textExtensions = new Set(["atlas", "txt", "json", "shader", "fnt"]);
const webpBackgrounds = new Set([
  "bg1.png",
  "bg2.png",
  "bg3.png",
  "bg_naga.png",
  "bg_naga_1.png",
  "bg_naga_2.png",
  "bg_phoenix.png",
]);
const skippedManifestUrls = new Set([
  `${FISH_BASE_PATH}/resources/background/bg_loading.png`,
]);

const manifestCache: {
  config: FishFileConfig | null;
  promise: Promise<FishFileConfig> | null;
} = {
  config: null,
  promise: null,
};

const loadedUrls = new Set<string>();
const loadingUrls = new Map<string, Promise<void>>();
const effectTextures = new Map<string, PIXI.Texture>();
const atlasTextures = new Map<string, AtlasTextureMap>();
const atlasPromises = new Map<string, Promise<void>>();
const bitmapFontPromises = new Map<string, Promise<void>>();
let effectAtlasPromise: Promise<void> | null = null;

function normalizeAssetUrl(url: string): string {
  const fileName = url.split("/").pop() ?? "";

  if (url.includes("/fish/fish-all-star/spines/")) {
    return url
      .replace(
        "/fish/fish-all-star/spines/",
        "/fish/fish-all-star/resources/spines/",
      )
      .replace(/\.png$/i, ".webp");
  }

  if (
    url.includes("/resources/background/") &&
    url.endsWith(".png") &&
    webpBackgrounds.has(fileName)
  ) {
    return url.replace(/\.png$/, ".webp");
  }
  return url;
}

export function normalizeFishAssetUrl(url: string): string {
  return normalizeAssetUrl(url);
}

function buildAssetUrl(folder: string, file: string): string {
  return normalizeAssetUrl(`${FISH_BASE_PATH}/${folder}/${file}`);
}

function getExtension(url: string): string {
  const cleanUrl = url.split("?")[0] ?? url;
  return cleanUrl.split(".").pop()?.toLowerCase() ?? "";
}

async function loadSingleUrl(
  url: string,
  options?: {
    ignoreErrors?: boolean;
  },
): Promise<void> {
  if (skippedManifestUrls.has(url)) {
    loadedUrls.add(url);
    return;
  }

  if (loadedUrls.has(url)) return;

  const existing = loadingUrls.get(url);
  if (existing) {
    await existing;
    return;
  }

  const loadPromise = (async () => {
    try {
      const ext = getExtension(url);

      if (imageExtensions.has(ext)) {
        await PIXI.Assets.load(url);
      } else if (textExtensions.has(ext)) {
        await fetch(url, { cache: "force-cache" });
      } else {
        await fetch(url, { cache: "force-cache" });
      }

      loadedUrls.add(url);
    } catch (error) {
      if (!options?.ignoreErrors) {
        throw error;
      }

      console.warn("[assets] skipped missing manifest asset", url, error);
      loadedUrls.add(url);
    }
  })();

  loadingUrls.set(url, loadPromise);

  try {
    await loadPromise;
  } finally {
    loadingUrls.delete(url);
  }
}

async function preloadEffectAtlas(): Promise<void> {
  if (effectTextures.size > 0) return;
  if (effectAtlasPromise) {
    await effectAtlasPromise;
    return;
  }

  effectAtlasPromise = (async () => {
    await Promise.all([
      loadSingleUrl(EFFECT_ATLAS_URL),
      loadSingleUrl(EFFECT_IMAGE_URL),
    ]);

    const response = await fetch(EFFECT_ATLAS_URL, { cache: "force-cache" });
    const atlas = (await response.json()) as AtlasData;
    const imageUrl = atlas.meta?.image
      ? `${FISH_BASE_PATH}/resources/${atlas.meta.image}`
      : EFFECT_IMAGE_URL;
    const baseTexture = PIXI.Texture.from(imageUrl).baseTexture;

    for (const [frameName, entry] of Object.entries(atlas.frames ?? {})) {
      const rect = entry.frame;
      if (!rect) continue;

      effectTextures.set(
        frameName,
        new PIXI.Texture(
          baseTexture,
          new PIXI.Rectangle(rect.x, rect.y, rect.w, rect.h),
        ),
      );
    }
  })();

  try {
    await effectAtlasPromise;
  } finally {
    effectAtlasPromise = null;
  }
}

function resolveAtlasImageUrls(atlasUrl: string, atlas: AtlasData): string[] {
  const imageNames = atlas.meta?.image
    ?.split(",")
    .map((name) => name.trim())
    .filter(Boolean);
  if (!imageNames?.length) return [];
  const atlasDir = atlasUrl.split("/").slice(0, -1).join("/");
  return imageNames.map((imageName) =>
    imageName.startsWith("/") ? imageName : `${atlasDir}/${imageName}`,
  );
}

async function preloadAtlas(atlasUrl: string): Promise<void> {
  if (atlasTextures.has(atlasUrl)) return;

  const existing = atlasPromises.get(atlasUrl);
  if (existing) {
    await existing;
    return;
  }

  const atlasPromise = (async () => {
    await loadSingleUrl(atlasUrl);

    const response = await fetch(atlasUrl, { cache: "force-cache" });
    const atlas = (await response.json()) as AtlasData;
    const imageUrls = resolveAtlasImageUrls(atlasUrl, atlas);

    if (imageUrls.length === 0) {
      atlasTextures.set(atlasUrl, new Map());
      return;
    }

    await Promise.all(imageUrls.map((imageUrl) => loadSingleUrl(imageUrl)));
    const baseTextures = imageUrls.map(
      (imageUrl) => PIXI.Texture.from(imageUrl).baseTexture,
    );
    const textures: AtlasTextureMap = new Map();

    for (const [frameName, entry] of Object.entries(atlas.frames ?? {})) {
      const rect = entry.frame;
      if (!rect) continue;
      const baseTexture = baseTextures[rect.idx ?? 0];
      if (!baseTexture) continue;

      textures.set(
        frameName,
        new PIXI.Texture(
          baseTexture,
          new PIXI.Rectangle(rect.x, rect.y, rect.w, rect.h),
        ),
      );
    }

    atlasTextures.set(atlasUrl, textures);
  })();

  atlasPromises.set(atlasUrl, atlasPromise);

  try {
    await atlasPromise;
  } finally {
    atlasPromises.delete(atlasUrl);
  }
}

async function preloadLocalizedAtlas(lang: LocalizeLanguage): Promise<void> {
  const atlasUrl = LOCALIZE_ATLAS_URLS[lang];
  if (!atlasUrl) return;
  await preloadAtlas(atlasUrl);
}

async function getFishFileConfig(): Promise<FishFileConfig> {
  if (manifestCache.config) return manifestCache.config;
  if (manifestCache.promise) return manifestCache.promise;

  manifestCache.promise = $fetch<FishFileConfig>(FILE_CONFIG_URL).then(
    (config) => {
      manifestCache.config = config;
      return config;
    },
  );

  try {
    return await manifestCache.promise;
  } finally {
    manifestCache.promise = null;
  }
}

function collectUrlsByFolders(
  config: FishFileConfig,
  folderNames: string[],
): string[] {
  const files = config.files ?? {};
  const urls: string[] = [FILE_CONFIG_URL];

  for (const folderName of folderNames) {
    const entries = files[folderName] ?? [];
    for (const file of entries) {
      const url = buildAssetUrl(folderName, file);
      if (skippedManifestUrls.has(url)) continue;
      urls.push(url);
    }
  }

  return [...new Set(urls)];
}

function collectBitmapFontFolders(config: FishFileConfig): string[] {
  return Object.keys(config.files ?? {}).filter(
    (folderName) =>
      folderName === "resources/fnt" || folderName.startsWith("resources/fnt/"),
  );
}

function extractBitmapFontPageFiles(fontText: string): string[] {
  return [...fontText.matchAll(/<page[^>]*file="([^"]+)"/g)]
    .map((match) => match[1] ?? "")
    .filter(Boolean);
}

function resolveRelativeAssetUrl(
  baseUrl: string,
  relativePath: string,
): string {
  if (relativePath.startsWith("/")) return normalizeAssetUrl(relativePath);

  const baseDir = baseUrl.split("/").slice(0, -1).join("/");
  return normalizeAssetUrl(`${baseDir}/${relativePath}`);
}

async function preloadBitmapFont(fontUrl: string): Promise<void> {
  const normalizedFontUrl = normalizeAssetUrl(fontUrl);
  const existing = bitmapFontPromises.get(normalizedFontUrl);

  if (existing) {
    await existing;
    return;
  }

  const promise = (async () => {
    await loadSingleUrl(normalizedFontUrl);

    const fontText = await fetch(normalizedFontUrl, {
      cache: "force-cache",
    }).then((response) => response.text());

    const pageFiles = extractBitmapFontPageFiles(fontText);
    const pageTextureEntries = await Promise.all(
      pageFiles.map(async (pageFile) => {
        const imageUrl = resolveRelativeAssetUrl(normalizedFontUrl, pageFile);
        await loadSingleUrl(imageUrl);
        return [pageFile, PIXI.Texture.from(imageUrl)] as const;
      }),
    );

    const faceMatch = fontText.match(/<info[^>]*face="([^"]+)"/);
    const fontName = faceMatch?.[1];

    if (fontName && PIXI.BitmapFont.available[fontName]) return;

    PIXI.BitmapFont.install(fontText, Object.fromEntries(pageTextureEntries));
  })();

  bitmapFontPromises.set(normalizedFontUrl, promise);

  try {
    await promise;
  } finally {
    bitmapFontPromises.delete(normalizedFontUrl);
  }
}

export function useFishAssetPreload() {
  const preloadByFolders = async (
    folderNames: string[],
    options?: {
      ignoreErrors?: boolean;
    },
  ): Promise<void> => {
    const config = await getFishFileConfig();
    const urls = collectUrlsByFolders(config, folderNames);
    await Promise.all(
      urls.map((url) =>
        loadSingleUrl(url, { ignoreErrors: options?.ignoreErrors }),
      ),
    );
  };

  const preloadTransitionAssets = async (): Promise<void> => {
    const config = await getFishFileConfig();
    const urls = collectUrlsByFolders(config, [
      "resources",
      "resources/background",
      "resources/shader",
      ...collectBitmapFontFolders(config),
    ]);
    await Promise.all(
      urls.map((url) => loadSingleUrl(url, { ignoreErrors: true })),
    );
    await Promise.all([
      preloadEffectAtlas(),
      preloadLocalizedAtlas("en"),
      preloadLocalizedAtlas("km"),
      preloadBitmapFontsByFolders(collectBitmapFontFolders(config)),
    ]);
  };

  const preloadAllFromManifest = async (): Promise<void> => {
    const config = await getFishFileConfig();
    const folderNames = Object.keys(config.files ?? {});
    await preloadByFolders(folderNames, { ignoreErrors: true });
    await preloadBitmapFontsByFolders(collectBitmapFontFolders(config));
  };

  const preloadBitmapFontsByFolders = async (
    folderNames: string[],
  ): Promise<void> => {
    const config = await getFishFileConfig();
    const fontUrls = collectUrlsByFolders(config, folderNames).filter((url) =>
      url.endsWith(".fnt"),
    );

    await Promise.all(fontUrls.map((fontUrl) => preloadBitmapFont(fontUrl)));
  };

  const preloadAllBitmapFonts = async (): Promise<void> => {
    const config = await getFishFileConfig();
    await preloadBitmapFontsByFolders(collectBitmapFontFolders(config));
  };

  return {
    getFishFileConfig,
    preloadByFolders,
    preloadBitmapFont,
    preloadBitmapFontsByFolders,
    preloadAllBitmapFonts,
    preloadTransitionAssets,
    preloadAllFromManifest,
    preloadAtlas,
    preloadEffectAtlas,
    preloadLocalizedAtlas,
    getTexture: (url: string) => PIXI.Texture.from(normalizeAssetUrl(url)),
    getEffectTexture: (frame: string) =>
      effectTextures.get(frame) ?? PIXI.Texture.WHITE,
    getAtlasTexture: (atlasUrl: string, frame: string) =>
      atlasTextures.get(atlasUrl)?.get(frame) ?? PIXI.Texture.WHITE,
    getLocalizedTexture: (lang: LocalizeLanguage, frame: string) =>
      atlasTextures.get(LOCALIZE_ATLAS_URLS[lang])?.get(frame) ??
      PIXI.Texture.WHITE,
  };
}
