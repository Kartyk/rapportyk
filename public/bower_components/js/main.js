"use strict";

function imageLazyLoading() {
    $(".js-lazy").lazy()
}

function runWebsiteScripts() {
    if (BP_BOILERPLATE.owl.gallery(), BP_BOILERPLATE.owl.opacityFull(), BP_BOILERPLATE.owl.owlText(), BP_BOILERPLATE.owl.slider(), BP_BOILERPLATE.owl.doubleLayer(), BP_BOILERPLATE.navigation.init(), BP_BOILERPLATE.utils.videoFit(), BP_BOILERPLATE.utils.infiniteScroll(BP_BOILERPLATE.utils.infiniteCallback), $(".l-header.bg-img").bgLoaded({
            afterLoaded: function() {
                this.addClass("bg-loaded"), BP_BOILERPLATE.utils._animationedSections(), Waypoint.refreshAll()
            }
        }), BP_BOILERPLATE.utils.hashAnchorClick(), BP_BOILERPLATE.utils._openPopupOnClick(), BP_BOILERPLATE.utils._magnific(), BP_BOILERPLATE.utils.inputLabels(), BP_BOILERPLATE.utils._animationedSections(), imageLazyLoading(), setTimeout(function() {
            BP_BOILERPLATE.utils.videoFit(), Waypoint.refreshAll()
        }, 200), Waypoint.refreshAll(), $(".js-map").length) {
        new Waypoint({
            element: $(".js-map")[0],
            handler: function(e) {
                "down" === e && BP_BOILERPLATE.contact.loadScript()
            },
            offset: "80%"
        })
    }
}

