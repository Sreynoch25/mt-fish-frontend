!(function (e, t) {
  "use strict";
  class s {
    get source() {
      return this._source;
    }
    set source(e) {
      ((this._source = e),
        e
          ? t.ILaya.loader.load(e, t.Loader.SPINE).then((e) => {
              !this._source ||
                (e && !e.isCreateFromURL(this._source)) ||
                (this.templet = e);
            })
          : (this.templet = null));
    }
    set items(e) {
      this._items = e;
    }
    get items() {
      return this._items;
    }
    get templet() {
      return this._templet;
    }
    set templet(e) {
      this.init(e);
    }
    init(e) {
      ((this._templet = e), this._templet && this.flush());
    }
    flush() {
      if (
        this.target &&
        this.target.templet &&
        this._items &&
        this._templet &&
        this._templet.skeletonData
      ) {
        if (null == this.target.templet._textures) return;
        for (let e = this._items.length - 1; e >= 0; e--) {
          let t = this._items[e],
            s = t.attachment,
            i = t.slot,
            n = t.skin;
          if (s && i && n) {
            let e = null,
              t = this._templet.skeletonData.skins;
            for (let i = t.length - 1; i >= 0; i--)
              if (t[i].name == n) {
                let n = t[i].attachments;
                for (let t = n.length - 1; t >= 0 && ((e = n[t][s]), !e); t--);
                break;
              }
            if (e) {
              let t = e.region.page;
              this.target.templet._textures[t.name] = t.texture;
              let s = this.target.getSkeleton().findSlot(i);
              s && s.setAttachment(e);
            }
          }
        }
      }
    }
  }
  class i {
    get skin() {
      return this._skin;
    }
    set skin(e) {
      this._skin = e;
    }
    set slot(e) {
      this._slot = e;
    }
    get slot() {
      return this._slot;
    }
    set attachment(e) {
      this._attachment = e;
    }
    get attachment() {
      return this._attachment;
    }
  }
  class n {
    constructor(e) {
      this.realTexture = e;
    }
    getImage() {
      var e, t, s, i;
      return {
        width:
          null !==
            (t =
              null === (e = this.realTexture) || void 0 === e
                ? void 0
                : e.sourceWidth) && void 0 !== t
            ? t
            : 16,
        height:
          null !==
            (i =
              null === (s = this.realTexture) || void 0 === s
                ? void 0
                : s.sourceHeight) && void 0 !== i
            ? i
            : 16,
      };
    }
    setFilters(e, s) {
      if (!this.realTexture) return;
      let i;
      ((i =
        s === window.spine.TextureFilter.Nearest
          ? t.FilterMode.Point
          : t.FilterMode.Bilinear),
        (this.realTexture.bitmap.filterMode = i));
    }
    convertWrapMode(e) {
      return e == window.spine.TextureWrap.ClampToEdge
        ? t.WrapMode.Clamp
        : e == window.spine.TextureWrap.MirroredRepeat
          ? t.WrapMode.Mirrored
          : t.WrapMode.Repeat;
    }
    setWraps(e, t) {
      if (!this.realTexture) return;
      let s = this.realTexture.bitmap;
      ((s.wrapModeU = this.convertWrapMode(e)),
        (s.wrapModeV = this.convertWrapMode(t)));
    }
  }
  class r extends t.Resource {
    constructor() {
      (super(), (this._textures = {}));
    }
    get ns() {
      return this._ns;
    }
    get basePath() {
      return this._basePath;
    }
    getTexture(e) {
      return this._textures[e];
    }
    _parse(e, s, i, n) {
      let r;
      return (
        (this._basePath = t.URL.getPath(i)),
        (r = this.getRuntimeVersion(e).startsWith("4.")
          ? this.parseAtlas4
          : this.parseAtlas3),
        r.call(this, s, n).then((t) => {
          let s = new this._ns.AtlasAttachmentLoader(t);
          if (e instanceof ArrayBuffer) {
            let t = new this._ns.SkeletonBinary(s);
            this.skeletonData = t.readSkeletonData(new Uint8Array(e));
          } else {
            let t = new this._ns.SkeletonJson(s);
            this.skeletonData = t.readSkeletonData(e);
          }
        })
      );
    }
    getRuntimeVersion(e) {
      return ((this._ns = window.spine), r.RuntimeVersion);
    }
    parseAtlas3(e, s) {
      let i = [];
      return (
        new this._ns.TextureAtlas(
          e,
          (e) => (
            i.push({
              url: this._basePath + e,
            }),
            new n(null)
          ),
        ),
        t.ILaya.loader
          .load(i, null, null == s ? void 0 : s.createCallback())
          .then((t) => {
            let s = 0;
            return new this._ns.TextureAtlas(e, (e) => {
              let i = t[s++];
              i && i._addReference();
              let r = new n(i);
              return ((this._textures[e] = r), r);
            });
          })
      );
    }
    parseAtlas4(e, s) {
      let i = new this._ns.TextureAtlas(e);
      return t.ILaya.loader
        .load(
          i.pages.map((e) => this._basePath + e.name),
          null,
          null == s ? void 0 : s.createCallback(),
        )
        .then((e) => {
          let t = 0;
          for (let s of i.pages) {
            let i = e[t++];
            i && i._addReference();
            let r = new n(i);
            ((this._textures[s.name] = r), s.setTexture(r));
          }
          return i;
        });
    }
    getAniNameByIndex(e) {
      let t = this.skeletonData.animations[e];
      return t ? t.name : null;
    }
    getSkinIndexByName(e) {
      let t,
        s = this.skeletonData.skins;
      for (let i = 0, n = s.length; i < n; i++)
        if (((t = s[i]), t.name == e)) return i;
      return -1;
    }
    _disposeResource() {
      for (let e in this._textures) {
        let s = this._textures[e].realTexture;
        s && (s._removeReference(), t.Laya.loader.clearRes(s.url));
      }
    }
  }
  r.RuntimeVersion = "3.8";
  const a = [0, 1, 2, 2, 3, 0];
  class l {
    constructor(e, t = !0) {
      ((this.vertexEffect = null),
        (this.tempColor = new window.spine.Color()),
        (this.tempColor2 = new window.spine.Color()),
        (this.vertexSize = 8),
        (this.twoColorTint = !1),
        (this.temp = new window.spine.Vector2()),
        (this.temp2 = new window.spine.Vector2()),
        (this.temp3 = new window.spine.Color()),
        (this.temp4 = new window.spine.Color()),
        (this.twoColorTint = t),
        t && (this.vertexSize += 4),
        (this.templet = e),
        (this.vertices = e.ns.Utils.newFloatArray(1024 * this.vertexSize)),
        (this.renderable = {
          vertices: null,
          numVertices: 0,
          numFloats: 0,
        }),
        (this.clipper = new e.ns.SkeletonClipping()));
    }
    draw(e, s, i = -1, n = -1) {
      let l = this.clipper,
        h = this.premultipliedAlpha,
        o = this.temp,
        u = this.temp2,
        p = this.temp3,
        m = this.temp4,
        _ = this.renderable,
        d = null,
        c = null,
        g = e.drawOrder,
        f = null,
        k = e.color,
        x = !1;
      -1 == i && (x = !0);
      for (let e = 0, S = g.length; e < S; e++) {
        let S = l.isClipping() ? 2 : 8,
          y = g[e];
        if ((i >= 0 && i == y.data.index && (x = !0), !x)) {
          l.clipEndWithSlot(y);
          continue;
        }
        n >= 0 && n == y.data.index && (x = !1);
        let w,
          A = y.getAttachment(),
          v = null;
        if (A instanceof this.templet.ns.RegionAttachment) {
          let e = A;
          ((_.vertices = this.vertices),
            (_.numVertices = 4),
            (_.numFloats = S << 2),
            "4.1" == r.RuntimeVersion
              ? e.computeWorldVertices(y, _.vertices, 0, S)
              : e.computeWorldVertices(y.bone, _.vertices, 0, S),
            (c = a),
            (d = e.uvs),
            (v =
              "4.1" == r.RuntimeVersion
                ? e.region.page.name
                : e.region.renderObject.page.name),
            (w = this.templet.getTexture(v)),
            (f = e.color));
        } else {
          if (!(A instanceof this.templet.ns.MeshAttachment)) {
            if (A instanceof this.templet.ns.ClippingAttachment) {
              let e = A;
              l.clipStart(y, e);
              continue;
            }
            l.clipEndWithSlot(y);
            continue;
          }
          {
            let e = A;
            ((_.vertices = this.vertices),
              (_.numVertices = e.worldVerticesLength >> 1),
              (_.numFloats = _.numVertices * S),
              _.numFloats > _.vertices.length &&
                (_.vertices = this.vertices =
                  this.templet.ns.Utils.newFloatArray(_.numFloats)),
              e.computeWorldVertices(
                y,
                0,
                e.worldVerticesLength,
                _.vertices,
                0,
                S,
              ),
              (c = e.triangles),
              (v =
                "4.1" == r.RuntimeVersion
                  ? e.region.page.name
                  : e.region.renderObject.page.name),
              (w = this.templet.getTexture(v)),
              (d = e.uvs),
              (f = e.color));
          }
        }
        if (null != w) {
          let e = y.color,
            i = this.tempColor;
          ((i.r = k.r * e.r * f.r),
            (i.g = k.g * e.g * f.g),
            (i.b = k.b * e.b * f.b),
            (i.a = k.a * e.a * f.a),
            h && ((i.r *= i.a), (i.g *= i.a), (i.b *= i.a)));
          let n = y.data.blendMode;
          if (l.isClipping()) {
            l.clipTriangles(
              _.vertices,
              _.numFloats,
              c,
              c.length,
              d,
              i,
              null,
              false,
            );
            let e,
              r = new Float32Array(l.clippedVertices),
              a = l.clippedTriangles,
              h = [],
              g = [],
              f = 16777215,
              k = 1;
            if (null != this.vertexEffect) {
              let e = this.vertexEffect,
                t = r;
              for (let s = 0, i = r.length; s < i; s += 8)
                ((o.x = t[s]),
                  (o.y = t[s + 1]),
                  p.set(t[s + 2], t[s + 3], t[s + 4], t[s + 5]),
                  (u.x = t[s + 6]),
                  (u.y = t[s + 7]),
                  m.set(0, 0, 0, 0),
                  e.transform(o, u, p, m),
                  (t[s] = o.x),
                  (t[s + 1] = o.y),
                  (t[s + 2] = p.r),
                  (t[s + 3] = p.g),
                  (t[s + 4] = p.b),
                  (t[s + 5] = p.a),
                  (t[s + 6] = u.x),
                  (t[s + 7] = u.y),
                  h.push(t[s], -t[s + 1]),
                  (f =
                    ((255 * t[s + 2]) << 16) +
                    ((255 * t[s + 3]) << 8) +
                    t[s + 4]),
                  (k = t[s + 5]),
                  g.push(t[s + 6], t[s + 7]));
            } else {
              let e = 0;
              for (; Number.isFinite(r[e + 6]) && Number.isFinite(r[e + 7]); )
                (h.push(r[e]),
                  h.push(-r[e + 1]),
                  (f =
                    ((255 * r[e + 2]) << 16) +
                    ((255 * r[e + 3]) << 8) +
                    255 * r[e + 4]),
                  (k = r[e + 5]),
                  g.push(r[e + 6]),
                  g.push(r[e + 7]),
                  (e += this.vertexSize));
            }
            switch (n) {
              case 1:
                e = "light";
                break;
              case 2:
                e = "multiply";
                break;
              case 3:
                e = "screen";
                break;
              default:
                e = "normal";
            }
            s.drawTriangles(
              w.realTexture,
              0,
              0,
              h,
              g,
              new Uint16Array(a),
              t.Matrix.EMPTY,
              k,
              f,
              e,
            );
          } else {
            let e,
              r = _.vertices,
              a = [],
              l = [],
              h = 16777215,
              g = 1;
            if (null != this.vertexEffect) {
              let e = this.vertexEffect;
              for (let t = 0, s = 0, n = _.numFloats; t < n; t += 8, s += 2)
                ((o.x = r[t]),
                  (o.y = r[t + 1]),
                  (u.x = d[s]),
                  (u.y = d[s + 1]),
                  p.setFromColor(i),
                  m.set(0, 0, 0, 0),
                  e.transform(o, u, p, m),
                  (r[t] = o.x),
                  (r[t + 1] = o.y),
                  (r[t + 2] = p.r),
                  (r[t + 3] = p.g),
                  (r[t + 4] = p.b),
                  (r[t + 5] = p.a),
                  (r[t + 6] = u.x),
                  (r[t + 7] = u.y),
                  a.push(r[t], -r[t + 1]),
                  (h =
                    ((255 * r[t + 2]) << 16) +
                    ((255 * r[t + 3]) << 8) +
                    255 * r[t + 4]),
                  (g = r[t + 5]),
                  l.push(r[t + 6], r[t + 7]));
            } else
              for (let e = 2, t = 0, s = _.numFloats; e < s; e += 8, t += 2)
                ((r[e] = i.r),
                  (r[e + 1] = i.g),
                  (r[e + 2] = i.b),
                  (r[e + 3] = i.a),
                  (r[e + 4] = d[t]),
                  (r[e + 5] = d[t + 1]),
                  a.push(r[e - 2], -r[e - 1]),
                  (h =
                    ((255 * r[e]) << 16) +
                    ((255 * r[e + 1]) << 8) +
                    255 * r[e + 2]),
                  (g = r[e + 3]),
                  l.push(r[e + 4], r[e + 5]));
            switch (n) {
              case 1:
                e = "light";
                break;
              case 2:
                e = "multiply";
                break;
              case 3:
                e = "screen";
                break;
              default:
                e = "normal";
            }
            s.drawTriangles(
              w.realTexture,
              0,
              0,
              a,
              l,
              new Uint16Array(c),
              t.Matrix.EMPTY,
              g,
              h,
              e,
            );
          }
        }
        l.clipEndWithSlot(y);
      }
      l.clipEnd();
    }
  }
  class h extends t.Sprite {
    constructor() {
      (super(),
        (this._currentPlayTime = 0),
        (this._pause = !0),
        (this._currAniName = null),
        (this._playbackRate = 1),
        (this._playAudio = !0),
        (this._soundChannelArr = []),
        (this.trackIndex = 0),
        (this._skinName = "default"),
        (this._animationName = ""),
        (this._loop = !0));
    }
    get externalSkins() {
      return this._externalSkins;
    }
    set externalSkins(e) {
      if (e) for (let t = e.length - 1; t >= 0; t--) e[t].target = this;
      this._externalSkins = e;
    }
    resetExternalSkin() {
      this._skeleton &&
        ((this._skeleton = new this._templet.ns.Skeleton(
          this._templet.skeletonData,
        )),
        this._flushExtSkin());
    }
    get source() {
      return this._source;
    }
    set source(e) {
      ((this._source = e),
        e
          ? t.ILaya.loader.load(e, t.Loader.SPINE).then((e) => {
              !this._source ||
                (e && !e.isCreateFromURL(this._source)) ||
                (this.templet = e);
            })
          : (this.templet = null));
    }
    get skinName() {
      return this._skinName;
    }
    set skinName(e) {
      ((this._skinName = e), this._templet && this.showSkinByName(e));
    }
    get animationName() {
      return this._animationName;
    }
    set animationName(e) {
      ((this._animationName = e),
        this._templet && this.play(e, this._loop, !0));
    }
    get loop() {
      return this._loop;
    }
    set loop(e) {
      ((this._loop = e),
        this._templet && this.play(this._animationName, this._loop, !0));
    }
    get templet() {
      return this._templet;
    }
    set templet(e) {
      this.init(e);
    }
    set currentTime(e) {
      if (this._currAniName && this._templet) {
        if (
          (e /= 1e3) < this._playStart ||
          (this._playEnd && e > this._playEnd) ||
          e > this._duration
        )
          throw new Error(
            "AnimationPlayer: value must large than playStartTime,small than playEndTime.",
          );
        (this._state.update(e - this._currentPlayTime),
          (this._currentPlayTime = e));
      }
    }
    get playState() {
      return this._currAniName
        ? this._pause
          ? h.PAUSED
          : h.PLAYING
        : h.STOPPED;
    }
    init(e) {
      if (
        (this._templet && (this.reset(), this.graphics.clear()),
        (this._templet = e),
        !this._templet)
      )
        return;
      (this._templet._addReference(),
        (this._skeleton = new e.ns.Skeleton(this._templet.skeletonData)),
        (this._stateData = new e.ns.AnimationStateData(this._skeleton.data)),
        (this._state = new e.ns.AnimationState(this._stateData)),
        (this._renerer = new l(e, !1)),
        (this._timeKeeper = new e.ns.TimeKeeper()));
      let s = this._templet.getSkinIndexByName(this._skinName);
      (-1 != s && this.showSkinByIndex(s),
        this._state.addListener({
          start: (e) => {},
          interrupt: (e) => {},
          end: (e) => {},
          dispose: (e) => {},
          complete: (e) => {
            e.loop
              ? this.event(t.Event.COMPLETE)
              : ((this._currAniName = null), this.event(t.Event.STOPPED));
          },
          event: (s, i) => {
            let n = {
              audioValue: i.data.audioPath,
              audioPath: i.data.audioPath,
              floatValue: i.floatValue,
              intValue: i.intValue,
              name: i.data.name,
              stringValue: i.stringValue,
              time: 1e3 * i.time,
              balance: i.balance,
              volume: i.volume,
            };
            if (
              (this.event(t.Event.LABEL, n), this._playAudio && n.audioValue)
            ) {
              let s = t.SoundManager.playSound(
                e.basePath + n.audioValue,
                1,
                t.Handler.create(this, this._onAniSoundStoped),
                null,
                (1e3 * this._currentPlayTime - n.time) / 1e3,
              );
              ((t.SoundManager.playbackRate = this._playbackRate),
                s && this._soundChannelArr.push(s));
            }
          },
        }),
        this._flushExtSkin(),
        this.event(t.Event.READY),
        t.LayaEnv.isPlaying &&
          this._animationName &&
          this.play(this._animationName, this._loop, !0));
    }
    play(e, t, s = !0, i = 0, n = 0, r = !0, a = !0) {
      ((this._playAudio = a), (n /= 1e3));
      let l = e;
      if ((i /= 1e3) < 0 || n < 0)
        throw new Error("SpineSkeleton: start and end must large than zero.");
      if (0 !== n && i > n)
        throw new Error("SpineSkeleton: start must less than end.");
      if (
        ("number" == typeof l && (l = this.getAniNameByIndex(e)),
        s || this._pause || this._currAniName != l)
      ) {
        ((this._currAniName = l),
          this._state.setAnimation(this.trackIndex, l, t));
        let e = this._state.getCurrent(this.trackIndex);
        ((e.animationStart = i),
          n && n < e.animationEnd && (e.animationEnd = n));
        let s = e.animation.duration;
        ((this._duration = s),
          (this._playStart = i),
          (this._playEnd = n <= s ? n : s),
          this._pause &&
            ((this._pause = !1),
            this.timer.frameLoop(1, this, this._update, null, !0)),
          this._update());
      }
    }
    _update() {
      this._timeKeeper.update();
      let e = this._timeKeeper.delta * this._playbackRate,
        t = this._state.getCurrent(this.trackIndex);
      (this._state.update(e), this._state.apply(this._skeleton));
      let s = t.animationLast;
      ((this._currentPlayTime = Math.max(0, s)),
        this._state &&
          this._skeleton &&
          (this._skeleton.updateWorldTransform(),
          this.graphics.clear(),
          this._renerer.draw(this._skeleton, this.graphics, -1, -1)));
    }
    _flushExtSkin() {
      if (null == this._skeleton) return;
      let e = this._externalSkins;
      if (e) for (let t = e.length - 1; t >= 0; t--) e[t].flush();
    }
    getAnimNum() {
      return this._templet.skeletonData.animations.length;
    }
    getAniNameByIndex(e) {
      return this._templet.getAniNameByIndex(e);
    }
    getSlotByName(e) {
      return this._skeleton.findSlot(e);
    }
    playbackRate(e) {
      this._playbackRate = e;
    }
    showSkinByName(e) {
      this.showSkinByIndex(this._templet.getSkinIndexByName(e));
    }
    showSkinByIndex(e) {
      let t = this._skeleton.data.skins[e];
      (this._skeleton.setSkin(t), this._skeleton.setSlotsToSetupPose());
    }
    stop() {
      this._pause ||
        ((this._pause = !0),
        (this._currAniName = null),
        this.timer.clear(this, this._update),
        this._state.update(-this._currentPlayTime),
        (this._currentPlayTime = 0),
        this.event(t.Event.STOPPED),
        this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0));
    }
    paused() {
      if (
        !this._pause &&
        ((this._pause = !0),
        this.timer.clear(this, this._update),
        this.event(t.Event.PAUSED),
        this._soundChannelArr.length > 0)
      )
        for (let e = this._soundChannelArr.length, t = 0; t < e; t++) {
          let e = this._soundChannelArr[t];
          e.isStopped || e.pause();
        }
    }
    resume() {
      if (
        this._pause &&
        ((this._pause = !1),
        this.timer.frameLoop(1, this, this._update, null, !0),
        this._soundChannelArr.length > 0)
      )
        for (let e = this._soundChannelArr.length, t = 0; t < e; t++) {
          let e = this._soundChannelArr[t];
          e.audioBuffer && e.resume();
        }
    }
    _onAniSoundStoped(e) {
      for (let t = this._soundChannelArr.length, s = 0; s < t; s++) {
        let i = this._soundChannelArr[s];
        (i.isStopped || e) &&
          (!i.isStopped && i.stop(),
          this._soundChannelArr.splice(s, 1),
          t--,
          s--);
      }
    }
    reset() {
      (this._templet._removeReference(1),
        (this._templet = null),
        (this._timeKeeper = null),
        (this._skeleton = null),
        this._state.clearListeners(),
        (this._state = null),
        (this._renerer = null),
        (this._currAniName = null),
        (this._pause = !0),
        this.timer.clear(this, this._update),
        this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0));
    }
    destroy(e = !0) {
      (super.destroy(e), this._templet && this.reset());
    }
    addAnimation(e, t = !1, s = 0) {
      s /= 1e3;
      let i = e;
      ("number" == typeof i && (i = this.getAniNameByIndex(i)),
        (this._currAniName = i),
        this._state.addAnimation(this.trackIndex, i, t, s));
    }
    setMix(e, t, s) {
      s /= 1e3;
      let i = e;
      "number" == typeof i && (i = this.getAniNameByIndex(i));
      let n = t;
      ("number" == typeof n && (n = this.getAniNameByIndex(n)),
        this._stateData.setMix(i, n, s));
    }
    getBoneByName(e) {
      return this._skeleton.findBone(e);
    }
    getSkeleton() {
      return this._skeleton;
    }
    setSlotAttachment(e, t) {
      this._skeleton.setAttachment(e, t);
    }
  }
  ((h.STOPPED = 0), (h.PAUSED = 1), (h.PLAYING = 2));
  t.Loader.registerLoader(
    ["skel"],
    class {
      load(e) {
        let s = t.Utils.replaceFileExtension(e.url, "atlas");
        return Promise.all([
          e.loader.fetch(
            e.url,
            "skel" == e.ext ? "arraybuffer" : "json",
            e.progress.createCallback(),
          ),
          e.loader.fetch(s, "text", e.progress.createCallback()),
        ]).then((t) => {
          if (!t[0] || !t[1]) return null;
          let s = new r();
          return s._parse(t[0], t[1], e.url, e.progress).then(() => s);
        });
      }
    },
    t.Loader.SPINE,
  );
  let o = t.ClassUtils.regClass;
  (o("SpineSkeleton", h),
    o("ExternalSkin", s),
    o("ExternalSkinItem", i),
    (e.ExternalSkin = s),
    (e.ExternalSkinItem = i),
    (e.SpineSkeleton = h),
    (e.SpineSkeletonRenderer = l),
    (e.SpineTemplet = r),
    (e.SpineTexture = n));
})((window.Laya = window.Laya || {}), Laya);
