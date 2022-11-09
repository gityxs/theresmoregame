/*!For license information please see service-worker.js.LICENSE.txt*/ ! function () {
    "use strict";
    var e = {
            642: function () {
                try {
                    self["workbox:background-sync:6.5.2"] && _()
                } catch (e) {}
            },
            906: function () {
                try {
                    self["workbox:core:6.5.2"] && _()
                } catch (e) {}
            },
            83: function () {
                try {
                    self["workbox:expiration:6.5.2"] && _()
                } catch (e) {}
            },
            988: function () {
                try {
                    self["workbox:google-analytics:6.5.2"] && _()
                } catch (e) {}
            },
            143: function () {
                try {
                    self["workbox:precaching:6.5.2"] && _()
                } catch (e) {}
            },
            337: function () {
                try {
                    self["workbox:routing:6.5.2"] && _()
                } catch (e) {}
            },
            139: function () {
                try {
                    self["workbox:strategies:6.5.2"] && _()
                } catch (e) {}
            }
        },
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, r), s.exports
    }! function () {
        r(906);
        var e = null;

        function t(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function n(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, s(e, t)
        }

        function i(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && s(e, t)
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function c() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }

        function o(e) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, o(e)
        }

        function h(e, t) {
            if (t && ("object" === o(t) || "function" === typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }

        function f(e) {
            var t = c();
            return function () {
                var r, n = u(e);
                if (t) {
                    var a = u(this).constructor;
                    r = Reflect.construct(n, arguments, a)
                } else r = n.apply(this, arguments);
                return h(this, r)
            }
        }

        function l(e, t, r) {
            return l = c() ? Reflect.construct.bind() : function (e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var a = new(Function.bind.apply(e, n));
                return r && s(a, r.prototype), a
            }, l.apply(null, arguments)
        }

        function p(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return p = function (e) {
                if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                var r;
                if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n)
                }

                function n() {
                    return l(e, arguments, u(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), s(n, e)
            }, p(e)
        }
        var v = function (e) {
                for (var t = e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                return n.length > 0 && (t += " :: ".concat(JSON.stringify(n))), t
            },
            d = function (e) {
                i(r, e);
                var t = f(r);

                function r(e, n) {
                    var s;
                    a(this, r);
                    var i = v(e, n);
                    return (s = t.call(this, i)).name = e, s.details = n, s
                }
                return n(r)
            }(p(Error)),
            y = new Set;

        function m(e) {
            y.add(e)
        }
        var x, b = {
                googleAnalytics: "googleAnalytics",
                precache: "precache-v2",
                prefix: "workbox",
                runtime: "runtime",
                suffix: "undefined" !== typeof registration ? registration.scope : ""
            },
            g = function (e) {
                return [b.prefix, e, b.suffix].filter((function (e) {
                    return e && e.length > 0
                })).join("-")
            },
            w = function (e) {
                return e || g(b.googleAnalytics)
            },
            k = function (e) {
                return e || g(b.precache)
            },
            _ = function (e) {
                return e || g(b.runtime)
            };

        function q() {
            q = function () {
                return e
            };
            var e = {},
                t = Object.prototype,
                r = t.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                a = n.iterator || "@@iterator",
                s = n.asyncIterator || "@@asyncIterator",
                i = n.toStringTag || "@@toStringTag";

            function u(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (L) {
                u = function (e, t, r) {
                    return e[t] = r
                }
            }

            function c(e, t, r, n) {
                var a = t && t.prototype instanceof l ? t : l,
                    s = Object.create(a.prototype),
                    i = new E(n || []);
                return s._invoke = function (e, t, r) {
                    var n = "suspendedStart";
                    return function (a, s) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === a) throw s;
                            return S()
                        }
                        for (r.method = a, r.arg = s;;) {
                            var i = r.delegate;
                            if (i) {
                                var u = w(i, r);
                                if (u) {
                                    if (u === f) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = h(e, t, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }(e, r, i), s
            }

            function h(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (L) {
                    return {
                        type: "throw",
                        arg: L
                    }
                }
            }
            e.wrap = c;
            var f = {};

            function l() {}

            function p() {}

            function v() {}
            var d = {};
            u(d, a, (function () {
                return this
            }));
            var y = Object.getPrototypeOf,
                m = y && y(y(R([])));
            m && m !== t && r.call(m, a) && (d = m);
            var x = v.prototype = l.prototype = Object.create(d);

            function b(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    u(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function g(e, t) {
                function n(a, s, i, u) {
                    var c = h(e[a], e, s);
                    if ("throw" !== c.type) {
                        var f = c.arg,
                            l = f.value;
                        return l && "object" == o(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function (e) {
                            n("next", e, i, u)
                        }), (function (e) {
                            n("throw", e, i, u)
                        })) : t.resolve(l).then((function (e) {
                            f.value = e, i(f)
                        }), (function (e) {
                            return n("throw", e, i, u)
                        }))
                    }
                    u(c.arg)
                }
                var a;
                this._invoke = function (e, r) {
                    function s() {
                        return new t((function (t, a) {
                            n(e, r, t, a)
                        }))
                    }
                    return a = a ? a.then(s, s) : s()
                }
            }

            function w(e, t) {
                var r = e.iterator[t.method];
                if (void 0 === r) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return f;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return f
                }
                var n = h(r, e.iterator, t.arg);
                if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                var a = n.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function _(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function E(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(k, this), this.reset(!0)
            }

            function R(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            s = function t() {
                                for (; ++n < e.length;)
                                    if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return s.next = s
                    }
                }
                return {
                    next: S
                }
            }

            function S() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = v, u(x, "constructor", v), u(v, "constructor", p), p.displayName = u(v, i, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, u(e, i, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function (e) {
                return {
                    __await: e
                }
            }, b(g.prototype), u(g.prototype, s, (function () {
                return this
            })), e.AsyncIterator = g, e.async = function (t, r, n, a, s) {
                void 0 === s && (s = Promise);
                var i = new g(c(t, r, n, a), s);
                return e.isGeneratorFunction(r) ? i : i.next().then((function (e) {
                    return e.done ? e.value : i.next()
                }))
            }, b(x), u(x, i, "Generator"), u(x, a, (function () {
                return this
            })), u(x, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, e.values = R, E.prototype = {
                constructor: E,
                reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                        for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(r, n) {
                        return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var s = this.tryEntries[a],
                            i = s.completion;
                        if ("root" === s.tryLoc) return n("end");
                        if (s.tryLoc <= this.prev) {
                            var u = r.call(s, "catchLoc"),
                                c = r.call(s, "finallyLoc");
                            if (u && c) {
                                if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                            } else if (u) {
                                if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var s = a;
                            break
                        }
                    }
                    s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                    var i = s ? s.completion : {};
                    return i.type = e, i.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, f) : this.complete(i)
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), f
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var a = n.arg;
                                _(r)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (e, t, r) {
                    return this.delegate = {
                        iterator: R(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }

        function E(e, t, r, n, a, s, i) {
            try {
                var u = e[s](i),
                    c = u.value
            } catch (o) {
                return void r(o)
            }
            u.done ? t(c) : Promise.resolve(c).then(n, a)
        }

        function R(e) {
            return function () {
                var t = this,
                    r = arguments;
                return new Promise((function (n, a) {
                    var s = e.apply(t, r);

                    function i(e) {
                        E(s, n, a, i, u, "next", e)
                    }

                    function u(e) {
                        E(s, n, a, i, u, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function L(e, t) {
            if (e) {
                if ("string" === typeof e) return S(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(e, t) : void 0
            }
        }

        function D(e, t) {
            var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!r) {
                if (Array.isArray(e) || (r = L(e)) || t && e && "number" === typeof e.length) {
                    r && (e = r);
                    var n = 0,
                        a = function () {};
                    return {
                        s: a,
                        n: function () {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, i = !0,
                u = !1;
            return {
                s: function () {
                    r = r.call(e)
                },
                n: function () {
                    var e = r.next();
                    return i = e.done, e
                },
                e: function (e) {
                    u = !0, s = e
                },
                f: function () {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (u) throw s
                    }
                }
            }
        }

        function O(e, t) {
            var r, n = new URL(e),
                a = D(t);
            try {
                for (a.s(); !(r = a.n()).done;) {
                    var s = r.value;
                    n.searchParams.delete(s)
                }
            } catch (i) {
                a.e(i)
            } finally {
                a.f()
            }
            return n.href
        }

        function T(e, t, r, n) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = R(q().mark((function e(t, r, n, a) {
                var s, i, u, c, o, h, f;
                return q().wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (s = O(r.url, n), r.url !== s) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", t.match(r, a));
                        case 3:
                            return i = Object.assign(Object.assign({}, a), {
                                ignoreSearch: !0
                            }), e.next = 6, t.keys(r, i);
                        case 6:
                            u = e.sent, c = D(u), e.prev = 8, c.s();
                        case 10:
                            if ((o = c.n()).done) {
                                e.next = 17;
                                break
                            }
                            if (h = o.value, f = O(h.url, n), s !== f) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", t.match(h, a));
                        case 15:
                            e.next = 10;
                            break;
                        case 17:
                            e.next = 22;
                            break;
                        case 19:
                            e.prev = 19, e.t0 = e.catch(8), c.e(e.t0);
                        case 22:
                            return e.prev = 22, c.f(), e.finish(22);
                        case 25:
                            return e.abrupt("return");
                        case 26:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [8, 19, 22, 25]
                ])
            })))).apply(this, arguments)
        }

        function N() {
            if (void 0 === x) {
                var e = new Response("");
                if ("body" in e) try {
                    new Response(e.body), x = !0
                } catch (t) {
                    x = !1
                }
                x = !1
            }
            return x
        }

        function P(e) {
            e.then((function () {}))
        }
        var I = n((function e() {
            var t = this;
            a(this, e), this.promise = new Promise((function (e, r) {
                t.resolve = e, t.reject = r
            }))
        }));

        function j() {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = R(q().mark((function e() {
                var t, r, n;
                return q().wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            0, t = D(y), e.prev = 2, t.s();
                        case 4:
                            if ((r = t.n()).done) {
                                e.next = 11;
                                break
                            }
                            return n = r.value, e.next = 8, n();
                        case 8:
                            0;
                        case 9:
                            e.next = 4;
                            break;
                        case 11:
                            e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e.catch(2), t.e(e.t0);
                        case 16:
                            return e.prev = 16, t.f(), e.finish(16);
                        case 19:
                            0;
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 13, 16, 19]
                ])
            })))).apply(this, arguments)
        }
        var A = function (e) {
            return new URL(String(e), location.href).href.replace(new RegExp("^".concat(location.origin)), "")
        };

        function K(e) {
            return new Promise((function (t) {
                return setTimeout(t, e)
            }))
        }

        function M(e, t) {
            var r = t();
            return e.waitUntil(r), r
        }

        function B(e, t) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = R(q().mark((function e(t, r) {
                var n, a, s, i, u, c;
                return q().wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = null, t.url && (a = new URL(t.url), n = a.origin), n === self.location.origin) {
                                e.next = 4;
                                break
                            }
                            throw new d("cross-origin-copy-response", {
                                origin: n
                            });
                        case 4:
                            if (s = t.clone(), i = {
                                    headers: new Headers(s.headers),
                                    status: s.status,
                                    statusText: s.statusText
                                }, u = r ? r(i) : i, !N()) {
                                e.next = 11;
                                break
                            }
                            e.t0 = s.body, e.next = 14;
                            break;
                        case 11:
                            return e.next = 13, s.blob();
                        case 13:
                            e.t0 = e.sent;
                        case 14:
                            return c = e.t0, e.abrupt("return", new Response(c, u));
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function W(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function H(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(r), !0).forEach((function (t) {
                    W(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var Q, V;
        var $ = new WeakMap,
            z = new WeakMap,
            Y = new WeakMap,
            J = new WeakMap,
            X = new WeakMap;
        var Z = {
            get: function (e, t, r) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t) return z.get(e);
                    if ("objectStoreNames" === t) return e.objectStoreNames || Y.get(e);
                    if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                }
                return re(e[t])
            },
            set: function (e, t, r) {
                return e[t] = r, !0
            },
            has: function (e, t) {
                return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            }
        };

        function ee(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (V || (V = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function () {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return e.apply(ne(this), r), re($.get(this))
            } : function () {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return re(e.apply(ne(this), r))
            } : function (t) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                var s = e.call.apply(e, [ne(this), t].concat(n));
                return Y.set(s, t.sort ? t.sort() : [t]), re(s)
            }
        }

        function te(e) {
            return "function" === typeof e ? ee(e) : (e instanceof IDBTransaction && function (e) {
                if (!z.has(e)) {
                    var t = new Promise((function (t, r) {
                        var n = function () {
                                e.removeEventListener("complete", a), e.removeEventListener("error", s), e.removeEventListener("abort", s)
                            },
                            a = function () {
                                t(), n()
                            },
                            s = function () {
                                r(e.error || new DOMException("AbortError", "AbortError")), n()
                            };
                        e.addEventListener("complete", a), e.addEventListener("error", s), e.addEventListener("abort", s)
                    }));
                    z.set(e, t)
                }
            }(e), t = e, (Q || (Q = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((function (e) {
                return t instanceof e
            })) ? new Proxy(e, Z) : e);
            var t
        }

        function re(e) {
            if (e instanceof IDBRequest) return function (e) {
                var t = new Promise((function (t, r) {
                    var n = function () {
                            e.removeEventListener("success", a), e.removeEventListener("error", s)
                        },
                        a = function () {
                            t(re(e.result)), n()
                        },
                        s = function () {
                            r(e.error), n()
                        };
                    e.addEventListener("success", a), e.addEventListener("error", s)
                }));
                return t.then((function (t) {
                    t instanceof IDBCursor && $.set(t, e)
                })).catch((function () {})), X.set(t, e), t
            }(e);
            if (J.has(e)) return J.get(e);
            var t = te(e);
            return t !== e && (J.set(e, t), X.set(t, e)), t
        }
        var ne = function (e) {
            return X.get(e)
        };

        function ae(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = r.blocked,
                a = r.upgrade,
                s = r.blocking,
                i = r.terminated,
                u = indexedDB.open(e, t),
                c = re(u);
            return a && u.addEventListener("upgradeneeded", (function (e) {
                a(re(u.result), e.oldVersion, e.newVersion, re(u.transaction))
            })), n && u.addEventListener("blocked", (function () {
                return n()
            })), c.then((function (e) {
                i && e.addEventListener("close", (function () {
                    return i()
                })), s && e.addEventListener("versionchange", (function () {
                    return s()
                }))
            })).catch((function () {})), c
        }
        var se = ["get", "getKey", "getAll", "getAllKeys", "count"],
            ie = ["put", "add", "delete", "clear"],
            ue = new Map;

        function ce(e, t) {
            if (e instanceof IDBDatabase && !(t in e) && "string" === typeof t) {
                if (ue.get(t)) return ue.get(t);
                var r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    a = ie.includes(r);
                if (r in (n ? IDBIndex : IDBObjectStore).prototype && (a || se.includes(r))) {
                    var s = function () {
                        var e = R(q().mark((function e(t) {
                            var s, i, u, c, o, h, f = arguments;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        for (i = this.transaction(t, a ? "readwrite" : "readonly"), u = i.store, c = f.length, o = new Array(c > 1 ? c - 1 : 0), h = 1; h < c; h++) o[h - 1] = f[h];
                                        return n && (u = u.index(o.shift())), e.next = 6, Promise.all([(s = u)[r].apply(s, o), a && i.done]);
                                    case 6:
                                        return e.abrupt("return", e.sent[0]);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return ue.set(t, s), s
                }
            }
        }
        Z = function (e) {
            return G(G({}, e), {}, {
                get: function (t, r, n) {
                    return ce(t, r) || e.get(t, r, n)
                },
                has: function (t, r) {
                    return !!ce(t, r) || e.has(t, r)
                }
            })
        }(Z);
        r(83);
        var oe = "cache-entries",
            he = function (e) {
                var t = new URL(e, location.href);
                return t.hash = "", t.href
            },
            fe = function () {
                function e(t) {
                    a(this, e), this._db = null, this._cacheName = t
                }
                return n(e, [{
                    key: "_upgradeDb",
                    value: function (e) {
                        var t = e.createObjectStore(oe, {
                            keyPath: "id"
                        });
                        t.createIndex("cacheName", "cacheName", {
                            unique: !1
                        }), t.createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    }
                }, {
                    key: "_upgradeDbAndDeleteOldDbs",
                    value: function (e) {
                        this._upgradeDb(e), this._cacheName && function (e) {
                            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).blocked,
                                r = indexedDB.deleteDatabase(e);
                            t && r.addEventListener("blocked", (function () {
                                return t()
                            })), re(r).then((function () {}))
                        }(this._cacheName)
                    }
                }, {
                    key: "setTimestamp",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = he(t), n = {
                                            url: t,
                                            timestamp: r,
                                            cacheName: this._cacheName,
                                            id: this._getId(t)
                                        }, e.next = 4, this.getDb();
                                    case 4:
                                        return a = e.sent, s = a.transaction(oe, "readwrite", {
                                            durability: "relaxed"
                                        }), e.next = 8, s.store.put(n);
                                    case 8:
                                        return e.next = 10, s.done;
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getTimestamp",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return r = e.sent, e.next = 5, r.get(oe, this._getId(t));
                                    case 5:
                                        return n = e.sent, e.abrupt("return", null === n || void 0 === n ? void 0 : n.timestamp);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "expireEntries",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s, i, u, c, o, h, f;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return n = e.sent, e.next = 5, n.transaction(oe).store.index("timestamp").openCursor(null, "prev");
                                    case 5:
                                        a = e.sent, s = [], i = 0;
                                    case 8:
                                        if (!a) {
                                            e.next = 16;
                                            break
                                        }
                                        return (u = a.value).cacheName === this._cacheName && (t && u.timestamp < t || r && i >= r ? s.push(a.value) : i++), e.next = 13, a.continue();
                                    case 13:
                                        a = e.sent, e.next = 8;
                                        break;
                                    case 16:
                                        c = [], o = 0, h = s;
                                    case 18:
                                        if (!(o < h.length)) {
                                            e.next = 26;
                                            break
                                        }
                                        return f = h[o], e.next = 22, n.delete(oe, f.id);
                                    case 22:
                                        c.push(f.url);
                                    case 23:
                                        o++, e.next = 18;
                                        break;
                                    case 26:
                                        return e.abrupt("return", c);
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_getId",
                    value: function (e) {
                        return this._cacheName + "|" + he(e)
                    }
                }, {
                    key: "getDb",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._db) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, ae("workbox-expiration", 1, {
                                            upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                                        });
                                    case 3:
                                        this._db = e.sent;
                                    case 4:
                                        return e.abrupt("return", this._db);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }(),
            le = function () {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    a(this, e), this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = r.maxEntries, this._maxAgeSeconds = r.maxAgeSeconds, this._matchOptions = r.matchOptions, this._cacheName = t, this._timestampModel = new fe(t)
                }
                return n(e, [{
                    key: "expireEntries",
                    value: function () {
                        var e = R(q().mark((function e() {
                            var t, r, n, a, s, i;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._isRunning) {
                                            e.next = 3;
                                            break
                                        }
                                        return this._rerunRequested = !0, e.abrupt("return");
                                    case 3:
                                        return this._isRunning = !0, t = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0, e.next = 7, this._timestampModel.expireEntries(t, this._maxEntries);
                                    case 7:
                                        return r = e.sent, e.next = 10, self.caches.open(this._cacheName);
                                    case 10:
                                        n = e.sent, a = D(r), e.prev = 12, a.s();
                                    case 14:
                                        if ((s = a.n()).done) {
                                            e.next = 20;
                                            break
                                        }
                                        return i = s.value, e.next = 18, n.delete(i, this._matchOptions);
                                    case 18:
                                        e.next = 14;
                                        break;
                                    case 20:
                                        e.next = 25;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(12), a.e(e.t0);
                                    case 25:
                                        return e.prev = 25, a.f(), e.finish(25);
                                    case 28:
                                        0, this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, P(this.expireEntries()));
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [12, 22, 25, 28]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "updateTimestamp",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, this._timestampModel.setTimestamp(t, Date.now());
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "isURLExpired",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._maxAgeSeconds) {
                                            e.next = 6;
                                            break
                                        }
                                        e.next = 3;
                                        break;
                                    case 3:
                                        return e.abrupt("return", !1);
                                    case 6:
                                        return e.next = 8, this._timestampModel.getTimestamp(t);
                                    case 8:
                                        return r = e.sent, n = Date.now() - 1e3 * this._maxAgeSeconds, e.abrupt("return", void 0 === r || r < n);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "delete",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this._rerunRequested = !1, e.next = 3, this._timestampModel.expireEntries(1 / 0);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }();

        function pe(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, a, s = [],
                        i = !0,
                        u = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); i = !0);
                    } catch (c) {
                        u = !0, a = c
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    return s
                }
            }(e, t) || L(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ve = function () {
            function e() {
                var t = this,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), this.cachedResponseWillBeUsed = function () {
                    var e = R(q().mark((function e(r) {
                        var n, a, s, i, u, c, o;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = r.event, a = r.request, s = r.cacheName, i = r.cachedResponse) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 3:
                                    if (u = t._isResponseDateFresh(i), P((c = t._getCacheExpiration(s)).expireEntries()), o = c.updateTimestamp(a.url), n) try {
                                        n.waitUntil(o)
                                    } catch (h) {
                                        0
                                    }
                                    return e.abrupt("return", u ? i : null);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this.cacheDidUpdate = function () {
                    var e = R(q().mark((function e(r) {
                        var n, a, s;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.cacheName, a = r.request, s = t._getCacheExpiration(n), e.next = 5, s.updateTimestamp(a.url);
                                case 5:
                                    return e.next = 7, s.expireEntries();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this._config = r, this._maxAgeSeconds = r.maxAgeSeconds, this._cacheExpirations = new Map, r.purgeOnQuotaError && m((function () {
                    return t.deleteCacheAndMetadata()
                }))
            }
            return n(e, [{
                key: "_getCacheExpiration",
                value: function (e) {
                    if (e === _()) throw new d("expire-custom-caches-only");
                    var t = this._cacheExpirations.get(e);
                    return t || (t = new le(e, this._config), this._cacheExpirations.set(e, t)), t
                }
            }, {
                key: "_isResponseDateFresh",
                value: function (e) {
                    if (!this._maxAgeSeconds) return !0;
                    var t = this._getDateHeaderTimestamp(e);
                    return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                }
            }, {
                key: "_getDateHeaderTimestamp",
                value: function (e) {
                    if (!e.headers.has("date")) return null;
                    var t = e.headers.get("date"),
                        r = new Date(t).getTime();
                    return isNaN(r) ? null : r
                }
            }, {
                key: "deleteCacheAndMetadata",
                value: function () {
                    var e = R(q().mark((function e() {
                        var t, r, n, a, s;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = D(this._cacheExpirations), e.prev = 1, t.s();
                                case 3:
                                    if ((r = t.n()).done) {
                                        e.next = 11;
                                        break
                                    }
                                    return n = pe(r.value, 2), a = n[0], s = n[1], e.next = 7, self.caches.delete(a);
                                case 7:
                                    return e.next = 9, s.delete();
                                case 9:
                                    e.next = 3;
                                    break;
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(1), t.e(e.t0);
                                case 16:
                                    return e.prev = 16, t.f(), e.finish(16);
                                case 19:
                                    this._cacheExpirations = new Map;
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [1, 13, 16, 19]
                        ])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }();

        function de(e) {
            return function (e) {
                if (Array.isArray(e)) return S(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || L(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        r(143);

        function ye(e) {
            if (!e) throw new d("add-to-cache-list-unexpected-type", {
                entry: e
            });
            if ("string" === typeof e) return {
                cacheKey: (t = new URL(e, location.href)).href,
                url: t.href
            };
            var t, r = e.revision,
                n = e.url;
            if (!n) throw new d("add-to-cache-list-unexpected-type", {
                entry: e
            });
            if (!r) return {
                cacheKey: (t = new URL(n, location.href)).href,
                url: t.href
            };
            var a = new URL(n, location.href),
                s = new URL(n, location.href);
            return a.searchParams.set("__WB_REVISION__", r), {
                cacheKey: a.href,
                url: s.href
            }
        }
        var me = n((function e() {
                var t = this;
                a(this, e), this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = function () {
                    var e = R(q().mark((function e(t) {
                        var r, n;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = t.request, (n = t.state) && (n.originalRequest = r);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this.cachedResponseWillBeUsed = function () {
                    var e = R(q().mark((function e(r) {
                        var n, a, s, i;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.event, a = r.state, s = r.cachedResponse, "install" === n.type && a && a.originalRequest && a.originalRequest instanceof Request && (i = a.originalRequest.url, s ? t.notUpdatedURLs.push(i) : t.updatedURLs.push(i)), e.abrupt("return", s);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            })),
            xe = n((function e(t) {
                var r = this,
                    n = t.precacheController;
                a(this, e), this.cacheKeyWillBeUsed = function () {
                    var e = R(q().mark((function e(t) {
                        var n, a, s;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.request, a = t.params, s = (null === a || void 0 === a ? void 0 : a.cacheKey) || r._precacheController.getCacheKeyForURL(n.url), e.abrupt("return", s ? new Request(s, {
                                        headers: n.headers
                                    }) : n);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this._precacheController = n
            }));
        r(139);

        function be(e) {
            return "string" === typeof e ? new Request(e) : e
        }
        var ge = function () {
                function t(e, r) {
                    a(this, t), this._cacheKeys = {}, Object.assign(this, r), this.event = r.event, this._strategy = e, this._handlerDeferred = new I, this._extendLifetimePromises = [], this._plugins = de(e.plugins), this._pluginStateMap = new Map;
                    var n, s = D(this._plugins);
                    try {
                        for (s.s(); !(n = s.n()).done;) {
                            var i = n.value;
                            this._pluginStateMap.set(i, {})
                        }
                    } catch (u) {
                        s.e(u)
                    } finally {
                        s.f()
                    }
                    this.event.waitUntil(this._handlerDeferred.promise)
                }
                return n(t, [{
                    key: "fetch",
                    value: function (e) {
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function () {
                            return e.toString()
                        }, t
                    }(function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a, s, i, u, c, o, h, f, l, p;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.event, !("navigate" === (n = be(t)).mode && r instanceof FetchEvent && r.preloadResponse)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 5, r.preloadResponse;
                                    case 5:
                                        if (!(a = e.sent)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", a);
                                    case 9:
                                        s = this.hasCallback("fetchDidFail") ? n.clone() : null, e.prev = 10, i = D(this.iterateCallbacks("requestWillFetch")), e.prev = 12, i.s();
                                    case 14:
                                        if ((u = i.n()).done) {
                                            e.next = 21;
                                            break
                                        }
                                        return c = u.value, e.next = 18, c({
                                            request: n.clone(),
                                            event: r
                                        });
                                    case 18:
                                        n = e.sent;
                                    case 19:
                                        e.next = 14;
                                        break;
                                    case 21:
                                        e.next = 26;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(12), i.e(e.t0);
                                    case 26:
                                        return e.prev = 26, i.f(), e.finish(26);
                                    case 29:
                                        e.next = 35;
                                        break;
                                    case 31:
                                        if (e.prev = 31, e.t1 = e.catch(10), !(e.t1 instanceof Error)) {
                                            e.next = 35;
                                            break
                                        }
                                        throw new d("plugin-error-request-will-fetch", {
                                            thrownErrorMessage: e.t1.message
                                        });
                                    case 35:
                                        return o = n.clone(), e.prev = 36, e.next = 39, fetch(n, "navigate" === n.mode ? void 0 : this._strategy.fetchOptions);
                                    case 39:
                                        h = e.sent, f = D(this.iterateCallbacks("fetchDidSucceed")), e.prev = 42, f.s();
                                    case 44:
                                        if ((l = f.n()).done) {
                                            e.next = 51;
                                            break
                                        }
                                        return p = l.value, e.next = 48, p({
                                            event: r,
                                            request: o,
                                            response: h
                                        });
                                    case 48:
                                        h = e.sent;
                                    case 49:
                                        e.next = 44;
                                        break;
                                    case 51:
                                        e.next = 56;
                                        break;
                                    case 53:
                                        e.prev = 53, e.t2 = e.catch(42), f.e(e.t2);
                                    case 56:
                                        return e.prev = 56, f.f(), e.finish(56);
                                    case 59:
                                        return e.abrupt("return", h);
                                    case 62:
                                        if (e.prev = 62, e.t3 = e.catch(36), !s) {
                                            e.next = 68;
                                            break
                                        }
                                        return e.next = 68, this.runCallbacks("fetchDidFail", {
                                            error: e.t3,
                                            event: r,
                                            originalRequest: s.clone(),
                                            request: o.clone()
                                        });
                                    case 68:
                                        throw e.t3;
                                    case 69:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [10, 31],
                                [12, 23, 26, 29],
                                [36, 62],
                                [42, 53, 56, 59]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }, {
                    key: "fetchAndCachePut",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.fetch(t);
                                    case 2:
                                        return r = e.sent, n = r.clone(), this.waitUntil(this.cachePut(t, n)), e.abrupt("return", r);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "cacheMatch",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a, s, i, u, c, o, h, f;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = be(t), a = this._strategy, s = a.cacheName, i = a.matchOptions, e.next = 4, this.getCacheKey(r, "read");
                                    case 4:
                                        return u = e.sent, c = Object.assign(Object.assign({}, i), {
                                            cacheName: s
                                        }), e.next = 8, caches.match(u, c);
                                    case 8:
                                        n = e.sent, o = D(this.iterateCallbacks("cachedResponseWillBeUsed")), e.prev = 11, o.s();
                                    case 13:
                                        if ((h = o.n()).done) {
                                            e.next = 23;
                                            break
                                        }
                                        return f = h.value, e.next = 17, f({
                                            cacheName: s,
                                            matchOptions: i,
                                            cachedResponse: n,
                                            request: u,
                                            event: this.event
                                        });
                                    case 17:
                                        if (e.t0 = e.sent, e.t0) {
                                            e.next = 20;
                                            break
                                        }
                                        e.t0 = void 0;
                                    case 20:
                                        n = e.t0;
                                    case 21:
                                        e.next = 13;
                                        break;
                                    case 23:
                                        e.next = 28;
                                        break;
                                    case 25:
                                        e.prev = 25, e.t1 = e.catch(11), o.e(e.t1);
                                    case 28:
                                        return e.prev = 28, o.f(), e.finish(28);
                                    case 31:
                                        return e.abrupt("return", n);
                                    case 32:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [11, 25, 28, 31]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "cachePut",
                    value: function () {
                        var t = R(q().mark((function t(r, n) {
                            var a, s, i, u, c, o, h, f, l, p, v, y, m;
                            return q().wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a = be(r), t.next = 3, K(0);
                                    case 3:
                                        return t.next = 5, this.getCacheKey(a, "write");
                                    case 5:
                                        s = t.sent, t.next = 11;
                                        break;
                                    case 9:
                                        (i = n.headers.get("Vary")) && e.debug("The response for ".concat(A(s.url), " ") + "has a 'Vary: ".concat(i, "' header. ") + "Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.");
                                    case 11:
                                        if (n) {
                                            t.next = 14;
                                            break
                                        }
                                        throw new d("cache-put-with-no-response", {
                                            url: A(s.url)
                                        });
                                    case 14:
                                        return t.next = 16, this._ensureResponseSafeToCache(n);
                                    case 16:
                                        if (u = t.sent) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 20:
                                        return c = this._strategy, o = c.cacheName, h = c.matchOptions, t.next = 23, self.caches.open(o);
                                    case 23:
                                        if (f = t.sent, !(l = this.hasCallback("cacheDidUpdate"))) {
                                            t.next = 31;
                                            break
                                        }
                                        return t.next = 28, T(f, s.clone(), ["__WB_REVISION__"], h);
                                    case 28:
                                        t.t0 = t.sent, t.next = 32;
                                        break;
                                    case 31:
                                        t.t0 = null;
                                    case 32:
                                        return p = t.t0, t.prev = 34, t.next = 37, f.put(s, l ? u.clone() : u);
                                    case 37:
                                        t.next = 46;
                                        break;
                                    case 39:
                                        if (t.prev = 39, t.t1 = t.catch(34), !(t.t1 instanceof Error)) {
                                            t.next = 46;
                                            break
                                        }
                                        if ("QuotaExceededError" !== t.t1.name) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.next = 45, j();
                                    case 45:
                                        throw t.t1;
                                    case 46:
                                        v = D(this.iterateCallbacks("cacheDidUpdate")), t.prev = 47, v.s();
                                    case 49:
                                        if ((y = v.n()).done) {
                                            t.next = 55;
                                            break
                                        }
                                        return m = y.value, t.next = 53, m({
                                            cacheName: o,
                                            oldResponse: p,
                                            newResponse: u.clone(),
                                            request: s,
                                            event: this.event
                                        });
                                    case 53:
                                        t.next = 49;
                                        break;
                                    case 55:
                                        t.next = 60;
                                        break;
                                    case 57:
                                        t.prev = 57, t.t2 = t.catch(47), v.e(t.t2);
                                    case 60:
                                        return t.prev = 60, v.f(), t.finish(60);
                                    case 63:
                                        return t.abrupt("return", !0);
                                    case 64:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [34, 39],
                                [47, 57, 60, 63]
                            ])
                        })));
                        return function (e, r) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getCacheKey",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s, i, u;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = "".concat(t.url, " | ").concat(r), this._cacheKeys[n]) {
                                            e.next = 24;
                                            break
                                        }
                                        a = t, s = D(this.iterateCallbacks("cacheKeyWillBeUsed")), e.prev = 4, s.s();
                                    case 6:
                                        if ((i = s.n()).done) {
                                            e.next = 15;
                                            break
                                        }
                                        return u = i.value, e.t0 = be, e.next = 11, u({
                                            mode: r,
                                            request: a,
                                            event: this.event,
                                            params: this.params
                                        });
                                    case 11:
                                        e.t1 = e.sent, a = (0, e.t0)(e.t1);
                                    case 13:
                                        e.next = 6;
                                        break;
                                    case 15:
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17, e.t2 = e.catch(4), s.e(e.t2);
                                    case 20:
                                        return e.prev = 20, s.f(), e.finish(20);
                                    case 23:
                                        this._cacheKeys[n] = a;
                                    case 24:
                                        return e.abrupt("return", this._cacheKeys[n]);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [4, 17, 20, 23]
                            ])
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "hasCallback",
                    value: function (e) {
                        var t, r = D(this._strategy.plugins);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                if (e in t.value) return !0
                            }
                        } catch (n) {
                            r.e(n)
                        } finally {
                            r.f()
                        }
                        return !1
                    }
                }, {
                    key: "runCallbacks",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = D(this.iterateCallbacks(t)), e.prev = 1, n.s();
                                    case 3:
                                        if ((a = n.n()).done) {
                                            e.next = 9;
                                            break
                                        }
                                        return s = a.value, e.next = 7, s(r);
                                    case 7:
                                        e.next = 3;
                                        break;
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), n.e(e.t0);
                                    case 14:
                                        return e.prev = 14, n.f(), e.finish(14);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 11, 14, 17]
                            ])
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "iterateCallbacks",
                    value: q().mark((function e(t) {
                        var r, n, a, s = this;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = D(this._strategy.plugins), e.prev = 1, a = q().mark((function e() {
                                        var r, a, i;
                                        return q().wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if ("function" !== typeof (r = n.value)[t]) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return a = s._pluginStateMap.get(r), i = function (e) {
                                                        var n = Object.assign(Object.assign({}, e), {
                                                            state: a
                                                        });
                                                        return r[t](n)
                                                    }, e.next = 6, i;
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })), r.s();
                                case 4:
                                    if ((n = r.n()).done) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.delegateYield(a(), "t0", 6);
                                case 6:
                                    e.next = 4;
                                    break;
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t1 = e.catch(1), r.e(e.t1);
                                case 13:
                                    return e.prev = 13, r.f(), e.finish(13);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [1, 10, 13, 16]
                        ])
                    }))
                }, {
                    key: "waitUntil",
                    value: function (e) {
                        return this._extendLifetimePromises.push(e), e
                    }
                }, {
                    key: "doneWaiting",
                    value: function () {
                        var e = R(q().mark((function e() {
                            var t;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t = this._extendLifetimePromises.shift())) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, t;
                                    case 3:
                                        e.next = 0;
                                        break;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "destroy",
                    value: function () {
                        this._handlerDeferred.resolve(null)
                    }
                }, {
                    key: "_ensureResponseSafeToCache",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a, s, i;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = t, n = !1, a = D(this.iterateCallbacks("cacheWillUpdate")), e.prev = 3, a.s();
                                    case 5:
                                        if ((s = a.n()).done) {
                                            e.next = 18;
                                            break
                                        }
                                        return i = s.value, e.next = 9, i({
                                            request: this.request,
                                            response: r,
                                            event: this.event
                                        });
                                    case 9:
                                        if (e.t0 = e.sent, e.t0) {
                                            e.next = 12;
                                            break
                                        }
                                        e.t0 = void 0;
                                    case 12:
                                        if (r = e.t0, n = !0, r) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("break", 18);
                                    case 16:
                                        e.next = 5;
                                        break;
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(3), a.e(e.t1);
                                    case 23:
                                        return e.prev = 23, a.f(), e.finish(23);
                                    case 26:
                                        return n || r && 200 !== r.status && (r = void 0), e.abrupt("return", r);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 20, 23, 26]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), t
            }(),
            we = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    a(this, e), this.cacheName = _(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions
                }
                return n(e, [{
                    key: "handle",
                    value: function (e) {
                        return pe(this.handleAll(e), 1)[0]
                    }
                }, {
                    key: "handleAll",
                    value: function (e) {
                        e instanceof FetchEvent && (e = {
                            event: e,
                            request: e.request
                        });
                        var t = e.event,
                            r = "string" === typeof e.request ? new Request(e.request) : e.request,
                            n = "params" in e ? e.params : void 0,
                            a = new ge(this, {
                                event: t,
                                request: r,
                                params: n
                            }),
                            s = this._getResponse(a, r, t);
                        return [s, this._awaitComplete(s, a, r, t)]
                    }
                }, {
                    key: "_getResponse",
                    value: function () {
                        var e = R(q().mark((function e(t, r, n) {
                            var a, s, i, u, c, o, h;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.runCallbacks("handlerWillStart", {
                                            event: n,
                                            request: r
                                        });
                                    case 2:
                                        return a = void 0, e.prev = 3, e.next = 6, this._handle(r, t);
                                    case 6:
                                        if ((a = e.sent) && "error" !== a.type) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new d("no-response", {
                                            url: r.url
                                        });
                                    case 9:
                                        e.next = 39;
                                        break;
                                    case 11:
                                        if (e.prev = 11, e.t0 = e.catch(3), !(e.t0 instanceof Error)) {
                                            e.next = 34;
                                            break
                                        }
                                        s = D(t.iterateCallbacks("handlerDidError")), e.prev = 15, s.s();
                                    case 17:
                                        if ((i = s.n()).done) {
                                            e.next = 26;
                                            break
                                        }
                                        return u = i.value, e.next = 21, u({
                                            error: e.t0,
                                            event: n,
                                            request: r
                                        });
                                    case 21:
                                        if (!(a = e.sent)) {
                                            e.next = 24;
                                            break
                                        }
                                        return e.abrupt("break", 26);
                                    case 24:
                                        e.next = 17;
                                        break;
                                    case 26:
                                        e.next = 31;
                                        break;
                                    case 28:
                                        e.prev = 28, e.t1 = e.catch(15), s.e(e.t1);
                                    case 31:
                                        return e.prev = 31, s.f(), e.finish(31);
                                    case 34:
                                        if (a) {
                                            e.next = 38;
                                            break
                                        }
                                        throw e.t0;
                                    case 38:
                                        0;
                                    case 39:
                                        c = D(t.iterateCallbacks("handlerWillRespond")), e.prev = 40, c.s();
                                    case 42:
                                        if ((o = c.n()).done) {
                                            e.next = 49;
                                            break
                                        }
                                        return h = o.value, e.next = 46, h({
                                            event: n,
                                            request: r,
                                            response: a
                                        });
                                    case 46:
                                        a = e.sent;
                                    case 47:
                                        e.next = 42;
                                        break;
                                    case 49:
                                        e.next = 54;
                                        break;
                                    case 51:
                                        e.prev = 51, e.t2 = e.catch(40), c.e(e.t2);
                                    case 54:
                                        return e.prev = 54, c.f(), e.finish(54);
                                    case 57:
                                        return e.abrupt("return", a);
                                    case 58:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 11],
                                [15, 28, 31, 34],
                                [40, 51, 54, 57]
                            ])
                        })));
                        return function (t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_awaitComplete",
                    value: function () {
                        var e = R(q().mark((function e(t, r, n, a) {
                            var s, i;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t;
                                    case 3:
                                        s = e.sent, e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0);
                                    case 8:
                                        return e.prev = 8, e.next = 11, r.runCallbacks("handlerDidRespond", {
                                            event: a,
                                            request: n,
                                            response: s
                                        });
                                    case 11:
                                        return e.next = 13, r.doneWaiting();
                                    case 13:
                                        e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t1 = e.catch(8), e.t1 instanceof Error && (i = e.t1);
                                    case 18:
                                        return e.next = 20, r.runCallbacks("handlerDidComplete", {
                                            event: a,
                                            request: n,
                                            response: s,
                                            error: i
                                        });
                                    case 20:
                                        if (r.destroy(), !i) {
                                            e.next = 23;
                                            break
                                        }
                                        throw i;
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6],
                                [8, 15]
                            ])
                        })));
                        return function (t, r, n, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }(),
            ke = function (t) {
                i(s, t);
                var r = f(s);

                function s() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, s), t.cacheName = k(t.cacheName), (e = r.call(this, t))._fallbackToNetwork = !1 !== t.fallbackToNetwork, e.plugins.push(s.copyRedirectedCacheableResponsesPlugin), e
                }
                return n(s, [{
                    key: "_handle",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.cacheMatch(t);
                                    case 2:
                                        if (!(n = e.sent)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 5:
                                        if (!r.event || "install" !== r.event.type) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 8, this._handleInstall(t, r);
                                    case 8:
                                    case 11:
                                        return e.abrupt("return", e.sent);
                                    case 9:
                                        return e.next = 11, this._handleFetch(t, r);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_handleFetch",
                    value: function () {
                        var t = R(q().mark((function t(r, n) {
                            var a, s, i, u, c, o;
                            return q().wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (s = n.params || {}, !this._fallbackToNetwork) {
                                            t.next = 17;
                                            break
                                        }
                                        return i = s.integrity, u = r.integrity, c = !u || u === i, t.next = 8, n.fetch(new Request(r, {
                                            integrity: u || i
                                        }));
                                    case 8:
                                        if (a = t.sent, !i || !c) {
                                            t.next = 15;
                                            break
                                        }
                                        return this._useDefaultCacheabilityPluginIfNeeded(), t.next = 13, n.cachePut(r, a.clone());
                                    case 13:
                                        t.sent;
                                    case 15:
                                        t.next = 18;
                                        break;
                                    case 17:
                                        throw new d("missing-precache-entry", {
                                            cacheName: this.cacheName,
                                            url: r.url
                                        });
                                    case 18:
                                        t.next = 34;
                                        break;
                                    case 23:
                                        t.t0 = t.sent;
                                    case 24:
                                        o = t.t0, e.groupCollapsed("Precaching is responding to: " + A(r.url)), e.log("Serving the precached url: ".concat(A(o instanceof Request ? o.url : o))), e.groupCollapsed("View request details here."), e.log(r), e.groupEnd(), e.groupCollapsed("View response details here."), e.log(a), e.groupEnd(), e.groupEnd();
                                    case 34:
                                        return t.abrupt("return", a);
                                    case 35:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));
                        return function (e, r) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_handleInstall",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this._useDefaultCacheabilityPluginIfNeeded(), e.next = 3, r.fetch(t);
                                    case 3:
                                        return n = e.sent, e.next = 6, r.cachePut(t, n.clone());
                                    case 6:
                                        if (e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new d("bad-precaching-response", {
                                            url: t.url,
                                            status: n.status
                                        });
                                    case 9:
                                        return e.abrupt("return", n);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_useDefaultCacheabilityPluginIfNeeded",
                    value: function () {
                        var e, t = null,
                            r = 0,
                            n = D(this.plugins.entries());
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var a = pe(e.value, 2),
                                    i = a[0],
                                    u = a[1];
                                u !== s.copyRedirectedCacheableResponsesPlugin && (u === s.defaultPrecacheCacheabilityPlugin && (t = i), u.cacheWillUpdate && r++)
                            }
                        } catch (c) {
                            n.e(c)
                        } finally {
                            n.f()
                        }
                        0 === r ? this.plugins.push(s.defaultPrecacheCacheabilityPlugin) : r > 1 && null !== t && this.plugins.splice(t, 1)
                    }
                }]), s
            }(we);
        ke.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: function (e) {
                return R(q().mark((function t() {
                    var r;
                    return q().wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ((r = e.response) && !(r.status >= 400)) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", null);
                            case 3:
                                return t.abrupt("return", r);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            }
        }, ke.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: function (e) {
                return R(q().mark((function t() {
                    var r;
                    return q().wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(r = e.response).redirected) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4, B(r);
                            case 4:
                                t.t0 = t.sent, t.next = 8;
                                break;
                            case 7:
                                t.t0 = r;
                            case 8:
                                return t.abrupt("return", t.t0);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            }
        };
        var _e, qe = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.cacheName,
                        n = t.plugins,
                        s = void 0 === n ? [] : n,
                        i = t.fallbackToNetwork,
                        u = void 0 === i || i;
                    a(this, e), this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new ke({
                        cacheName: k(r),
                        plugins: [].concat(de(s), [new xe({
                            precacheController: this
                        })]),
                        fallbackToNetwork: u
                    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
                }
                return n(e, [{
                    key: "strategy",
                    get: function () {
                        return this._strategy
                    }
                }, {
                    key: "precache",
                    value: function (e) {
                        this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
                    }
                }, {
                    key: "addToCacheList",
                    value: function (e) {
                        var t, r = [],
                            n = D(e);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var a = t.value;
                                "string" === typeof a ? r.push(a) : a && void 0 === a.revision && r.push(a.url);
                                var s = ye(a),
                                    i = s.cacheKey,
                                    u = s.url,
                                    c = "string" !== typeof a && a.revision ? "reload" : "default";
                                if (this._urlsToCacheKeys.has(u) && this._urlsToCacheKeys.get(u) !== i) throw new d("add-to-cache-list-conflicting-entries", {
                                    firstEntry: this._urlsToCacheKeys.get(u),
                                    secondEntry: i
                                });
                                if ("string" !== typeof a && a.integrity) {
                                    if (this._cacheKeysToIntegrities.has(i) && this._cacheKeysToIntegrities.get(i) !== a.integrity) throw new d("add-to-cache-list-conflicting-integrities", {
                                        url: u
                                    });
                                    this._cacheKeysToIntegrities.set(i, a.integrity)
                                }
                                if (this._urlsToCacheKeys.set(u, i), this._urlsToCacheModes.set(u, c), r.length > 0) {
                                    var o = "Workbox is precaching URLs without revision " + "info: ".concat(r.join(", "), "\nThis is generally NOT safe. ") + "Learn more at https://bit.ly/wb-precache";
                                    console.warn(o)
                                }
                            }
                        } catch (h) {
                            n.e(h)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "install",
                    value: function (e) {
                        var t = this;
                        return M(e, R(q().mark((function r() {
                            var n, a, s, i, u, c, o, h, f, l, p;
                            return q().wrap((function (r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        n = new me, t.strategy.plugins.push(n), a = D(t._urlsToCacheKeys), r.prev = 3, a.s();
                                    case 5:
                                        if ((s = a.n()).done) {
                                            r.next = 14;
                                            break
                                        }
                                        return i = pe(s.value, 2), u = i[0], c = i[1], o = t._cacheKeysToIntegrities.get(c), h = t._urlsToCacheModes.get(u), f = new Request(u, {
                                            integrity: o,
                                            cache: h,
                                            credentials: "same-origin"
                                        }), r.next = 12, Promise.all(t.strategy.handleAll({
                                            params: {
                                                cacheKey: c
                                            },
                                            request: f,
                                            event: e
                                        }));
                                    case 12:
                                        r.next = 5;
                                        break;
                                    case 14:
                                        r.next = 19;
                                        break;
                                    case 16:
                                        r.prev = 16, r.t0 = r.catch(3), a.e(r.t0);
                                    case 19:
                                        return r.prev = 19, a.f(), r.finish(19);
                                    case 22:
                                        return l = n.updatedURLs, p = n.notUpdatedURLs, r.abrupt("return", {
                                            updatedURLs: l,
                                            notUpdatedURLs: p
                                        });
                                    case 25:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [3, 16, 19, 22]
                            ])
                        }))))
                    }
                }, {
                    key: "activate",
                    value: function (e) {
                        var t = this;
                        return M(e, R(q().mark((function e() {
                            var r, n, a, s, i, u, c;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, self.caches.open(t.strategy.cacheName);
                                    case 2:
                                        return r = e.sent, e.next = 5, r.keys();
                                    case 5:
                                        n = e.sent, a = new Set(t._urlsToCacheKeys.values()), s = [], i = D(n), e.prev = 9, i.s();
                                    case 11:
                                        if ((u = i.n()).done) {
                                            e.next = 19;
                                            break
                                        }
                                        if (c = u.value, a.has(c.url)) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 16, r.delete(c);
                                    case 16:
                                        s.push(c.url);
                                    case 17:
                                        e.next = 11;
                                        break;
                                    case 19:
                                        e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(9), i.e(e.t0);
                                    case 24:
                                        return e.prev = 24, i.f(), e.finish(24);
                                    case 27:
                                        return e.abrupt("return", {
                                            deletedURLs: s
                                        });
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 21, 24, 27]
                            ])
                        }))))
                    }
                }, {
                    key: "getURLsToCacheKeys",
                    value: function () {
                        return this._urlsToCacheKeys
                    }
                }, {
                    key: "getCachedURLs",
                    value: function () {
                        return de(this._urlsToCacheKeys.keys())
                    }
                }, {
                    key: "getCacheKeyForURL",
                    value: function (e) {
                        var t = new URL(e, location.href);
                        return this._urlsToCacheKeys.get(t.href)
                    }
                }, {
                    key: "getIntegrityForCacheKey",
                    value: function (e) {
                        return this._cacheKeysToIntegrities.get(e)
                    }
                }, {
                    key: "matchPrecache",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t instanceof Request ? t.url : t, !(n = this.getCacheKeyForURL(r))) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 5, self.caches.open(this.strategy.cacheName);
                                    case 5:
                                        return a = e.sent, e.abrupt("return", a.match(n));
                                    case 7:
                                        return e.abrupt("return", void 0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "createHandlerBoundToURL",
                    value: function (e) {
                        var t = this,
                            r = this.getCacheKeyForURL(e);
                        if (!r) throw new d("non-precached-url", {
                            url: e
                        });
                        return function (n) {
                            return n.request = new Request(e), n.params = Object.assign({
                                cacheKey: r
                            }, n.params), t.strategy.handle(n)
                        }
                    }
                }]), e
            }(),
            Ee = function () {
                return _e || (_e = new qe), _e
            };
        r(337);
        var Re, Se = "GET",
            Le = function (e) {
                return e && "object" === typeof e ? e : {
                    handle: e
                }
            },
            De = function () {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Se;
                    a(this, e), this.handler = Le(r), this.match = t, this.method = n
                }
                return n(e, [{
                    key: "setCatchHandler",
                    value: function (e) {
                        this.catchHandler = Le(e)
                    }
                }]), e
            }(),
            Oe = function (e) {
                i(r, e);
                var t = f(r);

                function r(e, n, s) {
                    a(this, r);
                    return t.call(this, (function (t) {
                        var r = t.url,
                            n = e.exec(r.href);
                        if (n && (r.origin === location.origin || 0 === n.index)) return n.slice(1)
                    }), n, s)
                }
                return n(r)
            }(De),
            Te = function () {
                function e() {
                    a(this, e), this._routes = new Map, this._defaultHandlerMap = new Map
                }
                return n(e, [{
                    key: "routes",
                    get: function () {
                        return this._routes
                    }
                }, {
                    key: "addFetchListener",
                    value: function () {
                        var e = this;
                        self.addEventListener("fetch", (function (t) {
                            var r = t.request,
                                n = e.handleRequest({
                                    request: r,
                                    event: t
                                });
                            n && t.respondWith(n)
                        }))
                    }
                }, {
                    key: "addCacheListener",
                    value: function () {
                        var e = this;
                        self.addEventListener("message", (function (t) {
                            if (t.data && "CACHE_URLS" === t.data.type) {
                                var r = t.data.payload;
                                0;
                                var n = Promise.all(r.urlsToCache.map((function (r) {
                                    "string" === typeof r && (r = [r]);
                                    var n = l(Request, de(r));
                                    return e.handleRequest({
                                        request: n,
                                        event: t
                                    })
                                })));
                                t.waitUntil(n), t.ports && t.ports[0] && n.then((function () {
                                    return t.ports[0].postMessage(!0)
                                }))
                            }
                        }))
                    }
                }, {
                    key: "handleRequest",
                    value: function (e) {
                        var t = this,
                            r = e.request,
                            n = e.event;
                        var a = new URL(r.url, location.href);
                        if (a.protocol.startsWith("http")) {
                            var s = a.origin === location.origin,
                                i = this.findMatchingRoute({
                                    event: n,
                                    request: r,
                                    sameOrigin: s,
                                    url: a
                                }),
                                u = i.params,
                                c = i.route,
                                o = c && c.handler;
                            0;
                            var h = r.method;
                            if (!o && this._defaultHandlerMap.has(h) && (o = this._defaultHandlerMap.get(h)), o) {
                                var f;
                                0;
                                try {
                                    f = o.handle({
                                        url: a,
                                        request: r,
                                        event: n,
                                        params: u
                                    })
                                } catch (p) {
                                    f = Promise.reject(p)
                                }
                                var l = c && c.catchHandler;
                                return f instanceof Promise && (this._catchHandler || l) && (f = f.catch(function () {
                                    var e = R(q().mark((function e(s) {
                                        return q().wrap((function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!l) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    return e.prev = 2, e.next = 5, l.handle({
                                                        url: a,
                                                        request: r,
                                                        event: n,
                                                        params: u
                                                    });
                                                case 5:
                                                    return e.abrupt("return", e.sent);
                                                case 8:
                                                    e.prev = 8, e.t0 = e.catch(2), e.t0 instanceof Error && (s = e.t0);
                                                case 11:
                                                    if (!t._catchHandler) {
                                                        e.next = 14;
                                                        break
                                                    }
                                                    return e.abrupt("return", t._catchHandler.handle({
                                                        url: a,
                                                        request: r,
                                                        event: n
                                                    }));
                                                case 14:
                                                    throw s;
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [2, 8]
                                        ])
                                    })));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }())), f
                            }
                        }
                    }
                }, {
                    key: "findMatchingRoute",
                    value: function (e) {
                        var t, r = e.url,
                            n = e.sameOrigin,
                            a = e.request,
                            s = e.event,
                            i = D(this._routes.get(a.method) || []);
                        try {
                            for (i.s(); !(t = i.n()).done;) {
                                var u = t.value,
                                    c = void 0,
                                    o = u.match({
                                        url: r,
                                        sameOrigin: n,
                                        request: a,
                                        event: s
                                    });
                                if (o) return c = o, (Array.isArray(c) && 0 === c.length || o.constructor === Object && 0 === Object.keys(o).length || "boolean" === typeof o) && (c = void 0), {
                                    route: u,
                                    params: c
                                }
                            }
                        } catch (h) {
                            i.e(h)
                        } finally {
                            i.f()
                        }
                        return {}
                    }
                }, {
                    key: "setDefaultHandler",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se;
                        this._defaultHandlerMap.set(t, Le(e))
                    }
                }, {
                    key: "setCatchHandler",
                    value: function (e) {
                        this._catchHandler = Le(e)
                    }
                }, {
                    key: "registerRoute",
                    value: function (e) {
                        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
                    }
                }, {
                    key: "unregisterRoute",
                    value: function (e) {
                        if (!this._routes.has(e.method)) throw new d("unregister-route-but-not-found-with-method", {
                            method: e.method
                        });
                        var t = this._routes.get(e.method).indexOf(e);
                        if (!(t > -1)) throw new d("unregister-route-route-not-registered");
                        this._routes.get(e.method).splice(t, 1)
                    }
                }]), e
            }(),
            Ce = function () {
                return Re || ((Re = new Te).addFetchListener(), Re.addCacheListener()), Re
            };

        function Ne(e, t, r) {
            var n;
            if ("string" === typeof e) {
                var a = new URL(e, location.href);
                n = new De((function (e) {
                    return e.url.href === a.href
                }), t, r)
            } else if (e instanceof RegExp) n = new Oe(e, t, r);
            else if ("function" === typeof e) n = new De(e, t, r);
            else {
                if (!(e instanceof De)) throw new d("unsupported-route-type", {
                    moduleName: "workbox-routing",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
                n = e
            }
            return Ce().registerRoute(n), n
        }

        function Pe(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = function () {
                    var r = a[n];
                    t.some((function (e) {
                        return e.test(r)
                    })) && e.searchParams.delete(r)
                }, n = 0, a = de(e.searchParams.keys()); n < a.length; n++) r();
            return e
        }
        var Ie = q().mark(je);

        function je(e) {
            var t, r, n, a, s, i, u, c, o, h, f, l, p, v, d, y, m = arguments;
            return q().wrap((function (x) {
                for (;;) switch (x.prev = x.next) {
                    case 0:
                        return t = m.length > 1 && void 0 !== m[1] ? m[1] : {}, r = t.ignoreURLParametersMatching, n = void 0 === r ? [/^utm_/, /^fbclid$/] : r, a = t.directoryIndex, s = void 0 === a ? "index.html" : a, i = t.cleanURLs, u = void 0 === i || i, c = t.urlManipulation, (o = new URL(e, location.href)).hash = "", x.next = 5, o.href;
                    case 5:
                        return h = Pe(o, n), x.next = 8, h.href;
                    case 8:
                        if (!s || !h.pathname.endsWith("/")) {
                            x.next = 13;
                            break
                        }
                        return (f = new URL(h.href)).pathname += s, x.next = 13, f.href;
                    case 13:
                        if (!u) {
                            x.next = 18;
                            break
                        }
                        return (l = new URL(h.href)).pathname += ".html", x.next = 18, l.href;
                    case 18:
                        if (!c) {
                            x.next = 37;
                            break
                        }
                        p = c({
                            url: o
                        }), v = D(p), x.prev = 21, v.s();
                    case 23:
                        if ((d = v.n()).done) {
                            x.next = 29;
                            break
                        }
                        return y = d.value, x.next = 27, y.href;
                    case 27:
                        x.next = 23;
                        break;
                    case 29:
                        x.next = 34;
                        break;
                    case 31:
                        x.prev = 31, x.t0 = x.catch(21), v.e(x.t0);
                    case 34:
                        return x.prev = 34, v.f(), x.finish(34);
                    case 37:
                    case "end":
                        return x.stop()
                }
            }), Ie, null, [
                [21, 31, 34, 37]
            ])
        }
        var Ue = function (e) {
            i(r, e);
            var t = f(r);

            function r(e, n) {
                a(this, r);
                return t.call(this, (function (t) {
                    var r, a = t.request,
                        s = e.getURLsToCacheKeys(),
                        i = D(je(a.url, n));
                    try {
                        for (i.s(); !(r = i.n()).done;) {
                            var u = r.value,
                                c = s.get(u);
                            if (c) return {
                                cacheKey: c,
                                integrity: e.getIntegrityForCacheKey(c)
                            }
                        }
                    } catch (o) {
                        i.e(o)
                    } finally {
                        i.f()
                    }
                }), e.strategy)
            }
            return n(r)
        }(De);
        var Ae, Ke = {
                cacheWillUpdate: function () {
                    var e = R(q().mark((function e(t) {
                        var r;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (200 !== (r = t.response).status && 0 !== r.status) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 3:
                                    return e.abrupt("return", null);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            },
            Me = function (e) {
                i(r, e);
                var t = f(r);

                function r() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, r), (e = t.call(this, n)).plugins.some((function (e) {
                        return "cacheWillUpdate" in e
                    })) || e.plugins.unshift(Ke), e._networkTimeoutSeconds = n.networkTimeoutSeconds || 0, e
                }
                return n(r, [{
                    key: "_handle",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s, i, u, c, o, h;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = [], a = [], this._networkTimeoutSeconds && (i = this._getTimeoutPromise({
                                            request: t,
                                            logs: n,
                                            handler: r
                                        }), u = i.id, c = i.promise, s = u, a.push(c)), o = this._getNetworkPromise({
                                            timeoutId: s,
                                            request: t,
                                            logs: n,
                                            handler: r
                                        }), a.push(o), e.next = 8, r.waitUntil(R(q().mark((function e() {
                                            return q().wrap((function (e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, r.waitUntil(Promise.race(a));
                                                    case 2:
                                                        if (e.t0 = e.sent, e.t0) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 6, o;
                                                    case 6:
                                                        e.t0 = e.sent;
                                                    case 7:
                                                        return e.abrupt("return", e.t0);
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))());
                                    case 8:
                                        if (h = e.sent) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new d("no-response", {
                                            url: t.url
                                        });
                                    case 12:
                                        return e.abrupt("return", h);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_getTimeoutPromise",
                    value: function (e) {
                        var t, r = this,
                            n = e.request,
                            a = (e.logs, e.handler),
                            s = new Promise((function (e) {
                                var s = function () {
                                    var t = R(q().mark((function t() {
                                        return q().wrap((function (t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.t0 = e, t.next = 4, a.cacheMatch(n);
                                                case 4:
                                                    t.t1 = t.sent, (0, t.t0)(t.t1);
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function () {
                                        return t.apply(this, arguments)
                                    }
                                }();
                                t = setTimeout(s, 1e3 * r._networkTimeoutSeconds)
                            }));
                        return {
                            promise: s,
                            id: t
                        }
                    }
                }, {
                    key: "_getNetworkPromise",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a, s, i;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.timeoutId, n = t.request, t.logs, a = t.handler, e.prev = 1, e.next = 4, a.fetchAndCachePut(n);
                                    case 4:
                                        i = e.sent, e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), e.t0 instanceof Error && (s = e.t0);
                                    case 10:
                                        if (r && clearTimeout(r), !s && i) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 15, a.cacheMatch(n);
                                    case 15:
                                        i = e.sent;
                                    case 17:
                                        return e.abrupt("return", i);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 7]
                            ])
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), r
            }(we),
            Be = function (e) {
                i(r, e);
                var t = f(r);

                function r() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, r), (e = t.call(this, n))._networkTimeoutSeconds = n.networkTimeoutSeconds || 0, e
                }
                return n(r, [{
                    key: "_handle",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s, i;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = void 0, e.prev = 2, s = [r.fetch(t)], this._networkTimeoutSeconds && (i = K(1e3 * this._networkTimeoutSeconds), s.push(i)), e.next = 7, Promise.race(s);
                                    case 7:
                                        if (a = e.sent) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("Timed out the network response after " + "".concat(this._networkTimeoutSeconds, " seconds."));
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), e.t0 instanceof Error && (n = e.t0);
                                    case 15:
                                        if (a) {
                                            e.next = 18;
                                            break
                                        }
                                        throw new d("no-response", {
                                            url: t.url,
                                            error: n
                                        });
                                    case 18:
                                        return e.abrupt("return", a);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 12]
                            ])
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), r
            }(we),
            Fe = function (e) {
                i(r, e);
                var t = f(r);

                function r() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, r), (e = t.call(this, n)).plugins.some((function (e) {
                        return "cacheWillUpdate" in e
                    })) || e.plugins.unshift(Ke), e
                }
                return n(r, [{
                    key: "_handle",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return [], n = r.fetchAndCachePut(t).catch((function () {})), r.waitUntil(n), e.next = 6, r.cacheMatch(t);
                                    case 6:
                                        if (!(a = e.sent)) {
                                            e.next = 11;
                                            break
                                        }
                                        0, e.next = 21;
                                        break;
                                    case 11:
                                        return e.prev = 12, e.next = 15, n;
                                    case 15:
                                        a = e.sent, e.next = 21;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(12), e.t0 instanceof Error && (s = e.t0);
                                    case 21:
                                        if (a) {
                                            e.next = 24;
                                            break
                                        }
                                        throw new d("no-response", {
                                            url: t.url,
                                            error: s
                                        });
                                    case 24:
                                        return e.abrupt("return", a);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [12, 18]
                            ])
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), r
            }(we),
            We = (r(642), "requests"),
            He = "queueName",
            Ge = function () {
                function e() {
                    a(this, e), this._db = null
                }
                return n(e, [{
                    key: "addEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return r = e.sent, n = r.transaction(We, "readwrite", {
                                            durability: "relaxed"
                                        }), e.next = 6, n.store.add(t);
                                    case 6:
                                        return e.next = 8, n.done;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getFirstEntryId",
                    value: function () {
                        var e = R(q().mark((function e() {
                            var t, r;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return t = e.sent, e.next = 5, t.transaction(We).store.openCursor();
                                    case 5:
                                        return r = e.sent, e.abrupt("return", null === r || void 0 === r ? void 0 : r.value.id);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getAllEntriesByQueueName",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return r = e.sent, e.next = 5, r.getAllFromIndex(We, He, IDBKeyRange.only(t));
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n || new Array);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getEntryCountByQueueName",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return r = e.sent, e.abrupt("return", r.countFromIndex(We, He, IDBKeyRange.only(t)));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "deleteEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return r = e.sent, e.next = 5, r.delete(We, t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getFirstEntryByQueueName",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getEndEntryFromIndex(IDBKeyRange.only(t), "next");
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getLastEntryByQueueName",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getEndEntryFromIndex(IDBKeyRange.only(t), "prev");
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getEndEntryFromIndex",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getDb();
                                    case 2:
                                        return n = e.sent, e.next = 5, n.transaction(We).store.index(He).openCursor(t, r);
                                    case 5:
                                        return a = e.sent, e.abrupt("return", null === a || void 0 === a ? void 0 : a.value);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getDb",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._db) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, ae("workbox-background-sync", 3, {
                                            upgrade: this._upgradeDb
                                        });
                                    case 3:
                                        this._db = e.sent;
                                    case 4:
                                        return e.abrupt("return", this._db);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_upgradeDb",
                    value: function (e, t) {
                        t > 0 && t < 3 && e.objectStoreNames.contains(We) && e.deleteObjectStore(We), e.createObjectStore(We, {
                            autoIncrement: !0,
                            keyPath: "id"
                        }).createIndex(He, He, {
                            unique: !1
                        })
                    }
                }]), e
            }(),
            Qe = function () {
                function e(t) {
                    a(this, e), this._queueName = t, this._queueDb = new Ge
                }
                return n(e, [{
                    key: "pushEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return delete t.id, t.queueName = this._queueName, e.next = 5, this._queueDb.addEntry(t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "unshiftEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, this._queueDb.getFirstEntryId();
                                    case 3:
                                        return (r = e.sent) ? t.id = r - 1 : delete t.id, t.queueName = this._queueName, e.next = 8, this._queueDb.addEntry(t);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "popEntry",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = this, e.next = 3, this._queueDb.getLastEntryByQueueName(this._queueName);
                                    case 3:
                                        return e.t1 = e.sent, e.abrupt("return", e.t0._removeEntry.call(e.t0, e.t1));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "shiftEntry",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = this, e.next = 3, this._queueDb.getFirstEntryByQueueName(this._queueName);
                                    case 3:
                                        return e.t1 = e.sent, e.abrupt("return", e.t0._removeEntry.call(e.t0, e.t1));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getAll",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._queueDb.getAllEntriesByQueueName(this._queueName);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "size",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._queueDb.getEntryCountByQueueName(this._queueName);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "deleteEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._queueDb.deleteEntry(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_removeEntry",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, this.deleteEntry(t.id);
                                    case 3:
                                        return e.abrupt("return", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }(),
            Ve = ["method", "referrer", "referrerPolicy", "mode", "credentials", "cache", "redirect", "integrity", "keepalive"],
            $e = function () {
                function e(t) {
                    a(this, e), "navigate" === t.mode && (t.mode = "same-origin"), this._requestData = t
                }
                return n(e, [{
                    key: "toObject",
                    value: function () {
                        var e = Object.assign({}, this._requestData);
                        return e.headers = Object.assign({}, this._requestData.headers), e.body && (e.body = e.body.slice(0)), e
                    }
                }, {
                    key: "toRequest",
                    value: function () {
                        return new Request(this._requestData.url, this._requestData)
                    }
                }, {
                    key: "clone",
                    value: function () {
                        return new e(this.toObject())
                    }
                }], [{
                    key: "fromRequest",
                    value: function () {
                        var t = R(q().mark((function t(r) {
                            var n, a, s, i, u, c, o, h, f;
                            return q().wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = {
                                                url: r.url,
                                                headers: {}
                                            }, "GET" === r.method) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 4, r.clone().arrayBuffer();
                                    case 4:
                                        n.body = t.sent;
                                    case 5:
                                        a = D(r.headers.entries());
                                        try {
                                            for (a.s(); !(s = a.n()).done;) i = pe(s.value, 2), u = i[0], c = i[1], n.headers[u] = c
                                        } catch (l) {
                                            a.e(l)
                                        } finally {
                                            a.f()
                                        }
                                        o = D(Ve);
                                        try {
                                            for (o.s(); !(h = o.n()).done;) f = h.value, void 0 !== r[f] && (n[f] = r[f])
                                        } catch (l) {
                                            o.e(l)
                                        } finally {
                                            o.f()
                                        }
                                        return t.abrupt("return", new e(n));
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), e
            }(),
            ze = "workbox-background-sync",
            Ye = new Set,
            Je = function (e) {
                var t = {
                    request: new $e(e.requestData).toRequest(),
                    timestamp: e.timestamp
                };
                return e.metadata && (t.metadata = e.metadata), t
            },
            Xe = function () {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = r.forceSyncFallback,
                        s = r.onSync,
                        i = r.maxRetentionTime;
                    if (a(this, e), this._syncInProgress = !1, this._requestsAddedDuringSync = !1, Ye.has(t)) throw new d("duplicate-queue-name", {
                        name: t
                    });
                    Ye.add(t), this._name = t, this._onSync = s || this.replayRequests, this._maxRetentionTime = i || 10080, this._forceSyncFallback = Boolean(n), this._queueStore = new Qe(this._name), this._addSyncListener()
                }
                return n(e, [{
                    key: "name",
                    get: function () {
                        return this._name
                    }
                }, {
                    key: "pushRequest",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, this._addRequest(t, "push");
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "unshiftRequest",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, this._addRequest(t, "unshift");
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "popRequest",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this._removeRequest("pop"));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "shiftRequest",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this._removeRequest("shift"));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getAll",
                    value: function () {
                        var e = R(q().mark((function e() {
                            var t, r, n, a, s, i, u;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._queueStore.getAll();
                                    case 2:
                                        t = e.sent, r = Date.now(), n = [], a = D(t), e.prev = 6, a.s();
                                    case 8:
                                        if ((s = a.n()).done) {
                                            e.next = 19;
                                            break
                                        }
                                        if (i = s.value, u = 60 * this._maxRetentionTime * 1e3, !(r - i.timestamp > u)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 14, this._queueStore.deleteEntry(i.id);
                                    case 14:
                                        e.next = 17;
                                        break;
                                    case 16:
                                        n.push(Je(i));
                                    case 17:
                                        e.next = 8;
                                        break;
                                    case 19:
                                        e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21, e.t0 = e.catch(6), a.e(e.t0);
                                    case 24:
                                        return e.prev = 24, a.f(), e.finish(24);
                                    case 27:
                                        return e.abrupt("return", n);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [6, 21, 24, 27]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "size",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._queueStore.size();
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_addRequest",
                    value: function () {
                        var e = R(q().mark((function e(t, r) {
                            var n, a, s, i, u, c;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.request, a = t.metadata, s = t.timestamp, i = void 0 === s ? Date.now() : s, e.next = 3, $e.fromRequest(n.clone());
                                    case 3:
                                        u = e.sent, c = {
                                            requestData: u.toObject(),
                                            timestamp: i
                                        }, a && (c.metadata = a), e.t0 = r, e.next = "push" === e.t0 ? 9 : "unshift" === e.t0 ? 12 : 15;
                                        break;
                                    case 9:
                                        return e.next = 11, this._queueStore.pushEntry(c);
                                    case 11:
                                    case 14:
                                        return e.abrupt("break", 15);
                                    case 12:
                                        return e.next = 14, this._queueStore.unshiftEntry(c);
                                    case 15:
                                        if (!this._syncInProgress) {
                                            e.next = 20;
                                            break
                                        }
                                        this._requestsAddedDuringSync = !0, e.next = 22;
                                        break;
                                    case 20:
                                        return e.next = 22, this.registerSync();
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_removeRequest",
                    value: function () {
                        var e = R(q().mark((function e(t) {
                            var r, n, a;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = Date.now(), e.t0 = t, e.next = "pop" === e.t0 ? 4 : "shift" === e.t0 ? 8 : 12;
                                        break;
                                    case 4:
                                        return e.next = 6, this._queueStore.popEntry();
                                    case 6:
                                    case 10:
                                        return n = e.sent, e.abrupt("break", 12);
                                    case 8:
                                        return e.next = 10, this._queueStore.shiftEntry();
                                    case 12:
                                        if (!n) {
                                            e.next = 19;
                                            break
                                        }
                                        if (a = 60 * this._maxRetentionTime * 1e3, !(r - n.timestamp > a)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return", this._removeRequest(t));
                                    case 16:
                                        return e.abrupt("return", Je(n));
                                    case 19:
                                        return e.abrupt("return", void 0);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "replayRequests",
                    value: function () {
                        var e = R(q().mark((function e() {
                            var t;
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.shiftRequest();
                                    case 2:
                                        if (!(t = e.sent)) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 3, e.next = 6, fetch(t.request.clone());
                                    case 6:
                                        0, e.next = 15;
                                        break;
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(3), e.next = 13, this.unshiftRequest(t);
                                    case 13:
                                        throw new d("queue-replay-failed", {
                                            name: this._name
                                        });
                                    case 15:
                                        e.next = 0;
                                        break;
                                    case 17:
                                        0;
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 9]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "registerSync",
                    value: function () {
                        var e = R(q().mark((function e() {
                            return q().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!("sync" in self.registration) || this._forceSyncFallback) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, self.registration.sync.register("".concat(ze, ":").concat(this._name));
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 6]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_addSyncListener",
                    value: function () {
                        var e = this;
                        "sync" in self.registration && !this._forceSyncFallback ? self.addEventListener("sync", (function (t) {
                            if (t.tag === "".concat(ze, ":").concat(e._name)) {
                                0;
                                var r = function () {
                                    var r = R(q().mark((function r() {
                                        var n;
                                        return q().wrap((function (r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return e._syncInProgress = !0, r.prev = 1, r.next = 4, e._onSync({
                                                        queue: e
                                                    });
                                                case 4:
                                                    r.next = 11;
                                                    break;
                                                case 6:
                                                    if (r.prev = 6, r.t0 = r.catch(1), !(r.t0 instanceof Error)) {
                                                        r.next = 11;
                                                        break
                                                    }
                                                    throw n = r.t0;
                                                case 11:
                                                    if (r.prev = 11, !e._requestsAddedDuringSync || n && !t.lastChance) {
                                                        r.next = 15;
                                                        break
                                                    }
                                                    return r.next = 15, e.registerSync();
                                                case 15:
                                                    return e._syncInProgress = !1, e._requestsAddedDuringSync = !1, r.finish(11);
                                                case 18:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r, null, [
                                            [1, 6, 11, 18]
                                        ])
                                    })));
                                    return function () {
                                        return r.apply(this, arguments)
                                    }
                                }();
                                t.waitUntil(r())
                            }
                        })) : this._onSync({
                            queue: this
                        })
                    }
                }], [{
                    key: "_queueNames",
                    get: function () {
                        return Ye
                    }
                }]), e
            }(),
            Ze = n((function e(t, r) {
                var n = this;
                a(this, e), this.fetchDidFail = function () {
                    var e = R(q().mark((function e(t) {
                        var r;
                        return q().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.request, e.next = 3, n._queue.pushRequest({
                                        request: r
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), this._queue = new Xe(t, r)
            })),
            et = (r(988), "workbox-google-analytics"),
            tt = "www.google-analyt1ics.com",
            rt = "www.googletagma1nager.com",
            nt = /^\/(\w+\/)?collect/,
            at = function (e) {
                return function () {
                    var t = R(q().mark((function t(r) {
                        var n, a, s, i, u, c, o, h, f, l, p, v, d;
                        return q().wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = r.queue;
                                case 1:
                                    return t.next = 3, n.shiftRequest();
                                case 3:
                                    if (!(a = t.sent)) {
                                        t.next = 35;
                                        break
                                    }
                                    if (i = (s = a).request, u = s.timestamp, c = new URL(i.url), t.prev = 6, "POST" !== i.method) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.t1 = URLSearchParams, t.next = 11, i.clone().text();
                                case 11:
                                    t.t2 = t.sent, t.t0 = new t.t1(t.t2), t.next = 16;
                                    break;
                                case 15:
                                    t.t0 = c.searchParams;
                                case 16:
                                    if (o = t.t0, h = u - (Number(o.get("qt")) || 0), f = Date.now() - h, o.set("qt", String(f)), e.parameterOverrides)
                                        for (l = 0, p = Object.keys(e.parameterOverrides); l < p.length; l++) v = p[l], d = e.parameterOverrides[v], o.set(v, d);
                                    return "function" === typeof e.hitFilter && e.hitFilter.call(null, o), t.next = 24, fetch(new Request(c.origin + c.pathname, {
                                        body: o.toString(),
                                        method: "POST",
                                        mode: "cors",
                                        credentials: "omit",
                                        headers: {
                                            "Content-Type": "text/plain"
                                        }
                                    }));
                                case 24:
                                    0, t.next = 33;
                                    break;
                                case 27:
                                    return t.prev = 27, t.t3 = t.catch(6), t.next = 31, n.unshiftRequest(a);
                                case 31:
                                    throw t.t3;
                                case 33:
                                    t.next = 1;
                                    break;
                                case 35:
                                    0;
                                case 36:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [6, 27]
                        ])
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            },
            st = function (e) {
                var t = function (e) {
                        var t = e.url;
                        return t.hostname === tt && nt.test(t.pathname)
                    },
                    r = new Be({
                        plugins: [e]
                    });
                return [new De(t, r, "GET"), new De(t, r, "POST")]
            },
            it = function (e) {
                var t = new Me({
                    cacheName: e
                });
                return new De((function (e) {
                    var t = e.url;
                    return t.hostname === tt && "/analytics.js" === t.pathname
                }), t, "GET")
            },
            ut = function (e) {
                var t = new Me({
                    cacheName: e
                });
                return new De((function (e) {
                    var t = e.url;
                    return t.hostname === rt && "/gtag/js" === t.pathname
                }), t, "GET")
            },
            ct = function (e) {
                var t = new Me({
                    cacheName: e
                });
                return new De((function (e) {
                    var t = e.url;
                    return t.hostname === rt && "/gtm.js" === t.pathname
                }), t, "GET")
            };
        ! function () {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = w(t.cacheName),
                n = new Ze(et, {
                    maxRetentionTime: 2880,
                    onSync: at(t)
                }),
                a = [ct(r), it(r), ut(r)].concat(de(st(n))),
                s = new Te,
                i = D(a);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    var u = e.value;
                    s.registerRoute(u)
                }
            } catch (c) {
                i.e(c)
            } finally {
                i.f()
            }
            s.addFetchListener()
        }(), self.addEventListener("activate", (function () {
                return self.clients.claim()
            })),
            function (e) {
                Ee().precache(e)
            }([{
                'revision': 'c82c3a40ee24e1eaa7777f77ec288e6b',
                'url': 'index.html'
            }, {
                'revision': null,
                'url': 'static/css/main.503caaae.css'
            }, {
                'revision': null,
                'url': 'static/js/124.022aeca2.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/394.105181e6.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/407.7707f0f1.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/539.b5863ae2.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/803.935feb41.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/827.2b99bf2a.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/883.a7ca2602.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/885.b4348f62.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/940.7abeab6f.chunk.js'
            }, {
                'revision': null,
                'url': 'static/js/main.7824847e.js'
            }, {
                'revision': null,
                'url': 'static/media/CinzelDecorative-Bold.4701e9921703cb64dfce.ttf'
            }, {
                'revision': null,
                'url': 'static/media/Ubuntu-Bold.fec2d0f1431a6114a6ce.ttf'
            }, {
                'revision': null,
                'url': 'static/media/Ubuntu-Regular.1cbb1b79a23478cc89ad.ttf'
            }, {
                'revision': null,
                'url': 'static/media/logo_bg_dark.2d3d608e51dcb1446407.webp'
            }, {
                'revision': null,
                'url': 'static/media/logo_bg_dark.2e5faa58f18c0b5a94e2.png'
            }, {
                'revision': null,
                'url': 'static/media/logo_bg_light.7ae1415dad19d5d9f9af.png'
            }, {
                'revision': null,
                'url': 'static/media/logo_bg_light.ea7c81f45702ec6f8bb2.webp'
            }]),
            function (e) {
                var t = Ee();
                Ne(new Ue(t, e))
            }(Ae);
        var ot, ht = new RegExp("/[^/?]+\\.[^/]+$");
        Ne((function (e) {
            var t = e.request,
                r = e.url;
            return "navigate" === t.mode && (!r.pathname.startsWith("/_") && !r.pathname.match(ht))
        }), (ot = "index.html", Ee().createHandlerBoundToURL(ot))), Ne((function (e) {
            var t = e.url;
            return t.origin === self.location.origin && (t.pathname.endsWith(".png") || t.pathname.endsWith(".webp"))
        }), new Fe({
            cacheName: "images",
            plugins: [new ve({
                maxEntries: 50
            })]
        })), Ne((function (e) {
            var t = e.url;
            return t.origin === self.location.origin && t.pathname.endsWith(".css")
        }), new Fe({
            cacheName: "external-cache"
        })), self.addEventListener("message", (function (e) {
            e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
        }))
    }()
}();