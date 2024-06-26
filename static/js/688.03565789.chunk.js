"use strict";
(self.webpackChunkTheresmore = self.webpackChunkTheresmore || []).push([
  [688],
  {
    4688: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var s = n(5671),
        r = n(3144),
        o = n(9340),
        l = n(2882),
        i = n(7313),
        a = n(2126),
        c = n(7794),
        d = n(4254),
        p = n(1048),
        h = n(6934),
        f = n(1231),
        m = n(8982),
        x = n(3915),
        u = n(4862),
        g = n(7914),
        b = n(5339),
        v = n(6417),
        j = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, l.Z)(n);
          function n() {
            var e;
            (0, s.Z)(this, n);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleAdd = function () {
                e.props.owned ||
                  (!e.props.buildable && !e.props.selected) ||
                  e.props.MainStore.LegacyStore.selectLegacy(e.props.id);
              }),
              e
            );
          }
          return (
            (0, r.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.MainStore.ReqGenStore.reqTooltipData(
                      "legacy",
                      this.props.req
                    ),
                    t = this.props.MainStore.ReqGenStore.genTooltipData(
                      this.props.gen
                    ),
                    n = "btn btn-dark";
                  return (
                    this.props.owned
                      ? (n += " btn-off btn-cap")
                      : this.props.selected
                      ? (n +=
                          " !text-white !bg-blue-600 hover:!bg-blue-700 focus:!bg-blue-800 !border-transparent")
                      : this.props.buildable || (n += " btn-off"),
                    (0, v.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, v.jsx)(g.a, {
                        content: (0, v.jsx)(b.Z, {
                          id: this.props.id,
                          title: (0, m.K)("leg_" + this.props.id),
                          description: (0, m.K)(
                            "leg_" + this.props.id + "_description"
                          ),
                          owned: this.props.owned,
                          reqTooltipData: e,
                          genTooltipData: t,
                          prefix: "leg",
                        }),
                        className: "!max-w-[300px]",
                        touch: ["hold", 500],
                        placement: u.tq ? "top" : "bottom",
                        popperOptions: {
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements: [
                                  "bottom",
                                  "top",
                                  "right",
                                  "left",
                                ],
                              },
                            },
                          ],
                        },
                        children: (0, v.jsx)("button", {
                          type: "button",
                          className: n,
                          onClick: this.handleAdd,
                          children: (0, v.jsx)("div", {
                            className: "text-truncate",
                            children: (0, m.K)("leg_" + this.props.id),
                          }),
                        }),
                      }),
                    })
                  );
                },
              },
            ]),
            n
          );
        })(i.Component),
        y = (0, a.f3)("MainStore")((0, a.Pi)(j)),
        S = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, l.Z)(n);
          function n() {
            var e;
            (0, s.Z)(this, n);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleClose =
                function () {
                  e.props.MainStore.LegacyStore.toggleSoftReset();
                }),
              (e.handleSoftReset1 = function () {
                e.props.MainStore.showConfirm(
                  "(1/3)",
                  "soft_reset_confirm_1",
                  e.handleSoftReset2
                );
              }),
              (e.handleSoftReset2 = function () {
                e.props.MainStore.showConfirm(
                  "(2/3)",
                  "soft_reset_confirm_2",
                  e.handleSoftReset3
                );
              }),
              (e.handleSoftReset3 = function () {
                e.props.MainStore.showConfirm(
                  "(3/3)",
                  "soft_reset_confirm_3",
                  e.handleSoftReset
                );
              }),
              (e.handleSoftReset = function () {
                e.props.MainStore.confirmCancelFunc(),
                  e.props.MainStore.softReset();
              }),
              e
            );
          }
          return (
            (0, r.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.MainStore.softResetInProgress,
                    t = this.props.MainStore.run,
                    n = t.flag,
                    s = t.flagb,
                    r = this.props.MainStore.LegacyStore,
                    o = r.softResetTitle,
                    l = r.softResetDescription,
                    a = r.softResetPreDescription,
                    u = r.showSoftReset,
                    g = r.legacies,
                    b = r.buildableLegacies,
                    j = r.ownedLegacies,
                    S = r.selectedLegacies,
                    A = r.legacyAvailable,
                    N = this.props.MainStore.ResourcesStore,
                    w = N.relic,
                    k = N.tome_wisdom,
                    R = N.coin,
                    _ = N.gem,
                    C = N.titan_gift;
                  var M = !(e || 2 === n || 2 === s);
                  return (0, v.jsx)(c.u.Root, {
                    show: u,
                    as: i.Fragment,
                    children: (0, v.jsxs)(d.V, {
                      as: "div",
                      className: "relative z-50",
                      onClose: M
                        ? this.handleClose
                        : function () {
                            return null;
                          },
                      static: M,
                      children: [
                        (0, v.jsx)(h.Z, {}),
                        (0, v.jsx)("div", {
                          className: "fixed z-10 inset-0 overflow-y-auto",
                          children: (0, v.jsx)("div", {
                            className:
                              "flex items-center justify-center min-h-full p-4 text-center lg:p-0",
                            children: (0, v.jsx)(c.u.Child, {
                              as: i.Fragment,
                              enter: "ease-out duration-300",
                              enterFrom: "opacity-0 translate-y-4",
                              enterTo: "opacity-100 translate-y-0",
                              leave: "ease-in duration-200",
                              leaveFrom: "opacity-100 translate-y-0",
                              leaveTo: "opacity-0 translate-y-4",
                              children: (0, v.jsxs)(d.V.Panel, {
                                className:
                                  "modal-container lg:my-8 lg:max-w-4xl lg:pt-6",
                                children: [
                                  M
                                    ? (0, v.jsx)(p.Z, {
                                        onClick: this.handleClose,
                                      })
                                    : null,
                                  (0, v.jsx)("div", {
                                    children: (0, v.jsxs)("div", {
                                      className: "mt-0",
                                      children: [
                                        (0, v.jsx)(d.V.Title, {
                                          as: "h3",
                                          className: "modal-title",
                                          children: o,
                                        }),
                                        e
                                          ? (0, v.jsx)("div", {
                                              className:
                                                "px-4 pb-4 lg:px-6 lg:pb-6 mt-6 font-game",
                                              children: (0, v.jsx)(f.Z, {
                                                text:
                                                  (0, m.K)(
                                                    "soft_reset_in_progress"
                                                  ) + " . . .",
                                                type: "info",
                                              }),
                                            })
                                          : (0, v.jsxs)(v.Fragment, {
                                              children: [
                                                a.length > 0
                                                  ? (0, v.jsx)("div", {
                                                      className:
                                                        "flex flex-col m-6 text-xl font-bold leading-10",
                                                      children: (0, v.jsx)(
                                                        f.Z,
                                                        {
                                                          text: a.join(" "),
                                                          type:
                                                            2 === n || 2 === s
                                                              ? "war"
                                                              : "victory",
                                                        }
                                                      ),
                                                    })
                                                  : null,
                                                (0, v.jsx)("div", {
                                                  className:
                                                    "flex flex-col m-6",
                                                  children: (0, v.jsx)(f.Z, {
                                                    text: l,
                                                    type: "info",
                                                    mobileIcon: !1,
                                                  }),
                                                }),
                                                (0, v.jsxs)("h3", {
                                                  className:
                                                    "text-center text-3xl font-bold",
                                                  children: [
                                                    (0, m.K)("legacy_points"),
                                                    ": ",
                                                    A.toLocaleString(),
                                                  ],
                                                }),
                                                w > 0
                                                  ? (0, v.jsxs)("h6", {
                                                      className:
                                                        "my-1 font-bold text-center",
                                                      children: [
                                                        (0, m.K)("res_relic"),
                                                        ": ",
                                                        w,
                                                      ],
                                                    })
                                                  : null,
                                                R > 0
                                                  ? (0, v.jsxs)("h6", {
                                                      className:
                                                        "my-1 font-bold text-center",
                                                      children: [
                                                        (0, m.K)("res_coin"),
                                                        ": ",
                                                        R,
                                                      ],
                                                    })
                                                  : null,
                                                k > 0
                                                  ? (0, v.jsxs)("h6", {
                                                      className:
                                                        "my-1 font-bold text-center",
                                                      children: [
                                                        (0, m.K)(
                                                          "res_tome_wisdom"
                                                        ),
                                                        ": ",
                                                        k,
                                                      ],
                                                    })
                                                  : null,
                                                _ > 0
                                                  ? (0, v.jsxs)("h6", {
                                                      className:
                                                        "my-1 font-bold text-center",
                                                      children: [
                                                        (0, m.K)("res_gem"),
                                                        ": ",
                                                        _,
                                                      ],
                                                    })
                                                  : null,
                                                C > 0
                                                  ? (0, v.jsxs)("h6", {
                                                      className:
                                                        "my-1 font-bold text-center",
                                                      children: [
                                                        (0, m.K)(
                                                          "res_titan_gift"
                                                        ),
                                                        ": ",
                                                        C,
                                                      ],
                                                    })
                                                  : null,
                                                g.length > 0
                                                  ? (0, v.jsx)("div", {
                                                      className: "p-6",
                                                      children: (0, v.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex flex-wrap min-w-full p-3 shadow rounded-lg lg:ring-1 ring-gray-300 dark:ring-mydark-200 bg-gray-100 dark:bg-mydark-600",
                                                          children: (0, v.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                "grid gap-3 grid-cols-fill-180 min-w-full",
                                                              children: g.map(
                                                                function (e) {
                                                                  var t =
                                                                      b.findIndex(
                                                                        function (
                                                                          t
                                                                        ) {
                                                                          return (
                                                                            t.id ===
                                                                            e.id
                                                                          );
                                                                        }
                                                                      ),
                                                                    n =
                                                                      -1 !== t,
                                                                    s =
                                                                      -1 !==
                                                                      (t =
                                                                        j.findIndex(
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return (
                                                                              t.id ===
                                                                              e.id
                                                                            );
                                                                          }
                                                                        )),
                                                                    r =
                                                                      S.includes(
                                                                        e.id
                                                                      );
                                                                  return (0,
                                                                  v.jsx)(
                                                                    y,
                                                                    {
                                                                      id: e.id,
                                                                      buildable:
                                                                        n,
                                                                      owned: s,
                                                                      selected:
                                                                        r,
                                                                      req: e.req,
                                                                      gen: e.gen,
                                                                    },
                                                                    "leg_" +
                                                                      e.id
                                                                  );
                                                                }
                                                              ),
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    })
                                                  : null,
                                                (0, v.jsx)("div", {
                                                  className:
                                                    "text-center mb-6 px-9 lg:px-0" +
                                                    (g.length > 0
                                                      ? ""
                                                      : " mt-6"),
                                                  children: (0, v.jsxs)(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      className:
                                                        "btn btn-red px-6 hover:!bg-amber-300 hover:text-red-600 dark:hover:!bg-amber-400 dark:hover:text-red-700",
                                                      onClick:
                                                        this.handleSoftReset1,
                                                      children: [
                                                        (0, v.jsx)("img", {
                                                          src: x,
                                                          style: {
                                                            width: "19px",
                                                            height: "19px",
                                                          },
                                                          className:
                                                            "icon mr-2 mt-[2px] lg:mt-[1px]",
                                                          alt: "",
                                                        }),
                                                        (0, m.K)("prestige"),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(i.Component),
        A = (0, a.f3)("MainStore")((0, a.Pi)(S));
    },
    3915: function (e) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABkUlEQVQ4y4WUP0tcURDFz13btVpjskQLS4uUNkKIol/AtPsZbLVVRMIWIhauKNjtx0hv8E+pCLLKCm7IYpNiBTH6S+G5cL28t04zb86cOTP335MSA4L9J2ATOAMGvNqD402grmGWCO3x1i6AU/vU9tO6N0JABeiYeA18LWk6B3TNu3NtyCeKQjtJYQWoGv+Sie4Yv8m7tZxo5aMD/WRpo7GJ/bbxvUj+aOA+Jfr7ONun+yQ3Yv/HuQ8VScvOtyLPpLakmRjbasCZJIUQno0d2K8IOLHyt6TrqrGXbLIYtxPugrEjAX8dzDvZKBHI7Yf5i477FUlVN4lXIUhqSPouqeM42qOkJeevjM3aj6WT9Qru1FE2zaCAc5tOdmm8DjQzbnjn1axJmnR4JWDdys/2Gwn5V9lkwFq2p00B4wkYE+fAdJkYMOn4X5KrxS67Jaf3UiI2kYnt5uu/K7gS74kB/I4a8Y2FEMJnSd1s84cegKReCKFe+BsqWHJuT+ZMAYeF/7OCI68BW75nPS+3D/wcVvcf9jL/QoHkFSUAAAAASUVORK5CYII=";
    },
  },
]);