function trackPageGTM() {
    if (void 0 !== window.dataLayer) {
        var e = window.location.href;
        window.dataLayer.push({
            event: "virtualPageView",
            virtualUrl: e
        })
    }
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}; /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Ee.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return me.each(e.match(je) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, i) {
        var o;
        try {
            e && me.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && me.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), me.ready()
    }

    function p() {
        this.expando = me.expando + p.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ne, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = f(n)
                } catch (o) {}
                ze.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return me.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            u = (me.cssNumber[t] || "px" !== c && +l) && Re.exec(me.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do r = r || ".5", u /= r, me.style(e, t, u + c); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Ue[i];
        return o ? o : (t = n.body.appendChild(n.createElement(i)), o = me.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ue[i] = o, o)
    }

    function v(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = Be.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Fe(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", Be.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? me.merge([e], n) : n
    }

    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"))
    }

    function b(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if (r = e[f], r || 0 === r)
                if ("object" === me.type(r)) me.merge(p, r.nodeType ? [r] : r);
                else if (Ve.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Xe.exec(r) || ["", ""])[1].toLowerCase(), l = Ze[a] || Ze._default, s.innerHTML = l[1] + me.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            me.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (i && me.inArray(r, i) > -1) o && o.push(r);
            else if (c = me.contains(r.ownerDocument, r), s = y(d.appendChild(r), "script"), c && w(s), n)
            for (u = 0; r = s[u++];) Ge.test(r.type || "") && n.push(r);
        return d
    }

    function x() {
        return !0
    }

    function _() {
        return !1
    }

    function C() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function T(e, t, n, i, o, r) {
        var s, a;
        if ("object" == ("undefined" == typeof t ? "undefined" : _typeof(t))) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) T(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = _;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return me().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, o, i, n)
        })
    }

    function E(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function L(e) {
        var t = ot.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Be.hasData(e) && (r = Be.access(e), s = Be.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) me.event.add(t, o, c[o][n])
            }
            ze.hasData(e) && (a = ze.access(e), l = me.extend({}, a), ze.set(t, l))
        }
    }

    function k(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, i, o) {
        t = re.apply([], t);
        var r, s, a, l, c, u, d = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            m = me.isFunction(h);
        if (m || p > 1 && "string" == typeof h && !fe.checkClone && it.test(h)) return e.each(function(n) {
            var r = e.eq(n);
            m && (t[0] = h.call(this, n, r.html())), P(r, t, i, o)
        });
        if (p && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = me.map(y(r, "script"), S), l = a.length; d < p; d++) c = r, d !== f && (c = me.clone(c, !0, !0), l && me.merge(a, y(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, me.map(a, L), d = 0; d < l; d++) c = a[d], Ge.test(c.type || "") && !Be.access(c, "globalEval") && me.contains(u, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : n(c.textContent.replace(rt, ""), u))
        }
        return e
    }

    function j(e, t, n) {
        for (var i, o = t ? me.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || me.cleanData(y(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && w(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function I(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || lt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || me.contains(e.ownerDocument, e) || (s = me.style(e, t)), !fe.pixelMarginRight() && at.test(s) && st.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if (e = ft[n] + t, e in ht) return e
    }

    function D(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = $(e) || e), t
    }

    function B(e, t, n) {
        var i = Re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function z(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += me.css(e, n + Me[r], !0, o)), i ? ("content" === n && (s -= me.css(e, "padding" + Me[r], !0, o)), "margin" !== n && (s -= me.css(e, "border" + Me[r] + "Width", !0, o))) : (s += me.css(e, "padding" + Me[r], !0, o), "padding" !== n && (s += me.css(e, "border" + Me[r] + "Width", !0, o)));
        return s
    }

    function H(e, t, n) {
        var i, o = lt(e),
            r = I(e, t, o),
            s = "border-box" === me.css(e, "boxSizing", !1, o);
        return at.test(r) ? r : (i = s && (fe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), r = parseFloat(r) || 0, r + z(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }

    function N(e, t, n, i, o) {
        return new N.prototype.init(e, t, n, i, o)
    }

    function q() {
        gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(q) : e.setTimeout(q, me.fx.interval), me.fx.tick())
    }

    function R() {
        return e.setTimeout(function() {
            mt = void 0
        }), mt = me.now()
    }

    function M(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Me[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function F(e, t, n) {
        for (var i, o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function W(e, t, n) {
        var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            m = e.nodeType && Fe(e),
            g = Be.get(e, "fxshow");
        n.queue || (s = me._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, p.always(function() {
            p.always(function() {
                s.unqueued--, me.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (o = t[i], vt.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || me.style(e, i)
            }
        if (l = !me.isEmptyObject(t), l || !me.isEmptyObject(f)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = Be.get(e, "display")), u = me.css(e, "display"), "none" === u && (c ? u = c : (v([e], !0), c = e.style.display || c, u = me.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === me.css(e, "float") && (l || (p.done(function() {
                h.display = c
            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Be.access(e, "fxshow", {
                display: c
            }), r && (g.hidden = !m), m && v([e], !0), p.done(function() {
                m || v([e]), Be.remove(e, "fxshow");
                for (i in f) me.style(e, i, f[i])
            })), l = F(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function U(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = me.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = me.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function Q(e, t, n) {
        var i, o, r = 0,
            s = Q.prefilters.length,
            a = me.Deferred().always(function() {
                delete l.elem
            }),
            l = function d() {
                if (o) return !1;
                for (var t = mt || R(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, d = c.tweens.length; s < d; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && d ? n : (d || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = me.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (U(u, c.opts.specialEasing); r < s; r++)
            if (i = Q.prefilters[r].call(c, e, u, c.opts)) return me.isFunction(i.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(u, F, c), me.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), me.fx.timer(me.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function X(e) {
        var t = e.match(je) || [];
        return t.join(" ")
    }

    function G(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e, t, n, i) {
        var o;
        if (Array.isArray(t)) me.each(t, function(t, o) {
            n || At.test(e) ? i(e, o) : Z(e + "[" + ("object" == ("undefined" == typeof o ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== me.type(t)) i(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, i)
    }

    function V(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(je) || [];
            if (me.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Y(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, me.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === qt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function K(e, t) {
        var n, i, o = me.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && me.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function ee(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        oe = te.slice,
        re = te.concat,
        se = te.push,
        ae = te.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = ue.toString,
        pe = de.call(Object),
        fe = {},
        he = "3.2.1",
        me = function Zt(e, t) {
            return new Zt.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        we = function(e, t) {
            return t.toUpperCase()
        };
    me.fn = me.prototype = {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == ("undefined" == typeof s ? "undefined" : _typeof(s)) || me.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (me.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && me.isPlainObject(n) ? n : {}, s[t] = me.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ce.call(e) || (t = ie(e)) && (n = ue.call(t, "constructor") && t.constructor, "function" != typeof n || de.call(n) !== pe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? le[ce.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e)
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, we)
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, n) {
            var o, r, s = 0,
                a = [];
            if (i(e))
                for (o = e.length; s < o; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = oe.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(oe.call(arguments)))
            }, o.guid = e.guid = e.guid || me.guid++, o
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, u, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : R) !== O && I(t), t = t || O, D)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (o = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (p && (s = p.getElementById(o)) && N(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                    }
                if (_.qsa && !Q[e + " "] && (!B || !B.test(e))) {
                    if (1 !== h) p = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, _e) : t.setAttribute("id", a = q), c = S(e), r = c.length; r--;) c[r] = "#" + a + " " + f(c[r]);
                        u = c.join(","), p = ye.test(e) && d(t.parentNode) || t
                    }
                    if (u) try {
                        return K.apply(n, p.querySelectorAll(u)), n
                    } catch (m) {} finally {
                        a === q && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[q] = !0, e
        }

        function o(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = F++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var c, u, d, p = [M, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (d = t[q] || (t[q] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === M && c[1] === a) return p[2] = c[2];
                                if (u[r] = p, p[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function v(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function y(e, t, n, o, r, s) {
            return o && !o[q] && (o = y(o)), r && !r[q] && (r = y(r, s)), i(function(i, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    m = i || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : v(m, p, e, a, l),
                    w = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, w, a, l), o)
                    for (c = v(w, f), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else w = v(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : K.apply(s, w)
            })
        }

        function w(e) {
            for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), c = h(function(e) {
                    return ee(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; a < o; a++)
                if (n = C.relative[e[a].type]) u = [h(m(u), n)];
                else {
                    if (n = C.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                        for (i = ++a; i < o && !C.relative[e[i].type]; i++);
                        return y(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && w(e.slice(a, i)), i < o && w(e = e.slice(i)), i < o && f(e))
                    }
                    u.push(n)
                }
            return m(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        y = k,
                        w = i || r && C.find.TAG("*", c),
                        b = M += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (k = s === O || s || c); h !== x && null != (u = w[h]); h++) {
                        if (r && u) {
                            for (d = 0, s || u.ownerDocument === O || (I(u), a = !D); p = e[d++];)
                                if (p(u, s || O, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (M = b)
                        }
                        o && ((u = !p && u) && f--, i && m.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(m, g, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = V.call(l));
                            g = v(g)
                        }
                        K.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (M = b, k = y), m
                };
            return o ? i(s) : s
        }
        var x, _, C, T, E, S, L, A, k, P, j, I, O, $, D, B, z, H, N, q = "sizzle" + 1 * new Date,
            R = e.document,
            M = 0,
            F = 0,
            W = n(),
            U = n(),
            Q = n(),
            X = function(e, t) {
                return e === t && (j = !0), 0
            },
            G = {}.hasOwnProperty,
            Z = [],
            V = Z.pop,
            Y = Z.push,
            K = Z.push,
            J = Z.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _e = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                I()
            },
            Te = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(Z = J.call(R.childNodes), R.childNodes), Z[R.childNodes.length].nodeType
        } catch (Ee) {
            K = {
                apply: Z.length ? function(e, t) {
                    Y.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, I = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, $ = O.documentElement, D = !E(O), R !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = o(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ge.test(O.getElementsByClassName), _.getById = o(function(e) {
                return $.appendChild(e).id = q, !O.getElementsByName || !O.getElementsByName(q).length
            }), _.getById ? (C.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(we, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                            if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
                    }
                    return []
                }
            }), C.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, C.find.CLASS = _.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && D) return t.getElementsByClassName(e)
            }, z = [], B = [], (_.qsa = ge.test(O.querySelectorAll)) && (o(function(e) {
                $.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || B.push("~="), e.querySelectorAll(":checked").length || B.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || B.push(".#.+[+~]")
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && B.push(":enabled", ":disabled"), $.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:")
            })), (_.matchesSelector = ge.test(H = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function(e) {
                _.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), z.push("!=", re)
            }), B = B.length && new RegExp(B.join("|")), z = z.length && new RegExp(z.join("|")), t = ge.test($.compareDocumentPosition), N = t || ge.test($.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === R && N(R, e) ? -1 : t === O || t.ownerDocument === R && N(R, t) ? 1 : P ? ee(P, e) - ee(P, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : P ? ee(P, e) - ee(P, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && I(e), n = n.replace(ue, "='$1']"), _.matchesSelector && D && !Q[n + " "] && (!z || !z.test(n)) && (!B || !B.test(n))) try {
                var i = H.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && I(e), N(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && I(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : _.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(xe, _e)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (j = !_.detectDuplicates, P = !_.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return P = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (p = g, d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === M && c[1], w = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++w && p === t) {
                                        u[e] = [M, f, w];
                                        break
                                    }
                            } else if (y && (p = t, d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === M && c[1], w = f), w === !1)
                                for (;
                                    (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [M, w]), p !== t)););
                            return w -= o, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = L(e.replace(ae, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, be),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === $
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, S = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, u = U[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = C.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }, L = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = Q[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;) r = w(t[n]), r[q] ? i.push(r) : o.push(r);
                r = Q(e, b(o, i)), r.selector = e
            }
            return r
        }, A = t.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                u = !i && S(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && D && C.relative[r[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(we, be), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (i = l(s.matches[0].replace(we, be), ye.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || L(e, u))(i, t, !D, n, !t || ye.test(e) && d(t.parentNode) || t), n
        }, _.sortStable = q.split("").sort(X).join("") === q, _.detectDuplicates = !!j, I(), _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    me.find = be, me.expr = be.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = be.uniqueSort, me.text = be.getText, me.isXMLDoc = be.isXML, me.contains = be.contains, me.escapeSelector = be.escape;
    var xe = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && me(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        _e = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = me.expr.match.needsContext,
        Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, me.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (me.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, o[t], n);
            return i > 1 ? me.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length
        }
    });
    var Se, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ae = me.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Le.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Te.test(i[1]) && me.isPlainObject(t))
                        for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
        };
    Ae.prototype = me.fn, Se = me(ne);
    var ke = /^(?:parents|prev(?:Until|All))/,
        Pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && me(e);
            if (!Ce.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? me.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(me(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _e(e.firstChild)
        },
        contents: function(e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), me.merge([], e.childNodes))
        }
    }, function(e, t) {
        me.fn[e] = function(n, i) {
            var o = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = me.filter(i, o)), this.length > 1 && (Pe[e] || me.uniqueSort(o), ke.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var je = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : me.extend({}, e);
        var t, n, i, o, r = [],
            s = [],
            l = -1,
            c = function() {
                for (o = o || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            },
            u = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1, s.push(n)), function i(t) {
                        me.each(t, function(t, n) {
                            me.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== me.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n;
                            (n = me.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? me.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || t || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, me.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return me.Deferred(function(t) {
                            me.each(n, function(n, i) {
                                var o = me.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        function r(t, n, i, o) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    d = function f() {
                                        var e, f;
                                        if (!(t < s)) {
                                            if (e = i.apply(a, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, me.isFunction(f) ? o ? f.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, f.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (o || n.resolveWith)(a, u))
                                        }
                                    },
                                    p = o ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? p() : (me.Deferred.getStackHook && (p.stackTrace = me.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return me.Deferred(function(e) {
                            n[0][3].add(r(0, e, me.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, me.isFunction(t) ? t : l)), n[2][3].add(r(0, e, me.isFunction(i) ? i : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, o) : o
                    }
                },
                r = {};
            return me.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = oe.call(arguments),
                r = me.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || me.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) u(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Ie = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ie.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, me.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Oe = me.Deferred();
    me.fn.ready = function(e) {
        return Oe.then(e)["catch"](function(e) {
            me.readyException(e)
        }), this
    }, me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Oe.resolveWith(ne, [me]))
        }
    }), me.ready.then = Oe.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var $e = function Vt(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === me.type(n)) {
                o = !0;
                for (a in n) Vt(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, me.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(me(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        De = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[me.camelCase(t)] = n;
            else
                for (i in t) o[me.camelCase(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(je) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t)
        }
    };
    var Be = new p,
        ze = new p,
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return ze.hasData(e) || Be.hasData(e)
        },
        data: function(e, t, n) {
            return ze.access(e, t, n)
        },
        removeData: function(e, t) {
            ze.remove(e, t)
        },
        _data: function(e, t, n) {
            return Be.access(e, t, n)
        },
        _removeData: function(e, t) {
            Be.remove(e, t)
        }
    }), me.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = ze.get(r), 1 === r.nodeType && !Be.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = me.camelCase(i.slice(5)), h(r, i, o[i])));
                    Be.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.each(function() {
                ze.set(this, e)
            }) : $e(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (n = ze.get(r, e), void 0 !== n) return n;
                    if (n = h(r, e), void 0 !== n) return n
                } else this.each(function() {
                    ze.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ze.remove(this, e)
            })
        }
    }), me.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Be.get(e, t), n && (!i || Array.isArray(n) ? i = Be.access(e, t, me.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = me._queueHooks(e, t),
                s = function() {
                    me.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Be.get(e, n) || Be.access(e, n, {
                empty: me.Callbacks("once memory").add(function() {
                    Be.remove(e, [t + "queue", n])
                })
            })
        }
    }), me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = me.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Be.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
        },
        We = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Ue = {};
    me.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? me(this).show() : me(this).hide()
            })
        }
    });
    var Qe = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ge = /^$|\/(?:java|ecma)script/i,
        Ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td;
    var Ve = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = ne.documentElement,
        Ke = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, m, g = Be.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), o && me.find.matchesSelector(Ye, o), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(je) || [""], c = t.length; c--;) a = et.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (d = me.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = me.event.special[f] || {}, u = me.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && me.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), me.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, m, g = Be.hasData(e) && Be.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(je) || [""], c = t.length; c--;)
                    if (a = et.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = me.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || me.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) me.event.remove(e, f + t[c], n, i, !0);
                me.isEmptyObject(l) && Be.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = me.event.fix(e),
                l = new Array(arguments.length),
                c = (Be.get(this, "events") || {})[a.type] || [],
                u = me.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (s = me.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((me.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                        for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? me(o, this).index(c) > -1 : me.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[me.expando] ? e : new me.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, me.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, me.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, me.event.addProp), me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || me.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), me.fn.extend({
        on: function(e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = _), this.each(function() {
                me.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = me.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (s = y(a), r = y(e), i = 0, o = r.length; i < o; i++) k(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || y(e), s = s || y(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]);
                else A(e, a);
            return s = y(a, "script"), s.length > 0 && w(s, !l && y(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, o = me.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (De(n)) {
                    if (t = n[Be.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                        n[Be.expando] = void 0
                    }
                    n[ze.expando] && (n[ze.expando] = void 0)
                }
        }
    }), me.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return $e(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Ze[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, i = [], o = me(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), me(o[s])[t](n), se.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st = /^margin/,
        at = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(s), a = null
            }
        }
        var n, i, o, r, s = ne.createElement("div"),
            a = ne.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), me.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), r
            }
        }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = I(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = me.camelCase(t),
                    l = ut.test(t),
                    c = e.style;
                return l || (t = D(a)), s = me.cssHooks[t] || me.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : (r = "undefined" == typeof n ? "undefined" : _typeof(n), "string" === r && (o = Re.exec(n)) && o[1] && (n = m(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (me.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = me.camelCase(t),
                l = ut.test(t);
            return l || (t = D(a)), s = me.cssHooks[t] || me.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = I(e, t, i)), "normal" === o && t in pt && (o = pt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ct.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, i) : We(e, dt, function() {
                    return H(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, r = i && lt(e),
                    s = i && z(e, t, i, "border-box" === me.css(e, "boxSizing", !1, r), r);
                return s && (o = Re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = me.css(e, t)), B(e, n, s)
            }
        }
    }), me.cssHooks.marginLeft = O(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(I(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Me[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, st.test(e) || (me.cssHooks[e + t].set = B)
    }), me.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = lt(e), o = t.length; s < o; s++) r[t[s]] = me.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), me.Tween = N, N.prototype = {
        constructor: N,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (me.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, me.fx = N.prototype.init, me.fx.step = {};
    var mt, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    me.Animation = me.extend(Q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
            },
            prefilters: [W],
            prefilter: function(e, t) {
                t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
            }
        }), me.speed = function(e, t, n) {
            var i = e && "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? me.extend({}, e) : {
                complete: n || !n && t || me.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !me.isFunction(t) && t
            };
            return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue)
            }, i
        }, me.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = me.isEmptyObject(e),
                    r = me.speed(t, n, i),
                    s = function() {
                        var t = Q(this, me.extend({}, e), r);
                        (o || Be.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = me.timers,
                        s = Be.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && yt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Be.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = me.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, me.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), me.each(["toggle", "show", "hide"], function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, o)
            }
        }), me.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            me.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), me.timers = [], me.fx.tick = function() {
            var e, t = 0,
                n = me.timers;
            for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0
        }, me.fx.timer = function(e) {
            me.timers.push(e), me.fx.start()
        }, me.fx.interval = 13, me.fx.start = function() {
            gt || (gt = !0, q())
        }, me.fx.stop = function() {
            gt = null
        }, me.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, me.fn.delay = function(t, n) {
            return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var wt, bt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return $e(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }), me.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === r && me.isXMLDoc(e) || (o = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? wt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(je);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), wt = {
        set: function(e, t, n) {
            return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = bt[t] || me.find.attr;
        bt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = bt[s], bt[s] = o, o = null != n(e, t, i) ? s : null, bt[s] = r), o
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return $e(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e]
            })
        }
    }), me.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && me.isXMLDoc(e) || (t = me.propFix[t] || t, o = me.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), fe.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }), me.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).addClass(e.call(this, t, G(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (o = G(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = X(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).removeClass(e.call(this, t, G(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[l++];)
                    if (o = G(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = X(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = "undefined" == typeof e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, G(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = me(this), r = e.match(je) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = G(this), t && Be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Be.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + X(G(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = me.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, me(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = me.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = me.valHooks[o.type] || me.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : X(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), a) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = me.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = me.inArray(me.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1
            }
        }, fe.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || ne],
                f = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(f + me.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[me.expando] ? t : new me.Event(f, "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), d = me.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !me.isWindow(i)) {
                    for (l = d.delegateType || f, Tt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (Be.get(s, "events") || {})[t.type] && Be.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && De(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !De(i) || c && me.isFunction(i[f]) && !me.isWindow(i) && (a = i[c], a && (i[c] = null), me.event.triggered = f, i[f](), me.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = me.extend(new me.Event, n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(i, null, t)
        }
    }), me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return me.event.trigger(e, t, n, !0)
        }
    }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = Be.access(i, t);
                o || i.addEventListener(e, n, !0), Be.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = Be.access(i, t) - 1;
                o ? Be.access(i, t, o) : (i.removeEventListener(e, n, !0), Be.remove(i, t))
            }
        }
    });
    var Et = e.location,
        St = me.now(),
        Lt = /\?/;
    me.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        kt = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&")
    }, me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && jt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Qe.test(e))
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Ot = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Nt = {},
        qt = {},
        Rt = "*/".concat("*"),
        Mt = ne.createElement("a");
    Mt.href = Et.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: Bt.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, me.ajaxSettings), t) : K(me.ajaxSettings, e)
        },
        ajaxPrefilter: V(Nt),
        ajaxTransport: V(qt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, p, f, b, x, _ = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = J(h, C, i)), b = ee(h, b, C, c), c ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (me.lastModified[r] = x), x = C.getResponseHeader("etag"), x && (me.etag[r] = x)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = b.state, p = b.data, f = b.error, c = !f)) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || _) + "", c ? v.resolveWith(m, [p, _, C]) : v.rejectWith(m, [C, _, f]), C.statusCode(w), w = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]), y.fireWith(m, [C, _]), d && (g.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, p, f, h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                y = me.Callbacks("once memory"),
                w = h.statusCode || {},
                b = {},
                x = {},
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Dt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || Et.href) + "").replace(Ht, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain) {
                c = ne.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                } catch (T) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), Y(Nt, h, n, C), u) return C;
            d = me.event && h.global, d && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), r = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+")) : (f = h.url.slice(r.length), h.data && (r += (Lt.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace($t, "$1"), f = (Lt.test(r) ? "&" : "?") + "_=" + St++ + f), h.url = r + f), h.ifModified && (me.lastModified[r] && C.setRequestHeader("If-Modified-Since", me.lastModified[r]), me.etag[r] && C.setRequestHeader("If-None-Match", me.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(m, C, h) === !1 || u)) return C.abort();
            if (_ = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = Y(qt, h, n, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, h]), u) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, o.send(b, i)
                } catch (T) {
                    if (u) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }), me.each(["get", "post"], function(e, t) {
        me[t] = function(e, n, i, o) {
            return me.isFunction(n) && (o = o || i, i = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, me.isPlainObject(e) && e))
        }
    }), me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes)
            }), this
        }
    }), me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e)
    }, me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Wt = me.ajaxSettings.xhr();
    fe.cors = !!Wt && "withCredentials" in Wt, fe.ajax = Wt = !!Wt, me.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || Wt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e
            }
        }
    }), me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ut = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || me.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), me.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, "$1" + o) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || me.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? me(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ut.push(o)), s && me.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), me.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = Te.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && me(r).remove(), me.merge([], o.childNodes))
    }, me.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && me.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    }, me.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, u = me.css(e, "position"),
                d = me(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = me.css(e, "top"), l = me.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, me.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                me.offset.setOffset(this, e, t)
            });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + me.css(e[0], "borderTopWidth", !0),
                    left: i.left + me.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - me.css(n, "marginTop", !0),
                    left: t.left - i.left - me.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(i) {
            return $e(this, function(e, i, o) {
                var r;
                return me.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = O(fe.pixelPosition, function(e, n) {
            if (n) return n = I(e, t), at.test(n) ? me(e).position()[t] + "px" : n
        })
    }), me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            me.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || r === !0 ? "margin" : "border");
                return $e(this, function(t, n, o) {
                    var r;
                    return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? me.css(t, n, a) : me.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), me.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0)
    }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var Xt = e.jQuery,
        Gt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Gt), t && e.jQuery === me && (e.jQuery = Xt), me
    }, t || (e.jQuery = e.$ = me), me
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
/*!
                                                                                                                                                                                                                                                                                       Waypoints - 4.0.1
                                                                                                                                                                                                                                                                                       Copyright Â© 2011-2016 Caleb Troughton
                                                                                                                                                                                                                                                                                       Licensed under the MIT license.
                                                                                                                                                                                                                                                                                       https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
                                                                                                                                                                                                                                                                                       */
