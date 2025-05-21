(() => {
  "use strict";
  var e = {
      775: () => {
        try {
          self["workbox:background-sync:6.6.0"] && _();
        } catch (e) {}
      },
      930: () => {
        try {
          self["workbox:core:6.6.0"] && _();
        } catch (e) {}
      },
      172: () => {
        try {
          self["workbox:expiration:6.6.0"] && _();
        } catch (e) {}
      },
      973: () => {
        try {
          self["workbox:google-analytics:6.6.0"] && _();
        } catch (e) {}
      },
      769: () => {
        try {
          self["workbox:precaching:6.6.0"] && _();
        } catch (e) {}
      },
      357: () => {
        try {
          self["workbox:routing:6.6.0"] && _();
        } catch (e) {}
      },
      124: () => {
        try {
          self["workbox:strategies:6.6.0"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function s(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var r = (t[n] = { exports: {} });
    return e[n](r, r.exports, s), r.exports;
  }
  (() => {
    s(930);
    const e = function (e) {
      let t = e;
      for (
        var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), a = 1;
        a < s;
        a++
      )
        n[a - 1] = arguments[a];
      return n.length > 0 && (t += " :: ".concat(JSON.stringify(n))), t;
    };
    class t extends Error {
      constructor(t, s) {
        super(e(t, s)), (this.name = t), (this.details = s);
      }
    }
    const n = new Set();
    const a = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" !== typeof registration ? registration.scope : "",
      },
      r = (e) =>
        [a.prefix, e, a.suffix].filter((e) => e && e.length > 0).join("-"),
      i = (e) => e || r(a.googleAnalytics),
      o = (e) => e || r(a.precache),
      c = (e) => e || r(a.runtime);
    function h(e, t) {
      const s = new URL(e);
      for (const n of t) s.searchParams.delete(n);
      return s.href;
    }
    let u;
    function l(e) {
      e.then(() => {});
    }
    class d {
      constructor() {
        this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        });
      }
    }
    const f = (e) =>
      new URL(String(e), location.href).href.replace(
        new RegExp("^".concat(location.origin)),
        ""
      );
    function p(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    function g(e, t) {
      const s = t();
      return e.waitUntil(s), s;
    }
    async function y(e, s) {
      let n = null;
      if (e.url) {
        n = new URL(e.url).origin;
      }
      if (n !== self.location.origin)
        throw new t("cross-origin-copy-response", { origin: n });
      const a = e.clone(),
        r = {
          headers: new Headers(a.headers),
          status: a.status,
          statusText: a.statusText,
        },
        i = s ? s(r) : r,
        o = (function () {
          if (void 0 === u) {
            const t = new Response("");
            if ("body" in t)
              try {
                new Response(t.body), (u = !0);
              } catch (e) {
                u = !1;
              }
            u = !1;
          }
          return u;
        })()
          ? a.body
          : await a.blob();
      return new Response(o, i);
    }
    const m = (e, t) => t.some((t) => e instanceof t);
    let w, _;
    const b = new WeakMap(),
      v = new WeakMap(),
      q = new WeakMap(),
      R = new WeakMap(),
      E = new WeakMap();
    let x = {
      get(e, t, s) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return v.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || q.get(e);
          if ("store" === t)
            return s.objectStoreNames[1]
              ? void 0
              : s.objectStore(s.objectStoreNames[0]);
        }
        return k(e[t]);
      },
      set: (e, t, s) => ((e[t] = s), !0),
      has: (e, t) =>
        (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
        t in e,
    };
    function D(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            _ ||
            (_ = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function () {
              for (
                var t = arguments.length, s = new Array(t), n = 0;
                n < t;
                n++
              )
                s[n] = arguments[n];
              return e.apply(T(this), s), k(b.get(this));
            }
          : function () {
              for (
                var t = arguments.length, s = new Array(t), n = 0;
                n < t;
                n++
              )
                s[n] = arguments[n];
              return k(e.apply(T(this), s));
            }
        : function (t) {
            for (
              var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), a = 1;
              a < s;
              a++
            )
              n[a - 1] = arguments[a];
            const r = e.call(T(this), t, ...n);
            return q.set(r, t.sort ? t.sort() : [t]), k(r);
          };
    }
    function C(e) {
      return "function" === typeof e
        ? D(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (v.has(e)) return;
              const t = new Promise((t, s) => {
                const n = () => {
                    e.removeEventListener("complete", a),
                      e.removeEventListener("error", r),
                      e.removeEventListener("abort", r);
                  },
                  a = () => {
                    t(), n();
                  },
                  r = () => {
                    s(e.error || new DOMException("AbortError", "AbortError")),
                      n();
                  };
                e.addEventListener("complete", a),
                  e.addEventListener("error", r),
                  e.addEventListener("abort", r);
              });
              v.set(e, t);
            })(e),
          m(
            e,
            w ||
              (w = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
          )
            ? new Proxy(e, x)
            : e);
    }
    function k(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          const t = new Promise((t, s) => {
            const n = () => {
                e.removeEventListener("success", a),
                  e.removeEventListener("error", r);
              },
              a = () => {
                t(k(e.result)), n();
              },
              r = () => {
                s(e.error), n();
              };
            e.addEventListener("success", a), e.addEventListener("error", r);
          });
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && b.set(t, e);
              })
              .catch(() => {}),
            E.set(t, e),
            t
          );
        })(e);
      if (R.has(e)) return R.get(e);
      const t = C(e);
      return t !== e && (R.set(e, t), E.set(t, e)), t;
    }
    const T = (e) => E.get(e);
    function N(e, t) {
      let {
        blocked: s,
        upgrade: n,
        blocking: a,
        terminated: r,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const i = indexedDB.open(e, t),
        o = k(i);
      return (
        n &&
          i.addEventListener("upgradeneeded", (e) => {
            n(k(i.result), e.oldVersion, e.newVersion, k(i.transaction), e);
          }),
        s &&
          i.addEventListener("blocked", (e) =>
            s(e.oldVersion, e.newVersion, e)
          ),
        o
          .then((e) => {
            r && e.addEventListener("close", () => r()),
              a &&
                e.addEventListener("versionchange", (e) =>
                  a(e.oldVersion, e.newVersion, e)
                );
          })
          .catch(() => {}),
        o
      );
    }
    const S = ["get", "getKey", "getAll", "getAllKeys", "count"],
      L = ["put", "add", "delete", "clear"],
      U = new Map();
    function I(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
        return;
      if (U.get(t)) return U.get(t);
      const s = t.replace(/FromIndex$/, ""),
        n = t !== s,
        a = L.includes(s);
      if (
        !(s in (n ? IDBIndex : IDBObjectStore).prototype) ||
        (!a && !S.includes(s))
      )
        return;
      const r = async function (e) {
        const t = this.transaction(e, a ? "readwrite" : "readonly");
        let r = t.store;
        for (
          var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1;
          c < i;
          c++
        )
          o[c - 1] = arguments[c];
        return (
          n && (r = r.index(o.shift())),
          (await Promise.all([r[s](...o), a && t.done]))[0]
        );
      };
      return U.set(t, r), r;
    }
    x = ((e) => ({
      ...e,
      get: (t, s, n) => I(t, s) || e.get(t, s, n),
      has: (t, s) => !!I(t, s) || e.has(t, s),
    }))(x);
    s(172);
    const P = "cache-entries",
      A = (e) => {
        const t = new URL(e, location.href);
        return (t.hash = ""), t.href;
      };
    class O {
      constructor(e) {
        (this._db = null), (this._cacheName = e);
      }
      _upgradeDb(e) {
        const t = e.createObjectStore(P, { keyPath: "id" });
        t.createIndex("cacheName", "cacheName", { unique: !1 }),
          t.createIndex("timestamp", "timestamp", { unique: !1 });
      }
      _upgradeDbAndDeleteOldDbs(e) {
        this._upgradeDb(e),
          this._cacheName &&
            (function (e) {
              let { blocked: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const s = indexedDB.deleteDatabase(e);
              t && s.addEventListener("blocked", (e) => t(e.oldVersion, e)),
                k(s).then(() => {});
            })(this._cacheName);
      }
      async setTimestamp(e, t) {
        const s = {
            url: (e = A(e)),
            timestamp: t,
            cacheName: this._cacheName,
            id: this._getId(e),
          },
          n = (await this.getDb()).transaction(P, "readwrite", {
            durability: "relaxed",
          });
        await n.store.put(s), await n.done;
      }
      async getTimestamp(e) {
        const t = await this.getDb(),
          s = await t.get(P, this._getId(e));
        return null === s || void 0 === s ? void 0 : s.timestamp;
      }
      async expireEntries(e, t) {
        const s = await this.getDb();
        let n = await s
          .transaction(P)
          .store.index("timestamp")
          .openCursor(null, "prev");
        const a = [];
        let r = 0;
        for (; n; ) {
          const s = n.value;
          s.cacheName === this._cacheName &&
            ((e && s.timestamp < e) || (t && r >= t) ? a.push(n.value) : r++),
            (n = await n.continue());
        }
        const i = [];
        for (const o of a) await s.delete(P, o.id), i.push(o.url);
        return i;
      }
      _getId(e) {
        return this._cacheName + "|" + A(e);
      }
      async getDb() {
        return (
          this._db ||
            (this._db = await N("workbox-expiration", 1, {
              upgrade: this._upgradeDbAndDeleteOldDbs.bind(this),
            })),
          this._db
        );
      }
    }
    class K {
      constructor(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (this._isRunning = !1),
          (this._rerunRequested = !1),
          (this._maxEntries = t.maxEntries),
          (this._maxAgeSeconds = t.maxAgeSeconds),
          (this._matchOptions = t.matchOptions),
          (this._cacheName = e),
          (this._timestampModel = new O(e));
      }
      async expireEntries() {
        if (this._isRunning) return void (this._rerunRequested = !0);
        this._isRunning = !0;
        const e = this._maxAgeSeconds
            ? Date.now() - 1e3 * this._maxAgeSeconds
            : 0,
          t = await this._timestampModel.expireEntries(e, this._maxEntries),
          s = await self.caches.open(this._cacheName);
        for (const n of t) await s.delete(n, this._matchOptions);
        (this._isRunning = !1),
          this._rerunRequested &&
            ((this._rerunRequested = !1), l(this.expireEntries()));
      }
      async updateTimestamp(e) {
        await this._timestampModel.setTimestamp(e, Date.now());
      }
      async isURLExpired(e) {
        if (this._maxAgeSeconds) {
          const t = await this._timestampModel.getTimestamp(e),
            s = Date.now() - 1e3 * this._maxAgeSeconds;
          return void 0 === t || t < s;
        }
        return !1;
      }
      async delete() {
        (this._rerunRequested = !1),
          await this._timestampModel.expireEntries(1 / 0);
      }
    }
    s(769);
    function B(e) {
      if (!e) throw new t("add-to-cache-list-unexpected-type", { entry: e });
      if ("string" === typeof e) {
        const t = new URL(e, location.href);
        return { cacheKey: t.href, url: t.href };
      }
      const { revision: s, url: n } = e;
      if (!n) throw new t("add-to-cache-list-unexpected-type", { entry: e });
      if (!s) {
        const e = new URL(n, location.href);
        return { cacheKey: e.href, url: e.href };
      }
      const a = new URL(n, location.href),
        r = new URL(n, location.href);
      return (
        a.searchParams.set("__WB_REVISION__", s),
        { cacheKey: a.href, url: r.href }
      );
    }
    class M {
      constructor() {
        (this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = async (e) => {
            let { request: t, state: s } = e;
            s && (s.originalRequest = t);
          }),
          (this.cachedResponseWillBeUsed = async (e) => {
            let { event: t, state: s, cachedResponse: n } = e;
            if (
              "install" === t.type &&
              s &&
              s.originalRequest &&
              s.originalRequest instanceof Request
            ) {
              const e = s.originalRequest.url;
              n ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e);
            }
            return n;
          });
      }
    }
    class j {
      constructor(e) {
        let { precacheController: t } = e;
        (this.cacheKeyWillBeUsed = async (e) => {
          let { request: t, params: s } = e;
          const n =
            (null === s || void 0 === s ? void 0 : s.cacheKey) ||
            this._precacheController.getCacheKeyForURL(t.url);
          return n ? new Request(n, { headers: t.headers }) : t;
        }),
          (this._precacheController = t);
      }
    }
    s(124);
    function F(e) {
      return "string" === typeof e ? new Request(e) : e;
    }
    class W {
      constructor(e, t) {
        (this._cacheKeys = {}),
          Object.assign(this, t),
          (this.event = t.event),
          (this._strategy = e),
          (this._handlerDeferred = new d()),
          (this._extendLifetimePromises = []),
          (this._plugins = [...e.plugins]),
          (this._pluginStateMap = new Map());
        for (const s of this._plugins) this._pluginStateMap.set(s, {});
        this.event.waitUntil(this._handlerDeferred.promise);
      }
      async fetch(e) {
        const { event: s } = this;
        let n = F(e);
        if (
          "navigate" === n.mode &&
          s instanceof FetchEvent &&
          s.preloadResponse
        ) {
          const e = await s.preloadResponse;
          if (e) return e;
        }
        const a = this.hasCallback("fetchDidFail") ? n.clone() : null;
        try {
          for (const e of this.iterateCallbacks("requestWillFetch"))
            n = await e({ request: n.clone(), event: s });
        } catch (i) {
          if (i instanceof Error)
            throw new t("plugin-error-request-will-fetch", {
              thrownErrorMessage: i.message,
            });
        }
        const r = n.clone();
        try {
          let e;
          e = await fetch(
            n,
            "navigate" === n.mode ? void 0 : this._strategy.fetchOptions
          );
          for (const t of this.iterateCallbacks("fetchDidSucceed"))
            e = await t({ event: s, request: r, response: e });
          return e;
        } catch (o) {
          throw (
            (a &&
              (await this.runCallbacks("fetchDidFail", {
                error: o,
                event: s,
                originalRequest: a.clone(),
                request: r.clone(),
              })),
            o)
          );
        }
      }
      async fetchAndCachePut(e) {
        const t = await this.fetch(e),
          s = t.clone();
        return this.waitUntil(this.cachePut(e, s)), t;
      }
      async cacheMatch(e) {
        const t = F(e);
        let s;
        const { cacheName: n, matchOptions: a } = this._strategy,
          r = await this.getCacheKey(t, "read"),
          i = Object.assign(Object.assign({}, a), { cacheName: n });
        s = await caches.match(r, i);
        for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
          s =
            (await o({
              cacheName: n,
              matchOptions: a,
              cachedResponse: s,
              request: r,
              event: this.event,
            })) || void 0;
        return s;
      }
      async cachePut(e, s) {
        const a = F(e);
        await p(0);
        const r = await this.getCacheKey(a, "write");
        if (!s) throw new t("cache-put-with-no-response", { url: f(r.url) });
        const i = await this._ensureResponseSafeToCache(s);
        if (!i) return !1;
        const { cacheName: o, matchOptions: c } = this._strategy,
          u = await self.caches.open(o),
          l = this.hasCallback("cacheDidUpdate"),
          d = l
            ? await (async function (e, t, s, n) {
                const a = h(t.url, s);
                if (t.url === a) return e.match(t, n);
                const r = Object.assign(Object.assign({}, n), {
                    ignoreSearch: !0,
                  }),
                  i = await e.keys(t, r);
                for (const o of i) if (a === h(o.url, s)) return e.match(o, n);
              })(u, r.clone(), ["__WB_REVISION__"], c)
            : null;
        try {
          await u.put(r, l ? i.clone() : i);
        } catch (g) {
          if (g instanceof Error)
            throw (
              ("QuotaExceededError" === g.name &&
                (await (async function () {
                  for (const e of n) await e();
                })()),
              g)
            );
        }
        for (const t of this.iterateCallbacks("cacheDidUpdate"))
          await t({
            cacheName: o,
            oldResponse: d,
            newResponse: i.clone(),
            request: r,
            event: this.event,
          });
        return !0;
      }
      async getCacheKey(e, t) {
        const s = "".concat(e.url, " | ").concat(t);
        if (!this._cacheKeys[s]) {
          let n = e;
          for (const e of this.iterateCallbacks("cacheKeyWillBeUsed"))
            n = F(
              await e({
                mode: t,
                request: n,
                event: this.event,
                params: this.params,
              })
            );
          this._cacheKeys[s] = n;
        }
        return this._cacheKeys[s];
      }
      hasCallback(e) {
        for (const t of this._strategy.plugins) if (e in t) return !0;
        return !1;
      }
      async runCallbacks(e, t) {
        for (const s of this.iterateCallbacks(e)) await s(t);
      }
      *iterateCallbacks(e) {
        for (const t of this._strategy.plugins)
          if ("function" === typeof t[e]) {
            const s = this._pluginStateMap.get(t),
              n = (n) => {
                const a = Object.assign(Object.assign({}, n), { state: s });
                return t[e](a);
              };
            yield n;
          }
      }
      waitUntil(e) {
        return this._extendLifetimePromises.push(e), e;
      }
      async doneWaiting() {
        let e;
        for (; (e = this._extendLifetimePromises.shift()); ) await e;
      }
      destroy() {
        this._handlerDeferred.resolve(null);
      }
      async _ensureResponseSafeToCache(e) {
        let t = e,
          s = !1;
        for (const n of this.iterateCallbacks("cacheWillUpdate"))
          if (
            ((t =
              (await n({
                request: this.request,
                response: t,
                event: this.event,
              })) || void 0),
            (s = !0),
            !t)
          )
            break;
        return s || (t && 200 !== t.status && (t = void 0)), t;
      }
    }
    class H {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this.cacheName = c(e.cacheName)),
          (this.plugins = e.plugins || []),
          (this.fetchOptions = e.fetchOptions),
          (this.matchOptions = e.matchOptions);
      }
      handle(e) {
        const [t] = this.handleAll(e);
        return t;
      }
      handleAll(e) {
        e instanceof FetchEvent && (e = { event: e, request: e.request });
        const t = e.event,
          s =
            "string" === typeof e.request ? new Request(e.request) : e.request,
          n = "params" in e ? e.params : void 0,
          a = new W(this, { event: t, request: s, params: n }),
          r = this._getResponse(a, s, t);
        return [r, this._awaitComplete(r, a, s, t)];
      }
      async _getResponse(e, s, n) {
        let a;
        await e.runCallbacks("handlerWillStart", { event: n, request: s });
        try {
          if (((a = await this._handle(s, e)), !a || "error" === a.type))
            throw new t("no-response", { url: s.url });
        } catch (r) {
          if (r instanceof Error)
            for (const t of e.iterateCallbacks("handlerDidError"))
              if (((a = await t({ error: r, event: n, request: s })), a)) break;
          if (!a) throw r;
        }
        for (const t of e.iterateCallbacks("handlerWillRespond"))
          a = await t({ event: n, request: s, response: a });
        return a;
      }
      async _awaitComplete(e, t, s, n) {
        let a, r;
        try {
          a = await e;
        } catch (r) {}
        try {
          await t.runCallbacks("handlerDidRespond", {
            event: n,
            request: s,
            response: a,
          }),
            await t.doneWaiting();
        } catch (i) {
          i instanceof Error && (r = i);
        }
        if (
          (await t.runCallbacks("handlerDidComplete", {
            event: n,
            request: s,
            response: a,
            error: r,
          }),
          t.destroy(),
          r)
        )
          throw r;
      }
    }
    class Q extends H {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (e.cacheName = o(e.cacheName)),
          super(e),
          (this._fallbackToNetwork = !1 !== e.fallbackToNetwork),
          this.plugins.push(Q.copyRedirectedCacheableResponsesPlugin);
      }
      async _handle(e, t) {
        const s = await t.cacheMatch(e);
        return (
          s ||
          (t.event && "install" === t.event.type
            ? await this._handleInstall(e, t)
            : await this._handleFetch(e, t))
        );
      }
      async _handleFetch(e, s) {
        let n;
        const a = s.params || {};
        if (!this._fallbackToNetwork)
          throw new t("missing-precache-entry", {
            cacheName: this.cacheName,
            url: e.url,
          });
        {
          0;
          const t = a.integrity,
            r = e.integrity,
            i = !r || r === t;
          if (
            ((n = await s.fetch(
              new Request(e, {
                integrity: "no-cors" !== e.mode ? r || t : void 0,
              })
            )),
            t && i && "no-cors" !== e.mode)
          ) {
            this._useDefaultCacheabilityPluginIfNeeded();
            await s.cachePut(e, n.clone());
            0;
          }
        }
        return n;
      }
      async _handleInstall(e, s) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const n = await s.fetch(e);
        if (!(await s.cachePut(e, n.clone())))
          throw new t("bad-precaching-response", {
            url: e.url,
            status: n.status,
          });
        return n;
      }
      _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
          t = 0;
        for (const [s, n] of this.plugins.entries())
          n !== Q.copyRedirectedCacheableResponsesPlugin &&
            (n === Q.defaultPrecacheCacheabilityPlugin && (e = s),
            n.cacheWillUpdate && t++);
        0 === t
          ? this.plugins.push(Q.defaultPrecacheCacheabilityPlugin)
          : t > 1 && null !== e && this.plugins.splice(e, 1);
      }
    }
    (Q.defaultPrecacheCacheabilityPlugin = {
      async cacheWillUpdate(e) {
        let { response: t } = e;
        return !t || t.status >= 400 ? null : t;
      },
    }),
      (Q.copyRedirectedCacheableResponsesPlugin = {
        async cacheWillUpdate(e) {
          let { response: t } = e;
          return t.redirected ? await y(t) : t;
        },
      });
    class V {
      constructor() {
        let {
          cacheName: e,
          plugins: t = [],
          fallbackToNetwork: s = !0,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (this._urlsToCacheKeys = new Map()),
          (this._urlsToCacheModes = new Map()),
          (this._cacheKeysToIntegrities = new Map()),
          (this._strategy = new Q({
            cacheName: o(e),
            plugins: [...t, new j({ precacheController: this })],
            fallbackToNetwork: s,
          })),
          (this.install = this.install.bind(this)),
          (this.activate = this.activate.bind(this));
      }
      get strategy() {
        return this._strategy;
      }
      precache(e) {
        this.addToCacheList(e),
          this._installAndActiveListenersAdded ||
            (self.addEventListener("install", this.install),
            self.addEventListener("activate", this.activate),
            (this._installAndActiveListenersAdded = !0));
      }
      addToCacheList(e) {
        const s = [];
        for (const n of e) {
          "string" === typeof n
            ? s.push(n)
            : n && void 0 === n.revision && s.push(n.url);
          const { cacheKey: e, url: a } = B(n),
            r = "string" !== typeof n && n.revision ? "reload" : "default";
          if (
            this._urlsToCacheKeys.has(a) &&
            this._urlsToCacheKeys.get(a) !== e
          )
            throw new t("add-to-cache-list-conflicting-entries", {
              firstEntry: this._urlsToCacheKeys.get(a),
              secondEntry: e,
            });
          if ("string" !== typeof n && n.integrity) {
            if (
              this._cacheKeysToIntegrities.has(e) &&
              this._cacheKeysToIntegrities.get(e) !== n.integrity
            )
              throw new t("add-to-cache-list-conflicting-integrities", {
                url: a,
              });
            this._cacheKeysToIntegrities.set(e, n.integrity);
          }
          if (
            (this._urlsToCacheKeys.set(a, e),
            this._urlsToCacheModes.set(a, r),
            s.length > 0)
          ) {
            const e =
              "Workbox is precaching URLs without revision " +
              "info: ".concat(s.join(", "), "\nThis is generally NOT safe. ") +
              "Learn more at https://bit.ly/wb-precache";
            console.warn(e);
          }
        }
      }
      install(e) {
        return g(e, async () => {
          const t = new M();
          this.strategy.plugins.push(t);
          for (const [a, r] of this._urlsToCacheKeys) {
            const t = this._cacheKeysToIntegrities.get(r),
              s = this._urlsToCacheModes.get(a),
              n = new Request(a, {
                integrity: t,
                cache: s,
                credentials: "same-origin",
              });
            await Promise.all(
              this.strategy.handleAll({
                params: { cacheKey: r },
                request: n,
                event: e,
              })
            );
          }
          const { updatedURLs: s, notUpdatedURLs: n } = t;
          return { updatedURLs: s, notUpdatedURLs: n };
        });
      }
      activate(e) {
        return g(e, async () => {
          const e = await self.caches.open(this.strategy.cacheName),
            t = await e.keys(),
            s = new Set(this._urlsToCacheKeys.values()),
            n = [];
          for (const a of t) s.has(a.url) || (await e.delete(a), n.push(a.url));
          return { deletedURLs: n };
        });
      }
      getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
      }
      getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
      }
      getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href);
      }
      getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e);
      }
      async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
          s = this.getCacheKeyForURL(t);
        if (s) {
          return (await self.caches.open(this.strategy.cacheName)).match(s);
        }
      }
      createHandlerBoundToURL(e) {
        const s = this.getCacheKeyForURL(e);
        if (!s) throw new t("non-precached-url", { url: e });
        return (t) => (
          (t.request = new Request(e)),
          (t.params = Object.assign({ cacheKey: s }, t.params)),
          this.strategy.handle(t)
        );
      }
    }
    let G;
    const z = () => (G || (G = new V()), G);
    s(357);
    const $ = (e) => (e && "object" === typeof e ? e : { handle: e });
    class J {
      constructor(e, t) {
        let s =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "GET";
        (this.handler = $(t)), (this.match = e), (this.method = s);
      }
      setCatchHandler(e) {
        this.catchHandler = $(e);
      }
    }
    class X extends J {
      constructor(e, t, s) {
        super(
          (t) => {
            let { url: s } = t;
            const n = e.exec(s.href);
            if (n && (s.origin === location.origin || 0 === n.index))
              return n.slice(1);
          },
          t,
          s
        );
      }
    }
    class Y {
      constructor() {
        (this._routes = new Map()), (this._defaultHandlerMap = new Map());
      }
      get routes() {
        return this._routes;
      }
      addFetchListener() {
        self.addEventListener("fetch", (e) => {
          const { request: t } = e,
            s = this.handleRequest({ request: t, event: e });
          s && e.respondWith(s);
        });
      }
      addCacheListener() {
        self.addEventListener("message", (e) => {
          if (e.data && "CACHE_URLS" === e.data.type) {
            const { payload: t } = e.data;
            0;
            const s = Promise.all(
              t.urlsToCache.map((t) => {
                "string" === typeof t && (t = [t]);
                const s = new Request(...t);
                return this.handleRequest({ request: s, event: e });
              })
            );
            e.waitUntil(s),
              e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
          }
        });
      }
      handleRequest(e) {
        let { request: t, event: s } = e;
        const n = new URL(t.url, location.href);
        if (!n.protocol.startsWith("http")) return void 0;
        const a = n.origin === location.origin,
          { params: r, route: i } = this.findMatchingRoute({
            event: s,
            request: t,
            sameOrigin: a,
            url: n,
          });
        let o = i && i.handler;
        const c = t.method;
        if (
          (!o &&
            this._defaultHandlerMap.has(c) &&
            (o = this._defaultHandlerMap.get(c)),
          !o)
        )
          return void 0;
        let h;
        try {
          h = o.handle({ url: n, request: t, event: s, params: r });
        } catch (l) {
          h = Promise.reject(l);
        }
        const u = i && i.catchHandler;
        return (
          h instanceof Promise &&
            (this._catchHandler || u) &&
            (h = h.catch(async (e) => {
              if (u) {
                0;
                try {
                  return await u.handle({
                    url: n,
                    request: t,
                    event: s,
                    params: r,
                  });
                } catch (a) {
                  a instanceof Error && (e = a);
                }
              }
              if (this._catchHandler)
                return this._catchHandler.handle({
                  url: n,
                  request: t,
                  event: s,
                });
              throw e;
            })),
          h
        );
      }
      findMatchingRoute(e) {
        let { url: t, sameOrigin: s, request: n, event: a } = e;
        const r = this._routes.get(n.method) || [];
        for (const i of r) {
          let e;
          const r = i.match({ url: t, sameOrigin: s, request: n, event: a });
          if (r)
            return (
              (e = r),
              ((Array.isArray(e) && 0 === e.length) ||
                (r.constructor === Object && 0 === Object.keys(r).length) ||
                "boolean" === typeof r) &&
                (e = void 0),
              { route: i, params: e }
            );
        }
        return {};
      }
      setDefaultHandler(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "GET";
        this._defaultHandlerMap.set(t, $(e));
      }
      setCatchHandler(e) {
        this._catchHandler = $(e);
      }
      registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []),
          this._routes.get(e.method).push(e);
      }
      unregisterRoute(e) {
        if (!this._routes.has(e.method))
          throw new t("unregister-route-but-not-found-with-method", {
            method: e.method,
          });
        const s = this._routes.get(e.method).indexOf(e);
        if (!(s > -1)) throw new t("unregister-route-route-not-registered");
        this._routes.get(e.method).splice(s, 1);
      }
    }
    let Z;
    const ee = () => (
      Z || ((Z = new Y()), Z.addFetchListener(), Z.addCacheListener()), Z
    );
    function te(e, s, n) {
      let a;
      if ("string" === typeof e) {
        const t = new URL(e, location.href);
        0;
        a = new J(
          (e) => {
            let { url: s } = e;
            return s.href === t.href;
          },
          s,
          n
        );
      } else if (e instanceof RegExp) a = new X(e, s, n);
      else if ("function" === typeof e) a = new J(e, s, n);
      else {
        if (!(e instanceof J))
          throw new t("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture",
          });
        a = e;
      }
      return ee().registerRoute(a), a;
    }
    class se extends J {
      constructor(e, t) {
        super((s) => {
          let { request: n } = s;
          const a = e.getURLsToCacheKeys();
          for (const r of (function (e) {
            let {
              ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
              directoryIndex: s = "index.html",
              cleanURLs: n = !0,
              urlManipulation: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            return (function* () {
              const r = new URL(e, location.href);
              (r.hash = ""), yield r.href;
              const i = (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                for (const s of [...e.searchParams.keys()])
                  t.some((e) => e.test(s)) && e.searchParams.delete(s);
                return e;
              })(r, t);
              if ((yield i.href, s && i.pathname.endsWith("/"))) {
                const e = new URL(i.href);
                (e.pathname += s), yield e.href;
              }
              if (n) {
                const e = new URL(i.href);
                (e.pathname += ".html"), yield e.href;
              }
              if (a) {
                const e = a({ url: r });
                for (const t of e) yield t.href;
              }
            })();
          })(n.url, t)) {
            const t = a.get(r);
            if (t) {
              return { cacheKey: t, integrity: e.getIntegrityForCacheKey(t) };
            }
          }
        }, e.strategy);
      }
    }
    const ne = {
      cacheWillUpdate: async (e) => {
        let { response: t } = e;
        return 200 === t.status || 0 === t.status ? t : null;
      },
    };
    class ae extends H {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(e),
          this.plugins.some((e) => "cacheWillUpdate" in e) ||
            this.plugins.unshift(ne),
          (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0);
      }
      async _handle(e, s) {
        const n = [];
        const a = [];
        let r;
        if (this._networkTimeoutSeconds) {
          const { id: t, promise: i } = this._getTimeoutPromise({
            request: e,
            logs: n,
            handler: s,
          });
          (r = t), a.push(i);
        }
        const i = this._getNetworkPromise({
          timeoutId: r,
          request: e,
          logs: n,
          handler: s,
        });
        a.push(i);
        const o = await s.waitUntil(
          (async () => (await s.waitUntil(Promise.race(a))) || (await i))()
        );
        if (!o) throw new t("no-response", { url: e.url });
        return o;
      }
      _getTimeoutPromise(e) {
        let t,
          { request: s, logs: n, handler: a } = e;
        return {
          promise: new Promise((e) => {
            t = setTimeout(async () => {
              e(await a.cacheMatch(s));
            }, 1e3 * this._networkTimeoutSeconds);
          }),
          id: t,
        };
      }
      async _getNetworkPromise(e) {
        let t,
          s,
          { timeoutId: n, request: a, logs: r, handler: i } = e;
        try {
          s = await i.fetchAndCachePut(a);
        } catch (o) {
          o instanceof Error && (t = o);
        }
        return (
          n && clearTimeout(n), (!t && s) || (s = await i.cacheMatch(a)), s
        );
      }
    }
    class re extends H {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(e), (this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0);
      }
      async _handle(e, s) {
        let n, a;
        try {
          const t = [s.fetch(e)];
          if (this._networkTimeoutSeconds) {
            const e = p(1e3 * this._networkTimeoutSeconds);
            t.push(e);
          }
          if (((a = await Promise.race(t)), !a))
            throw new Error(
              "Timed out the network response after " +
                "".concat(this._networkTimeoutSeconds, " seconds.")
            );
        } catch (r) {
          r instanceof Error && (n = r);
        }
        if (!a) throw new t("no-response", { url: e.url, error: n });
        return a;
      }
    }
    class ie extends H {
      constructor() {
        super(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ),
          this.plugins.some((e) => "cacheWillUpdate" in e) ||
            this.plugins.unshift(ne);
      }
      async _handle(e, s) {
        const n = s.fetchAndCachePut(e).catch(() => {});
        s.waitUntil(n);
        let a,
          r = await s.cacheMatch(e);
        if (r) 0;
        else {
          0;
          try {
            r = await n;
          } catch (i) {
            i instanceof Error && (a = i);
          }
        }
        if (!r) throw new t("no-response", { url: e.url, error: a });
        return r;
      }
    }
    s(775);
    const oe = "requests",
      ce = "queueName";
    class he {
      constructor() {
        this._db = null;
      }
      async addEntry(e) {
        const t = (await this.getDb()).transaction(oe, "readwrite", {
          durability: "relaxed",
        });
        await t.store.add(e), await t.done;
      }
      async getFirstEntryId() {
        const e = await this.getDb(),
          t = await e.transaction(oe).store.openCursor();
        return null === t || void 0 === t ? void 0 : t.value.id;
      }
      async getAllEntriesByQueueName(e) {
        const t = await this.getDb(),
          s = await t.getAllFromIndex(oe, ce, IDBKeyRange.only(e));
        return s || new Array();
      }
      async getEntryCountByQueueName(e) {
        return (await this.getDb()).countFromIndex(oe, ce, IDBKeyRange.only(e));
      }
      async deleteEntry(e) {
        const t = await this.getDb();
        await t.delete(oe, e);
      }
      async getFirstEntryByQueueName(e) {
        return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "next");
      }
      async getLastEntryByQueueName(e) {
        return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "prev");
      }
      async getEndEntryFromIndex(e, t) {
        const s = await this.getDb(),
          n = await s.transaction(oe).store.index(ce).openCursor(e, t);
        return null === n || void 0 === n ? void 0 : n.value;
      }
      async getDb() {
        return (
          this._db ||
            (this._db = await N("workbox-background-sync", 3, {
              upgrade: this._upgradeDb,
            })),
          this._db
        );
      }
      _upgradeDb(e, t) {
        t > 0 &&
          t < 3 &&
          e.objectStoreNames.contains(oe) &&
          e.deleteObjectStore(oe);
        e.createObjectStore(oe, {
          autoIncrement: !0,
          keyPath: "id",
        }).createIndex(ce, ce, { unique: !1 });
      }
    }
    class ue {
      constructor(e) {
        (this._queueName = e), (this._queueDb = new he());
      }
      async pushEntry(e) {
        delete e.id,
          (e.queueName = this._queueName),
          await this._queueDb.addEntry(e);
      }
      async unshiftEntry(e) {
        const t = await this._queueDb.getFirstEntryId();
        t ? (e.id = t - 1) : delete e.id,
          (e.queueName = this._queueName),
          await this._queueDb.addEntry(e);
      }
      async popEntry() {
        return this._removeEntry(
          await this._queueDb.getLastEntryByQueueName(this._queueName)
        );
      }
      async shiftEntry() {
        return this._removeEntry(
          await this._queueDb.getFirstEntryByQueueName(this._queueName)
        );
      }
      async getAll() {
        return await this._queueDb.getAllEntriesByQueueName(this._queueName);
      }
      async size() {
        return await this._queueDb.getEntryCountByQueueName(this._queueName);
      }
      async deleteEntry(e) {
        await this._queueDb.deleteEntry(e);
      }
      async _removeEntry(e) {
        return e && (await this.deleteEntry(e.id)), e;
      }
    }
    const le = [
      "method",
      "referrer",
      "referrerPolicy",
      "mode",
      "credentials",
      "cache",
      "redirect",
      "integrity",
      "keepalive",
    ];
    class de {
      static async fromRequest(e) {
        const t = { url: e.url, headers: {} };
        "GET" !== e.method && (t.body = await e.clone().arrayBuffer());
        for (const [s, n] of e.headers.entries()) t.headers[s] = n;
        for (const s of le) void 0 !== e[s] && (t[s] = e[s]);
        return new de(t);
      }
      constructor(e) {
        "navigate" === e.mode && (e.mode = "same-origin"),
          (this._requestData = e);
      }
      toObject() {
        const e = Object.assign({}, this._requestData);
        return (
          (e.headers = Object.assign({}, this._requestData.headers)),
          e.body && (e.body = e.body.slice(0)),
          e
        );
      }
      toRequest() {
        return new Request(this._requestData.url, this._requestData);
      }
      clone() {
        return new de(this.toObject());
      }
    }
    const fe = "workbox-background-sync",
      pe = new Set(),
      ge = (e) => {
        const t = {
          request: new de(e.requestData).toRequest(),
          timestamp: e.timestamp,
        };
        return e.metadata && (t.metadata = e.metadata), t;
      };
    class ye {
      constructor(e) {
        let {
          forceSyncFallback: s,
          onSync: n,
          maxRetentionTime: a,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          ((this._syncInProgress = !1),
          (this._requestsAddedDuringSync = !1),
          pe.has(e))
        )
          throw new t("duplicate-queue-name", { name: e });
        pe.add(e),
          (this._name = e),
          (this._onSync = n || this.replayRequests),
          (this._maxRetentionTime = a || 10080),
          (this._forceSyncFallback = Boolean(s)),
          (this._queueStore = new ue(this._name)),
          this._addSyncListener();
      }
      get name() {
        return this._name;
      }
      async pushRequest(e) {
        await this._addRequest(e, "push");
      }
      async unshiftRequest(e) {
        await this._addRequest(e, "unshift");
      }
      async popRequest() {
        return this._removeRequest("pop");
      }
      async shiftRequest() {
        return this._removeRequest("shift");
      }
      async getAll() {
        const e = await this._queueStore.getAll(),
          t = Date.now(),
          s = [];
        for (const n of e) {
          const e = 60 * this._maxRetentionTime * 1e3;
          t - n.timestamp > e
            ? await this._queueStore.deleteEntry(n.id)
            : s.push(ge(n));
        }
        return s;
      }
      async size() {
        return await this._queueStore.size();
      }
      async _addRequest(e, t) {
        let { request: s, metadata: n, timestamp: a = Date.now() } = e;
        const r = {
          requestData: (await de.fromRequest(s.clone())).toObject(),
          timestamp: a,
        };
        switch ((n && (r.metadata = n), t)) {
          case "push":
            await this._queueStore.pushEntry(r);
            break;
          case "unshift":
            await this._queueStore.unshiftEntry(r);
        }
        this._syncInProgress
          ? (this._requestsAddedDuringSync = !0)
          : await this.registerSync();
      }
      async _removeRequest(e) {
        const t = Date.now();
        let s;
        switch (e) {
          case "pop":
            s = await this._queueStore.popEntry();
            break;
          case "shift":
            s = await this._queueStore.shiftEntry();
        }
        if (s) {
          const n = 60 * this._maxRetentionTime * 1e3;
          return t - s.timestamp > n ? this._removeRequest(e) : ge(s);
        }
      }
      async replayRequests() {
        let e;
        for (; (e = await this.shiftRequest()); )
          try {
            await fetch(e.request.clone());
          } catch (s) {
            throw (
              (await this.unshiftRequest(e),
              new t("queue-replay-failed", { name: this._name }))
            );
          }
      }
      async registerSync() {
        if ("sync" in self.registration && !this._forceSyncFallback)
          try {
            await self.registration.sync.register(
              "".concat(fe, ":").concat(this._name)
            );
          } catch (e) {
            0;
          }
      }
      _addSyncListener() {
        "sync" in self.registration && !this._forceSyncFallback
          ? self.addEventListener("sync", (e) => {
              if (e.tag === "".concat(fe, ":").concat(this._name)) {
                0;
                const t = async () => {
                  let t;
                  this._syncInProgress = !0;
                  try {
                    await this._onSync({ queue: this });
                  } catch (s) {
                    if (s instanceof Error) throw ((t = s), t);
                  } finally {
                    !this._requestsAddedDuringSync ||
                      (t && !e.lastChance) ||
                      (await this.registerSync()),
                      (this._syncInProgress = !1),
                      (this._requestsAddedDuringSync = !1);
                  }
                };
                e.waitUntil(t());
              }
            })
          : this._onSync({ queue: this });
      }
      static get _queueNames() {
        return pe;
      }
    }
    class me {
      constructor(e, t) {
        (this.fetchDidFail = async (e) => {
          let { request: t } = e;
          await this._queue.pushRequest({ request: t });
        }),
          (this._queue = new ye(e, t));
      }
    }
    s(973);
    const we = "www.google-analytics.com",
      _e = "www.googletagmanager.com",
      be = /^\/(\w+\/)?collect/,
      ve = (e) => {
        const t = (e) => {
            let { url: t } = e;
            return t.hostname === we && be.test(t.pathname);
          },
          s = new re({ plugins: [e] });
        return [new J(t, s, "GET"), new J(t, s, "POST")];
      },
      qe = (e) => {
        const t = new ae({ cacheName: e });
        return new J(
          (e) => {
            let { url: t } = e;
            return t.hostname === we && "/analytics.js" === t.pathname;
          },
          t,
          "GET"
        );
      },
      Re = (e) => {
        const t = new ae({ cacheName: e });
        return new J(
          (e) => {
            let { url: t } = e;
            return t.hostname === _e && "/gtag/js" === t.pathname;
          },
          t,
          "GET"
        );
      },
      Ee = (e) => {
        const t = new ae({ cacheName: e });
        return new J(
          (e) => {
            let { url: t } = e;
            return t.hostname === _e && "/gtm.js" === t.pathname;
          },
          t,
          "GET"
        );
      };
    var xe;
    !(function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const t = i(e.cacheName),
        s = new me("workbox-google-analytics", {
          maxRetentionTime: 2880,
          onSync:
            ((n = e),
            async (e) => {
              let t,
                { queue: s } = e;
              for (; (t = await s.shiftRequest()); ) {
                const { request: e, timestamp: r } = t,
                  i = new URL(e.url);
                try {
                  const t =
                      "POST" === e.method
                        ? new URLSearchParams(await e.clone().text())
                        : i.searchParams,
                    s = r - (Number(t.get("qt")) || 0),
                    a = Date.now() - s;
                  if ((t.set("qt", String(a)), n.parameterOverrides))
                    for (const e of Object.keys(n.parameterOverrides)) {
                      const s = n.parameterOverrides[e];
                      t.set(e, s);
                    }
                  "function" === typeof n.hitFilter &&
                    n.hitFilter.call(null, t),
                    await fetch(
                      new Request(i.origin + i.pathname, {
                        body: t.toString(),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit",
                        headers: { "Content-Type": "text/plain" },
                      })
                    );
                } catch (a) {
                  throw (await s.unshiftRequest(t), a);
                }
              }
            }),
        });
      var n;
      const a = [Ee(t), qe(t), Re(t), ...ve(s)],
        r = new Y();
      for (const i of a) r.registerRoute(i);
      r.addFetchListener();
    })(),
      self.addEventListener("activate", () => self.clients.claim()),
      (function (e) {
        z().precache(e);
      })([
        {
          revision: "bea4796192e3848e076cb5f0371117b8",
          url: "./index.html",
        },
        { revision: null, url: "./static/css/main.a2be52a2.css" },
        { revision: null, url: "./static/js/180.1094752b.chunk.js" },
        { revision: null, url: "./static/js/284.058fd6d6.chunk.js" },
        { revision: null, url: "./static/js/321.39608cdd.chunk.js" },
        { revision: null, url: "./static/js/455.c847dff7.chunk.js" },
        { revision: null, url: "./static/js/51.b17c377f.chunk.js" },
        { revision: null, url: "./static/js/648.73157f28.chunk.js" },
        { revision: null, url: "./static/js/673.61096baa.chunk.js" },
        { revision: null, url: "./static/js/697.669ade44.chunk.js" },
        { revision: null, url: "./static/js/813.bf64b75e.chunk.js" },
        { revision: null, url: "./static/js/main.bcd0e40b.js" },
        {
          revision: null,
          url: "./static/media/CinzelDecorative-Bold.4701e9921703cb64dfce.ttf",
        },
        {
          revision: null,
          url: "./static/media/Ubuntu-Bold.fec2d0f1431a6114a6ce.ttf",
        },
        {
          revision: null,
          url: "./static/media/Ubuntu-Regular.1cbb1b79a23478cc89ad.ttf",
        },
        {
          revision: null,
          url: "./static/media/logo_bg_dark.2d3d608e51dcb1446407.webp",
        },
        {
          revision: null,
          url: "./static/media/logo_bg_dark.2e5faa58f18c0b5a94e2.png",
        },
        {
          revision: null,
          url: "./static/media/logo_bg_light.7ae1415dad19d5d9f9af.png",
        },
        {
          revision: null,
          url: "./static/media/logo_bg_light.ea7c81f45702ec6f8bb2.webp",
        },
      ]),
      (function (e) {
        const t = z();
        te(new se(t, e));
      })(xe);
    const De = new RegExp("/[^/?]+\\.[^/]+$");
    var Ce;
    te((e) => {
      let { request: t, url: s } = e;
      return (
        "navigate" === t.mode &&
        !s.pathname.startsWith("/_") &&
        !s.pathname.match(De)
      );
    }, ((Ce = "./index.html"), z().createHandlerBoundToURL(Ce))),
      te(
        (e) => {
          let { url: t } = e;
          return (
            t.origin === self.location.origin &&
            (t.pathname.endsWith(".png") || t.pathname.endsWith(".webp"))
          );
        },
        new ie({
          cacheName: "images",
          plugins: [
            new (class {
              constructor() {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (this.cachedResponseWillBeUsed = async (e) => {
                  let {
                    event: t,
                    request: s,
                    cacheName: n,
                    cachedResponse: a,
                  } = e;
                  if (!a) return null;
                  const r = this._isResponseDateFresh(a),
                    i = this._getCacheExpiration(n);
                  l(i.expireEntries());
                  const o = i.updateTimestamp(s.url);
                  if (t)
                    try {
                      t.waitUntil(o);
                    } catch (c) {
                      0;
                    }
                  return r ? a : null;
                }),
                  (this.cacheDidUpdate = async (e) => {
                    let { cacheName: t, request: s } = e;
                    const n = this._getCacheExpiration(t);
                    await n.updateTimestamp(s.url), await n.expireEntries();
                  }),
                  (this._config = e),
                  (this._maxAgeSeconds = e.maxAgeSeconds),
                  (this._cacheExpirations = new Map()),
                  e.purgeOnQuotaError &&
                    (function (e) {
                      n.add(e);
                    })(() => this.deleteCacheAndMetadata());
              }
              _getCacheExpiration(e) {
                if (e === c()) throw new t("expire-custom-caches-only");
                let s = this._cacheExpirations.get(e);
                return (
                  s ||
                    ((s = new K(e, this._config)),
                    this._cacheExpirations.set(e, s)),
                  s
                );
              }
              _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds) return !0;
                const t = this._getDateHeaderTimestamp(e);
                if (null === t) return !0;
                return t >= Date.now() - 1e3 * this._maxAgeSeconds;
              }
              _getDateHeaderTimestamp(e) {
                if (!e.headers.has("date")) return null;
                const t = e.headers.get("date"),
                  s = new Date(t).getTime();
                return isNaN(s) ? null : s;
              }
              async deleteCacheAndMetadata() {
                for (const [e, t] of this._cacheExpirations)
                  await self.caches.delete(e), await t.delete();
                this._cacheExpirations = new Map();
              }
            })({ maxEntries: 50 }),
          ],
        })
      ),
      te((e) => {
        let { url: t } = e;
        return t.origin === self.location.origin && t.pathname.endsWith(".css");
      }, new ie({ cacheName: "external-cache" })),
      self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
      });
  })();
})();
