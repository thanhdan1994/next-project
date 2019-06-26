!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(e, t) {
    e.exports = {
        d: "//player.tuoitre.vn/",
        registerScript: ["//cdn.ravenjs.com/3.26.2/raven.min.js", "//imasdk.googleapis.com/js/sdkloader/ima3.js"],
        sentry: !1
    }
}
, function(e, t, n) {
    e.exports = n(2)
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0)
      , i = n.n(r);
    n(3),
    function() {
        window.vpSetting = i.a;
        const e = e=>{
            let n = document.createElement("script")
              , r = document.getElementsByTagName("script")
              , i = r[r.length - 1];
            n.async = !0,
            n.src = window.vpSetting.d + "player/static/videoplayer.core.js",
            n.charset = "UTF-8",
            i.parentNode.insertBefore(n, i);
            let o = document.createElement("link")
              , a = document.getElementsByTagName("link")
              , l = a[a.length - 1];
            o.href = window.vpSetting.d + "player/static/videoplayer.core.css",
            o.type = "text/css",
            o.rel = "stylesheet",
            l.parentNode.insertBefore(o, l);
            let c = document.createElement("link")
              , s = document.getElementsByTagName("link")
              , d = s[s.length - 1];
            c.href = window.vpSetting.d + "player/static/vpcustom.css",
            c.type = "text/css",
            c.rel = "stylesheet",
            d.parentNode.insertBefore(c, d),
            setTimeout(function() {
                t("scrollCountDownPlugin", ()=>{
                    t("HlsQualitySelectorPlugin", ()=>{
                        t("imaPlugin", ()=>{
                            setTimeout(function() {
                                e()
                            }, 500)
                        }
                        )
                    }
                    )
                }
                ),
                window.vpSetting.sentry && Raven.config("https://deacb222b0334414b72953f888a31122@sentry.tuoitre.com.vn/12").install()
            }, 2e3)
        }
          , t = (e,t)=>{
            let n = document.createElement("script")
              , r = document.getElementsByTagName("script")
              , i = r[r.length - 1];
            n.async = !0,
            n.src = window.vpSetting.d + "player/static/plugin/" + e + ".js",
            n.charset = "UTF-8",
            n.onreadystatechange = t,
            n.onload = t,
            i.parentNode.insertBefore(n, i)
        }
          , n = e=>{
            let t = document.createElement("script")
              , n = document.getElementsByTagName("script")
              , r = n[n.length - 1];
            t.async = !0,
            t.src = e,
            t.charset = "UTF-8",
            r.parentNode.insertBefore(t, r)
        }
          , r = function() {
            let e = document.getElementsByClassName("tt-vplayer");
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                n.className.indexOf("video-js") > -1 && videojs(n.id).ready(function() {
                    let e = this
                      , t = n.id;
                    e.controls(!0),
                    e.preload("auto"),
                    e.countDown(),
                    e.tech_.off("dblclick"),
                    e.off("click");
                    let r = {};
                    if (null !== e.getAttribute("data-vid") && (r.src = e.getAttribute("data-vid"),
                    r.type = "video/mp4",
                    e.src(r)),
                    null !== e.getAttribute("data-mp3") && (r.src = e.getAttribute("data-mp3"),
                    r.type = "audio/mp3",
                    e.src(r)),
                    null !== e.getAttribute("data-m3u8") && (r.src = e.getAttribute("data-m3u8"),
                    r.type = "application/x-mpegURL",
                    e.src(r),
                    e.hlsQualitySelector()),
                    window.vpSetting.adTagUrl) {
                        let n = {
                            id: t,
                            adTagUrl: window.vpSetting.adTagUrl
                        };
                        e.ima(n)
                    }
                })
            }
        };
        return {
            init: function() {
                const t = document.createElement("style");
                t.type = "text/css",
                t.className = "vjs-styles-custom";
                let i = ".tt-vplayer-content {position: relative;height: 0;padding-bottom: 56.25%;background-color: black;}.tt-vplayer-content .tt-vplayer {position: absolute;width: 100%;height: 100%;  }.tt-vplayer-visibility {visibility: hidden;}";
                t.styleSheet ? t.styleSheet.cssText = i : t.appendChild(document.createTextNode(i)),
                document.getElementsByTagName("head")[0].appendChild(t),
                window.vpSetting.registerScript.forEach(function(e) {
                    n(e)
                }),
                e(r)
            }
        }
    }().init()
}
, function(e, t, n) {}
]);