! function() {
    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, e.prototype.disable = function() {
        return this.enabled = !1, this
    }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function() {
        return this.group.next(this)
    }, e.prototype.previous = function() {
        return this.group.previous(this)
    }, e.invokeAll = function(e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var o = 0, r = t.length; r > o; o++) t[o][e]()
    }, e.destroyAll = function() {
        e.invokeAll("destroy")
    }, e.disableAll = function() {
        e.invokeAll("disable")
    }, e.enableAll = function() {
        e.Context.refreshAll();
        for (var t in n) n[t].enabled = !0;
        return this
    }, e.refreshAll = function() {
        e.Context.refreshAll()
    }, e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),
function() {
    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }

    function t(e) {
        this.element = e, this.Adapter = o.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        o = window.Waypoint,
        r = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
            n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            (!t.didScroll || o.isTouch) && (t.didScroll = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, t.prototype.handleScroll = function() {
        var e = {},
            t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in t) {
            var i = t[n],
                o = i.newScroll > i.oldScroll,
                r = o ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s];
                if (null !== a.triggerPoint) {
                    var l = i.oldScroll < a.triggerPoint,
                        c = i.newScroll >= a.triggerPoint,
                        u = l && c,
                        d = !l && !c;
                    (u || d) && (a.queueTrigger(r), e[a.group.id] = a.group)
                }
            }
        }
        for (var p in e) e[p].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }, t.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, t.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, o = e.length; o > i; i++) e[i].destroy()
    }, t.prototype.refresh = function() {
        var e, t = this.element == this.element.window,
            n = t ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in e) {
            var s = e[r];
            for (var a in this.waypoints[r]) {
                var l, c, u, d, p, f = this.waypoints[r][a],
                    h = f.options.offset,
                    m = f.triggerPoint,
                    g = 0,
                    v = null == m;
                f.element !== f.element.window && (g = f.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(g + l - h), c = m < s.oldScroll, u = f.triggerPoint >= s.oldScroll, d = c && u, p = !c && !u, !v && d ? (f.queueTrigger(s.backward), i[f.group.id] = f.group) : !v && p ? (f.queueTrigger(s.forward), i[f.group.id] = f.group) : v && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), i[f.group.id] = f.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var e in i) i[e].flushTriggers()
        }), this
    }, t.findOrCreateByElement = function(e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function() {
        for (var e in i) i[e].refresh()
    }, t.findByElement = function(e) {
        return i[e.waypointContextKey]
    }, window.onload = function() {
        r && r(), t.refreshAll()
    }, o.requestAnimationFrame = function(t) {
        var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
        n.call(window, t)
    }, o.Context = t
}(),
function() {
    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function n(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;
    n.prototype.add = function(e) {
        this.waypoints.push(e)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                o = "up" === n || "left" === n;
            i.sort(o ? t : e);
            for (var r = 0, s = i.length; s > r; r += 1) {
                var a = i[r];
                (a.options.continuous || r === i.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints),
            i = n === this.waypoints.length - 1;
        return i ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }, n.prototype.remove = function(e) {
        var t = o.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(e) {
        return i[e.axis][e.name] || new n(e)
    }, o.Group = n
}(),
function() {
    function e(e) {
        return e === e.window
    }

    function t(t) {
        return e(t) ? t : t.defaultView
    }

    function n(e) {
        this.element = e, this.handlers = {}
    }
    var i = window.Waypoint;
    n.prototype.innerHeight = function() {
        var t = e(this.element);
        return t ? this.element.innerHeight : this.element.clientHeight
    }, n.prototype.innerWidth = function() {
        var t = e(this.element);
        return t ? this.element.innerWidth : this.element.clientWidth
    }, n.prototype.off = function(e, t) {
        function n(e, t, n) {
            for (var i = 0, o = t.length - 1; o > i; i++) {
                var r = t[i];
                n && n !== r || e.removeEventListener(r)
            }
        }
        var i = e.split("."),
            o = i[0],
            r = i[1],
            s = this.element;
        if (r && this.handlers[r] && o) n(s, this.handlers[r][o], t), this.handlers[r][o] = [];
        else if (o)
            for (var a in this.handlers) n(s, this.handlers[a][o] || [], t), this.handlers[a][o] = [];
        else if (r && this.handlers[r]) {
            for (var l in this.handlers[r]) n(s, this.handlers[r][l], t);
            this.handlers[r] = {}
        }
    }, n.prototype.offset = function() {
        if (!this.element.ownerDocument) return null;
        var e = this.element.ownerDocument.documentElement,
            n = t(this.element.ownerDocument),
            i = {
                top: 0,
                left: 0
            };
        return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), {
            top: i.top + n.pageYOffset - e.clientTop,
            left: i.left + n.pageXOffset - e.clientLeft
        }
    }, n.prototype.on = function(e, t) {
        var n = e.split("."),
            i = n[0],
            o = n[1] || "__default",
            r = this.handlers[o] = this.handlers[o] || {},
            s = r[i] = r[i] || [];
        s.push(t), this.element.addEventListener(i, t)
    }, n.prototype.outerHeight = function(t) {
        var n, i = this.innerHeight();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginTop, 10), i += parseInt(n.marginBottom, 10)), i
    }, n.prototype.outerWidth = function(t) {
        var n, i = this.innerWidth();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginLeft, 10), i += parseInt(n.marginRight, 10)), i
    }, n.prototype.scrollLeft = function() {
        var e = t(this.element);
        return e ? e.pageXOffset : this.element.scrollLeft
    }, n.prototype.scrollTop = function() {
        var e = t(this.element);
        return e ? e.pageYOffset : this.element.scrollTop
    }, n.extend = function() {
        function e(e, t) {
            if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)))
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        for (var t = Array.prototype.slice.call(arguments), n = 1, i = t.length; i > n; n++) e(t[0], t[n]);
        return t[0]
    }, n.inArray = function(e, t, n) {
        return null == t ? -1 : t.indexOf(e, n)
    }, n.isEmptyObject = function(e) {
        for (var t in e) return !1;
        return !0
    }, i.adapters.push({
        name: "noframework",
        Adapter: n
    }), i.Adapter = n
}(),
/*!
              Waypoints Infinite Scroll Shortcut - 4.0.1
              Copyright Â© 2011-2016 Caleb Troughton
              Licensed under the MIT license.
              https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
              */
