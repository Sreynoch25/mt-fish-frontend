(function () {
  let config = JSON.parse(
    `{"resolution":{"designWidth":1280,"designHeight":720,"scaleMode":"showall","alignV":"middle","alignH":"center","screenMode":"horizontal","backgroundColor":"#888888"},"2D":{"isAntialias":true,"defaultFont":"font/combined_bold.ttf","defaultFontSize":10,"FPS":60,"useRetinalCanvas":false,"isAlpha":false,"webGL2D_MeshAllocMaxMem":true},"3D":{"lightClusterCount":{"x":12,"y":12,"z":12},"enableDynamicBatch":true,"defaultPhysicsMemory":16,"enableUniformBufferObject":true,"pixelRatio":1,"enableMultiLight":true,"maxLightCount":32,"maxMorphTargetCount":32},"physics2D":{"gravity":{"y":9.8,"x":0},"allowSleeping":true,"velocityIterations":8,"positionIterations":3,"pixelRatio":50,"debugDraw":false,"drawShape":true,"drawJoint":true,"drawAABB":false,"drawCenterOfMass":false},"spineVersion":"3.7","splash":{"enabled":false,"fit":"center","duration":1},"stat":false,"physics3D":{"fixedTimeStep":0.016666666666666666,"maxSubSteps":1,"enableCCD":false,"ccdThreshold":0.0001,"ccdSphereRadius":0.0001},"physics3dModule":"laya.bullet","physics2dModule":"laya.box2D","vConsole":true,"alertGlobalError":false,"startupScene":"scenes/LoginScene.ls","pkgs":[{"path":""}]}`,
  );

  Object.assign(Laya.Config, config["2D"]);

  let config3D = config["3D"];
  Object.assign(Laya.Config3D, config3D);

  let v3 = config3D.lightClusterCount;
  Laya.Config3D.lightClusterCount = new Laya.Vector3(v3.x, v3.y, v3.z);

  if (Laya.Physics2D) Object.assign(Laya.Physics2DOption, config.physics2D);

  if (Laya.Laya3D && Laya.Laya3D._enablePhysics)
    Object.assign(Laya.Scene3D.physicsSettings, config.physics3D);

  Laya.LayaGL.renderOBJCreate = new Laya.WebGLRenderEngineFactory();
  Laya.init(config.resolution).then(() => {
    if ((Laya.Browser.onMobile || Laya.Browser.onIPad) && config.vConsole) {
      let script = document.createElement("script");
      script.src = "js/vConsole.min.js";
      script.onload = () => {
        window.vConsole = new VConsole();
      };
      document.body.appendChild(script);
    }

    if (config.alertGlobalError) Laya.alertGlobalError(true);

    if (config.debug || Laya.Browser.getQueryString("debug") == "true")
      Laya.enableDebugPanel();

    if (config.stat) Laya.Stat.show();

    if (config.useSafeFileExtensions) Laya.URL.initMiniGameExtensionOverrides();

    if (Laya.ClassUtils.getClass("SpineSkeleton"))
      Laya.SpineTemplet.RuntimeVersion = config.spineVersion || "3.8";

    if (config.workerLoaderLib)
      Laya.WorkerLoader.workerPath = config.workerLoaderLib;

    let progressCallback = new Laya.BatchProgress((progress) => {
      if (window && window.onSplashProgress) window.onSplashProgress(progress);
    });

    if (config && config.startupScene) {
      config.startupScene = CoreHelper.getRootPath() + config.startupScene;
    }

    let loadSceneProgress = config.startupScene
      ? progressCallback.createCallback(0.5)
      : null;

    let promises = [
      Laya.loader.loadPackage("", null, progressCallback.createCallback()),
    ];
    if (config.pkgs) {
      for (let pkg of config.pkgs) {
        let manifestPath =
          (pkg.path.length > 0 ? pkg.path + "/" : pkg.path) + "fileconfig.json";
        if (pkg.hash) Laya.URL.version[manifestPath] = pkg.hash;
        if (pkg.path.length > 0 && pkg.autoLoad)
          promises.push(
            Laya.loader.loadPackage(
              pkg.path,
              pkg.remoteUrl,
              progressCallback.createCallback(),
            ),
          );
      }
    }

    Promise.all(promises).then(() => {
      if (config.startupScene) {
        showLoading();

        Laya.Scene.open(
          config.startupScene,
          true,
          null,
          null,
          Laya.Handler.create(null, loadSceneProgress, null, false),
        ).then(() => {
          hideLoading();
          if (window && window.hideSplashScreen) window.hideSplashScreen();
        });
      } else {
        if (window && window.hideSplashScreen) window.hideSplashScreen();
      }
    });

    let loadingSprite;
    function showLoading() {
      if (loadingSprite) return;

      loadingSprite = new Laya.Sprite();

      let loadingImage = new Laya.Image(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABACAMAAABxwuT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI2VDE2OjAzOjEyKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMC0wNVQxMDowNzowNyswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMC0wNVQxMDowNzowNyswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZGM2ODY3My0yMTk0LTc1NGEtYjQ3ZS1kNmNlOGQ3MjM3OGYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNDA4NjI5YS0wYzc4LWEzNDItODk3NS0wODE5ODlhNzM2NWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZGQ5ZmFiNi0wMTNlLWQ3NDYtYTBiMC1kODg4Zjg4ZTg5ZmYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdkZDlmYWI2LTAxM2UtZDc0Ni1hMGIwLWQ4ODhmODhlODlmZiIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNlQxNjowMzoxMiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozZGM2ODY3My0yMTk0LTc1NGEtYjQ3ZS1kNmNlOGQ3MjM3OGYiIHN0RXZ0OndoZW49IjIwMjQtMTAtMDVUMTA6MDc6MDcrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57whfOAAACalBMVEUcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgcYdgc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",
      );

      loadingImage.width = 60;
      loadingImage.height = 64;

      loadingSprite.pivot(loadingImage.width / 2, loadingImage.height / 2);
      loadingSprite.pos(Laya.stage.width / 2, Laya.stage.height / 2);
      loadingSprite.addChild(loadingImage);
      Laya.stage.addChild(loadingSprite);

      Laya.timer.frameLoop(1, loadingSprite, () => {
        loadingSprite.rotation -= 5;
        if (loadingSprite.rotation <= 0) {
          loadingSprite.rotation = 360;
        }
      });
    }

    function hideLoading() {
      if (loadingSprite) {
        Laya.timer.clearAll(loadingSprite);
        loadingSprite.removeSelf();
        loadingSprite = null;
      }
    }
  });
})();
