! function (t, e) {
  var s = function (t) {
    var e = {};

    function s(i) {
      if (e[i]) return e[i].exports;
      var n = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    return s.m = t, s.c = e, s.d = function (t, e, i) {
      s.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, s.r = function (t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, s.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return s.d(e, "a", e), e
    }, s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "", s(s.s = 449)
  }({
    24: function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var s = e.protocol + "//" + e.host,
          i = s + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var n, a = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e
          }).replace(/^'(.*)'$/, function (t, e) {
            return e
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (n = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? s + a : i + a.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
      }
    },
    25: function (t, e, s) {
      var i, n, a, r = {},
        o = (i = function () {
          return window && document && document.all && !window.atob
        }, function () {
          return void 0 === n && (n = i.apply(this, arguments)), n
        }),
        l = (a = {}, function (t) {
          if ("function" == typeof t) return t();
          if (void 0 === a[t]) {
            var e = function (t) {
              return document.querySelector(t)
            }.call(this, t);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
              e = e.contentDocument.head
            } catch (t) {
              e = null
            }
            a[t] = e
          }
          return a[t]
        }),
        d = null,
        h = 0,
        c = [],
        u = s(24);

      function g(t, e) {
        for (var s = 0; s < t.length; s++) {
          var i = t[s],
            n = r[i.id];
          if (n) {
            n.refs++;
            for (var a = 0; a < n.parts.length; a++) n.parts[a](i.parts[a]);
            for (; a < i.parts.length; a++) n.parts.push(y(i.parts[a], e))
          } else {
            var o = [];
            for (a = 0; a < i.parts.length; a++) o.push(y(i.parts[a], e));
            r[i.id] = {
              id: i.id,
              refs: 1,
              parts: o
            }
          }
        }
      }

      function v(t, e) {
        for (var s = [], i = {}, n = 0; n < t.length; n++) {
          var a = t[n],
            r = e.base ? a[0] + e.base : a[0],
            o = {
              css: a[1],
              media: a[2],
              sourceMap: a[3]
            };
          i[r] ? i[r].parts.push(o) : s.push(i[r] = {
            id: r,
            parts: [o]
          })
        }
        return s
      }

      function f(t, e) {
        var s = l(t.insertInto);
        if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = c[c.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? s.insertBefore(e, i.nextSibling) : s.appendChild(e) : s.insertBefore(e, s.firstChild), c.push(e);
        else if ("bottom" === t.insertAt) s.appendChild(e);
        else {
          if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var n = l(t.insertInto + " " + t.insertAt.before);
          s.insertBefore(e, n)
        }
      }

      function m(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
      }

      function p(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", b(e, t.attrs), f(t, e), e
      }

      function b(t, e) {
        Object.keys(e).forEach(function (s) {
          t.setAttribute(s, e[s])
        })
      }

      function y(t, e) {
        var s, i, n, a, r, o;
        if (e.transform && t.css) {
          if (!(a = e.transform(t.css))) return function () {};
          t.css = a
        }
        if (e.singleton) {
          var l = h++;
          s = d || (d = p(e)), i = _.bind(null, s, l, !1), n = _.bind(null, s, l, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = e, o = document.createElement("link"), r.attrs.type = "text/css", r.attrs.rel = "stylesheet", b(o, r.attrs), f(r, o), s = o, i = function (t, e, s) {
          var i = s.css,
            n = s.sourceMap,
            a = void 0 === e.convertToAbsoluteUrls && n;
          (e.convertToAbsoluteUrls || a) && (i = u(i)), n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
          var r = new Blob([i], {
              type: "text/css"
            }),
            o = t.href;
          t.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
        }.bind(null, s, e), n = function () {
          m(s), s.href && URL.revokeObjectURL(s.href)
        }) : (s = p(e), i = function (t, e) {
          var s = e.css,
            i = e.media;
          if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = s;
          else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(s))
          }
        }.bind(null, s), n = function () {
          m(s)
        });
        return i(t),
          function (e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              i(t = e)
            } else n()
          }
      }
      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var s = v(t, e);
        return g(s, e),
          function (t) {
            for (var i = [], n = 0; n < s.length; n++) {
              var a = s[n];
              (o = r[a.id]).refs--, i.push(o)
            }
            t && g(v(t, e), e);
            for (n = 0; n < i.length; n++) {
              var o;
              if (0 === (o = i[n]).refs) {
                for (var l = 0; l < o.parts.length; l++) o.parts[l]();
                delete r[o.id]
              }
            }
          }
      };
      var x, k = (x = [], function (t, e) {
        return x[t] = e, x.filter(Boolean).join("\n")
      });

      function _(t, e, s, i) {
        var n = s ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = k(e, n);
        else {
          var a = document.createTextNode(n),
            r = t.childNodes;
          r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(a, r[e]) : t.appendChild(a)
        }
      }
    },
    26: function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var s = function (t, e) {
              var s, i = t[1] || "",
                n = t[3];
              if (!n) return i;
              if (e && "function" == typeof btoa) {
                var a = (s = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                  r = n.sources.map(function (t) {
                    return "/*# sourceURL=" + n.sourceRoot + t + " */"
                  });
                return [i].concat(r).concat([a]).join("\n")
              }
              return [i].join("\n")
            }(e, t);
            return e[2] ? "@media " + e[2] + "{" + s + "}" : s
          }).join("")
        }, e.i = function (t, s) {
          "string" == typeof t && (t = [
            [null, t, ""]
          ]);
          for (var i = {}, n = 0; n < this.length; n++) {
            var a = this[n][0];
            "number" == typeof a && (i[a] = !0)
          }
          for (n = 0; n < t.length; n++) {
            var r = t[n];
            "number" == typeof r[0] && i[r[0]] || (s && !r[2] ? r[2] = s : s && (r[2] = "(" + r[2] + ") and (" + s + ")"), e.push(r))
          }
        }, e
      }
    },
    444: function (t, e) {
      t.exports = "<label class=theme-settings-bg-item> <input type=radio> <span class=theme-settings-bg-name></span> </label> "
    },
    445: function (t, e) {
      t.exports = '<label class="theme-settings-theme-item custom-controls-stacked"> <input type=radio name=theme-settings-current-theme> <span class="d-block mr-auto"> <span class=theme-settings-theme-checkmark></span> &nbsp;&nbsp; <span class=theme-settings-theme-name></span> </span> <span class="theme-settings-theme-colors d-flex"></span> </label> '
    },
    446: function (t, e) {
      t.exports = '<div id=theme-settings> <a href=javascript:void(0) class=theme-settings-open-btn tabindex=-1></a> <h5 class="p-4 m-0 line-height-1 font-weight-bolder bg-light theme-settings-header"> SETTINGS <a href=javascript:void(0) class="theme-settings-close-btn font-weight-light px-4 py-2 text-dark" tabindex=-1>&times;</a> </h5> <div class="theme-settings-inner pt-4"> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-rtl"> <div class=media-body>RTL direction</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-material"> <div class=media-body>Material style</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <div class=theme-settings-layout> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> LAYOUT </h5> <label class="m-0 px-4 pb-3 d-block theme-settings-layoutPosition"> <select class="custom-select custom-select-sm d-block w-100"> <option value=static>Static</option> <option value=static-offcanvas>Static offcanvas</option> <option value=fixed>Fixed</option> <option value=fixed-offcanvas>Fixed offcanvas</option> </select> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutNavbarFixed"> <div class=media-body>Fixed navbar</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutFooterFixed"> <div class=media-body>Fixed footer</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutReversed"> <div class=media-body>Reversed</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> </div> <div class=theme-settings-navbarBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> NAVBAR BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-navbarBg-inner"></fieldset> </div> <div class=theme-settings-sidenavBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> SIDENAV BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-sidenavBg-inner"></fieldset> </div> <div class=theme-settings-footerBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> FOOTER BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-footerBg-inner"></fieldset> </div> <div class=theme-settings-themes> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> THEME </h5> <div class=theme-settings-themes-inner></div> </div> </div> </div> '
    },
    447: function (t, e, s) {
      (t.exports = s(26)(!1)).push([t.i, '#theme-settings{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-size:13px!important;position:fixed;top:0;right:0;height:100%;z-index:99999999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:230px;background:#fff;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.2);box-shadow:0 0 20px 0 rgba(0,0,0,.2);-webkit-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in;-webkit-transform:translateX(250px);-ms-transform:translateX(250px);transform:translateX(250px)}#theme-settings h5{position:relative;font-size:11px;font-weight:600}#theme-settings .theme-settings-header{font-size:11px}#theme-settings .disabled{color:#d1d2d3!important}#theme-settings.theme-settings-open{-webkit-transition-delay:.1s;-o-transition-delay:.1s;transition-delay:.1s;-webkit-transform:none!important;-ms-transform:none!important;transform:none!important}#theme-settings .theme-settings-open-btn{position:absolute;top:90px;left:0;z-index:-1;display:block;width:40px;height:40px;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#444;color:#fff!important;text-align:center;font-size:20px!important;line-height:40px;opacity:1;-webkit-transition:all .1s linear .2s;-o-transition:all .1s linear .2s;transition:all .1s linear .2s;-webkit-transform:translateX(-60px);-ms-transform:translateX(-60px);transform:translateX(-60px)}#theme-settings .theme-settings-open-btn:before{content:"";width:18px;height:18px;display:block;background-size:100% 100%;position:absolute;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BJREFUeNrUml1IFFEUx8fNh6jMkkjY2pDAaokksVrItGLXhQiUPiDIjOg58CmISPt4EyIK3yKQEKIPhKJeCnM/lMyHonop6CUKE01Eow+Mxe1/6AytSzvec+fOpH/4gei952NmnHvuuVOUzWYtF1oHDoGDIAHaFeddAntBD/NJOwJKQIM4GMjO1k8QVpgb5rG2ZkAaxHRikU6oY2eFNApqHObT38Yc5idArZcJOAVvKwO6QQNYyzTw7zIK8/skMRULn7gnoG6OMYvAMUZHvZLBAaHxKct7ffUygVIfEij1MoH9PiSwTzK4SLAORMBzHxKggLaDFyYTWMEG11v+6D0nMWXiEaJb+sbH4EmV4DWIS+7AHnAW9IExsBrEQNT6v+plvoByjuci6M9PgH6xy1oYSoPduY9QfAEFT6oHDbkJnDNkeAY8BCfABrAMLAYVoAl0gW+GfLXb1WiIK0K36gVbFOqXcnA9a0YhMthqwFAHCAgLw+a8slpHraoVppOuaO4piCMufafpf2AATGs+h8/AaRfP8R1wTXMuxZyyr8TmOTYahRRxcfVtVoIJod9RjtnK3y1lBEb6DQRvc1ngl2Lcas/NLSWo1rktuIUPDL7XJbZugVeFaqGbAkMvDSYgsdXtVMy9Exj6bDCB74Ld3lunBGYkewnD5UHAxKSwYG7QYPBLQYni2E1OCbQInG4zmIDE1vFCCVSBowJDTQYTkNiiGKvzW4sbwYjGQrbTwBpQBiY1FrKwvZC1gR+atcggKHaZQKemb4q5jQwkXRZUnS6Cb3HpOxHg9rYbnQJXuaUo0Ulww6XvHroKawxtaOhOVitc9SDoMuCPYg7am/qkvUk20JR6DO5zqT0CfvGaQW+5RnAALDHgK0WdFDuBqLQrPA9EMffltlVM3QU/lOQjqll9Ier7n+dbM86NrajCeYDXon7VU262reKLfIF3kkonNI1gOOu/htm3Y3yqzd0y3vBU+HTVP4AaMGGqhJ0Q1klu1awSvLQGHwRDPgQ/xK9gTzYRj3xIQORjPh7yTXqZQIkPCSz3MoGYYof6LpcNlQz9fE9xzy07UBGWv/Ug5fDuHgc7HOZHeEwhpdiHZ58a2ES5+sytYqdBlcLcKh47q0mr+7GH5Jj1XwpZfz63OcxL+xnFeR2g1vr7uc1H3QB+CzAA7A9pvcD5g+8AAAAASUVORK5CYII=");left:50%;top:50%;transform:translate(-50%,-50%);margin-left:2px}[dir=rtl] #theme-settings .theme-settings-open-btn{border-radius:0;border-top-right-radius:50%;border-bottom-right-radius:50%}[dir=rtl] #theme-settings .theme-settings-open-btn:before{margin-left:-2px}#theme-settings.theme-settings-open .theme-settings-open-btn{opacity:0;-webkit-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s;-webkit-transform:none!important;-ms-transform:none!important;transform:none!important}#theme-settings .theme-settings-close-btn{position:absolute;top:50%;right:0;display:block;font-size:20px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}#theme-settings>h5{flex:0 0 auto}#theme-settings .theme-settings-inner{position:relative;overflow:auto;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#theme-settings .theme-settings-inner>div:first-child>hr:first-of-type{display:none!important}#theme-settings .theme-settings-inner>div:first-child>h5:first-of-type{padding-top:0!important}#theme-settings .theme-settings-themes-inner{position:relative;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#theme-settings .theme-settings-theme-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center;-ms-flex-align:center;-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;padding:0 24px;width:100%;cursor:pointer}#theme-settings .theme-settings-theme-item input{position:absolute;z-index:-1;opacity:0}#theme-settings .theme-settings-theme-item input~span{opacity:.25;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}#theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark{display:inline-block;width:6px;height:12px;border-right:1px solid;border-bottom:1px solid;opacity:0;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}[dir=rtl] #theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark{border-right:none;border-left:1px solid;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#theme-settings .theme-settings-theme-item:hover input:not([disabled])~span,#theme-settings .theme-settings-theme-item input:checked:not([disabled])~span,#theme-settings .theme-settings-theme-item input:checked:not([disabled])~span .theme-settings-theme-checkmark{opacity:1}#theme-settings .theme-settings-theme-colors span{display:block;margin:0 1px;width:10px;height:10px;border-radius:50%;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.1) inset;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}#theme-settings.theme-settings-loading-theme .theme-settings-themes-inner,#theme-settings.theme-settings-loading .theme-settings-inner{opacity:.2}#theme-settings.theme-settings-loading-theme .theme-settings-themes-inner:after,#theme-settings.theme-settings-loading .theme-settings-inner:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:999;display:block}#theme-settings .theme-settings-bg-item.disabled,#theme-settings .theme-settings-navbarBg-inner[disabled] .theme-settings-bg-item,#theme-settings .theme-settings-sidenavBg-inner[disabled] .theme-settings-bg-item{opacity:.2;cursor:default}#theme-settings .theme-settings-bg-item{display:block;float:left;margin:3px;width:16px;height:16px;border-radius:2px;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.1) inset;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);cursor:pointer}#theme-settings .theme-settings-bg-item.active{-webkit-box-shadow:0 0 0 2px #000;box-shadow:0 0 0 2px #000}#theme-settings .theme-settings-bg-item input{position:absolute;visibility:hidden;clip:rect(0,0,0,0);pointer-events:none}.layout-sidenav-100vh #theme-settings{height:100vh}[dir=rtl] #theme-settings{right:auto;left:0;-webkit-transform:translateX(-250px);-ms-transform:translateX(-250px);transform:translateX(-250px)}[dir=rtl] #theme-settings .theme-settings-open-btn{right:0;left:auto;-webkit-transform:translateX(60px);-ms-transform:translateX(60px);transform:translateX(60px)}[dir=rtl] #theme-settings .theme-settings-close-btn{right:auto;left:0}[dir=rtl] #theme-settings .theme-settings-bg-item{float:right}', ""])
    },
    448: function (t, e, s) {
      var i = s(447);
      "string" == typeof i && (i = [
        [t.i, i, ""]
      ]);
      s(25)(i, {
        hmr: !1,
        transform: void 0,
        insertInto: void 0
      }), i.locals && (t.exports = i.locals)
    },
    449: function (t, e, s) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.ThemeSettings = void 0;
      var i = function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var i = e[s];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function (e, s, i) {
            return s && t(e.prototype, s), i && t(e, i), e
          }
        }(),
        n = o((o(s(448)), s(446))),
        a = o(s(445)),
        r = o(s(444));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var l = [{
          name: "theme-air",
          title: "Air",
          colors: {
            primary: "#3c97fe",
            navbar: "#f8f8f8",
            sidenav: "#f8f8f8"
          }
        }, {
          name: "theme-corporate",
          title: "Corporate",
          colors: {
            primary: "#26B4FF",
            navbar: "#fff",
            sidenav: "#2e323a"
          }
        }, {
          name: "theme-cotton",
          title: "Сotton",
          colors: {
            primary: "#e84c64",
            navbar: "#ffffff",
            sidenav: "#ffffff"
          }
        }, {
          name: "theme-gradient",
          title: "Gradient",
          colors: {
            primary: "#775cdc",
            navbar: "#ffffff",
            sidenav: "linear-gradient(to top, #4e54c8, #8c55e4)"
          }
        }, {
          name: "theme-paper",
          title: "Paper",
          colors: {
            primary: "#17b3a3",
            navbar: "#ffffff",
            sidenav: "#ffffff"
          }
        }, {
          name: "theme-shadow",
          title: "Shadow",
          colors: {
            primary: "#7b83ff",
            navbar: "#f8f8f8",
            sidenav: "#ececf9"
          }
        }, {
          name: "theme-soft",
          title: "Soft",
          colors: {
            primary: "#1cbb84",
            navbar: "#39517b",
            sidenav: "#ffffff"
          }
        }, {
          name: "theme-sunrise",
          title: "Sunrise",
          colors: {
            primary: "#fc5a5c",
            navbar: "#222222",
            sidenav: "#ffffff"
          }
        }, {
          name: "theme-twitlight",
          title: "Twitlight",
          colors: {
            primary: "#4c84ff",
            navbar: "#343c44",
            sidenav: "#3f4853"
          }
        }, {
          name: "theme-billy",
          title: "Billy",
          colors: {
            primary: "#e8630a",
            navbar: "#fff",
            sidenav: "#2e323a"
          }
        }, {
          name: "theme-vibrant",
          title: "Vibrant",
          colors: {
            primary: "#fc5a5c",
            navbar: "#f8f8f8",
            sidenav: "#222222"
          }
        }],
        d = 1,
        h = "%name%.css",
        c = ["rtl", "material", "layoutPosition", "layoutNavbarFixed", "layoutFooterFixed", "layoutReversed", "navbarBg", "sidenavBg", "footerBg", "themes"],
        u = ["navbar-theme", "primary", "primary-dark navbar-dark", "primary-darker navbar-dark", "secondary", "secondary-dark navbar-dark", "secondary-darker navbar-dark", "success", "success-dark navbar-dark", "success-darker navbar-dark", "info", "info-dark navbar-dark", "info-darker navbar-dark", "warning", "warning-dark navbar-light", "warning-darker navbar-light", "danger", "danger-dark navbar-dark", "danger-darker navbar-dark", "dark", "white", "light", "lighter"],
        g = "navbar-theme",
        v = ["sidenav-theme", "primary", "primary-dark sidenav-dark", "primary-darker sidenav-dark", "secondary", "secondary-dark sidenav-dark", "secondary-darker sidenav-dark", "success", "success-dark sidenav-dark", "success-darker sidenav-dark", "info", "info-dark sidenav-dark", "info-darker sidenav-dark", "warning", "warning-dark sidenav-light", "warning-darker sidenav-light", "danger", "danger-dark sidenav-dark", "danger-darker sidenav-dark", "dark", "white", "light", "lighter"],
        f = "sidenav-theme",
        m = ["footer-theme", "primary", "primary-dark footer-dark", "primary-darker footer-dark", "secondary", "secondary-dark footer-dark", "secondary-darker footer-dark", "success", "success-dark footer-dark", "success-darker footer-dark", "info", "info-dark footer-dark", "info-darker footer-dark", "warning", "warning-dark footer-light", "warning-darker footer-light", "danger", "danger-dark footer-dark", "danger-darker footer-dark", "dark", "white", "light", "lighter"],
        p = "footer-theme",
        b = function () {
          function t(e) {
            var s = e.cssPath,
              i = e.themesPath,
              n = e.cssFilenamePattern,
              a = e.controls,
              r = e.sidenavBgs,
              o = e.defaultSidenavBg,
              b = e.navbarBgs,
              y = e.defaultNavbarBg,
              x = e.footerBgs,
              k = e.defaultFooterBg,
              _ = e.availableThemes,
              w = e.defaultTheme,
              S = e.pathResolver;
            if (e.onSettingsChange, function (e, s) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this), !this._ssr) {
              if (!window.layoutHelpers) throw new Error("window.layoutHelpers required.");
              this.settings = {}, this.settings.cssPath = s, this.settings.themesPath = i, this.settings.cssFilenamePattern = n || h, this.settings.navbarBgs = b || u, this.settings.defaultNavbarBg = y || g, this.settings.sidenavBgs = r || v, this.settings.defaultSidenavBg = o || f, this.settings.footerBgs = x || m, this.settings.defaultFooterBg = k || p, this.settings.availableThemes = _ || l, this.settings.defaultTheme = this.settings.availableThemes[void 0 !== w ? w : d], this.settings.controls = a || c, this.pathResolver = S || function (t) {
                return t
              }, this.settings.onSettingsChange = function () {}, this._loadSettings(), this._listeners = [], this._controls = {}, this._initDirection(), this._initStyle(), this._initTheme(), this.setLayoutPosition(this.settings.layoutPosition, !1), this.setLayoutNavbarFixed(this.settings.layoutNavbarFixed, !1), this.setLayoutFooterFixed(this.settings.layoutFooterFixed, !1), this.setLayoutReversed(this.settings.layoutReversed, !1), this._setup(), this._waitForNavs()
            }
          }
          return i(t, [{
            key: "setRtl",
            value: function (t) {
              this._hasControls("rtl") && (this._setSetting("Rtl", String(t)), window.location.reload())
            }
          }, {
            key: "setMaterial",
            value: function (t) {
              this._hasControls("material") && (this._setSetting("Material", String(t)), window.location.reload())
            }
          }, {
            key: "setTheme",
            value: function (t) {
              var e, s, i, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              if (this._hasControls("themes")) {
                for (var r = !1, o = 0, l = this.settings.availableThemes.length; o < l; o++) this.settings.availableThemes[o].name === t && (r = !0);
                if (r) {
                  this.settings.theme = this._getThemeByFile(t), n && this._setSetting("Theme", t);
                  var d = this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", t + (this.settings.material ? "-material" : "")));
                  this._loadStylesheets((e = {}, s = d, i = document.querySelector(".theme-settings-theme-css"), s in e ? Object.defineProperty(e, s, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : e[s] = i, e), a || function () {}), n && this.settings.onSettingsChange(this.settings)
                }
              }
            }
          }, {
            key: "setLayoutPosition",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              this._hasControls("layoutPosition") && ("static" !== t && "static-offcanvas" !== t && "fixed" !== t && "fixed-offcanvas" !== t || (this.settings.layoutPosition = t, e && this._setSetting("LayoutPosition", t), window.layoutHelpers.setPosition("fixed" === t || "fixed-offcanvas" === t, "static-offcanvas" === t || "fixed-offcanvas" === t), e && this.settings.onSettingsChange(this.settings)))
            }
          }, {
            key: "setLayoutNavbarFixed",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              this._hasControls("layoutNavbarFixed") && (this.settings.layoutNavbarFixed = t, e && this._setSetting("FixedNavbar", t), window.layoutHelpers.setNavbarFixed(t), e && this.settings.onSettingsChange(this.settings))
            }
          }, {
            key: "setLayoutFooterFixed",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              this._hasControls("layoutFooterFixed") && (this.settings.layoutFooterFixed = t, e && this._setSetting("FixedFooter", t), window.layoutHelpers.setFooterFixed(t), e && this.settings.onSettingsChange(this.settings))
            }
          }, {
            key: "setLayoutReversed",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              this._hasControls("layoutReversed") && (this.settings.layoutReversed = t, e && this._setSetting("LayoutReversed", t), window.layoutHelpers.setReversed(t), e && this.settings.onSettingsChange(this.settings))
            }
          }, {
            key: "setNavbarBg",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
              if (this._hasControls("navbarBg") && -1 !== this.settings.navbarBgs.indexOf(t)) {
                this.settings.navbarBg = t, e && this._setSetting("NavbarBg", t);
                var i = s.querySelector(".layout-navbar.navbar, .layout-navbar .navbar");
                if (i) {
                  i.className = i.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), i.classList.remove("navbar-light"), i.classList.remove("navbar-dark");
                  var n = t.split(" ");
                  i.classList.add("bg-" + n[0]);
                  for (var a = 1, r = n.length; a < r; a++) i.classList.add(n[a]);
                  e && this.settings.onSettingsChange(this.settings)
                }
              }
            }
          }, {
            key: "setSidenavBg",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
              if (this._hasControls("sidenavBg") && -1 !== this.settings.sidenavBgs.indexOf(t)) {
                this.settings.sidenavBg = t, e && this._setSetting("SidenavBg", t);
                var i = s.querySelector(".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav");
                if (i) {
                  i.className = i.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), i.classList.remove("sidenav-light"), i.classList.remove("sidenav-dark");
                  var n = t.split(" ");
                  i.classList.contains("sidenav-horizontal") && ((n = n.join(" ").replace(" sidenav-dark", "").replace(" sidenav-light", "").split(" "))[0] = n[0].replace(/-darke?r?$/, "")), i.classList.add("bg-" + n[0]);
                  for (var a = 1, r = n.length; a < r; a++) i.classList.add(n[a]);
                  e && this.settings.onSettingsChange(this.settings)
                }
              }
            }
          }, {
            key: "setFooterBg",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
              if (this._hasControls("footerBg") && -1 !== this.settings.footerBgs.indexOf(t)) {
                this.settings.footerBg = t, e && this._setSetting("FooterBg", t);
                var i = s.querySelector(".layout-footer.footer, .layout-footer .footer");
                if (i) {
                  i.className = i.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), i.classList.remove("footer-light"), i.classList.remove("footer-dark");
                  var n = t.split(" ");
                  i.classList.add("bg-" + n[0]);
                  for (var a = 1, r = n.length; a < r; a++) i.classList.add(n[a]);
                  e && this.settings.onSettingsChange(this.settings)
                }
              }
            }
          }, {
            key: "update",
            value: function () {
              if (!this._ssr) {
                var t = !!document.querySelector(".layout-navbar"),
                  e = !!document.querySelector(".layout-sidenav"),
                  s = !!document.querySelector(".layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav"),
                  i = !!document.querySelector(".layout-wrapper.layout-1"),
                  n = !!document.querySelector(".layout-footer");
                if (this._controls.layoutReversed && (e ? (this._controls.layoutReversed.removeAttribute("disabled"), this._controls.layoutReversedW.classList.remove("disabled")) : (this._controls.layoutReversed.setAttribute("disabled", "disabled"), this._controls.layoutReversedW.classList.add("disabled"))), this._controls.layoutNavbarFixed && (t ? (this._controls.layoutNavbarFixed.removeAttribute("disabled"), this._controls.layoutNavbarFixedW.classList.remove("disabled")) : (this._controls.layoutNavbarFixed.setAttribute("disabled", "disabled"), this._controls.layoutNavbarFixedW.classList.add("disabled"))), this._controls.layoutFooterFixed && (n ? (this._controls.layoutFooterFixed.removeAttribute("disabled"), this._controls.layoutFooterFixedW.classList.remove("disabled")) : (this._controls.layoutFooterFixed.setAttribute("disabled", "disabled"), this._controls.layoutFooterFixedW.classList.add("disabled"))), this._controls.layoutPosition && (e ? (this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').removeAttribute("disabled"), this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').removeAttribute("disabled")) : (this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').setAttribute("disabled", "disabled"), this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').setAttribute("disabled", "disabled")), !t && !e || !e && !i ? this._controls.layoutPosition.setAttribute("disabled", "disabled") : this._controls.layoutPosition.removeAttribute("disabled")), this._controls.navbarBgWInner && (t ? this._controls.navbarBgWInner.removeAttribute("disabled") : this._controls.navbarBgWInner.setAttribute("disabled", "disabled")), this._controls.sidenavBgWInner) {
                  var a = Array.prototype.slice.call(document.querySelectorAll(".theme-settings-sidenavBg-inner .theme-settings-bg-item"));
                  e || s ? (a.forEach(function (t) {
                    t.classList.remove("disabled"), t.querySelector("input").removeAttribute("disabled")
                  }), s && a.forEach(function (t) {
                    /-darke?r?/.test(t.className) && !/bg-dark/.test(t.className) && (t.classList.add("disabled"), t.querySelector("input").setAttribute("disabled", "disabled"))
                  })) : a.forEach(function (t) {
                    t.classList.add("disabled"), t.querySelector("input").setAttribute("disabled", "disabled")
                  })
                }
                this._controls.footerBgWInner && (n ? this._controls.footerBgWInner.removeAttribute("disabled") : this._controls.footerBgWInner.setAttribute("disabled", "disabled"))
              }
            }
          }, {
            key: "updateNavbarBg",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
              this.setNavbarBg(this.settings.navbarBg, !1, t)
            }
          }, {
            key: "updateSidenavBg",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
              this.setSidenavBg(this.settings.sidenavBg, !1, t)
            }
          }, {
            key: "updateFooterBg",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
              this.setFooterBg(this.settings.footerBg, !1, t)
            }
          }, {
            key: "clearLocalStorage",
            value: function () {
              this._ssr || (this._setSetting("Theme", ""), this._setSetting("Rtl", ""), this._setSetting("Material", ""), this._setSetting("LayoutReversed", ""), this._setSetting("FixedNavbar", ""), this._setSetting("FixedFooter", ""), this._setSetting("LayoutPosition", ""), this._setSetting("NavbarBg", ""), this._setSetting("SidenavBg", ""), this._setSetting("FooterBg", ""))
            }
          }, {
            key: "destroy",
            value: function () {
              this._ssr || (this._cleanup(), this.settings = null, this.container.parentNode.removeChild(this.container), this.container = null)
            }
          }, {
            key: "_loadSettings",
            value: function () {
              var t, e = document.documentElement.classList,
                s = this._getSetting("Rtl"),
                i = this._getSetting("Material"),
                n = this._getSetting("LayoutReversed"),
                a = this._getSetting("FixedNavbar"),
                r = this._getSetting("FixedFooter"),
                o = this._getSetting("NavbarBg"),
                l = this._getSetting("SidenavBg"),
                d = this._getSetting("FooterBg"),
                h = this._getSetting("LayoutPosition");
              t = "" !== h && -1 !== ["static", "static-offcanvas", "fixed", "fixed-offcanvas"].indexOf(h) ? h : e.contains("layout-offcanvas") ? "static-offcanvas" : e.contains("layout-fixed") ? "fixed" : e.contains("layout-fixed-offcanvas") ? "fixed-offcanvas" : "static", this.settings.rtl = "" !== s ? "true" === s : "rtl" === document.documentElement.getAttribute("dir"), this.settings.material = "" !== i ? "true" === i : e.contains("material-style"), this.settings.layoutPosition = t, this.settings.layoutReversed = "" !== n ? "true" === n : e.contains("layout-reversed"), this.settings.layoutNavbarFixed = "" !== a ? "true" === a : e.contains("layout-navbar-fixed"), this.settings.layoutFooterFixed = "" !== r ? "true" === r : e.contains("layout-footer-fixed"), this.settings.navbarBg = -1 !== this.settings.navbarBgs.indexOf(o) ? o : this.settings.defaultNavbarBg, this.settings.sidenavBg = -1 !== this.settings.sidenavBgs.indexOf(l) ? l : this.settings.defaultSidenavBg, this.settings.footerBg = -1 !== this.settings.footerBgs.indexOf(d) ? d : this.settings.defaultFooterBg, this.settings.theme = this._getThemeByFile(this._getSetting("Theme")), this._hasControls("rtl") || (this.settings.rtl = "rtl" === document.documentElement.getAttribute("dir")), this._hasControls("material") || (this.settings.material = e.contains("material-style")), this._hasControls("layoutPosition") || (this.settings.layoutPosition = null), this._hasControls("layoutReversed") || (this.settings.layoutReversed = null), this._hasControls("layoutNavbarFixed") || (this.settings.layoutNavbarFixed = null), this._hasControls("layoutFooterFixed") || (this.settings.layoutFooterFixed = null), this._hasControls("navbarBg") || (this.settings.navbarBg = null), this._hasControls("sidenavBg") || (this.settings.sidenavBg = null), this._hasControls("footerBg") || (this.settings.footerBg = null), this._hasControls("themes") || (this.settings.theme = null)
            }
          }, {
            key: "_setup",
            value: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
              this._cleanup(), this.container = this._getElementFromString(n.default);
              var s = this.container.querySelector(".theme-settings-open-btn"),
                i = function () {
                  t.container.classList.add("theme-settings-open"), t.update(), t._updateInterval && clearInterval(t._updateInterval), t._updateInterval = setInterval(function () {
                    t.update()
                  }, 1e3)
                };
              s.addEventListener("click", i), this._listeners.push([s, "click", i]);
              var o = this.container.querySelector(".theme-settings-close-btn"),
                l = function () {
                  t.container.classList.remove("theme-settings-open"), t._updateInterval && (clearInterval(t._updateInterval), t._updateInterval = null)
                };
              o.addEventListener("click", l), this._listeners.push([o, "click", l]);
              var d = this.container.querySelector(".theme-settings-rtl");
              if (this._hasControls("rtl")) {
                var h = d.querySelector("input");
                this.settings.rtl && h.setAttribute("checked", "checked");
                var c = function (e) {
                  t._loadingState(!0), t.setRtl(e.target.checked)
                };
                h.addEventListener("change", c), this._listeners.push([h, "change", c])
              } else d.parentNode.removeChild(d);
              var u = this.container.querySelector(".theme-settings-material");
              if (this._hasControls("material")) {
                var g = u.querySelector("input");
                this.settings.material && g.setAttribute("checked", "checked");
                var v = function (e) {
                  t._loadingState(!0), t.setMaterial(e.target.checked)
                };
                g.addEventListener("change", v), this._listeners.push([g, "change", v])
              } else u.parentNode.removeChild(u);
              var f = this.container.querySelector(".theme-settings-layout");
              if (this._hasControls("layoutPosition layoutNavbarFixed layoutFooterFixed layoutReversed", !0)) {
                var m = this.container.querySelector(".theme-settings-layoutPosition");
                if (this._hasControls("layoutPosition")) {
                  this._controls.layoutPosition = m.querySelector("select"), this._controls.layoutPosition.value = this.settings.layoutPosition;
                  var p = function (e) {
                    return t.setLayoutPosition(e.target.value)
                  };
                  this._controls.layoutPosition.addEventListener("change", p), this._listeners.push([this._controls.layoutPosition, "change", p])
                } else m.parentNode.removeChild(m);
                if (this._controls.layoutNavbarFixedW = this.container.querySelector(".theme-settings-layoutNavbarFixed"), this._hasControls("layoutNavbarFixed")) {
                  this._controls.layoutNavbarFixed = this._controls.layoutNavbarFixedW.querySelector("input"), this.settings.layoutNavbarFixed && this._controls.layoutNavbarFixed.setAttribute("checked", "checked");
                  var b = function (e) {
                    return t.setLayoutNavbarFixed(e.target.checked)
                  };
                  this._controls.layoutNavbarFixed.addEventListener("change", b), this._listeners.push([this._controls.layoutNavbarFixed, "change", b])
                } else this._controls.layoutNavbarFixedW.parentNode.removeChild(this._controls.layoutNavbarFixedW);
                if (this._controls.layoutFooterFixedW = this.container.querySelector(".theme-settings-layoutFooterFixed"), this._hasControls("layoutFooterFixed")) {
                  this._controls.layoutFooterFixed = this._controls.layoutFooterFixedW.querySelector("input"), this.settings.layoutFooterFixed && this._controls.layoutFooterFixed.setAttribute("checked", "checked");
                  var y = function (e) {
                    return t.setLayoutFooterFixed(e.target.checked)
                  };
                  this._controls.layoutFooterFixed.addEventListener("change", y), this._listeners.push([this._controls.layoutFooterFixed, "change", y])
                } else this._controls.layoutFooterFixedW.parentNode.removeChild(this._controls.layoutFooterFixedW);
                if (this._controls.layoutReversedW = this.container.querySelector(".theme-settings-layoutReversed"), this._hasControls("layoutReversed")) {
                  this._controls.layoutReversed = this._controls.layoutReversedW.querySelector("input"), this.settings.layoutReversed && this._controls.layoutReversed.setAttribute("checked", "checked");
                  var x = function (e) {
                    return t.setLayoutReversed(e.target.checked)
                  };
                  this._controls.layoutReversed.addEventListener("change", x), this._listeners.push([this._controls.layoutReversed, "change", x])
                } else this._controls.layoutReversedW.parentNode.removeChild(this._controls.layoutReversedW)
              } else f.parentNode.removeChild(f);
              var k = this.container.querySelector(".theme-settings-navbarBg");
              this._hasControls("navbarBg") ? (this._controls.navbarBgWInner = k.querySelector(".theme-settings-navbarBg-inner"), this.settings.navbarBgs.forEach(function (e) {
                var s = t._getElementFromString(r.default),
                  i = s.querySelector("input");
                s.classList.add("bg-" + e.split(" ")[0]), i.name = "theme-settings-navbarBg-input", i.value = e, t.settings.navbarBg === e && (i.setAttribute("checked", "checked"), s.classList.add("active"));
                var n = function (e) {
                  for (var s = t._controls.navbarBgWInner.querySelectorAll(".theme-settings-bg-item"), i = 0, n = s.length; i < n; i++) s[i].classList.remove("active");
                  e.target.parentNode.classList.add("active"), t.setNavbarBg(e.target.value)
                };
                i.addEventListener("change", n), t._listeners.push([i, "change", n]), t._controls.navbarBgWInner.appendChild(s)
              })) : k.parentNode.removeChild(k);
              var _ = this.container.querySelector(".theme-settings-sidenavBg");
              this._hasControls("sidenavBg") ? (this._controls.sidenavBgWInner = _.querySelector(".theme-settings-sidenavBg-inner"), this.settings.sidenavBgs.forEach(function (e) {
                var s = t._getElementFromString(r.default),
                  i = s.querySelector("input");
                s.classList.add("bg-" + e.split(" ")[0]), i.name = "theme-settings-sidenavBg-input", i.value = e, t.settings.sidenavBg === e && (i.setAttribute("checked", "checked"), s.classList.add("active"));
                var n = function (e) {
                  for (var s = t._controls.sidenavBgWInner.querySelectorAll(".theme-settings-bg-item"), i = 0, n = s.length; i < n; i++) s[i].classList.remove("active");
                  e.target.parentNode.classList.add("active"), t.setSidenavBg(e.target.value)
                };
                i.addEventListener("change", n), t._listeners.push([i, "change", n]), t._controls.sidenavBgWInner.appendChild(s)
              })) : _.parentNode.removeChild(_);
              var w = this.container.querySelector(".theme-settings-footerBg");
              this._hasControls("footerBg") ? (this._controls.footerBgWInner = w.querySelector(".theme-settings-footerBg-inner"), this.settings.footerBgs.forEach(function (e) {
                var s = t._getElementFromString(r.default),
                  i = s.querySelector("input");
                s.classList.add("bg-" + e.split(" ")[0]), i.name = "theme-settings-footerBg-input", i.value = e, t.settings.footerBg === e && (i.setAttribute("checked", "checked"), s.classList.add("active"));
                var n = function (e) {
                  for (var s = t._controls.footerBgWInner.querySelectorAll(".theme-settings-bg-item"), i = 0, n = s.length; i < n; i++) s[i].classList.remove("active");
                  e.target.parentNode.classList.add("active"), t.setFooterBg(e.target.value)
                };
                i.addEventListener("change", n), t._listeners.push([i, "change", n]), t._controls.footerBgWInner.appendChild(s)
              })) : w.parentNode.removeChild(w);
              var S = this.container.querySelector(".theme-settings-themes");
              if (this._hasControls("themes")) {
                var B = this.container.querySelector(".theme-settings-themes-inner");
                this.settings.availableThemes.forEach(function (e) {
                  var s = t._getElementFromString(a.default),
                    i = s.querySelector("input");
                  s.querySelector(".theme-settings-theme-name").innerHTML = e.title, i.value = e.name, t.settings.theme.name === e.name && i.setAttribute("checked", "checked"), s.querySelector(".theme-settings-theme-colors").innerHTML = '\n          <span style="background: ' + e.colors.primary + '"></span>\n          <span style="background: ' + e.colors.navbar + '"></span>\n          <span style="background: ' + e.colors.sidenav + '"></span>\n        ';
                  var n = function (e) {
                    t._loading || (t._loading = !0, t._loadingState(!0, !0), t.setTheme(e.target.value, !0, function () {
                      t._loading = !1, t._loadingState(!1, !0)
                    }))
                  };
                  i.addEventListener("change", n), t._listeners.push([i, "change", n]), B.appendChild(s)
                })
              } else S.parentNode.removeChild(S);
              e === document ? e.body ? e.body.appendChild(this.container) : window.addEventListener("DOMContentLoaded", function () {
                return e.body.appendChild(t.container)
              }) : e.appendChild(this.container)
            }
          }, {
            key: "_initDirection",
            value: function () {
              this._hasControls("rtl") && document.documentElement.setAttribute("dir", this.settings.rtl ? "rtl" : "ltr")
            }
          }, {
            key: "_initStyle",
            value: function () {
              if (this._hasControls("material")) {
                var t = this.settings.material;
                this._insertStylesheet("theme-settings-bootstrap-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "bootstrap" + (t ? "-material" : "")))), this._insertStylesheet("theme-settings-appwork-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "appwork" + (t ? "-material" : "")))), this._insertStylesheet("theme-settings-colors-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "colors" + (t ? "-material" : "")))), document.documentElement.classList.remove(t ? "default-style" : "material-style"), document.documentElement.classList.add(t ? "material-style" : "default-style"), t && window.attachMaterialRipple && (document.body ? window.attachMaterialRipple() : window.addEventListener("DOMContentLoaded", function () {
                  return window.attachMaterialRipple()
                }))
              }
            }
          }, {
            key: "_initTheme",
            value: function () {
              this._hasControls("themes") && this._insertStylesheet("theme-settings-theme-css", this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", this.settings.theme.name + (this.settings.material ? "-material" : ""))))
            }
          }, {
            key: "_insertStylesheet",
            value: function (t, e) {
              var s = document.querySelector("." + t);
              if ("number" == typeof document.documentMode && document.documentMode < 11) {
                if (!s) return;
                if (e === s.getAttribute("href")) return;
                var i = document.createElement("link");
                i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.className = t, i.setAttribute("href", e), s.parentNode.insertBefore(i, s.nextSibling)
              } else document.write('<link rel="stylesheet" type="text/css" href="' + e + '" class="' + t + '">');
              s.parentNode.removeChild(s)
            }
          }, {
            key: "_loadStylesheets",
            value: function (t, e) {
              var s = Object.keys(t),
                i = s.length,
                n = 0;

              function a(t, e, s) {
                var i = document.createElement("link");
                i.setAttribute("href", t), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.className = e.className;
                var n = "sheet" in i ? "sheet" : "styleSheet",
                  a = "sheet" in i ? "cssRules" : "rules",
                  r = void 0,
                  o = void 0;
                r = setTimeout(function () {
                  clearInterval(o), clearTimeout(r), e.parentNode.removeChild(i), s(!1, t)
                }, 15e3), o = setInterval(function () {
                  try {
                    i[n] && i[n][a].length && (clearInterval(o), clearTimeout(r), e.parentNode.removeChild(e), s(!0))
                  } catch (t) {
                    console.error(t)
                  }
                }, 10), e.parentNode.insertBefore(i, e.nextSibling)
              }
              for (var r = 0; r < s.length; r++) a(s[r], t[s[r]], function (t, s) {
                t || (console && "function" == typeof console.error && console.error("Error occured while loading stylesheets!"), alert("Error occured while loading stylesheets!"), console.log(s)), ++n >= i && e()
              })
            }
          }, {
            key: "_loadingState",
            value: function (t, e) {
              this.container.classList[t ? "add" : "remove"]("theme-settings-loading" + (e ? "-theme" : ""))
            }
          }, {
            key: "_waitForNavs",
            value: function () {
              var t = this;
              this._addObserver(".layout-navbar.navbar, .layout-navbar .navbar", function (t) {
                return t && t.classList && t.classList.contains("layout-navbar") && (t.classList.contains("navbar") || t.querySelector(".navbar"))
              }, function () {
                return t.setNavbarBg(t.settings.navbarBg, !1)
              }), this._addObserver(".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav", function (t) {
                return t && t.classList && (t.classList.contains("layout-sidenav") || t.classList.contains("layout-sidenav-horizontal")) && (t.classList.contains("sidenav") || t.querySelector(".sidenav"))
              }, function () {
                return t.setSidenavBg(t.settings.sidenavBg, !1)
              }), this._addObserver(".layout-footer.footer, .layout-footer .footer", function (t) {
                return t && t.classList && t.classList.contains("layout-footer") && (t.classList.contains("footer") || t.querySelector(".footer"))
              }, function () {
                return t.setFooterBg(t.settings.footerBg, !1)
              }), !document.body && (this._observers && this._observers.length || this._intervals && this._intervals.length) && window.addEventListener("load", function e() {
                t._clearObservers(), t.setNavbarBg(t.settings.navbarBg, !1), t.setSidenavBg(t.settings.sidenavBg, !1), t.setFooterBg(t.settings.footerBg, !1), window.removeEventListener("load", e)
              })
            }
          }, {
            key: "_addObserver",
            value: function (t, e, s) {
              var i = this;
              this._observers || (this._observers = []), this._intervals || (this._intervals = []);
              var n = void 0,
                a = void 0;
              document.querySelector(t) ? s.call(this) : document.body || ("undefined" != typeof MutationObserver ? (n = new MutationObserver(function (t) {
                t.forEach(function (t) {
                  if (t.addedNodes)
                    for (var a = 0; a < t.addedNodes.length; a++) {
                      var r = t.addedNodes[a];
                      if (e.call(i, r)) {
                        n.disconnect(), i._observers.splice(i._observers.indexOf(n), 1), n = null, s.call(i);
                        break
                      }
                    }
                })
              }), this._observers.push(n), n.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !1,
                characterData: !1
              })) : (a = setInterval(function () {
                document.querySelector(t) && (clearInterval(a), i._intervals.splice(i._intervals.indexOf(a), 1), a = null, s.call(i))
              }, 10), this._intervals.push(a)))
            }
          }, {
            key: "_clearObservers",
            value: function () {
              if (this._observers && this._observers.length)
                for (var t = 0, e = this._observers.length; t < e; t++) this._observers[t].disconnect();
              if (this._intervals && this._intervals.length)
                for (var s = 0, i = this._intervals.length; s < i; s++) clearInterval(this._intervals[s]);
              this._observers = null, this._intervals = null
            }
          }, {
            key: "_getElementFromString",
            value: function (t) {
              var e = document.createElement("div");
              return e.innerHTML = t, e.firstChild
            }
          }, {
            key: "_getSetting",
            value: function (t) {
              var e = null;
              try {
                e = localStorage.getItem("themeSettings" + t)
              } catch (t) {}
              return String(e || "")
            }
          }, {
            key: "_setSetting",
            value: function (t, e) {
              try {
                localStorage.setItem("themeSettings" + t, String(e))
              } catch (t) {}
            }
          }, {
            key: "_getThemeByFile",
            value: function (t) {
              for (var e = null, s = 0, i = this.settings.availableThemes.length; s < i; s++) this.settings.availableThemes[s].name === t && (e = this.settings.availableThemes[s]);
              return e || this.settings.defaultTheme
            }
          }, {
            key: "_removeListeners",
            value: function () {
              for (var t = 0, e = this._listeners.length; t < e; t++) this._listeners[t][0].removeEventListener(this._listeners[t][1], this._listeners[t][2])
            }
          }, {
            key: "_cleanup",
            value: function () {
              this._removeListeners(), this._listeners = [], this._controls = {}, this._clearObservers(), this._updateInterval && (clearInterval(this._updateInterval), this._updateInterval = null)
            }
          }, {
            key: "_hasControls",
            value: function (t) {
              var e = this,
                s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return t.split(" ").reduce(function (t, i) {
                return -1 !== e.settings.controls.indexOf(i) ? (s || !1 !== t) && (t = !0) : s && !0 === t || (t = !1), t
              }, null)
            }
          }, {
            key: "_ssr",
            get: function () {
              return "undefined" == typeof window
            }
          }]), t
        }();
      e.ThemeSettings = b
    }
  });
  if ("object" == typeof s) {
    var i = ["object" == typeof module && "object" == typeof module.exports ? module.exports : null, "undefined" != typeof window ? window : null, t && t !== window ? t : null];
    for (var n in s) i[0] && (i[0][n] = s[n]), i[1] && "__esModule" !== n && (i[1][n] = s[n]), i[2] && (i[2][n] = s[n])
  }
}(this);