! function() {
    function e(i) {
        this.options = t.extend({}, e.defaults, i), this.container = this.options.element, "auto" !== this.options.container && (this.container = this.options.container), this.$container = t(this.container), this.$more = t(this.options.more), this.$more.length && (this.setupHandler(), this.waypoint = new n(this.options))
    }
    var t = window.jQuery,
        n = window.Waypoint;
    e.prototype.setupHandler = function() {
        this.options.handler = t.proxy(function() {
            this.options.onBeforePageLoad(), this.destroy(), this.$container.addClass(this.options.loadingClass), t.get(t(this.options.more).attr("href"), t.proxy(function(e) {
                var i = t(t.parseHTML(e)),
                    o = i.find(this.options.more),
                    r = i.find(this.options.items);
                r.length || (r = i.filter(this.options.items)), this.$container.append(r), this.$container.removeClass(this.options.loadingClass), o.length || (o = i.filter(this.options.more)), o.length ? (this.$more.replaceWith(o), this.$more = o, this.waypoint = new n(this.options)) : this.$more.remove(), this.options.onAfterPageLoad(r)
            }, this))
        }, this)
    }, e.prototype.destroy = function() {
        this.waypoint && this.waypoint.destroy()
    }, e.defaults = {
        container: "auto",
        items: ".infinite-item",
        more: ".infinite-more-link",
        offset: "bottom-in-view",
        loadingClass: "infinite-loading",
        onBeforePageLoad: t.noop,
        onAfterPageLoad: t.noop
    }, n.Infinite = e
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, i, o, r, s, a = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        p = "Open",
        f = "Change",
        h = "mfp",
        m = "." + h,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        x = e(window),
        _ = function(e, n) {
            t.ev.on(h + e + m, n)
        },
        C = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function(n, i) {
            t.ev.triggerHandler(h + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        S = function() {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        L = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = L(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, a = n.items;
                for (o = 0; o < a.length; o++)
                    if (s = a[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = C("bg").on("click" + m, function() {
                t.close()
            }), t.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = C("container", t.wrap)), t.contentContainer = C("content"), t.st.preloader && (t.preloader = C("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (_(d, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: x.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && i.on("keyup" + m, function(e) {
                27 === e.keyCode && t.close()
            }), x.on("resize" + m, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var u = t.wH = x.height(),
                f = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var h = t._getScrollbarSize();
                h && (f.marginRight = h)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), T("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + m, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(p), n
        },
        close: function() {
            t.isOpen && (T(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(a);
            var n = v + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || x.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var r = !!t.st[i] && t.st[i].markup;
                T("FirstMarkupParse", r), r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, T(f, n), o = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++)
                    if (o.el.hasClass("mfp-" + r[s])) {
                        i = r[s];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(t)) return !0
                    } else if (x.width() < s) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || x.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(d, [t, n, i]), e.each(n, function(n, i) {
                if (void 0 === i || i === !1) return !0;
                if (o = n.split("_"), o.length > 1) {
                    var r = t.find(m + "-" + o[0]);
                    if (r.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i)
                    }
                } else t.find(m + "-" + n).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return S(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        S();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var A, k, P, j = "inline",
        I = function() {
            P && (k.after(P.addClass(A)).detach(), P = null)
        };
    e.magnificPopup.registerModule(j, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(j), _(a + "." + j, function() {
                    I()
                })
            },
            getInline: function(n, i) {
                if (I(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (k || (A = o.hiddenClass, k = C(A), A = "mfp-" + A), P = r.after(k).detach().removeClass(A)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var O, $ = "ajax",
        D = function() {
            O && e(document.body).removeClass(O)
        },
        B = function() {
            D(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule($, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push($), O = t.st.ajax.cursor, _(a + "." + $, B), _("BeforeChange." + $, B)
            },
            getAjax: function(n) {
                O && e(document.body).addClass(O), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var s = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", s), t.appendContent(e(s.data), $), n.finished = !0, D(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        D(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var z, H = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"), _(p + i, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), _(a + i, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), x.off("resize" + m)
                }), _("Resize" + i, t.resizeImage), t.isLowIE && _("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, z && clearInterval(z), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function r(o) {
                        z && clearInterval(z), z = setInterval(function() {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(z), n++, void(3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                        }, o)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function u() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(u, 100) : s()))
                    },
                    s = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    a = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: H(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (z && clearInterval(z), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var N, q = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, s = n.duration,
                        c = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        u = function() {
                            t.content.css("visibility", "visible")
                        };
                    _("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            r = c(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), _(l + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = c(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), _(a + i, function() {
                        t._allowZoom() && (u(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - s - r
                };
                return q() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var R = "iframe",
        M = "//about:blank",
        F = function(e) {
            if (t.currTemplate[R]) {
                var n = t.currTemplate[R].find("iframe");
                n.length && (e || (n[0].src = M), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(R), _("BeforeChange", function(e, t, n) {
                    t !== n && (t === R ? F() : n === R && F(!0))
                }), _(a + "." + R, function() {
                    F()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
            }
        }
    });
    var W = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e
        },
        U = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    o = ".mfp-gallery";
                return t.direction = !0, !(!n || !n.enabled) && (r += " mfp-gallery", _(p + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1
                    }), i.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), _("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                }), _(d + o, function(e, i, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? U(n.tCounter, r.index, s) : ""
                }), _("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        o.click(function() {
                            t.prev()
                        }), r.click(function() {
                            t.next()
                        }), t.container.append(o.add(r))
                    }
                }), _(f + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void _(a + o, function() {
                    i.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0, t.index = W(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = W(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = W(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var Q = "retina";
    e.magnificPopup.registerModule(Q, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (_("ImageHasSize." + Q, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), _("ElementParse." + Q, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }), S()
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t, n, i) {
    function o(t, n) {
        this.settings = null, this.options = e.extend({}, o.Defaults, n), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, n) {
            this._handlers[n] = e.proxy(this[n], this)
        }, this)), e.each(o.Plugins, e.proxy(function(e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(o.Workers, e.proxy(function(t, n) {
            this._pipe.push({
                filter: n.filter,
                run: e.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this.settings.margin || "",
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            !n && this.$stage.children().css(o), e.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                n = null,
                i = this._items.length,
                o = !this.settings.autoWidth,
                r = [];
            for (e.items = {
                    merge: !1,
                    width: t
                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, r[i] = o ? t * n : this._items[i].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                n = this._items,
                i = this.settings,
                o = Math.max(2 * i.items, 4),
                r = 2 * Math.ceil(n.length / 2),
                s = i.loop && n.length ? i.rewind ? o : Math.max(o, r) : 0,
                a = "",
                l = "";
            for (s /= 2; s--;) t.push(this.normalize(t.length / 2, !0)), a += n[t[t.length - 1]][0].outerHTML, t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), l = n[t[t.length - 1]][0].outerHTML + l;
            this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < t;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * e);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, i.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, t, n, i, o = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + r,
                a = s + this.width() * o,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + r * o, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, n, o;
            t = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), t.length && 0 >= o && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            o = null;
        n ? (e.each(n, function(e) {
            t >= e && e > i && (i = Number(e))
        }), o = e.extend({}, this.options, n[i]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : o = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(t) {
        var n = this.trigger("prepare", {
            content: t
        });
        return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, o.prototype.update = function() {
        for (var t = 0, n = this._pipe.length, i = e.proxy(function(e) {
                return this[e]
            }, this._invalidated), o = {}; n > t;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(o), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(e) {
        switch (e = e || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, o.prototype.registerEventHandlers = function() {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function(t) {
        var i = null;
        3 !== t.which && (e.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
            x: i[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        }) : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(n).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(n).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
            var i = this.difference(this._drag.pointer, this.pointer(t));
            e(n).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function(e) {
        var t = null,
            n = null,
            i = null,
            o = this.difference(this._drag.pointer, this.pointer(e)),
            r = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
            i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, t + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
    }, o.prototype.onDragEnd = function(t) {
        var i = this.difference(this._drag.pointer, this.pointer(t)),
            o = this._drag.stage.current,
            r = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== i.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(t, n) {
        var i = -1,
            o = 30,
            r = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || e.each(s, e.proxy(function(e, a) {
            return "left" === n && t > a - o && a + o > t ? i = e : "right" === n && t > a - r - o && a - r + o > t ? i = e + 1 : this.op(t, "<", a) && this.op(t, ">", s[e + 1] || a - r) && (i = "left" === n ? e + 1 : e), -1 === i
        }, this)), this.settings.loop || (this.op(t, ">", s[this.minimum()]) ? i = t = this.minimum() : this.op(t, "<", s[this.maximum()]) && (i = t = this.maximum())), i
    }, o.prototype.animate = function(t) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, o.prototype.is = function(e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, o.prototype.current = function(e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(t) {
        return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
            return t
        })
    }, o.prototype.reset = function(e) {
        e = this.normalize(e), e !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(e, t) {
        var n = this._items.length,
            o = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || 1 > n ? e = i : (0 > e || e >= n + o) && (e = ((e - o / 2) % n + n) % n + o / 2), e
    }, o.prototype.relative = function(e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, o.prototype.maximum = function(e) {
        var t, n, i, o = this.settings,
            r = this._coordinates.length;
        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            for (t = this._items.length, n = this._items[--t].width(), i = this.$element.width(); t-- && (n += this._items[t].width() + this.settings.margin, !(n > i)););
            r = t + 1
        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
        return e && (r -= this._clones.length / 2), Math.max(r, 0)
    }, o.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, o.prototype.items = function(e) {
        return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, o.prototype.mergers = function(e) {
        return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, o.prototype.clones = function(t) {
        var n = this._clones.length / 2,
            o = n + this._items.length,
            r = function(e) {
                return e % 2 === 0 ? o + e / 2 : n - (e + 1) / 2
            };
        return t === i ? e.map(this._clones, function(e, t) {
            return r(t)
        }) : e.map(this._clones, function(e, n) {
            return e === t ? r(n) : null
        })
    }, o.prototype.speed = function(e) {
        return e !== i && (this._speed = e), this._speed
    }, o.prototype.coordinates = function(t) {
        var n, o = 1,
            r = t - 1;
        return t === i ? e.map(this._coordinates, e.proxy(function(e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = t + 1), n = this._coordinates[t], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * o) : n = this._coordinates[r] || 0, n = Math.ceil(n))
    }, o.prototype.duration = function(e, t, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, o.prototype.to = function(e, t) {
        var n = this.current(),
            i = null,
            o = e - this.relative(n),
            r = (o > 0) - (0 > o),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), e = n + o, i = ((e - a) % s + s) % s + a, i !== e && l >= i - o && i - o > 0 && (n = i - o, e = i, this.reset(n))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, o.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, o.prototype.onTransitionEnd = function(e) {
        return (e === i || (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== t) i = e(this.options.responsiveBaseElement).width();
        else if (t.innerWidth) i = t.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, o.prototype.replace = function(t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
            return 1 === this.nodeType
        }).each(e.proxy(function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(t, n) {
        var o = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
            content: t,
            position: n
        }), t = this.prepare(t), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[n - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(t), this._items.splice(n, 0, t), this._mergers.splice(n, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: n
        })
    }, o.prototype.remove = function(e) {
        e = this.normalize(e, !0), e !== i && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, o.prototype.preloadAutoWidthImages = function(t) {
        t.each(e.proxy(function(t, n) {
            this.enter("pre-loading"), n = e(n), e(new Image).one("load", e.proxy(function(e) {
                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(n).off(".owl.core"), this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : n > e;
            case ">":
                return i ? n > e : e > n;
            case ">=":
                return i ? n >= e : e >= n;
            case "<=":
                return i ? e >= n : n >= e
        }
    }, o.prototype.on = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, o.prototype.off = function(e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, o.prototype.trigger = function(t, n, i, r, s) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = e.camelCase(e.grep(["on", t, i], function(e) {
                return e
            }).join("-").toLowerCase()),
            c = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, a, n));
        return this._supress[t] || (e.each(this._plugins, function(e, t) {
            t.onTrigger && t.onTrigger(c)
        }), this.register({
            type: o.Type.Event,
            name: t
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, o.prototype.enter = function(t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
            this._states.current[t] === i && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, o.prototype.leave = function(t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
            this._states.current[t]--
        }, this))
    }, o.prototype.register = function(t) {
        if (t.type === o.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var n = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function(e) {
                    return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, e.event.special[t.name].owl = !0
            }
        } else t.type === o.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(n, i) {
            return e.inArray(n, this._states.tags[t.name]) === i
        }, this)))
    }, o.prototype.suppress = function(t) {
        e.each(t, e.proxy(function(e, t) {
            this._supress[t] = !0
        }, this))
    }, o.prototype.release = function(t) {
        e.each(t, e.proxy(function(e, t) {
            delete this._supress[t]
        }, this))
    }, o.prototype.pointer = function(e) {
        var n = {
            x: null,
            y: null
        };
        return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (n.x = e.pageX, n.y = e.pageY) : (n.x = e.clientX, n.y = e.clientY), n
    }, o.prototype.isNumeric = function(e) {
        return !isNaN(parseFloat(e))
    }, o.prototype.difference = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, e.fn.owlCarousel = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var i = e(this),
                r = i.data("owl.carousel");
            r || (r = new o(this, "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), i.data("owl.carousel", r), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, n) {
                r.register({
                    type: o.Type.Event,
                    name: n
                }), r.$element.on(n + ".owl.carousel.core", e.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, r))
            })), "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, n)
        })
    }, e.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function() {
        var e, n;
        t.clearInterval(this._interval);
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var n = this._core.settings, o = n.center && Math.ceil(n.items / 2) || n.items, r = n.center && -1 * o || 0, s = (t.property && t.property.value !== i ? t.property.value : this._core.current()) + r, a = this._core.clones().length, l = e.proxy(function(e, t) {
                            this.load(t)
                        }, this); r++ < o;) this.load(a / 2 + this._core.relative(s)), a && e.each(this._core.clones(this._core.relative(s)), l), s++
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1
    }, o.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            o = i && i.find(".owl-lazy");
        !o || e.inArray(i.get(0), this._loaded) > -1 || (o.each(e.proxy(function(n, i) {
            var o, r = e(i),
                s = t.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: s
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", e.proxy(function() {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : (o = new Image, o.onload = e.proxy(function() {
                r.css({
                    "background-image": "url(" + s + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this), o.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, o.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": e.proxy(function(e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function() {
        var t = this._core._current,
            n = t + this._core.settings.items,
            i = this._core.$stage.children().toArray().slice(t, n),
            o = [],
            r = 0;
        e.each(i, function(t, n) {
            o.push(e(n).height())
        }), r = Math.max.apply(null, o), this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                if (t.namespace) {
                    var n = e(t.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
            this.play(e)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function(e, t) {
        var n = function() {
                return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            o = e.attr("data-width") || this._core.settings.videoWidth,
            r = e.attr("data-height") || this._core.settings.videoHeight,
            s = e.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: o,
            height: r
        }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
    }, o.prototype.thumbnail = function(t, n) {
        var i, o, r, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            a = t.find("img"),
            l = "src",
            c = "",
            u = this._core.settings,
            d = function(e) {
                o = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after(o)
            };
        return t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(r)) : "vimeo" === n.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                r = e[0].thumbnail_large, d(r)
            }
        }) : "vzaar" === n.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                r = e.framegrab_url, d(r)
            }
        }))
    }, o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function(t) {
        var n, i = e(t.target),
            o = i.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            s = r.width || "100%",
            a = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), "youtube" === r.type ? n = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? n = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + n + "</div>").insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function() {
        var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function() {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": e.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(s)), r && o.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(r))
        }
    }, o.prototype.clear = function(t) {
        e(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": e.proxy(function(e, t, n) {
                e.namespace && this.play(t, n)
            }, this),
            "stop.owl.autoplay": e.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": e.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, r.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype.play = function(e, t) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, o.prototype._getNextTimeout = function(i, o) {
        return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
        }, this), i || this._core.settings.autoplayTimeout)
    }, o.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, o.prototype.stop = function() {
        this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, o.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, o.prototype.destroy = function() {
        var e, t;
        this.stop();
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": e.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": e.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": e.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function() {
        var t, n = this._core.settings;
        this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
            this.next(n.navSpeed)
        }, this)), n.dotsData || (this._templates = [e("<div>").addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(t) {
            var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(i, n.dotsSpeed)
        }, this));
        for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
    }, o.prototype.destroy = function() {
        var e, t, n, i;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, o.prototype.update = function() {
        var e, t, n, i = this._core.clones().length / 2,
            o = i + this._core.items().length,
            r = this._core.maximum(!0),
            s = this._core.settings,
            a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], e = i, t = 0, n = 0; o > e; e++) {
                if (t >= a || 0 === t) {
                    if (this._pages.push({
                            start: Math.min(r, e - i),
                            end: e - i + a - 1
                        }), Math.min(r, e - i) === r) break;
                    t = 0, ++n
                }
                t += this._core.mergers(this._core.relative(e))
            }
    }, o.prototype.draw = function() {
        var t, n = this._core.settings,
            i = this._core.items().length <= n.items,
            o = this._core.relative(this._core.current()),
            r = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : 0 > t && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(t) {
        var n = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, o.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy(function(e, n) {
            return e.start <= t && e.end >= t
        }, this)).pop()
    }, o.prototype.getPosition = function(t) {
        var n, i, o = this._core.settings;
        return "page" == o.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += o.slideBy : n -= o.slideBy), n
    }, o.prototype.next = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, o.prototype.prev = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, o.prototype.to = function(t, n, i) {
        var o;
        !i && this._pages.length ? (o = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % o + o) % o].start, n)) : e.proxy(this._overrides.to, this._core)(t, n)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var o = function r(n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function(n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                if (t.namespace) {
                    var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = t.content
                }
            }, this),
            "changed.owl.carousel": e.proxy(function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        o = e.map(this._hashes, function(e, t) {
                            return e === i ? t : null
                        }).join();
                    if (!o || t.location.hash.slice(1) === o) return;
                    t.location.hash = o
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
            var n = t.location.hash.substring(1),
                o = this._core.$stage.children(),
                r = this._hashes[n] && o.index(this._hashes[n]);
            r !== i && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }, this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function() {
        var n, i;
        e(t).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    function o(t, n) {
        var o = !1,
            r = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + a.join(r + " ") + r).split(" "), function(e, t) {
            return s[t] !== i ? (o = !n || t, !1) : void 0
        }), o
    }

    function r(e) {
        return o(e, !0)
    }
    var s = e("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = {
            csstransforms: function() {
                return !!o("transform")
            },
            csstransforms3d: function() {
                return !!o("perspective")
            },
            csstransitions: function() {
                return !!o("transition")
            },
            cssanimations: function() {
                return !!o("animation")
            }
        };
    c.csstransitions() && (e.support.transition = new String(r("transition")), e.support.transition.end = l.transition.end[e.support.transition]), c.cssanimations() && (e.support.animation = new String(r("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c.csstransforms() && (e.support.transform = new String(r("transform")), e.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Barba", [], t) : "object" == typeof exports ? exports.Barba = t() : e.Barba = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "http://localhost:8080/dist", t(0)
    }([function(e, t, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var i = {
            version: "1.0.0",
            BaseTransition: n(4),
            BaseView: n(6),
            BaseCache: n(8),
            Dispatcher: n(7),
            HistoryManager: n(9),
            Pjax: n(10),
            Prefetch: n(13),
            Utils: n(5)
        };
        e.exports = i
    }, function(e, t, n) {
        (function(t) {
            ! function(n) {
                function i() {}

                function o(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }

                function r(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
                }

                function s(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void f(function() {
                        var e = 1 === i._state ? t.onFulfilled : t.onRejected;
                        if (null === e) return void(1 === i._state ? a : l)(t.promise, i._value);
                        var n;
                        try {
                            n = e(i._value)
                        } catch (i) {
                            return void l(t.promise, i)
                        }
                        a(t.promise, n)
                    }))
                }

                function a(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof r) return e._state = 3, e._value = t, void c(e);
                            if ("function" == typeof n) return void d(o(n, t), e)
                        }
                        e._state = 1, e._value = t, c(e)
                    } catch (t) {
                        l(e, t)
                    }
                }

                function l(e, t) {
                    e._state = 2, e._value = t, c(e)
                }

                function c(e) {
                    2 === e._state && 0 === e._deferreds.length && f(function() {
                        e._handled || h(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function u(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function d(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0, a(t, e))
                        }, function(e) {
                            n || (n = !0, l(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, l(t, e)
                    }
                }
                var p = setTimeout,
                    f = "function" == typeof t && t || function(e) {
                        p(e, 0)
                    },
                    h = function(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    };
                r.prototype["catch"] = function(e) {
                    return this.then(null, e)
                }, r.prototype.then = function(e, t) {
                    var n = new this.constructor(i);
                    return s(this, new u(e, t, n)), n
                }, r.all = function(e) {
                    var t = Array.prototype.slice.call(e);
                    return new r(function(e, n) {
                        function i(e, r) {
                            try {
                                if (r && ("object" == typeof r || "function" == typeof r)) {
                                    var s = r.then;
                                    if ("function" == typeof s) return void s.call(r, function(t) {
                                        i(e, t)
                                    }, n)
                                }
                                t[e] = r, 0 === --o && a(t)
                            } catch (a) {
                                n(a)
                            }
                        }
                        if (0 === t.length) return e([]);
                        for (var o = t.length, r = 0; r < t.length; r++) i(r, t[r])
                    })
                }, r.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                        t(e)
                    })
                }, r.reject = function(e) {
                    return new r(function(t, n) {
                        n(e)
                    })
                }, r.race = function(e) {
                    return new r(function(t, n) {
                        for (var i = 0, o = e.length; i < o; i++) e[i].then(t, n)
                    })
                }, r._setImmediateFn = function(e) {
                    f = e
                }, r._setUnhandledRejectionFn = function(e) {
                    h = e
                }, "undefined" != typeof e && e.exports ? e.exports = r : n.Promise || (n.Promise = r)
            }(this)
        }).call(t, n(2).setImmediate)
    }, function(e, t, n) {
        (function(e, i) {
            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            var r = n(3).nextTick,
                s = Function.prototype.apply,
                a = Array.prototype.slice,
                l = {},
                c = 0;
            t.setTimeout = function() {
                return new o(s.call(setTimeout, window, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new o(s.call(setInterval, window, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, t.setImmediate = "function" == typeof e ? e : function(e) {
                var n = c++,
                    i = !(arguments.length < 2) && a.call(arguments, 1);
                return l[n] = !0, r(function() {
                    l[n] && (i ? e.apply(null, i) : e.call(null), t.clearImmediate(n))
                }), n
            }, t.clearImmediate = "function" == typeof i ? i : function(e) {
                delete l[e]
            }
        }).call(t, n(2).setImmediate, n(2).clearImmediate)
    }, function(e, t) {
        function n() {
            d && c && (d = !1, c.length ? u = c.concat(u) : p = -1, u.length && i())
        }

        function i() {
            if (!d) {
                var e = s(n);
                d = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++p < t;) c && c[p].run();
                    p = -1, t = u.length
                }
                c = null, d = !1, a(e)
            }
        }

        function o(e, t) {
            this.fun = e, this.array = t
        }

        function r() {}
        var s, a, l = e.exports = {};
        ! function() {
            try {
                s = setTimeout
            } catch (e) {
                s = function() {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                a = clearTimeout
            } catch (e) {
                a = function() {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var c, u = [],
            d = !1,
            p = -1;
        l.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new o(e, t)), 1 !== u.length || d || s(i, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = r, l.addListener = r, l.once = r, l.off = r, l.removeListener = r, l.removeAllListeners = r, l.emit = r, l.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function() {
            return "/"
        }, l.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        var i = n(5),
            o = {
                oldContainer: void 0,
                newContainer: void 0,
                newContainerLoading: void 0,
                extend: function(e) {
                    return i.extend(this, e)
                },
                init: function(e, t) {
                    var n = this;
                    return this.oldContainer = e, this._newContainerPromise = t, this.deferred = i.deferred(), this.newContainerReady = i.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(e) {
                        n.newContainer = e, n.newContainerReady.resolve()
                    }), this.deferred.promise
                },
                done: function() {
                    this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
                },
                start: function() {}
            };
        e.exports = o
    }, function(e, t) {
        var n = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(e) {
                return e.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(e) {
                var t = this.deferred(),
                    n = new XMLHttpRequest;
                return n.onreadystatechange = function() {
                    if (4 === n.readyState) return 200 === n.status ? t.resolve(n.responseText) : t.reject(new Error("xhr: HTTP code is not 200"))
                }, n.ontimeout = function() {
                    return t.reject(new Error("xhr: Timeout exceeded"))
                }, n.open("GET", e), n.timeout = this.xhrTimeout, n.setRequestHeader("x-barba", "yes"), n.send(), t.promise
            },
            extend: function(e, t) {
                var n = Object.create(e);
                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                return n
            },
            deferred: function() {
                return new function() {
                    this.resolve = null, this.reject = null, this.promise = new Promise(function(e, t) {
                        this.resolve = e, this.reject = t
                    }.bind(this))
                }
            },
            getPort: function(e) {
                var t = "undefined" != typeof e ? e : window.location.port,
                    n = window.location.protocol;
                return "" != t ? parseInt(t) : "http:" === n ? 80 : "https:" === n ? 443 : void 0
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(7),
            o = n(5),
            r = {
                namespace: null,
                extend: function(e) {
                    return o.extend(this, e)
                },
                init: function() {
                    var e = this;
                    i.on("initStateChange", function(t, n) {
                        n && n.namespace === e.namespace && e.onLeave()
                    }), i.on("newPageReady", function(t, n, i) {
                        e.container = i, t.namespace === e.namespace && e.onEnter()
                    }), i.on("transitionCompleted", function(t, n) {
                        t.namespace === e.namespace && e.onEnterCompleted(), n && n.namespace === e.namespace && e.onLeaveCompleted()
                    })
                },
                onEnter: function() {},
                onEnterCompleted: function() {},
                onLeave: function() {},
                onLeaveCompleted: function() {}
            };
        e.exports = r
    }, function(e, t) {
        var n = {
            events: {},
            on: function(e, t) {
                this.events[e] = this.events[e] || [], this.events[e].push(t)
            },
            off: function(e, t) {
                e in this.events != 0 && this.events[e].splice(this.events[e].indexOf(t), 1)
            },
            trigger: function(e) {
                if (e in this.events != 0)
                    for (var t = 0; t < this.events[e].length; t++) this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            o = {
                data: {},
                extend: function(e) {
                    return i.extend(this, e)
                },
                set: function(e, t) {
                    this.data[e] = t
                },
                get: function(e) {
                    return this.data[e]
                },
                reset: function() {
                    this.data = {}
                }
            };
        e.exports = o
    }, function(e, t) {
        var n = {
            history: [],
            add: function(e, t) {
                t || (t = void 0), this.history.push({
                    url: e,
                    namespace: t
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var e = this.history;
                return e.length < 2 ? null : e[e.length - 2]
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            o = n(7),
            r = n(11),
            s = n(8),
            a = n(9),
            l = n(12),
            c = {
                Dom: l,
                History: a,
                Cache: s,
                cacheEnabled: !0,
                transitionProgress: !1,
                ignoreClassLink: "no-barba",
                start: function() {
                    this.init()
                },
                init: function() {
                    var e = this.Dom.getContainer(),
                        t = this.Dom.getWrapper();
                    t.setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(e)), o.trigger("initStateChange", this.History.currentStatus()), o.trigger("newPageReady", this.History.currentStatus(), {}, e, this.Dom.currentHTML), o.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
                },
                bindEvents: function() {
                    document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
                },
                getCurrentUrl: function() {
                    return i.cleanLink(i.getCurrentUrl())
                },
                goTo: function(e) {
                    window.history.pushState(null, null, e), this.onStateChange()
                },
                forceGoTo: function(e) {
                    window.location = e
                },
                load: function(e) {
                    var t, n = i.deferred(),
                        o = this;
                    return t = this.Cache.get(e), t || (t = i.xhr(e), this.Cache.set(e, t)), t.then(function(e) {
                        var t = o.Dom.parseResponse(e);
                        o.Dom.putContainer(t), o.cacheEnabled || o.Cache.reset(), n.resolve(t)
                    }, function() {
                        o.forceGoTo(e), n.reject()
                    }), n.promise
                },
                getHref: function(e) {
                    if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0
                },
                onLinkClick: function(e) {
                    for (var t = e.target; t && !this.getHref(t);) t = t.parentNode;
                    if (this.preventCheck(e, t)) {
                        e.stopPropagation(), e.preventDefault(), o.trigger("linkClicked", t, e);
                        var n = this.getHref(t);
                        this.goTo(n)
                    }
                },
                preventCheck: function(e, t) {
                    if (!window.history.pushState) return !1;
                    var n = this.getHref(t);
                    return !(!t || !n || e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || t.target && "_blank" === t.target || window.location.protocol !== t.protocol || window.location.hostname !== t.hostname || i.getPort() !== i.getPort(t.port) || n.indexOf("#") > -1 || t.getAttribute && "string" == typeof t.getAttribute("download") || i.cleanLink(n) == i.cleanLink(location.href) || t.classList.contains(this.ignoreClassLink))
                },
                getTransition: function() {
                    return r
                },
                onStateChange: function() {
                    var e = this.getCurrentUrl();
                    if (this.transitionProgress && this.forceGoTo(e), this.History.currentStatus().url === e) return !1;
                    this.History.add(e);
                    var t = this.load(e),
                        n = Object.create(this.getTransition());
                    this.transitionProgress = !0, o.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                    var i = n.init(this.Dom.getContainer(), t);
                    t.then(this.onNewContainerLoaded.bind(this)), i.then(this.onTransitionEnd.bind(this))
                },
                onNewContainerLoaded: function(e) {
                    var t = this.History.currentStatus();
                    t.namespace = this.Dom.getNamespace(e), o.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), e, this.Dom.currentHTML)
                },
                onTransitionEnd: function() {
                    this.transitionProgress = !1, o.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
                }
            };
        e.exports = c
    }, function(e, t, n) {
        var i = n(4),
            o = i.extend({
                start: function() {
                    this.newContainerLoading.then(this.finish.bind(this))
                },
                finish: function() {
                    document.body.scrollTop = 0, this.done()
                }
            });
        e.exports = o
    }, function(e, t) {
        var n = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(e) {
                this.currentHTML = e;
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = t.querySelector("title");
                return n && (document.title = n.textContent), this.getContainer(t)
            },
            getWrapper: function() {
                var e = document.getElementById(this.wrapperId);
                if (!e) throw new Error("Barba.js: wrapper not found!");
                return e
            },
            getContainer: function(e) {
                if (e || (e = document.body), !e) throw new Error("Barba.js: DOM not ready!");
                var t = this.parseContainer(e);
                if (t && t.jquery && (t = t[0]), !t) throw new Error("Barba.js: no container found");
                return t
            },
            getNamespace: function(e) {
                return e && e.dataset ? e.dataset[this.dataNamespace] : e ? e.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(e) {
                e.style.visibility = "hidden";
                var t = this.getWrapper();
                t.appendChild(e)
            },
            parseContainer: function(e) {
                return e.querySelector("." + this.containerClass)
            }
        };
        e.exports = n
    }, function(e, t, n) {
        var i = n(5),
            o = n(10),
            r = {
                ignoreClassLink: "no-barba-prefetch",
                init: function() {
                    return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
                },
                onLinkEnter: function(e) {
                    for (var t = e.target; t && !o.getHref(t);) t = t.parentNode;
                    if (t && !t.classList.contains(this.ignoreClassLink)) {
                        var n = o.getHref(t);
                        if (o.preventCheck(e, t) && !o.Cache.get(n)) {
                            var r = i.xhr(n);
                            o.Cache.set(n, r)
                        }
                    }
                }
            };
        e.exports = r
    }])
}), /*! jQuery & Zepto Lazy v1.7.7 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */ ! function(e, t) {
    function n(n, i, r, a, l) {
        function c() {
            T = e.devicePixelRatio > 1, r = u(r), i.delay >= 0 && setTimeout(function() {
                d(!0)
            }, i.delay), (i.delay < 0 || i.combined) && (a.e = y(i.throttle, function(e) {
                "resize" === e.type && (_ = C = -1), d(e.all)
            }), a.a = function(e) {
                e = u(e), r.push.apply(r, e)
            }, a.g = function() {
                return r = o(r).filter(function() {
                    return !o(this).data(i.loadedName)
                })
            }, a.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = r.filter(function() {
                        return this === e[t]
                    });
                    n.length && d(!1, n)
                }
            }, d(), o(i.appendScroll).on("scroll." + l + " resize." + l, a.e))
        }

        function u(e) {
            var r = i.defaultImage,
                s = i.placeholder,
                a = i.imageBase,
                l = i.srcsetAttribute,
                c = i.loaderAttribute,
                u = i._f || {};
            e = o(e).filter(function() {
                var e = o(this),
                    n = g(this);
                return !e.data(i.handledName) && (e.attr(i.attribute) || e.attr(l) || e.attr(c) || u[n] !== t)
            }).data("plugin_" + i.name, n);
            for (var d = 0, p = e.length; d < p; d++) {
                var f = o(e[d]),
                    h = g(e[d]),
                    m = f.attr(i.imageBaseAttribute) || a;
                h === A && m && f.attr(l) && f.attr(l, v(f.attr(l), m)), u[h] === t || f.attr(c) || f.attr(c, u[h]), h === A && r && !f.attr(k) ? f.attr(k, r) : h === A || !s || f.css(I) && "none" !== f.css(I) || f.css(I, "url('" + s + "')")
            }
            return e
        }

        function d(e, t) {
            if (!r.length) return void(i.autoDestroy && n.destroy());
            for (var s = t || r, a = !1, l = i.imageBase || "", c = i.srcsetAttribute, u = i.handledName, d = 0; d < s.length; d++)
                if (e || t || f(s[d])) {
                    var h = o(s[d]),
                        m = g(s[d]),
                        v = h.attr(i.attribute),
                        y = h.attr(i.imageBaseAttribute) || l,
                        w = h.attr(i.loaderAttribute);
                    h.data(u) || i.visibleOnly && !h.is(":visible") || !((v || h.attr(c)) && (m === A && (y + v !== h.attr(k) || h.attr(c) !== h.attr(P)) || m !== A && y + v !== h.css(I)) || w) || (a = !0, h.data(u, !0), p(h, m, y, w))
                }
            a && (r = o(r).filter(function() {
                return !o(this).data(u)
            }))
        }

        function p(e, t, n, r) {
            ++x;
            var s = function() {
                b("onError", e), w(), s = o.noop
            };
            b("beforeLoad", e);
            var a = i.attribute,
                l = i.srcsetAttribute,
                c = i.sizesAttribute,
                u = i.retinaAttribute,
                d = i.removeAttribute,
                p = i.loadedName,
                f = e.attr(u);
            if (r) {
                var h = function() {
                    d && e.removeAttr(i.loaderAttribute), e.data(p, !0), b(E, e), setTimeout(w, 1), h = o.noop
                };
                e.off(L).one(L, s).one(S, h), b(r, e, function(t) {
                    t ? (e.off(S), h()) : (e.off(L), s())
                }) || e.trigger(L)
            } else {
                var m = o(new Image);
                m.one(L, s).one(S, function() {
                    e.hide(), t === A ? e.attr(j, m.attr(j)).attr(P, m.attr(P)).attr(k, m.attr(k)) : e.css(I, "url('" + m.attr(k) + "')"), e[i.effect](i.effectTime), d && (e.removeAttr(a + " " + l + " " + u + " " + i.imageBaseAttribute), c !== j && e.removeAttr(c)), e.data(p, !0), b(E, e), m.remove(), w()
                });
                var g = (T && f ? f : e.attr(a)) || "";
                m.attr(j, e.attr(c)).attr(P, e.attr(l)).attr(k, g ? n + g : null), m.complete && m.trigger(S)
            }
        }

        function f(e) {
            var t = e.getBoundingClientRect(),
                n = i.scrollDirection,
                o = i.threshold,
                r = m() + o > t.top && -o < t.bottom,
                s = h() + o > t.left && -o < t.right;
            return "vertical" === n ? r : "horizontal" === n ? s : r && s
        }

        function h() {
            return _ >= 0 ? _ : _ = o(e).width()
        }

        function m() {
            return C >= 0 ? C : C = o(e).height()
        }

        function g(e) {
            return e.tagName.toLowerCase()
        }

        function v(e, t) {
            if (t) {
                var n = e.split(",");
                e = "";
                for (var i = 0, o = n.length; i < o; i++) e += t + n[i].trim() + (i !== o - 1 ? "," : "")
            }
            return e
        }

        function y(e, t) {
            var o, r = 0;
            return function(s, a) {
                function l() {
                    r = +new Date, t.call(n, s)
                }
                var c = +new Date - r;
                o && clearTimeout(o), c > e || !i.enableThrottle || a ? l() : o = setTimeout(l, e - c)
            }
        }

        function w() {
            --x, r.length || x || b("onFinishedAll")
        }

        function b(e, t, o) {
            return !!(e = i[e]) && (e.apply(n, [].slice.call(arguments, 1)), !0)
        }
        var x = 0,
            _ = -1,
            C = -1,
            T = !1,
            E = "afterLoad",
            S = "load",
            L = "error",
            A = "img",
            k = "src",
            P = "srcset",
            j = "sizes",
            I = "background-image";
        "event" === i.bind || s ? c() : o(e).on(S + "." + l, c)
    }

    function i(i, s) {
        var a = this,
            l = o.extend({}, a.config, s),
            c = {},
            u = l.name + "-" + ++r;
        return a.config = function(e, n) {
            return n === t ? l[e] : (l[e] = n, a)
        }, a.addItems = function(e) {
            return c.a && c.a("string" === o.type(e) ? o(e) : e), a
        }, a.getItems = function() {
            return c.g ? c.g() : {}
        }, a.update = function(e) {
            return c.e && c.e({}, !e), a
        }, a.force = function(e) {
            return c.f && c.f("string" === o.type(e) ? o(e) : e), a
        }, a.loadAll = function() {
            return c.e && c.e({
                all: !0
            }, !0), a
        }, a.destroy = function() {
            return o(l.appendScroll).off("." + u, c.e), o(e).off("." + u), c = {}, t
        }, n(a, l, i, c, u), l.chainable ? i : a
    }
    var o = e.jQuery || e.Zepto,
        r = 0,
        s = !1;
    o.fn.Lazy = o.fn.lazy = function(e) {
        return new i(this, e)
    }, o.Lazy = o.lazy = function(e, n, r) {
        if (o.isFunction(n) && (r = n, n = []), o.isFunction(r)) {
            e = o.isArray(e) ? e : [e], n = o.isArray(n) ? n : [n];
            for (var s = i.prototype.config, a = s._f || (s._f = {}), l = 0, c = e.length; l < c; l++)(s[e[l]] === t || o.isFunction(s[e[l]])) && (s[e[l]] = r);
            for (var u = 0, d = n.length; u < d; u++) a[n[u]] = e[0]
        }
    }, i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: e,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: t,
        afterLoad: t,
        onError: t,
        onFinishedAll: t
    }, o(e).on("load", function() {
        s = !0
    })
}(window),
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.10
 */
function() {
    if (window && /MSIE|Trident/.test(navigator.userAgent) && window.addEventListener) {
        var e, t, n = Object.create(null),
            i = function() {
                clearTimeout(t), t = setTimeout(e, 100)
            },
            o = function() {},
            r = function() {
                var e;
                window.addEventListener("resize", i, !1), window.addEventListener("orientationchange", i, !1), window.MutationObserver ? (e = new MutationObserver(i), e.observe(document.documentElement, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }), o = function() {
                    try {
                        e.disconnect(), window.removeEventListener("resize", i, !1), window.removeEventListener("orientationchange", i, !1)
                    } catch (t) {}
                }) : (document.documentElement.addEventListener("DOMSubtreeModified", i, !1), o = function() {
                    document.documentElement.removeEventListener("DOMSubtreeModified", i, !1), window.removeEventListener("resize", i, !1), window.removeEventListener("orientationchange", i, !1)
                })
            },
            s = "http://www.w3.org/1999/xlink";
        e = function() {
            function e() {
                v -= 1, 0 === v && r()
            }

            function t(t) {
                return function() {
                    var n, i = document.body,
                        o = document.createElement("x");
                    t.onload = null, o.innerHTML = t.responseText, n = o.getElementsByTagName("svg")[0], n && (n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", i.insertBefore(n, i.firstChild)), e()
                }
            }

            function i(t) {
                return function() {
                    t.onerror = null, t.ontimeout = null, e()
                }
            }
            var a, l, c, u, d, p, f, h, m, g = "",
                v = 0;
            if (window.XMLHttpRequest && (d = new XMLHttpRequest, d = void 0 !== d.withCredentials ? XMLHttpRequest : XDomainRequest || void 0), void 0 !== d) {
                for (o(), h = document.getElementsByTagName("use"), u = 0; u < h.length; u += 1) {
                    try {
                        l = h[u].getBoundingClientRect()
                    } catch (y) {
                        l = !1
                    }
                    f = h[u].getAttributeNS(s, "href").split("#"), a = f[0], c = f[1], p = l && 0 === l.left && 0 === l.right && 0 === l.top && 0 === l.bottom, l && 0 === l.width && 0 === l.height && !p ? (g && !a.length && c && !document.getElementById(c) && (a = g), a.length && (m = n[a], m !== !0 && h[u].setAttributeNS(s, "xlink:href", "#" + c), void 0 === m && (m = new d, n[a] = m, m.onload = t(m), m.onerror = i(m), m.ontimeout = i(m), m.open("GET", a), m.send(), v += 1))) : p || void 0 !== n[a] || (n[a] = !0)
                }
                h = "", v += 1, e()
            }
        }, window.addEventListener("load", function a() {
            window.removeEventListener("load", a, !1), e()
        }, !1)
    }
}(),
function(e) {
    e.fn.bgLoaded = function(t) {
        var n = this,
            i = {
                afterLoaded: function() {
                    this.addClass("bg-loaded")
                }
            },
            o = e.extend({}, i, t);
        n.each(function() {
            var t = e(this),
                n = t.css("background-image").split(", ");
            t.data("loaded-count", 0), e.each(n, function(i, r) {
                var s = r.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
                e("<img/>").attr("src", s).on("load", function() {
                    e(this).remove(), t.data("loaded-count", t.data("loaded-count") + 1), t.data("loaded-count") >= n.length && o.afterLoaded.call(t)
                })
            })
        })
    }
}(jQuery),
/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
 
function() {
    /*var e = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    "serviceWorker" in navigator && ("https:" === window.location.protocol || e) && navigator.serviceWorker.register("/service-worker.js").then(function(e) {
        e.onupdatefound = function() {
            if (navigator.serviceWorker.controller) {
                var t = e.installing;
                t.onstatechange = function() {
                    switch (t.state) {
                        case "installed":
                            break;
                        case "redundant":
                            throw new Error("The installing service worker became redundant.")
                    }
                }
            }
        }
    })["catch"](function(e) {
        console.error("Error during service worker registration:", e)
    })*/
}();
var UTILS = UTILS || {};
UTILS._screenSize = function() {
    var e = window,
        t = document,
        n = t.documentElement,
        i = t.getElementsByTagName("body")[0],
        o = e.innerWidth || n.clientWidth || i.clientWidth,
        r = e.innerHeight || n.clientHeight || i.clientHeight,
        s = {
            x: o,
            y: r
        };
    return s
};
var UTILS = UTILS || {};
UTILS.scrollToID = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html,body",
        n = (window.location.pathname, 0),
        i = (UTILS._screenSize().x, $(e).offset().top - n);
    $(t).animate({
        scrollTop: i
    }, 1e3)
}, UTILS.hashAnchorClick = function() {
    return $('a[href*="#"]:not(.js-scroll-to)').on("click", function(e) {
        var t = this.hash,
            n = t.substr(t.indexOf("#"));
        return n.length && UTILS.scrollToID(n), !1
    }), !1
};
var UTILS = UTILS || {};
UTILS.infiniteScroll = function(e) {
    var t = void 0,
        n = "#js-infinity-wrapper";
    $(n).length && (t = new Waypoint.Infinite({
        element: $(n)[0],
        onAfterPageLoad: function() {
            e && e()
        }
    }))
};
var UTILS = UTILS || {};
UTILS._animationedSections = function() {
    var e, t, n, i = {
            runAnimation: function(e, t) {
                var n = t.split("-");
                setTimeout(function() {
                    e.classList.remove(t)
                }, 1200), e.classList.add("animated"), e.classList.add(n[1]), e.classList.add("active"), setTimeout(function() {
                    e.classList.remove("animated"), e.classList.remove(n[1]), e.classList.remove("active")
                }, 3500), $(e).find(".js-owl-opacity").trigger("play.owl.autoplay", [3e3]), $(e).find(".js-owl-slider-gallery").trigger("play.owl.autoplay", [5e3]), window && /MSIE|Trident/.test(navigator.userAgent) && window.addEventListener && setTimeout(function() {
                    $(e).find(".js-owl-slider-gallery").trigger("refresh.owl.carousel"), $(e).find(".js-owl-slider-text").trigger("refresh.owl.carousel")
                }, 1e3)
            }
        },
        o = "85%",
        r = ["animation-fadeInUp", "animation-simpleFadeIn", "animation-iconDraw", "animation-doubleSlider", "animation-headlineBg", "animation-fullBg", "animation-fadeInLeft", "animation-fadeInRight", "animation-splitAnim", "animation-multilayer", "animation-bgImage", "animation-circleNav", "animation-runWaypoint"],
        s = function() {
            var s = "." + r[n],
                a = r[n];
            document.querySelector(s) && (e = document.querySelectorAll(s), [].forEach.call(e, function(e) {
                e.classList.contains("l-header") && e.classList.contains("bg-img") && !e.classList.contains("bg-loaded") || (t = new Waypoint({
                    element: e,
                    handler: function(t) {
                        "down" === t && (i.runAnimation(e, a), this.destroy())
                    },
                    offset: o
                }))
            }))
        };
    for (n = 0; n < r.length; n++) s()
};
var UTILS = UTILS || {};
UTILS._magnific = function() {
    $("a.js-popup, a.popup, a.js-video").on("click", function() {
        var e = $(this).attr("href"),
            t = e.substring(e.length - 4, e.length),
            n = $(this).attr("title");
        return t = ".jpg" === t || ".gif" === t || ".png" === t || ".jpeg" === t ? "image" : "iframe", $.magnificPopup.open({
            items: {
                src: e
            },
            type: t,
            image: {
                markup: '<div class="mfp-figure"><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div><p class="mfp-close"></p></div><p class="mfp-close"></p></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: n,
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0"
                    }
                }
            },
            mainClass: "mfp-fade",
            titleSrc: n,
            gallery: {
                enabled: !0,
                navigateByImgClick: !0
            }
        }), !1
    })
}, UTILS._ajaxPopup = function() {
    $(".js-ajax-popup").on("click", function(e) {
        var t = this;
        return $.magnificPopup.open({
            type: "ajax",
            items: {
                src: t.getAttribute("data-href")
            }
        }, 0), !1
    })
}, UTILS._openPopupOnClick = function() {
    if (document.querySelector(".js-open-popup")) {
        var e = document.querySelectorAll(".js-open-popup");
        [].forEach.call(e, function(e) {
            e.addEventListener("click", function(e) {
                e.preventDefault(), e.currentTarget.href && window.open(e.currentTarget.href, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, width=500, height=400")
            }, !1)
        })
    }
};
var UTILS = UTILS || {};
UTILS._trackEvent = function() {
    $('a[data-type="trackEvent"]').on("click", function() {
        var e = window.ga || null;
        if (!e) return !0;
        var t = $(this),
            n = {
                hitType: "event",
                eventCategory: t.data("category") ? t.data("category") : "",
                eventAction: t.data("action") ? t.data("action") : "",
                eventLabel: t.data("label") ? t.data("label") : ""
            };
        return t.data("value") && (n.eventValue = t.data("value")), "_blank" === t.attr("target") || t.hasClass("js-video") || (n.hitCallback = function() {
            window.location = t.attr("href")
        }), (n.eventCategory || n.eventAction || n.eventLabel) && e("send", n), !n.hitCallback
    })
};
var UTILS = UTILS || {};
UTILS._form = function(e, t) {
    var n = $(e).serialize();
    return $(e).find(".loading").fadeIn(), $(e).find('button[type="submit"]').text("Sending..."), $.ajax({
        url: t,
        method: "POST",
        data: n,
        dataType: "json"
    }).then(function(t) {
        $(e).find('button[type="submit"]').text("Submit"), $(e).find(".loading").fadeOut(), t.url ? window.location.href = t.url : ($(e).find(".loading").fadeOut(), 0 === $(e).find(".form__response--ok").length ? $(e).prepend('<div class="form__response form__response--ok"><p>' + t.message + "</p></div>") : $(".form__response--ok p").html(t.message)), $(e).find(".form__response--error").remove(), $(e)[0].reset()
    }, function(t) {
        var n = "";
        if (422 == t.status)
            for (var i in t.responseJSON) t.responseJSON.hasOwnProperty(i) && (n += t.responseJSON[i].join("<br>") + "<br>");
        else 404 == t.status ? n = "Page not found - incorrect url." : t.responseJSON.message && (n = t.responseJSON.message);
        n && (0 === $(e).find(".form__response--error").length ? $(e).prepend('<div class="form__response form__response--error"><p>' + n + "</p></div>") : $(".form__response--error p").html(n)), $(e).find(".form__response--ok").remove(), $(e).find('button[type="submit"]').text("Submit"), $(e).find(".loading").fadeOut()
    }), !1
};
var UTILS = UTILS || {};
UTILS.videoFit = function() {
    var e, t = 0,
        n = 0,
        i = 0,
        o = 0,
        r = 2.4;
    $(".js-video-full").length && (e = $(".js-video-full"), e.each(function(e) {
        var s, a, l = $(this)[0];
        s = l.videoWidth, a = l.videoHeight, r = s / a, $(this).css("height", "auto").css("width", "auto"), t = $(this).parent().outerHeight(), n = $(this).parent().outerWidth(), o = r * t, i = (n / t).toFixed(3), i > r ? $(this).css("height", n / r).css("width", n).css("max-width", n) : $(this).css("height", t).css("max-width", o)
    }))
};
var BP_BOILERPLATE = BP_BOILERPLATE || {},
    UTILS = UTILS || {},
    static_folder = "/images";
BP_BOILERPLATE.utils = UTILS || {}, BP_BOILERPLATE.owl = {}, BP_BOILERPLATE.utils.inputLabels = function() {
    function e(e) {
        this.classList[this.value ? "add" : "remove"]("filled")
    }
    if (document.querySelector("input")) {
        var t = document.querySelectorAll("input"),
            n = document.querySelectorAll("textarea");
        [].forEach.call(t, function(t) {
            t.classList[t.value ? "add" : "remove"]("filled"), t.addEventListener("change", e), t.addEventListener("keyup", e)
        }), [].forEach.call(n, function(t) {
            t.classList[t.value ? "add" : "remove"]("filled"), t.addEventListener("change", e), t.addEventListener("keyup", e)
        })
    }
}, BP_BOILERPLATE.navigation = {
    showMegamenu: function() {
        if (document.querySelector(".js-burger")) {
            var e = document.querySelectorAll(".js-burger"),
                t = document.querySelector(".js-megamenu"),
                n = "megamenu--open";
            [].forEach.call(e, function(e) {
                e.addEventListener("click", function(i) {
                    i.preventDefault(), document.body.classList.contains("open") ? (document.body.classList.remove("open"), e.classList.remove("l-burger--open"), t.classList.remove(n)) : (document.body.classList.add("open"), e.classList.add("l-burger--open"), t.classList.add(n))
                })
            })
        }
    },
    closeMegamenu: function() {
        if (document.querySelector(".js-megamenu-close")) {
            var e = document.querySelector(".js-megamenu-close");
            e.addEventListener("click", function(e) {
                e.preventDefault(), BP_BOILERPLATE.navigation.__removeMegamenuOpenClass(), document.body.classList.remove("open")
            })
        }
    },
    __removeMegamenuOpenClass: function() {
        var e = document.querySelector(".js-megamenu"),
            t = "megamenu--open";
        document.body.classList.remove("open"), document.querySelector(".js-burger").classList.remove("l-burger--open"), e.classList.remove(t)
    },
    closeMegamenuByHitEsc: function() {
        document.addEventListener("keyup", function(e) {
            27 === e.keyCode && (BP_BOILERPLATE.navigation.__removeMegamenuOpenClass(), document.querySelector(".js-overlay") && document.querySelector(".js-overlay").classList.remove("overlay--show"))
        })
    },
    position: $(window).scrollTop(),
    navbarPosition: function() {
        var e;
        document.querySelector(".js-navbar-scroll") && (e = window.scrollY || window.pageYOffset || document.documentElement.scrollTop, e > 300 ? (e > BP_BOILERPLATE.navigation.position ? document.querySelector(".js-navbar-scroll").classList.remove("l-navbar--scroll") : document.querySelector(".js-navbar-scroll").classList.add("l-navbar--scroll"), document.querySelector(".js-navbar-scroll").classList.remove("l-navbar--on-top"), document.querySelector(".js-navbar-scroll").classList.add("l-navbar--moved")) : (document.querySelector(".js-navbar-scroll").classList.add("l-navbar--scroll"), document.querySelector(".js-navbar-scroll").classList.add("l-navbar--on-top"), document.querySelector(".js-navbar-scroll").classList.remove("l-navbar--moved")), BP_BOILERPLATE.navigation.position = e)
    },
    init: function() {
        this.showMegamenu(), this.closeMegamenu(), this.closeMegamenuByHitEsc()
    }
}, BP_BOILERPLATE.owl.gallery = function() {
    var e = {
            stagePadding: 50,
            loop: !0,
            dots: !0,
            margin: 10,
            nav: !1,
            center: !0,
            lazyLoad: !0,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 80
                },
                600: {
                    items: 1,
                    stagePadding: 120
                },
                1e3: {
                    items: 1,
                    stagePadding: 220
                },
                1400: {
                    items: 1,
                    stagePadding: 320
                },
                1700: {
                    items: 1,
                    stagePadding: 420
                },
                2500: {
                    items: 1,
                    stagePadding: 600
                }
            }
        },
        t = $(".js-owl-gallery");
    t.length && t.each(function(t) {
        var n = this,
            i = $(n);
        i.owlCarousel(e), $('<a href="" class="owl-prev" type="button"><img src="/images/icons/gallery-left.svg" alt="prev"></a>').insertBefore(i.find(".owl-dots")), $('<a href="" class="owl-next" type="button"><img src="/images/icons/gallery-right.svg" alt="next"></a>').insertAfter(i.find(".owl-dots")), i.find(".owl-prev").click(function() {
            return i.trigger("prev.owl.carousel", [300]), !1
        }), i.find(".owl-next").click(function() {
            return i.trigger("next.owl.carousel", [300]), !1
        })
    })
}, BP_BOILERPLATE.owl.opacityFull = function() {
    var e = {
            items: 1,
            loop: !0,
            dots: !0,
            nav: !1,
            animateOut: "fadeOut",
            animateIn: "emptyClass",
            smartSpeed: 450,
            autoplay: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !1,
            lazyLoad: !0,
            mouseDrag: !0,
            touchDrag: !0
        },
        t = $(".js-owl-opacity");
    t.length && t.each(function(t) {
        var n, i, o, r, s = this,
            a = $(s),
            l = !1;
        n = a.attr("data-dots-default"), i = a.attr("data-dots-with-arrows"), r = !a.attr("data-lazy") || "true" == a.attr("data-lazy"), o = a.parent(), e.lazyLoad = r, "true" !== n ? (e.dotsContainer = "#" + a.parent().attr("id") + " .owl-carousel__dots-wrapper", a.owlCarousel(e), a.trigger("stop.owl.autoplay"), $('<a href="" class="owl-next" type="button"><img src="/images/icons/gallery-right.svg" alt="next"></a>').insertAfter(a.parent().find(".owl-carousel__dots-wrapper")), a.parent().find(".owl-next").click(function() {
            return l || a.trigger("next.owl.carousel", [300]), !1
        }), a.find(".owl-carousel__dots-wrapper .owl-dot").click(function(e) {
            l && e.stopPropagation()
        })) : (e.dotsContainer = !1, a.owlCarousel(e), a.trigger("stop.owl.autoplay")), "true" === i && ($('<a href="" class="owl-prev" type="button"><img src="/images/icons/gallery-left-white.svg" alt="prev"></a>').insertBefore(a.find(".owl-dots")), $('<a href="" class="owl-next" type="button"><img src="/images/icons/gallery-right-white.svg" alt="next"></a>').insertAfter(a.find(".owl-dots")), a.find(".owl-prev").click(function() {
            return l || a.trigger("prev.owl.carousel", [300]), !1
        }), a.find(".owl-next").click(function() {
            return l || a.trigger("next.owl.carousel", [300]), !1
        }), a.find(".owl-dots .owl-dot").click(function(e) {
            l && e.stopPropagation()
        })), o.find(".js-circle-nav") && o.find(".js-circle-nav").click(function(e) {
            return l || (a.trigger("to.owl.carousel", e.target.getAttribute("data-slide")), o.find(".js-circle-nav").removeClass("active"), $(this).addClass("active")), !1
        }), a.on("translate.owl.carousel", function(e) {
            o.find(".js-circle-nav").removeClass("active"), o.find(".js-circle-nav").eq(e.page.index + 1).addClass("active"), l = !0
        }), a.on("translated.owl.carousel", function(e) {
            l = !1
        })
    })
}, BP_BOILERPLATE.owl.owlText = function() {
    var e = {
            items: 1,
            loop: !0,
            dots: !0,
            nav: !1,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            smartSpeed: 450,
            mouseDrag: !0,
            touchDrag: !0,
            autoHeight: !0
        },
        t = $(".js-owl-text");
    t.length && t.each(function(t) {
        var n = this,
            i = $(n),
            o = !1;
        i.owlCarousel(e), $('<a href="" class="owl-next" type="button"><img src="/images/icons/gallery-right.svg" alt="next"></a>').insertAfter(i.find(".owl-dots")), i.find(".owl-next").click(function() {
            return o || i.trigger("next.owl.carousel", [300]), !1
        }), i.find(".owl-dots .owl-dot").click(function(e) {
            o && e.stopPropagation()
        }), i.on("translate.owl.carousel", function(e) {
            o = !0
        }), i.on("translated.owl.carousel", function(e) {
            o = !1
        })
    })
}, BP_BOILERPLATE.owl.slider = function() {
    var e = {
            items: 1,
            loop: !0,
            dots: !0,
            nav: !1,
            smartSpeed: 450,
            mouseDrag: !1,
            touchDrag: !1,
            animateOut: "owlFadeOutLeft",
            animateIn: "owlFadeInLeft"
        },
        t = {
            items: 1,
            loop: !0,
            dots: !1,
            nav: !1,
            smartSpeed: 450,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            mouseDrag: !0,
            touchDrag: !0,
            margin: 10,
            autoplay: !0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1
        },
        n = $(".js-owl-slider");
    n.length && n.each(function(n) {
        var i, o, r = this,
            s = $(r),
            a = !1,
            l = 0,
            c = 0;
        i = s.find(".js-owl-slider-text"), o = s.find(".js-owl-slider-gallery"), i.length > 0 ? (e.dots = !1, t.dots = !0, t.dotsContainer = "#" + s.attr("id") + " .owl-carousel__dots-wrapper") : (t.dots = !0, t.dotsContainer = ""), i.owlCarousel(e), o.owlCarousel(t), o.trigger("stop.owl.autoplay"), i.length > 0 && $('<a href="" class="owl-next" type="button"><img src="/images/icons/gallery-right.svg" alt="next"></a>').insertAfter(s.find(".owl-carousel__dots-wrapper")), s.find(".owl-next").click(function() {
            return a || (i.length ? (c = 1, i.trigger("next.owl.carousel", [1e3]), o.trigger("next.owl.carousel", [1e3])) : o.trigger("next.owl.carousel", [1e3])), !1
        }), s.find(".owl-carousel__dots-wrapper .owl-dot").click(function(e) {
            a && e.stopPropagation()
        }), o.on("change.owl.carousel", function(e) {
            if (e.namespace && "position" === e.property.name) {
                var t = e.relatedTarget.relative(e.property.value, !0);
                i.owlCarousel("to", t, 300, !0)
            }
        }), o.on("translate.owl.carousel", function(e) {
            a = !0, l = 0
        }), i.length ? i.on("translated.owl.carousel", function(e) {
            l++, l > 1 && (a = !1)
        }) : o.on("translated.owl.carousel", function(e) {
            a = !1
        })
    })
}, BP_BOILERPLATE.owl.doubleLayer = function() {
    var e = 1e4,
        t = {
            items: 1,
            loop: !0,
            dots: !1,
            nav: !1,
            smartSpeed: 3e3,
            autoplay: !0,
            autoplayTimeout: e,
            autoplayHoverPause: !1,
            mouseDrag: !1,
            touchDrag: !1
        },
        n = {
            items: 1,
            loop: !0,
            dots: !1,
            nav: !1,
            smartSpeed: 3e3,
            autoplay: !1,
            mouseDrag: !1,
            touchDrag: !1
        },
        i = $(".js-owl-double");
    i.length && i.each(function(i) {
        var o, r, s, a, l = this,
            c = $(l),
            u = 0;
        o = c.find(".js-owl-double-bg"), r = c.find(".js-owl-double-mask"), c.on("initialize.owl.carousel", function(t) {
            0 === u && (setTimeout(function() {
                $(".js-slider-banner").addClass("animation-in")
            }, 1e3), setTimeout(function() {
                $(".js-slider-banner").removeClass("animation-in").addClass("animation-out")
            }, e - 2e3))
        }), o.owlCarousel(t), r.owlCarousel(n), o.on("changed.owl.carousel", function(t) {
            r.trigger("next.owl.carousel", [3e3]), s = setTimeout(function() {
                $(".js-slider-banner").removeClass("animation-out").addClass("animation-in")
            }, 3e3), a = setTimeout(function() {
                $(".js-slider-banner").removeClass("animation-in").addClass("animation-out")
            }, e - 1500)
        }), o.on("resized.owl.carousel", function(e) {
            u++, clearTimeout(s), clearTimeout(a), r.trigger("destroy.owl.carousel"), o.trigger("destroy.owl.carousel"), o.owlCarousel(t), r.owlCarousel(n)
        })
    })
}, BP_BOILERPLATE.contact = {
    loadScript: function() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDuBpemoK57hRMUL6nYmO7gqercpotTOvg&callback=BP_BOILERPLATE.contact.map", document.body.appendChild(e)
    },
    map: function() {
        function e() {
            var e, t = function() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (e) {
                    return !1
                }
            };
            e = !t();
            var n = document.querySelectorAll(".js-map");
            [].forEach.call(n, function(t) {
                var n = t.getAttribute("data-latitude"),
                    i = t.getAttribute("data-longitude"),
                    o = {
                        zoom: 15,
                        center: new google.maps.LatLng(n, i),
                        scrollwheel: !1,
                        draggable: e,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.RIGHT_TOP
                        },
                        styles: [{
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#444444"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                color: "#f2f2f2"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                hue: "#ff0000"
                            }]
                        }, {
                            featureType: "landscape.man_made",
                            elementType: "geometry",
                            stylers: [{
                                lightness: "100"
                            }]
                        }, {
                            featureType: "landscape.man_made",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "landscape.natural",
                            elementType: "geometry.fill",
                            stylers: [{
                                lightness: "100"
                            }]
                        }, {
                            featureType: "landscape.natural",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "landscape.natural.landcover",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }]
                        }, {
                            featureType: "landscape.natural.terrain",
                            elementType: "geometry",
                            stylers: [{
                                lightness: "100"
                            }]
                        }, {
                            featureType: "landscape.natural.terrain",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "off"
                            }, {
                                lightness: "23"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "all",
                            stylers: [{
                                saturation: -100
                            }, {
                                lightness: 45
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "all",
                            stylers: [{
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffd900"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                color: "#ffd900"
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#cccccc"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }]
                    },
                    r = t,
                    s = new google.maps.Map(r, o),
                    a = static_folder + "/map-marker.png";
                new google.maps.Marker({
                    position: s.getCenter(),
                    icon: a,
                    map: s,
                    animation: google.maps.Animation.DROP,
                    url: "http://maps.google.com/?q=" + n + "," + i
                });
                google.maps.event.addDomListener(window, "resize", function() {
                    var e = s.getCenter();
                    google.maps.event.trigger(s, "resize"), s.setCenter(e)
                })
            })
        }
        e()
    }
}, BP_BOILERPLATE.utils.infiniteCallback = function() {
    BP_BOILERPLATE.utils._animationedSections()
}, window.addEventListener("resize", function() {
    setTimeout(function() {
        BP_BOILERPLATE.utils.videoFit(), Waypoint.refreshAll()
    }, 80)
}, !1), window.addEventListener("scroll", function() {
    BP_BOILERPLATE.navigation.navbarPosition()
}, !1);
var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise.all([this.fadeOut(), this.newContainerLoading]).then(this.fadeIn.bind(this))
    },
    fadeOut: function() {
        var e = this,
            t = new jQuery.Deferred,
            n = !1,
            i = 0;
        return document.querySelector(".l-navbar + .js-burger").classList.contains("l-burger--open") && (document.querySelector(".l-navbar + .js-burger").click(), n = !0), BP_BOILERPLATE.utils._screenSize().x > 577 && n && (i = 500, document.body.classList.remove("open")), setTimeout(function() {
            t.resolve()
        }, i), t.promise().then(function() {
            return $(e.oldContainer).animate({
                opacity: 0
            }, 400).promise()
        })
    },
    fadeIn: function() {
        function e() {
            $(".owl-loaded").length && ($(".owl-loaded").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded"), $(".owl-loaded").find(".owl-stage-outer").children().unwrap())
        }
        $(window).scrollTop(0), e();
        var t = this,
            n = $(this.newContainer);
        $(this.oldContainer).hide(), n.css({
            visibility: "visible",
            opacity: 0
        }), n.animate({
            opacity: 1
        }, 200, function() {
            t.done()
        })
    }
});
Barba.Pjax.getTransition = function() {
    return FadeTransition
}, Barba.Dispatcher.on("transitionCompleted", function(e, t) {
    runWebsiteScripts()
}), Barba.Dispatcher.on("newPageReady", function(e, t, n) {
    history.scrollRestoration = "manual", trackPageGTM()
}), $(document).ready(function() {
    Barba.Pjax.start(), Barba.Pjax.getTransition(), Barba.Prefetch.init()
});
//# sourceMappingURL=main.min.js.map