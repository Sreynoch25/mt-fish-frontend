import * as PIXI from "pixi.js";
import { createCannonBetUi } from "./createCannonBetUi";

export function useGameScene() {
  let background: PIXI.Sprite;
  let cannonBetUi: Awaited<ReturnType<typeof createCannonBetUi>> | null = null;

  const setup = async (app: PIXI.Application) => {
    const texture = await PIXI.Assets.load("/resources/background/bg1.png");
    background = new PIXI.Sprite(texture);
    background.anchor.set(0.5);
    app.stage.addChild(background);

    cannonBetUi = await createCannonBetUi();
    app.stage.addChild(cannonBetUi.container);

    const resize = () => {
      if (!background) return;

      const { width: screenW, height: screenH } = app.screen;
      const isPortrait = screenH > screenW;
      const isMobile = screenW <= 768;

      background.position.set(screenW / 2, screenH / 2);

      if (isPortrait) {
        background.rotation = Math.PI / 2;
        background.width = screenH;
        background.height = screenW;
      } else {
        background.rotation = 0;
        background.width = screenW;
        background.height = screenH;
      }

      if (cannonBetUi) {
        const backgroundScaleX = background.width / background.texture.width;
        const backgroundScaleY = background.height / background.texture.height;
        const backgroundBounds = background.getBounds();

        if (isMobile && isPortrait) {
          cannonBetUi.container.rotation = Math.PI / 2;
          cannonBetUi.container.scale.set(backgroundScaleY, backgroundScaleX);
          cannonBetUi.container.position.set(backgroundBounds.x, backgroundBounds.y + backgroundBounds.height / 2);
        } else {
          cannonBetUi.container.rotation = 0;
          cannonBetUi.container.scale.set(backgroundScaleX, backgroundScaleY);
          cannonBetUi.container.position.set(
            backgroundBounds.x + backgroundBounds.width / 2,
            backgroundBounds.y + backgroundBounds.height,
          );
        }
      }
    };

    resize();
    app.renderer.on("resize", resize);
  };

  return { setup };
}
