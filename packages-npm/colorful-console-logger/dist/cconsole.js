// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1td67":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1f6aca002593959c";
module.bundle.HMR_BUNDLE_ID = "a8c2605cfa738395";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"413pJ":[function(require,module,exports) {
/*
 * Returns - initialized, ready to use
 */ const cconsoleInit = require("./index.js");
const cconsole = cconsoleInit();
if (typeof window === "object") window.cconsole = cconsole;
module.exports = cconsole;

},{"./index.js":"enwzQ"}],"enwzQ":[function(require,module,exports) {
const CConsoleLog = require("./function/CConsoleLog");
/**
 * Log to console, and optionally to your custom cloud functions
 *    In console, will color code each message:
 *        info: green
 *        warn: orange
 *        error: red
 *    Other methods (log, debug, trace, table, are not colored,
 *    because the coloring breaks Chrome developer tools console message)
 *
 * @param options {object} - options and settings
 *    See github project for more documentation and examples.
 * @param options.logToCloud {object} - an object of {key:value{function},} pairs
 *    Ex: {log:function(){}, info:function(){}, etc}
 *    Tested, and works well with LogDNA. `options.logToCloud = logdna.createLogger()`
 *    See github project for more documentation and examples.
 */ const cconsoleInit = function(options = {}) {
    // so different actions (log/info/debug/etc) can communicate with eachother:
    let sharedContext = {};
    // log
    let cconsole = {
        updateOptions: function(newOptions = {}) {
            for(let key in newOptions)options[key] = newOptions[key];
        },
        disable: function() {
            options.disabled = true;
        },
        enable: function() {
            options.disabled = false;
        },
        // custom (colorful) loggers
        log: CConsoleLog.bind({
            action: "log",
            options,
            sharedContext
        }),
        info: CConsoleLog.bind({
            action: "info",
            options,
            sharedContext
        }),
        debug: CConsoleLog.bind({
            action: "debug",
            options,
            sharedContext
        }),
        warn: CConsoleLog.bind({
            action: "warn",
            options,
            sharedContext
        }),
        error_message: CConsoleLog.bind({
            action: "error_message",
            options,
            sharedContext
        }),
        error: CConsoleLog.bind({
            action: "error",
            options,
            sharedContext
        }),
        trace: CConsoleLog.bind({
            action: "trace",
            options,
            sharedContext
        }),
        success: CConsoleLog.bind({
            action: "success",
            options,
            sharedContext
        }),
        subtle: CConsoleLog.bind({
            action: "subtle",
            options,
            sharedContext
        }),
        // pass-through system debugging loggers
        clear: console.clear,
        time: console.time,
        table: console.table,
        timeEnd: console.timeEnd,
        timeLog: console.timeLog,
        assert: console.assert,
        count: console.count,
        countReset: console.countReset,
        dir: console.dir,
        dirxml: console.dirxml,
        group: console.group,
        groupCollapsed: console.groupCollapsed,
        groupEnd: console.groupEnd
    };
    // extra pass-through (default) loggers (non-standard)
    if (console.profile) cconsole.profile = console.profile;
    if (console.profileEnd) cconsole.profileEnd = console.profileEnd;
    if (console.timeStamp) cconsole.timeStamp = console.timeStamp;
    // return console
    return cconsole;
};
/*
 * Export cconsole
 */ module.exports = cconsoleInit;

},{"./function/CConsoleLog":"904xX"}],"904xX":[function(require,module,exports) {
const destroyCircular = require("./destroyCircular");
const serializeError = require("./serializeError");
// use "browser" colors if in browser
let NODEJSCOLORS = typeof window !== "object";
// also use "browser" colors if in NodeJS with "--inspect" or "--inspect-brk" flag
// if (NODEJSCOLORS && process.execArgv.join().includes("--inspect")) {
//   NODEJSCOLORS = false
// }
/*
 * Log to console
 */ module.exports = function() {
    let args = [
        ...arguments
    ];
    // optionally, pass log-To-Cloud versions of each log action (log,info,error,etc.)
    if (!this.options) this.options = {};
    let { disabled , logToCloud ={} , useTrace =false , useColor =true , separateTypes =false  } = this.options;
    if (disabled) return;
    /*
   * option:
   * trace file:line, where log originated
   */ let trace = "";
    if (useTrace) {
        let stack = [];
        let err = new Error();
        if (err.stack) {
            stack = err.stack.split("\n");
            if (stack[2]) {
                // determine file:line which called this console log
                let str = stack[2];
                let i_end = str.lastIndexOf(":");
                let i_start_before = str.lastIndexOf("/", i_end - 20) + 1;
                trace = `(${str.substring(i_start_before, i_end)})`;
            }
        }
    }
    /*
   * optimize message view
   */ // let hasError = false
    let a = 0;
    while(a < args.length){
        // if first argument is string, give it a colon ": "
        if (a === 0 && typeof args[a] === "string") {
            if (args.length > a + 1) args[a] += ": ";
            else args[a] += " ";
        }
        // fix object from being printed as "[object Object]"
        if (typeof args[a] === "object") {
            if (args[a] instanceof Error) // error object
            // hasError = true
            try {
                // going to assume this is an Error
                args[a] = serializeError(args[a]);
                if (typeof args[a] === "object") args[a] = serializeError(args[a].stack);
            } catch (e) {
            // console.error(e)
            }
            else // regular object
            // serialize so it does not display changes made after log has printed
            args[a] = JSON.parse(JSON.stringify(destroyCircular(args[a], [])));
        }
        a++;
    }
    /*
   * error - prepare message for output as string
   */ let error_message = "";
    if (this.action === "error_message") {
        args[0] = error_message = args[0] && typeof args[0] === "string" ? args[0].split("\n").slice(0, 2).map((str)=>str.replace(/\/.+\//g, "")).toString() : "error";
        this.action = "error";
    }
    /*
   * color1 messages
   *
   * on NODE JS
   * https://en.wikipedia.org/wiki/ANSI_escape_code#Colors <- use "FG Code" for text, "BG Code" for background
   *
   * \x1b[41m     \x1b[33m       %s        \x1b[0m
   * red bg       yellow text    string    escape for next line
   *
   * \x1b[47m           \x1b[30m       %s        \x1b[0m
   * light grey bg      black text     string    escape for next line
   */ let action = this.action;
    let color1 = "";
    let color2 = "";
    if (useColor && typeof args[0] === "string") {
        /*
     * use by NODEJS in terminal
     */ if (NODEJSCOLORS) switch(this.action){
            case "error":
                color1 = "\x1b[41m\x1b[33m%s\x1b[0m";
                break;
            case "warn":
                color1 = "\x1b[43m\x1b[30m%s\x1b[0m";
                break;
            case "info":
                color1 = "\x1b[46m\x1b[30m%s\x1b[0m";
                break;
            case "debug":
                color1 = "\x1b[45m\x1b[30m%s\x1b[0m";
                break;
            case "trace":
                color1 = "\x1b[106m\x1b[30m%s\x1b[0m";
                break;
            case "success":
                color1 = "\x1b[42m\x1b[30m%s\x1b[0m";
                this.action = "log";
                break;
            case "subtle":
                color1 = "\x1b[40m\x1b[90m%s\x1b[0m";
                this.action = "log";
                break;
        }
        else /*
       * for use in BROWSER
       */ switch(action){
            case "error":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:red; color:yellow");
                break;
            case "warn":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:yellow; color:black");
                break;
            case "log":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:cyan; color:black");
                break;
            case "info":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:teal; color:black");
                break;
            case "debug":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:magenta; color:black");
                break;
            case "trace":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:cyan; color:black");
                break;
            case "success":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "background:lawngreen; color:black");
                break;
            case "subtle":
                args[0] = "%c" + args[0];
                args.splice(1, 0, "color:grey");
                break;
        }
    }
    /*
   * custom actions
   */ switch(action){
        case "success":
            action = "log";
            break;
        case "subtle":
            action = "log";
            break;
    }
    /*
   * Add space between different types (groups) of messages
   *    TODO: maybe upgrade this to use console.group in browser
   */ if (separateTypes) {
        if (action + this.action !== this.sharedContext.last_action) console.log("");
    }
    /*
   * Add trace (file-name:line-number)
   */ // log color
    if (color1) {
        if (trace) // color1, trace
        args = [
            color1,
            ...args,
            trace,
            color2
        ];
        else // color1, no trace
        args = [
            color1,
            ...args,
            color2
        ];
    } else if (trace) // no color1, trace
    args = [
        ...args,
        trace
    ];
    /*
   * Log message to console
   * use specified action (log, info, debug, warn, etc)
   */ console[action](...args);
    /*
   * Log original content to cloud
   */ if (logToCloud[action]) logToCloud[action](...arguments, trace);
    /*
   * Add linebreak when different actions back to back
   * but no linebreak when same action
   */ this.sharedContext.last_action = action + this.action;
    /*
   * return
   */ if (error_message) return error_message;
};

},{"./destroyCircular":"crsh9","./serializeError":"5RGeL"}],"crsh9":[function(require,module,exports) {
const destroyCircular = (from, seen)=>{
    // null seen as object
    if (from === null || from === undefined) return from;
    // setup output variable
    const to = Array.isArray(from) ? [] : {};
    // reading
    seen.push(from);
    // iterate input
    for (const [key, value] of Object.entries(from)){
        if (typeof value === "function") continue;
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (!seen.includes(from[key])) {
            to[key] = destroyCircular(from[key], seen.slice());
            continue;
        }
        to[key] = "[Circular]";
    }
    const commonProperties = [
        "name",
        "message",
        "stack",
        "code"
    ];
    for (const property of commonProperties)if (typeof from[property] === "string") to[property] = from[property];
    return to;
};
module.exports = destroyCircular;

},{}],"5RGeL":[function(require,module,exports) {
const destroyCircular = require("./destroyCircular");
module.exports = (value)=>{
    if (typeof value === "object") return destroyCircular(value, []);
    // People sometimes throw things besides Error objects…
    if (typeof value === "function") // `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
    return `[Function: ${value.name || "anonymous"}]`;
    return value;
};

},{"./destroyCircular":"crsh9"}]},["1td67","413pJ"], "413pJ", "parcelRequiree6b8")

//# sourceMappingURL=cconsole.js.map
