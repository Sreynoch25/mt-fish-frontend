"use strict";
(() => {
  var t = Object.defineProperty,
    e = Object.defineProperties,
    i = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyDescriptors,
    a = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    h = (e, i, s) =>
      i in e
        ? t(e, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s,
          })
        : (e[i] = s),
    l = (t, e) => {
      for (var i in e || (e = {})) n.call(e, i) && h(t, i, e[i]);
      if (a) for (var i of a(e)) o.call(e, i) && h(t, i, e[i]);
      return t;
    },
    r = (t, i) => e(t, s(i)),
    c = (e, s, a, n) => {
      for (
        var o, h = n > 1 ? void 0 : n ? i(s, a) : s, l = e.length - 1;
        l >= 0;
        l--
      )
        (o = e[l]) && (h = (n ? o(s, a, h) : o(h)) || h);
      return (n && h && t(s, a, h), h);
    },
    _ = (t, e, i) =>
      new Promise((s, a) => {
        var n = (t) => {
            try {
              h(i.next(t));
            } catch (t) {
              a(t);
            }
          },
          o = (t) => {
            try {
              h(i.throw(t));
            } catch (t) {
              a(t);
            }
          },
          h = (t) =>
            t.done ? s(t.value) : Promise.resolve(t.value).then(n, o);
        h((i = i.apply(t, e)).next());
      }),
    p = !0,
    g = !1,
    d = 1,
    u = 3,
    y = !1,
    m = !1,
    f = "192.168.1.142",
    b = 62719,
    S = 1280,
    L = 720,
    I = 1,
    C = 4,
    T = 0,
    P = 1,
    A = 0.55,
    N = new Laya.Vector2(720, 576),
    B = 40,
    F = 7e3,
    w = 200,
    E = 1,
    x = 2,
    v = 3,
    R = 4,
    M = 5,
    k = 6,
    O = 7,
    D = 8,
    z = 9,
    H = 10,
    U = 11,
    X = 12,
    G = 13,
    K = 1e3,
    W = 9999,
    Y = 1e4,
    V = "fish_{0}",
    J = "fish_puffer",
    j = "fish_king_squid",
    Z = "fish_monster_lobster",
    q = "bullet_{0}",
    Q = "eff_bullet_explode",
    $ = "bullet_laser",
    tt = "bullet_laser_big",
    et = "bullet_laser_explode",
    it = "bullet_jellyfish_explode",
    st = "big_catch_effect_coin",
    at = "big_catch_effect_prize",
    nt = "big_catch_effect_prize_7x",
    ot = "phoenix_bomb",
    ht = "phoenix_bomb_num",
    lt = "phoenix_feather_bomb",
    rt = "tap_fx",
    ct = "coin",
    _t = "coin_num",
    pt = "coin_refunded",
    gt = "boss_slot_game",
    dt = "boss_roulette",
    ut = "boss_roulette_in",
    yt = "boss_roulette_icon",
    mt = "catch_big",
    ft = "palsy_fish1",
    bt = "palsy_fish2",
    St = "palsy_fish3",
    Lt = "palsy_fish19",
    It = "palsy_fish20",
    Ct = "fish_wave",
    Tt = "interactivity_symbol",
    Pt = "claw_chain",
    At = "claw",
    Nt = "harpoon_reward",
    Bt = "crocodile_angry",
    Ft = "crocodile_small_fish",
    wt = "crocodile_bubble",
    Et = "special_coin",
    xt = "fish_{0}_run",
    vt = "laser_dish",
    Rt = "thor_hammer_ball",
    Mt = "shark_smoke",
    kt = "thor_hammer",
    Ot = "thor_hammer_attack",
    Dt = "thor_hammer_attck_bg",
    zt = {},
    Ht = 1.1;
  ((zt[0] = {
    size: [30, 50],
    scale: Ht,
    available: !0,
    poolInitCount: 5,
    zOrder: 1,
    catchEffectType: 0,
    moveUp: 60,
    moveDown: 60,
    offsetFish: [0, 8],
    offsetCollider: [0, 10],
    baseFlip: 1,
    offsetAim: [0, 0],
  }),
    (zt[1] = {
      size: [36, 60],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 2,
      catchEffectType: 0,
      moveUp: 60,
      moveDown: 60,
      offsetFish: [0, 6.5],
      offsetCollider: [0, 6],
      baseFlip: 1,
      offsetAim: [0, 0],
    }),
    (zt[2] = {
      size: [80, 66],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 3,
      catchEffectType: 0,
      moveUp: 90,
      moveDown: 90,
      offsetFish: [2, 0],
      offsetCollider: [0, -4],
      baseFlip: -1,
      offsetAim: [0, 0],
    }),
    (zt[3] = {
      size: [72, 70],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 4,
      catchEffectType: 1,
      moveUp: 100,
      moveDown: 100,
      offsetFish: [0, -2],
      offsetCollider: [0, 4],
      baseFlip: 1,
      offsetAim: [0, 0],
    }),
    (zt[4] = {
      size: [50, 100],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 5,
      catchEffectType: 1,
      moveUp: 100,
      moveDown: 100,
      offsetFish: [0, 0],
      offsetCollider: [0, 5],
      baseFlip: 1,
      paralysisType: 1,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }),
    (zt[5] = {
      size: [70, 94],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 6,
      catchEffectType: 1,
      moveUp: 100,
      moveDown: 100,
      offsetFish: [10, -18],
      offsetCollider: [2, 2],
      baseFlip: -1,
      paralysisType: 1,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }),
    (zt[6] = {
      size: [130, 100],
      scale: Ht,
      available: !0,
      poolInitCount: 5,
      zOrder: 7,
      catchEffectType: 1,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 35],
      offsetCollider: [0, 10],
      baseFlip: 1,
      paralysisType: 1,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }),
    (zt[7] = {
      size: [160, 180],
      scale: 0.792,
      available: !0,
      poolInitCount: 3,
      zOrder: 8,
      catchEffectType: 2,
      catchPrizeType: 0,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 30],
      offsetCollider: [0, 12],
      spineSkinName: "hong",
      rateUpKind: 0.3,
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [15, 20],
        [45, 60],
      ],
      offsetAim: [0, 0],
    }),
    (zt[8] = {
      size: [160, 180],
      scale: 0.792,
      available: !0,
      noPrefab: !0,
      poolInitCount: 2,
      zOrder: 9,
      catchEffectType: 2,
      catchPrizeType: 1,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 30],
      offsetCollider: [0, 12],
      spineSkinName: "hong",
      rateUpKind: 0.2,
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [15, 25],
        [75, 125],
      ],
      offsetAim: [0, 0],
    }),
    (zt[9] = {
      size: [160, 180],
      scale: 0.792,
      available: !0,
      noPrefab: !0,
      poolInitCount: 2,
      zOrder: 10,
      catchEffectType: 2,
      catchPrizeType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 30],
      offsetCollider: [0, 12],
      spineSkinName: "vang",
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [15, 30],
        [105, 210],
      ],
      offsetAim: [0, 0],
    }),
    (zt[10] = {
      size: [120, 260],
      scale: 0.8 * Ht,
      available: !0,
      poolInitCount: 3,
      zOrder: 11,
      catchEffectType: 2,
      catchPrizeType: 0,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, -20],
      rateUpKind: 0.3,
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [20, 25],
        [60, 75],
      ],
      offsetAim: [0, 0],
    }),
    (zt[11] = {
      size: [150, 320],
      scale: 0.8 * Ht,
      available: !0,
      noPrefab: !0,
      poolInitCount: 0,
      zOrder: 12,
      catchEffectType: 2,
      catchPrizeType: 1,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, -20],
      rateUpKind: 0.2,
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [20, 30],
        [100, 150],
      ],
      offsetAim: [0, 0],
    }),
    (zt[12] = {
      size: [160, 330],
      scale: 0.8 * Ht,
      available: !0,
      noPrefab: !0,
      poolInitCount: 0,
      zOrder: 13,
      catchEffectType: 2,
      catchPrizeType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, -20],
      baseFlip: -1,
      paralysisType: 2,
      rateParalysis: 0.2,
      winRate: [
        [20, 35],
        [140, 245],
      ],
      offsetAim: [0, 0],
    }),
    (zt[13] = {
      size: [200, 250],
      scale: 0.8 * Ht,
      available: !0,
      poolInitCount: 3,
      zOrder: 14,
      catchEffectType: 2,
      catchPrizeType: 0,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, 0],
      rateUpKind: 0.3,
      baseFlip: -1,
      paralysisType: 3,
      rateParalysis: 0.2,
      winRate: [
        [25, 30],
        [75, 90],
      ],
      offsetAim: [5, 0],
    }),
    (zt[14] = {
      size: [220, 270],
      scale: 0.8 * Ht,
      available: !0,
      noPrefab: !0,
      poolInitCount: 2,
      zOrder: 15,
      catchEffectType: 2,
      catchPrizeType: 1,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, 0],
      rateUpKind: 0.2,
      baseFlip: -1,
      paralysisType: 3,
      rateParalysis: 0.2,
      winRate: [
        [25, 35],
        [125, 175],
      ],
      offsetAim: [7, 0],
    }),
    (zt[15] = {
      size: [260, 320],
      scale: 0.8 * Ht,
      available: !0,
      noPrefab: !0,
      poolInitCount: 2,
      zOrder: 16,
      catchEffectType: 2,
      catchPrizeType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [0, 0],
      baseFlip: -1,
      paralysisType: 3,
      rateParalysis: 0.2,
      winRate: [
        [25, 40],
        [175, 280],
      ],
      offsetAim: [7, 0],
    }),
    (zt[16] = {
      size: [200, 420],
      scale: Ht,
      speedDead: 15,
      available: !0,
      noPrefab: !0,
      poolInitCount: 1,
      zOrder: 17,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [-10, 6],
      offsetCollider: [-2, 0],
      rateBigWin: 300,
      baseFlip: 1,
      paralysisType: 3,
      rateParalysis: 0.2,
      walkAnimSpeed: 50,
      offsetAim: [0, -8],
    }),
    (zt[17] = {
      size: [200, 420],
      scale: 0.75 * Ht,
      speedDead: 15,
      available: !0,
      poolInitCount: 1,
      zOrder: 18,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [-10, 6],
      offsetCollider: [-2, 0],
      rateBigWin: 300,
      baseFlip: -1,
      paralysisType: 3,
      rateParalysis: 0.2,
      offsetAim: [30, 0],
    }),
    (zt[18] = {
      size: [350, 350],
      scale: 0.75 * Ht,
      speedDead: 15,
      available: !0,
      poolInitCount: 1,
      zOrder: 19,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [20, -20],
      rateBigWin: 300,
      baseFlip: 1,
      paralysisType: 3,
      rateParalysis: 0.2,
      offsetAim: [-70, 0],
    }),
    (zt[19] = {
      size: [240, 480],
      scale: 0.8 * Ht,
      speedDead: 15,
      available: !0,
      poolInitCount: 1,
      zOrder: 20,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [-10, 100],
      baseFlip: 1,
      paralysisType: 19,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }),
    (zt[20] = {
      size: [180, 870],
      scale: 0.8 * Ht,
      speedDead: 15,
      available: !0,
      poolInitCount: 1,
      zOrder: 20,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [-15, -64],
      offsetCollider: [0, 20],
      baseFlip: 1,
      paralysisType: 20,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }),
    (zt[21] = {
      size: [200, 360],
      scale: Ht,
      speedDead: 15,
      available: !0,
      poolInitCount: 1,
      zOrder: 21,
      catchEffectType: 2,
      moveUp: 110,
      moveDown: 110,
      offsetFish: [0, 0],
      offsetCollider: [18, -20],
      baseFlip: -1,
      paralysisType: 3,
      rateParalysis: 0.2,
      offsetAim: [0, 0],
    }));
  var Ut = {
      16: {
        red: 1,
        green: 1,
        blue: 0,
        alpha: 1,
        hue: 65,
        brightness: 0,
      },
      17: {
        red: 1,
        green: 1,
        blue: 0,
        alpha: 1,
        hue: 65,
        brightness: 0,
      },
      18: {
        red: 0,
        green: 1,
        blue: 1,
        alpha: 1,
        hue: 0,
        brightness: 30,
      },
      19: {
        red: 1,
        green: 0,
        blue: 0,
        alpha: 1,
        hue: 75,
        brightness: 0,
      },
      20: {
        red: 0,
        green: 1,
        blue: 0,
        alpha: 1,
        hue: 10,
        brightness: 0,
      },
      21: {
        red: 1,
        green: 1,
        blue: 1,
        alpha: 1,
        hue: 70,
        brightness: 0,
      },
    },
    Xt = {
      19: {
        odd: "20X~800X",
      },
      20: {
        odd: "50X~1000X",
      },
      21: {
        odd: "50X~1200X",
      },
    },
    Gt = {
      1: {
        delayShoot: 0.17,
        speed: 1650,
        poolInitCount: 25,
        skin: 1,
      },
      6: {
        delayShoot: 0.1,
        speed: 1,
        poolInitCount: 20,
      },
      7: {
        delayShoot: 0.1,
        speed: 1,
        poolInitCount: 2,
      },
      2: {
        delayShoot: 0.37,
        poolInitCount: 2,
        minKindTarget: 3,
      },
      3: {
        delayShoot: 0.33,
        timeUp: 433,
        timeDown: 270,
        timeDelay: 50,
        poolInitCount: 2,
        minKindTarget: 4,
      },
      4: {
        delayShoot: 0,
        poolInitCount: 2,
        minKindTarget: 7,
      },
    },
    Kt = {
      1: 1,
      6: 1,
      2: 4,
      3: 6,
      4: 15,
    },
    Wt = {
      16: {
        KeyPool: "spine_crab",
        PoolInitCount: 2,
        Json: "spines/crab/crab.json",
        DestroyOnFinish: !1,
      },
      17: {
        KeyPool: "spine_turtle",
        PoolInitCount: 2,
        Json: "spines/turtle/dt.json",
        DestroyOnFinish: !1,
      },
      18: {
        KeyPool: "spine_octopus",
        PoolInitCount: 2,
        Json: "spines/boss_octopus/boss_octopus.json",
        DestroyOnFinish: !1,
      },
      19: {
        KeyPool: "spine_phoenix",
        PoolInitCount: 2,
        Json: "spines/phoenix/phoenix.json",
        DestroyOnFinish: !1,
      },
      20: {
        KeyPool: "spine_crocodile",
        PoolInitCount: 2,
        Json: "spines/crocodile/cr.json",
        DestroyOnFinish: !1,
      },
      21: {
        KeyPool: "spine_naga",
        PoolInitCount: 2,
        Json: "spines/naga/naga.json",
        DestroyOnFinish: !1,
      },
    },
    Yt = new Laya.ColorFilter();
  Yt.color(0, 0, 0, 1);
  var Vt = new Laya.ColorFilter();
  (Vt.adjustBrightness(80), Vt.adjustContrast(40), Vt.adjustSaturation(-50));
  var Jt = new Laya.ColorFilter();
  (Jt.color(1, 1, 1, 1),
    Jt.adjustBrightness(10),
    Jt.adjustContrast(-20),
    Jt.adjustSaturation(10));
  var jt = new Laya.ColorFilter();
  (jt.adjustBrightness(60), jt.adjustContrast(20), jt.adjustSaturation(-20));
  var Zt = new Laya.ColorFilter();
  (Zt.adjustBrightness(60), Zt.adjustContrast(20), Zt.adjustSaturation(-20));
  var qt = new Laya.ColorFilter();
  (qt.adjustBrightness(90), qt.adjustContrast(-20), qt.adjustSaturation(-20));
  var Qt = new Laya.ColorFilter();
  (Qt.adjustBrightness(60), Qt.adjustContrast(20), Qt.adjustSaturation(-20));
  var $t = new Laya.ColorFilter();
  ($t.adjustBrightness(60), $t.adjustContrast(20), $t.adjustSaturation(-20));
  var te = new Laya.ColorFilter();
  (te.adjustBrightness(60), te.adjustContrast(20), te.adjustSaturation(-20));
  var ee = new Laya.ColorFilter();
  (ee.adjustBrightness(80), ee.adjustContrast(0), ee.adjustSaturation(-20));
  var ie = [99, 199, 299, 399, 499, 599, 699, 799, 899, 999],
    se = "",
    ae = {
      LOGIN_SCENE: "scenes/LoginScene.ls",
      LOADING_SCENE: "scenes/LoadingScene.ls",
      GAME_SCENE: "scenes/GameScene.ls",
    },
    ne = {
      PRELOAD_BACKGROUND_1: "resources/background/bg1.png",
      PRELOAD_BACKGROUND_2: "resources/background/bg2.png",
      PRELOAD_BACKGROUND_3: "resources/background/bg3.png",
    },
    oe = {
      BACKGROUND_1: "resources/background/bg1.png",
      BACKGROUND_2: "resources/background/bg2.png",
      BACKGROUND_3: "resources/background/bg3.png",
      BACKGROUND_PHOENIX: "resources/background/bg_phoenix.png",
      BACKGROUND_CROCODILE: "resources/background/bg_crocodile.png",
      BACKGROUND_NAGA: "resources/background/bg_naga.png",
      BUTTON_MENU_OPEN: "resources/ui/ui/arrow_2.png",
      BUTTON_MENU_CLOSE: "resources/ui/ui/arrow_1.png",
      BET_MINUS_OFF: "resources/ui/ui/betminus_off.png",
      BET_PLUS_OFF: "resources/ui/ui/betplus_off.png",
      AIM_NORMAL_PRESS: "resources/ui/ui/aimpress.png",
      AIM_LAZE_PRESS: "resources/ui/ui/aim_02press.png",
      AIM_NORMAL: "resources/ui/ui/aim.png",
      AIM_LAZE: "resources/ui/ui/aim_02.png",
      SOUND_ON: "resources/ui/ui/snd.png",
      SOUND_OFF: "resources/ui/ui/snd_off.png",
      BTN_EAGLE_FAST_OFF: "resources/ui/ui/roundedrectangle_off.png",
      BTN_EAGLE_FAST_ON: "resources/ui/ui/roundedrectangle_on.png",
      BULLET_NORMAL_1: "resources/bullet/bullet_common01.png",
      BULLET_NORMAL_2: "resources/bullet/bullet_common02.png",
      BULLET_NORMAL_3: "resources/bullet/bullet_common03.png",
      CANNON_NORMAL_1: "resources/cannon/cannon_common01.png",
      CANNON_NORMAL_2: "resources/cannon/cannon_common02.png",
      CANNON_NORMAL_3: "resources/cannon/cannon_common03.png",
      CANNON_LASER: "resources/cannon/cannon_laser.png",
      AIM_LAZE_WORD: "resources/localize_text/en/aimword_02.png",
      AIM_NORMAL_WORD: "resources/localize_text/en/aimword.png",
      SPECIAL_WORD: "resources/localize_text/en/gamefeature.png",
      SPECIAL_ON_WORD: "resources/localize_text/en/gamefeatureon.png",
      PAYTABLE_WORD: "resources/localize_text/en/fishbet.png",
      PAYTABLE_ON_WORD: "resources/localize_text/en/fishbeton.png",
      INTERFACE_WORD: "resources/localize_text/en/instruction.png",
      INTERFACE_ON_WORD: "resources/localize_text/en/instructionon.png",
      BULLET_EXPLODE_1: "resources/bullet/h01.png",
      BULLET_EXPLODE_2: "resources/bullet/h_01.png",
      BULLET_EXPLODE_3: "resources/bullet/h01_2.png",
      CATCH_PRIZE_3X: "resources/localize_text/en/3timesreward_word.png",
      CATCH_PRIZE_5X: "resources/localize_text/en/5timesreward_word.png",
      CATCH_PRIZE_7X: "resources/localize_text/en/7timesreward_word.png",
      FISH_PUFFER_NAME: "resources/localize_text/en/dname_24.png",
      FISH_KING_SQUID_NAME: "resources/localize_text/en/dname_25.png",
      FISH_CRYSTAL_CRAB_NAME: "resources/localize_text/en/dname_27.png",
      FISH_PHOENIX_NAME: "resources/localize_text/en/dname_28.png",
      BUBBLE_1: "resources/effect/lightning/bubble_01.png",
      BUBBLE_2: "resources/effect/lightning/bubble_02.png",
      BUBBLE_3: "resources/effect/lightning/bubble_03.png",
      BUBBLE_4: "resources/effect/lightning/bubble_04.png",
      SMOKE_02: "resources/effect/particle/smoke02.png",
      TXT_NORMAL_LOCK: "resources/localize_text/{0}/aimword.png",
      TXT_LASER_LOCK: "resources/localize_text/{0}/aimword_02.png",
      TXT_SHARK_BITE: "resources/localize_text/{0}/shark_bite.png",
      TXT_JELLYFISH_CANNON: "resources/localize_text/{0}/jelly_fish_cannon.png",
      TXT_EAGLE_CLAW_HOOK: "resources/localize_text/{0}/eagle_claw_hook.png",
      TXT_CHANGE_ROOM: "resources/localize_text/{0}/change_room.png",
      TXT_PAYTABLE: "resources/localize_text/{0}/fishbet.png",
      TXT_PAYTABLE_ON: "resources/localize_text/{0}/fishbeton.png",
      TXT_SPECIAL: "resources/localize_text/{0}/gamefeature.png",
      TXT_SPECIAL_ON: "resources/localize_text/{0}/gamefeatureon.png",
      TXT_INTERFACE: "resources/localize_text/{0}/instruction.png",
      TXT_INTERFACE_ON: "resources/localize_text/{0}/instructionon.png",
      TXT_HELP: "resources/localize_text/{0}/helptitle.png",
      TXT_TITLE_MENU1_1: "resources/localize_text/{0}/menu1-1.png",
      TXT_TITLE_MENU1_2: "resources/localize_text/{0}/menu1-2.png",
      TXT_TITLE_MENU1_3: "resources/localize_text/{0}/menu1-3.png",
      TXT_TITLE_MENU1_4: "resources/localize_text/{0}/menu1-4.png",
      TXT_TITLE_MENU1_5: "resources/localize_text/{0}/menu1-5.png",
      TXT_TITLE_MENU1_6: "resources/localize_text/{0}/menu1-6.png",
      TXT_TITLE_MENU1_7: "resources/localize_text/{0}/menu1-7.png",
      TXT_TITLE_MENU1_8: "resources/localize_text/{0}/menu1-8.png",
      TXT_TITLE_MENU1_9: "resources/localize_text/{0}/menu1-9.png",
      TXT_TITLE_MENU1_10: "resources/localize_text/{0}/menu1-10.png",
      TXT_MENU1_1: "resources/localize_text/{0}/text-menu1-1.png",
      TXT_MENU1_2: "resources/localize_text/{0}/text-menu1-2.png",
      TXT_MENU1_3: "resources/localize_text/{0}/text-menu1-3.png",
      TXT_MENU1_4: "resources/localize_text/{0}/text-menu1-4.png",
      TXT_MENU1_5: "resources/localize_text/{0}/text-menu1-5.png",
      TXT_MENU1_6: "resources/localize_text/{0}/text-menu1-6.png",
      TXT_MENU1_7: "resources/localize_text/{0}/text-menu1-7.png",
      TXT_MENU1_8: "resources/localize_text/{0}/text-menu1-8.png",
      TXT_MENU1_9: "resources/localize_text/{0}/text-menu1-9.png",
      TXT_MENU1_10: "resources/localize_text/{0}/text-menu1-10.png",
      TXT_TITLE_MENU2_1: "resources/localize_text/{0}/menu2-1.png",
      TXT_TITLE_MENU2_3: "resources/localize_text/{0}/menu2-3.png",
      TXT_TITLE_MENU2_4: "resources/localize_text/{0}/menu2-4.png",
      TXT_TITLE_MENU2_5: "resources/localize_text/{0}/menu2-5.png",
      TXT_MENU_FONT_1: "resources/localize_text/{0}/menufont_01.png",
      TXT_MENU_FONT_2: "resources/localize_text/{0}/menufont_02.png",
      TXT_MENU_FONT_3: "resources/localize_text/{0}/menufont_03.png",
      TXT_MENU_FONT_4: "resources/localize_text/{0}/menufont_04.png",
      TXT_MENU_FONT_5: "resources/localize_text/{0}/menufont_05.png",
      TXT_MENU_FONT_6: "resources/localize_text/{0}/menufont_06.png",
      TXT_MENU_FONT_7: "resources/localize_text/{0}/menufont_07.png",
      TXT_MENU_FONT_8: "resources/localize_text/{0}/menufont_08.png",
      TXT_MENU_FONT_9: "resources/localize_text/{0}/menufont_09.png",
      TXT_MENU_FONT_10: "resources/localize_text/{0}/menufont_10.png",
      TXT_MENU_FONT_11: "resources/localize_text/{0}/menufont_11.png",
      TXT_MENU_FONT_12: "resources/localize_text/{0}/menufont_12.png",
      TXT_MENU3_1: "resources/localize_text/{0}/text-menu3-1.png",
      TXT_MENU3_2: "resources/localize_text/{0}/text-menu3-2.png",
      TXT_MENU3_3: "resources/localize_text/{0}/text-menu3-3.png",
      TXT_MENU3_4: "resources/localize_text/{0}/text-menu3-4.png",
      TXT_MENU3_5: "resources/localize_text/{0}/text-menu3-5.png",
      TXT_MENU3_6: "resources/localize_text/{0}/text-menu3-6.png",
      TXT_MENU3_7: "resources/localize_text/{0}/text-menu3-7.png",
      TXT_MENU3_8: "resources/localize_text/{0}/text-menu3-8.png",
      TXT_WAITING_TO_JOIN: "resources/localize_text/{0}/waiting_to_join.png",
      TXT_YOUR_LOCATION: "resources/localize_text/{0}/you_location.png",
      TXT_AUTO_MODE: "resources/localize_text/{0}/auto_mode.png",
      TXT_AUTO_FISHING: "resources/localize_text/{0}/autofishingtitle.png",
      TXT_GENERATION_FONT_1:
        "resources/localize_text/{0}/generation8artfont_01.png",
      TXT_GENERATION_FONT_2:
        "resources/localize_text/{0}/generation8artfont_02.png",
      TXT_GENERATION_FONT_3:
        "resources/localize_text/{0}/generation8artfont_03.png",
      TXT_GENERATION_FONT_4:
        "resources/localize_text/{0}/generation8artfont_04.png",
      TXT_TITLE_LOADING: "resources/localize_text/{0}/title_loading.png",
      TXT_MESSAGE: "resources/localize_text/{0}/msg.png",
      TXT_NO: "resources/localize_text/{0}/text_no.png",
      TXT_YES: "resources/localize_text/{0}/text_yes.png",
      TXT_OK: "resources/localize_text/{0}/text_ok.png",
      TXT_BET: "resources/localize_text/{0}/bet.png",
      TXT_CATCH_PRIZE_3X: "resources/localize_text/{0}/3timesreward_word.png",
      TXT_CATCH_PRIZE_5X: "resources/localize_text/{0}/5timesreward_word.png",
      TXT_CATCH_PRIZE_7X: "resources/localize_text/{0}/7timesreward_word.png",
      TXT_SEA_KING_ATTACK: "resources/localize_text/{0}/bossfont_01.png",
      TXT_BOSS_NAME_03: "resources/localize_text/{0}/bossname_03.png",
      TXT_BOSS_NAME_07: "resources/localize_text/{0}/bossname_07.png",
      TXT_BOSS_NAME_08: "resources/localize_text/{0}/bossname_08.png",
      TXT_GET_REWARD: "resources/localize_text/{0}/getreward.png",
      TXT_WIN: "resources/localize_text/{0}/win.png",
      TXT_LIGHTNING_BALL_NAME: "resources/localize_text/{0}/dname_23.png",
      TXT_FISH_PUFFER_NAME: "resources/localize_text/{0}/dname_24.png",
      TXT_FISH_KING_SQUID_NAME: "resources/localize_text/{0}/dname_25.png",
      TXT_FISH_MONSTER_LOBSTER_NAME: "resources/localize_text/{0}/dname_26.png",
      TXT_FISH_CRYSTAL_CRAB_NAME: "resources/localize_text/{0}/dname_27.png",
      TXT_FISH_JEWEL_TURTLE_NAME: "resources/localize_text/{0}/dname_17.png",
      TXT_FISH_GIANT_OCTOPUS_NAME: "resources/localize_text/{0}/dname_21.png",
      TXT_FISH_GIANT_CROCODILE_NAME: "resources/localize_text/{0}/dname_18.png",
      TXT_FISH_NAGA_NAME: "resources/localize_text/en/dname_29.png",
      TXT_FISH_PHOENIX_NAME: "resources/localize_text/{0}/dname_28.png",
      TXT_PHONENIX_GUIDE: "resources/localize_text/{0}/phonenix_guide01.png",
      TXT_PHOENIX_AWAKEN: "resources/localize_text/{0}/phonenixawaken.png",
      TXT_ROULETTE_START: "resources/localize_text/{0}/roulette_start.png",
      TXT_ROULETTE_STOP: "resources/localize_text/{0}/roulette_stop.png",
      TXT_SELECT_ALL: "resources/localize_text/{0}/text_select_all.png",
      TXT_CLEAR: "resources/localize_text/{0}/text_clear.png",
      TXT_CONFIRM: "resources/localize_text/{0}/text_confirm.png",
      TXT_COIN_REFUNDED: "resources/localize_text/{0}/text_coin_refunded.png",
      TXT_FISH_WAVE: "resources/localize_text/{0}/fishtide.png",
      TXT_BONUS_WHEEL: "resources/localize_text/{0}/octopodaroulette_2.png",
      TXT_INTERACTIVITY_SYMBOL:
        "resources/localize_text/{0}/interactivegame.png",
      TXT_CAPTURE_WORD: "resources/localize_text/{0}/capture_word.png",
      TXT_CROCODILE_BAR_GUIDE_01:
        "resources/localize_text/{0}/crocodilebar_guide01.png",
      TXT_CROCODILE_BAR_GUIDE_02:
        "resources/localize_text/{0}/crocodilebar_guide02.png",
      TXT_CROCODILE_BAR_GUIDE_03:
        "resources/localize_text/{0}/crocodilebar_guide03.png",
      TXT_CROCODILE_BAR_GUIDE_04:
        "resources/localize_text/{0}/crocodilebar_guide04.png",
      TXT_LIGHTNING_BALL: "resources/localize_text/{0}/txt_lightning_ball.png",
      TXT_LIGHTNING_BALL2:
        "resources/localize_text/{0}/txt_lightning_ball2.png",
      TXT_LIGHTNING_BALL4:
        "resources/localize_text/{0}/txt_lightning_ball4.png",
      TXT_NEWBIE_ROOM: "resources/localize_text/{0}/stage01.png",
      TXT_HAPPY_ROOM: "resources/localize_text/{0}/stage02.png",
      TXT_REGAL_ROOM: "resources/localize_text/{0}/stage03.png",
      TXT_NEWBIE_SLOGAN: "resources/localize_text/{0}/txt_slogan_room_1.png",
      TXT_HAPPY_SLOGAN: "resources/localize_text/{0}/txt_slogan_room_2.png",
      TXT_REGAL_SLOGAN: "resources/localize_text/{0}/txt_slogan_room_3.png",
      TXT_ROOM_FULL: "resources/localize_text/{0}/txt_room_full.png",
      TXT_SWITCH_ROOM_TITLE:
        "resources/localize_text/{0}/generation8artfont_08.png",
      TXT_NAGA_GUIDE: "resources/localize_text/{0}/nacabar_guide05.png",
      TXT_NAGA_TITLE: "resources/localize_text/{0}/nacafrequencytitle.png",
    },
    he = {
      BULLET_NORMAL: "prefabs/bullet/normal.lh",
      BULLET_EXPLODE: "prefabs/bullet/bullet_explode.lh",
      BULLET_LASER: "prefabs/bullet/bullet_laser.lh",
      BULLET_LASER_BIG: "prefabs/bullet/bullet_laser_big.lh",
      BULLET_LASER_EXPLODE: "prefabs/bullet/laser_explode.lh",
      BULLET_SHARK: "prefabs/bullet/bullet_shark.lh",
      BULLET_JELLYFISH: "prefabs/bullet/bullet_jellyfish.lh",
      BULLET_JELLYFISH_EXPLODE: "prefabs/bullet/jellyfish_explode.lh",
      BULLET_GRAB: "prefabs/bullet/bullet_grab.lh",
      CANNON_JELLYFISH: "prefabs/cannon/cannon_jellyfish.lh",
      CANNON_HARPOON: "prefabs/cannon/cannon_grab.lh",
      FISH: "prefabs/fish/fish{0}.lh",
      NORMAL_CATCH_COIN1: "prefabs/normal_catch/coin.lh",
      NORMAL_CATCH_COIN_NUM: "prefabs/normal_catch/coin_num.lh",
      COIN_REFUNDED: "prefabs/normal_catch/coin_refunded.lh",
      BIG_CATCH_EFFECT_COIN: "prefabs/big_catch/effect_coin.lh",
      BIG_CATCH_EFFECT_PRIZE: "prefabs/big_catch/effect_prize.lh",
      BIG_CATCH_EFFECT_PRIZE_7X: "prefabs/big_catch/effect_prize_7x.lh",
      BIG_CATCH_EFFECT_REWARD: "prefabs/big_catch/effect_reward.lh",
      FISH_AURA: "prefabs/fish/fish_aura.lh",
      BOSS_COMING: "prefabs/boss/boss_coming.lh",
      REWARD_PHOENIX: "prefabs/boss/reward_phoenix.lh",
      PHOENIX_BOMB: "prefabs/boss/phoenix_bomb.lh",
      PHOENIX_BOMB_NUM: "prefabs/boss/phoenix_bomb_num.lh",
      PHOENIX_FEATHER_BOMB: "prefabs/boss/feather_bomb.lh",
      REWARD_BOSS_AWAKEN: "prefabs/boss/catch_big_boss.lh",
      TAP_FX: "prefabs/boss/tap_fx.lh",
      PHOENIX_REBIRTH: "prefabs/boss/phoenix_rebirth.lh",
      BOSS_SLOT_GAME: "prefabs/big_catch/effect_slot.lh",
      BOSS_ROULETTE: "prefabs/wheel/roulette.lh",
      BOSS_ROULETTE_IN: "prefabs/wheel/roulette_in.lh",
      BOSS_ROULETTE_ICON: "prefabs/wheel/roulette_icon.lh",
      PALSY_FISH_1: "prefabs/paralysis/palsy_fish1.lh",
      PALSY_FISH_2: "prefabs/paralysis/palsy_fish2.lh",
      PALSY_FISH_3: "prefabs/paralysis/palsy_fish3.lh",
      PALSY_FISH_19: "prefabs/paralysis/palsy_fish19.lh",
      PALSY_FISH_20: "prefabs/paralysis/palsy_fish20.lh",
      FISH_WAVE: "prefabs/fish/fish_wave.lh",
      LOADING: "prefabs/popup/loading.lh",
      INTERACTIVITY_SYMBOL: "prefabs/big_catch/interactivity_symbol.lh",
      HARPOON_REWARD: "prefabs/big_catch/harpoon_reward.lh",
      CROCODILE_MINIGAME: "prefabs/boss/crocodile/minigame.lh",
      CROCODILE_ANGRY: "prefabs/boss/crocodile/angry.lh",
      CROCODILE_COUNT: "prefabs/boss/crocodile/count.lh",
      CROCODILE_BITE: "prefabs/boss/crocodile/bite.lh",
      CROCODILE_BUBBLE_COIN: "prefabs/boss/crocodile/bubble_coin.lh",
      CROCODILE_SMALL_FISH: "prefabs/boss/crocodile/small_fish.lh",
      SPECIAL_COIN: "prefabs/big_catch/special_coin.lh",
      FISH_RUN: "prefabs/fish/fish_{0}_run.lh",
      THOR_HAMMER: "prefabs/lightning_ball/thor_hammer.lh",
      THOR_HAMMER_ATTACK: "prefabs/lightning_ball/thor_hammer_attack.lh",
      THOR_HAMMER_ATTACK_BG: "prefabs/lightning_ball/thor_hammer_attack_bg.lh",
      LASER_DISH: "prefabs/lightning_ball/laser_dish.lh",
      THOR_HAMMER_BALL: "prefabs/lightning_ball/thor_hammer_ball.lh",
      NAGA_MINI_GAME: "prefabs/boss/naga/boss_game.lh",
      NAGA_MOVE_BALL: "prefabs/boss/naga/move_ball.lh",
      NAGA_GEM: "prefabs/boss/naga/boss_gem.lh",
      NAGA_BIG_THUNDER: "prefabs/boss/naga/lighting3.lh",
      NAGA_ARC: "prefabs/boss/naga/lighting4.lh",
      NAGA_THUNDER: "prefabs/boss/naga/lighting.lh",
      BACKGROUND_NAGA: "prefabs/background/naga.lh",
      POPUP_INFO: "prefabs/popup/popup_info.lh",
    },
    le = {
      SPINE_PHOENIX_JSON: "spines/phoenix/phoenix.json",
      SPINE_PHOENIX_ATLAS: "spines/phoenix/phoenix.atlas",
      SPINE_PHOENIX_PNG: "spines/phoenix/phoenix.png",
      SPINE_CRYSTAL_CRAB_JSON: "spines/crab/crab.json",
      SPINE_CRYSTAL_CRAB_ATLAS: "spines/crab/crab.atlas",
      SPINE_CRYSTAL_CRAB_PNG: "spines/crab/crab.png",
      SPINE_TURTLE_JSON: "spines/turtle/dt.json",
      SPINE_TURTLE_ATLAS: "spines/turtle/dt.atlas",
      SPINE_TURTLE_PNG: "spines/turtle/dt.png",
      SPINE_OCTOPUS_JSON: "spines/boss_octopus/boss_octopus.json",
      SPINE_OCTOPUS_ATLAS: "spines/boss_octopus/boss_octopus.atlas",
      SPINE_OCTOPUS_PNG: "spines/boss_octopus/boss_octopus.png",
      SPINE_CROCODILE_JSON: "spines/crocodile/cr.json",
      SPINE_CROCODILE_ATLAS: "spines/crocodile/cr.atlas",
      SPINE_CROCODILE_PNG: "spines/crocodile/cr.png",
      SPINE_NAGA_JSON: "spines/naga/naga.json",
      SPINE_NAGA_ATLAS: "spines/naga/naga.atlas",
      SPINE_NAGA_PNG: "spines/naga/naga.png",
      SPINE_WHEEL_JSON: "spines/wheel/wheel.json",
      SPINE_WHEEL_ATLAS: "spines/wheel/wheel.atlas",
      SPINE_WHEEL_PNG: "spines/wheel/wheel.png",
      SPINE_WHEEL_FRONT_JSON: "spines/wheel_front/wheel_front.json",
      SPINE_WHEEL_FRONT_ATLAS: "spines/wheel_front/wheel_front.atlas",
      SPINE_WHEEL_FRONT_PNG: "spines/wheel_front/wheel_front.png",
      SPINE_PHOENIX_FRONT_JSON: "spines/phoenix_front/phoenix_ice_front.json",
    },
    re = {
      COMBINED_FONT: "font/combined_bold.ttf",
    },
    ce = {
      FNT_FONT_BET: "resources/fnt/fnt_bet.fnt",
      FNT_FONT_SYSTEM: "resources/fnt/system_font/system_font.fnt",
      FNT_FONT_ODD: "resources/fnt/fnt_odd/fnt_odd.fnt",
      FNT_FONT_COUNT: "resources/fnt/fnt_count/fnt_count.fnt",
      FNT_FONT_BOSS_WIN_AWAKEN:
        "resources/fnt/fnt_boss_win_awaken/fnt_boss_win_awaken.fnt",
      FNT_COIN: "resources/fnt/coin/fnt_coin.fnt",
      FNT_NUM_AUTO: "resources/fnt/num_auto.fnt",
      FNT_SHOTS_NUM: "resources/fnt/fnt_shots_num/fnt_shots_num.fnt",
    },
    _e = {
      DATA_FILE: "data/path.json",
    },
    pe = {
      BGM: "sounds/fas_bgm.mp3",
      BGM_REWARD: "sounds/fas_bgm_reward.mp3",
      BGM_PHOENIX: "sounds/fas_bgm_phoenix.mp3",
      BGM_PHOENIX_REWARD: "sounds/fas_bgm_phoenix_reward.mp3",
      BGM_CONGRATULATION: "sounds/fas_bgm_congratulation.mp3",
      BGM_CROCODILE: "sounds/fas_bgm_crocodile.mp3",
      BGM_CROCODILE_REWARD: "sounds/fas_bgm_crocodile_reward.mp3",
      BGM_BONUS_WHEEL: "sounds/fas_bgm_bonus_wheel.mp3",
      BGM_NAGA: "sounds/fas_bgm_naga.mp3",
      BGM_NAGA_REWARD: "sounds/fas_bgm_naga_reward.mp3",
      CLICK: "sounds/fas_click.mp3",
      SHOOT_NORMAL: "sounds/fas_shoot_normal.mp3",
      CHANGE_BET: "sounds/fas_change_bet.mp3",
      CANNON_LASER_SHOOT: "sounds/fas_cannon_laser_shoot.mp3",
      CANNON_LASER_BOMB: "sounds/fas_cannon_laser_bomb.mp3",
      CANNON_JELLYFISH_SHOOT:
        "sounds/special_cannon/fas_cannon_jellyfish_shoot.mp3",
      CANNON_JELLYFISH_EXPLODE:
        "sounds/special_cannon/fas_cannon_jellyfish_explode.mp3",
      CANNON_JELLYFISH_CHANGE:
        "sounds/special_cannon/fas_cannon_jellyfish_change.mp3",
      CANNON_JELLYFISH_NUMBNESS:
        "sounds/special_cannon/fas_cannon_jellyfish_numbness.mp3",
      CANNON_SHARK_BITE_SHOOT:
        "sounds/special_cannon/fas_cannon_shark_bite_shoot.mp3",
      CANNON_SHARK_BITE_EXPLODE:
        "sounds/special_cannon/fas_cannon_shark_bite_explode.mp3",
      CANNON_SHARK_BITE_CHANGE:
        "sounds/special_cannon/fas_cannon_shark_bite_change.mp3",
      CANNON_EAGLE_CLAW_HOOK_APPEAR:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_appear.mp3",
      CANNON_EAGLE_CLAW_HOOK_BREAK:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_break.mp3",
      CANNON_EAGLE_CLAW_HOOK_SHOOT:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_shoot.mp3",
      CANNON_EAGLE_CLAW_HOOK_HIT:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_hit.mp3",
      CANNON_EAGLE_CLAW_HOOK_GET:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_get.mp3",
      CANNON_EAGLE_CLAW_HOOK_RESULT_1:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_result_1.mp3",
      CANNON_EAGLE_CLAW_HOOK_RESULT_2:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_result_2.mp3",
      CANNON_EAGLE_CLAW_HOOK_SWAY_1:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_sway_1.mp3",
      CANNON_EAGLE_CLAW_HOOK_SWAY_2:
        "sounds/special_cannon/fas_cannon_eagle_claw_hook_sway_2.mp3",
      FISH_NORMAL_COIN_1: "sounds/fish_normal/fas_fish_normal_coin_1.mp3",
      FISH_NORMAL_COIN_2: "sounds/fish_normal/fas_fish_normal_coin_2.mp3",
      FISH_NORMAL_ADD_COIN: "sounds/fish_normal/fas_fish_normal_add_coin.mp3",
      FISH_SPECIAL_COIN: "sounds/fish_special/fas_fish_special_coin.mp3",
      FISH_SPECIAL_ADD_COIN:
        "sounds/fish_special/fas_fish_special_add_coin.mp3",
      FISH_SPECIAL_UP_KIND: "sounds/fish_special/fas_fish_special_up_kind.mp3",
      FISH_SPECIAL_PRIZE_3X_COIN:
        "sounds/fish_special/fas_fish_special_prize_3x_coin.mp3",
      FISH_SPECIAL_PRIZE_5X_COIN:
        "sounds/fish_special/fas_fish_special_prize_5x_coin.mp3",
      FISH_SPECIAL_PRIZE_7X_COIN:
        "sounds/fish_special/fas_fish_special_prize_7x_coin.mp3",
      FISH_SPECIAL_PRIZE_ADD_COIN:
        "sounds/fish_special/fas_fish_special_prize_add_coin.mp3",
      REWARD_COIN: "sounds/fas_reward_coin.mp3",
      REWARD_REEL_STOP: "sounds/fas_reward_reel_stop.mp3",
      REWARD_REEL_NEAR_WIN: "sounds/fas_reward_reel_near_win.mp3",
      ALERT: "sounds/fas_alert.mp3",
      REWARD_PHOENIX: "sounds/phoenix/fas_reward_phoenix.mp3",
      REWARD_PHOENIX_APPEAR: "sounds/phoenix/fas_reward_phoenix_appear.mp3",
      REWARD_PHOENIX_FLY: "sounds/phoenix/fas_reward_phoenix_fly.mp3",
      REWARD_PHOENIX_CLICK: "sounds/phoenix/fas_reward_phoenix_click.mp3",
      REWARD_PHOENIX_ATTACK: "sounds/phoenix/fas_reward_phoenix_attack.mp3",
      REWARD_PHOENIX_COIN_ADD: "sounds/phoenix/fas_reward_phoenix_coin_add.mp3",
      FISH_WAVE: "sounds/fas_fish_wave.mp3",
      BONUS_WHEEL_APPEAR: "sounds/bonus_wheel/fas_bonus_wheel_appear.mp3",
      BONUS_WHEEL_ROTATE_1: "sounds/bonus_wheel/fas_bonus_wheel_rotate_1.mp3",
      BONUS_WHEEL_ROTATE_2: "sounds/bonus_wheel/fas_bonus_wheel_rotate_2.mp3",
      BONUS_WHEEL_NEAR_STOP: "sounds/bonus_wheel/fas_bonus_wheel_near_stop.mp3",
      BONUS_WHEEL_STOP: "sounds/bonus_wheel/fas_bonus_wheel_stop.mp3",
      CROCODILE_YOWL_1: "sounds/crocodile/fas_crocodile_yowl_1.mp3",
      CROCODILE_YOWL_2: "sounds/crocodile/fas_crocodile_yowl_2.mp3",
      CROCODILE_START: "sounds/crocodile/fas_crocodile_start.mp3",
      CROCODILE_BITE_1: "sounds/crocodile/fas_crocodile_bite_1.mp3",
      CROCODILE_BITE_2: "sounds/crocodile/fas_crocodile_bite_2.mp3",
      CROCODILE_BUBBLE_SCORES:
        "sounds/crocodile/fas_crocodile_bubble_scores.mp3",
      CROCODILE_BUBBLE_ADD: "sounds/crocodile/fas_crocodile_bubble_add.mp3",
      CROCODILE_SCORES_ADD: "sounds/crocodile/fas_crocodile_scores_add.mp3",
      CROCODILE_END: "sounds/crocodile/fas_crocodile_end.mp3",
      NAGA_HURT: "sounds/naga/fas_naga_hurt.mp3",
      NAGA_THUNDER: "sounds/naga/fas_naga_thunder.mp3",
      NAGA_BELL: "sounds/naga/fas_naga_bell.mp3",
      NAGA_SHOW_BALL: "sounds/naga/fas_naga_show_ball.mp3",
      NAGA_SHOW_BALL_IDLE: "sounds/naga/fas_naga_show_ball_idle.mp3",
      NAGA_SELECT_BALL: "sounds/naga/fas_naga_select_ball.mp3",
      NAGA_GET_FAIL: "sounds/naga/fas_naga_get_fail.mp3",
      NAGA_GET_SUCCESS: "sounds/naga/fas_naga_get_success.mp3",
      NAGA_SHOW_GEM: "sounds/naga/fas_naga_show_gem.mp3",
      NAGA_GET_TIMES: "sounds/naga/fas_naga_get_times.mp3",
      NAGA_SMALL_IN: "sounds/naga/fas_naga_small_in.mp3",
      NAGA_BIG_IN: "sounds/naga/fas_naga_big_in.mp3",
      NAGA_SMALL_THUNDER: "sounds/naga/fas_naga_small_thunder.mp3",
      NAGA_BIG_THUNDER_1: "sounds/naga/fas_naga_big_thunder_1.mp3",
      NAGA_BIG_THUNDER_2: "sounds/naga/fas_naga_big_thunder_2.mp3",
      NAGA_ROLLING_COIN: "sounds/naga/fas_naga_rolling_coin.mp3",
      NAGA_GET_MONEY: "sounds/naga/fas_naga_get_money.mp3",
      NAGA_END: "sounds/naga/fas_naga_end.mp3",
      LIGHTNING_BALL_SHOW: "sounds/lightning_ball/fas_lightning_ball_show.mp3",
      LIGHTNING_BALL_THUNDER:
        "sounds/lightning_ball/fas_lightning_ball_thunder.mp3",
      LIGHTNING_BALL_END: "sounds/lightning_ball/fas_lightning_ball_end.mp3",
    },
    ge = {
      WAVE: "shader/wave.lmat",
      ADDITIVE: "shader/additive.lmat",
      CROCODILE: "shader/crocodile.lmat",
    },
    de = {
      BURN_OUT: "shader/burn_out.lmat",
      WAVE: "shader/wave.lmat",
      ADDITIVE: "shader/additive.lmat",
      CROCODILE: "shader/crocodile.lmat",
      RIPPLE: "shader/ripple.lmat",
    },
    ue = {
      BULLET: "resources/bullet.atlas",
      CANNON: "resources/cannon.atlas",
      CATCH_BIG: "resources/catch_big.atlas",
      COIN: "resources/coin.atlas",
      EFFECT: "resources/effect.atlas",
      FBF: "resources/fbf.atlas",
      LOCALIZE_TEXT_EN: "resources/localize_text/en.atlas",
      LOCALIZE_TEXT_KM: "resources/localize_text/km.atlas",
      LOCALIZE_TEXT_MY: "resources/localize_text/my.atlas",
      LOCALIZE_TEXT_PH: "resources/localize_text/ph.atlas",
      LOCALIZE_TEXT_ZH: "resources/localize_text/zh.atlas",
      FISH_NORMAL: "resources/normal_fish.atlas",
      POPUP_MENU: "resources/popup_info_menu.atlas",
      REWARD_AWAKEN: "resources/reward_awaken.atlas",
      UI: "resources/ui.atlas",
      WHEEL: "resources/wheel.atlas",
      PUFFER_PURPLE: "resources/puffer/purple.atlas",
      PUFFER_PURPLE_ANGER: "resources/puffer/purple_anger.atlas",
      PUFFER_YELLOW: "resources/puffer/yellow.atlas",
      PUFFER_YELLOW_ANGER: "resources/puffer/yellow_anger.atlas",
      SQUID_PURPLE_RUN: "resources/squid/purple_run.atlas",
      SQUID_PURPLE_ANGRY: "resources/squid/purple_angry.atlas",
      SQUID_YELLOW_RUN: "resources/squid/yellow_run.atlas",
      SQUID_YELLOW_ANGRY: "resources/squid/yellow_angry.atlas",
      LOBSTER_RED: "resources/spine_fbf/lobster/red.atlas",
      LOBSTER_YELLOW: "resources/spine_fbf/lobster/yellow.atlas",
    },
    ye = {
      p: function (t, e) {
        return new Laya.Point(t, e);
      },
      PointZero: function () {
        return ye.p(0, 0);
      },
    };
  ((ye.VECTOR_UP = ye.p(0, 1)),
    (ye.POINT_EPSILON = parseFloat("1.192092896e-07F")),
    (ye.pNeg = function (t) {
      return ye.p(-t.x, -t.y);
    }),
    (ye.pAdd = function (t, e) {
      return ye.p(t.x + e.x, t.y + e.y);
    }),
    (ye.pSub = function (t, e) {
      return ye.p(t.x - e.x, t.y - e.y);
    }),
    (ye.pMult = function (t, e) {
      return ye.p(t.x * e, t.y * e);
    }),
    (ye.pMidpoint = function (t, e) {
      return ye.pMult(ye.pAdd(t, e), 0.5);
    }),
    (ye.pDot = function (t, e) {
      return t.x * e.x + t.y * e.y;
    }),
    (ye.pCross = function (t, e) {
      return t.x * e.y - t.y * e.x;
    }),
    (ye.pPerp = function (t) {
      return ye.p(-t.y, t.x);
    }),
    (ye.pRPerp = function (t) {
      return ye.p(t.y, -t.x);
    }),
    (ye.pProject = function (t, e) {
      return ye.pMult(e, ye.pDot(t, e) / ye.pDot(e, e));
    }),
    (ye.pRotate = function (t, e) {
      return ye.p(t.x * e.x - t.y * e.y, t.x * e.y + t.y * e.x);
    }),
    (ye.pUnrotate = function (t, e) {
      return ye.p(t.x * e.x + t.y * e.y, t.y * e.x - t.x * e.y);
    }),
    (ye.pLengthSQ = function (t) {
      return ye.pDot(t, t);
    }),
    (ye.pDistanceSQ = function (t, e) {
      return ye.pLengthSQ(ye.pSub(t, e));
    }),
    (ye.pLength = function (t) {
      return Math.sqrt(ye.pLengthSQ(t));
    }),
    (ye.pDistance = function (t, e) {
      return ye.pLength(ye.pSub(t, e));
    }),
    (ye.pNormalize = function (t) {
      return ye.pMult(t, 1 / ye.pLength(t));
    }),
    (ye.pForAngle = function (t) {
      return ye.p(Math.cos(t), Math.sin(t));
    }),
    (ye.pToAngle = function (t) {
      return Math.atan2(t.y, t.x);
    }),
    (ye.clampf = function (t, e, i) {
      if (e > i) {
        var s = e;
        ((e = i), (i = s));
      }
      return t < e ? e : t < i ? t : i;
    }),
    (ye.pClamp = function (t, e, i) {
      return ye.p(ye.clampf(t.x, e.x, i.x), ye.clampf(t.y, e.y, i.y));
    }),
    (ye.pFromSize = function (t) {
      return ye.p(t.width, t.height);
    }),
    (ye.pCompOp = function (t, e) {
      return ye.p(e(t.x), e(t.y));
    }),
    (ye.pLerp = function (t, e, i) {
      return ye.pAdd(ye.pMult(t, 1 - i), ye.pMult(e, i));
    }),
    (ye.pFuzzyEqual = function (t, e, i) {
      return (
        t.x - i <= e.x && e.x <= t.x + i && t.y - i <= e.y && e.y <= t.y + i
      );
    }),
    (ye.pCompMult = function (t, e) {
      return ye.p(t.x * e.x, t.y * e.y);
    }),
    (ye.pAngleSigned = function (t, e) {
      var i = ye.pNormalize(t),
        s = ye.pNormalize(e),
        a = Math.atan2(i.x * s.y - i.y * s.x, ye.pDot(i, s));
      return Math.abs(a) < ye.POINT_EPSILON ? 0 : a;
    }),
    (ye.pAngle = function (t, e) {
      var i = Math.acos(ye.pDot(ye.pNormalize(t), ye.pNormalize(e)));
      return Math.abs(i) < ye.POINT_EPSILON ? 0 : i;
    }),
    (ye.pRotateByAngle = function (t, e, i) {
      var s = ye.pSub(t, e),
        a = Math.cos(i),
        n = Math.sin(i),
        o = s.x;
      return ((s.x = o * a - s.y * n + e.x), (s.y = o * n + s.y * a + e.y), s);
    }),
    (ye.pLineIntersect = function (t, e, i, s, a) {
      if ((t.x == e.x && t.y == e.y) || (i.x == s.x && i.y == s.y)) return !1;
      var n = e.x - t.x,
        o = e.y - t.y,
        h = s.x - i.x,
        l = s.y - i.y,
        r = t.x - i.x,
        c = t.y - i.y,
        _ = l * n - h * o;
      return (
        (a.x = h * c - l * r),
        (a.y = n * c - o * r),
        0 == _ ? 0 == a.x || 0 == a.y : ((a.x = a.x / _), (a.y = a.y / _), !0)
      );
    }),
    (ye.pSegmentIntersect = function (t, e, i, s) {
      var a = ye.p(0, 0);
      return !!(
        ye.pLineIntersect(t, e, i, s, a) &&
        a.x >= 0 &&
        a.x <= 1 &&
        a.y >= 0 &&
        a.y <= 1
      );
    }),
    (ye.pIntersectPoint = function (t, e, i, s) {
      var a = ye.p(0, 0);
      if (ye.pLineIntersect(t, e, i, s, a)) {
        var n = ye.p(0, 0);
        return (
          (n.x = t.x + a.x * (e.x - t.x)),
          (n.y = t.y + a.x * (e.y - t.y)),
          n
        );
      }
      return ye.PointZero();
    }),
    (ye.pSameAs = function (t, e) {
      return null != t && null != e && t.x == e.x && t.y == e.y;
    }),
    (ye.pZeroIn = function (t) {
      ((t.x = 0), (t.y = 0));
    }),
    (ye.pIn = function (t, e) {
      ((t.x = e.x), (t.y = e.y));
    }),
    (ye.pMultIn = function (t, e) {
      ((t.x *= e), (t.y *= e));
    }),
    (ye.pSubIn = function (t, e) {
      ((t.x -= e.x), (t.y -= e.y));
    }),
    (ye.pAddIn = function (t, e) {
      ((t.x += e.x), (t.y += e.y));
    }),
    (ye.pNormalizeIn = function (t) {
      ye.pMultIn(t, 1 / Math.sqrt(t.x * t.x + t.y * t.y));
    }),
    (ye.RANDOM_MINUS1_1 = function () {
      return 2 * (Math.random() - 0.5);
    }),
    (ye.PI = Math.PI),
    (ye.RAD = ye.PI / 180),
    (ye.DEG = 180 / ye.PI),
    (ye.DEGREES_TO_RADIANS = function (t) {
      return t * ye.RAD;
    }),
    (ye.RADIANS_TO_DEGREES = function (t) {
      return t * ye.DEG;
    }),
    (ye.componentToHex = function (t) {
      const e = t.toString(16);
      return 1 == e.length ? "0" + e : e;
    }),
    (ye.rgbToHex = function (t, e, i) {
      return (
        "#" + ye.componentToHex(t) + ye.componentToHex(e) + ye.componentToHex(i)
      );
    }),
    (ye.lerp = function (t, e, i) {
      return t + (e - t) * i;
    }));
  var me = {
      Timer: class {
        static repeat(t, e, i = 1, s = 0) {
          if (i <= 0) return;
          if ((--i, e && e(), i <= 0)) return;
          const a = () => {
            (e && e(), --i <= 0 && Laya.timer.clear(t, a));
          };
          Laya.timer.loop(s, t, a);
        }
      },
      Tween: class {
        static union(...t) {
          const e = [];
          for (let i = 0; i < t.length; ++i) e[i] = t[i];
          if (e.length <= 0) return;
          let i = null;
          for (let t = e.length - 1; t > 0; --t) {
            const s = e[t];
            let a = i;
            i = Laya.Handler.create(s.caller, () => {
              if (null !== s.callFunc)
                return (s.callFunc(), void (null !== a && a.run()));
              s.tween(s.caller, s.props, s.duration, s.ease, a);
            });
          }
          const s = e[0];
          if (null !== s.callFunc)
            return (s.callFunc(), void (null !== i && i.run()));
          s.tween(s.caller, s.props, s.duration, s.ease, i);
        }
        static createTweenInfo(t, e, i, s, a, n) {
          return {
            tween: t,
            caller: e,
            props: i,
            duration: s,
            ease: a,
            callFunc: n || null,
          };
        }
        static callFunc(t, e) {
          return {
            tween: null,
            caller: t,
            props: null,
            duration: null,
            ease: null,
            callFunc: e,
          };
        }
        static tweenTo(t, e, i, s, a) {
          return {
            tween: Laya.Tween.to,
            caller: t,
            props: e,
            duration: i,
            ease: s,
            callFunc: a || null,
          };
        }
      },
      Math: ye,
    },
    { regClass: fe, property: be } = Laya,
    Se = class {
      constructor(t, e, i, s, a, n, o, h) {
        ((this.gravity = t || me.Math.PointZero()),
          (this.speed = e || 0),
          (this.speedVar = i || 0),
          (this.tangentialAccel = s || 0),
          (this.tangentialAccelVar = a || 0),
          (this.radialAccel = n || 0),
          (this.radialAccelVar = o || 0),
          (this.rotationIsDir = h || !1));
      }
    },
    Le = class {
      constructor(t, e, i, s, a, n) {
        ((this.startRadius = t || 0),
          (this.startRadiusVar = e || 0),
          (this.endRadius = i || 0),
          (this.endRadiusVar = s || 0),
          (this.rotatePerSecond = a || 0),
          (this.rotatePerSecondVar = n || 0));
      }
    },
    Ie = class {
      constructor(t, e, i) {
        ((this.dir = t || me.Math.PointZero()),
          (this.radialAccel = e || 0),
          (this.tangentialAccel = i || 0));
      }
    },
    Ce = class {
      constructor(t, e, i, s) {
        ((this.angle = t || 0),
          (this.degreesPerSecond = e || 0),
          (this.radius = i || 0),
          (this.deltaRadius = s || 0));
      }
    },
    Te = class extends Laya.Image {
      constructor(t, e, i, s, a, n, o, h, l, r, c) {
        (super(),
          (this.pPos = t || me.Math.PointZero()),
          (this.startPos = e || me.Math.PointZero()),
          (this.pColor = i || new Laya.Color(0, 0, 0, 1)),
          (this.deltaColor = s || new Laya.Color(0, 0, 0, 1)),
          (this.pSize = a || 0),
          (this.deltaSize = n || 0),
          (this.rotation = o || 0),
          (this.deltaRotation = h || 0),
          (this.timeToLive = l || 0),
          (this.modeA = r || new Ie()),
          (this.modeB = c || new Ce()),
          (this.isChangeColor = !1),
          (this.drawPos = me.Math.p(0, 0)),
          (this.pRotation = 0));
      }
      updateParticle() {
        (this.pos(this.drawPos.x, this.drawPos.y),
          (this.rotation = this.pRotation),
          this.size(this.pSize, this.pSize),
          (this.alpha = this.pColor.a),
          this.isChangeColor &&
            (this.color = me.Math.rgbToHex(
              Math.floor(255 * this.pColor.r),
              Math.floor(255 * this.pColor.g),
              Math.floor(255 * this.pColor.b),
            )));
      }
    };
  Te.TemporaryPoints = [me.Math.p(), me.Math.p(), me.Math.p(), me.Math.p()];
  var Pe = class extends Laya.Script {
    constructor() {
      (super(),
        (this.duration = -1),
        (this.dontTint = !1),
        (this.mode = Pe.PARTICLE_MODE_GRAVITY),
        (this.type = Pe.PARTICLE_TYPE_RELATIVE),
        (this._emitterMode = Pe.PARTICLE_MODE_GRAVITY),
        (this._positionType = Pe.PARTICLE_TYPE_RELATIVE),
        (this._dontTint = !1),
        (this._pointZeroForParticle = new Laya.Point(0, 0)));
    }
    set newAngle(t) {
      this._angle = t;
    }
    onAwake() {
      ((this.modeA = new Se()),
        (this.modeB = new Le()),
        (this.maxParticles = this.maxParticles || 0),
        (this.autoPlay = this.autoPlay || !1),
        (this._duration = this.duration ? this.duration.valueOf() : 0),
        (this._life = this.life ? this.life.valueOf() : 0),
        (this._lifeVar = this.lifeVar ? this.lifeVar.valueOf() : 0),
        (this._emissionRate = this.emissionRate
          ? this.emissionRate.valueOf()
          : 0),
        (this._angle = this.angle ? this.angle.valueOf() : 0),
        (this._angleVar = this.angleVar ? this.angleVar.valueOf() : 0),
        (this._posVar = new Laya.Point(
          this.posVarX ? this.posVarX.valueOf() : 0,
          this.posVarY ? this.posVarY.valueOf() : 0,
        )),
        (this.modeA.gravity = {
          x: this.gravityX ? this.gravityX.valueOf() : 0,
          y: this.gravityY ? this.gravityY.valueOf() : 0,
        }),
        (this.modeA.speed = this.speed ? this.speed.valueOf() : 0),
        (this.modeA.speedVar = this.speedVar ? this.speedVar.valueOf() : 0),
        (this.modeA.tangentialAccel = this.accelTan
          ? this.accelTan.valueOf()
          : 0),
        (this.modeA.tangentialAccelVar = this.accelTanVar
          ? this.accelTanVar.valueOf()
          : 0),
        (this.modeA.radialAccel = this.accelRad ? this.accelRad.valueOf() : 0),
        (this.modeA.radialAccelVar = this.accelRadVar
          ? this.accelRadVar.valueOf()
          : 0),
        (this.modeA.rotationIsDir = !1),
        (this.modeB.startRadius = this.startRadius
          ? this.startRadius.valueOf()
          : 0),
        (this.modeB.startRadiusVar = this.startRadiusVar
          ? this.startRadiusVar.valueOf()
          : 0),
        (this.modeB.endRadius = this.endRadius ? this.endRadius.valueOf() : 0),
        (this.modeB.endRadiusVar = this.endRadiusVar
          ? this.endRadiusVar.valueOf()
          : 0),
        (this.modeB.rotatePerSecond = this.rotatePerSecond
          ? this.rotatePerSecond.valueOf()
          : 0),
        (this.modeB.rotatePerSecondVar = this.rotatePerSecondVar
          ? this.rotatePerSecondVar.valueOf()
          : 0),
        (this._sourcePosition = new Laya.Point(
          this.owner.width >> 1,
          this.owner.height >> 1,
        )),
        (this._position = new Laya.Point(
          this.owner.width >> 1,
          this.owner.height >> 1,
        )),
        (this._particleCount = 0),
        (this._particleIdx = 0),
        (this._emitCounter = 0),
        (this._startColor = this.startColor || Laya.Color.WHITE),
        (this._startColorVar =
          this.startColorVar || new Laya.Color(0, 0, 0, 0)),
        (this._endColor = this.endColor || Laya.Color.WHITE),
        (this._endColorVar = this.endColorVar || new Laya.Color(0, 0, 0, 0)),
        (this._startSpin = this.startSpin || 0),
        (this._startSpinVar = this.startSpinVar || 0),
        (this._endSpin = this.endSpin || 0),
        (this._endSpinVar = this.endSpinVar || 0),
        (this._dontTint = null !== this.dontTint && this.dontTint.valueOf()),
        (this._emitterMode =
          null !== this.mode ? this.mode.valueOf() : Pe.PARTICLE_MODE_GRAVITY),
        (this._startSize = this.startSize ? this.startSize.valueOf() : 1),
        (this._startSizeVar = this.startSizeVar
          ? this.startSizeVar.valueOf()
          : 0),
        (this._endSize = this.endSize ? this.endSize.valueOf() : 0),
        (this._endSizeVar = this.endSizeVar ? this.endSizeVar.valueOf() : 0),
        (this._positionType =
          null != this.type ? this.type.valueOf() : Pe.PARTICLE_TYPE_RELATIVE),
        this.initWithTotalParticles(
          this.maxParticles ? this.maxParticles.valueOf() : 0,
        ),
        (this.lastTime = 0.001 * Date.now()),
        this.autoPlay ? this.resetSystem() : (this._isActive = !1));
    }
    initWithTotalParticles(t) {
      ((this._totalParticles = Math.min(t, 15)), (this._particles = []));
      for (let t = 0; t < this._totalParticles; t++) {
        const e = new Te();
        ((e.skin = this.image.url),
          (e.anchorX = 0.5),
          (e.anchorY = 0.5),
          (e.visible = !1),
          e.size(0, 0),
          this.owner.addChild(e),
          (e.active = !1),
          this.isLighter && (e.material = Laya.loader.getRes(de.ADDITIVE)),
          (this._particles[t] = e));
      }
      return (
        !!this._particles &&
        ((this._allocatedParticles = this._totalParticles),
        (this._isActive = !0),
        (this._isAutoRemoveOnFinish = !1),
        !0)
      );
    }
    addParticle() {
      if (this.isFull()) return !1;
      let t;
      return (
        (t = this._particles[this._particleCount]),
        this.initParticle(t),
        t.updateParticle(),
        (t.visible = !0),
        (t.active = !0),
        ++this._particleCount,
        !0
      );
    }
    initParticle(t) {
      const e = me.Math.RANDOM_MINUS1_1;
      let i, s;
      ((t.timeToLive = this._life + this._lifeVar * e()),
        (t.timeToLive = Math.max(0, t.timeToLive)),
        (t.pPos.x = this._sourcePosition.x + this._posVar.x * e()),
        (t.pPos.y = this._sourcePosition.y + this._posVar.y * e()));
      let a = this._startColor,
        n = this._startColorVar,
        o = this._endColor,
        h = this._endColorVar;
      ((i = {
        r: me.Math.clampf(a.r + n.r * e(), 0, 1),
        g: me.Math.clampf(a.g + n.g * e(), 0, 1),
        b: me.Math.clampf(a.b + n.b * e(), 0, 1),
        a: me.Math.clampf(a.a + n.a * e(), 0, 1),
      }),
        (s = {
          r: me.Math.clampf(o.r + h.r * e(), 0, 1),
          g: me.Math.clampf(o.g + h.g * e(), 0, 1),
          b: me.Math.clampf(o.b + h.b * e(), 0, 1),
          a: me.Math.clampf(o.a + h.a * e(), 0, 1),
        }),
        (t.pColor = i));
      let l = t.deltaColor,
        r = t.timeToLive;
      ((l.r = (s.r - i.r) / r),
        (l.g = (s.g - i.g) / r),
        (l.b = (s.b - i.b) / r),
        (l.a = (s.a - i.a) / r));
      let c = this._startSize + this._startSizeVar * e();
      if (
        ((c = Math.max(0, c)),
        (t.pSize = c),
        this._endSize === Pe.PARTICLE_START_SIZE_EQUAL_TO_END_SIZE)
      )
        t.deltaSize = 0;
      else {
        let i = this._endSize + this._endSizeVar * e();
        ((i = Math.max(0, i)), (t.deltaSize = (i - c) / r));
      }
      let _ = this._startSpin + this._startSpinVar * e(),
        p = this._endSpin + this._endSpinVar * e();
      ((t.rotation = _),
        (t.deltaRotation = (p - _) / r),
        this._positionType == Pe.PARTICLE_TYPE_FREE
          ? (t.startPos = this.owner.localToGlobal(
              this._pointZeroForParticle,
              !0,
            ))
          : this._positionType == Pe.PARTICLE_TYPE_RELATIVE &&
            ((t.startPos.x = this._position.x),
            (t.startPos.y = this._position.y)));
      let g = me.Math.DEGREES_TO_RADIANS(this._angle + this._angleVar * e());
      if (this._emitterMode === Pe.PARTICLE_MODE_GRAVITY) {
        let i = this.modeA,
          s = t.modeA,
          a = i.speed + i.speedVar * e();
        ((s.dir.x = Math.cos(g)),
          (s.dir.y = Math.sin(g)),
          me.Math.pMultIn(s.dir, a),
          (s.radialAccel = i.radialAccel + i.radialAccelVar * e()),
          (s.tangentialAccel = i.tangentialAccel + i.tangentialAccelVar * e()),
          i.rotationIsDir &&
            (t.rotation = -me.Math.RADIANS_TO_DEGREES(
              me.Math.pToAngle(s.dir),
            )));
      } else {
        let i = this.modeB,
          s = t.modeB,
          a = i.startRadius + i.startRadiusVar * e(),
          n = i.endRadius + i.endRadiusVar * e();
        ((s.radius = a),
          (s.deltaRadius =
            i.endRadius === Pe.PARTICLE_START_RADIUS_EQUAL_TO_END_RADIUS
              ? 0
              : (n - a) / r),
          (s.angle = g),
          (s.degreesPerSecond = me.Math.DEGREES_TO_RADIANS(
            i.rotatePerSecond + i.rotatePerSecondVar * e(),
          )));
      }
    }
    stopSystem() {
      ((this._isActive = !1),
        (this._elapsed = this._duration),
        (this._emitCounter = 0));
    }
    resetSystem() {
      ((this.lastTime = 0.001 * Date.now()),
        (this._isActive = !0),
        (this._elapsed = 0));
      let t = this._particles;
      for (
        this._particleIdx = 0;
        this._particleIdx < this._particleCount;
        ++this._particleIdx
      )
        t[this._particleIdx].timeToLive = 0;
      Laya.timer.loop(1, this, this.update);
    }
    isFull() {
      return this._particleCount >= this._totalParticles;
    }
    update() {
      const t = 0.001 * Date.now(),
        e = t - this.lastTime;
      if (((this.lastTime = t), this._isActive && this.emissionRate)) {
        const t = 1 / this.emissionRate.valueOf();
        for (
          this._particleCount < this._totalParticles &&
          (this._emitCounter += e);
          this._particleCount < this._totalParticles && this._emitCounter > t;
        )
          (this.addParticle(), (this._emitCounter -= t));
        ((this._elapsed += e),
          -1 != this._duration &&
            this._duration < this._elapsed &&
            this.stopSystem());
      }
      this._particleIdx = 0;
      const i = Te.TemporaryPoints[0];
      if (
        ((i.x = this._position.x), (i.y = this._position.y), this.owner.visible)
      ) {
        const t = Te.TemporaryPoints[1],
          s = Te.TemporaryPoints[2],
          a = Te.TemporaryPoints[3],
          n = this._particles;
        for (; this._particleIdx < this._particleCount; ) {
          (me.Math.pZeroIn(t), me.Math.pZeroIn(s), me.Math.pZeroIn(a));
          const o = n[this._particleIdx];
          if (((o.timeToLive -= e), o.timeToLive > 0)) {
            if (this._emitterMode == Pe.PARTICLE_MODE_GRAVITY) {
              const i = a,
                n = t,
                h = s;
              (o.pPos.x || o.pPos.y
                ? (me.Math.pIn(n, o.pPos), me.Math.pNormalizeIn(n))
                : me.Math.pZeroIn(n),
                me.Math.pIn(h, n),
                me.Math.pMultIn(n, o.modeA.radialAccel));
              let l = h.x;
              ((h.x = -h.y),
                (h.y = l),
                me.Math.pMultIn(h, o.modeA.tangentialAccel),
                me.Math.pIn(i, n),
                me.Math.pAddIn(i, h),
                me.Math.pAddIn(i, this.modeA.gravity),
                me.Math.pMultIn(i, e),
                me.Math.pAddIn(o.modeA.dir, i),
                me.Math.pIn(i, o.modeA.dir),
                me.Math.pMultIn(i, e),
                me.Math.pAddIn(o.pPos, i));
            } else {
              let t = o.modeB;
              ((t.angle += t.degreesPerSecond * e),
                (t.radius += t.deltaRadius * e),
                (o.pPos.x = -Math.cos(t.angle) * t.radius),
                (o.pPos.y = -Math.sin(t.angle) * t.radius));
            }
            (this._dontTint ||
              ((o.pColor.r += o.deltaColor.r * e),
              (o.pColor.g += o.deltaColor.g * e),
              (o.pColor.b += o.deltaColor.b * e),
              (o.pColor.a += o.deltaColor.a * e),
              (o.isChangeColor = !0)),
              (o.pSize += o.deltaSize * e),
              (o.pSize = Math.max(0, o.pSize)),
              (o.pRotation += o.deltaRotation * e));
            let n = t;
            if (
              this._positionType == Pe.PARTICLE_TYPE_FREE ||
              this._positionType == Pe.PARTICLE_TYPE_RELATIVE
            ) {
              const t = s;
              (me.Math.pIn(t, i),
                me.Math.pSubIn(t, o.startPos),
                me.Math.pIn(n, o.pPos),
                me.Math.pSubIn(n, t));
            } else me.Math.pIn(n, o.pPos);
            (this._positionType == Pe.PARTICLE_TYPE_FREE &&
              (n = this.owner.globalToLocal(n, !0)),
              me.Math.pIn(o.drawPos, n),
              o.updateParticle(),
              ++this._particleIdx);
          } else {
            if (this._particleIdx !== this._particleCount) {
              const t = n[this._particleIdx];
              ((t.visible = !1),
                (t.active = !1),
                t.size(0, 0),
                (n[this._particleIdx] = n[this._particleCount - 1]),
                (n[this._particleCount - 1] = t));
            }
            (--this._particleCount,
              !this._isActive &&
                this._particleCount <= 0 &&
                Laya.timer.clear(this, this.update));
          }
        }
      } else {
        Laya.timer.clear(this, this.update);
        for (let t = 0; t < this._particles.length; ++t) {
          const e = this._particles[t];
          ((e.visible = !1), (e.active = !1), e.size(0, 0));
        }
        ((this._particleCount = 0),
          (this._isActive = !1),
          (this._elapsed = this._duration),
          (this._emitCounter = 0));
      }
    }
  };
  ((Pe.PARTICLE_DURATION_INFINITY = -1),
    (Pe.PARTICLE_START_SIZE_EQUAL_TO_END_SIZE = -1),
    (Pe.PARTICLE_START_RADIUS_EQUAL_TO_END_RADIUS = -1),
    (Pe.PARTICLE_TYPE_FREE = 0),
    (Pe.PARTICLE_TYPE_RELATIVE = 1),
    (Pe.PARTICLE_TYPE_GROUPED = 2),
    (Pe.PARTICLE_MODE_GRAVITY = 0),
    (Pe.PARTICLE_MODE_RADIUS = 1),
    c(
      [
        be({
          type: Laya.Texture,
        }),
      ],
      Pe.prototype,
      "image",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "maxParticles",
      2,
    ),
    c(
      [
        be({
          type: Boolean,
        }),
      ],
      Pe.prototype,
      "autoPlay",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "duration",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "life",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "lifeVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "emissionRate",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "angle",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "angleVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "posVarX",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "posVarY",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "startSize",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "startSizeVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "endSize",
      2,
    ),
    c(
      [
        be({
          type: Number,
        }),
      ],
      Pe.prototype,
      "endSizeVar",
      2,
    ),
    c(
      [
        be({
          type: Boolean,
        }),
      ],
      Pe.prototype,
      "isLighter",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "gravityX",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "gravityY",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "speed",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "speedVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "accelRad",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "accelRadVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "accelTan",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Gravity Setting",
        }),
      ],
      Pe.prototype,
      "accelTanVar",
      2,
    ),
    c(
      [
        be({
          type: Boolean,
          catalog: "Color",
        }),
      ],
      Pe.prototype,
      "dontTint",
      2,
    ),
    c(
      [
        be({
          type: Laya.Color,
          catalog: "Color",
        }),
      ],
      Pe.prototype,
      "startColor",
      2,
    ),
    c(
      [
        be({
          type: Laya.Color,
          defaultColor: new Laya.Color(0, 0, 0, 0),
          catalog: "Color",
        }),
      ],
      Pe.prototype,
      "startColorVar",
      2,
    ),
    c(
      [
        be({
          type: Laya.Color,
          catalog: "Color",
        }),
      ],
      Pe.prototype,
      "endColor",
      2,
    ),
    c(
      [
        be({
          type: Laya.Color,
          defaultColor: new Laya.Color(0, 0, 0, 0),
          catalog: "Color",
        }),
      ],
      Pe.prototype,
      "endColorVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Spin",
        }),
      ],
      Pe.prototype,
      "startSpin",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Spin",
        }),
      ],
      Pe.prototype,
      "startSpinVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Spin",
        }),
      ],
      Pe.prototype,
      "endSpin",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Spin",
        }),
      ],
      Pe.prototype,
      "endSpinVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          enumSource: [
            {
              name: "PARTICLE_MODE_GRAVITY",
              value: 0,
            },
            {
              name: "PARTICLE_MODE_RADIUS",
              value: 1,
            },
          ],
        }),
      ],
      Pe.prototype,
      "mode",
      2,
    ),
    c(
      [
        be({
          type: Number,
          enumSource: [
            {
              name: "PARTICLE_TYPE_RELATIVE",
              value: 1,
            },
            {
              name: "PARTICLE_TYPE_FREE",
              value: 0,
            },
          ],
        }),
      ],
      Pe.prototype,
      "type",
      2,
    ),
    c(
      [
        be({
          type: Number,
          range: [0, 1e3],
          catalog: "Radius Setting",
          hidden: "false",
        }),
      ],
      Pe.prototype,
      "startRadius",
      2,
    ),
    c(
      [
        be({
          type: Number,
          range: [0, 1e3],
          catalog: "Radius Setting",
        }),
      ],
      Pe.prototype,
      "startRadiusVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          range: [0, 1e3],
          catalog: "Radius Setting",
        }),
      ],
      Pe.prototype,
      "endRadius",
      2,
    ),
    c(
      [
        be({
          type: Number,
          range: [0, 1e3],
          catalog: "Radius Setting",
        }),
      ],
      Pe.prototype,
      "endRadiusVar",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Radius Setting",
        }),
      ],
      Pe.prototype,
      "rotatePerSecond",
      2,
    ),
    c(
      [
        be({
          type: Number,
          catalog: "Radius Setting",
        }),
      ],
      Pe.prototype,
      "rotatePerSecondVar",
      2,
    ),
    (Pe = c([fe("gZDMWpASSZ2lL8XLZpDAXg")], Pe)));
  var Ae = (function () {
      if ("undefined" == typeof ArrayBuffer)
        throw new Error(
          "Current runtime is not support binary operations. Required module and family: ArrayBuffer",
        );
      ((function () {
        let t = new Uint32Array([287454020]);
        new Uint8Array(t.buffer)[0];
      })(),
        (function () {
          let t = new Uint32Array([287454020]);
          new Uint8Array(t.buffer)[0];
        })());
      function t(t, e = 0, i = !0) {
        ((this.dataView = new DataView(t, e)),
          (this.offset = e),
          (this.littleEndian = i));
      }
      function e(t, e = 0, i = !0) {
        ((this.dataView = new DataView(t)),
          (this.offset = e),
          (this.littleEndian = i));
      }
      function i(t, e, i) {
        let s = 0;
        for (let e = 0; e < t.length; ) {
          let i = t.charCodeAt(e++);
          if (i >= 55296 && i <= 56319)
            if (e + 1 < t.length) {
              let i = t.charCodeAt(e++);
              s += i >= 56320 && i <= 57343 ? 4 : 3;
            } else s += 3;
          else i < 128 ? (s += 1) : i < 2048 ? (s += 2) : i < 65536 && (s += 3);
        }
        let a = e ? new Uint8Array(e, i, s) : new Uint8Array(s);
        for (let e = 0, i = 0; e < t.length; ) {
          let o = t.charCodeAt(e++);
          if (o >= 55296 && o <= 56319)
            if (e + 1 < t.length) {
              let s = t.charCodeAt(e++);
              if (s >= 56320 && s <= 57343) {
                var n = ((o - 55296) << 10) + (s + 9216);
                ((a[i++] = 240 | (n >> 18)),
                  (a[i++] = 128 | ((n >> 12) & 63)),
                  (a[i++] = 128 | ((n >> 6) & 63)),
                  (a[i++] = 128 | (63 & n)));
              } else ((a[i++] = 239), (a[i++] = 191), (a[i++] = 189));
            } else ((a[i++] = 239), (a[i++] = 191), (a[i++] = 189));
          else
            o < 128
              ? (a[i++] = o)
              : o < 2048
                ? ((a[i++] = 192 | (o >> 6)),
                  (a[i++] = 128 | (63 & o)),
                  (s += 2))
                : o < 65536 &&
                  ((a[i++] = 224 | (o >> 12)),
                  (a[i++] = 128 | ((o >> 6) & 63)),
                  (a[i++] = 128 | (63 & o)),
                  (s += 3));
        }
        return a;
      }
      ((t.prototype = {
        canRead: function (t) {
          return l(t)
            ? this.offset + t.getMinSize() <= this.dataView.byteLength
            : this.offset + t <= this.dataView.byteLength;
        },
        getBuffer: function () {
          return this.dataView.buffer;
        },
        getByteLength: function () {
          return this.dataView.byteLength;
        },
        readBool: function () {
          if (this.offset + 1 > this.getByteLength()) return !1;
          let t = this.dataView.getUint8(this.offset, this.littleEndian);
          return ((this.offset += 1), t > 0);
        },
        readInt8: function () {
          if (this.offset + 1 > this.getByteLength()) return 0;
          let t = this.dataView.getInt8(this.offset, this.littleEndian);
          return ((this.offset += 1), t);
        },
        readInt16: function () {
          if (this.offset + 2 > this.getByteLength()) return 0;
          let t = this.dataView.getInt16(this.offset, this.littleEndian);
          return ((this.offset += 2), t);
        },
        readInt32: function () {
          if (this.offset + 4 > this.getByteLength()) return 0;
          let t = this.dataView.getInt32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        },
        readInt64: function () {
          if (this.offset + 8 > this.getByteLength()) return 0;
          let t = this.readInt32(),
            e = this.readInt32();
          if (this.littleEndian) {
            return t + (t < 0 ? -1 : 1) * e * 2147483648;
          }
          return (e < 0 ? -1 : 1) * t * 2147483648 + e;
        },
        readUInt8: function () {
          if (this.offset + 1 > this.getByteLength()) return 0;
          let t = this.dataView.getUint8(this.offset, this.littleEndian);
          return ((this.offset += 1), t);
        },
        readUInt16: function () {
          if (this.offset + 2 > this.getByteLength()) return 0;
          let t = this.dataView.getUint16(this.offset, this.littleEndian);
          return ((this.offset += 2), t);
        },
        readUInt32: function () {
          if (this.offset + 4 > this.getByteLength()) return 0;
          let t = this.dataView.getUint32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        },
        readUInt64: function () {
          if (this.offset + 8 > this.getByteLength()) return 0;
          let t = this.readUInt32(),
            e = this.readUInt32();
          return this.littleEndian ? t + 2147483648 * e : 2147483648 * t + e;
        },
        readFloat: function () {
          if (this.offset + 4 > this.getByteLength()) return 0;
          let t = this.dataView.getFloat32(this.offset, this.littleEndian);
          return ((this.offset += 4), t);
        },
        readDouble: function () {
          if (this.offset + 8 > this.getByteLength()) return 0;
          let t = this.dataView.getFloat64(this.offset, this.littleEndian);
          return ((this.offset += 8), t);
        },
        readString: function (t) {
          let e = new Uint8Array(this.dataView.buffer, this.offset, t);
          return (
            (this.offset = this.offset + t),
            (function (t) {
              let e = 0,
                i = 0,
                a = "";
              for (let n = 0; n < t.length; ++n) {
                let o = t[n],
                  h = s[o];
                switch (
                  ((e = 0 !== i ? (63 & o) | (e << 6) : (255 >> h) & o),
                  (i = s[256 + 16 * i + h]),
                  i)
                ) {
                  case 0:
                    break;
                  case 1:
                    for (
                      a += String.fromCharCode(65533);
                      n + 1 < t.length && 128 == (192 & t[n + 1]);
                    )
                      ++n;
                    i = e = 0;
                    continue;
                  default:
                    continue;
                }
                ((a +=
                  e <= 65535
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        55232 + (e >> 10),
                        56320 + (1023 & e),
                      )),
                  (e = 0));
              }
              return a;
            })(e)
          );
        },
        readArray: function (t, e) {
          let i = Array(t);
          for (let s = 0; s < t; s++) i[s] = e.read(this);
          return i;
        },
        readInt8Array: function (t) {
          let e = new Int8Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readInt8();
          return e;
        },
        readInt16Array: function (t) {
          let e = new Int16Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readInt16();
          return e;
        },
        readInt32Array: function (t) {
          let e = new Int32Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readInt32();
          return e;
        },
        readInt64Array: function (t) {
          let e = new Float64Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readInt64();
          return e;
        },
        readUInt8Array: function (t) {
          let e = new UInt8Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readUInt8();
          return e;
        },
        readUInt16Array: function (t) {
          let e = new UInt16Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readUInt16();
          return e;
        },
        readUInt32Array: function (t) {
          let e = new UInt32Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readUInt32();
          return e;
        },
        readUInt64Array: function (t) {
          let e = new Float64Array(t);
          for (let i = 0; i < t; i++) e[i] = this.readUInt64();
          return e;
        },
      }),
        (e.prototype = {
          canWrite: function (t, e) {
            return l(t)
              ? this.offset + t.getSize(e) <= this.dataView.byteLength
              : this.offset + t <= this.dataView.byteLength;
          },
          getBuffer: function () {
            return this.dataView.buffer;
          },
          getByteLength: function () {
            return this.dataView.byteLength;
          },
          writeBool: function (t) {
            (this.dataView.setUint8(this.offset, t ? 1 : 0),
              (this.offset += 1));
          },
          writeInt8: function (t) {
            (this.dataView.setInt8(this.offset, t), (this.offset += 1));
          },
          writeInt16: function (t) {
            (this.dataView.setInt16(this.offset, t, this.littleEndian),
              (this.offset += 2));
          },
          writeInt32: function (t) {
            (this.dataView.setInt32(this.offset, t, this.littleEndian),
              (this.offset += 4));
          },
          writeInt64: function (t) {
            let e = t % 2147483648,
              i = ((t < 0 ? -t : t) / 2147483648) | 0;
            this.littleEndian
              ? (this.writeInt32(e), this.writeInt32(i))
              : (this.writeInt32(i), this.writeInt32(e));
          },
          writeUInt8: function (t) {
            (this.dataView.setUint8(this.offset, t), (this.offset += 1));
          },
          writeUInt16: function (t) {
            (this.dataView.setUint16(this.offset, t, this.littleEndian),
              (this.offset += 2));
          },
          writeUInt32: function (t) {
            (this.dataView.setUint32(this.offset, t, this.littleEndian),
              (this.offset += 4));
          },
          writeUInt64: function (t) {
            let e = t < 0 ? -t : t,
              i = e % 2147483648,
              s = (e / 2147483648) | 0;
            this.littleEndian
              ? (this.writeUInt32(i), this.writeUInt32(s))
              : (this.writeUInt32(s), this.writeUInt32(i));
          },
          writeFloat: function (t) {
            (this.dataView.setFloat32(this.offset, t, this.littleEndian),
              (this.offset += 4));
          },
          writeDouble: function (t) {
            (this.dataView.setFloat64(this.offset, t, this.littleEndian),
              (this.offset += 8));
          },
        }),
        "function" == typeof BigInt &&
          ((t.prototype.readBigInt64 = function () {
            let t = this.dataView.getBigInt64(this.offset, this.littleEndian);
            return ((this.offset += 8), t);
          }),
          (t.prototype.readBigUInt64 = function () {
            let t = this.dataView.getBigUint64(this.offset, this.littleEndian);
            return ((this.offset += 8), t);
          }),
          (e.prototype.writeBigInt64 = function (t) {
            (this.dataView.setBigInt64(this.offset, t, this.littleEndian),
              (this.offset += 8));
          }),
          (e.prototype.writeBigUInt64 = function (t) {
            (this.dataView.setBigUint64(this.offset, t, this.littleEndian),
              (this.offset += 8));
          })));
      const s = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3,
        11, 6, 6, 6, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 2, 3, 5, 8, 7, 1,
        1, 1, 4, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ];
      const a =
          "function" == typeof Symbol
            ? Symbol("schemaSymbol")
            : "_S:" + Date.now(),
        n =
          "function" == typeof Symbol
            ? Symbol("isDynamicSymbol")
            : "_SD:" + Date.now();
      if (a === n)
        throw TypeError(
          "schemaSymbol & isDynamicSymbol must be difference and unique",
        );
      function o(t, e = !0) {
        let i = {
          read: t.read || function () {},
          write: t.write || function () {},
          getSize:
            t.getSize ||
            function () {
              return 0;
            },
          getMinSize:
            t.getMinSize ||
            function () {
              return 0;
            },
          getField: t.getField,
        };
        return ((i[a] = !0), (i[n] = e), i);
      }
      function h(t) {
        if (l(t)) return t[n];
        if ("object" == typeof t) {
          for (let e in t) if (!h(t[e])) return !0;
          return !1;
        }
        throw new TypeError("invalid definition");
      }
      function l(t) {
        return Boolean(t && t[a]);
      }
      function r(t) {
        if (l(t)) return t;
        if ("object" != typeof t)
          throw new TypeError("definition must be object");
        let e = [],
          i = {},
          s = 0,
          a = [];
        for (let n in t) {
          e.push(n);
          let o = r(t[n]);
          ((i[n] = o), h(o) ? a.push(n) : (s += o.getSize()));
        }
        if (e.length <= 0) return r.Empty;
        let n,
          c = a.length > 0;
        return (
          (n = c
            ? function (t) {
                let e = 0;
                for (let s = 0, n = a.length; s < n; s++) {
                  let n = a[s];
                  e += i[n].getSize(t[n]);
                }
                return s + e;
              }
            : function () {
                return s;
              }),
          o(
            {
              getSize: n,
              getMinSize: function () {
                return s;
              },
              getField: function (t) {
                return i[t];
              },
              read: function (t) {
                let s = {};
                for (let a = 0, n = e.length; a < n; a++) {
                  let n = e[a];
                  s[n] = i[n].read(t);
                }
                return s;
              },
              write: function (t, s) {
                for (let a = 0, n = e.length; a < n; a++) {
                  let n = e[a];
                  i[n].write(t, s[n]);
                }
              },
            },
            c,
          )
        );
      }
      return (
        (r.Empty = o(
          {
            getSize: function () {
              return 0;
            },
            getMinSize: function () {
              return 0;
            },
            read: function (t) {
              return {};
            },
            write: function (t, e) {},
          },
          !1,
        )),
        (r.Bool = o(
          {
            getSize: function () {
              return 1;
            },
            getMinSize: function () {
              return 1;
            },
            read: function (t) {
              return t.readBool();
            },
            write: function (t, e) {
              t.writeBool(e);
            },
          },
          !1,
        )),
        (r.Int8 = o(
          {
            getSize: function () {
              return 1;
            },
            getMinSize: function () {
              return 1;
            },
            read: function (t) {
              return t.readInt8();
            },
            write: function (t, e) {
              t.writeInt8(e);
            },
          },
          !1,
        )),
        (r.Int16 = o(
          {
            getSize: function () {
              return 2;
            },
            getMinSize: function () {
              return 2;
            },
            read: function (t) {
              return t.readInt16();
            },
            write: function (t, e) {
              t.writeInt16(e);
            },
          },
          !1,
        )),
        (r.Int32 = o(
          {
            getSize: function () {
              return 4;
            },
            getMinSize: function () {
              return 4;
            },
            read: function (t) {
              return t.readInt32();
            },
            write: function (t, e) {
              t.writeInt32(e);
            },
          },
          !1,
        )),
        (r.Int64 = o(
          {
            getSize: function () {
              return 8;
            },
            getMinSize: function () {
              return 8;
            },
            read: function (t) {
              return t.readInt64();
            },
            write: function (t, e) {
              t.writeInt64(e);
            },
          },
          !1,
        )),
        (r.UInt8 = o(
          {
            getSize: function () {
              return 1;
            },
            getMinSize: function () {
              return 1;
            },
            read: function (t) {
              return t.readUInt8();
            },
            write: function (t, e) {
              t.writeUInt8(e);
            },
          },
          !1,
        )),
        (r.UInt16 = o(
          {
            getSize: function () {
              return 2;
            },
            getMinSize: function () {
              return 2;
            },
            read: function (t) {
              return t.readUInt16();
            },
            write: function (t, e) {
              t.writeUInt16(e);
            },
          },
          !1,
        )),
        (r.UInt32 = o(
          {
            getSize: function () {
              return 4;
            },
            getMinSize: function () {
              return 4;
            },
            read: function (t) {
              return t.readUInt32();
            },
            write: function (t, e) {
              t.writeUInt32(e);
            },
          },
          !1,
        )),
        (r.UInt64 = o(
          {
            getSize: function () {
              return 8;
            },
            getMinSize: function () {
              return 8;
            },
            read: function (t) {
              return t.readUInt64();
            },
            write: function (t, e) {
              t.writeUInt64(e);
            },
          },
          !1,
        )),
        (r.Float = o(
          {
            getSize: function () {
              return 4;
            },
            getMinSize: function () {
              return 4;
            },
            read: function (t) {
              return t.readFloat();
            },
            write: function (t, e) {
              t.writeFloat(e);
            },
          },
          !1,
        )),
        (r.Double = o(
          {
            getSize: function () {
              return 8;
            },
            getMinSize: function () {
              return 8;
            },
            read: function (t) {
              return t.readDouble();
            },
            write: function (t, e) {
              t.writeDouble(e);
            },
          },
          !1,
        )),
        "function" == typeof BigInt
          ? ((r.BigInt64 = o(
              {
                getSize: function () {
                  return 8;
                },
                getMinSize: function () {
                  return 8;
                },
                read: function (t) {
                  return t.readBigInt64();
                },
                write: function (t, e) {
                  t.writeBigInt64(e);
                },
              },
              !1,
            )),
            (r.BigUInt64 = o(
              {
                getSize: function () {
                  return 8;
                },
                getMinSize: function () {
                  return 8;
                },
                read: function (t) {
                  return t.readBigUInt64();
                },
                write: function (t, e) {
                  t.writeBigUInt64(e);
                },
              },
              !1,
            )))
          : Object.defineProperties(r, {
              BigInt64: {
                get: function () {
                  throw Error("This runtime is not support BigInt");
                },
              },
              BigUInt64: {
                get: function () {
                  throw Error("This runtime is not support BigInt");
                },
              },
            }),
        (r.Array = function (t, e) {
          if (l(t)) {
            let i,
              s = t,
              a = r(e),
              n = s.getSize();
            if (h(a))
              i = function (t) {
                let e = 0;
                for (let i = 0, s = t.length; i < s; i++) e += a.getSize(t[i]);
                return n + e;
              };
            else {
              let t = a.getSize();
              i = function (e) {
                return n + e.length * t;
              };
            }
            return o(
              {
                getSize: i,
                getMinSize: function () {
                  return n;
                },
                read: function (t) {
                  let e = s.read(t),
                    i = Array(e);
                  for (let s = 0; s < e; s++) i[s] = a.read(t);
                  return i;
                },
                write: function (t, e) {
                  s.write(t, e.length);
                  for (let i = 0, s = e.length; i < s; i++) a.write(t, e[i]);
                },
              },
              !0,
            );
          }
          if ("number" == typeof t) {
            let i,
              s,
              a = t,
              n = r(e);
            if (h(n))
              ((i = function (t) {
                let e = 0;
                for (let i = 0; i < a; i++) e += n.getSize(t[i]);
                return e;
              }),
                (s = function () {
                  return 0;
                }));
            else {
              let t = a * n.getSize();
              ((i = function () {
                return t;
              }),
                (s = function () {
                  return t;
                }));
            }
            return o(
              {
                getSize: i,
                getMinSize: s,
                read: function (t) {
                  let e = Array(a);
                  for (let i = 0; i < a; i++) e[i] = n.read(t);
                  return e;
                },
                write: function (t, e) {
                  for (let i = 0, s = Math.min(e.length, a); i < s; i++)
                    i < e.length && n.write(t, e[i]);
                },
              },
              h(n),
            );
          }
          throw TypeError("invalid sizeType: should be schema or number");
        }),
        (r.TypedArray = function (t, e) {
          let i,
            s = r(e);
          switch (s) {
            case r.Int8:
              i = Int8Array;
              break;
            case r.UInt8:
              i = Uint8Array;
              break;
            case r.Int16:
              i = Int16Array;
              break;
            case r.UInt16:
              i = Uint16Array;
              break;
            case r.Int32:
              i = Int32Array;
              break;
            case r.UInt32:
              i = Uint32Array;
              break;
            case r.Int64:
            case r.UInt64:
              i = Float64Array;
              break;
            case r.Float:
              i = Float32Array;
              break;
            case r.Double:
              i = Float64Array;
              break;
            default:
              throw TypeError("Schema.TypedArray: unsupport item type");
          }
          if (l(t)) {
            let e = t,
              a = e.getSize(),
              n = s.getSize();
            return o(
              {
                getSize: function (t) {
                  return a + t.length * n;
                },
                getMinSize: function () {
                  return a;
                },
                read: function (t) {
                  let a = e.read(t),
                    n = new i(a);
                  for (let e = 0; e < a; e++) n[e] = s.read(t);
                  return n;
                },
                write: function (t, i) {
                  e.write(t, i.length);
                  for (let e = 0, a = i.length; e < a; e++) s.write(t, i[e]);
                },
              },
              !0,
            );
          }
          if ("number" == typeof t) {
            let e = t,
              a = e * s.getSize();
            return o(
              {
                getSize: function () {
                  return a;
                },
                getMinSize: function () {
                  return a;
                },
                read: function (t) {
                  let a = new i(e);
                  for (let i = 0; i < e; i++) a[i] = s.read(t);
                  return a;
                },
                write: function (t, i) {
                  let n = t.offset + a;
                  for (let a = 0, n = Math.min(i.length, e); a < n; a++)
                    s.write(t, i[a]);
                  t.offset = n;
                },
              },
              !1,
            );
          }
          throw TypeError("invalid sizeType: should be schema or number");
        }),
        (r.Int8Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.Int8);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.Int16Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.Int16);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.Int32Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.Int32);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.Int64Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.Int64);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.UInt8Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.UInt8);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.UInt16Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.UInt16);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.UInt32Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.UInt32);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.UInt64Array = (function () {
          function t(t) {
            return r.TypedArray(t, r.UInt64);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.FloatArray = (function () {
          function t(t) {
            return r.TypedArray(t, r.Float);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.DoubleArray = (function () {
          function t(t) {
            return r.TypedArray(t, r.Double);
          }
          const e = t(r.UInt32);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.String = (function () {
          function t(t) {
            if (l(t)) {
              let e = t,
                s = e.getSize();
              return o(
                {
                  getSize: function (t) {
                    return (
                      s +
                      (function (t) {
                        let e = 0;
                        for (let i = 0; i < t.length; ) {
                          let s = t.charCodeAt(i++);
                          if (s >= 55296 && s <= 56319)
                            if (i + 1 < t.length) {
                              let s = t.charCodeAt(i++);
                              e += s >= 56320 && s <= 57343 ? 4 : 3;
                            } else e += 3;
                          else
                            s < 128
                              ? (e += 1)
                              : s < 2048
                                ? (e += 2)
                                : s < 65536 && (e += 3);
                        }
                        return e;
                      })(t)
                    );
                  },
                  getMinSize: function () {
                    return s;
                  },
                  read: function (t) {
                    let i = e.read(t);
                    return t.readString(i);
                  },
                  write: function (t, s) {
                    let a = i(s, t.getBuffer(), t.offset + e.getSize());
                    (e.write(t, a.length), (t.offset += a.length));
                  },
                },
                !0,
              );
            }
            if ("number" == typeof t)
              return o(
                {
                  getSize: function () {
                    return t;
                  },
                  getMinSize: function () {
                    return t;
                  },
                  read: function (e) {
                    return e.readString(t);
                  },
                  write: function (e, s) {
                    (i(s, e.getBuffer(), e.offset), (e.offset += t));
                  },
                },
                !1,
              );
            throw new TypeError(
              "invalid charCount: must be schema or number, given " + t,
            );
          }
          const e = t(r.UInt16);
          return (
            (t.read = e.read),
            (t.write = e.write),
            (t.getSize = e.getSize),
            (t.getMinSize = e.getMinSize),
            (t[a] = e[a]),
            (t[n] = e[n]),
            t
          );
        })()),
        (r.Option = function (t) {
          const e = r(t);
          return o(
            {
              getSize: function (t) {
                return 1 + (t ? e.getSize(t) : 0);
              },
              getMinSize: function (t) {
                return 1;
              },
              read: function (t) {
                if (t.readBool()) {
                  return e.read(t);
                }
                return null;
              },
              write: function (t, i) {
                let s = Boolean(i);
                (t.writeBool(s), s && e.write(t, i));
              },
            },
            !0,
          );
        }),
        (r.Switch = function (t) {
          if (l(t) || "function" == typeof t) return t;
          if ("object" != typeof t)
            throw new TypeError("definition must be object");
          let e = [],
            i = {},
            s = 0,
            a = [];
          for (let n in t) {
            e.push(n);
            let o = t[n],
              l = r.Switch(o);
            ((i[n] = l),
              "function" == typeof l || h(l) ? a.push(n) : (s += l.getSize()));
          }
          if (e.length <= 0) return r.Empty;
          let n = a.length > 0;
          return o(
            {
              getSize: n
                ? (t) => {
                    let e = 0;
                    for (let s = 0, n = a.length; s < n; s++) {
                      let n = a[s],
                        o = i[n];
                      (l(o) || "function" != typeof o || (o = o(t)),
                        l(o) && (e += o.getSize(t[n])));
                    }
                    return s + e;
                  }
                : (t) => s,
              getMinSize: function (t) {
                return s;
              },
              getField: function (t) {
                return i[t];
              },
              read: function (t) {
                let s = {};
                for (let a = 0, n = e.length; a < n; a++) {
                  let n = e[a],
                    o = i[n];
                  (l(o) ||
                    "function" != typeof o ||
                    (o = o(s, t.buffer || t.dataView, t.offset)),
                    l(o) && (s[n] = o.read(t)));
                }
                return s;
              },
              write: function (t, s) {
                let a = {};
                for (let n = 0, o = e.length; n < o; n++) {
                  let o = e[n],
                    h = i[o];
                  (l(h) ||
                    "function" != typeof h ||
                    (h = h(a, t.buffer || t.dataView, t.offset)),
                    l(h) && h.write(t, s[o]));
                }
                return a;
              },
            },
            n,
          );
        }),
        (r.Versioned = function (t, e) {
          let i = 0;
          for (let t in e) {
            let s = e[t];
            s.getMinSize() > i && (i = s.getMinSize());
          }
          let s = t.getMinSize() + i;
          return o({
            getSize: function (i) {
              let s = e[i.version],
                a = s ? s.getSize(i.data) : 0;
              return t.getSize(i.version) + a;
            },
            getMinSize: function () {
              return s;
            },
            read: function (i) {
              let s = t.read(i),
                a = e[s];
              if (a) {
                return {
                  version: s,
                  data: a.read(i),
                };
              }
              return {
                version: s,
              };
            },
            write: function (i, s) {
              let a = s.version;
              t.read(i, a);
              let n = e[a];
              n && n.write(i, s.data);
            },
          });
        }),
        (r.manual = o),
        (r.encode = function (t, i, s = 0, a = !0, n) {
          if (!l(t)) throw TypeError("schema is not valid!");
          if (!n) {
            let e = t.getSize(i);
            n = new ArrayBuffer(e);
          }
          let o = new e(n, s, a);
          return (t.write(o, i), n);
        }),
        (r.decode = function (e, i, s = 0, a = !0) {
          if (!l(e)) throw TypeError("schema is not valid!");
          let n = new t(
            "undefined" != typeof Buffer && Buffer.isBuffer(i) ? i.buffer : i,
            s,
            a,
          );
          return e.read(n);
        }),
        (r.isSchema = l),
        (r.isDynamicSize = h),
        r
      );
    })(),
    Ne = class {
      constructor(t, e) {
        ((this._userId = t),
          (this._seatId = e),
          (this._currentBulletKind = -1),
          (this._currentFirePower = Be.getInstance().getFirePowerAtIndex(0)),
          (this._name = ""),
          (this._coin = 0));
      }
      parseInfo(t) {
        t &&
          ((this._userId = t.userId || 0),
          (this._seatId = t.position || 0),
          (this._name = t.name),
          (this._coin = t.coin),
          (this._level = t.userLevel),
          (this._isMe = Be.getInstance().checkIsMeByUserId(this._userId)));
      }
      get userId() {
        return this._userId;
      }
      set userId(t) {
        this._userId = t;
      }
      get seatId() {
        return this._seatId;
      }
      set seatId(t) {
        this._seatId = t;
      }
      get currentBulletKind() {
        return this._currentBulletKind;
      }
      set currentBulletKind(t) {
        this._currentBulletKind = t;
      }
      get currentFirePower() {
        return this._currentFirePower;
      }
      set currentFirePower(t) {
        t <= 0 || (this._currentFirePower = t);
      }
      get name() {
        return this._name;
      }
      set name(t) {
        this._name = t;
      }
      get coin() {
        return this._coin;
      }
      set coin(t) {
        this._coin = t < 0 ? 0 : t;
      }
      get level() {
        return this._level;
      }
      set level(t) {
        this._level = t;
      }
      get isMe() {
        return this._isMe;
      }
      set isMe(t) {
        this._isMe = t;
      }
      resetPlayerData() {
        ((this._userId = null),
          (this._seatId = null),
          (this._currentBulletKind = -1),
          (this._currentFirePower = Be.getInstance().getFirePowerAtIndex(0)),
          (this._name = ""),
          (this._coin = 0),
          (this._isMe = !1),
          (this._level = 0));
      }
    },
    Be = class t {
      constructor() {
        ((this._currentBulletId = 0),
          (this._listFirePower = [10, 100, 200, 500, 1e3, 2e3, 5e3, 1e4]),
          (this._listThunderPower = [24e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6]),
          (this.sceneId = 0),
          (this._currentBulletId = 0),
          (this._players = []),
          (this._seats = []),
          (this._roomKind = 0),
          (this._roomId = 0));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      get listFirePower() {
        return this._listFirePower;
      }
      set listFirePower(t) {
        this._listFirePower = t;
      }
      get listThunderPower() {
        return this._listThunderPower;
      }
      set listThunderPower(t) {
        this._listThunderPower = t;
      }
      get currentBulletId() {
        return this._currentBulletId;
      }
      set currentBulletId(t) {
        this._currentBulletId = t;
      }
      get roomKind() {
        return this._roomKind;
      }
      set roomKind(t) {
        this._roomKind = t;
      }
      get roomId() {
        return this._roomId;
      }
      set roomId(t) {
        this._roomId = t;
      }
      getFirePowerAtIndex(t) {
        return !this._listFirePower || this._listFirePower.length < 0
          ? 0
          : t < 0
            ? this._listFirePower[0]
            : t >= this._listFirePower.length
              ? this._listFirePower[this._listFirePower.length - 1]
              : this._listFirePower[t];
      }
      getThunderPowerAtIndex(t) {
        return !this._listThunderPower || this._listThunderPower.length < 0
          ? 0
          : t < 0
            ? this._listThunderPower[0]
            : t >= this._listThunderPower.length
              ? this._listThunderPower[this._listThunderPower.length - 1]
              : this._listThunderPower[t];
      }
      parseMyPlayerData(t) {
        let e = new Ne(t.userId, t.position);
        ((e.userId = t.userId),
          (e.seatId = t.position),
          (this._players[e.userId] = e),
          e.seatId && (this._seats[e.seatId] = e),
          (this._playerMe = e));
      }
      addPlayer(t, e) {
        let i = new Ne(t, e);
        ((i.userId = t),
          (i.seatId = e),
          (this._players[t] = i),
          (this._seats[e] = i),
          i.userId == this._playerMe.userId && (this._playerMe = i));
      }
      getAllPlayers() {
        return this._seats;
      }
      removePlayerByUserId(t) {
        if (this._players[t]) {
          let e = this.getPositionByUserId(t);
          (this._players[t].resetPlayerData(),
            delete this._players[t],
            this._seats[e].resetPlayerData(),
            delete this._seats[e]);
        }
      }
      removePlayerBySeatId(t) {
        if (this._seats[t]) {
          let e = this.getPlayerByPosId(t);
          if (e) {
            let t = e.userId;
            (this._players[t].resetPlayerData(), delete this._players[t]);
          }
          (this._seats[t].resetPlayerData(), delete this._seats[t]);
        }
      }
      countPlayers() {
        return Object.keys(this._players).length || 0;
      }
      parsePlayerData(t) {
        if (t)
          if (Array.isArray(t))
            t.forEach((t) => {
              let e = this._players[t.userId];
              e && e.parseInfo(t);
            });
          else {
            let e = this._players[t.userId];
            e && e.parseInfo(t);
          }
      }
      getPlayerById(t) {
        return this._players[t];
      }
      getPositionByUserId(t) {
        return this._players[t].getSeatId();
      }
      getPlayerByPosId(t) {
        return this._seats[t];
      }
      checkIsMeBySeatId(t) {
        if (!this._playerMe) return !1;
        let e = this.getPlayerByPosId(t);
        return !!e && e.userId === this._playerMe.userId;
      }
      checkIsMeByUserId(t) {
        return !!this._playerMe && t === this._playerMe.userId;
      }
      get playerMe() {
        return this._playerMe;
      }
      set playerMe(t) {
        this._playerMe = t;
      }
      getSceneId() {
        return this.sceneId;
      }
      setSceneId(t) {
        this.sceneId = t;
      }
      getCurrentContextInfo() {
        return this.currentContext;
      }
      setCurrentContextInfo(t) {
        ((this.currentContext = t),
          t && t.sceneId && this.setSceneId(t.sceneId));
      }
      clearAll() {
        ((this._listFirePower = [10, 100, 200, 500, 1e3, 2e3, 5e3, 1e4]),
          (this._listThunderPower = [24e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6]),
          (this.sceneId = 0),
          (this._currentBulletId = 0),
          (this._players = []),
          (this._seats = []));
      }
    },
    Fe = class t {
      constructor() {
        this._isEnableFire = !1;
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      get gameMain() {
        return this._gameMain;
      }
      set gameMain(t) {
        this._gameMain = t;
      }
      set isEnableFire(t) {
        this._isEnableFire = t;
      }
      get isEnableFire() {
        return this._isEnableFire;
      }
      getWinRate(t, e) {
        if (e <= 0) return null;
        const i = t / e;
        return Math.floor(i);
      }
      shakeScene(t = 1200, e = 20, i = 15) {
        this._gameMain.shakeScene(t, e, i);
      }
      shakeScene2D(t = 400, e = 30, i = 4) {
        this._gameMain.shakeScene2D(t, e, i);
      }
      playPhoenixRebirth(t) {
        this._gameMain.playPhoenixRebirth(t);
      }
      getLayerEffect() {
        return this._gameMain.layerEffect;
      }
      getLayerEffect1() {
        return this._gameMain.layerEffect1;
      }
      getLayerEffect2() {
        return this._gameMain.layerEffect2;
      }
      getLayerBullet() {
        return this._gameMain.layerBullet;
      }
      getLayerNormalCatch() {
        return this._gameMain.layerNormalCatch;
      }
      playFishWave() {
        return this._gameMain.playEffectFishWave();
      }
    },
    { Tween: we } = Laya,
    Ee = class t {
      constructor() {
        ((this.isShakingObject = !1), (this._mapShaking = {}));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      registerButtonEvent(t, e, i = 0.95, s) {
        (null == s && (s = t),
          s.on(Laya.Event.MOUSE_DOWN, () => {
            (s._baseScaleX,
              (s._baseScaleX = s.scaleX),
              s._baseScaleY,
              (s._baseScaleY = s.scaleY),
              we.to(
                s,
                {
                  scaleX: s._baseScaleX * i,
                  scaleY: s._baseScaleY * i,
                },
                0.1,
                Laya.Ease.linearIn,
                null,
                0,
              ),
              (t._isDowned = !0));
          }),
          t.on(Laya.Event.MOUSE_UP, () => {
            t._isDowned &&
              ((t._isDowned = !1),
              we.to(
                s,
                {
                  scaleX: s._baseScaleX,
                  scaleY: s._baseScaleY,
                },
                0.1,
                Laya.Ease.linearIn,
                null,
                0,
              ),
              e && e());
          }),
          t.on(Laya.Event.MOUSE_OUT, () => {
            t._isDowned &&
              ((t._isDowned = !1),
              we.to(
                s,
                {
                  scaleX: s._baseScaleX,
                  scaleY: s._baseScaleY,
                },
                0.1,
                Laya.Ease.linearIn,
                null,
                0,
              ));
          }));
      }
      formatNumber(t, e = ".") {
        return ("" + t).replace(
          /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g,
          function (t, i, s) {
            return s || i + e;
          },
        );
      }
      formatString(t, ...e) {
        return t
          ? t.replace(/{(\d+)}/g, function (t, i) {
              return void 0 !== e[i] ? e[i] : t;
            })
          : "";
      }
      getAngleBetween2V(t, e) {
        return Math.acos(
          (t.x * e.x + t.y * e.y) /
            (Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)) *
              Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2))),
        );
      }
      getRandomNumberMinMax(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }
      shakeObject(t, e, i, s = 40, a = null) {
        if (!t || this.isShakingObject) return;
        let n = new Laya.Vector2(t.x, t.y);
        (Laya.timer.loop(s, this, () => {
          this.isShakingObject = !0;
          let e = Math.random() * i - i / 2,
            s = Math.random() * i - i / 2;
          t.pos(n.x + e, n.y + s);
        }),
          Laya.timer.once(e, this, () => {
            ((this.isShakingObject = !1),
              a && a(),
              t.pos(n.x, n.y),
              Laya.timer.clearAll(this));
          }));
      }
      shortenString(t, e, i = 3, s = "***") {
        return t
          ? e && e.textWidth > e.width
            ? s + t.substring(t.length - i, t.length)
            : t
          : "";
      }
      convertPos(t, e, i) {
        return (e.localToGlobal(i), t.globalToLocal(i), i);
      }
      convertChildPos(t, e) {
        const i = e.parent.localToGlobal(new Laya.Point(e.x, e.y));
        return (t.globalToLocal(i), i);
      }
      clamp(t, e, i) {
        return Math.min(Math.max(i, t), e);
      }
      getRandomDirection() {
        const t = new Laya.Point(0, 1);
        return me.Math.pRotateByAngle(
          t,
          new Laya.Point(0, 0),
          2 * Math.PI * Math.random(),
        );
      }
      shake2D(e, i, s, a) {
        if (this.isShakingObject) return;
        if (
          ((this.isShakingObject = !0),
          e.$_GID || (e.$_GID = Laya.Utils.getGID()),
          this._mapShaking.hasOwnProperty(e.$_GID))
        )
          return (this.stopShake(e), void this.shake2D(e, i, s, a));
        const n = new Laya.Point(e.x, e.y);
        this._mapShaking[e.$_GID] = {
          originalPos: n,
          tweenShake: null,
        };
        const o = (1 / s) * 1e3,
          h = t.getInstance().clamp(0, 12, s);
        let l = 0;
        for (let i = 0; i < h; ++i) {
          const s = t.getInstance().getRandomDirection();
          (me.Math.pMultIn(s, a),
            me.Math.pAddIn(s, n),
            i == h - 1
              ? Laya.timer.once(l, e, this.updatePos.bind(this, e, n.x, n.y, o))
              : Laya.timer.once(
                  l,
                  e,
                  this.updatePos.bind(this, e, s.x, s.y, o),
                ),
            (l += o));
        }
        Laya.timer.once(i, e, this.stopShake.bind(this, e));
      }
      updatePos(t, e, i, s) {
        if (!this._mapShaking.hasOwnProperty(t.$_GID)) return;
        const a = this._mapShaking[t.$_GID];
        (a.tweenShake && (a.tweenShake.clear(), (a.tweenShake = null)),
          (a.tweenShake = Laya.Tween.to(
            t,
            {
              x: e,
              y: i,
            },
            s,
            null,
            Laya.Handler.create(t, () => {
              a.tweenShake = null;
            }),
          )));
      }
      stopShake(t) {
        if (!this._mapShaking.hasOwnProperty(t.$_GID)) return;
        const e = this._mapShaking[t.$_GID].originalPos;
        (Laya.timer.clear(t, this.stopShake),
          Laya.timer.clear(t, this.updatePos),
          this._mapShaking[t.$_GID].tweenShake &&
            (this._mapShaking[t.$_GID].tweenShake.clear(),
            (this._mapShaking[t.$_GID].tweenShake = null)),
          t.pos(e.x, e.y),
          delete this._mapShaking[t.$_GID],
          (this.isShakingObject = !1));
      }
    };
  Ee.instance = null;
  var xe = Ee,
    ve = class t {
      constructor() {
        ((this._progress = 0),
          (this._currValue = 0),
          (this._errorNum = Math.pow(10, -7)),
          (this._thunderPower = 0),
          (this._refreshLock = !1),
          (this._timeCountdown = 180),
          (this._countdown = 0));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      set progress(t) {
        ((this._progress = t),
          this._progressBar.graphics.clear(),
          this._progressBar.graphics.drawPie(0, 0, 45, 0, 360 * t, "#FFFFFF"));
      }
      get progress() {
        return this._progress;
      }
      get powerRequire() {
        return (this._player && this._player.getCurrentThunderPower()) || 1e6;
      }
      setRootNode(t, e) {
        ((this._barNode = t),
          (this._player = e),
          (this._refreshLock = !1),
          this._initUI());
      }
      getProgress() {
        return this._currValue;
      }
      isFull() {
        return this._compare(this.getProgress(), 1);
      }
      setThunderPower(t) {
        t >= 0 && (this._thunderPower = t);
      }
      getThunderPower() {
        return this._thunderPower;
      }
      updateByBet() {
        if (!this._refreshLock) {
          let t = Math.min(this._calcProgressByBet(), 1);
          this._setProgress(t);
        }
      }
      updateByServer(t) {
        if ((this.setThunderPower(t), !this._refreshLock)) {
          let t = Math.min(this._calcProgressByBet(), 1);
          this._setProgress(t);
        }
      }
      shoot() {
        return this._thunderPower >= this.powerRequire;
      }
      cleanProgress() {
        let t = this,
          e = function () {
            let i = 0.001 * Laya.timer.delta,
              s = xe.getInstance().clamp(0, 1, t._currValue - i);
            (t._setProgress(Math.pow(s, 1.1)),
              t._currValue <= 0 &&
                (Laya.timer.clear(t, e), (t._refreshLock = !1)));
          };
        (this.setThunderPower(0),
          (this._refreshLock = !0),
          Laya.timer.frameLoop(1, this, e));
      }
      _initUI() {
        ((this._progressBar = this._barNode
          .getChildByName("mask")
          .getChildByName("mask")),
          (this._progressBarAnim = this._barNode.getComponent(Laya.Animator2D)),
          (this._addEfNode = this._barNode.getChildByName("slider")),
          (this._efNode1 = this._barNode
            .getChildByName("energy_bar_new_01")
            .getChildByName("dot_01")
            .getChildByName("thunder_yellow_hit01")),
          (this._fingerNode = this._barNode.getChildByName("finger")),
          (this._fingerAnimator = this._fingerNode.getComponent(
            Laya.Animator2D,
          )),
          (this._countdownText =
            this._barNode.getChildByName("countdown_text")),
          this._playIdle(),
          this.updateByBet());
      }
      _playIdle() {
        ((this._efNode1.visible = !1),
          (this._efNode1.active = !1),
          this._progressBarAnim.play("lightning_ball_idle", 0, 0));
      }
      _playFull() {
        ((this._efNode1.visible = !0),
          (this._efNode1.active = !0),
          this._progressBarAnim.play("lightning_ball_full", 0, 0));
      }
      _setProgress(t) {
        ((this._currValue = xe.getInstance().clamp(0, 1, t)),
          this._refreshUI());
      }
      _refreshUI() {
        let t = this._compare(this.progress, 0)
          ? 0
          : this._compare(this.progress, 1)
            ? 1
            : (this.progress - 0.01) / 0.98;
        this._thunderPower >= this.powerRequire
          ? ((this.progress = 1),
            (this._addEfNode.rotation = 0),
            this._efNode1.visible || this._playFull(),
            this._fingerNode.visible ||
              ((this._fingerNode.visible = !0),
              this._fingerAnimator.play("retain_finger", 0, 0),
              (this._countdown = this._timeCountdown),
              Laya.timer.frameLoop(
                1,
                this,
                this._update,
                [0.001 * Laya.timer.delta],
                !0,
              )))
          : ((this.progress = this._compare(this._currValue, 0)
              ? 0
              : 0.98 * this._currValue + 0.01),
            (this._addEfNode.rotation = 360 * this.progress),
            this._efNode1.visible && this._playIdle(),
            this._fingerNode.visible &&
              ((this._fingerNode.visible = !1),
              this._fingerAnimator.stop(),
              (this._countdownText.visible = !1),
              Laya.timer.clear(this, this._update)),
            (t != this._currValue || this._currValue >= 1) &&
              ((this._addEfNode.alpha = 150 / 255),
              Laya.Tween.to(
                this._addEfNode,
                {
                  alpha: 0,
                },
                500,
                null,
                null,
                0,
                !0,
              )));
      }
      _calcProgressByBet() {
        let t = this._thunderPower / this.powerRequire;
        return 0.9032210234 * Math.atan(2 * t);
      }
      _compare(t, e) {
        return Math.abs(t - e) < this._errorNum;
      }
      _update(t) {
        if (
          (this._countdown > 0 &&
            this._countdown <= 60.9 &&
            ((this._countdownText.visible = !0),
            (this._countdownText.text = (0 | this._countdown).toString())),
          this._countdown <= 0)
        ) {
          Laya.timer.clear(this, this._update);
          Fe.getInstance().gameMain.onButtonLightningBallTouches();
        }
        this._countdown -= t;
      }
    },
    Re = {};
  ((Re.MatchInfo = Ae({
    listBet: Ae.Array(Ae.UInt8, {
      betCoin: Ae.UInt32,
    }),
    sceneId: Ae.UInt8,
    runningTime: Ae.UInt32,
    contextId: Ae.UInt8,
    contextGroups: Ae.Array(Ae.UInt8, {
      contextName: Ae.String,
    }),
    listThunderPower: Ae.Array(Ae.UInt8, {
      thunderPower: Ae.UInt64,
    }),
    userThunderPower: Ae.UInt64,
  })),
    (Re.FireBulletRequest = Ae({
      bulletKind: Ae.UInt8,
      bulletId: Ae.UInt32,
      bulletMultiple: Ae.UInt32,
      targetId: Ae.UInt32,
      angle: Ae.Float,
      isSpeedUp: Ae.Bool,
      isLaser: Ae.Bool,
    })),
    (Re.FireBulletResponse = Ae({
      seatId: Ae.UInt8,
      bulletKind: Ae.UInt8,
      bulletId: Ae.UInt32,
      bulletMultiple: Ae.UInt32,
      targetId: Ae.UInt32,
      angle: Ae.Float,
      isSpeedUp: Ae.Bool,
      isLaser: Ae.Bool,
    })),
    (Re.CatchFishRequest = Ae({
      bulletId: Ae.UInt32,
      bulletKind: Ae.UInt8,
      bulletMultiple: Ae.UInt32,
      isSpeedUp: Ae.Bool,
      listFish: Ae.Array(
        Ae.UInt8,
        Ae({
          fishId: Ae.UInt32,
          fishKind: Ae.UInt8,
        }),
      ),
    })),
    (Re.CatchFishResponse = Ae({
      seatId: Ae.UInt8,
      userCoin: Ae.UInt64,
      bulletKind: Ae.UInt8,
      bulletMultiple: Ae.UInt32,
      isSpeedUp: Ae.Bool,
      thunderPower: Ae.UInt32,
      eagleClawRateWin: Ae.UInt16,
      eagleClawStar: Ae.UInt8,
      listFishHit: Ae.Array(
        Ae.UInt8,
        Ae({
          fishId: Ae.UInt32,
        }),
      ),
      listFishDead: Ae.Array(Ae.UInt8, {
        fishId: Ae.UInt32,
        fishKind: Ae.UInt8,
        isFishBonusGame: Ae.Bool,
        score: Ae.UInt32,
        isRemove: Ae.Bool,
      }),
    })),
    (Re.ReleaseFish = Ae({
      fishKind: Ae.UInt8,
      quantity: Ae.UInt8,
      pathId: Ae.UInt16,
    })),
    (Re.ReleaseContext = Ae({
      sceneId: Ae.UInt8,
      runningTime: Ae.UInt32,
      contextId: Ae.UInt8,
    })),
    (Re.ServerNotify = Ae({
      code: Ae.UInt16,
      message: Ae.String,
      userCoin: Ae.UInt32,
    })),
    (Re.ActiveBulletFreeRequest = Ae({
      bulletKind: Ae.UInt8,
      bulletMultiple: Ae.UInt32,
    })),
    (Re.ActiveBulletFreeResponse = Ae({
      seatId: Ae.UInt8,
      bulletMultiple: Ae.UInt32,
      activeCode: Ae.Int8,
    })),
    (Re.SwitchRoomRequest = Ae({
      roomKind: Ae.UInt8,
    })),
    (Re.SwitchRoomResponse = Ae({
      result: Ae.UInt8,
    })));
  var Me = class {
      constructor() {
        ((this.mainController = null),
          (this.dataFireBulletNormal = {}),
          (this.databulletHitFish = {}),
          (this.dataActiveBulletFree = {}),
          (this.dataSwitchRoom = {}));
      }
      setMainController(t) {
        this.mainController = t;
      }
      handleGameMessage(t) {
        switch (t.assistantId) {
          case 0:
            this.handleReceiveMatchInfo(t.content);
            break;
          case 1:
            this.handleFireBullet(t.content);
            break;
          case 4:
            this.handleCatchFish(t.content);
            break;
          case 3:
            this.handleReceiveContextInfo(t.content);
            break;
          case 9:
            this.handleReceiveServerNotify(t.content);
            break;
          case 16:
            this.handleReceiveActiveBulletFree(t.content);
            break;
          case 14:
            this.handleReceiveSwitchRoom(t.content);
        }
      }
      handleReceiveMatchInfo(t) {
        let e = Ae.decode(Re.MatchInfo, t);
        ((Be.getInstance().listFirePower = e.listBet.map((t) => t.betCoin)),
          (Be.getInstance().listThunderPower = e.listThunderPower.map(
            (t) => t.thunderPower,
          )),
          Be.getInstance().setCurrentContextInfo(e),
          ve.getInstance().setThunderPower(e.userThunderPower),
          Laya.stage.event("game.match_info", e));
      }
      handleFireBullet(t) {
        let e = Ae.decode(Re.FireBulletResponse, t);
        Laya.stage.event("game.fire_bullet", e);
      }
      handleCatchFish(t) {
        let e = Ae.decode(Re.CatchFishResponse, t);
        Laya.stage.event("game.catch_fish", e);
      }
      handleReceiveContextInfo(t) {
        let e = Ae.decode(Re.ReleaseContext, t);
        (Be.getInstance().setCurrentContextInfo(e),
          Laya.stage.event("game.release_context", e));
      }
      handleReceiveServerNotify(t) {
        let e = Ae.decode(Re.ServerNotify, t);
        Laya.stage.event("game.server_notify", e);
      }
      handleReceiveActiveBulletFree(t) {
        let e = Ae.decode(Re.ActiveBulletFreeResponse, t);
        Laya.stage.event("game.active_bullet_free", e);
      }
      handleReceiveSwitchRoom(t) {
        let e = Ae.decode(Re.SwitchRoomResponse, t);
        Laya.stage.event("game.switch_room", e);
      }
      sendFireBullet(t, e, i, s, a = 0, n = !1, o = !1) {
        ((this.dataFireBulletNormal.bulletKind = s),
          (this.dataFireBulletNormal.bulletId = t),
          (this.dataFireBulletNormal.bulletMultiple = e),
          (this.dataFireBulletNormal.targetId = i),
          (this.dataFireBulletNormal.angle = a),
          (this.dataFireBulletNormal.isSpeedUp = n),
          (this.dataFireBulletNormal.isLaser = o),
          this.mainController.sendMessage(
            3,
            1,
            Re.FireBulletRequest,
            this.dataFireBulletNormal,
          ));
      }
      sendBulletHitFish(t, e, i, s, a = !1) {
        ((this.databulletHitFish.bulletId = t),
          (this.databulletHitFish.bulletKind = e),
          (this.databulletHitFish.bulletMultiple = i),
          (this.databulletHitFish.listFish = s),
          (this.databulletHitFish.isSpeedUp = a),
          this.mainController.sendMessage(
            3,
            4,
            Re.CatchFishRequest,
            this.databulletHitFish,
          ));
      }
      sendRequestContextInfo() {
        this.mainController.sendMessageEmpty(3, 3);
      }
      sendActiveBulletFree(t, e) {
        ((this.dataActiveBulletFree.bulletKind = t),
          (this.dataActiveBulletFree.bulletMultiple = e),
          this.mainController.sendMessage(
            3,
            16,
            Re.ActiveBulletFreeRequest,
            this.dataActiveBulletFree,
          ));
      }
      sendRequestSwitchRoom(t) {
        ((this.dataSwitchRoom.roomKind = t),
          this.mainController.sendMessage(
            3,
            14,
            Re.SwitchRoomRequest,
            this.dataSwitchRoom,
          ));
      }
    },
    ke = {};
  ((ke.UserJoinRoom = Ae({
    userId: Ae.UInt32,
    position: Ae.UInt8,
    coin: Ae.UInt64,
    name: Ae.String,
    userLevel: Ae.UInt16,
    userVip: Ae.UInt8,
  })),
    (ke.TableInfoResponse = Ae({
      playerInfo: Ae.Array(Ae.UInt8, {
        userId: Ae.Int32,
        position: Ae.Int8,
        coin: Ae.UInt64,
        name: Ae.String,
        userLevel: Ae.UInt16,
        userVip: Ae.UInt8,
      }),
    })),
    (ke.UserLeaveGameResponse = Ae({
      seatId: Ae.UInt8,
    })),
    (ke.UserJoinLobbyResponse = Ae({
      code: Ae.UInt16,
      message: Ae.String,
      sceneId: Ae.UInt8,
      roomKind: Ae.UInt8,
      roomId: Ae.UInt8,
    })));
  var Oe = class {
      constructor() {
        this.mainController = null;
      }
      setMainController(t) {
        this.mainController = t;
      }
      handleLobbyMessage(t) {
        switch (t.assistantId) {
          case 5:
            this.handleTableInfo(t.content);
            break;
          case 3:
            this.handlePlayerJoinRoom(t.content);
            break;
          case 6:
            this.handleOtherUserLeave(t.content);
            break;
          case 1:
            this.handleLobbyResponse(t.content);
        }
      }
      handleTableInfo(t) {
        let e = Ae.decode(ke.TableInfoResponse, t);
        (this.parseUserData(e), Laya.stage.event("lobby.table_info", e));
      }
      parseUserData(t) {
        let e = t.playerInfo ? t.playerInfo : t;
        (e.length > 0
          ? e.forEach((t) => {
              Be.getInstance().addPlayer(t.userId, t.position);
            })
          : Be.getInstance().addPlayer(e.userId, e.position),
          Be.getInstance().parsePlayerData(e));
      }
      handlePlayerJoinRoom(t) {
        let e = Ae.decode(ke.UserJoinRoom, t);
        (this.parseUserData(e), Laya.stage.event("lobby.user_join_room", e));
      }
      handleOtherUserLeave(t) {
        let e = Ae.decode(ke.UserLeaveGameResponse, t);
        (Be.getInstance().removePlayerBySeatId(e.seatId),
          Laya.stage.event("lobby.other_leave", e));
      }
      handleLobbyResponse(t) {
        let e = Ae.decode(ke.UserJoinLobbyResponse, t);
        Laya.stage.event("lobby.join_lobby_response", e);
      }
    },
    De = {};
  De.Header = Ae({
    mainId: Ae.UInt8,
    assistantId: Ae.UInt8,
  });
  var ze = {};
  ((ze.LoginLocalRequest = Ae({
    userId: Ae.UInt32,
    password: Ae.String,
    roomId: Ae.UInt16,
    roomKind: Ae.UInt8,
    lang: Ae.String(2),
    verGame: Ae.UInt8,
  })),
    (ze.LoginRequest = Ae({
      sign: Ae.String,
      roomKind: Ae.UInt8,
      lang: Ae.String(2),
      verGame: Ae.UInt8,
    })),
    (ze.LoginResponse = Ae({
      code: Ae.UInt16,
      message: Ae.String,
      serverIP: Ae.String,
      serverPortRS: Ae.UInt32,
      serverPortWS: Ae.UInt32,
      serverPortWSS: Ae.UInt32,
    })));
  var He = class {
      constructor() {
        this.mainController = null;
      }
      setMainController(t) {
        this.mainController = t;
      }
      handleLoginMessage(t) {
        if (3 === t.assistantId) this.handleLoginResponse(t.content);
      }
      handleLoginResponse(t) {
        let e = Ae.decode(ze.LoginResponse, t);
        if (p && 12 === e.code)
          Xe.getInstance().connect(
            e && e.serverIP ? e.serverIP : "",
            e && e.serverPortWSS ? e && e.serverPortWSS : "",
          );
        else {
          1 === e.code ? this.handleLoginSuccess(e) : this.handleLoginFailed(e);
        }
      }
      handleLoginSuccess(t) {
        let e = this.mainController.getLoginInfo(),
          i = new Ne(e.userId, e.position);
        (Be.getInstance().parseMyPlayerData(i),
          Laya.stage.event("system.login_success", t));
      }
      handleLoginFailed(t) {
        Laya.stage.event("system.login_failed", t);
      }
      loginLocal(t, e, i, s, a, n) {
        let o = {
          userId: t,
          password: e,
          roomId: i,
          roomKind: s,
          lang: a,
          verGame: n,
        };
        this.mainController.sendMessage(1, 1, ze.LoginLocalRequest, o);
      }
      loginOnline(t, e, i, s) {
        let a = {
          sign: t,
          roomKind: e,
          lang: i,
          verGame: s,
        };
        this.mainController.sendMessage(1, 2, ze.LoginRequest, a);
      }
    },
    Ue = class t {
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      constructor() {
        ((this.socket = null), (this.loginInfo = null), this.initControllers());
      }
      initControllers() {
        ((this.loginController = new He()),
          this.loginController.setMainController(this),
          (this.lobbyController = new Oe()),
          this.lobbyController.setMainController(this),
          (this.gameController = new Me()),
          this.gameController.setMainController(this));
      }
      setLoginInfo(t) {
        this.loginInfo = t;
      }
      getLoginInfo() {
        return this.loginInfo;
      }
      connect(t, e) {
        (this.initSocket(), (this.serverHost = t), (this.serverPort = e));
        let i = !1;
        (p && (i = !0), this.socket.connect(t, e, i));
      }
      initSocket() {
        (this.socket ? this.closeSocket() : (this.socket = new Laya.Socket()),
          this.socket.on(Laya.Event.OPEN, this, this.socketOpenHandler),
          this.socket.on(Laya.Event.MESSAGE, this, this.socketReceiveHandler),
          this.socket.on(Laya.Event.CLOSE, this, this.socketCloseHandler),
          this.socket.on(Laya.Event.ERROR, this, this.socketErrorHandler));
      }
      closeSocket() {
        this.isConnected() && this.socket.close();
      }
      isConnected() {
        return this.socket && this.socket.connected;
      }
      send(t) {
        return (this.socket.send(t), !0);
      }
      sendMessage(t, e, i, s) {
        if (!this.isConnected()) return !1;
        let a = {
            mainId: t,
            assistantId: e,
          },
          n = De.Header.getSize(),
          o = n + i.getSize(s),
          h = new ArrayBuffer(o);
        return (
          Ae.encode(De.Header, a, 0, !0, h),
          Ae.encode(i, s, n, !0, h),
          this.send(h)
        );
      }
      sendMessageEmpty(t, e) {
        if (!this.isConnected()) return !1;
        let i = {
            mainId: t,
            assistantId: e,
          },
          s = Ae.encode(De.Header, i);
        return this.send(s);
      }
      socketOpenHandler(t) {
        p ? this.sendLogin(this.loginInfo) : this.sendLoginLocal();
      }
      socketReceiveHandler(t) {
        let e = Ae.decode(De.Header, t),
          i = t.slice(De.Header.getSize()),
          s = e.mainId,
          a = {
            mainId: s,
            assistantId: e.assistantId,
            content: i,
          };
        switch (s) {
          case 1:
            this.loginController.handleLoginMessage(a);
            break;
          case 2:
            this.lobbyController.handleLobbyMessage(a);
            break;
          case 3:
            this.gameController.handleGameMessage(a);
        }
      }
      socketCloseHandler(t) {
        Laya.stage.event("system.socket_disconnected", t);
      }
      socketErrorHandler(t) {
        Laya.stage.event("system.socket_error", t);
      }
      sendLoginLocal() {
        let t = this.loginInfo.userId,
          e = this.loginInfo.userPass,
          i = d,
          s = u;
        this.loginController.loginLocal(t, e, 58, i, "en", s);
      }
      sendLogin(t) {
        let e = "en";
        if (p) {
          let t = CoreHelper.getLanguageCode();
          t && "" != t && (e = t);
        }
        this.loginController.loginOnline(t.flashVar, d, e, u);
      }
      sendFireBullet(t, e, i, s, a = 0, n = !1, o = !1) {
        this.gameController.sendFireBullet(t, e, i, s, a, n, o);
      }
      sendBulletHitFish(t, e, i, s, a = !1) {
        this.gameController.sendBulletHitFish(t, e, i, s, a);
      }
      sendRequestContextInfo() {
        this.gameController.sendRequestContextInfo();
      }
      sendActiveBulletFree(t, e) {
        this.gameController.sendActiveBulletFree(t, e);
      }
      sendRequestSwitchRoom(t) {
        this.gameController.sendRequestSwitchRoom(t);
      }
    };
  Ue.instance = null;
  var Xe = Ue,
    Ge = class t {
      constructor() {
        this.prefabFishes = {};
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      getPrefabFish(t) {
        let e = xe.getInstance().formatString(he.FISH, t);
        return Laya.loader.getRes(e);
      }
      setPrefabFish(t, e) {
        this.prefabFishes[t] = e;
      }
    };
  Ge.instance = null;
  var Ke = Ge,
    We = class t {
      constructor() {
        ((this.data = {}), (this.langType = 5));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      setLoadDoneDataCallback(t) {
        this.loadDoneDataCallback = t;
      }
      init(t) {
        this.setLanguageType(t);
        let e = "data/language/" + this.getLanguageName() + ".json";
        Laya.loader.load(
          e,
          Laya.Handler.create(this, (t) => {
            if (t && t.data) {
              let e = t.data;
              (this.setLanguageData(e),
                this.loadDoneDataCallback && this.loadDoneDataCallback());
            }
          }),
        );
      }
      parseType(t) {
        let e = 5;
        switch (t) {
          case "vi":
            e = 0;
            break;
          case "km":
            e = 1;
            break;
          case "ph":
            e = 7;
            break;
          case "my":
            e = 6;
            break;
          case "zh":
            e = 2;
            break;
          case "lo":
            e = 8;
        }
        return e;
      }
      getLanguageName() {
        let t = "en";
        switch (this.langType) {
          case 1:
            t = "km";
            break;
          case 6:
            t = "my";
            break;
          case 7:
            t = "ph";
            break;
          case 2:
            t = "zh";
            break;
          default:
            t = "en";
        }
        return t;
      }
      setLanguageData(t) {
        Object.assign(this.data, t || {});
      }
      getText(t) {
        let e = this.data[t];
        return e || t;
      }
      setLanguageType(t) {
        this.langType = t;
      }
      localizeText(t, e) {
        let i = this.getText(e);
        ((t.strokeColor = "#00000000"),
          (t.stroke = 10),
          (t.leading = 2),
          (6 != this.langType && 1 != this.langType) || (t.leading = 18),
          (t.text = i));
      }
      localizeImageText(t, e) {
        let i = xe.getInstance().formatString(e, this.getLanguageName());
        t && (t instanceof Laya.Image ? (t.skin = i) : t.loadImage(i));
      }
    };
  We.instance = null;
  var Ye = We,
    Ve = class t {
      constructor() {
        ((this.contextData = {}),
          (this.subData = {}),
          (this.groupData = {}),
          (this.pathData = {}),
          this.onFileLoaded(_e.DATA_FILE));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      setPathData(t) {
        for (let e = 0; e < t.length; ++e) this.pathData[t[e].id] = t[e];
      }
      getPathData() {
        return this.pathData;
      }
      setGroupData(t) {
        for (let e = 0; e < t.length; ++e) this.groupData[t[e].id] = t[e];
      }
      getGroupById(t) {
        return this.groupData[t];
      }
      getPathFishById(t) {
        return this.pathData[t];
      }
      setSubData(t) {
        for (let e = 0; e < t.length; ++e) this.subData[t[e].id] = t[e];
      }
      getSubDataById(t) {
        return this.subData[t];
      }
      setContextData(t) {
        this.contextData = t;
      }
      onFileLoaded(t) {
        let e = Laya.loader.getRes(t);
        e &&
          (this.setContextData(e.data.main),
          this.setSubData(e.data.random),
          this.setGroupData(e.data.group),
          this.setPathData(e.data.path),
          this.processPathData());
      }
      processPathData() {
        this.getPathData() && this.calculateOffsetPathData();
      }
      calculateOffsetPathData() {
        for (let t in this.pathData)
          if (this.pathData[t].point && this.pathData[t].point.length > 0)
            for (let e = 0; e < this.pathData[t].point.length; e++)
              ((this.pathData[t].point[e].x += this.pathData[t].point[e].x / S),
                (this.pathData[t].point[e].y +=
                  this.pathData[t].point[e].y / L),
                (this.pathData[t].point[e].delay = this.pathData[t].point[e]
                  .delay
                  ? this.pathData[t].point[e].delay
                  : 0),
                (this.pathData[t].point[e].isSpline =
                  !!this.pathData[t].point[e].isSpline &&
                  this.pathData[t].point[e].isSpline),
                (this.pathData[t].point[e].x += 0.5 * S),
                (this.pathData[t].point[e].y += 0.5 * L),
                (this.pathData[t].point[e].x = S - this.pathData[t].point[e].x),
                (this.pathData[t].point[e].y = this.pathData[t].point[e].y));
      }
    };
  Ve.instance = null;
  var Je = Ve,
    je = class t {
      constructor() {
        ((this._scaleRate = new Laya.Point(1, 1)),
          (Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT),
          (Laya.stage.width = S),
          (Laya.stage.height = L),
          Laya.stage.scale(1, 1));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      get scaleRate() {
        return this._scaleRate;
      }
      set scaleRate(t) {
        this._scaleRate = t;
      }
      scaleRatio() {
        const t = Laya.Browser.clientWidth,
          e = Laya.Browser.clientHeight,
          i = t / S,
          s = e / L;
        return Math.min(i, s);
      }
      debounce(t, e) {
        let i;
        return (...s) => {
          (i && clearTimeout(i),
            (i = window.setTimeout(() => {
              ((i = null), t(...s));
            }, e)));
        };
      }
      resizeMainGame(t, e = 1) {
        if (!t) return;
        t.scale(e, e);
        const i = Laya.Browser.clientWidth,
          s = Laya.Browser.clientHeight,
          a = S,
          n = L;
        if (
          ((i < a || Laya.stage.width < a) &&
            ((Laya.stage.width = S), (Laya.stage.scaleX = 1)),
          (s < n || Laya.stage.height < n) &&
            ((Laya.stage.height = L), (Laya.stage.scaleY = 1)),
          i < S)
        ) {
          const s = e - i / S;
          t.scaleX = e + s;
        } else {
          const i = e - S / Laya.stage.width;
          t.scaleX = e + i;
        }
        if (s < L) {
          const i = e - s / L;
          t.scaleY = e + i;
        } else {
          const i = e - L / Laya.stage.height;
          t.scaleY = e + i;
        }
      }
      resizeUI(t, e, i, s, a, n) {
        if (!t || !e) return;
        let o = Laya.Browser.clientWidth,
          h = Laya.Browser.clientHeight;
        const l = S,
          r = L;
        if (h > o) {
          let t = o;
          ((o = h), (h = t));
        }
        let c = (o * Laya.Browser.pixelRatio) / l,
          _ = (h * Laya.Browser.pixelRatio) / r,
          p = 1,
          g = 1;
        (c > _ ? ((p = _ / c), (g = 1)) : _ > c && ((p = 1), (g = c / _)),
          this.scaleRate.setTo(p, g),
          e.forEach((t) => {
            ((t.scaleX = p), (t.scaleY = g));
          }),
          i &&
            i.forEach((t) => {
              ((t.scaleX = p),
                (t.scaleY = g),
                (t.width = l / p),
                (t.height = r / g));
              let e = t.content;
              e && ((e.x = (t.width - l) / 2), (e.y = (t.height - r) / 2));
            }),
          s &&
            s.forEach((t) => {
              ((t.scaleX = p), (t.scaleY = g));
              let e = l / p,
                i = r / g,
                s = e / t.width,
                a = i / t.height;
              (t._children.forEach((t) => {
                t && ((t.x = t.x * s), (t.y = t.y * a));
              }),
                (t.width = e),
                (t.height = i));
            }),
          (a.scaleX = p),
          (a.scaleY = g),
          (n.scaleX = p),
          (n.scaleY = g),
          t.forEach((t) => {
            t.updateSpecialPoint();
          }));
      }
      setScaleRate() {
        let t = Laya.Browser.clientWidth,
          e = Laya.Browser.clientHeight;
        const i = S,
          s = L;
        if (e > t) {
          let i = t;
          ((t = e), (e = i));
        }
        let a = (t * Laya.Browser.pixelRatio) / i,
          n = (e * Laya.Browser.pixelRatio) / s,
          o = 1,
          h = 1;
        (a > n ? ((o = n / a), (h = 1)) : n > a && ((o = 1), (h = a / n)),
          this.scaleRate.setTo(o, h));
      }
    };
  je.instance = null;
  var Ze = je,
    qe = class t {
      constructor() {}
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      loadTemplet(t) {
        return _(this, null, function* () {
          return t
            ? Laya.loader.getRes(t)
              ? void 0
              : Laya.loader.load(t, Laya.Loader.SPINE).then((e) => {
                  e && Laya.loader.cacheRes(t, e);
                })
            : null;
        });
      }
      loadPrefab(t) {
        return _(this, null, function* () {
          return t
            ? Laya.loader.getRes(t)
              ? void 0
              : Laya.loader.load(t).then((e) => {
                  e && Laya.loader.cacheRes(t, e);
                })
            : null;
        });
      }
      loadMaterial(t) {
        return _(this, null, function* () {
          return t
            ? Laya.loader.getRes(t)
              ? void 0
              : Laya.loader.load(t).then((e) => {
                  e && Laya.loader.cacheRes(t, e);
                })
            : null;
        });
      }
    };
  qe.instance = null;
  var Qe = qe,
    $e = class extends Laya.Sprite {
      constructor() {
        (super(), this.size(0, 0));
        const t = Laya.loader.getRes(he.BULLET_JELLYFISH_EXPLODE).create();
        (this.addChild(t),
          (t.visible = !0),
          (this.visible = !1),
          (this.active = !1),
          (this.animator2D = t.getComponent(Laya.Animator2D)));
      }
      play(t) {
        ((this.visible = !0),
          (this.active = !0),
          this.animator2D.gotoAndStopByFrame("effect_jellyfish_explode", 0, 0),
          this.animator2D.play("effect_jellyfish_explode"),
          Laya.timer.once(583.33, this, () => {
            t && t();
          }));
      }
    },
    ti = class extends Laya.Sprite {
      constructor() {
        (super(), this.size(0, 0));
        const t = Laya.loader.getRes(he.BULLET_LASER_EXPLODE).create();
        (this.addChild(t),
          (t.visible = !0),
          (this.visible = !1),
          (this.active = !1),
          (this.particle = t.getChildByName("particle_system")),
          (this.particleScript = this.particle.getComponent(Laya.Script)),
          (this.animator2D = t.getComponent(Laya.Animator2D)));
      }
      play(t) {
        (this.animator2D.gotoAndStopByFrame("effect_laser_bomb", 0, 0),
          this.animator2D.play("effect_laser_bomb"),
          this.particleScript.resetSystem(),
          (this.visible = !0),
          (this.active = !0),
          Laya.timer.once(200, this, () => {
            this.particleScript.stopSystem();
          }),
          Laya.timer.once(666, this, () => {
            t && t();
          }));
      }
      clear() {
        (this.animator2D.stop(), this.particleScript.stopSystem());
      }
    },
    ei = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this.anchorX = 0.5),
          (this.anchorY = 0.5),
          (this.zOrder = 1),
          this.size(0, 0),
          (this._node = Laya.loader.getRes(he.BULLET_GRAB).create()),
          this._node.pos(0, 5),
          this.addChild(this._node),
          (this._animator = this._node.getComponent(Laya.Animator2D)),
          (this._hit2 = this._node.getChildByName("hit_2")),
          (this._animatorHit = this._hit2.getComponent(Laya.Animator2D)),
          (this._hit = this._node.getChildByName("hit")),
          (this._grab = this._node.getChildByName("grab")),
          (this._particleSystemChip = this._hit.getChildByName(
            "particle_system_chip",
          )),
          (this._particleSystemComing = this._hit.getChildByName(
            "particle_system_coming",
          )),
          (this._particleSystemRibbon = this._hit.getChildByName(
            "particle_system_ribbon",
          )),
          (this._particleSystemBubble =
            this._hit.getChildByName("particle_bubble")),
          (this._particleSystemChip1 = this._grab.getChildByName(
            "particle_system_chip_1",
          )),
          (this._particleSystemChip2 = this._grab.getChildByName(
            "particle_system_chip_2",
          )),
          (this._particleSystemChipScript =
            this._particleSystemChip.getComponent(Laya.Script)),
          (this._particleSystemComingScript =
            this._particleSystemComing.getComponent(Laya.Script)),
          (this._particleSystemRibbonScript =
            this._particleSystemRibbon.getComponent(Laya.Script)),
          (this._particleSystemBubbleScript =
            this._particleSystemBubble.getComponent(Laya.Script)),
          (this._particleSystemChip1Script =
            this._particleSystemChip1.getComponent(Laya.Script)),
          (this._particleSystemChip2Script =
            this._particleSystemChip2.getComponent(Laya.Script)),
          this._particleSystemChipScript.stopSystem(),
          this._particleSystemComingScript.stopSystem(),
          this._particleSystemRibbonScript.stopSystem(),
          this._particleSystemBubbleScript.stopSystem(),
          this._particleSystemChip1Script.stopSystem(),
          this._particleSystemChip2Script.stopSystem());
      }
      playIdleOpen() {
        (Laya.timer.clear(this, this.playGrabbing),
          this._particleSystemChip1Script.stopSystem(),
          this._particleSystemChip2Script.stopSystem(),
          this._animator.gotoAndStopByFrame("idle_open", 0, 0),
          this._animator.play("idle_open"));
      }
      playIdleClose() {
        (Laya.timer.clear(this, this.playGrabbing),
          this._particleSystemChip1Script.stopSystem(),
          this._particleSystemChip2Script.stopSystem(),
          this._animator.gotoAndStopByFrame("idle_close", 0, 0),
          this._animator.play("idle_close"));
      }
      playHit() {
        (this._animator.gotoAndStopByFrame("hit", 0, 0),
          this._animator.play("hit"),
          this._animatorHit.gotoAndStopByFrame("hit", 0, 0),
          this._animatorHit.play("hit"),
          this._particleSystemChipScript.resetSystem(),
          this._particleSystemBubbleScript.resetSystem(),
          Laya.timer.once(133, this, () => {
            (this._particleSystemChipScript.stopSystem(),
              this._particleSystemBubbleScript.stopSystem());
          }),
          Laya.timer.once(1333, this, this.playGrabbing));
      }
      playGrabbing() {
        (this._animator.gotoAndStopByFrame("grabbing", 0, 0),
          this._animator.play("grabbing"),
          this._particleSystemChip1Script.resetSystem(),
          this._particleSystemChip2Script.resetSystem());
      }
      playCatch() {
        (Laya.timer.clear(this, this.playGrabbing),
          this._particleSystemChip1Script.stopSystem(),
          this._particleSystemChip2Script.stopSystem(),
          this._animator.gotoAndStopByFrame("catch", 0, 0),
          this._animator.play("catch"),
          this._particleSystemComingScript.resetSystem(),
          this._particleSystemRibbonScript.resetSystem(),
          this._particleSystemBubbleScript.resetSystem(),
          this._particleSystemChip2Script.resetSystem(),
          Laya.timer.once(1500, this, () => {
            (this._particleSystemComingScript.stopSystem(),
              this._particleSystemRibbonScript.stopSystem(),
              this._particleSystemBubbleScript.stopSystem(),
              this._particleSystemChip2Script.stopSystem());
          }));
      }
    },
    ii = class {
      constructor() {
        ((this._animExplode = Laya.loader.getRes(he.BULLET_EXPLODE).create()),
          (this._animatorExplode = this._animExplode
            .getChildByName("bullet_explode")
            .getComponent(Laya.Animator2D)),
          (this._explode = this._animExplode.getChildByName("bullet_explode")),
          (this._animExplode.visible = !1),
          (this._animExplode.active = !1));
      }
      setContainer(t) {
        t.addChild(this._animExplode);
      }
      setSkin(t) {
        this._explode.skin = t;
      }
      setAlpha(t) {
        this._animExplode.alpha = t;
      }
      play(t, e, i) {
        (this._animExplode.pos(e.x, e.y),
          (this._animExplode.visible = !0),
          (this._animExplode.active = !0),
          (this._animExplode.alpha = t ? P : A),
          this._animatorExplode.gotoAndStopByFrame("bullet_explode", 0, 0),
          this._animatorExplode.play("bullet_explode"),
          Laya.timer.once(367, this, () => {
            (Ni.getInstance().recoverEffBulletExplode(this), i && i());
          }));
      }
      reset() {
        ((this._animExplode.visible = !1),
          (this._animExplode.active = !1),
          (this._animExplode.alpha = 1));
      }
    },
    si = class t {
      constructor() {
        ((this._isActiveSound = !0),
          (this._oldActiveSound = !0),
          (this.listSoundNode = []));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      setScene(t) {
        this.scene = t;
      }
      get oldActiveSound() {
        return this._oldActiveSound;
      }
      get isActiveSound() {
        return this._isActiveSound;
      }
      set isActiveSound(t) {
        this._isActiveSound = t;
      }
      getSoundNode(t, e = !1) {
        for (let e = 0; e < this.listSoundNode.length; e++)
          if (
            this.listSoundNode[e] &&
            this.listSoundNode[e].name == "sound_" + t
          )
            return this.listSoundNode[e];
        return this.createSoundNode(t, e);
      }
      createSoundNode(t, e = !1) {
        if (!this.scene) return;
        const i = new Laya.SoundNode();
        return (
          (i.name = "sound_" + t),
          (i.source = t),
          (i.loop = e ? Number.MAX_SAFE_INTEGER : 1),
          (i.autoPlay = !0),
          (i.active = !1),
          this.scene.addChild(i),
          this.listSoundNode.push(i),
          i
        );
      }
      playBGM(t) {
        const e = this.getSoundNode(t, !0);
        ((e.active = !0), e.play(Number.MAX_SAFE_INTEGER));
      }
      playSFX(t) {
        if (this._isActiveSound) {
          const e = this.getSoundNode(t, !1);
          ((e.active = !0),
            e.play(
              1,
              Laya.Handler.create(this, () => {
                e.active = !1;
              }),
            ));
        }
      }
      playSFXOnce(t) {
        if (this._isActiveSound) {
          const e = this.getSoundNode(t, !1);
          e.active ||
            ((e.active = !0),
            e.play(
              1,
              Laya.Handler.create(this, () => {
                e.active = !1;
              }),
            ));
        }
      }
      playSFXLoop(t) {
        if (this._isActiveSound) {
          const e = this.getSoundNode(t, !1);
          ((e.active = !0), e.play(Number.MAX_SAFE_INTEGER));
        }
      }
      stopSFX(t) {
        for (let e = 0; e < this.listSoundNode.length; e++)
          this.listSoundNode[e] &&
            this.listSoundNode[e].name == "sound_" + t &&
            (this.listSoundNode[e].stop(), (this.listSoundNode[e].active = !1));
      }
      changeBGM(t) {
        const e = this.getSoundNode(pe.BGM, !0);
        ((e.source = t),
          e.stop(),
          this._isActiveSound &&
            ((e.active = !0), e.play(Number.MAX_SAFE_INTEGER)));
      }
      playSFXShoot(t) {
        if (this._isActiveSound) {
          const e = this.createSoundNode(t, !1);
          ((e.active = !0),
            e.play(
              1,
              Laya.Handler.create(this, () => {
                ((e.active = !1), e.removeSelf());
                const t = this.listSoundNode.indexOf(e);
                -1 !== t && this.listSoundNode.splice(t, 1);
              }),
            ));
        }
      }
      stopSound() {
        for (let t = 0; t < this.listSoundNode.length; t++)
          ((this.listSoundNode[t].active = !1), this.listSoundNode[t].stop());
      }
      getBGM() {
        return this.getSoundNode(pe.BGM, !0);
      }
      activeSound() {
        for (let t = 0; t < this.listSoundNode.length; t++)
          this.listSoundNode[t] &&
            this.listSoundNode[t].loop > 1 &&
            (this.listSoundNode[t].active = !0);
      }
      clearAllInScene() {
        let t;
        ((this._oldActiveSound = this._isActiveSound),
          (this._isActiveSound = !1));
        for (let e = 0; e < this.listSoundNode.length; e++)
          ((t = this.listSoundNode[e]),
            (t.active = !1),
            t.stop(),
            t.removeSelf());
        ((this.listSoundNode.length = 0), (this.scene = null));
      }
    };
  si.instance = null;
  var ai = si,
    ni = class t {
      constructor() {
        ((this._id = -1),
          (this._isInit = !1),
          (this.isMe = !1),
          (this.hitByHarpoon = !1),
          (this.isPlayingEffect = !1),
          (this.isFirstRoulette = !1),
          (this.startPoint = new Laya.Point()),
          (this.endPoint = new Laya.Point()),
          (this.tipNode = []),
          (this.spineAnims = []),
          (this.currStatus = 0),
          (this.currNum = 0),
          (this.maxNum = 5),
          (this.numAngle = [1, 36, 72, 108, 144, 180, 216, 252, 288, 324]),
          (this.list = []),
          (this.listGold = []),
          (this._lastTimeUpdate = 0));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      set seatId(t) {
        this._seatId = t;
      }
      get seatId() {
        return this._seatId;
      }
      init(e) {
        if (!this.roulette) {
          ((this.roulette = Laya.loader.getRes(he.BOSS_ROULETTE).create()),
            (this.roulette.anchorX = 0.5),
            (this.roulette.anchorY = 0.5),
            (this.roulette.visible = !1),
            (this.roulette.active = !1),
            (this.rouletteAnimator = this.roulette.getComponent(
              Laya.Animator2D,
            )));
          const t = new Laya.SpineSkeleton(),
            e = new Laya.SpineSkeleton();
          ((t.templet = Laya.loader.getRes(le.SPINE_WHEEL_JSON)),
            (e.templet = Laya.loader.getRes(le.SPINE_WHEEL_FRONT_JSON)),
            this.roulette.addChild(t),
            this.roulette.addChild(e),
            this.roulette.setChildIndex(t, 0),
            this.spineAnims.push(t),
            this.spineAnims.push(e));
          let i = this.roulette
              .getChildByName("root")
              .getChildByName("new_node"),
            s = i.getChildByName("tip_node");
          ((this.particleScript = i
            .getChildByName("particle_system")
            .getComponent(Laya.Script)),
            (this.tipNode[0] = s.getChildByName("start_text")),
            (this.tipNode[1] = s.getChildByName("stop_text")),
            (this.tipNum = s.getChildByName("num")),
            (this.tipNodeFinger = s.getChildByName("finger")),
            (this.tipNodeFingerAnimator = this.tipNodeFinger.getComponent(
              Laya.Animator2D,
            )),
            (this.rotateNode = i.getChildByName("rotate_node_golden")),
            (this.rotateNodeAnimator = this.rotateNode.getComponent(
              Laya.Animator2D,
            )),
            (this.headNodeAnimator = i
              .getChildByName("roulette_select_ani")
              .getComponent(Laya.Animator2D)),
            (this.efNodeAnimator = i
              .getChildByName("roulette_big_ef")
              .getComponent(Laya.Animator2D)),
            (this.iconPoint = this.roulette.getChildByName("icon_point")),
            (this.touchLayer = i.getChildByName("touch_layer")),
            (this.touchLayer.mouseEnabled = !1),
            xe
              .getInstance()
              .registerButtonEvent(this.touchLayer, this.click.bind(this)));
          let a = function (t, e, i, s) {
            t.push({
              odds: e,
              localPos: s,
              stealChance: i,
            });
          };
          if (
            (a(this.list, 360, 0.75, [4, 9]),
            a(this.list, 100, 0.3, [2, 7]),
            a(this.list, 80, 0.2, [1, 6]),
            a(this.list, 60, 0, [0, 3, 5, 8]),
            a(this.listGold, 600, 0.66, [4, 9]),
            a(this.listGold, 480, 0.33, [1, 3, 5, 7]),
            a(this.listGold, 360, 0, [0, 2, 6, 8]),
            "en" != Ye.getInstance().getLanguageName())
          ) {
            let t = i
              .getChildByName("title_golden")
              .getChildByName("octopoda_roulette_2g");
            (Ye.getInstance().localizeImageText(
              this.tipNode[0],
              oe.TXT_ROULETTE_START,
            ),
              Ye.getInstance().localizeImageText(
                this.tipNode[1],
                oe.TXT_ROULETTE_STOP,
              ),
              Ye.getInstance().localizeImageText(t, oe.TXT_BONUS_WHEEL));
          }
        }
        e &&
          this.roulette &&
          (e.addChild(this.roulette),
          (this.roulette.zOrder = t.MOVE_ZORDER),
          (this._isInit = !0));
      }
      isPlaying() {
        return this.isPlayingEffect;
      }
      reset() {
        if (this.roulette) {
          let e = 2 == this.seatId || 3 == this.seatId ? 180 : 0;
          ((this.roulette.rotation = e),
            (this.tipNode[0].rotation = e),
            (this.tipNode[1].rotation = e),
            (this.tipNum.rotation = e),
            (this.tipNodeFinger.rotation = e),
            (this.roulette.visible = !0),
            (this.roulette.active = !0),
            (this.roulette.alpha = this.isMe ? P : A),
            (this.roulette.scaleX = 0.5),
            (this.roulette.scaleY = 0.5),
            (this.roulette.zOrder =
              this.isMe && this.isFirstRoulette
                ? t.SPIN_ZORDER
                : t.MOVE_ZORDER),
            this.roulette.pos(this.startPoint.x, this.startPoint.y),
            this.spineAnims.forEach((t) => {
              ((t.visible = !1), (t.active = !1));
            }),
            this.spineAnims[0].on(
              Laya.Event.STOPPED,
              this,
              this.playSpineAnimState,
            ));
        }
      }
      finish() {
        "function" == typeof this.finishRouletteCallBack
          ? this.finishRouletteCallBack()
          : this.clear();
      }
      actionMove() {
        let t = this.isMe ? 1 : 0.8;
        (Laya.Tween.to(
          this.roulette,
          {
            x: this.endPoint.x,
            y: this.endPoint.y,
            scaleX: t,
            scaleY: t,
          },
          300,
          Laya.Ease.cubicOut,
        ),
          Laya.timer.once(300, this, () => {
            this.finishMove();
          }));
      }
      finishMove() {
        this.isFirstRoulette
          ? this.playRoulette()
          : this.finishMoveCallback && this.finishMoveCallback(this);
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this._tweenRotation = null),
          this.spineAnims.forEach((t) => {
            ((t.visible = !1), (t.active = !1), t.offAll(), t.stop());
          }),
          this.particleScript.stopSystem(),
          (this.isPlayingEffect = !1),
          (this.roulette.active = !1),
          (this.roulette.visible = !1),
          (this.tipNode[0].visible = !1),
          (this.tipNodeFinger.visible = !1),
          (this.tipNum.visible = !1),
          (this.winRate = null),
          (this.isFirstRoulette = !1),
          this.rouletteAnimator.stop(),
          this.roulette.removeSelf());
      }
      showRoulette(t, e, i = 0, s, a, n, o) {
        this.isPlayingEffect ||
          ((this.isPlayingEffect = !0),
          this.startPoint.copy(t),
          this.endPoint.copy(e),
          (this.isMe = s),
          (this.winRate = a),
          (this.isFirstRoulette = o),
          (this.hitByHarpoon = n),
          this.reset(),
          this.playAnim(this.rouletteAnimator, "roulette_gold_in"),
          Laya.timer.once(200, this, () => {
            (this.particleScript.resetSystem(),
              Laya.timer.once(250, this, () => {
                this.particleScript.stopSystem();
              }));
          }),
          Laya.timer.once(i, this, this.actionMove));
      }
      playRoulette() {
        (this.isMe
          ? ((this.tipNode[0].visible = !0),
            (this.tipNodeFinger.visible = !0),
            (this.tipNum.visible = !0),
            (this.touchLayer.mouseEnabled = !0),
            (this.currNum = this.maxNum),
            this.playAnim(this.tipNodeFingerAnimator, "tip_finger"))
          : ((this.tipNode[0].visible = !1),
            (this.tipNodeFinger.visible = !1),
            (this.tipNum.visible = !1),
            (this.touchLayer.mouseEnabled = !1),
            (this.currNum = 0.1)),
          (this.tipNode[1].visible = !1),
          this.playIdleGold(),
          this.setStatus(9),
          this.spineAnims.forEach((t) => {
            ((t.visible = !0), (t.active = !0));
          }),
          this.playSpineAnim("in"),
          (this._lastTimeUpdate = Date.now()),
          Laya.timer.frameLoop(10, this, this.update));
      }
      playIdleGold() {
        ((this._tweenRotation = Laya.Tween.to(
          this.rotateNode,
          {
            rotation: this.rotateNode.rotation + 60,
          },
          1e4,
          null,
          Laya.Handler.create(this, () => {
            this._tweenRotation = null;
          }),
        )),
          this.isMe && ai.getInstance().changeBGM(pe.BGM_BONUS_WHEEL));
      }
      click() {
        switch (this.currStatus) {
          case 7:
            (this.playStopGold(), Laya.timer.clear(this, this.update));
            break;
          case 9:
            this.playRunGold();
        }
      }
      hideAndPause() {
        ((this.roulette.visible = !1), (this.roulette.active = !1));
      }
      showAndResume(e, i, s) {
        (this.endPoint.copy(e),
          (this.isMe = i),
          (this.winRate = s),
          this.reset(),
          (this.roulette.scaleX = this.isMe ? 1 : 0.8),
          (this.roulette.scaleY = this.isMe ? 1 : 0.8),
          this.roulette.pos(this.endPoint.x, this.endPoint.y),
          (this.roulette.zOrder = this.isMe ? t.SPIN_ZORDER : t.MOVE_ZORDER),
          this.playRoulette());
      }
      update() {
        let t = Date.now(),
          e = 0.001 * (t - this._lastTimeUpdate);
        ((this._lastTimeUpdate = t),
          this.currNum > 0 && (this.currNum -= e),
          this.currNum <= 0 && ((this.currNum = 0), this.click()),
          (this.tipNum.text = this.currNum.toFixed(0)));
      }
      playAnim(t, e, i = 0) {
        t.play(e, i, 0);
      }
      stopAnim(t, e, i = 0) {
        t.gotoAndStopByFrame(e, i, 0);
      }
      playSpineAnim(t, e = !1) {
        this.spineAnims.forEach((i) => {
          i.play(t, e);
        });
      }
      playSpineAnimState() {
        switch (this.currStatus) {
          case 0:
            this.playSpineAnim("idle");
            break;
          case 7:
          case 8:
            this.playSpineAnim("rotating");
        }
      }
      setStatus(t) {
        this.currStatus = t;
      }
      playRunGold() {
        let t = this;
        ((this.tipNum.visible = !1),
          Laya.timer.once(600, this, function () {
            ((t.tipNode[0].visible = !1),
              (t.tipNodeFinger.visible = !1),
              (t.tipNode[1].visible = !!t.isMe),
              (t.currNum = t.isMe ? t.maxNum : 0.1),
              t._tweenRotation &&
                (t._tweenRotation.clear(), (t._tweenRotation = null)),
              t.playAnim(t.rotateNodeAnimator, "roulette_loop"),
              t.playAnim(t.rouletteAnimator, "roulette_gold_run"),
              t.playAnim(t.headNodeAnimator, "roulette_select_run"),
              t.setStatus(7),
              t.isMe && ai.getInstance().playSFXLoop(pe.BONUS_WHEEL_ROTATE_1));
          }),
          this.playSpineAnim("rotate_Goldwheel"),
          this.setStatus(11));
      }
      playStopGold() {
        let t = this,
          e = this.getIndex(2),
          i = !1,
          s = 360 - this.numAngle[e];
        ((this.tipNode[0].visible = !1),
          (this.tipNode[1].visible = !1),
          (this.tipNodeFinger.visible = !1),
          (this.touchLayer.mouseEnabled = !1),
          this.checkSteal(2, e) && ((i = !0), (s += 36)),
          (s += this.rotateNode.rotation < s + 180 ? 720 : 360),
          this.rotateNodeAnimator.stop());
        let a = s;
        (Laya.Tween.to(
          this.rotateNode,
          {
            rotation: a,
          },
          2e3,
          Laya.Ease.sineOut,
        ),
          Laya.timer.once(2e3, this, function () {
            i
              ? (t.stopAnim(t.rouletteAnimator, "roulette_gold_run"),
                t.playSpineAnim("steal"),
                t.setStatus(10),
                Laya.timer.once(700, t, function () {
                  t.playStealGold();
                }))
              : (t.playResultGold(), t.setStatus(6));
          }),
          this.playAnim(this.headNodeAnimator, "roulette_select_start"),
          this.playSpineAnim("rotating"),
          this.setStatus(8),
          this.isMe &&
            (ai.getInstance().stopSFX(pe.BONUS_WHEEL_ROTATE_1),
            ai.getInstance().playSFX(pe.BONUS_WHEEL_NEAR_STOP)));
      }
      playStealGold() {
        let t = this;
        (Laya.Tween.to(
          this.rotateNode,
          {
            rotation: this.rotateNode.rotation - 36,
          },
          1e3,
          Laya.Ease.sineOut,
        ),
          Laya.timer.once(1e3, this, function () {
            (t.playResultGold(), t.setStatus(6));
          }),
          this.isMe && ai.getInstance().playSFX(pe.BONUS_WHEEL_ROTATE_2));
      }
      playResultGold() {
        (Laya.timer.once(133, this, () => {
          this.particleScript.resetSystem();
        }),
          this.playAnim(this.rouletteAnimator, "roulette_gold_get"),
          this.playAnim(this.efNodeAnimator, "big_ef_action"),
          this.playAnim(this.headNodeAnimator, "roulette_select_get"),
          Laya.timer.once(3333, this, this.finish),
          this.isMe && ai.getInstance().playSFX(pe.BONUS_WHEEL_STOP));
      }
      getIndex(t) {
        for (
          let e = 1 == t ? this.list : this.listGold, i = 0;
          i < e.length;
          ++i
        )
          if (this.winRate >= e[i].odds) {
            let t = this.iRand(0, e[i].localPos.length - 1);
            return e[i].localPos[t];
          }
        return 0;
      }
      checkSteal(t, e) {
        let i = 1 == t ? this.list : this.listGold,
          s = 0 == e ? this.numAngle.length - 1 : e - 1,
          a = 0,
          n = 0,
          o = 0;
        for (n = 0; n < i.length; ++n)
          if (
            (this.winRate === i[n].odds && (a = i[n].stealChance),
            this.winRate > i[n].odds && Math.random() < a)
          )
            for (o = 0; o < i[n].localPos.length; ++o)
              if (s == i[n].localPos[o]) return !0;
        return !1;
      }
      iRand(t, e) {
        if (t > e) {
          let i = t;
          ((t = e), (e = i));
        }
        return Math.floor(t) + Math.floor(Math.random() * (e - t + 1));
      }
      getIconPoint() {
        return this.roulette.localToGlobal(
          new Laya.Point(this.iconPoint.x, this.iconPoint.y),
        );
      }
      getIconNode() {
        return this.iconPoint;
      }
    };
  ((ni.MOVE_ZORDER = 6), (ni.SPIN_ZORDER = 7));
  var oi = ni,
    hi = class t {
      constructor() {
        ((this._id = -1),
          (this._isInit = !1),
          (this.isPlayingEffect = !1),
          (this.currNum = 0));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      init(e, i) {
        (this.rouletteIcon ||
          ((this.rouletteIcon = Laya.loader
            .getRes(he.BOSS_ROULETTE_ICON)
            .create()),
          (this.rouletteIcon.anchorX = 0.5),
          (this.rouletteIcon.anchorY = 0.5),
          (this.rouletteIcon.visible = !1),
          (this.rouletteIcon.active = !1),
          (this.textNum = this.rouletteIcon
            .getChildByName("root")
            .getChildByName("money_num")),
          (this.animator = this.rouletteIcon.getComponent(Laya.Animator2D))),
          e &&
            (e.addChild(this.rouletteIcon),
            (this.rouletteIcon.zOrder = t.DEFAULT_ZORDER)),
          (this.rouletteIcon.rotation = 2 === i || 3 === i ? 180 : 0));
      }
      isPlaying() {
        return this.isPlayingEffect;
      }
      reset() {
        this.rouletteIcon &&
          ((this.rouletteIcon.visible = !0), (this.rouletteIcon.active = !0));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this.isPlayingEffect = !1),
          (this.rouletteIcon.active = !1),
          (this.rouletteIcon.visible = !1),
          this.animator.stop(),
          this.rouletteIcon.removeSelf());
      }
      showRouletteIcon(t, e) {
        this.isPlayingEffect ||
          ((this.isPlayingEffect = !0),
          (this.isMe = t),
          (this.currNum = e),
          (this.textNum.text = this.currNum + ""),
          this.reset(),
          this.playAnim("roulette_icon_in"));
      }
      updateNum(t) {
        (this.playAnim("roulette_icon_get"),
          (this.currNum += t),
          (this.textNum.text = this.currNum + ""));
      }
      showEnd(t) {
        (this.playAnim("roulette_icon_end"),
          Laya.timer.once(125, this, () => {
            (t && t(), Ni.getInstance().recoverRouletteIcon(this));
          }));
      }
      playAnim(t, e = 0) {
        this.animator.play(t, e, 0);
      }
      updatePos(t, e) {
        this.rouletteIcon.pos(t, e);
      }
      updateIsMe(t, e) {
        e
          ? ((this.rouletteIcon.alpha = t ? P : A),
            (this.rouletteIcon.scaleX = t ? 1 : 0.8),
            (this.rouletteIcon.scaleY = t ? 1 : 0.8))
          : ((this.rouletteIcon.alpha = P),
            (this.rouletteIcon.scaleX = 1),
            (this.rouletteIcon.scaleY = 1));
      }
    };
  hi.DEFAULT_ZORDER = 5;
  var li = hi,
    ri = class t {
      constructor() {
        ((this._id = -1), (this._isInit = !1), (this.isPlayingEffect = !1));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      init(e) {
        (this.rouletteIn ||
          ((this.rouletteIn = Laya.loader.getRes(he.BOSS_ROULETTE_IN).create()),
          (this.rouletteIn.anchorX = 0.5),
          (this.rouletteIn.anchorY = 0.5),
          (this.rouletteIn.visible = !1),
          (this.rouletteIn.active = !1),
          (this.animator = this.rouletteIn.getComponent(Laya.Animator2D))),
          e &&
            (e.addChild(this.rouletteIn),
            (this.rouletteIn.zOrder = t.DEFAULT_ZORDER),
            (this._isInit = !0)));
      }
      isPlaying() {
        return this.isPlayingEffect;
      }
      reset() {
        this.rouletteIn &&
          ((this.rouletteIn.visible = !0),
          (this.rouletteIn.active = !0),
          (this.rouletteIn.alpha = this.isMe ? P : A),
          (this.rouletteIn.scaleX = this.isMe ? 0.5 : 0.4),
          (this.rouletteIn.scaleY = this.isMe ? 0.5 : 0.4));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this.isPlayingEffect = !1),
          (this.rouletteIn.active = !1),
          (this.rouletteIn.visible = !1),
          this.animator.stop(),
          (this.finishCallBack = null),
          this.rouletteIn.removeSelf());
      }
      showRouletteIn(e, i, s) {
        this.isPlayingEffect ||
          ((this.isPlayingEffect = !0),
          (this.startPoint = e),
          (this.isMe = i),
          (this.finishCallBack = s),
          this.reset(),
          this.rouletteIn.pos(this.startPoint.x, this.startPoint.y),
          this.animator.play("big_ef_action_in", 0, 0),
          Laya.timer.once(t.TIME_ANIM, this, () => {
            (this.finishCallBack && this.finishCallBack(),
              Ni.getInstance().recoverRouletteIn(this));
          }));
      }
    };
  ((ri.DEFAULT_ZORDER = 5), (ri.TIME_ANIM = 670));
  var ci = ri,
    _i = class {
      static randomWithRate(...t) {
        for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
        if (e.length <= 0) return null;
        for (var s = 0, a = 0, n = e; a < n.length; a++)
          (r = n[a])[0] <= 0 || (s += r[0]);
        for (var o = Math.random() * s, h = 0, l = e; h < l.length; h++) {
          var r;
          if (!((r = l[h])[0] <= 0) && (o -= r[0]) < 0) return r[1];
        }
        return e[0][1];
      }
      static randomItem(t) {
        return t[Math.floor(Math.random() * t.length)];
      }
      static splitmix32(t) {
        return function () {
          let e = (t = ((t |= 0) + 2654435769) | 0) ^ (t >>> 16);
          return (
            (e = Math.imul(e, 569420461)),
            (e ^= e >>> 15),
            (e = Math.imul(e, 1935289751)),
            ((e ^= e >>> 15) >>> 0) / 4294967296
          );
        };
      }
      static iRand(t, e) {
        if (t > e) {
          let i = t;
          ((t = e), (e = i));
        }
        return Math.floor(t) + Math.floor(Math.random() * (e - t + 1));
      }
    },
    pi = class t {
      constructor() {
        ((this._id = -1),
          (this._isInit = !1),
          (this.isPlayingEffect = !1),
          (this.startPoint = new Laya.Point()),
          (this.endPoint = new Laya.Point()),
          (this.delayFly = 0),
          (this.wheels = [[], [], []]),
          (this.wheelSpeeds = [0, 0, 0]),
          (this.wheelStates = ["stop", "stop", "stop"]),
          (this.wheelTargets = [null, null, null]),
          (this._currStoppingIndex = 0),
          (this.timeCount = 0));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      set seatId(t) {
        this._seatId = t;
      }
      get seatId() {
        return this._seatId;
      }
      init(e) {
        if (!this.slotGame) {
          ((this.slotGame = Laya.loader.getRes(he.BOSS_SLOT_GAME).create()),
            (this.slotGame.anchorX = 0.5),
            (this.slotGame.anchorY = 0.5),
            (this.slotGame.visible = !1),
            (this.slotGame.active = !1),
            (this.slotAnimator = this.slotGame.getComponent(Laya.Animator2D)),
            (this.tipNode = this.slotGame.getChildByName("tip_node")),
            (this.tipNodeNum = this.tipNode.getChildByName("num")),
            (this.tipNodeFinger = this.tipNode.getChildByName("finger")),
            (this.tipNodeFingerAnimator = this.tipNodeFinger.getComponent(
              Laya.Animator2D,
            )),
            (this.timesNode = this.slotGame.getChildByName("times")),
            (this.timesNodeLabel = this.timesNode.getChildByName("label")),
            (this.timesAccumulate = this.timesNode
              .getChildByName("accumulate")
              .getComponent(Laya.Script)),
            (this.timesEfNode = this.slotGame.getChildByName("times_ef_node")));
          let t = this.slotGame.getChildByName("bar");
          ((this.coinFall1 = t
            .getChildByName("coin_fall")
            .getComponent(Laya.Script)),
            (this.coinFall2 = t
              .getChildByName("coin_fall_2")
              .getComponent(Laya.Script)),
            (this.coinFall3 = this.slotGame
              .getChildByName("coin_fall_3")
              .getComponent(Laya.Script)),
            (this.slotBtn = t.getChildByName("btn")),
            (this.slotBtn.mouseEnabled = !1),
            (this.nearWinNode = t.getChildByName("nearwin_ef_node")),
            (this.nearWin1 = this.nearWinNode.getChildByName("slot_ef02_01")),
            (this.nearWin2 = this.nearWinNode.getChildByName("slot_ef02_02")));
          let e = t.getChildByName("mask").getChildByName("wheel1"),
            i = t.getChildByName("mask").getChildByName("wheel2"),
            s = t.getChildByName("mask").getChildByName("wheel3");
          (this.wheels[0].push(s.getChildAt(0)),
            this.wheels[0].push(s.getChildAt(1)),
            this.wheels[0].push(s.getChildAt(2)),
            this.wheels[1].push(i.getChildAt(0)),
            this.wheels[1].push(i.getChildAt(1)),
            this.wheels[1].push(i.getChildAt(2)),
            this.wheels[2].push(e.getChildAt(0)),
            this.wheels[2].push(e.getChildAt(1)),
            this.wheels[2].push(e.getChildAt(2)),
            xe
              .getInstance()
              .registerButtonEvent(
                this.slotBtn,
                this.finishCountdown.bind(this),
              ));
          let a = this.tipNode.getChildByName("stop_text");
          "en" != Ye.getInstance().getLanguageName() &&
            Ye.getInstance().localizeImageText(a, oe.TXT_ROULETTE_STOP);
        }
        e &&
          (e.addChild(this.slotGame),
          (this.slotGame.zOrder = t.MOVE_ZORDER),
          (this._isInit = !0));
      }
      isPlaying() {
        return this.isPlayingEffect;
      }
      reset() {
        if (this.slotGame) {
          ((this.slotGame.visible = !0),
            (this.slotGame.active = !0),
            (this.slotGame.alpha = this.isMe ? P : A),
            (this.slotGame.scaleX = this.isMe ? 1 : 0.7),
            (this.slotGame.scaleY = this.isMe ? 1 : 0.7));
          let t,
            e,
            i,
            s,
            a = Math.floor(this.winRate % 10),
            n = Math.floor((this.winRate % 100) / 10),
            o = Math.floor(this.winRate / 100);
          this.wheels.forEach((h) => {
            ((t = [a, n, o]),
              (s = []),
              h.forEach((a) => {
                ((e = _i.iRand(0, t.length - 1)),
                  (i = t.splice(e, 1)[0]),
                  s.indexOf(i) >= 0 &&
                    ((s.indexOf(1) < 0 && (i = 1)) ||
                      (s.indexOf(3) < 0 && (i = 3)) ||
                      (s.indexOf(8) < 0 && (i = 8))),
                  s.push(i),
                  (a.text = i + ""));
              }));
          });
        }
      }
      finish() {
        (this.clear(),
          "function" == typeof this.finishSlotCallBack &&
            this.finishSlotCallBack(this.winRate));
      }
      actionMove() {
        (Laya.Tween.to(
          this.slotGame,
          {
            x: this.endPoint.x,
            y: this.endPoint.y,
          },
          500,
          Laya.Ease.cubicOut,
        ),
          Laya.timer.once(500, this.slotGame, () => {
            this.finishMove();
          }));
      }
      finishMove() {
        this.isFirstSlot
          ? this.playSlot()
          : this.finishMoveCallback && this.finishMoveCallback(this);
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this.isPlayingEffect = !1),
          (this.slotGame.active = !1),
          (this.slotGame.visible = !1),
          (this.tipNode.visible = !1),
          (this.tipNode.active = !1),
          (this.kind = null),
          (this.winRate = null),
          (this.animationInfo = null),
          (this.timeCount = 0),
          (this.isFirstSlot = !1),
          (this.isStopping = !1),
          (this.isSpinning = !1),
          (this._currStoppingIndex = 0),
          this.slotAnimator.stop(),
          this.nearWin1.stop(),
          this.nearWin2.stop(),
          (this.nearWinNode.visible = !1),
          (this.nearWinNode.active = !1),
          this.timesAccumulate.stopSystem(),
          this.coinFall1.stopSystem(),
          this.coinFall2.stopSystem(),
          this.coinFall3.stopSystem(),
          (this.timesAccumulate.owner.visible = !1),
          (this.coinFall1.owner.visible = !1),
          (this.coinFall2.owner.visible = !1),
          (this.coinFall3.owner.visible = !1),
          (this.timesAccumulate.owner.active = !1),
          (this.coinFall1.owner.active = !1),
          (this.coinFall2.owner.active = !1),
          (this.coinFall3.owner.active = !1),
          (this.wheelSpeeds = [0, 0, 0]),
          (this.wheelStates = ["stop", "stop", "stop"]),
          (this.wheelTargets = [null, null, null]),
          this.slotGame.removeSelf());
      }
      showSlot(e, i, s = 0, a, n, o, h) {
        this.isPlayingEffect ||
          ((this.isPlayingEffect = !0),
          this.startPoint.copy(e),
          this.endPoint.copy(i),
          (this.delayFly = s),
          (this.isMe = a),
          (this.kind = n),
          (this.winRate = o),
          (this.isFirstSlot = h),
          16 === this.kind
            ? (this.animationInfo = t.BOSS_CRAB_INFO)
            : 17 === this.kind && (this.animationInfo = t.BOSS_TURTLE_INFO),
          (this.slotGame.zOrder = this.isFirstSlot
            ? t.SPIN_ZORDER
            : t.MOVE_ZORDER),
          this.reset(),
          this.slotGame.pos(this.startPoint.x, this.startPoint.y),
          this.startSpinning(),
          this.updateNumTimes(0),
          this.animationInfo &&
            (this.playAnim(this.animationInfo.start, 1),
            this.playAnim(this.animationInfo.loop, 0)),
          Laya.timer.once(this.delayFly, this, this.actionMove));
      }
      playSlot() {
        (this.isMe && this.tipNodeFingerAnimator.play("tip_finger", 0, 0),
          (this.timeCount = this.isMe ? 5 : 1),
          (this.slotBtn.mouseEnabled = !!this.isMe),
          (this.tipNode.visible = !!this.isMe),
          (this.tipNode.active = !0),
          this.startCountdown());
      }
      startSpinning() {
        this.isSpinning ||
          ((this.isSpinning = !0),
          (this.isStopping = !1),
          Laya.timer.frameLoop(1, this, this.update),
          (this.wheelStates[0] = "rolling"),
          (this.wheelStates[1] = "rolling"),
          (this.wheelStates[2] = "rolling"),
          (this.wheelSpeeds[0] = 200 + 150 * Math.random()),
          (this.wheelSpeeds[1] = 200 + 150 * Math.random()),
          (this.wheelSpeeds[2] = 200 + 150 * Math.random()));
      }
      stopSpinning() {
        if (!this.isSpinning) return;
        ((this.isSpinning = !1), (this._currStoppingIndex = 0));
        let t = this.winRate >= zt[this.kind].rateBigWin,
          e = Math.floor(this.winRate % 10),
          i = Math.floor((this.winRate % 100) / 10),
          s = Math.floor(this.winRate / 100);
        (this.stopWheelIndex(0, e),
          Laya.timer.once(500, this, this.stopWheelIndex, [1, i], !1),
          t
            ? (this.animationInfo &&
                Laya.timer.once(1e3, this, () => {
                  (this.playAnim(this.animationInfo.nearwin, 0),
                    (this.nearWinNode.visible = !0),
                    (this.nearWinNode.active = !0),
                    (this.coinFall1.owner.visible = !0),
                    (this.coinFall1.owner.active = !0),
                    (this.coinFall2.owner.visible = !0),
                    (this.coinFall2.owner.active = !0),
                    this.nearWin1.play(0, !0),
                    this.nearWin2.play(0, !0),
                    this.coinFall1.resetSystem(),
                    this.coinFall2.resetSystem(),
                    this.isMe &&
                      ai.getInstance().playSFX(pe.REWARD_REEL_NEAR_WIN));
                }),
              Laya.timer.once(3e3, this, this.stopWheelIndex, [2, s], !1),
              this.isMe &&
                Laya.timer.once(4e3, this, () => {
                  ai.getInstance().playSFX(pe.REWARD_COIN);
                }))
            : (Laya.timer.once(1e3, this, this.stopWheelIndex, [2, s], !1),
              this.isMe &&
                Laya.timer.once(2e3, this, () => {
                  ai.getInstance().playSFX(pe.REWARD_COIN);
                })));
      }
      stopWheelIndex(t, e) {
        let i;
        for (let s = 0; s < this.wheels[t].length; s++) {
          let a = this.wheels[t][s];
          if (a.text == e + "") {
            i = a;
            break;
          }
        }
        (i || ((i = this.wheels[t][1]), (i.text = e + "")),
          (this.wheelTargets[t] = i),
          this.isMe &&
            Laya.timer.once(300, this, () => {
              (ai.getInstance().playSFX(pe.REWARD_REEL_STOP),
                ai.getInstance().stopSFX(pe.REWARD_REEL_NEAR_WIN));
            }));
      }
      finishStopSpin() {
        (Laya.timer.clear(this, this.update),
          this.animationInfo && this.playAnim(this.animationInfo.end, 0),
          this.nearWin1.stop(),
          this.nearWin2.stop(),
          this.coinFall1.stopSystem(),
          this.coinFall2.stopSystem(),
          (this.coinFall3.owner.visible = !0),
          (this.coinFall3.owner.active = !0),
          this.coinFall3.resetSystem(),
          this.timesAccumulate.resetSystem(),
          Laya.timer.once(2e3, this, this.finish));
      }
      startCountdown() {
        this.timeCount < 0
          ? this.finishCountdown()
          : ((this.tipNodeNum.text = this.timeCount + ""),
            Laya.timer.once(1e3, this, this.startCountdown),
            this.timeCount--);
      }
      finishCountdown() {
        (Laya.timer.clear(this, this.startCountdown),
          (this.tipNode.visible = !1),
          (this.tipNode.active = !1),
          (this.slotBtn.mouseEnabled = !1),
          this.tipNodeFingerAnimator.stop(),
          (this.isStopping = !0));
      }
      hideAndPause() {
        ((this.slotGame.visible = !1), (this.slotGame.active = !1));
      }
      showAndResume(e, i, s, a, n) {
        (this.endPoint.copy(e),
          (this.isMe = i),
          (this.winRate = a),
          (this.kind = s),
          this.reset(),
          this.slotGame.pos(this.endPoint.x, this.endPoint.y),
          16 === this.kind
            ? (this.animationInfo = t.BOSS_CRAB_INFO)
            : 17 === this.kind && (this.animationInfo = t.BOSS_TURTLE_INFO),
          this.animationInfo && this.playAnim(this.animationInfo.loop, 0),
          this.startSpinning(),
          (this.slotGame.zOrder = t.SPIN_ZORDER),
          this.updateNumTimes(n),
          this.playSlot());
      }
      updateNumTimes(t) {
        t > 0
          ? ((this.timesNode.visible = !0),
            (this.timesNode.active = !0),
            (this.timesEfNode.visible = !0),
            (this.timesEfNode.active = !0),
            (this.timesNodeLabel.text = t + ""))
          : ((this.timesNode.visible = !1),
            (this.timesNode.active = !1),
            (this.timesEfNode.visible = !1),
            (this.timesEfNode.active = !1));
      }
      update() {
        let e = Laya.timer.delta / 1e3;
        if (!(e + t.BASE_DELTA >= 1)) {
          for (
            let t = 0,
              i = this,
              s = function (t) {
                if ("rolling" === i.wheelStates[t]) {
                  let s = i.wheelSpeeds[t] * e;
                  if (
                    (i.getWheelByIndex(t).forEach(function (t) {
                      ((t.y += s),
                        t.y < -75 && (t.y += 150),
                        t.y > 75 && (t.y -= 150));
                    }),
                    i._currStoppingIndex === t &&
                      i.wheelTargets[t] &&
                      i.wheelTargets[t].y < 0 &&
                      i.wheelTargets[t].y > -s)
                  ) {
                    ((i.wheelStates[t] = "stoping"), i._currStoppingIndex++);
                    let e = i.wheelTargets[t].y;
                    i.getWheelByIndex(t).forEach(function (s, a) {
                      ((s.y -= e),
                        Laya.Tween.to(
                          s,
                          {
                            y: s.y + 10,
                          },
                          100,
                          null,
                          Laya.Handler.create(i, function () {
                            Laya.Tween.to(
                              s,
                              {
                                y: s.y - 10,
                              },
                              200,
                            );
                          }),
                        ),
                        Laya.timer.once(300, i, function () {
                          ("stoping" == i.wheelStates[t] &&
                            (i.wheelStates[t] = "stop"),
                            Laya.timer.once(400, i, function () {
                              2 == t && 2 == a && i.finishStopSpin();
                            }));
                        }));
                    });
                  }
                }
              };
            t < 3;
            t++
          )
            s(t);
          this.isStopping && this.isSpinning && this.stopSpinning();
        }
      }
      getWheelByIndex(t) {
        return this.wheels[t];
      }
      playAnim(t, e) {
        this.slotAnimator.play(t, e, 0);
      }
    };
  ((pi.MOVE_ZORDER = 4),
    (pi.SPIN_ZORDER = 5),
    (pi.BOSS_CRAB_INFO = {
      start: "slot_crab_in",
      loop: "slot_crab_loop",
      end: "slot_crab_get",
      hide: "slot_crab_out",
      nearwin: "slot_crab_nearwin",
    }),
    (pi.BOSS_TURTLE_INFO = {
      start: "slot_turtle_in",
      loop: "slot_turtle_loop",
      end: "slot_turtle_get",
      hide: "slot_turtle_out",
      nearwin: "slot_turtle_nearwin",
    }),
    (pi.BASE_DELTA = 1 / Laya.Config.FPS));
  var gi = pi,
    di = class {
      constructor() {}
      init(t) {
        (null == this._effectReward && this.createEffectReward(),
          t &&
            (t.addChild(this._scaleContainer),
            t.setChildIndex(this._scaleContainer, t.numChildren - 1),
            (this._container = t)));
      }
      play(t, e, i, s, a, n) {
        (null == this._effectReward && this.createEffectReward(),
          this.reset(),
          (this._scaleContainer.scaleX = e ? 1 : 0.7),
          (this._scaleContainer.scaleY = e ? 1 : 0.7));
        const o = this._container.globalToLocal(t);
        (this._scaleContainer.pos(o.x, o.y),
          (this._currentKind = i),
          this.setName(i),
          this.setTextPrize(a),
          this.particleScript.resetSystem(),
          (this.coinNode.text = xe.getInstance().formatNumber(s)),
          this._effectRewardAnimator.play("effect_reward_start"),
          Laya.timer.once(2300, this, () => {
            n && n();
          }),
          e && ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_ADD_COIN));
      }
      createEffectReward() {
        ((this._scaleContainer = new Laya.Sprite()),
          (this._scaleContainer.visible = !1),
          (this._scaleContainer.active = !1),
          (this._effectReward = Laya.loader
            .getRes(he.BIG_CATCH_EFFECT_REWARD)
            .create()),
          (this._effectRewardAnimator = this._effectReward.getComponent(
            Laya.Animator2D,
          )),
          (this._effectReward.anchorX = 0.5),
          (this._effectReward.anchorY = 0.5),
          (this._effectReward.visible = !1),
          (this._effectReward.active = !1),
          (this.fishNode = this._effectReward
            .getChildByName("reward_node")
            .getChildByName("d_node")),
          (this.txtName = this._effectReward
            .getChildByName("reward_name_bg")
            .getChildByName("d_name_node")
            .getChildAt(0)),
          (this.txtName.visible = !0),
          (this.coinNode = this._effectReward.getChildByName("money_num")),
          (this.particle = this._effectReward
            .getChildByName("ef_node")
            .getChildByName("dt_foot_fire")),
          (this.particleScript = this.particle.getComponent(Laya.Script)),
          (this.wordPrize = this.fishNode.getChildByName("times_reward_word")));
        let t = this.coinNode.getChildByName("win");
        ("en" != Ye.getInstance().getLanguageName() &&
          Ye.getInstance().localizeImageText(t, oe.TXT_WIN),
          this._scaleContainer.addChild(this._effectReward));
      }
      setName(t) {
        return _(this, null, function* () {
          if (31 === t) {
            if (
              (yield Ni.getInstance()
                .getThorHammerBall()
                .then((t) => {
                  this._currentAnimation = t;
                }),
              !this._currentAnimation)
            )
              return;
            (this.fishNode.addChild(this._currentAnimation),
              (this._currentAnimation.active = !0),
              (this._currentAnimation.visible = !0),
              this._currentAnimation.play(0, !0));
          } else if (t >= 7 && t <= 15) {
            if (
              (yield Ni.getInstance()
                .getFishRun(t)
                .then((t) => {
                  this._currentAnimation = t;
                }),
              !this._currentAnimation)
            )
              return;
            (this.fishNode.addChild(this._currentAnimation),
              (this._currentAnimation.active = !0),
              (this._currentAnimation.visible = !0),
              this._currentAnimation.play(0, !0));
          } else {
            if (
              ((this._currentSpine = Ni.getInstance().getSpineFish(t)),
              !this._currentSpine)
            )
              return;
            (this.fishNode.addChild(this._currentSpine),
              (this._currentSpine.active = !0),
              (this._currentSpine.visible = !0),
              this._currentSpine.playbackRate(5),
              this._currentSpine.play("run", !0));
          }
          let e;
          switch (t) {
            case 7:
            case 8:
            case 9:
              ((e = oe.TXT_FISH_PUFFER_NAME),
                (this._currentAnimation.interval = 10),
                this._currentAnimation.pos(0, 22),
                this._currentAnimation.scale(0.7, 0.7));
              break;
            case 10:
            case 11:
            case 12:
              ((e = oe.TXT_FISH_KING_SQUID_NAME),
                (this._currentAnimation.interval = 50 / 3),
                this._currentAnimation.pos(-20, 0),
                this._currentAnimation.scale(0.7, 0.7),
                (this._currentAnimation.rotation = -45));
              break;
            case 13:
            case 14:
            case 15:
              ((e = oe.TXT_FISH_MONSTER_LOBSTER_NAME),
                (this._currentAnimation.interval = 50 / 3),
                this._currentAnimation.pos(-10, -5),
                this._currentAnimation.scale(0.55, 0.55),
                (this._currentAnimation.rotation = -45));
              break;
            case 16:
              ((e = oe.TXT_FISH_CRYSTAL_CRAB_NAME),
                this._currentSpine.pos(0, 30),
                this._currentSpine.scale(0.5, 0.5));
              break;
            case 17:
              ((e = oe.TXT_FISH_JEWEL_TURTLE_NAME),
                this._currentSpine.pos(-10, 6),
                this._currentSpine.scale(0.5, 0.5),
                (this._currentSpine.rotation = 45));
              break;
            case 18:
              ((e = oe.TXT_FISH_GIANT_OCTOPUS_NAME),
                this._currentSpine.pos(-30, 30),
                this._currentSpine.scale(0.5, 0.5),
                (this._currentSpine.rotation = -10));
              break;
            case 19:
              ((e = oe.TXT_FISH_PHOENIX_NAME),
                this._currentSpine.pos(-65, 15),
                this._currentSpine.scale(-0.35, 0.35));
              break;
            case 20:
              ((e = oe.TXT_FISH_GIANT_CROCODILE_NAME),
                this._currentSpine.pos(-15, 0),
                this._currentSpine.scale(0.3, 0.35),
                (this._currentSpine.rotation = 20));
              break;
            case 21:
              ((e = oe.TXT_FISH_NAGA_NAME),
                this._currentSpine.pos(-10, 5),
                this._currentSpine.scale(0.55, 0.55),
                (this._currentSpine.rotation = 0));
              break;
            case 31:
              ((e = oe.TXT_LIGHTNING_BALL_NAME),
                this._currentAnimation.pos(0, 20),
                this._currentAnimation.scale(1.5, 1.5));
          }
          e && Ye.getInstance().localizeImageText(this.txtName, e);
        });
      }
      setTextPrize(t) {
        let e;
        switch (t) {
          case 0:
            e = oe.TXT_CATCH_PRIZE_3X;
            break;
          case 1:
            e = oe.TXT_CATCH_PRIZE_5X;
            break;
          case 2:
            e = oe.TXT_CATCH_PRIZE_7X;
        }
        e
          ? (Ye.getInstance().localizeImageText(this.wordPrize, e),
            (this.wordPrize.visible = !0))
          : (this.wordPrize.visible = !1);
      }
      reset() {
        (this._effectReward &&
          ((this._effectReward.visible = !0),
          (this._effectReward.active = !0),
          (this._effectReward.alpha = P)),
          this._scaleContainer &&
            ((this._scaleContainer.visible = !0),
            (this._scaleContainer.active = !0)));
      }
      clear() {
        if (
          (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this._scaleContainer.scaleX = 1),
          (this._scaleContainer.scaleY = 1),
          (this._scaleContainer.active = !1),
          (this._scaleContainer.visible = !1),
          (this._effectReward.active = !1),
          (this._effectReward.visible = !1),
          this._effectRewardAnimator.gotoAndStopByFrame(
            "effect_reward_start",
            0,
            0,
          ),
          this.particleScript.stopSystem(),
          this._currentSpine &&
            (this.fishNode.removeChild(this._currentSpine),
            Ni.getInstance().recoverSpineFish(
              this._currentSpine,
              this._currentKind,
            ),
            (this._currentSpine = null)),
          this._currentAnimation)
        ) {
          if (31 === this._currentKind)
            (Ni.getInstance().recoverThorHammerBall(this._currentAnimation),
              this.fishNode.removeChild(this._currentAnimation));
          else {
            ((this._currentAnimation.interval = 50),
              this.fishNode.removeChild(this._currentAnimation));
            let t =
              8 === this._currentKind
                ? 7
                : 11 === this._currentKind
                  ? 10
                  : this._currentKind;
            Ni.getInstance().recoverFishRun(this._currentAnimation, t);
          }
          this._currentAnimation = null;
        }
        this._currentKind = null;
      }
    },
    ui = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._stars = []),
          (this._starsAnimator = []),
          (this.active = !1),
          (this.visible = !1),
          (this._node = Laya.loader.getRes(he.HARPOON_REWARD).create()),
          this.addChild(this._node),
          (this._animator = this._node.getComponent(Laya.Animator2D)),
          (this._bg = this._node.getChildByName("bg")),
          (this._bgWidth = this._bg.width),
          (this._bgHeight = this._bg.width));
        const t = this._node.getChildByName("all_ui");
        this._bossNode = t.getChildByName("boss_node");
        const e = t.getChildByName("ui"),
          i = e.getChildByName("capture_2");
        ((this._captureBar = i.getChildByName("capture_reward_bar")),
          (this._mask = i.getChildByName("mask")),
          (this._captureWord = e.getChildByName("capture_word")),
          (this._bossName = e.getChildByName("boss_name")),
          (this._betNode = e.getChildByName("bet_node")),
          (this._betNodeAnimator = this._betNode.getComponent(Laya.Animator2D)),
          (this._betNum = this._betNode.getChildByName("bet")),
          (this._effAni = this._node.getChildByName("eff_ani")));
        for (let t = 0; t < 5; ++t)
          ((this._stars[t] = e.getChildByName("star_" + (t + 1))),
            (this._starsAnimator[t] = this._stars[t].getComponent(
              Laya.Animator2D,
            )));
      }
      play(t, e, i, s, a, n) {
        for (let t = 0; t < 5; ++t)
          this._stars[t].getChildByName("capture").scale(0, 0);
        const o = Ze.getInstance().scaleRate;
        ((this.active = !0),
          (this.visible = !0),
          t
            ? (this.scale(1 * o.x, 1 * o.y),
              (this._bg.visible = !0),
              (this._bg.width = this._bgWidth / o.x),
              (this._bg.height = this._bgHeight / o.y),
              (this._effAni.visible = !0))
            : (this.scale(0.6 * o.x, 0.6 * o.y),
              (this._bg.visible = !1),
              (this._effAni.visible = !1)),
          (this._mask.width = 0),
          (this.alpha = 1),
          (this.visible = !0),
          this.pos(i.x, i.y),
          this._animator.gotoAndStopByFrame("capture_in", 0, 0),
          this._animator.play("capture_in"),
          (this._betNum.text = "9X"));
        let h = 0;
        switch (a) {
          case 99:
          default:
            h = 1;
            break;
          case 199:
          case 299:
            h = 2;
            break;
          case 399:
          case 499:
            h = 3;
            break;
          case 599:
          case 699:
            h = 4;
            break;
          case 799:
          case 899:
          case 999:
            h = 5;
        }
        e >= 7 && e <= 15 ? this.setAnimation(e) : this.setSpine(e);
        let l = Ye.getInstance().getLanguageName();
        ("en" != l &&
          Ye.getInstance().localizeImageText(
            this._captureWord,
            oe.TXT_CAPTURE_WORD,
          ),
          (this._bossName.skin =
            "resources/localize_text/" +
            l +
            "/" +
            this.getTexture(e) +
            ".png"));
        const r = [35, 85, 135, 200, 265],
          c = [[99], [199, 299], [399, 499], [599, 699], [799, 899, 999]];
        let _ = 0;
        for (let e = 0; e < h; ++e)
          (Laya.timer.once(_, this, () => {
            (Laya.Tween.to(
              this._mask,
              {
                width: r[e],
              },
              800,
              (t, e, i, s) => (
                (this._captureBar.mask = null),
                (this._captureBar.mask = this._mask),
                (i * t) / s + e
              ),
            ),
              Laya.timer.once(800, this, () => {
                (this._starsAnimator[e].gotoAndStopByFrame("effect", 0, 0),
                  this._starsAnimator[e].play("effect"),
                  t &&
                    ai
                      .getInstance()
                      .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_RESULT_1),
                  Laya.timer.once(200, this, () => {
                    (this._betNodeAnimator.gotoAndStopByFrame("effect", 0, 0),
                      this._betNodeAnimator.play("effect"),
                      t &&
                        ai
                          .getInstance()
                          .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_RESULT_2),
                      Laya.timer.once(333, this, () => {
                        this._betNum.text =
                          e >= h - 1
                            ? a + "X"
                            : c[e][
                                xe
                                  .getInstance()
                                  .getRandomNumberMinMax(0, c[e].length - 1)
                              ] + "X";
                      }));
                  }));
              }));
          }),
            (_ += 800));
        Laya.timer.once(_ + 1100, this, () => {
          this.end(t, s, e, n);
        });
      }
      setAnimation(t) {
        return _(this, null, function* () {
          if (
            (yield Ni.getInstance()
              .getFishRun(t)
              .then((t) => {
                this._spine = t;
              }),
            this._spine)
          )
            switch (
              ((this._spine.visible = !0),
              (this._spine.active = !0),
              this._bossNode.addChild(this._spine),
              this._spine.play(0, !0),
              t)
            ) {
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
                ((this._spine.interval = 17),
                  (this._spine.rotation = -45),
                  this._spine.pos(-170, 15));
                break;
              case 12:
                ((this._spine.interval = 17),
                  (this._spine.rotation = -15),
                  this._spine.pos(-190, 9));
                break;
              case 13:
              case 14:
              case 15:
                ((this._spine.interval = 17),
                  (this._spine.rotation = -75),
                  this._spine.pos(-180, 8));
            }
        });
      }
      setSpine(t) {
        const e = zt[t];
        if (((this._spine = Ni.getInstance().getSpineFish(t)), this._spine))
          switch (
            ((this._spine.visible = !0),
            (this._spine.active = !0),
            this._spine.play("run", !0),
            this._bossNode.addChild(this._spine),
            t)
          ) {
            case 13:
            case 14:
            case 15:
              (e.spineSkinName && (this._spine.skinName = e.spineSkinName),
                this._spine.playbackRate(3),
                this._spine.scale(0.9, 0.9),
                (this._spine.rotation = -75),
                this._spine.pos(-180, 8));
              break;
            case 16:
              (this._spine.playbackRate(3),
                this._spine.scale(0.9, 0.9),
                (this._spine.rotation = -20),
                this._spine.pos(-185, 25));
              break;
            case 17:
              (this._spine.playbackRate(3),
                this._spine.scale(0.8, 0.8),
                this._spine.pos(-112, -12));
              break;
            case 18:
              (this._spine.playbackRate(3),
                this._spine.scale(0.7, 0.7),
                (this._spine.rotation = -15),
                this._spine.pos(-175, -29));
              break;
            case 19:
              (this._spine.playbackRate(3),
                this._spine.scale(-0.6, 0.6),
                this._spine.pos(-250, -12));
              break;
            case 20:
              (this._spine.playbackRate(3),
                this._spine.scale(0.7, 0.7),
                (this._spine.rotation = 5),
                this._spine.pos(-135, -8));
              break;
            case 21:
              (this._spine.playbackRate(3), this._spine.pos(-140, 13));
          }
      }
      getTexture(t) {
        switch (t) {
          case 7:
          case 8:
          case 9:
            return "bossname_09";
          case 10:
          case 11:
          case 12:
            return "bossname_10";
          case 13:
          case 14:
          case 15:
            return "bossname_11";
          case 16:
            return "bossname_04";
          case 17:
            return "bossname_02";
          case 18:
            return "bossname_06";
          case 19:
            return "bossname_07";
          case 20:
            return "bossname_03";
          case 21:
            return "bossname_08";
        }
        return "bossname_09";
      }
      end(t, e, i, s) {
        const a = Ze.getInstance().scaleRate;
        t
          ? (Laya.timer.once(500, this, () => {
              (Laya.Tween.to(
                this,
                {
                  x: e.x,
                  y: e.y,
                  scaleX: 0.6 * a.x,
                  scaleY: 0.6 * a.y,
                },
                500,
              ),
                Laya.timer.once(800, this, () => {
                  Laya.Tween.to(
                    this,
                    {
                      scaleX: 0,
                      scaleY: 0,
                    },
                    200,
                  );
                }));
            }),
            Laya.Tween.to(
              this._bg,
              {
                alpha: 0,
              },
              500,
            ),
            Laya.timer.once(1500, this, () => {
              this.reset(i, s);
            }))
          : Laya.timer.once(500, this, () => {
              (Laya.Tween.to(
                this,
                {
                  alpha: 0,
                },
                500,
              ),
                Laya.timer.once(500, this, () => {
                  this.reset(i, s);
                }));
            });
      }
      reset(t, e) {
        ((this.active = !1),
          (this.visible = !1),
          this._spine &&
            (t >= 7 && t <= 15
              ? (this._bossNode.removeChild(this._spine),
                Ni.getInstance().recoverFishRun(this._spine, t),
                (this._spine = null))
              : (this._bossNode.removeChild(this._spine),
                Ni.getInstance().recoverSpineFish(this._spine, t),
                (this._spine = null))),
          e && e());
      }
    },
    yi = class extends Laya.Sprite {
      constructor() {
        (super(), this.size(0, 0));
        const t = Laya.loader.getRes(he.CROCODILE_ANGRY).create();
        (this.addChild(t),
          (this.visible = !1),
          (this.active = !1),
          (this.animator2D = t.getComponent(Laya.Animator2D)),
          (this.animatorState2D = this.animator2D.getDefaultState()));
      }
      play(t = 1, e = !1) {
        ((this.visible = !0),
          (this.active = !0),
          (this.animatorState2D.loop = e ? 0 : -1),
          (this.animator2D.speed = t),
          this.animator2D.play("crocodile_angry", 0, 0),
          e ||
            Laya.timer.once(
              (1e3 * this.animatorState2D.clip.duration()) / t,
              this,
              () => {
                Ni.getInstance().recoverCrocodileAngry(this);
              },
            ));
      }
      stop() {
        (Laya.timer.clearAll(this),
          (this.visible = !1),
          (this.active = !1),
          this.animatorState2D.offAll(),
          this.animator2D.stop());
      }
      clear() {
        (Laya.timer.clearAll(this),
          (this.visible = !1),
          (this.active = !1),
          this.animator2D.stop());
      }
    },
    mi = class extends Laya.Sprite {
      constructor() {
        if (
          (super(),
          (this._direction = new Laya.Point(0, 0)),
          (this._listBreakBubble = []),
          !this._box)
        ) {
          ((this._box = Laya.loader.getRes(he.CROCODILE_BUBBLE_COIN).create()),
            (this._animator = this._box.getComponent(Laya.Animator2D)),
            (this._mainBubble = this._box
              .getChildByName("transform")
              .getChildByName("transform_2")
              .getChildByName("transform_3")
              .getChildByName("bubble_1")),
            (this._num = this._box
              .getChildByName("number_scale")
              .getChildByName("label")));
          const t = this._box.getChildByName("breaking_1");
          for (let e = 0; e < 12; ++e) {
            let i = "bubble_";
            e < 9 ? (i = i + "0" + (e + 1)) : (i += e + 1);
            let s = t.getChildByName(i);
            this._listBreakBubble.push(s);
          }
          this.addChild(this._box);
        }
      }
      start(t, e, i) {
        (this.pos(i.x + _i.iRand(-160, 160), i.y + _i.iRand(-120, 120)),
          (this.x = me.Math.clampf(this.x, 100, S - 100)),
          (this.y = me.Math.clampf(this.y, 100, L - 100)),
          (this.rotation = 0));
        const s = _i.iRand(-45, 45);
        ((this._direction.x = _i.iRand(-30, 30)),
          (this._direction.y = _i.iRand(-30, 30)),
          (this._direction = me.Math.pRotateByAngle(
            this._direction,
            new Laya.Point(0, 0),
            s * me.Math.RAD,
          )),
          (this._num.text =
            "+ " + xe.getInstance().formatNumber(Math.floor(e))));
        let a = oe.BUBBLE_1;
        switch (t) {
          case 1:
            a = oe.BUBBLE_1;
            break;
          case 2:
            a = oe.BUBBLE_2;
            break;
          case 4:
            a = oe.BUBBLE_3;
            break;
          case 5:
            a = oe.BUBBLE_4;
        }
        this._mainBubble.skin = a;
        for (let t = 0; t < this._listBreakBubble.length; ++t) {
          this._listBreakBubble[t].skin = a;
        }
        (this._animator.gotoAndStopByFrame("in", 0, 0),
          this._animator.play("in"),
          (this._box.active = !0),
          (this._box.visible = !0),
          (this._lastTime = 0.001 * Date.now()),
          Laya.timer.frameLoop(1, this, this.update));
      }
      end(t, e, i) {
        (this.parent && (e = this.parent.globalToLocal(e)),
          Laya.timer.once(t, this, () => {
            (Laya.timer.clear(this, this.update),
              Laya.Tween.to(
                this,
                {
                  x: e.x,
                  y: e.y,
                },
                200,
                Laya.Ease.cubicIn,
                null,
              ),
              Laya.timer.once(200, this, () => {
                ((this.rotation = _i.iRand(0, 360)),
                  this._animator.gotoAndStopByFrame("break", 0, 0),
                  this._animator.play("break"),
                  i && i(),
                  Laya.timer.once(916, this, () => {
                    Ni.getInstance().recoverCrocodileBubble(this);
                  }),
                  ai.getInstance().playSFXShoot(pe.CROCODILE_BUBBLE_ADD));
              }),
              ai.getInstance().playSFXOnce(pe.CROCODILE_SCORES_ADD));
          }));
      }
      update() {
        const t = 0.001 * Date.now(),
          e = t - this._lastTime;
        ((this._lastTime = t),
          (this.x += this._direction.x * e),
          (this.y += this._direction.y * e));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          this._animator.stop(),
          (this._box.active = !1),
          (this._box.visible = !1));
      }
    },
    fi = class t {
      constructor(t, e, i, s, a, n = !1) {
        ((this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i),
          (this._tension = s),
          (this._callbackDone = a),
          (this._loop = n));
      }
      static create(e, i, s, a, n, o = !1) {
        const h = t.pool.pop();
        return h ? (h.setTo(e, i, s, a, n, o), h) : new t(e, i, s, a, n, o);
      }
      setTo(t, e, i, s, a, n = !1) {
        ((this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i),
          (this._tension = s),
          (this._callbackDone = a),
          (this._loop = n));
      }
      start() {
        ((this._isRunning = !0),
          (this._deltaT = (1 / (this._points.length - 1)) * this._duration),
          (this._previousPosition = new Laya.Vector2(
            this._target.x,
            this._target.y,
          )),
          (this._accumulatedDiff = new Laya.Vector2(0, 0)),
          (this._lastTime = 0.001 * Date.now()),
          (this._timePass = 0),
          Laya.timer.frameLoop(1, this, this.update));
      }
      setSpeed(t) {
        this._speed = t;
      }
      update() {
        if (!this._isRunning) return;
        const t = (0.001 * Date.now() - this._lastTime) * this._speed;
        ((this._lastTime = 0.001 * Date.now()), (this._timePass += t));
        let e,
          i,
          s = this._timePass,
          a = this._points,
          n = this._deltaT;
        ((e = 0 | (s / n)), (i = (s - n * e) / n));
        let o = this.cardinalSplineAt(
          this.getControlPointAt(a, e - 1),
          this.getControlPointAt(a, e - 0),
          this.getControlPointAt(a, e + 1),
          this.getControlPointAt(a, e + 2),
          this._tension,
          i,
        );
        {
          let t, e;
          if (
            ((t = this._target.x - this._previousPosition.x),
            (e = this._target.y - this._previousPosition.y),
            0 !== t || 0 !== e)
          ) {
            let i = this._accumulatedDiff;
            ((t = i.x + t),
              (e = i.y + e),
              (i.x = t),
              (i.y = e),
              (o.x += t),
              (o.y += e));
          }
        }
        (this._target.pos(o.x, o.y),
          (this._previousPosition = o),
          s >= this._duration &&
            (this._loop
              ? (this._timePass = 0.034)
              : (this._callbackDone &&
                  (this._callbackDone(), (this._callbackDone = null)),
                this.stop())));
      }
      getControlPointAt(t, e) {
        return t[Math.min(t.length - 1, Math.max(e, 0))];
      }
      cardinalSplineAt(t, e, i, s, a, n) {
        let o = n * n,
          h = o * n,
          l = (1 - a) / 2,
          r = l * (2 * o - h - n),
          c = l * (-h + o) + (2 * h - 3 * o + 1),
          _ = l * (h - 2 * o + n) + (-2 * h + 3 * o),
          p = l * (h - o),
          g = t.x * r + e.x * c + i.x * _ + s.x * p,
          d = t.y * r + e.y * c + i.y * _ + s.y * p;
        return new Laya.Vector2(g, d);
      }
      stop() {
        ((this._isRunning = !1), Laya.timer.clearAll(this), t.pool.push(this));
      }
    };
  fi.pool = [];
  var bi = fi,
    Si = class t extends Laya.Sprite {
      constructor() {
        (super(),
          (this._listFishNode = []),
          (this._baseTimeScale = 1),
          (this._listLastPos = []),
          (this._listAction = []));
        for (let t = 0; t < 20; ++t) {
          const t = new Laya.Sprite();
          (this.addChild(t),
            this._listFishNode.push(t),
            this._listLastPos.push(new Laya.Point(0, 0)));
        }
        const t = Laya.loader.getRes(he.CROCODILE_SMALL_FISH).create();
        ((this._particleSystem = t.getChildByName("particle_system")),
          (this._particleSystemScript = this._particleSystem.getComponent(
            Laya.Script,
          )),
          this.addChild(this._particleSystem),
          this._particleSystemScript.stopSystem());
      }
      get listFishNode() {
        return this._listFishNode;
      }
      set listFishNode(t) {
        this._listFishNode = t;
      }
      start() {
        const e = t.START_DATA;
        for (let t = 0; t < this._listFishNode.length; ++t) {
          const i = this._listFishNode[t];
          i.visible = !0;
          let s = e[t];
          i.pos(s.pos[0].x, s.pos[0].y);
          const a = bi.create(i, s.time * this._baseTimeScale, s.pos, 0, () => {
            this._listAction[t] = null;
          });
          (a.start(), (this._listAction[t] = a));
        }
        (Laya.timer.frameLoop(1, this, this.updateRotation),
          this._particleSystem.pos(1134, 0),
          Laya.Tween.to(
            this._particleSystem,
            {
              x: 124,
            },
            2380,
          ),
          this._particleSystemScript.resetSystem(),
          Laya.timer.once(1500, this, () => {
            this._particleSystemScript.stopSystem();
          }));
      }
      setSpeed(t) {
        for (let e = 0; e < this._listAction.length; ++e)
          this._listAction[e] && this._listAction[e].setSpeed(t);
      }
      end() {
        const e = t.END_DATA;
        for (let t = 0; t < this._listFishNode.length; ++t) {
          const i = this._listFishNode[t];
          let s = e[t];
          (i.pos(s.pos[0].x, s.pos[0].y),
            bi
              .create(i, s.time * this._baseTimeScale, s.pos, 0, () => {
                i.visible = !1;
              })
              .start());
        }
        Laya.timer.once(2e3, this, () => {
          Laya.timer.clear(this, this.updateRotation);
        });
      }
      updateRotation() {
        for (let t = 0; t < this._listFishNode.length; ++t) {
          const e = this._listFishNode[t],
            i = this._listLastPos[t];
          if (i.x == e.x && i.y == e.y) continue;
          const s = me.Math.pSub(new Laya.Point(e.x, e.y), i),
            a = Math.atan2(s.y, s.x) * me.Math.DEG + 90;
          ((e.rotation = a), i.setTo(e.x, e.y));
        }
      }
      clear() {
        (Laya.timer.clearAll(this), this._particleSystemScript.stopSystem());
      }
    };
  ((Si.START_DATA = [
    {
      pos: [
        {
          x: 1032,
          y: -4,
        },
        {
          x: 818,
          y: -68,
        },
        {
          x: 562,
          y: -19,
        },
        {
          x: 306,
          y: -28,
        },
        {
          x: 7,
          y: -4,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1130,
          y: -75,
        },
        {
          x: 902,
          y: -15,
        },
        {
          x: 666,
          y: -46,
        },
        {
          x: 374,
          y: 67,
        },
        {
          x: 68,
          y: 62,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1037,
          y: 92,
        },
        {
          x: 860,
          y: 72,
        },
        {
          x: 609,
          y: 73,
        },
        {
          x: 379,
          y: 29,
        },
        {
          x: 175,
          y: -50,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1048,
          y: -100,
        },
        {
          x: 841,
          y: -105,
        },
        {
          x: 605,
          y: -151,
        },
        {
          x: 421,
          y: -102,
        },
        {
          x: 236,
          y: -105,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1005,
          y: 39,
        },
        {
          x: 709,
          y: 81,
        },
        {
          x: 418,
          y: 16,
        },
        {
          x: 128,
          y: 43,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1116,
          y: 67,
        },
        {
          x: 910,
          y: 83,
        },
        {
          x: 597,
          y: 75,
        },
        {
          x: 269,
          y: 3,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1188,
          y: -16,
        },
        {
          x: 850,
          y: -106,
        },
        {
          x: 511,
          y: -145,
        },
        {
          x: 228,
          y: -117,
        },
        {
          x: 47,
          y: -55,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1083,
          y: -263,
        },
        {
          x: 753,
          y: -269,
        },
        {
          x: 352,
          y: -254,
        },
        {
          x: 6,
          y: -129,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1108,
          y: 189,
        },
        {
          x: 811,
          y: 211,
        },
        {
          x: 352,
          y: 190,
        },
        {
          x: -27,
          y: 91,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1198,
          y: -142,
        },
        {
          x: 705,
          y: -110,
        },
        {
          x: 295,
          y: 0,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1208,
          y: 141,
        },
        {
          x: 853,
          y: 161,
        },
        {
          x: 518,
          y: 173,
        },
        {
          x: 255,
          y: 91,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1263,
          y: 47,
        },
        {
          x: 947,
          y: 17,
        },
        {
          x: 533,
          y: -82,
        },
        {
          x: 88,
          y: -130,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1091,
          y: -139,
        },
        {
          x: 761,
          y: -198,
        },
        {
          x: 411,
          y: -163,
        },
        {
          x: 90,
          y: -107,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1358,
          y: -61,
        },
        {
          x: 1119,
          y: -75,
        },
        {
          x: 737,
          y: -30,
        },
        {
          x: 395,
          y: -29,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1276,
          y: -121,
        },
        {
          x: 994,
          y: -159,
        },
        {
          x: 632,
          y: -139,
        },
        {
          x: 321,
          y: -134,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1340,
          y: 103,
        },
        {
          x: 848,
          y: 121,
        },
        {
          x: 381,
          y: 45,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1319,
          y: -193,
        },
        {
          x: 973,
          y: -215,
        },
        {
          x: 389,
          y: -107,
        },
        {
          x: -48,
          y: -58,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1181,
          y: -170,
        },
        {
          x: 788,
          y: -55,
        },
        {
          x: 415,
          y: -45,
        },
        {
          x: 75,
          y: 33,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1286,
          y: -23,
        },
        {
          x: 688,
          y: 35,
        },
        {
          x: 118,
          y: -32,
        },
      ],
      time: 2.380952380952381,
    },
    {
      pos: [
        {
          x: 1036,
          y: 159,
        },
        {
          x: 723,
          y: 202,
        },
        {
          x: 435,
          y: 194,
        },
        {
          x: 164,
          y: 117,
        },
      ],
      time: 2.380952380952381,
    },
  ]),
    (Si.END_DATA = [
      {
        pos: [
          {
            x: 7,
            y: -4,
          },
          {
            x: -270,
            y: 20,
          },
          {
            x: -533,
            y: 90,
          },
        ],
        time: 1,
      },
      {
        pos: [
          {
            x: 68,
            y: 62,
          },
          {
            x: -50,
            y: 281,
          },
          {
            x: -14,
            y: 589,
          },
        ],
        time: 0.7,
      },
      {
        pos: [
          {
            x: 175,
            y: -50,
          },
          {
            x: 222,
            y: -161,
          },
          {
            x: 334,
            y: -250,
          },
          {
            x: 464,
            y: -491,
          },
          {
            x: 568,
            y: -672,
          },
        ],
        time: 1.35,
      },
      {
        pos: [
          {
            x: 236,
            y: -105,
          },
          {
            x: 235,
            y: -248,
          },
          {
            x: 468,
            y: -212,
          },
          {
            x: 470,
            y: 182,
          },
          {
            x: 607,
            y: 641,
          },
        ],
        time: 1.7,
      },
      {
        pos: [
          {
            x: 128,
            y: 43,
          },
          {
            x: 231,
            y: 159,
          },
          {
            x: 228,
            y: 351,
          },
          {
            x: 54,
            y: 572,
          },
        ],
        time: 1.15,
      },
      {
        pos: [
          {
            x: 269,
            y: 3,
          },
          {
            x: 414,
            y: 147,
          },
          {
            x: 642,
            y: 86,
          },
          {
            x: 972,
            y: 129,
          },
          {
            x: 1388,
            y: 64,
          },
        ],
        time: 1.9,
      },
      {
        pos: [
          {
            x: 47,
            y: -55,
          },
          {
            x: -4,
            y: -121,
          },
          {
            x: -219,
            y: -282,
          },
          {
            x: -509,
            y: -382,
          },
        ],
        time: 1,
      },
      {
        pos: [
          {
            x: 6,
            y: -129,
          },
          {
            x: 57,
            y: -217,
          },
          {
            x: -74,
            y: -322,
          },
          {
            x: -166,
            y: -518,
          },
          {
            x: -137,
            y: -725,
          },
        ],
        time: 1.3,
      },
      {
        pos: [
          {
            x: -27,
            y: 91,
          },
          {
            x: -75,
            y: 25,
          },
          {
            x: -9,
            y: 1,
          },
          {
            x: -9,
            y: 192,
          },
          {
            x: -281,
            y: 316,
          },
          {
            x: -531,
            y: 640,
          },
        ],
        time: 1.6,
      },
      {
        pos: [
          {
            x: 295,
            y: 0,
          },
          {
            x: 468,
            y: 53,
          },
          {
            x: 470,
            y: -104,
          },
          {
            x: 868,
            y: -210,
          },
          {
            x: 1059,
            y: -483,
          },
          {
            x: 1077,
            y: -860,
          },
        ],
        time: 2,
      },
      {
        pos: [
          {
            x: 255,
            y: 91,
          },
          {
            x: 151,
            y: 207,
          },
          {
            x: 311,
            y: 189,
          },
          {
            x: 405,
            y: 364,
          },
          {
            x: 325,
            y: 569,
          },
          {
            x: 343,
            y: 758,
          },
        ],
        time: 2,
      },
      {
        pos: [
          {
            x: 88,
            y: -130,
          },
          {
            x: 67,
            y: -269,
          },
          {
            x: 163,
            y: -296,
          },
          {
            x: 174,
            y: -429,
          },
          {
            x: 316,
            y: -704,
          },
        ],
        time: 1.75,
      },
      {
        pos: [
          {
            x: 90,
            y: -107,
          },
          {
            x: 163,
            y: -247,
          },
          {
            x: 175,
            y: -506,
          },
          {
            x: 302,
            y: -765,
          },
        ],
        time: 1.45,
      },
      {
        pos: [
          {
            x: 395,
            y: -29,
          },
          {
            x: 449,
            y: -144,
          },
          {
            x: 641,
            y: -103,
          },
          {
            x: 800,
            y: -294,
          },
          {
            x: 1310,
            y: -386,
          },
        ],
        time: 1.85,
      },
      {
        pos: [
          {
            x: 321,
            y: -134,
          },
          {
            x: 376,
            y: -197,
          },
          {
            x: 335,
            y: -312,
          },
          {
            x: 474,
            y: -484,
          },
          {
            x: 402,
            y: -740,
          },
        ],
        time: 1.7,
      },
      {
        pos: [
          {
            x: 381,
            y: 45,
          },
          {
            x: 410,
            y: -45,
          },
          {
            x: 311,
            y: -112,
          },
          {
            x: 568,
            y: -184,
          },
          {
            x: 911,
            y: -161,
          },
          {
            x: 1337,
            y: -175,
          },
        ],
        time: 1.9,
      },
      {
        pos: [
          {
            x: -48,
            y: -58,
          },
          {
            x: 32,
            y: -118,
          },
          {
            x: 34,
            y: -23,
          },
          {
            x: -196,
            y: -173,
          },
          {
            x: -526,
            y: -248,
          },
        ],
        time: 1.65,
      },
      {
        pos: [
          {
            x: 75,
            y: 33,
          },
          {
            x: 168,
            y: -3,
          },
          {
            x: 32,
            y: -109,
          },
          {
            x: -195,
            y: 104,
          },
          {
            x: -565,
            y: 206,
          },
        ],
        time: 1.6,
      },
      {
        pos: [
          {
            x: 118,
            y: -32,
          },
          {
            x: 119,
            y: -124,
          },
          {
            x: 281,
            y: -54,
          },
          {
            x: 685,
            y: 31,
          },
          {
            x: 983,
            y: 371,
          },
        ],
        time: 1.85,
      },
      {
        pos: [
          {
            x: 164,
            y: 117,
          },
          {
            x: 68,
            y: 56,
          },
          {
            x: -39,
            y: 56,
          },
          {
            x: -603,
            y: -54,
          },
        ],
        time: 1.35,
      },
    ]));
  var Li = Si,
    Ii = class {
      constructor() {
        ((this._listAnimHammerSingle = []),
          (this._thorHammerAttack = Laya.loader
            .getRes(he.THOR_HAMMER_ATTACK)
            .create()),
          (this._thorHammerAttack.visible = !1),
          (this._thorHammerAttack.active = !1),
          (this._thorHammerAttackAnimator = this._thorHammerAttack.getComponent(
            Laya.Animator2D,
          )),
          (this._thunder = this._thorHammerAttack.getChildByName("thunders")));
        for (let t = 0; t < this._thunder.numChildren; t++)
          this._listAnimHammerSingle.push(
            this._thunder.getChildAt(t).getComponent(Laya.Animator2D),
          );
      }
      init(t) {
        ((this._container = t),
          this._container.addChild(this._thorHammerAttack));
      }
      play(t, e) {
        let i = Math.max(
          3.5 / this._container.scaleX,
          3.5 / this._container.scaleY,
        );
        (this._thunder.scale(i, i),
          (t = this._container.globalToLocal(t)),
          (this._thorHammerAttack.alpha = e ? P : A),
          (this._thorHammerAttack.zOrder = e ? 9 : 8),
          (this._thorHammerAttack.visible = !0),
          (this._thorHammerAttack.active = !0),
          this._thorHammerAttack.pos(t.x, t.y),
          this._thorHammerAttackAnimator.play("thor_hammer_attack", 0, 0),
          this._listAnimHammerSingle.forEach((t) => {
            t.play("thor_hammer_single", 0, 0);
          }));
      }
      clear() {
        ((this._thorHammerAttack.visible = !1),
          (this._thorHammerAttack.active = !1),
          this._thorHammerAttackAnimator.stop(),
          this._listAnimHammerSingle.forEach((t) => {
            t.stop();
          }),
          this._thorHammerAttack.removeSelf());
      }
    },
    Ci = class {
      constructor() {}
      init(t) {
        t && (this._container = t);
      }
      play(t, e, i, s, a, n) {
        (null == this._effectParalysis && this.createEffectParalysis(s),
          this._container.addChild(this._effectParalysis),
          this.reset(),
          (this._effectParalysis.alpha = e ? P : A));
        const o = this._container.globalToLocal(t);
        (this._effectParalysis.pos(o.x, o.y),
          (this._effectParalysis.rotation = a));
        let h = "palsy_fish" + s;
        this.playEffectParalysis(h);
        for (let t = 1; t <= 4; t++)
          Laya.timer.once(216.67 * t, this, () => {
            this.playEffectParalysis(h);
          });
        (Laya.timer.once(900, this, () => {
          Laya.Tween.to(
            this._effectParalysis,
            {
              alpha: 0,
            },
            100,
          );
        }),
          Laya.timer.once(1e3, this, () => {
            n && n();
          }));
      }
      createEffectParalysis(t) {
        let e = "PALSY_FISH_" + t;
        ((this._effectParalysis = Laya.loader.getRes(he[e]).create()),
          (this._effectParalysisAnimator = this._effectParalysis.getComponent(
            Laya.Animator2D,
          )),
          (this._effectParalysis.anchorX = 0.5),
          (this._effectParalysis.anchorY = 0.5),
          (this._effectParalysis.visible = !1),
          (this._effectParalysis.active = !1));
      }
      playEffectParalysis(t) {
        (this._effectParalysisAnimator.gotoAndStopByFrame(t, 0, 0),
          this._effectParalysisAnimator.play(t));
      }
      reset() {
        this._effectParalysis &&
          ((this._effectParalysis.visible = !0),
          (this._effectParalysis.active = !0),
          (this._effectParalysis.alpha = P),
          this._effectParalysis.scale(1, 1));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          this._effectParalysis.removeSelf(),
          (this._effectParalysis.active = !1),
          (this._effectParalysis.visible = !1));
      }
    },
    Ti = class {
      constructor() {
        ((this._countLoop = 0),
          (this._baseScaleX = 0.684),
          (this._baseScaleY = 0.684));
      }
      init(t) {
        t && (this._container = t);
      }
      play(t, e, i, s) {
        (null == this._effectReward && this.createInteractivitySymbol(),
          this._container.addChild(this._effectReward),
          this.reset());
        const a = Ze.getInstance().scaleRate;
        this._effectReward.scale(
          this._baseScaleX * a.x,
          this._baseScaleY * a.y,
        );
        const n = this._container.globalToLocal(t);
        (this._effectReward.pos(n.x, n.y),
          (this._currentKind = i),
          this.setKind(i),
          this.particleCoinScript.resetSystem(),
          this.particleStarScript.resetSystem(),
          this._effectRewardAnimator.gotoAndStopByFrame(
            "interactive_game_in",
            0,
            0,
          ),
          this._effectRewardAnimator.play("interactive_game_in"),
          Laya.timer.once(625, this, () => {
            (Laya.Tween.to(
              this._effectReward,
              {
                x: e.x,
                y: e.y,
              },
              300,
              Laya.Ease.quartOut,
            ),
              this.playAnim(),
              Laya.timer.loop(687.5, this, () => {
                this.playAnim();
              }),
              Laya.timer.once(13750, this, () => {
                s && s();
              }));
          }));
      }
      playAnim() {
        (this._countLoop++,
          this._countLoop <= 19
            ? (this._effectRewardAnimator.gotoAndStopByFrame(
                "interactive_game_loop",
                0,
                0,
              ),
              this._effectRewardAnimator.play("interactive_game_loop"))
            : (this._effectRewardAnimator.gotoAndStopByFrame(
                "interactive_game_out",
                0,
                0,
              ),
              this._effectRewardAnimator.play("interactive_game_out")));
      }
      createInteractivitySymbol() {
        ((this._effectReward = Laya.loader
          .getRes(he.INTERACTIVITY_SYMBOL)
          .create()),
          (this._effectRewardAnimator = this._effectReward.getComponent(
            Laya.Animator2D,
          )),
          (this._effectReward.visible = !1),
          (this._effectReward.active = !1),
          (this._baseScaleX = this._effectReward.scaleX),
          (this._baseScaleY = this._effectReward.scaleY),
          (this.fishNode = this._effectReward
            .getChildByName("reward_node")
            .getChildByName("d_node")),
          (this.txtInteractivitySymbol = this._effectReward
            .getChildByName("reward_name_bg")
            .getChildByName("interactive_game")),
          (this.txtEffectInteractivitySymbol = this._effectReward
            .getChildByName("reward_name_bg")
            .getChildByName("interactive_game_ef")),
          (this.particleCoin = this._effectReward.getChildByName(
            "particle_coin_fx_reward",
          )),
          (this.particleStar = this._effectReward
            .getChildByName("ef_node")
            .getChildByName("particle_dt_foot_fire")),
          (this.particleCoinScript = this.particleCoin.getComponent(
            Laya.Script,
          )),
          (this.particleStarScript = this.particleStar.getComponent(
            Laya.Script,
          )),
          "en" != Ye.getInstance().getLanguageName() &&
            (Ye.getInstance().localizeImageText(
              this.txtInteractivitySymbol,
              oe.TXT_INTERACTIVITY_SYMBOL,
            ),
            Ye.getInstance().localizeImageText(
              this.txtEffectInteractivitySymbol,
              oe.TXT_INTERACTIVITY_SYMBOL,
            )));
      }
      setKind(t) {
        if (
          ((this._currentSpine = Ni.getInstance().getSpineFish(t)),
          null != this._currentSpine)
        )
          switch (
            (this.fishNode.addChild(this._currentSpine),
            (this._currentSpine.active = !0),
            (this._currentSpine.visible = !0),
            this._currentSpine.playbackRate(1),
            this._currentSpine.play("run", !0),
            t)
          ) {
            case 19:
              (this._currentSpine.pos(-55, -15),
                this._currentSpine.scale(-0.55, 0.55));
              break;
            case 20:
              (this._currentSpine.pos(-7, 4),
                this._currentSpine.scale(-0.55, 0.55),
                (this._currentSpine.rotation = -160));
              break;
            case 21:
              (this._currentSpine.pos(-8, 18),
                this._currentSpine.scale(0.77, 0.77));
          }
      }
      reset() {
        this._effectReward &&
          ((this._effectReward.visible = !0), (this._effectReward.active = !0));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this._effectReward.active = !1),
          (this._effectReward.visible = !1),
          this._effectReward.scale(this._baseScaleX, this._baseScaleY),
          this._effectRewardAnimator.stop(),
          (this._countLoop = 0),
          this.particleCoinScript.stopSystem(),
          this.particleStarScript.stopSystem(),
          this._currentSpine &&
            (Ni.getInstance().recoverSpineFish(
              this._currentSpine,
              this._currentKind,
            ),
            this.fishNode.removeChild(this._currentSpine),
            (this._currentSpine = null),
            (this._currentKind = null)));
      }
    },
    Pi = class extends Laya.Sprite {
      constructor() {
        (super(), this.size(0, 0));
        const t = Laya.loader.getRes(he.PHOENIX_BOMB).create();
        (this.addChild(t),
          (t.visible = !0),
          (this.visible = !1),
          (this.animator2D = t.getComponent(Laya.Animator2D)),
          (this._particleRock = t.getChildByName("particle_system_rock")),
          (this._particleRockScript = this._particleRock.getComponent(
            Laya.Script,
          )),
          (this._particlePoint = t.getChildByName("particle_system_point")),
          (this._particlePointScript = this._particlePoint.getComponent(
            Laya.Script,
          )),
          (this.active = !1));
      }
      play(t, e) {
        ((this.active = !0),
          this.pos(t.x, t.y),
          this.animator2D.gotoAndStopByFrame("bomb", 0, 0),
          this.animator2D.play("bomb"),
          this._particleRockScript.resetSystem(),
          this._particlePointScript.resetSystem(),
          (this.visible = !0),
          Laya.timer.once(500, this, () => {
            e && e();
          }));
      }
      clear() {
        (Laya.timer.clearAll(this),
          this.animator2D.stop(),
          this._particleRockScript.stopSystem(),
          this._particlePointScript.stopSystem());
      }
    },
    Ai = class {
      constructor() {
        ((this._listAnimHammerEdge = []),
          (this._listAnimHammerWave = []),
          (this._thorHammerAttackBG = Laya.loader
            .getRes(he.THOR_HAMMER_ATTACK_BG)
            .create()),
          (this._thorHammerAttackBG.visible = !1),
          (this._thorHammerAttackBG.active = !1),
          (this._thorHammerAttackBGAnimator =
            this._thorHammerAttackBG.getComponent(Laya.Animator2D)),
          (this._thunderBG = this._thorHammerAttackBG
            .getChildByName("thunders")
            .getChildByName("bg_thunders")));
        for (let t = 0; t < this._thunderBG.numChildren; t++)
          this._listAnimHammerEdge.push(
            this._thunderBG.getChildAt(t).getComponent(Laya.Animator2D),
          );
        let t = this._thorHammerAttackBG.getChildByName("explosion");
        for (let e = 1; e <= 8; e++)
          this._listAnimHammerWave.push(
            t
              .getChildByName("wave_active0" + e)
              .getChildAt(0)
              .getComponent(Laya.Animator2D),
          );
      }
      init(t) {
        ((this._container = t),
          this._container.addChild(this._thorHammerAttackBG),
          (this._thorHammerAttackBG.zOrder = zt[3].zOrder || 0));
      }
      play(t) {
        (this._thunderBG.scale(
          1 / this._container.scaleX,
          1 / this._container.scaleY,
        ),
          (this._thorHammerAttackBG.alpha = t ? P : A),
          (this._thorHammerAttackBG.visible = !0),
          (this._thorHammerAttackBG.active = !0),
          this._thorHammerAttackBG.pos(
            (0.5 * this._container.width) / this._container.scaleX,
            (0.5 * this._container.height) / this._container.scaleY,
          ),
          this._thorHammerAttackBGAnimator.play("thor_hammer_attack_bg", 0, 0),
          this._listAnimHammerEdge.forEach((t) => {
            t.play("thor_hammer_edge", 0, 0);
          }),
          this._listAnimHammerWave.forEach((t, e) => {
            Laya.timer.once(66 * e, t, t.play, ["thor_hammer_wave", 0, 0]);
          }));
      }
      clear() {
        ((this._thorHammerAttackBG.visible = !1),
          (this._thorHammerAttackBG.active = !1),
          this._thorHammerAttackBGAnimator.stop(),
          this._listAnimHammerEdge.forEach((t) => {
            t.stop();
          }),
          this._listAnimHammerWave.forEach((t) => {
            t.stop();
          }),
          this._thorHammerAttackBG.removeSelf());
      }
    },
    Ni = class t {
      constructor() {
        this._listEffectInPool = new Map();
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      getSpineFish(t) {
        let e = null;
        switch (t) {
          case 16:
            e = Wt[16];
            break;
          case 17:
            e = Wt[17];
            break;
          case 18:
            e = Wt[18];
            break;
          case 19:
            e = Wt[19];
            break;
          case 20:
            e = Wt[20];
            break;
          case 21:
            e = Wt[21];
            break;
          default:
            e = Wt[t];
        }
        if (!e) return null;
        const i = Laya.Pool.getItemByCreateFun(e.KeyPool, () => {
          const t = new Laya.SpineSkeleton();
          return (
            (t.templet = Laya.loader.getRes(e.Json)),
            (t.visible = !1),
            (t.active = !1),
            t
          );
        });
        return (
          this._listEffectInPool.set(i, this.recoverSpineFish.bind(this, i, t)),
          i
        );
      }
      recoverSpineFish(t, e) {
        if (null == t) return;
        (t.playbackRate(1),
          (t.visible = !1),
          (t.active = !1),
          t.scale(1, 1),
          t.pos(0, 0),
          t.stop(),
          (t.alpha = 1),
          (t.filters = []),
          (t.zOrder = 0),
          (t.rotation = 0),
          (t.anchorX = 0.5),
          (t.anchorY = 0.5),
          (t.material = null));
        let i = null;
        switch (e) {
          case 16:
            i = Wt[16];
            break;
          case 17:
            i = Wt[17];
            break;
          case 18:
            i = Wt[18];
            break;
          case 19:
            i = Wt[19];
            break;
          case 20:
            i = Wt[20];
            break;
          case 21:
            i = Wt[21];
            break;
          default:
            i = Wt[e];
        }
        if (
          (t.removeSelf(),
          this._listEffectInPool.delete(t),
          null == i || i.DestroyOnFinish)
        )
          return (t.destroy(), null);
        Laya.Pool.recover(i.KeyPool, t);
      }
      getFishRun(t) {
        return _(this, null, function* () {
          switch (t) {
            case 8:
              t = 7;
              break;
            case 11:
              t = 10;
              break;
            case 14:
              t = 13;
          }
          const e = xe.getInstance().formatString(he.FISH_RUN, t);
          yield Qe.getInstance().loadPrefab(e);
          const i = xe.getInstance().formatString(xt, t),
            s = Laya.Pool.getItemByCreateFun(i, () =>
              Laya.loader.getRes(e).create(),
            );
          return (
            this._listEffectInPool.set(s, this.recoverFishRun.bind(this, s, t)),
            s
          );
        });
      }
      recoverFishRun(t, e) {
        if (null == t) return;
        switch (e) {
          case 8:
            e = 7;
            break;
          case 11:
            e = 10;
            break;
          case 14:
            e = 13;
        }
        ((t.visible = !1),
          (t.active = !1),
          t.scale(1, 1),
          (t.alpha = 1),
          (t.rotation = 0),
          t.stop());
        const i = xe.getInstance().formatString(xt, e);
        (Laya.Pool.recover(i, t),
          t.removeSelf(),
          this._listEffectInPool.delete(t));
      }
      getClawChain() {
        const t = Laya.Pool.getItemByCreateFun(Pt, () => {
          const t = new Laya.Image();
          return (
            (t.anchorX = 0.5),
            (t.anchorY = 0.5),
            (t.skin = "resources/bullet/bullet_chain.png"),
            (t.zOrder = 0),
            (t.useSourceSize = !0),
            t
          );
        });
        return (
          (t.visible = !0),
          (t.active = !0),
          this._listEffectInPool.set(t, this.recoverClawChain.bind(this, t)),
          t
        );
      }
      recoverClawChain(t) {
        (t.removeSelf(),
          (t.zOrder = 0),
          (t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(Pt, t),
          this._listEffectInPool.delete(t));
      }
      getClaw() {
        const t = Laya.Pool.getItemByClass(At, ei);
        return (
          (t.visible = !0),
          (t.active = !0),
          this._listEffectInPool.set(t, this.recoverClaw.bind(this, t)),
          t
        );
      }
      recoverClaw(t) {
        (t.removeSelf(),
          (t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(At, t),
          this._listEffectInPool.delete(t));
      }
      getCrocodileSmallFish() {
        const t = Laya.Pool.getItemByClass(Ft, Li);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverCrocodileSmallFish.bind(this, t),
          ),
          t
        );
      }
      recoverCrocodileSmallFish(t) {
        (t.clear(),
          (t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(Ft, t),
          this._listEffectInPool.delete(t));
      }
      getPhoenixBomb() {
        const t = Laya.Pool.getItemByClass(ot, Pi);
        return (
          this._listEffectInPool.set(t, this.recoverPhoenixBomb.bind(this, t)),
          t
        );
      }
      recoverPhoenixBomb(t) {
        ((t.visible = !1),
          (t.active = !1),
          t.clear(),
          Laya.Pool.recover(ot, t),
          this._listEffectInPool.delete(t));
      }
      getPhoenixFeather() {
        const t = Laya.Pool.getItemByCreateFun(lt, () =>
          Laya.loader.getRes(he.PHOENIX_FEATHER_BOMB).create(),
        );
        return (
          this._listEffectInPool.set(
            t,
            this.recoverPhoenixFeather.bind(this, t),
          ),
          t
        );
      }
      recoverPhoenixFeather(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(lt, t),
          this._listEffectInPool.delete(t));
      }
      getPhoenixBombNum() {
        const t = Laya.Pool.getItemByCreateFun(ht, () =>
          Laya.loader.getRes(he.PHOENIX_BOMB_NUM).create(),
        );
        return (
          this._listEffectInPool.set(
            t,
            this.recoverPhoenixBombNum.bind(this, t),
          ),
          t
        );
      }
      recoverPhoenixBombNum(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(ht, t),
          this._listEffectInPool.delete(t));
      }
      getCoin() {
        const t = Laya.Pool.getItemByCreateFun(ct, () =>
          Laya.loader.getRes(he.NORMAL_CATCH_COIN1).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverCoin.bind(this, t)),
          t
        );
      }
      recoverCoin(t) {
        ((t.alpha = 0),
          (t.visible = !1),
          (t.active = !1),
          t.scale(1, 1),
          Laya.Pool.recover(ct, t),
          this._listEffectInPool.delete(t));
      }
      getCoinNum() {
        const t = Laya.Pool.getItemByCreateFun(_t, () =>
          Laya.loader.getRes(he.NORMAL_CATCH_COIN_NUM).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverCoinNum.bind(this, t)),
          t
        );
      }
      recoverCoinNum(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(_t, t),
          this._listEffectInPool.delete(t));
      }
      getBulletJellyFishExplode() {
        const t = Laya.Pool.getItemByClass(it, $e);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverBulletJellyFishExplode.bind(this, t),
          ),
          t
        );
      }
      recoverBulletJellyFishExplode(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(it, t),
          this._listEffectInPool.delete(t));
      }
      getBulletLaserExplode() {
        const t = Laya.Pool.getItemByClass(et, ti);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverBulletLaserExplode.bind(this, t),
          ),
          t
        );
      }
      recoverBulletLaserExplode(t) {
        ((t.visible = !1),
          (t.active = !1),
          t.clear(),
          Laya.Pool.recover(et, t),
          this._listEffectInPool.delete(t));
      }
      getCoinRefunded() {
        const t = Laya.Pool.getItemByCreateFun(pt, () => {
          let t = Laya.loader.getRes(he.COIN_REFUNDED).create();
          return (
            "en" != Ye.getInstance().getLanguageName() &&
              Ye.getInstance().localizeImageText(t, oe.TXT_COIN_REFUNDED),
            t
          );
        });
        return (
          this._listEffectInPool.set(t, this.recoverCoinRefunded.bind(this, t)),
          t
        );
      }
      recoverCoinRefunded(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(pt, t),
          this._listEffectInPool.delete(t));
      }
      getFishWave() {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.FISH_WAVE);
          const t = Laya.Pool.getItemByCreateFun(Ct, () => {
            const t = Laya.loader.getRes(he.FISH_WAVE).create();
            if ("en" != Ye.getInstance().getLanguageName()) {
              let e = t.getChildByName("fish_tide").getChildByName("boss_name");
              Ye.getInstance().localizeImageText(e, oe.TXT_FISH_WAVE);
            }
            return t;
          });
          return (
            this._listEffectInPool.set(t, this.recoverFishWave.bind(this, t)),
            t
          );
        });
      }
      recoverFishWave(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(Ct, t),
          this._listEffectInPool.delete(t));
      }
      getLaserDish() {
        const t = Laya.Pool.getItemByCreateFun(vt, () =>
          Laya.loader.getRes(he.LASER_DISH).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverLaserDish.bind(this, t)),
          t
        );
      }
      recoverLaserDish(t) {
        ((t.visible = !1),
          (t.active = !1),
          t.getComponent(Laya.Animator2D).stop(),
          t.removeSelf(),
          Laya.Pool.recover(vt, t),
          this._listEffectInPool.delete(t));
      }
      getThorHammerBall() {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.THOR_HAMMER_BALL);
          const t = Laya.Pool.getItemByCreateFun(Rt, () =>
            Laya.loader.getRes(he.THOR_HAMMER_BALL).create(),
          );
          return (
            this._listEffectInPool.set(
              t,
              this.recoverThorHammerBall.bind(this, t),
            ),
            t
          );
        });
      }
      recoverThorHammerBall(t) {
        ((t.visible = !1),
          (t.active = !1),
          t.stop(),
          t.removeSelf(),
          Laya.Pool.recover(Rt, t),
          this._listEffectInPool.delete(t));
      }
      getCrocodileAngry() {
        const t = Laya.Pool.getItemByClass(Bt, yi);
        return (
          t &&
            this._listEffectInPool.set(
              t,
              this.recoverCrocodileAngry.bind(this, t),
            ),
          t
        );
      }
      recoverCrocodileAngry(t) {
        (t.clear(),
          t.removeSelf(),
          Laya.Pool.recover(Bt, t),
          this._listEffectInPool.delete(t));
      }
      getEffBulletExplode() {
        const t = Laya.Pool.getItemByClass(Q, ii);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverEffBulletExplode.bind(this, t),
          ),
          t
        );
      }
      recoverEffBulletExplode(t) {
        (t.reset(), Laya.Pool.recover(Q, t), this._listEffectInPool.delete(t));
      }
      getCrocodileBubble() {
        const t = Laya.Pool.getItemByClass(wt, mi);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverCrocodileBubble.bind(this, t),
          ),
          t
        );
      }
      recoverCrocodileBubble(t) {
        (t.clear(), Laya.Pool.recover(wt, t), this._listEffectInPool.delete(t));
      }
      getHarpoonReward() {
        const t = Laya.Pool.getItemByClass(Nt, ui);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverHarpoonReward.bind(this, t),
          ),
          t
        );
      }
      recoverHarpoonReward(t) {
        ((t.visible = !1),
          (t.active = !1),
          Laya.Pool.recover(Nt, t),
          this._listEffectInPool.delete(t));
      }
      getEffectCatchBig() {
        const t = Laya.Pool.getItemByClass(mt, di);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverEffectCatchBig.bind(this, t),
          ),
          t
        );
      }
      recoverEffectCatchBig(t) {
        (t.clear(), Laya.Pool.recover(mt, t), this._listEffectInPool.delete(t));
      }
      getInteractivitySymbol() {
        const t = Laya.Pool.getItemByClass(Tt, Ti);
        return (
          this._listEffectInPool.set(
            t,
            this.recoverInteractivitySymbol.bind(this, t),
          ),
          t
        );
      }
      recoverInteractivitySymbol(t) {
        (t.clear(), Laya.Pool.recover(Tt, t), this._listEffectInPool.delete(t));
      }
      getRoulette() {
        const t = Laya.Pool.getItemByClass(dt, oi);
        return (
          this._listEffectInPool.set(t, this.recoverRoulette.bind(this, t)),
          t
        );
      }
      recoverRoulette(t) {
        (t.clear(), Laya.Pool.recover(dt, t), this._listEffectInPool.delete(t));
      }
      getRouletteIn() {
        const t = Laya.Pool.getItemByClass(ut, ci);
        return (
          this._listEffectInPool.set(t, this.recoverRouletteIn.bind(this, t)),
          t
        );
      }
      recoverRouletteIn(t) {
        (t.clear(), Laya.Pool.recover(ut, t), this._listEffectInPool.delete(t));
      }
      getRouletteIcon() {
        const t = Laya.Pool.getItemByClass(yt, li);
        return (
          this._listEffectInPool.set(t, this.recoverRouletteIcon.bind(this, t)),
          t
        );
      }
      recoverRouletteIcon(t) {
        (t.clear(), Laya.Pool.recover(yt, t), this._listEffectInPool.delete(t));
      }
      getSlotGame() {
        const t = Laya.Pool.getItemByClass(gt, gi);
        return (
          this._listEffectInPool.set(t, this.recoverSlotGame.bind(this, t)),
          t
        );
      }
      recoverSlotGame(t) {
        (t.clear(), Laya.Pool.recover(gt, t), this._listEffectInPool.delete(t));
      }
      getPalsyFish1() {
        const t = Laya.Pool.getItemByClass(ft, Ci);
        return (
          this._listEffectInPool.set(t, this.recoverPalsyFish1.bind(this, t)),
          t
        );
      }
      recoverPalsyFish1(t) {
        (t.clear(), Laya.Pool.recover(ft, t), this._listEffectInPool.delete(t));
      }
      getPalsyFish2() {
        const t = Laya.Pool.getItemByClass(bt, Ci);
        return (
          this._listEffectInPool.set(t, this.recoverPalsyFish2.bind(this, t)),
          t
        );
      }
      recoverPalsyFish2(t) {
        (t.clear(), Laya.Pool.recover(bt, t), this._listEffectInPool.delete(t));
      }
      getPalsyFish3() {
        const t = Laya.Pool.getItemByClass(St, Ci);
        return (
          this._listEffectInPool.set(t, this.recoverPalsyFish3.bind(this, t)),
          t
        );
      }
      recoverPalsyFish3(t) {
        (t.clear(), Laya.Pool.recover(St, t), this._listEffectInPool.delete(t));
      }
      getPalsyFish19() {
        const t = Laya.Pool.getItemByClass(Lt, Ci);
        return (
          this._listEffectInPool.set(t, this.recoverPalsyFish19.bind(this, t)),
          t
        );
      }
      recoverPalsyFish19(t) {
        (t.clear(), Laya.Pool.recover(Lt, t), this._listEffectInPool.delete(t));
      }
      getPalsyFish20() {
        const t = Laya.Pool.getItemByClass(It, Ci);
        return (
          this._listEffectInPool.set(t, this.recoverPalsyFish20.bind(this, t)),
          t
        );
      }
      recoverPalsyFish20(t) {
        (t.clear(), Laya.Pool.recover(It, t), this._listEffectInPool.delete(t));
      }
      getTapFX() {
        const t = Laya.Pool.getItemByCreateFun(rt, () =>
          Laya.loader.getRes(he.TAP_FX).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverTapFX.bind(this, t)),
          t
        );
      }
      recoverTapFX(t) {
        ((t.visible = !1),
          t.removeSelf(),
          Laya.Pool.recover(rt, t),
          this._listEffectInPool.delete(t));
      }
      getLaserBig() {
        const t = Laya.Pool.getItemByCreateFun(tt, () =>
          Laya.loader.getRes(he.BULLET_LASER_BIG).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverLaserBig.bind(this, t)),
          t
        );
      }
      recoverLaserBig(t) {
        ((t.visible = !1),
          Laya.Tween.clearAll(t),
          t.removeSelf(),
          Laya.Pool.recover(tt, t),
          this._listEffectInPool.delete(t));
      }
      getLaser() {
        const t = Laya.Pool.getItemByCreateFun($, () =>
          Laya.loader.getRes(he.BULLET_LASER).create(),
        );
        return (
          this._listEffectInPool.set(t, this.recoverLaser.bind(this, t)),
          t
        );
      }
      recoverLaser(t) {
        ((t.visible = !1),
          Laya.Tween.clearAll(t),
          t.removeSelf(),
          Laya.Pool.recover($, t),
          this._listEffectInPool.delete(t));
      }
      getSharkSmoke() {
        const t = Laya.Pool.getItemByCreateFun(Mt, () => {
          let t = new Laya.Image(oe.SMOKE_02);
          return (
            (t.color = "ffc700"),
            (t.material = Laya.loader.getRes(de.ADDITIVE)),
            t
          );
        });
        return (
          this._listEffectInPool.set(t, this.recoverSharkSmoke.bind(this, t)),
          t
        );
      }
      recoverSharkSmoke(t) {
        (Laya.Tween.clearAll(t),
          (t.visible = !1),
          (t.active = !1),
          t.removeSelf(),
          Laya.Pool.recover(Mt, t),
          this._listEffectInPool.delete(t));
      }
      getThorHammer() {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.THOR_HAMMER);
          const t = Laya.Pool.getItemByCreateFun(kt, () => {
            let t = Laya.loader.getRes(he.THOR_HAMMER).create();
            return ((t.visible = !1), (t.active = !1), t);
          });
          return (
            this._listEffectInPool.set(t, this.recoverThorHammer.bind(this, t)),
            t
          );
        });
      }
      recoverThorHammer(t) {
        (t.getComponent(Laya.Animator2D).stop(),
          (t.visible = !1),
          (t.active = !1),
          t.removeSelf(),
          Laya.Pool.recover(kt, t),
          this._listEffectInPool.delete(t));
      }
      getThorHammerAttack() {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.THOR_HAMMER_ATTACK);
          const t = Laya.Pool.getItemByClass(Ot, Ii);
          return (
            this._listEffectInPool.set(
              t,
              this.recoverThorHammerAttack.bind(this, t),
            ),
            t
          );
        });
      }
      recoverThorHammerAttack(t) {
        (t.clear(), Laya.Pool.recover(Ot, t), this._listEffectInPool.delete(t));
      }
      getThorHammerAttackBG() {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.THOR_HAMMER_ATTACK_BG);
          const t = Laya.Pool.getItemByClass(Dt, Ai);
          return (
            this._listEffectInPool.set(
              t,
              this.recoverThorHammerAttackBG.bind(this, t),
            ),
            t
          );
        });
      }
      recoverThorHammerAttackBG(t) {
        (t.clear(), Laya.Pool.recover(Dt, t), this._listEffectInPool.delete(t));
      }
      clearAll() {
        this._listEffectInPool.forEach((t) => {
          t();
        });
      }
    },
    Bi = class t {
      constructor(t, e, i, s) {
        ((this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i));
        for (let t = 0; t < this._points.length; ++t)
          ((this._points[t].x -= this._target.x),
            (this._points[t].y -= this._target.y));
        this._callbackDone = s;
      }
      static create(e, i, s, a) {
        const n = t.pool.pop();
        return n ? (n.setTo(e, i, s, a), n) : new t(e, i, s, a);
      }
      setTo(t, e, i, s) {
        ((this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i));
        for (let t = 0; t < this._points.length; ++t)
          ((this._points[t].x -= this._target.x),
            (this._points[t].y -= this._target.y));
        this._callbackDone = s;
      }
      start() {
        ((this._isRunning = !0),
          (this._previousPosition = new Laya.Point(0, 0)),
          (this._startPosition = new Laya.Point(0, 0)),
          (this._lastTime = 0.001 * Date.now()),
          (this._timePass = 0),
          Laya.timer.frameLoop(1, this, this.update));
      }
      setSpeed(t) {
        this._speed = t;
      }
      update() {
        const e = (0.001 * Date.now() - this._lastTime) * this._speed;
        ((this._lastTime = 0.001 * Date.now()), (this._timePass += e));
        let i = this._timePass / this._duration;
        if ((i > 1 && (i = 1), this._target)) {
          let e = this._points;
          const s = 1 - i,
            a = s * s,
            n = a * s,
            o = i * i,
            h = o * i;
          let l = n * 0 + 3 * i * a * e[0].x + 3 * o * s * e[1].x + h * e[2].x,
            r = n * 0 + 3 * i * a * e[0].y + 3 * o * s * e[1].y + h * e[2].y,
            c = this._startPosition;
          if (t.ENABLE_STACKABLE_ACTIONS) {
            let t = this._target.x,
              e = this._target.y,
              i = this._previousPosition;
            ((c.x = c.x + t - i.x),
              (c.y = c.y + e - i.y),
              (l += c.x),
              (r += c.y),
              (i.x = l),
              (i.y = r),
              this._target.pos(l, r));
          } else this._target.pos(c.x + l, c.y + r);
        }
        i >= 1 &&
          (this._callbackDone &&
            (this._callbackDone(), (this._callbackDone = null)),
          this.clear());
      }
      clear() {
        ((this._callbackDone = null),
          Laya.timer.clearAll(this),
          t.pool.push(this));
      }
    };
  ((Bi.ENABLE_STACKABLE_ACTIONS = !0), (Bi.pool = []));
  var Fi = Bi,
    wi = class t {
      constructor(t, e, i, s = 0, a, n) {
        ((this._startPosition = new Laya.Point()),
          (this._previousPosition = new Laya.Point()),
          (this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i));
        for (let t = 0; t < this._points.length; ++t)
          (this._points[t].x, this._points[t].y);
        ((this._callbackStart = a),
          (this._callbackDone = n),
          (this._delay = s));
      }
      get timePass() {
        return this._timePass;
      }
      set timePass(t) {
        this._timePass = t;
      }
      setTo(t, e, i, s = 0, a, n) {
        ((this._speed = 1),
          (this._target = t),
          (this._duration = e || 1),
          (this._points = i));
        for (let t = 0; t < this._points.length; ++t)
          (this._points[t].x, this._points[t].y);
        ((this._callbackStart = a),
          (this._callbackDone = n),
          (this._delay = s));
      }
      start() {
        ((this._isRunning = !0),
          this._previousPosition.setTo(0, 0),
          this._startPosition.setTo(0, 0),
          (this._lastTime = 0.001 * Date.now()),
          (this._timePass = 0),
          Laya.timer.frameLoop(1, this, this.update));
      }
      setSpeed(t) {
        this._speed = t;
      }
      update() {
        if (!this._isRunning) return;
        const t = (0.001 * Date.now() - this._lastTime) * this._speed;
        if (
          ((this._lastTime = 0.001 * Date.now()),
          (this._timePass += t),
          this._timePass - this._delay <= 0)
        )
          return;
        this._callbackStart &&
          (this._callbackStart(), (this._callbackStart = null));
        let e = (this._timePass - this._delay) / this._duration;
        if ((e > 1 && (e = 1), this._target)) {
          let t = this._points;
          const i = 1 - e,
            s = i * i,
            a = s * i,
            n = e * e,
            o = n * e;
          let h = a * 0 + 3 * e * s * t[0].x + 3 * n * i * t[1].x + o * t[2].x,
            l = a * 0 + 3 * e * s * t[0].y + 3 * n * i * t[1].y + o * t[2].y,
            r = this._startPosition;
          if (Fi.ENABLE_STACKABLE_ACTIONS) {
            let t = this._target.x,
              e = this._target.y,
              i = this._previousPosition;
            ((r.x = r.x + t - i.x),
              (r.y = r.y + e - i.y),
              (h += r.x),
              (l += r.y),
              (i.x = h),
              (i.y = l),
              this._target.pos(h, l));
          } else this._target.pos(r.x + h, r.y + l);
        }
        e >= 1 &&
          ((this._isRunning = !1),
          this._callbackDone &&
            (this._callbackDone(), (this._callbackDone = null)),
          this.clear());
      }
      updateControlPoint(t, e, i) {
        (this._points[0].copy(t),
          this._points[1].copy(e),
          this._points[2].copy(i));
      }
      clear() {
        ((this._callbackDone = null),
          Laya.timer.clearAll(this),
          t.pool.push(this));
      }
      static create(e, i, s, a = 0, n, o) {
        const h = t.pool.pop();
        return h ? (h.setTo(e, i, s, a, n, o), h) : new t(e, i, s, a, n, o);
      }
    };
  ((wi.ENABLE_STACKABLE_ACTIONS = !0), (wi.pool = []));
  var Ei = wi,
    xi = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this.isInit = !1),
          (this.isFlip = !1),
          (this.offsetShadowX = 0),
          (this.offsetShadowY = 0),
          (this.distanceShadowX = 0),
          (this.distanceShadowY = 0),
          (this.isEnable = !0),
          (this._tempPos = new Laya.Point()),
          (this._tempPosA = new Laya.Point()),
          (this._speed = 1),
          (this._animSpeed = 1),
          (this._catching = !1),
          (this._isParalysis = !1),
          (this._lastPos = new Laya.Point()),
          (this._noRotate = !1),
          (this._isRotateLerp = !0),
          (this._rotateTempPoint = new Laya.Point()),
          (this._walkAnimSpeed = 0),
          (this._tempPos1 = new Laya.Point()),
          (this._tempPos2 = new Laya.Point()),
          (this._tempPos3 = new Laya.Point()),
          (this._tmpDerivative = new Laya.Point()),
          (this._tmpPreviousPoint = new Laya.Point()),
          (this._tmpPreviousDerivative = new Laya.Point()),
          (this._tmpNextPoint = new Laya.Point()),
          (this._tmpNextDerivative = new Laya.Point()),
          (this._currentControlPoint1 = new Laya.Point()),
          (this._currentControlPoint2 = new Laya.Point()),
          (this._currentControlPoint3 = new Laya.Point()),
          (this._startPos = new Laya.Point()),
          (this._oldRatio = new Laya.Point()),
          (this.anchorX = 0.5),
          (this.anchorY = 0.5),
          (this.isInit = !1),
          (this.direction = -1),
          (this._fishRectangle = new Laya.Rectangle()),
          (this.offsetRectX = 0),
          (this.offsetRectY = 0),
          (this.isPlayingCollisionEffect = !1));
      }
      get baseFlip() {
        return this._baseFlip;
      }
      set baseFlip(t) {
        this._baseFlip = t;
      }
      get fishRectangle() {
        return this._fishRectangle;
      }
      set fishRectangle(t) {
        this._fishRectangle = t;
      }
      get areaIndex() {
        return this._areaIndex;
      }
      set areaIndex(t) {
        this._areaIndex = t;
      }
      detectCollision(t, e) {
        if (!this.parent) return !1;
        (this.updateCollider(),
          this.parent.globalToLocal(this._tempPos.setTo(t, e)));
        const i = me.Math.pRotateByAngle(
          this._tempPos,
          this._tempPosA.setTo(this.x, this.y),
          -(this.rotation - 90) * me.Math.RAD,
        );
        return (
          this.parent.localToGlobal(i),
          this._fishRectangle.contains(i.x, i.y)
        );
      }
      setId(t) {
        this.fishId = t;
      }
      getId() {
        return this.fishId;
      }
      setKind(t) {
        this.kind = t;
      }
      getKind() {
        return this.kind;
      }
      setIsAlive(t) {
        this.isAlive = t;
      }
      getIsAlive() {
        return this.isAlive;
      }
      getPrefab(t) {
        return Ke.getInstance().getPrefabFish(t);
      }
      setIsInit(t) {
        this.isInit = t;
      }
      getIsInit() {
        return this.isInit;
      }
      getIsFlip() {
        return this.isFlip;
      }
      get catching() {
        return this._catching;
      }
      set catching(t) {
        this._catching = t;
      }
      get noRotate() {
        return this._noRotate;
      }
      set noRotate(t) {
        this._noRotate = t;
      }
      get isParalysis() {
        return this._isParalysis;
      }
      set isParalysis(t) {
        this._isParalysis = t;
      }
      getWorldPosition(t) {
        if ((null == t && (t = new Laya.Point()), this._spine)) {
          let e = [];
          switch (this.kind) {
            case 16:
              e = [
                "body",
                "nail",
                "tail",
                "head",
                "nose",
                "tail_02",
                "F_lag0010",
                "BF_lag0010",
              ];
              break;
            case 20:
              e = [
                "body",
                "tail01",
                "tail03",
                "tail05",
                "tail07",
                "head",
                "head_angle01",
                "bone9",
                "bone11",
                "bone13",
                "bone15",
              ];
              break;
            case 19:
              e = [
                "root_texture0.94",
                "neck01",
                "bone18",
                "bone49",
                "bone52",
                "bone15",
                "bone22",
                "bone32",
                "bone4",
              ];
              break;
            case 18:
              break;
            case 21:
              e = ["body", "head", "body7"];
          }
          for (let i = 0; i < e.length; ++i) {
            const s = e[i],
              a = this._spine.getBoneByName(s);
            if (null == a) continue;
            (t.setTo(a.x, a.y),
              (t.x += zt[this.kind].offsetAim[0]),
              (t.y += zt[this.kind].offsetAim[1]));
            const n = this._spine.localToGlobal(t);
            if (n.x <= S && n.x >= 0 && n.y <= L && n.y >= 0) return n;
          }
        }
        switch (this.kind) {
          case 13:
          case 14:
          case 15:
          case 17:
          case 18:
            ((t.x =
              0.5 * this.width +
              zt[this.kind].offsetAim[0] * (this.isFlip ? -1 : 1)),
              (t.y = 0.5 * this.height + zt[this.kind].offsetAim[1]));
            break;
          default:
            ((t.x = 0.5 * this.width + zt[this.kind].offsetAim[0]),
              (t.y = 0.5 * this.height + zt[this.kind].offsetAim[1]));
        }
        return this.localToGlobal(t);
      }
      lerp(t, e, i) {
        return t + (e - t) * i;
      }
      isInGameScene() {
        return (
          this.getWorldPosition(this._tempPos),
          this._tempPos.x <= S &&
            this._tempPos.x >= 0 &&
            this._tempPos.y <= L &&
            this._tempPos.y >= 0
        );
      }
      enable() {
        ((this.isEnable = !0), (this.alpha = 1));
      }
      disable() {
        ((this.isEnable = !1), (this.alpha = 0.5));
      }
      setSprite(t, e) {
        t &&
          ((this.fish = t),
          (this.fish.anchorX = 0.5),
          (this.fish.anchorY = 0.5),
          this.setPos(this.fish),
          this.addChild(t),
          (this.animation = this.fish.getComponent(Laya.Animator2D)),
          (this.fishSprite = this.fish.getChildByName("swim")),
          (this.shadow = this.fish.getChildByName("shadow")));
      }
      setPos(t) {
        const e = zt[this.kind];
        let i = this._baseFlip;
        const s = this.rotation - 90;
        Math.abs(s) > 90 && (i *= -1);
        const a = 0.5 * e.size[0] + e.offsetFish[0] * i,
          n = 0.5 * e.size[1] + e.offsetFish[1];
        t.pos(a, n);
      }
      setSize(t) {
        ((this.offsetRectX = t.offsetCollider[0]),
          (this.offsetRectY = t.offsetCollider[1]),
          (this._fishRectangle.width = t.size[0]),
          (this._fishRectangle.height = t.size[1]),
          this.size(this._fishRectangle.width, this._fishRectangle.height));
      }
      init(t) {
        if ((this.setIsAlive(!1), this.setKind(t), this.getIsInit())) return;
        let e = zt[t];
        if (!e) return;
        let i = this.getPrefab(t).create();
        i &&
          ((this.zOrder = e.zOrder),
          this.setSize(e),
          this.setSprite(i, e),
          this.setIsInit(!0),
          (this._baseFlip = e.baseFlip));
      }
      swim(t = !1) {
        const e = "fish_" + this.kind.toString() + "_move";
        (this.animation.gotoAndStopByFrame(e, 0, 0), this.animation.play(e));
      }
      moveByPath(t, e = 0, i = 0) {
        i *= 0.001;
        const s = Je.getInstance().getPathFishById(t);
        if (!s) return void this.remove();
        s.point ? this.pathMove(s, 0, i) : this.remove();
        const a = zt[this.getKind()];
        ((this._walkAnimSpeed = a.walkAnimSpeed || 0),
          this.setIsAlive(!0),
          this.swim(),
          this.startUpdate(),
          this.updateFlip());
      }
      pathMove(t, e, i = 0) {
        if (((this._pathData = t), !t.isAdded)) {
          t.isAdded = !0;
          let e = t.point[t.point.length - 1];
          t.point.push({
            delay: 0,
            distance: e.distance,
            duration: 2,
            isSpline: e.isSpline,
            x: e.x,
            y: e.y,
          });
        }
        if (
          ((this._previousPoint = null),
          (this._previousDerivative = null),
          i > 0)
        ) {
          for (let e = 0; e < t.point.length - 1; ++e) {
            let s =
              Number(t.point[e + 1].duration || 0) +
                (e > 0 ? Number(t.point[e].delay) : 0) || 0;
            if (i < s) {
              this.currentPointIndex = e;
              const s =
                  this._pathData.point[e].x / Ze.getInstance().scaleRate.x,
                a = this._pathData.point[e].y / Ze.getInstance().scaleRate.y;
              return (
                this.pos(s, a),
                this._lastPos.setTo(s, a),
                void this.movePathNextPoint(
                  i,
                  e > 0 ? Number(t.point[e].delay) : 0,
                )
              );
            }
            i -= s;
          }
          if (i > 0) return void this.remove();
        } else {
          const t = this._pathData.point[0].x / Ze.getInstance().scaleRate.x,
            e = this._pathData.point[0].y / Ze.getInstance().scaleRate.y;
          (this.pos(t, e),
            this._lastPos.setTo(t, e),
            (this.currentPointIndex = 0),
            this.movePathNextPoint(i));
        }
      }
      movePathNextPoint(t = 0, e = 0) {
        ++this.currentPointIndex;
        let i = this.currentPointIndex,
          s = this._pathData.point[i];
        if (i >= this._pathData.length - 1) return void this.remove();
        if (null == s) return void this.remove();
        this._previousPoint ||
          ((this._previousPoint = this._tmpPreviousPoint.copy(
            this._pathData.point[i - 1],
          )),
          (this._previousDerivative = this._tmpPreviousDerivative.copy(
            this.derivative(this._previousPoint, s, 0.5),
          )));
        const a = this._tmpNextPoint.copy(s);
        let n = null;
        if (this._pathData.point[i + 1]) {
          let t = this._tempPos1.copy(this._pathData.point[i - 1]),
            e = this._tempPos2.copy(this._pathData.point[i + 1]);
          n = this._tmpNextDerivative.copy(this.derivative(t, e, 0.5));
        } else {
          let t = this._tempPos1.copy(this._pathData.point[i - 1]),
            e = this._tempPos2.copy(s);
          n = this._tmpNextDerivative.copy(this.derivative(t, e, 0.5));
        }
        const o = this._tempPos1,
          h = this._tempPos2;
        (o.copy(this._previousDerivative),
          me.Math.pMultIn(o, 1 / 3),
          me.Math.pAddIn(o, this._previousPoint),
          h.copy(a),
          me.Math.pSubIn(h, me.Math.pMult(n, 1 / 3)));
        const l = s.duration;
        let r = 1,
          c = !1;
        (s.distance > 0 &&
          s.duration > 0 &&
          this._walkAnimSpeed > 0 &&
          ((r = s.distance / s.duration / this._walkAnimSpeed),
          (c = Math.abs(r - 1) > 0.01)),
          this._previousPoint.copy(a),
          this._previousDerivative.copy(n),
          this._currentControlPoint1.copy(o),
          this._currentControlPoint2.copy(h),
          this._currentControlPoint3.copy(a),
          (o.x = o.x / Ze.getInstance().scaleRate.x - this.x),
          (o.y = o.y / Ze.getInstance().scaleRate.y - this.y),
          (h.x = h.x / Ze.getInstance().scaleRate.x - this.x),
          (h.y = h.y / Ze.getInstance().scaleRate.y - this.y),
          (a.x = a.x / Ze.getInstance().scaleRate.x - this.x),
          (a.y = a.y / Ze.getInstance().scaleRate.y - this.y),
          this._startPos.setTo(
            this.x * Ze.getInstance().scaleRate.x,
            this.y * Ze.getInstance().scaleRate.y,
          ),
          this._oldRatio.copy(Ze.getInstance().scaleRate),
          (this._currentBezierAction = Ei.create(
            this,
            l,
            [o, h, a],
            e,
            () => {
              c && this.walkSpeed(r);
            },
            () => {
              ((this._currentBezierAction = null),
                c && this.walkSpeed(1),
                s.delay > 0
                  ? this.movePathNextPoint(0, s.delay)
                  : this.movePathNextPoint());
            },
          )),
          this._currentBezierAction.setSpeed(this._speed),
          this._currentBezierAction.start(),
          (this._currentBezierAction.timePass = t));
      }
      derivative(t, e, i) {
        return this._tmpDerivative.setTo((e.x - t.x) * i, (e.y - t.y) * i);
      }
      forceRenewSpeed() {
        0 != this._speed &&
          this._currentBezierAction &&
          this._currentBezierAction.setSpeed(this._speed);
      }
      resetScale() {
        if (zt[this.getKind()]) {
          let t = zt[this.getKind()].scale || 1;
          this.scale(t, t);
        }
      }
      setSpine() {}
      reset() {
        (this.setSpine(),
          this.setAnimSpeed(1),
          this.setMoveSpeed(1),
          this.resetCollisionEffect(),
          this.resetScale(),
          this.setSize(zt[this.kind]),
          this.fish &&
            (this.setPos(this.fish),
            this.fish.scale(1, 1),
            (this.fish.visible = !0),
            (this.fish.active = !0)),
          (this.isFlip = !1),
          (this.alpha = 1),
          (this.direction = -1),
          (this.visible = !0),
          (this.active = !0),
          (this.isEnable = !0),
          (this.rotation = 0));
      }
      setOnRemoveCallback(t) {
        this.onRemoveCallback = t;
      }
      remove(t = !1) {
        ((this.active = !1),
          (this.visible = !1),
          this.setIsAlive(!1),
          this._currentBezierAction &&
            (this._currentBezierAction.clear(),
            (this._currentBezierAction = null)),
          this.stopUpdate(),
          xe.getInstance().stopShake(this),
          Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this._forceMoveTween = null),
          (this._isParalysis = !1),
          Yi.getInstance().removeFishById(this.kind, this.fishId),
          this.onRemoveCallback && this.onRemoveCallback(),
          this.removeSelf(),
          Yi.getInstance().pushFishToPool(this));
      }
      playCollisionEffect(t = 215, e = !0) {
        !this.isPlayingCollisionEffect &&
          this.fishSprite &&
          ((this.isPlayingCollisionEffect = !0),
          (this.fishSprite.filters = [Vt]),
          e && this.setAnimSpeed(4),
          Laya.timer.once(t, this, this.stopCollisionEffect));
      }
      stopCollisionEffect() {
        ((this.isPlayingCollisionEffect = !1),
          this.fishSprite && (this.fishSprite.filters = []),
          this.setAnimSpeed(1));
      }
      resetCollisionEffect() {
        this.stopCollisionEffect();
      }
      effectCatchFish() {
        this._noRotate = !0;
        const t = this.scaleX,
          e = this.scaleY;
        (this.setIsAlive(!1),
          this.setMoveSpeed(0),
          xe.getInstance().stopShake(this));
        const i = this.y;
        me.Tween.union(
          me.Tween.tweenTo(
            this,
            {
              scaleX: 1.5 * t,
              scaleY: 1.5 * e,
              y: i - 60,
            },
            120,
          ),
          me.Tween.tweenTo(this, {}, 120),
          me.Tween.tweenTo(
            this,
            {
              scaleX: t,
              scaleY: e,
              y: i,
            },
            120,
          ),
          me.Tween.tweenTo(this, {}, 100),
          me.Tween.tweenTo(
            this,
            {
              alpha: 0,
            },
            100,
            Laya.Ease.sineIn,
          ),
          me.Tween.callFunc(this, () => {
            this.remove();
          }),
        );
      }
      startUpdate() {
        (Laya.timer.frameLoop(5, this, this.update),
          Laya.timer.frameLoop(1, this, this.updateRotation),
          (this._noRotate = !1));
      }
      stopUpdate() {
        (Laya.timer.clear(this, this.update),
          Laya.timer.clear(this, this.updateRotation));
      }
      update() {
        (this.updateFlip(),
          this.parent && this.updateShadow(),
          y && (this.updateCollider(), this.drawDebugCollider()));
      }
      updateRotation() {
        if (this._noRotate) return;
        if (this.x == this._lastPos.x && this.y == this._lastPos.y) return;
        me.Math.pSubIn(
          this._rotateTempPoint.setTo(this.x, this.y),
          this._lastPos,
        );
        let t =
          Math.atan2(this._rotateTempPoint.y, this._rotateTempPoint.x) *
            me.Math.DEG +
          90;
        if ((t < 0 && (t += 360), this._isRotateLerp))
          if (Math.abs(t - this.rotation) > 180) this.rotation = Math.round(t);
          else {
            let e = me.Math.lerp(this.rotation, t, 0.05);
            this.rotation = Math.round(e);
          }
        else this.rotation = Math.round(t);
        this._lastPos.setTo(this.x, this.y);
      }
      updateFlip() {
        const t = this.rotation > 180,
          e = -1 == (t ? -this._baseFlip : this._baseFlip);
        e != this.isFlip && (this.flipFish(t), (this.isFlip = e));
      }
      flipFish(t) {
        ((this.fish.scaleX =
          Math.abs(this.fish.scaleX) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this.fish));
      }
      updateCollider() {
        const t = this.rotation - 90,
          e = Math.abs(t) < 90;
        if (
          ((this._fishRectangle.width = zt[this.kind].size[1]),
          (this._fishRectangle.height = zt[this.kind].size[0]),
          (this.offsetRectX = zt[this.kind].offsetCollider[1]),
          (this.offsetRectY = zt[this.kind].offsetCollider[0]),
          e
            ? ((this.offsetRectX *= -1), (this.offsetRectY *= this._baseFlip))
            : ((this.offsetRectX *= 1), (this.offsetRectY *= -this._baseFlip)),
          this.parent)
        ) {
          const t = this.parent.localToGlobal(
            this._tempPos.setTo(
              this.x - this._fishRectangle.width / 2 + this.offsetRectX,
              this.y - this._fishRectangle.height / 2 + this.offsetRectY,
            ),
          );
          ((this._fishRectangle.x = t.x), (this._fishRectangle.y = t.y));
        }
      }
      drawDebugCollider() {
        this.parent &&
          (this.parent.graphics.drawRect(
            this._fishRectangle.x / Ze.getInstance().scaleRate.x,
            this._fishRectangle.y / Ze.getInstance().scaleRate.y,
            this._fishRectangle.width,
            this._fishRectangle.height,
            null,
            "#ecf024",
            2,
          ),
          this.parent.graphics.drawCircle(
            this.x,
            this.y,
            10,
            "#ffffff",
            "#ffffff",
            4,
          ));
      }
      isShadowInScene() {
        this.getWorldPosition(this._tempPos);
        const t = zt[this.kind];
        return (
          !!t &&
          this._tempPos.x <= S + t.size[0] &&
          this._tempPos.x >= 0 - t.size[0] &&
          this._tempPos.y <= L + t.size[1] &&
          this._tempPos.y >= 0 - t.size[1]
        );
      }
      updateShadow() {
        if (null == this.shadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.05 * (this.y - N.y)),
          (this.distanceShadowX = 0.05 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this.shadow && this.parent) {
          this.fish.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this.shadow.pos(e, i);
        }
      }
      isPathEnd() {
        return this.currentPointIndex >= this.realPathPoints.length - 1;
      }
      setAnimSpeed(t = 1) {
        if (((this._animSpeed = t), null != this.kind && this.animation)) {
          const e = "fish_" + this.kind.toString() + "_move";
          ((this.animation.speed = t),
            this.animation.gotoAndStopByFrame(e, 0, 0),
            this.animation.play(e));
        }
      }
      setMoveSpeed(t = 1) {
        ((this._speed = t),
          this._currentBezierAction && this._currentBezierAction.setSpeed(t));
      }
      setAnimSpeedForWhile(t, e) {
        (this.setAnimSpeed(t),
          Laya.timer.once(1e3 * e, this, () => {
            this.setAnimSpeed();
          }));
      }
      forceMove(t, e) {
        this.stopForceMove();
        const i = this.x + t.x / Ze.getInstance().scaleRate.x,
          s = this.y + t.y / Ze.getInstance().scaleRate.y;
        this._forceMoveTween = Laya.Tween.to(
          this,
          {
            x: i,
            y: s,
          },
          1e3 * e,
          null,
          Laya.Handler.create(this, () => {
            this._forceMoveTween = null;
          }),
        );
      }
      stopForceMove() {
        this._forceMoveTween &&
          (this._forceMoveTween.clear(), (this._forceMoveTween = null));
      }
      resizeFish() {
        this._currentBezierAction
          ? (this._tempPos1.copy(this._currentControlPoint1),
            this._tempPos2.copy(this._currentControlPoint2),
            this._tempPos3.copy(this._currentControlPoint3),
            (this._tempPos1.x =
              (this._tempPos1.x - this._startPos.x) /
              Ze.getInstance().scaleRate.x),
            (this._tempPos1.y =
              (this._tempPos1.y - this._startPos.y) /
              Ze.getInstance().scaleRate.y),
            (this._tempPos2.x =
              (this._tempPos2.x - this._startPos.x) /
              Ze.getInstance().scaleRate.x),
            (this._tempPos2.y =
              (this._tempPos2.y - this._startPos.y) /
              Ze.getInstance().scaleRate.y),
            (this._tempPos3.x =
              (this._tempPos3.x - this._startPos.x) /
              Ze.getInstance().scaleRate.x),
            (this._tempPos3.y =
              (this._tempPos3.y - this._startPos.y) /
              Ze.getInstance().scaleRate.y),
            this._currentBezierAction.updateControlPoint(
              this._tempPos1,
              this._tempPos2,
              this._tempPos3,
            ),
            this.pos(
              (this.x * this._oldRatio.x) / Ze.getInstance().scaleRate.x,
              (this.y * this._oldRatio.y) / Ze.getInstance().scaleRate.y,
            ))
          : this.pos(
              (this.x * this._oldRatio.x) / Ze.getInstance().scaleRate.x,
              (this.y * this._oldRatio.y) / Ze.getInstance().scaleRate.y,
            );
      }
      walkSpeed(t) {
        this.setAnimSpeed(t);
      }
    },
    vi = class extends xi {
      constructor() {
        (super(), (this._isCaught = !1));
      }
      init(t) {
        if ((this.setIsAlive(!1), this.setKind(t), this.getIsInit())) return;
        let e = zt[t];
        e &&
          ((this.zOrder = e.zOrder),
          this.setSize(e),
          this.setIsInit(!0),
          (this._baseFlip = e.baseFlip));
      }
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(16)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = -90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25),
            this.addChild(this._spineShadow)),
          (this._spine = Ni.getInstance().getSpineFish(16)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = -90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(),
              this._spineShadow.resume(),
              this.resetBackRate())
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      setCallbackCaught(t) {
        this._callbackCaught = t;
      }
      remove() {
        (super.remove(),
          this._isCaught &&
            ((this._isCaught = !1),
            this._callbackCaught && this._callbackCaught(),
            (this._callbackCaught = null)),
          this.stopTint(),
          this._spine &&
            (Ni.getInstance().recoverSpineFish(this._spine, 16),
            this.removeChild(this._spine),
            (this._spine = null)),
          this._spineShadow &&
            (Ni.getInstance().recoverSpineFish(this._spineShadow, 16),
            this.removeChild(this._spineShadow),
            (this._spineShadow = null)));
      }
      playCollisionEffect() {
        null != this._spine && null != this._spineShadow && this.tint();
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [Qt])));
      }
      stopTint() {
        ((this._isTint = !1), this._spine && (this._spine.filters = []));
      }
      resetBackRate() {
        (this._spine && this._spine.playbackRate(1.1),
          this._spineShadow && this._spineShadow.playbackRate(1.1));
      }
      flipFish(t) {
        (this._spine &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine)),
          this._spineShadow &&
            (this._spineShadow.scaleY =
              Math.abs(this._spineShadow.scaleY) *
              this._baseFlip *
              (t ? -1 : 1)));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          this.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this._spineShadow.pos(e, i);
        }
      }
      reset() {
        super.reset();
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
    },
    Ri = class extends xi {
      constructor() {
        (super(), (this._isCaught = !1));
      }
      get isCaught() {
        return this._isCaught;
      }
      set isCaught(t) {
        this._isCaught = t;
      }
      setSprite(t, e) {
        t &&
          ((this._particle = t.getChildByName("particle_star")),
          this._particle &&
            ((this._particle.zOrder = 1),
            this.addChild(this._particle),
            this._particle.pos(e.size[0] >> 1, e.size[1] >> 1),
            (this._particleScript = this._particle.getComponent(Laya.Script))));
      }
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(19)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = -90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            this.addChild(this._spineShadow),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25)),
          (this._spine = Ni.getInstance().getSpineFish(19)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = -90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(),
              this._spineShadow.resume(),
              this.setAnimSpeed(1))
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      startMiniGame(t) {
        if (null == this._spine || null == this._spineShadow) return;
        ((this._isCaught = !0),
          (this._noRotate = !0),
          this.setIsAlive(!1),
          Laya.timer.clear(this, this.stopTint),
          this.setMoveSpeed(0),
          xe.getInstance().stopShake(this),
          this.tint(),
          this._spine.play("dead", !1),
          this._spineShadow.play("dead", !1),
          Laya.timer.once(1e3, this, () => {
            (this._spine && this._spine.playbackRate(5),
              this._spineShadow && this._spineShadow.playbackRate(5),
              (this.noRotate = !1),
              this.swim(),
              this.setMoveSpeed(1),
              this.setAnimSpeed(1),
              xe.getInstance().stopShake(this),
              this.stopTint(),
              Laya.timer.once(500, this, () => {
                (this._spine && this._spine.playbackRate(1),
                  this._spineShadow && this._spineShadow.playbackRate(1),
                  this.moveToHidePoint(t));
              }));
          }));
        Fe.getInstance().gameMain.playerMe.isMe &&
          ai.getInstance().changeBGM(pe.BGM_PHOENIX_REWARD);
      }
      moveToHidePoint(t) {
        const e = Ze.getInstance().scaleRate,
          i = me.Math.pRotateByAngle(
            new Laya.Point(1, 0),
            new Laya.Point(0, 0),
            (this.rotation - 90) * me.Math.RAD,
          );
        (me.Math.pMultIn(i, 2e3),
          Laya.Tween.to(
            this,
            {
              x: i.x / e.x,
              y: i.y / e.y,
            },
            700,
            (t, e, i, s) => i * Math.pow(t / s, 2) + e,
            Laya.Handler.create(this, () => {
              ((this.visible = !1), (this._noRotate = !1), t && t());
            }),
          ));
      }
      remove(t = !1) {
        !this._isCaught || t
          ? (super.remove(),
            this._particleScript.stopSystem(),
            this.stopTint(),
            this._spine &&
              (Ni.getInstance().recoverSpineFish(this._spine, 19),
              this.removeChild(this._spine),
              (this._spine = null)),
            this._spineShadow &&
              (Ni.getInstance().recoverSpineFish(this._spineShadow, 19),
              this.removeChild(this._spineShadow),
              (this._spineShadow = null)))
          : (this._isRemoved = !0);
      }
      playCollisionEffect() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isCaught || this.tint());
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [te])));
      }
      stopTint() {
        ((this._isTint = !1), this._spine && (this._spine.filters = []));
      }
      flipFish(t) {
        null != this._spine &&
          null != this._spineShadow &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          (this._spineShadow.scaleY =
            Math.abs(this._spineShadow.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          const e = this.globalToLocal(
              this.parent.localToGlobal(
                this._tempPos.setTo(
                  this.x + this.offsetShadowX,
                  this.y + this.offsetShadowY,
                ),
              ),
            ),
            i = e.x + (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            s = e.y + t.offsetFish[1];
          this._spineShadow.pos(i, s);
        }
      }
      getStartPoint() {
        return this.realPathPoints[this.currentPointIndex];
      }
      getIsRemove() {
        return this._isRemoved;
      }
      rebirth() {
        (this.setMoveSpeed(1), (this.visible = !0), this.setIsAlive(!0));
      }
      reset() {
        (super.reset(),
          this._particleScript.resetSystem(),
          (this._isRemoved = !1),
          (this._isCaught = !1));
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
    },
    Mi = class t extends xi {
      constructor() {
        (super(),
          (this._baseKind = 7),
          (this._totalHit = 0),
          (this._rateUpKind = -1),
          (this._basePlayBackRate = 1),
          (this._isSpeedUpdatedRandom = !1));
      }
      setSprite(t, e) {
        t &&
          ((this.fish = this.getPrefab(this._baseKind).create()),
          this.setPos(this.fish),
          this.addChild(this.fish),
          (this._animator2D = this.fish.getComponent(Laya.Animator2D)),
          (this.shadow = this.fish.getChildByName("shadow")),
          (this.fishSprite = this.fish.getChildByName("sprite")),
          this.addChild(t),
          (this.fishAura = t),
          this.fishAura.pos(
            0.5 * e.size[0] + e.offsetFish[0],
            0.5 * e.size[1] + e.offsetFish[1] - 30,
          ),
          this.fishAura.scale(0.35, 0.385),
          (this.fishAura.visible = !1),
          (this.fishAura.active = !1),
          (this.fishAura.zOrder = -1),
          (this.fishAuraAnimator = this.fishAura.getComponent(
            Laya.Animator2D,
          )));
      }
      setAuraByKind(t, e) {
        if (!this.fishAura) return;
        let i = t - this._baseKind + 1;
        if (i < 1 || i > 3) return;
        let s = "lv" + i + "_" + e;
        if (1 == i && "run" == e)
          return (
            this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
            (this.fishAura.visible = !1),
            void (this.fishAura.active = !1)
          );
        ((this.fishAura.visible = !0),
          (this.fishAura.active = !0),
          this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
          this.fishAuraAnimator.play(s));
      }
      resetSpineFilter() {
        if (!this.fish) return;
        3 !== this.kind - this._baseKind + 1
          ? (this.fish.filters = [])
          : (this.fish.filters = [Jt]);
      }
      init(e) {
        (this.setIsAlive(!1),
          this.setKind(e),
          (this.active = !1),
          (this.visible = !1));
        let i = zt[e];
        if (!i) return;
        if (this.getIsInit())
          return (
            this.setSize(i),
            (this.zOrder = i.zOrder),
            (this._rateUpKind = i.rateUpKind || -1),
            void this.setAuraByKind(e, t.FISH_RUN_ANIM)
          );
        let s = Laya.loader.getRes(he.FISH_AURA).create();
        s &&
          ((this.zOrder = i.zOrder),
          (this._rateUpKind = i.rateUpKind || -1),
          (this._baseFlip = i.baseFlip),
          this.setSize(i),
          this.setSprite(s, i),
          this.setAuraByKind(e, t.FISH_RUN_ANIM),
          this.setIsInit(!0));
      }
      swim() {
        this.getIsAlive() &&
          this.fish &&
          ((this.fish.visible = !0),
          (this.fish.active = !0),
          9 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_7_l_move", 0, 0),
              this._animator2D.play("fish_7_l_move"))
            : (this._animator2D.gotoAndStopByFrame("fish_7_move", 0, 0),
              this._animator2D.play("fish_7_move")));
      }
      angry() {
        this.getIsAlive() &&
          this.fish &&
          (9 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_7_l_anger", 0, 0),
              this._animator2D.play("fish_7_l_anger"))
            : (this._animator2D.gotoAndStopByFrame("fish_7_anger", 0, 0),
              this._animator2D.play("fish_7_anger")),
          Laya.timer.once(1e3 / this._animSpeed, this, this.endAngry));
      }
      endAngry() {
        (this.updateMoveSpeed(1), this.swim());
      }
      remove() {
        (super.remove(),
          this.stopTint(),
          (this._isVeryAngry = !1),
          (this._totalHit = 0),
          (this._isUpdatingSpeed = !1),
          (this._isSpeedUpdatedRandom = !1),
          (this._randomById = null),
          this.setAuraByKind(this._baseKind, t.FISH_RUN_ANIM),
          this._upKindTween &&
            (Laya.Tween.clear(this._upKindTween), (this._upKindTween = null)));
      }
      effectAngry() {
        xe.getInstance().stopShake(this);
        let t = _i.randomWithRate([50, 1], [20, 1.5], [20, 2], [10, 3]);
        (this.updateMoveSpeed(t), this.angry(), this.forceRenewSpeed());
      }
      effectUpKind(e) {
        if (!this.getIsInit() || !this.getIsAlive()) return;
        if (e - this._baseKind > 2) return;
        let i = this.kind;
        if (e <= i) return;
        let s = zt[e];
        if (!s) return;
        (this.setKind(e),
          (this.zOrder = s.zOrder),
          (this._rateUpKind = s.rateUpKind || -1),
          this.setAuraByKind(i, t.FISH_UPSIZE_ANIM),
          this.resetSpineFilter(),
          this.angry());
        const a = s.scale;
        let n = 1,
          o = 1;
        switch (this.kind) {
          case this._baseKind:
            break;
          case this._baseKind + 1:
            ((n = 1.5), (o = 1.2));
            break;
          case this._baseKind + 2:
            ((o = 1.3), (n = 1.8));
        }
        (this._upKindTween &&
          (Laya.Tween.clear(this._upKindTween), (this._upKindTween = null)),
          (this._upKindTween = Laya.Tween.to(
            this,
            {
              scaleX: a * n,
              scaleY: a * n,
            },
            400,
            null,
            Laya.Handler.create(this, () => {
              ((this._upKindTween = null),
                (this._upKindTween = Laya.Tween.to(
                  this,
                  {
                    scaleX: a * o,
                    scaleY: a * o,
                  },
                  300,
                  null,
                  Laya.Handler.create(this, () => {
                    ((this._upKindTween = null), this.setSize(s));
                  }),
                  100,
                )));
            }),
            100,
          )),
          ai.getInstance().playSFX(pe.FISH_SPECIAL_UP_KIND));
      }
      flipFish(t) {
        ((this.fish.scaleX =
          Math.abs(this.fish.scaleX) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this.fish));
      }
      updateShadow() {
        if (null == this.shadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this.shadow) {
          this.fish.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this.shadow.pos(e, i);
        }
      }
      playCollisionEffect() {
        (this.tint(),
          this._totalHit++,
          this._totalHit >= 20 &&
            ((this._totalHit = 0),
            this._randomById || (this._randomById = _i.splitmix32(this.fishId)),
            this._rateUpKind >= this._randomById() &&
              this.effectUpKind(this.kind + 1)));
      }
      tint() {
        !this._isTint &&
          this.fish &&
          ((this._isTint = !0),
          Laya.timer.once(180, this, this.stopTint),
          (this.fish.filters = [jt]));
      }
      stopTint() {
        ((this._isTint = !1), this.resetSpineFilter());
      }
      updateMoveSpeed(t, e = 0) {
        this._isUpdatingSpeed ||
          (e > 0 &&
            ((this._isUpdatingSpeed = !0),
            Laya.timer.once(e, this, () => {
              this._isUpdatingSpeed = !1;
            })));
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t), (this._animator2D.speed = t), this.swim());
      }
      getLevel() {
        return this.kind - this._baseKind + 1;
      }
      resetScale() {
        if (zt[this.getKind()]) {
          let t = zt[this.getKind()].scale || 1;
          switch (this.getLevel()) {
            case 1:
              break;
            case 2:
              t *= 1.2;
              break;
            case 3:
              t *= 1.3;
          }
          this.scale(t, t);
        }
      }
    };
  ((Mi.FISH_RUN_ANIM = "run"),
    (Mi.FISH_UPSIZE_ANIM = "upsize"),
    (Mi.FISH_REMOVE_ANIM = "remove"));
  var ki = Mi,
    Oi = class t extends xi {
      constructor() {
        (super(),
          (this._baseKind = 10),
          (this._totalHit = 0),
          (this._rateUpKind = -1),
          (this._isSpeedUpdatedRandom = !1));
      }
      setSprite() {
        let t = Laya.loader.getRes(he.FISH_AURA);
        t &&
          ((t = t.create()),
          this.addChild(t),
          (this.fishAura = t),
          this.fishAura.scale(0.257, 0.55),
          (this.fishAura.visible = !1),
          (this.fishAura.active = !1),
          (this.fishAura.zOrder = -1),
          (this.fishAuraAnimator = this.fishAura.getComponent(
            Laya.Animator2D,
          )));
        let e = this.getPrefab(this._baseKind);
        e &&
          ((this.fish = e.create()),
          this.setPos(this.fish),
          this.addChild(this.fish),
          (this._animator2D = this.fish.getComponent(Laya.Animator2D)),
          (this.shadow = this.fish.getChildByName("shadow")),
          (this.fishSprite = this.fish.getChildByName("sprite")),
          (this.fishParticle = this.fish.getChildByName("particle")),
          this.fishParticle &&
            (this.fishParticleScript = this.fishParticle.getComponent(
              Laya.Script,
            )));
      }
      setAuraByKind(t, e) {
        if (!this.fishAura) return;
        let i = t - this._baseKind + 1;
        if (i < 1 || i > 3) return;
        let s = "lv" + i + "_" + e;
        1 == i && "run" == e
          ? (this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
            (this.fishAura.visible = !1),
            (this.fishAura.active = !1))
          : ((this.fishAura.visible = !0),
            (this.fishAura.active = !0),
            this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
            this.fishAuraAnimator.play(s));
      }
      updateGroupPos() {
        this.setPos(this.fish);
        let t = zt[this.kind];
        t &&
          (this.fishAura &&
            this.fishAura.pos(
              0.5 * t.size[0] + t.offsetFish[0],
              0.5 * t.size[1] + t.offsetFish[1] - 7,
            ),
          this.fishParticle &&
            this.fishParticle.pos(
              0.5 * t.size[0] + t.offsetFish[0],
              0.5 * t.size[1] + t.offsetFish[1] + 76,
            ));
      }
      resetFishFilter() {
        this.fish && (this.fish.filters = []);
      }
      init(e) {
        (this.setIsAlive(!1),
          this.setKind(e),
          (this.active = !1),
          (this.visible = !1));
        let i = zt[e];
        if (i) {
          if (this.getIsInit())
            return (
              this.setSize(i),
              (this.zOrder = i.zOrder),
              (this._rateUpKind = i.rateUpKind || -1),
              this.setAuraByKind(e, t.FISH_RUN_ANIM),
              void this.updateGroupPos()
            );
          ((this.zOrder = i.zOrder),
            (this._rateUpKind = i.rateUpKind || -1),
            (this._baseFlip = i.baseFlip),
            this.setSize(i),
            this.setSprite(),
            this.setAuraByKind(e, t.FISH_RUN_ANIM),
            this.updateGroupPos(),
            this.setIsInit(!0));
        }
      }
      swim() {
        this.fish &&
          ((this.fish.visible = !0),
          (this.fish.active = !0),
          12 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_10_l_move", 0, 0),
              this._animator2D.play("fish_10_l_move"))
            : (this._animator2D.gotoAndStopByFrame("fish_10_move", 0, 0),
              this._animator2D.play("fish_10_move")),
          this.clearSquidParticle(),
          this._animSpeed > 0 &&
            (this.showSquidParticle(),
            Laya.timer.loop(
              4e3 / this._animSpeed,
              this,
              this.showSquidParticle,
            )));
      }
      angry() {
        this.fish &&
          (12 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_10_l_anger", 0, 0),
              this._animator2D.play("fish_10_l_anger"))
            : (this._animator2D.gotoAndStopByFrame("fish_10_anger", 0, 0),
              this._animator2D.play("fish_10_anger")),
          this.clearSquidParticle(),
          this._animSpeed > 0 &&
            (this.showSquidParticle(),
            Laya.timer.once(1e3 / this._animSpeed, this, this.endAngry)));
      }
      endAngry() {
        (this.updateMoveSpeed(1), this.swim());
      }
      remove() {
        (super.remove(),
          this.stopTint(),
          (this._isVeryAngry = !1),
          (this._totalHit = 0),
          (this._isUpdatingSpeed = !1),
          (this._isSpeedUpdatedRandom = !1),
          (this._randomById = null),
          this.setAuraByKind(this._baseKind, t.FISH_RUN_ANIM),
          this._upKindTween &&
            (Laya.Tween.clear(this._upKindTween), (this._upKindTween = null)),
          this.clearSquidParticle());
      }
      effectAngry() {
        xe.getInstance().stopShake(this);
        let t = _i.randomWithRate([50, 1], [20, 1.5], [20, 2], [10, 3]);
        (this.updateMoveSpeed(t), this.angry(), this.forceRenewSpeed());
      }
      effectUpKind(e) {
        if (!this.getIsInit() || !this.getIsAlive()) return;
        if (e - this._baseKind > 2) return;
        const i = this.kind;
        if (e <= i) return;
        const s = zt[e];
        if (!s) return;
        (this.setKind(e),
          this.setSize(s),
          (this.zOrder = s.zOrder),
          (this._rateUpKind = s.rateUpKind || -1),
          this.setAuraByKind(i, t.FISH_UPSIZE_ANIM),
          this.updateGroupPos(),
          this.angry());
        const a = s.scale;
        let n = 1,
          o = 1;
        switch (this.kind) {
          case this._baseKind:
            break;
          case this._baseKind + 1:
            ((n = 1.5), (o = 1.2));
            break;
          case this._baseKind + 2:
            ((o = 1.3), (n = 1.8));
        }
        (this._upKindTween &&
          (Laya.Tween.clear(this._upKindTween), (this._upKindTween = null)),
          (this._upKindTween = Laya.Tween.to(
            this,
            {
              scaleX: a * n,
              scaleY: a * n,
            },
            400,
            null,
            Laya.Handler.create(this, () => {
              ((this._upKindTween = null),
                (this._upKindTween = Laya.Tween.to(
                  this,
                  {
                    scaleX: a * o,
                    scaleY: a * o,
                  },
                  300,
                  null,
                  Laya.Handler.create(this, () => {
                    this._upKindTween = null;
                  }),
                  100,
                )));
            }),
            100,
          )),
          ai.getInstance().playSFX(pe.FISH_SPECIAL_UP_KIND));
      }
      flipFish(t) {
        ((this.fish.scaleX =
          Math.abs(this.fish.scaleX) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this.fish));
      }
      updateShadow() {
        if (!this.shadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this.shadow) {
          this.fish.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this.shadow.pos(e, i);
        }
      }
      playCollisionEffect() {
        (this.tint(),
          this._totalHit++,
          this._totalHit >= 20 &&
            ((this._totalHit = 0),
            this._randomById || (this._randomById = _i.splitmix32(this.fishId)),
            this._rateUpKind >= this._randomById() &&
              this.effectUpKind(this.kind + 1)));
      }
      tint() {
        !this._isTint &&
          this.fish &&
          ((this._isTint = !0),
          Laya.timer.once(180, this, this.stopTint),
          (this.fish.filters = [Zt]));
      }
      stopTint() {
        ((this._isTint = !1), this.resetFishFilter());
      }
      updateMoveSpeed(t, e = 0) {
        this._isUpdatingSpeed ||
          (e > 0 &&
            ((this._isUpdatingSpeed = !0),
            Laya.timer.once(e, this, () => {
              ((this._isUpdatingSpeed = !1),
                (this._animSpeed = 1),
                (this._animator2D.speed = 1));
            })),
          (this._animSpeed = t),
          (this._animator2D.speed = t));
      }
      clearSquidParticle() {
        this.fishParticle &&
          (this.fishParticleScript.stopSystem(),
          Laya.timer.clearAll(this.fishParticle));
      }
      showSquidParticle() {
        this.fishParticle &&
          (Laya.timer.once(1100, this.fishParticle, () => {
            this.fishParticleScript.resetSystem();
          }),
          Laya.timer.once(3100, this.fishParticle, () => {
            this.fishParticleScript.resetSystem();
          }));
      }
      reset() {
        (super.reset(), this.clearSquidParticle(), this.resetFishFilter());
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t), (this._animator2D.speed = t), this.swim());
      }
      updateRotation() {
        (super.updateRotation(),
          (this.fishParticleScript.newAngle = this.rotation + 90));
      }
      getLevel() {
        return this.kind - this._baseKind + 1;
      }
      resetScale() {
        if (zt[this.getKind()]) {
          let t = zt[this.getKind()].scale || 1;
          switch (this.getLevel()) {
            case 1:
              break;
            case 2:
              t *= 1.2;
              break;
            case 3:
              t *= 1.3;
          }
          this.scale(t, t);
        }
      }
    };
  ((Oi.FISH_RUN_ANIM = "run"),
    (Oi.FISH_UPSIZE_ANIM = "upsize"),
    (Oi.FISH_REMOVE_ANIM = "remove"));
  var Di = Oi,
    zi = class extends xi {
      constructor() {
        (super(), (this._isCaught = !1), (this._scaleParticleBubble = 1.2));
      }
      init(t) {
        if ((this.setIsAlive(!1), this.setKind(t), this.getIsInit())) return;
        let e = zt[t];
        if (!e) return;
        let i = this.getPrefab(t).create();
        i &&
          ((this.zOrder = e.zOrder),
          this.setSize(e),
          this.setSprite(i, e),
          this.setIsInit(!0),
          (this._baseFlip = e.baseFlip));
      }
      setSprite(t, e) {
        t &&
          ((this._particleStar = t.getChildByName("particle_star")),
          this._particleStar &&
            ((this._particleStar.zOrder = 1),
            this.addChild(this._particleStar),
            this._particleStar.pos(e.size[0] / 2, 0),
            (this._particleStarScript = this._particleStar.getComponent(
              Laya.Script,
            ))),
          (this._particleBubble = t.getChildByName("particle_bubble")),
          this._particleBubble &&
            ((this._particleBubble.zOrder = 1),
            this.addChild(this._particleBubble),
            this._particleBubble.pos(
              0.5 * e.size[0] + 0.4 * e.size[0],
              0.5 * e.size[1] + 0.2 * e.size[1],
            ),
            (this._particleBubble.rotation = -90),
            (this._particleBubbleScript = this._particleBubble.getComponent(
              Laya.Script,
            ))),
          (this._dropCoin0 = t.getChildByName("drop_coin_0")),
          this._dropCoin0 &&
            ((this._dropCoin0.zOrder = 1),
            this.addChild(this._dropCoin0),
            this._dropCoin0.pos(
              0.5 * e.size[0] + 0.2 * e.size[0],
              -e.size[1] / 9,
            ),
            (this._dropCoin0.rotation = -90),
            (this._particleDropCoin0 = this._dropCoin0.getChildByName(
              "particle_drop_coin_0",
            )),
            (this._particleDropCoin1 = this._dropCoin0.getChildByName(
              "particle_drop_coin_1",
            )),
            (this._particleDropCoin4 = this._dropCoin0.getChildByName(
              "particle_drop_coin_4",
            )),
            (this._particleDropCoin0Script =
              this._particleDropCoin0.getComponent(Laya.Script)),
            (this._particleDropCoin1Script =
              this._particleDropCoin1.getComponent(Laya.Script)),
            (this._particleDropCoin4Script =
              this._particleDropCoin4.getComponent(Laya.Script))),
          (this._dropCoin1 = t.getChildByName("drop_coin_1")),
          this._dropCoin1 &&
            ((this._dropCoin1.zOrder = 1),
            this.addChild(this._dropCoin1),
            this._dropCoin1.pos(0.5 * e.size[0], -e.size[1] / 3.6),
            (this._dropCoin1.rotation = -90),
            (this._particleDropCoin2 = this._dropCoin1.getChildByName(
              "particle_drop_coin_2",
            )),
            (this._particleDropCoin3 = this._dropCoin1.getChildByName(
              "particle_drop_coin_3",
            )),
            (this._particleDropCoin5 = this._dropCoin1.getChildByName(
              "particle_drop_coin_5",
            )),
            (this._particleDropCoin2Script =
              this._particleDropCoin2.getComponent(Laya.Script)),
            (this._particleDropCoin3Script =
              this._particleDropCoin3.getComponent(Laya.Script)),
            (this._particleDropCoin5Script =
              this._particleDropCoin5.getComponent(Laya.Script))));
      }
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(18)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = -90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25),
            this.addChild(this._spineShadow)),
          (this._spine = Ni.getInstance().getSpineFish(18)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = -90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(), this._spineShadow.resume())
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      updateRotation() {
        (super.updateRotation(),
          (this._dropCoin0.rotation = -this.rotation),
          (this._dropCoin1.rotation = -this.rotation));
      }
      setCallbackCaught(t) {
        this._callbackCaught = t;
      }
      resetParticleDropCoin() {
        Laya.timer.loop(2500, this, () => {
          (this._particleDropCoin0Script.resetSystem(),
            this._particleDropCoin1Script.resetSystem(),
            this._particleDropCoin2Script.resetSystem(),
            this._particleDropCoin3Script.resetSystem(),
            this._particleDropCoin4Script.resetSystem(),
            this._particleDropCoin5Script.resetSystem());
        });
      }
      remove() {
        (super.remove(),
          this._isCaught &&
            ((this._isCaught = !1),
            this._callbackCaught && this._callbackCaught(),
            (this._callbackCaught = null)),
          this._particleStarScript.stopSystem(),
          this._particleBubbleScript.stopSystem(),
          this._particleDropCoin0Script.stopSystem(),
          this._particleDropCoin1Script.stopSystem(),
          this._particleDropCoin2Script.stopSystem(),
          this._particleDropCoin3Script.stopSystem(),
          this._particleDropCoin4Script.stopSystem(),
          this._particleDropCoin5Script.stopSystem(),
          this.stopTint(),
          this._spine &&
            (Ni.getInstance().recoverSpineFish(this._spine, 18),
            this.removeChild(this._spine),
            (this._spine = null)),
          this._spineShadow &&
            (Ni.getInstance().recoverSpineFish(this._spineShadow, 18),
            this.removeChild(this._spineShadow),
            (this._spineShadow = null)));
      }
      playCollisionEffect() {
        null != this._spine && null != this._spineShadow && this.tint();
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [Qt])));
      }
      stopTint() {
        (Laya.timer.once(30 * Math.random(), this, () => {
          this._isTint = !1;
        }),
          this._spine && (this._spine.filters = []));
      }
      flipFish(t) {
        null != this._spine &&
          null != this._spineShadow &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          (this._spineShadow.scaleY =
            Math.abs(this._spineShadow.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine),
          this.updateParticle(t));
      }
      updateParticle(t) {
        const e = zt[this.kind];
        e &&
          (this._particleBubble.pos(
            0.5 * e.size[0] + 0.4 * e.size[0] * (t ? -1 : 1),
            0.5 * e.size[1] + 0.2 * e.size[1],
          ),
          (this._particleBubble.scaleX = t
            ? -this._scaleParticleBubble
            : this._scaleParticleBubble),
          (this._particleBubble.scaleY = t
            ? -this._scaleParticleBubble
            : this._scaleParticleBubble),
          this._dropCoin0.pos(
            0.5 * e.size[0] + 0.2 * e.size[0] * (t ? -1 : 1),
            -e.size[1] / 9,
          ));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          this.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this._spineShadow.pos(e, i);
        }
      }
      reset() {
        (super.reset(),
          this._particleStarScript.resetSystem(),
          this._particleBubbleScript.resetSystem(),
          this.resetParticleDropCoin());
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
    },
    Hi = class extends xi {
      constructor() {
        (super(), (this._isCaught = !1), (this._basePosYYowl = -225));
      }
      setSprite(t, e) {
        t &&
          ((this._particle = t.getChildByName("particle_ice_snow")),
          this._particle &&
            ((this._particle.zOrder = 1),
            this.addChild(this._particle),
            this._particle.pos(e.size[0] >> 1, e.size[1] >> 1),
            (this._particleScript = this._particle.getComponent(Laya.Script))),
          (this._yowl = t.getChildByName("yowl")),
          this._yowl &&
            ((this._yowl.zOrder = 1),
            this.addChild(this._yowl),
            (this._yowl.active = !1),
            (this._yowl.visible = !1),
            (this._animatorYowl = this._yowl.getComponent(Laya.Animator2D)),
            (this._particleHurtScript = this._yowl
              .getChildByName("particle_hurt")
              .getComponent(Laya.Script)),
            (this._particleHurtScript1 = this._yowl
              .getChildByName("particle_hurt_1")
              .getComponent(Laya.Script)),
            (this._particleHurtScript2 = this._yowl
              .getChildByName("particle_hurt_2")
              .getComponent(Laya.Script)),
            (this._particleHurtScript3 = this._yowl
              .getChildByName("particle_hurt_3")
              .getComponent(Laya.Script)),
            this._yowl.pos(
              0.5 * e.size[0],
              0.5 * e.size[1] + this._basePosYYowl,
            )));
      }
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(20)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = 90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            this.addChild(this._spineShadow),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25)),
          (this._spine = Ni.getInstance().getSpineFish(20)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = 90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine),
            (this._particle.zOrder = this._spine.zOrder + 1),
            (this._yowl.zOrder = this._particle.zOrder + 1)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(),
              this._spineShadow.resume(),
              this.setAnimSpeed(1))
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      setCallbackCaught(t) {
        this._callbackCaught = t;
      }
      effectCatch(t = !1) {
        null == this._spine ||
          null == this._spineShadow ||
          this._isCaught ||
          ((this._isCaught = !0),
          Laya.timer.clear(this, this.stopTint),
          this.stopTint(),
          this._spine.play(t ? "attack" : "run", !1),
          this._spine.playbackRate(t ? 1.5 : 6),
          this._spineShadow.play(t ? "attack" : "run", !1),
          this._spineShadow.playbackRate(t ? 1.5 : 6),
          this._spine.once(Laya.Event.STOPPED, () => {
            (this._spine && this._spine.playbackRate(1),
              this._spineShadow && this._spineShadow.playbackRate(1),
              this._isShowReward || (this.setMoveSpeed(1), this.swim()),
              (this._isCaught = !1));
          }));
      }
      remove() {
        (super.remove(),
          (this._isRemoved = !0),
          (this._isShowReward = !1),
          this._particleScript.stopSystem(),
          this.stopTint(),
          this.hideYowl(!0),
          this._spine &&
            ((this._spine.material = null),
            (this._spineHueColor = null),
            Ni.getInstance().recoverSpineFish(this._spine, 20),
            this.removeChild(this._spine),
            (this._spine = null)),
          this._spineShadow &&
            (Ni.getInstance().recoverSpineFish(this._spineShadow, 20),
            this.removeChild(this._spineShadow),
            (this._spineShadow = null)));
      }
      playCollisionEffect() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isCaught || this.tint());
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [te])));
      }
      stopTint() {
        ((this._isTint = !1), this._spine && (this._spine.filters = []));
      }
      flipFish(t) {
        null != this._spine &&
          null != this._spineShadow &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          (this._spineShadow.scaleY =
            Math.abs(this._spineShadow.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          const e = this.globalToLocal(
              this.parent.localToGlobal(
                this._tempPos.setTo(
                  this.x + this.offsetShadowX,
                  this.y + this.offsetShadowY,
                ),
              ),
            ),
            i = e.x + (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            s = e.y + t.offsetFish[1];
          this._spineShadow.pos(i, s);
        }
      }
      reset() {
        (super.reset(), this._particleScript.resetSystem());
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
      playHurt(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (this._spine.play("hurt", !1),
          this._spine.playbackRate(1),
          this._spineShadow.play("hurt", !1),
          this._spineShadow.playbackRate(1),
          !t &&
            this._spineHueColor &&
            ((this._spine.material = null), (this._spineHueColor = null)),
          this._spine.once(Laya.Event.STOPPED, () => {
            this.swim();
          }));
      }
      playYowl() {
        null == this._spine ||
          null == this._spineShadow ||
          this._yowl.visible ||
          ((this._yowl.visible = !0),
          (this._yowl.active = !0),
          this._animatorYowl.gotoAndStopByFrame("yowl", 0, 0),
          this._animatorYowl.play("yowl"),
          this._particleHurtScript.resetSystem(),
          this._particleHurtScript1.resetSystem(),
          this._particleHurtScript2.resetSystem(),
          this._particleHurtScript3.resetSystem(),
          Laya.timer.once(833, this, this.hideYowl));
      }
      hideYowl(t = !1) {
        (this._particleHurtScript.stopSystem(),
          this._particleHurtScript1.stopSystem(),
          this._particleHurtScript2.stopSystem(),
          this._particleHurtScript3.stopSystem(),
          t
            ? (this._animatorYowl.stop(),
              (this._yowl.active = !1),
              (this._yowl.visible = !1))
            : Laya.timer.once(700, this, () => {
                (this._animatorYowl.stop(),
                  (this._yowl.active = !1),
                  (this._yowl.visible = !1));
              }));
      }
      startMiniGame() {
        (this.setMoveSpeed(0),
          xe.getInstance().stopShake(this),
          this.setIsAlive(!1),
          this.hideYowl(!0),
          (this._isShowReward = !0),
          null != this._spine &&
            null != this._spineShadow &&
            ((this._spine.material = Laya.loader.getRes(de.CROCODILE)),
            (this._spineHueColor = this._spine.material.getVector4("hueColor")),
            (this._spineHueColor.w = 0),
            this.stopTintMinigame()));
      }
      moveToHidePoint() {
        (Laya.Tween.to(
          this,
          {
            x: -2e3,
          },
          1e3,
        ),
          Laya.timer.once(1e3, this, () => {
            this._spineHueColor &&
              ((this._spineHueColor.w = 0),
              (this._spine.material = null),
              (this._spineHueColor = null));
          }),
          null != this._spine &&
            (this._spine.play("run", !0), this._spine.playbackRate(3)),
          null != this._spineShadow &&
            (this._spineShadow.play("run", !0),
            this._spineShadow.playbackRate(3)));
      }
      resumeMoveAfterMiniGame() {
        ((this._noRotate = !1),
          (this._isShowReward = !1),
          this.setMoveSpeed(1),
          this.setIsAlive(!0),
          null != this._spine &&
            (this._spine.play("run", !0), this._spine.playbackRate(1)),
          null != this._spineShadow &&
            (this._spineShadow.play("run", !0),
            this._spineShadow.playbackRate(1)));
      }
      minigameTouch(t) {
        (this.tintMinigame(),
          Laya.timer.clear(this, this.setAnimSpeed),
          Laya.timer.once(1e3, this, this.setAnimSpeed, [1]),
          this.setAnimSpeed(5),
          this.setHueColor(t));
      }
      tintMinigame() {
        null != this._spine &&
          null != this._spine.material &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(100, this, this.stopTintMinigame),
            this._spine.material.setVector4(
              "v_dark",
              new Laya.Vector4(0.4, 0.57, 0.57, 1),
            )));
      }
      stopTintMinigame() {
        null != this._spine && null != this._spine.material
          ? ((this._isTint = !1),
            this._spine.material.setVector4(
              "v_dark",
              new Laya.Vector4(0, 0, 0, 1),
            ))
          : (this._isTint = !1);
      }
      setHueColor(t) {
        this._spineHueColor && t >= 0 && (this._spineHueColor.w = t);
      }
      forceMoveTo(t, e = 1e3) {
        if (!this.parent) return;
        if (null == this._spine || null == this._spineShadow) return;
        xe.getInstance().stopShake(this);
        const i = this.parent.globalToLocal(t);
        (Laya.Tween.to(
          this,
          {
            x: i.x,
            y: i.y,
          },
          e,
        ),
          this._spine.play("run", !0),
          this._spine.playbackRate(1),
          this._spineShadow.play("run", !0),
          this._spineShadow.playbackRate(1));
      }
      updateCollider() {
        if (!this.parent) return;
        const t = this.rotation - 90,
          e = Math.abs(t) < 90;
        ((this._fishRectangle.width = zt[this.kind].size[1]),
          (this._fishRectangle.height = zt[this.kind].size[0]),
          (this.offsetRectX = zt[this.kind].offsetCollider[1]),
          (this.offsetRectY = zt[this.kind].offsetCollider[0]),
          e
            ? ((this.offsetRectX *= -1), (this.offsetRectY *= this._baseFlip))
            : ((this.offsetRectX *= 1), (this.offsetRectY *= -this._baseFlip)));
        const i = this.parent.localToGlobal(
          new Laya.Point(
            this.x - this._fishRectangle.width / 2 + this.offsetRectX,
            this.y - this._fishRectangle.height / 2 + this.offsetRectY,
          ),
        );
        ((this._fishRectangle.x = i.x), (this._fishRectangle.y = i.y));
      }
      detectCollision(t, e) {
        if (!this.parent) return;
        (this.updateCollider(),
          this.parent.globalToLocal(this._tempPos.setTo(t, e)));
        const i = me.Math.pRotateByAngle(
          this._tempPos,
          new Laya.Point(this.x, this.y),
          -(this.rotation - 90) * me.Math.RAD,
        );
        return (
          this.parent.localToGlobal(i),
          this._fishRectangle.contains(i.x, i.y)
        );
      }
    },
    Ui = class t extends xi {
      constructor() {
        (super(),
          (this._baseKind = 13),
          (this._totalHit = 0),
          (this._rateUpKind = -1),
          (this._isFlip = !1));
      }
      setSprite(t, e) {
        t &&
          (this.addChild(t),
          (this.fishAura = t),
          this.fishAura.pos(
            0.5 * e.size[0] + e.offsetFish[0],
            0.5 * e.size[1] + e.offsetFish[1] - 30,
          ),
          this.fishAura.scale(0.37, 0.485),
          (this.fishAura.visible = !1),
          (this.fishAura.active = !1),
          (this.fishAura.zOrder = -1),
          (this.fishAuraAnimator = this.fishAura.getComponent(
            Laya.Animator2D,
          )));
        let i = this.getPrefab(this._baseKind);
        i &&
          ((this.fish = i.create()),
          this.setPos(this.fish),
          this.addChild(this.fish),
          (this._animator2D = this.fish.getComponent(Laya.Animator2D)),
          (this.shadow = this.fish.getChildByName("shadow")),
          (this.fishSprite = this.fish.getChildByName("sprite")));
      }
      setAuraByKind(t, e) {
        if (!this.fishAura) return;
        let i = t - this._baseKind + 1;
        if (i < 1 || i > 3) return;
        let s = "lv" + i + "_" + e;
        1 == i && "run" == e
          ? (this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
            (this.fishAura.visible = !1),
            (this.fishAura.active = !1))
          : ((this.fishAura.visible = !0),
            (this.fishAura.active = !0),
            this.fishAuraAnimator.gotoAndStopByFrame(s, 0, 0),
            this.fishAuraAnimator.play(s));
      }
      resetFishFilter() {
        this.fish && (this.fish.filters = []);
      }
      init(e) {
        (this.setIsAlive(!1),
          this.setKind(e),
          (this.active = !1),
          (this.visible = !1));
        let i = zt[e];
        if (!i) return;
        if (this.getIsInit())
          return (
            this.setSize(i),
            (this.zOrder = i.zOrder),
            (this._rateUpKind = i.rateUpKind || -1),
            void this.setAuraByKind(e, t.FISH_RUN_ANIM)
          );
        let s = Laya.loader.getRes(he.FISH_AURA).create();
        s &&
          ((this.zOrder = i.zOrder),
          (this._rateUpKind = i.rateUpKind || -1),
          (this._baseFlip = i.baseFlip),
          this.setSize(i),
          this.setSprite(s, i),
          this.setAuraByKind(e, t.FISH_RUN_ANIM),
          this.setIsInit(!0));
      }
      swim() {
        this.getIsAlive() &&
          this.fish &&
          ((this.fish.visible = !0),
          (this.fish.active = !0),
          15 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_15_move", 0, 0),
              this._animator2D.play("fish_15_move"))
            : (this._animator2D.gotoAndStopByFrame("fish_13_move", 0, 0),
              this._animator2D.play("fish_13_move")));
      }
      angry() {
        this.getIsAlive() &&
          this.fish &&
          (15 == this.kind
            ? (this._animator2D.gotoAndStopByFrame("fish_15_anger", 0, 0),
              this._animator2D.play("fish_15_anger"))
            : (this._animator2D.gotoAndStopByFrame("fish_13_anger", 0, 0),
              this._animator2D.play("fish_13_anger")),
          Laya.timer.once(1e3 / this._animSpeed, this, this.endAngry));
      }
      endAngry() {
        this.swim();
      }
      remove() {
        (super.remove(),
          this.stopTint(),
          (this._isVeryAngry = !1),
          (this._totalHit = 0),
          (this._randomById = null),
          this.setAuraByKind(this._baseKind, t.FISH_RUN_ANIM),
          this._upKindTween &&
            (Laya.Tween.clear(this._upKindTween), (this._upKindTween = null)));
      }
      effectAngry() {
        (xe.getInstance().stopShake(this), this.angry());
      }
      effectUpKind(e) {
        if (!this.getIsInit() || !this.getIsAlive()) return;
        if (e - this._baseKind > 2) return;
        const i = this.kind;
        if (e <= i) return;
        const s = zt[e];
        if (!s) return;
        (this.setKind(e),
          this.setSize(s),
          (this.zOrder = s.zOrder),
          (this._rateUpKind = s.rateUpKind || -1),
          this.setAuraByKind(i, t.FISH_UPSIZE_ANIM),
          this.angry());
        const a = s.scale;
        let n = 1,
          o = 1;
        switch (this.kind) {
          case this._baseKind:
            break;
          case this._baseKind + 1:
            ((n = 1.5), (o = 1.2));
            break;
          case this._baseKind + 2:
            ((o = 1.3), (n = 1.8));
        }
        (this._upKindTween && Laya.Tween.clear(this._upKindTween),
          this.scale(a, a),
          (this._upKindTween = Laya.Tween.to(
            this,
            {
              scaleX: a * n,
              scaleY: a * n,
            },
            400,
            null,
            Laya.Handler.create(this, () => {
              ((this._upKindTween = null),
                (this._upKindTween = Laya.Tween.to(
                  this,
                  {
                    scaleX: a * o,
                    scaleY: a * o,
                  },
                  300,
                  null,
                  Laya.Handler.create(this, () => {
                    this._upKindTween = null;
                  }),
                  100,
                )));
            }),
            100,
          )),
          ai.getInstance().playSFX(pe.FISH_SPECIAL_UP_KIND));
      }
      flipFish(t) {
        ((this.fish.scaleX =
          Math.abs(this.fish.scaleX) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this.fish));
      }
      updateShadow() {
        if (null == this.shadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this.shadow) {
          this.fish.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this.shadow.pos(e, i);
        }
      }
      playCollisionEffect() {
        (this.tint(),
          this._totalHit++,
          this._totalHit >= 20 &&
            ((this._totalHit = 0),
            this._randomById || (this._randomById = _i.splitmix32(this.fishId)),
            this._rateUpKind >= this._randomById() &&
              this.effectUpKind(this.kind + 1)));
      }
      tint() {
        !this._isTint &&
          this.fish &&
          ((this._isTint = !0),
          Laya.timer.once(180, this, this.stopTint),
          (this.fish.filters = [qt]));
      }
      stopTint() {
        ((this._isTint = !1), this.resetFishFilter());
      }
      getLevel() {
        return this.kind - this._baseKind + 1;
      }
      resetScale() {
        if (zt[this.getKind()]) {
          let t = zt[this.getKind()].scale || 1;
          switch (this.getLevel()) {
            case 1:
              break;
            case 2:
              t *= 1.2;
              break;
            case 3:
              t *= 1.3;
          }
          this.scale(t, t);
        }
      }
      reset() {
        (super.reset(), this.resetFishFilter());
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t), (this._animator2D.speed = t), this.swim());
      }
    };
  ((Ui.FISH_RUN_ANIM = "run"),
    (Ui.FISH_UPSIZE_ANIM = "upsize"),
    (Ui.FISH_REMOVE_ANIM = "remove"));
  var Xi = Ui,
    Gi = class extends xi {
      constructor() {
        (super(), (this._isCaught = !1));
      }
      init(t) {
        if ((this.setIsAlive(!1), this.setKind(t), this.getIsInit())) return;
        let e = zt[t];
        if (!e) return;
        let i = this.getPrefab(t).create();
        i &&
          ((this.zOrder = e.zOrder),
          this.setSize(e),
          this.setSprite(i, e),
          this.setIsInit(!0),
          (this._baseFlip = e.baseFlip));
      }
      setSprite(t, e) {
        t &&
          ((this._particleBubble = t.getChildByName("particle_bubble")),
          this._particleBubble &&
            ((this._particleBubble.zOrder = 1),
            this.addChild(this._particleBubble),
            this._particleBubble.pos(0.5 * e.size[0], e.size[1]),
            (this._particleBubble.rotation = -45),
            (this._particleBubbleScript = this._particleBubble.getComponent(
              Laya.Script,
            ))));
      }
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(17)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = 90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25),
            this.addChild(this._spineShadow)),
          (this._spine = Ni.getInstance().getSpineFish(17)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = 90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(),
              this._spineShadow.resume(),
              this.resetBackRate())
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      setCallbackCaught(t) {
        this._callbackCaught = t;
      }
      remove() {
        (super.remove(),
          this._isCaught &&
            ((this._isCaught = !1),
            this._callbackCaught && this._callbackCaught(),
            (this._callbackCaught = null)),
          this._particleBubbleScript.stopSystem(),
          this.stopTint(),
          this._spine &&
            (Ni.getInstance().recoverSpineFish(this._spine, 17),
            this.removeChild(this._spine),
            (this._spine = null)),
          this._spineShadow &&
            (Ni.getInstance().recoverSpineFish(this._spineShadow, 17),
            this.removeChild(this._spineShadow),
            (this._spineShadow = null)));
      }
      playCollisionEffect() {
        null != this._spine && null != this._spineShadow && this.tint();
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [$t])));
      }
      stopTint() {
        (Laya.timer.once(30 * Math.random(), this, () => {
          this._isTint = !1;
        }),
          this._spine && (this._spine.filters = []));
      }
      resetBackRate() {
        (this._spine && this._spine.playbackRate(1.1),
          this._spineShadow && this._spineShadow.playbackRate(1.1));
      }
      flipFish(t) {
        null != this._spine &&
          null != this._spineShadow &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          (this._spineShadow.scaleY =
            Math.abs(this._spineShadow.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine),
          this._particleBubble &&
            (this._particleBubble.rotation = t ? 45 : -45));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          this.globalToLocal(
            this.parent.localToGlobal(
              this._tempPos.setTo(
                this.x + this.offsetShadowX,
                this.y + this.offsetShadowY,
              ),
            ),
          );
          const e =
              this._tempPos.x +
              (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            i = this._tempPos.y + t.offsetFish[1];
          this._spineShadow.pos(e, i);
        }
      }
      reset() {
        (super.reset(), this._particleBubbleScript.resetSystem());
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
    },
    Ki = class extends xi {
      constructor() {
        (super(),
          (this._isCaught = !1),
          (this._isHurting = !1),
          (this._isAttacking = !1));
      }
      setSprite(t, e) {}
      setSpine() {
        const t = zt[this.kind];
        ((this._spineShadow = Ni.getInstance().getSpineFish(21)),
          this._spineShadow &&
            ((this._spineShadow.anchorX = 0.5),
            (this._spineShadow.anchorY = 0.5),
            (this._spineShadow.rotation = 90),
            this._spineShadow.size(0, 0),
            this._spineShadow.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spineShadow.visible = !0),
            (this._spineShadow.active = !0),
            this.addChild(this._spineShadow),
            (this._spineShadow.filters = [Yt]),
            (this._spineShadow.alpha = 0.25)),
          (this._spine = Ni.getInstance().getSpineFish(21)),
          this._spine &&
            ((this._spine.anchorX = 0.5),
            (this._spine.anchorY = 0.5),
            (this._spine.rotation = 90),
            this._spine.size(0, 0),
            this._spine.pos(t.size[0] >> 1, t.size[1] >> 1),
            (this._spine.visible = !0),
            (this._spine.active = !0),
            this.addChild(this._spine)));
      }
      swim(t = !1) {
        null != this._spine &&
          null != this._spineShadow &&
          (t
            ? (this._spine.resume(),
              this._spineShadow.resume(),
              this.setAnimSpeed(1))
            : (this._spine.play("run", !0), this._spineShadow.play("run", !0)));
      }
      setCallbackCaught(t) {
        this._callbackCaught = t;
      }
      remove() {
        (super.remove(),
          (this._isRemoved = !0),
          (this._isShowReward = !1),
          this.stopTint(),
          this._spine &&
            (Ni.getInstance().recoverSpineFish(this._spine, 21),
            this.removeChild(this._spine),
            (this._spine = null)),
          this._spineShadow &&
            (Ni.getInstance().recoverSpineFish(this._spineShadow, 21),
            this.removeChild(this._spineShadow),
            (this._spineShadow = null)));
      }
      playCollisionEffect() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isCaught || this.tint());
      }
      tint() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isTint ||
            ((this._isTint = !0),
            Laya.timer.once(180, this, this.stopTint),
            (this._spine.filters = [ee])));
      }
      stopTint() {
        ((this._isTint = !1), this._spine && (this._spine.filters = []));
      }
      flipFish(t) {
        null != this._spine &&
          null != this._spineShadow &&
          ((this._spine.scaleY =
            Math.abs(this._spine.scaleY) * this._baseFlip * (t ? -1 : 1)),
          (this._spineShadow.scaleY =
            Math.abs(this._spineShadow.scaleY) * this._baseFlip * (t ? -1 : 1)),
          this.setPos(this._spine));
      }
      updateShadow() {
        if (null == this._spineShadow || !this.isShadowInScene()) return;
        ((this.distanceShadowY = 0.07 * (this.y - N.y)),
          (this.distanceShadowX = 0.07 * (this.x - N.x)),
          (this.offsetShadowX = this.lerp(
            this.offsetShadowX,
            this.distanceShadowX,
            0.1,
          )),
          (this.offsetShadowY = this.lerp(
            this.offsetShadowY,
            this.distanceShadowY,
            0.1,
          )));
        const t = zt[this.kind];
        if (t && this._spineShadow) {
          const e = this.globalToLocal(
              this.parent.localToGlobal(
                this._tempPos.setTo(
                  this.x + this.offsetShadowX,
                  this.y + this.offsetShadowY,
                ),
              ),
            ),
            i = e.x + (this.isFlip ? -1 * t.offsetFish[0] : t.offsetFish[0]),
            s = e.y + t.offsetFish[1];
          this._spineShadow.pos(i, s);
        }
      }
      reset() {
        super.reset();
      }
      setAnimSpeed(t = 1) {
        ((this._animSpeed = t),
          this._spine && this._spine.playbackRate(t),
          this._spineShadow && this._spineShadow.playbackRate(t));
      }
      playHurt() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isHurting ||
            this._isAttacking ||
            ((this._isHurting = !0),
            this._spine.play("hurt", !1),
            this._spine.playbackRate(1),
            this._spineShadow.play("hurt", !1),
            this._spineShadow.playbackRate(1),
            this._spine.once(Laya.Event.STOPPED, () => {
              ((this._isHurting = !1), this.swim());
            })));
      }
      playAttack() {
        null != this._spine &&
          null != this._spineShadow &&
          (this._isHurting ||
            this._isAttacking ||
            ((this._isAttacking = !0),
            this._spine.play("run_common_attack", !1),
            this._spine.playbackRate(1),
            this._spineShadow.play("run_common_attack", !1),
            this._spineShadow.playbackRate(1),
            this._spine.once(Laya.Event.STOPPED, () => {
              ((this._isAttacking = !1), this.swim());
            })));
      }
      startMiniGame() {
        (this._lastPos.setTo(this.x, this.y),
          Laya.timer.frameLoop(1, this, this.updateRotation),
          (this._stopMovePos = new Laya.Point(this.x, this.y)),
          this.setMoveSpeed(0),
          xe.getInstance().stopShake(this),
          this.setIsAlive(!1),
          (this._isShowReward = !0),
          null != this._spine &&
            null != this._spineShadow &&
            (this._spine.play("run", !0),
            this._spine.playbackRate(1),
            this._spineShadow.play("run", !0),
            this._spineShadow.playbackRate(1)));
      }
      stopUpdateRotation() {
        Laya.timer.clear(this, this.updateRotation);
      }
      moveToHidePoint() {
        (Laya.Tween.to(
          this,
          {
            x: -2e3,
          },
          1e3,
        ),
          null != this._spine &&
            (this._spine.play("run", !0), this._spine.playbackRate(3)),
          null != this._spineShadow &&
            (this._spineShadow.play("run", !0),
            this._spineShadow.playbackRate(3)));
      }
      forceMoveTo(t, e = 1e3) {
        if (!this.parent) return;
        if (null == this._spine || null == this._spineShadow) return;
        const i = this.parent.globalToLocal(t);
        (Laya.Tween.to(
          this,
          {
            x: i.x,
            y: i.y,
          },
          e,
        ),
          this._spine.play("run", !0),
          this._spine.playbackRate(1),
          this._spineShadow.play("run", !0),
          this._spineShadow.playbackRate(1));
      }
      resumeMoveAfterMiniGame() {
        (Laya.timer.frameLoop(1, this, this.updateRotation),
          Laya.Tween.to(
            this,
            {
              x: this._stopMovePos.x,
              y: this._stopMovePos.y,
            },
            3e3,
          ),
          Laya.timer.once(3e3, this, () => {
            (Laya.timer.clear(this, this.updateRotation),
              (this._isShowReward = !1),
              this.setMoveSpeed(1),
              this.setIsAlive(!0));
          }),
          null != this._spine &&
            (this._spine.play("run", !0), this._spine.playbackRate(1)),
          null != this._spineShadow &&
            (this._spineShadow.play("run", !0),
            this._spineShadow.playbackRate(1)));
      }
    },
    Wi = class t {
      constructor() {
        ((this.currentId = 0),
          (this._isEnableNormalFish = !0),
          (this._minKindEnable = 0),
          (this._isSceneBoss = !1),
          (this._fish = []));
        for (let t = 0; t <= 21; ++t) this._fish[t] = new Map();
        this._mapFishById = new Map();
      }
      get isSceneBoss() {
        return this._isSceneBoss;
      }
      set isSceneBoss(t) {
        this._isSceneBoss = t;
      }
      get isEnableNormalFish() {
        return this._isEnableNormalFish;
      }
      registerBossComingCallback(t = null) {
        this._callbackBossComing = t;
      }
      registerBossRemoveCallback(t = null) {
        this._callbackBossRemove = t;
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      setFishContainer(t) {
        if (((this.fishContainer = t), this.fishContainer))
          for (let t = 0; t <= 30; t++) {
            let e = this.createFishContainer(t + 1);
            this.fishContainer.addChild(e);
          }
      }
      createFishContainer(t) {
        let e = new Laya.Sprite();
        return (
          (e.zOrder = t),
          e.size(this.fishContainer.width, this.fishContainer.height),
          (e.anchorX = this.fishContainer.anchorX),
          (e.anchorY = this.fishContainer.anchorY),
          e.pos(this.fishContainer.x, this.fishContainer.y),
          (e.name = "Container" + t),
          (e.active = !1),
          (e.visible = !1),
          y &&
            e.frameLoop(1, this, () => {
              e.graphics.clear();
            }),
          e
        );
      }
      addFishToContainer(t) {
        if (!t) return;
        let e = zt[t.getKind()];
        if (e) {
          let i = e.zOrder || 2,
            s = this.fishContainer.getChildByName("Container" + i);
          (s ||
            ((s = this.createFishContainer(i)), this.fishContainer.addChild(s)),
            (s.active = !0),
            (s.visible = !0),
            s.addChild(t));
        }
      }
      spawn(t, e, i, s = 0, a = 0) {
        let n = null;
        return (
          this.isNormalFish(null, t)
            ? ((n = this.create(t, e)),
              n &&
                ((n.name = "fish-" + t + "-" + e),
                n.pos(-789, -789),
                this.addFishToContainer(n),
                n.moveByPath(i, s, a)))
            : this.loadData(t, () => {
                if (((n = this.create(t, e)), n))
                  switch (
                    ((n.name = "fish-" + t + "-" + e),
                    n.pos(-789, -789),
                    this.addFishToContainer(n),
                    n.moveByPath(i, s, a),
                    t)
                  ) {
                    case 19:
                    case 20:
                    case 21:
                      (this._callbackBossComing(t), (this._isSceneBoss = !0));
                  }
              }),
          n
        );
      }
      loadData(t, e) {
        let i = null;
        switch (t) {
          case 13:
          case 14:
            ((i = le.SPINE_SHRIMP_JSON), this.loadData(15, null));
            break;
          case 15:
            i = le.SPINE_SHRIMP_YELLOW_JSON;
            break;
          case 16:
            i = le.SPINE_CRYSTAL_CRAB_JSON;
            break;
          case 17:
            i = le.SPINE_TURTLE_JSON;
            break;
          case 18:
            i = le.SPINE_OCTOPUS_JSON;
            break;
          case 19:
            i = le.SPINE_PHOENIX_JSON;
            break;
          case 20:
            i = le.SPINE_CROCODILE_JSON;
            break;
          case 21:
            i = le.SPINE_NAGA_JSON;
        }
        i
          ? Laya.loader.getRes(i)
            ? e && e()
            : Laya.loader.load(i, Laya.Loader.SPINE).then((s) => {
                if (s) {
                  Laya.loader.cacheRes(i, s);
                  const a = Wt[t];
                  if (a && a.PoolInitCount > 0) {
                    const t = Laya.Pool.getPoolBySign(a.KeyPool);
                    if (t)
                      for (let e = 0; e < a.PoolInitCount; ++e) {
                        const e = new Laya.SpineSkeleton();
                        ((e.templet = Laya.loader.getRes(a.Json)),
                          (e.visible = !1),
                          (e.active = !1),
                          t.push(e));
                      }
                  }
                  e && e();
                }
              })
          : e && e();
      }
      create(t, e) {
        let i,
          s = zt[t];
        if (!s) return null;
        if (!s.available) return null;
        switch (t) {
          case 7:
          case 8:
          case 9:
            i = this.getFishPufferFromPool();
            break;
          case 10:
          case 11:
          case 12:
            i = this.getFishKingSquidFromPool();
            break;
          case 13:
          case 14:
          case 15:
            i = this.getFishMonsterLobsterFromPool();
            break;
          case 16:
            i = this.getCrystalCrabFromPool(t);
            break;
          case 17:
            i = this.getJewelTurtleFromPool(t);
            break;
          case 18:
            i = this.getGiantOctopusFromPool(t);
            break;
          case 19:
            i = this.getPhoenixFromPool(t);
            break;
          case 20:
            i = this.getCrocodileFromPool(t);
            break;
          case 21:
            i = this.getNagaFromPool(t);
            break;
          default:
            i = this.getFishFromPool(t);
        }
        return (
          i &&
            (i.init(t),
            i.setKind(t),
            i.setId(e || ++this.currentId),
            i.setOnRemoveCallback(this.removeFishById.bind(this, t, i.getId())),
            i.reset(),
            !this._isEnableNormalFish && this.isNormalFish(i) && i.disable(),
            t < this._minKindEnable && i.disable(),
            this._mapFishById.set(e, i),
            this._fish[t].set(e, i)),
          i
        );
      }
      createFakeFish(t) {
        let e,
          i = zt[t];
        if (!i) return null;
        if (!i.available) return null;
        switch (t) {
          case 7:
          case 8:
          case 9:
            e = this.getFishPufferFromPool();
            break;
          case 10:
          case 11:
          case 12:
            e = this.getFishKingSquidFromPool();
            break;
          case 13:
          case 14:
          case 15:
            e = this.getFishMonsterLobsterFromPool();
            break;
          case 16:
            e = this.getCrystalCrabFromPool(t);
            break;
          case 17:
            e = this.getJewelTurtleFromPool(t);
            break;
          case 18:
            e = this.getGiantOctopusFromPool(t);
            break;
          case 19:
            e = this.getPhoenixFromPool(t);
            break;
          case 20:
            e = this.getCrocodileFromPool(t);
            break;
          case 21:
            e = this.getNagaFromPool(t);
            break;
          default:
            e = this.getFishFromPool(t);
        }
        return (e && (e.init(t), e.setKind(t), e.reset()), e);
      }
      getFishFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, xi);
      }
      pushFishToPool(t) {
        if (t)
          switch (t.getKind()) {
            case 7:
            case 8:
            case 9:
              this.pushFishPufferToPool(t);
              break;
            case 10:
            case 11:
            case 12:
              this.pushFishKingSquidToPool(t);
              break;
            case 13:
            case 14:
            case 15:
              this.pushFishMonsterLobsterToPool(t);
              break;
            default: {
              let e = xe.getInstance().formatString(V, t.getKind());
              Laya.Pool.recover(e, t);
            }
          }
      }
      getFishPufferFromPool() {
        return Laya.Pool.getItemByClass(J, ki);
      }
      pushFishPufferToPool(t) {
        t && Laya.Pool.recover(J, t);
      }
      getFishKingSquidFromPool() {
        return Laya.Pool.getItemByClass(j, Di);
      }
      pushFishKingSquidToPool(t) {
        t && Laya.Pool.recover(j, t);
      }
      getFishMonsterLobsterFromPool() {
        return Laya.Pool.getItemByClass(Z, Xi);
      }
      pushFishMonsterLobsterToPool(t) {
        t && Laya.Pool.recover(Z, t);
      }
      getCrystalCrabFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, vi);
      }
      getJewelTurtleFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, Gi);
      }
      getGiantOctopusFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, zi);
      }
      getPhoenixFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, Ri);
      }
      getCrocodileFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, Hi);
      }
      getNagaFromPool(t) {
        let e = xe.getInstance().formatString(V, t);
        return Laya.Pool.getItemByClass(e, Ki);
      }
      removeFishById(t, e) {
        const i = this._fish[t];
        if (!i) return;
        const s = i.get(e);
        if (null == s) return;
        const a = this.isBoss(s);
        (i.delete(e),
          this._mapFishById.delete(e),
          a &&
            this._fish[19].size + this._fish[20].size + this._fish[21].size <=
              0 &&
            ((this._isSceneBoss = !1), this._callbackBossRemove(t)));
      }
      getFishById(t) {
        return this._mapFishById.get(t);
      }
      clearAll() {
        const t = this.getAllFish();
        for (let e = 0; e < t.length; e++) t[e] && t[e].remove(!0);
      }
      iterateFishList(t) {
        for (let [e, i] of this._mapFishById) if (t(i)) break;
      }
      getFishAtPosition(t, e, i = !1) {
        for (let s = this._fish.length - 1; s >= 0; --s) {
          const a = this._fish[s];
          for (let [s, n] of a)
            if (n && n.getIsAlive() && n.isInGameScene()) {
              if (i && !n.isEnable) continue;
              if (n.detectCollision(t, e)) return n;
            }
        }
      }
      getNearestFishByKind(t, e, i = !0) {
        if (null == t || null == e) return null;
        const s = [],
          a = this._fish[t];
        if (!a) return null;
        for (let [t, e] of a)
          e &&
            e.getIsAlive() &&
            e.isInGameScene() &&
            ((i && !e.isEnable) || s.push(e));
        return 0 == s.length
          ? null
          : (s.sort(
              (t, i) =>
                me.Math.pDistance(t.getWorldPosition(), e) -
                me.Math.pDistance(i.getWorldPosition(), e),
            ),
            s[0]);
      }
      getListNormalFish() {
        let t = [];
        return (
          this.iterateFishList((e) => {
            e &&
              e.getIsAlive() &&
              e.isInGameScene() &&
              this.isNormalFish(e) &&
              t.push(e);
          }),
          t
        );
      }
      isNormalFish(t, e = -1) {
        return ((t && t.getKind()) || e) >= 0 && ((t && t.getKind()) || e) <= 6;
      }
      getAllFish() {
        return Array.from(this._mapFishById.values());
      }
      getAllAliveFish() {
        let t = [];
        return (
          this.iterateFishList((e) => {
            e && e.getIsAlive() && e.isInGameScene() && t.push(e);
          }),
          t
        );
      }
      enableNormalFish() {
        this._isEnableNormalFish = !0;
        for (let t = 0; t < 6; ++t) {
          const e = this._fish[t];
          for (let [t, i] of e) i.enable();
        }
      }
      disableNormalFish() {
        this._isEnableNormalFish = !1;
        for (let t = 0; t < 6; ++t) {
          const e = this._fish[t];
          for (let [t, i] of e) i.disable();
        }
      }
      setEnableFishByMinKind(t) {
        this._minKindEnable = t;
        for (let e = 0; e < t; ++e) {
          const t = this._fish[e];
          for (let [e, i] of t) i.disable();
        }
        for (let e = t; e < 21; ++e) {
          const t = this._fish[e];
          for (let [e, i] of t) i.enable();
        }
      }
      getCatchPrizeType(t, e) {
        let i = null;
        const s = zt[e];
        if (t > 0 && s && s.winRate && t >= s.winRate[1][0])
          switch (e) {
            case 13:
            case 10:
            case 7:
              i = 0;
              break;
            case 14:
            case 11:
            case 8:
              i = 1;
              break;
            case 15:
            case 12:
            case 9:
              i = 2;
          }
        return i;
      }
      getCaptureThreshold(t) {
        switch (t) {
          case 7:
          case 8:
          case 9:
            return 30;
          case 10:
          case 11:
          case 12:
            return 35;
          case 13:
          case 14:
          case 15:
            return 40;
          case 16:
          case 17:
            return 100;
          case 18:
          case 20:
            return 200;
          case 19:
            return 99;
          case 21:
            return 250;
        }
        return 9999;
      }
      setMoveSpeedScale(t = 1) {
        this.iterateFishList((e) => {
          e && e.getIsAlive() && (e.setAnimSpeed(t), e.setMoveSpeed(t));
        });
      }
      resizeFish() {
        this.iterateFishList((t) => {
          t.resizeFish();
        });
      }
      getListForLightningBall() {
        let t = [];
        return (
          this.iterateFishList((e) => {
            e &&
              e.getIsAlive() &&
              e.isInGameScene() &&
              t.push({
                fishId: e.getId(),
                fishKind: e.getKind(),
              });
          }),
          t
        );
      }
      isBoss(t) {
        return t.getKind() >= 19 && t.getKind() <= 21;
      }
    };
  Wi.instance = null;
  var Yi = Wi,
    Vi = class {
      constructor() {
        ((this._userId = -1),
          (this._id = -1),
          (this._multiple = -1),
          (this._cost = 0),
          (this._isMe = !1),
          (this._direction = {
            x: 1,
            y: 1,
          }),
          (this._lastTime = Date.now()),
          (this._speed = 2e3),
          (this._tempPoint1 = new Laya.Point()),
          (this._tempPoint2 = new Laya.Point()));
      }
      init(t, e) {
        ((this.type = t),
          (this._speed = Gt[t].speed),
          this._sprite ||
            ((this._sprite = Laya.loader.getRes(he.BULLET_NORMAL).create()),
            (this._sprite.visible = !1),
            (this._sprite.active = !1),
            (this._sprite.blendMode = "unset")),
          e && ((this._container = e), e.addChild(this._sprite)));
      }
      get userId() {
        return this._userId;
      }
      set userId(t) {
        this._userId = t;
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get type() {
        return this._type;
      }
      set type(t) {
        this._type = t;
      }
      get multiple() {
        return this._multiple;
      }
      set multiple(t) {
        this._multiple = t;
      }
      get cost() {
        return this._cost;
      }
      set cost(t) {
        this._cost = t;
      }
      get isMe() {
        return this._isMe;
      }
      set isMe(t) {
        this._isMe = t;
      }
      changeBulletNormal(t) {
        this._sprite.texture = t;
      }
      changeBulletExplodeNormal(t) {
        this._explodeSkin = t;
      }
      setAlpha(t) {
        (this._sprite && (this._sprite.alpha = t), (this._alpha = t));
      }
      setOnRemoveCallback(t) {
        this._onRemoveCallback = t;
      }
      reset() {
        ((this._userId = -1),
          (this._id = -1),
          (this._multiple = -1),
          (this._isMe = !1),
          (this._targetFish = null),
          this._sprite &&
            ((this._sprite.visible = !1), (this._sprite.active = !1)),
          Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this));
      }
      startMove(t, e) {
        (this._sprite.scale(0.8, 0.8),
          (this._sprite.visible = !0),
          (this._sprite.active = !0),
          (this._sprite.rotation = -(e * me.Math.DEG - 90)),
          this._container.globalToLocal(t),
          this._sprite.pos(t.x, t.y),
          (this._direction.x = Math.cos(e)),
          (this._direction.y = -Math.sin(e)),
          (this._lastTime = 0.001 * Date.now()),
          Laya.timer.frameLoop(1, this, this.update));
      }
      stopMove() {
        Laya.timer.clear(this, this.update);
      }
      update() {
        const t = 0.001 * Date.now(),
          e = t - this._lastTime;
        this._lastTime = t;
        let i = this._speed * e;
        ((this._sprite.x += this._direction.x * i),
          (this._sprite.y += this._direction.y * i),
          this._sprite.x <= 0
            ? ((this._sprite.x = 1),
              this._direction.x < 0 && (this._direction.x *= -1),
              this.updateRotation())
            : this._sprite.x >=
                this._container.width / this._container.scaleX &&
              ((this._sprite.x =
                this._container.width / this._container.scaleX - 1),
              this._direction.x > 0 && (this._direction.x *= -1),
              this.updateRotation()),
          this._sprite.y <= 0
            ? ((this._sprite.y = 1),
              this._direction.y < 0 && (this._direction.y *= -1),
              this.updateRotation())
            : this._sprite.y >=
                this._container.height / this._container.scaleY &&
              ((this._sprite.y =
                this._container.height / this._container.scaleY - 1),
              this._direction.y > 0 && (this._direction.y *= -1),
              this.updateRotation()),
          this.collisionDetection());
      }
      updateRotation() {
        this._sprite.rotation = -(
          this.getAngle(
            this._tempPoint1.setTo(1, 0),
            this._tempPoint2.setTo(this._direction.x, this._direction.y),
          ) - 90
        );
      }
      getAngle(t, e) {
        let i = e.y > 0,
          s = me.Math.pAngle(t, e);
        return (i && (s = 2 * Math.PI - s), s * me.Math.DEG);
      }
      moveToTarget(t, e, i) {
        ((this._targetFish = i),
          this._sprite.scale(0.8, 0.8),
          (this._sprite.visible = !0),
          (this._sprite.active = !0));
        const s = i.getWorldPosition();
        (this._container.globalToLocal(s),
          (this._sprite.rotation = -((180 * e) / Math.PI - 90)),
          this._container.globalToLocal(t),
          this._sprite.pos(t.x, t.y),
          (this._direction.x = Math.cos(e)),
          (this._direction.y = -Math.sin(e)));
        const a = (me.Math.pDistance(t, s) / this._speed) * 1e3;
        (Laya.Tween.to(
          this._sprite,
          {
            x: s.x,
            y: s.y,
          },
          a,
        ),
          Laya.timer.once(a, this, () => {
            this.callbackFinishMoveToTarget();
          }));
      }
      moveContinue() {
        ((this._lastTime = 0.001 * Date.now()),
          Laya.timer.frameLoop(1, this, this.update));
      }
      setHitFishCallback(t) {
        this._onHitFish = t;
      }
      setExplodeCallback(t) {
        this._onExplode = t;
      }
      collisionDetection() {
        this._container.localToGlobal(
          this._tempPoint1.setTo(this._sprite.x, this._sprite.y),
        );
        const t = Yi.getInstance().getFishAtPosition(
          this._tempPoint1.x,
          this._tempPoint1.y,
        );
        t && (this.processCollisionDetection(t), this.remove());
      }
      callbackFinishMoveToTarget() {
        (this._targetFish && this._targetFish.getIsAlive()
          ? (this.processCollisionDetection(this._targetFish), this.remove())
          : this.moveContinue(),
          (this._targetFish = null));
      }
      remove() {
        (this.stopMove(),
          (this._sprite.visible = !1),
          (this._sprite.active = !1));
        const t = Ni.getInstance().getEffBulletExplode();
        (this._explodeSkin && t.setSkin(this._explodeSkin),
          t.setContainer(this._container),
          this._alpha && t.setAlpha(this._alpha),
          t.play(
            this._isMe,
            this._tempPoint1.setTo(this._sprite.x, this._sprite.y),
            this._onRemoveCallback.bind(this),
          ));
      }
      processCollisionDetection(t) {
        if (t && void 0 !== t.getId() && t.getIsAlive()) {
          if (!p && g) {
            let e = !0;
            switch (t.getKind()) {
              case 16:
              case 18:
              case 19:
              case 20:
                e = !1;
            }
            xe.getInstance().getRandomNumberMinMax(1, 10) >= 10 &&
              Laya.stage.event("game.catch_fish", {
                seatId: 0,
                userCoin: 9999,
                bulletKind: 1,
                bulletMultiple: this.multiple,
                listFishHit: [
                  {
                    fishId: t.getId(),
                  },
                ],
                listFishDead: [
                  {
                    fishId: t.getId(),
                    fishKind: t.getKind(),
                    isRemove: e,
                    score:
                      this.multiple *
                      xe.getInstance().getRandomNumberMinMax(10, 200),
                  },
                ],
              });
          }
          (t.playCollisionEffect(),
            this._onHitFish &&
              this._onHitFish(this.id, this.type, this.multiple, t));
        }
      }
      getLocalPoint(t) {
        return this._container.globalToLocal(new Laya.Point(t.x, t.y));
      }
    },
    Ji = class t {
      constructor() {}
      setContainer(t) {
        this._container = t;
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      play(t, e, i, s, a) {
        if (!(i <= 3) && s)
          switch (s) {
            case 1:
              const n = Ni.getInstance().getPalsyFish1();
              (n.init(this._container),
                n.play(t, e, i, s, a, () => {
                  Ni.getInstance().recoverPalsyFish1(n);
                }));
              break;
            case 2:
              const o = Ni.getInstance().getPalsyFish2();
              (o.init(this._container),
                o.play(t, e, i, s, a, () => {
                  Ni.getInstance().recoverPalsyFish2(o);
                }));
              break;
            case 3:
              const h = Ni.getInstance().getPalsyFish3();
              (h.init(this._container),
                h.play(t, e, i, s, a, () => {
                  Ni.getInstance().recoverPalsyFish3(h);
                }));
              break;
            case 19:
              const l = Ni.getInstance().getPalsyFish19();
              (l.init(this._container),
                l.play(t, e, i, s, a, () => {
                  Ni.getInstance().recoverPalsyFish19(l);
                }));
              break;
            case 20:
              const r = Ni.getInstance().getPalsyFish20();
              (r.init(this._container),
                r.play(t, e, i, s, a, () => {
                  Ni.getInstance().recoverPalsyFish20(r);
                }));
          }
      }
    },
    ji = class extends Vi {
      constructor() {
        (super(...arguments), (this._timeUp = 433), (this._timeDown = 270));
      }
      init(t, e) {
        ((this.type = t),
          (this._timeUp = Gt[t].timeUp),
          (this._timeDown = Gt[t].timeDown),
          this._sprite ||
            ((this._sprite = Laya.loader.getRes(he.BULLET_JELLYFISH).create()),
            (this._animator2D = this._sprite.getComponent(Laya.Animator2D)),
            (this._sprite.visible = !1),
            (this._sprite.active = !1)),
          e && ((this._container = e), e.addChild(this._sprite)));
      }
      reset() {
        ((this._tweenFly = null),
          (this._userId = -1),
          (this._id = -1),
          (this._multiple = -1),
          (this._isMe = !1),
          (this._targetFish = null),
          this._sprite &&
            ((this._sprite.visible = !1),
            (this._sprite.active = !1),
            Laya.Tween.clearAll(this._sprite)),
          Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this));
      }
      moveToTarget(t, e, i) {
        ((this._targetFish = i),
          (this._sprite.visible = !0),
          (this._sprite.active = !0),
          (this._sprite.rotation = -((180 * e) / Math.PI - 90)),
          this._container.globalToLocal(t),
          this._sprite.pos(t.x, t.y),
          (this._direction.x = Math.cos(e)),
          (this._direction.y = -Math.sin(e)));
        const s = this._targetFish.getWorldPosition();
        (this._container.globalToLocal(s),
          (this._tweenFly = Laya.Tween.to(
            this._sprite,
            {
              x: s.x,
              y: s.y,
            },
            700,
            null,
            Laya.Handler.create(this, () => {
              this._tweenFly = null;
            }),
          )),
          this._animator2D.play("bullet_jellyfish_up", 0, 0),
          Laya.timer.once(this._timeUp, this, () => {
            this._targetFish
              ? (this._targetFish.getWorldPosition(this._tempPoint1),
                this._container.globalToLocal(this._tempPoint1),
                s.copy(this._tempPoint1))
              : this._tempPoint1.copy(s);
            const i = this.getRotate(t, this._tempPoint1);
            (this._tempPoint2.setTo(this._sprite.x, this._sprite.y),
              me.Math.pSubIn(this._tempPoint1, this._tempPoint2),
              me.Math.pMultIn(this._tempPoint1, 0.8),
              me.Math.pAddIn(this._tempPoint2, this._tempPoint1),
              this._tweenFly && this._tweenFly.clear(),
              (this._tweenFly = null),
              Laya.Tween.to(
                this._sprite,
                {
                  rotation: i,
                },
                this._timeDown,
                Laya.Ease.strongIn,
              ),
              Fi.create(
                this._sprite,
                0.001 * this._timeDown,
                [
                  new Laya.Point(this._sprite.x, this._sprite.y),
                  new Laya.Point(this._tempPoint2.x, this._tempPoint2.y),
                  new Laya.Point(s.x, s.y),
                ],
                () => {
                  (this._onExplode &&
                    this._onExplode(
                      this._container.localToGlobal(s),
                      e,
                      this.isMe,
                    ),
                    this.callbackFinishMoveToTarget());
                },
              ).start());
          }));
      }
      callbackFinishMoveToTarget() {
        if (this.isMe) {
          Fe.getInstance().gameMain.shakeSceneBySpecialCannon();
        }
        (this._targetFish && this._targetFish.getIsAlive()
          ? this.processCollisionDetection(this._targetFish)
          : (Fe.getInstance().gameMain.showRefunded(this._userId, this._cost),
            Laya.timer.once(100, this, () => {
              this._onRemoveCallback();
            })),
          Laya.timer.once(100, this, this.remove),
          (this._targetFish = null));
      }
      remove() {
        ((this._sprite.visible = !1),
          (this._sprite.active = !1),
          this._animator2D.stop());
      }
      processCollisionDetection(t) {
        if (t && void 0 !== t.getId() && t.getIsAlive()) {
          if (!p && g) {
            let e = !0;
            switch (t.getKind()) {
              case 16:
              case 18:
              case 19:
              case 20:
                e = !1;
            }
            xe.getInstance().getRandomNumberMinMax(1, 10) >= 10 &&
              Laya.stage.event("game.catch_fish", {
                seatId: 0,
                userCoin: 9999,
                bulletKind: 1,
                bulletMultiple: 10,
                listFishHit: [
                  {
                    fishId: t.getId(),
                  },
                ],
                listFishDead: [
                  {
                    fishId: t.getId(),
                    fishKind: t.getKind(),
                    isRemove: e,
                    score: xe.getInstance().getRandomNumberMinMax(10, 200),
                  },
                ],
              });
          }
          (t.playCollisionEffect(),
            this._onHitFish &&
              this._onHitFish(this.id, this.type, this.multiple, t),
            this.randomParalysis(t));
        } else this._onRemoveCallback();
      }
      randomParalysis(t) {
        if (Fe.getInstance().gameMain.isCrocodileRewardShowPlaying()) return;
        if (t && t.isParalysis) return;
        const e = zt[t.getKind()].rateParalysis;
        if (Math.random() < e) {
          const e = t.getKind(),
            i = zt[e].paralysisType,
            s = t.rotation;
          (t.setMoveSpeed(0),
            i > 1 && t.setAnimSpeed(0),
            Ji.getInstance().play(t.getWorldPosition(), this._isMe, e, i, s),
            Laya.timer.once(1e3, t, () => {
              (t &&
                t.getIsAlive() &&
                (t.setMoveSpeed(1),
                i > 1 && t.setAnimSpeed(1),
                xe.getInstance().stopShake(t),
                (t.noRotate = !1),
                (t.isParalysis = !1)),
                this._onRemoveCallback());
            }),
            (t.noRotate = !0),
            (t.isParalysis = !0),
            xe.getInstance().shake2D(t, 950, 40, 13),
            this.isMe &&
              ai.getInstance().playSFXShoot(pe.CANNON_JELLYFISH_NUMBNESS));
        } else this._onRemoveCallback();
      }
      getRotate(t, e) {
        const i = {
            x: e.x - t.x,
            y: e.y - t.y,
          },
          s = {
            x: 1,
            y: 0,
          },
          a = i.y > s.y;
        let n = me.Math.pAngle(i, s);
        return (a && (n = 2 * Math.PI - n), -((180 * n) / Math.PI - 90));
      }
    },
    Zi = class {
      constructor() {
        ((this._count = 0), (this._point = new Laya.Point(0, 0)));
      }
      init(t, e) {
        ((this._container = t), (this._node = e));
      }
      start(t) {
        ((this._isMe = t),
          Laya.timer.loop(1, this, this.update, [Laya.timer.delta]));
      }
      stop() {
        Laya.timer.clear(this, this.update);
      }
      update(t) {
        if (((this._count -= t), this._count <= 0)) {
          this._count = 0;
          let t = this._getImageFromPool();
          ((t.anchorX = 0.5),
            (t.anchorY = 0.5),
            (t.pivotX = t.width / 2),
            (t.pivotY = t.height / 2),
            (t.alpha = this._isMe ? 1 : 100 / 255),
            t.scale(this._node.scaleX, this._node.scaleY),
            (t.rotation = _i.iRand(1, 360)),
            this._container.globalToLocal(
              this._node.localToGlobal(this._point.setTo(0, 0)),
            ),
            this._container.addChild(t),
            me.Math.pAddIn(this._point, {
              x: _i.iRand(-5, 5),
              y: _i.iRand(-5, 5),
            }),
            t.pos(this._point.x, this._point.y),
            (t.visible = !0),
            (t.active = !0),
            Laya.Tween.to(
              t,
              {
                x: t.x + _i.iRand(-10, 10),
                y: t.y + _i.iRand(-10, 10),
                rotation: t.rotation + _i.iRand(-90, 90),
                alpha: t.alpha + _i.iRand(-150, -100) / 255,
                scaleX: 0,
                scaleY: 0,
              },
              100 + 200 * Math.random(),
              null,
              Laya.Handler.create(this, () => {
                this._pushSmokeToPool(t);
              }),
            ));
        }
      }
      _getImageFromPool() {
        return Ni.getInstance().getSharkSmoke();
      }
      _pushSmokeToPool(t) {
        Ni.getInstance().recoverSharkSmoke(t);
      }
    },
    qi = class extends Vi {
      constructor() {
        (super(...arguments), (this._state1 = 320), (this._state2 = 100));
      }
      init(t, e) {
        ((this.type = t),
          this._sprite ||
            ((this._sprite = Laya.loader.getRes(he.BULLET_SHARK).create()),
            (this._sprite.visible = !1),
            (this._sprite.active = !1),
            (this._animator = this._sprite.getComponent(Laya.Animator2D)),
            (this._bodyAnimator = this._sprite
              .getChildByName("body")
              .getComponent(Laya.Animator2D)),
            (this._particleHit = this._sprite
              .getChildByName("hit")
              .getChildByName("particlesystem_chips")
              .getComponent(Laya.Script)),
            (this._particleNode = this._sprite
              .getChildByName("body")
              .getChildByName("particle")),
            (this._particleIdle = new Zi())),
          e &&
            ((this._container = e),
            e.addChild(this._sprite),
            this._particleIdle.init(this._container, this._particleNode)));
      }
      reset() {
        ((this._userId = -1),
          (this._id = -1),
          (this._multiple = -1),
          (this._isMe = !1),
          (this._targetFish = null),
          this._sprite &&
            ((this._sprite.visible = !1),
            (this._sprite.active = !1),
            Laya.Tween.clearAll(this._sprite)),
          Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          this._animator.stop(),
          this._particleIdle.stop(),
          this._particleHit.stopSystem());
      }
      moveToTarget(t, e, i) {
        ((this._targetFish = i),
          (this._sprite.zOrder = this._isMe ? 2 : 0),
          (this._sprite.visible = !0),
          (this._sprite.active = !0),
          this._particleIdle.start(this._isMe),
          this._animator.play("idle", 0, 0),
          (this._sprite.rotation = -((180 * e) / Math.PI - 90)),
          this._container.globalToLocal(t),
          this._sprite.pos(t.x, t.y),
          (this._direction.x = Math.cos(e)),
          (this._direction.y = -Math.sin(e)),
          (this._tempPoint1.x = t.x),
          (this._tempPoint1.y = t.y),
          i.getWorldPosition(this._tempPoint2),
          this._container.globalToLocal(this._tempPoint2),
          me.Math.pSubIn(this._tempPoint2, this._tempPoint1),
          me.Math.pMultIn(this._tempPoint2, 0.6),
          me.Math.pAddIn(this._tempPoint1, this._tempPoint2),
          Laya.Tween.to(
            this._sprite,
            {
              x: this._tempPoint1.x,
              y: this._tempPoint1.y,
            },
            this._state1,
            Laya.Ease.linearNone,
          ),
          Laya.timer.once(this._state1, this, () => {
            (this._targetFish &&
              (this._targetFish.getWorldPosition(this._tempPoint1),
              this._container.globalToLocal(this._tempPoint1)),
              this._animator.play("hit", 0, 0),
              (this._sprite.zOrder = this._isMe ? 1 : 0),
              Laya.Tween.to(
                this._sprite,
                {
                  x: this._tempPoint1.x,
                  y: this._tempPoint1.y,
                },
                this._state2,
                Laya.Ease.linearNone,
              ),
              Laya.timer.once(
                this._state2,
                this,
                this.callbackFinishMoveToTarget,
              ),
              this._isMe &&
                ai.getInstance().playSFXShoot(pe.CANNON_SHARK_BITE_EXPLODE));
          }),
          this._bodyAnimator.play("path_" + _i.randomItem([1, 2, 3, 4]), 0, 0));
      }
      callbackFinishMoveToTarget() {
        if (
          (this._targetFish && this._targetFish.getIsAlive()
            ? this.processCollisionDetection(this._targetFish)
            : Fe.getInstance().gameMain.showRefunded(this._userId, this._cost),
          (this._targetFish = null),
          this._bodyAnimator.stop(),
          Laya.timer.once(200, this, () => {
            (this._particleIdle.stop(),
              this._particleHit.resetSystem(),
              Laya.timer.once(220, this, this.remove));
          }),
          this._isMe)
        ) {
          Fe.getInstance().gameMain.shakeSceneBySpecialCannon();
        }
      }
      remove() {
        (this._animator.stop(),
          (this._sprite.visible = !1),
          (this._sprite.active = !1),
          this._particleIdle.stop(),
          this._particleHit.stopSystem(),
          this._onRemoveCallback());
      }
    },
    Qi = class {
      constructor(t) {
        ((this.isBtnYesNo = !0),
          (this.popupAlert = t),
          (this.popupAlert.visible = !1),
          (this.popupAlert.active = !1),
          this.init(),
          this.initLanguage(),
          this.hide());
      }
      getMainObject() {
        return this.popupAlert;
      }
      init() {
        ((this.bgCover = this.popupAlert.getChildByName("bg_cover")),
          (this.bg = this.popupAlert.getChildByName("bg")),
          (this.btnNo = this.popupAlert.getChildByName("btn_no")),
          (this.btnYes = this.popupAlert.getChildByName("btn_yes")),
          (this.btnOk = this.popupAlert.getChildByName("btn_ok")),
          (this.text = this.popupAlert.getChildByName("text")),
          xe
            .getInstance()
            .registerButtonEvent(this.btnNo, this.onButtonNoTouches.bind(this)),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnYes,
              this.onButtonYesTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(this.btnOk, this.onButtonOkTouches.bind(this)),
          xe
            .getInstance()
            .registerButtonEvent(
              this.bgCover,
              this.onOutSideTouches.bind(this),
              1,
            ),
          xe
            .getInstance()
            .registerButtonEvent(this.bg, this.onInSideTouches.bind(this), 1));
      }
      show() {
        if (!this.popupAlert.visible) {
          const t = Ze.getInstance().scaleRate;
          (this.popupAlert.scale(t.x, t.y),
            (this.popupAlert.visible = !0),
            (this.popupAlert.active = !0),
            this.isBtnYesNo
              ? ((this.btnNo.visible = !0),
                (this.btnYes.visible = !0),
                (this.btnOk.visible = !1))
              : ((this.btnNo.visible = !1),
                (this.btnYes.visible = !1),
                (this.btnOk.visible = !0)));
        }
      }
      hide() {
        this.popupAlert.visible &&
          ((this.popupAlert.visible = !1), (this.popupAlert.active = !1));
      }
      initLanguage() {
        let t = Ye.getInstance().getLanguageName();
        ((this.txtTitle = this.popupAlert
          .getChildByName("bg_title")
          .getChildByName("txt_message")),
          (this.txtNo = this.btnNo.getChildByName("text_no")),
          (this.txtYes = this.btnYes.getChildByName("text_yes")),
          (this.txtOk = this.btnOk.getChildByName("text_ok")),
          "en" != t &&
            (Ye.getInstance().localizeImageText(this.txtTitle, oe.TXT_MESSAGE),
            Ye.getInstance().localizeImageText(this.txtNo, oe.TXT_NO),
            Ye.getInstance().localizeImageText(this.txtYes, oe.TXT_YES),
            Ye.getInstance().localizeImageText(this.txtOk, oe.TXT_OK)));
      }
      setString(t) {
        Ye.getInstance().localizeText(this.text, t);
      }
      onButtonNoTouches() {
        (this.hide(), this._cancelCallback && this._cancelCallback());
      }
      onButtonYesTouches() {
        (this.hide(),
          this._confirmCallback && this._confirmCallback(),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonOkTouches() {
        (this.hide(), this._confirmCallback && this._confirmCallback());
      }
      onOutSideTouches() {
        (this.hide(), this._cancelCallback && this._cancelCallback());
      }
      onInSideTouches() {}
      setConfirmCallback(t) {
        this._confirmCallback = t;
      }
      setCancelCallback(t) {
        this._cancelCallback = t;
      }
      visibleButtonOk(t) {
        this.isBtnYesNo = t;
      }
    },
    { regClass: $i, property: ts } = Laya,
    es = class extends Laya.Script {
      constructor() {
        (super(),
          (this.isResizing = !1),
          (this.currentBrowserWidth = 0),
          (this.currentBrowserHeight = 0),
          (this.resizeManager = null),
          (this.popupAlert = null),
          (this.listLoading = []),
          (this.totalLoad = 0),
          (this.currentLoad = 0),
          (this.doneLoad = 0),
          (this.doneLoadFake = 1),
          (this.totalLoadFake = 0),
          (this.isLoginDone = !1),
          (this.joinLobbySuccess = !1),
          (this.resizeManager = Ze.getInstance()),
          (p || m) && CoreHelper.enableNoSleep(),
          this.initLanguage(),
          (!p && g) || this.initNetworkHandler());
      }
      getCurrentLoad() {
        return this.currentLoad;
      }
      setCurrentLoad(t) {
        this.currentLoad = t;
      }
      getTotalLoad() {
        return this.totalLoad;
      }
      setTotalLoad(t) {
        this.totalLoad = t;
      }
      getTotalLoadFake() {
        return this.totalLoadFake;
      }
      setTotalLoadFake(t) {
        this.totalLoadFake = t;
      }
      onAwake() {
        this.initPopupAlert();
      }
      onStart() {
        ((p || m) && this.addPrefixResources(), this.startLoading());
      }
      initNetworkHandler() {
        (Laya.stage.on("system.login_success", this, this.onLoginSuccess),
          Laya.stage.on("system.login_failed", this, this.onLoginFailed),
          Laya.stage.on(
            "system.socket_disconnected",
            this,
            this.onSocketDisconnected,
          ),
          Laya.stage.on("system.socket_error", this, this.onSocketClosed),
          Laya.stage.on("lobby.table_info", this, this.onGetTableInfo),
          Laya.stage.on(
            "lobby.join_lobby_response",
            this,
            this.onGetJoinLobbyResponse,
          ));
      }
      onSocketDisconnected() {
        let t = {};
        ((t.message = Ye.getInstance().getText("key_connect_error")),
          this.showPopupAlert(t));
      }
      onSocketClosed() {
        let t = {};
        ((t.message = Ye.getInstance().getText("key_connect_error")),
          this.showPopupAlert(t));
      }
      addPrefixResources() {
        for (let t in ae) ae[t] = se + ae[t];
        for (let t in oe) oe[t] = se + oe[t];
        for (let t in re) re[t] = se + re[t];
        for (let t in ce) ce[t] = se + ce[t];
        for (let t in he) he[t] = se + he[t];
        for (let t in le) le[t] = se + le[t];
        for (let t in pe) pe[t] = se + pe[t];
        for (let t in de) de[t] = se + de[t];
        for (let t in ge) ge[t] = se + ge[t];
        for (let t in _e) _e[t] = se + _e[t];
        for (let t in ue) ue[t] = se + ue[t];
        for (let t in ne) ne[t] = se + ne[t];
      }
      initLoading() {
        ((p || m) && this.listLoading.push(...this.loadAtlas()),
          this.listLoading.push(...this.loadFont()),
          this.listLoading.push(...this.loadTexture()),
          this.listLoading.push(...this.loadMaterial()),
          this.listLoading.push(...this.loadPathFile()),
          this.listLoading.push(...this.loadFishPrefab()),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_NORMAL)),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_EXPLODE)),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_LASER)),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_LASER_BIG)),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BULLET_LASER_EXPLODE),
          ),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_SHARK)),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_JELLYFISH)),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BULLET_JELLYFISH_EXPLODE),
          ),
          this.listLoading.push(...this.loadNormalPrefab(he.BULLET_GRAB)),
          this.listLoading.push(...this.loadNormalPrefab(he.CANNON_JELLYFISH)),
          this.listLoading.push(...this.loadNormalPrefab(he.CANNON_HARPOON)),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.NORMAL_CATCH_COIN1),
          ),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.NORMAL_CATCH_COIN_NUM),
          ),
          this.listLoading.push(...this.loadNormalPrefab(he.COIN_REFUNDED)),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BIG_CATCH_EFFECT_COIN),
          ),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BIG_CATCH_EFFECT_PRIZE),
          ),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BIG_CATCH_EFFECT_PRIZE_7X),
          ),
          this.listLoading.push(
            ...this.loadNormalPrefab(he.BIG_CATCH_EFFECT_REWARD),
          ),
          this.listLoading.push(...this.loadNormalPrefab(he.BOSS_COMING)),
          this.listLoading.push(...this.loadNormalPrefab(he.FISH_AURA)),
          this.listLoading.push(...this.loadNormalPrefab(he.PALSY_FISH_1)),
          this.listLoading.push(...this.loadNormalPrefab(he.PALSY_FISH_2)),
          this.listLoading.push(...this.loadNormalPrefab(he.PALSY_FISH_3)),
          this.listLoading.push(...this.loadNormalPrefab(he.PALSY_FISH_19)),
          this.listLoading.push(...this.loadNormalPrefab(he.PALSY_FISH_20)),
          this.listLoading.push(...this.loadNormalPrefab(he.LOADING)),
          this.listLoading.push(...this.loadBitmapFont()),
          this.listLoading.push(...this.initPools()),
          this.setTotalLoad(this.listLoading.length || 1),
          this.setTotalLoadFake(50));
      }
      initLanguage() {
        let t = "en";
        if (p || m) {
          let e = CoreHelper.getLanguageCode();
          e && (t = e);
        }
        (Ye.getInstance().setLoadDoneDataCallback(() => {
          this.updateLanguage();
        }),
          Ye.getInstance().init(Ye.getInstance().parseType(t)),
          this.updateLanguage());
      }
      initPopupAlert() {
        this.panelPopupAlert &&
          ((this.panelPopupAlert.zOrder = W),
          (this.popupAlert = new Qi(this.panelPopupAlert)));
      }
      updateLanguage() {
        "en" !== Ye.getInstance().getLanguageName() &&
          Ye.getInstance().localizeImageText(
            this.titleLoading,
            oe.TXT_TITLE_LOADING,
          );
      }
      autoResize() {
        Laya.stage.on(
          Laya.Event.RESIZE,
          this,
          this.resizeManager.debounce(() => {
            const t = Laya.Browser.clientWidth,
              e = Laya.Browser.clientHeight;
            (this.currentBrowserWidth === t &&
              this.currentBrowserHeight === e) ||
              this.resizeGame();
          }, w),
        );
      }
      resizeGame() {
        this.isResizing ||
          ((this.isResizing = !0),
          this.resizeManager.resizeMainGame(this.background, 1),
          (this.currentBrowserWidth = Laya.Browser.clientWidth),
          (this.currentBrowserHeight = Laya.Browser.clientHeight),
          (this.isResizing = !1));
      }
      showPopupAlert(t) {
        t &&
          this.popupAlert &&
          (this.popupAlert.visibleButtonOk(!1),
          this.popupAlert.setString(t.message || ""),
          this.popupAlert.show(),
          this.popupAlert.setConfirmCallback(() => {
            (p || m) && CoreHelper.backToLobby();
          }),
          this.popupAlert.setCancelCallback(() => {
            (p || m) && CoreHelper.backToLobby();
          }));
      }
      startLoading() {
        Ze.getInstance().setScaleRate();
        const t = Ze.getInstance().scaleRate;
        (this.initLoading(),
          Laya.timer.loop(50, this, this.updateLoading),
          this.progressBar &&
            ((this.progressBar.value = 0), this.progressBar.scale(t.x, t.y)),
          this.txtLoading &&
            ((this.txtLoading.text = ""),
            (this.txtLoading.overflow = "visible"),
            (this.txtLoading.fontSize = 28),
            this.txtLoading.scale(t.x, t.y)),
          this.titleLoading && this.titleLoading.scale(t.x, t.y));
      }
      startConnect(t, e) {
        Xe.getInstance().connect(t || f, e || b);
      }
      updateLoading() {
        if (
          (this.getCurrentLoad() >= 0 &&
            this.getCurrentLoad() <= this.doneLoad &&
            this.doneLoad <= this.getTotalLoad() &&
            this.load(),
          this.updateProgressBar(),
          this.doneLoad >= this.getTotalLoad())
        ) {
          if ((Laya.timer.clear(this, this.updateLoading), !p && g))
            return void this.onLoadingDone();
          if (p) {
            let t = Xe.getInstance().getLoginInfo();
            if (t && t.host && t.port) this.startConnect(t.host, t.port);
            else {
              let t = {};
              ((t.message = Ye.getInstance().getText("key_connect_error")),
                this.showPopupAlert(t));
            }
          } else this.startConnect();
        }
      }
      load() {
        if (
          this.listLoading &&
          this.listLoading.length > 0 &&
          this.getCurrentLoad() < this.listLoading.length
        ) {
          let t = this.listLoading[this.getCurrentLoad()];
          (this.setCurrentLoad(this.getCurrentLoad() + 1), t && t());
        }
      }
      updateProgressBar() {
        let t = this.doneLoadFake / this.getTotalLoadFake();
        t > 0 &&
          t <= 0.5 &&
          ((this.progressBar.value = t),
          (this.doneLoadFake += xe.getInstance().getRandomNumberMinMax(1, 2)),
          this.txtLoading &&
            Ye.getInstance().localizeText(
              this.txtLoading,
              xe
                .getInstance()
                .formatString(
                  Ye.getInstance().getText("key_loading_game") + " ",
                  (100 * t).toFixed(0),
                ),
            ));
        let e = (this.doneLoad / this.getTotalLoad()) * 0.5 + 0.5;
        e > 0 &&
          t > 0.5 &&
          ((this.progressBar.value = e),
          this.txtLoading &&
            Ye.getInstance().localizeText(
              this.txtLoading,
              xe
                .getInstance()
                .formatString(
                  Ye.getInstance().getText("key_loading_game") + " ",
                  (100 * e).toFixed(0),
                ),
            ));
      }
      onLoadingDone() {
        Laya.Scene.open(
          (p || m ? se : "") + ae.GAME_SCENE,
          !0,
          null,
          Laya.Handler.create(this, this.onNewSceneOpened),
        );
      }
      onNewSceneOpened(t) {
        t &&
          (this.loadBackground(t),
          (t.alpha = 0),
          Laya.Tween.to(
            t,
            {
              alpha: 1,
            },
            500,
            Laya.Ease.linearNone,
          ));
      }
      loadTexture() {
        let t = [];
        for (let e in ne) {
          let i = ne[e];
          i &&
            t.push(() => {
              Laya.loader.load(
                i,
                Laya.Handler.create(this, (t) => {
                  (Laya.loader.cacheRes(i, t), this.doneLoad++);
                }),
              );
            });
        }
        return t;
      }
      loadAtlas() {
        let t = [],
          e = Ye.getInstance().getLanguageName();
        for (let i in ue)
          (i.includes("LOCALIZE_TEXT") &&
            !i.includes("LOCALIZE_TEXT_" + e.toUpperCase())) ||
            t.push(() => {
              Laya.loader.load(
                ue[i],
                Laya.Handler.create(this, (t) => {
                  (Laya.loader.cacheRes(ue[i], t), this.doneLoad++);
                }),
              );
            });
        return t;
      }
      loadBitmapFont() {
        let t = [];
        for (let e in ce)
          t.push(() => {
            Laya.BitmapFont.loadFont(
              ce[e],
              new Laya.Handler(this, (t) => {
                (Laya.Text.registerBitmapFont(ce[e], t), this.doneLoad++);
              }),
            );
          });
        return t;
      }
      loadFont() {
        let t = [];
        for (let e in re)
          t.push(() => {
            Laya.loader.load(re[e], Laya.Loader.TTF).then((t) => {
              (Laya.loader.cacheRes(re[e], t), this.doneLoad++);
            });
          });
        return t;
      }
      loadFishPrefab() {
        let t = [];
        for (let e = 0; e <= 21; e++) {
          let i = zt[e];
          if (i && i.available && !i.noPrefab) {
            let i = xe.getInstance().formatString(he.FISH, e);
            t.push(() => {
              Laya.loader.load(
                i,
                Laya.Handler.create(this, (t) => {
                  (Ke.getInstance().setPrefabFish(e, t),
                    Laya.loader.cacheRes(i, t),
                    this.doneLoad++);
                }),
              );
            });
          }
        }
        return t;
      }
      loadNormalPrefab(t) {
        let e = [];
        return (
          t &&
            e.push(() => {
              Laya.loader.load(
                t,
                Laya.Handler.create(this, (e) => {
                  (Laya.loader.cacheRes(t, e), this.doneLoad++);
                }),
              );
            }),
          e
        );
      }
      loadMaterial() {
        const t = [];
        for (let e in ge) {
          if (!Object.prototype.hasOwnProperty.call(ge, e)) return;
          t.push(() => {
            Laya.loader.load(
              ge[e],
              Laya.Handler.create(this, (t) => {
                (Laya.loader.cacheRes(ge[e], t), this.doneLoad++);
              }),
            );
          });
        }
        return t;
      }
      getKeyPoolByFishKind(t) {
        if (t)
          switch (t) {
            case 7:
            case 8:
            case 9:
              return xe.getInstance().formatString(J);
            case 10:
            case 11:
            case 12:
              return xe.getInstance().formatString(j);
            default:
              return xe.getInstance().formatString(V, t);
          }
      }
      initPools() {
        let t = [];
        for (let e = 0; e <= 12; e++)
          t.push(() => {
            if (zt[e] && zt[e].available && zt[e].poolInitCount > 0) {
              let t = this.getKeyPoolByFishKind(e);
              if (t) {
                let i = Laya.Pool.getPoolBySign(t);
                for (let t = 0; t < zt[e].poolInitCount; t++) {
                  let t = null;
                  switch (e) {
                    case 7:
                    case 8:
                    case 9:
                      t = new ki();
                      break;
                    case 10:
                    case 11:
                    case 12:
                      t = new Di();
                      break;
                    default:
                      t = new xi();
                  }
                  (t.init(e), i.push(t));
                }
              }
            }
            this.doneLoad++;
          });
        for (let e = 1; e <= 3; ++e)
          t.push(() => {
            if (Gt[e] && Gt[e].poolInitCount > 0) {
              let t = xe.getInstance().formatString(q, e),
                i = Laya.Pool.getPoolBySign(t);
              for (let t = 0; t < Gt[e].poolInitCount; ++t) {
                let t = null;
                switch (e) {
                  case 2:
                    t = new qi();
                    break;
                  case 3:
                    t = new ji();
                    break;
                  default:
                    t = new Vi();
                }
                (t.init(e), i.push(t));
              }
            }
            this.doneLoad++;
          });
        return (
          t.push(() => {
            if (Gt[6] && Gt[6].poolInitCount > 0) {
              const t = Laya.Pool.getPoolBySign($);
              for (let e = 0; e < Gt[6].poolInitCount; ++e) {
                const e = Laya.loader.getRes(he.BULLET_LASER).create();
                t.push(e);
              }
            }
            this.doneLoad++;
          }),
          t.push(() => {
            if (Gt[7] && Gt[7].poolInitCount > 0) {
              const t = Laya.Pool.getPoolBySign(tt);
              for (let e = 0; e < Gt[7].poolInitCount; ++e) {
                const e = Laya.loader.getRes(he.BULLET_LASER_BIG).create();
                t.push(e);
              }
            }
            this.doneLoad++;
          }),
          t
        );
      }
      loadPathFile() {
        let t = [];
        return (
          t.push(() => {
            Laya.loader.load(
              _e.DATA_FILE,
              Laya.Handler.create(this, (t) => {
                (Laya.loader.cacheRes(_e.DATA_FILE, t),
                  Je.getInstance(),
                  this.doneLoad++);
              }),
            );
          }),
          t
        );
      }
      onLoginSuccess(t) {
        this.isLoginDone = !0;
      }
      onLoginFailed(t) {
        this.showPopupAlert(t);
      }
      onGetTableInfo(t) {
        this.isLoginDone && this.joinLobbySuccess && this.onLoadingDone();
      }
      onGetJoinLobbyResponse(t) {
        t && 1 == t.code
          ? ((this.joinLobbySuccess = !0),
            (Be.getInstance().roomKind = t.roomKind),
            (Be.getInstance().roomId = t.roomId))
          : ((this.joinLobbySuccess = !1), this.showPopupAlert(t));
      }
      loadBackground(t) {
        const e = t.getChildByName("layer_bg").getChildByName("bg_normal");
        ((e.alpha = 0),
          Laya.Tween.to(
            e,
            {
              alpha: 1,
            },
            500,
            Laya.Ease.linearNone,
          ));
      }
    };
  (c([ts(Laya.Sprite)], es.prototype, "background", 2),
    c([ts(Laya.ProgressBar)], es.prototype, "progressBar", 2),
    c([ts(Laya.Text)], es.prototype, "txtLoading", 2),
    c([ts(Laya.Sprite)], es.prototype, "titleLoading", 2),
    c([ts(Laya.Panel)], es.prototype, "panelPopupAlert", 2),
    (es = c([$i("YatCSvKQRK27USMZhzNlCA")], es)));
  var { regClass: is, property: ss, Tween: as } = Laya,
    ns = class extends Laya.Script {
      constructor() {
        (super(),
          p &&
            Xe.getInstance().setLoginInfo({
              flashVar: CoreHelper.getFlashvars(),
              userId: CoreHelper.getUserId(),
              host: CoreHelper.getGameHost(),
              port: CoreHelper.getGamePort(),
            }));
      }
      onStart() {
        p
          ? this.startLoadingScene()
          : p || !g
            ? this.initListAccount()
            : this.startLoadingScene();
      }
      initListAccount() {
        ((this.dataAccounts = [
          {
            userId: "37464",
            userName: "cuongnm05",
            userEmail: "cuongnm05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37463",
            userName: "cuongnm04",
            userEmail: "cuongnm04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37462",
            userName: "cuongnm03",
            userEmail: "cuongnm03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37461",
            userName: "cuongnm02",
            userEmail: "cuongnm02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37460",
            userName: "cuongnm01",
            userEmail: "cuongnm01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37459",
            userName: "datdt05",
            userEmail: "datdt05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37458",
            userName: "datdt04",
            userEmail: "datdt04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37457",
            userName: "datdt03",
            userEmail: "datdt03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37456",
            userName: "datdt02",
            userEmail: "datdt02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37455",
            userName: "datdt01",
            userEmail: "datdt01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37454",
            userName: "phunv05",
            userEmail: "phunv05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37453",
            userName: "phunv04",
            userEmail: "phunv04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37452",
            userName: "phunv03",
            userEmail: "phunv03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37451",
            userName: "phunv02",
            userEmail: "phunv02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37450",
            userName: "phunv01",
            userEmail: "phunv01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37449",
            userName: "tuannd05",
            userEmail: "tuannd05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37448",
            userName: "tuannd04",
            userEmail: "tuannd04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37447",
            userName: "tuannd03",
            userEmail: "tuannd03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37446",
            userName: "tuannd02",
            userEmail: "tuannd02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37445",
            userName: "tuannd01",
            userEmail: "tuannd01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37444",
            userName: "nhannht05",
            userEmail: "nhannht05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37443",
            userName: "nhannht04",
            userEmail: "nhannht04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37442",
            userName: "nhannht03",
            userEmail: "nhannht03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37441",
            userName: "nhannht02",
            userEmail: "nhannht02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37440",
            userName: "nhannht01",
            userEmail: "nhannht01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37439",
            userName: "binhpt05",
            userEmail: "binhpt05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37438",
            userName: "binhpt04",
            userEmail: "binhpt04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37437",
            userName: "binhpt03",
            userEmail: "binhpt03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37436",
            userName: "binhpt02",
            userEmail: "binhpt02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37435",
            userName: "binhpt01",
            userEmail: "binhpt01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37434",
            userName: "dungmh05",
            userEmail: "dungmh05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37433",
            userName: "dungmh04",
            userEmail: "dungmh04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37432",
            userName: "dungmh03",
            userEmail: "dungmh03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37431",
            userName: "dungmh02",
            userEmail: "dungmh02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "26907",
            userName: "dungmh01",
            userEmail: "dungmh01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37430",
            userName: "namnhq05",
            userEmail: "namnhq05@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37429",
            userName: "namnhq04",
            userEmail: "namnhq04@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37428",
            userName: "namnhq03",
            userEmail: "namnhq03@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37427",
            userName: "namnhq02",
            userEmail: "namnhq02@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "37426",
            userName: "namnhq01",
            userEmail: "namnhq01@abc.net",
            userPass:
              "FB-07-96-82-AA-6F-76-14-38-2C-B9-FF-02-21-6A-26-F1-C4-C2-3E",
          },
          {
            userId: "29943",
            userName: "poker01",
            userEmail: "poker01@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29944",
            userName: "poker02",
            userEmail: "poker02@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29945",
            userName: "poker03",
            userEmail: "poker03@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29946",
            userName: "poker04",
            userEmail: "poker04@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29947",
            userName: "poker05",
            userEmail: "poker05@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29948",
            userName: "poker06",
            userEmail: "poker06@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29949",
            userName: "poker07",
            userEmail: "poker07@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29950",
            userName: "poker08",
            userEmail: "poker08@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29951",
            userName: "poker09",
            userEmail: "poker09@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29952",
            userName: "poker010",
            userEmail: "poker010@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29953",
            userName: "poker011",
            userEmail: "poker011@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29954",
            userName: "poker012",
            userEmail: "poker012@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29955",
            userName: "poker013",
            userEmail: "poker013@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29956",
            userName: "poker014",
            userEmail: "poker014@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29957",
            userName: "poker015",
            userEmail: "poker015@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29958",
            userName: "poker016",
            userEmail: "poker016@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29959",
            userName: "poker017",
            userEmail: "poker017@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29960",
            userName: "poker018",
            userEmail: "poker018@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29961",
            userName: "poker019",
            userEmail: "poker019@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
          {
            userId: "29962",
            userName: "poker020",
            userEmail: "poker020@abc.net",
            userPass:
              "12-0D-1B-68-A0-99-F9-62-CD-69-87-AC-07-88-A2-EE-C3-71-E1-8E",
          },
        ]),
          this.updateListAccount());
      }
      updateListAccount() {
        if (this.lstAccount) {
          ((this.lstAccount.active = !0), (this.lstAccount.visible = !0));
          let t = this.lstAccount.cells.length;
          for (let e = 0; e < this.dataAccounts.length; e++) {
            if (e >= t) return;
            let i = this.lstAccount.getCell(e);
            if (i) {
              let t = i.getChildByName("txt");
              t &&
                ((t.text =
                  this.dataAccounts[e].userName +
                  "\n" +
                  this.dataAccounts[e].userId),
                (i.baseScale = new Laya.Vector2(i.scaleX, i.scaleY)),
                xe.getInstance().registerButtonEvent(i, null, 0.95),
                i.on(Laya.Event.MOUSE_DOWN, this, (t) => {
                  (Xe.getInstance().setLoginInfo(this.dataAccounts[e]),
                    this.startLoadingScene());
                }));
            }
          }
        }
      }
      startLoadingScene() {
        Laya.Scene.open((p || m ? se : "") + ae.LOADING_SCENE, !0, null, null);
      }
    };
  (c(
    [
      ss({
        type: Laya.List,
      }),
    ],
    ns.prototype,
    "lstAccount",
    2,
  ),
    (ns = c([is("to8fpld9Qe2gcTIMDh2eLg")], ns)));
  var os = class t {
    constructor() {
      ((this._currentId = 0), (this._listRelease = []));
    }
    static getInstance() {
      return (t.instance || (t.instance = new t()), t.instance);
    }
    setBulletContainer(t, e) {
      ((this._bulletContainer = t), (this._specialContainer = e));
    }
    create(t, e) {
      if (!this._bulletContainer) return null;
      let i;
      switch (t) {
        case 1:
          i = this.getBulletFromPool(t);
          break;
        case 2:
          i = this.getBulletSharkBiteFromPool(t);
          break;
        case 3:
          i = this.getBulletJellyfishFromPool(t);
      }
      return (
        i &&
          ((i.id = e || ++this._currentId),
          i.setOnRemoveCallback(this.removeBulletById.bind(this, i.id))),
        this._listRelease.push(i),
        i
      );
    }
    returnBulletToPool(t) {
      let e = xe.getInstance().formatString(q, t.type);
      t && (t.reset(), Laya.Pool.recover(e, t));
    }
    removeBulletById(t) {
      for (let e = 0; e < this._listRelease.length; e++) {
        let i = this._listRelease[e];
        i &&
          i.id === t &&
          (this._listRelease.splice(e, 1), this.returnBulletToPool(i));
      }
    }
    getBulletFromPool(t) {
      let e = xe.getInstance().formatString(q, t),
        i = Laya.Pool.getItemByClass(e, Vi);
      return (i && (i.init(t, this._bulletContainer), i.reset()), i);
    }
    getBulletSharkBiteFromPool(t) {
      let e = xe.getInstance().formatString(q, t),
        i = Laya.Pool.getItemByClass(e, qi);
      return (i && (i.init(t, this._specialContainer), i.reset()), i);
    }
    getBulletJellyfishFromPool(t) {
      let e = xe.getInstance().formatString(q, t),
        i = Laya.Pool.getItemByClass(e, ji);
      return (i && (i.init(t, this._specialContainer), i.reset()), i);
    }
    removeAll() {
      for (let t = 0; t < this._listRelease.length; t++) {
        let e = this._listRelease[t];
        e &&
          (e._sprite && (e._sprite.visible = !1),
          e.reset(),
          this._listRelease.splice(t, 1),
          this.returnBulletToPool(e),
          t--);
      }
    }
    removeAllNotMe() {
      for (let t = 0; t < this._listRelease.length; t++) {
        let e = this._listRelease[t];
        e &&
          e.userId !== Be.getInstance().playerMe.userId &&
          (e._sprite && (e._sprite.visible = !1),
          e.reset(),
          this._listRelease.splice(t, 1),
          this.returnBulletToPool(e),
          t--);
      }
    }
  };
  os.instance = null;
  var hs = os,
    ls = class t {
      constructor() {
        ((this.listTrace = []),
          (this.currentFishId = 0),
          (this.currTime = 0),
          (this.deltaTimeLostFocus = 0),
          (this._endTime = 0),
          (this._runningTime = 0),
          (this._startTime = 0),
          (this.currentFishId = 0),
          (this.currTime = 0),
          (this.listTrace = []));
      }
      static getInstance() {
        return (t.instance || (t.instance = new t()), t.instance);
      }
      stopContext() {
        (Laya.timer.clear(this, this.updateTrace),
          (this.listTrace = []),
          (this.currentFishId = 0),
          (this.deltaTimeLostFocus = 0),
          (this._startTime = 0));
      }
      isContextEnd() {
        return !1;
      }
      onEnterForeground() {
        const t = Date.now() - this._startTime;
        if (
          (Laya.timer.clear(this, this.updateTrace),
          this.handleOffsetListTrace(this.listTrace, t),
          this.listTrace.length > 0)
        ) {
          let e = this.listTrace[0].releaseTime - t;
          (e < 0 && (e = 0),
            e >= 0 && Laya.timer.once(e, this, this.updateTrace));
        }
      }
      processReleaseFishByContext(t) {
        let e = t.runningTime;
        this.startContextBySubId(t.contextId, e);
      }
      startContextBySubId(t, e) {
        const i = Je.getInstance().getSubDataById(t);
        if (!i) return;
        (Laya.timer.clear(this, this.updateTrace),
          (this.currentFishId = 0),
          (this.listTrace = []),
          (this._runningTime = e),
          (this._startTime = Date.now() - e));
        const s = this.generateListTrace(i);
        if (
          (this.handleOffsetListTrace(s, e),
          (this.listTrace = s),
          this.listTrace.length > 0)
        ) {
          let t = this.listTrace[0].releaseTime - this._runningTime;
          (t < 0 && (t = 0),
            t >= 0 && Laya.timer.once(t, this, this.updateTrace));
        }
      }
      generateListTrace(t) {
        const e = [],
          i = Je.getInstance().getGroupById(t.random[0].id);
        if (i && i.fish.length > 0)
          for (let t = 0; t < i.fish.length; t++)
            (i.fish[t].delay && i.fish[t].delay > 0
              ? (i.fish[t].releaseTime = 1e3 * Number(i.fish[t].delay))
              : (i.fish[t].releaseTime = 0),
              (i.fish[t].fishId = ++this.currentFishId),
              (i.fish[t].offsetTime = 0),
              e.push(i.fish[t]));
        return (e.sort((t, e) => t.releaseTime - e.releaseTime), e);
      }
      handleOffsetListTrace(t, e) {
        let i = 0;
        for (let s = 0; s < t.length; ++s) {
          const a =
            Number(Je.getInstance().getPathFishById(t[s].path).duration) || 0;
          if (t[s].releaseTime + 1e3 * a > e) {
            i = s;
            break;
          }
        }
        (i > 0 && t.splice(0, i), (i = 0));
        for (let s = 0; s < t.length; ++s) {
          if (!(t[s].releaseTime < e)) {
            i = s;
            break;
          }
          t[s].offsetTime = e - t[s].releaseTime;
        }
        for (let e = 0; e < i; ++e) {
          const i = t[e];
          this.releaseFish(i);
        }
        i > 0 && t.splice(0, i);
      }
      updateTrace() {
        if (this.listTrace.length <= 0) return;
        const t = this.listTrace.shift(),
          e = t.releaseTime;
        if ((this.releaseFish(t), this.listTrace.length > 0)) {
          let t = this.listTrace[0].releaseTime - e;
          (t < 0 && (t = 0),
            t >= 0 && Laya.timer.once(t, this, this.updateTrace));
        }
      }
      releaseFish(t) {
        null != t &&
          Yi.getInstance().spawn(
            this.getMappedFishKind(t.fish) - I,
            t.fishId,
            t.path,
            t.duration,
            t.offsetTime,
          );
      }
      getMappedFishKind(t) {
        let e = t;
        switch (t) {
          case 10:
            e = 8;
            break;
          case 11:
            e = 9;
            break;
          case 12:
            e = 10;
            break;
          case 13:
            e = 11;
            break;
          case 14:
            e = 12;
            break;
          case 15:
            e = 13;
            break;
          case 16:
            e = 17;
            break;
          case 17:
            e = 18;
            break;
          case 18:
            e = 19;
            break;
          case 19:
            e = 20;
            break;
          case 20:
            e = 21;
            break;
          case 21:
            e = 22;
            break;
          case 22:
            e = 14;
            break;
          case 23:
            e = 15;
            break;
          case 24:
            e = 16;
        }
        return e;
      }
    };
  ls.instance = null;
  var rs = ls,
    cs = class {
      constructor(t) {
        t && (this.pnlAim = t);
      }
      setPanelAim(t) {
        this.pnlAim = t;
      }
      setPnlAimArrow(t) {
        this.pnlAimArrow = t;
      }
      setImgAimCircle(t) {
        this.imgAimCircle = t;
      }
      showEffectPnlAim(t, e) {
        (this.pnlAim.pos(t - 440, e - 620),
          (this.pnlAim.visible = !0),
          Laya.Tween.to(
            this.pnlAimArrow,
            {
              scaleX: 1,
              scaleY: 1,
              alpha: 1,
            },
            400,
            Laya.Ease.sineInOut,
          ),
          Laya.Tween.to(
            this.imgAimCircle,
            {
              scaleX: 1,
              scaleY: 1,
            },
            400,
            Laya.Ease.sineInOut,
          ));
      }
      idlePnlAim() {
        Laya.timer.frameLoop(1, this, this.rotatePnlAim);
      }
      cancelEffectPnlAim() {
        ((this.pnlAim.visible = !1),
          (this.pnlAim.rotation = 0),
          (this.pnlAimArrow.scaleX = 3.5),
          (this.pnlAimArrow.scaleY = 3.5),
          (this.pnlAimArrow.alpha = 0),
          (this.imgAimCircle.scaleX = 1.75),
          (this.imgAimCircle.scaleY = 1.75),
          Laya.timer.clear(this, this.rotatePnlAim));
      }
      rotatePnlAim() {
        this.pnlAim.rotation -= 6;
      }
    },
    _s = class t {
      constructor() {
        ((this._id = -1),
          (this._isInit = !1),
          (this.isPlayingEffect = !1),
          (this.completedCallback = null),
          (this.listCoins = []),
          (this.listEffectAnimator = []),
          (this.listEffectAnimation = []),
          (this.numCoinFinishFly = 0),
          (this.coinBaseScale = {
            x: 1,
            y: 1,
          }));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      init(t, e) {
        if (!this.effectPrize) {
          ((this.is7X = t),
            t
              ? ((this.animationClipName = "effect_prize_7x_start"),
                (this.effectPrize = Laya.loader
                  .getRes(he.BIG_CATCH_EFFECT_PRIZE_7X)
                  .create()))
              : ((this.animationClipName = "effect_prize_start"),
                (this.effectPrize = Laya.loader
                  .getRes(he.BIG_CATCH_EFFECT_PRIZE)
                  .create())),
            (this.effectPrizeAnimator = this.effectPrize.getComponent(
              Laya.Animator2D,
            )),
            (this.effectPrize.anchorX = 0.5),
            (this.effectPrize.anchorY = 0.5),
            (this.effectPrize.visible = !1),
            (this.effectPrize.active = !1));
          for (let t = 0; t < 8; t++) {
            const e = this.effectPrize.getChildByName("big_coin_0" + t);
            e && this.listCoins.push(e);
          }
          ((this.coinBaseScale.x = this.listCoins[0].scaleX),
            (this.coinBaseScale.y = this.listCoins[0].scaleY));
          let e,
            i,
            s = this.effectPrize.getChildByName("effect");
          for (let t = 0; t < s.numChildren; t++)
            ((e = s.getChildAt(t)),
              e &&
                ((i = e.getComponent(Laya.Animator2D)),
                (i.speed = 1.5),
                this.listEffectAnimator.push(i),
                this.listEffectAnimation[t] ||
                  (this.listEffectAnimation[t] = []),
                this.listEffectAnimation[t].push(
                  e.getChildByName("small_coin").getChildByName("boss_coin_01"),
                ),
                this.listEffectAnimation[t].push(
                  e.getChildByName("small_coin").getChildByName("boss_coin_02"),
                )));
          ((this.prizeWord = this.effectPrize
            .getChildByName("m_fish_base_word")
            .getChildByName("times_reward_word")),
            (this.prizeWordLight = this.prizeWord.getChildByName(
              "times_reward_word_light",
            )));
          let a = this.effectPrize.getChildByName("particlesystem_shinning");
          this.particleScript = a.getComponent(Laya.Script);
        }
        e &&
          (e.addChild(this.effectPrize),
          (this._container = e),
          (this._isInit = !0));
      }
      isPlaying() {
        return this.isPlayingEffect;
      }
      reset() {
        if (this.effectPrize) {
          let e;
          switch (
            ((this.effectPrize.zOrder = t.DEFAULT_ZORDER),
            (this.effectPrize.visible = !0),
            (this.effectPrize.active = !0),
            this.isMe
              ? (this.effectPrize.alpha = t.IS_ME_ALPHA)
              : (this.effectPrize.alpha = t.NOT_ME_ALPHA),
            this.listCoins.forEach((t) => {
              ((t.alpha = 1),
                (t.scaleX = this.coinBaseScale.x),
                (t.scaleY = this.coinBaseScale.y));
            }),
            this.prizeType)
          ) {
            case 0:
              e = oe.TXT_CATCH_PRIZE_3X;
              break;
            case 1:
              e = oe.TXT_CATCH_PRIZE_5X;
              break;
            case 2:
              e = oe.TXT_CATCH_PRIZE_7X;
          }
          e &&
            (Ye.getInstance().localizeImageText(this.prizeWord, e),
            Ye.getInstance().localizeImageText(this.prizeWordLight, e));
        }
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          this.effectPrizeAnimator.stop(),
          this.particleScript.stopSystem(),
          (this.isPlayingEffect = !1),
          (this.completedCallback = null),
          (this.effectPrize.active = !1),
          (this.effectPrize.visible = !1));
      }
      actionFly() {
        ((this.numCoinFinishFly = 0),
          this.listEffectAnimator.forEach((t, e) => {
            (t.gotoAndStopByFrame("effect_prize_boss_coin", 0, 0),
              this.listEffectAnimation[e].forEach((t) => {
                t.stop();
              }));
          }));
        for (let t = 0; t < this.listCoins.length; t++) {
          const e = this.listCoins[t],
            i = new Laya.Point(e.x, e.y),
            s = 3e-4 * me.Math.pDistance(i, this.endPoint),
            a = me.Math.pSub(i, this.endPoint),
            n = new Laya.Vector2(a.x / 18, a.y / 2.65);
          let o = [
              i,
              me.Math.pSub(i, n),
              me.Math.pMult(me.Math.pAdd(i, this.endPoint), 0.5),
              me.Math.pAdd(this.endPoint, n),
              this.endPoint,
            ],
            h = 60 * t;
          (Laya.timer.once(h, this, () => {
            (bi.create(e, s, o, 0.1).start(),
              Laya.Tween.to(
                e,
                {
                  scaleX: 0.3 * this.coinBaseScale.x,
                  scaleY: 0.3 * this.coinBaseScale.y,
                },
                1e3 * s,
                Laya.Ease.sineIn,
              ));
          }),
            Laya.timer.once(1e3 * s + h, this, () => {
              ((o = null), (e.alpha = 0), this.finishFly(e));
            }));
        }
        this.isMe &&
          Laya.timer.once(300, this, () => {
            ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_PRIZE_ADD_COIN);
          });
      }
      finishFly(t) {
        (this.numCoinFinishFly < this.listCoins.length &&
          (this.numCoinFinishFly++,
          t.stop(),
          Laya.timer.clearAll(t),
          Laya.Tween.clearAll(t)),
          this.numCoinFinishFly == this.listCoins.length &&
            ("function" == typeof this.completedCallback &&
              this.completedCallback(),
            this.clear()));
      }
      play(e, i, s, a, n) {
        if (this.isPlayingEffect) return;
        ((this.isPlayingEffect = !0),
          (this.startPoint = e),
          (this.completedCallback = n),
          (this.isMe = s),
          (this.prizeType = a),
          this.reset());
        let o = this.is7X ? 230 : 180;
        ((this.startPoint.y = me.Math.clampf(this.startPoint.y, o, L - o)),
          this._container.globalToLocal(this.startPoint),
          this.effectPrize.pos(this.startPoint.x, this.startPoint.y),
          (this.endPoint = this.effectPrize.globalToLocal(i)),
          this.effectPrizeAnimator.gotoAndStopByFrame(
            this.animationClipName,
            0,
            0,
          ),
          this.effectPrizeAnimator.play(this.animationClipName),
          this.particleScript.resetSystem(),
          this.listEffectAnimator.forEach((t, e) => {
            (t.play("effect_prize_boss_coin"),
              this.listEffectAnimation[e].forEach((t) => {
                t.play(0, !0);
              }));
          }),
          this.listCoins.forEach((t) => {
            ((t.interval = 60),
              t.play(),
              t.timerOnce(14 * t.interval, t, () => {
                (t.gotoAndStop(4),
                  Laya.timer.once(100, t, () => {
                    ((t.interval = 40),
                      t.play(),
                      t.timerOnce(24 * t.interval, t, () => {
                        t.gotoAndStop(4);
                      }));
                  }));
              }));
          }),
          Laya.timer.once(t.DELAY_FLY, this, this.actionFly, [], !1));
      }
    };
  ((_s.NOT_ME_ALPHA = A),
    (_s.IS_ME_ALPHA = P),
    (_s.DEFAULT_ZORDER = 2),
    (_s.DELAY_FLY = 2700));
  var ps = _s,
    gs = class t {
      constructor() {
        ((this._id = -1),
          (this._isInit = !1),
          (this.completedCallback = null),
          (this.listCoins = []));
      }
      get id() {
        return this._id;
      }
      set id(t) {
        this._id = t;
      }
      get isInit() {
        return this._isInit;
      }
      init(t) {
        if (!this.effectCoin) {
          ((this.effectCoin = Laya.loader
            .getRes(he.BIG_CATCH_EFFECT_COIN)
            .create()),
            (this.effectCoinAnimator = this.effectCoin.getComponent(
              Laya.Animator2D,
            )),
            (this.effectCoin.anchorX = 0.5),
            (this.effectCoin.anchorY = 0.5),
            (this.effectCoin.visible = !1),
            (this.effectCoin.active = !1),
            (this.bigCoin = this.effectCoin.getChildByName("big_coin")),
            (this.pnlCoin = this.effectCoin.getChildByName("pnl_coin")));
          for (let t = 0; t < this.pnlCoin.numChildren; t++) {
            const e = this.pnlCoin.getChildAt(t);
            this.listCoins.push(e);
          }
        }
        t &&
          (t.addChild(this.effectCoin),
          (this._container = t),
          (this._isInit = !0));
      }
      reset() {
        this.effectCoin &&
          ((this.effectCoin.zOrder = t.DEFAULT_ZORDER),
          (this.effectCoin.visible = !0),
          (this.effectCoin.active = !0),
          this.isMe
            ? (this.effectCoin.alpha = t.IS_ME_ALPHA)
            : (this.effectCoin.alpha = t.NOT_ME_ALPHA));
      }
      clear() {
        (this.bigCoin.stop(),
          this.listCoins.forEach((t) => t.stop()),
          Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          this.effectCoinAnimator.stop(),
          this.completedCallback && this.completedCallback(),
          (this.completedCallback = null),
          (this.effectCoin.active = !1),
          (this.effectCoin.visible = !1));
      }
      play(e, i, s, a, n, o) {
        ((this.startPoint = e),
          (this.completedCallback = n),
          (this.isMe = a),
          this.reset(),
          this._container.globalToLocal(e),
          this.effectCoin.pos(this.startPoint.x, this.startPoint.y),
          (this.bigCoinEndPoint = this._container.globalToLocal(s, !0)),
          this.effectCoinAnimator.gotoAndStopByFrame("effect_coin", 0, 0),
          this.effectCoinAnimator.play("effect_coin"));
        const h = this.getScaleByKind(i, o);
        (this.effectCoin.scale(h, h),
          this.bigCoin.scale(1.5, 1.5),
          this.bigCoin.pos(0, 0),
          this.bigCoin.play(),
          this.listCoins.forEach((t) => t.play()),
          Laya.timer.once(t.TIME_DELAY_MOVE_COIN, this, () => {
            (me.Tween.union(
              me.Tween.tweenTo(
                this.effectCoin,
                {
                  x: this.bigCoinEndPoint.x,
                  y: this.bigCoinEndPoint.y,
                },
                300,
                Laya.Ease.cubicOut,
              ),
              me.Tween.callFunc(this, () => {
                this.bigCoin.gotoAndStop(4);
              }),
              me.Tween.tweenTo(
                this.bigCoin,
                {
                  scaleX: 1.8,
                  scaleY: 1.8,
                },
                52,
              ),
              me.Tween.tweenTo(
                this.bigCoin,
                {
                  scaleX: 1.9,
                  scaleY: 1.9,
                },
                78,
              ),
              me.Tween.tweenTo(
                this.bigCoin,
                {
                  scaleX: 0,
                  scaleY: 0,
                },
                100,
              ),
            ),
              Laya.timer.once(800, this, this.clear));
          }));
      }
      getScaleByKind(t, e = !1) {
        return t <= 17 && !e ? 0.7 : 1.2;
      }
    };
  ((gs.NOT_ME_ALPHA = A),
    (gs.IS_ME_ALPHA = P),
    (gs.DEFAULT_ZORDER = 2),
    (gs.TIME_DELAY_MOVE_COIN = 700));
  var ds = gs,
    us = class {
      constructor() {
        ((this._node = Laya.loader.getRes(he.SPECIAL_COIN).create()),
          (this._animator = this._node.getComponent(Laya.Animator2D)),
          (this._node.visible = !1),
          (this._node.active = !1));
      }
      setContainer(t) {
        this._container || t.addChild(this._node);
      }
      play(t, e) {
        (Laya.timer.once(150, this, () => {
          (this._node.pos(t.x, t.y),
            (this._animator.speed = 1),
            this._animator.gotoAndStopByFrame("default", 0, 0),
            this._animator.play("default"),
            (this._node.visible = !0),
            (this._node.active = !0));
        }),
          Laya.timer.once(1650, this, () => {
            (this.clear(), e && e());
          }));
      }
      clear() {
        (Laya.timer.clearAll(this),
          this._animator.stop(),
          (this._node.active = !1),
          (this._node.visible = !1));
      }
    },
    ys = class t {
      constructor() {
        ((this._smallCoinQueue = [[], [], [], []]),
          (this._isSmallCoinWaiting = [!1, !1, !1, !1]),
          (this._timeDelaySmallCoin = 300),
          (this._listEffectPrize = new Map()),
          (this._listEffectPrize7X = new Map()),
          (this._listEffectCoinBig = new Map()),
          (this._listSpecialCoin = new Map()));
      }
      setContainer(t, e) {
        ((this._container = t), (this._container2 = e));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      playGetCoin(e, i, s, a = !0, n = !1) {
        if (s < 0 || s > 4) return;
        const o = t.POS[s],
          h = o.length,
          l = [];
        for (let t = 0; t < h; ++t) {
          let e = Ni.getInstance().getCoin();
          (this._container.addChild(e), (l[t] = e));
        }
        const r = this._container.globalToLocal(e),
          c = this._container.globalToLocal(i),
          _ = 6e-4 * me.Math.pDistance(i, e);
        a &&
          (2 == s
            ? ai.getInstance().playSFXOnce(pe.FISH_NORMAL_COIN_2)
            : ai.getInstance().playSFXOnce(pe.FISH_NORMAL_COIN_1));
        for (let t = 0; t < h; ++t) {
          let e = l[t],
            i = P;
          (n && !a && (i = A),
            (e.alpha = i),
            (e.visible = !0),
            (e.active = !0),
            e.play());
          const s = o[t],
            h = me.Math.pAdd(r, s),
            p = me.Math.pSub(h, c),
            g = new Laya.Vector2(p.x / 18, p.y / 2.65);
          let d = [
            h,
            me.Math.pSub(h, g),
            me.Math.pMult(me.Math.pAdd(h, c), 0.5),
            me.Math.pAdd(c, g),
            c,
          ];
          const u = [120, 60, 30],
            y = -50,
            m = y / 2,
            f = m / 5;
          (e.pos(h.x, h.y),
            me.Tween.union(
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y + y,
                },
                u[0],
                Laya.Ease.sineOut,
              ),
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y,
                },
                u[0],
                Laya.Ease.sineOut,
              ),
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y + m,
                },
                u[1],
                Laya.Ease.sineOut,
              ),
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y,
                },
                u[1],
                Laya.Ease.sineOut,
              ),
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y + f,
                },
                u[2],
                Laya.Ease.linearIn,
              ),
              me.Tween.tweenTo(
                e,
                {
                  x: h.x,
                  y: h.y,
                },
                u[2],
                Laya.Ease.linearIn,
              ),
            ),
            Laya.timer.once(500 + 40 * t, this, () => {
              (this._container2.addChild(e),
                bi.create(e, _, d, 0.1).start(),
                Laya.Tween.to(
                  e,
                  {
                    scaleX: 0.6,
                    scaleY: 0.6,
                  },
                  1e3 * _,
                  Laya.Ease.sineIn,
                ),
                Laya.timer.once(1e3 * _, this, () => {
                  ((d = null),
                    Ni.getInstance().recoverCoin(e),
                    a &&
                      l[0] &&
                      ai.getInstance().playSFXOnce(pe.FISH_NORMAL_ADD_COIN));
                }));
            }));
        }
      }
      playCoinNum(t, e, i, s) {
        const a = this._container2.globalToLocal(t);
        let n = Ni.getInstance().getCoinNum();
        if (null === n) return;
        (this._container2.addChild(n),
          (n.alpha = 0),
          (n.visible = !0),
          (n.active = !0),
          (n.text = "+ " + i),
          n.pos(a.x - n.textWidth / 2, a.y + 10),
          n.scale(1, 1),
          (n.zOrder = 1));
        let o = e ? P : A;
        (Laya.Tween.to(
          n,
          {
            alpha: o,
          },
          50,
          null,
          null,
          400,
        ),
          Laya.Tween.to(
            n,
            {
              y: n.y - 65,
            },
            300,
            null,
            null,
            400,
          ),
          Laya.timer.once(1050, this, () => {
            (Laya.Tween.to(
              n,
              {
                alpha: 0,
              },
              400,
            ),
              Laya.timer.once(400, n, () => {
                (Ni.getInstance().recoverCoinNum(n), s && s());
              }));
          }));
      }
      playSmallCoinNum(t, e, i, s) {
        const a = e.seatId;
        if (this._isSmallCoinWaiting[a])
          return void this._smallCoinQueue[a].push(
            this.playSmallCoinNum.bind(this, t, e, i, s),
          );
        this._isSmallCoinWaiting[a] = !0;
        const n = this._container2.globalToLocal(t);
        let o = Ni.getInstance().getCoinNum();
        if (null === o) return;
        (this._container2.addChild(o),
          (o.alpha = 0),
          (o.visible = !0),
          (o.active = !0),
          (o.text = "+ " + i),
          o.pos(n.x, n.y),
          o.scale(0.4, 0.4),
          (o.zOrder = 1));
        let h = n.y < L / 2 ? 70 : -70;
        (Laya.Tween.to(
          o,
          {
            alpha: P,
          },
          300,
          null,
          null,
          300,
        ),
          Laya.Tween.to(
            o,
            {
              y: o.y + h,
            },
            1e3,
            null,
            null,
            300,
          ),
          Laya.timer.once(1e3, this, () => {
            (Laya.Tween.to(
              o,
              {
                alpha: 0,
              },
              300,
            ),
              Laya.timer.once(300, o, () => {
                (Ni.getInstance().recoverCoinNum(o), s && s());
              }));
          }),
          Laya.timer.once(this._timeDelaySmallCoin, this, () => {
            this._isSmallCoinWaiting[a] = !1;
            let t = this._smallCoinQueue[a].shift();
            t && t();
          }));
      }
      playCoinRefunded(t, e, i, s) {
        const a = e.seatId;
        if (this._isSmallCoinWaiting[a])
          return void this._smallCoinQueue[a].push(
            this.playCoinRefunded.bind(this, t, e, i, s),
          );
        this._isSmallCoinWaiting[a] = !0;
        const n = this._container2.globalToLocal(t);
        let o = Ni.getInstance().getCoinRefunded();
        if (null === o) return;
        let h = o.getChildAt(0);
        (this._container2.addChild(o),
          (o.alpha = 0),
          (o.visible = !0),
          (o.active = !0),
          (h.text = i),
          (h.width = h.textWidth),
          h.width > 230 ? o.scale(0.37, 0.37) : o.scale(0.4, 0.4));
        let l = h.x - o.width - 10;
        (o.pos(n.x - 0.5 * (l + h.width) * o.scaleX, n.y), (o.zOrder = 1));
        let r = n.y < L / 2 ? 70 : -70;
        (Laya.Tween.to(
          o,
          {
            alpha: P,
          },
          300,
          null,
          null,
          300,
        ),
          Laya.Tween.to(
            o,
            {
              y: o.y + r,
            },
            1e3,
            null,
            null,
            300,
          ),
          Laya.timer.once(1e3, this, () => {
            (Laya.Tween.to(
              o,
              {
                alpha: 0,
              },
              300,
            ),
              Laya.timer.once(300, o, () => {
                (Ni.getInstance().recoverCoinRefunded(o), s && s());
              }));
          }),
          Laya.timer.once(this._timeDelaySmallCoin, this, () => {
            this._isSmallCoinWaiting[a] = !1;
            let t = this._smallCoinQueue[a].shift();
            t && t();
          }));
      }
      playCatchPrize(t, e, i, s, a, n) {
        const o = t
          ? this.getEffectPrize7XFromPool()
          : this.getEffectPrizeFromPool();
        if (
          (o.init(t, this._container2),
          o.play(e, i, s, a, () => {
            (t
              ? this.pushEffectPrize7XToPool(o)
              : this.pushEffectPrizeToPool(o),
              n && n());
          }),
          s)
        )
          switch (a) {
            case 0:
              ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_PRIZE_3X_COIN);
              break;
            case 1:
              ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_PRIZE_5X_COIN);
              break;
            case 2:
              ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_PRIZE_7X_COIN);
          }
      }
      playCatchCoin(t, e, i, s, a, n) {
        const o = this.getEffectCoinFromPool();
        (o.init(this._container),
          o.play(
            t,
            e,
            s,
            i,
            () => {
              (this.pushEffectCoinToPool(o), a && a());
            },
            n,
          ),
          i && ai.getInstance().playSFXOnce(pe.FISH_SPECIAL_COIN));
      }
      getEffectPrizeFromPool() {
        let t = Laya.Pool.getItemByClass(at, ps);
        return (this._listEffectPrize.set(t, 1), t);
      }
      pushEffectPrizeToPool(t) {
        (Laya.Pool.recover(at, t), this._listEffectPrize.delete(t));
      }
      getEffectPrize7XFromPool() {
        let t = Laya.Pool.getItemByClass(nt, ps);
        return (this._listEffectPrize7X.set(t, 1), t);
      }
      pushEffectPrize7XToPool(t) {
        (Laya.Pool.recover(nt, t), this._listEffectPrize7X.delete(t));
      }
      getEffectCoinFromPool() {
        let t = Laya.Pool.getItemByClass(st, ds);
        return (this._listEffectCoinBig.set(t, 1), t);
      }
      pushEffectCoinToPool(t) {
        (Laya.Pool.recover(st, t), this._listEffectCoinBig.delete(t));
      }
      playSpecialCoin(t) {
        const e = Laya.Pool.getItemByClass(Et, us);
        (e.setContainer(Fe.getInstance().getLayerEffect()),
          this._listSpecialCoin.set(e, 1),
          e.play(t, () => {
            (Laya.Pool.recover(Et, e), this._listSpecialCoin.delete(e));
          }));
      }
      showRandomCoinInScene(t, e, i, s, a) {
        Laya.timer.once(i, this, () => {
          const i = Math.floor(S / 2),
            n = Math.floor(L / 2);
          a = a || [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4];
          for (let o = 0; o < e; ++o) {
            const e = new Laya.Point(
                i + _i.iRand(100 - i, i - 100),
                n + _i.iRand(80 - n, n - 80),
              ),
              o = a[_i.iRand(0, a.length - 1)],
              h = new Laya.Point(s.x, s.y);
            this.playGetCoin(e, h, o, t);
          }
          Laya.timer.once(600, this, () => {});
        });
      }
      clearAll() {
        (this._listEffectPrize.forEach((t, e) => {
          (e.clear(), this.pushEffectPrizeToPool(e));
        }),
          this._listEffectPrize7X.forEach((t, e) => {
            (e.clear(), this.pushEffectPrize7XToPool(e));
          }),
          this._listEffectCoinBig.forEach((t, e) => {
            (e.clear(), this.pushEffectCoinToPool(e));
          }),
          this._listSpecialCoin.forEach((t, e) => {
            (e.clear(),
              this._listSpecialCoin.delete(e),
              Laya.Pool.recover(Et, e));
          }));
      }
    };
  ys.POS = [
    [
      {
        x: 0,
        y: 0,
      },
    ],
    [
      {
        x: 0,
        y: 0,
      },
    ],
    [
      {
        x: 0,
        y: -32,
      },
      {
        x: -32,
        y: 0,
      },
      {
        x: 32,
        y: 0,
      },
      {
        x: 0,
        y: 32,
      },
    ],
    [
      {
        x: 0,
        y: -80,
      },
      {
        x: -44,
        y: -44,
      },
      {
        x: 0,
        y: -32,
      },
      {
        x: 44,
        y: -44,
      },
      {
        x: -80,
        y: 0,
      },
      {
        x: -32,
        y: 0,
      },
      {
        x: 32,
        y: 0,
      },
      {
        x: 80,
        y: 0,
      },
      {
        x: -44,
        y: 44,
      },
      {
        x: 0,
        y: 32,
      },
      {
        x: 44,
        y: 44,
      },
      {
        x: 0,
        y: 80,
      },
    ],
    [
      {
        x: 0,
        y: 128,
      },
      {
        x: -44,
        y: 88,
      },
      {
        x: 0,
        y: 80,
      },
      {
        x: 44,
        y: 88,
      },
      {
        x: -88,
        y: 44,
      },
      {
        x: -44,
        y: 44,
      },
      {
        x: 0,
        y: 32,
      },
      {
        x: 44,
        y: 44,
      },
      {
        x: 88,
        y: 44,
      },
      {
        x: -128,
        y: 0,
      },
      {
        x: -80,
        y: 0,
      },
      {
        x: -32,
        y: 0,
      },
      {
        x: 32,
        y: 0,
      },
      {
        x: 80,
        y: 0,
      },
      {
        x: 128,
        y: 0,
      },
      {
        x: -88,
        y: -44,
      },
      {
        x: -44,
        y: -44,
      },
      {
        x: 0,
        y: -32,
      },
      {
        x: 44,
        y: -44,
      },
      {
        x: 88,
        y: -44,
      },
      {
        x: -44,
        y: -88,
      },
      {
        x: 0,
        y: -80,
      },
      {
        x: 44,
        y: -88,
      },
      {
        x: 0,
        y: -128,
      },
    ],
  ];
  var ms = ys,
    fs = class t {
      constructor() {}
      setContainer(t) {
        this._container = t;
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      play(t, e, i, s, a, n) {
        const o = Ni.getInstance().getEffectCatchBig();
        return (
          o.init(this._container),
          o.play(t, e, i, s, a, () => {
            (Ni.getInstance().recoverEffectCatchBig(o), n && n());
          }),
          o
        );
      }
    },
    bs = class t {
      constructor() {
        ((this._lastIndex = [0, 0, 0, 0]),
          (this._runningFx = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ]));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      playCatchEffect(e, i, s, a = null, n, o) {
        const h = e.isMe,
          l = i.getKind(),
          r = zt[l].catchEffectType,
          c = a,
          _ = 2 == c;
        let p = null;
        {
          const i = t.BIG_CATCH_POINT_OFFSET[0];
          let s = new Laya.Point(i.x, i.y);
          p = e.getRewardWorldPosition(s);
        }
        const g = e.getWinCoinWorldPoint(),
          d = e.getIconCoinWorldPoint(),
          u = xe.getInstance().formatNumber(s),
          y = () => {
            (ms.getInstance().playSmallCoinNum(g, e, u), o && o());
          };
        switch (r) {
          case 0:
            (ms.getInstance().playGetCoin(i.getWorldPosition(), d, 0, h, !0),
              ms.getInstance().playCoinNum(i.getWorldPosition(), h, u, y));
            break;
          case 1:
            (ms.getInstance().playGetCoin(i.getWorldPosition(), d, 2, h, !0),
              ms.getInstance().playCoinNum(i.getWorldPosition(), h, u, y));
            break;
          case 2:
            null !== a
              ? ms
                  .getInstance()
                  .playCatchPrize(_, i.getWorldPosition(), d, h, c, () => {
                    this.playCatchBig(e, l, s, c, o);
                  })
              : ms
                  .getInstance()
                  .playCatchCoin(i.getWorldPosition(), l, h, p, () => {
                    this.playCatchBig(e, l, s, null, o);
                  });
        }
      }
      playCatchSpecial(t, e, i, s, a) {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.HARPOON_REWARD);
          const n = Ni.getInstance().getHarpoonReward();
          if (!n) return;
          const o = Fe.getInstance().getLayerEffect();
          o.addChild(n);
          let h = null,
            l = null;
          (t.isMe
            ? ((h = o.globalToLocal(new Laya.Point(640, 360))),
              (l = o.globalToLocal(
                t.getRewardWorldPosition(new Laya.Point(0, -200)),
              )))
            : (h = o.globalToLocal(
                t.getRewardWorldPosition(new Laya.Point(0, -170)),
              )),
            n.play(t.isMe, e.getKind(), h, l, i, () => {
              (Ni.getInstance().recoverHarpoonReward(n),
                this.playCatchBig(t, e.getKind(), s, null, () => {
                  a && a();
                }));
            }));
        });
      }
      getRewardPosition(t) {
        const e = this._runningFx[t];
        return e[0]
          ? e[1]
            ? e[2]
              ? ++this._lastIndex[t] % 3
              : ((this._lastIndex[t] = 2), 2)
            : ((this._lastIndex[t] = 1), 1)
          : ((this._lastIndex[t] = 0), 0);
      }
      playCoinImmortalFish(e, i) {
        let s = e.getRewardWorldPosition(t.BIG_CATCH_POINT_OFFSET[0]);
        ms.getInstance().playCatchCoin(
          i.getWorldPosition(),
          i.getKind(),
          e.isMe,
          s,
          null,
          !0,
        );
      }
      playCoinCommonFish(t, e, i) {
        const s = t.isMe,
          a = zt[e.getKind()].catchEffectType,
          n = xe.getInstance().formatNumber(i),
          o = t.getIconCoinWorldPoint();
        switch (a) {
          case 0:
            (ms.getInstance().playGetCoin(e.getWorldPosition(), o, 0, s, !0),
              ms.getInstance().playCoinNum(e.getWorldPosition(), s, n));
            break;
          case 1:
            (ms.getInstance().playGetCoin(e.getWorldPosition(), o, 2, s, !0),
              ms.getInstance().playCoinNum(e.getWorldPosition(), s, n));
        }
      }
      playCatchEffectLightningBall(e, i, s) {
        let a = this.getRewardPosition(e.seatId);
        const n = t.BIG_CATCH_POINT_OFFSET[a];
        let o = new Laya.Point(n.x, n.y);
        (e.isMe || me.Math.pMultIn(o, 0.7),
          this.playCatchBig(e, 31, i, null, s));
      }
      playCatchBig(e, i, s, a, n) {
        let o = this.getRewardPosition(e.seatId);
        this._runningFx[e.seatId][o] &&
          (this._runningFx[e.seatId][o].clear(),
          (this._runningFx[e.seatId][o] = null));
        const h = t.BIG_CATCH_POINT_OFFSET[o],
          l = new Laya.Point(h.x, h.y);
        e.isMe || me.Math.pMultIn(l, 0.7);
        const r = e.getRewardWorldPosition(l),
          c = fs.getInstance().play(r, e.isMe, i, s, a, () => {
            (this._runningFx[e.seatId][o] == c &&
              (this._runningFx[e.seatId][o] = null),
              n && n());
          });
        this._runningFx[e.seatId][o] = c;
        const _ = e.getWinCoinWorldPoint(),
          p = xe.getInstance().formatNumber(s);
        ms.getInstance().playSmallCoinNum(_, e, p);
      }
    };
  bs.BIG_CATCH_POINT_OFFSET = [
    new Laya.Point(0, -220),
    new Laya.Point(-120, -160),
    new Laya.Point(120, -160),
  ];
  var Ss = bs,
    Ls = class {
      constructor(t, e) {
        ((this._countValue = 0),
          (this._lastTime = 0),
          (this._touchBombNavigation = 1),
          (this._root = t),
          (this._root.active = !1));
        const i = this._root.getChildByName("node");
        ((this._counting = i.getChildByName("counting")),
          (this._phoenixContainer = this._root.getChildByName("phoenix")),
          (this._spinePhoenixReward = new Laya.SpineSkeleton()),
          (this._spinePhoenixReward.templet = Laya.loader.getRes(
            le.SPINE_PHOENIX_FRONT_JSON,
          )),
          this._phoenixContainer.addChild(this._spinePhoenixReward),
          (this._effectPhoenixRewardAnimator = this._counting.getComponent(
            Laya.Animator2D,
          )),
          (this._counter = this._counting.getChildByName("counter")),
          (this._count = this._counter.getChildByName("count")),
          (this._num = this._count.getChildByName("num")),
          (this._numBaseScale = this._num.scaleX),
          (this._numBaseY = this._num.y),
          (this._touchPnl = this._counting.getChildByName("touch_pnl")),
          this._touchPnl.on(Laya.Event.CLICK, (t) => {
            this.onTouch(t.stageX, t.stageY);
          }),
          (this._bombingNode = this._counting.getChildByName("bombing_node")),
          (this._tapTip = this._counting.getChildByName("tap_tip")),
          (this._phoenixGuide = this._tapTip.getChildByName("phoenix_guide")),
          (this._phoenixGuideAnimator = this._phoenixGuide.getComponent(
            Laya.Animator2D,
          )),
          (this._fingerContainer = this._tapTip.getChildByName("finger")),
          (this._particleTap =
            this._fingerContainer.getChildByName("particlesystem")),
          (this._particleTapScript = this._particleTap.getComponent(
            Laya.Script,
          )),
          (this._finger = this._fingerContainer.getChildByName("finger")),
          (this._fingerAnimator = this._finger.getComponent(Laya.Animator2D)),
          (this._fireEffect = this._counting.getChildByName("fire_ef_node")),
          (this._fireEffectAnimator = this._fireEffect.getComponent(
            Laya.Animator2D,
          )),
          (this._flameFrame = e));
        let s = this._flameFrame
          .getChildByName("layer_1")
          .getChildByName("flame_l")
          .getChildByName("flame_b(1)");
        ((this._material = s.material),
          (this._flameFrame.visible = !1),
          (this._flameFrame.active = !1));
        let a = this._tapTip.getChildByName("phoenix_guide"),
          n = this._tapTip.getChildByName("phoenix_awaken");
        "en" != Ye.getInstance().getLanguageName() &&
          (Ye.getInstance().localizeImageText(a, oe.TXT_PHONENIX_GUIDE),
          Ye.getInstance().localizeImageText(n, oe.TXT_PHOENIX_AWAKEN));
      }
      start(t, e, i, s) {
        this._callbackDone = s;
        const a = Ze.getInstance().scaleRate;
        ((this._root.active = !0),
          (this._fish = i),
          this._counting.pos(0, 0),
          this._counter.pos(0, 0),
          (this._maxCount = t),
          (this._winCoin = e),
          (this._touchPnl.visible = !1),
          (this._countValue = 0),
          this._effectPhoenixRewardAnimator.gotoAndStopByFrame(
            "boss_reward_in",
            0,
            0,
          ),
          this._effectPhoenixRewardAnimator.play("boss_reward_in"),
          ai.getInstance().playSFX(pe.REWARD_PHOENIX_APPEAR),
          (this._spinePhoenixReward.visible = !1),
          this._spinePhoenixReward.pos(0, -146),
          this._spinePhoenixReward.scale(a.x, a.y),
          Laya.timer.once(400, this, this.playPhoenixIn.bind(this)),
          (this._root.visible = !0),
          (this._root.alpha = 1),
          (this._counting.visible = !0),
          (this._counting.alpha = 1),
          (this._counter.visible = !0),
          (this._counter.alpha = 1));
        (this._counter.getChildByName("bg").scale(a.x, a.y),
          this._num.scale(this._numBaseScale * a.x, this._numBaseScale * a.y),
          (this._num.y = this._numBaseY * a.y),
          this._tapTip.scale(a.x, a.y),
          this._fireEffect.scale(a.x, a.y),
          this._particleTapScript.resetSystem(),
          this._phoenixGuideAnimator.gotoAndStopByFrame("phoenix_guide", 0, 0),
          this._phoenixGuideAnimator.play("phoenix_guide"),
          (this._phoenixGuide.visible = !0),
          this._fingerAnimator.gotoAndStopByFrame("finger", 0, 0),
          this._fingerAnimator.play("finger"),
          (this._finger.visible = !0));
      }
      playPhoenixIn() {
        (this._spinePhoenixReward.once(
          Laya.Event.STOPPED,
          this,
          this.playPhoenixIdle.bind(this),
        ),
          this._spinePhoenixReward.play("ingame", !1),
          (this._spinePhoenixReward.visible = !0),
          Laya.timer.once(800, this, this.startCount),
          Laya.timer.once(600, this, () => {
            ai.getInstance().playSFX(pe.REWARD_PHOENIX_FLY);
          }));
      }
      playPhoenixIdle() {
        this._spinePhoenixReward.play("idle", !0);
      }
      startCount() {
        ((this._touchPnl.visible = !0),
          (this._countBurning = 0),
          (this._tapCount = -1),
          (this._lastTime = 0.001 * Date.now()),
          (this._countValue = 0),
          (this._num.text = this._countValue.toString()),
          (this._num.visible = !0),
          (this._count.visible = !0),
          Laya.timer.frameLoop(1, this, this.updateCount));
      }
      updateCount() {
        const t = 0.001 * Date.now();
        if (!(t - this._lastTime < 0.1))
          if (
            ((this._lastTime = t),
            this._countValue >= 160 || this._countValue >= this._maxCount)
          ) {
            (this._countValue > 160 &&
              (this._countValue = Math.max(this._countValue, 160)),
              this._countValue > this._maxCount &&
                (this._countValue = Math.min(this._countValue, this._maxCount)),
              (this._num.text = this._countValue.toString()),
              Laya.timer.clear(this, this.updateCount),
              Laya.timer.clear(this, this.callbackAddTouchBomb));
            const t = this._maxCount > 160 && this._countBurning < 4;
            this.afterBurning(t, () => {
              (this._maxCount <= 160 && this.startEnding(!1),
                this._maxCount > 160 &&
                  this._maxCount < 200 &&
                  this.startEnding(!1),
                this._maxCount >= 200 && t && this.startEnding(!1),
                this._maxCount >= 200 && !t && this.startBoiling());
            });
          } else
            (this._countValue > -1 &&
              this._countValue <= 100 &&
              (this._countValue += 2),
              this._countValue > 100 &&
                this._countValue <= 160 &&
                (this._countValue += 1),
              this._countValue > 160 &&
                (this._countValue = Math.max(this._countValue, 160)),
              this._countValue > this._maxCount &&
                (this._countValue = Math.min(this._countValue, this._maxCount)),
              (this._num.text = this._countValue.toString()));
      }
      startEnding(t) {
        t
          ? Laya.timer.once(400, this, () => {
              const t = Fe.getInstance().gameMain,
                e = this._winCoin;
              (t.playRewardBossAwaken(19, this._winCoin, () => {
                const t = Fe.getInstance().gameMain;
                (ms
                  .getInstance()
                  .playSmallCoinNum(
                    t.playerMe.getWinCoinWorldPoint(),
                    t.playerMe,
                    xe.getInstance().formatNumber(e),
                  ),
                  this._callbackDone && this._callbackDone());
              }),
                me.Tween.union(
                  me.Tween.tweenTo(
                    this._counting,
                    {
                      alpha: 0,
                    },
                    150,
                    Laya.Ease.cubicOut,
                  ),
                  me.Tween.callFunc(this, () => {
                    ((this._counting.visible = !1), this.reset());
                  }),
                ),
                ai.getInstance().changeBGM(pe.BGM_CONGRATULATION));
            })
          : Laya.timer.once(1200, this, () => {
              const t =
                  Fe.getInstance().gameMain.playerMe.getRewardWorldPosition(
                    new Laya.Point(0, -150),
                  ),
                e = this._counting.globalToLocal(t);
              (Laya.timer.once(300, this, () => {
                Laya.Tween.to(
                  this._counter,
                  {
                    x: e.x,
                    y: e.y,
                    scaleX: 0.66,
                    scaleY: 0.66,
                  },
                  800,
                  Laya.Ease.cubicOut,
                );
              }),
                Laya.timer.once(950, this, () => {
                  (Laya.Tween.to(
                    this._counting,
                    {
                      alpha: 0,
                    },
                    150,
                    Laya.Ease.cubicOut,
                    Laya.Handler.create(this, () => {
                      this._counting.visible = !1;
                      const t = Fe.getInstance().gameMain;
                      (Ss.getInstance().playCatchBig(
                        t.playerMe,
                        this._fish.getKind(),
                        this._winCoin,
                        null,
                      ),
                        this.reset(),
                        this._callbackDone && this._callbackDone());
                    }),
                  ),
                    ai.getInstance().playSFX(pe.REWARD_PHOENIX_COIN_ADD),
                    Yi.getInstance().isSceneBoss
                      ? ai.getInstance().changeBGM(pe.BGM_PHOENIX)
                      : ai.getInstance().changeBGM(pe.BGM));
                }));
            });
      }
      startBoiling() {
        this.playPhoenixBombing(this.startEnding.bind(this, !0));
      }
      playPhoenixBombing(t) {
        const e = this._maxCount,
          i = Ze.getInstance().scaleRate;
        if (e < 160) t && t();
        else {
          ((this._bombingPhoenix = Ni.getInstance().getSpineFish(19)),
            this._bombingNode.addChild(this._bombingPhoenix));
          let e = 0,
            s = 0;
          (this._maxCount >= 160 &&
            this._maxCount <= 200 &&
            ((e = 1), (s = 160)),
            this._maxCount >= 201 &&
              this._maxCount <= 300 &&
              ((e = 2), (s = 201)),
            this._maxCount >= 301 &&
              this._maxCount <= 400 &&
              ((e = 3), (s = 301)),
            this._maxCount >= 401 &&
              this._maxCount <= 500 &&
              ((e = 4), (s = 401)),
            this._maxCount >= 501 &&
              this._maxCount <= 650 &&
              ((e = 5), (s = 501)),
            this._maxCount >= 651 &&
              this._maxCount <= 800 &&
              ((e = 6), (s = 651)),
            this._maxCount >= 801 &&
              this._maxCount <= 1e6 &&
              ((e = 7), (s = 801)));
          const a = [
              new Laya.Vector2(1e3, 160),
              new Laya.Vector2(1e3, 0),
              new Laya.Vector2(1e3, -160),
            ],
            n = this._bombingPhoenix;
          (n.pos(0, -1e3),
            this._bombingPhoenix.play("run01", !0),
            (this._bombingPhoenix.active = !0),
            (this._bombingPhoenix.visible = !0),
            this._bombingPhoenix.scale(1 * i.x, 1 * i.y),
            this._bombingPhoenix.size(0, 0),
            (this._bombingPhoenix.anchorX = 0),
            (this._bombingPhoenix.anchorY = 0),
            (this._bombingPhoenix.rotation = 0),
            (this._bombingPhoenix.alpha = 1),
            (n.zOrder = 10));
          let o = 1,
            h = 0;
          const l = () => {
            let l = Laya.Vector2.ZERO.clone(),
              r = Laya.Vector2.ZERO.clone();
            for (; l.y === r.y; )
              ((l = _i.randomItem(a).clone()), (r = _i.randomItem(a).clone()));
            ((l.x *= o),
              (r.x *= -1 * o),
              (h += 1),
              (o *= -1),
              n.pos(l.x, l.y),
              (n.alpha = 255),
              (n.visible = !0));
            const c =
              me.Math.pAngleSigned(me.Math.VECTOR_UP, me.Math.pSub(r, l)) *
                me.Math.DEG +
              90;
            ((n.rotation = c),
              (this._bombingPhoenix.alpha = 1),
              Laya.Tween.to(
                this._bombingPhoenix,
                {
                  x: r.x,
                  y: r.y,
                },
                1200,
                Laya.Ease.linearIn,
                Laya.Handler.create(this, () => {
                  Laya.Tween.to(
                    this._bombingPhoenix,
                    {
                      alpha: 0,
                    },
                    120,
                  );
                }),
              ),
              Laya.timer.once(2800, this, () => {
                let t = this._maxCount;
                switch (h) {
                  case 1:
                    t = Math.min(this._maxCount, 200);
                    break;
                  case 2:
                    t = Math.min(this._maxCount, 300);
                    break;
                  case 3:
                    t = Math.min(this._maxCount, 400);
                    break;
                  case 4:
                    t = Math.min(this._maxCount, 500);
                    break;
                  case 5:
                    t = Math.min(this._maxCount, 650);
                    break;
                  case 6:
                    t = Math.min(this._maxCount, 800);
                    break;
                  default:
                    t = Math.min(this._maxCount, 1e3);
                }
                this.highlightCountNum1();
                const e = () => {
                  if (this._countValue >= t)
                    return (
                      (this._isUpdatingCount = !1),
                      this._countValue >= t &&
                        (this._countValue = Math.min(this._countValue, t)),
                      (this._num.text = this._countValue.toFixed(0)),
                      this.stopHighlightCountNum1(),
                      void Laya.timer.clear(this, e)
                    );
                  ((this._countValue += 1 === h ? 2 : 3),
                    this._countValue > t &&
                      (this._countValue = Math.min(this._countValue, t)),
                    (this._num.text = this._countValue.toFixed(0)));
                };
                ((this._isUpdatingCount = !0), Laya.timer.loop(30, this, e));
              }),
              Laya.timer.once(400, this, () => {
                let a = 0;
                (me.Timer.repeat(
                  this,
                  () => {
                    const t = Ni.getInstance().getPhoenixFeather();
                    ((t.visible = !0), (t.active = !0));
                    let n = me.Math.pLerp(l, r, ++a / 10);
                    (t.pos(n.x, n.y),
                      this._bombingNode.addChild(t),
                      (t.rotation = xe
                        .getInstance()
                        .getRandomNumberMinMax(0, 360)));
                    const o = t.getComponent(Laya.Animator2D),
                      c = t
                        .getChildByName("particle")
                        .getComponent(Laya.Script);
                    if (
                      (c.resetSystem(),
                      o.gotoAndStopByFrame("phoenix_feather_bomb", 0, 0),
                      o.play("phoenix_feather_bomb"),
                      Laya.timer.once(1800, this, () => {
                        (c.stopSystem(),
                          Ni.getInstance().recoverPhoenixFeather(t));
                      }),
                      5 === a)
                    ) {
                      const t = Yi.getInstance().getListNormalFish(),
                        e = xe.getInstance().getRandomNumberMinMax(2, 5);
                      for (let i = 0; i < e; ++i)
                        if (t.length > 0) {
                          const e = xe
                              .getInstance()
                              .getRandomNumberMinMax(0, t.length - 1),
                            i = t.splice(e, 1)[0];
                          i &&
                            i.getIsAlive() &&
                            i.isInGameScene() &&
                            i.remove();
                        }
                    }
                    (Laya.timer.once(400, this, () => {
                      Fe.getInstance().shakeScene();
                    }),
                      Laya.timer.once(1150, this, () => {
                        const t = this._counting.localToGlobal(
                          new Laya.Point(0, 0),
                        );
                        (ms
                          .getInstance()
                          .playGetCoin(
                            this._bombingNode.localToGlobal(
                              new Laya.Point(n.x, n.y),
                            ),
                            t,
                            xe.getInstance().getRandomNumberMinMax(2, 4),
                          ),
                          ai
                            .getInstance()
                            .playSFXShoot(pe.REWARD_PHOENIX_CLICK));
                      }));
                    let _ = xe.getInstance().getRandomNumberMinMax(3, 5),
                      p = () => _i.randomWithRate([6, 1], [3, 2], [1, 3]);
                    if (h >= e) {
                      let t = this._maxCount - s,
                        e = Math.round(t / 10);
                      (e < 1 && (_ = 0),
                        e >= 1 &&
                          e < 2 &&
                          ((_ = 1),
                          (p = () => _i.randomWithRate([7, 1], [3, 2]))),
                        e >= 2 &&
                          e < 4 &&
                          ((_ = 2),
                          (p = () => _i.randomWithRate([7, 1], [3, 2]))),
                        e >= 4 &&
                          e < 6 &&
                          ((_ = 3),
                          (p = () =>
                            _i.randomWithRate([6, 1], [3, 2], [1, 3]))));
                    }
                    Laya.timer.once(1350, this, () => {
                      let t = () => {
                        let t = new Laya.Vector2(
                          0,
                          xe.getInstance().getRandomNumberMinMax(90, 180),
                        );
                        t = me.Math.pRotateByAngle(
                          t,
                          me.Math.p(0, 0),
                          2 * Math.random() * me.Math.PI,
                        );
                        let e = Ni.getInstance().getPhoenixBomb();
                        if (null === e) return;
                        this._bombingNode.addChild(e);
                        const s = e.scaleX,
                          a = e.scaleY;
                        (e.scale(s * i.x, a * i.y),
                          e.pos(n.x, n.y),
                          e.play(n, () => {
                            (e.scale(s, a),
                              Ni.getInstance().recoverPhoenixBomb(e));
                          }),
                          this.addTouchBombNum(p(), me.Math.pAdd(n, t), !1));
                      };
                      for (let e = 0; e < _; ++e) t();
                    });
                  },
                  10,
                  120,
                ),
                  h >= e &&
                    Laya.timer.once(5200, this, () => {
                      Laya.Tween.to(
                        this._bombingPhoenix,
                        {
                          alpha: 0,
                        },
                        200,
                        Laya.Ease.cubicOut,
                      );
                      const e = () => {
                        this._isUpdatingCount ||
                          (Laya.timer.clear(this, e),
                          Laya.timer.once(700, this, () => {
                            (this._bombingPhoenix &&
                              (this._bombingNode.removeChild(
                                this._bombingPhoenix,
                              ),
                              Ni.getInstance().recoverSpineFish(
                                this._bombingPhoenix,
                                19,
                              ),
                              (this._bombingPhoenix = null)),
                              t && t());
                          }));
                      };
                      Laya.timer.frameLoop(1, this, e);
                    }));
              }),
              Laya.timer.once(1e3, this, () => {
                ai.getInstance().playSFX(pe.REWARD_PHOENIX_ATTACK);
              }));
          };
          Laya.timer.once(200, this, () => {
            me.Timer.repeat(this, l, e, 4400);
          });
        }
      }
      onTouch(t, e) {
        (Fe.getInstance().gameMain.playTapFx(
          this._touchPnl.localToGlobal(new Laya.Point(t, e)),
        ),
          ai.getInstance().playSFXShoot(pe.REWARD_PHOENIX_CLICK),
          this.highlightCountNum());
        const i = 0.001 * Date.now();
        if (!(i - this._lastTimeTouch < 0.2)) {
          if (
            ((this._lastTimeTouch = i),
            this._effectPhoenixRewardAnimator.gotoAndStopByFrame("press", 0, 0),
            this._effectPhoenixRewardAnimator.play("press"),
            this.startTouchBombing(),
            -1 === this._tapCount)
          )
            return (
              (this._tapCount = 1),
              this.tintSpineBird(),
              void this.startBurning()
            );
          if ((++this._tapCount, this._tapCount >= 4)) {
            let t = this._countBurning;
            ((this._tapCount = 0),
              (this._countBurning = Math.min(this._countBurning + 1, 5)),
              this.tintSpineBird(),
              this.updateBurningState(this._countBurning > t));
          }
        }
      }
      startBurning() {
        let t = 0;
        (Laya.timer.frameLoop(1, this, () => {
          (++t, this._material.setFloat("uuuTime", 0.017 * t));
        }),
          (this._flameFrame.visible = !0),
          (this._flameFrame.active = !0),
          Laya.timer.clear(this, this.checkReduceBurning),
          Laya.timer.loop(100, this, this.checkReduceBurning),
          Laya.timer.clear(this, this.killingCallback),
          Laya.timer.loop(1600, this, this.killingCallback),
          Laya.timer.clear(this, this.hurtingCallback),
          Laya.timer.loop(300, this, this.hurtingCallback),
          (this._countBurning = 1),
          this.updateBurningState());
      }
      afterBurning(t, e) {
        ((this._touchPnl.visible = !1),
          (this._finger.visible = !1),
          (this._phoenixGuide.visible = !1),
          this._fingerAnimator.stop(),
          this._phoenixGuideAnimator.stop(),
          this._particleTapScript.stopSystem(),
          Laya.Tween.clearAll(this._count),
          this._count.pos(0, 0),
          this._count.scale(1, 1),
          Laya.timer.clear(this, this.checkReduceBurning),
          this.stopKillingCallback(),
          Laya.timer.clear(this, this.hurtingCallback),
          this._spinePhoenixReward.playbackRate(1),
          Laya.timer.once(600, this, () => {
            (this._countValue >= 200 &&
              !t &&
              (this._effectPhoenixRewardAnimator.gotoAndStopByFrame(
                "get",
                0,
                0,
              ),
              this._effectPhoenixRewardAnimator.play("get")),
              this._spinePhoenixReward.playbackRate(1.5),
              this._spinePhoenixReward.once(Laya.Event.STOPPED, this, () => {
                (this._spinePhoenixReward.play("idle", !0),
                  this._spinePhoenixReward.playbackRate(5),
                  Laya.timer.once(300, this, () => {
                    (e && e(),
                      Laya.Tween.to(
                        this._counting,
                        {
                          x: 0,
                          y: 25,
                        },
                        50,
                        Laya.Ease.linearIn,
                        Laya.Handler.create(this, () => {
                          Laya.Tween.to(
                            this._counting,
                            {
                              x: 0,
                              y: -65,
                            },
                            150,
                            Laya.Ease.sineOut,
                          );
                        }),
                      ),
                      Laya.Tween.to(
                        this._spinePhoenixReward,
                        {
                          x: 0,
                          y: -800,
                        },
                        500,
                        Laya.Ease.sineOut,
                        Laya.Handler.create(this, () => {
                          this._spinePhoenixReward.playbackRate(0);
                        }),
                      ),
                      ai.getInstance().playSFX(pe.REWARD_PHOENIX_FLY));
                  }));
              }),
              this._spinePhoenixReward.play("attack_end", !1),
              Laya.timer.once(500, this, () => {
                ai.getInstance().playSFX(pe.REWARD_PHOENIX);
              }));
          }));
      }
      checkReduceBurning() {
        let t = 0.001 * Date.now();
        t - this._lastTimeTouch >= 2 &&
          ((this._countBurning = Math.max(1, this._countBurning - 1)),
          this.updateBurningState(),
          (this._lastTimeTouch = t),
          (this._tapCount = 0));
      }
      killingCallback() {
        (this._spinePhoenixReward.once(
          Laya.Event.STOPPED,
          this,
          this.killingCallback1,
        ),
          this._spinePhoenixReward.play("attack3", !1),
          Laya.timer.once(400, this, () => {
            (this._fireEffectAnimator.gotoAndStopByFrame("fire_effect", 0, 0),
              this._fireEffectAnimator.play("fire_effect"),
              Fe.getInstance().shakeScene());
          }));
      }
      killingCallback1() {
        this._spinePhoenixReward.play("idle", !0);
        const t = Yi.getInstance().getListNormalFish(),
          e = xe.getInstance().getRandomNumberMinMax(2, 5);
        for (let i = 0; i < e; ++i)
          if (t.length > 0) {
            const e = xe.getInstance().getRandomNumberMinMax(0, t.length - 1),
              i = t.splice(e, 1)[0];
            if (i && i.getIsAlive() && i.isInGameScene()) {
              const t = i.getWorldPosition(),
                e = this._counting.localToGlobal(new Laya.Point(0, 0)),
                s = _i.randomWithRate([2, 1], [3, 2], [4, 3], [2, 4]);
              (ms.getInstance().playGetCoin(t, e, s), i.remove());
            }
          }
      }
      stopKillingCallback() {
        (this._spinePhoenixReward.off(
          Laya.Event.STOPPED,
          this.killingCallback1,
        ),
          Laya.timer.clear(this, this.killingCallback));
      }
      hurtingCallback() {
        const t = Yi.getInstance().getAllFish();
        let e = 0;
        switch (this._countBurning) {
          case 1:
            e = Math.round(0.2 * t.length);
            break;
          case 2:
            e = Math.round(0.4 * t.length);
            break;
          case 3:
            e = Math.round(0.6 * t.length);
            break;
          case 4:
            e = Math.round(0.8 * t.length);
            break;
          case 5:
            e = Math.round(1 * t.length);
            break;
          default:
            e = 0;
        }
        for (let i = 0; i < e; ++i)
          if (t.length > 0) {
            const e = xe.getInstance().getRandomNumberMinMax(0, t.length - 1),
              [i] = t.splice(e, 1);
            i && i.playCollisionEffect(180, !1);
          }
      }
      setControl(t) {
        this._material.setVector4("control", t);
      }
      updateControl(t, e) {
        let i = {
          value: e - t,
        };
        (this.setControl(
          new Laya.Vector4(0.8 * i.value, 0.7 * i.value, 0.6 * i.value, 0),
        ),
          Laya.timer.once(400, this, () => {
            Laya.Tween.to(
              i,
              {
                value: e,
              },
              200,
              (t, e, s, a) => (
                this.setControl(
                  new Laya.Vector4(
                    0.8 * i.value,
                    0.7 * i.value,
                    0.6 * i.value,
                    0,
                  ),
                ),
                s * Math.pow(t / a, 1.5) + e
              ),
            );
          }));
      }
      updateBurningState(t = !0) {
        switch (this._countBurning) {
          case 0:
            (this._spinePhoenixReward.playbackRate(1),
              this.setControl(new Laya.Vector4(4, 3.5, 3, 0)));
            break;
          case 1:
            (this._spinePhoenixReward.playbackRate(1.3),
              t
                ? this.updateControl(0.5, 1.7)
                : this.setControl(new Laya.Vector4(1.36, 1.19, 1.02, 0)));
            break;
          case 2:
            (this._spinePhoenixReward.playbackRate(1.6),
              t
                ? this.updateControl(0.45, 1.5)
                : this.setControl(new Laya.Vector4(1.36, 1.19, 1.02, 0)));
            break;
          case 3:
            (this._spinePhoenixReward.playbackRate(1.9),
              t
                ? this.updateControl(0.4, 1.3)
                : this.setControl(new Laya.Vector4(1.36, 1.19, 1.02, 0)));
            break;
          case 4:
            (this._spinePhoenixReward.playbackRate(2.2),
              t
                ? this.updateControl(0.35, 1.5)
                : this.setControl(new Laya.Vector4(1.36, 1.19, 1.02, 0)));
            break;
          case 5:
            (this._spinePhoenixReward.playbackRate(2.5),
              t
                ? this.updateControl(0.3, 1.2)
                : this.setControl(new Laya.Vector4(1.36, 1.19, 1.02, 0)));
        }
      }
      startTouchBombing() {
        if (
          (Laya.timer.clear(this, this.callbackAddTouchBomb),
          this._countValue < Math.max(0, Math.min(this._maxCount, 160) - 20))
        ) {
          let t = xe.getInstance().getRandomNumberMinMax(4, 6);
          this._countValue > 100 &&
            (t = xe.getInstance().getRandomNumberMinMax(6, 8));
          let e = (1 / t) * 1e3;
          ((this._repeatTime = t),
            Laya.timer.loop(e, this, this.callbackAddTouchBomb));
        }
      }
      callbackAddTouchBomb() {
        (this.addTouchBombInRandomPos(),
          --this._repeatTime,
          this._repeatTime <= 0 &&
            Laya.timer.clear(this, this.callbackAddTouchBomb));
      }
      addTouchBombInRandomPos() {
        const t = Ze.getInstance().scaleRate,
          e = Ni.getInstance().getPhoenixBomb();
        if (null == e) return;
        const i = new Laya.Point(
          xe.getInstance().getRandomNumberMinMax(120, 518),
          xe.getInstance().getRandomNumberMinMax(120, 270),
        );
        switch (
          ((this._touchBombNavigation =
            ((this._touchBombNavigation += xe
              .getInstance()
              .getRandomNumberMinMax(1, 3)) %
              4) +
            1),
          this._touchBombNavigation)
        ) {
          case 1:
            ((i.x = 1 * i.x), (i.y = 1 * i.y));
            break;
          case 2:
            ((i.x = -1 * i.x), (i.y = 1 * i.y));
            break;
          case 3:
            ((i.x = -1 * i.x), (i.y = -1 * i.y));
            break;
          case 4:
            ((i.x = 1 * i.x), (i.y = -1 * i.y));
        }
        this._bombingNode.addChild(e);
        const s = e.scaleX,
          a = e.scaleY;
        (e.scale(s * t.x, a * t.y),
          e.play(i, () => {
            (e.scale(s, a), Ni.getInstance().recoverPhoenixBomb(e));
          }));
        const n = _i.randomWithRate([7, 1], [3, 2]);
        this.addTouchBombNum(n, i);
      }
      addTouchBombNum(t, e, i = !0) {
        const s = Ze.getInstance().scaleRate,
          a = Ni.getInstance().getPhoenixBombNum();
        if (null == a) return;
        (this._bombingNode.addChild(a), a.pos(e.x, e.y));
        ((a.getChildByName("num").text = "+" + t),
          a.scale(1 * s.x, 1 * s.y),
          (a.alpha = 1),
          (a.visible = !0),
          (a.active = !0),
          me.Tween.union(
            me.Tween.tweenTo(
              a,
              {
                scaleX: 1.4 * s.x,
                scaleY: 1.4 * s.y,
              },
              120,
              Laya.Ease.linearIn,
            ),
            me.Tween.tweenTo(
              a,
              {
                scaleX: 0.77 * s.x,
                scaleY: 0.77 * s.y,
              },
              70,
              Laya.Ease.linearIn,
            ),
            me.Tween.callFunc(a, () => {
              Laya.timer.once(310, this, () => {
                (Laya.Tween.to(
                  a,
                  {
                    alpha: 0,
                  },
                  300,
                  Laya.Ease.sineIn,
                ),
                  Laya.Tween.to(
                    a,
                    {
                      x: 0,
                      y: 0,
                      scaleX: 0.2 * s.x,
                      scaleY: 0.2 * s.y,
                    },
                    300,
                    Laya.Ease.sineOut,
                    Laya.Handler.create(this, () => {
                      (Ni.getInstance().recoverPhoenixBombNum(a),
                        i && this.touchBombEnded(t));
                    }),
                  ));
              });
            }),
          ));
      }
      touchBombEnded(t) {
        ((this._countValue += t), this.highlightCountNum());
      }
      highlightCountNum() {
        (Laya.Tween.clearAll(this._count),
          Laya.Tween.to(
            this._count,
            {
              scaleX: 1.4,
              scaleY: 1.4,
              x: 0,
              y: 0,
            },
            70,
            Laya.Ease.linearIn,
            Laya.Handler.create(this, () => {
              Laya.Tween.to(
                this._count,
                {
                  scaleX: 0.77,
                  scaleY: 0.77,
                  x: 0,
                  y: -4,
                },
                120,
                Laya.Ease.linearIn,
              );
            }),
          ));
      }
      highlightCountNum1() {
        (Laya.Tween.clearAll(this._count),
          Laya.timer.clearAll(this._count),
          Laya.timer.loop(140, this._count, () => {
            Laya.Tween.to(
              this._count,
              {
                scaleX: 1.2,
                scaleY: 1.2,
                x: 0,
                y: 8,
              },
              70,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                Laya.Tween.to(
                  this._count,
                  {
                    scaleX: 1,
                    scaleY: 1,
                    x: 0,
                    y: 0,
                  },
                  70,
                  Laya.Ease.linearIn,
                );
              }),
            );
          }));
      }
      stopHighlightCountNum1() {
        (Laya.Tween.clearAll(this._count), Laya.timer.clearAll(this._count));
      }
      reset() {
        (Laya.Tween.to(
          this._flameFrame,
          {
            alpha: 0,
          },
          0.3,
          Laya.Ease.linearIn,
          Laya.Handler.create(this, () => {
            ((this._flameFrame.visible = !1),
              (this._flameFrame.active = !1),
              (this._flameFrame.alpha = 1),
              (this._root.active = !1));
          }),
        ),
          (this._maxCount = 0),
          (this._winCoin = 0),
          Laya.timer.clearAll(this),
          this._spinePhoenixReward.playbackRate(1));
      }
      tintSpineBird() {
        ((this._spinePhoenixReward.filters = [te]),
          Laya.timer.once(400, this, () => {
            this.stopTint();
          }));
      }
      stopTint() {
        this._spinePhoenixReward && (this._spinePhoenixReward.filters = []);
      }
    },
    Is = class t {
      constructor() {
        ((this.pos = null),
          (this.oldPos = null),
          (this.damping = 0.98),
          (this.pinned = 0),
          (this.radius = 5),
          (this.mass = 0.5));
      }
      static create(e, i, s = 0, a = 0) {
        const n = new t();
        return (
          (n.pos = new Laya.Point(e, i)),
          (n.oldPos = new Laya.Point(e - s, i - a)),
          n
        );
      }
      update(t) {
        if (0 === this.pinned) {
          let e = new Laya.Point();
          (e.copy(this.pos),
            me.Math.pSubIn(e, this.oldPos),
            me.Math.pMultIn(e, this.damping),
            this.oldPos.copy(this.pos),
            me.Math.pAddIn(this.pos, e),
            me.Math.pAddIn(this.pos, t.gravity));
        }
      }
    },
    Cs = class t {
      constructor() {
        ((this.p1 = null),
          (this.p2 = null),
          (this.length = 0),
          (this.stiffness = 2));
      }
      static create(e, i, s = 0) {
        const a = new t();
        return (
          (a.p1 = e),
          (a.p2 = i),
          (a.length = s <= 0 ? me.Math.pDistance(e.pos, i.pos) : s),
          a
        );
      }
      update() {
        const t = this.p1,
          e = this.p2;
        if (t && e) {
          let i = e.pos.x - t.pos.x,
            s = e.pos.y - t.pos.y;
          (0 === i && (i = 1e-4), 0 === s && (s = 1e-4));
          const a = Math.sqrt(i * i + s * s),
            n = ((this.length - a) / a) * this.stiffness * 0.5,
            o = i * n,
            h = s * n,
            l = Math.max(t.mass + e.mass, 1e-4),
            r = t.mass / l,
            c = e.mass / l;
          (t.pinned <= 0 && ((t.pos.x -= o * c), (t.pos.y -= h * c)),
            e.pinned <= 0 && ((e.pos.x += o * r), (e.pos.y += h * r)));
        }
      }
    },
    Ts = class t {
      constructor() {
        ((this.dots = []),
          (this.sticks = []),
          (this.gravity = null),
          (this.iterationsPerFrame = 0));
      }
      static create(e, i = 8) {
        const s = new t();
        return ((s.iterationsPerFrame = Math.max(1, i)), (s.gravity = e), s);
      }
      addDot(t) {
        return (this.dots.push(t), t);
      }
      addStick(t, e, i = 0) {
        const s = this.dots[t],
          a = this.dots[e];
        if (s && a) {
          const t = Cs.create(s, a, i);
          return (this.sticks.push(t), t);
        }
        return null;
      }
      getDot(t) {
        return this.dots[t];
      }
      getStick(t) {
        return this.sticks[t];
      }
      updateDots() {
        for (const t of this.dots) t.update(this);
      }
      updateSticks() {
        for (const t of this.sticks) t.update();
      }
      update() {
        this.updateDots();
        for (let t = 0; t < this.iterationsPerFrame; ++t) this.updateSticks();
      }
    },
    Ps = class {
      constructor(t) {
        ((this._visible = !1),
          (this._alpha = 1),
          (this._chainLen = 26),
          (this._grabLen = 58),
          (this._linkinNodes = []),
          (this._rope = Ts.create(me.Math.PointZero())),
          (this._isTensioned = !1),
          (this._container = t),
          (this._lastTime = Date.now()),
          Laya.timer.frameLoop(1, this, this.update));
      }
      isVisible() {
        return this._visible;
      }
      setVisible(t) {
        this._visible = t;
        for (let e = 0; e < this._linkinNodes.length; ++e)
          ((this._linkinNodes[e].visible = t),
            (this._linkinNodes[e].active = t));
      }
      setAlpha(t) {
        this._alpha = t;
        for (let e = 0; e < this._linkinNodes.length; ++e)
          this._linkinNodes[e].alpha = t;
      }
      get isTensioned() {
        return this._isTensioned;
      }
      set isTensioned(t) {
        this._isTensioned = t;
      }
      get rope() {
        return this._rope;
      }
      set rope(t) {
        this._rope = t;
      }
      get linkinNodes() {
        return this._linkinNodes;
      }
      set linkinNodes(t) {
        this._linkinNodes = t;
      }
      get grabLen() {
        return this._grabLen;
      }
      set grabLen(t) {
        this._grabLen = t;
      }
      setIdleGrabber(t) {
        (this.clearRope(),
          this._rope.addDot(Is.create(t.x, t.y - this._grabLen)),
          this._rope.addDot(Is.create(t.x, t.y)),
          this._rope.addStick(0, 1));
        const e = this.getHeadPt();
        e && ((e.mass = 10), (e.pinned = 1));
        const i = this.getTailPt();
        i && (i.pinned = 1);
        const s = Ni.getInstance().getClaw();
        ((s.visible = this._visible),
          (s.active = this._visible),
          (s.alpha = this._alpha),
          this._container.addChild(s),
          this._linkinNodes.push(s),
          (this._isTensioned = !1),
          s.playIdleClose());
      }
      shoot(t, e, i, s = null) {
        const a = Math.max(0, me.Math.pDistance(t, e) - this._grabLen),
          n = Math.max(10, Math.round(a / this._chainLen)),
          o = Math.round(0.5 * n),
          h = Math.round(0.2 * n);
        this.clearRope();
        const l = n + o;
        for (let e = 0; e <= l; ++e) this._rope.addDot(Is.create(t.x, t.y));
        for (let t = 1; t <= l; ++t) {
          let e = 1 == t ? this._grabLen : this._chainLen;
          (t >= n + h && (e = 0), this._rope.addStick(t - 1, t, e));
        }
        for (let t = 1; t <= l; ++t) {
          let e = null;
          ((e =
            1 === t
              ? Ni.getInstance().getClaw()
              : Ni.getInstance().getClawChain()),
            (e.alpha = this._alpha),
            this._container.addChild(e),
            this._linkinNodes.push(e));
        }
        const r = this.getHeadPt(),
          c = this.getTailPt();
        (r && ((r.mass = 10), (r.pinned = 1)),
          c && (c.pinned = 1),
          (this._isTensioned = !1),
          (this._remainingTime = i),
          (this._elapsedTime = 0),
          (this._duration = i),
          (this._delta = me.Math.pSub(e, r.pos)),
          (this._callback = s),
          (this._lastTime = 0.001 * Date.now()),
          Laya.timer.frameLoop(1, this, this.shootTask));
      }
      easeOut(t) {
        return 1 - Math.pow(1 - t, 2);
      }
      shootTask() {
        let t = 0.001 * Date.now() - this._lastTime;
        ((this._lastTime = 0.001 * Date.now()),
          (t = Math.min(t, this._remainingTime)));
        const e =
            this.easeOut((this._elapsedTime + t) / this._duration) -
            this.easeOut(this._elapsedTime / this._duration),
          i = me.Math.pMult(this._delta, e);
        (me.Math.pAddIn(this.getHeadPt().pos, i),
          (this._remainingTime -= t),
          (this._elapsedTime += t),
          this._elapsedTime >= this._duration &&
            (this._callback && (this._callback(), (this._callback = null)),
            Laya.timer.clear(this, this.shootTask),
            (this._isTensioned = !0)));
      }
      closeUp(t, e, i = null) {
        Laya.timer.clear(this, this.closingUp);
        if (!this.getTailPt()) return;
        const s = t / e,
          a = t >= this.getLength();
        ((this._closingUpLastTime = 0.001 * Date.now()),
          (this._closingUpDuration = e),
          (this._closingUpRate = s),
          (this._closingUpShouldStop = a),
          (this._closingUpCallback = i),
          Laya.timer.frameLoop(1, this, this.closingUp));
      }
      closingUp() {
        let t = 0.001 * Date.now() - this._closingUpLastTime;
        ((this._closingUpLastTime = 0.001 * Date.now()),
          this.shrink(this._closingUpRate * t),
          (this._closingUpDuration -= t),
          this._closingUpDuration <= 0 &&
            (Laya.timer.clear(this, this.closingUp),
            this._closingUpShouldStop && (this._isTensioned = !1),
            this._closingUpCallback && this._closingUpCallback()));
      }
      clearRope() {
        if (this._linkinNodes.length > 0) {
          (Ni.getInstance().recoverClaw(this._linkinNodes[0]),
            this._container.removeChild(this._linkinNodes[0]));
          for (let t = 1; t < this._linkinNodes.length; ++t) {
            const e = this._linkinNodes[t];
            (this._container.removeChild(e),
              Ni.getInstance().recoverClawChain(e));
          }
        }
        ((this._rope.sticks.length = 0),
          (this._rope.dots.length = 0),
          (this._linkinNodes.length = 0),
          Laya.timer.clear(this, this.shootTask),
          Laya.timer.clear(this, this.closingUp));
      }
      shrink(t) {
        const e = this._rope;
        for (let i = this._linkinNodes.length - 1; i >= 1; --i) {
          const s = e.sticks[i];
          if (!(s.length <= 0))
            for (; t > 0; ) {
              if (s.length <= 0) {
                s.length = 0;
                break;
              }
              t >= s.length
                ? ((t -= s.length), (s.length = 0))
                : ((s.length -= t), (t = 0));
            }
        }
      }
      loose(t) {
        const e = this._rope,
          i = this._chainLen;
        for (let s = 1, a = this._linkinNodes.length; s < a; ++s) {
          const a = e.sticks[s];
          if (a.length >= i) a.length = i;
          else
            for (; t > 0; ) {
              if (a.length >= i) {
                a.length = i;
                break;
              }
              a.length + t > i
                ? ((t -= i - a.length), (a.length = i))
                : ((a.length += t), (t = 0));
            }
        }
      }
      tension() {
        if (this._rope.dots.length < 2) return;
        let t =
          this.getLength() -
          me.Math.pDistance(this.getHeadPt().pos, this.getTailPt().pos);
        const e = 2 * this._chainLen;
        (t + e > 0 && ((t = Math.abs(t + e)), t >= 0.5 && this.shrink(0.6 * t)),
          t < 0 && ((t = Math.abs(t)), t >= 0.5 && this.loose(0.6 * t)));
      }
      onDestroy() {
        (this._linkinNodes.length > 0 &&
          (this._linkinNodes.forEach((t) => {
            null != t && t.destroy();
          }),
          (this._linkinNodes.length = 0)),
          Laya.timer.clear(this, this.shootTask),
          Laya.timer.clear(this, this.closingUp));
      }
      update() {
        (this._rope.update(),
          this._isTensioned && this.tension(),
          this.updateLinkinNodes());
      }
      updateLinkinNodes() {
        const t = this._rope.sticks,
          e = this._linkinNodes,
          i = me.Math.DEG,
          s = me.Math.PointZero();
        for (let a = 0, n = e.length; a < n; ++a) {
          const n = t[a],
            o = e[a];
          if (
            (s.copy(n.p1.pos),
            me.Math.pSubIn(s, n.p2.pos),
            (o.rotation = Math.atan2(s.y, s.x) * i + 90),
            o.pos(n.p2.pos.x, n.p2.pos.y),
            (n.p2.damping = 0.98),
            (o.alpha = this._alpha),
            n.length <= 0)
          ) {
            const t = me.Math.pDistanceSQ(n.p1.pos, n.p2.pos);
            t <= 32 &&
              ((n.p2.damping = 0.7), (o.alpha = (t / 32) * this._alpha));
          }
        }
      }
      getHeadPt() {
        return this._rope.dots.length > 0 ? this._rope.dots[0] : null;
      }
      getTailPt() {
        return this._rope.dots.length > 0
          ? this._rope.dots[this._rope.dots.length - 1]
          : null;
      }
      getLength() {
        let t = 0;
        for (let e = this._linkinNodes.length - 1; e >= 0; --e)
          t += this._rope.sticks[e].length;
        return t;
      }
    },
    As = class t {
      constructor(t, e, i = !1) {
        ((this._countBullet = 0),
          (this._lastTime = 0.001 * Date.now()),
          (this._normalLaserCount = 0),
          (this._listActiveBulletLaser = []),
          (this._listActiveBulletLaserBig = []),
          (this._canFireBullet = !1),
          (this._tempPoint1 = new Laya.Point()),
          (this._tempPoint2 = new Laya.Point()),
          (this._tempPoint3 = new Laya.Point()),
          (this._cannonHarpoonState = 0),
          (this._isMe = i),
          this._initUI(t, e),
          this._initLanguage());
      }
      get targetFish() {
        return this._targetFish;
      }
      set targetFish(t) {
        this._targetFish = t;
      }
      get seatId() {
        return this._seatId;
      }
      set seatId(t) {
        this._seatId = t;
      }
      get bulletKind() {
        return this._bulletKind;
      }
      set bulletKind(t) {
        this._bulletKind = t;
      }
      get callbackLaserHit() {
        return this._callbackLaserHit;
      }
      set callbackLaserHit(t) {
        this._callbackLaserHit = t;
      }
      get callbackJellyExplode() {
        return this._callbackJellyExplode;
      }
      set callbackJellyExplode(t) {
        this._callbackJellyExplode = t;
      }
      get canFireBullet() {
        return this._canFireBullet;
      }
      set canFireBullet(t) {
        this._canFireBullet = t;
      }
      static create(e, i, s = !1) {
        return new t(e, i, s);
      }
      setData(t) {
        if (((this._playerData = t), !this._playerData))
          return (this.resetPlayer(), void this.hide());
        (this.resetState(),
          this.show(),
          Ye.getInstance().localizeText(
            this._txtUsername,
            this._playerData.name,
          ),
          (this._txtUsername.text = xe
            .getInstance()
            .shortenString(this._txtUsername.text, this._txtUsername)),
          (this._txtUserCoin.text = xe
            .getInstance()
            .formatNumber(this._playerData.coin)),
          (this._txtBetValue.text = xe
            .getInstance()
            .formatNumber(this._playerData.currentFirePower)),
          this.isMe
            ? ((this._btnBetMinus.visible = !0),
              (this._btnBetPlus.visible = !0),
              (this._btnBetMinus.mouseEnabled = !0),
              (this._btnBetPlus.mouseEnabled = !0),
              this.updateButtonBetState(),
              this.showLocation(),
              xe
                .getInstance()
                .registerButtonEvent(
                  this._btnBetMinus,
                  this.onBtnBetMinusTouches.bind(this),
                ),
              xe
                .getInstance()
                .registerButtonEvent(
                  this._btnBetPlus,
                  this.onBtnBetPlusTouches.bind(this),
                ),
              this.setAlphaGroup(P))
            : ((this._btnBetMinus.visible = !1),
              (this._btnBetPlus.visible = !1),
              this.setAlphaGroup(A)));
      }
      updateButtonBetState() {
        Be.getInstance().listFirePower.length <= 1 &&
          ((this._btnBetMinus.active = !1),
          (this._btnBetPlus.active = !1),
          (this._btnBetMinus.skin = oe.BET_MINUS_OFF),
          (this._btnBetPlus.skin = oe.BET_PLUS_OFF));
      }
      getData() {
        return this._playerData;
      }
      resetPlayer() {
        (this.resetState(),
          this.stopLaser(),
          this.stopNormalLock(),
          this.setAlphaGroup(P));
      }
      resetState() {
        this.indexFirePower = 0;
      }
      show() {
        ((this._ui.visible = !0),
          (this._cannonUI.visible = !0),
          (this._pnlCannon.visible = !0),
          (this._pnlBet.visible = !0),
          (this._pnlInfo.visible = !0),
          (this._pnlTxt.visible = !0),
          (this._txtWaitingToJoin.visible = !1),
          (this._cannonUI.active = !0),
          (this._pnlCannon.active = !0),
          (this._pnlBet.active = !0),
          (this._pnlInfo.active = !0),
          (this._pnlTxt.active = !0),
          (this._txtWaitingToJoin.active = !1),
          (this._cannon.rotation = this._baseCannonRotation),
          Laya.Tween.clearTween(this._txtWaitingToJoin));
      }
      hide() {
        ((this._cannonUI.visible = !1),
          (this._txtWaitingToJoin.visible = !0),
          (this._pnlCannon.visible = !1),
          (this._pnlBet.visible = !1),
          (this._pnlInfo.visible = !1),
          (this._pnlTxt.visible = !1),
          (this._cannonUI.active = !1),
          (this._txtWaitingToJoin.active = !0),
          (this._pnlCannon.active = !1),
          (this._pnlBet.active = !1),
          (this._pnlInfo.active = !1),
          (this._pnlTxt.active = !1),
          this._cannonHarpoon &&
            (0 !== this._cannonHarpoonState
              ? (this.returnRopeDart(),
                Laya.timer.once(500, this, () => {
                  this._ropeDart.setVisible(!1);
                }))
              : this._ropeDart.setVisible(!1)),
          this.playEffectWaiting(),
          this.hideLocation());
      }
      playEffectWaiting() {
        me.Tween.union(
          me.Tween.tweenTo(
            this._txtWaitingToJoin,
            {
              alpha: 0.5,
            },
            1700,
            Laya.Ease.linearOut,
          ),
          me.Tween.tweenTo(
            this._txtWaitingToJoin,
            {
              alpha: 1,
            },
            1700,
            Laya.Ease.linearIn,
          ),
          me.Tween.callFunc(this, this.playEffectWaiting.bind(this)),
        );
      }
      getPosition() {
        return (
          (this._tempPoint1.x = this._cannon.x),
          (this._tempPoint1.y = this._cannon.y),
          this._pnlCannon.localToGlobal(this._tempPoint1),
          {
            x: this._tempPoint1.x,
            y: this._tempPoint1.y,
          }
        );
      }
      rotateCannon(t) {
        const e = -((180 * t) / Math.PI - 90);
        if (
          ((this._cannon.rotation = e),
          (this._cannonShark.rotation = e),
          (this._cannonJellyfish.rotation = e),
          this._cannonHarpoon)
        ) {
          this._cannonHarpoon.rotation = e;
          const t = Fe.getInstance().getLayerBullet(),
            i = xe
              .getInstance()
              .convertPos(
                t,
                this._cannonHarpoon,
                new Laya.Point(
                  this._cannonHarpoonMuzzle.x,
                  this._cannonHarpoonMuzzle.y,
                ),
              ),
            s = me.Math.pNormalize(
              me.Math.pSub(
                i,
                xe
                  .getInstance()
                  .convertPos(t, this._cannonHarpoon, new Laya.Point(0, 0)),
              ),
            ),
            a = me.Math.pAdd(i, me.Math.pMult(s, this._ropeDart.grabLen));
          (this._ropeDart.getTailPt().pos.copy(i),
            this._ropeDart.getHeadPt().pos.copy(a));
        }
      }
      playAnimShoot() {
        (this._animatorCannon.gotoAndStopByFrame("shoot", 0, 0),
          this._animatorCannon.play("shoot"),
          this._animatorEffectShoot.gotoAndStopByFrame("shoot_effect", 0, 0),
          this._animatorEffectShoot.play("shoot_effect"));
      }
      onFireData(t) {
        if (t) {
          if (this.bulletKind == t.bulletKind) {
            if (
              !(
                0.001 * Date.now() - this._lastTime >
                Gt[this.bulletKind].delayShoot
              )
            )
              return;
            this._lastTime = 0.001 * Date.now();
          }
          switch (t.bulletKind) {
            case 1:
              this.onFireNormalBullet(t);
              break;
            case 2:
              (this.changeCannon(2), this.fireSharkBullet(t));
              break;
            case 3:
              (this.changeCannon(3), this.fireJellyfishBullet(t));
              break;
            case 4:
              (this.changeCannon(4), this.fireEagleClawHookBullet(t));
          }
        }
      }
      onFireNormalBullet(t) {
        (t.isLaser
          ? (this.changeCannon(6),
            !this.isMe && t.isLaser && this.fireLaserBullet(t))
          : (this.changeCannon(1), this.fireNormalBullet(t)),
          this.showCannonNormal());
      }
      fireNormalBullet(t) {
        if (!t) return;
        if (!this._canFireBullet && !this.isMe) return;
        if (this._countBullet > B) return;
        t.isMe ||
          (t.targetId !== T
            ? (this.targetFish = Yi.getInstance().getFishById(t.targetId))
            : (this.targetFish = null),
          (t.x = Math.floor(t.angle / 1e4)),
          (t.y = Math.floor(t.angle - 1e4 * t.x)));
        let e = this.getPosition();
        this.targetFish
          ? (this.targetFish.getWorldPosition(this._tempPoint1),
            (t.x = this._tempPoint1.x),
            (t.y = this._tempPoint1.y))
          : ((this._tempPoint1.x = t.x), (this._tempPoint1.y = t.y));
        const i = hs.getInstance().create(1);
        (this.updateCannonNormal(i, t.bulletMultiple),
          (i.multiple = t.bulletMultiple),
          (i.cost = t.bulletCost),
          (i.isMe = this.isMe),
          (i.userId = this._playerData.userId),
          i.setHitFishCallback(this.onBulletHitFish.bind(this)),
          i.setAlpha(this.isMe ? P : A));
        let s = this.getAngle(
            i.getLocalPoint(e),
            i.getLocalPoint(this._tempPoint1),
          ),
          a = this.getAngle(
            {
              x: this._cannon.x,
              y: this._cannon.y,
            },
            this._pnlCannon.globalToLocal(this._tempPoint1),
          );
        (this.rotateCannon(a),
          this.setCoin(this._playerData.coin - t.bulletCost),
          this.playAnimShoot(),
          (this._tempPoint1.x = this._cannonMuzzle.x),
          (this._tempPoint1.y = this._cannonMuzzle.y));
        let n = this._cannon.localToGlobal(this._tempPoint1);
        (this.targetFish
          ? i.moveToTarget(n, s, this.targetFish)
          : i.startMove(n, s),
          this.isMe &&
            ((t.angle = Math.round(t.y) + 1e4 * Math.round(t.x)),
            (this._countBullet += 1),
            g ||
              Xe.getInstance().sendFireBullet(
                t.bulletId,
                t.bulletMultiple,
                (this.targetFish && this.targetFish.getId()) || T,
                t.bulletKind,
                t.angle,
                !1,
                !1,
              ),
            ai.getInstance().playSFXShoot(pe.SHOOT_NORMAL)));
      }
      fireLaserBullet(t) {
        if (!t) return;
        const e = Yi.getInstance().getFishById(t.targetId);
        e && e.getIsAlive() && e.isInGameScene()
          ? this.startTarget(e)
          : this.stopLaser();
      }
      fireJellyfishBullet(t) {
        if (!t) return;
        if (!this._canFireBullet && !this.isMe) return;
        if (
          (t.isMe ||
            (t.targetId !== T
              ? (this.targetFish = Yi.getInstance().getFishById(t.targetId))
              : (this.targetFish = null)),
          !this._targetFish ||
            !this._targetFish.getIsAlive() ||
            !this._targetFish.isInGameScene())
        )
          return;
        const e = hs.getInstance().create(3);
        ((e.multiple = t.bulletMultiple),
          (e.cost = t.bulletCost),
          (e.isMe = this.isMe),
          (e.userId = this._playerData.userId),
          e.setHitFishCallback(this.onBulletHitFish.bind(this)),
          e.setExplodeCallback(this.onBulletJellyfishExplode.bind(this)),
          e.setAlpha(this.isMe ? P : A));
        let i = this.getPosition(),
          s = this.targetFish.getWorldPosition(),
          a = this.getAngle(e.getLocalPoint(i), e.getLocalPoint(s));
        t.angle = a;
        let n = t.angle,
          o = this.getAngle(
            {
              x: this._cannonJellyfish.x,
              y: this._cannonJellyfish.y,
            },
            this._pnlCannon.globalToLocal(s),
          );
        (this.rotateCannon(o),
          this.setCoin(this._playerData.coin - t.bulletCost),
          (this._tempPoint1.x = this._cannonJellyfishMuzzle.x),
          (this._tempPoint1.y = this._cannonJellyfishMuzzle.y));
        let h = this._cannonJellyfish.localToGlobal(this._tempPoint1);
        (e.moveToTarget(h, n, this.targetFish),
          this.isMe &&
            (g ||
              Xe.getInstance().sendFireBullet(
                t.bulletId,
                t.bulletMultiple,
                (this.targetFish && this.targetFish.getId()) || T,
                t.bulletKind,
                t.angle,
                !1,
                !1,
              ),
            ai.getInstance().playSFXShoot(pe.CANNON_JELLYFISH_SHOOT)),
          this.playAniJellyfishShoot(),
          this.playEffectSpecialCannon());
      }
      fireSharkBullet(t) {
        if (!t) return;
        if (!this._canFireBullet && !this.isMe) return;
        if (
          (t.isMe ||
            (t.targetId !== T
              ? (this._targetFish = Yi.getInstance().getFishById(t.targetId))
              : (this._targetFish = null)),
          !this._targetFish ||
            !this._targetFish.getIsAlive() ||
            !this._targetFish.isInGameScene())
        )
          return;
        const e = hs.getInstance().create(t.bulletKind);
        ((e.multiple = t.bulletMultiple),
          (e.cost = t.bulletCost),
          (e.isMe = this.isMe),
          (e.userId = this._playerData.userId),
          e.setHitFishCallback(this.onBulletHitFish.bind(this)),
          e.setAlpha(this.isMe ? P : A));
        let i = this.getPosition(),
          s = this._targetFish.getWorldPosition(),
          a = this.getAngle(e.getLocalPoint(i), e.getLocalPoint(s));
        t.angle = a;
        let n = t.angle,
          o = this.getAngle(
            {
              x: this._cannonShark.x,
              y: this._cannonShark.y,
            },
            this._pnlCannon.globalToLocal(s),
          );
        (this.rotateCannon(o),
          this.setCoin(this._playerData.coin - t.bulletCost),
          (this._tempPoint1.x = this._cannonSharkMuzzle.x),
          (this._tempPoint1.y = this._cannonSharkMuzzle.y));
        let h = this._cannonShark.localToGlobal(this._tempPoint1);
        (e.moveToTarget(h, n, this._targetFish),
          this.isMe &&
            (g ||
              Xe.getInstance().sendFireBullet(
                t.bulletId,
                t.bulletMultiple,
                this._targetFish.getId() || T,
                t.bulletKind,
                t.angle,
                !1,
                !1,
              ),
            ai.getInstance().playSFXShoot(pe.CANNON_SHARK_BITE_SHOOT)),
          this._cannonSharkAnimator.play("shoot", 1, 0),
          this.playEffectSpecialCannon());
      }
      fireEagleClawHookBullet(t) {
        0 == this._cannonHarpoonState &&
          t &&
          (this._canFireBullet || this.isMe) &&
          (t.isMe ||
            (t.targetId !== T
              ? (this.targetFish = Yi.getInstance().getFishById(t.targetId))
              : (this.targetFish = null)),
          this._targetFish &&
            (this.setCoin(this._playerData.coin - t.bulletCost),
            this.shootHarpoon(t.isSpeedUp),
            this.isMe &&
              !g &&
              Xe.getInstance().sendFireBullet(
                t.bulletId,
                t.bulletMultiple,
                this._targetFish.getId() || T,
                t.bulletKind,
                t.angle,
                !1,
                !1,
              )));
      }
      shootHarpoon(t = !1) {
        if (
          0 == this._cannonHarpoonState &&
          this._targetFish &&
          this._targetFish.getIsAlive() &&
          this._targetFish.isInGameScene() &&
          this._ropeDart
        ) {
          this._cannonHarpoonState = 1;
          const e = Fe.getInstance().getLayerBullet();
          this.playHarpoonFire();
          const i = xe
              .getInstance()
              .convertPos(
                e,
                this._cannonHarpoon,
                new Laya.Point(
                  this._cannonHarpoonMuzzle.x,
                  this._cannonHarpoonMuzzle.y,
                ),
              ),
            s = e.globalToLocal(
              this._targetFish.getWorldPosition(this._tempPoint2),
            );
          (this._ropeDart.shoot(i, s, t ? 0.3 : 0.6, () => {
            if (this._targetFish && this._targetFish.getIsAlive()) {
              this._cannonHarpoonState = 2;
              if (
                (this._ropeDart.linkinNodes[0].playHit(),
                this._targetFish.playCollisionEffect(),
                this.isMe &&
                  (Fe.getInstance().shakeScene2D(400, 30, 4),
                  ai.getInstance().playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_HIT)),
                this.stopHarpoonMove(),
                Laya.timer.frameLoop(1, this, this.harpoonMove),
                (this._isFast = t),
                Laya.timer.once(t ? 1e3 : 2e3, this, this.timeoutGrab),
                !p && g)
              ) {
                let t = !1;
                switch (this._targetFish.getKind()) {
                  case 16:
                  case 19:
                  case 20:
                    t = !1;
                }
                xe.getInstance().getRandomNumberMinMax(1, 10) >= 0 &&
                  Laya.stage.event("game.catch_fish", {
                    seatId: 0,
                    userCoin: 9999,
                    bulletKind: this.bulletKind,
                    bulletMultiple: 10,
                    eagleClawRateWin: 66,
                    eagleClawStar: 1,
                    isSpeedUp: !0,
                    listFishHit: [
                      {
                        fishId: this._targetFish.getId(),
                      },
                    ],
                    listFishDead: [
                      {
                        fishId: this._targetFish.getId(),
                        fishKind: this._targetFish.getKind(),
                        isFishBonusGame: !1,
                        score: xe.getInstance().getRandomNumberMinMax(1e3, 1e4),
                        isRemove: t,
                      },
                    ],
                  });
              }
              this.isMe &&
                this.onBulletHitFish(
                  Be.getInstance().currentBulletId,
                  4,
                  this.getCurrentFirePower(),
                  this._targetFish,
                  t,
                );
            } else (this.returnRopeDart(), this.playHarpoonReturn());
          }),
            this._ropeDart.linkinNodes[0].playIdleOpen(),
            this.isMe &&
              ai.getInstance().playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_SHOOT));
        }
      }
      timeoutGrab() {
        this._targetFish && this._targetFish.getIsAlive()
          ? this.handleHarpoon(
              this._targetFish,
              0,
              null,
              null,
              !1,
              this._isFast,
            )
          : this.returnRopeDart();
      }
      harpoonMove() {
        if (this._targetFish && this._targetFish.visible) {
          const t = Fe.getInstance().getLayerBullet();
          (this._targetFish.getWorldPosition(this._tempPoint1),
            this._tempPoint3.copy(this._tempPoint1),
            this._pnlCannon.globalToLocal(this._tempPoint1));
          const e = xe
            .getInstance()
            .convertPos(
              t,
              this._cannonHarpoon,
              new Laya.Point(
                this._cannonHarpoonMuzzle.x,
                this._cannonHarpoonMuzzle.y,
              ),
            );
          (t.globalToLocal(this._tempPoint3),
            (this._tempPoint2.x = this._cannonHarpoon.x),
            (this._tempPoint2.y = this._cannonHarpoon.y));
          const i = this.getAngle(this._tempPoint2, this._tempPoint1);
          (this.rotateCannon(i),
            this._ropeDart.getTailPt().pos.copy(e),
            this._ropeDart.getHeadPt().pos.copy(this._tempPoint3));
        } else this.returnRopeDart();
      }
      returnRopeDart() {
        ((this._cannonHarpoonState = 3),
          this.stopHarpoonMove(),
          (this._ropeDart.getHeadPt().pinned = 0),
          this._ropeDart
            .getHeadPt()
            .oldPos.copy(this._ropeDart.getHeadPt().pos),
          this._ropeDart.closeUp(999999, 0.3, () => {
            (this.addPinDot(),
              this._ropeDart.linkinNodes[0].playIdleClose(),
              (this._cannonHarpoonState = 0));
          }));
      }
      stopHarpoonMove() {
        Laya.timer.clear(this, this.harpoonMove);
      }
      handleHarpoon(t, e, i, s, a = !0, n = !1, o = !1) {
        if (2 != this._cannonHarpoonState) return;
        if (!this._targetFish) return;
        if (t != this._targetFish) return;
        ((n = this._isFast), Laya.timer.clear(this, this.timeoutGrab));
        const h = Fe.getInstance().getLayerBullet(),
          l = () => {
            ((this._cannonHarpoonState = 0),
              (o && 20 != t.getKind() && 21 != t.getKind()) || 0 == t.visible
                ? t.remove()
                : (t.setIsAlive(!0), (t.alpha = 1)),
              t &&
                ((t.noRotate = !1),
                t.stopForceMove(),
                t.setMoveSpeed(1),
                t.setAnimSpeed(),
                (t.catching = !1)),
              s && s());
          };
        if (t && t.getIsAlive() && !t.catching) {
          (t.setIsAlive(!1), (t.catching = !0));
          const s =
            ie.some((t) => t === e) ||
            e > Yi.getInstance().getCaptureThreshold(t.getKind());
          let r = 0;
          const c = Math.random();
          r = this.isMe
            ? a
              ? s
                ? c > 0.4
                  ? 3
                  : 4
                : c > 0.8
                  ? 0
                  : c > 0.4
                    ? 1
                    : c > 0.1
                      ? 2
                      : 3
              : c > 0.5
                ? 0
                : c > 0.2
                  ? 1
                  : 2
            : s
              ? 2
              : 0;
          let _ = 0;
          null != i && (r = i);
          const p = (e) => {
              Laya.timer.once(n ? 200 : 300, this, () => {
                (t.setMoveSpeed(0), t.setAnimSpeed(5), _++);
                let s = xe.getInstance().getRandomNumberMinMax(40, 200),
                  a = Math.random() > 0.35;
                (null != i &&
                  ((s = xe.getInstance().getRandomNumberMinMax(40, 100)),
                  (a = 1 !== _)),
                  this._tempPoint1.setTo(
                    this._cannonHarpoonMuzzle.x,
                    this._cannonHarpoonMuzzle.y,
                  ),
                  this._cannonHarpoon.localToGlobal(this._tempPoint1),
                  t.getWorldPosition(this._tempPoint2),
                  me.Math.pSubIn(this._tempPoint1, this._tempPoint2),
                  me.Math.pLength(this._tempPoint1) > 200 && a
                    ? (me.Math.pNormalizeIn(this._tempPoint1),
                      me.Math.pMultIn(this._tempPoint1, s),
                      (t.noRotate = !0),
                      t.forceMove(this._tempPoint1, n ? 0.19 : 0.39),
                      this._ropeDart.closeUp(
                        me.Math.pLength(this._tempPoint1),
                        n ? 0.1 : 0.4,
                      ))
                    : t.getKind() >= 17 && t.getKind() <= 21
                      ? (me.Math.pNormalizeIn(this._tempPoint1),
                        me.Math.pMultIn(this._tempPoint1, 50),
                        (t.noRotate = !0),
                        t.forceMove(this._tempPoint1, n ? 0.19 : 0.39),
                        this._ropeDart.closeUp(
                          me.Math.pLength(this._tempPoint1),
                          n ? 0.1 : 0.4,
                        ))
                      : xe.getInstance().shake2D(t, n ? 190 : 390, 10, 20),
                  this.isMe &&
                    ai
                      .getInstance()
                      .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_SWAY_2),
                  Laya.timer.once(n ? 200 : 400, this, () => {
                    (xe.getInstance().stopShake(t),
                      (t.noRotate = !1),
                      t.stopForceMove(),
                      t.setMoveSpeed(1),
                      t.setAnimSpeed(),
                      e && e());
                  }));
              });
            },
            g = () => {
              Laya.timer.once(n ? 100 : 200, this, () => {
                (t.setAnimSpeedForWhile(8, 0.5),
                  Laya.timer.once(n ? 100 : 300, this, () => {
                    let t;
                    const e = this._ropeDart.linkinNodes[0],
                      i = me.Math.pSub(
                        this._ropeDart.getTailPt().pos,
                        this._ropeDart.getHeadPt().pos,
                      );
                    if (r > 0 && Math.random() > 0.5) {
                      const s = Ni.getInstance().getClaw(),
                        a = Fe.getInstance().getLayerBullet();
                      (a.addChild(s),
                        s.pos(e.x, e.y),
                        (s.rotation =
                          e.rotation + this._cannonHarpoon.rotation),
                        (s.alpha = this.isMe ? 1 : 0.5),
                        s.playIdleClose(),
                        (s.visible = !0),
                        (s.active = !0),
                        (e.visible = !1),
                        (this._ropeDart.isTensioned = !1),
                        me.Math.pMultIn(i, 0.4));
                      const o =
                        xe.getInstance().getRandomNumberMinMax(30, 45) *
                        me.Math.RAD *
                        (Math.random() > 0.5 ? 1 : -1);
                      ((t = me.Math.pRotateByAngle(i, new Laya.Point(0, 0), o)),
                        this.isMe &&
                          ai
                            .getInstance()
                            .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_BREAK),
                        Laya.timer.once(n ? 300 : 500, s, () => {
                          Laya.Tween.to(
                            s,
                            {
                              alpha: 0,
                            },
                            n ? 300 : 500,
                            null,
                            Laya.Handler.create(s, () => {
                              (a.removeChild(s),
                                Ni.getInstance().recoverClaw(s));
                            }),
                          );
                        }));
                      const h = Math.random() > 0.5 ? -1 : 1,
                        l =
                          e.x +
                          xe.getInstance().getRandomNumberMinMax(100, 150),
                        r =
                          e.y +
                          xe.getInstance().getRandomNumberMinMax(-100, 100),
                        c =
                          e.rotation +
                          xe.getInstance().getRandomNumberMinMax(45, 90) * h,
                        _ = n ? 600 : 1e3;
                      Laya.Tween.to(
                        s,
                        {
                          x: l,
                          y: r,
                          rotation: c,
                        },
                        _,
                        Laya.Ease.quadOut,
                      );
                    } else {
                      const e = Math.random() > 0.5 ? 1 : -1;
                      (me.Math.pNormalizeIn(i), me.Math.pMultIn(i, 200));
                      const s =
                        xe.getInstance().getRandomNumberMinMax(40, 55) *
                        me.Math.RAD *
                        e;
                      t = me.Math.pRotateByAngle(i, new Laya.Point(0, 0), s);
                    }
                    (this.stopHarpoonMove(), e.playIdleClose());
                    const s = me.Math.pAdd(this._ropeDart.getHeadPt().pos, t);
                    (Laya.Tween.to(
                      this._ropeDart.getHeadPt().pos,
                      {
                        x: s.x,
                        y: s.y,
                      },
                      n ? 300 : 500,
                      Laya.Ease.quadOut,
                      Laya.Handler.create(this, () => {
                        ((this._ropeDart.getHeadPt().pinned = 0),
                          this._ropeDart
                            .getHeadPt()
                            .oldPos.copy(this._ropeDart.getHeadPt().pos));
                        const t = xe
                          .getInstance()
                          .convertPos(
                            h,
                            this._cannonHarpoon,
                            new Laya.Point(
                              this._cannonHarpoonMuzzle.x,
                              this._cannonHarpoonMuzzle.y,
                            ),
                          );
                        (this._ropeDart.getTailPt().pos.copy(t),
                          this._ropeDart.closeUp(999999, 0.3, () => {
                            (this.addPinDot(),
                              this._ropeDart.isVisible() && (e.visible = !0));
                          }),
                          this.playHarpoonReturn(),
                          this.isMe &&
                            ai
                              .getInstance()
                              .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_SWAY_1),
                          Laya.timer.once(150, this, () => {
                            (this.playHarpoonFail(),
                              this.isMe &&
                                ai
                                  .getInstance()
                                  .playSFXShoot(
                                    pe.CANNON_EAGLE_CLAW_HOOK_APPEAR,
                                  ));
                          }));
                      }),
                    ),
                      Laya.timer.once(1e3, this, () => {
                        l();
                      }));
                  }));
              });
            },
            d = () => {
              Laya.timer.once(n ? 200 : 500, this, () => {
                (this.returnRopeDart(),
                  this.playHarpoonReturn(),
                  Laya.timer.once(300, this, () => {
                    l();
                  }),
                  this.isMe &&
                    ai
                      .getInstance()
                      .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_SWAY_1));
              });
            },
            u = () => {
              (this._ropeDart.linkinNodes[0].playCatch(),
                t.setAnimSpeed(8),
                t.setMoveSpeed(0),
                (t.noRotate = !0),
                Laya.timer.once(300, this, () => {
                  this.isMe &&
                    ai
                      .getInstance()
                      .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_GET);
                }),
                Laya.timer.once(n ? 800 : 1500, this, () => {
                  (this.isMe &&
                    ai
                      .getInstance()
                      .playSFXShoot(pe.CANNON_EAGLE_CLAW_HOOK_SWAY_1),
                    this._tempPoint1.setTo(
                      this._cannonHarpoonMuzzle.x,
                      this._cannonHarpoonMuzzle.y,
                    ),
                    this._cannonHarpoon.localToGlobal(this._tempPoint1),
                    t.getWorldPosition(this._tempPoint2),
                    me.Math.pSubIn(this._tempPoint1, this._tempPoint2));
                  const e =
                      t.x + this._tempPoint1.x / Ze.getInstance().scaleRate.x,
                    i = t.y + this._tempPoint1.y / Ze.getInstance().scaleRate.y;
                  (t.forceMove(this._tempPoint1, n ? 0.6 : 1),
                    Laya.timer.once(n ? 600 : 1e3, this, () => {
                      (this.stopHarpoonMove(),
                        (this._ropeDart.getHeadPt().pinned = 0),
                        this._ropeDart
                          .getHeadPt()
                          .oldPos.copy(this._ropeDart.getHeadPt().pos),
                        this._ropeDart.closeUp(999999, 0.3, () => {
                          (this.addPinDot(),
                            this._ropeDart.linkinNodes[0].playIdleClose());
                        }),
                        Laya.timer.once(n ? 0 : 400, this, () => {
                          const s = t.scaleX,
                            a = t.scaleY;
                          me.Tween.union(
                            me.Tween.tweenTo(
                              t,
                              {
                                x: e,
                                y: i + 60 * t.baseFlip,
                                scaleX: 1.5 * s,
                                scaleY: 1.5 * a,
                              },
                              200,
                            ),
                            me.Tween.tweenTo(
                              t,
                              {
                                x: e,
                                y: i - 60 * t.baseFlip,
                                scaleX: 1 * s,
                                scaleY: 1 * a,
                              },
                              200,
                            ),
                            me.Tween.tweenTo(t, {}, 120),
                            me.Tween.tweenTo(
                              t,
                              {
                                alpha: 0,
                              },
                              100,
                            ),
                            me.Tween.callFunc(t, () => {
                              ((t.noRotate = !1),
                                o || (t.getKind() < 19 && (t.alpha = 1)));
                            }),
                            me.Tween.callFunc(t, () => {
                              l && l();
                            }),
                          );
                        }));
                    }));
                }));
            };
          Laya.timer.once(200, this, () => {
            const t = a ? (s ? u : d) : g;
            let e = t.bind(this);
            for (let i = 1; i <= r; ++i) e = p.bind(this, t);
            e();
          });
        } else l();
      }
      addPinDot() {
        const t = Fe.getInstance().getLayerBullet(),
          e = xe
            .getInstance()
            .convertPos(t, this._cannonHarpoonBullet, new Laya.Point(50, -50)),
          i = xe
            .getInstance()
            .convertPos(t, this._cannonHarpoonBullet, new Laya.Point(-50, -50)),
          s = xe
            .getInstance()
            .convertPos(t, this._cannonHarpoonBullet, new Laya.Point(0, 100));
        ((this._ropeDart.rope.addDot(Is.create(e.x, e.y)).pinned = 1),
          (this._ropeDart.rope.addDot(Is.create(i.x, i.y)).pinned = 1),
          (this._ropeDart.rope.addDot(Is.create(s.x, s.y)).pinned = 1),
          this._ropeDart.rope.addStick(
            0,
            this._ropeDart.rope.dots.length - 3,
            10,
          ),
          this._ropeDart.rope.addStick(
            0,
            this._ropeDart.rope.dots.length - 2,
            10,
          ),
          this._ropeDart.rope.addStick(
            1,
            this._ropeDart.rope.dots.length - 1,
            10,
          ));
      }
      playEffectChangeBet() {
        6 !== this.bulletKind &&
          (this._setEnableEffectChangeBet(!0),
          this._animatorCannon.gotoAndStopByFrame("change_bet", 0, 0),
          this._animatorEffectChangeBet.gotoAndStopByFrame("change_bet", 0, 0),
          this._animatorCannon.play("change_bet"),
          this._animatorEffectChangeBet.play("change_bet"),
          Laya.timer.clear(this, this._setEnableEffectChangeBet),
          Laya.timer.once(333, this, this._setEnableEffectChangeBet, [!1]));
      }
      setCurrentFirePower(t) {
        this._playerData.currentFirePower !== t &&
          ((this._playerData.currentFirePower = t),
          (this._txtBetValue.text = xe
            .getInstance()
            .formatNumber(this._playerData.currentFirePower)),
          this.isMe &&
            (Fe.getInstance().gameMain.setTxtCoinSpecialCannon(
              this._playerData.currentFirePower,
            ),
            ve.getInstance().updateByBet()));
      }
      getCurrentFirePower() {
        if (this._playerData) return this._playerData.currentFirePower;
      }
      getCurrentThunderPower() {
        return Be.getInstance().getThunderPowerAtIndex(this.indexFirePower);
      }
      getCurrentCoin() {
        return this._playerData && this._playerData.coin;
      }
      setCoin(t) {
        ((this._playerData.coin = t),
          this._txtUserCoin &&
            (this._txtUserCoin.text = xe
              .getInstance()
              .formatNumber(this._playerData.coin)));
      }
      get isMe() {
        return this._playerData && this._playerData.isMe;
      }
      set isMe(t) {
        this._playerData.isMe = t;
      }
      get indexFirePower() {
        return this._indexFirePower;
      }
      set indexFirePower(t) {
        (t < 0
          ? (t = Be.getInstance().listFirePower.length - 1)
          : t >= Be.getInstance().listFirePower.length && (t = 0),
          (this._indexFirePower = t));
      }
      changeCannon(t) {
        if (this.bulletKind !== t)
          switch (
            (this.hideOldCannon(this.bulletKind), (this.bulletKind = t), t)
          ) {
            case 1:
              ((this._cannon.visible = !0),
                (this._cannon.active = !0),
                (this._cannonImage.visible = !0),
                (this._cannonImage.active = !0),
                this.changeCannonNormal(),
                this.playEffectChangeBet());
              break;
            case 6:
              ((this._cannon.visible = !0),
                (this._cannon.active = !0),
                (this._cannonImage.visible = !0),
                (this._cannonImage.active = !0),
                (this._cannonImage.skin = oe.CANNON_LASER),
                this._effLaserGatheringAnimator.gotoAndStopByFrame(
                  "gathering",
                  0,
                  0,
                ),
                this._effLaserGatheringAnimator.play("gathering"),
                this._particleGathering1Script.resetSystem(),
                this._particleGathering2Script.resetSystem(),
                this._particleGathering3Script.resetSystem(),
                (this._effLaserGathering.visible = !0));
              break;
            case 2:
              ((this._cannonShark.rotation = this._cannon.rotation),
                (this._cannonShark.visible = !0),
                (this._cannonShark.active = !0),
                this._cannonSharkAnimator.play("idle", 0, 0),
                this._cannonSharkAnimator.play("change", 1, 0),
                this._cannonShark.addChild(this._effShootSpecial),
                this.playEffectChangeBet());
              break;
            case 3:
              ((this._cannonJellyfish.rotation = this._cannon.rotation),
                (this._cannonJellyfish.visible = !0),
                (this._cannonJellyfish.active = !0),
                (this._cannonJellyfishParticle.visible = !0),
                (this._cannonJellyfishParticle.active = !0),
                this._cannonJellyfishAnimator.play(
                  "idle_lv_jellyfish_02",
                  0,
                  0,
                ),
                this._cannonJellyfishAnimator.play("change_jellyfish", 1, 0),
                this._cannonJellyfishParticleScript.resetSystem(),
                this._cannonJellyfish.addChild(this._effShootSpecial),
                this.playEffectChangeBet());
              break;
            case 4: {
              (this._cannonHarpoon || this._initCannonHarpoon(),
                (this._cannonHarpoon.rotation = this._cannon.rotation));
              const t = Fe.getInstance().getLayerBullet(),
                e = xe
                  .getInstance()
                  .convertPos(
                    t,
                    this._cannonHarpoon,
                    new Laya.Point(
                      this._cannonHarpoonMuzzle.x,
                      this._cannonHarpoonMuzzle.y,
                    ),
                  ),
                i = me.Math.pNormalize(
                  me.Math.pSub(
                    e,
                    xe
                      .getInstance()
                      .convertPos(t, this._cannonHarpoon, new Laya.Point(0, 0)),
                  ),
                ),
                s = me.Math.pAdd(e, me.Math.pMult(i, this._ropeDart.grabLen));
              (this._ropeDart.getTailPt().pos.copy(e),
                this._ropeDart.getHeadPt().pos.copy(s),
                (this._cannonHarpoon.visible = !0),
                (this._cannonHarpoon.active = !0),
                this._ropeDart.setVisible(!0),
                this.playEffectChangeBet());
              break;
            }
          }
      }
      hideOldCannon(t) {
        return 2 === t
          ? ((this._cannonShark.visible = !1),
            (this._cannonShark.active = !1),
            this._cannonSharkAnimator.stop(),
            void this._setEnableEffectSpecialCannon(!1))
          : 3 === t
            ? ((this._cannonJellyfish.visible = !1),
              (this._cannonJellyfish.active = !1),
              this._cannonJellyfishAnimator.stop(),
              (this._cannonJellyfishParticle.visible = !1),
              (this._cannonJellyfishParticle.active = !1),
              this._cannonJellyfishParticleScript.stopSystem(),
              void this._setEnableEffectSpecialCannon(!1))
            : 4 === t
              ? ((this._cannonHarpoon.visible = !1),
                (this._cannonHarpoon.active = !1),
                this._ropeDart.clearRope(),
                this._ropeDart.setIdleGrabber(
                  Fe.getInstance()
                    .getLayerBullet()
                    .globalToLocal(
                      this._cannonHarpoon.localToGlobal(
                        new Laya.Point(
                          this._cannonHarpoonMuzzle.x,
                          this._cannonHarpoonMuzzle.y,
                        ),
                      ),
                    ),
                ),
                void this._ropeDart.setVisible(!1))
              : ((this._cannonImage.visible = !1),
                (this._cannonImage.active = !1),
                void (
                  6 === t &&
                  (this.stopLaser(),
                  this._effLaserGatheringAnimator.stop(),
                  this._particleGathering1Script.stopSystem(),
                  this._particleGathering2Script.stopSystem(),
                  this._particleGathering3Script.stopSystem(),
                  (this._effLaserGathering.visible = !1))
                ));
      }
      startTarget(t) {
        Fe.getInstance().gameMain.isOutOfCoin()
          ? this.stopLaser()
          : ((null == this._targetFish ||
              t.getId() != this._targetFish.getId()) &&
              (this.clearAllBulletLaser(), (this._laser.visible = !1)),
            (this._targetFish = t),
            this.updateTarget(),
            (this._laser.visible = !0),
            (this._effLaserHead.visible = !0),
            this._effLaserHeadAnimator.gotoAndStopByFrame("laser_head", 0, 0),
            this._effLaserHeadAnimator.play("laser_head"),
            Laya.timer.frameLoop(1, this, this.updateTarget),
            this.isMe && ai.getInstance().playSFXLoop(pe.CANNON_LASER_SHOOT));
      }
      changeTarget(t) {
        Fe.getInstance().gameMain.isOutOfCoin()
          ? this.stopLaser()
          : (this.clearAllBulletLaser(),
            (this._laser.visible = !1),
            (this._targetFish = t),
            this.updateTarget(),
            (this._laser.visible = !0),
            (this._effLaserHead.visible = !0),
            this._effLaserHeadAnimator.gotoAndStopByFrame("laser_head", 0, 0),
            this._effLaserHeadAnimator.play("laser_head"),
            this._effLaserShootAnimator.gotoAndStopByFrame(
              "laser_shoot",
              0,
              60,
            ),
            this._effLaserShootParticle1Script.stopSystem(),
            this._effLaserShootParticle2Script.stopSystem(),
            Laya.timer.frameLoop(1, this, this.updateTarget),
            this.isMe && ai.getInstance().playSFXLoop(pe.CANNON_LASER_SHOOT));
      }
      startTargetNormalLock(t) {
        this._targetFish = t;
      }
      stopNormalLock() {
        this._targetFish = null;
      }
      getIconCoinWorldPoint() {
        return new Laya.Point().copy(this._iconCoinWorldPoint);
      }
      getWinCoinWorldPoint() {
        return new Laya.Point().copy(this._winCoinWorldPoint);
      }
      getCanonWorldPoint() {
        return new Laya.Point().copy(this._pnlCannonWorldPoint);
      }
      getCoinRefundedWorldPoint() {
        return new Laya.Point().copy(this._coinRefundedWorldPoint);
      }
      updateSpecialPoint() {
        let t = this._pnlInfo.getChildByName("bg_coin"),
          e = t.getChildByName("icon_coin"),
          i = this._pnlInfo.getChildByName("catch_win_coin");
        ((this._iconCoinWorldPoint = t.localToGlobal(new Laya.Point(e.x, e.y))),
          (this._winCoinWorldPoint = this._pnlInfo.localToGlobal(
            new Laya.Point(i.x, i.y),
          )),
          (this._pnlCannonWorldPoint = this._cannonUI.localToGlobal(
            new Laya.Point(this._pnlCannon.x, this._pnlCannon.y),
          )),
          (this._coinRefundedWorldPoint = this._pnlInfo.localToGlobal(
            new Laya.Point(t.x, i.y),
          )));
      }
      _initUI(t, e) {
        ((this._ui = t),
          (this._cannonUI = e),
          (this._pnlCannon = this._cannonUI.getChildByName("pnl_cannon")),
          (this._pnlBet = this._ui.getChildByName("pnl_bet")),
          (this._pnlInfo = this._ui.getChildByName("pnl_info")),
          (this._pnlTxt = this._ui.getChildByName("pnl_txt")),
          (this._pnlLocation = this._ui.getChildByName("pnl_your_location")),
          (this._pnlLocation.active = !1),
          this._initPnlCannon(),
          this._initPnlBet(),
          this._initPnlInfo(),
          this.updateSpecialPoint(),
          (this._txtBetValue = this._pnlTxt.getChildByName("txt_bet_value")),
          (this._countBullet = 0));
      }
      _initPnlCannon() {
        this._pnlCannon &&
          ((this._cannon = this._pnlCannon.getChildByName("cannon")),
          (this._cannonImage = this._cannon.getChildByName("cannon")),
          (this._effectShoot = this._cannon.getChildByName("eff_shoot")),
          (this._cannonMuzzle = this._cannon.getChildByName("muzzle")),
          (this._baseCannonRotation = this._cannon.rotation),
          (this._laser = this._cannon.getChildByName("laser")),
          (this._effLaserGathering = this._cannon.getChildByName("gathering")),
          (this._effLaserShoot =
            this._cannon.getChildByName("eff_shoot_laser")),
          (this._effLaserHead = this._cannon.getChildByName("eff_laser_head")),
          (this._cannonImage.zOrder = 1),
          (this._effLaserGathering.zOrder = 1),
          (this._effLaserShoot.zOrder = 1),
          (this._effLaserHead.zOrder = 1),
          (this._effLaserHeadAnimator = this._effLaserHead.getComponent(
            Laya.Animator2D,
          )),
          (this._effLaserShootAnimator = this._effLaserShoot.getComponent(
            Laya.Animator2D,
          )),
          (this._effLaserGatheringAnimator =
            this._effLaserGathering.getComponent(Laya.Animator2D)),
          (this._effLaserShootParticle1 =
            this._effLaserShoot.getChildByName("particle_1")),
          (this._effLaserShootParticle2 =
            this._effLaserShoot.getChildByName("particle_2")),
          (this._effLaserShootParticle1Script =
            this._effLaserShootParticle1.getComponent(Laya.Script)),
          (this._effLaserShootParticle2Script =
            this._effLaserShootParticle2.getComponent(Laya.Script)),
          (this._particleGathering1 =
            this._effLaserGathering.getChildByName("particle_1")),
          (this._particleGathering2 =
            this._effLaserGathering.getChildByName("particle_2")),
          (this._particleGathering3 =
            this._effLaserGathering.getChildByName("particle_3")),
          (this._particleGathering1Script =
            this._particleGathering1.getComponent(Laya.Script)),
          (this._particleGathering2Script =
            this._particleGathering2.getComponent(Laya.Script)),
          (this._particleGathering3Script =
            this._particleGathering3.getComponent(Laya.Script)),
          (this._effectChangeBet = this._pnlCannon.getChildByName("effect")),
          (this._animatorCannon = this._cannonImage.getComponent(
            Laya.Animator2D,
          )),
          (this._animatorEffectChangeBet = this._effectChangeBet.getComponent(
            Laya.Animator2D,
          )),
          (this._animatorEffectShoot = this._effectShoot.getComponent(
            Laya.Animator2D,
          )),
          (this._effShootSpecial =
            this._pnlCannon.getChildByName("eff_shoot_special")),
          (this._animatorEffShootSpecial = this._effShootSpecial.getComponent(
            Laya.Animator2D,
          )),
          this._initCannonShark(),
          this._initCannonJellyfish(),
          this._setEnableEffectChangeBet(!1),
          this._setEnableEffectSpecialCannon(!1));
      }
      _setEnableEffectChangeBet(t) {
        ((this._effectChangeBet.visible = t),
          (this._effectChangeBet.active = t));
      }
      _initPnlBet() {
        this._pnlBet &&
          ((this._btnBetMinus = this._pnlBet.getChildByName("btn_bet_minus")),
          (this._btnBetPlus = this._pnlBet.getChildByName("btn_bet_plus")),
          (this._btnBetMinus.visible = !1),
          (this._btnBetPlus.visible = !1));
      }
      _initPnlInfo() {
        this._pnlInfo &&
          ((this._txtUsername = this._pnlTxt.getChildByName("txt_username")),
          (this._txtUsername.text = ""),
          (this._txtUserCoin = this._pnlTxt.getChildByName("txt_coin")),
          (this._effTxtUserCoinAnimator = this._txtUserCoin.getComponent(
            Laya.Animator2D,
          )),
          (this._txtWaitingToJoin = this._ui.getChildByName(
            "txt_waiting_to_join",
          )));
      }
      _initLanguage() {
        let t = Ye.getInstance().getLanguageName(),
          e = this._pnlLocation.getChildByName("txt_your_location");
        ((this._txtBet = this._pnlBet.getChildByName("txt_bet")),
          "en" != t &&
            (Ye.getInstance().localizeImageText(
              this._txtWaitingToJoin,
              oe.TXT_WAITING_TO_JOIN,
            ),
            Ye.getInstance().localizeImageText(e, oe.TXT_YOUR_LOCATION),
            Ye.getInstance().localizeImageText(this._txtBet, oe.TXT_BET)));
      }
      _initCannonShark() {
        ((this._cannonShark = this._pnlCannon.getChildByName("cannon_shark")),
          (this._cannonShark.visible = !1),
          (this._cannonShark.active = !1),
          (this._cannonSharkMuzzle =
            this._cannonShark.getChildByName("muzzle")),
          (this._cannonSharkAnimator = this._cannonShark.getComponent(
            Laya.Animator2D,
          )));
      }
      _initCannonJellyfish() {
        this._cannon &&
          ((this._cannonJellyfish =
            this._pnlCannon.getChildByName("cannon_jellyfish")),
          (this._cannonJellyfish.visible = !1),
          (this._cannonJellyfish.active = !1),
          (this._cannonJellyfishMuzzle =
            this._cannonJellyfish.getChildByName("muzzle")),
          (this._cannonJellyfishAnimator = this._cannonJellyfish.getComponent(
            Laya.Animator2D,
          )),
          (this._cannonJellyfishParticle = this._cannonJellyfish
            .getChildByName("body")
            .getChildByName("bullet")
            .getChildByName("body")
            .getChildByName("particle_system")),
          (this._cannonJellyfishParticleScript =
            this._cannonJellyfishParticle.getComponent(Laya.Script)),
          (this._cannonJellyfishParticle.active = !1),
          (this._cannonJellyfishParticle.visible = !1));
      }
      _initCannonHarpoon() {
        if (!this._pnlCannon) return;
        ((this._cannonHarpoon = Laya.loader.getRes(he.CANNON_HARPOON).create()),
          (this._cannonHarpoon.visible = !1),
          (this._cannonHarpoon.active = !1),
          this._pnlCannon.addChild(this._cannonHarpoon),
          (this._cannonHarpoonMuzzle =
            this._cannonHarpoon.getChildByName("muzzle")),
          (this._cannonHarpoonFire =
            this._cannonHarpoon.getChildByName("fire")),
          (this._cannonHarpoonFireAnimator2D =
            this._cannonHarpoonFire.getComponent(Laya.Animator2D)),
          (this._cannonHarpoonFireParticleBubble =
            this._cannonHarpoonFire.getChildByName("particle_system_bubble")),
          (this._cannonHarpoonFireParticleChip =
            this._cannonHarpoonFire.getChildByName("particle_system_chip")),
          (this._cannonHarpoonFireParticleBubbleScript =
            this._cannonHarpoonFireParticleBubble.getComponent(Laya.Script)),
          (this._cannonHarpoonFireParticleChipScript =
            this._cannonHarpoonFireParticleChip.getComponent(Laya.Script)),
          (this._cannonHarpoonBullet =
            this._cannonHarpoon.getChildByName("bullet")));
        const t = Fe.getInstance().getLayerBullet();
        this._ropeDart = new Ps(t);
        const e = t.globalToLocal(
          this._cannonHarpoon.localToGlobal(
            new Laya.Point(
              this._cannonHarpoonMuzzle.x,
              this._cannonHarpoonMuzzle.y,
            ),
          ),
        );
        (this._ropeDart.setVisible(!1),
          this._ropeDart.setIdleGrabber(e),
          (this._cannonHarpoon.alpha = this._cannonImage.alpha),
          this._ropeDart.setAlpha(this._cannonImage.alpha));
      }
      playAniJellyfishShoot() {
        (this._cannonJellyfishAnimator.play("shoot_jellyfish", 1, 0),
          this._cannonJellyfishAnimator.play("idle_lv_jellyfish_02", 0, 0));
      }
      playEffectSpecialCannon() {
        (this._setEnableEffectSpecialCannon(!0),
          this._animatorEffShootSpecial.play("eff_shoot_special", 0, 0),
          Laya.timer.clear(this, this._setEnableEffectSpecialCannon),
          Laya.timer.once(666, this, this._setEnableEffectSpecialCannon, [!1]));
      }
      _setEnableEffectSpecialCannon(t) {
        ((this._effShootSpecial.visible = t),
          (this._effShootSpecial.active = t));
      }
      setDefaultJellyfish() {
        let t = this._cannonJellyfish
            .getChildByName("body")
            .getChildByName("bullet"),
          e = this._cannonJellyfish
            .getChildByName("body")
            .getChildByName("bullet")
            .getChildByName("body");
        ((t.x = 0), (t.y = -55), (e.x = 0), (e.y = 22), (e.rotation = 0));
      }
      showCannonNormal() {
        this._cannonImage.visible ||
          this._cannonImage.active ||
          ((this._cannonImage.visible = !0), (this._cannonImage.active = !0));
      }
      showLocation() {
        this._pnlLocation &&
          ((this._pnlLocation.active = !0),
          (this._pnlLocation.visible = !0),
          (this._arrowLocation = this._pnlLocation.getChildByName("img_arrow")),
          this.moveArrowLocation());
      }
      moveArrowLocation() {
        const t = this._arrowLocation.y;
        me.Tween.union(
          me.Tween.tweenTo(
            this._arrowLocation,
            {
              y: t - 15,
            },
            550,
          ),
          me.Tween.tweenTo(
            this._arrowLocation,
            {
              y: t,
            },
            550,
          ),
          me.Tween.callFunc(this, this.moveArrowLocation.bind(this)),
        );
      }
      hideLocation() {
        this._pnlLocation.visible &&
          ((this._pnlLocation.visible = !1),
          (this._pnlLocation.active = !1),
          Laya.Tween.clearTween(this._arrowLocation));
      }
      onBtnBetMinusTouches() {
        this.indexFirePower = this.indexFirePower - 1;
        const t = Be.getInstance().getFirePowerAtIndex(this.indexFirePower);
        (this.setCurrentFirePower(t),
          this.playEffectChangeBet(),
          this.hideLocation(),
          this.changeCannonNormal(),
          ai.getInstance().playSFXShoot(pe.CHANGE_BET));
      }
      onBtnBetPlusTouches() {
        this.indexFirePower = this.indexFirePower + 1;
        const t = Be.getInstance().getFirePowerAtIndex(this.indexFirePower);
        (this.setCurrentFirePower(t),
          this.playEffectChangeBet(),
          this.hideLocation(),
          this.changeCannonNormal(),
          ai.getInstance().playSFXShoot(pe.CHANGE_BET));
      }
      getAngle(t, e) {
        let i = t.y < e.y;
        ((t = {
          x: e.x - t.x,
          y: e.y - t.y,
        }),
          (e = {
            x: 1,
            y: 0,
          }));
        let s = me.Math.pAngle(t, e);
        return (i && (s = 2 * Math.PI - s), s);
      }
      stopLaser() {
        (Laya.timer.clear(this, this.updateTarget),
          (this._laser.visible = !1),
          (this._effLaserHead.visible = !1),
          (this._effLaserShoot.visible = !1),
          this._effLaserHeadAnimator.stop(),
          this._effLaserShootAnimator.stop(),
          this.clearAllBulletLaser(),
          (this._targetFish = null),
          this.isMe && ai.getInstance().stopSFX(pe.CANNON_LASER_SHOOT));
      }
      updateTarget() {
        if (null == this._targetFish || 0 == this.targetFish.getIsAlive())
          return void this.stopLaser();
        (this._targetFish.getWorldPosition(this._tempPoint1),
          this._tempPoint2.copy(this._tempPoint1),
          this._pnlCannon.globalToLocal(this._tempPoint1),
          (this._tempPoint3.x = this._cannon.x),
          (this._tempPoint3.y = this._cannon.y));
        const t = this.getAngle(this._tempPoint3, this._tempPoint1),
          e = -(me.Math.RADIANS_TO_DEGREES(t) - 90);
        ((this._cannon.rotation = e),
          this._cannon.globalToLocal(this._tempPoint2),
          this._effLaserHead.pos(this._tempPoint2.x, this._tempPoint2.y),
          (this._tempPoint3.x = this._laser.x),
          (this._tempPoint3.y = this._laser.y));
        const i =
          me.Math.pDistance(this._tempPoint3, this._tempPoint2) /
          this._laser.height;
        ((this._laser.scaleY = i),
          (this._laser.visible = !0),
          this.showEffectLaser());
      }
      autoSelectFirePower() {
        const t = this.getCurrentCoin(),
          e = (Kt[this.bulletKind] || 1) * this.getCurrentFirePower();
        if (this.getCurrentFirePower() > 0 && t < e)
          for (let e = Be.getInstance().listFirePower.length - 1; e >= 0; e--) {
            let i = Be.getInstance().getFirePowerAtIndex(e);
            if (0 !== Math.floor(t / (i * Kt[this.bulletKind]))) {
              ((this.indexFirePower = e), this.setCurrentFirePower(i));
              break;
            }
          }
      }
      showEffectLaser() {
        if (!(0.001 * Date.now() - this._lastTime > Gt[6].delayShoot)) return;
        if (
          ((this._lastTime = 0.001 * Date.now()),
          Fe.getInstance().gameMain.isOutOfCoinPlayer(this))
        )
          return void this.stopLaser();
        const t = this._normalLaserCount >= 10,
          e = this.getBulletFromPool(t);
        this._cannon.addChild(e);
        let i = 1,
          s = 0.7;
        (this._normalLaserCount >= 10
          ? ((i = 1.5),
            (s = 0.75),
            (this._normalLaserCount = 0),
            this.playShootLaser())
          : ++this._normalLaserCount,
          e.pos(this._effLaserGathering.x, this._effLaserGathering.y),
          (e.zOrder = 0),
          (this._tempPoint3.x = this._effLaserGathering.x),
          (this._tempPoint3.y = this._effLaserGathering.y));
        const a =
          me.Math.pDistance(this._tempPoint3, this._tempPoint2) / Gt[6].speed;
        if (
          ((e.scaleX = 0.5 * i),
          (e.scaleY = 0.5 * s),
          t
            ? this._listActiveBulletLaserBig.push(e)
            : this._listActiveBulletLaser.push(e),
          this.isMe && this.autoSelectFirePower(),
          this.setCoin(this._playerData.coin - this.getCurrentFirePower()),
          this.isMe &&
            !g &&
            ((Be.getInstance().currentBulletId += 1),
            Xe.getInstance().sendFireBullet(
              Be.getInstance().currentBulletId,
              this.getCurrentFirePower(),
              (this._targetFish && this._targetFish.getId()) || T,
              1,
              0,
              !0,
              !0,
            ),
            this.onBulletHitFish(
              Be.getInstance().currentBulletId,
              1,
              this.getCurrentFirePower(),
              this._targetFish,
              !0,
            ),
            Fe.getInstance().gameMain.isOutOfCoin()))
        )
          return (
            this.stopLaser(),
            void Fe.getInstance().gameMain.showPopupOutOfCoin(null)
          );
        if (!p && g) {
          let t = !0;
          switch (this._targetFish.getKind()) {
            case 16:
            case 19:
              t = !1;
          }
          xe.getInstance().getRandomNumberMinMax(1, 10) >= 10 &&
            Laya.stage.event("game.catch_fish", {
              seatId: 0,
              userCoin: 9999,
              bulletKind: 2,
              listFishHit: [
                {
                  fishId: this._targetFish.getId(),
                },
              ],
              listFishDead: [
                {
                  fishId: this._targetFish.getId(),
                  fishKind: this._targetFish.getKind(),
                  isRemove: t,
                  score: xe.getInstance().getRandomNumberMinMax(10, 200),
                },
              ],
            });
        }
        (me.Tween.union(
          me.Tween.tweenTo(
            e,
            {
              y: 0.8 * this._tempPoint2.y,
            },
            0.8 * a,
            Laya.Ease.linearIn,
          ),
          me.Tween.callFunc(this, () => {
            if (!this._targetFish) return void this.removeBullet(e, t);
            (this._targetFish.getWorldPosition(this._tempPoint1),
              this._cannon.globalToLocal(this._tempPoint1),
              (this._tempPoint3.x = e.x),
              (this._tempPoint3.y = e.y));
            const i =
              me.Math.pDistance(this._tempPoint3, this._tempPoint1) /
              Gt[6].speed;
            me.Tween.union(
              me.Tween.tweenTo(
                e,
                {
                  y: this._tempPoint1.y,
                },
                i,
                Laya.Ease.linearIn,
              ),
              me.Tween.callFunc(this, () => {
                ((e.visible = !1),
                  this._targetFish &&
                    this._targetFish.getIsAlive() &&
                    (t &&
                      this.callbackLaserHit &&
                      this.callbackLaserHit(
                        this._targetFish.getWorldPosition(),
                        this._cannon.rotation,
                        this.isMe,
                      ),
                    this._targetFish.playCollisionEffect()));
              }),
            );
          }),
        ),
          me.Tween.union(
            me.Tween.tweenTo(
              e,
              {
                scaleX: i,
                scaleY: s,
              },
              0.5 * a,
              Laya.Ease.linearIn,
            ),
            me.Tween.tweenTo(
              e,
              {
                scaleX: 0.7 * i,
                scaleY: 0.7 * s,
              },
              a,
              Laya.Ease.linearIn,
            ),
            me.Tween.callFunc(this, this.removeBullet.bind(this, e, t)),
          ),
          (e.visible = !0));
      }
      removeBullet(t, e = !1) {
        if (e)
          for (let e = 0; e < this._listActiveBulletLaserBig.length; ++e)
            this._listActiveBulletLaserBig[e] === t &&
              this._listActiveBulletLaserBig.splice(e, 1);
        else
          for (let e = 0; e < this._listActiveBulletLaser.length; ++e)
            this._listActiveBulletLaser[e] === t &&
              this._listActiveBulletLaser.splice(e, 1);
        this.returnBulletToPool(t, e);
      }
      returnBulletToPool(t, e = !1) {
        e
          ? Ni.getInstance().recoverLaserBig(t)
          : Ni.getInstance().recoverLaser(t);
      }
      clearAllBulletLaser() {
        this._normalLaserCount = 0;
        for (let t = 0; t < this._listActiveBulletLaser.length; ++t) {
          let e = this._listActiveBulletLaser[t];
          this.returnBulletToPool(e);
        }
        this._listActiveBulletLaser = [];
        for (let t = 0; t < this._listActiveBulletLaserBig.length; ++t) {
          let e = this._listActiveBulletLaserBig[t];
          this.returnBulletToPool(e, !0);
        }
        this._listActiveBulletLaserBig = [];
      }
      getBulletFromPool(t = !1) {
        let e = null;
        return (
          (e = t
            ? Ni.getInstance().getLaserBig()
            : Ni.getInstance().getLaser()),
          e
        );
      }
      playShootLaser() {
        (this._effLaserShootAnimator.gotoAndStopByFrame("laser_shoot", 0, 0),
          this._effLaserShootAnimator.play("laser_shoot"),
          this._effLaserShootParticle1Script.resetSystem(),
          this._effLaserShootParticle2Script.resetSystem(),
          Laya.timer.once(500, this, () => {
            (this._effLaserShootParticle1Script.stopSystem(),
              this._effLaserShootParticle2Script.stopSystem());
          }),
          (this._effLaserShoot.visible = !0));
      }
      onBulletHitFish(t, e, i, s, a = !1) {
        if (
          s &&
          this.isMe &&
          (1 === e && (this._countBullet -= 1),
          Xe.getInstance().sendBulletHitFish(
            t,
            e,
            i,
            [
              {
                fishId: s.getId(),
                fishKind: s.getKind(),
              },
            ],
            a,
          ),
          g)
        ) {
          let t = ve.getInstance().getThunderPower() + Kt[e] * i;
          ve.getInstance().updateByServer(t);
        }
      }
      onBulletJellyfishExplode(t, e, i = !1) {
        t && this._callbackJellyExplode && this._callbackJellyExplode(t, e, i);
      }
      setAlphaGroup(t) {
        ((this._cannonImage.alpha = t),
          (this._effectShoot.alpha = t),
          (this._laser.alpha = t),
          (this._effLaserGathering.alpha = t),
          (this._effLaserShoot.alpha = t),
          (this._effLaserHead.alpha = t),
          (this._cannonShark.alpha = t),
          (this._cannonJellyfish.alpha = t),
          this._cannonHarpoon &&
            ((this._cannonHarpoon.alpha = t), this._ropeDart.setAlpha(t)));
      }
      playAddCoin() {
        (this._effTxtUserCoinAnimator.gotoAndStopByFrame(
          "effect_add_coin",
          0,
          0,
        ),
          this._effTxtUserCoinAnimator.play("effect_add_coin"));
      }
      changeCannonNormal() {
        if (6 === this.bulletKind) return;
        let t = Be.getInstance().listFirePower.length,
          e = (this._indexFirePower + 1) / t;
        1 == t || e < 1 / 3
          ? ((this._cannonImage.skin = oe.CANNON_NORMAL_1), (Gt[1].skin = 1))
          : e <= 2 / 3
            ? ((this._cannonImage.skin = oe.CANNON_NORMAL_2), (Gt[1].skin = 2))
            : e <= 1
              ? ((this._cannonImage.skin = oe.CANNON_NORMAL_3),
                (Gt[1].skin = 3))
              : ((this._cannonImage.skin = oe.CANNON_NORMAL_1),
                (Gt[1].skin = 1));
      }
      updateCannonNormal(t, e) {
        let i = Be.getInstance().listFirePower.indexOf(e),
          s = Be.getInstance().listFirePower.length,
          a = (i + 1) / s;
        1 == s
          ? (this._cannonImage.skin = oe.CANNON_NORMAL_1)
          : a < 1 / 3
            ? ((this._cannonImage.skin = oe.CANNON_NORMAL_1),
              t.changeBulletNormal(oe.BULLET_NORMAL_1),
              t.changeBulletExplodeNormal(oe.BULLET_EXPLODE_1))
            : a <= 2 / 3
              ? ((this._cannonImage.skin = oe.CANNON_NORMAL_2),
                t.changeBulletNormal(oe.BULLET_NORMAL_2),
                t.changeBulletExplodeNormal(oe.BULLET_EXPLODE_2))
              : a <= 1
                ? ((this._cannonImage.skin = oe.CANNON_NORMAL_3),
                  t.changeBulletNormal(oe.BULLET_NORMAL_3),
                  t.changeBulletExplodeNormal(oe.BULLET_EXPLODE_3))
                : ((this._cannonImage.skin = oe.CANNON_NORMAL_1),
                  t.changeBulletNormal(oe.BULLET_NORMAL_1),
                  t.changeBulletExplodeNormal(oe.BULLET_EXPLODE_1));
      }
      getRewardWorldPosition(t) {
        return 0 === this._seatId || 1 === this._seatId
          ? this._ui.localToGlobal(
              new Laya.Point(
                0 + t.x / this._ui.scaleX,
                0 + t.y / this._ui.scaleY,
              ),
            )
          : 2 === this._seatId || 3 === this._seatId
            ? this._ui.localToGlobal(
                new Laya.Point(
                  0 + t.x / this._ui.scaleX,
                  0 - t.y / this._ui.scaleY,
                ),
              )
            : void 0;
      }
      playHarpoonFire() {
        (this._cannonHarpoonFireAnimator2D.gotoAndStopByFrame("fire", 0, 0),
          this._cannonHarpoonFireAnimator2D.play("fire"),
          this._cannonHarpoonFireParticleBubbleScript.resetSystem(),
          this._cannonHarpoonFireParticleChipScript.resetSystem(),
          Laya.timer.once(683, this, () => {
            (this._cannonHarpoonFireParticleBubbleScript.stopSystem(),
              this._cannonHarpoonFireParticleChipScript.stopSystem());
          }));
      }
      playHarpoonReturn() {
        (this._cannonHarpoonFireAnimator2D.gotoAndStopByFrame("return", 0, 0),
          this._cannonHarpoonFireAnimator2D.play("return"),
          this._cannonHarpoonFireParticleChipScript.resetSystem(),
          Laya.timer.once(600, this, () => {
            this._cannonHarpoonFireParticleChipScript.stopSystem();
          }));
      }
      playHarpoonFail() {
        (this._cannonHarpoonFireAnimator2D.gotoAndStopByFrame("fail", 0, 0),
          this._cannonHarpoonFireAnimator2D.play("fail"),
          this._cannonHarpoonFireParticleBubbleScript.resetSystem(),
          this._cannonHarpoonFireParticleChipScript.resetSystem(),
          Laya.timer.once(333, this, () => {
            (this._cannonHarpoonFireParticleBubbleScript.stopSystem(),
              this._cannonHarpoonFireParticleChipScript.stopSystem());
          }));
      }
      isHarpoonDone() {
        return 0 == this._cannonHarpoonState;
      }
    },
    Ns = class extends As {
      constructor(t, e) {
        super(t, e, !0);
      }
    },
    Bs = class {
      constructor(t, e) {
        ((this._isSelected = !1),
          (this._isFirstLoadSpine = !0),
          (this.waitingLoad = !0),
          (this._index = e),
          (this._fish = t),
          (this._fishKind = Es.FISH_KIND_BY_INDEX[e]),
          (this._fish.tag = this._fishKind[0].toString()),
          (this.bgLight = this._fish.getChildByName("bg_light")),
          (this.bgSelected = this._fish.getChildByName("bg_selected")),
          (this.bgSelected.zOrder = 2),
          this.initLoading());
      }
      get spriteFish() {
        return this._fish;
      }
      get fishKind() {
        return this._fishKind;
      }
      get isSelected() {
        return this._isSelected;
      }
      set isSelected(t) {
        this._isSelected = t;
      }
      showSelect() {
        this._isSelected ||
          Es.LIST_FISH_SHOW.indexOf(this._index) < 0 ||
          ((this._isSelected = !0),
          (this.bgLight.visible = !0),
          (this.bgSelected.visible = !0));
      }
      hideSelect() {
        this._isSelected &&
          ((this._isSelected = !1),
          (this.bgLight.visible = !1),
          (this.bgSelected.visible = !1));
      }
      handleTouches() {
        (this._isSelected ? this.hideSelect() : this.showSelect(),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      playSpine() {
        return _(this, null, function* () {
          if (this.spineFish && this.spineFish.visible) return;
          let t = this.fishKind[0],
            e = zt[t];
          switch (
            (t >= 7 && t <= 15
              ? (yield Ni.getInstance()
                  .getFishRun(t)
                  .then((t) => {
                    this.spineFish = t;
                  }),
                this.spineFish.play(0, !0))
              : ((this.spineFish = Ni.getInstance().getSpineFish(t)),
                (this.spineFish.skinName = (e && e.spineSkinName) || "default"),
                this.spineFish &&
                  this.spineFish.templet &&
                  this.spineFish.play("run", !0)),
            this._isFirstLoadSpine && (this.spineFish.alpha = 0),
            (this.spineFish.visible = !0),
            (this.spineFish.active = !0),
            this._fish.addChild(this.spineFish),
            t)
          ) {
            case 7:
              (this.spineFish.pos(60, 55),
                this.spineFish.scale(0.3, 0.3),
                (this.spineFish.rotation = -25));
              break;
            case 10:
              (this.spineFish.pos(50, 50),
                this.spineFish.scale(0.27, 0.27),
                (this.spineFish.rotation = -40));
              break;
            case 13:
              (this.spineFish.pos(60, 55),
                this.spineFish.scale(0.25, 0.25),
                (this.spineFish.rotation = -50));
              break;
            case 16:
              (this.spineFish.pos(55, 60),
                this.spineFish.scale(0.26, 0.26),
                (this.spineFish.rotation = 0));
              break;
            case 17:
              (this.spineFish.pos(56, 55),
                this.spineFish.scale(0.19, 0.19),
                (this.spineFish.rotation = 15));
              break;
            case 18:
              (this.spineFish.pos(65, 55),
                this.spineFish.scale(-0.16, 0.16),
                (this.spineFish.rotation = -5));
              break;
            case 19:
              (this.spineFish.pos(38, 48),
                this.spineFish.scale(-0.15, 0.14),
                (this.spineFish.rotation = 15));
              break;
            case 20:
              (this.spineFish.pos(44, 50),
                this.spineFish.scale(0.13, 0.13),
                (this.spineFish.rotation = 45));
              break;
            case 21:
              (this.spineFish.pos(42, 58),
                this.spineFish.scale(0.21, 0.21),
                (this.spineFish.rotation = 16));
          }
          (this._isFirstLoadSpine &&
            Laya.Tween.to(
              this.spineFish,
              {
                alpha: 1,
              },
              200,
              Laya.Ease.linearIn,
            ),
            this.destroyLoading());
        });
      }
      stopSpine() {
        if (!this.spineFish || !this.spineFish.visible) return;
        let t = this.fishKind[0];
        t >= 7 && t <= 15
          ? (this.spineFish.stop(),
            Ni.getInstance().recoverFishRun(this.spineFish, this.fishKind[0]),
            this._fish.removeChild(this.spineFish),
            (this.spineFish = null))
          : (this.spineFish && this.spineFish.templet && this.spineFish.stop(),
            Ni.getInstance().recoverSpineFish(this.spineFish, this.fishKind[0]),
            this._fish.removeChild(this.spineFish),
            (this.spineFish = null));
      }
      initLoading() {
        const t = Laya.loader.getRes(he.LOADING).create();
        (this._fish.addChild(t), t.pos(60, 55));
        const e = t.getComponent(Laya.Animator2D);
        (e.gotoAndStopByFrame("loading", 0, 0), e.play("loading"));
      }
      destroyLoading() {
        const t = this._fish.getChildByName("loading");
        t && (t.destroy(), (this._isFirstLoadSpine = !1));
      }
    },
    Fs = class {
      constructor() {
        this.isPopupAlert = !1;
      }
      checkDataValid() {
        return (
          !!this.isTargetAllBelowX12 ||
          !!(this.listTargetKind && this.listTargetKind.length > 0)
        );
      }
    },
    ws = class t {
      constructor(t) {
        ((this._isDowned = !1),
          (this._isLoop = !1),
          (this._currentFishKind = -1),
          (this._firstTimeShowPopup = !1),
          (this._isActivePopupAuto = !1),
          (this._isLoadFishSpine = !1),
          (this.popupAuto = t),
          (this.popupAuto.visible = !1),
          (this.popupAuto.active = !1),
          (this._isLoadFishSpine = !1),
          (this.autoData = new Fs()),
          (this.listFish = []),
          this.handlePopupAutoTouches(),
          this.initListFish(),
          this.initButton(),
          this.initLanguage(),
          this.hide());
      }
      setConfirmCallback(t) {
        this._confirmCallback = t;
      }
      initListFish() {
        let e,
          i,
          s,
          a = this.popupAuto.getChildByName("pnl_fish");
        for (let n = 0; n < t.LIST_FISH_SHOW.length; n++)
          ((s = t.LIST_FISH_SHOW[n]),
            (i = a.getChildByName("fish_" + s)),
            i &&
              ((i.visible = !0),
              (i.x = (n < 5 ? 128 : 194) + (n % 5) * 133),
              (i.y = n < 5 ? 17 : 170),
              (e = new Bs(i, s)),
              this.listFish.push(e),
              this.registerFishTouches(
                e.spriteFish,
                this.onFishTouches.bind(this, e),
              )));
      }
      initButton() {
        ((this.btnClose = this.popupAuto.getChildByName("btn_close")),
          (this.btnSelectAll = this.popupAuto.getChildByName("btn_select_all")),
          (this.btnSelectAllBg = this.btnSelectAll.getChildByName("bg")),
          (this.btnClear = this.popupAuto.getChildByName("btn_clear")),
          (this.btnClearBg = this.btnClear.getChildByName("bg")),
          (this.btnConfirm = this.popupAuto.getChildByName("btn_confirm")),
          (this.pnlLaserLock = this.popupAuto.getChildByName("pnl_laser_lock")),
          (this.pnlLaserLockSelected =
            this.pnlLaserLock.getChildByName("selected")),
          (this.pnlAllFish = this.popupAuto.getChildByName("pnl_all_fish")),
          (this.pnlAllFishSelected =
            this.pnlAllFish.getChildByName("selected")),
          (this.pnlTotalShots =
            this.popupAuto.getChildByName("pnl_total_shots")),
          (this.pnlTotalShotsSelected =
            this.pnlTotalShots.getChildByName("selected")));
        let e = this.popupAuto.getChildByName("pnl_num");
        ((this.buttonMinus = e.getChildByName("btn_minus")),
          (this.buttonMinus.tag = t.BUTTON_MINUS_TAG),
          (this.buttonPlus = e.getChildByName("btn_plus")),
          (this.buttonPlus.tag = t.BUTTON_PLUS_TAG),
          (this.numTotalShots = e.getChildByName("num")),
          (this.numTotalShots.text = t.TOTAL_SHOTS_DEFAULT + ""),
          this.registerButtonPopupAuto(
            this.btnClose,
            this.onButtonCloseTouches.bind(this),
            1.05,
          ),
          this.registerButtonPopupAuto(
            this.btnSelectAll,
            this.onButtonSelectAllTouches.bind(this),
            1.03,
            this.btnSelectAllBg,
          ),
          this.registerButtonPopupAuto(
            this.btnClear,
            this.onButtonClearTouches.bind(this),
            1.03,
            this.btnClearBg,
          ),
          this.registerButtonPopupAuto(
            this.btnConfirm,
            this.onButtonConfirmTouches.bind(this),
            1.03,
          ),
          this.registerButtonPopupAuto(
            this.pnlLaserLock,
            this.onPnlLaserLockTouches.bind(this),
            1,
          ),
          this.registerButtonPopupAuto(
            this.pnlAllFish,
            this.onPnlAllFishTouches.bind(this),
            1,
          ),
          this.registerButtonPopupAuto(
            this.pnlTotalShots,
            this.onPnlTotalShotsTouches.bind(this),
            1,
          ),
          this.registerPlusMinusTouches(
            this.buttonMinus,
            this.onButtonMinusTouches.bind(this, t.NUM_SHOTS_PER_TOUCH),
            1.05,
          ),
          this.registerPlusMinusTouches(
            this.buttonPlus,
            this.onButtonPlusTouches.bind(this, t.NUM_SHOTS_PER_TOUCH),
            1.05,
          ));
      }
      show() {
        this.popupAuto.visible ||
          (this._isLoadFishSpine ||
            ((this._isLoadFishSpine = !0), this.loadFishSpine()),
          this.visible());
      }
      hide() {
        this.popupAuto.visible &&
          ((this.popupAuto.visible = !1),
          (this.popupAuto.active = !1),
          (this._isActivePopupAuto = !1),
          this.listFish.forEach((t) => t.stopSpine()));
      }
      visible() {
        (this._firstTimeShowPopup
          ? (this.numTotalShots.text =
              (this.autoData.numTotalShots > 0
                ? this.autoData.numTotalShots
                : t.TOTAL_SHOTS_DEFAULT) + "")
          : ((this._firstTimeShowPopup = !0),
            this.loadPopupAutoDataFromLocalStorage()),
          this.listFish.forEach((t) => {
            t.waitingLoad || t.playSpine();
          }),
          (this.popupAuto.visible = !0),
          (this.popupAuto.active = !0),
          (this._isActivePopupAuto = !0));
      }
      loadFishSpine() {
        return _(this, null, function* () {
          (this.playFishSpine(7),
            this.playFishSpine(10),
            this.playFishSpine(13),
            yield Qe.getInstance().loadTemplet(le.SPINE_CRYSTAL_CRAB_JSON),
            this.playFishSpine(16),
            yield Qe.getInstance().loadTemplet(le.SPINE_TURTLE_JSON),
            this.playFishSpine(17),
            yield Qe.getInstance().loadTemplet(le.SPINE_OCTOPUS_JSON),
            this.playFishSpine(18),
            yield Qe.getInstance().loadTemplet(le.SPINE_PHOENIX_JSON),
            this.playFishSpine(19),
            yield Qe.getInstance().loadTemplet(le.SPINE_CROCODILE_JSON),
            this.playFishSpine(20),
            yield Qe.getInstance().loadTemplet(le.SPINE_NAGA_JSON),
            this.playFishSpine(21));
        });
      }
      playFishSpine(t) {
        for (let e = 0; e < this.listFish.length; e++) {
          const i = this.listFish[e];
          if (i.fishKind.indexOf(t) >= 0) {
            ((i.waitingLoad = !1), this.popupAuto.visible && i.playSpine());
            break;
          }
        }
      }
      loadPopupAutoDataFromLocalStorage() {
        let e = Laya.LocalStorage.getJSON(t.AUTO_DATA_KEY);
        if (e)
          try {
            let i, s, a, n;
            for (
              e.isEnableLaser && this.onPnlLaserLockTouches(),
                e.isTargetAllBelowX12 && this.onPnlAllFishTouches(),
                e.isTotalShots && this.onPnlTotalShotsTouches(),
                e.numTotalShots >= 0 &&
                  (this.numTotalShots.text = e.numTotalShots + ""),
                s = 0;
              s < e.listTargetKind.length;
              s++
            )
              if (
                ((i = e.listTargetKind[s]), !(i < t.FISH_KIND_BY_INDEX[0][0]))
              )
                for (a = 0; a < this.listFish.length; a++)
                  if (((n = this.listFish[a]), n.fishKind.indexOf(i) >= 0)) {
                    n.showSelect();
                    break;
                  }
            ((this.autoData.isEnableLaser = e.isEnableLaser),
              (this.autoData.isTargetAllBelowX12 = e.isTargetAllBelowX12),
              (this.autoData.isTotalShots = e.isTotalShots),
              (this.autoData.numTotalShots = e.numTotalShots),
              (this.autoData.listTargetKind = e.listTargetKind));
          } catch (t) {}
        else {
          let t, e;
          for (e = 0; e < this.listFish.length; e++)
            ((t = this.listFish[e]), t.showSelect());
        }
      }
      initLanguage() {
        let t = Ye.getInstance().getLanguageName();
        ((this.txtTitle = this.popupAuto.getChildByName("text_title")),
          (this.txtText = this.popupAuto.getChildByName("text_1")),
          (this.txtPnlLaserLock = this.pnlLaserLock.getChildByName("text")),
          (this.txtPnlAllFish = this.pnlAllFish.getChildByName("text")),
          (this.txtPnlTotalShots = this.pnlTotalShots.getChildByName("text")),
          (this.txtBtnSelectAll = this.btnSelectAll.getChildByName("text")),
          (this.txtBtnClear = this.btnClear.getChildByName("text")),
          (this.txtBtnConfirm = this.btnConfirm.getChildByName("text")),
          "en" != t &&
            (Ye.getInstance().localizeImageText(
              this.txtTitle,
              oe.TXT_AUTO_FISHING,
            ),
            Ye.getInstance().localizeImageText(
              this.txtText,
              oe.TXT_GENERATION_FONT_1,
            ),
            Ye.getInstance().localizeImageText(
              this.txtPnlLaserLock,
              oe.TXT_GENERATION_FONT_2,
            ),
            Ye.getInstance().localizeImageText(
              this.txtPnlAllFish,
              oe.TXT_GENERATION_FONT_3,
            ),
            Ye.getInstance().localizeImageText(
              this.txtPnlTotalShots,
              oe.TXT_GENERATION_FONT_4,
            ),
            Ye.getInstance().localizeImageText(
              this.txtBtnSelectAll,
              oe.TXT_SELECT_ALL,
            ),
            Ye.getInstance().localizeImageText(this.txtBtnClear, oe.TXT_CLEAR),
            Ye.getInstance().localizeImageText(
              this.txtBtnConfirm,
              oe.TXT_CONFIRM,
            )));
      }
      onButtonCloseTouches() {
        (this.hide(), ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonSelectAllTouches() {
        (this.listFish.forEach((t) => t.showSelect()),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonClearTouches() {
        (this.listFish.forEach((t) => t.hideSelect()),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonConfirmTouches() {
        ((this.autoData.isEnableLaser = this.pnlLaserLockSelected.visible),
          (this.autoData.isTargetAllBelowX12 = this.pnlAllFishSelected.visible),
          (this.autoData.isTotalShots = this.pnlTotalShotsSelected.visible),
          (this.autoData.numTotalShots = parseInt(this.numTotalShots.text)),
          (this.autoData.listTargetKind = this.getListTargetKind()),
          this.autoData.checkDataValid()
            ? (Laya.LocalStorage.setJSON(t.AUTO_DATA_KEY, this.autoData),
              (this.autoData.isPopupAlert = !1),
              this._confirmCallback && this._confirmCallback(this.autoData),
              this.clear(),
              this.hide())
            : ((this.autoData.isPopupAlert = !0),
              this._confirmCallback && this._confirmCallback(this.autoData)),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      getListTargetKind() {
        let e = [];
        return (
          this.pnlAllFishSelected.visible && e.push(...t.LIST_KIND_BELLOW_X12),
          this.listFish.forEach((t) => {
            t.isSelected && e.push(...t.fishKind);
          }),
          e.reverse()
        );
      }
      onPnlLaserLockTouches() {
        ((this.pnlLaserLockSelected.visible =
          !this.pnlLaserLockSelected.visible),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onPnlAllFishTouches() {
        ((this.pnlAllFishSelected.visible = !this.pnlAllFishSelected.visible),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onPnlTotalShotsTouches() {
        ((this.pnlTotalShotsSelected.visible =
          !this.pnlTotalShotsSelected.visible),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onFishTouches(t) {
        t && t.handleTouches();
      }
      onButtonMinusTouches(e) {
        let i = parseInt(this.numTotalShots.text);
        (i - e < t.NUM_SHOTS_MIN ? (i = t.NUM_SHOTS_MIN) : (i -= e),
          (this.numTotalShots.text = i + ""));
      }
      onButtonPlusTouches(e) {
        let i = parseInt(this.numTotalShots.text);
        (i + e > t.NUM_SHOTS_MAX ? (i = t.NUM_SHOTS_MAX) : (i += e),
          (this.numTotalShots.text = i + ""));
      }
      startHandlePlusMinusMouseDown(e, i = 100) {
        e._isDowned &&
          ((this._isLoop = !0),
          Laya.timer.clear(this, this.onButtonMinusTouches),
          Laya.timer.clear(this, this.onButtonPlusTouches),
          e.tag == t.BUTTON_MINUS_TAG
            ? Laya.timer.loop(
                t.NUM_SHOTS_TIME_LOOP,
                this,
                this.onButtonMinusTouches,
                [i],
              )
            : e.tag == t.BUTTON_PLUS_TAG &&
              Laya.timer.loop(
                t.NUM_SHOTS_TIME_LOOP,
                this,
                this.onButtonPlusTouches,
                [i],
              ));
      }
      handlePopupAutoTouches() {
        (this.popupAuto.on(Laya.Event.MOUSE_DOWN, () => {
          this._isDowned = !0;
        }),
          this.popupAuto.on(Laya.Event.MOUSE_UP, () => {
            this._isDowned &&
              (this._isLoop && (Laya.timer.clearAll(this), (this._isLoop = !1)),
              (this._isDowned = !1));
          }));
      }
      registerFishTouches(t, e) {
        (t.on(Laya.Event.MOUSE_MOVE, () => {
          !this._isDowned ||
            t._isDowned ||
            this._isLoop ||
            (this._currentFishKind != parseInt(t.tag) &&
              ((this._currentFishKind = parseInt(t.tag)), e && e()));
        }),
          t.on(Laya.Event.MOUSE_DOWN, () => {
            ((t._isDowned = !0), e && e());
          }),
          t.on(Laya.Event.MOUSE_UP, () => {
            t._isDowned = !1;
          }),
          t.on(Laya.Event.MOUSE_OUT, () => {
            (this._isDowned &&
              this._currentFishKind == parseInt(t.tag) &&
              (this._currentFishKind = -1),
              (t._isDowned = !1));
          }));
      }
      registerPlusMinusTouches(e, i, s = 0.95) {
        (e.on(Laya.Event.MOUSE_DOWN, () => {
          (ai.getInstance().playSFXShoot(pe.CLICK),
            e._baseScaleX || (e._baseScaleX = e.scaleX),
            e._baseScaleY || (e._baseScaleY = e.scaleY),
            Laya.Tween.to(
              e,
              {
                scaleX: e._baseScaleX * s,
                scaleY: e._baseScaleY * s,
              },
              100,
              Laya.Ease.linearIn,
              null,
              0,
            ),
            (e._isDowned = !0),
            i && i(),
            Laya.timer.once(
              500,
              this,
              this.startHandlePlusMinusMouseDown,
              [e, t.NUM_SHOTS_NUM_LOOP[0]],
              !1,
            ),
            Laya.timer.once(
              2e3,
              this,
              this.startHandlePlusMinusMouseDown,
              [e, t.NUM_SHOTS_NUM_LOOP[1]],
              !1,
            ),
            Laya.timer.once(
              4e3,
              this,
              this.startHandlePlusMinusMouseDown,
              [e, t.NUM_SHOTS_NUM_LOOP[2]],
              !1,
            ),
            Laya.timer.once(
              6e3,
              this,
              this.startHandlePlusMinusMouseDown,
              [e, t.NUM_SHOTS_NUM_LOOP[3]],
              !1,
            ),
            Laya.timer.once(
              8e3,
              this,
              this.startHandlePlusMinusMouseDown,
              [e, t.NUM_SHOTS_NUM_LOOP[4]],
              !1,
            ));
        }),
          e.on(Laya.Event.MOUSE_UP, () => {
            e._isDowned &&
              ((e._isDowned = !1),
              Laya.timer.clearAll(this),
              (this._isLoop = !1),
              Laya.Tween.to(
                e,
                {
                  scaleX: e._baseScaleX,
                  scaleY: e._baseScaleY,
                },
                100,
                Laya.Ease.linearIn,
                null,
                0,
              ));
          }),
          e.on(Laya.Event.MOUSE_OUT, () => {
            e._isDowned &&
              Laya.Tween.to(
                e,
                {
                  scaleX: e._baseScaleX,
                  scaleY: e._baseScaleY,
                },
                100,
                Laya.Ease.linearIn,
                null,
                0,
              );
          }));
      }
      registerButtonPopupAuto(t, e, i = 0.95, s) {
        ((s = s || t),
          t.on(Laya.Event.MOUSE_DOWN, () => {
            (t._baseScaleX || (t._baseScaleX = t.scaleX),
              t._baseScaleY || (t._baseScaleY = t.scaleY),
              Laya.Tween.to(
                s,
                {
                  scaleX: t._baseScaleX * i,
                  scaleY: t._baseScaleY * i,
                },
                100,
              ),
              (t._isDowned = !0));
          }),
          t.on(Laya.Event.MOUSE_UP, () => {
            t._isDowned &&
              ((t._isDowned = !1),
              Laya.Tween.to(
                s,
                {
                  scaleX: t._baseScaleX,
                  scaleY: t._baseScaleY,
                },
                100,
              ),
              e && e());
          }),
          t.on(Laya.Event.MOUSE_OUT, () => {
            t._isDowned &&
              ((t._isDowned = !1),
              Laya.Tween.to(
                s,
                {
                  scaleX: t._baseScaleX,
                  scaleY: t._baseScaleY,
                },
                100,
              ));
          }));
      }
      clear() {
        (this._isLoop && (Laya.timer.clearAll(this), (this._isLoop = !1)),
          (this._isDowned = !1));
      }
      getAutoData() {}
      getMainObject() {
        return this.popupAuto;
      }
    };
  ((ws.BUTTON_PLUS_TAG = "plus"),
    (ws.BUTTON_MINUS_TAG = "minus"),
    (ws.AUTO_DATA_KEY = "FASAutoData"),
    (ws.TOTAL_SHOTS_DEFAULT = 3e3),
    (ws.NUM_SHOTS_PER_TOUCH = 10),
    (ws.NUM_SHOTS_TIME_LOOP = 10),
    (ws.NUM_SHOTS_NUM_LOOP = [1, 10, 50, 200, 500]),
    (ws.NUM_SHOTS_MIN = 0),
    (ws.NUM_SHOTS_MAX = 99999),
    (ws.LIST_KIND_BELLOW_X12 = [0, 1, 2, 3, 4, 5, 6]),
    (ws.FISH_KIND_BY_INDEX = [
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
      [16],
      [17],
      [18],
      [19],
      [20],
      [21],
    ]),
    (ws.LIST_FISH_SHOW = [0, 1, 2, 3, 4, 5, 6, 7, 8]));
  var Es = ws,
    { Tween: xs } = Laya,
    vs = class {
      constructor(t) {
        ((this.currentPagePayTable = 0),
          (this.currentPageSpecial = 0),
          (this.isShowPnlInfo = !1),
          (this.isActivePayTable = !1),
          (this.isActiveSpecial = !1),
          (this.speedTweenTo = 170),
          (this.waitingLoadSpineFish1Page5 = !0),
          (this.waitingLoadSpineFish2Page5 = !0),
          (this.waitingLoadSpineFish1Page6 = !0),
          (this.waitingLoadSpineFish1Page7 = !0),
          (this.waitingLoadSpineFish1Page8 = !0),
          (this.waitingLoadSpineFish1Page9 = !0),
          (this.isFirstLoadFish1page2 = !0),
          (this.isFirstLoadFish2page2 = !0),
          (this.isFirstLoadFish3page2 = !0),
          (this.isFirstLoadFish1page3 = !0),
          (this.isFirstLoadFish2page3 = !0),
          (this.isFirstLoadFish3page3 = !0),
          (this.isFirstLoadFish1page4 = !0),
          (this.isFirstLoadFish2page4 = !0),
          (this.isFirstLoadFish3page4 = !0),
          (this.isFirstLoadFish1page5 = !0),
          (this.isFirstLoadFish2page5 = !0),
          (this.isFirstLoadFish1page6 = !0),
          (this.isFirstLoadFish1page7 = !0),
          (this.isFirstLoadFish1page8 = !0),
          (this.isFirstLoadFish1page9 = !0),
          (this.pnlInfo = t),
          this.init(),
          this.hide(),
          this.onEnable(),
          this.initLanguage(),
          (this.pnlInfo.active = !1));
      }
      init() {
        ((this.btnClose = this.pnlInfo.getChildByName("btn_close")),
          (this.pnlMenu = this.pnlInfo.getChildByName("pnl_menu")),
          (this.btnSpecial = this.pnlMenu.getChildByName("btn_special")),
          (this.btnPayTable = this.pnlMenu.getChildByName("btn_paytable")),
          (this.btnInterface = this.pnlMenu.getChildByName("btn_interface")),
          (this.pnlSpecial = this.pnlInfo.getChildByName("pnl_special")),
          (this.pnlPayTable = this.pnlInfo.getChildByName("pnl_paytable")),
          (this.pnlInterface = this.pnlInfo.getChildByName("pnl_interface")),
          (this.txtSpecial = this.btnSpecial.getChildByName("txt_special")),
          (this.txtPayTable = this.btnPayTable.getChildByName("txt_paytable")),
          (this.txtInterface =
            this.btnInterface.getChildByName("txt_interface")),
          (this.bgActiveMenu = this.pnlMenu.getChildByName("bg_active")),
          (this.guiPayTable = this.pnlPayTable.getChildByName("Gui")),
          (this.listPayTable =
            this.pnlPayTable.getChildByName("list_paytable")),
          (this.btnNextPayTable = this.pnlPayTable.getChildByName("btn_next")),
          (this.btnPrevPayTable = this.pnlPayTable.getChildByName("btn_prev")),
          (this.txtPagePayTable =
            this.btnNextPayTable.getChildByName("txt_page")),
          (this.txtPagePayTable.text = "1/" + this.guiPayTable.numChildren),
          (this.listPayTable.repeatX = this.guiPayTable.numChildren));
        const t = this.listPayTable.getChildByName("scrollBar");
        (t && (t.mouseWheelEnable = !1),
          (this.pnlPayTablePage1 =
            this.guiPayTable.getChildByName("pnl_page1")),
          (this.animationKind3PnlPayTable =
            this.pnlPayTablePage1.getChildByName("kind3")),
          (this.xBaseKind3 = this.animationKind3PnlPayTable.x),
          (this.yBaseKind3 = this.animationKind3PnlPayTable.y),
          this.initAura(),
          (this.guiSpecial = this.pnlSpecial.getChildByName("Gui")),
          (this.listSpecial = this.pnlSpecial.getChildByName("list_special")),
          (this.btnNextSpecial = this.pnlSpecial.getChildByName("btn_next")),
          (this.btnPrevSpecial = this.pnlSpecial.getChildByName("btn_prev")),
          (this.txtPageSpecial =
            this.btnNextSpecial.getChildByName("txt_page")),
          (this.txtPageSpecial.text = "1/" + this.guiSpecial.numChildren),
          (this.listSpecial.repeatX = this.guiSpecial.numChildren));
        const e = this.listSpecial.getChildByName("scrollBar");
        (e && (e.mouseWheelEnable = !1),
          this.initLoading(),
          this.getListDataPayTable(),
          this.listPayTable.scrollTo(0),
          this.getListDataSpecial(),
          this.listSpecial.scrollTo(0),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnClose,
              this.onButtonCloseTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnSpecial,
              this.onButtonSpecialTouches.bind(this),
              1,
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnPayTable,
              this.onButtonPayTableTouches.bind(this),
              1,
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnInterface,
              this.onButtonInterfaceTouches.bind(this),
              1,
            ),
          this.refreshPnlInfo(),
          (this.isActiveSpecial = !0),
          (this.pnlSpecial.visible = !0),
          (this.txtSpecial.skin = oe.SPECIAL_ON_WORD));
      }
      show() {
        return _(this, null, function* () {
          this.pnlInfo.visible ||
            (this.loadSpine(),
            this.getSprite(7),
            this.getSprite(8),
            this.getSprite(9),
            this.getSprite(10),
            this.getSprite(11),
            this.getSprite(12),
            this.getSprite(13),
            this.getSprite(14),
            this.getSprite(15),
            this.isActivePayTable &&
              (this.effectSwimKind3PnlPayTable(),
              this.playAnimatorFish(),
              this.checkWaitingLoadSpine()),
            (this.isShowPnlInfo = !0),
            (this.pnlInfo.active = !0),
            (this.pnlInfo.visible = !0));
        });
      }
      hide() {
        this.pnlInfo.visible &&
          ((this.isShowPnlInfo = !1),
          (this.pnlInfo.active = !1),
          (this.pnlInfo.visible = !1),
          this.recoverSpine(),
          this.recoverFishRun(),
          this.isActivePayTable &&
            (this.stopEffectSwimKind3PnlPayTable(),
            this.stopAnimatorFish(),
            this.stopSpine()));
      }
      checkWaitingLoadSpine() {
        (this.waitingLoadSpineFish1Page5 || this.playSpine(16),
          this.waitingLoadSpineFish2Page5 || this.playSpine(17),
          this.waitingLoadSpineFish1Page6 || this.playSpine(18),
          this.waitingLoadSpineFish1Page7 || this.playSpine(19),
          this.waitingLoadSpineFish1Page8 || this.playSpine(20),
          this.waitingLoadSpineFish1Page9 || this.playSpine(21));
      }
      onEnable() {
        (this.listPayTable.on(
          Laya.Event.MOUSE_WHEEL,
          this,
          this.onScrollPayTable,
        ),
          this.listPayTable.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onListPayTableDown,
          ),
          this.listPayTable.on(
            Laya.Event.RIGHT_MOUSE_DOWN,
            this,
            this.onListPayTableDown,
          ),
          this.listPayTable.on(
            Laya.Event.MOUSE_DRAG_END,
            this,
            this.onListPayTableDragEnd,
          ),
          this.btnNextPayTable.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onBtnNextPayTableDown,
          ),
          this.btnNextPayTable.on(
            Laya.Event.MOUSE_UP,
            this,
            this.onBtnNextPayTableUp,
          ),
          this.btnNextPayTable.on(
            Laya.Event.MOUSE_OUT,
            this,
            this.onBtnNextPayTableOut,
          ),
          this.btnPrevPayTable.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onBtnPrevPayTableDown,
          ),
          this.btnPrevPayTable.on(
            Laya.Event.MOUSE_UP,
            this,
            this.onBtnPrevPayTableUp,
          ),
          this.btnPrevPayTable.on(
            Laya.Event.MOUSE_OUT,
            this,
            this.onBtnPrevPayTableOut,
          ),
          this.listSpecial.on(
            Laya.Event.MOUSE_WHEEL,
            this,
            this.onScrollSpecial,
          ),
          this.listSpecial.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onListSpecialDown,
          ),
          this.listSpecial.on(
            Laya.Event.RIGHT_MOUSE_DOWN,
            this,
            this.onListSpecialDown,
          ),
          this.listSpecial.on(
            Laya.Event.MOUSE_DRAG_END,
            this,
            this.onListSpecialDragEnd,
          ),
          this.btnNextSpecial.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onBtnNextSpecialDown,
          ),
          this.btnNextSpecial.on(
            Laya.Event.MOUSE_UP,
            this,
            this.onBtnNextSpecialUp,
          ),
          this.btnNextSpecial.on(
            Laya.Event.MOUSE_OUT,
            this,
            this.onBtnNextSpecialOut,
          ),
          this.btnPrevSpecial.on(
            Laya.Event.MOUSE_DOWN,
            this,
            this.onBtnPrevSpecialDown,
          ),
          this.btnPrevSpecial.on(
            Laya.Event.MOUSE_UP,
            this,
            this.onBtnPrevSpecialUp,
          ),
          this.btnPrevSpecial.on(
            Laya.Event.MOUSE_OUT,
            this,
            this.onBtnPrevSpecialOut,
          ));
      }
      onScrollPayTable(t) {
        t.delta < 0
          ? this.onBtnPrevPayTableUp()
          : t.delta > 0 && this.onBtnNextPayTableUp();
      }
      onListPayTableDown() {
        this.dragStartPosPayTable = this.listPayTable.scrollBar.value;
      }
      onListPayTableDragEnd() {
        this.dragEndPosPayTable = this.listPayTable.scrollBar.value;
        let t = this.dragEndPosPayTable - this.dragStartPosPayTable;
        t > 100
          ? this.onBtnNextPayTableUp()
          : t < -100
            ? this.onBtnPrevPayTableUp()
            : this.listPayTable.tweenTo(
                this.currentPagePayTable,
                this.speedTweenTo,
              );
      }
      onBtnNextPayTableDown() {
        this.btnNextPayTable.color = "ffffff";
      }
      onBtnNextPayTableUp() {
        ((this.btnNextPayTable.color = "507ab0"),
          this.currentPagePayTable++,
          this.currentPagePayTable >= this.guiPayTable.numChildren &&
            (this.currentPagePayTable = this.guiPayTable.numChildren - 1),
          (this.txtPagePayTable.text =
            this.currentPagePayTable + 1 + "/" + this.guiPayTable.numChildren),
          this.listPayTable.tweenTo(
            this.currentPagePayTable,
            this.speedTweenTo,
          ));
      }
      onBtnNextPayTableOut() {
        this.btnNextPayTable.color = "507ab0";
      }
      onBtnPrevPayTableDown() {
        this.btnPrevPayTable.color = "ffffff";
      }
      onBtnPrevPayTableUp() {
        ((this.btnPrevPayTable.color = "507ab0"),
          this.currentPagePayTable--,
          this.currentPagePayTable < 0 && (this.currentPagePayTable = 0),
          (this.txtPagePayTable.text =
            this.currentPagePayTable + 1 + "/" + this.guiPayTable.numChildren),
          this.listPayTable.tweenTo(
            this.currentPagePayTable,
            this.speedTweenTo,
          ));
      }
      onBtnPrevPayTableOut() {
        this.btnPrevPayTable.color = "507ab0";
      }
      onScrollSpecial(t) {
        t.delta < 0
          ? this.onBtnPrevSpecialUp()
          : t.delta > 0 && this.onBtnNextSpecialUp();
      }
      onListSpecialDown() {
        this.dragStartPosSpecial = this.listSpecial.scrollBar.value;
      }
      onListSpecialDragEnd() {
        this.dragEndPosSpecial = this.listSpecial.scrollBar.value;
        let t = this.dragEndPosSpecial - this.dragStartPosSpecial;
        t > 100
          ? this.onBtnNextSpecialUp()
          : t < -100
            ? this.onBtnPrevSpecialUp()
            : this.listSpecial.tweenTo(
                this.currentPageSpecial,
                this.speedTweenTo,
              );
      }
      onBtnNextSpecialDown() {
        this.btnNextSpecial.color = "ffffff";
      }
      onBtnNextSpecialUp() {
        ((this.btnNextSpecial.color = "507ab0"),
          this.currentPageSpecial++,
          this.currentPageSpecial >= this.guiSpecial.numChildren &&
            (this.currentPageSpecial = this.guiSpecial.numChildren - 1),
          (this.txtPageSpecial.text =
            this.currentPageSpecial + 1 + "/" + this.guiSpecial.numChildren),
          this.listSpecial.tweenTo(this.currentPageSpecial, this.speedTweenTo));
      }
      onBtnNextSpecialOut() {
        this.btnNextSpecial.color = "507ab0";
      }
      onBtnPrevSpecialDown() {
        this.btnPrevSpecial.color = "ffffff";
      }
      onBtnPrevSpecialUp() {
        ((this.btnPrevSpecial.color = "507ab0"),
          this.currentPageSpecial--,
          this.currentPageSpecial < 0 && (this.currentPageSpecial = 0),
          (this.txtPageSpecial.text =
            this.currentPageSpecial + 1 + "/" + this.guiSpecial.numChildren),
          this.listSpecial.tweenTo(this.currentPageSpecial, this.speedTweenTo));
      }
      onBtnPrevSpecialOut() {
        this.btnPrevSpecial.color = "507ab0";
      }
      playSpine(t) {
        switch (t) {
          case 16:
            this.spineFish1Page5 && this.spineFish1Page5.play("run", !0);
            break;
          case 17:
            this.spineFish2Page5 && this.spineFish2Page5.play("run", !0);
            break;
          case 18:
            this.spineFish1Page6 && this.spineFish1Page6.play("run", !0);
            break;
          case 19:
            this.spineFish1Page7 && this.spineFish1Page7.play("run", !0);
            break;
          case 20:
            this.spineFish1Page8 && this.spineFish1Page8.play("run", !0);
            break;
          case 21:
            this.spineFish1Page9 && this.spineFish1Page9.play("run", !0);
        }
      }
      stopSpine() {
        (this.spineFish1Page5 && this.spineFish1Page5.stop(),
          this.spineFish2Page5 && this.spineFish2Page5.stop(),
          this.spineFish1Page6 && this.spineFish1Page6.stop(),
          this.spineFish1Page7 && this.spineFish1Page7.stop(),
          this.spineFish1Page8 && this.spineFish1Page8.stop(),
          this.spineFish1Page9 && this.spineFish1Page9.stop());
      }
      loadSpine() {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadTemplet(le.SPINE_CRYSTAL_CRAB_JSON),
            (this.waitingLoadSpineFish1Page5 = !1),
            this.getSpine(16),
            yield Qe.getInstance().loadTemplet(le.SPINE_TURTLE_JSON),
            (this.waitingLoadSpineFish2Page5 = !1),
            this.getSpine(17),
            yield Qe.getInstance().loadTemplet(le.SPINE_OCTOPUS_JSON),
            (this.waitingLoadSpineFish1Page6 = !1),
            this.getSpine(18),
            yield Qe.getInstance().loadTemplet(le.SPINE_PHOENIX_JSON),
            (this.waitingLoadSpineFish1Page7 = !1),
            this.getSpine(19),
            yield Qe.getInstance().loadTemplet(le.SPINE_CROCODILE_JSON),
            (this.waitingLoadSpineFish1Page8 = !1),
            this.getSpine(20),
            yield Qe.getInstance().loadTemplet(le.SPINE_NAGA_JSON),
            (this.waitingLoadSpineFish1Page9 = !1),
            this.getSpine(21));
        });
      }
      getSpine(t) {
        if (this.isShowPnlInfo)
          switch (t) {
            case 16:
              if (!this.spineFish1Page5) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page5")
                  .getChildByName("fish1");
                ((this.spineFish1Page5 = Ni.getInstance().getSpineFish(16)),
                  this.spineFish1Page5.pos(130, 167),
                  this.spineFish1Page5.scale(0.8, 0.8),
                  this.isFirstLoadFish1page5 &&
                    (this.spineFish1Page5.alpha = 0),
                  (this.spineFish1Page5.visible = !0),
                  (this.spineFish1Page5.active = !0),
                  t.addChild(this.spineFish1Page5),
                  t.setChildIndex(this.spineFish1Page5, 0),
                  this.spineFish1Page5.play("run", !0),
                  this.isFirstLoadFish1page5 &&
                    Laya.Tween.to(
                      this.spineFish1Page5,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page5 &&
                    (this.loadingFish1page5.destroy(),
                    (this.isFirstLoadFish1page5 = !1)));
              }
              break;
            case 17:
              if (!this.spineFish2Page5) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page5")
                  .getChildByName("fish2");
                ((this.spineFish2Page5 = Ni.getInstance().getSpineFish(17)),
                  this.spineFish2Page5.pos(130, 145),
                  this.spineFish2Page5.scale(0.67, 0.67),
                  this.isFirstLoadFish2page5 &&
                    (this.spineFish2Page5.alpha = 0),
                  (this.spineFish2Page5.visible = !0),
                  (this.spineFish2Page5.active = !0),
                  t.addChild(this.spineFish2Page5),
                  t.setChildIndex(this.spineFish2Page5, 0),
                  this.spineFish2Page5.play("run", !0),
                  this.isFirstLoadFish2page5 &&
                    Laya.Tween.to(
                      this.spineFish2Page5,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish2page5 &&
                    (this.loadingFish2page5.destroy(),
                    (this.isFirstLoadFish2page5 = !1)));
              }
              break;
            case 18:
              if (!this.spineFish1Page6) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page6")
                  .getChildByName("fish1");
                ((this.spineFish1Page6 = Ni.getInstance().getSpineFish(18)),
                  this.spineFish1Page6.pos(130, 130),
                  this.spineFish1Page6.scale(-0.65, 0.65),
                  (this.spineFish1Page6.rotation = -10),
                  this.isFirstLoadFish1page6 &&
                    (this.spineFish1Page6.alpha = 0),
                  (this.spineFish1Page6.visible = !0),
                  (this.spineFish1Page6.active = !0),
                  t.addChild(this.spineFish1Page6),
                  t.setChildIndex(this.spineFish1Page6, 0),
                  this.spineFish1Page6.play("run", !0),
                  this.isFirstLoadFish1page6 &&
                    Laya.Tween.to(
                      this.spineFish1Page6,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page6 &&
                    (this.loadingFish1page6.destroy(),
                    (this.isFirstLoadFish1page6 = !1)));
              }
              break;
            case 19:
              if (!this.spineFish1Page7) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page7")
                  .getChildByName("fish1");
                ((this.spineFish1Page7 = Ni.getInstance().getSpineFish(19)),
                  this.spineFish1Page7.pos(50, 135),
                  this.spineFish1Page7.scale(-0.7, 0.7),
                  this.isFirstLoadFish1page7 &&
                    (this.spineFish1Page7.alpha = 0),
                  (this.spineFish1Page7.visible = !0),
                  (this.spineFish1Page7.active = !0),
                  t.addChild(this.spineFish1Page7),
                  t.setChildIndex(this.spineFish1Page7, 0),
                  this.spineFish1Page7.play("run", !0),
                  this.isFirstLoadFish1page7 &&
                    Laya.Tween.to(
                      this.spineFish1Page7,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page7 &&
                    (this.loadingFish1page7.destroy(),
                    (this.isFirstLoadFish1page7 = !1)));
              }
              break;
            case 20:
              if (!this.spineFish1Page8) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page8")
                  .getChildByName("fish1");
                ((this.spineFish1Page8 = Ni.getInstance().getSpineFish(20)),
                  this.spineFish1Page8.pos(50, 127),
                  this.spineFish1Page8.scale(0.69, 0.69),
                  this.isFirstLoadFish1page8 &&
                    (this.spineFish1Page8.alpha = 0),
                  (this.spineFish1Page8.visible = !0),
                  (this.spineFish1Page8.active = !0),
                  t.addChild(this.spineFish1Page8),
                  t.setChildIndex(this.spineFish1Page8, 0),
                  this.spineFish1Page8.play("run", !0),
                  this.isFirstLoadFish1page8 &&
                    Laya.Tween.to(
                      this.spineFish1Page8,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page8 &&
                    (this.loadingFish1page8.destroy(),
                    (this.isFirstLoadFish1page8 = !1)));
              }
              break;
            case 21:
              if (!this.spineFish1Page9) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page9")
                  .getChildByName("fish1");
                ((this.spineFish1Page9 = Ni.getInstance().getSpineFish(21)),
                  this.spineFish1Page9.pos(115, 155),
                  this.spineFish1Page9.scale(0.75, 0.75),
                  (this.spineFish1Page9.rotation = 23),
                  this.isFirstLoadFish1page9 &&
                    (this.spineFish1Page9.alpha = 0),
                  (this.spineFish1Page9.visible = !0),
                  (this.spineFish1Page9.active = !0),
                  t.addChild(this.spineFish1Page9),
                  t.setChildIndex(this.spineFish1Page9, 0),
                  this.spineFish1Page9.play("run", !0),
                  this.isFirstLoadFish1page9 &&
                    Laya.Tween.to(
                      this.spineFish1Page9,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page9 &&
                    (this.loadingFish1page9.destroy(),
                    (this.isFirstLoadFish1page9 = !1)));
              }
          }
      }
      getSprite(t) {
        return _(this, null, function* () {
          switch (t) {
            case 7:
              if (!this.animatorFish1Page2) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page2")
                  .getChildByName("fish1");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(7)
                    .then((t) => {
                      this.animatorFish1Page2 = t;
                    }),
                  !this.animatorFish1Page2)
                )
                  return;
                (this.isFirstLoadFish1page2 &&
                  (this.animatorFish1Page2.alpha = 0),
                  (this.animatorFish1Page2.visible = !0),
                  (this.animatorFish1Page2.active = !0),
                  this.animatorFish1Page2.pos(125, 135),
                  this.animatorFish1Page2.scale(0.8, 0.8),
                  (this.animatorFish1Page2.rotation = -30),
                  this.animatorFish1Page2.play(0, !0),
                  t.addChild(this.animatorFish1Page2),
                  t.setChildIndex(this.animatorFish1Page2, 3),
                  this.isFirstLoadFish1page2 &&
                    Laya.Tween.to(
                      this.animatorFish1Page2,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page2 &&
                    (this.loadingFish1page2.destroy(),
                    (this.isFirstLoadFish1page2 = !1)));
              }
              break;
            case 8:
              if (!this.animatorFish2Page2) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page2")
                  .getChildByName("fish2");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(7)
                    .then((t) => {
                      this.animatorFish2Page2 = t;
                    }),
                  !this.animatorFish2Page2)
                )
                  return;
                (this.isFirstLoadFish2page2 &&
                  (this.animatorFish2Page2.alpha = 0),
                  (this.animatorFish2Page2.visible = !0),
                  (this.animatorFish2Page2.active = !0),
                  this.animatorFish2Page2.pos(125, 140),
                  this.animatorFish2Page2.scale(0.85, 0.85),
                  (this.animatorFish2Page2.rotation = -30),
                  this.animatorFish2Page2.play(0, !0),
                  t.addChild(this.animatorFish2Page2),
                  t.setChildIndex(this.animatorFish2Page2, 4),
                  this.isFirstLoadFish2page2 &&
                    Laya.Tween.to(
                      this.animatorFish2Page2,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish2page2 &&
                    (this.loadingFish2page2.destroy(),
                    (this.isFirstLoadFish2page2 = !1)));
              }
              break;
            case 9:
              if (!this.animatorFish3Page2) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page2")
                  .getChildByName("fish3");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(9)
                    .then((t) => {
                      this.animatorFish3Page2 = t;
                    }),
                  !this.animatorFish3Page2)
                )
                  return;
                (this.isFirstLoadFish3page2 &&
                  (this.animatorFish3Page2.alpha = 0),
                  (this.animatorFish3Page2.visible = !0),
                  (this.animatorFish3Page2.active = !0),
                  this.animatorFish3Page2.pos(140, 140),
                  this.animatorFish3Page2.scale(0.9, 0.9),
                  (this.animatorFish3Page2.rotation = -30),
                  this.animatorFish3Page2.play(0, !0),
                  t.addChild(this.animatorFish3Page2),
                  t.setChildIndex(this.animatorFish3Page2, 4),
                  this.isFirstLoadFish3page2 &&
                    Laya.Tween.to(
                      this.animatorFish3Page2,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish3page2 &&
                    (this.loadingFish3page2.destroy(),
                    (this.isFirstLoadFish3page2 = !1)));
              }
              break;
            case 10:
              if (!this.animatorFish1Page3) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page3")
                  .getChildByName("fish1");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(10)
                    .then((t) => {
                      this.animatorFish1Page3 = t;
                    }),
                  !this.animatorFish1Page3)
                )
                  return;
                (this.isFirstLoadFish1page3 &&
                  (this.animatorFish1Page3.alpha = 0),
                  (this.animatorFish1Page3.visible = !0),
                  (this.animatorFish1Page3.active = !0),
                  this.animatorFish1Page3.pos(125, 120),
                  this.animatorFish1Page3.scale(0.6, 0.6),
                  (this.animatorFish1Page3.rotation = -30),
                  this.animatorFish1Page3.play(0, !0),
                  t.addChild(this.animatorFish1Page3),
                  t.setChildIndex(this.animatorFish1Page3, 3),
                  this.isFirstLoadFish1page3 &&
                    Laya.Tween.to(
                      this.animatorFish1Page3,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page3 &&
                    (this.loadingFish1page3.destroy(),
                    (this.isFirstLoadFish1page3 = !1)));
              }
              break;
            case 11:
              if (!this.animatorFish2Page3) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page3")
                  .getChildByName("fish2");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(10)
                    .then((t) => {
                      this.animatorFish2Page3 = t;
                    }),
                  !this.animatorFish2Page3)
                )
                  return;
                (this.isFirstLoadFish2page3 &&
                  (this.animatorFish2Page3.alpha = 0),
                  (this.animatorFish2Page3.visible = !0),
                  (this.animatorFish2Page3.active = !0),
                  this.animatorFish2Page3.pos(135, 110),
                  this.animatorFish2Page3.scale(0.65, 0.65),
                  (this.animatorFish2Page3.rotation = -30),
                  this.animatorFish2Page3.play(0, !0),
                  t.addChild(this.animatorFish2Page3),
                  t.setChildIndex(this.animatorFish2Page3, 4),
                  this.isFirstLoadFish2page3 &&
                    Laya.Tween.to(
                      this.animatorFish2Page3,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish2page3 &&
                    (this.loadingFish2page3.destroy(),
                    (this.isFirstLoadFish2page3 = !1)));
              }
              break;
            case 12:
              if (!this.animatorFish3Page3) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page3")
                  .getChildByName("fish3");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(12)
                    .then((t) => {
                      this.animatorFish3Page3 = t;
                    }),
                  !this.animatorFish3Page3)
                )
                  return;
                (this.isFirstLoadFish3page3 &&
                  (this.animatorFish3Page3.alpha = 0),
                  (this.animatorFish3Page3.visible = !0),
                  (this.animatorFish3Page3.active = !0),
                  this.animatorFish3Page3.pos(130, 110),
                  this.animatorFish3Page3.scale(0.73, 0.73),
                  (this.animatorFish3Page3.rotation = -30),
                  this.animatorFish3Page3.play(0, !0),
                  t.addChild(this.animatorFish3Page3),
                  t.setChildIndex(this.animatorFish3Page3, 4),
                  this.isFirstLoadFish3page3 &&
                    Laya.Tween.to(
                      this.animatorFish3Page3,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish3page3 &&
                    (this.loadingFish3page3.destroy(),
                    (this.isFirstLoadFish3page3 = !1)));
              }
              break;
            case 13:
              if (!this.animatorFish1Page4) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page4")
                  .getChildByName("fish1");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(13)
                    .then((t) => {
                      this.animatorFish1Page4 = t;
                    }),
                  !this.animatorFish1Page4)
                )
                  return;
                (this.isFirstLoadFish1page4 &&
                  (this.animatorFish1Page4.alpha = 0),
                  (this.animatorFish1Page4.visible = !0),
                  (this.animatorFish1Page4.active = !0),
                  this.animatorFish1Page4.pos(130, 138),
                  this.animatorFish1Page4.scale(0.57, 0.57),
                  (this.animatorFish1Page4.rotation = -25),
                  this.animatorFish1Page4.play(0, !0),
                  t.addChild(this.animatorFish1Page4),
                  t.setChildIndex(this.animatorFish1Page4, 3),
                  this.isFirstLoadFish1page4 &&
                    Laya.Tween.to(
                      this.animatorFish1Page4,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish1page4 &&
                    (this.loadingFish1page4.destroy(),
                    (this.isFirstLoadFish1page4 = !1)));
              }
              break;
            case 14:
              if (!this.animatorFish2Page4) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page4")
                  .getChildByName("fish2");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(14)
                    .then((t) => {
                      this.animatorFish2Page4 = t;
                    }),
                  !this.animatorFish2Page4)
                )
                  return;
                (this.isFirstLoadFish2page4 &&
                  (this.animatorFish2Page4.alpha = 0),
                  (this.animatorFish2Page4.visible = !0),
                  (this.animatorFish2Page4.active = !0),
                  this.animatorFish2Page4.pos(127, 145),
                  this.animatorFish2Page4.scale(0.68, 0.68),
                  (this.animatorFish2Page4.rotation = -30),
                  this.animatorFish2Page4.play(0, !0),
                  t.addChild(this.animatorFish2Page4),
                  t.setChildIndex(this.animatorFish2Page4, 4),
                  this.isFirstLoadFish2page4 &&
                    Laya.Tween.to(
                      this.animatorFish2Page4,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish2page4 &&
                    (this.loadingFish2page4.destroy(),
                    (this.isFirstLoadFish2page4 = !1)));
              }
              break;
            case 15:
              if (!this.animatorFish3Page4) {
                let t = this.guiPayTable
                  .getChildByName("pnl_page4")
                  .getChildByName("fish3");
                if (
                  (yield Ni.getInstance()
                    .getFishRun(15)
                    .then((t) => {
                      this.animatorFish3Page4 = t;
                    }),
                  !this.animatorFish3Page4)
                )
                  return;
                (this.isFirstLoadFish3page4 &&
                  (this.animatorFish3Page4.alpha = 0),
                  (this.animatorFish3Page4.visible = !0),
                  (this.animatorFish3Page4.active = !0),
                  this.animatorFish3Page4.pos(126, 140),
                  this.animatorFish3Page4.scale(0.74, 0.74),
                  (this.animatorFish3Page4.rotation = -33),
                  this.animatorFish3Page4.play(0, !0),
                  t.addChild(this.animatorFish3Page4),
                  t.setChildIndex(this.animatorFish3Page4, 4),
                  this.isFirstLoadFish3page4 &&
                    Laya.Tween.to(
                      this.animatorFish3Page4,
                      {
                        alpha: 1,
                      },
                      200,
                      Laya.Ease.linearIn,
                    ),
                  this.loadingFish3page4 &&
                    (this.loadingFish3page4.destroy(),
                    (this.isFirstLoadFish3page4 = !1)));
              }
          }
        });
      }
      recoverSpine() {
        (Ni.getInstance().recoverSpineFish(this.spineFish1Page5, 16),
          Ni.getInstance().recoverSpineFish(this.spineFish2Page5, 17),
          Ni.getInstance().recoverSpineFish(this.spineFish1Page6, 18),
          Ni.getInstance().recoverSpineFish(this.spineFish1Page7, 19),
          Ni.getInstance().recoverSpineFish(this.spineFish1Page8, 20),
          Ni.getInstance().recoverSpineFish(this.spineFish1Page9, 21),
          (this.spineFish1Page5 = null),
          (this.spineFish2Page5 = null),
          (this.spineFish1Page6 = null),
          (this.spineFish1Page7 = null),
          (this.spineFish1Page8 = null),
          (this.spineFish1Page9 = null));
      }
      recoverFishRun() {
        (Ni.getInstance().recoverFishRun(this.animatorFish1Page2, 7),
          Ni.getInstance().recoverFishRun(this.animatorFish2Page2, 8),
          Ni.getInstance().recoverFishRun(this.animatorFish3Page2, 9),
          Ni.getInstance().recoverFishRun(this.animatorFish1Page3, 10),
          Ni.getInstance().recoverFishRun(this.animatorFish2Page3, 11),
          Ni.getInstance().recoverFishRun(this.animatorFish3Page3, 12),
          Ni.getInstance().recoverFishRun(this.animatorFish1Page4, 13),
          Ni.getInstance().recoverFishRun(this.animatorFish2Page4, 14),
          Ni.getInstance().recoverFishRun(this.animatorFish3Page4, 15),
          (this.animatorFish1Page2 = null),
          (this.animatorFish2Page2 = null),
          (this.animatorFish3Page2 = null),
          (this.animatorFish1Page3 = null),
          (this.animatorFish2Page3 = null),
          (this.animatorFish3Page3 = null),
          (this.animatorFish1Page4 = null),
          (this.animatorFish2Page4 = null),
          (this.animatorFish3Page4 = null));
      }
      initAura() {
        ((this.pnlPayTablePage2 = this.guiPayTable.getChildByName("pnl_page2")),
          (this.payTablePage2Fish2 =
            this.pnlPayTablePage2.getChildByName("fish2")),
          (this.payTablePage2Fish3 =
            this.pnlPayTablePage2.getChildByName("fish3")),
          (this.payTablePage2Fish2Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          (this.payTablePage2Fish3Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          this.payTablePage2Fish2.addChild(this.payTablePage2Fish2Aura),
          this.payTablePage2Fish3.addChild(this.payTablePage2Fish3Aura),
          this.payTablePage2Fish2.setChildIndex(this.payTablePage2Fish2Aura, 3),
          this.payTablePage2Fish3.setChildIndex(this.payTablePage2Fish3Aura, 3),
          (this.payTablePage2Fish2AuraAnimation =
            this.payTablePage2Fish2Aura.getComponent(Laya.Animator2D)),
          (this.payTablePage2Fish3AuraAnimation =
            this.payTablePage2Fish3Aura.getComponent(Laya.Animator2D)),
          this.payTablePage2Fish2AuraAnimation.gotoAndStopByFrame(
            "lv2_run",
            0,
            0,
          ),
          this.payTablePage2Fish2AuraAnimation.gotoAndStopByFrame(
            "lv3_run",
            0,
            0,
          ),
          this.payTablePage2Fish2Aura.scale(0.3, 0.325),
          this.payTablePage2Fish2Aura.pos(110, 120),
          (this.payTablePage2Fish2Aura.rotation = -30),
          this.payTablePage2Fish3Aura.scale(0.31, 0.35),
          this.payTablePage2Fish3Aura.pos(125, 115),
          (this.payTablePage2Fish3Aura.rotation = -30),
          (this.pnlPayTablePage3 =
            this.guiPayTable.getChildByName("pnl_page3")),
          (this.payTablePage3Fish2 =
            this.pnlPayTablePage3.getChildByName("fish2")),
          (this.payTablePage3Fish3 =
            this.pnlPayTablePage3.getChildByName("fish3")),
          (this.payTablePage3Fish2Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          (this.payTablePage3Fish3Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          this.payTablePage3Fish2.addChild(this.payTablePage3Fish2Aura),
          this.payTablePage3Fish3.addChild(this.payTablePage3Fish3Aura),
          this.payTablePage3Fish2.setChildIndex(this.payTablePage3Fish2Aura, 3),
          this.payTablePage3Fish3.setChildIndex(this.payTablePage3Fish3Aura, 3),
          (this.payTablePage3Fish2AuraAnimation =
            this.payTablePage3Fish2Aura.getComponent(Laya.Animator2D)),
          (this.payTablePage3Fish3AuraAnimation =
            this.payTablePage3Fish3Aura.getComponent(Laya.Animator2D)),
          this.payTablePage3Fish2AuraAnimation.gotoAndStopByFrame(
            "lv2_run",
            0,
            0,
          ),
          this.payTablePage3Fish2AuraAnimation.gotoAndStopByFrame(
            "lv3_run",
            0,
            0,
          ),
          this.payTablePage3Fish2Aura.scale(0.17, 0.37),
          this.payTablePage3Fish2Aura.pos(130, 110),
          (this.payTablePage3Fish2Aura.rotation = -30),
          this.payTablePage3Fish3Aura.scale(0.2, 0.42),
          this.payTablePage3Fish3Aura.pos(125, 110),
          (this.payTablePage3Fish3Aura.rotation = -30),
          (this.pnlPayTablePage4 =
            this.guiPayTable.getChildByName("pnl_page4")),
          (this.payTablePage4Fish2 =
            this.pnlPayTablePage4.getChildByName("fish2")),
          (this.payTablePage4Fish3 =
            this.pnlPayTablePage4.getChildByName("fish3")),
          (this.payTablePage4Fish2Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          (this.payTablePage4Fish3Aura = Laya.loader
            .getRes(he.FISH_AURA)
            .create()),
          this.payTablePage4Fish2.addChild(this.payTablePage4Fish2Aura),
          this.payTablePage4Fish3.addChild(this.payTablePage4Fish3Aura),
          this.payTablePage4Fish2.setChildIndex(this.payTablePage4Fish2Aura, 3),
          this.payTablePage4Fish3.setChildIndex(this.payTablePage4Fish3Aura, 3),
          (this.payTablePage4Fish2AuraAnimation =
            this.payTablePage4Fish2Aura.getComponent(Laya.Animator2D)),
          (this.payTablePage4Fish3AuraAnimation =
            this.payTablePage4Fish3Aura.getComponent(Laya.Animator2D)),
          this.payTablePage4Fish2AuraAnimation.gotoAndStopByFrame(
            "lv2_run",
            0,
            0,
          ),
          this.payTablePage4Fish2AuraAnimation.gotoAndStopByFrame(
            "lv3_run",
            0,
            0,
          ),
          this.payTablePage4Fish2Aura.scale(0.27, 0.33),
          this.payTablePage4Fish2Aura.pos(125, 110),
          (this.payTablePage4Fish2Aura.rotation = -30),
          this.payTablePage4Fish3Aura.scale(0.27, 0.375),
          this.payTablePage4Fish3Aura.pos(120, 105),
          (this.payTablePage4Fish3Aura.rotation = -30));
      }
      playAura() {
        (this.payTablePage2Fish2AuraAnimation.play("lv2_run"),
          this.payTablePage2Fish3AuraAnimation.play("lv3_run"),
          (this.payTablePage2Fish2Aura.visible = !0),
          (this.payTablePage2Fish3Aura.visible = !0),
          this.payTablePage3Fish2AuraAnimation.play("lv2_run"),
          this.payTablePage3Fish3AuraAnimation.play("lv3_run"),
          (this.payTablePage3Fish2Aura.visible = !0),
          (this.payTablePage3Fish3Aura.visible = !0),
          this.payTablePage4Fish2AuraAnimation.play("lv2_run"),
          this.payTablePage4Fish3AuraAnimation.play("lv3_run"),
          (this.payTablePage4Fish2Aura.visible = !0),
          (this.payTablePage4Fish3Aura.visible = !0));
      }
      stopAura() {
        (this.payTablePage2Fish2AuraAnimation.stop(),
          this.payTablePage2Fish3AuraAnimation.stop(),
          (this.payTablePage2Fish2Aura.visible = !1),
          (this.payTablePage2Fish3Aura.visible = !1),
          this.payTablePage3Fish2AuraAnimation.stop(),
          this.payTablePage3Fish3AuraAnimation.stop(),
          (this.payTablePage3Fish2Aura.visible = !1),
          (this.payTablePage3Fish3Aura.visible = !1),
          this.payTablePage4Fish2AuraAnimation.stop(),
          this.payTablePage4Fish3AuraAnimation.stop(),
          (this.payTablePage4Fish2Aura.visible = !1),
          (this.payTablePage4Fish3Aura.visible = !1));
      }
      initLanguage() {
        let t = Ye.getInstance().getLanguageName();
        ((this.txtHelp = this.pnlMenu.getChildByName("txt_help")),
          (this.specialPage1TxtTitle = this.guiSpecial
            .getChildByName("pnl_page1")
            .getChildByName("txt_title_page")),
          (this.specialPage1Txt = this.guiSpecial
            .getChildByName("pnl_page1")
            .getChildByName("text")),
          (this.specialPage2TxtTitle = this.guiSpecial
            .getChildByName("pnl_page2")
            .getChildByName("txt_title_page")),
          (this.specialPage2Txt = this.guiSpecial
            .getChildByName("pnl_page2")
            .getChildByName("text")),
          (this.specialPage3TxtTitle = this.guiSpecial
            .getChildByName("pnl_page3")
            .getChildByName("txt_title_page")),
          (this.specialPage3Txt = this.guiSpecial
            .getChildByName("pnl_page3")
            .getChildByName("text")),
          (this.specialPage4TxtTitle = this.guiSpecial
            .getChildByName("pnl_page4")
            .getChildByName("txt_title_page")),
          (this.specialPage4Txt = this.guiSpecial
            .getChildByName("pnl_page4")
            .getChildByName("text")),
          (this.specialPage5TxtTitle = this.guiSpecial
            .getChildByName("pnl_page5")
            .getChildByName("txt_title_page")),
          (this.specialPage5Txt = this.guiSpecial
            .getChildByName("pnl_page5")
            .getChildByName("text")),
          (this.specialPage6TxtTitle = this.guiSpecial
            .getChildByName("pnl_page6")
            .getChildByName("txt_title_page")),
          (this.specialPage6Txt = this.guiSpecial
            .getChildByName("pnl_page6")
            .getChildByName("text")),
          (this.specialPage7TxtTitle = this.guiSpecial
            .getChildByName("pnl_page7")
            .getChildByName("txt_title_page")),
          (this.specialPage7Txt = this.guiSpecial
            .getChildByName("pnl_page7")
            .getChildByName("text")),
          (this.specialPage8TxtTitle = this.guiSpecial
            .getChildByName("pnl_page8")
            .getChildByName("txt_title_page")),
          (this.specialPage8Txt = this.guiSpecial
            .getChildByName("pnl_page8")
            .getChildByName("text")),
          (this.specialPage9TxtTitle = this.guiSpecial
            .getChildByName("pnl_page9")
            .getChildByName("txt_title_page")),
          (this.specialPage9Txt = this.guiSpecial
            .getChildByName("pnl_page9")
            .getChildByName("text")),
          (this.specialPage10TxtTitle = this.guiSpecial
            .getChildByName("pnl_page10")
            .getChildByName("txt_title_page")),
          (this.specialPage10Txt = this.guiSpecial
            .getChildByName("pnl_page10")
            .getChildByName("text")),
          (this.payTablePage1TxtTitle = this.guiPayTable
            .getChildByName("pnl_page1")
            .getChildByName("txt_title_page")),
          (this.payTablePage2TxtTitle = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("txt_title_page")),
          (this.payTablePage2TxtName = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("txt_name")),
          (this.payTablePage2Fish1TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish1")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage2Fish2TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish2")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage2Fish3TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish3")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage3TxtTitle = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("txt_title_page")),
          (this.payTablePage3TxtName = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("txt_name")),
          (this.payTablePage3Fish1TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish1")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage3Fish2TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish2")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage3Fish3TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish3")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage4TxtTitle = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("txt_title_page")),
          (this.payTablePage4TxtName = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("txt_name")),
          (this.payTablePage4Fish1TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish1")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage4Fish2TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish2")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage4Fish3TxtRateWin3 = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish3")
            .getChildByName("txt_rate_win3")),
          (this.payTablePage5TxtTitle = this.guiPayTable
            .getChildByName("pnl_page5")
            .getChildByName("txt_title_page")),
          (this.payTablePage5Fish1TxtName = this.guiPayTable
            .getChildByName("pnl_page5")
            .getChildByName("fish1")
            .getChildByName("txt_name")),
          (this.payTablePage5Fish2TxtName = this.guiPayTable
            .getChildByName("pnl_page5")
            .getChildByName("fish2")
            .getChildByName("txt_name")),
          (this.payTablePage6TxtTitle = this.guiPayTable
            .getChildByName("pnl_page6")
            .getChildByName("txt_title_page")),
          (this.payTablePage6Fish1TxtName = this.guiPayTable
            .getChildByName("pnl_page6")
            .getChildByName("fish1")
            .getChildByName("txt_name")),
          (this.payTablePage7TxtTitle = this.guiPayTable
            .getChildByName("pnl_page7")
            .getChildByName("txt_title_page")),
          (this.payTablePage7Fish1TxtName = this.guiPayTable
            .getChildByName("pnl_page7")
            .getChildByName("fish1")
            .getChildByName("txt_name")),
          (this.payTablePage8TxtTitle = this.guiPayTable
            .getChildByName("pnl_page8")
            .getChildByName("txt_title_page")),
          (this.payTablePage8Fish1TxtName = this.guiPayTable
            .getChildByName("pnl_page8")
            .getChildByName("fish1")
            .getChildByName("txt_name")),
          (this.payTablePage9TxtTitle = this.guiPayTable
            .getChildByName("pnl_page9")
            .getChildByName("txt_title_page")),
          (this.payTablePage9Fish1TxtName = this.guiPayTable
            .getChildByName("pnl_page9")
            .getChildByName("fish1")
            .getChildByName("txt_name")));
        let e = this.pnlInterface.getChildByName("bg");
        ((this.interfaceMenuTxt = e
          .getChildByName("menu")
          .getChildByName("text")),
          (this.interfaceLaserLockTxtName = e
            .getChildByName("laser_lock")
            .getChildByName("txt_name")),
          (this.interfaceLaserLockTxt = e
            .getChildByName("laser_lock")
            .getChildByName("text")),
          (this.interfaceLaserNormalTxtName = e
            .getChildByName("normal_lock")
            .getChildByName("txt_name")),
          (this.interfaceNormalLockTxt = e
            .getChildByName("normal_lock")
            .getChildByName("text")),
          (this.interfaceSharkBiteTxtName = e
            .getChildByName("shark_bite")
            .getChildByName("txt_name")),
          (this.interfaceSharkBiteTxt = e
            .getChildByName("shark_bite")
            .getChildByName("text")),
          (this.interfaceJellyfishCannonTxtName = e
            .getChildByName("jellyfish_cannon")
            .getChildByName("txt_name")),
          (this.interfaceJellyfishCannonTxt = e
            .getChildByName("jellyfish_cannon")
            .getChildByName("text")),
          (this.interfaceEagleClawHookTxtName = e
            .getChildByName("eagle_claw_hook")
            .getChildByName("txt_name")),
          (this.interfaceEagleClawHookTxt = e
            .getChildByName("eagle_claw_hook")
            .getChildByName("text")),
          (this.interfaceLightningBallTxt = e
            .getChildByName("lightning_ball")
            .getChildByName("text")),
          (this.interfaceRoomTxtName = e
            .getChildByName("room")
            .getChildByName("txt_change_room")),
          (this.interfaceRoomTxt = e
            .getChildByName("room")
            .getChildByName("text")),
          "en" != t &&
            (Ye.getInstance().localizeImageText(this.txtHelp, oe.TXT_HELP),
            Ye.getInstance().localizeImageText(
              this.txtSpecial,
              oe.TXT_SPECIAL_ON,
            ),
            Ye.getInstance().localizeImageText(
              this.txtPayTable,
              oe.TXT_PAYTABLE,
            ),
            Ye.getInstance().localizeImageText(
              this.txtInterface,
              oe.TXT_INTERFACE,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage1TxtTitle,
              oe.TXT_TITLE_MENU1_1,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage1Txt,
              oe.TXT_MENU1_1,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage2TxtTitle,
              oe.TXT_TITLE_MENU1_2,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage2Txt,
              oe.TXT_MENU1_2,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage3TxtTitle,
              oe.TXT_TITLE_MENU1_3,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage3Txt,
              oe.TXT_MENU1_3,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage4TxtTitle,
              oe.TXT_TITLE_MENU1_4,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage4Txt,
              oe.TXT_MENU1_4,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage5TxtTitle,
              oe.TXT_TITLE_MENU1_5,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage5Txt,
              oe.TXT_MENU1_5,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage6TxtTitle,
              oe.TXT_TITLE_MENU1_6,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage6Txt,
              oe.TXT_MENU1_6,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage7TxtTitle,
              oe.TXT_TITLE_MENU1_7,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage7Txt,
              oe.TXT_MENU1_7,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage8TxtTitle,
              oe.TXT_TITLE_MENU1_8,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage8Txt,
              oe.TXT_MENU1_8,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage9TxtTitle,
              oe.TXT_TITLE_MENU1_9,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage9Txt,
              oe.TXT_MENU1_9,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage10TxtTitle,
              oe.TXT_TITLE_MENU1_10,
            ),
            Ye.getInstance().localizeImageText(
              this.specialPage10Txt,
              oe.TXT_MENU1_10,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage1TxtTitle,
              oe.TXT_TITLE_MENU2_1,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2TxtTitle,
              oe.TXT_TITLE_MENU2_3,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2TxtTitle,
              oe.TXT_TITLE_MENU2_3,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage3TxtTitle,
              oe.TXT_TITLE_MENU2_3,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage4TxtTitle,
              oe.TXT_TITLE_MENU2_3,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage5TxtTitle,
              oe.TXT_TITLE_MENU2_4,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage6TxtTitle,
              oe.TXT_TITLE_MENU2_4,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage7TxtTitle,
              oe.TXT_TITLE_MENU2_5,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage8TxtTitle,
              oe.TXT_TITLE_MENU2_5,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage9TxtTitle,
              oe.TXT_TITLE_MENU2_5,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2TxtName,
              oe.TXT_MENU_FONT_1,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage3TxtName,
              oe.TXT_MENU_FONT_2,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage4TxtName,
              oe.TXT_MENU_FONT_3,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage5Fish1TxtName,
              oe.TXT_MENU_FONT_4,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage5Fish2TxtName,
              oe.TXT_MENU_FONT_5,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage6Fish1TxtName,
              oe.TXT_MENU_FONT_6,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage7Fish1TxtName,
              oe.TXT_MENU_FONT_7,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage8Fish1TxtName,
              oe.TXT_MENU_FONT_8,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage9Fish1TxtName,
              oe.TXT_MENU_FONT_9,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2Fish1TxtRateWin3,
              oe.TXT_MENU_FONT_10,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2Fish2TxtRateWin3,
              oe.TXT_MENU_FONT_11,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage2Fish3TxtRateWin3,
              oe.TXT_MENU_FONT_12,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage3Fish1TxtRateWin3,
              oe.TXT_MENU_FONT_10,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage3Fish2TxtRateWin3,
              oe.TXT_MENU_FONT_11,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage3Fish3TxtRateWin3,
              oe.TXT_MENU_FONT_12,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage4Fish1TxtRateWin3,
              oe.TXT_MENU_FONT_10,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage4Fish2TxtRateWin3,
              oe.TXT_MENU_FONT_11,
            ),
            Ye.getInstance().localizeImageText(
              this.payTablePage4Fish3TxtRateWin3,
              oe.TXT_MENU_FONT_12,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceMenuTxt,
              oe.TXT_MENU3_1,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceLaserLockTxtName,
              oe.TXT_LASER_LOCK,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceLaserLockTxt,
              oe.TXT_MENU3_2,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceLaserNormalTxtName,
              oe.TXT_NORMAL_LOCK,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceNormalLockTxt,
              oe.TXT_MENU3_3,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceSharkBiteTxtName,
              oe.TXT_SHARK_BITE,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceSharkBiteTxt,
              oe.TXT_MENU3_4,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceJellyfishCannonTxtName,
              oe.TXT_JELLYFISH_CANNON,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceJellyfishCannonTxt,
              oe.TXT_MENU3_5,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceEagleClawHookTxtName,
              oe.TXT_EAGLE_CLAW_HOOK,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceEagleClawHookTxt,
              oe.TXT_MENU3_6,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceLightningBallTxt,
              oe.TXT_MENU3_7,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceRoomTxtName,
              oe.TXT_CHANGE_ROOM,
            ),
            Ye.getInstance().localizeImageText(
              this.interfaceRoomTxt,
              oe.TXT_MENU3_8,
            )));
      }
      initLoading() {
        const t = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish1"),
          e = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish2"),
          i = this.guiPayTable
            .getChildByName("pnl_page2")
            .getChildByName("fish3"),
          s = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish1"),
          a = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish2"),
          n = this.guiPayTable
            .getChildByName("pnl_page3")
            .getChildByName("fish3"),
          o = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish1"),
          h = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish2"),
          l = this.guiPayTable
            .getChildByName("pnl_page4")
            .getChildByName("fish3"),
          r = this.guiPayTable
            .getChildByName("pnl_page5")
            .getChildByName("fish1"),
          c = this.guiPayTable
            .getChildByName("pnl_page5")
            .getChildByName("fish2"),
          _ = this.guiPayTable
            .getChildByName("pnl_page6")
            .getChildByName("fish1"),
          p = this.guiPayTable
            .getChildByName("pnl_page7")
            .getChildByName("fish1"),
          g = this.guiPayTable
            .getChildByName("pnl_page8")
            .getChildByName("fish1"),
          d = this.guiPayTable
            .getChildByName("pnl_page9")
            .getChildByName("fish1");
        ((this.loadingFish1page2 = Laya.loader.getRes(he.LOADING).create()),
          t.addChild(this.loadingFish1page2),
          this.loadingFish1page2.pos(125, 120),
          (this.loadingFish2page2 = Laya.loader.getRes(he.LOADING).create()),
          e.addChild(this.loadingFish2page2),
          this.loadingFish2page2.pos(125, 120),
          (this.loadingFish3page2 = Laya.loader.getRes(he.LOADING).create()),
          i.addChild(this.loadingFish3page2),
          this.loadingFish3page2.pos(125, 120),
          (this.loadingFish1page3 = Laya.loader.getRes(he.LOADING).create()),
          s.addChild(this.loadingFish1page3),
          this.loadingFish1page3.pos(125, 120),
          (this.loadingFish2page3 = Laya.loader.getRes(he.LOADING).create()),
          a.addChild(this.loadingFish2page3),
          this.loadingFish2page3.pos(125, 120),
          (this.loadingFish3page3 = Laya.loader.getRes(he.LOADING).create()),
          n.addChild(this.loadingFish3page3),
          this.loadingFish3page3.pos(125, 120),
          (this.loadingFish1page4 = Laya.loader.getRes(he.LOADING).create()),
          o.addChild(this.loadingFish1page4),
          this.loadingFish1page4.pos(125, 120),
          (this.loadingFish2page4 = Laya.loader.getRes(he.LOADING).create()),
          h.addChild(this.loadingFish2page4),
          this.loadingFish2page4.pos(125, 120),
          (this.loadingFish3page4 = Laya.loader.getRes(he.LOADING).create()),
          l.addChild(this.loadingFish3page4),
          this.loadingFish3page4.pos(125, 120),
          (this.loadingFish1page5 = Laya.loader.getRes(he.LOADING).create()),
          r.addChild(this.loadingFish1page5),
          this.loadingFish1page5.pos(125, 120),
          (this.loadingFish2page5 = Laya.loader.getRes(he.LOADING).create()),
          c.addChild(this.loadingFish2page5),
          this.loadingFish2page5.pos(125, 120),
          (this.loadingFish1page6 = Laya.loader.getRes(he.LOADING).create()),
          _.addChild(this.loadingFish1page6),
          this.loadingFish1page6.pos(125, 120),
          (this.loadingFish1page7 = Laya.loader.getRes(he.LOADING).create()),
          p.addChild(this.loadingFish1page7),
          this.loadingFish1page7.pos(125, 120),
          (this.loadingFish1page8 = Laya.loader.getRes(he.LOADING).create()),
          g.addChild(this.loadingFish1page8),
          this.loadingFish1page8.pos(125, 120),
          (this.loadingFish1page9 = Laya.loader.getRes(he.LOADING).create()),
          d.addChild(this.loadingFish1page9),
          this.loadingFish1page9.pos(125, 120),
          (this.animatorLoadingFish1page2 = this.loadingFish1page2.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page2.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page2.play("loading"),
          (this.animatorLoadingFish2page2 = this.loadingFish2page2.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish2page2.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish2page2.play("loading"),
          (this.animatorLoadingFish3page2 = this.loadingFish3page2.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish3page2.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish3page2.play("loading"),
          (this.animatorLoadingFish1page3 = this.loadingFish1page3.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page3.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page3.play("loading"),
          (this.animatorLoadingFish2page3 = this.loadingFish2page3.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish2page3.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish2page3.play("loading"),
          (this.animatorLoadingFish3page3 = this.loadingFish3page3.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish3page3.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish3page3.play("loading"),
          (this.animatorLoadingFish1page4 = this.loadingFish1page4.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page4.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page4.play("loading"),
          (this.animatorLoadingFish2page4 = this.loadingFish2page4.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish2page4.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish2page4.play("loading"),
          (this.animatorLoadingFish3page4 = this.loadingFish3page4.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish3page4.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish3page4.play("loading"),
          (this.animatorLoadingFish1page5 = this.loadingFish1page5.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page5.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page5.play("loading"),
          (this.animatorLoadingFish2page5 = this.loadingFish2page5.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish2page5.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish2page5.play("loading"),
          (this.animatorLoadingFish1page6 = this.loadingFish1page6.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page6.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page6.play("loading"),
          (this.animatorLoadingFish1page7 = this.loadingFish1page7.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page7.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page7.play("loading"),
          (this.animatorLoadingFish1page8 = this.loadingFish1page8.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page8.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page8.play("loading"),
          (this.animatorLoadingFish1page9 = this.loadingFish1page9.getComponent(
            Laya.Animator2D,
          )),
          this.animatorLoadingFish1page9.gotoAndStopByFrame("loading", 0, 0),
          this.animatorLoadingFish1page9.play("loading"));
      }
      onButtonCloseTouches() {
        (this.hide(), ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonSpecialTouches() {
        if (!this.isActiveSpecial) {
          (this.refreshPnlInfo(),
            (this.isActiveSpecial = !0),
            (this.pnlSpecial.visible = !0),
            this.bgActiveMenu.pos(this.btnSpecial.x, this.btnSpecial.y),
            "en" != Ye.getInstance().getLanguageName()
              ? Ye.getInstance().localizeImageText(
                  this.txtSpecial,
                  oe.TXT_SPECIAL_ON,
                )
              : (this.txtSpecial.skin = oe.SPECIAL_ON_WORD));
        }
        ai.getInstance().playSFXShoot(pe.CLICK);
      }
      onButtonPayTableTouches() {
        if (!this.isActivePayTable) {
          (this.refreshPnlInfo(),
            (this.isActivePayTable = !0),
            (this.pnlPayTable.visible = !0),
            this.bgActiveMenu.pos(this.btnPayTable.x, this.btnPayTable.y),
            "en" != Ye.getInstance().getLanguageName()
              ? Ye.getInstance().localizeImageText(
                  this.txtPayTable,
                  oe.TXT_PAYTABLE_ON,
                )
              : (this.txtPayTable.skin = oe.PAYTABLE_ON_WORD),
            this.effectSwimKind3PnlPayTable(),
            this.playAnimatorFish(),
            this.checkWaitingLoadSpine());
        }
        ai.getInstance().playSFXShoot(pe.CLICK);
      }
      onButtonInterfaceTouches() {
        (this.refreshPnlInfo(),
          (this.pnlInterface.visible = !0),
          this.bgActiveMenu.pos(this.btnInterface.x, this.btnInterface.y),
          "en" != Ye.getInstance().getLanguageName()
            ? Ye.getInstance().localizeImageText(
                this.txtInterface,
                oe.TXT_INTERFACE_ON,
              )
            : (this.txtInterface.skin = oe.INTERFACE_ON_WORD),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      refreshPnlInfo() {
        ((this.pnlSpecial.visible = !1),
          (this.pnlPayTable.visible = !1),
          (this.pnlInterface.visible = !1),
          "en" != Ye.getInstance().getLanguageName()
            ? (Ye.getInstance().localizeImageText(
                this.txtSpecial,
                oe.TXT_SPECIAL,
              ),
              Ye.getInstance().localizeImageText(
                this.txtPayTable,
                oe.TXT_PAYTABLE,
              ),
              Ye.getInstance().localizeImageText(
                this.txtInterface,
                oe.TXT_INTERFACE,
              ))
            : ((this.txtSpecial.skin = oe.SPECIAL_WORD),
              (this.txtPayTable.skin = oe.PAYTABLE_WORD),
              (this.txtInterface.skin = oe.INTERFACE_WORD)),
          (this.isActivePayTable = !1),
          (this.isActiveSpecial = !1),
          this.stopEffectSwimKind3PnlPayTable(),
          this.stopAnimatorFish(),
          this.stopSpine());
      }
      playAnimatorFish() {
        for (let t = 0; t < 7; t++) {
          this.pnlPayTablePage1.getChildByName("kind" + t).play();
        }
        (this.animatorFish1Page2 && this.animatorFish1Page2.play(0, !0),
          this.animatorFish2Page2 && this.animatorFish2Page2.play(0, !0),
          this.animatorFish3Page2 && this.animatorFish3Page2.play(0, !0),
          this.animatorFish1Page3 && this.animatorFish1Page3.play(0, !0),
          this.animatorFish2Page3 && this.animatorFish2Page3.play(0, !0),
          this.animatorFish3Page3 && this.animatorFish3Page3.play(0, !0),
          this.animatorFish1Page4 && this.animatorFish1Page4.play(0, !0),
          this.animatorFish2Page4 && this.animatorFish2Page4.play(0, !0),
          this.animatorFish3Page4 && this.animatorFish3Page4.play(0, !0),
          this.playAura());
      }
      stopAnimatorFish() {
        for (let t = 0; t < 7; t++) {
          this.pnlPayTablePage1.getChildByName("kind" + t).stop();
        }
        (this.animatorFish1Page2 && this.animatorFish1Page2.stop(),
          this.animatorFish2Page2 && this.animatorFish2Page2.stop(),
          this.animatorFish3Page2 && this.animatorFish3Page2.stop(),
          this.animatorFish1Page3 && this.animatorFish1Page3.stop(),
          this.animatorFish2Page3 && this.animatorFish2Page3.stop(),
          this.animatorFish3Page3 && this.animatorFish3Page3.stop(),
          this.animatorFish1Page4 && this.animatorFish1Page4.stop(),
          this.animatorFish2Page4 && this.animatorFish2Page4.stop(),
          this.animatorFish3Page4 && this.animatorFish3Page4.stop(),
          this.stopAura());
      }
      effectSwimKind3PnlPayTable() {
        (this.animationKind3PnlPayTable.pos(this.xBaseKind3, this.yBaseKind3),
          xs.to(
            this.animationKind3PnlPayTable,
            {
              x: this.animationKind3PnlPayTable.x + 10,
              y: this.animationKind3PnlPayTable.y + 10,
            },
            500,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              xs.to(
                this.animationKind3PnlPayTable,
                {
                  x: this.animationKind3PnlPayTable.x - 10,
                  y: this.animationKind3PnlPayTable.y - 10,
                },
                550,
                Laya.Ease.sineInOut,
              );
            }),
          ),
          this.animationKind3PnlPayTable.on(
            Laya.Event.COMPLETE,
            this,
            this.effectSwimKind3PnlPayTable,
          ));
      }
      stopEffectSwimKind3PnlPayTable() {
        Laya.Tween.clearAll(this.animationKind3PnlPayTable);
      }
      getListDataPayTable() {
        let t = [];
        for (let e = 0; e < this.guiPayTable.numChildren; e++)
          ((t[e] = {}),
            (t[e].page = this.guiPayTable.getChildAt(e)),
            (t[e].page = r(l({}, t[e].page), {
              visible: !0,
            })),
            this.listPayTable.addItem(t[e]));
      }
      getListDataSpecial() {
        let t = [];
        for (let e = 0; e < this.guiSpecial.numChildren; e++)
          ((t[e] = {}),
            (t[e].page = this.guiSpecial.getChildAt(e)),
            (t[e].page = r(l({}, t[e].page), {
              visible: !0,
            })),
            this.listSpecial.addItem(t[e]));
      }
      getMainObject() {
        return this.pnlInfo;
      }
    },
    Rs = class {
      constructor(t) {
        ((this._container = t),
          (this._bgNormal = this._container.getChildByName("bg_normal")),
          (this._bgBoss = this._container.getChildByName("bg_boss")),
          (this._bgNormalCurrent = this._bgNormal.graphics.cmds[0]),
          (this._bgNormalCurrent.visible = !1),
          (this._bgNormalCurrent.active = !1),
          (this._sceneId = 1),
          this.initParticle(),
          this.initBgNormal());
      }
      initBgNormal() {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadMaterial(de.WAVE),
            (this._waveMaterial = Laya.Loader.getRes(de.WAVE)),
            (this._bgNormal.material = this._waveMaterial),
            (this._offset = new Laya.Vector2(0, 0)),
            (this._lastTime = 0.001 * Date.now()),
            Laya.timer.frameLoop(3, this, () => {
              const t = 0.001 * Date.now(),
                e = t - this._lastTime;
              this._lastTime = t;
              const i = this._offset;
              ((i.x -= 0.14 * e),
                (i.y -= 0.1 * e),
                i.x >= 1 && (i.x -= 1),
                i.x <= -1 && (i.x += 1),
                i.y >= 1 && (i.y -= 1),
                i.y <= -1 && (i.y += 1),
                this._isBurningOut &&
                  this._burnOutMaterial.setVector2("offsetInput", this._offset),
                this._isRippling &&
                  this._rippleMaterial.setVector2("offset", this._offset),
                this._waveMaterial.setVector2("offset", this._offset));
            }));
        });
      }
      toBoss(t) {
        return _(this, null, function* () {
          ((this._isBoss = !0),
            this._tweenBoss &&
              (this._tweenBoss.clear(), (this._tweenBoss = null)),
            this._tweenNormal &&
              (this._tweenNormal.clear(), (this._tweenNormal = null)),
            (this._isBusy = !0));
          let e = null;
          switch ((ai.getInstance().playSFX(pe.ALERT), t)) {
            case 19: {
              if (
                (yield Qe.getInstance().loadMaterial(de.BURN_OUT),
                (this._burnOutMaterial = Laya.Loader.getRes(de.BURN_OUT)),
                (e = oe.BACKGROUND_PHOENIX),
                ai.getInstance().changeBGM(pe.BGM_PHOENIX),
                null === e)
              )
                return;
              (this._bgBoss.loadImage(e, null),
                (this._bgBoss.visible = !0),
                (this._bgBoss.active = !0),
                (this._bgBoss.alpha = 1),
                (this._bgBoss.material = this._waveMaterial),
                (this._isBurningOut = !0),
                (this._bgNormal.material = this._burnOutMaterial),
                this._burnOutMaterial.setFloat("burned", 0));
              const t = {
                value: 0,
              };
              ((this._tweenBoss = Laya.Tween.to(
                t,
                {
                  value: 1,
                },
                2600,
                (e, i, s, a) => (
                  this._burnOutMaterial.setFloat("burned", t.value),
                  (s * e) / a + i
                ),
                Laya.Handler.create(this, () => {
                  ((this._tweenBoss = null),
                    (this._bgNormal.material = this._waveMaterial),
                    (this._bgNormal.visible = !1),
                    (this._bgNormal.active = !1),
                    (this._isBurningOut = !1),
                    (this._isBusy = !1));
                }),
              )),
                this.stopParticleBubble(),
                this.playParticleLava(),
                this._backgroundNaga &&
                  (this._backgroundNaga.destroy(),
                  (this._backgroundNaga = null)),
                this._isBoss || this.toNormal());
              break;
            }
            case 20: {
              if (
                (yield Qe.getInstance().loadMaterial(de.RIPPLE),
                (this._rippleMaterial = Laya.Loader.getRes(de.RIPPLE)),
                (e = oe.BACKGROUND_CROCODILE),
                ai.getInstance().changeBGM(pe.BGM_CROCODILE),
                null === e)
              )
                return;
              (this._bgBoss.loadImage(e, null),
                (this._bgBoss.visible = !0),
                (this._bgBoss.active = !0),
                (this._bgBoss.alpha = 1),
                (this._bgBoss.material = this._waveMaterial),
                (this._isRippling = !0),
                (this._bgNormal.material = this._rippleMaterial),
                this._rippleMaterial.setFloat("ripple", 0));
              const t = {
                value: 0,
              };
              (this._rippleMaterial.setFloat("time", 0),
                (this._tweenBoss = Laya.Tween.to(
                  t,
                  {
                    value: 1,
                  },
                  3200,
                  (e, i, s, a) => (
                    this._rippleMaterial.setFloat("ripple", t.value),
                    this._rippleMaterial.setFloat("time", 0.001 * e + 1),
                    (s * e) / a + i
                  ),
                  Laya.Handler.create(this, () => {
                    ((this._tweenBoss = null),
                      (this._bgNormal.material = this._waveMaterial),
                      (this._bgNormal.visible = !1),
                      (this._bgNormal.active = !1),
                      (this._isRippling = !1),
                      (this._isBusy = !1));
                  }),
                )),
                this.stopParticleBubble(),
                this.stopParticleLava(),
                this._backgroundNaga &&
                  (this._backgroundNaga.destroy(),
                  (this._backgroundNaga = null)),
                this._isBoss || this.toNormal());
              break;
            }
            case 21:
              if (!this._backgroundNaga) {
                if (
                  (yield Qe.getInstance().loadMaterial(de.RIPPLE),
                  yield Qe.getInstance().loadPrefab(he.BACKGROUND_NAGA),
                  (this._backgroundNaga = Laya.loader
                    .getRes(he.BACKGROUND_NAGA)
                    .create()),
                  this._backgroundNaga.pos(740, 348),
                  this._bgBoss.addChild(this._backgroundNaga),
                  (this._rippleMaterial = Laya.Loader.getRes(de.RIPPLE)),
                  (e = oe.BACKGROUND_NAGA),
                  ai.getInstance().changeBGM(pe.BGM_NAGA),
                  null === e)
                )
                  return;
                (this._bgBoss.loadImage(e, null),
                  (this._bgBoss.visible = !0),
                  (this._bgBoss.active = !0),
                  (this._bgBoss.alpha = 1),
                  (this._bgBoss.material = this._waveMaterial),
                  (this._isRippling = !0),
                  (this._bgNormal.material = this._rippleMaterial),
                  this._rippleMaterial.setFloat("ripple", 0));
                const t = {
                  value: 0,
                };
                (this._rippleMaterial.setFloat("time", 0),
                  (this._tweenBoss = Laya.Tween.to(
                    t,
                    {
                      value: 1,
                    },
                    3200,
                    (e, i, s, a) => (
                      this._rippleMaterial.setFloat("ripple", t.value),
                      this._rippleMaterial.setFloat("time", 0.001 * e + 1),
                      (s * e) / a + i
                    ),
                    Laya.Handler.create(this, () => {
                      ((this._tweenBoss = null),
                        (this._bgNormal.material = this._waveMaterial),
                        (this._bgNormal.visible = !1),
                        (this._bgNormal.active = !1),
                        (this._isRippling = !1),
                        (this._isBusy = !1));
                    }),
                  )));
                const i = Ze.getInstance().scaleRate,
                  s = this._backgroundNaga.getChildByName("particle_bubble"),
                  a = this._backgroundNaga.getChildByName("particle_smoke"),
                  n = this._backgroundNaga.getChildByName("lighting");
                (s.scale(i.x, i.y),
                  a.scale(i.x, i.y),
                  n.scale(i.x, i.y),
                  this.stopParticleBubble(),
                  this.stopParticleLava(),
                  this._isBoss || this.toNormal());
              }
          }
        });
      }
      toNormal() {
        ((this._isBoss = !1),
          this._tweenBoss &&
            (this._tweenBoss.clear(), (this._tweenBoss = null)),
          this._tweenNormal &&
            (this._tweenNormal.clear(), (this._tweenNormal = null)),
          (this._bgNormal.material = this._waveMaterial),
          this.stopParticleLava(),
          (this._bgNormal.alpha = 0),
          (this._bgNormal.visible = !0),
          (this._bgNormal.active = !0),
          (this._tweenNormal = Laya.Tween.to(
            this._bgNormal,
            {
              alpha: 1,
            },
            1500,
            Laya.Ease.linearNone,
            Laya.Handler.create(this, () => {
              ((this._tweenNormal = null),
                (this._bgBoss.visible = !1),
                (this._bgBoss.active = !1),
                this.playParticleBubble(),
                this._backgroundNaga &&
                  (this._backgroundNaga.destroy(),
                  (this._backgroundNaga = null)));
            }),
          )));
      }
      switchNormal(t, e = 1e3, i = !0) {
        if (this._isBusy || this._sceneId === t) return;
        (this.stopParticleLava(),
          (this._sceneId = t),
          (this._isBusy = !0),
          (this._bgNormal.alpha = 1),
          (this._bgNormal.visible = !0),
          (this._bgNormalCurrent.visible = !1),
          (this._bgNormalCurrent.active = !1),
          (this._bgNormalCurrent.width = 0));
        const s = "BACKGROUND_" + t;
        ((this._bgNormalCurrent.texture = this._bgNormal.texture),
          this._bgNormal.loadImage(oe[s], null),
          i
            ? ((this._bgNormalCurrent.width = 1),
              (this._bgNormalCurrent.visible = !0),
              (this._bgNormalCurrent.active = !0),
              Laya.Tween.to(
                this._bgNormalCurrent,
                {},
                e,
                (t, e, i, s) => (
                  (this._bgNormalCurrent.width = 1 - ((i * t) / s + e)),
                  (i * t) / s + e
                ),
                Laya.Handler.create(this, () => {
                  ((this._bgNormalCurrent.width = 0),
                    (this._bgNormalCurrent.visible = !1),
                    (this._bgNormalCurrent.active = !1),
                    (this._isBusy = !1));
                }),
              ))
            : (this._isBusy = !1));
      }
      initParticle() {
        ((this._particleBubble1 =
          this._container.getChildByName("particle_bubble_1")),
          (this._particleBubble2 =
            this._container.getChildByName("particle_bubble_2")),
          (this._particleLava1 =
            this._container.getChildByName("particle_lava_1")),
          (this._particleLava2 =
            this._container.getChildByName("particle_lava_2")),
          (this._particleBubble1Script = this._particleBubble1.getComponent(
            Laya.Script,
          )),
          (this._particleBubble2Script = this._particleBubble2.getComponent(
            Laya.Script,
          )),
          (this._particleLava1Script = this._particleLava1.getComponent(
            Laya.Script,
          )),
          (this._particleLava2Script = this._particleLava2.getComponent(
            Laya.Script,
          )),
          this.playParticleBubble(),
          this.stopParticleLava());
      }
      playParticleBubble() {
        (this._particleBubble1Script.resetSystem(),
          this._particleBubble2Script.resetSystem(),
          (this._particleBubble1.visible = !0),
          (this._particleBubble1.active = !0),
          (this._particleBubble2.visible = !0),
          (this._particleBubble2.active = !0));
      }
      stopParticleBubble() {
        (this._particleBubble1Script.stopSystem(),
          this._particleBubble2Script.stopSystem(),
          (this._particleBubble1.visible = !1),
          (this._particleBubble1.active = !1),
          (this._particleBubble2.visible = !1),
          (this._particleBubble2.active = !1));
      }
      playParticleLava() {
        (this._particleLava1Script.resetSystem(),
          this._particleLava2Script.resetSystem(),
          (this._particleLava1.visible = !0),
          (this._particleLava1.active = !0),
          (this._particleLava2.visible = !0),
          (this._particleLava2.active = !0));
      }
      stopParticleLava() {
        (this._particleLava1Script.stopSystem(),
          this._particleLava2Script.stopSystem(),
          (this._particleLava1.visible = !1),
          (this._particleLava1.active = !1),
          (this._particleLava2.visible = !1),
          (this._particleLava2.active = !1));
      }
      resizeParticle() {
        const t = Ze.getInstance().scaleRate;
        (this._particleBubble1.scale(t.x, t.y),
          this._particleBubble2.scale(t.x, t.y),
          this._particleLava1.scale(t.x, t.y),
          this._particleLava2.scale(t.x, t.y));
      }
      resetToChangeRoom() {
        (this._tweenBoss && (this._tweenBoss.clear(), (this._tweenBoss = null)),
          this._tweenNormal &&
            (this._tweenNormal.clear(), (this._tweenNormal = null)),
          (this._sceneId = null));
      }
    },
    Ms = class {
      constructor(t, e) {
        ((this._isWaving = !1),
          (this._isBubbleComing = !1),
          (this._coin = 0),
          (this._winRate = 0),
          (this._counter = 0),
          (this._times = 0),
          (this._rollingCoin = 0),
          (this._countCoin = 0),
          (this._flip = 1),
          (this._count = Laya.loader.getRes(he.CROCODILE_COUNT).create()),
          (this._countAnimator = this._count.getComponent(Laya.Animator2D)),
          (this._count.zOrder = 100),
          (this._bite = Laya.loader.getRes(he.CROCODILE_BITE).create()),
          this._bite.pos(-5e3, 0),
          (this._count.visible = !1),
          (this._count.active = !1),
          (this._bite.visible = !1),
          (this._bite.active = !1),
          e.addChild(this._count),
          (this._effectNode = new Laya.Sprite()),
          t.addChild(this._effectNode),
          this._effectNode.addChild(this._bite),
          (this._scaleNode = this._count
            .getChildByName("label")
            .getChildByName("scale_node")),
          (this._num = this._scaleNode.getChildByName("money")),
          (this._spineNode = this._bite.getChildByName("fish")),
          (this._titleCrystal =
            this._scaleNode.getChildByName("title_crystal")),
          (this._particleStar = this._scaleNode
            .getChildByName("board")
            .getChildByName("particle_stars")),
          (this._particleStarScript = this._particleStar.getComponent(
            Laya.Script,
          )),
          (this._particleIceSmokeLeft = this._scaleNode.getChildByName(
            "particle_system_ice_smoke_left_2",
          )),
          (this._particleIceSmokeLeftScript =
            this._particleIceSmokeLeft.getComponent(Laya.Script)),
          (this._particleIceSmokeRight = this._scaleNode.getChildByName(
            "particle_system_ice_smoke_right_2",
          )),
          (this._particleIceSmokeRightScript =
            this._particleIceSmokeRight.getComponent(Laya.Script)));
        const i = this._bite.getChildByName("angry");
        ((this._particleAngryLeft = i.getChildByName("particle_system_1")),
          (this._particleAngryLeftScript = this._particleAngryLeft.getComponent(
            Laya.Script,
          )),
          (this._particleAngryRight = i.getChildByName("particle_system_2")),
          (this._particleAngryRightScript =
            this._particleAngryRight.getComponent(Laya.Script)),
          this._particleStarScript.stopSystem(),
          this._particleIceSmokeLeftScript.stopSystem(),
          this._particleIceSmokeRightScript.stopSystem(),
          this._particleAngryLeftScript.stopSystem(),
          this._particleAngryRightScript.stopSystem());
      }
      play(t, e, i, s) {
        ((this._callbackEnd = s),
          (this._flip = 1),
          (this._counter = 1),
          (this._times = this.getBiteTimes(e)),
          (this._winRate = e),
          (this._coin = i),
          (this._rollingCoin = 0),
          (this._countCoin = 0),
          this._count.pos(t.x, t.y),
          this._countAnimator.gotoAndStopByFrame("start", 0, 0),
          this._countAnimator.play("start"),
          (this._num.text = "0"),
          (this._count.visible = !0),
          (this._count.active = !0),
          (this._count.alpha = 1),
          this._particleStarScript.resetSystem(),
          this._particleIceSmokeLeftScript.resetSystem(),
          this._particleIceSmokeRightScript.resetSystem(),
          Laya.timer.once(1450, this, () => {
            (Laya.Tween.to(
              this._count,
              {
                x: 640,
                y: 300,
              },
              300,
            ),
              Laya.timer.once(400, this, () => {
                ((this._isWaving = !0),
                  Laya.timer.frameLoop(1, this, this.runWaves));
              }));
          }),
          (this._rateTable = this.getRate1(e)),
          ai.getInstance().playSFX(pe.CROCODILE_START));
      }
      runWaves() {
        if (!this._isWaving) return;
        const t = this._counter >= this._times,
          e = t ? 0 : _i.iRand(-75, 75),
          i = _i.iRand(250, 320);
        let s = new Laya.Point(-i * this._flip, 0);
        s = me.Math.pRotateByAngle(s, new Laya.Point(0, 0), e * me.Math.RAD);
        const a = Ze.getInstance().scaleRate,
          n = this.getWaveFishNoList();
        for (let i = 1; i <= (t ? 3 : 1); i++) this.spawnFish(n, s, i, e);
        (this._effectNode.pos(640 + s.x * a.x, 360 + s.y * a.y),
          (this._effectNode.rotation = e),
          Laya.timer.once(t ? 3e3 : 2200, this, () => {
            ms.getInstance().playSpecialCoin(
              new Laya.Point(640 + s.x * a.x, 360 + s.y * a.y),
            );
          }),
          t
            ? (this.bite2(1100), Laya.timer.clear(this, this.runWaves))
            : this.bite1(1600),
          (this._flip *= -1),
          (this._counter += 1),
          (this._isWaving = !1));
      }
      spawnFish(t, e, i, s) {
        const a = Ze.getInstance().scaleRate,
          n = this._counter,
          o = this._counter >= this._times,
          h = o ? 0.35 : 0.8,
          l = 1 === i,
          r = Ni.getInstance().getCrocodileSmallFish();
        ((r.zOrder = 50), (r.alpha = 1), (r.anchorX = 0.5), (r.anchorY = 0.5));
        const c = r.listFishNode;
        Fe.getInstance().getLayerEffect1().addChild(r);
        for (let e = 0; e < c.length; ++e) {
          let i = c[e];
          if (((i.alpha = 1), Math.random() < h)) {
            const e = Yi.getInstance().createFakeFish(
              t[_i.iRand(0, t.length - 1)] - 1,
            );
            (e.pos(0, 0),
              (e.rotation = 0),
              e.swim(),
              e.resizeFish(),
              i.addChild(e));
          }
        }
        (l && Laya.timer.once(300, this, () => {}),
          r.start(),
          (r.visible = !0),
          (r.active = !0),
          r.pos(640 + e.x * a.y, 360 + e.y * a.y),
          (r.scaleX = this._flip),
          (r.rotation = 1 === i ? s : 2 === i ? s - 30 : s + 30),
          (r.zOrder = 50),
          Laya.timer.once(o ? 3300 : 2380, this, () => {
            const t = new Laya.Point(r.x, r.y);
            for (let t = 0; t < c.length; ++t) {
              c[t].alpha = Math.random() > 0.8 ? 0 : 255;
            }
            (l &&
              Laya.timer.once(300, this, () => {
                this.playBubbleScores(t, n);
              }),
              r.end(),
              Laya.timer.once(2e3, this, () => {
                Laya.Tween.to(
                  r,
                  {
                    alpha: 0,
                  },
                  80,
                );
                for (let t = 0; t < c.length; ++t) {
                  let e = c[t],
                    i = e.getChildAt(0);
                  i && (e.removeChildAt(0), Yi.getInstance().pushFishToPool(i));
                }
                Laya.timer.once(80, this, () => {
                  Ni.getInstance().recoverCrocodileSmallFish(r);
                });
              }));
          }),
          o &&
            Laya.timer.once(2200, this, () => {
              r.setSpeed(0.2);
            }));
      }
      bite1(t) {
        const e = 1200 * this._flip,
          i = e < 0 ? 90 : -90;
        (null != this._spine &&
          (Ni.getInstance().recoverSpineFish(this._spine, 20),
          (this._spine = null)),
          (this._spine = Ni.getInstance().getSpineFish(20)),
          (this._spine.material = Laya.loader.getRes(de.CROCODILE)),
          this._spine.material.setVector4(
            "hueColor",
            new Laya.Vector4(1.1, 0.22, 0.2, 1),
          ),
          (this._spine.visible = !0),
          (this._spine.active = !0),
          this._spineNode.addChild(this._spine),
          (this._bite.rotation = i),
          (this._bite.alpha = 0),
          this._bite.scale(1, 1),
          this._bite.pos(e, 0));
        const s = -e;
        (Laya.timer.once(t, this, () => {
          ((this._bite.alpha = 1),
            (this._bite.visible = !0),
            (this._bite.active = !0),
            this._particleAngryLeftScript.resetSystem(),
            this._particleAngryRightScript.resetSystem(),
            this._spine.play("attack", !1),
            this._spine.playbackRate(1),
            Laya.Tween.to(
              this._bite,
              {
                x: 0,
                y: 0,
              },
              1200,
              Laya.Ease.sineOut,
            ),
            Laya.timer.once(1200, this, () => {
              (this._spine.play("run", !0),
                this._spine.playbackRate(2),
                Laya.Tween.to(
                  this._bite,
                  {
                    x: s,
                    y: 0,
                  },
                  1200,
                  Laya.Ease.sineIn,
                ),
                Laya.timer.once(1200, this, () => {
                  (this._particleAngryLeftScript.stopSystem(),
                    this._particleAngryRightScript.stopSystem());
                }));
            }));
        }),
          Laya.timer.once(t + 900, this, () => {
            ai.getInstance().playSFX(pe.CROCODILE_BITE_1);
          }));
      }
      bite2(t) {
        const e = 2500 * this._flip,
          i = e < 0 ? 90 : -90;
        (null == this._spine &&
          ((this._spine = Ni.getInstance().getSpineFish(20)),
          (this._spine.visible = !0),
          (this._spine.active = !0),
          this._spineNode.addChild(this._spine)),
          (this._bite.rotation = i),
          this._bite.pos(e, 0),
          (this._bite.alpha = 1),
          this._spine.play("run", !0),
          this._spine.playbackRate(1),
          this._bite.scale(2, 2));
        const s = 700 * this._flip,
          a = 500 * this._flip,
          n = -e;
        (Laya.timer.once(t, this, () => {
          Laya.timer.once(800, this, () => {
            ((this._bite.alpha = 1),
              this._spine.playbackRate(1),
              this._spine.play("attack_final", !1),
              this._particleAngryLeftScript.resetSystem(),
              this._particleAngryRightScript.resetSystem(),
              Laya.Tween.to(
                this._bite,
                {
                  x: s,
                  y: 0,
                },
                400,
              ),
              Laya.timer.once(400, this, () => {
                (Laya.Tween.to(
                  this._bite,
                  {
                    x: a,
                    y: 0,
                  },
                  1e3,
                ),
                  Laya.timer.once(1e3, this, () => {
                    (this._spine.playbackRate(2),
                      this._spine.play("run", !0),
                      Laya.Tween.to(
                        this._bite,
                        {
                          x: n,
                          y: 0,
                        },
                        1500,
                      ),
                      Laya.timer.once(1500, this, () => {
                        (this._particleAngryLeftScript.stopSystem(),
                          this._particleAngryRightScript.stopSystem());
                      }));
                  }));
              }));
          });
        }),
          Laya.timer.once(t + 900, this, () => {
            (Laya.timer.once(500, this, () => {}),
              ai.getInstance().playSFX(pe.CROCODILE_BITE_2));
          }));
      }
      playBubbleScores(t, e) {
        let i = this._rateTable[e - 1],
          s = e >= this._times,
          a = [],
          n = [],
          o = i > 120 ? 7 : i > 60 ? 4 : 3;
        const h = Fe.getInstance().getLayerEffect();
        let l = Math.floor(
            s
              ? this._coin - this._rollingCoin
              : (this._coin / this._winRate) * i,
          ),
          r = 0;
        for (let t = 1; t <= o; t++) {
          let t = Math.floor(l / o);
          ((r += l % o), r >= o && ((t += 1), (r -= o)), n.push(t));
        }
        (n.forEach((e) => {
          let i = Ni.getInstance().getCrocodileBubble();
          const s = Ze.getInstance().scaleRate;
          ((i.scaleX = s.x),
            (i.scaleY = s.y),
            h.addChild(i),
            (i.zOrder = 300),
            i.start(7 === o ? 2 : 1, e, t),
            a.push(i));
        }),
          Laya.timer.once(1200, this, () => {
            this._isBubbleComing = !0;
            let t = s ? 2100 : 1e3,
              e = t / Math.max(1, a.length),
              i = this._scaleNode.localToGlobal(
                new Laya.Point(this._titleCrystal.x, this._titleCrystal.y),
              ),
              n = () => {
                (this._countAnimator.play("get", 0, 0),
                  Laya.timer.once(200, this, () => {
                    this._isWaving = !0;
                  }),
                  s && Laya.timer.once(1e3, this, this.end));
              },
              o = () => {
                this._countAnimator.play("get_loop", 0, 0);
              };
            (a.forEach((s, h) => {
              h === a.length - 1
                ? s.end(t + e * h, i, n)
                : 0 === h
                  ? s.end(t + e * h, i, o)
                  : s.end(t + e * h, i);
            }),
              s ? (this._countCoin = this._coin) : (this._countCoin += l),
              Laya.timer.once(t + 200, this, this.playCounterRolling, [
                this._countCoin,
                t,
              ]));
          }),
          ai.getInstance().playSFXOnce(pe.CROCODILE_BUBBLE_SCORES));
      }
      playCounterRolling(t, e) {
        ((this._rollingTime = 0), (this._lastTime = Date.now()));
        let i = this._rollingCoin;
        (Laya.timer.clear(this, this.rollingUpdate),
          Laya.timer.frameLoop(1, this, this.rollingUpdate, [i, t, e]));
      }
      rollingUpdate(t, e, i) {
        if (this._rollingCoin >= this._coin)
          return void Laya.timer.clear(this, this.rollingUpdate);
        ((this._rollingCoin = t + (e - t) * Math.min(this._rollingTime / i, 1)),
          (this._num.text = xe
            .getInstance()
            .formatNumber(Math.floor(this._rollingCoin))));
        const s = Date.now(),
          a = s - this._lastTime;
        ((this._lastTime = s), (this._rollingTime += a));
      }
      getRate1(t) {
        let e = null;
        return (
          (e = t <= 400 ? [[15, 25, 60]] : [[10, 15, 10, 20, 45]]),
          e.forEach((e) => {
            for (let i = 0; i < e.length; i++) e[i] = (t * e[i]) / 100;
          }),
          e ? e[_i.iRand(0, e.length - 1)] : []
        );
      }
      getWaveFishNoList() {
        let t = 1,
          e = [];
        switch (xe.getInstance().clamp(1, 5, this._counter)) {
          case 1:
          case 2:
            ((e = [1, 2, 3, 4]), (t = 2));
            break;
          case 3:
          case 4:
          case 5:
            ((e = [4, 5, 6, 7]), (t = 2));
        }
        for (let i = 0, s = e.length - t; i < s; ++i)
          e.splice(_i.iRand(0, e.length - 1), 1);
        return e;
      }
      getBiteTimes(t) {
        return t > 400 ? 5 : 3;
      }
      end() {
        (this._spine &&
          (this._spineNode.removeChild(this._spine),
          (this._spine.material = null),
          Ni.getInstance().recoverSpineFish(this._spine, 20),
          (this._spine = null)),
          Laya.timer.once(800, this, () => {
            (ai.getInstance().playSFX(pe.CROCODILE_END),
              this._countAnimator.gotoAndStopByFrame("finish", 0, 0),
              this._countAnimator.play("finish"),
              Laya.timer.once(2e3, this, () => {
                (Laya.Tween.to(
                  this._count,
                  {
                    x: 640,
                    y: 360,
                  },
                  200,
                ),
                  this._callbackEnd && this._callbackEnd(),
                  (this._callbackEnd = null),
                  Laya.timer.once(200, this, () => {
                    (Laya.Tween.to(
                      this._count,
                      {
                        alpha: 0,
                      },
                      100,
                    ),
                      Laya.timer.once(100, this, () => {
                        ((this._count.visible = !1),
                          (this._count.active = !1),
                          this._particleStarScript.stopSystem(),
                          this._particleIceSmokeLeftScript.stopSystem(),
                          this._particleIceSmokeRightScript.stopSystem(),
                          this._particleAngryLeftScript.stopSystem(),
                          this._particleAngryRightScript.stopSystem());
                      }));
                  }));
              }));
          }));
      }
    },
    ks = class {
      constructor() {
        ((this.fishIndex = 1),
          (this.effectIndex = 2),
          (this._baseXFinger = 260),
          (this._baseYFinger = 85),
          (this._baseScaleAngry = 1),
          (this._minigame = Laya.Loader.getRes(he.CROCODILE_MINIGAME).create()),
          (this._minigame.active = !1),
          (this._minigame.visible = !1),
          (this._minigame.zOrder = this.effectIndex));
        let t = this._minigame.getChildByName("root"),
          e = t.getChildByName("crocodile_bar");
        ((this.barAnim = e.getComponent(Laya.Animator2D)),
          (this.tipFingerAnimator = this._minigame
            .getChildByName("finger")
            .getComponent(Laya.Animator2D)),
          (this.bg = t.getChildByName("bg")),
          (this.bg.width = S),
          (this.bg.height = L),
          this.updateBgResponsive(this.bg.getChildAt(0), this.bg, null, 0),
          this.updateBgResponsive(
            this.bg.getChildAt(1),
            this.bg,
            null,
            this.bg.height,
          ),
          this.updateBgResponsive(
            this.bg.getChildAt(2),
            this.bg,
            this.bg.width,
            null,
          ),
          this.updateBgResponsive(this.bg.getChildAt(3), this.bg, 0, null),
          (this.angry = Ni.getInstance().getCrocodileAngry()),
          this._minigame.addChild(this.angry),
          (this.angry.zOrder = -1),
          (this._baseScaleAngry = this.angry.scaleX),
          (this.progressBar = e
            .getChildByName("node")
            .getChildByName("progress_bar")),
          (this.progressBar$bar = this.progressBar.getChildByName("bar")));
        let i = e.getChildByName("node").getChildByName("bar_light_ef");
        ((this.progressLight = i.getChildByName("press_ef_node")),
          (this.progressLightAnim = i.getComponent(Laya.Animator2D)));
        let s = e.getChildByName("clock");
        ((this.timeAnim = s.getComponent(Laya.Animator2D)),
          (this.timeStr = s.getChildByName("label")),
          (this.tipImg = e.getChildByName("crocodile_bar_guide")));
        const a = this._minigame.getChildByName("finger");
        ((this._baseXFinger = a.x),
          (this._baseYFinger = a.y),
          xe
            .getInstance()
            .registerButtonEvent(this.bg, this.onClick.bind(this), 1));
      }
      setContainer(t) {
        ((this._container = t),
          this._minigame.pos(
            0.5 * this._container.width,
            0.5 * this._container.height,
          ),
          this._container.addChild(this._minigame));
      }
      update() {
        let t = Date.now(),
          e = 0.001 * (t - this._lastTimeUpdate);
        if (
          ((this._lastTimeUpdate = t),
          this.isPlaying && (this.time -= e),
          this.time > 0)
        ) {
          let t = Math.floor(this.time).toString();
          (this.timeStr.text != t && this.timeAnim.play("bar_clock", 0, 0),
            (this.timeStr.text = t),
            this.setProgress(Math.min(1, this.progress + (0.2 / 5.99) * e)),
            this.isSuccess &&
              (this.progress >= 0.9 || this.clickTimes >= this.clickMaxTimes) &&
              this.playEnd());
        } else this.playEnd();
      }
      play(t, e, i, s, a, n) {
        const o = Ze.getInstance().scaleRate,
          h = this._minigame
            .getChildByName("root")
            .getChildByName("crocodile_bar"),
          l = this._minigame.getChildByName("finger"),
          r = t.scaleY,
          c = t.scaleX;
        ((h.scaleX = o.x),
          (h.scaleY = o.y),
          (l.scaleX = o.x),
          (l.scaleY = o.y),
          (l.x = this._baseXFinger * o.x),
          (l.y = this._baseYFinger * o.y),
          (this.angry.scaleX = this._baseScaleAngry * o.x),
          (this.angry.scaleY = this._baseScaleAngry * o.y),
          (this.isSuccess = e),
          (this.clickMaxTimes = i),
          (this.successCb = s),
          (this.failCb = a),
          (this.clearCb = n),
          (this._minigame.alpha = 0),
          (this._minigame.active = !0),
          (this._minigame.visible = !0));
        const _ = this._container.localToGlobal(
          new Laya.Point(
            0.5 * this._container.width,
            0.5 * this._container.height,
          ),
        );
        (t.forceMoveTo(_, 500),
          (this.fish = t),
          this.barAnim.play("bar_loop_auto", 0, 0),
          this.progressLightAnim.play("bar_light_ef", 0, 0),
          this.tipFingerAnimator.play("tip_finger", 0, 0),
          Ye.getInstance().localizeImageText(
            this.tipImg,
            oe.TXT_CROCODILE_BAR_GUIDE_01,
          ),
          Laya.timer.once(500, this, () => {
            (this._container.addChild(this.fish),
              (this.fish.zOrder = this.fishIndex),
              this.fish.pos(
                0.5 * this._container.width,
                0.5 * this._container.height,
              ),
              this.fish.startMiniGame(),
              (this.fish.scaleY = r * o.x),
              (this.fish.scaleX = c * o.y),
              (this.fish.noRotate = !0),
              (this.fish.rotation = -90),
              this.fish.updateFlip(),
              (this._minigame.alpha = 1),
              this.angry && this.angry.play(0.4, !0),
              (this.time = 5.99),
              this.setProgress(0),
              (this.isPlaying = !0),
              (this._firstClick = !0),
              (this._lastTimeUpdate = Date.now()),
              Laya.timer.frameLoop(10, this, this.update));
          }),
          ai.getInstance().changeBGM(pe.BGM_CROCODILE_REWARD));
      }
      playEnd() {
        this.isPlaying &&
          ((this.isPlaying = !1),
          Laya.timer.clear(this, this.update),
          this.angry.stop(),
          this.isSuccess && this.progress >= 0.8
            ? (this.setProgress(1),
              this.successCb && this.successCb(this.fish),
              this.barAnim.play("bar_get", 0, 0),
              Ye.getInstance().localizeImageText(
                this.tipImg,
                oe.TXT_CROCODILE_BAR_GUIDE_03,
              ))
            : (this.failCb && this.failCb(this.fish),
              this.barAnim.play("bar_get_nopress", 0, 0),
              Ye.getInstance().localizeImageText(
                this.tipImg,
                oe.TXT_CROCODILE_BAR_GUIDE_04,
              )),
          Laya.timer.once(2500, this, () => {
            (Laya.Tween.to(
              this._minigame,
              {
                alpha: 0,
              },
              500,
            ),
              Laya.timer.once(500, this, this.clear));
          }));
      }
      clear() {
        (Laya.timer.clearAll(this),
          Laya.Tween.clearAll(this),
          (this.isPlaying = !1),
          (this.failCb = null),
          (this.successCb = null),
          this.barAnim.stop(),
          this.timeAnim.stop(),
          this.tipFingerAnimator.stop(),
          this.progressLightAnim.stop(),
          (this._minigame.active = !1),
          (this._minigame.visible = !1),
          this.clearCb && this.clearCb(),
          (this.clearCb = null));
      }
      onClick() {
        if (this.isPlaying) {
          (this.setProgress(
            Math.min(1, this.progress + 1 / this.clickMaxTimes),
          ),
            this.fish.minigameTouch(this.progress));
          let t = Ni.getInstance().getCrocodileAngry();
          (t &&
            ((t.scaleX = this.angry.scaleX),
            (t.scaleY = this.angry.scaleY),
            this._minigame.addChild(t),
            (t.zOrder = -1),
            t.play()),
            this.barAnim.play("bar_loop_press", 0, 0),
            this._firstClick &&
              (Ye.getInstance().localizeImageText(
                this.tipImg,
                oe.TXT_CROCODILE_BAR_GUIDE_02,
              ),
              (this._firstClick = !1)));
        }
      }
      setProgress(t) {
        this.progress = t;
        let e = 1 - Math.pow(1 - this.progress, 2.5);
        ((this.progressBar$bar.width = 383 * e),
          (this.progressLight.x = 383 * e));
      }
      getRotate(t) {
        let e = {
            x: this._minigame.x - t.x,
            y: this._minigame.y - t.y,
          },
          i = {
            x: 1,
            y: 0,
          },
          s = e.y > i.y,
          a = me.Math.pAngle(e, i);
        return (s && (a = 2 * Math.PI - a), -((180 * a) / Math.PI - 90));
      }
      updateBgResponsive(t, e, i, s) {
        (null != s ? (t.y = s) : ((t.y = e.height / 2), (t.width = e.height)),
          null != i ? (t.x = i) : ((t.x = e.width / 2), (t.width = e.width)));
      }
    },
    Os = class {
      constructor(t) {
        ((this._node = Laya.Loader.getRes(he.PHOENIX_REBIRTH).create()),
          (this._node.visible = !1),
          (this._node.active = !1),
          (this._animator2D = this._node.getComponent(Laya.Animator2D)),
          t.addChild(this._node));
      }
      play(t) {
        ((this._node.visible = !0),
          (this._node.active = !0),
          this._node.pos(t.x, t.y),
          this._animator2D.gotoAndStopByFrame("rebirth", 0, 0),
          this._animator2D.play("rebirth"),
          Laya.timer.once(4e3, this, this.reset));
      }
      reset() {
        ((this._node.visible = !1),
          (this._node.active = !1),
          this._animator2D.stop());
      }
    },
    Ds = class {
      constructor(t, e) {
        ((this._node = t),
          (this._node.active = !1),
          (this._animator2D = this._node.getComponent(Laya.Animator2D)),
          (this._container = e),
          (this._broad = this._node.getChildByName("broad")),
          (this._num = this._broad.getChildByName("num")),
          (this._particleSystem =
            this._broad.getChildByName("particle_system")),
          (this._particleSystemScript = this._particleSystem.getComponent(
            Laya.Script,
          )),
          (this._textTitle = this._broad.getChildByName("title")),
          (this._textWin = this._broad.getChildByName("win")),
          "en" != Ye.getInstance().getLanguageName() &&
            (Ye.getInstance().localizeImageText(
              this._textTitle,
              oe.TXT_GET_REWARD,
            ),
            Ye.getInstance().localizeImageText(this._textWin, oe.TXT_WIN)));
      }
      playPhoenixReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          this.changeBoardColor(19),
          this._animator2D.gotoAndStopByFrame("catch_big_phoenix_in", 0, 0),
          this._animator2D.play("catch_big_phoenix_in"),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6150, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_phoenix_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_phoenix_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e(),
                      Yi.getInstance().isSceneBoss
                        ? ai.getInstance().changeBGM(pe.BGM_PHOENIX)
                        : ai.getInstance().changeBGM(pe.BGM));
                  }));
              }),
            );
          }));
      }
      playCrystalCrabReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          this.changeBoardColor(16),
          this._animator2D.gotoAndStopByFrame(
            "catch_big_crystal_crab_in",
            0,
            0,
          ),
          this._animator2D.play("catch_big_crystal_crab_in"),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          (this._node.alpha = 0),
          Laya.Tween.to(
            this._node,
            {
              alpha: 1,
            },
            200,
            Laya.Ease.linearIn,
          ),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6e3, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_crystal_crab_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_crystal_crab_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e());
                  }));
              }),
            );
          }));
      }
      playJewelTurtleReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          this.changeBoardColor(17),
          this._animator2D.gotoAndStopByFrame(
            "catch_big_jewel_turtle_in",
            0,
            0,
          ),
          this._animator2D.play("catch_big_jewel_turtle_in"),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          (this._node.alpha = 0),
          Laya.Tween.to(
            this._node,
            {
              alpha: 1,
            },
            200,
            Laya.Ease.linearIn,
          ),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6e3, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_jewel_turtle_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_jewel_turtle_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e());
                  }));
              }),
            );
          }));
      }
      playGiantOctopusReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          this.changeBoardColor(18),
          this._animator2D.gotoAndStopByFrame(
            "catch_big_giant_octopus_in",
            0,
            0,
          ),
          this._animator2D.play("catch_big_giant_octopus_in"),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          (this._node.alpha = 0),
          Laya.Tween.to(
            this._node,
            {
              alpha: 1,
            },
            200,
            Laya.Ease.linearIn,
          ),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6e3, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_giant_octopus_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_giant_octopus_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e());
                  }));
              }),
            );
          }));
      }
      playGiantCrocodileReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          this.changeBoardColor(20),
          this._animator2D.gotoAndStopByFrame(
            "catch_big_giant_crocodile_in",
            0,
            0,
          ),
          this._animator2D.play("catch_big_giant_crocodile_in"),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          (this._node.alpha = 0),
          Laya.Tween.to(
            this._node,
            {
              alpha: 1,
            },
            200,
            Laya.Ease.linearIn,
          ),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6e3, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_giant_crocodile_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_giant_crocodile_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e(),
                      Yi.getInstance().isSceneBoss
                        ? ai.getInstance().changeBGM(pe.BGM_CROCODILE)
                        : ai.getInstance().changeBGM(pe.BGM));
                  }));
              }),
            );
          }));
      }
      playNagaReward(t, e) {
        const i = Ze.getInstance().scaleRate;
        ((this._node.active = !0),
          (this._num.text = xe.getInstance().formatNumber(t)),
          this._node.scale(1, 1),
          this.changeBoardColor(21),
          this._animator2D.gotoAndStopByFrame("catch_big_naga_in", 0, 0),
          this._animator2D.play("catch_big_naga_in"),
          (this._node.visible = !0),
          this._node.pos(this._container.width / 2, this._container.height / 2),
          this._node.scale(i.x, i.y),
          (this._node.alpha = 0),
          Laya.Tween.to(
            this._node,
            {
              alpha: 1,
            },
            200,
            Laya.Ease.linearIn,
          ),
          Laya.timer.once(500, this, () => {
            ((this._particleSystem.visible = !0),
              this._particleSystemScript.resetSystem());
          }),
          Laya.timer.once(6e3, this, () => {
            const t = Fe.getInstance().gameMain;
            let s = this._container.globalToLocal(
              t.playerMe.getRewardWorldPosition(new Laya.Point(0, -200)),
            );
            Laya.Tween.to(
              this._node,
              {
                scaleX: 0.5 * i.x,
                scaleY: 0.5 * i.y,
                x: s.x,
                y: s.y,
              },
              500,
              Laya.Ease.linearIn,
              Laya.Handler.create(this, () => {
                (this._animator2D.gotoAndStopByFrame(
                  "catch_big_naga_out",
                  0,
                  0,
                ),
                  this._animator2D.play("catch_big_naga_out"),
                  Laya.timer.once(1333, this, () => {
                    ((this._node.visible = !1),
                      (this._node.active = !1),
                      e && e(),
                      Yi.getInstance().isSceneBoss
                        ? ai.getInstance().changeBGM(pe.BGM_NAGA)
                        : ai.getInstance().changeBGM(pe.BGM));
                  }));
              }),
            );
          }));
      }
      changeBoardColor(t) {
        if (Ut[t]) {
          let e = this._broad.getChildByName("r").getChildByName("light_beam"),
            i = this._broad.getChildByName("l").getChildByName("light_beam"),
            s = this._broad.getChildByName("r_l").getChildByName("light_beam"),
            a = this._broad.getChildByName("l_l").getChildByName("light_beam"),
            n = new Laya.ColorFilter();
          (n.color(Ut[t].red, Ut[t].green, Ut[t].blue, Ut[t].alpha),
            n.adjustHue(Ut[t].hue),
            n.adjustBrightness(Ut[t].brightness),
            (e.filters = [n]),
            (i.filters = [n]),
            (s.filters = [n]),
            (a.filters = [n]));
        }
      }
    },
    zs = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._node = Laya.loader.getRes(he.NAGA_GEM).create()),
          this.addChild(this._node));
        const t = this._node.getChildByName("root");
        ((this._animator = t
          .getChildByName("nacafrequencygemnode")
          .getComponent(Laya.Animator2D)),
          (this._particleGemLight1 = t
            .getChildByName("particle_system_gemlight1")
            .getComponent(Laya.Script)),
          (this._particleGemLight2 = t
            .getChildByName("particle_system_gemlight2")
            .getComponent(Laya.Script)),
          (this._particleGemLight3 = t
            .getChildByName("particle_system_gemlight3")
            .getComponent(Laya.Script)));
      }
      start() {
        (this._particleGemLight1.resetSystem(),
          Laya.timer.once(100, this, () => {
            (this._particleGemLight2.resetSystem(),
              Laya.timer.once(100, this, () => {
                this._particleGemLight3.resetSystem();
              }));
          }));
      }
      playGet() {
        (this._animator.gotoAndStopByFrame("naga_frequency_gem_get", 0, 0),
          this._animator.play("naga_frequency_gem_get"),
          this._particleGemLight1.stopSystem(),
          this._particleGemLight2.stopSystem(),
          this._particleGemLight3.stopSystem());
      }
    },
    Hs = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._node = Laya.loader.getRes(he.NAGA_BIG_THUNDER).create()),
          this.addChild(this._node));
        const t = this._node.getChildByName("efnode");
        ((this._animatorBig = t.getComponent(Laya.Animator2D)),
          (this._particleBig1 = t
            .getChildByName("big")
            .getChildByName("coming01")
            .getComponent(Laya.Script)),
          (this._particleBig2 = t
            .getChildByName("big")
            .getChildByName("coming02")
            .getComponent(Laya.Script)));
        const e = t.getChildByName("all_1"),
          i = t.getChildByName("all_2"),
          s = t.getChildByName("all_3"),
          a = t.getChildByName("all_4"),
          n = t.getChildByName("all_5");
        ((this._animator1 = e.getComponent(Laya.Animator2D)),
          (this._animator2 = i.getComponent(Laya.Animator2D)),
          (this._animator3 = s.getComponent(Laya.Animator2D)),
          (this._animator4 = a.getComponent(Laya.Animator2D)),
          (this._animator5 = n.getComponent(Laya.Animator2D)),
          (this._particle1 = e
            .getChildByName("coming")
            .getComponent(Laya.Script)),
          (this._particle2 = i
            .getChildByName("coming")
            .getComponent(Laya.Script)),
          (this._particle3 = s
            .getChildByName("coming")
            .getComponent(Laya.Script)),
          (this._particle4 = a
            .getChildByName("coming")
            .getComponent(Laya.Script)),
          (this._particle5 = n
            .getChildByName("coming")
            .getComponent(Laya.Script)));
      }
      play() {
        (this.resize(),
          this._animatorBig.gotoAndStopByFrame("naga_lighting_big", 0, 0),
          this._animatorBig.play("naga_lighting_big"),
          this._animator1.gotoAndStopByFrame("light2_default", 0, 0),
          this._animator1.play("light2_default"),
          Laya.timer.once(167, this, () => {
            (this._particle1.resetSystem(),
              Laya.timer.once(666, this, () => {
                this._particle1.stopSystem();
              }));
          }),
          Laya.timer.once(167, this, () => {
            (this._animator2.gotoAndStopByFrame("light2_default", 0, 0),
              this._animator2.play("light2_default"),
              Laya.timer.once(167, this, () => {
                (this._particle2.resetSystem(),
                  Laya.timer.once(666, this, () => {
                    this._particle2.stopSystem();
                  }));
              }));
          }),
          Laya.timer.once(333, this, () => {
            (this._animator3.gotoAndStopByFrame("light2_default", 0, 0),
              this._animator3.play("light2_default"),
              Laya.timer.once(167, this, () => {
                (this._particle3.resetSystem(),
                  Laya.timer.once(666, this, () => {
                    this._particle3.stopSystem();
                  }));
              }));
          }),
          Laya.timer.once(666, this, () => {
            (this._animator4.gotoAndStopByFrame("light2_default", 0, 0),
              this._animator4.play("light2_default"),
              Laya.timer.once(167, this, () => {
                (this._particle4.resetSystem(),
                  Laya.timer.once(666, this, () => {
                    this._particle4.stopSystem();
                  }));
              }));
          }),
          Laya.timer.once(1e3, this, () => {
            (this._animator5.gotoAndStopByFrame("light2_default", 0, 0),
              this._animator5.play("light2_default"),
              Laya.timer.once(167, this, () => {
                (this._particle5.resetSystem(),
                  Laya.timer.once(666, this, () => {
                    this._particle5.stopSystem();
                  }));
              }));
          }),
          Laya.timer.once(2e3, this, () => {
            (this._particleBig1.resetSystem(),
              this._particleBig2.resetSystem(),
              Laya.timer.once(833, this, () => {
                (this._particleBig1.stopSystem(),
                  this._particleBig2.stopSystem());
              }));
          }));
      }
      resize() {
        const t = Ze.getInstance().scaleRate,
          e = this._node.getChildByName("efnode").getChildByName("big"),
          i = this._node.getChildByName("efnode").getChildByName("all_1"),
          s = this._node.getChildByName("efnode").getChildByName("all_2"),
          a = this._node.getChildByName("efnode").getChildByName("all_3"),
          n = this._node.getChildByName("efnode").getChildByName("all_4"),
          o = this._node.getChildByName("efnode").getChildByName("all_5"),
          h = e.scaleX,
          l = e.scaleY,
          r = i.scaleX,
          c = i.scaleY,
          _ = s.scaleX,
          p = s.scaleY,
          g = a.scaleX,
          d = a.scaleY,
          u = n.scaleX,
          y = n.scaleY,
          m = o.scaleX,
          f = o.scaleY;
        (e.scale(h * t.x, l * t.y),
          i.scale(r * t.x, c * t.y),
          s.scale(_ * t.x, p * t.y),
          a.scale(g * t.x, d * t.y),
          n.scale(u * t.x, y * t.y),
          o.scale(m * t.x, f * t.y));
      }
    },
    Us = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._moveBall = Laya.loader.getRes(he.NAGA_MOVE_BALL).create()),
          this.addChild(this._moveBall),
          (this._animator = this._moveBall
            .getChildByName("root")
            .getChildByName("nacalightning")
            .getComponent(Laya.Animator2D)));
      }
      playBig() {
        (this._animator.gotoAndStopByFrame("naga_lightning_big", 0, 0),
          this._animator.play("naga_lightning_big"));
      }
      playBigIn() {
        (this._animator.gotoAndStopByFrame("naga_lightning_big_in", 0, 0),
          this._animator.play("naga_lightning_big_in"));
      }
      playSmall() {
        (this._animator.gotoAndStopByFrame("naga_lightning_small", 0, 0),
          this._animator.play("naga_lightning_small"));
      }
      playSmallIn() {
        (this._animator.gotoAndStopByFrame("naga_lightning_small_in", 0, 0),
          this._animator.play("naga_lightning_small_in"));
      }
    },
    Xs = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._node = Laya.loader.getRes(he.NAGA_ARC).create()),
          this.addChild(this._node),
          (this._animator = this._node
            .getChildByName("efnode")
            .getComponent(Laya.Animator2D)),
          (this._particleComing = this._node
            .getChildByName("efnode")
            .getChildByName("coming")
            .getComponent(Laya.Script)));
      }
      play() {
        (this._animator.gotoAndStopByFrame("naga_lighting_4", 0, 0),
          this._animator.play("naga_lighting_4"),
          this._particleComing.resetSystem(),
          Laya.timer.once(500, this, () => {
            this._particleComing.stopSystem();
          }));
      }
    },
    Gs = class {
      constructor(t) {
        ((this._node = t),
          (this._animator = this._node.getComponent(Laya.Animator2D)),
          (this._lightningBallBack =
            this._node.getChildByName("lightingball_back")),
          (this._lightningBallBackAnimator =
            this._lightningBallBack.getComponent(Laya.Animator2D)));
        const e = this._node.getChildByName("nacabarnode");
        ((this._lightningBall = e.getChildByName("lightingball")),
          (this._lightningBall2 =
            this._lightningBall.getChildByName("lightingball_02")),
          (this._lightningBall2Animator = this._lightningBall2.getComponent(
            Laya.Animator2D,
          )),
          (this._lightningBall1 =
            this._lightningBall.getChildByName("lightingball_01")),
          (this._lightningBall1Animator = this._lightningBall1.getComponent(
            Laya.Animator2D,
          )),
          (this._particleSmoke = e
            .getChildByName("efnode")
            .getChildByName("star_explosion")
            .getComponent(Laya.Script)),
          (this._particleRock = e
            .getChildByName("efnode")
            .getChildByName("bonusgameenergy")
            .getComponent(Laya.Script)));
      }
      enableTouch() {
        this._node.mouseEnable = !0;
      }
      disableTouch() {
        this._node.mouseEnable = !1;
      }
      setAlpha(t) {
        this._node.alpha = t;
      }
      playIn() {
        (this._animator.gotoAndStopByFrame("ui_in", 0, 0),
          this._animator.play("ui_in"),
          Laya.timer.once(600, this, () => {
            (this._lightningBallBackAnimator.gotoAndStopByFrame(
              "lightingball_back_idle",
              0,
              0,
            ),
              this._lightningBallBackAnimator.play("lightingball_back_idle"),
              this._lightningBall2Animator.gotoAndStopByFrame(
                "lightingball_02",
                0,
                0,
              ),
              this._lightningBall2Animator.play("lightingball_02"),
              (this._lightningBall2.visible = !0),
              this._lightningBall1Animator.gotoAndStopByFrame(
                "lightingball_01",
                0,
                0,
              ),
              this._lightningBall1Animator.play("lightingball_01"));
          }));
      }
      playGetFail() {
        (this._animator.gotoAndStopByFrame("ui_get_fail", 0, 0),
          this._animator.play("ui_get_fail"),
          Laya.timer.once(333, this, () => {
            (this._particleSmoke.resetSystem(),
              this._particleRock.resetSystem(),
              Laya.timer.once(111, this, () => {
                (this._particleSmoke.stopSystem(),
                  this._particleRock.stopSystem());
              }));
          }));
      }
      playGetSuccess() {
        (this._animator.gotoAndStopByFrame("ui_get_success", 0, 0),
          this._animator.play("ui_get_success"));
      }
      show() {
        this._node.alpha = 1;
      }
      hide() {
        Laya.Tween.to(
          this._node,
          {
            alpha: 0,
          },
          500,
        );
      }
      playLightningBall() {
        me.Tween.union(
          me.Tween.tweenTo(
            this._lightningBall1,
            {
              scaleX: 4.5,
              scaleY: 4.5,
            },
            300,
          ),
          me.Tween.tweenTo(
            this._lightningBall1,
            {
              scaleX: 2.5,
              scaleY: 2.5,
            },
            1200,
          ),
          me.Tween.tweenTo(
            this._lightningBall1,
            {
              scaleX: 6,
              scaleY: 6,
            },
            300,
          ),
          me.Tween.callFunc(this._lightningBall1, () => {
            (this.playGetSuccess(),
              ai.getInstance().playSFX(pe.NAGA_GET_SUCCESS));
          }),
        );
      }
      playLightningBallFail() {
        me.Tween.union(
          me.Tween.tweenTo(
            this._lightningBall1,
            {
              scaleX: 4.5,
              scaleY: 4.5,
            },
            300,
          ),
          me.Tween.tweenTo(
            this._lightningBall1,
            {
              scaleX: 2.5,
              scaleY: 2.5,
            },
            1200,
          ),
          me.Tween.callFunc(this._lightningBall1, () => {
            (this.playGetFail(), ai.getInstance().playSFX(pe.NAGA_GET_FAIL));
          }),
        );
      }
      getBallWorldPos() {
        return this._lightningBall.localToGlobal(
          new Laya.Point(this._lightningBall1.x, this._lightningBall1.y),
        );
      }
    },
    Ks = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this.shuffleSelf = function (t) {
            for (var e, i = t.length - 1; i > 0; i--) {
              var s = Math.floor(Math.random() * (i + 1));
              ((e = [t[s], t[i]]), (t[i] = e[0]), (t[s] = e[1]));
            }
            return t;
          }),
          (this._nowRollingCoin = {
            num: 0,
          }),
          (this._winRate = 0),
          (this._winCoin = 0),
          (this._lastTime = 0),
          (this._time = 0),
          (this._isSelecting = !1),
          (this._playTimesNode = []),
          (this._nowRemainTimes = 0),
          (this._nowSelectTimes = 0),
          (this._getOddsList = []),
          (this._getAddTimesList = []),
          (this._rate = 1),
          this.pos(640, 360),
          (this._node = Laya.loader.getRes(he.NAGA_MINI_GAME).create()),
          this._node.pos(0, 0),
          (this._node.zOrder = 1),
          this.addChild(this._node));
        const t = this._node.getChildByName("root").getChildByName("nacabar");
        ((this._nagaAttack = t.getChildByName("naca_attack")),
          (this._nagaAttackAnimator = this._nagaAttack.getComponent(
            Laya.Animator2D,
          )),
          (this._clock = t.getChildByName("clock")),
          (this._clockAnimator = this._clock.getComponent(Laya.Animator2D)),
          (this._txtNagaGuide = this._clock.getChildByName("nacabar_guide01")),
          (this._ballLayer = this._node.getChildByName("balllayer")));
        const e = t.getChildByName("nacabarnode_l"),
          i = t.getChildByName("nacabarnode_r");
        ((this._ballLeft = new Gs(e)),
          (this._ballRight = new Gs(i)),
          this.initBoard(),
          (this._fingers = this._node.getChildByName("fingers")),
          (this._hand = this._nagaAttack.getChildByName("ch_hand_r02_top")),
          (this._timeStr = this._clock.getChildByName("label")),
          (this._node.visible = !1),
          (this._node.active = !1),
          e.on(Laya.Event.CLICK, () => {
            this.selectBall("L");
          }),
          i.on(Laya.Event.CLICK, () => {
            this.selectBall("R");
          }),
          "en" != Ye.getInstance().getLanguageName() &&
            (Ye.getInstance().localizeImageText(
              this._txtNagaGuide,
              oe.TXT_NAGA_GUIDE,
            ),
            Ye.getInstance().localizeImageText(
              this._boardTitle,
              oe.TXT_NAGA_TITLE,
            )));
      }
      initBoard() {
        ((this._board = this._node.getChildByName("naca_board")),
          (this._boardAnimator = this._board.getComponent(Laya.Animator2D)));
        const t = this._board
          .getChildByName("root")
          .getChildByName("label")
          .getChildByName("n");
        ((this._coinNode = t.getChildByName("moneynode")),
          (this._coinNodeAnimator = this._coinNode.getComponent(
            Laya.Animator2D,
          )),
          (this._coinNum = this._coinNode.getChildByName("money")),
          (this._coinNumS = this._coinNode.getChildByName("moneyaccumulation")),
          (this._boardTitle =
            this._board.getChildByName("nacafrequencytitle")));
        for (let t = 0; t < 4; t++) {
          const e = this._board.getChildByName("nacafrequency" + t.toString());
          this._playTimesNode[t] = e;
        }
        ((this._boardParticleLeft = t
          .getChildByName("particle_icesmokel2")
          .getComponent(Laya.Script)),
          (this._boardParticleRight = t
            .getChildByName("particle_icesmoker2")
            .getComponent(Laya.Script)),
          (this._boardParticleStar = t
            .getChildByName("board")
            .getChildByName("particle_stars")
            .getComponent(Laya.Script)));
      }
      update() {
        const t = 0.001 * Date.now(),
          e = t - this._lastTime;
        if (((this._lastTime = t), this._isSelecting))
          if (((this._time -= e), this._time > 0)) {
            const t = Math.floor(this._time).toString();
            this._timeStr.text !== t &&
              (this._clockAnimator.gotoAndStopByFrame("clock", 0, 0),
              this._clockAnimator.play("clock"),
              (this._timeStr.text = t));
          } else this.selectBall();
        this._coinNumS.visible &&
          (this._coinNumS.text =
            "+" +
            xe
              .getInstance()
              .formatNumber(Math.floor(this._nowRollingCoin.num)));
      }
      play(t, e, i, s) {
        const a = Ze.getInstance().scaleRate;
        ((this._rate = Math.floor(i / e)),
          (this._callbackEnd = s),
          (this._winRate = e),
          (this._winCoin = i),
          (this._nowSelectTimes = 0),
          (this._nowRemainTimes = 2),
          (this._node.alpha = 0),
          this._ballLeft.setAlpha(0),
          this._ballRight.setAlpha(0),
          this._ballLeft.disableTouch(),
          this._ballRight.disableTouch(),
          this._playTimesNode.forEach((t, e) => {
            const i = e < this._nowRemainTimes ? 1 : 0;
            t.scale(i, i);
          }),
          this.initGameList(),
          (this._node.alpha = 1),
          this._board.pos(0, 90 * a.y),
          this._board.scale(1 * a.x, 1 * a.y),
          (this._boardTitle.alpha = 1),
          (this._nagaAttack.alpha = 0),
          (this._fingers.alpha = 0),
          (this._clock.alpha = 0),
          (this._coinNum.text = "0"),
          (this._coinNumS.text = "+0"));
        (this._node
          .getChildByName("root")
          .getChildByName("nacabar")
          .scale(a.x, a.y),
          this._fingers.scale(a.x, a.y),
          t.setIsAlive(!1));
        const n = this.parent.localToGlobal(new Laya.Point(this.x, this.y));
        (t.forceMoveTo(n, 500),
          Laya.timer.once(500, this, () => {
            ((this._actionHand = bi.create(
              this._hand,
              2,
              [
                {
                  x: 13,
                  y: 0,
                },
                {
                  x: 13,
                  y: -24,
                },
                {
                  x: -14,
                  y: -19,
                },
                {
                  x: -10,
                  y: 8,
                },
                {
                  x: 13,
                  y: 0,
                },
              ],
              0,
              null,
              !0,
            )),
              this._actionHand.start(),
              Laya.timer.once(400, this, () => {
                this._nagaAttack.alpha = 1;
              }),
              (t.visible = !1),
              (this._fishSpine = Ni.getInstance().getSpineFish(21)),
              this._fishSpine.pos(0, 20),
              this._fishSpine.scale(a.x, a.y),
              (this._fishSpine.visible = !0),
              (this._fishSpine.active = !0),
              (this._fishSpine.zOrder = 0),
              this.addChild(this._fishSpine),
              this._fishSpine.play("super_attack_start", !1),
              this._fishSpine.once(Laya.Event.STOPPED, () => {
                (this._fishSpine.play("super_attack_charge", !0),
                  ai.getInstance().playSFX(pe.NAGA_SHOW_BALL),
                  ai.getInstance().playSFXLoop(pe.NAGA_SHOW_BALL_IDLE),
                  this._ballLeft.setAlpha(1),
                  this._ballRight.setAlpha(1),
                  this._ballLeft.playIn(),
                  this._ballRight.playIn(),
                  Laya.timer.once(1e3, this, () => {
                    ((this._timeStr.text = "6"),
                      (this._lastTime = 0.001 * Date.now()),
                      (this._time = 5.99),
                      (this._isSelecting = !0),
                      Laya.timer.frameLoop(1, this, this.update),
                      (this._fingers.alpha = 1),
                      (this._clock.alpha = 1),
                      this._ballLeft.enableTouch(),
                      this._ballRight.enableTouch());
                  }));
              }));
          }),
          (this._node.visible = !0),
          (this._node.active = !0),
          this._boardParticleLeft.resetSystem(),
          this._boardParticleRight.resetSystem(),
          this._boardParticleStar.resetSystem());
      }
      selectBall(t) {
        if (!this._isSelecting) return;
        ((this._isSelecting = !1),
          this._ballLeft.disableTouch(),
          this._ballRight.disableTouch());
        const e =
            "L" === (t = t || (Math.random() > 0.5 ? "L" : "R"))
              ? this._ballLeft
              : this._ballRight,
          i = "L" === t ? this._ballRight : this._ballLeft;
        (this.playBall(e),
          this.hideBall(i),
          this._nowRemainTimes--,
          Laya.Tween.to(
            this._playTimesNode[this._nowRemainTimes],
            {
              scaleX: 0,
              scaleY: 0,
            },
            300,
          ),
          ai.getInstance().stopSFX(pe.NAGA_SHOW_BALL_IDLE),
          ai.getInstance().playSFX(pe.NAGA_SELECT_BALL));
      }
      hideBall(t) {
        t.hide();
      }
      playBall(t) {
        const e = Ze.getInstance().scaleRate,
          i = this._getAddTimesList[this._nowSelectTimes];
        (Laya.Tween.to(
          this._clock,
          {
            alpha: 0,
          },
          300,
        ),
          Laya.Tween.to(
            this._fingers,
            {
              alpha: 0,
            },
            300,
          ));
        this._getOddsList[this._nowSelectTimes] > 100
          ? (t.playLightningBall(),
            Laya.timer.once(2e3, this, () => {
              const s = new Us();
              (this._ballLayer.addChild(s), s.playBig());
              const a = this._ballLayer.globalToLocal(t.getBallWorldPos());
              (s.scale(e.x, e.y), s.pos(a.x, a.y));
              for (let t = 0; t < i; ++t) {
                const t = new zs();
                ((t.zOrder = -1),
                  t.pos(a.x, a.y),
                  t.scale(e.x, e.y),
                  this._ballLayer.addChild(t),
                  this.moveGem(t, 0.8));
              }
              Laya.timer.once(1e3 * (1 + (i > 0 ? 1.5 : 0)), this, () => {
                (this.moveBallToAttack(s, !0),
                  Laya.timer.once(2300, this, () => {
                    this.showBigAttack();
                  }));
              });
            }))
          : (t.playLightningBallFail(),
            Laya.timer.once(1700, this, () => {
              const s = new Us();
              (this._ballLayer.addChild(s), s.playSmall());
              const a = this._ballLayer.globalToLocal(t.getBallWorldPos());
              (s.scale(e.x, e.y), s.pos(a.x, a.y));
              for (let t = 0; t < i; ++t) {
                const t = new zs();
                ((t.zOrder = -1),
                  t.pos(a.x, a.y),
                  t.scale(e.x, e.y),
                  this._ballLayer.addChild(t),
                  this.moveGem(t, 0.5));
              }
              Laya.timer.once(1e3 * (1 + (i > 0 ? 1.2 : 0)), this, () => {
                (this.moveBallToAttack(s, !1),
                  Laya.timer.once(1700, this, () => {
                    this.showSmallAttack();
                  }));
              });
            }));
      }
      initGameList() {
        let t =
          this._winRate >= 1e3
            ? 6
            : this._winRate >= 900
              ? _i.iRand(5, 6)
              : this._winRate >= 700
                ? _i.iRand(4, 5)
                : this._winRate >= 400
                  ? _i.iRand(3, 4)
                  : 3;
        const e = () => {
          for (
            var t = this._nowRemainTimes, e = 0;
            e < this._getAddTimesList.length;
            e++
          ) {
            if (t <= 0) return !1;
            (t--, (t += this._getAddTimesList[e]));
          }
          return !0;
        };
        do {
          this._getAddTimesList = [];
          for (var i = 0; i < t; i++) this._getAddTimesList[i] = 0;
          for (i = 0; i < t - this._nowRemainTimes; i++)
            this._getAddTimesList[
              _i.iRand(0, this._getAddTimesList.length - 1)
            ]++;
        } while (!e());
        const s = () => {
          var e;
          this._getOddsList = [];
          for (var i = this._winRate, a = 0; a < t; a++)
            ((this._getOddsList[a] =
              Math.random() > 0.5 ? _i.iRand(40, 90) : _i.iRand(150, 350)),
              (i -= this._getOddsList[a]));
          do {
            var n = !1,
              o = this.shuffleSelf(
                this._getOddsList.map(function (t, e) {
                  return e;
                }),
              );
            for (a = o.length - 1; a > 0; a--) {
              var h = Math.floor(Math.random() * (a + 1));
              ((e = [o[h], o[a]]), (o[a] = e[0]), (o[h] = e[1]));
            }
            if (i > 0) {
              var l = Math.min(i, 10);
              for (a = 0; a < o.length; a++) {
                if (this._getOddsList[o[a]] < 90) {
                  ((l = Math.min(l, 90 - this._getOddsList[o[a]])),
                    (this._getOddsList[o[a]] += l),
                    (i -= l),
                    (n = !0));
                  break;
                }
                if (
                  this._getOddsList[o[a]] >= 150 &&
                  this._getOddsList[o[a]] < 350
                ) {
                  ((l = Math.min(l, 350 - this._getOddsList[o[a]])),
                    (this._getOddsList[o[a]] += l),
                    (i -= l),
                    (n = !0));
                  break;
                }
              }
            } else
              for (l = Math.min(Math.abs(i), 10), a = 0; a < o.length; a++) {
                if (this._getOddsList[o[a]] > 150) {
                  ((l = Math.min(l, this._getOddsList[o[a]] - 150)),
                    (this._getOddsList[o[a]] -= l),
                    (i += l),
                    (n = !0));
                  break;
                }
                if (
                  this._getOddsList[o[a]] > 40 &&
                  this._getOddsList[o[a]] <= 90
                ) {
                  ((l = Math.min(l, this._getOddsList[o[a]] - 40)),
                    (this._getOddsList[o[a]] -= l),
                    (i += l),
                    (n = !0));
                  break;
                }
              }
            if (!n) break;
          } while (0 != i);
          0 != i && s();
        };
        s();
      }
      moveGem(t, e) {
        const i = this._playTimesNode[this._nowRemainTimes],
          s = xe.getInstance().convertChildPos(this._ballLayer, i),
          a = new Laya.Point(0, 200),
          n = me.Math.pRotateByAngle(
            a,
            new Laya.Point(0, 0),
            _i.iRand(1, 360) * me.Math.RAD,
          ),
          o = t.x + n.x,
          h = t.y + n.y;
        (t.start(),
          me.Tween.union(
            me.Tween.tweenTo(
              t,
              {
                x: o,
                y: h,
              },
              300,
            ),
            me.Tween.tweenTo(t, {}, 1e3 * e),
            me.Tween.tweenTo(
              t,
              {
                x: s.x,
                y: s.y,
              },
              700,
            ),
            me.Tween.callFunc(t, () => {
              (t.playGet(),
                Laya.Tween.to(
                  i,
                  {
                    scaleX: 1.5,
                    scaleY: 1.5,
                  },
                  300,
                  null,
                  Laya.Handler.create(i, () => {
                    Laya.Tween.to(
                      i,
                      {
                        scaleX: 1,
                        scaleY: 1,
                      },
                      200,
                    );
                  }),
                ),
                ai.getInstance().playSFX(pe.NAGA_GET_TIMES));
            }),
            me.Tween.tweenTo(t, {}, 1500),
            me.Tween.callFunc(t, () => {
              t.destroy();
            }),
          ),
          this._nowRemainTimes++,
          ai.getInstance().playSFX(pe.NAGA_SHOW_GEM));
      }
      moveBallToAttack(t, e) {
        const i = Ze.getInstance().scaleRate,
          s = new Laya.Point(115, -180);
        (e
          ? (t.playBigIn(),
            Laya.timer.once(300, this, () => {
              Fe.getInstance().shakeScene2D(1200, 20, 15);
            }),
            ai.getInstance().playSFX(pe.NAGA_BIG_IN))
          : (t.playSmallIn(),
            Laya.timer.once(300, this, () => {
              Fe.getInstance().shakeScene2D(600, 20, 7);
            }),
            ai.getInstance().playSFX(pe.NAGA_SMALL_IN)),
          Laya.Tween.to(
            t,
            {
              x: s.x * i.x,
              y: s.y * i.y,
            },
            300,
            Laya.Ease.sineIn,
          ),
          Laya.timer.once(300, this, () => {
            (e
              ? (this._nagaAttackAnimator.gotoAndStopByFrame(
                  "naga_start_big",
                  0,
                  0,
                ),
                this._nagaAttackAnimator.play("naga_start_big"),
                Laya.timer.once(1967, this, () => {
                  (this._nagaAttackAnimator.gotoAndStopByFrame("attack", 0, 0),
                    this._nagaAttackAnimator.play("attack"));
                }))
              : (this._nagaAttackAnimator.gotoAndStopByFrame(
                  "naga_start",
                  0,
                  0,
                ),
                this._nagaAttackAnimator.play("naga_start"),
                Laya.timer.once(2017, this, () => {
                  (this._nagaAttackAnimator.gotoAndStopByFrame("attack", 0, 0),
                    this._nagaAttackAnimator.play("attack"));
                })),
              Laya.timer.once(1e3, this, () => {
                ((t.visible = !1), t.destroy());
              }));
          }),
          this._nowSelectTimes >= this._getOddsList.length - 1 &&
            Laya.Tween.to(
              this._boardTitle,
              {
                alpha: 0,
              },
              500,
            ));
      }
      showBigAttack() {
        (this._fishSpine.play("super_attack_end_to_idle", !1),
          this._fishSpine.once(Laya.Event.STOPPED, () => {
            this._fishSpine.play("super_common_idle", !0);
          }),
          (this._nagaAttack.alpha = 0));
        const t = new Hs();
        (this.addChild(t),
          t.play(),
          Laya.timer.once(2600, this, () => {
            const e = this._coinNum.parent.localToGlobal(
              new Laya.Point(this._coinNum.x, this._coinNum.y),
            );
            (ms
              .getInstance()
              .showRandomCoinInScene(!0, 20, 0, e, [2, 2, 3, 3, 3]),
              Laya.timer.once(700, this, () => {
                this.showRollingCoin();
              }),
              Laya.timer.once(2733, this, () => {
                t.destroy();
              }));
          }),
          Fe.getInstance().shakeScene2D(1750, 20, 7),
          Laya.timer.once(1750, this, () => {
            (Fe.getInstance().shakeScene2D(1250, 20, 15),
              Laya.timer.once(1250, this, () => {
                Fe.getInstance().shakeScene2D(1e3, 20, 7);
              }),
              ai.getInstance().playSFX(pe.NAGA_BIG_THUNDER_2));
          }),
          ai.getInstance().playSFX(pe.NAGA_BIG_THUNDER_1));
      }
      showSmallAttack() {
        (this._fishSpine.play("super_common_attack", !1),
          this._fishSpine.once(Laya.Event.STOPPED, () => {
            this._fishSpine.play("super_common_idle", !0);
          }),
          (this._nagaAttack.alpha = 0));
        for (var t = 0; t < 10; t++)
          Laya.timer.once(300 + 100 * t, this, () => {
            const t = new Xs();
            this._node.addChild(t);
            const e = new Laya.Point(0, -250);
            (me.Math.pAddIn(
              e,
              new Laya.Point(_i.iRand(-50, 50), _i.iRand(-50, 50)),
            ),
              t.pos(e.x, e.y),
              t.play(),
              Laya.timer.once(2500, this, () => {
                t.destroy();
              }),
              Math.random() > 0.6
                ? ((t.scaleX = 0.4 + 0.3 * Math.random()),
                  (t.scaleY = 0.3 * Math.random() + 0.7))
                : ((t.scaleX = -1 * (0.4 + 0.9 * Math.random())),
                  (t.scaleY = 0.3 * Math.random() + 0.7)),
              Laya.timer.once(400, this, () => {
                const e = new Laya.Point(t.x, t.y);
                (me.Math.pAddIn(
                  e,
                  new Laya.Point(500 * t.scaleX, 500 * t.scaleY),
                ),
                  this._node.localToGlobal(e));
                const i = this._coinNode.localToGlobal(
                  new Laya.Point(this._coinNum.x, this._coinNum.y),
                );
                ms.getInstance().playGetCoin(e, i, _i.iRand(2, 3));
              }));
          });
        (Laya.timer.once(1800, this, () => {
          this.showRollingCoin();
        }),
          Laya.timer.once(400, this, () => {
            (ai.getInstance().playSFX(pe.NAGA_SMALL_THUNDER),
              Laya.timer.once(400, this, () => {
                Fe.getInstance().shakeScene2D(1200, 20, 15);
              }));
          }));
      }
      showRollingCoin() {
        ((this._coinNumS.visible = !0),
          this._coinNumS.pos(0, -40),
          this._coinNumS.scale(1, 1),
          (this._nowRollingCoin.num = 0),
          ai.getInstance().playSFXLoop(pe.NAGA_ROLLING_COIN),
          Laya.Tween.to(
            this._nowRollingCoin,
            {
              num: this._getOddsList[this._nowSelectTimes] * this._rate,
            },
            1500,
            null,
            Laya.Handler.create(this, () => {
              (ai.getInstance().stopSFX(pe.NAGA_ROLLING_COIN),
                Laya.timer.once(300, this, () => {
                  (this._coinNodeAnimator.gotoAndStopByFrame("moneynode", 0, 0),
                    this._coinNodeAnimator.play("moneynode"),
                    ai.getInstance().playSFX(pe.NAGA_GET_MONEY),
                    Laya.timer.once(330, this, () => {
                      let t = 0;
                      for (let e = 0; e <= this._nowSelectTimes; e++)
                        t += this._getOddsList[e] * this._rate;
                      ((this._coinNum.text = xe.getInstance().formatNumber(t)),
                        Laya.timer.once(1e3, this, () => {
                          this.playNextGame();
                        }));
                    }));
                }));
            }),
          ));
      }
      playNextGame() {
        this._nowSelectTimes < this._getOddsList.length - 1
          ? (this._fishSpine.play("super_common_idle_to_charge", !1),
            this._fishSpine.once(Laya.Event.STOPPED, () => {
              (this._fishSpine.play("super_attack_charge", !0),
                this._ballLeft.show(),
                this._ballRight.show(),
                this._ballLeft.playIn(),
                this._ballRight.playIn(),
                ai.getInstance().playSFX(pe.NAGA_SHOW_BALL),
                ai.getInstance().playSFXLoop(pe.NAGA_SHOW_BALL_IDLE),
                Laya.timer.once(1e3, this, () => {
                  ((this._node.alpha = 1),
                    (this._clock.alpha = 1),
                    (this._fingers.alpha = 1),
                    (this._isSelecting = !0),
                    this._ballLeft.enableTouch(),
                    this._ballRight.enableTouch(),
                    (this._time = 5.99),
                    this._nowSelectTimes++);
                }));
            }),
            Laya.timer.once(400, this, () => {
              this._nagaAttack.alpha = 1;
            }))
          : this.playEnd();
      }
      playEnd() {
        (this._fishSpine.play("super_common_idle_to_run", !1),
          this._fishSpine.once(Laya.Event.STOPPED, () => {
            this._fishSpine.play("run", !0);
          }),
          ai.getInstance().playSFX(pe.NAGA_END),
          Laya.timer.once(300, this, () => {
            Laya.Tween.to(
              this._fishSpine,
              {
                x: 0,
                y: 50,
              },
              300,
              null,
              Laya.Handler.create(this, () => {
                Laya.Tween.to(
                  this._fishSpine,
                  {
                    x: -1e3,
                    y: -500,
                  },
                  300,
                  Laya.Ease.sineIn,
                );
              }),
            );
          }),
          Laya.timer.once(1e3, this, () => {
            Laya.Tween.to(
              this._board,
              {
                x: 0,
                y: 0,
              },
              700,
              null,
              Laya.Handler.create(this, () => {
                (this._callbackEnd && this._callbackEnd(),
                  (this._callbackEnd = null),
                  Laya.Tween.to(
                    this._board,
                    {
                      scaleX: 0,
                      scaleY: 0,
                    },
                    300,
                    null,
                    Laya.Handler.create(this, () => {
                      this.reset();
                    }),
                  ));
              }),
            );
          }));
      }
      reset() {
        (this._actionHand &&
          (this._actionHand.stop(), (this._actionHand = null)),
          (this._node.visible = !1),
          (this._node.active = !1),
          this._boardParticleLeft.stopSystem(),
          this._boardParticleRight.stopSystem(),
          this._boardParticleStar.stopSystem(),
          this.removeChild(this._fishSpine),
          this._fishSpine.scale(1, 1),
          Ni.getInstance().recoverSpineFish(this._fishSpine, 21),
          (this._fishSpine = null));
      }
    },
    Ws = class extends Laya.Sprite {
      constructor() {
        (super(),
          (this._node = Laya.loader.getRes(he.NAGA_THUNDER).create()),
          this.addChild(this._node));
        const t = this._node.getChildByName("efnode");
        ((this._animator = t.getComponent(Laya.Animator2D)),
          (this._particleComing = t
            .getChildByName("particle_system_coming")
            .getComponent(Laya.Script)));
      }
      play() {
        (this._animator.gotoAndStopByFrame("naga_lighting", 0, 0),
          this._animator.play("naga_lighting"),
          Laya.timer.once(83, this, () => {
            (this._particleComing.resetSystem(),
              Laya.timer.once(333, this, () => {
                this._particleComing.stopSystem();
              }));
          }));
      }
    },
    Ys = class t {
      constructor() {}
      setContainer(t) {
        this._container = t;
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      play(t, e, i, s) {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.INTERACTIVITY_SYMBOL);
          let a = null;
          switch (i) {
            case 19:
              a = le.SPINE_PHOENIX_JSON;
              break;
            case 20:
              a = le.SPINE_CROCODILE_JSON;
              break;
            case 21:
              a = le.SPINE_NAGA_JSON;
          }
          yield Qe.getInstance().loadTemplet(a);
          const n = Ni.getInstance().getInteractivitySymbol();
          (n.init(this._container),
            n.play(t, e, i, () => {
              (Ni.getInstance().recoverInteractivitySymbol(n), s && s());
            }));
        });
      }
    },
    Vs = class {},
    Js = class t {
      constructor() {
        ((this._seatsData = [[], [], [], []]), (this._seadRouletteIcon = []));
      }
      setContainer(t) {
        ((this._container = t),
          (this._seatsData = [[], [], [], []]),
          (this._seadRouletteIcon = []));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      playBossRoulette(e, i, s, a, n) {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadTemplet(le.SPINE_WHEEL_FRONT_JSON),
            yield Qe.getInstance().loadTemplet(le.SPINE_WHEEL_JSON),
            yield Qe.getInstance().loadPrefab(he.BOSS_ROULETTE),
            yield Qe.getInstance().loadPrefab(he.BOSS_ROULETTE_IN),
            yield Qe.getInstance().loadPrefab(he.BOSS_ROULETTE_ICON));
          const o = e.isMe,
            h = i.getWorldPosition(),
            l = this._container.globalToLocal(h);
          let r = new Laya.Point().copy(t.ROULETTE_POINT_OFFSET);
          0 === e.seatId
            ? (r.x -= 50)
            : 1 === e.seatId || 2 === e.seatId
              ? (r.x += 50)
              : 3 === e.seatId && (r.x -= 50);
          const c = this._container.globalToLocal(e.getRewardWorldPosition(r)),
            _ = 0 == this._seatsData[e.seatId].length,
            p = Ni.getInstance().getRouletteIn();
          p.init(this._container);
          const g = Ni.getInstance().getRoulette();
          (g.init(this._container),
            (g.seatId = e.seatId),
            (g.finishMoveCallback = this.onFinishRouletteMove.bind(this, g, e)),
            (g.finishRouletteCallBack = this.onFinishRoulette.bind(
              this,
              g,
              e,
              i,
              s,
              a,
              n,
            )));
          let d = new Vs();
          ((d.player = e),
            (d.fish = i),
            (d.winCoin = s),
            (d.winRate = a),
            (d.seatId = e.seatId),
            (d.callback = n),
            this._seatsData[e.seatId].push(d),
            p.showRouletteIn(l, o, null),
            g.showRoulette(l, c, 1200, o, a, !1, _),
            o && ai.getInstance().playSFXOnce(pe.BONUS_WHEEL_APPEAR));
        });
      }
      onFinishRouletteMove(t, e) {
        if (!t) return;
        if (this._seatsData[t.seatId].length > 1) {
          let i = this._seadRouletteIcon[t.seatId];
          if (i) i.updateNum(1);
          else {
            i = Ni.getInstance().getRouletteIcon();
            const s = this._container.globalToLocal(t.getIconPoint());
            (i.init(this._container),
              i.updatePos(s.x, s.y),
              i.updateIsMe(e.isMe, !0),
              (this._seadRouletteIcon[t.seatId] = i),
              i.showRouletteIcon(e.isMe, 1));
          }
          Ni.getInstance().recoverRoulette(t);
        } else t.playRoulette();
      }
      onFinishRoulette(t, e, i, s, a, n) {
        const o = i.getKind();
        if (a >= zt[o].rateBigWin && e.isMe) {
          (Fe.getInstance().gameMain.playRewardBossAwaken(o, s, () => {
            (ms
              .getInstance()
              .playSmallCoinNum(
                e.getWinCoinWorldPoint(),
                e,
                xe.getInstance().formatNumber(s),
              ),
              this.onFishReward(e, t));
          }),
            ai.getInstance().changeBGM(pe.BGM_CONGRATULATION));
          const i = this._seadRouletteIcon[t.seatId];
          if (i) {
            const s = this._container.globalToLocal(t.getIconPoint());
            (i.init(this._container),
              i.updateIsMe(e.isMe, !0),
              i.updatePos(s.x, s.y));
          }
          t.clear();
        } else
          (Ss.getInstance().playCatchBig(e, o, s, null, n),
            t.clear(),
            this.onFishReward(e, t));
      }
      onFishReward(e, i) {
        this._seatsData[e.seatId].splice(0, 1);
        const s = this._seatsData[e.seatId].length;
        if (s > 0) {
          let a = new Laya.Point().copy(t.ROULETTE_POINT_OFFSET);
          0 === e.seatId
            ? (a.x -= 50)
            : 1 === e.seatId || 2 === e.seatId
              ? (a.x += 50)
              : 3 === e.seatId && (a.x -= 50);
          const n = this._container.globalToLocal(e.getRewardWorldPosition(a)),
            o = this._seatsData[e.seatId][0];
          (i.init(this._container),
            (i.seatId = o.seatId),
            (i.finishRouletteCallBack = this.onFinishRoulette.bind(
              this,
              i,
              e,
              o.fish,
              o.winCoin,
              o.winRate,
              o.callback,
            )),
            i.showAndResume(n, e.isMe, o.winRate));
          const h = this._seadRouletteIcon[e.seatId];
          (h &&
            (1 === s
              ? (h.showEnd(null), (this._seadRouletteIcon[e.seatId] = null))
              : (h.init(i.getIconNode(), e.seatId),
                h.updateIsMe(e.isMe, !1),
                h.updatePos(0, 0),
                h.updateNum(-1))),
            e.isMe && ai.getInstance().changeBGM(pe.BGM_BONUS_WHEEL));
        } else
          (e.isMe && ai.getInstance().changeBGM(pe.BGM),
            Ni.getInstance().recoverRoulette(i));
      }
    };
  Js.ROULETTE_POINT_OFFSET = new Laya.Point(0, 0);
  var js = Js,
    Zs = class {},
    qs = class t {
      constructor() {
        this._seatsData = [[], [], [], []];
      }
      setContainer(t) {
        ((this._container = t), (this._seatsData = [[], [], [], []]));
      }
      static getInstance() {
        return (t._instance || (t._instance = new t()), t._instance);
      }
      playBossSlot(e, i, s, a, n) {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.BOSS_SLOT_GAME);
          const o = e.isMe,
            h = i.getKind(),
            l = i.getWorldPosition(),
            r = this._container.globalToLocal(l);
          let c = new Laya.Point().copy(t.SLOT_POINT_OFFSET);
          !e.isMe ||
            (2 !== e.seatId && 3 !== e.seatId) ||
            ((c.y += t.SLOT_TOP_OFFSET.y), (c.x += t.SLOT_TOP_OFFSET.x));
          const _ = this._container.globalToLocal(e.getRewardWorldPosition(c)),
            p = 0 == this._seatsData[e.seatId].length,
            g = Ni.getInstance().getSlotGame();
          (g.init(this._container),
            (g.seatId = e.seatId),
            (g.finishMoveCallback = this.onFinishSlotMove.bind(this, g)),
            (g.finishSlotCallBack = this.onFinishSlot.bind(
              this,
              g,
              e,
              i,
              s,
              a,
              n,
            )));
          let d = new Zs();
          ((d.player = e),
            (d.fish = i),
            (d.winCoin = s),
            (d.winRate = a),
            (d.seatId = e.seatId),
            (d.callback = n),
            (d.slotGame = g),
            this._seatsData[e.seatId].push(d),
            g.showSlot(r, _, 1e3, o, h, a, p));
          const u = ai.getInstance().getBGM();
          o &&
            u.source != pe.BGM_REWARD &&
            ai.getInstance().changeBGM(pe.BGM_REWARD);
        });
      }
      onFinishSlotMove(t) {
        if (!t) return;
        let e = this._seatsData[t.seatId].length;
        if (e > 1) {
          (this._seatsData[t.seatId][0].slotGame.updateNumTimes(e - 1),
            Ni.getInstance().recoverSlotGame(t));
        } else t.playSlot();
      }
      onFinishSlot(t, e, i, s, a, n) {
        const o = i.getKind();
        if (a >= zt[o].rateBigWin && e.isMe) {
          (Fe.getInstance().gameMain.playRewardBossAwaken(o, s, () => {
            (ms
              .getInstance()
              .playSmallCoinNum(
                e.getWinCoinWorldPoint(),
                e,
                xe.getInstance().formatNumber(s),
              ),
              this.onFishReward(e, t));
          }),
            ai.getInstance().changeBGM(pe.BGM_CONGRATULATION));
        } else
          (Ss.getInstance().playCatchBig(e, o, s, null, n),
            this.onFishReward(e, t));
      }
      onFishReward(e, i) {
        this._seatsData[e.seatId].splice(0, 1);
        const s = this._seatsData[e.seatId].length;
        if (s > 0) {
          let a = new Laya.Point().copy(t.SLOT_POINT_OFFSET);
          !e.isMe ||
            (2 !== e.seatId && 3 !== e.seatId) ||
            ((a.y += t.SLOT_TOP_OFFSET.y), (a.x += t.SLOT_TOP_OFFSET.x));
          const n = this._container.globalToLocal(e.getRewardWorldPosition(a)),
            o = this._seatsData[e.seatId][0];
          ((o.slotGame = i),
            i.init(this._container),
            (i.seatId = e.seatId),
            (i.finishSlotCallBack = this.onFinishSlot.bind(
              this,
              i,
              e,
              o.fish,
              o.winCoin,
              o.winRate,
              o.callback,
            )),
            i.showAndResume(n, e.isMe, o.fish.getKind(), o.winRate, s - 1),
            e.isMe && ai.getInstance().changeBGM(pe.BGM_REWARD));
        } else
          (e.isMe && ai.getInstance().changeBGM(pe.BGM),
            Ni.getInstance().recoverSlotGame(i));
      }
    };
  ((qs.SLOT_POINT_OFFSET = new Laya.Point(0, -220)),
    (qs.SLOT_TOP_OFFSET = new Laya.Point(0, -30)));
  var Qs = qs,
    $s = class {
      constructor(t) {
        ((this._popup = t),
          (this._popup.visible = !1),
          (this._popup.active = !1),
          this.initUI(),
          this.initButton(),
          this.initLanguage());
      }
      setRoomTouchesCallback(t) {
        this._roomTouchesCallback = t;
      }
      show() {
        (this._tweenHide && (this._tweenHide.clear(), (this._tweenHide = null)),
          this._btnRoom1.scale(1, 1),
          this._btnRoom2.scale(1, 1),
          this._btnRoom3.scale(1, 1),
          (this._popup.visible = !0),
          (this._popup.active = !0),
          (this._popup.alpha = 1),
          this._animator.play("show", 0, 0),
          (this._popup.mouseEnabled = !0));
      }
      hide() {
        this._popup.visible &&
          ((this._popup.mouseEnabled = !1),
          (this._tweenHide = Laya.Tween.to(
            this._popup,
            {
              alpha: 0,
            },
            150,
            null,
            Laya.Handler.create(this, () => {
              ((this._tweenHide = null),
                (this._popup.visible = !1),
                (this._popup.active = !1));
            }),
          )));
      }
      cancelConfirm() {
        this._currTouchButton &&
          Laya.Tween.to(
            this._currTouchButton,
            {
              scaleX: this._currTouchButton._baseScaleX,
              scaleY: this._currTouchButton._baseScaleY,
            },
            100,
          );
      }
      playSwitchRoomAnim() {
        ((this._popup.mouseEnabled = !1),
          this._animator.play("hide", 0, 0),
          Laya.timer.once(834, this, () => {
            ((this._popup.visible = !1), (this._popup.active = !1));
          }));
      }
      initUI() {
        if (
          ((this._popup.mouseEnabled = !1),
          (this._scaleNode = this._popup.getChildByName("scalenode")),
          (this._animator = this._scaleNode.getComponent(Laya.Animator2D)),
          (this._btnClose = this._scaleNode.getChildByName("close")),
          (this._btnRoom1 = this._scaleNode.getChildByName("room1")),
          (this._btnRoom2 = this._scaleNode.getChildByName("room2")),
          (this._btnRoom3 = this._scaleNode.getChildByName("room3")),
          "en" != Ye.getInstance().getLanguageName())
        ) {
          let t = this._btnRoom1.getChildByName("name"),
            e = this._btnRoom2.getChildByName("name"),
            i = this._btnRoom3.getChildByName("name"),
            s = this._btnRoom1.getChildByName("slogan"),
            a = this._btnRoom2.getChildByName("slogan"),
            n = this._btnRoom3.getChildByName("slogan"),
            o = this._scaleNode.getChildByName("title");
          (Ye.getInstance().localizeImageText(t, oe.TXT_NEWBIE_ROOM),
            Ye.getInstance().localizeImageText(e, oe.TXT_HAPPY_ROOM),
            Ye.getInstance().localizeImageText(i, oe.TXT_REGAL_ROOM),
            Ye.getInstance().localizeImageText(s, oe.TXT_NEWBIE_SLOGAN),
            Ye.getInstance().localizeImageText(a, oe.TXT_HAPPY_SLOGAN),
            Ye.getInstance().localizeImageText(n, oe.TXT_REGAL_SLOGAN),
            Ye.getInstance().localizeImageText(o, oe.TXT_SWITCH_ROOM_TITLE));
        }
      }
      initButton() {
        (xe
          .getInstance()
          .registerButtonEvent(
            this._btnClose,
            this.onButtonCloseTouches.bind(this),
            1.05,
          ),
          this._registerButton(
            this._btnRoom1,
            this.onButtonRoomTouches.bind(this, 0),
            0.9,
          ),
          this._registerButton(
            this._btnRoom2,
            this.onButtonRoomTouches.bind(this, 4),
            0.9,
          ),
          this._registerButton(
            this._btnRoom3,
            this.onButtonRoomTouches.bind(this, 5),
            0.9,
          ));
      }
      initLanguage() {
        Ye.getInstance().getLanguageName();
      }
      _registerButton(t, e, i = 0.95, s) {
        ((s = s || t),
          t.on(Laya.Event.MOUSE_DOWN, () => {
            (t._baseScaleX || (t._baseScaleX = t.scaleX),
              t._baseScaleY || (t._baseScaleY = t.scaleY),
              Laya.Tween.to(
                s,
                {
                  scaleX: t._baseScaleX * i,
                  scaleY: t._baseScaleY * i,
                },
                100,
              ),
              (t._isDowned = !0),
              (this._currTouchButton = t),
              e && e());
          }),
          t.on(Laya.Event.MOUSE_UP, () => {
            t._isDowned && (t._isDowned = !1);
          }));
      }
      onButtonCloseTouches() {
        (this.hide(), ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonRoomTouches(t) {
        this._roomTouchesCallback && this._roomTouchesCallback(t);
      }
      getMainObject() {
        return this._popup;
      }
    },
    ta = class extends Laya.Sprite {
      constructor(t) {
        (super(),
          (this.main = t),
          (this.zOrder = 9999),
          (this.anchorX = 0.5),
          (this.anchorY = 0.5),
          this.pos(640, 360),
          this.size(1280, 720),
          (this.mouseThrough = !0),
          this.initUI());
      }
      initUI() {}
      initTestFakeRelease() {
        return _(this, null, function* () {
          this.addButton(700, 100, "release", () => {
            this.main.fakeToReleaseFish();
          });
        });
      }
      initTestNagaMiniGame() {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadPrefab(he.NAGA_MINI_GAME),
            yield Qe.getInstance().loadPrefab(he.NAGA_MOVE_BALL),
            yield Qe.getInstance().loadPrefab(he.NAGA_GEM),
            yield Qe.getInstance().loadPrefab(he.NAGA_BIG_THUNDER),
            yield Qe.getInstance().loadPrefab(he.NAGA_ARC),
            yield Qe.getInstance().loadTemplet(le.SPINE_NAGA_JSON),
            (this.nagaMiniGame = new Ks()),
            this.main.layerEffect2.addChild(this.nagaMiniGame),
            this.addButton(700, 100, "play1", () => {
              this.nagaMiniGame.play(null, 200, 100);
            }));
        });
      }
      initTestBackground() {
        (this.addButton(700, 100, "play1", () => {
          this.main.bgManager.switchNormal(1);
        }),
          this.addButton(700, 200, "play2", () => {
            this.main.bgManager.switchNormal(2);
          }),
          this.addButton(700, 300, "play3", () => {
            this.main.bgManager.switchNormal(3);
          }));
      }
      initCrocodileAwakenTest() {
        ((this.crocodileAwaken = new Ms(
          this.main.layerEffect1,
          this.main.layerEffect2,
        )),
          this.addButton(700, 100, "play", () => {
            this.crocodileAwaken.play(new Laya.Point(300, 300), 351, 351);
          }));
      }
      initHarpoonRewardTest() {
        ((this.harpoonReward = new ui()),
          this.addChild(this.harpoonReward),
          this.addButton(700, 100, "play", () => {
            this.harpoonReward.play(
              !0,
              16,
              new Laya.Point(640, 360),
              new Laya.Point(100, 600),
              99,
            );
          }),
          this.addButton(700, 200, "play1", () => {
            this.harpoonReward.play(
              !1,
              16,
              new Laya.Point(640, 360),
              new Laya.Point(100, 600),
              99,
            );
          }),
          this.addButton(700, 200, "manager play", () => {
            Ss.getInstance().playCatchSpecial(
              this.main.players[1],
              Yi.getInstance().getFishById(1),
              99,
              990,
              null,
            );
          }),
          this.addButton(700, 300, "manager play Me", () => {
            Ss.getInstance().playCatchSpecial(
              this.main.playerMe,
              Yi.getInstance().getFishById(1),
              499,
              4990,
              null,
            );
          }));
      }
      initHarpoonTest() {
        this.addButton(700, 100, "handleHarpoon", () => {
          Fe.getInstance().gameMain.playerMe.handleHarpoon(150, 3);
        });
      }
      initClawTest() {
        ((this.claw = new ei()),
          this.claw.pos(640, 360),
          this.addChild(this.claw),
          this.addButton(700, 100, "playIdleOpen", () => {
            this.claw.playIdleOpen();
          }),
          this.addButton(700, 200, "playIdleClose", () => {
            this.claw.playIdleClose();
          }),
          this.addButton(700, 300, "playHit", () => {
            this.claw.playHit();
          }),
          this.addButton(700, 400, "playGrabbing", () => {
            this.claw.playGrabbing();
          }),
          this.addButton(700, 500, "playCatch", () => {
            this.claw.playCatch();
          }));
      }
      initRopeDartTest() {
        ((this.layerTouch = new Laya.Sprite()),
          (this.layerTouch.anchorX = 0.5),
          (this.layerTouch.anchorY = 0.5),
          this.layerTouch.pos(640, 360),
          this.layerTouch.size(1280, 720),
          this.addChild(this.layerTouch),
          this.addEvent(),
          (this.ropeDart = new Ps(this.layerTouch)),
          this.ropeDart.setIdleGrabber(new Laya.Point(300, 300)),
          this.addButton(700, 100, "shrink", () => {
            this.ropeDart.shrink(0.5);
          }),
          this.addButton(700, 200, "loose", () => {
            this.ropeDart.loose(0.5);
          }),
          this.addButton(700, 300, "tension", () => {
            this.ropeDart.tension();
          }),
          this.addButton(700, 400, "closeUp", () => {
            this.ropeDart.closeUp(1, 1, () => {});
          }),
          this.addButton(700, 500, "clearRope", () => {
            this.ropeDart.clearRope();
          }),
          this.addButton(700, 600, "add Event Shoot", () => {
            this.addEvent();
          }),
          this.addButton(700, 700, "add Event Move", () => {
            this.addEventMove();
          }));
      }
      addEvent() {
        (this.layerTouch.offAll(),
          this.layerTouch.on(Laya.Event.CLICK, (t) => {
            let e = t.stageX,
              i = t.stageY;
            this.ropeDart.shoot(
              new Laya.Point(300, 300),
              new Laya.Point(e, i),
              0.5,
            );
          }));
      }
      addEventMove() {
        (this.layerTouch.offAll(),
          this.layerTouch.on(Laya.Event.CLICK, (t) => {
            let e = t.stageX,
              i = t.stageY;
            this.ropeDart.rope.getDot(0).pos.setTo(e, i);
          }));
      }
      addButton(t, e, i, s) {
        const a = new Laya.Image("resources/ui/ui/block_2.png");
        ((a.anchorX = 0.5),
          (a.anchorY = 0.5),
          (a.useSourceSize = !0),
          a.pos(t, e),
          (a.mouseThrough = !1),
          xe.getInstance().registerButtonEvent(a, s));
        const n = new Laya.Text();
        ((n.text = i),
          (n.anchorX = 0.5),
          (n.anchorY = 0.5),
          n.pos(69, 10),
          n.size(138, 20),
          (n.align = "center"),
          (n.valign = "middle"),
          a.addChild(n),
          this.addChild(a));
      }
    },
    { regClass: ea, property: ia, Tween: sa } = Laya,
    aa = class extends Laya.Script {
      constructor() {
        (super(...arguments),
          (this.isShowBtnLock = !1),
          (this.isActiveBtnLock = !1),
          (this.timeStartLostFocus = 0),
          (this.isEagleFast = !1),
          (this.isShowPnlMenu = !1),
          (this.lastTime = 0),
          (this._isMouseDown = !1),
          (this._mouseX = 0),
          (this._mouseY = 0),
          (this._touchPos = new Laya.Point()),
          (this._isBtnLockBusy = !1),
          (this.isLaserLock = !1),
          (this.isNormalLock = !1),
          (this.isSpecialCannon = !1),
          (this.curSpecialBulletKind = null),
          (this.isAutoMode = !1),
          (this._targetFish = null),
          (this.fireData = {}),
          (this._isCrocodileRewardShowPlaying = !1),
          (this._isPhoenixMiniGamePlaying = !1),
          (this._isNagaMiniGamePlaying = !1),
          (this._isNagaThunderPlaying = !1),
          (this.isResizing = !1),
          (this.currentBrowserWidth = 0),
          (this.currentBrowserHeight = 0),
          (this.isActiveSound = !0),
          (this.isAppFocus = !0),
          (this._isFirstContext = !0),
          (this._listUIResize = []),
          (this._listPopupResize = []),
          (this._listLayerEffectResize = []),
          (this._nextBulletKind = 4),
          (this._isWaitingActiveBulletFree = !1),
          (this._isLoadingPopupInfo = !1));
      }
      onStart() {
        ((Laya.SoundManager.autoReleaseSound = !1),
          (Laya.SoundManager.autoStopMusic = !1),
          (this.isResizing = !1),
          (this.currentBrowserWidth = 0),
          (this.currentBrowserHeight = 0),
          (this.mapPlayerBySeat = new Map()),
          (this.players = []),
          (this.fireData = {}),
          (this._listUIResize = []),
          (Be.getInstance().currentBulletId = 0),
          ai.getInstance().setScene(this.scene),
          (Fe.getInstance().isEnableFire = !0),
          this.initAllLayer(),
          this.initPopup(),
          this.initHandlers(),
          this.initAnimLockNormal(),
          this.initEffectCatchFish(),
          this.initListUIResize(),
          this.initManager(),
          this.autoResize(),
          this.initLanguage(),
          !p && g
            ? this.initTest()
            : (this.initPlayers(),
              this.loadPlayers(),
              Be.getInstance().getCurrentContextInfo() &&
                this.onReleaseFishContext(
                  Be.getInstance().getCurrentContextInfo(),
                )),
          this.resizeGame());
      }
      initAllLayer() {
        ((this.layerBg = this.scene.getChildByName("layer_bg")),
          (this.layerTouch = this.scene.getChildByName("layer_touch")),
          (this.layerBullet = this.scene.getChildByName("layer_bullet")),
          (this.layerSpecialBullet = this.scene.getChildByName(
            "layer_special_bullet",
          )));
        const t = this.scene.getChildByName("layer_flame");
        ((this.layerUI = this.scene.getChildByName("layer_ui")),
          (this.layerCannons = this.scene.getChildByName("layer_cannons")),
          (this.layerSeats = this.scene.getChildByName("layer_seats")),
          (this.layerEffect = this.scene.getChildByName("layer_effect")),
          (this.layerFishWave = this.scene.getChildByName("layer_fish_wave")),
          (this.layerBg.zOrder = E),
          (this.fishContainer.zOrder = x),
          (this.layerTouch.zOrder = M),
          (this.layerBullet.zOrder = v),
          (this.layerSpecialBullet.zOrder = z),
          (t.zOrder = R),
          (this.layerUI.zOrder = X),
          (this.layerCannons.zOrder = O),
          (this.layerSeats.zOrder = H),
          (this.layerEffect.zOrder = G),
          (this.layerFishWave.zOrder = k));
        const e = t.getChildByName("flame_frame");
        ((e.visible = !1),
          (e.active = !1),
          this.initLayerBg(),
          this.initLayerUI(),
          this.initLayerTouch(),
          this.initLayerEffect());
      }
      initLayerBg() {
        this.bgManager = new Rs(this.layerBg);
      }
      initLayerUI() {
        ((this.pnlMenu = this.layerUI.getChildByName("pnl_menu")),
          (this.bgMenu = this.pnlMenu
            .getChildByName("pnl_menu_1")
            .getChildByName("bg")),
          (this.btnInfo = this.bgMenu.getChildByName("btn_info")),
          (this.btnSound = this.bgMenu.getChildByName("btn_sound")),
          (this.btnHome = this.bgMenu.getChildByName("btn_home")),
          (this.btnHome.disabled = !1),
          (this.btnMenu = this.pnlMenu
            .getChildByName("pnl_menu_1")
            .getChildByName("btn_menu")),
          (this.pnlMenuMobile = this.layerUI.getChildByName("pnl_menu_mobile")),
          (this.bgMenuMobile = this.pnlMenuMobile
            .getChildByName("pnl_menu_1")
            .getChildByName("bg")),
          (this.btnInfoMobile = this.bgMenuMobile.getChildByName("btn_info")),
          (this.btnSoundMobile = this.bgMenuMobile.getChildByName("btn_sound")),
          (this.btnMenuMobile = this.pnlMenuMobile
            .getChildByName("pnl_menu_1")
            .getChildByName("btn_menu")),
          (this.pnlAuto = this.layerUI.getChildByName("pnl_auto")),
          (this.btnAuto = this.pnlAuto.getChildByName("btn_auto")),
          (this.btnLock = this.pnlAuto.getChildByName("btn_lock")),
          (this.btnLockNormal = this.pnlAuto.getChildByName("btn_lock_normal")),
          (this.btnLockLaze = this.pnlAuto.getChildByName("btn_lock_laze")),
          (this.circleLockNormal =
            this.btnLockNormal.getChildByName("circle_lock_normal")),
          (this.circleLockLaze =
            this.btnLockLaze.getChildByName("circle_lock_laze")),
          (this.imgLockNormal =
            this.btnLockNormal.getChildByName("img_lock_normal")),
          (this.imgLockLaze = this.btnLockLaze.getChildByName("img_lock_laze")),
          (this.imgLock = this.btnLock.getChildByName("img_lock")),
          (this.inputLock = this.pnlAuto.getChildByName("input_lock")),
          (this.txtInputLock = this.inputLock.getChildByName("txt_input_lock")),
          (this.pnlAim = this.pnlAuto.getChildByName("pnl_aim")),
          (this.pnlAimArrow = this.pnlAim.getChildByName("pnl_aim_arrow")),
          (this.imgAimCircle = this.pnlAim.getChildByName("img_aim_circle")),
          (this.effectLock = this.btnLock.getChildByName("skill_box")),
          (this.animatorEffectLock1 =
            this.effectLock.getChildByName("skill_box1")),
          (this.animatorEffectLock2 =
            this.effectLock.getChildByName("skill_box2")),
          (this.animatorEffectLock3 =
            this.effectLock.getChildByName("skill_box3")),
          (this.btnAutoShotsNum = this.btnAuto.getChildByName("shots_num")),
          (this.btnAutoShotsNumText =
            this.btnAutoShotsNum.getChildByName("text")),
          (this.effectLockAuto = this.btnAuto.getChildByName("skill_box")),
          (this.animatorEffectLockAuto1 =
            this.effectLockAuto.getChildByName("skill_box1")),
          (this.animatorEffectLockAuto2 =
            this.effectLockAuto.getChildByName("skill_box2")),
          (this.animatorEffectLockAuto3 =
            this.effectLockAuto.getChildByName("skill_box3")),
          (this.effectNormalLock =
            this.scene.getChildByName("eff_normal_lock")),
          (this.effectNormalLock.active = !1),
          (this.effectNormalLock.zOrder = v),
          (this.effectNormalLockAnimator = this.effectNormalLock.getComponent(
            Laya.Animator2D,
          )),
          (this.mousePosition = this.scene.getChildByName("mouse_position")),
          (this.mousePosition.active = !1),
          (this.mousePosition.visible = !1),
          (this.mousePosition.zOrder = z),
          (this.pnlLightningBall =
            this.layerUI.getChildByName("lightning_ball")),
          (this.btnLightningBall =
            this.pnlLightningBall.getChildByName("shoot_btn")),
          (this.pnlSpecialCannon =
            this.layerUI.getChildByName("pnl_special_cannon")),
          (this.btnShark = this.pnlSpecialCannon.getChildByName("btn_shark")),
          (this.btnSharkCardLight = this.btnShark.getChildByName("card_light")),
          (this.btnSharkAnimation1 =
            this.btnSharkCardLight.getChildByName("roll_light1")),
          (this.btnSharkAnimation2 =
            this.btnSharkCardLight.getChildByName("roll_light2")),
          (this.btnSharkAnimation3 =
            this.btnSharkCardLight.getChildByName("card_light")),
          (this.txtCoinShark = this.btnShark
            .getChildByName("bg_coin")
            .getChildByName("txt_coin")),
          (this.btnJelly = this.pnlSpecialCannon.getChildByName("btn_jelly")),
          (this.btnJellyCardLight = this.btnJelly.getChildByName("card_light")),
          (this.btnJellyAnimation1 =
            this.btnJellyCardLight.getChildByName("roll_light1")),
          (this.btnJellyAnimation2 =
            this.btnJellyCardLight.getChildByName("roll_light2")),
          (this.btnJellyAnimation3 =
            this.btnJellyCardLight.getChildByName("card_light")),
          (this.txtCoinJelly = this.btnJelly
            .getChildByName("bg_coin")
            .getChildByName("txt_coin")),
          (this.btnEagle = this.pnlSpecialCannon.getChildByName("btn_eagle")),
          (this.btnEagleCardLight = this.btnEagle.getChildByName("card_light")),
          (this.btnEagleAnimation1 =
            this.btnEagleCardLight.getChildByName("roll_light1")),
          (this.btnEagleAnimation2 =
            this.btnEagleCardLight.getChildByName("roll_light2")),
          (this.btnEagleAnimation3 =
            this.btnEagleCardLight.getChildByName("card_light")),
          (this.txtCoinEagle = this.btnEagle
            .getChildByName("bg_coin")
            .getChildByName("txt_coin")),
          this.setTxtCoinSpecialCannon(Be.getInstance().getFirePowerAtIndex(0)),
          (this.btnEagleFast =
            this.pnlSpecialCannon.getChildByName("btn_eagle_fast")),
          (this.btnEagleFast.skin = oe.BTN_EAGLE_FAST_OFF),
          (this.btnEagleFast.visible = !1),
          (this.btnEagleFast.active = !1),
          (this.btnShark.visible = !0),
          (this.btnJelly.visible = !0),
          (this.btnEagle.visible = !0));
        let t = this.layerUI.getChildByName("button_switch_room");
        ((this.btnSwitchRoom = t.getChildByName("bg_01")),
          (this.btnSwitchRoomTheme =
            this.btnSwitchRoom.getChildByName("theme")),
          (this.textRoomId = t.getChildByName("session")),
          (this.textRoomId.visible = Be.getInstance().roomId > 0),
          (this.textRoomId.text = Be.getInstance().roomId + ""),
          (this.isActiveSound = !ai.getInstance().oldActiveSound),
          this.onButtonSoundTouches(),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnInfo,
              this.onButtonInfoTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnSound,
              this.onButtonSoundTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnHome,
              this.onButtonHomeTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnMenu,
              this.onButtonMenuTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnInfoMobile,
              this.onButtonInfoTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnSoundMobile,
              this.onButtonSoundTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnMenuMobile,
              this.onButtonMenuTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnAuto,
              this.onButtonAutoTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnLock,
              this.onButtonLockTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnLockNormal,
              this.onButtonLockNormalTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnLockLaze,
              this.onButtonLockLazeTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnLightningBall,
              this.onButtonLightningBallTouches.bind(this),
              0.95,
              this.pnlLightningBall,
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnShark,
              this.onButtonSharkTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnJelly,
              this.onButtonJellyTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnEagle,
              this.onButtonEagleTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnEagleFast,
              this.onButtonEagleFastTouches.bind(this),
            ),
          xe
            .getInstance()
            .registerButtonEvent(
              this.btnSwitchRoom,
              this.onButtonSwitchRoomTouches.bind(this),
              0.95,
              t,
            ),
          (p || m) &&
            CoreHelper.isRunningInApp() &&
            ((this.pnlMenu.active = !1),
            (this.pnlMenu.visible = !1),
            (this.pnlMenuMobile.active = !0),
            (this.pnlMenuMobile.visible = !0)));
      }
      initPopup() {
        let t = this.scene.getChildByName("popup_auto");
        ((t.zOrder = W),
          (this.popupAuto = new Es(t)),
          this.popupAuto.setConfirmCallback(
            this.onPopupAutoConfirm.bind(this),
          ));
        let e = this.scene.getChildByName("popup_switch_room");
        ((e.zOrder = W),
          (this.popupSwitchRoom = new $s(e)),
          this.popupSwitchRoom.setRoomTouchesCallback(
            this.onRoomTouches.bind(this),
          ));
        let i = this.scene.getChildByName("popup_alert");
        ((i.zOrder = Y),
          (this.popupAlert = new Qi(i)),
          (this.tableNotify = this.scene.getChildByName("table_notify")),
          (this.tableNotify.visible = !1),
          (this.tableNotify.active = !1),
          (this.tableNotify.zOrder = Y),
          (this.tableNotifyText = this.tableNotify.getChildByName("text")));
      }
      initManager() {
        ((this.resizeManager = Ze.getInstance()),
          (this.contextManager = rs.getInstance()),
          hs
            .getInstance()
            .setBulletContainer(this.layerBullet, this.layerSpecialBullet),
          this.initFishManager(),
          this.initGameManager());
      }
      initListUIResize() {
        (this._listUIResize.push(this.effectNormalLock),
          this._listUIResize.push(this.mousePosition),
          this._listUIResize.push(this.tableNotify),
          this._listPopupResize.push(this.popupAuto.getMainObject()),
          this._listPopupResize.push(this.popupAlert.getMainObject()),
          this._listPopupResize.push(this.popupSwitchRoom.getMainObject()),
          this._listLayerEffectResize.push(this.layerNormalCatch),
          this._listLayerEffectResize.push(this.layerBigCatch),
          this._listLayerEffectResize.push(this.layerSpecialBullet),
          this._listLayerEffectResize.push(this.layerUI),
          this._listLayerEffectResize.push(this.layerSeats),
          this._listLayerEffectResize.push(this.layerCannons));
      }
      onSocketDisconnected() {
        let t = {};
        ((t.message = Ye.getInstance().getText("key_alert_disconnected")),
          this.showPopupAlert(t));
      }
      onSocketClosed() {
        let t = {};
        ((t.message = Ye.getInstance().getText("key_alert_disconnected")),
          this.showPopupAlert(t));
      }
      initAnimLockNormal() {
        ((this.lockNormal = new cs()),
          this.lockNormal.setPanelAim(this.pnlAim),
          this.lockNormal.setPnlAimArrow(this.pnlAimArrow),
          this.lockNormal.setImgAimCircle(this.imgAimCircle));
      }
      initEffectCatchFish() {
        ((this.layerBigCatch = this.scene.getChildByName("layer_big_catch")),
          (this.layerNormalCatch =
            this.scene.getChildByName("layer_normal_catch")));
        let t = new Laya.Sprite();
        (this.layerBigCatch.addChild(t),
          (this.layerNormalCatch.zOrder = D),
          (this.layerBigCatch.zOrder = U),
          fs.getInstance().setContainer(t),
          Qs.getInstance().setContainer(this.layerBigCatch),
          ms
            .getInstance()
            .setContainer(this.layerNormalCatch, this.layerBigCatch),
          js.getInstance().setContainer(this.layerBigCatch));
      }
      onUpdate() {
        const t = 0.001 * Date.now(),
          e = t - this.lastTime;
        if (Fe.getInstance().isEnableFire)
          if (
            (4 == this.curSpecialBulletKind &&
              4 != this._nextBulletKind &&
              this.playerMe.isHarpoonDone() &&
              (this._nextBulletKind >= 2 && this._nextBulletKind <= 4
                ? this.startSpecialCannon(this._nextBulletKind)
                : this.cancelSpecialCannon()),
            !this.playerMe ||
              !this._isMouseDown ||
              this.isActiveBtnLock ||
              this.isAutoMode)
          ) {
            if (this.isActiveBtnLock || this.isAutoMode)
              if (this.isSpecialCannon) {
                if (!this.playerMe.isHarpoonDone())
                  return void (this.lastTime = t);
                if (e > Gt[this.curSpecialBulletKind].delayShoot) {
                  if (this._targetFish && this._targetFish.getIsAlive())
                    if (this._targetFish.isInGameScene()) {
                      const t = this._targetFish.getWorldPosition();
                      (this.shootSpecial(t.x, t.y, this._targetFish),
                        this.isAutoMode && this.updateShotsNum());
                    } else this.onTargetFishSpecialBulletOutScene();
                  else null != this._targetFishKind && this.targetNewFish();
                  this.lastTime = t;
                }
              } else if (this.isNormalLock) {
                if (e > Gt[1].delayShoot) {
                  if (this._targetFish && this._targetFish.getIsAlive())
                    if (this._targetFish.isInGameScene()) {
                      const t = this._targetFish.getWorldPosition();
                      (this.shoot(t.x, t.y),
                        this.isAutoMode && this.updateShotsNum());
                    } else this.onTargetFishNormalLockOutScene();
                  else null != this._targetFishKind && this.targetNewFish();
                  this.lastTime = t;
                }
              } else
                this.isLaserLock &&
                  e > Gt[6].delayShoot &&
                  (this._targetFish && this._targetFish.getIsAlive()
                    ? this._targetFish.isInGameScene()
                      ? this.isAutoMode && this.updateShotsNum()
                      : this.onTargetFishLaserLockOutScene()
                    : null != this._targetFishKind && this.targetNewFish(),
                  (this.lastTime = t));
          } else if (this.isSpecialCannon) {
            if (!this.playerMe.isHarpoonDone()) return void (this.lastTime = t);
            if (e > Gt[this.curSpecialBulletKind].delayShoot) {
              const e = Yi.getInstance().getFishAtPosition(
                this._mouseX,
                this._mouseY,
                !0,
              );
              if (e) {
                const t = e.getWorldPosition();
                this.shootSpecial(t.x, t.y, e);
              }
              this.lastTime = t;
            }
          } else
            e > Gt[1].delayShoot &&
              (this.shoot(this._mouseX, this._mouseY), (this.lastTime = t));
        else
          this.isNormalLock
            ? this.onTargetFishNormalLockOutScene()
            : this.isLaserLock && this.onTargetFishLaserLockOutScene();
      }
      initHandlers() {
        (Laya.stage.on(
          "system.socket_disconnected",
          this,
          this.onSocketDisconnected,
        ),
          Laya.stage.on("system.socket_error", this, this.onSocketClosed),
          Laya.stage.on("game.catch_fish", this, this.onCatchFishInfo),
          Laya.stage.on(
            Laya.Event.VISIBILITY_CHANGE,
            this,
            this.onAppChangeVisibility,
          ),
          Laya.stage.on(Laya.Event.BLUR, this, this.onAppBlur),
          Laya.stage.on(Laya.Event.FOCUS, this, this.onAppFocus),
          Laya.stage.on("game.match_info", this, this.onUpdateMatchInfo),
          Laya.stage.on("lobby.user_join_room", this, this.onOtherUserJoinRoom),
          Laya.stage.on("lobby.other_leave", this, this.onOtherUserLeaveRoom),
          Laya.stage.on("game.fire_bullet", this, this.onFireBulletInfo),
          Laya.stage.on(
            "game.release_context",
            this,
            this.onReleaseFishContext,
          ),
          Laya.stage.on("game.server_notify", this, this.onServerNotify),
          Laya.stage.on(
            "game.active_bullet_free",
            this,
            this.onActiveBulletFree,
          ),
          document.addEventListener(
            "mouseup",
            this.onDocumentClickMouseUp.bind(this),
          ),
          Laya.stage.on("game.switch_room", this, this.onSwitchRoomResult),
          Laya.stage.on("lobby.table_info", this, this.onGetTableInfo),
          Laya.stage.on("lobby.join_lobby_response", this, this.onLobbyJoin));
      }
      onDocumentClickMouseUp() {
        ((this._isMouseDown = !1), this.hideMousePosition());
      }
      autoResize() {
        Laya.stage.on(
          Laya.Event.RESIZE,
          this,
          this.resizeManager.debounce(() => {
            const t = Laya.Browser.clientWidth,
              e = Laya.Browser.clientHeight;
            (this.currentBrowserWidth === t &&
              this.currentBrowserHeight === e) ||
              this.resizeGame();
          }, w),
        );
      }
      resizeGame() {
        this.isResizing ||
          ((this.isResizing = !0),
          this.resizeManager.resizeUI(
            this.players,
            this._listUIResize,
            this._listPopupResize,
            this._listLayerEffectResize,
            this.fishContainer,
            this.layerBullet,
          ),
          (this.currentBrowserWidth = Laya.Browser.clientWidth),
          (this.currentBrowserHeight = Laya.Browser.clientHeight),
          Yi.getInstance().resizeFish(),
          this.bgManager && this.bgManager.resizeParticle(),
          (this.isResizing = !1));
      }
      initLayerTouch() {
        this.layerTouch &&
          (this.layerTouch.on(Laya.Event.MOUSE_DOWN, (t) => {
            if (
              ((this._mouseX = t.stageX),
              (this._mouseY = t.stageY),
              this.showMousePosition(),
              this.updatePosMousePosition(t.stageX, t.stageY),
              (this._isMouseDown = !0),
              Fe.getInstance().isEnableFire)
            )
              if (
                (this.layerTouch.localToGlobal(
                  this._touchPos.setTo(t.stageX, t.stageY),
                ),
                (this.layerTouch.zOrder = K),
                4 != this.curSpecialBulletKind || this.playerMe.isHarpoonDone())
              )
                if (this.isActiveBtnLock || this.isAutoMode) {
                  if (this.isOutOfCoin())
                    return void this.showPopupOutOfCoin(null);
                  if (this.isNormalLock || this.isSpecialCannon) {
                    const t = Yi.getInstance().getFishAtPosition(
                      this._touchPos.x,
                      this._touchPos.y,
                      !0,
                    );
                    if (t)
                      null == this._targetFish ||
                      this._targetFish.getId() != t.getId()
                        ? this.startTarget(t)
                        : !this.isAutoMode && this.cancelTargetNormalLock();
                    else if (this._targetFish || null != this._targetFishKind)
                      if (this.isAutoMode) {
                        let t = null;
                        for (
                          let e = 0;
                          e < this._listTargetFishKind.length;
                          e++
                        ) {
                          const i = Yi.getInstance().getNearestFishByKind(
                            this._listTargetFishKind[e],
                            this._lastTargetPoint,
                          );
                          if (i) {
                            t = i;
                            break;
                          }
                        }
                        this._targetFish &&
                          t &&
                          t.getKind() != this._targetFish.getKind() &&
                          (this.playerMe.stopLaser(),
                          (this._targetFish = null),
                          (this._targetFishKind = null),
                          this.startTarget(t));
                      } else this.cancelTargetNormalLock();
                  } else if (this.isLaserLock) {
                    const t = Yi.getInstance().getFishAtPosition(
                      this._touchPos.x,
                      this._touchPos.y,
                    );
                    if (t)
                      null == this._targetFish
                        ? this.startTarget(t)
                        : this._targetFish.getId() != t.getId()
                          ? this.changeTarget(t)
                          : this.isAutoMode ||
                            (this.playerMe.stopLaser(),
                            (this._targetFish = null),
                            (this._targetFishKind = null));
                    else if (this.isAutoMode) {
                      let t = null;
                      for (
                        let e = 0;
                        e < this._listTargetFishKind.length;
                        e++
                      ) {
                        const i = Yi.getInstance().getNearestFishByKind(
                          this._listTargetFishKind[e],
                          this._lastTargetPoint,
                        );
                        if (i) {
                          t = i;
                          break;
                        }
                      }
                      t &&
                        this._targetFish &&
                        t.getKind() != this._targetFish.getKind() &&
                        (this.playerMe.stopLaser(),
                        (this._targetFish = null),
                        (this._targetFishKind = null),
                        this.startTarget(t));
                    } else
                      (this.playerMe.stopLaser(),
                        (this._targetFish = null),
                        (this._targetFishKind = null));
                  }
                } else if (this.isSpecialCannon) {
                  const t = Yi.getInstance().getFishAtPosition(
                    this._touchPos.x,
                    this._touchPos.y,
                    !0,
                  );
                  if (t) {
                    const e = t.getWorldPosition();
                    this.shootSpecial(e.x, e.y, t);
                  }
                } else this.shoot(t.stageX, t.stageY);
              else if (this.isActiveBtnLock || this.isAutoMode) {
                const t = Yi.getInstance().getFishAtPosition(
                  this._touchPos.x,
                  this._touchPos.y,
                  !0,
                );
                t
                  ? null == this._targetFish ||
                    this._targetFish.getId() != t.getId()
                    ? ((this._targetFish = t), this.playEffectNormalLock())
                    : !this.isAutoMode && this.cancelTargetNormalLock()
                  : (this._targetFish = null);
              }
          }),
          this.layerTouch.on(Laya.Event.MOUSE_UP, () => {
            ((this._isMouseDown = !1),
              this.hideMousePosition(),
              (this.layerTouch.zOrder = M));
          }),
          this.layerTouch.on(Laya.Event.MOUSE_OUT, () => {
            (Laya.Browser.onMobile &&
              ((this._isMouseDown = !1), this.hideMousePosition()),
              (this.layerTouch.zOrder = M));
          }),
          this.layerTouch.on(Laya.Event.MOUSE_MOVE, (t) => {
            if (
              (this._isMouseDown &&
                ((this._mouseX = t.stageX),
                (this._mouseY = t.stageY),
                this.updatePosMousePosition(t.stageX, t.stageY)),
              Fe.getInstance().isEnableFire &&
                (4 != this.curSpecialBulletKind ||
                  this.playerMe.isHarpoonDone()) &&
                (this.layerTouch.localToGlobal(
                  this._touchPos.setTo(t.stageX, t.stageY),
                ),
                this._isMouseDown && (this.isActiveBtnLock || this.isAutoMode)))
            )
              if (this.isNormalLock || this.isSpecialCannon) {
                const t = Yi.getInstance().getFishAtPosition(
                  this._touchPos.x,
                  this._touchPos.y,
                  !0,
                );
                t &&
                  ((null != this._targetFish &&
                    this._targetFish.getId() == t.getId()) ||
                    this.startTarget(t));
              } else if (this.isLaserLock) {
                const t = Yi.getInstance().getFishAtPosition(
                  this._touchPos.x,
                  this._touchPos.y,
                );
                t &&
                  (null == this._targetFish
                    ? this.startTarget(t)
                    : this._targetFish.getId() != t.getId() &&
                      this.changeTarget(t));
              }
          }));
      }
      initLanguage() {
        let t = Ye.getInstance().getLanguageName();
        ((this.txtBtnAuto = this.btnAuto.getChildByName("txt_auto_mode")),
          (this.txtBtnLockNormal =
            this.btnLockNormal.getChildByName("txt_lock_normal")),
          (this.txtBtnLockLaze =
            this.btnLockLaze.getChildByName("txt_lock_laze")));
        let e,
          i = this.btnShark.getChildByName("txt"),
          s = this.btnJelly.getChildByName("txt"),
          a = this.btnEagle.getChildByName("txt");
        switch (
          ("en" != t &&
            (Ye.getInstance().localizeImageText(
              this.txtBtnAuto,
              oe.TXT_AUTO_MODE,
            ),
            Ye.getInstance().localizeImageText(
              this.txtBtnLockNormal,
              oe.TXT_NORMAL_LOCK,
            ),
            Ye.getInstance().localizeImageText(
              this.txtBtnLockLaze,
              oe.TXT_LASER_LOCK,
            ),
            Ye.getInstance().localizeImageText(i, oe.TXT_SHARK_BITE),
            Ye.getInstance().localizeImageText(s, oe.TXT_JELLYFISH_CANNON),
            Ye.getInstance().localizeImageText(a, oe.TXT_EAGLE_CLAW_HOOK)),
          Be.getInstance().roomKind)
        ) {
          case 0:
            e = oe.TXT_NEWBIE_ROOM;
            break;
          case 4:
            e = oe.TXT_HAPPY_ROOM;
            break;
          case 5:
            e = oe.TXT_REGAL_ROOM;
        }
        Ye.getInstance().localizeImageText(this.btnSwitchRoomTheme, e);
      }
      initTest() {
        this.scene.addChild(new ta(this));
        const t = {
          userId: 696969,
          position: 0,
          name: "big D Human",
          coin: 696969,
          userLevel: 0,
        };
        for (let e = 0; e < 4; ++e) {
          let i,
            s = this.layerSeats.getChildByName("seat_" + (e + 1)),
            a = this.layerCannons.getChildByName("seat_" + (e + 1));
          if (t.position === e) {
            ((i = new Ns(s, a)), (this.playerMe = i));
            const n = new Ne(0, e);
            (n.parseInfo(t),
              (n.isMe = !0),
              i.setData(n),
              ve
                .getInstance()
                .setRootNode(this.pnlLightningBall, this.playerMe));
          } else ((i = new As(s, a)), i.hide());
          ((i.seatId = e),
            (i.callbackLaserHit = this.playEffectBulletLaserExplode.bind(this)),
            (i.callbackJellyExplode =
              this.playEffectBulletJellyfishExplode.bind(this)),
            this.players.push(i),
            this.mapPlayerBySeat.set(e, i));
        }
      }
      initPlayers() {
        for (let t = 0; t < 4; ++t) {
          let e = this.layerSeats.getChildByName("seat_" + (t + 1)),
            i = this.layerCannons.getChildByName("seat_" + (t + 1)),
            s = new As(e, i);
          s &&
            (s.hide(),
            (s.seatId = t),
            (s.callbackLaserHit = this.playEffectBulletLaserExplode.bind(this)),
            (s.callbackJellyExplode =
              this.playEffectBulletJellyfishExplode.bind(this)),
            this.players.push(s),
            this.mapPlayerBySeat.set(t, s));
        }
      }
      initLayerEffect() {
        ((this.layerEffect1 = this.layerEffect.getChildByName("layer_1")),
          (this.layerEffect2 = this.layerEffect.getChildByName("layer_2")),
          Ji.getInstance().setContainer(this.layerSpecialBullet),
          Ys.getInstance().setContainer(this.layerEffect));
      }
      initEffectBossComing() {
        ((this._effectBossComing = Laya.Loader.getRes(he.BOSS_COMING).create()),
          (this._effectBossComing.visible = !1),
          (this._effectBossComing.active = !1),
          this._effectBossComing.pos(
            this.layerEffect.width >> 1,
            this.layerEffect.height >> 1,
          ),
          (this._effectBossComingBossName = this._effectBossComing
            .getChildByName("boss_name")
            .getChildByName("txt")),
          (this._effectBossComingOdd =
            this._effectBossComing.getChildByName("odd")),
          this.layerEffect.addChild(this._effectBossComing),
          (this._effectBossComingAnimator = this._effectBossComing.getComponent(
            Laya.Animator2D,
          )));
        const t = this._effectBossComing.getChildByName("title");
        Ye.getInstance().localizeImageText(t, oe.TXT_SEA_KING_ATTACK);
      }
      initPhoenixMiniGame() {
        const t = this.scene
            .getChildByName("layer_flame")
            .getChildByName("flame_frame"),
          e = Laya.Loader.getRes(he.REWARD_PHOENIX).create();
        ((e.visible = !1),
          e.pos(
            this.layerEffect.width >> 1,
            80 + (this.layerEffect.height >> 1),
          ),
          this.layerEffect.addChild(e),
          (this._phoenixReward = new Ls(e, t)));
      }
      initPhoenixRebirth() {
        this._phoenixRebirth = new Os(this.layerEffect);
      }
      initCrocodileMiniGame() {
        this._crocodileMiniGame = new ks();
      }
      initCrocodileAwaken() {
        this._crocodileAwaken = new Ms(this.layerEffect1, this.layerEffect2);
      }
      initNagaMiniGame() {
        ((this._nagaMiniGame = new Ks()),
          (this._nagaMiniGame.zOrder = 9999),
          this.layerEffect.addChild(this._nagaMiniGame));
      }
      initRewardBossAwaken() {
        const t = Laya.Loader.getRes(he.REWARD_BOSS_AWAKEN).create();
        ((t.visible = !1),
          (t.active = !1),
          t.pos(this.layerEffect.width >> 1, this.layerEffect.height >> 1),
          this.layerEffect.addChild(t),
          (this._rewardBossAwaken = new Ds(t, this.layerEffect)));
      }
      initFishManager() {
        ((this.fishManager = Yi.getInstance()),
          this.fishManager.setEnableFishByMinKind(0),
          this.fishManager.setFishContainer(this.fishContainer),
          this.fishManager.registerBossComingCallback(
            this.playEffectBossComing.bind(this),
          ),
          this.fishManager.registerBossRemoveCallback(
            this.changeBgBossRemove.bind(this),
          ));
      }
      changeBgBossRemove(t) {
        if (!Yi.getInstance().isSceneBoss) {
          let e;
          if (t) {
            switch (t) {
              case 19:
                e = oe.BACKGROUND_PHOENIX;
                break;
              case 20:
                e = oe.BACKGROUND_CROCODILE;
                break;
              case 21:
                e = oe.BACKGROUND_NAGA;
            }
            let i = this.layerBg.getChildByName("bg_boss");
            if (e && i.texture && i.texture.url && e != i.texture.url) return;
          }
          this.bgManager.toNormal();
          let i = ai.getInstance().getBGM();
          i.source != pe.BGM_CONGRATULATION &&
            i.source != pe.BGM_PHOENIX_REWARD &&
            i.source != pe.BGM_CROCODILE_REWARD &&
            ai.getInstance().changeBGM(pe.BGM);
        }
      }
      initGameManager() {
        Fe.getInstance().gameMain = this;
      }
      onServerNotify(t) {
        if (t)
          switch (t.code) {
            case 1:
            case 2:
              this.showPopupAlert(t);
              break;
            case 3:
              this.showPopupOutOfCoin(t);
          }
      }
      showPopupAlert(t) {
        t &&
          (this.isAutoMode && this.stopAutoMode(),
          this.contextManager.stopContext(),
          this.playerMe.setCoin(
            t.userCoin ? t.userCoin : this.playerMe.getCurrentCoin(),
          ),
          this.popupAlert.visibleButtonOk(!1),
          this.popupAlert.setString(t.message || ""),
          this.popupAlert.show(),
          this.popupAlert.setConfirmCallback(() => {
            (p || m) && CoreHelper.backToLobby();
          }),
          this.popupAlert.setCancelCallback(() => {
            (p || m) && CoreHelper.backToLobby();
          }));
      }
      showPopupOutOfCoin(t) {
        (this.isAutoMode && this.stopAutoMode(),
          this.popupAlert.setString(
            t && t.message
              ? t.message
              : Ye.getInstance().getText("key_confirm_back_buy_chip"),
          ),
          this.popupAlert.show(),
          this.popupAlert.setConfirmCallback(() => {
            (p || m) && CoreHelper.showDeposit();
          }),
          this.popupAlert.setCancelCallback(() => {
            this.isActiveBtnLock &&
              ((this.isActiveBtnLock = !1),
              (this.isNormalLock = !1),
              (this.isLaserLock = !1),
              this.refreshBtnLock(),
              this.cancelTargetNormalLock(),
              this.playerMe.changeCannon(1));
          }));
      }
      onAppChangeVisibility() {
        if (Laya.stage.isVisibility) {
          if (this.timeStartLostFocus && this.timeStartLostFocus > 0) {
            (Date.now() - this.timeStartLostFocus > 1e5
              ? (this.requestUpdateContext(),
                (this._isFirstContext = !0),
                this.setEnableShowBulletAllUser(!1))
              : this.contextManager.onEnterForeground(),
              (this.timeStartLostFocus = 0),
              this.autoResize());
          }
          this.isActiveSound &&
            this.isAppFocus &&
            ((ai.getInstance().isActiveSound = !0),
            ai.getInstance().playBGM(pe.BGM));
        } else
          ((this.timeStartLostFocus = Date.now()),
            (ai.getInstance().isActiveSound = !1),
            ai.getInstance().stopSound());
      }
      onAppBlur() {
        ((ai.getInstance().isActiveSound = !1), (this.isAppFocus = !1));
      }
      onAppFocus() {
        (this.isActiveSound &&
          ((ai.getInstance().isActiveSound = !0),
          ai.getInstance().playBGM(pe.BGM)),
          (this.isAppFocus = !0));
      }
      loadPlayers() {
        for (let t = 0; t < C; t++) {
          const e = Be.getInstance().getPlayerByPosId(t);
          e ? this.addPlayer(e) : this.removePlayer(t);
        }
      }
      addPlayer(t) {
        (this.players[t.seatId] && this.players[t.seatId].getData()) ||
          (this.players[t.seatId].setData(t),
          this.players[t.seatId].changeCannon(1),
          this.players[t.seatId].isMe &&
            ((this.playerMe = this.players[t.seatId]),
            this.setTxtCoinSpecialCannon(t.currentFirePower),
            ve
              .getInstance()
              .setRootNode(this.pnlLightningBall, this.playerMe)));
      }
      removePlayer(t) {
        (this.players[t].setData(null),
          Be.getInstance().removePlayerBySeatId(t));
      }
      requestUpdateContext() {
        Xe.getInstance().sendRequestContextInfo();
      }
      onOtherUserJoinRoom(t) {
        let e = Be.getInstance().getPlayerByPosId(t.position);
        e && this.addPlayer(e);
      }
      onOtherUserLeaveRoom(t) {
        this.removePlayer(t.seatId);
      }
      onUpdateMatchInfo(t) {
        (t &&
          this.playerMe &&
          (this.playerMe.setCurrentFirePower(
            Be.getInstance().getFirePowerAtIndex(0),
          ),
          this.playerMe.updateButtonBetState(),
          ve.getInstance().updateByBet()),
          this.onReleaseFishContext(t));
      }
      onFireBulletInfo(t) {
        if (!t) return;
        Be.getInstance().checkIsMeBySeatId(t.seatId) ||
          this.handleFireBullet(t, !1);
      }
      onActiveBulletFree(t) {
        if (!t) return;
        const e = this.getPlayerBySeatId(t.seatId);
        if (e && e.isMe) {
          switch (t.activeCode) {
            case 0:
            case 1:
              Xe.getInstance().sendBulletHitFish(
                Be.getInstance().currentBulletId,
                5,
                t.bulletMultiple,
                Yi.getInstance().getListForLightningBall(),
                !1,
              );
              break;
            case -1:
              this.showTableNotify(oe.TXT_LIGHTNING_BALL);
              break;
            case -2:
            case -3:
              this.showTableNotify(oe.TXT_LIGHTNING_BALL2);
              break;
            case -4:
              this.showTableNotify(oe.TXT_LIGHTNING_BALL4);
          }
          this._isWaitingActiveBulletFree = !1;
        }
      }
      onSwitchRoomResult(t) {
        if (t)
          switch (t.result) {
            case 1:
              (this.clearSceneForSwitchRoom(), this.loginToRoomKind());
              break;
            case 2:
              this.showTableNotify(oe.TXT_ROOM_FULL);
          }
      }
      shoot(t, e) {
        if (!this.playerMe) return;
        let i = 0.001 * Date.now();
        i - this.lastTime < Gt[1].delayShoot ||
          ((this.lastTime = i),
          (Be.getInstance().currentBulletId += 1),
          (this.playerMe.bulletKind = 1),
          (this.fireData = {}),
          (this.fireData.seatId = this.playerMe.seatId),
          (this.fireData.bulletId = Be.getInstance().currentBulletId),
          (this.fireData.bulletMultiple = this.playerMe.getCurrentFirePower()),
          (this.fireData.bulletKind = this.playerMe.bulletKind),
          (this.fireData.x = t),
          (this.fireData.y = e),
          (this.fireData.isSpeedUp = this.isEagleFast),
          this.handleFireBullet(this.fireData, !0),
          this.playerMe.hideLocation());
      }
      shootSpecial(t, e, i) {
        if (!this.playerMe) return;
        let s = 0.001 * Date.now();
        s - this.lastTime < Gt[this.curSpecialBulletKind].delayShoot ||
          ((this.lastTime = s),
          (Be.getInstance().currentBulletId += 1),
          i && (this.playerMe.targetFish = i),
          (this.playerMe.bulletKind = this.curSpecialBulletKind),
          (this.fireData = {}),
          (this.fireData.seatId = this.playerMe.seatId),
          (this.fireData.bulletId = Be.getInstance().currentBulletId),
          (this.fireData.bulletMultiple = this.playerMe.getCurrentFirePower()),
          (this.fireData.bulletKind = this.playerMe.bulletKind),
          (this.fireData.x = t),
          (this.fireData.y = e),
          (this.fireData.isSpeedUp = this.isEagleFast),
          this.handleFireBullet(this.fireData, !0),
          this.playerMe.hideLocation());
      }
      getAngle(t, e) {
        let i = t.y < e.y;
        ((t = {
          x: e.x - t.x,
          y: e.y - t.y,
        }),
          (e = {
            x: 1,
            y: 0,
          }));
        let s = me.Math.pAngle(t, e);
        return (i && (s = 2 * Math.PI - s), s);
      }
      onButtonInfoTouches() {
        return _(this, null, function* () {
          if (!this.popupInfo && !this._isLoadingPopupInfo) {
            ((this._isLoadingPopupInfo = !0),
              yield Qe.getInstance().loadPrefab(he.POPUP_INFO));
            let t = Laya.loader.getRes(he.POPUP_INFO).create();
            (this.scene.addChild(t),
              t.pos(0.5 * this.scene.width, 0.5 * this.scene.height),
              (t.zOrder = W),
              (this.popupInfo = new vs(t)));
            let e = Ze.getInstance().scaleRate;
            ((t.scaleX = e.x),
              (t.scaleY = e.y),
              (t.width = S / e.x),
              (t.height = L / e.y));
            let i = t.content;
            (i && ((i.x = (t.width - S) / 2), (i.y = (t.height - L) / 2)),
              this._listPopupResize.push(t));
          }
          (this.popupInfo && this.popupInfo.show(),
            ai.getInstance().playSFXShoot(pe.CLICK));
        });
      }
      onButtonSoundTouches() {
        (this.isActiveSound
          ? ((this.btnSound.skin = oe.SOUND_OFF),
            (this.btnSoundMobile.skin = oe.SOUND_OFF),
            (ai.getInstance().isActiveSound = !1),
            ai.getInstance().stopSound())
          : ((this.btnSound.skin = oe.SOUND_ON),
            (this.btnSoundMobile.skin = oe.SOUND_ON),
            (ai.getInstance().isActiveSound = !0),
            ai.getInstance().activeSound(),
            ai.getInstance().playBGM(pe.BGM)),
          (this.isActiveSound = !this.isActiveSound));
      }
      onButtonHomeTouches() {
        (ai.getInstance().playSFXShoot(pe.CLICK),
          this.popupAlert.setString(
            Ye.getInstance().getText("key_confirm_back_to_lobby"),
          ),
          this.popupAlert.show(),
          this.popupAlert.setConfirmCallback(() => {
            (p || m) && CoreHelper.backToLobby();
          }));
      }
      onButtonMenuTouches() {
        ((this.isShowPnlMenu = !this.isShowPnlMenu),
          (p || m) && CoreHelper.isRunningInApp()
            ? this.isShowPnlMenu
              ? ((this.bgMenuMobile.visible = !0),
                (this.bgMenuMobile.active = !0),
                sa.to(
                  this.pnlMenuMobile,
                  {
                    x: this.pnlMenuMobile.width * this.pnlMenuMobile.scaleX,
                  },
                  0.5,
                  Laya.Ease.linearIn,
                  Laya.Handler.create(this, () => {
                    this.btnMenuMobile.skin = oe.BUTTON_MENU_OPEN;
                  }),
                ),
                Laya.timer.once(5e3, this, this.onButtonMenuTouches))
              : (sa.to(
                  this.pnlMenuMobile,
                  {
                    x: 0,
                  },
                  0.5,
                  Laya.Ease.linearIn,
                  Laya.Handler.create(this, () => {
                    ((this.bgMenuMobile.visible = !1),
                      (this.bgMenuMobile.active = !1),
                      (this.btnMenuMobile.skin = oe.BUTTON_MENU_CLOSE));
                  }),
                ),
                Laya.timer.clear(this, this.onButtonMenuTouches))
            : this.isShowPnlMenu
              ? ((this.bgMenu.visible = !0),
                (this.bgMenu.active = !0),
                sa.to(
                  this.pnlMenu,
                  {
                    x: this.pnlMenu.width * this.pnlMenu.scaleX,
                  },
                  0.5,
                  Laya.Ease.linearIn,
                  Laya.Handler.create(this, () => {
                    this.btnMenu.skin = oe.BUTTON_MENU_OPEN;
                  }),
                ),
                Laya.timer.once(5e3, this, this.onButtonMenuTouches))
              : (sa.to(
                  this.pnlMenu,
                  {
                    x: 0,
                  },
                  0.5,
                  Laya.Ease.linearIn,
                  Laya.Handler.create(this, () => {
                    ((this.bgMenu.visible = !1),
                      (this.bgMenu.active = !1),
                      (this.btnMenu.skin = oe.BUTTON_MENU_CLOSE));
                  }),
                ),
                Laya.timer.clear(this, this.onButtonMenuTouches)),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonAutoTouches() {
        (this.isAutoMode ? this.stopAutoMode() : this.popupAuto.show(),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onPopupAutoConfirm(t) {
        if (t.isPopupAlert)
          (this.popupAlert.setString(
            Ye.getInstance().getText("key_alert_auto_fishing"),
          ),
            this.popupAlert.show(),
            this.popupAlert.setConfirmCallback(
              this.onPopupAlertConfirm.bind(this),
            ));
        else {
          if (t.isTotalShots && t.numTotalShots <= 0) return;
          if (this.isOutOfCoin()) return void this.showPopupOutOfCoin(null);
          (this.startAutoMode(),
            t.isEnableLaser
              ? ((this.isLaserLock = !0),
                !this.isSpecialCannon && this.playerMe.changeCannon(6))
              : ((this.isNormalLock = !0),
                !this.isSpecialCannon && this.playerMe.changeCannon(1)),
            (this._autoShotData = t),
            (this._targetFish = null),
            (this._listTargetFishKind = t.listTargetKind),
            (this._targetFishKind = this._listTargetFishKind[0]),
            (this._lastTargetPoint = this.playerMe.getCanonWorldPoint()),
            (this.btnAutoShotsNumText.text = t.numTotalShots + ""),
            t.isTotalShots && (this.btnAutoShotsNum.visible = !0),
            this.playerMe.hideLocation());
        }
      }
      onPopupAlertConfirm() {
        this.popupAuto._isActivePopupAuto && this.popupAuto.hide();
      }
      onRoomTouches(t) {
        let e;
        switch (t) {
          case 0:
            e = "key_room_newbie";
            break;
          case 4:
            e = "key_room_happy";
            break;
          case 5:
            e = "key_room_regal";
        }
        (this.popupAlert.setString(Ye.getInstance().getText(e)),
          this.popupAlert.show(),
          this.popupAlert.setConfirmCallback(
            this.onSwitchRoomConfirm.bind(this, t),
          ),
          this.popupAlert.setCancelCallback(
            this.onSwitchRoomCancel.bind(this),
          ));
      }
      onSwitchRoomCancel() {
        this.popupSwitchRoom.cancelConfirm();
      }
      onSwitchRoomConfirm(t) {
        (this.popupSwitchRoom.playSwitchRoomAnim(),
          Laya.timer.once(834, this, () => {
            !p && g
              ? (this.clearSceneForSwitchRoom(), this.loginToRoomKind())
              : ((Be.getInstance().roomKind = t),
                Xe.getInstance().sendRequestSwitchRoom(t));
          }));
      }
      updateShotsNum() {
        this._autoShotData.isTotalShots &&
          ((this._autoShotData.numTotalShots -= 1),
          (this.btnAutoShotsNumText.text =
            this._autoShotData.numTotalShots + ""),
          this._autoShotData.numTotalShots <= 0 && this.stopAutoMode());
      }
      onButtonLockTouches() {
        (this.isActiveBtnLock
          ? ((this.isActiveBtnLock = !1),
            (this.isNormalLock = !1),
            (this.isLaserLock = !1),
            this.refreshBtnLock(),
            this.cancelTargetNormalLock(),
            !this.isSpecialCannon && this.playerMe.changeCannon(1))
          : this.isSpecialCannon
            ? this.onButtonLockNormalTouches()
            : ((this.isShowBtnLock = !this.isShowBtnLock),
              this.isShowBtnLock
                ? ((this.btnLockNormal.visible = !0),
                  (this.btnLockLaze.visible = !0),
                  sa.to(
                    this.btnLockNormal,
                    {
                      scaleX: 1.1,
                      scaleY: 1.1,
                      alpha: 0.7,
                      x: 192,
                      y: -84,
                    },
                    100,
                    Laya.Ease.sineInOut,
                    Laya.Handler.create(this, () => {
                      sa.to(
                        this.btnLockNormal,
                        {
                          scaleX: 1,
                          scaleY: 1,
                          alpha: 1,
                        },
                        50,
                        Laya.Ease.sineInOut,
                      );
                    }),
                  ),
                  sa.to(
                    this.btnLockLaze,
                    {
                      scaleX: 1.1,
                      scaleY: 1.1,
                      alpha: 0.7,
                      x: 328,
                      y: -84,
                    },
                    100,
                    Laya.Ease.sineInOut,
                    Laya.Handler.create(this, () => {
                      sa.to(
                        this.btnLockLaze,
                        {
                          scaleX: 1,
                          scaleY: 1,
                          alpha: 1,
                        },
                        50,
                        Laya.Ease.sineInOut,
                      );
                    }),
                  ),
                  Laya.timer.once(3e3, this, this.hideBtnLock),
                  (this.circleLockNormal.visible = !1),
                  (this.circleLockLaze.visible = !1))
                : (sa.to(
                    this.btnLockNormal,
                    {
                      scaleX: 1.2,
                      scaleY: 1.2,
                      alpha: 0,
                    },
                    150,
                    Laya.Ease.sineInOut,
                    Laya.Handler.create(this, () => {
                      sa.to(
                        this.btnLockNormal,
                        {
                          scaleX: 1,
                          scaleY: 1,
                          alpha: 0,
                          x: 260,
                          y: -30,
                        },
                        50,
                        Laya.Ease.sineInOut,
                        Laya.Handler.create(this, () => {
                          this.btnLockNormal.visible = !1;
                        }),
                      );
                    }),
                  ),
                  sa.to(
                    this.btnLockLaze,
                    {
                      scaleX: 1.2,
                      scaleY: 1.2,
                      alpha: 0,
                    },
                    150,
                    Laya.Ease.sineInOut,
                    Laya.Handler.create(this, () => {
                      sa.to(
                        this.btnLockLaze,
                        {
                          scaleX: 1,
                          scaleY: 1,
                          alpha: 0,
                          x: 260,
                          y: -30,
                        },
                        50,
                        Laya.Ease.sineInOut,
                        Laya.Handler.create(this, () => {
                          this.btnLockLaze.visible = !1;
                        }),
                      );
                    }),
                  ))),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      hideBtnLock() {
        this.isShowBtnLock &&
          ((this.isShowBtnLock = !1),
          sa.to(
            this.btnLockNormal,
            {
              scaleX: 1.2,
              scaleY: 1.2,
              alpha: 0,
            },
            150,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              sa.to(
                this.btnLockNormal,
                {
                  scaleX: 1,
                  scaleY: 1,
                  alpha: 0,
                  x: 260,
                  y: -30,
                },
                50,
                Laya.Ease.sineInOut,
                Laya.Handler.create(this, () => {
                  this.btnLockNormal.visible = !1;
                }),
              );
            }),
          ),
          sa.to(
            this.btnLockLaze,
            {
              scaleX: 1.2,
              scaleY: 1.2,
              alpha: 0,
            },
            150,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              sa.to(
                this.btnLockLaze,
                {
                  scaleX: 1,
                  scaleY: 1,
                  alpha: 0,
                  x: 260,
                  y: -30,
                },
                50,
                Laya.Ease.sineInOut,
                Laya.Handler.create(this, () => {
                  this.btnLockLaze.visible = !1;
                }),
              );
            }),
          ));
      }
      hideBtnLockWithClick() {
        (this.isShowBtnLock &&
          ((this.isShowBtnLock = !1),
          sa.to(
            this.btnLockNormal,
            {
              scaleX: 1.2,
              scaleY: 1.2,
              alpha: 0,
            },
            150,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              sa.to(
                this.btnLockNormal,
                {
                  alpha: 0,
                  x: 260,
                  y: -30,
                },
                50,
                Laya.Ease.sineInOut,
                Laya.Handler.create(this, () => {
                  this.btnLockNormal.visible = !1;
                }),
              );
            }),
          ),
          sa.to(
            this.btnLockLaze,
            {
              scaleX: 1.2,
              scaleY: 1.2,
              alpha: 0,
            },
            150,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              sa.to(
                this.btnLockLaze,
                {
                  alpha: 0,
                  x: 260,
                  y: -30,
                },
                50,
                Laya.Ease.sineInOut,
                Laya.Handler.create(this, () => {
                  this.btnLockLaze.visible = !1;
                }),
              );
            }),
          ),
          sa.to(
            this.btnLock,
            {
              scaleX: 1.2,
              scaleY: 1.2,
            },
            100,
            Laya.Ease.sineInOut,
            Laya.Handler.create(this, () => {
              sa.to(
                this.btnLock,
                {
                  scaleX: 1,
                  scaleY: 1,
                },
                100,
                Laya.Ease.sineInOut,
              );
            }),
          )),
          Laya.timer.once(250, this, () => {
            this._isBtnLockBusy = !1;
          }));
      }
      onButtonLockNormalTouches() {
        if (this._isBtnLockBusy) return;
        (this.isAutoMode && this.stopAutoMode(),
          (this._isBtnLockBusy = !0),
          (this.isActiveBtnLock = !0),
          (this.isNormalLock = !0));
        let t = oe.AIM_NORMAL_PRESS;
        ((this.imgLockNormal.skin = t),
          (this.circleLockNormal.visible = !0),
          (this.imgLock.skin = t),
          (this.inputLock.visible = !0),
          "en" != Ye.getInstance().getLanguageName()
            ? Ye.getInstance().localizeImageText(
                this.txtInputLock,
                oe.TXT_NORMAL_LOCK,
              )
            : (this.txtInputLock.skin = oe.AIM_NORMAL_WORD),
          Laya.timer.once(100, this, this.hideBtnLockWithClick),
          this.playEffectSkillBox(),
          !this.isSpecialCannon &&
            this.playerMe.changeCannon(this.playerMe.bulletKind),
          this.playerMe.hideLocation(),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonLockLazeTouches() {
        if (this._isBtnLockBusy) return;
        (this.isAutoMode && this.stopAutoMode(),
          (this._isBtnLockBusy = !0),
          (this.isActiveBtnLock = !0),
          (this.isLaserLock = !0));
        let t = oe.AIM_LAZE_PRESS;
        ((this.imgLockLaze.skin = t),
          (this.circleLockLaze.visible = !0),
          (this.imgLock.skin = t),
          (this.inputLock.visible = !0),
          "en" != Ye.getInstance().getLanguageName()
            ? Ye.getInstance().localizeImageText(
                this.txtInputLock,
                oe.TXT_LASER_LOCK,
              )
            : (this.txtInputLock.skin = oe.AIM_LAZE_WORD),
          Laya.timer.once(100, this, this.hideBtnLockWithClick),
          this.playEffectSkillBox(),
          !this.isSpecialCannon && this.playerMe.changeCannon(6),
          this.playerMe.hideLocation(),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      refreshBtnLock() {
        let t = oe.AIM_NORMAL;
        ((this.imgLock.skin = t),
          (this.imgLockNormal.skin = t),
          (this.imgLockLaze.skin = oe.AIM_LAZE),
          (this.inputLock.visible = !1),
          (this.txtInputLock.skin = oe.AIM_NORMAL_WORD),
          (this.effectLock.visible = !1),
          this.animatorEffectLock1.stop(),
          this.animatorEffectLock2.stop(),
          this.animatorEffectLock3.stop(),
          this.lockNormal.cancelEffectPnlAim());
      }
      playEffectSkillBox() {
        ((this.effectLock.visible = !0),
          this.animatorEffectLock1.play(),
          this.animatorEffectLock2.play(),
          this.animatorEffectLock3.play());
      }
      onButtonLightningBallTouches() {
        if (ve.getInstance().shoot())
          if (g) {
            let t = Yi.getInstance().getListForLightningBall();
            (t.forEach((t) => {
              ((t.isRemove = !1),
                (t.score =
                  this.playerMe.getCurrentFirePower() *
                  xe.getInstance().getRandomNumberMinMax(10, 200)));
            }),
              Laya.stage.event("game.catch_fish", {
                seatId: 0,
                userCoin: 999999,
                bulletKind: 5,
                bulletMultiple: this.playerMe.getCurrentFirePower(),
                listFishHit: Yi.getInstance().getListForLightningBall(),
                listFishDead: t,
                score: 5500,
              }));
          } else {
            if (this._isWaitingActiveBulletFree) return;
            ((this._isWaitingActiveBulletFree = !0),
              Xe.getInstance().sendActiveBulletFree(
                5,
                this.playerMe.getCurrentFirePower(),
              ));
          }
        else this.showTableNotify(oe.TXT_LIGHTNING_BALL);
      }
      onButtonSharkTouches() {
        return 4 != this.curSpecialBulletKind || this.playerMe.isHarpoonDone()
          ? 2 === this.curSpecialBulletKind
            ? (this.cancelSpecialCannon(),
              this.setEnableBtnShark(!1),
              void ai.getInstance().playSFXShoot(pe.CLICK))
            : (this.setEnableBtnShark(!0),
              this.setEnableBtnJelly(!1),
              this.setEnableBtnEagle(!1),
              void this.startSpecialCannon(2))
          : (2 != this._nextBulletKind
              ? (this.setEnableBtnShark(!0),
                this.setEnableBtnJelly(!1),
                this.setEnableBtnEagle(!1),
                this.registerNextCannon(2))
              : (this.setEnableBtnShark(!1),
                this.setEnableBtnJelly(!1),
                this.setEnableBtnEagle(!1),
                this.registerNextCannon(1)),
            void ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonJellyTouches() {
        return 4 != this.curSpecialBulletKind || this.playerMe.isHarpoonDone()
          ? 3 === this.curSpecialBulletKind
            ? (this.cancelSpecialCannon(),
              this.setEnableBtnJelly(!1),
              void ai.getInstance().playSFXShoot(pe.CLICK))
            : (this.setEnableBtnShark(!1),
              this.setEnableBtnJelly(!0),
              this.setEnableBtnEagle(!1),
              void this.startSpecialCannon(3))
          : (3 != this._nextBulletKind
              ? (this.setEnableBtnShark(!1),
                this.setEnableBtnJelly(!0),
                this.setEnableBtnEagle(!1),
                this.registerNextCannon(3))
              : (this.setEnableBtnShark(!1),
                this.setEnableBtnJelly(!1),
                this.setEnableBtnEagle(!1),
                this.registerNextCannon(1)),
            void ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonEagleTouches() {
        return 4 != this.curSpecialBulletKind || this.playerMe.isHarpoonDone()
          ? 4 === this.curSpecialBulletKind
            ? (this.cancelSpecialCannon(),
              this.setEnableBtnEagle(!1),
              void ai.getInstance().playSFXShoot(pe.CLICK))
            : (this.registerNextCannon(4),
              this.setEnableBtnShark(!1),
              this.setEnableBtnJelly(!1),
              this.setEnableBtnEagle(!0),
              void this.startSpecialCannon(4))
          : (4 != this._nextBulletKind
              ? (this.setEnableBtnShark(!1),
                this.setEnableBtnJelly(!1),
                this.setEnableBtnEagle(!0),
                this.registerNextCannon(4))
              : (this.setEnableBtnShark(!1),
                this.setEnableBtnJelly(!1),
                this.setEnableBtnEagle(!1),
                this.registerNextCannon(1)),
            void ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonEagleFastTouches() {
        ((this.isEagleFast = !this.isEagleFast),
          this.isEagleFast
            ? (this.btnEagleFast.skin = oe.BTN_EAGLE_FAST_ON)
            : (this.btnEagleFast.skin = oe.BTN_EAGLE_FAST_OFF),
          ai.getInstance().playSFXShoot(pe.CLICK));
      }
      onButtonSwitchRoomTouches() {
        this.popupSwitchRoom.show();
      }
      setEnableBtnShark(t) {
        this.btnSharkCardLight.visible != t &&
          ((this.btnSharkCardLight.visible = t),
          t
            ? this.btnSharkAnimation1.play(0, !0)
            : this.btnSharkAnimation1.stop(),
          t
            ? this.btnSharkAnimation2.play(0, !0)
            : this.btnSharkAnimation2.stop(),
          t
            ? this.btnSharkAnimation3.play(0, !0)
            : this.btnSharkAnimation3.stop());
      }
      setEnableBtnJelly(t) {
        this.btnJellyCardLight.visible != t &&
          ((this.btnJellyCardLight.visible = t),
          t
            ? this.btnJellyAnimation1.play(0, !0)
            : this.btnJellyAnimation1.stop(),
          t
            ? this.btnJellyAnimation2.play(0, !0)
            : this.btnJellyAnimation2.stop(),
          t
            ? this.btnJellyAnimation3.play(0, !0)
            : this.btnJellyAnimation3.stop());
      }
      setEnableBtnEagle(t) {
        this.btnEagleCardLight.visible != t &&
          ((this.btnEagleCardLight.visible = t),
          t
            ? ((this.btnEagleFast.visible = !0),
              (this.btnEagleFast.active = !0),
              this.btnEagleAnimation1.play(0, !0),
              this.btnEagleAnimation2.play(0, !0),
              this.btnEagleAnimation3.play(0, !0))
            : ((this.btnEagleFast.visible = !1),
              (this.btnEagleFast.active = !1),
              this.btnEagleAnimation1.stop(),
              this.btnEagleAnimation2.stop(),
              this.btnEagleAnimation3.stop()));
      }
      startSpecialCannon(t) {
        switch (
          ((this.isSpecialCannon = !0),
          (this.curSpecialBulletKind = t),
          this.fishManager.setEnableFishByMinKind(Gt[t].minKindTarget),
          this.playerMe.changeCannon(t),
          this.playerMe.hideLocation(),
          (this.isActiveBtnLock || this.isAutoMode) &&
            (this._targetFish &&
            this._targetFish.isEnable &&
            this._targetFish.getIsAlive() &&
            this._targetFish.isInGameScene()
              ? ((this.playerMe.targetFish = this._targetFish),
                this.isLaserLock && this.playEffectNormalLock())
              : ((this._targetFish = null),
                this.isNormalLock &&
                  (this.hideEffectNormalLock(),
                  this.playerMe.stopNormalLock()))),
          t)
        ) {
          case 2:
            ai.getInstance().playSFXShoot(pe.CANNON_SHARK_BITE_CHANGE);
            break;
          case 3:
            ai.getInstance().playSFXShoot(pe.CANNON_JELLYFISH_CHANGE);
            break;
          case 4:
            ai.getInstance().playSFXShoot(pe.CLICK);
        }
      }
      cancelSpecialCannon() {
        ((this.isSpecialCannon = !1),
          (this.curSpecialBulletKind = null),
          this.fishManager.setEnableFishByMinKind(0),
          this.isActiveBtnLock || this.isAutoMode
            ? (this.isNormalLock
                ? this.playerMe.changeCannon(1)
                : this.isLaserLock &&
                  (this.hideEffectNormalLock(),
                  this.playerMe.stopLaser(),
                  this.playerMe.changeCannon(6)),
              this._targetFish &&
              this._targetFish.getIsAlive() &&
              this._targetFish.isInGameScene()
                ? this.changeTarget(this._targetFish)
                : (this._targetFish = null))
            : ((this.playerMe.targetFish = null),
              this.playerMe.changeCannon(1)));
      }
      onReleaseFishContext(t) {
        (this._isFirstContext &&
          ((this._isFirstContext = !1),
          Laya.timer.once(F, this, this.setEnableShowBulletAllUser, [!0])),
          t &&
            (this.contextManager.stopContext(),
            0 === t.runningTime
              ? ((Fe.getInstance().isEnableFire = !1),
                this.playEffectFishWave(t.sceneId, () => {
                  this.contextManager &&
                    (Be.getInstance().setCurrentContextInfo(null),
                    this.contextManager.processReleaseFishByContext(t));
                }))
              : (this.bgManager &&
                  this.bgManager.switchNormal(t.sceneId, 0, !1),
                this.contextManager &&
                  (Be.getInstance().setCurrentContextInfo(null),
                  this.contextManager.processReleaseFishByContext(t)))),
          this.bgManager &&
            Yi.getInstance().isSceneBoss &&
            this.changeBgBossRemove(null));
      }
      fakeToReleaseFish() {
        this.fishManager.spawn(21, 1, 6665);
      }
      fakeToReleaseContext() {
        (Be.getInstance().setSceneId(1),
          Be.getInstance().setCurrentContextInfo({
            sceneId: Be.getInstance().getSceneId(),
            contextId: 2,
            runningTime: 0,
          }),
          this.onReleaseFishContext(Be.getInstance().getCurrentContextInfo()));
      }
      onCatchFishInfo(t) {
        if (!t) return;
        const e = this.mapPlayerBySeat.get(t.seatId);
        if (e && 5 == t.bulletKind)
          return (
            this.showThorHammer(t, e),
            e.isMe && ve.getInstance().cleanProgress(),
            void e.setCoin(t.userCoin)
          );
        if (
          (e &&
            e.isMe &&
            t.thunderPower >= 0 &&
            ve.getInstance().updateByServer(t.thunderPower),
          t.listFishDead && t.listFishDead.length > 0)
        )
          for (let e = 0; e < t.listFishDead.length; e++) {
            const i = this.fishManager.getFishById(t.listFishDead[e].fishId);
            i &&
              i.getKind() == t.listFishDead[e].fishKind &&
              ((t.score = t.listFishDead[e].score),
              this.processCatchFish(t, i, t.listFishDead[e].isRemove));
          }
        else e && e.isMe && t.userCoin >= 0 && e.setCoin(t.userCoin);
      }
      processCatchFish(t, e, i) {
        if (!e) return;
        const s = this.mapPlayerBySeat.get(t.seatId);
        if (s) {
          if (4 == t.bulletKind) {
            const a = Fe.getInstance().getWinRate(t.score, t.bulletMultiple);
            return (
              s.handleHarpoon(
                e,
                a,
                null,
                this.showRewardClaw.bind(this, e, s, t, i),
                !0,
                t.isSpeedUp,
                i,
              ),
              void s.setCoin(t.userCoin)
            );
          }
          (this.showReward(e, s, t, i), s.setCoin(t.userCoin));
        }
      }
      showReward(t, e, i, s) {
        return _(this, null, function* () {
          if (t.getIsAlive() && ((!e.isMe && t.isInGameScene()) || e.isMe)) {
            let a = !0;
            switch (t.getKind()) {
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
              case 12:
              case 13:
              case 14:
              case 15:
                if (s) t.effectCatchFish();
                else {
                  const n = Fe.getInstance().getWinRate(
                      i.score,
                      i.bulletMultiple,
                    ),
                    o = Yi.getInstance().getCatchPrizeType(n, t.getKind());
                  null != o
                    ? ((a = !1),
                      Ss.getInstance().playCatchEffect(
                        e,
                        t,
                        i.score,
                        o,
                        s,
                        () => {
                          e.isMe && e.playAddCoin();
                        },
                      ))
                    : t.effectAngry();
                }
                break;
              case 16:
                s
                  ? t.effectCatchFish()
                  : (a = this.handleCatchCrystalCrab(i, e, t));
                break;
              case 17:
                s
                  ? t.effectCatchFish()
                  : (a = this.handleCatchJewelTurtle(i, e, t));
                break;
              case 18:
                s
                  ? t.effectCatchFish()
                  : (a = this.handleCatchGiantOctopus(i, e, t));
                break;
              case 19:
                a = this.handleCatchPhoenix(i, e, t, s);
                break;
              case 20:
                a = this.handleCatchCrocodile(i, e, t, s);
                break;
              case 21:
                a = yield this.handleCatchNaga(i, e, t, s);
                break;
              default:
                t.effectCatchFish();
            }
            if (a) {
              const a = Fe.getInstance().getWinRate(i.score, i.bulletMultiple),
                n = Yi.getInstance().getCatchPrizeType(a, t.getKind());
              Ss.getInstance().playCatchEffect(e, t, i.score, n, s, () => {
                e.isMe && e.playAddCoin();
              });
            }
          } else i.isRemove && t.remove();
        });
      }
      showRewardClaw(t, e, i, s) {
        return _(this, null, function* () {
          const a = Fe.getInstance().getWinRate(i.score, i.bulletMultiple);
          if (ie.some((t) => t === a) && !Yi.getInstance().isSceneBoss)
            return void Ss.getInstance().playCatchSpecial(
              e,
              t,
              a,
              i.score,
              null,
            );
          let n = !0;
          switch (t.getKind()) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
              if (s);
              else {
                const a = Fe.getInstance().getWinRate(
                    i.score,
                    i.bulletMultiple,
                  ),
                  o = Yi.getInstance().getCatchPrizeType(a, t.getKind());
                null != o &&
                  ((n = !1),
                  Ss.getInstance().playCatchEffect(e, t, i.score, o, s, () => {
                    e.isMe && e.playAddCoin();
                  }));
              }
              break;
            case 16:
              s || (n = this.handleCatchCrystalCrab(i, e, t));
              break;
            case 17:
              s || (n = this.handleCatchJewelTurtle(i, e, t));
              break;
            case 18:
              s || (n = this.handleCatchGiantOctopus(i, e, t));
              break;
            case 19:
              n = this.handleCatchPhoenix(i, e, t, s);
              break;
            case 20:
              n = this.handleCatchCrocodile(i, e, t, s);
              break;
            case 21:
              n = yield this.handleCatchNaga(i, e, t, s);
          }
          if (n) {
            const a = Fe.getInstance().getWinRate(i.score, i.bulletMultiple),
              n = Yi.getInstance().getCatchPrizeType(a, t.getKind());
            Ss.getInstance().playCatchEffect(e, t, i.score, n, s, () => {
              e.isMe && e.playAddCoin();
            });
          }
        });
      }
      handleCatchCrystalCrab(t, e, i) {
        const s = t.score,
          a = Fe.getInstance().getWinRate(s, t.bulletMultiple);
        return (
          !(a >= 100) ||
          (Qs.getInstance().playBossSlot(e, i, s, a, () => {
            e.isMe && e.playAddCoin();
          }),
          !1)
        );
      }
      handleCatchJewelTurtle(t, e, i) {
        const s = t.score,
          a = Fe.getInstance().getWinRate(s, t.bulletMultiple);
        return (
          !(a >= 100) ||
          (Qs.getInstance().playBossSlot(e, i, s, a, () => {
            e.isMe && e.playAddCoin();
          }),
          !1)
        );
      }
      handleCatchGiantOctopus(t, e, i) {
        const s = t.score,
          a = Fe.getInstance().getWinRate(s, t.bulletMultiple);
        return (
          !(a >= 360) ||
          (js.getInstance().playBossRoulette(e, i, s, a, () => {
            e.isMe && e.playAddCoin();
          }),
          !1)
        );
      }
      handleCatchPhoenix(t, e, i, s) {
        if (!e) return;
        const a = i,
          n = t.score;
        if (Fe.getInstance().getWinRate(n, t.bulletMultiple) >= 100) {
          if (e.isMe) {
            if (this._isPhoenixMiniGamePlaying) return !0;
            ((this._isPhoenixMiniGamePlaying = !0),
              4 == t.bulletKind
                ? ((a.visible = !1), this.startPhoenixReward(t, a, s))
                : a.startMiniGame(() => {
                    this.startPhoenixReward(t, a, s);
                  }));
          } else {
            const t = i.getWorldPosition(),
              s = i.getKind();
            let a;
            ((a = e ? e.getRewardWorldPosition(new Laya.Point(0, -170)) : t),
              Ys.getInstance().play(t, a, s, () => {
                e && Ss.getInstance().playCatchBig(e, s, n, null);
              }));
          }
          return !1;
        }
        return !0;
      }
      handleCatchCrocodile(t, e, i, s) {
        if (!e) return;
        const a = i,
          n = a.scaleX,
          o = a.scaleY,
          h = t.score,
          l = Fe.getInstance().getWinRate(h, t.bulletMultiple),
          r = 4 == t.bulletKind;
        if (l <= 80) return (a.effectCatch(!1), !0);
        let c = () => {
          (a.playHurt(), a.playYowl());
          let t = 1,
            i = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
          for (let s = 0; s < 10; ++s) {
            let s = new Laya.Point(
                _i.iRand(-100, S + 100),
                _i.iRand(-80, L + 80),
              ),
              a = e.getIconCoinWorldPoint();
            ((t = i[_i.iRand(0, i.length - 1)]),
              ms.getInstance().playGetCoin(s, a, t));
          }
        };
        const _ = () => {
          (a.scale(n, o),
            Yi.getInstance().addFishToContainer(a),
            s ? a.remove() : a.resumeMoveAfterMiniGame());
        };
        if (l <= 180) {
          if (
            !e.isMe ||
            this._isCrocodileRewardShowPlaying ||
            Math.random() > 0.2 ||
            r
          )
            return (c(), !0);
          {
            let t = (t) => {
                (c(),
                  Ss.getInstance().playCatchEffect(e, t, h, null, !1, () => {
                    e.isMe && e.playAddCoin();
                  }),
                  Laya.timer.once(2e3, this, () => {
                    (_(),
                      Yi.getInstance().isSceneBoss
                        ? ai.getInstance().changeBGM(pe.BGM_CROCODILE)
                        : ai.getInstance().changeBGM(pe.BGM));
                  }));
              },
              i = () => {
                this._isCrocodileRewardShowPlaying = !1;
              };
            ((this._isCrocodileRewardShowPlaying = !0),
              this.startCrocodileMiniGame(a, !1, 100, null, t, i));
          }
        } else {
          if (!e.isMe) {
            const t = i.getWorldPosition(),
              s = i.getKind();
            let a;
            return (
              (a = e ? e.getRewardWorldPosition(new Laya.Point(0, -170)) : t),
              Ys.getInstance().play(t, a, s, () => {
                e && Ss.getInstance().playCatchBig(e, s, h, null);
              }),
              !1
            );
          }
          {
            if (this._isCrocodileRewardShowPlaying) return (c(), !0);
            let t = (t) => {
                (t.playHurt(!0),
                  t.playYowl(),
                  Laya.timer.once(2e3, this, () => {
                    (t.moveToHidePoint(),
                      this.startCrocodileAwaken(
                        new Laya.Point(450, 360),
                        l,
                        h,
                        () => {
                          (_(),
                            this.playRewardBossAwaken(20, h),
                            ai.getInstance().changeBGM(pe.BGM_CONGRATULATION));
                        },
                      ),
                      ai.getInstance().playSFX(pe.CROCODILE_YOWL_2));
                  }),
                  ai.getInstance().playSFX(pe.CROCODILE_YOWL_1));
              },
              i = (t) => {
                (c(),
                  Ss.getInstance().playCatchEffect(e, t, h, null, !1, () => {
                    e.isMe && e.playAddCoin();
                  }),
                  Laya.timer.once(2e3, this, () => {
                    (_(),
                      Yi.getInstance().isSceneBoss
                        ? ai.getInstance().changeBGM(pe.BGM_CROCODILE)
                        : ai.getInstance().changeBGM(pe.BGM));
                  }));
              },
              s = () => {
                this._isCrocodileRewardShowPlaying = !1;
              };
            ((this._isCrocodileRewardShowPlaying = !0),
              this.startCrocodileMiniGame(a, !0, _i.iRand(15, 25), t, i, s));
          }
        }
        return !1;
      }
      handleCatchNaga(t, e, i, s) {
        return _(this, null, function* () {
          if (!e) return;
          const a = i,
            n = Ze.getInstance().scaleRate,
            o = t.score,
            h = Fe.getInstance().getWinRate(o, t.bulletMultiple);
          if (h <= 80) return (a.playHurt(), !0);
          if (h <= 200)
            return this._isNagaThunderPlaying
              ? (a.playHurt(), !0)
              : ((this._isNagaThunderPlaying = !0),
                yield Qe.getInstance().loadPrefab(he.NAGA_THUNDER),
                ms
                  .getInstance()
                  .showRandomCoinInScene(
                    e.isMe,
                    10,
                    800,
                    e.getIconCoinWorldPoint(),
                    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
                  ),
                a.playAttack(),
                Laya.timer.once(500, this, () => {
                  [
                    new Laya.Point(450, 200),
                    new Laya.Point(300, -160),
                    new Laya.Point(150, 80),
                    new Laya.Point(0, 0),
                    new Laya.Point(-150, 80),
                    new Laya.Point(-300, -160),
                    new Laya.Point(-450, 200),
                  ].forEach((t) => {
                    Laya.timer.once(200 * Math.random(), this, () => {
                      ((t.x += 640), (t.y += 360));
                      const e = new Ws();
                      (this.layerEffect.addChild(e),
                        me.Math.pAddIn(
                          t,
                          new Laya.Point(
                            _i.iRand(-50, 50),
                            -(_i.iRand(-50, 50) - 50),
                          ),
                        ),
                        e.pos(t.x, t.y),
                        e.scale(n.x, n.y),
                        e.play(),
                        Laya.timer.once(667, this, () => {
                          ((this._isNagaThunderPlaying = !1), e.destroy());
                        }));
                    });
                  });
                  const a = Fe.getInstance().getWinRate(
                      t.score,
                      t.bulletMultiple,
                    ),
                    o = Yi.getInstance().getCatchPrizeType(a, i.getKind());
                  (Ss.getInstance().playCatchEffect(e, i, t.score, o, s, () => {
                    e.isMe && e.playAddCoin();
                  }),
                    this.shakeScene2D(700, 20, 10),
                    ai.getInstance().playSFX(pe.NAGA_THUNDER));
                }),
                ai.getInstance().playSFX(pe.NAGA_HURT),
                !1);
          if (e.isMe) {
            if (this._isNagaMiniGamePlaying) return (a.playHurt(), !0);
            ((this._isNagaMiniGamePlaying = !0),
              a.playHurt(),
              Laya.timer.once(500, this, () => {
                (this.startNagaMiniGame(a, h, o, () => {
                  this._isNagaMiniGamePlaying = !1;
                }),
                  ai.getInstance().changeBGM(pe.BGM_NAGA_REWARD));
              }),
              ai.getInstance().playSFX(pe.NAGA_BELL));
          } else {
            const t = i.getWorldPosition(),
              s = i.getKind();
            let a;
            ((a = e ? e.getRewardWorldPosition(new Laya.Point(0, -170)) : t),
              Ys.getInstance().play(t, a, s, () => {
                e && Ss.getInstance().playCatchBig(e, s, o, null);
              }));
          }
          return !1;
        });
      }
      handleFireBullet(t, e) {
        if (!Fe.getInstance().isEnableFire) return;
        const i = t.bulletMultiple,
          s = Kt[t.bulletKind] || 1;
        if (((t.isMe = e), (t.bulletCost = i * s), e)) {
          if (this.isOutOfCoin()) return void this.showPopupOutOfCoin(null);
          const e = this.playerMe.getCurrentCoin();
          if (i && i > 0 && e < t.bulletCost)
            for (
              let i = Be.getInstance().listFirePower.length - 1;
              i >= 0;
              i--
            ) {
              let a = Be.getInstance().getFirePowerAtIndex(i);
              if (0 !== Math.floor(e / (a * s))) {
                ((this.playerMe.indexFirePower = i),
                  this.playerMe.setCurrentFirePower(a),
                  (t.bulletCost = a * s),
                  (t.bulletMultiple = a));
                break;
              }
            }
          this.playerMe.onFireData(t);
        } else if (
          (this.timeStartLostFocus > 0 && hs.getInstance().removeAllNotMe(),
          t.bulletMultiple && t.bulletMultiple > 0)
        ) {
          const e = this.getPlayerBySeatId(t.seatId);
          if (!e) return;
          if (this.isOutOfCoinPlayer(e)) return;
          (e.setCurrentFirePower(t.bulletMultiple), e.onFireData(t));
        }
      }
      isOutOfCoin() {
        return (
          this.playerMe.getCurrentCoin() <
          Be.getInstance().getFirePowerAtIndex(0) *
            (Kt[this.playerMe.bulletKind] || 1)
        );
      }
      isOutOfCoinPlayer(t) {
        return (
          !!t &&
          t.getCurrentCoin() <
            Be.getInstance().getFirePowerAtIndex(0) * (Kt[t.bulletKind] || 1)
        );
      }
      getPlayerBySeatId(t) {
        for (let e = 0; e < this.players.length; e++)
          if (this.players[e].seatId == t) return this.players[e];
        return null;
      }
      playEffectBulletLaserExplode(t, e, i) {
        const s = this.layerSpecialBullet.globalToLocal(t, !0),
          a = Ni.getInstance().getBulletLaserExplode();
        (a.pos(s.x, s.y),
          (a.rotation = e),
          this.layerSpecialBullet.addChild(a),
          (a.alpha = i ? P : A),
          a.play(() => {
            Ni.getInstance().recoverBulletLaserExplode(a);
          }),
          i && ai.getInstance().playSFX(pe.CANNON_LASER_BOMB));
      }
      playEffectBulletJellyfishExplode(t, e = 0, i) {
        const s = this.layerSpecialBullet.globalToLocal(t, !0),
          a = Ni.getInstance().getBulletJellyFishExplode();
        a &&
          s &&
          (a.pos(s.x, s.y),
          (a.rotation = e),
          this.layerSpecialBullet.addChild(a),
          (a.alpha = i ? P : A),
          a.play(() => {
            Ni.getInstance().recoverBulletJellyFishExplode(a);
          }),
          i && ai.getInstance().playSFXShoot(pe.CANNON_JELLYFISH_EXPLODE));
      }
      startTarget(t) {
        if (t) {
          if (
            this.isSpecialCannon &&
            t.getKind() < Gt[this.curSpecialBulletKind].minKindTarget
          )
            return;
          ((this._targetFish = t),
            (this._targetFishKind = t.getKind()),
            (this._lastTargetPoint = t.getWorldPosition()),
            this.isSpecialCannon || this.isNormalLock
              ? this.startTargetNormalLock(t)
              : this.isLaserLock && this.playerMe.startTarget(t));
        }
      }
      changeTarget(t) {
        if (t) {
          if (
            this.isSpecialCannon &&
            t.getKind() < Gt[this.curSpecialBulletKind].minKindTarget
          )
            return;
          ((this._targetFish = t),
            this.isAutoMode || (this._targetFishKind = t.getKind()),
            (this._lastTargetPoint = t.getWorldPosition()),
            this.isSpecialCannon || this.isNormalLock
              ? this.startTargetNormalLock(t)
              : this.isLaserLock && this.playerMe.changeTarget(t));
        }
      }
      startTargetNormalLock(t) {
        (this.playerMe.startTargetNormalLock(t), this.playEffectNormalLock());
        const e = this._targetFish.getWorldPosition();
        (this.isSpecialCannon
          ? this.shootSpecial(e.x, e.y)
          : this.shoot(e.x, e.y),
          this.isAutoMode && this.updateShotsNum());
      }
      cancelTargetNormalLock() {
        ((this._targetFish = null),
          (this._targetFishKind = null),
          (this._lastTargetPoint = null),
          this.playerMe.stopNormalLock(),
          this.hideEffectNormalLock());
      }
      onCatchFishNormalLock(t) {
        this._targetFish &&
          this._targetFish.getId() == t &&
          ((this._lastTargetPoint = this._targetFish.getWorldPosition()),
          (this._targetFish = null),
          this.playerMe.stopNormalLock(),
          this.hideEffectNormalLock());
      }
      onTargetFishNormalLockOutScene() {
        ((this._targetFish = null),
          this.playerMe.stopNormalLock(),
          this.hideEffectNormalLock());
      }
      onTargetFishLaserLockOutScene() {
        ((this._targetFish = null), this.playerMe.stopLaser());
      }
      onTargetFishSpecialBulletOutScene() {
        ((this._targetFish = null),
          (this.playerMe.targetFish = null),
          this.hideEffectNormalLock());
      }
      targetNewFish() {
        if (this.isAutoMode)
          this._listTargetFishKind &&
            this._listTargetFishKind.length > 0 &&
            this.targetNewFishByListKind();
        else {
          const t = Yi.getInstance().getNearestFishByKind(
            this._targetFishKind,
            this._lastTargetPoint,
          );
          this.startTarget(t);
        }
      }
      targetNewFishByListKind() {
        let t = null;
        for (let e = 0; e < this._listTargetFishKind.length; e++) {
          const i = Yi.getInstance().getNearestFishByKind(
            this._listTargetFishKind[e],
            this._lastTargetPoint,
          );
          if (i) {
            t = i;
            break;
          }
        }
        this._targetFish != t && this.startTarget(t);
      }
      playEffectNormalLock() {
        ((this.effectNormalLock.active = !0),
          (this.effectNormalLock.visible = !0),
          this.effectNormalLockAnimator.gotoAndStopByFrame(
            "effect_normal_lock",
            0,
            0,
          ),
          this.effectNormalLockAnimator.play("effect_normal_lock"),
          Laya.timer.clear(this, this.updateEffectNormalLockPos),
          Laya.timer.frameLoop(1, this, this.updateEffectNormalLockPos));
      }
      hideEffectNormalLock() {
        (Laya.timer.clear(this, this.updateEffectNormalLockPos),
          this.effectNormalLock.visible &&
            ((this.effectNormalLock.visible = !1),
            (this.effectNormalLock.active = !1),
            this.effectNormalLockAnimator.stop()));
      }
      updateEffectNormalLockPos() {
        if (
          null == this._targetFish ||
          (!this._targetFish.getIsAlive() && this.playerMe.isHarpoonDone())
        )
          return void this.hideEffectNormalLock();
        let t = this.scene.globalToLocal(this._targetFish.getWorldPosition());
        this.effectNormalLock.pos(t.x, t.y);
      }
      showMousePosition() {
        this.mousePosition &&
          ((this.mousePosition.active = !0), (this.mousePosition.visible = !0));
      }
      hideMousePosition() {
        this.mousePosition &&
          ((this.mousePosition.active = !1), (this.mousePosition.visible = !1));
      }
      updatePosMousePosition(t, e) {
        this.mousePosition && this.mousePosition.pos(t, e);
      }
      onCatchFishByLaserLock(t, e) {
        e.targetFish &&
          e.targetFish.getId() == t &&
          ((e.targetFish = null), e && e.stopLaser());
      }
      startAutoMode() {
        ((this.isAutoMode = !0),
          (this.effectLockAuto.visible = !0),
          this.animatorEffectLockAuto1.play(),
          this.animatorEffectLockAuto2.play(),
          this.animatorEffectLockAuto3.play(),
          this.isActiveBtnLock &&
            ((this.isActiveBtnLock = !1), this.refreshBtnLock()),
          this.isNormalLock &&
            ((this.isNormalLock = !1), this.cancelTargetNormalLock()),
          this.isLaserLock &&
            ((this.isLaserLock = !1), this.playerMe.stopLaser()));
      }
      stopAutoMode() {
        ((this.isAutoMode = !1),
          (this._targetFish = null),
          (this._targetFishKind = null),
          (this._listTargetFishKind = null),
          (this._lastTargetPoint = null),
          (this.btnAutoShotsNum.visible = !1),
          (this.effectLockAuto.visible = !1),
          this.animatorEffectLockAuto1.stop(),
          this.animatorEffectLockAuto2.stop(),
          this.animatorEffectLockAuto3.stop(),
          this.isNormalLock &&
            ((this.isNormalLock = !1),
            this.isSpecialCannon || this.cancelTargetNormalLock()),
          this.isLaserLock &&
            ((this.isLaserLock = !1),
            this.isSpecialCannon ||
              (this.playerMe.stopLaser(), this.playerMe.changeCannon(1))));
      }
      playEffectBossComing(t) {
        switch (
          (this.bgManager.toBoss(t),
          this._effectBossComing || this.initEffectBossComing(),
          t)
        ) {
          case 19:
            Ye.getInstance().localizeImageText(
              this._effectBossComingBossName,
              oe.TXT_BOSS_NAME_07,
            );
            break;
          case 20:
            Ye.getInstance().localizeImageText(
              this._effectBossComingBossName,
              oe.TXT_BOSS_NAME_03,
            );
            break;
          case 21:
            Ye.getInstance().localizeImageText(
              this._effectBossComingBossName,
              oe.TXT_BOSS_NAME_08,
            );
        }
        ((this._effectBossComingOdd.text = Xt[t].odd),
          this._effectBossComingAnimator.gotoAndStopByFrame(
            "boss_coming",
            0,
            0,
          ),
          this._effectBossComingAnimator.play("boss_coming"),
          (this._effectBossComing.visible = !0),
          (this._effectBossComing.active = !0),
          Laya.timer.once(2e3, this, () => {
            ((this._effectBossComing.visible = !1),
              (this._effectBossComing.active = !1));
          }));
        const e = Ze.getInstance().scaleRate;
        ((this._effectBossComing.scaleX = e.x),
          (this._effectBossComing.scaleY = e.y));
        const i = this._effectBossComing
            .getChildByName("red")
            .getChildByName("sprite01_up"),
          s = this._effectBossComing
            .getChildByName("red")
            .getChildByName("sprite01_down");
        ((i.width = 4e3 / e.x), (s.width = 4e3 / e.x));
      }
      startPhoenixReward(t, e, i) {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadPrefab(he.PHOENIX_BOMB),
            yield Qe.getInstance().loadPrefab(he.PHOENIX_BOMB_NUM),
            yield Qe.getInstance().loadPrefab(he.PHOENIX_FEATHER_BOMB),
            yield Qe.getInstance().loadPrefab(he.REWARD_PHOENIX),
            yield Qe.getInstance().loadTemplet(le.SPINE_PHOENIX_FRONT_JSON),
            this._phoenixReward || this.initPhoenixMiniGame());
          const s = t.score,
            a = Fe.getInstance().getWinRate(s, t.bulletMultiple);
          this._phoenixReward.start(a, s, e, () => {
            ((e.isCaught = !1),
              (this._isPhoenixMiniGamePlaying = !1),
              i ? e.remove() : this.playPhoenixRebirth(e));
          });
        });
      }
      startCrocodileMiniGame(t, e, i, s, a, n) {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadPrefab(he.CROCODILE_MINIGAME),
            yield Qe.getInstance().loadPrefab(he.CROCODILE_ANGRY),
            this._crocodileMiniGame || this.initCrocodileMiniGame(),
            this._crocodileMiniGame.setContainer(this.layerEffect),
            this._crocodileMiniGame.play(t, e, i, s, a, n));
        });
      }
      startCrocodileAwaken(t, e, i, s) {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadPrefab(he.CROCODILE_COUNT),
            yield Qe.getInstance().loadPrefab(he.CROCODILE_BITE),
            yield Qe.getInstance().loadPrefab(he.CROCODILE_BUBBLE_COIN),
            yield Qe.getInstance().loadPrefab(he.CROCODILE_SMALL_FISH),
            yield Qe.getInstance().loadPrefab(he.SPECIAL_COIN),
            this._crocodileAwaken || this.initCrocodileAwaken());
          const a = Ze.getInstance().scaleRate;
          ((this.layerEffect2.scaleX = a.x),
            (this.layerEffect2.scaleY = a.y),
            this._crocodileAwaken.play(t, e, i, s));
        });
      }
      startNagaMiniGame(t, e, i, s) {
        return _(this, null, function* () {
          (yield Qe.getInstance().loadPrefab(he.NAGA_MINI_GAME),
            yield Qe.getInstance().loadPrefab(he.NAGA_MOVE_BALL),
            yield Qe.getInstance().loadPrefab(he.NAGA_GEM),
            yield Qe.getInstance().loadPrefab(he.NAGA_BIG_THUNDER),
            yield Qe.getInstance().loadPrefab(he.NAGA_ARC),
            yield Qe.getInstance().loadTemplet(le.SPINE_NAGA_JSON),
            this._nagaMiniGame || this.initNagaMiniGame(),
            this._nagaMiniGame.play(t, e, i, () => {
              this.playRewardBossAwaken(21, i, () => {
                (s && s(), t.remove());
              });
            }));
        });
      }
      playRewardBossAwaken(t, e, i) {
        return _(this, null, function* () {
          switch (
            (yield Qe.getInstance().loadPrefab(he.REWARD_BOSS_AWAKEN),
            this._rewardBossAwaken || this.initRewardBossAwaken(),
            t)
          ) {
            case 16:
              this._rewardBossAwaken.playCrystalCrabReward(e, i);
              break;
            case 17:
              this._rewardBossAwaken.playJewelTurtleReward(e, i);
              break;
            case 18:
              this._rewardBossAwaken.playGiantOctopusReward(e, i);
              break;
            case 19:
              this._rewardBossAwaken.playPhoenixReward(e, i);
              break;
            case 20:
              this._rewardBossAwaken.playGiantCrocodileReward(e, i);
              break;
            case 21:
              this._rewardBossAwaken.playNagaReward(e, i);
          }
        });
      }
      playTapFx(t) {
        return _(this, null, function* () {
          yield Qe.getInstance().loadPrefab(he.TAP_FX);
          const e = this.layerEffect.globalToLocal(t),
            i = Ni.getInstance().getTapFX(),
            s = Ze.getInstance().scaleRate,
            a = i.scaleX,
            n = i.scaleY;
          (i.scale(a * s.x, n * s.y),
            i.pos(e.x, e.y),
            this.layerEffect.addChild(i));
          const o = i.getComponent(Laya.Animator2D);
          (o.gotoAndStopByFrame("phoenix_click_ef", 0, 0),
            o.play("phoenix_click_ef"),
            (i.visible = !0),
            Laya.timer.once(750, this, () => {
              (i.scale(a, n), Ni.getInstance().recoverTapFX(i));
            }));
        });
      }
      shakeScene(t = 1200, e = 20, i = 15) {
        xe.getInstance().shakeObject(this.layerBg, t, e, i);
      }
      shakeScene2D(t = 400, e = 30, i = 4) {
        xe.getInstance().shake2D(this.layerBg, t, e, i);
      }
      shakeSceneBySpecialCannon() {
        xe.getInstance().shakeObject(this.layerBg, 400, 4, 60);
      }
      playPhoenixRebirth(t) {
        return _(this, null, function* () {
          if (
            (yield Qe.getInstance().loadPrefab(he.PHOENIX_REBIRTH),
            this._phoenixRebirth || this.initPhoenixRebirth(),
            t.getIsRemove())
          )
            return void t.remove();
          const e = t.getWorldPosition(),
            i = this.layerEffect.globalToLocal(e);
          (this._phoenixRebirth.play(i),
            Laya.timer.once(2e3, this, () => {
              ((t.alpha = 1), t.rebirth());
            }));
        });
      }
      setEnableShowBulletAllUser(t) {
        this.mapPlayerBySeat.forEach((e) => {
          e && (e.canFireBullet = t);
        });
      }
      showRefunded(t, e) {
        let i = Be.getInstance().getPlayerById(t);
        if (!i) return;
        let s = this.mapPlayerBySeat.get(i.seatId);
        s &&
          s.isMe &&
          ms
            .getInstance()
            .playCoinRefunded(
              s.getCoinRefundedWorldPoint(),
              s,
              xe.getInstance().formatNumber(e),
            );
      }
      setTxtCoinSpecialCannon(t) {
        this.playerMe &&
          ((this.txtCoinShark.text = xe.getInstance().formatNumber(t * Kt[2])),
          (this.txtCoinJelly.text = xe.getInstance().formatNumber(t * Kt[3])),
          (this.txtCoinEagle.text = xe.getInstance().formatNumber(t * Kt[4])));
      }
      playEffectFishWave(t = 1, e) {
        return _(this, null, function* () {
          Yi.getInstance().setMoveSpeedScale(7);
          const i = Ze.getInstance().scaleRate,
            s = yield Ni.getInstance().getFishWave();
          (this.layerFishWave.addChild(s), (s.visible = !0), (s.active = !0));
          const a = s.getChildByName("fish_wave_logo");
          ((a.scaleX = i.x), (a.scaleY = i.y));
          const n = s.getChildByName("fish_tide");
          ((n.scaleX = i.x), (n.scaleY = i.y));
          const o = s.getComponent(Laya.Animator2D);
          (o.gotoAndStopByFrame("fish_wave", 0, 0), o.play("fish_wave"));
          const h = s.getChildByName("tide").getChildByName("waves");
          (Laya.timer.once(1e3, this, () => {
            for (let t = 0; t < h.numChildren; t++) {
              const e = h.getChildAt(t),
                i = e.getComponent(Laya.Script);
              ((e.visible = !0), i.resetSystem());
            }
          }),
            Laya.timer.once(1500, this, () => {
              this.bgManager && this.bgManager.switchNormal(t, 1e3);
            }),
            Laya.timer.once(3e3, this, () => {
              for (let t = 0; t < h.numChildren; t++) {
                const e = h.getChildAt(t),
                  i = e.getComponent(Laya.Script);
                ((e.visible = !1), i.stopSystem());
              }
            }),
            Laya.timer.once(5600, this, () => {
              ((s.visible = !1),
                (s.active = !1),
                Ni.getInstance().recoverFishWave(s),
                (Fe.getInstance().isEnableFire = !0),
                e && e());
            }),
            ai.getInstance().playSFX(pe.FISH_WAVE));
        });
      }
      isCrocodileRewardShowPlaying() {
        return this._isCrocodileRewardShowPlaying;
      }
      registerNextCannon(t) {
        this._nextBulletKind = t;
      }
      showThorHammer(t, e, i = null) {
        return _(this, null, function* () {
          let s = [],
            a = 0;
          if (t.listFishDead && t.listFishDead.length > 0)
            for (let e = 0; e < t.listFishDead.length; e++) {
              a += t.listFishDead[e].score;
              const i = this.fishManager.getFishById(t.listFishDead[e].fishId);
              i &&
                i.getKind() == t.listFishDead[e].fishKind &&
                s.push({
                  fishId: i.getId(),
                  score: t.listFishDead[e].score,
                });
            }
          let n = Ze.getInstance().scaleRate,
            o = this.layerBullet.globalToLocal(e.getCanonWorldPoint()),
            h = {
              x: (0.5 * this.layerBullet.width) / n.x,
              y: (0.5 * this.layerBullet.height) / n.y,
            },
            l = yield Ni.getInstance().getThorHammer(),
            r = yield Ni.getInstance().getThorHammerAttack(),
            c = yield Ni.getInstance().getThorHammerAttackBG();
          (yield Qe.getInstance().loadPrefab(he.LASER_DISH),
            this.layerBullet.addChild(l),
            (l.zOrder = e.isMe ? 2 : 1),
            l.pos(o.x, o.y),
            (l.visible = !0),
            (l.active = !0),
            (l.alpha = e.isMe ? P : A),
            e.isMe && ai.getInstance().playSFX(pe.LIGHTNING_BALL_SHOW),
            l.getComponent(Laya.Animator2D).play("thor_hammer", 0, 0),
            Laya.Tween.to(
              l,
              {
                x: h.x,
                y: h.y,
              },
              500,
              null,
              Laya.Handler.create(this, () => {
                (r.init(this.layerBigCatch),
                  r.play(
                    this.layerBullet.localToGlobal(new Laya.Point(l.x, l.y)),
                    e.isMe,
                  ),
                  Laya.timer.once(1900, this, () => {
                    Ni.getInstance().recoverThorHammerAttack(r);
                  }),
                  e.isMe &&
                    (ai.getInstance().playSFX(pe.LIGHTNING_BALL_THUNDER),
                    Laya.timer.once(700, this, () => {
                      ai.getInstance().playSFX(pe.LIGHTNING_BALL_THUNDER);
                    }),
                    Laya.timer.once(1660, this, () => {
                      ai.getInstance().playSFX(pe.LIGHTNING_BALL_END);
                    })),
                  c.init(this.fishContainer),
                  c.play(e.isMe),
                  Laya.timer.once(2e3, this, () => {
                    Ni.getInstance().recoverThorHammerAttackBG(c);
                  }),
                  e.isMe && this.shakeScene2D(1200, 20, 15));
                let n = new Laya.Point();
                (Yi.getInstance()
                  .getAllAliveFish()
                  .forEach((t) => {
                    if (t) {
                      let e = 0.3 + (Math.min(t.width, t.height) / 150) * 2,
                        i = Ni.getInstance().getLaserDish();
                      (this.layerBigCatch.addChild(i),
                        this.layerBigCatch.globalToLocal(t.getWorldPosition(n)),
                        i.pos(n.x, n.y),
                        i.scale(e, e),
                        (i.visible = !0),
                        (i.active = !0),
                        i
                          .getComponent(Laya.Animator2D)
                          .play("laser_under", 0, 0));
                      let a = s.some((e) => e.fishId == t.getId()) ? 2e3 : 800;
                      Laya.timer.once(a, i, () => {
                        Ni.getInstance().recoverLaserDish(i);
                      });
                    }
                  }),
                  s.forEach((t) => {
                    const i = this.fishManager.getFishById(t.fishId);
                    i &&
                      i.getIsAlive() &&
                      (Yi.getInstance().isNormalFish(i) && i.setIsAlive(!1),
                      i.setMoveSpeed(0),
                      i.setAnimSpeed(0),
                      (i.noRotate = !0),
                      xe.getInstance().shake2D(i, 1980, 30, 4),
                      Laya.timer.once(2e3, this, () => {
                        i &&
                          (i.setMoveSpeed(1),
                          i.setAnimSpeed(1),
                          xe.getInstance().stopShake(i),
                          (i.noRotate = !1),
                          this.hitFishByRetain(e, i, t.score));
                      }));
                  }),
                  Laya.timer.once(2e3, this, () => {
                    if (i) {
                      let t = 1,
                        s = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
                      for (let i = 0; i < 10; ++i) {
                        let i = new Laya.Point(
                            _i.iRand(-100, S + 100),
                            _i.iRand(-80, L + 80),
                          ),
                          a = e.getIconCoinWorldPoint();
                        ((t = s[_i.iRand(0, s.length - 1)]),
                          ms.getInstance().playGetCoin(i, a, t));
                      }
                      Laya.timer.once(1700, this, () => {
                        i && i();
                      });
                    } else {
                      let i = Math.min(Math.ceil(a / t.bulletMultiple / 5), 15),
                        s = 1,
                        n = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
                      for (let t = 0; t < i; ++t) {
                        let t = new Laya.Point(
                            _i.iRand(-100, S + 100),
                            _i.iRand(-80, L + 80),
                          ),
                          i = e.getIconCoinWorldPoint();
                        ((s = n[_i.iRand(0, n.length - 1)]),
                          ms.getInstance().playGetCoin(t, i, s));
                      }
                      Laya.timer.once(1700, this, () => {
                        Ss.getInstance().playCatchEffectLightningBall(
                          e,
                          a,
                          () => {
                            e.isMe && e.playAddCoin();
                          },
                        );
                      });
                    }
                  }),
                  Ni.getInstance().recoverThorHammer(l));
              }),
            ));
        });
      }
      hitFishByRetain(t, e, i) {
        switch (e.getKind()) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            (Ss.getInstance().playCoinCommonFish(t, e, i), e.effectCatchFish());
            break;
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            (Ss.getInstance().playCoinImmortalFish(t, e), e.effectAngry());
            break;
          case 16:
          case 17:
          case 18:
          case 19:
          case 21:
            Ss.getInstance().playCoinImmortalFish(t, e);
            break;
          case 20:
            (Ss.getInstance().playCoinImmortalFish(t, e), e.effectCatch(!1));
        }
      }
      showTableNotify(t) {
        ((this.tableNotify.visible = !0),
          (this.tableNotify.active = !0),
          Laya.Tween.to(
            this.tableNotify,
            {
              alpha: 1,
            },
            0,
            null,
            null,
            0,
            !0,
          ),
          Ye.getInstance().localizeImageText(this.tableNotifyText, t),
          Laya.timer.once(2500, this, this.hideTableNotify, [], !0));
      }
      hideTableNotify() {
        Laya.Tween.to(
          this.tableNotify,
          {
            alpha: 0,
          },
          500,
          null,
          Laya.Handler.create(this, () => {
            ((this.tableNotify.visible = !1), (this.tableNotify.active = !1));
          }),
        );
      }
      clearSceneForSwitchRoom() {
        (rs.getInstance().stopContext(),
          hs.getInstance().removeAll(),
          Yi.getInstance().clearAll(),
          Be.getInstance().clearAll(),
          ai.getInstance().clearAllInScene(),
          ms.getInstance().clearAll(),
          Ni.getInstance().clearAll(),
          this.bgManager.resetToChangeRoom());
        for (let t = 0, e = Laya.timer._handlers.length; t < e; t++) {
          Laya.timer._handlers[t].clear();
        }
        Laya.Tween.tweenMap.forEach((t) => {
          if (t) for (let e = 0, i = t.length; e < i; e++) t[e]._clear();
        });
      }
      loginToRoomKind() {
        if (
          (this.scene.destroy(!1),
          Laya.Scene.open(
            (p || m ? se : "") + ae.GAME_SCENE,
            !0,
            null,
            Laya.Handler.create(this, this.onNewSceneOpened),
          ),
          p || !g)
        )
          if (p) {
            let t = Xe.getInstance().getLoginInfo();
            if (t && t.host && t.port) Xe.getInstance().connect(t.host, t.port);
            else {
              let t = {};
              ((t.message = Ye.getInstance().getText("key_connect_error")),
                this.showPopupAlert(t));
            }
          } else Xe.getInstance().connect(f, b);
      }
      onGetTableInfo() {
        this.loadPlayers();
      }
      onLobbyJoin(t) {
        t &&
          1 == t.code &&
          ((Be.getInstance().roomId = t.roomId),
          (this.textRoomId.visible = t.roomId > 0),
          (this.textRoomId.text = t.roomId + ""));
      }
      onNewSceneOpened(t) {
        t &&
          (this.loadBackground(t),
          (t.alpha = 0),
          Laya.Tween.to(
            t,
            {
              alpha: 1,
            },
            500,
            Laya.Ease.linearNone,
          ));
      }
      loadBackground(t) {
        const e = t.getChildByName("layer_bg").getChildByName("bg_normal");
        ((e.alpha = 0),
          Laya.Tween.to(
            e,
            {
              alpha: 1,
            },
            500,
            Laya.Ease.linearNone,
          ));
      }
    };
  (c(
    [
      ia({
        type: Laya.Scene,
      }),
    ],
    aa.prototype,
    "scene",
    2,
  ),
    c(
      [
        ia({
          type: Laya.Sprite,
        }),
      ],
      aa.prototype,
      "fishContainer",
      2,
    ),
    (aa = c([ea("5lStDfYLTKCKXgQwhBkMgg")], aa)));
})();
