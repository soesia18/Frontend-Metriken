﻿//From: https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js
//Get from auto generated Countly Code

(function (n, fa) {
    "function" === typeof define && define.amd
        ? define([], function () {
            return fa(n.Countly);
        })
        : "object" === typeof module && module.exports
            ? (module.exports = fa(n.Countly))
            : (n.Countly = fa(n.Countly));
})("undefined" !== typeof window ? window : this, function (n) {
    function fa(g) {
        var q = [];
        if ("undefined" !== typeof g.options) for (var u = 0; u < g.options.length; u++) g.options[u].selected && q.push(g.options[u].value);
        return q.join(", ");
    }
    function Ya() {
        var g = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (q) {
            var u = (g + 16 * Math.random()) % 16 | 0;
            g = Math.floor(g / 16);
            return ("x" === q ? u : (u & 3) | 8).toString(16);
        });
    }
    function B() {
        return Math.floor(new Date().getTime() / 1e3);
    }
    function La() {
        var g = new Date().getTime();
        wa >= g ? wa++ : (wa = g);
        return wa;
    }
    function v(g, q, u) {
        if (q && Object.keys(q).length) {
            if ("undefined" !== typeof q[g]) return q[g];
        } else if ("undefined" !== typeof n[g]) return n[g];
        return u;
    }
    function Ma(g, q, u) {
        for (var C in n.i) n.i[C].tracking_crashes && n.i[C].recordError(g, q, u);
    }
    function Za(g) {
        var q = [],
            u;
        for (u in g) q.push(u + "=" + encodeURIComponent(g[u]));
        return q.join("&");
    }
    function Na(g) {
        return "/" === g.substr(g.length - 1) ? g.substr(0, g.length - 1) : g;
    }
    function ka(g, q) {
        for (var u = {}, C, I = 0; I < q.length; I++) (C = q[I]), "undefined" !== typeof g[C] && (u[C] = g[C]);
        return u;
    }
    function R(g, q, u, C, I, W) {
        var S = {};
        if (g) {
            if (Object.keys(g).length > C) {
                var X = {},
                    la = 0,
                    F;
                for (F in g) la < C && ((X[F] = g[F]), la++);
                g = X;
            }
            for (var Y in g) (C = w(Y, q, I, W)), (X = w(g[Y], u, I, W)), (S[C] = X);
        }
        return S;
    }
    function w(g, q, u, C) {
        var I = g;
        "number" === typeof g && (g = g.toString());
        "string" === typeof g && g.length > q && ((I = g.substring(0, q)), C(d.DEBUG, u + ", Key: [ " + g + " ] is longer than accepted length. It will be truncated."));
        return I;
    }
    function ma(g) {
        if (g) return g;
        g = navigator.userAgent;
        !g &&
            navigator.userAgentData &&
            ((g = navigator.userAgentData.brands
                .map(function (q) {
                    return q.brand + ":" + q.version;
                })
                .join()),
                (g += navigator.userAgentData.mobile ? " mobi " : " "),
                (g += navigator.userAgentData.platform));
        return g;
    }
    function $a(g) {
        if (!g) {
            if (navigator.userAgentData.mobile) return "phone";
            g = ma();
        }
        g = g.toLowerCase();
        var q = "desktop",
            u = /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/;
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(g) ? (q = "tablet") : u.test(g) && (q = "phone");
        return q;
    }
    function ab(g) {
        return /(CountlySiteBot|nuhk|Googlebot|GoogleSecurityScanner|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO|contxbot|PingdomBot|BingPreview|HeadlessChrome)/.test(
            g || ma()
        );
    }
    function Oa(g) {
        "undefined" === typeof g.pageY &&
            "number" === typeof g.clientX &&
            document.documentElement &&
            ((g.pageX = g.clientX + document.body.scrollLeft + document.documentElement.scrollLeft), (g.pageY = g.clientY + document.body.scrollTop + document.documentElement.scrollTop));
        return g;
    }
    function xa() {
        var g = document;
        return Math.max(Math.max(g.body.scrollHeight, g.documentElement.scrollHeight), Math.max(g.body.offsetHeight, g.documentElement.offsetHeight), Math.max(g.body.clientHeight, g.documentElement.clientHeight));
    }
    function Pa() {
        var g = document;
        return Math.max(Math.max(g.body.scrollWidth, g.documentElement.scrollWidth), Math.max(g.body.offsetWidth, g.documentElement.offsetWidth), Math.max(g.body.clientWidth, g.documentElement.clientWidth));
    }
    function bb() {
        var g = document;
        return Math.min(Math.min(g.body.clientHeight, g.documentElement.clientHeight), Math.min(g.body.offsetHeight, g.documentElement.offsetHeight), window.innerHeight);
    }
    function cb(g, q, u, C, I, W) {
        g = document.createElement(g);
        var S;
        g.setAttribute(q, u);
        g.setAttribute(C, I);
        q = function () {
            S || W();
            S = !0;
        };
        W && ((g.onreadystatechange = q), (g.onload = q));
        document.getElementsByTagName("head")[0].appendChild(g);
    }
    function db(g, q) {
        cb("script", "type", "text/javascript", "src", g, q);
    }
    function ya(g, q) {
        cb("link", "rel", "stylesheet", "href", g, q);
    }
    function eb() {
        var g = document.getElementById("cly-loader");
        if (!g) {
            var q = document.head || document.getElementsByTagName("head")[0],
                u = document.createElement("style");
            u.type = "text/css";
            u.styleSheet
                ? (u.styleSheet.cssText =
                    "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}")
                : u.appendChild(
                    document.createTextNode(
                        "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}"
                    )
                );
            q.appendChild(u);
            g = document.createElement("div");
            g.setAttribute("id", "cly-loader");
            document.body.onload = function () {
                if (!n.showLoaderProtection)
                    try {
                        document.body.appendChild(g);
                    } catch (C) { }
            };
        }
        g.style.display = "block";
    }
    function fb() {
        n.showLoaderProtection = !0;
        var g = document.getElementById("cly-loader");
        g && (g.style.display = "none");
    }
    if ("undefined" !== typeof window) {
        n = n || {};
        n.features = "sessions events views scrolls clicks forms crashes attribution users star-rating location apm feedback remote-config".split(" ");
        var d = { ERROR: "[ERROR] ", WARNING: "[WARNING] ", INFO: "[INFO] ", DEBUG: "[DEBUG] ", VERBOSE: "[VERBOSE] " };
        n.q = n.q || [];
        n.onload = n.onload || [];
        var gb = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?::([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?::([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
        n.CountlyClass = function (g) {
            function q(a) {
                if (h.ignore_visitor) c(d.ERROR, "Adding event failed. Possible bot or user opt out");
                else if (a.key) {
                    a.count || (a.count = 1);
                    a.key = w(a.key, h.maxKeyLength, "add_cly_event", c);
                    a.segmentation = R(a.segmentation, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "add_cly_event", c);
                    var b = ka(a, ["key", "count", "sum", "dur", "segmentation"]);
                    b.timestamp = La();
                    var e = new Date();
                    b.hour = e.getHours();
                    b.dow = e.getDay();
                    H.push(b);
                    m("cly_event", H);
                    c(d.INFO, "Successfully adding event: ", a);
                } else c(d.ERROR, "Adding event failed. Event must have a key property");
            }
            function u() {
                h.ignore_prefetch && "undefined" !== typeof document.visibilityState && "prerender" === document.visibilityState && (h.ignore_visitor = !0);
                h.ignore_bots && ab() && (h.ignore_visitor = !0);
            }
            function C() {
                0 < H.length && (F({ events: JSON.stringify(H) }), (H = []), m("cly_event", H));
            }
            function I(a, b) {
                if (document.getElementById("countly-feedback-sticker-" + a._id)) c(d.ERROR, "Widget with same ID exists");
                else
                    try {
                        var e = document.createElement("div");
                        e.className = "countly-iframe-wrapper";
                        e.id = "countly-iframe-wrapper-" + a._id;
                        var k = document.createElement("span");
                        k.className = "countly-feedback-close-icon";
                        k.id = "countly-feedback-close-icon-" + a._id;
                        k.innerText = "x";
                        var l = document.createElement("iframe");
                        l.name = "countly-feedback-iframe";
                        l.id = "countly-feedback-iframe";
                        l.src = h.url + "/feedback?widget_id=" + a._id + "&app_key=" + h.app_key + "&device_id=" + h.device_id + "&sdk_version=22.02.4";
                        document.body.appendChild(e);
                        e.appendChild(k);
                        e.appendChild(l);
                        x(document.getElementById("countly-feedback-close-icon-" + a._id), "click", function () {
                            document.getElementById("countly-iframe-wrapper-" + a._id).style.display = "none";
                            document.getElementById("cfbg").style.display = "none";
                        });
                        if (b) {
                            var f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            f.id = "feedback-sticker-svg";
                            f.setAttribute("aria-hidden", "true");
                            f.setAttribute("data-prefix", "far");
                            f.setAttribute("data-icon", "grin");
                            f.setAttribute("class", "svg-inline--fa fa-grin fa-w-16");
                            f.setAttribute("role", "img");
                            f.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                            f.setAttribute("viewBox", "0 0 496 512");
                            var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            p.id = "smileyPathInStickerSvg";
                            p.setAttribute("fill", "white");
                            p.setAttribute(
                                "d",
                                "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
                            );
                            var r = document.createElement("span");
                            r.innerText = a.trigger_button_text;
                            var t = document.createElement("div");
                            t.style.color = 7 > a.trigger_font_color.length ? "#" + a.trigger_font_color : a.trigger_font_color;
                            t.style.backgroundColor = 7 > a.trigger_bg_color.length ? "#" + a.trigger_bg_color : a.trigger_bg_color;
                            t.className = "countly-feedback-sticker  " + a.trigger_position + "-" + a.trigger_size;
                            t.id = "countly-feedback-sticker-" + a._id;
                            f.appendChild(p);
                            t.appendChild(f);
                            t.appendChild(r);
                            document.body.appendChild(t);
                            var z = document.getElementById("smileyPathInStickerSvg");
                            z && (z.style.fill = 7 > a.trigger_font_color.length ? "#" + a.trigger_font_color : a.trigger_font_color);
                            x(document.getElementById("countly-feedback-sticker-" + a._id), "click", function () {
                                document.getElementById("countly-iframe-wrapper-" + a._id).style.display = "block";
                                document.getElementById("cfbg").style.display = "block";
                            });
                        } else (document.getElementById("countly-iframe-wrapper-" + a._id).style.display = "block"), (document.getElementById("cfbg").style.display = "block");
                    } catch (L) {
                        c(d.ERROR, "Somethings went wrong while element injecting process: " + L);
                    }
            }
            function W() {
                var a;
                if ("undefined" !== typeof h.onload && 0 < h.onload.length) {
                    for (a = 0; a < h.onload.length; a++) if ("function" === typeof h.onload[a]) h.onload[a](h);
                    h.onload = [];
                }
            }
            function S() {
                if (O) {
                    var a = { name: O };
                    h.check_consent("views") && q({ key: "[CLY]_view", dur: Z ? B() - na : oa, segmentation: a });
                    O = null;
                }
            }
            function X() {
                if (aa) {
                    var a = m("cly_session");
                    if (!a || parseInt(a) <= B()) (T = !1), h.begin_session(!pa);
                    m("cly_session", B() + 60 * qa);
                }
            }
            function la(a) {
                a.app_key = h.app_key;
                a.device_id = h.device_id;
                a.sdk_name = "javascript_native_web";
                a.sdk_version = "22.02.4";
                a.t = D;
                h.check_consent("location") ? (h.country_code && (a.country_code = h.country_code), h.city && (a.city = h.city), null !== h.ip_address && (a.ip_address = h.ip_address)) : (a.location = "");
                a.timestamp = La();
                var b = new Date();
                a.hour = b.getHours();
                a.dow = b.getDay();
            }
            function F(a) {
                h.ignore_visitor
                    ? c(d.WARNING, "User is opt_out will ignore the request: " + a)
                    : h.app_key && h.device_id
                        ? (la(a), G.length > za && G.shift(), G.push(a), m("cly_queue", G, !0))
                        : c(d.ERROR, "app_key or device_id is missing ", h.app_key, h.device_id);
            }
            function Y() {
                W();
                if (h.ignore_visitor) (Aa = !1), c(d.WARNING, "User opt_out, no heartbeat");
                else {
                    Aa = !0;
                    var a = 0;
                    if (Ba && "undefined" !== typeof n.q && 0 < n.q.length) {
                        var b = n.q;
                        n.q = [];
                        for (a = 0; a < b.length; a++) {
                            var e = b[a];
                            c(d.DEBUG, "Processing queued call", e);
                            if ("function" === typeof e) e();
                            else if (Array.isArray(e) && 0 < e.length) {
                                var k = h,
                                    l = 0;
                                n.i[e[l]] && ((k = n.i[e[l]]), l++);
                                if ("function" === typeof k[e[l]]) k[e[l]].apply(k, e.slice(l + 1));
                                else if (0 === e[l].indexOf("userData.")) {
                                    var f = e[l].replace("userData.", "");
                                    "function" === typeof k.userData[f] && k.userData[f].apply(k, e.slice(l + 1));
                                } else "function" === typeof n[e[l]] && n[e[l]].apply(n, e.slice(l + 1));
                            }
                        }
                    }
                    T && pa && Z && ((a = B()), a - ba > Ca && (h.session_duration(a - ba), (ba = a)));
                    0 < H.length && (H.length <= ra ? (F({ events: JSON.stringify(H) }), (H = [])) : ((a = H.splice(0, ra)), F({ events: JSON.stringify(a) })), m("cly_event", H));
                    !J &&
                        0 < G.length &&
                        Da &&
                        B() > Qa &&
                        ((Da = !1),
                            (a = G[0]),
                            c(d.DEBUG, "Processing request", a),
                            m("cly_queue", G, !0),
                            h.test_mode ||
                            ha(
                                "send_request_queue",
                                h.url + hb,
                                a,
                                function (p, r) {
                                    c(d.DEBUG, "Request Finished", r, p);
                                    p ? ((Qa = B() + Ea), c(d.ERROR, "Request error: ", p)) : G.shift();
                                    m("cly_queue", G, !0);
                                    Da = !0;
                                },
                                !1
                            ));
                    setTimeout(Y, Fa);
                }
            }
            function Ra() {
                var a = m("cly_id");
                return a ? ((D = m("cly_id_type")), a) : Ya();
            }
            function Ga() {
                var a = JSON.parse(JSON.stringify(h.metrics || {}));
                a._app_version = a._app_version || h.app_version;
                a._ua = a._ua || ma();
                if (screen.width) {
                    var b = screen.width ? parseInt(screen.width) : 0,
                        e = screen.height ? parseInt(screen.height) : 0;
                    if (0 !== b && 0 !== e) {
                        if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) && window.devicePixelRatio) (b = Math.round(b * window.devicePixelRatio)), (e = Math.round(e * window.devicePixelRatio));
                        else if (90 === Math.abs(window.orientation)) {
                            var k = b;
                            b = e;
                            e = k;
                        }
                        a._resolution = a._resolution || "" + b + "x" + e;
                    }
                }
                window.devicePixelRatio && (a._density = a._density || window.devicePixelRatio);
                b = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage;
                "undefined" !== typeof b && (a._locale = a._locale || b);
                if ("undefined" !== typeof document.referrer && document.referrer.length && (b = gb.exec(document.referrer)) && b[11] && b[11] !== window.location.hostname) {
                    b = !1;
                    if (P && P.length)
                        for (e = 0; e < P.length; e++)
                            try {
                                if (new RegExp(P[e]).test(document.referrer)) {
                                    c(d.DEBUG, "Ignored: " + document.referrer);
                                    b = !0;
                                    break;
                                }
                            } catch (l) {
                                c(d.ERROR, "Problem with ignoring: " + P[e], ", error: " + l);
                            }
                    b || (a._store = a._store || document.referrer);
                }
                c(d.DEBUG, "Got metrics", a);
                return a;
            }
            function c(a, b) {
                if (h.debug && "undefined" !== typeof console) {
                    arguments[2] && "object" === typeof arguments[2] && (arguments[2] = JSON.stringify(arguments[2]));
                    Ba || (b = "[" + h.app_key + "] " + b);
                    a || (a = d.DEBUG);
                    for (var e = "", k = 2; k < arguments.length; k++) e += arguments[k];
                    e = a + b + e;
                    a === d.ERROR ? console.error(e) : a === d.WARNING ? console.warn(e) : a === d.INFO ? console.info(e) : a === d.VERBOSE ? console.log(e) : console.debug(e);
                }
            }
            function ha(a, b, e, k, l) {
                l = l || !1;
                try {
                    c(d.DEBUG, "Sending XML HTTP request");
                    var f = null;
                    window.XMLHttpRequest ? (f = new window.XMLHttpRequest()) : window.ActiveXObject && (f = new window.ActiveXObject("Microsoft.XMLHTTP"));
                    e = e || {};
                    var p = Za(e),
                        r = "GET";
                    if (h.force_post || 2e3 <= p.length) r = "POST";
                    "GET" === r ? f.open("GET", b + "?" + p, !0) : (f.open("POST", b, !0), f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
                    for (var t in h.headers) f.setRequestHeader(t, h.headers[t]);
                    f.onreadystatechange = function () {
                        4 === this.readyState &&
                            (c(d.DEBUG, a + " HTTP request completed [" + this.status + "][" + this.responseText + "]"),
                                (l ? ib(this.status, this.responseText) : jb(this.status, this.responseText))
                                    ? "function" === typeof k && k(!1, e, this.responseText)
                                    : (c(d.ERROR, a + " Failed Server XML HTTP request, ", this.status), "function" === typeof k && k(!0, e)));
                    };
                    "GET" === r ? f.send() : f.send(p);
                } catch (z) {
                    c(d.ERROR, a + " Failed XML HTTP request: " + z), "function" === typeof k && k(!0, e);
                }
            }
            function jb(a, b) {
                if (!(200 <= a && 300 > a)) return c(d.ERROR, "Http response status code is not within the expected range:[" + a + "]"), !1;
                try {
                    var e = JSON.parse(b);
                    return "[object Object]" !== Object.prototype.toString.call(e) ? (c(d.ERROR, "Http response is not JSON Object"), !1) : !!e.result;
                } catch (k) {
                    return c(d.ERROR, "Http response is not JSON: " + k), !1;
                }
            }
            function ib(a, b) {
                if (!(200 <= a && 300 > a)) return c(d.ERROR, "Http response status code is not within the expected range: " + a), !1;
                try {
                    var e = JSON.parse(b);
                    return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e) ? !0 : (c(d.ERROR, "Http response is not JSON Object nor JSON Array"), !1);
                } catch (k) {
                    return c(d.ERROR, "Http response is not JSON: " + k), !1;
                }
            }
            function kb() {
                sa = Math.max(sa, window.scrollY, document.body.scrollTop, document.documentElement.scrollTop);
            }
            function Sa() {
                if (ta) {
                    ta = !1;
                    var a = xa(),
                        b = Pa(),
                        e = bb();
                    h.check_consent("scrolls") &&
                        ((a = { type: "scroll", y: sa + e, width: b, height: a, view: h.getViewUrl() }),
                            (a = R(a, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "processScrollView", c)),
                            h.track_domains && (a.domain = window.location.hostname),
                            q({ key: "[CLY]_action", segmentation: a }));
                }
            }
            function lb(a) {
                m("cly_token", a);
            }
            function m(a, b, e, k) {
                function l(r, t, z) {
                    var L = new Date();
                    L.setTime(L.getTime() + 864e5 * z);
                    z = "; expires=" + L.toGMTString();
                    document.cookie = r + "=" + t + z + "; path=/";
                }
                function f(r) {
                    r += "=";
                    for (var t = document.cookie.split(";"), z = 0, L = t.length; z < L; z++) {
                        for (var E = t[z]; " " === E.charAt(0);) E = E.substring(1, E.length);
                        if (0 === E.indexOf(r)) return E.substring(r.length, E.length);
                    }
                    return null;
                }
                if ("none" === h.storage) c(d.WARNING, "Storage is disabled. Value with key: " + a + " won't be stored or retrieved");
                else {
                    k || ((a = h.app_key + "/" + a), h.namespace && (a = Na(h.namespace) + "/" + a));
                    e = e || "localstorage" === h.storage;
                    var p;
                    "undefined" !== typeof b && null !== b && ((b = h.serialize(b)), ca ? localStorage.setItem(a, b) : e || l(a, b, 30));
                    if ("undefined" === typeof b) return ca ? (p = localStorage.getItem(a)) : e || (p = f(a)), h.deserialize(p);
                    null === b && (ca ? localStorage.removeItem(a) : e || l(a, "", -1));
                }
            }
            function ob() {
                if (m(h.namespace + "cly_id", void 0, !1, !0)) {
                    m("cly_id", m(h.namespace + "cly_id", void 0, !1, !0));
                    m("cly_id_type", m(h.namespace + "cly_id_type", void 0, !1, !0));
                    m("cly_event", m(h.namespace + "cly_event", void 0, !1, !0));
                    m("cly_session", m(h.namespace + "cly_session", void 0, !1, !0));
                    var a = m(h.namespace + "cly_queue", void 0, !1, !0);
                    Array.isArray(a) &&
                        ((a = a.filter(function (b) {
                            return b.app_key === h.app_key;
                        })),
                            m("cly_queue", a));
                    m(h.namespace + "cly_cmp_id", void 0, !1, !0) && (m("cly_cmp_id", m(h.namespace + "cly_cmp_id", void 0, !1, !0)), m("cly_cmp_uid", m(h.namespace + "cly_cmp_uid", void 0, !1, !0)));
                    m(h.namespace + "cly_ignore", void 0, !1, !0) && m("cly_ignore", m(h.namespace + "cly_ignore", void 0, !1, !0));
                    m("cly_id", null, !1, !0);
                    m("cly_id_type", null, !1, !0);
                    m("cly_event", null, !1, !0);
                    m("cly_session", null, !1, !0);
                    m("cly_queue", null, !1, !0);
                    m("cly_cmp_id", null, !1, !0);
                    m("cly_cmp_uid", null, !1, !0);
                    m("cly_ignore", null, !1, !0);
                }
            }
            var h = this,
                Ba = !n.i,
                T = !1,
                hb = "/i",
                Ta = "/o/sdk",
                Fa = v("interval", g, 500),
                za = v("queue_size", g, 1e3),
                G = [],
                H = [],
                M = {},
                da = [],
                ea = {},
                P = v("ignore_referrers", g, []),
                Ua = null,
                pa = !0,
                ba,
                Va = 0,
                O = null,
                na = 0,
                oa = 0,
                Qa = 0,
                Ea = v("fail_timeout", g, 60),
                ua = v("inactivity_time", g, 20),
                va = 0,
                Ca = v("session_update", g, 60),
                ra = v("max_events", g, 100),
                ia = v("max_logs", g, null),
                aa = v("use_session_cookie", g, !0),
                qa = v("session_cookie_timeout", g, 30),
                Da = !0,
                Aa = !1,
                J = v("offline_mode", g, !1),
                U = {},
                Z = !0,
                mb = B(),
                ca = !0,
                ja = null,
                D = 1,
                ta = !1,
                sa = 0;
            try {
                localStorage.setItem("cly_testLocal", !0), localStorage.removeItem("cly_testLocal");
            } catch (a) {
                c(d.ERROR, "Local storage test failed, Halting local storage support: " + a), (ca = !1);
            }
            for (var A = {}, Wa = 0; Wa < n.features.length; Wa++) A[n.features[Wa]] = {};
            this.initialize = function () {
                this.serialize = g.serialize || n.serialize;
                this.deserialize = g.deserialize || n.deserialize;
                this.getViewName = g.getViewName || n.getViewName;
                this.getViewUrl = g.getViewUrl || n.getViewUrl;
                this.getSearchQuery = g.getSearchQuery || n.getSearchQuery;
                this.DeviceIdType = n.DeviceIdType;
                this.namespace = v("namespace", g, "");
                this.clearStoredId = v("clear_stored_id", g, !1);
                this.app_key = v("app_key", g, null);
                this.onload = v("onload", g, []);
                this.utm = v("utm", g, { source: !0, medium: !0, campaign: !0, term: !0, content: !0 });
                this.ignore_prefetch = v("ignore_prefetch", g, !0);
                this.debug = v("debug", g, !1);
                this.test_mode = v("test_mode", g, !1);
                this.metrics = v("metrics", g, {});
                this.headers = v("headers", g, {});
                this.url = Na(v("url", g, ""));
                this.app_version = v("app_version", g, "0.0");
                this.country_code = v("country_code", g, null);
                this.city = v("city", g, null);
                this.ip_address = v("ip_address", g, null);
                this.ignore_bots = v("ignore_bots", g, !0);
                this.force_post = v("force_post", g, !1);
                this.remote_config = v("remote_config", g, !1);
                this.ignore_visitor = v("ignore_visitor", g, !1);
                this.require_consent = v("require_consent", g, !1);
                this.track_domains = v("track_domains", g, !0);
                this.storage = v("storage", g, "default");
                this.enableOrientationTracking = v("enable_orientation_tracking", g, !0);
                this.maxKeyLength = v("max_key_length", g, 128);
                this.maxValueSize = v("max_value_size", g, 256);
                this.maxSegmentationValues = v("max_segmentation_values", g, 30);
                this.maxBreadcrumbCount = v("max_breadcrumb_count", g, null);
                this.maxStackTraceLinesPerThread = v("max_stack_trace_lines_per_thread", g, 30);
                this.maxStackTraceLineLength = v("max_stack_trace_line_length", g, 200);
                ia && !this.maxBreadcrumbCount ? ((this.maxBreadcrumbCount = ia), c(d.WARNING, "initialize, 'maxCrashLogs' is deprecated. Use 'maxBreadcrumbCount' instead!")) : ia || this.maxBreadcrumbCount || (this.maxBreadcrumbCount = 100);
                "cookie" === this.storage && (ca = !1);
                Array.isArray(P) || (P = []);
                "" === this.url && (c(d.ERROR, "initialize, Please provide server URL"), (this.ignore_visitor = !0));
                m("cly_ignore") && (this.ignore_visitor = !0);
                ob();
                this.clearStoredId && (c(d.INFO, "initialize, Clearing the device ID storage"), localStorage.removeItem(this.app_key + "/cly_id"), localStorage.removeItem(this.app_key + "/cly_id_type"));
                G = m("cly_queue") || [];
                H = m("cly_event") || [];
                M = m("cly_remote_configs") || {};
                u();
                if (window.name && 0 === window.name.indexOf("cly:"))
                    try {
                        this.passed_data = JSON.parse(window.name.replace("cly:", ""));
                    } catch (r) {
                        c(d.ERROR, "initialize, Could not parse name: " + window.name + ", error: " + r);
                    }
                else if (location.hash && 0 === location.hash.indexOf("#cly:"))
                    try {
                        this.passed_data = JSON.parse(location.hash.replace("#cly:", ""));
                    } catch (r) {
                        c(d.ERROR, "initialize, Could not parse hash: " + location.hash + ", error: " + r);
                    }
                ((this.passed_data && this.passed_data.app_key && this.passed_data.app_key === this.app_key) || (this.passed_data && !this.passed_data.app_key && Ba)) &&
                    this.passed_data.token &&
                    this.passed_data.purpose &&
                    (this.passed_data.token !== m("cly_old_token") && (lb(this.passed_data.token), m("cly_old_token", this.passed_data.token)),
                        (this.passed_data.url = this.passed_data.url || this.url),
                        "heatmap" === this.passed_data.purpose && ((this.ignore_visitor = !0), eb(), db(this.passed_data.url + "/views/heatmap.js", fb)));
                if (this.ignore_visitor) c(d.WARNING, "initialize, Ignoring this visitor");
                else {
                    c(d.DEBUG, "initialize, app_key:[" + this.app_key + "], url:[" + this.url + "]");
                    c(d.DEBUG, "initialize, device_id:[" + v("device_id", g, void 0) + "]");
                    c(d.DEBUG, "initialize, require_consent is enabled:[" + this.require_consent + "]");
                    try {
                        c(d.DEBUG, "initialize, metric override:[" + JSON.stringify(this.metrics) + "]"),
                            c(d.DEBUG, "initialize, header override:[" + JSON.stringify(this.headers) + "]"),
                            c(d.DEBUG, "initialize, number of onload callbacks provided:[" + this.onload.length + "]"),
                            c(d.DEBUG, "initialize, utm tags:[" + JSON.stringify(this.utm) + "]"),
                            P && c(d.DEBUG, "initialize, referrers to ignore :[" + JSON.stringify(P) + "]");
                    } catch (r) {
                        c(d.ERROR, "initialize, Could not stringify some config object values");
                    }
                    c(d.DEBUG, "initialize, app_version:[" + this.app_version + "]");
                    c(d.DEBUG, "initialize, provided location info; country_code:[" + this.country_code + "], city:[" + this.city + "], ip_address:[" + this.ip_address + "]");
                    "" !== this.namespace && c(d.DEBUG, "initialize, namespace given:[" + this.namespace + "]");
                    this.clearStoredId && c(d.DEBUG, "initialize, clearStoredId flag set to:[" + this.clearStoredId + "]");
                    this.ignore_prefetch && c(d.DEBUG, "initialize, ignoring pre-fetching and pre-rendering from counting as real website visits :[" + this.ignore_prefetch + "]");
                    this.test_mode && c(d.WARNING, "initialize, test_mode:[" + this.test_mode + "], queues won't be processed");
                    "default" !== this.storage && c(d.DEBUG, "initialize, storage is set to:[" + this.storage + "]");
                    this.ignore_bots && c(d.DEBUG, "initialize, ignore traffic from bots :[" + this.ignore_bots + "]");
                    this.force_post && c(d.DEBUG, "initialize, forced post method for all requests:[" + this.force_post + "]");
                    this.remote_config && c(d.DEBUG, "initialize, remote_config callback provided:[" + !!this.remote_config + "]");
                    this.ignore_visitor && c(d.WARNING, "initialize, ignore_visitor:[" + this.ignore_visitor + "], this user will not be tracked");
                    this.track_domains && c(d.DEBUG, "initialize, tracking domain info:[" + this.track_domains + "]");
                    this.enableOrientationTracking && c(d.DEBUG, "initialize, enableOrientationTracking:[" + this.enableOrientationTracking + "]");
                    aa || c(d.WARNING, "initialize, use_session_cookie is disabled:[" + aa + "]");
                    J && c(d.DEBUG, "initialize, offline_mode:[" + J + "], user info won't be send to the servers");
                    c(d.DEBUG, "initialize, 'getViewName' callback override provided:[" + !!this.getViewName + "]");
                    c(d.DEBUG, "initialize, 'getSearchQuery' callback override provided:[" + !!this.getSearchQuery + "]");
                    128 !== this.maxKeyLength && c(d.DEBUG, "initialize, maxKeyLength set to:[" + this.maxKeyLength + "] characters");
                    256 !== this.maxValueSize && c(d.DEBUG, "initialize, maxValueSize set to:[" + this.maxValueSize + "] characters");
                    30 !== this.maxSegmentationValues && c(d.DEBUG, "initialize, maxSegmentationValues set to:[" + this.maxSegmentationValues + "] key/value pairs");
                    100 !== this.maxBreadcrumbCount && c(d.DEBUG, "initialize, maxBreadcrumbCount for custom logs set to:[" + this.maxBreadcrumbCount + "] entries");
                    30 !== this.maxStackTraceLinesPerThread && c(d.DEBUG, "initialize, maxStackTraceLinesPerThread set to:[" + this.maxStackTraceLinesPerThread + "] lines");
                    200 !== this.maxStackTraceLineLength && c(d.DEBUG, "initialize, maxStackTraceLineLength set to:[" + this.maxStackTraceLineLength + "] characters");
                    500 !== Fa && c(d.DEBUG, "initialize, interval for heartbeats set to:[" + Fa + "] milliseconds");
                    1e3 !== za && c(d.DEBUG, "initialize, queue_size set to:[" + za + "] items max");
                    60 !== Ea && c(d.DEBUG, "initialize, fail_timeout set to:[" + Ea + "] seconds of wait time after a failed connection to server");
                    20 !== ua && c(d.DEBUG, "initialize, inactivity_time set to:[" + ua + "] minutes to consider a user as inactive after no observable action");
                    60 !== Ca && c(d.DEBUG, "initialize, session_update set to:[" + Ca + "] seconds to check if extending a session is needed while the user is active");
                    100 !== ra && c(d.DEBUG, "initialize, max_events set to:[" + ra + "] events to send in one batch");
                    ia && c(d.WARNING, "initialize, max_logs set to:[" + ia + "] breadcrumbs to store for crash logs max, deprecated ");
                    30 !== qa && c(d.DEBUG, "initialize, session_cookie_timeout set to:[" + qa + "] minutes to expire a cookies session");
                    c(d.INFO, "initialize, Countly initialized");
                    var a = null,
                        b = h.getSearchQuery(),
                        e = !1,
                        k = {};
                    if (b) {
                        b = b.substring(1).split("&");
                        for (var l = 0; l < b.length; l++) {
                            var f = b[l].split("=");
                            "cly_id" === f[0]
                                ? m("cly_cmp_id", f[1])
                                : "cly_uid" === f[0]
                                    ? m("cly_cmp_uid", f[1])
                                    : "cly_device_id" === f[0]
                                        ? (a = f[1])
                                        : 0 === (f[0] + "").indexOf("utm_") && this.utm[f[0].replace("utm_", "")] && ((k[f[0].replace("utm_", "")] = f[1]), (e = !0));
                        }
                    }
                    b = "[CLY]_temp_id" === m("cly_id");
                    l = v("device_id", g, void 0);
                    m("cly_id") && !b
                        ? ((this.device_id = m("cly_id")),
                            c(d.INFO, "initialize, Set the stored device ID"),
                            (D = m("cly_id_type")),
                            D || (c(d.INFO, "initialize, No device ID type info from the previous session, falling back to DEVELOPER_SUPPLIED"), (D = 0)))
                        : null !== a
                            ? (c(d.INFO, "initialize, Device ID set by URL"), (this.device_id = a), (D = 3))
                            : l
                                ? (c(d.INFO, "initialize, Device ID set by developer"), (this.device_id = l), g && Object.keys(g).length ? void 0 !== g.device_id && (D = 0) : void 0 !== n.device_id && (D = 0))
                                : J || b
                                    ? ((this.device_id = "[CLY]_temp_id"),
                                        (D = 2),
                                        J && b
                                            ? c(d.INFO, "initialize, Temp ID set, continuing offline mode from previous app session")
                                            : J && !b
                                                ? c(d.INFO, "initialize, Temp ID set, entering offline mode")
                                                : ((J = !0), c(d.INFO, "initialize, Temp ID set, enabling offline mode")))
                                    : (c(d.INFO, "initialize, Generating the device ID"), (this.device_id = v("device_id", g, Ra())), g && Object.keys(g).length ? void 0 !== g.device_id && (D = 0) : void 0 !== n.device_id && (D = 0));
                    m("cly_id", this.device_id);
                    m("cly_id_type", D);
                    if (e) {
                        for (var p in this.utm) k[p] ? this.userData.set("utm_" + p, k[p]) : this.userData.unset("utm_" + p);
                        this.userData.save();
                    }
                    W();
                    setTimeout(function () {
                        Y();
                        h.remote_config && h.fetch_remote_config(h.remote_config);
                    }, 1);
                    document.documentElement.setAttribute("data-countly-useragent", ma());
                }
            };
            this.halt = function () {
                c(d.WARNING, "halt, Resetting Countly");
                n.i = void 0;
                Ba = !n.i;
                T = !1;
                hb = "/i";
                Ta = "/o/sdk";
                Fa = 500;
                za = 1e3;
                G = [];
                H = [];
                M = {};
                da = [];
                ea = {};
                P = [];
                Ua = null;
                pa = !0;
                Va = 0;
                O = null;
                Qa = oa = na = 0;
                Ea = 60;
                ua = 20;
                va = 0;
                Ca = 60;
                ra = 100;
                ia = null;
                aa = !0;
                qa = 30;
                Da = !0;
                J = Aa = !1;
                U = {};
                Z = !0;
                mb = B();
                ca = !0;
                ja = null;
                D = 1;
                ta = !1;
                sa = 0;
                try {
                    localStorage.setItem("cly_testLocal", !0), localStorage.removeItem("cly_testLocal");
                } catch (b) {
                    c(d.ERROR, "halt, Local storage test failed, will fallback to cookies"), (ca = !1);
                }
                n.features = "sessions events views scrolls clicks forms crashes attribution users star-rating location apm feedback remote-config".split(" ");
                A = {};
                for (var a = 0; a < n.features.length; a++) A[n.features[a]] = {};
                h.app_key = void 0;
                h.device_id = void 0;
                h.onload = void 0;
                h.utm = void 0;
                h.ignore_prefetch = void 0;
                h.debug = void 0;
                h.test_mode = void 0;
                h.metrics = void 0;
                h.headers = void 0;
                h.url = void 0;
                h.app_version = void 0;
                h.country_code = void 0;
                h.city = void 0;
                h.ip_address = void 0;
                h.ignore_bots = void 0;
                h.force_post = void 0;
                h.remote_config = void 0;
                h.ignore_visitor = void 0;
                h.require_consent = void 0;
                h.track_domains = void 0;
                h.storage = void 0;
                h.enableOrientationTracking = void 0;
                h.maxKeyLength = void 0;
                h.maxValueSize = void 0;
                h.maxSegmentationValues = void 0;
                h.maxBreadcrumbCount = void 0;
                h.maxStackTraceLinesPerThread = void 0;
                h.maxStackTraceLineLength = void 0;
            };
            this.group_features = function (a) {
                c(d.INFO, "group_features, Grouping features");
                if (a)
                    for (var b in a)
                        A[b]
                            ? c(d.WARNING, "group_features, Feature name [" + b + "] is already reserved")
                            : "string" === typeof a[b]
                                ? (A[b] = { features: [a[b]] })
                                : a[b] && Array.isArray(a[b]) && a[b].length
                                    ? (A[b] = { features: a[b] })
                                    : c(d.ERROR, "group_features, Incorrect feature list for [" + b + "] value: [" + a[b] + "]");
                else c(d.ERROR, "group_features, Incorrect features:[" + a + "]");
            };
            this.check_consent = function (a) {
                c(d.INFO, "check_consent, Checking if consent is given for specific feature");
                if (!this.require_consent) return c(d.INFO, "check_consent, require_consent is off, no consent is necessary"), !0;
                if (A[a]) return !(!A[a] || !A[a].optin);
                c(d.ERROR, "check_consent, No feature available for [" + a + "]");
                return !1;
            };
            this.get_device_id_type = function () {
                c(d.INFO, "check_device_id_type, Retrieving the current device id type.[" + D + "]");
                switch (D) {
                    case 1:
                        var a = h.DeviceIdType.SDK_GENERATED;
                        break;
                    case 3:
                    case 0:
                        a = h.DeviceIdType.DEVELOPER_SUPPLIED;
                        break;
                    case 2:
                        a = h.DeviceIdType.TEMPORARY_ID;
                        break;
                    default:
                        a = -1;
                }
                return a;
            };
            this.get_device_id = function () {
                c(d.INFO, "get_device_id, Retrieving the device id: [" + this.device_id + "]");
                return this.device_id;
            };
            this.check_any_consent = function () {
                c(d.INFO, "check_any_consent, Checking if any consent is given");
                if (!this.require_consent) return c(d.INFO, "check_any_consent, require_consent is off, no consent is necessary"), !0;
                for (var a in A) if (A[a] && A[a].optin) return !0;
                c(d.INFO, "check_any_consent, No consents given");
                return !1;
            };
            this.add_consent = function (a) {
                c(d.INFO, "add_consent, Adding consent for [" + a + "]");
                if (Array.isArray(a)) for (var b = 0; b < a.length; b++) this.add_consent(a[b]);
                else
                    A[a]
                        ? A[a].features
                            ? ((A[a].optin = !0), this.add_consent(A[a].features))
                            : !0 !== A[a].optin &&
                            ((A[a].optin = !0),
                                nb(),
                                setTimeout(function () {
                                    "sessions" === a && U.begin_session
                                        ? (h.begin_session.apply(h, U.begin_session), (U.begin_session = null))
                                        : "views" === a && U.track_pageview && ((O = null), h.track_pageview.apply(h, U.track_pageview), (U.track_pageview = null));
                                }, 1))
                        : c(d.ERROR, "add_consent, No feature available for [" + a + "]");
            };
            this.remove_consent = function (a) {
                c(d.INFO, "remove_consent, Removing consent for [" + a + "]");
                this.remove_consent_internal(a, !0);
            };
            this.remove_consent_internal = function (a, b) {
                b = b || !1;
                if (Array.isArray(a)) for (var e = 0; e < a.length; e++) this.remove_consent_internal(a[e], b);
                else A[a] ? (A[a].features ? this.remove_consent_internal(A[a].features, b) : ((A[a].optin = !1), b && !1 !== A[a].optin && nb())) : c(d.ERROR, "remove_consent, No feature available for [" + a + "]");
            };
            var Ha,
                nb = function () {
                    Ha && (clearTimeout(Ha), (Ha = null));
                    Ha = setTimeout(function () {
                        for (var a = {}, b = 0; b < n.features.length; b++) a[n.features[b]] = !0 === A[n.features[b]].optin ? !0 : !1;
                        F({ consent: JSON.stringify(a) });
                        c(d.DEBUG, "Consent update request has been sent to the queue.");
                    }, 1e3);
                };
            this.enable_offline_mode = function () {
                c(d.INFO, "enable_offline_mode, Enabling offline mode");
                this.remove_consent_internal(n.features, !1);
                J = !0;
                this.device_id = "[CLY]_temp_id";
                D = 2;
            };
            this.disable_offline_mode = function (a) {
                c(d.INFO, "disable_offline_mode, Disabling offline mode");
                J = !1;
                a && this.device_id !== a
                    ? ((this.device_id = a), (D = 0), m("cly_id", this.device_id), m("cly_id_type", 0), c(d.INFO, "disable_offline_mode, Changing id to: " + this.device_id))
                    : ((this.device_id = Ra()), this.device_id !== m("cly_id") && (m("cly_id", this.device_id), m("cly_id_type", 1)));
                a = !1;
                if (0 < G.length) for (var b = 0; b < G.length; b++) "[CLY]_temp_id" === G[b].device_id && ((G[b].device_id = this.device_id), (a = !0));
                a && m("cly_queue", G, !0);
            };
            this.begin_session = function (a, b) {
                c(d.INFO, "begin_session, Starting the session");
                a && c(d.INFO, "begin_session, Heartbeats are disabled");
                b && c(d.INFO, "begin_session, Session starts irrespective of session cookie");
                if (this.check_consent("sessions")) {
                    if (!T) {
                        this.enableOrientationTracking &&
                            (this.report_orientation(),
                                x(window, "resize", function () {
                                    h.report_orientation();
                                }));
                        ba = B();
                        T = !0;
                        pa = !a;
                        var e = m("cly_session");
                        if (b || !aa || !e || parseInt(e) <= B()) c(d.INFO, "begin_session, Session started"), null === ja && (ja = !0), (e = { begin_session: 1 }), (e.metrics = JSON.stringify(Ga())), F(e);
                        m("cly_session", B() + 60 * qa);
                    }
                } else U.begin_session = arguments;
            };
            this.session_duration = function (a) {
                c(d.INFO, "session_duration, Reporting session duration");
                this.check_consent("sessions") && T && (c(d.INFO, "session_duration, Session extended: ", a), F({ session_duration: a }), X());
            };
            this.end_session = function (a, b) {
                c(d.INFO, "end_session, Ending the current session");
                this.check_consent("sessions") && T && ((a = a || B() - ba), S(), !aa || b ? (c(d.INFO, "end_session, Session ended"), F({ end_session: 1, session_duration: a })) : this.session_duration(a), (T = !1));
            };
            this.change_id = function (a, b) {
                c(d.INFO, "change_id, Changing the ID");
                b && c(d.INFO, "change_id, Will merge the IDs");
                if (!a || "string" !== typeof a || 0 === a.length) c(d.ERROR, "change_id, The provided ID: [" + a + "] is not a valid ID");
                else if (J) c(d.WARNING, "change_id, Offline mode was on, initiating disabling sequence instead."), this.disable_offline_mode(a);
                else if (this.device_id !== a) {
                    b || (C(), this.end_session(null, !0), (ea = {}), this.remove_consent_internal(n.features, !1));
                    var e = this.device_id;
                    this.device_id = a;
                    D = 0;
                    m("cly_id", this.device_id);
                    m("cly_id_type", 0);
                    c(d.INFO, "change_id, Changing ID");
                    b ? F({ old_device_id: e }) : this.begin_session(!pa, !0);
                    this.remote_config && ((M = {}), m("cly_remote_configs", M), this.fetch_remote_config(this.remote_config));
                }
            };
            this.add_event = function (a) {
                c(d.INFO, "add_event, Adding event: ", a);
                switch (a.key) {
                    case "[CLY]_nps":
                        var b = this.check_consent("feedback");
                        break;
                    case "[CLY]_survey":
                        b = this.check_consent("feedback");
                        break;
                    case "[CLY]_star_rating":
                        b = this.check_consent("star-rating");
                        break;
                    case "[CLY]_view":
                        b = this.check_consent("views");
                        break;
                    case "[CLY]_orientation":
                        b = this.check_consent("users");
                        break;
                    case "[CLY]_push_action":
                        b = this.check_consent("push");
                        break;
                    case "[CLY]_action":
                        b = this.check_consent("clicks") || this.check_consent("scroll");
                        break;
                    default:
                        b = this.check_consent("events");
                }
                b && q(a);
            };
            this.start_event = function (a) {
                c(d.INFO, "start_event, Starting timed event with key: [" + a + "]");
                a = w(a, h.maxKeyLength, "start_event", c);
                ea[a] ? c(d.WARNING, "start_event, Timed event with key [" + a + "] already started") : (ea[a] = B());
            };
            this.end_event = function (a) {
                c(d.INFO, "end_event, Ending timed event");
                "string" === typeof a && (a = { key: a });
                a.key ? (ea[a.key] ? ((a.dur = B() - ea[a.key]), this.add_event(a), delete ea[a.key]) : c(d.ERROR, "end_event, Timed event with key [" + a.key + "] was not started")) : c(d.ERROR, "end_event, Timed event must have a key property");
            };
            this.report_orientation = function (a) {
                c(d.INFO, "report_orientation, Reporting orientation");
                this.check_consent("users") && q({ key: "[CLY]_orientation", segmentation: { mode: a || (window.innerWidth > window.innerHeight ? "landscape" : "portrait") } });
            };
            this.report_conversion = function (a, b) {
                c(d.WARNING, "report_conversion, Deprecated function call! Use 'recordDirectAttribution' in place of this call. Call will be redirected now!");
                this.recordDirectAttribution(a, b);
            };
            this.recordDirectAttribution = function (a, b) {
                c(d.INFO, "recordDirectAttribution, Recording the attribution for campaign ID: [" + a + "] and the user ID: [" + b + "]");
                this.check_consent("attribution") && ((a = a || m("cly_cmp_id") || "cly_organic"), (b = b || m("cly_cmp_uid")), a && b ? F({ campaign_id: a, campaign_user: b }) : a && F({ campaign_id: a }));
            };
            this.user_details = function (a) {
                c(d.INFO, "user_details, Trying to add user details: ", a);
                this.check_consent("users") &&
                    ((a.name = w(a.name, h.maxValueSize, "user_details", c)),
                        (a.username = w(a.username, h.maxValueSize, "user_details", c)),
                        (a.email = w(a.email, h.maxValueSize, "user_details", c)),
                        (a.organization = w(a.organization, h.maxValueSize, "user_details", c)),
                        (a.phone = w(a.phone, h.maxValueSize, "user_details", c)),
                        (a.picture = w(a.picture, 4096, "user_details", c)),
                        (a.gender = w(a.gender, h.maxValueSize, "user_details", c)),
                        (a.byear = w(a.byear, h.maxValueSize, "user_details", c)),
                        (a.custom = R(a.custom, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "user_details", c)),
                        F({ user_details: JSON.stringify(ka(a, "name username email organization phone picture gender byear custom".split(" "))) }));
            };
            var Q = {},
                V = function (a, b, e) {
                    h.check_consent("users") && (Q[a] || (Q[a] = {}), "$push" === e || "$pull" === e || "$addToSet" === e ? (Q[a][e] || (Q[a][e] = []), Q[a][e].push(b)) : (Q[a][e] = b));
                };
            this.userData = {
                set: function (a, b) {
                    c(d.INFO, "set, Setting user's custom property value: [" + b + "] under the key: [" + a + "]");
                    a = w(a, h.maxKeyLength, "userData set", c);
                    b = w(b, h.maxValueSize, "userData set", c);
                    Q[a] = b;
                },
                unset: function (a) {
                    c(d.INFO, "unset, Resetting user's custom property with key: [" + a + "] ");
                    Q[a] = "";
                },
                set_once: function (a, b) {
                    c(d.INFO, "set_once, Setting user's unique custom property value: [" + b + "] under the key: [" + a + "] ");
                    a = w(a, h.maxKeyLength, "userData set_once", c);
                    b = w(b, h.maxValueSize, "userData set_once", c);
                    V(a, b, "$setOnce");
                },
                increment: function (a) {
                    c(d.INFO, "increment, Increasing user's custom property value under the key: [" + a + "] by one");
                    a = w(a, h.maxKeyLength, "userData increment", c);
                    V(a, 1, "$inc");
                },
                increment_by: function (a, b) {
                    c(d.INFO, "increment_by, Increasing user's custom property value under the key: [" + a + "] by: [" + b + "]");
                    a = w(a, h.maxKeyLength, "userData increment_by", c);
                    b = w(b, h.maxValueSize, "userData increment_by", c);
                    V(a, b, "$inc");
                },
                multiply: function (a, b) {
                    c(d.INFO, "multiply, Multiplying user's custom property value under the key: [" + a + "] by: [" + b + "]");
                    a = w(a, h.maxKeyLength, "userData multiply", c);
                    b = w(b, h.maxValueSize, "userData multiply", c);
                    V(a, b, "$mul");
                },
                max: function (a, b) {
                    c(d.INFO, "max, Saving user's maximum custom property value compared to the value: [" + b + "] under the key: [" + a + "]");
                    a = w(a, h.maxKeyLength, "userData max", c);
                    b = w(b, h.maxValueSize, "userData max", c);
                    V(a, b, "$max");
                },
                min: function (a, b) {
                    c(d.INFO, "min, Saving user's minimum custom property value compared to the value: [" + b + "] under the key: [" + a + "]");
                    a = w(a, h.maxKeyLength, "userData min", c);
                    b = w(b, h.maxValueSize, "userData min", c);
                    V(a, b, "$min");
                },
                push: function (a, b) {
                    c(d.INFO, "push, Pushing a value: [" + b + "] under the key: [" + a + "] to user's custom property array");
                    a = w(a, h.maxKeyLength, "userData push", c);
                    b = w(b, h.maxValueSize, "userData push", c);
                    V(a, b, "$push");
                },
                push_unique: function (a, b) {
                    c(d.INFO, "push_unique, Pushing a unique value: [" + b + "] under the key: [" + a + "] to user's custom property array");
                    a = w(a, h.maxKeyLength, "userData push_unique", c);
                    b = w(b, h.maxValueSize, "userData push_unique", c);
                    V(a, b, "$addToSet");
                },
                pull: function (a, b) {
                    c(d.INFO, "pull, Removing the value: [" + b + "] under the key: [" + a + "] from user's custom property array");
                    V(a, b, "$pull");
                },
                save: function () {
                    c(d.INFO, "save, Saving changes to user's custom property");
                    h.check_consent("users") && F({ user_details: JSON.stringify({ custom: Q }) });
                    Q = {};
                },
            };
            this.report_trace = function (a) {
                c(d.INFO, "report_trace, Reporting performance trace");
                if (this.check_consent("apm")) {
                    for (var b = "type name stz etz apm_metrics apm_attr".split(" "), e = 0; e < b.length; e++)
                        if ("apm_attr" !== b[e] && "undefined" === typeof a[b[e]]) {
                            c(d.WARNING, "report_trace, APM trace don't have the property: " + b[e]);
                            return;
                        }
                    a.name = w(a.name, h.maxKeyLength, "report_trace", c);
                    a.app_metrics = R(a.app_metrics, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "report_trace", c);
                    b = ka(a, b);
                    b.timestamp = a.stz;
                    a = new Date();
                    b.hour = a.getHours();
                    b.dow = a.getDay();
                    F({ apm: JSON.stringify(b) });
                    c(d.INFO, "report_trace, Successfully adding APM trace: ", b);
                }
            };
            this.track_errors = function (a) {
                c(d.INFO, "track_errors, Started tracking errors");
                n.i[this.app_key].tracking_crashes = !0;
                window.cly_crashes ||
                    ((window.cly_crashes = !0),
                        (Ua = a),
                        (window.onerror = function r(e, k, l, f, p) {
                            if (void 0 !== p && null !== p) Ma(p, !1);
                            else {
                                f = f || (window.event && window.event.errorCharacter);
                                p = "";
                                "undefined" !== typeof e && (p += e + "\n");
                                "undefined" !== typeof k && (p += "at " + k);
                                "undefined" !== typeof l && (p += ":" + l);
                                "undefined" !== typeof f && (p += ":" + f);
                                p += "\n";
                                try {
                                    e = [];
                                    for (var t = r.caller; t;) e.push(t.name), (t = t.caller);
                                    p += e.join("\n");
                                } catch (z) {
                                    c(d.ERROR, "track_errors, Call stack generation experienced a problem: " + z);
                                }
                                Ma(p, !1);
                            }
                        }),
                        window.addEventListener("unhandledrejection", function (e) {
                            Ma(Error("Unhandled rejection (reason: " + (e.reason && e.reason.stack ? e.reason.stack : e.reason) + ")."), !0);
                        }));
            };
            this.log_error = function (a, b) {
                c(d.INFO, "log_error, Logging errors");
                this.recordError(a, !0, b);
            };
            this.add_log = function (a) {
                c(d.INFO, "add_log, Adding a new log of breadcrumbs: [ " + a + " ]");
                if (this.check_consent("crashes")) {
                    for (a = w(a, h.maxValueSize, "add_log", c); da.length >= h.maxBreadcrumbCount;) da.shift(), c(d.WARNING, "add_log, Reached maximum crashLogs size. Will erase the oldest one.");
                    da.push(a);
                }
            };
            this.fetch_remote_config = function (a, b, e) {
                c(d.INFO, "fetch_remote_config, Fetching remote config");
                if (this.check_consent("remote-config")) {
                    var k = { method: "fetch_remote_config" };
                    this.check_consent("sessions") && (k.metrics = JSON.stringify(Ga()));
                    a && (e || "function" !== typeof a ? Array.isArray(a) && a.length && (c(d.INFO, "fetch_remote_config, Keys to fetch: [ " + a + " ]"), (k.keys = JSON.stringify(a))) : ((e = a), (a = null)));
                    b && ((c(d.INFO, "fetch_remote_config, Keys to omit: [ " + b + " ]"), e || "function" !== typeof b) ? Array.isArray(b) && b.length && (k.omit_keys = JSON.stringify(b)) : ((e = b), (b = null)));
                    la(k);
                    ha(
                        "fetch_remote_config",
                        this.url + Ta,
                        k,
                        function (l, f, p) {
                            if (l) c(d.ERROR, "fetch_remote_config, An error occurred: " + l);
                            else {
                                try {
                                    var r = JSON.parse(p);
                                    if (k.keys || k.omit_keys) for (var t in r) M[t] = r[t];
                                    else M = r;
                                    m("cly_remote_configs", M);
                                } catch (z) {
                                    c(d.ERROR, "fetch_remote_config, Had an issue while parsing the response: " + z);
                                }
                                "function" === typeof e && (c(d.INFO, "fetch_remote_config, Callback function is provided"), e(l, M));
                            }
                        },
                        !0
                    );
                } else c(d.ERROR, "fetch_remote_config, Remote config requires explicit consent"), "function" === typeof e && e(Error("Remote config requires explicit consent"), M);
            };
            this.get_remote_config = function (a) {
                c(d.INFO, "get_remote_config, Getting remote config");
                return "undefined" !== typeof a ? M[a] : M;
            };
            this.stop_time = function () {
                c(d.INFO, "stop_time, Stopping tracking duration");
                Z && ((Z = !1), (Va = B() - ba), (oa = B() - na));
            };
            this.start_time = function () {
                c(d.INFO, "start_time, Starting tracking duration");
                Z || ((Z = !0), (ba = B() - Va), (na = B() - oa), (oa = 0), X());
            };
            this.track_sessions = function () {
                function a() {
                    document[e] || !document.hasFocus() ? h.stop_time() : h.start_time();
                }
                function b() {
                    va >= ua && h.start_time();
                    va = 0;
                }
                c(d.INFO, "track_session, Starting tracking user session");
                this.begin_session();
                this.start_time();
                x(window, "beforeunload", function () {
                    C();
                    h.end_session();
                });
                var e = "hidden";
                x(window, "focus", a);
                x(window, "blur", a);
                x(window, "pageshow", a);
                x(window, "pagehide", a);
                "onfocusin" in document && (x(window, "focusin", a), x(window, "focusout", a));
                e in document
                    ? document.addEventListener("visibilitychange", a)
                    : "mozHidden" in document
                        ? ((e = "mozHidden"), document.addEventListener("mozvisibilitychange", a))
                        : "webkitHidden" in document
                            ? ((e = "webkitHidden"), document.addEventListener("webkitvisibilitychange", a))
                            : "msHidden" in document && ((e = "msHidden"), document.addEventListener("msvisibilitychange", a));
                x(window, "mousemove", b);
                x(window, "click", b);
                x(window, "keydown", b);
                x(window, "scroll", b);
                setInterval(function () {
                    va++;
                    va >= ua && h.stop_time();
                }, 6e4);
            };
            this.track_pageview = function (a, b, e) {
                c(d.INFO, "track_pageview, Tracking page views");
                c(d.VERBOSE, "track_pageview, last view is:[" + O + "]");
                O && (c(d.DEBUG, "track_pageview, Scroll registry triggered"), Sa(), (ta = !0), (sa = 0));
                S();
                a = w(a, h.maxKeyLength, "track_pageview", c);
                e = R(e, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "track_pageview", c);
                a && Array.isArray(a) && ((b = a), (a = null));
                a || (a = this.getViewName());
                if (void 0 === a || "" === a) c(d.ERROR, "track_pageview, No page name to track (it is either undefined or empty string). No page view can be tracked.");
                else if (null === a) c(d.ERROR, "track_pageview, View name returned as null. Page view will be ignored.");
                else {
                    if (b && b.length)
                        for (var k = 0; k < b.length; k++)
                            try {
                                if (new RegExp(b[k]).test(a)) {
                                    c(d.INFO, "track_pageview, Ignoring the page: " + a);
                                    return;
                                }
                            } catch (p) {
                                c(d.ERROR, "track_pageview, Problem with finding ignore list item: " + b[k] + ", error: " + p);
                            }
                    O = a;
                    na = B();
                    c(d.VERBOSE, "track_pageview, last view is assigned:[" + O + "]");
                    k = { name: a, visit: 1, view: h.getViewUrl() };
                    k = R(k, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "track_pageview", c);
                    this.track_domains && (k.domain = window.location.hostname);
                    if (aa)
                        if (T) ja && ((ja = !1), (k.start = 1));
                        else {
                            var l = m("cly_session");
                            if (!l || parseInt(l) <= B()) (ja = !1), (k.start = 1);
                        }
                    else "undefined" !== typeof document.referrer && document.referrer.length && (l = gb.exec(document.referrer)) && l[11] && l[11] !== window.location.hostname && (k.start = 1);
                    if (e) for (var f in e) "undefined" === typeof k[f] && (k[f] = e[f]);
                    this.check_consent("views") ? q({ key: "[CLY]_view", segmentation: k }) : (U.track_pageview = arguments);
                }
            };
            this.track_view = function (a, b, e) {
                c(d.INFO, "track_view, Initiating tracking page views");
                this.track_pageview(a, b, e);
            };
            this.track_clicks = function (a) {
                c(d.INFO, "track_clicks, Starting to track clicks");
                a && c(d.INFO, "track_clicks, Tracking the specified children");
                a = a || document;
                var b = !0;
                x(a, "click", function (e) {
                    if (b) {
                        b = !1;
                        Oa(e);
                        if ("undefined" !== typeof e.pageX && "undefined" !== typeof e.pageY) {
                            var k = xa(),
                                l = Pa();
                            h.check_consent("clicks") &&
                                ((e = { type: "click", x: e.pageX, y: e.pageY, width: l, height: k, view: h.getViewUrl() }),
                                    (e = R(e, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "processClick", c)),
                                    h.track_domains && (e.domain = window.location.hostname),
                                    q({ key: "[CLY]_action", segmentation: e }));
                        }
                        setTimeout(function () {
                            b = !0;
                        }, 1e3);
                    }
                });
            };
            this.track_scrolls = function (a) {
                c(d.INFO, "track_scrolls, Starting to track scrolls");
                a && c(d.INFO, "track_scrolls, Tracking the specified children");
                a = a || window;
                ta = !0;
                x(a, "scroll", kb);
                x(a, "beforeunload", Sa);
            };
            this.track_links = function (a) {
                c(d.INFO, "track_links, Starting to track clicks to links");
                a && c(d.INFO, "track_links, Tracking the specified children");
                a = a || document;
                x(a, "click", function (b) {
                    a: {
                        var e = Ia(b);
                        var k;
                        for (k = "A"; e;) {
                            if (e.nodeName.toUpperCase() === k) break a;
                            e = e.parentElement;
                        }
                        e = void 0;
                    }
                    e && (Oa(b), h.check_consent("clicks") && q({ key: "linkClick", segmentation: { href: e.href, text: e.innerText, id: e.id, view: h.getViewUrl() } }));
                });
            };
            this.track_forms = function (a, b) {
                function e(k) {
                    return k.name || k.id || k.type || k.nodeName;
                }
                c(d.INFO, "track_forms, Starting to track form submissions. DOM object provided:[" + !!a + "] Tracking hidden inputs :[" + !!b + "]");
                a = a || document;
                x(a, "submit", function (k) {
                    k = Ia(k);
                    var l = {
                        id: k.attributes.id && k.attributes.id.nodeValue,
                        name: k.attributes.name && k.attributes.name.nodeValue,
                        action: k.attributes.action && k.attributes.action.nodeValue,
                        method: k.attributes.method && k.attributes.method.nodeValue,
                        view: h.getViewUrl(),
                    },
                        f;
                    if ("undefined" !== typeof k.elements) {
                        for (var p = 0; p < k.elements.length; p++)
                            (f = k.elements[p]) &&
                                "password" !== f.type &&
                                -1 === f.className.indexOf("cly_user_ignore") &&
                                ("undefined" === typeof l["input:" + e(f)] && (l["input:" + e(f)] = []),
                                    "select" === f.nodeName.toLowerCase()
                                        ? "undefined" !== typeof f.multiple
                                            ? l["input:" + e(f)].push(fa(f))
                                            : l["input:" + e(f)].push(f.options[f.selectedIndex].value)
                                        : "input" === f.nodeName.toLowerCase()
                                            ? "undefined" !== typeof f.type
                                                ? "checkbox" === f.type.toLowerCase() || "radio" === f.type.toLowerCase()
                                                    ? f.checked && l["input:" + e(f)].push(f.value)
                                                    : ("hidden" !== f.type.toLowerCase() || b) && l["input:" + e(f)].push(f.value)
                                                : l["input:" + e(f)].push(f.value)
                                            : "textarea" === f.nodeName.toLowerCase()
                                                ? l["input:" + e(f)].push(f.value)
                                                : "undefined" !== typeof f.value && l["input:" + e(f)].push(f.value));
                        for (var r in l) l[r] && "function" === typeof l[r].join && (l[r] = l[r].join(", "));
                    }
                    h.check_consent("forms") && q({ key: "formSubmit", segmentation: l });
                });
            };
            this.collect_from_forms = function (a, b) {
                c(d.INFO, "collect_from_forms, Starting to collect possible user data. DOM object provided:[" + !!a + "] Submitting custom user property:[" + !!b + "]");
                a = a || document;
                x(a, "submit", function (e) {
                    e = Ia(e);
                    var k = {},
                        l = !1,
                        f;
                    if ("undefined" !== typeof e.elements) {
                        var p = {},
                            r = a.getElementsByTagName("LABEL"),
                            t;
                        for (t = 0; t < r.length; t++) r[t].htmlFor && "" !== r[t].htmlFor && (p[r[t].htmlFor] = r[t].innerText || r[t].textContent || r[t].innerHTML);
                        for (t = 0; t < e.elements.length; t++)
                            if ((f = e.elements[t]) && "password" !== f.type && -1 === f.className.indexOf("cly_user_ignore"))
                                if (
                                    ((r = ""),
                                        "select" === f.nodeName.toLowerCase()
                                            ? (r = "undefined" !== typeof f.multiple ? fa(f) : f.options[f.selectedIndex].value)
                                            : "input" === f.nodeName.toLowerCase()
                                                ? "undefined" !== typeof f.type
                                                    ? "checkbox" === f.type.toLowerCase() || "radio" === f.type.toLowerCase()
                                                        ? f.checked && (r = f.value)
                                                        : (r = f.value)
                                                    : (r = f.value)
                                                : "textarea" === f.nodeName.toLowerCase()
                                                    ? (r = f.value)
                                                    : "undefined" !== typeof f.value && (r = f.value),
                                        f.className && -1 !== f.className.indexOf("cly_user_"))
                                ) {
                                    var z = f.className.split(" ");
                                    for (f = 0; f < z.length; f++)
                                        if (0 === z[f].indexOf("cly_user_")) {
                                            k[z[f].replace("cly_user_", "")] = r;
                                            l = !0;
                                            break;
                                        }
                                } else if (
                                    (f.type && "email" === f.type.toLowerCase()) ||
                                    (f.name && -1 !== f.name.toLowerCase().indexOf("email")) ||
                                    (f.id && -1 !== f.id.toLowerCase().indexOf("email")) ||
                                    (f.id && p[f.id] && -1 !== p[f.id].toLowerCase().indexOf("email")) ||
                                    /[^@\s]+@[^@\s]+\.[^@\s]+/.test(r)
                                )
                                    k.email || (k.email = r), (l = !0);
                                else if ((f.name && -1 !== f.name.toLowerCase().indexOf("username")) || (f.id && -1 !== f.id.toLowerCase().indexOf("username")) || (f.id && p[f.id] && -1 !== p[f.id].toLowerCase().indexOf("username")))
                                    k.username || (k.username = r), (l = !0);
                                else if (
                                    (f.name && (-1 !== f.name.toLowerCase().indexOf("tel") || -1 !== f.name.toLowerCase().indexOf("phone") || -1 !== f.name.toLowerCase().indexOf("number"))) ||
                                    (f.id && (-1 !== f.id.toLowerCase().indexOf("tel") || -1 !== f.id.toLowerCase().indexOf("phone") || -1 !== f.id.toLowerCase().indexOf("number"))) ||
                                    (f.id && p[f.id] && (-1 !== p[f.id].toLowerCase().indexOf("tel") || -1 !== p[f.id].toLowerCase().indexOf("phone") || -1 !== p[f.id].toLowerCase().indexOf("number")))
                                )
                                    k.phone || (k.phone = r), (l = !0);
                                else if (
                                    (f.name && (-1 !== f.name.toLowerCase().indexOf("org") || -1 !== f.name.toLowerCase().indexOf("company"))) ||
                                    (f.id && (-1 !== f.id.toLowerCase().indexOf("org") || -1 !== f.id.toLowerCase().indexOf("company"))) ||
                                    (f.id && p[f.id] && (-1 !== p[f.id].toLowerCase().indexOf("org") || -1 !== p[f.id].toLowerCase().indexOf("company")))
                                )
                                    k.organization || (k.organization = r), (l = !0);
                                else if ((f.name && -1 !== f.name.toLowerCase().indexOf("name")) || (f.id && -1 !== f.id.toLowerCase().indexOf("name")) || (f.id && p[f.id] && -1 !== p[f.id].toLowerCase().indexOf("name")))
                                    k.name || (k.name = ""), (k.name += r + " "), (l = !0);
                    }
                    l && (c(d.INFO, "collect_from_forms, Gathered user data", k), b ? h.user_details({ custom: k }) : h.user_details(k));
                });
            };
            this.collect_from_facebook = function (a) {
                c(d.INFO, "collect_from_facebook, Starting to collect possible user data");
                FB &&
                    FB.api &&
                    FB.api("/me", function (b) {
                        var e = {};
                        b.name && (e.name = b.name);
                        b.email && (e.email = b.email);
                        "male" === b.gender ? (e.gender = "M") : "female" === b.gender && (e.gender = "F");
                        if (b.birthday) {
                            var k = b.birthday.split("/").pop();
                            k && 4 === k.length && (e.byear = k);
                        }
                        b.work && b.work[0] && b.work[0].employer && b.work[0].employer.name && (e.organization = b.work[0].employer.name);
                        if (a) {
                            e.custom = {};
                            for (var l in a) {
                                k = a[l].split(".");
                                for (var f = b, p = 0; p < k.length && ((f = f[k[p]]), "undefined" !== typeof f); p++);
                                "undefined" !== typeof f && (e.custom[l] = f);
                            }
                        }
                        h.user_details(e);
                    });
            };
            this.opt_out = function () {
                c(d.INFO, "opt_out, Opting out the user");
                this.ignore_visitor = !0;
                m("cly_ignore", !0);
            };
            this.opt_in = function () {
                c(d.INFO, "opt_in, Opting in the user");
                m("cly_ignore", !1);
                this.ignore_visitor = !1;
                u();
                this.ignore_visitor || Aa || Y();
            };
            this.report_feedback = function (a) {
                c(d.WARNING, "report_feedback, Deprecated function call! Use 'recordRatingWidgetWithID' in place of this call. Call will be redirected now!");
                this.recordRatingWidgetWithID(a);
            };
            this.recordRatingWidgetWithID = function (a) {
                c(d.INFO, "recordRatingWidgetWithID, Providing information about user with ID: [ " + a.widget_id + " ]");
                if (this.check_consent("star-rating"))
                    if (a.widget_id)
                        if (a.rating) {
                            var b = { key: "[CLY]_star_rating", count: 1, segmentation: {} };
                            b.segmentation = ka(a, "widget_id contactMe platform app_version rating email comment".split(" "));
                            b.segmentation.app_version || (b.segmentation.app_version = this.metrics._app_version || this.app_version);
                            c(d.INFO, "recordRatingWidgetWithID, Reporting Rating Widget: ", b);
                            q(b);
                        } else c(d.ERROR, "recordRatingWidgetWithID, Rating Widget must contain rating property");
                    else c(d.ERROR, "recordRatingWidgetWithID, Rating Widget must contain widget_id property");
            };
            this.show_feedback_popup = function (a) {
                c(d.WARNING, "show_feedback_popup, Deprecated function call! Use 'presentRatingWidgetWithID' in place of this call. Call will be redirected now!");
                this.presentRatingWidgetWithID(a);
            };
            this.presentRatingWidgetWithID = function (a) {
                c(d.INFO, "presentRatingWidgetWithID, Showing rating widget popup for the widget with ID: [ " + a + " ]");
                this.check_consent("star-rating") &&
                    (J
                        ? c(d.ERROR, "presentRatingWidgetWithID, Cannot show ratingWidget popup in offline mode")
                        : ha(
                            "presentRatingWidgetWithID",
                            this.url + "/o/feedback/widget",
                            { widget_id: a },
                            function (b, e, k) {
                                if (b) c(d.ERROR, "presentRatingWidgetWithID, An error occurred: " + b);
                                else
                                    try {
                                        var l = JSON.parse(k);
                                        I(l, !1);
                                    } catch (f) {
                                        c(d.ERROR, "presentRatingWidgetWithID, JSON parse failed: " + f);
                                    }
                            },
                            !0
                        ));
            };
            this.initialize_feedback_popups = function (a) {
                c(d.WARNING, "initialize_feedback_popups, Deprecated function call! Use 'initializeRatingWidgets' in place of this call. Call will be redirected now!");
                this.initializeRatingWidgets(a);
            };
            this.initializeRatingWidgets = function (a) {
                c(d.INFO, "initializeRatingWidgets, Initializing rating widget with provided widget IDs:[ " + a + "]");
                if (this.check_consent("star-rating")) {
                    a || (a = m("cly_fb_widgets"));
                    for (var b = document.getElementsByClassName("countly-feedback-sticker"); 0 < b.length;) b[0].remove();
                    ha(
                        "initializeRatingWidgets",
                        this.url + "/o/feedback/multiple-widgets-by-id",
                        { widgets: JSON.stringify(a) },
                        function (e, k, l) {
                            if (e) c(d.ERROR, "initializeRatingWidgets, An error occurred: " + e);
                            else
                                try {
                                    var f = JSON.parse(l);
                                    for (e = 0; e < f.length; e++)
                                        if ("true" === f[e].is_active) {
                                            var p = f[e].target_devices,
                                                r = $a();
                                            if (p[r])
                                                if (("string" === typeof f[e].hide_sticker && (f[e].hide_sticker = "true" === f[e].hide_sticker), "all" !== f[e].target_page || f[e].hide_sticker)) {
                                                    var t = f[e].target_pages;
                                                    for (k = 0; k < t.length; k++) {
                                                        var z = t[k].substr(0, t[k].length - 1) === window.location.pathname.substr(0, t[k].length - 1),
                                                            L = t[k] === window.location.pathname;
                                                        ((t[k].includes("*") && z) || L) && !f[e].hide_sticker && I(f[e], !0);
                                                    }
                                                } else I(f[e], !0);
                                        }
                                } catch (E) {
                                    c(d.ERROR, "initializeRatingWidgets, JSON parse error: " + E);
                                }
                        },
                        !0
                    );
                }
            };
            this.enable_feedback = function (a) {
                c(d.WARNING, "enable_feedback, Deprecated function call! Use 'enableRatingWidgets' in place of this call. Call will be redirected now!");
                this.enableRatingWidgets(a);
            };
            this.enableRatingWidgets = function (a) {
                c(d.INFO, "enableRatingWidgets, Enabling rating widget with params:", a);
                this.check_consent("star-rating") &&
                    (J
                        ? c(d.ERROR, "enableRatingWidgets, Cannot enable rating widgets in offline mode")
                        : (m("cly_fb_widgets", a.popups || a.widgets),
                            ya(this.url + "/star-rating/stylesheets/countly-feedback-web.css"),
                            (a = a.popups || a.widgets),
                            0 < a.length
                                ? (document.body.insertAdjacentHTML("beforeend", '<div id="cfbg"></div>'), this.initializeRatingWidgets(a))
                                : c(d.ERROR, "enableRatingWidgets, You should provide at least one widget id as param. Read documentation for more detail. https://resources.count.ly/plugins/feedback")));
            };
            this.get_available_feedback_widgets = function (a) {
                c(d.INFO, "get_available_feedback_widgets, Initializing feedbacks, callback function is provided:[" + !!a + "]");
                this.check_consent("feedback")
                    ? J
                        ? c(d.ERROR, "get_available_feedback_widgets, Cannot enable feedback widgets in offline mode.")
                        : ha(
                            "get_available_feedback_widgets",
                            this.url + Ta,
                            { method: "feedback", device_id: this.device_id, app_key: this.app_key },
                            function (b, e, k) {
                                if (b) c(d.ERROR, "get_available_feedback_widgets, Error occurred while fetching feedbacks: " + b), a && a(null, b);
                                else
                                    try {
                                        var l = JSON.parse(k).result || [];
                                        a && a(l, null);
                                    } catch (f) {
                                        c(d.ERROR, "get_available_feedback_widgets, Error while parsing feedback widgets list: " + f), a && a(null, f);
                                    }
                            },
                            !1
                        )
                    : a && a(null, Error("Consent for feedback not provided."));
            };
            this.present_feedback_widget = function (a, b, e) {
                function k(y) {
                    document.getElementById("countly-surveys-wrapper-" + y._id).style.display = "block";
                    document.getElementById("csbg").style.display = "block";
                }
                function l(y) {
                    if (!y.appearance.hideS) {
                        c(d.DEBUG, "present_feedback_widget, handling the sticker as it was not set to hidden");
                        var N = document.createElement("div");
                        N.innerText = y.appearance.text;
                        N.style.color = 7 > y.appearance.text_color.length ? "#" + y.appearance.text_color : y.appearance.text_color;
                        N.style.backgroundColor = 7 > y.appearance.bg_color.length ? "#" + y.appearance.bg_color : y.appearance.bg_color;
                        N.className = "countly-feedback-sticker  " + y.appearance.position + "-" + y.appearance.size;
                        N.id = "countly-feedback-sticker-" + y._id;
                        document.body.appendChild(N);
                        x(document.getElementById("countly-feedback-sticker-" + y._id), "click", function () {
                            document.getElementById("countly-ratings-wrapper-" + y._id).style.display = "flex";
                            document.getElementById("csbg").style.display = "block";
                        });
                    }
                    x(document.getElementById("countly-feedback-close-icon-" + y._id), "click", function () {
                        document.getElementById("countly-ratings-wrapper-" + y._id).style.display = "none";
                        document.getElementById("csbg").style.display = "none";
                    });
                }
                c(d.INFO, "present_feedback_widget, Presenting the feedback widget by appending to the element with ID: [ " + b + " ] and className: [ " + e + " ]");
                if (this.check_consent("feedback"))
                    if (!a || "object" !== typeof a || Array.isArray(a)) c(d.ERROR, "present_feedback_widget, Please provide at least one feedback widget object.");
                    else
                        try {
                            var f = this.url;
                            if ("nps" === a.type) c(d.DEBUG, "present_feedback_widget, Widget type: nps."), (f += "/feedback/nps");
                            else if ("survey" === a.type) c(d.DEBUG, "present_feedback_widget, Widget type: survey."), (f += "/feedback/survey");
                            else if ("rating" === a.type) c(d.DEBUG, "present_feedback_widget, Widget type: rating."), (f += "/feedback/rating");
                            else {
                                c(d.ERROR, "present_feedback_widget, Feedback widget only accepts nps, rating and survey types.");
                                return;
                            }
                            var p = window.origin || window.location.origin;
                            if ("rating" === a.type) {
                                c(d.DEBUG, "present_feedback_widget, Loading css for rating widget.");
                                var r = "ratings";
                                ya(this.url + "/star-rating/stylesheets/countly-feedback-web.css");
                            } else c(d.DEBUG, "present_feedback_widget, Loading css for survey or nps."), ya(this.url + "/surveys/stylesheets/countly-surveys.css"), (r = "surveys");
                            f += "?widget_id=" + a._id;
                            f += "&app_key=" + this.app_key;
                            f += "&device_id=" + this.device_id;
                            f += "&sdk_name=javascript_native_web";
                            f += "&platform=" + this.platform;
                            f += "&app_version=" + this.app_version;
                            f += "&sdk_version=22.02.4";
                            f += "&origin=" + p;
                            f += "&widget_v=web";
                            var t = document.createElement("iframe");
                            t.src = f;
                            t.name = "countly-" + r + "-iframe";
                            t.id = "countly-" + r + "-iframe";
                            var z = !1;
                            t.onload = function () {
                                z && ((document.getElementById("countly-" + r + "-wrapper-" + a._id).style.display = "none"), (document.getElementById("csbg").style.display = "none"));
                                z = !0;
                                c(d.DEBUG, "present_feedback_widget, Loaded iframe.");
                            };
                            for (var L = document.getElementById("csbg"); L;) L.remove(), (L = document.getElementById("csbg")), c(d.DEBUG, "present_feedback_widget, Removing past overlay.");
                            var E = document.getElementsByClassName("countly-" + r + "-wrapper");
                            for (f = 0; f < E.length; f++) E[f].remove(), c(d.DEBUG, "present_feedback_widget, Removed a wrapper.");
                            E = document.createElement("div");
                            E.className = "countly-" + r + "-wrapper";
                            E.id = "countly-" + r + "-wrapper-" + a._id;
                            "survey" === a.type && (E.className = E.className + " " + a.appearance.position);
                            var Ja = document.body;
                            f = !1;
                            b && (document.getElementById(b) ? ((Ja = document.getElementById(b)), (f = !0)) : c(d.ERROR, "present_feedback_widget, Provided ID not found."));
                            f || (e && (document.getElementsByClassName(e)[0] ? (Ja = document.getElementsByClassName(e)[0]) : c(d.ERROR, "present_feedback_widget, Provided class not found.")));
                            Ja.insertAdjacentHTML("beforeend", '<div id="csbg"></div>');
                            Ja.appendChild(E);
                            if ("rating" === a.type) {
                                var Xa = document.createElement("div");
                                Xa.className = "countly-ratings-overlay";
                                Xa.id = "countly-ratings-overlay-" + a._id;
                                E.appendChild(Xa);
                                c(d.DEBUG, "present_feedback_widget, appended the rating overlay to wrapper");
                                x(document.getElementById("countly-ratings-overlay-" + a._id), "click", function () {
                                    document.getElementById("countly-ratings-wrapper-" + a._id).style.display = "none";
                                });
                            }
                            E.appendChild(t);
                            c(d.DEBUG, "present_feedback_widget, Appended the iframe");
                            x(window, "message", function (y) {
                                var N = {};
                                try {
                                    (N = JSON.parse(y.data)), c(d.DEBUG, "present_feedback_widget, Parsed response message " + N);
                                } catch (pb) {
                                    c(d.ERROR, "present_feedback_widget, Error while parsing message body " + pb);
                                }
                                N.close
                                    ? ((document.getElementById("countly-" + r + "-wrapper-" + a._id).style.display = "none"), (document.getElementById("csbg").style.display = "none"))
                                    : c(d.DEBUG, "present_feedback_widget, Closing signal not sent yet");
                            });
                            if ("survey" === a.type) {
                                var K = !1;
                                switch (a.showPolicy) {
                                    case "afterPageLoad":
                                        "complete" === document.readyState
                                            ? K || ((K = !0), k(a))
                                            : x(document, "readystatechange", function (y) {
                                                "complete" !== y.target.readyState || K || ((K = !0), k(a));
                                            });
                                        break;
                                    case "afterConstantDelay":
                                        setTimeout(function () {
                                            K || ((K = !0), k(a));
                                        }, 1e4);
                                        break;
                                    case "onAbandon":
                                        "complete" === document.readyState
                                            ? x(document, "mouseleave", function () {
                                                K || ((K = !0), k(a));
                                            })
                                            : x(document, "readystatechange", function (y) {
                                                "complete" === y.target.readyState &&
                                                    x(document, "mouseleave", function () {
                                                        K || ((K = !0), k(a));
                                                    });
                                            });
                                        break;
                                    case "onScrollHalfwayDown":
                                        x(window, "scroll", function () {
                                            if (!K) {
                                                var y = Math.max(window.scrollY, document.body.scrollTop, document.documentElement.scrollTop),
                                                    N = xa();
                                                y >= N / 2 && ((K = !0), k(a));
                                            }
                                        });
                                        break;
                                    default:
                                        K || ((K = !0), k(a));
                                }
                            } else if ("nps" === a.type) (document.getElementById("countly-" + r + "-wrapper-" + a._id).style.display = "block"), (document.getElementById("csbg").style.display = "block");
                            else if ("rating" === a.type) {
                                var Ka = !1;
                                "complete" === document.readyState
                                    ? Ka || ((Ka = !0), l(a))
                                    : x(document, "readystatechange", function (y) {
                                        "complete" !== y.target.readyState || Ka || ((Ka = !0), l(a));
                                    });
                            }
                        } catch (y) {
                            c(d.ERROR, "present_feedback_widget, Something went wrong while presenting the widget: " + y);
                        }
            };
            this.recordError = function (a, b, e) {
                c(d.INFO, "recordError, Recording error");
                if (this.check_consent("crashes") && a) {
                    e = e || Ua;
                    var k = "";
                    "object" === typeof a
                        ? "undefined" !== typeof a.stack
                            ? (k = a.stack)
                            : ("undefined" !== typeof a.name && (k += a.name + ":"),
                                "undefined" !== typeof a.message && (k += a.message + "\n"),
                                "undefined" !== typeof a.fileName && (k += "in " + a.fileName + "\n"),
                                "undefined" !== typeof a.lineNumber && (k += "on " + a.lineNumber),
                                "undefined" !== typeof a.columnNumber && (k += ":" + a.columnNumber))
                        : (k = a + "");
                    e = R(e, h.maxKeyLength, h.maxValueSize, h.maxSegmentationValues, "record_error", c);
                    if (k.length > h.maxStackTraceLineLength * h.maxStackTraceLinesPerThread) {
                        c(d.DEBUG, "record_error, Error stack is too long will be truncated");
                        k = k.split("\n");
                        k.length > h.maxStackTraceLinesPerThread && (k = k.splice(0, h.maxStackTraceLinesPerThread));
                        a = 0;
                        for (var l = k.length; a < l; a++) k[a].length > h.maxStackTraceLineLength && (k[a] = k[a].substring(0, h.maxStackTraceLineLength));
                        k = k.join("\n");
                    }
                    b = !!b;
                    a = Ga();
                    k = { _resolution: a._resolution, _error: k, _app_version: a._app_version, _run: B() - mb, _not_os_specific: !0, _javascript: !0 };
                    if ((a = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery)) k._bat = Math.floor(100 * a.level);
                    "undefined" !== typeof navigator.onLine && (k._online = !!navigator.onLine);
                    k._background = !document.hasFocus();
                    0 < da.length && (k._logs = da.join("\n"));
                    da = [];
                    k._nonfatal = b;
                    k._view = this.getViewName();
                    "undefined" !== typeof e && (k._custom = e);
                    try {
                        var f = document.createElement("canvas").getContext("experimental-webgl");
                        k._opengl = f.getParameter(f.VERSION);
                    } catch (p) {
                        c(d.ERROR, "Could not get the experimental-webgl context: " + p);
                    }
                    F({ crash: JSON.stringify(k) });
                }
            };
            this.onStorageChange = function (a, b) {
                c(d.INFO, "onStorageChange, Applying storage changes");
                switch (a) {
                    case "cly_queue":
                        G = h.deserialize(b || "[]");
                        break;
                    case "cly_event":
                        H = h.deserialize(b || "[]");
                        break;
                    case "cly_remote_configs":
                        M = h.deserialize(b || "{}");
                        break;
                    case "cly_ignore":
                        h.ignore_visitor = h.deserialize(b);
                        break;
                    case "cly_id":
                        h.device_id = h.deserialize(b);
                        break;
                    case "cly_id_type":
                        D = h.deserialize(b);
                }
            };
            this._internals = {
                store: m,
                getDocWidth: Pa,
                getDocHeight: xa,
                getViewportHeight: bb,
                get_page_coord: Oa,
                get_event_target: Ia,
                add_event: x,
                getProperties: ka,
                truncateObject: R,
                truncateSingleValue: w,
                stripTrailingSlash: Na,
                prepareParams: Za,
                sendXmlHttpRequest: ha,
                isResponseValid: jb,
                getInternalDeviceIdType: function () {
                    return D;
                },
                getMsTimestamp: La,
                getTimestamp: B,
                isResponseValidBroad: ib,
                log: c,
                getMetrics: Ga,
                generateUUID: Ya,
                sendEventsForced: C,
                isUUID: function (a) {
                    return /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-4[0-9a-fA-F]{3}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.test(a);
                },
                getId: Ra,
                heartBeat: Y,
                toRequestQueue: F,
                reportViewDuration: S,
                loadJS: db,
                loadCSS: ya,
                getLastView: function () {
                    return O;
                },
                setToken: lb,
                getToken: function () {
                    var a = m("cly_token");
                    m("cly_token", null);
                    return a;
                },
                showLoader: eb,
                hideLoader: fb,
                add_cly_events: q,
                processScrollView: Sa,
                processScroll: kb,
                currentUserAgentString: ma,
                userAgentDeviceDetection: $a,
                userAgentSearchBotDetection: ab,
                getRequestQueue: function () {
                    return G;
                },
                getEventQueue: function () {
                    return H;
                },
                clearQueue: function () {
                    G = [];
                    m("cly_queue", []);
                    H = [];
                    m("cly_event", []);
                },
            };
            this.initialize();
        };
        n.init = function (g) {
            g = g || {};
            var q = g.app_key || n.app_key;
            if (!n.i || !n.i[q]) {
                g = new n.CountlyClass(g);
                if (!n.i) {
                    n.i = {};
                    for (var u in g) n[u] = g[u];
                }
                n.i[q] = g;
            }
            return n.i[q];
        };
        var wa = 0,
            x = function (g, q, u) {
                "undefined" !== typeof g.addEventListener ? g.addEventListener(q, u, !1) : g.attachEvent("on" + q, u);
            },
            Ia = function (g) {
                return g ? ("undefined" !== typeof g.target ? g.target : g.srcElement) : window.event.srcElement;
            };
        window.addEventListener("storage", function (g) {
            var q = (g.key + "").split("/"),
                u = q.pop();
            q = q.pop();
            if (n.i && n.i[q]) n.i[q].onStorageChange(u, g.newValue);
        });
        n.serialize = function (g) {
            "object" === typeof g && (g = JSON.stringify(g));
            return g;
        };
        n.deserialize = function (g) {
            try {
                g = JSON.parse(g);
            } catch (q) { }
            return g;
        };
        n.getViewName = function () {
            return window.location.pathname;
        };
        n.getViewUrl = function () {
            return window.location.pathname;
        };
        n.getSearchQuery = function () {
            return window.location.search;
        };
        n.DeviceIdType = { DEVELOPER_SUPPLIED: 0, SDK_GENERATED: 1, TEMPORARY_ID: 2 };
        return n;
    }
});
