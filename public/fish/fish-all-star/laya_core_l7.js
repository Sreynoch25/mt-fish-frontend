var CoreHelper = {
  getRootPath: function () {
    let prefix = this.getPrefixPath();
    if (prefix && prefix.startsWith("//")) {
      return prefix;
    }

    return location.protocol + "//" + location.host + prefix;
  },

  getPrefixPath: function () {
    var containerGame = document.getElementById("gameContainer");
    // console.log("injecting containerGame: ", containerGame);
    if (containerGame != null && containerGame != undefined) {
      var prefixPath = containerGame.getAttribute("data-prefixpath");
      return prefixPath;
    }
    return "/";
  },

  getUserId: function () {
    var containerGame = document.getElementById("gameContainer");
    if (containerGame != null && containerGame != undefined) {
      var userid = containerGame.getAttribute("data-userid");
      return userid;
    }
    return "";
  },

  getFlashvars: function () {
    var containerGame = document.getElementById("gameContainer");
    // console.log("injecting containerGame: ", containerGame);
    if (containerGame != null && containerGame != undefined) {
      var flashvars = containerGame.getAttribute("data-flashvars");
      return flashvars;
    }
    return "";
  },

  getExtraInfo: function () {
    return "";
  },

  getGameHost: function () {
    let socketKey = this.getSocketKey();
    if (socketKey && socketKey != "") {
      let splitted = socketKey.split(":");
      if (splitted && splitted.length > 1) {
        return splitted[0];
      }
    }

    return "";
  },

  getGamePort: function () {
    let socketKey = this.getSocketKey();
    if (socketKey && socketKey != "") {
      let splitted = socketKey.split(":");
      if (splitted && splitted.length > 1) {
        return splitted[1];
      }
    }

    return "";
  },

  getSocketKey: function () {
    var containerGame = document.getElementById("gameContainer");
    // console.log("injecting containerGame: ", containerGame);
    if (containerGame != null && containerGame != undefined) {
      var socketKey = containerGame.getAttribute("data-socketKey");
      return socketKey;
    }
    return "";
  },

  setVisibleButtonExit: function (isVisible) {},

  showDeposit: function () {
    window.location = "/?act=deposit";
  },

  getCookie: function (cookieName) {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        return cookie.substring(cookieName.length + 1);
      }
    }

    // Cookie not found
    return null;
  },

  getLanguageCode: function () {
    let lang = "en";
    let coreLang = this.getCookie("lang");
    if (coreLang && coreLang != "") {
      if (coreLang.length > 2) {
        coreLang = coreLang.slice(0, 2);
      }
      lang = coreLang;
    }

    return lang;
  },

  loadLib: function (url) {
    var script = document.createElement("script");
    script.async = false;
    script.src = url;
    document.body.appendChild(script);
  },

  backToLobby: function () {
    window.location = "/";
  },

  enableNoSleep: function () {
    var myTimeout;
    function callTimeoutSleep() {
      if (myTimeout) {
        clearTimeout(myTimeout);
      }
      myTimeout = setTimeout(actionSleepFunction, 6500);
    }

    function actionSleepFunction() {
      var noSleep1 = new NoSleep();
      if (
        document.visibilityState === "visible" &&
        noSleep1 &&
        noSleep1.enable
      ) {
        try {
          // console.log("actionSleepFunction -> enabled");
          noSleep1.enable();
        } catch (exception) {
          // console.log("actionSleepFunction -> exception, try again");
        } finally {
          callTimeoutSleep();
        }
      } else {
        // console.log("actionSleepFunction -> can not enabled");
        callTimeoutSleep();
      }
    }

    window.addEventListener("load", () => {
      callTimeoutSleep();
    });

    window.addEventListener("resize", () => {
      callTimeoutSleep();
    });

    callTimeoutSleep();
  },

  isRunningInApp: function () {
    var containerGame = document.getElementById("gameContainer");
    if (containerGame != null && containerGame != undefined) {
      var inapp = containerGame.getAttribute("data-inapp");
      return inapp && parseInt(inapp) > 0;
    }

    return 0;
  },
};
