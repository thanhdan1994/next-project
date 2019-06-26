
!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var l = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(l.exports, l, l.exports, n),
        l.l = !0,
        l.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var l in e)
                n.d(i, l, function(t) {
                    return e[t]
                }
                .bind(null, l));
        return i
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
    n(n.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    n(2),
    function(e, t) {
        "use strict";
        let n = {
            time: 2,
            mute: !1
        };
        (t.registerPlugin || t.plugin)("countDown", function(i) {
            let l, o, a = this;
            a.removeClass("tt-vplayer-visibility");
            let r = !1
              , c = !1
              , u = !1
              , s = !1
              , d = 0;
            var m, v, p, f, g, y;
            l = t.VERSION.split(".")[0] >= 5 ? t.mergeOptions(n, i) : t.util.mergeOptions(n, i),
            t.addLanguage("vi", {
                "Starts in ...": "Tự động phát sau ",
                "{{title}} is starting in ...": "{{title}} sẽ phát sau"
            }),
            y = function() {
                let t, n = document.createElement("link"), i = document.getElementsByTagName("link"), l = i[i.length - 1];
                n.href = e.vpSetting.d + "player/static/plugin/scrollCountDownPlugin.css",
                n.type = "text/css",
                n.rel = "stylesheet",
                l.parentNode.insertBefore(n, l),
                (o = document.createElement("div")).className = "vjs-loading-countdown",
                o.style = "background-color: black; opacity: 0.6; display:none;",
                document.createElement("div").className = "vjs-countdown",
                t = a.mediainfo && a.mediainfo.name && "" !== a.mediainfo.name ? a.localize("{{title}} is starting in ...").replace("{{title}}", a.mediainfo.name) : a.localize("Starts in ...");
                let r = document.createElement("div");
                r.className = "vjs-loading-double-ring",
                r.innerHTML = "<div></div><div></div>";
                let c = document.createElement("span");
                c.className = "vjs-overlay-seconds",
                o.appendChild(c),
                o.appendChild(r),
                a.el().appendChild(o),
                v(a.el())
            }
            ,
            v = function(e) {
                m(e) ? m(e) && (c || r || (0 === l.time ? (l.mute && !s && a.muted(!0),
                a.play()) : f()),
                r || u || s || a.play()) : (!r && c && (u = !1,
                a.pause(),
                g()),
                r && g())
            }
            ,
            f = ()=>{
                let t = o.querySelector(".vjs-overlay-seconds")
                  , n = l.time;
                t.innerHTML = n,
                a.addClass("vjs-counting"),
                r = !0,
                d = e.setInterval(()=>{
                    n -= 1,
                    t.innerText = n,
                    0 === n && void 0 !== a.play() && a.play().then(e=>{
                        a.muted(!1)
                    }
                    ).catch(e=>{
                        a.muted(!0),
                        a.play()
                    }
                    )
                }
                , 1e3)
            }
            ,
            g = ()=>{
                r = !1,
                a.removeClass("vjs-counting"),
                e.clearInterval(d)
            }
            ,
            a.one("loadstart", ()=>{
                y(),
                p = ()=>v(a.el()),
                e.addEventListener ? (e.addEventListener("DOMContentLoaded", p, !1),
                e.addEventListener("load", p, !1),
                e.addEventListener("resize", p, !1)) : e.attachEvent && (e.attachEvent("onDOMContentLoaded", p),
                e.attachEvent("onload", p),
                e.attachEvent("onresize", p)),
                o.addEventListener("click", ()=>{
                    c = !0,
                    a.muted(!0),
                    a.play(),
                    g()
                }
                ),
                a.on("play", ()=>{
                    u = !0,
                    c = !0,
                    function(e) {
                        e.muted() || !u || e.increaseVolumeInterval || void 0 !== e.increaseVolume ? e.muted() && e.increaseVolumeInterval && (clearInterval(e.increaseVolumeInterval),
                        e.increaseVolumeInterval = 0,
                        e.volume(0),
                        e.increaseVolume = !1) : (e.volume(.3),
                        e.increaseVolumeInterval = setInterval(()=>{
                            if (e.volume() <= .7) {
                                var t = 1e3 * e.volume() + 11;
                                e.volume(t / 1e3)
                            } else
                                clearInterval(e.increaseVolumeInterval),
                                e.increaseVolumeInterval = 0
                        }
                        , 100),
                        e.increaseVolume = !0)
                    }(a),
                    r && g()
                }
                ),
                a.on("click", function(e) {
                    u || s ? u && !s ? s = !0 : !u && s ? s = !1 : u && s && (s = !1) : s = !0
                }),
                a.on(["waiting", "pause"], ()=>{
                    u = !1
                }
                ),
                a.on("ended", ()=>{
                    s = !0
                }
                )
            }
            ),
            m = t=>{
                var n = t.getBoundingClientRect();
                return n.top >= 0 && n.left >= 0 && n.bottom <= (e.innerHeight || document.documentElement.clientHeight) && n.right <= (e.innerWidth || document.documentElement.clientWidth)
            }
        })
    }(window, window.videojs)
}
, function(e, t, n) {}
]);
