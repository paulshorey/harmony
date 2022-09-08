/* eslint-disable */
!(function () {
  let o;
  function a() {}
  function t() {
    t.init.call(this);
  }
  function s(e) {
    return void 0 === e._maxListeners ? t.defaultMaxListeners : e._maxListeners;
  }
  function n(e, t, n, r) {
    let i;
    let o;
    if ('function' !== typeof n) {
      throw new TypeError('"listener" argument must be a function');
    }
    return (
      (i = e._events)
        ? (i.newListener &&
            (e.emit('newListener', t, n.listener || n), (i = e._events)),
          (o = i[t]))
        : ((i = e._events = new a()), (e._eventsCount = 0)),
      o
        ? ('function' === typeof o
            ? (o = i[t] = r ? [n, o] : [o, n])
            : r
            ? o.unshift(n)
            : o.push(n),
          o.warned ||
            ((r = s(e)) &&
              0 < r &&
              o.length > r &&
              ((o.warned = !0),
              ((r = new Error(
                'Possible EventEmitter memory leak detected. ' +
                  o.length +
                  ' ' +
                  t +
                  ' listeners added. Use emitter.setMaxListeners() to increase limit'
              )).name = 'MaxListenersExceededWarning'),
              (r.emitter = e),
              (r.type = t),
              (r.count = o.length),
              (r = r),
              'function' === typeof console.warn
                ? console.warn(r)
                : console.log(r))))
        : ((o = i[t] = n), ++e._eventsCount),
      e
    );
  }
  function r(e, t, n) {
    let r = !1;
    function i() {
      e.removeListener(t, i), r || ((r = !0), n.apply(e, arguments));
    }
    return (i.listener = n), i;
  }
  function i(e) {
    const t = this._events;
    if (t) {
      e = t[e];
      if ('function' === typeof e) {
        return 1;
      }
      if (e) {
        return e.length;
      }
    }
    return 0;
  }
  function d(e, t) {
    for (var n = new Array(t); t--; ) {
      n[t] = e[t];
    }
    return n;
  }
  (a.prototype = Object.create(null)),
    ((t.EventEmitter = t).usingDomains = !1),
    (t.prototype.domain = void 0),
    (t.prototype._events = void 0),
    (t.prototype._maxListeners = void 0),
    (t.defaultMaxListeners = 10),
    (t.init = function () {
      (this.domain = null),
        t.usingDomains && (void 0).active,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new a()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (t.prototype.setMaxListeners = function (e) {
      if ('number' !== typeof e || e < 0 || isNaN(e)) {
        throw new TypeError('"n" argument must be a positive number');
      }
      return (this._maxListeners = e), this;
    }),
    (t.prototype.getMaxListeners = function () {
      return s(this);
    }),
    (t.prototype.emit = function (e) {
      let t;
      let n;
      let r;
      let i = 'error' === e;
      const o = this._events;
      if (o) {
        i = i && null == o.error;
      } else if (!i) {
        return !1;
      }
      if (((s = this.domain), i)) {
        if (((i = arguments[1]), s)) {
          return (
            ((i =
              i ||
              new Error('Uncaught, unspecified "error" event')).domainEmitter =
              this),
            (i.domain = s),
            (i.domainThrown = !1),
            s.emit('error', i),
            !1
          );
        }
        if (i instanceof Error) {
          throw i;
        }
        var s = new Error('Uncaught, unspecified "error" event. (' + i + ')');
        throw ((s.context = i), s);
      }
      if (!(t = o[e])) {
        return !1;
      }
      let a;
      const l = 'function' === typeof t;
      switch ((a = arguments.length)) {
        case 1:
          !(function (e, t, n) {
            if (t) {
              e.call(n);
            } else {
              for (let r = e.length, i = d(e, r), o = 0; o < r; ++o) {
                i[o].call(n);
              }
            }
          })(t, l, this);
          break;
        case 2:
          !(function (e, t, n, r) {
            if (t) {
              e.call(n, r);
            } else {
              for (let i = e.length, o = d(e, i), s = 0; s < i; ++s) {
                o[s].call(n, r);
              }
            }
          })(t, l, this, arguments[1]);
          break;
        case 3:
          !(function (e, t, n, r, i) {
            if (t) {
              e.call(n, r, i);
            } else {
              for (let o = e.length, s = d(e, o), a = 0; a < o; ++a) {
                s[a].call(n, r, i);
              }
            }
          })(t, l, this, arguments[1], arguments[2]);
          break;
        case 4:
          !(function (e, t, n, r, i, o) {
            if (t) {
              e.call(n, r, i, o);
            } else {
              for (let s = e.length, a = d(e, s), l = 0; l < s; ++l) {
                a[l].call(n, r, i, o);
              }
            }
          })(t, l, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (n = new Array(a - 1), r = 1; r < a; r++) {
            n[r - 1] = arguments[r];
          }
          !(function (e, t, n, r) {
            if (t) {
              e.apply(n, r);
            } else {
              for (let i = e.length, o = d(e, i), s = 0; s < i; ++s) {
                o[s].apply(n, r);
              }
            }
          })(t, l, this, n);
      }
      return !0;
    }),
    (t.prototype.addListener = function (e, t) {
      return n(this, e, t, !1);
    }),
    (t.prototype.on = t.prototype.addListener),
    (t.prototype.prependListener = function (e, t) {
      return n(this, e, t, !0);
    }),
    (t.prototype.once = function (e, t) {
      if ('function' !== typeof t) {
        throw new TypeError('"listener" argument must be a function');
      }
      return this.on(e, r(this, e, t)), this;
    }),
    (t.prototype.prependOnceListener = function (e, t) {
      if ('function' !== typeof t) {
        throw new TypeError('"listener" argument must be a function');
      }
      return this.prependListener(e, r(this, e, t)), this;
    }),
    (t.prototype.removeListener = function (e, t) {
      let n;
      let r;
      let i;
      let o;
      let s;
      if ('function' !== typeof t) {
        throw new TypeError('"listener" argument must be a function');
      }
      if (!(r = this._events)) {
        return this;
      }
      if (!(n = r[e])) {
        return this;
      }
      if (n === t || (n.listener && n.listener === t)) {
        0 == --this._eventsCount
          ? (this._events = new a())
          : (delete r[e],
            r.removeListener &&
              this.emit('removeListener', e, n.listener || t));
      } else if ('function' !== typeof n) {
        for (i = -1, o = n.length; 0 < o--; ) {
          if (n[o] === t || (n[o].listener && n[o].listener === t)) {
            (s = n[o].listener), (i = o);
            break;
          }
        }
        if (i < 0) {
          return this;
        }
        if (1 === n.length) {
          if (((n[0] = void 0), 0 == --this._eventsCount)) {
            return (this._events = new a()), this;
          }
          delete r[e];
        } else {
          !(function (e, t) {
            for (let n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) {
              e[n] = e[r];
            }
            e.pop();
          })(n, i);
        }
        r.removeListener && this.emit('removeListener', e, s || t);
      }
      return this;
    }),
    (t.prototype.removeAllListeners = function (e) {
      let t;
      const n = this._events;
      if (!n) {
        return this;
      }
      if (!n.removeListener) {
        return (
          0 === arguments.length
            ? ((this._events = new a()), (this._eventsCount = 0))
            : n[e] &&
              (0 == --this._eventsCount
                ? (this._events = new a())
                : delete n[e]),
          this
        );
      }
      if (0 === arguments.length) {
        for (var r, i = Object.keys(n), o = 0; o < i.length; ++o) {
          'removeListener' !== (r = i[o]) && this.removeAllListeners(r);
        }
        return (
          this.removeAllListeners('removeListener'),
          (this._events = new a()),
          (this._eventsCount = 0),
          this
        );
      }
      if ('function' === typeof (t = n[e])) {
        this.removeListener(e, t);
      } else if (t) {
        for (; this.removeListener(e, t[t.length - 1]), t[0]; ) {}
      }
      return this;
    }),
    (t.prototype.listeners = function (e) {
      const t = this._events;
      var n =
        t && (n = t[e])
          ? 'function' === typeof n
            ? [n.listener || n]
            : (function (e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
                  t[n] = e[n].listener || e[n];
                }
                return t;
              })(n)
          : [];
      return n;
    }),
    (t.listenerCount = function (e, t) {
      return 'function' === typeof e.listenerCount
        ? e.listenerCount(t)
        : i.call(e, t);
    }),
    (t.prototype.listenerCount = i),
    (t.prototype.eventNames = function () {
      return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
    });
  const l = new Uint8Array(16);
  const u =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  for (var c = [], e = 0; e < 256; ++e) {
    c.push((e + 256).toString(16).substr(1));
  }
  function f(e, t) {
    (t = 1 < arguments.length && void 0 !== t ? t : 0),
      (e = (
        c[e[t + 0]] +
        c[e[t + 1]] +
        c[e[t + 2]] +
        c[e[t + 3]] +
        '-' +
        c[e[t + 4]] +
        c[e[t + 5]] +
        '-' +
        c[e[t + 6]] +
        c[e[t + 7]] +
        '-' +
        c[e[t + 8]] +
        c[e[t + 9]] +
        '-' +
        c[e[t + 10]] +
        c[e[t + 11]] +
        c[e[t + 12]] +
        c[e[t + 13]] +
        c[e[t + 14]] +
        c[e[t + 15]]
      ).toLowerCase());
    if ('string' !== typeof (t = e) || !u.test(t)) {
      throw TypeError('Stringified UUID is invalid');
    }
    return e;
  }
  function p(e, t, n) {
    const r =
      (e = e || {}).random ||
      (
        e.rng ||
        function () {
          if (
            !o &&
            !(o =
              ('undefined' !== typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ('undefined' !== typeof msCrypto &&
                'function' === typeof msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto)))
          ) {
            throw new Error(
              'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
            );
          }
          return o(l);
        }
      )();
    if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
      n = n || 0;
      for (let i = 0; i < 16; ++i) {
        t[n + i] = r[i];
      }
      return t;
    }
    return f(r);
  }
  const h = self.console;
  const m = Object.freeze({ ERROR: 1, INFO: 3, LOG: 4, NONE: 0, WARN: 2 });
  const y = ['error', 'warn', 'info', 'log'];
  const v =
    void 0 !== h &&
    void 0 !== h.log &&
    void 0 !== h.error &&
    void 0 !== h.debug &&
    void 0 !== h.warn &&
    'function' === typeof Function.prototype.apply;
  let g;
  let b;
  const w = (e, t, n, r) =>
    h[t] ? (n ? h[t](n) : h[t]()) : e.log(`----------- ${n || r} ----------- `);
  const _ = (e) => {
    let t = e.level;
    const n = { getLevel: () => t || g, setLevel: (e) => ((t = e), n) };
    return (
      y.forEach((t) => {
        n[t] = (...e) =>
          ((e, t, n) => {
            if (v) {
              const r = y.indexOf(t);
              const i = e.getLevel();
              return ~r && r + 1 <= i && h[t].apply(h, n), e;
            }
          })(n, t, e);
      }),
      (n.groupCollapsed = (e) => w(n, 'groupCollapsed', e, 'GROUP START')),
      (n.group = (e) => w(n, 'group', e, 'GROUP START')),
      (n.groupEnd = () => w(n, 'groupEnd', null, 'GROUP END')),
      (n.debug = n.log),
      n
    );
  };
  const L = (e = {}) => {
    e.level = e.level || m.NONE;
    const t = e.newInstance || !b ? _(e) : b;
    return b || e.newInstance || (b = t), t;
  };
  const E = {
    delete: 'ML_WIDGET_DELETE_DATA',
    error: 'ML_WIDGET_ERROR',
    hide: 'ML_WIDGET_HIDE',
    identity: 'ML_WIDGET_EXPOSE_IDENTITY',
    init: 'ML_WIDGET_INIT',
    insert: 'ML_WIDGET_INSERT_DATA',
    show: 'ML_WIDGET_SHOW',
    upload: 'ML_WIDGET_ASSET_UPLOAD',
  };
  const x = [
    'cloud_name',
    'api_key',
    'username',
    'timestamp',
    'signature',
    'integration',
    'use_saml',
  ];
  const A = ['access_token', 'redirect_url', 'cloud_name'];
  const D = [
    'integration',
    'inline_container',
    'z_index',
    'multiple',
    'max_files',
    'default_transformations',
    'insert_caption',
    'remove_header',
    'folder',
    'search',
    'collection',
    'asset',
    'transformation',
    'sandboxNotAllowedAttributes',
  ];
  const O = [
    'allow-forms',
    'allow-modals',
    'allow-orientation-lock',
    'allow-pointer-lock',
    'allow-popups',
    'allow-popups-to-escape-sandbox',
    'allow-presentation',
    'allow-same-origin',
    'allow-scripts',
    'allow-top-navigation',
    'allow-top-navigation-by-user-activation',
  ];
  const I = L();
  const k = (e, t) => {
    let n = null;
    try {
      n = 'string' === typeof e ? JSON.parse(e) : e;
    } catch (e) {
      I.error(`[postmessage]: failed to parse data from ${t}`, e);
    }
    return n;
  };
  L();
  const C = (o) =>
    new Promise((e, t) => {
      let n = !1;
      const r = ((r, n) => {
        let i;
        const o = Array.isArray(n.allowedOrigin)
          ? n.allowedOrigin
          : [n.allowedOrigin];
        const { types: s } = n;
        const a = (e) => {
          if (!e || !e.length) {
            throw 'PostMessage - target not set!';
          }
        };
        const e = (e) => {
          let t;
          ~o.indexOf(e.origin) &&
            ((i = e.origin),
            (t = k(e.data, e.origin)) &&
              ((n.validator && !n.validator(t.data)) ||
                (t.type &&
                  s[t.type] &&
                  (I.log(
                    `[postmessage]: found matching handler for '${t.type}' event from: ${e.origin}`,
                    t.data
                  ),
                  s[t.type](t.data, t.type, e, n)))));
        };
        return (
          a(o),
          self.addEventListener('message', e, !1),
          {
            close: () => self.removeEventListener('message', e),
            send: (e, t, n = {}) => {
              n = n.target || i;
              a(n);
              try {
                I.log(`[postmessage]: posting message to: ${n}`),
                  (r =
                    r instanceof HTMLIFrameElement
                      ? r.contentWindow
                      : r).postMessage(JSON.stringify({ data: t, type: e }), n);
              } catch (e) {
                I.error(
                  `[postmessage]: failed to post message to target: ${n}`,
                  e
                );
              }
            },
          }
        );
      })(o.ifr, {
        allowedOrigin: o.mlUrl.origin,
        types: {
          [E.insert]: o.callbacks.insertHandler,
          [E.delete]: o.callbacks.deleteHandler,
          [E.identity]: o.callbacks.identityHandler,
          [E.hide]: () => {
            o.hideCms();
          },
          [E.error]: o.callbacks.errorHandler,
          [E.upload]: o.callbacks.uploadHandler,
        },
        validator: (e) => e && e.mlId && e.mlId === o.mlId,
      });
      const i = (e, t) => {
        r.send(e, t, { target: o.mlUrl.origin });
      };
      o.ifr.addEventListener('load', () => {
        n || ((n = !0), o.iframeLoaded(), e({ sendMessage: i }));
      }),
        self.addEventListener(
          'message',
          (e) => {
            (e = k(e)), (e = k(e.data));
            e &&
              'object' === typeof e &&
              'consoleLoaded' === e.type &&
              i(E.init, o);
          },
          !1
        ),
        o.ifr.addEventListener('error', function () {});
    });
  const T = () => {};
  class M extends t {
    constructor({ options: o, callbacks: s = {}, element: a, mlId: l }) {
      super(), this.initBackwardCompatibilityCallbacks(s);
      let d;
      let u;
      let c = null;
      let t = !1;
      let n = !1;
      const f = !!o.inline_container;
      let e = null;
      const p = !!o.access_token;
      const r = (e) => {
        27 === e.keyCode && this.hide();
      };
      const i = (() => {
        let e;
        return (
          (e =
            !0 === o.dev
              ? 'dev.cloudinary.com'
              : !0 === o.nightly
              ? 'nightly.cloudinary.com'
              : !0 === o.staging
              ? 'staging.cloudinary.com'
              : !0 === o.staging2
              ? 'staging2.cloudinary.com'
              : 'cloudinary.com'),
          'https://' + e
        );
      })();
      const h = (e, o, t, n = {}) => {
        const r = (() => {
          const i = [];
          return (
            Object.keys(n).forEach((e) => i.push(`${e}=${n[e]}`)),
            t
              .filter((e) => Boolean(o[e]))
              .forEach((t) => {
                const n = o[t];
                if ('[object Object]' === Object.prototype.toString.call(n)) {
                  const e = [];
                  for (const r of Object.keys(n)) {
                    e.push(`${r}:${encodeURIComponent(n[r])}`);
                  }
                  i.push(`${t}=${e.join('|')}`);
                } else {
                  i.push(`${t}=${encodeURIComponent(n)}`);
                }
              }),
            i
          );
        })();
        e = i + e + '?' + r.join('&');
        return { href: e, origin: i };
      };
      const m = (e) => {
        window.requestAnimationFrame(() => {
          u.style.padding = e.matches ? '25px' : '25px 0';
        });
      };
      const y = (e) => {
        const t = f ? d : u;
        const n = ((e) => {
          let t = document.body;
          if (
            (f &&
              ((t = e.inline_container),
              'string' === typeof t && (t = document.querySelector(t))),
            !t)
          ) {
            throw 'Element Not Found (' + e.inline_container + ')';
          }
          return t;
        })(e);
        n.appendChild(t), d.focus();
      };
      const v = () => {
        const e = f ? d : u;
        n && t
          ? ((e.style.visibility = 'visible'),
            e.focus(),
            f || document.addEventListener('keyup', r))
          : ((e.style.visibility = 'hidden'),
            document.removeEventListener('keyup', r));
      };
      const g = () => {
        (n = !0), v();
      };
      const b = () => {
        !f &&
          document.body &&
          (null === e && (e = document.body.style.overflow),
          (document.body.style.overflow = 'hidden')),
          (t = !0),
          v(),
          this.emitShowData();
      };
      const w = () => {
        !f &&
          document.body &&
          null !== e &&
          ((document.body.style.overflow = e), (e = null)),
          (t = !1),
          v(),
          this.emitHideData();
      };
      f && s.insertHandler;
      (() => {
        const e = { ...o };
        let t = e.sandboxAttributes;
        var n = self.location;
        'null' === n.origin && (n = new URL(self.origin));
        let r;
        var n = h('/console/media_library/cms', e, x, {
          ml_id: l,
          new_cms: !0,
          pmHost: `${n.protocol}//${n.host}`,
          ...((i = t),
          Array.isArray(i) && -1 === i.indexOf('allow-popups')
            ? { sandbox_no_popup: !0 }
            : {}),
          ...(o.cld_console_version
            ? { cld_console_version: o.cld_console_version }
            : {}),
        });
        var i = (
          p
            ? h(
                '/console/api/v1/auth/login_with_oauth_token',
                { ...o, redirect_url: n.href },
                A
              )
            : n
        ).href;
        (e.mlUrl = n),
          (e.callbacks = s),
          t &&
            (e.sandboxNotAllowedAttributes = ((t) => {
              let e = [];
              return (
                Array.isArray(t) && (e = O.filter((e) => -1 === t.indexOf(e))),
                e
              );
            })(t)),
          a &&
            ((e) => {
              const t = document.createElement('button');
              (e.style.display = 'none'),
                t.setAttribute('class', o.button_class || 'cloudinary-button'),
                (t.innerHTML = o.button_caption || 'Open Media Library'),
                e.parentNode.insertBefore(t, e.previousSibling),
                t.addEventListener(
                  'click',
                  (e) => (
                    b(),
                    e && e.preventDefault && e.preventDefault(),
                    e && e.stopPropagation && e.stopPropagation(),
                    !1
                  ),
                  !1
                );
            })('string' === typeof (t = a) ? document.querySelector(t) : t),
          ((e) => {
            if (
              ((d = document.createElement('iframe')),
              d.setAttribute('src', e),
              d.setAttribute('frameborder', 'no'),
              d.setAttribute('allow', 'camera'),
              f
                ? (d.setAttribute('width', '100%'),
                  d.setAttribute('height', '100%'),
                  (d.style.border = 'none'))
                : (d.setAttribute('width', '100%'),
                  d.setAttribute('height', '100%'),
                  (d.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.8)')),
              !f)
            ) {
              if (
                ((u = document.createElement('div')),
                (u.style.position = 'fixed'),
                (u.style.top = '0'),
                (u.style.left = '0'),
                (u.style.height = '100%'),
                (u.style.width = '100%'),
                (u.style.boxSizing = 'border-box'),
                (u.style.backgroundColor = 'rgba(0,0,0,0.5)'),
                (u.style.zIndex = o.z_index || 99999),
                matchMedia)
              ) {
                const t = window.matchMedia('(min-width: 700px)');
                t.addListener(m), m(t);
              }
              (u.style.visibility = 'hidden'), u.appendChild(d);
            }
          })(i),
          (c = C({
            callbacks: {
              deleteHandler: this.emitDeleteData.bind(this),
              errorHandler: this.emitErrorData.bind(this),
              identityHandler: this.emitIdentityData.bind(this),
              insertHandler: (e) => {
                this.emitInsertData(e), f || w();
              },
              uploadHandler: this.emitUploadData.bind(this),
            },
            config:
              ((r = e),
              D.reduce(
                (e, t) => (void 0 !== r[t] ? { ...e, [t]: r[t] } : e),
                {}
              )),
            hideCms: w,
            ifr: d,
            iframeLoaded: g,
            mlId: l,
            mlUrl: n,
          })),
          y(e);
      })();
      (this.show = (t = {}) => (
        c.then((e) => {
          e.sendMessage(E.show, {
            config: t,
            mlId: l,
            options: { ...t, config: t },
          }),
            b();
        }),
        this
      )),
        (this.hide = () => (
          c.then((e) => {
            e.sendMessage(E.hide, { mlId: l }), w();
          }),
          this
        ));
    }
    emitShowData() {
      return this.emit('show');
    }
    emitHideData() {
      return this.emit('hide');
    }
    emitInsertData(e) {
      return this.emit('insert', e);
    }
    emitIdentityData(e) {
      return this.emit('identity', e);
    }
    emitErrorData(e) {
      return this.emit('error', e);
    }
    emitUploadData(e) {
      return this.emit('upload', e);
    }
    emitDeleteData(e) {
      return this.emit('delete', e);
    }
    initBackwardCompatibilityCallbacks(e) {
      var {
        showHandler: t = T,
        hideHandler: n = T,
        insertHandler: r = T,
        identityHandler: i = T,
        errorHandler: e = T,
      } = e;
      this.on('show', t),
        this.on('hide', n),
        this.on('insert', r),
        this.on('error', e),
        this.on('identity', i);
    }
  }
  ((e) => {
    let t;
    -1 < e.location.search.indexOf('debug=true') && ((t = m.LOG), (g = t));
    const r = (e, t, n) => {
      const r = p();
      return new M({ callbacks: t, element: n, mlId: r, options: e });
    };
    (e.cloudinary = e.cloudinary || {}),
      (e.cloudinary.openMediaLibrary = (e, t, n) => r(e, t, n).show(e)),
      (e.cloudinary.createMediaLibrary = (e, t, n) => r(e, t, n));
  })(self);
})();
