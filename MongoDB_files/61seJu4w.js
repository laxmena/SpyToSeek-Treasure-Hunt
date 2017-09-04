"use strict";

if (typeof window.console === "undefined") {
  window.console = {
    log: function() {},
    debug: function() {}
  };
}

if (typeof window.localStorage === "undefined") {
  window.localStorage = {
    getItem: function() {},
    setItem: function() {}
  };
}

if (typeof JSON === "undefined") {
  JSON = {
    stringify: function() {},
    parse: function() {}
  };
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(elt) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = from < 0 ? Math.ceil(from) : Math.floor(from);
    if (from < 0) {
      from += len;
    }
    for (;from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

if (typeof Object.assign != "function") {
  Object.assign = function(target, varArgs) {
    "use strict";
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

Object.keys || (Object.keys = function() {
  var a = Object.prototype.hasOwnProperty, b = !{
    toString: null
  }.propertyIsEnumerable("toString"), c = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], d = c.length;
  return function(e) {
    if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
    var g, h, f = [];
    for (g in e) a.call(e, g) && f.push(g);
    if (b) for (h = 0; d > h; h++) a.call(e, c[h]) && f.push(c[h]);
    return f;
  };
}());

if (!Array.prototype.some) {
  Array.prototype.some = function(fun) {
    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }
    if (typeof fun !== "function") {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }
    return false;
  };
}

var __extends = this && this.__extends || function() {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d, b) {
    d.__proto__ = b;
  } || function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

window.Demandbase = window.Demandbase || {};

window.Demandbase.Config = window.Demandbase.Config || {};

window.Demandbase.Config.hooks = window.Demandbase.Config.hooks || {};

window.Demandbase.Config.ads = window.Demandbase.Config.ads || {};

window.Demandbase.Config.analytics = window.Demandbase.Config.analytics || {};

window.Demandbase.Config.tokens = window.Demandbase.Config.tokens || {};

window.Demandbase.Config.forms = window.Demandbase.Config.forms || {};

window.Demandbase.Config.SiteOptimization = window.Demandbase.Config.SiteOptimization || {};

window.Demandbase.Config.ExtendedCompanyTargeting = window.Demandbase.Config.ExtendedCompanyTargeting || {};

window.Demandbase.Connectors = window.Demandbase.Connectors || {};

var Demandbase;

(function(Demandbase) {
  var Config;
  (function(Config) {
    Config.ads = window.Demandbase.Config.ads || {};
    Config.analytics = window.Demandbase.Config.analytics || {};
    Config.conditions = window.Demandbase.Config.conditions || {};
    Config.content = window.Demandbase.Config.content || {};
    Config.forms = window.Demandbase.Config.forms || {};
    Config.segments = window.Demandbase.Config.segments || {};
    Config.disableEctModule = window.Demandbase.Config.disableEctModule || false;
    Config.ectTimeout = window.Demandbase.Config.ectTimeout || null;
    Config.emptyWatchDefault = window.Demandbase.Config.emptyWatchDefault || null;
    Config.hooks = window.Demandbase.Config.hooks || {};
    Config.isInIFrame = window.Demandbase.Config.isInIFrame || null;
    Config.key = window.Demandbase.Config.key || null;
    Config.logging = window.Demandbase.Config.logging || null;
    Config.nonCompanyDefault = window.Demandbase.Config.nonCompanyDefault || null;
    Config.nonWatchDefault = window.Demandbase.Config.nonWatchDefault || null;
    Config.testDomain = window.Demandbase.Config.testDomain || undefined;
    Config.testIp = window.Demandbase.Config.testIp || undefined;
    Config.tokens = window.Demandbase.Config.tokens || {};
    Config.useTestDomain = window.Demandbase.Config.useTestDomain || false;
    Config.useTestIp = window.Demandbase.Config.useTestIp || false;
    Config.Advertising = window.Demandbase.Config.Advertising || {};
    Config.AssetReporter = window.Demandbase.Config.AssetReporter || {};
    Config.Content = window.Demandbase.Config.Content || {};
    Config.ErrorReporter = window.Demandbase.Config.ErrorReporter || {};
    Config.ExtendedCompanyTargeting = window.Demandbase.Config.ExtendedCompanyTargeting || {};
    Config.Forms = window.Demandbase.Config.Forms || {};
    Config.Google_Analytics = window.Demandbase.Config.Google_Analytics || {};
    Config.Google_TagManager = window.Demandbase.Config.Google_TagManager || {};
    Config.SiteOptimization = window.Demandbase.Config.SiteOptimization || {};
  })(Config = Demandbase.Config || (Demandbase.Config = {}));
  var Connectors;
  (function(Connectors) {})(Connectors = Demandbase.Connectors || (Demandbase.Connectors = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  Demandbase.version = "5.8.2";
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var ErrorStackParser;
    (function(ErrorStackParser) {
      var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
      var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
      var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
      function parse(error) {
        if (typeof error["stacktrace"] !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
          return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
          return this.parseV8OrIE(error);
        } else if (error.stack) {
          return this.parseFFOrSafari(error);
        } else {
          return undefined;
        }
      }
      ErrorStackParser.parse = parse;
      function extractLocation(urlLike) {
        if (urlLike.indexOf(":") === -1) {
          return [ urlLike ];
        }
        var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ""));
        return [ parts[1], parts[2] || undefined, parts[3] || undefined ];
      }
      ErrorStackParser.extractLocation = extractLocation;
      function _parseInt(string, radix) {
        if (radix === void 0) {
          radix = 10;
        }
        if (!string) {
          return undefined;
        }
        return parseInt(string, radix);
      }
      ErrorStackParser._parseInt = _parseInt;
      function parseV8OrIE(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf("(eval ") > -1) {
            line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
          }
          var tokens = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1);
          var locationParts = this.extractLocation(tokens.pop());
          var functionName = tokens.join(" ") || undefined;
          var fileName = [ "eval", "<anonymous>" ].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
          return {
            function: functionName,
            file: fileName,
            line: this._parseInt(locationParts[1]),
            column: this._parseInt(locationParts[2])
          };
        }, this);
      }
      ErrorStackParser.parseV8OrIE = parseV8OrIE;
      function parseFFOrSafari(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf(" > eval") > -1) {
            line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
          }
          if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
            return {
              function: line
            };
          } else {
            var tokens = line.split("@");
            var locationParts = this.extractLocation(tokens.pop());
            var functionName = tokens.join("@") || undefined;
            return {
              function: functionName,
              file: locationParts[0],
              line: this._parseInt(locationParts[1]),
              column: this._parseInt(locationParts[2])
            };
          }
        }, this);
      }
      ErrorStackParser.parseFFOrSafari = parseFFOrSafari;
      function parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
          return this.parseOpera9(e);
        } else if (!e.stack) {
          return this.parseOpera10(e);
        } else {
          return this.parseOpera11(e);
        }
      }
      ErrorStackParser.parseOpera = parseOpera;
      function parseOpera9(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split("\n");
        var result = [];
        for (var i = 2, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push({
              file: match[2],
              line: this._parseInt(match[1])
            });
          }
        }
        return result;
      }
      ErrorStackParser.parseOpera9 = parseOpera9;
      function parseOpera10(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split("\n");
        var result = [];
        for (var i = 0, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push({
              function: match[3] || undefined,
              file: match[2],
              line: this._parseInt(match[1])
            });
          }
        }
        return result;
      }
      ErrorStackParser.parseOpera10 = parseOpera10;
      function parseOpera11(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function(line) {
          var tokens = line.split("@");
          var locationParts = this.extractLocation(tokens.pop());
          var functionCall = tokens.shift() || "";
          var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          var argsRaw;
          if (functionCall.match(/\(([^\)]*)\)/)) {
            argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
          }
          var args = argsRaw === undefined || argsRaw === "[arguments not available]" ? undefined : argsRaw.split(",");
          return {
            function: functionName,
            file: locationParts[0],
            line: this._parseInt(locationParts[1]),
            column: this._parseInt(locationParts[2])
          };
        }, this);
      }
      ErrorStackParser.parseOpera11 = parseOpera11;
    })(ErrorStackParser = Utilities.ErrorStackParser || (Utilities.ErrorStackParser = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var Api;
    (function(Api) {
      function buildApiParamString(params) {
        var allParams = {
          referrer: document.referrer,
          page: document.URL,
          page_title: document.title
        };
        if (Demandbase.Config.isInIFrame) {
          allParams.page = document.referrer;
          try {
            allParams.referrer = window.top.document.referrer;
            allParams.page_title = window.top.document.title;
          } catch (error) {
            allParams.referrer = null;
            allParams.page_title = "3rd Party iFrame";
          }
        }
        allParams = Object.assign(allParams, params);
        return buildQueryString(allParams);
      }
      Api.buildApiParamString = buildApiParamString;
      function buildApiUrl(base, params) {
        var url = base || Utilities.Constants.URL_IP_API;
        url += buildApiParamString(params);
        if (Demandbase.ExtendedCompanyTargeting) {
          url += Demandbase.ExtendedCompanyTargeting.buildParamString();
        }
        return url;
      }
      Api.buildApiUrl = buildApiUrl;
      function buildQueryString(params) {
        var qs = "?";
        for (var name_1 in params) {
          if (params.hasOwnProperty(name_1) && params[name_1] !== undefined) {
            qs += name_1 + "=" + encodeURIComponent(params[name_1]) + "&";
          }
        }
        qs = qs.substring(0, qs.length - 1);
        return qs;
      }
      Api.buildQueryString = buildQueryString;
    })(Api = Utilities.Api || (Utilities.Api = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
    buildApiParamString: Demandbase.Utilities.Api.buildApiParamString,
    buildApiUrl: Demandbase.Utilities.Api.buildApiUrl,
    buildQueryString: Demandbase.Utilities.Api.buildQueryString
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var Callbacks;
    (function(Callbacks) {
      Callbacks.callbackStack = [];
      function callback(data) {
        var _loop_1 = function(i) {
          var callback_1 = Callbacks.callbackStack[i];
          Demandbase.ErrorReporter.wrap(function() {
            callback_1.call(Demandbase, data);
          })();
        };
        for (var i = 0; i < Callbacks.callbackStack.length; i++) {
          _loop_1(i);
        }
      }
      Callbacks.callback = callback;
      function domScriptCallback(data) {
        Demandbase.IpApi.CompanyProfile = Demandbase.Utilities.flatten(data);
        this.callback(data);
      }
      Callbacks.domScriptCallback = domScriptCallback;
      function registerCallback(callback) {
        if (Callbacks.callbackStack.indexOf(callback) !== -1) {
          return;
        }
        Callbacks.callbackStack.push(callback);
        if (Demandbase.IpApi.CompanyProfile) {
          Demandbase.ErrorReporter.wrap(function() {
            callback.call(Demandbase, Demandbase.IpApi.CompanyProfile);
          })();
        }
      }
      Callbacks.registerCallback = registerCallback;
    })(Callbacks = Utilities.Callbacks || (Utilities.Callbacks = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
    callback: Demandbase.Utilities.Callbacks.callback.bind(Demandbase.Utilities.Callbacks),
    registerCallback: Demandbase.Utilities.Callbacks.registerCallback.bind(Demandbase.Utilities.Callbacks)
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var Constants;
    (function(Constants) {
      Constants.QS_USE_TEST_DOMAIN = "db_useTestDomain";
      Constants.QS_QUERY_DOMAIN = "db_domain";
      Constants.QS_ENABLE_LOG = "db_logging";
      Constants.DFLT_NON_COMPANY = "(Non-Company Visitor)";
      Constants.DFLT_AW_EMPTY = "(AccountWatch Empty)";
      Constants.DFLT_NON_AW = "(Non-AccountWatch Visitor)";
      Constants.DFLT_EVENT_TYPE = "click";
      Constants.URL_IP_API = "api.demandbase.com/api/v2/ip.json";
      Constants.URL_DOMAIN_API = "api.demandbase.com/api/v1/domain.json";
      Constants.URL_AD_PIXEL = Demandbase.Config.tokens.URL_AD_PIXEL || "d.company-target.com/pixel?type=js&id=";
      Constants.URL_CURRENT = function() {
        var pg = document.URL;
        if (Demandbase.Config.isInIFrame) {
          pg = document.referrer;
        }
        pg = encodeURIComponent(pg);
        return pg;
      }();
      Constants.PROTOCOL = function() {
        return "https:" == document.location.protocol ? "https://" : "http://";
      }();
    })(Constants = Utilities.Constants || (Utilities.Constants = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
    tokens: Demandbase.Utilities.Constants
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var DataStorage = function() {
      function DataStorage(values) {
        if (values === void 0) {
          values = {};
        }
        this.ssid = values.ssid || null;
        this.tuuid = values.tuuid || null;
        this.createdAt = values.createdAt || new Date();
        this.updatedAt = values.updatedAt || new Date();
      }
      DataStorage.fetch = function() {
        return this.fromJSON(Utilities.DataStorage.store.getItem("DemandbaseDataStorage") || "{}");
      };
      DataStorage.initialize = function() {
        Utilities.DataStorage.setStore();
      };
      DataStorage.fromJSON = function(encodedData) {
        if (encodedData === void 0) {
          encodedData = "{}";
        }
        var rawObject = JSON.parse(encodedData);
        var createdAt = new Date();
        var updatedAt = new Date();
        if (rawObject.createdAt) {
          createdAt = new Date(rawObject.createdAt);
        }
        if (rawObject.updatedAt) {
          updatedAt = new Date(rawObject.updatedAt);
        }
        return new DataStorage({
          ssid: rawObject.ssid,
          tuuid: rawObject.tuuid,
          createdAt: createdAt,
          updatedAt: updatedAt
        });
      };
      DataStorage.prototype.toJSON = function() {
        return JSON.stringify({
          ssid: this.ssid,
          tuuid: this.tuuid,
          createdAt: this.createdAt.toJSON(),
          updatedAt: this.updatedAt.toJSON()
        });
      };
      DataStorage.update = function(values) {
        if (values === void 0) {
          values = {};
        }
        var dataStorage = DataStorage.fetch();
        dataStorage.update(values);
      };
      DataStorage.prototype.update = function(values) {
        if (values === void 0) {
          values = {};
        }
        this.ssid = values.ssid;
        this.tuuid = values.tuuid;
        this.updatedAt = new Date();
        this.save();
      };
      DataStorage.prototype.save = function() {
        Utilities.DataStorage.store.setItem("DemandbaseDataStorage", this.toJSON());
      };
      DataStorage.prototype.isStale = function() {
        var thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30));
        return this.updatedAt <= thirtyDaysAgo;
      };
      DataStorage.setStore = function() {
        if (Utilities.isStorageEnabled("localStorage")) {
          Utilities.DataStorage.setDefaultStore();
        } else if (Utilities.isCookieEnabled()) {
          Utilities.DataStorage.setCookieStore();
        } else {
          Utilities.DataStorage.setMemoryStore();
        }
      };
      DataStorage.setDefaultStore = function() {
        Utilities.DataStorage.store = window.localStorage;
      };
      DataStorage.setCookieStore = function() {
        var _this = this;
        Utilities.DataStorage.store = {
          getItem: function(sKey) {
            if (!sKey || !_this.hasOwnProperty(sKey)) {
              return null;
            }
            return window.decodeURIComponent(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + window.encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
          },
          key: function(nKeyId) {
            return window.decodeURIComponent(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
          },
          setItem: function(sKey, sValue) {
            if (!sKey) {
              return;
            }
            document.cookie = window.encodeURIComponent(sKey) + "=" + window.encodeURIComponent(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
            Utilities.DataStorage.store.length = document.cookie.match(/\=/g).length;
          },
          length: 0,
          removeItem: function(sKey) {
            if (!sKey || !_this.hasOwnProperty(sKey)) {
              return;
            }
            document.cookie = window.encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            Utilities.DataStorage.store.length--;
          },
          hasOwnProperty: function(sKey) {
            return new RegExp("(?:^|;\\s*)" + window.encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
          }
        };
        Utilities.DataStorage.store.length = (document.cookie.match(/\=/g) || Utilities.DataStorage.store).length;
      };
      DataStorage.setMemoryStore = function() {
        Utilities.DataStorage.store = {
          _data: {},
          length: 0,
          setItem: function(id, val) {
            Utilities.DataStorage.store.length++;
            return Utilities.DataStorage.store._data[id] = String(val);
          },
          getItem: function(id) {
            return Utilities.DataStorage.store._data.hasOwnProperty(id) ? Utilities.DataStorage.store._data[id] : undefined;
          },
          removeItem: function(id) {
            Utilities.DataStorage.store.length--;
            return delete Utilities.DataStorage.store._data[id];
          },
          clear: function() {
            Utilities.DataStorage.store.length = 0;
            return Utilities.DataStorage.store._data = {};
          }
        };
      };
      return DataStorage;
    }();
    Utilities.DataStorage = DataStorage;
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var DBContent = function() {
    function DBContent(values) {
      if (values === void 0) {
        values = {};
      }
      this.name = values.name || "";
      this.modify = values.modify || null;
      this.segments = values.segments || [];
      this.url = values.url || [];
      if (!this.modify) {
        this.modify = function() {
          Demandbase.Utilities.Logging.log("DBContent: modify function not defined");
        };
      }
      if (typeof this.segments === "string") this.segments = [ this.segments ];
      if (typeof this.url === "string") this.url = [ this.url ];
    }
    DBContent.prototype.run = function() {
      var urlMatch = false;
      for (var index in this.url) {
        if (this.url.hasOwnProperty(index)) {
          var url = this.url[index];
          if (Demandbase.Utilities.isCurrentPage(url)) {
            urlMatch = true;
          }
        }
      }
      if (urlMatch) {
        var segMatch = false;
        for (var index in this.segments) {
          if (this.segments.hasOwnProperty(index)) {
            var segmentName = this.segments[index], segment = window.Demandbase.Segments[segmentName];
            if (typeof segment !== "undefined" && segment) {
              segMatch = true;
            }
          }
        }
        if (!segMatch) {
          Demandbase.Utilities.Logging.log("DBContent modify " + this.name + " not fired.  Segment " + segmentName);
          return false;
        }
        Demandbase.Utilities.Logging.log("DBContent: running modify function for: " + this.name);
        this.modify.call(document);
        return true;
      } else {
        Demandbase.Utilities.Logging.log("DBContent modify " + this.name + " not fired. no URL match with: " + this.url);
        return false;
      }
    };
    return DBContent;
  }();
  Demandbase.DBContent = DBContent;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var DBContentBuilder;
  (function(DBContentBuilder) {
    function isValid(config) {
      if (!config) return false;
      var reqdPropsList = [ "name", "segments", "pages", "modify" ];
      if ("function" !== typeof config["modify"]) {
        //!config['pages'] instanceof Array ||
        //!config['segments'] instanceof Array
        Demandbase.Utilities.Logging.log("DBContentBuilder: invalid type in config.");
        return false;
      }
      for (var i = 0; i < reqdPropsList.length; i++) {
        if (typeof config[reqdPropsList[i]] === "undefined") {
          Demandbase.Utilities.Logging.log("DBContentBuilder: invalid config missing: " + reqdPropsList[i]);
          return false;
        }
      }
      return true;
    }
    DBContentBuilder.isValid = isValid;
    function build(config) {
      if (isValid(config)) {
        if (typeof config.pages === "string") {
          config.url = [ config.pages ];
        } else {
          config.url = config.pages;
        }
        if (typeof config.segments === "string") {
          config.segments = [ config.segments ];
        }
        return new Demandbase.DBContent(config);
      } else {
        return null;
      }
    }
    DBContentBuilder.build = build;
  })(DBContentBuilder = Demandbase.DBContentBuilder || (Demandbase.DBContentBuilder = {}));
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var Events;
    (function(Events) {
      function add(eventObj) {
        var result = true;
        if (!isValid(eventObj)) {
          Demandbase.Utilities.Logging.log("Event not added.");
          return false;
        }
        var eventType = eventObj.type || Demandbase.Utilities.Constants.DFLT_EVENT_TYPE;
        var elements = eventObj.elements;
        var elmConstructor = elements.constructor;
        if (elmConstructor === HTMLCollection || elmConstructor === NodeList) {
          for (var eaElm in elements) {
            var added = false;
            if (elements.hasOwnProperty(eaElm)) {
              added = _attachListener(elements[eaElm], eventType, eventObj.listener);
              if (!added) {
                result = false;
                Demandbase.Utilities.Logging.log("Event not added to" + elements[eaElm]);
              }
            }
          }
        } else {
          return _attachListener(eventObj.elements, eventType, eventObj.listener);
        }
        return result;
      }
      Events.add = add;
      function _attachListener(element, eventName, listener) {
        if (!element) {
          Demandbase.Utilities.Logging.log("Event not registered - invalid element/s.");
          return null;
        }
        if (element.jquery) {
          element = element[0];
        }
        Demandbase.Utilities.addEventListener(element, eventName, listener);
        Demandbase.Utilities.Logging.log("Event Listener bind to: " + element + " on event " + eventName);
        return true;
      }
      Events._attachListener = _attachListener;
      function isValid(eventObj) {
        var result = false;
        var reqdPropsList = [ "elements", "listener" ];
        var elms = eventObj.elements || null;
        var listener = eventObj.listener || null;
        for (var i = 0; i < reqdPropsList.length; i++) {
          if (typeof eventObj[reqdPropsList[i]] === "undefined" || !eventObj[reqdPropsList[i]]) {
            Demandbase.Utilities.Logging.log("Invalid Event object. Missing: " + reqdPropsList[i]);
            return false;
          }
        }
        if ("function" !== typeof listener) {
          Demandbase.Utilities.Logging.log('Invalid Event: "listener" must be a function. Got (' + listener + ")");
          return false;
        }
        if (elms instanceof Node || elms instanceof NodeList || elms instanceof HTMLElement || elms instanceof HTMLCollection || elms instanceof Window || elms instanceof Document || typeof elms === "function" || typeof window.Demandbase.jQuery !== "undefined" && elms instanceof window.Demandbase.jQuery) {
          result = true;
        } else {
          Demandbase.Utilities.Logging.log("Invalid Event:  element: " + elms + ' has type: "' + elms.constructor + '" which is not proper instance type.');
        }
        return result;
      }
      Events.isValid = isValid;
    })(Events = Utilities.Events || (Utilities.Events = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
    events: Demandbase.Utilities.Events
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    var Logging;
    (function(Logging) {
      Logging.logging = false;
      Logging.debug = false;
      function alert(message) {
        log(message);
      }
      Logging.alert = alert;
      function log(message) {
        if (Demandbase.Config.logging || Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_ENABLE_LOG) === "true") {
          console.log("DB: " + message);
        }
      }
      Logging.log = log;
    })(Logging = Utilities.Logging || (Utilities.Logging = {}));
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, {
    logging: Demandbase.Utilities.Logging.logging,
    debug: Demandbase.Utilities.Logging.debug,
    alert: Demandbase.Utilities.Logging.alert.bind(Demandbase.Utilities.Logging),
    log: Demandbase.Utilities.Logging.log.bind(Demandbase.Utilities.Logging)
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var Utilities;
  (function(Utilities) {
    function addEventListener(target, type, listener) {
      if (target.addEventListener) {
        target.addEventListener(type, listener);
      } else if (target.attachEvent) {
        target.attachEvent(type, listener);
      }
    }
    Utilities.addEventListener = addEventListener;
    function detectIFrame() {
      return window.top !== window.self;
    }
    Utilities.detectIFrame = detectIFrame;
    function dig(target) {
      var keys = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
      }
      var digged = target;
      for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        if (typeof digged === "undefined") {
          return undefined;
        }
        if (typeof key === "function") {
          digged = key(digged);
        } else {
          digged = digged[key];
        }
      }
      return digged;
    }
    Utilities.dig = dig;
    function flatten(object) {
      for (var key in object) {
        var value = object[key];
        if (typeof value !== "object" || value === null || !object.hasOwnProperty(key)) {
          continue;
        }
        for (var nestedKey in value) {
          object[key + "_" + nestedKey] = value[nestedKey];
        }
        delete object[key];
      }
      return object;
    }
    Utilities.flatten = flatten;
    function getAttributeValue(data, attrName) {
      var registryMap = {
        city: "registry_city",
        state: "registry_state",
        zip: "registry_zip_code",
        country: "registry_country_code",
        country_name: "registry_country",
        latitude: "registry_latitude",
        longitude: "registry_longitude"
      };
      var dflt = Demandbase.Config.nonCompanyDefault || Demandbase.Utilities.Constants.DFLT_NON_COMPANY;
      var awDflt = Demandbase.Config.emptyWatchDefault || Demandbase.Utilities.Constants.DFLT_AW_EMPTY;
      var regName = registryMap[attrName] || "";
      var attrValue = data[attrName] || data[regName] || dflt;
      var isCompany = (data["company_name"] || dflt) !== dflt;
      var isAcctWatch = Object.keys(data).some(function(k) {
        return k.indexOf("watch_list_") === 0;
      });
      if (data[attrName] === false) {
        return "false";
      }
      if (attrName.indexOf("watch_list_") !== -1 && isCompany) {
        if (!isAcctWatch) {
          awDflt = Demandbase.Config.nonWatchDefault || Demandbase.Utilities.Constants.DFLT_NON_AW;
        }
        attrValue = data[attrName] || awDflt;
      }
      return attrValue;
    }
    Utilities.getAttributeValue = getAttributeValue;
    function getDocumentReadyState() {
      return document.readyState;
    }
    Utilities.getDocumentReadyState = getDocumentReadyState;
    function getElementByIdOrName(elementIdentifier) {
      return document.getElementById(elementIdentifier) || document.getElementsByName(elementIdentifier)[0] || null;
    }
    Utilities.getElementByIdOrName = getElementByIdOrName;
    function getQueryParam(param) {
      var params = {}, qs = window.location.search.substring(1), pairs = qs.split("&");
      if (!qs) return "";
      for (var i = 0; i < pairs.length; i++) {
        var nvArray = pairs[i].split("=");
        var name = nvArray[0];
        var value = nvArray[1];
        params[name] = value;
      }
      return params[param] || "";
    }
    Utilities.getQueryParam = getQueryParam;
    function insertScript(url, id) {
      if (!url) {
        return;
      }
      Demandbase._loadedScripts = Demandbase._loadedScripts || {};
      if (Demandbase._loadedScripts[url]) {
        return;
      } else {
        Demandbase._loadedScripts[url] = true;
      }
      var element = document.createElement("script");
      var firstScript = document.getElementsByTagName("script")[0];
      element.async = true;
      element.id = id || "";
      element.src = "https://" + url.replace(/(^\/\/)|(^http:\/\/)|(^https:\/\/)/, "");
      firstScript.parentNode.insertBefore(element, firstScript);
    }
    Utilities.insertScript = insertScript;
    function isCookieEnabled() {
      try {
        if (window.navigator.cookieEnabled) {
          document.cookie = "COOKIE_TEST=TEST";
          if (document.cookie.indexOf("COOKIE_TEST=TEST") !== -1) {
            document.cookie = "COOKIE_TEST=PASSED_TEST";
            return true;
          }
        }
        return false;
      } catch (error) {
        return false;
      }
    }
    Utilities.isCookieEnabled = isCookieEnabled;
    function isCurrentPage(testUrl, currUrl) {
      var qm = "?";
      var pound = "#";
      var hash = document.location.hash;
      var search = document.location.search;
      var currentUrl = document.location.href;
      if (Demandbase.Config.isInIFrame) {
        currentUrl = document.referrer;
      }
      if (currUrl) {
        var searchEnd = currUrl.indexOf(pound);
        if (searchEnd === -1) {
          searchEnd = currUrl.length;
        }
        hash = currUrl.substring(currUrl.indexOf(pound), currUrl.length);
        search = currUrl.substring(currUrl.indexOf(qm), searchEnd);
        currentUrl = currUrl;
      }
      function stripProtocol(str) {
        var doubleSlash = "//";
        if (str.indexOf(doubleSlash) === 0) {
          return str.substring(doubleSlash.length, str.length);
        }
        return str.replace(/^.*?:\/\//g, "");
      }
      function stripWww(str) {
        return str.replace(/^(www\.)/g, "");
      }
      function stripTail(str) {
        var slash = "/";
        if (str.indexOf(pound, str.length - pound.length) !== -1) {
          str = str.substring(0, str.length - 1);
        }
        if (str.indexOf(slash, str.length - slash.length) !== -1) {
          str = str.substring(0, str.length - 1);
        }
        return str;
      }
      testUrl = stripProtocol(testUrl);
      testUrl = stripWww(testUrl);
      testUrl = stripTail(testUrl);
      currentUrl = stripProtocol(currentUrl);
      currentUrl = stripWww(currentUrl);
      currentUrl = stripTail(currentUrl);
      if (testUrl.indexOf(pound) === -1 && currentUrl.indexOf(pound) !== -1) {
        currentUrl = currentUrl.substring(0, currentUrl.length - hash.length);
      }
      if (testUrl.indexOf(qm) === -1 && currentUrl.indexOf(qm) !== -1) {
        currentUrl = currentUrl.substring(0, currentUrl.length - search.length);
      }
      currentUrl = stripTail(currentUrl);
      return currentUrl === testUrl;
    }
    Utilities.isCurrentPage = isCurrentPage;
    function isStorageEnabled(type) {
      try {
        var storage = window[type.toString()];
        storage.setItem("STORAGE_CHECK", "STORAGE_CHECK");
        var test = storage.getItem("STORAGE_CHECK");
        storage.removeItem("STORAGE_CHECK");
        return true;
      } catch (error) {
        return false;
      }
    }
    Utilities.isStorageEnabled = isStorageEnabled;
    function isOldBrowserOrUserAgentUnavailable() {
      try {
        return window.navigator.userAgent.indexOf("MSIE ") > 0;
      } catch (error) {
        return true;
      }
    }
    Utilities.isOldBrowserOrUserAgentUnavailable = isOldBrowserOrUserAgentUnavailable;
    function jqid(id) {
      return !id ? null : "#" + id.replace(/(:|\.|\[|\]|,)/g, "\\$1");
    }
    Utilities.jqid = jqid;
  })(Utilities = Demandbase.Utilities || (Demandbase.Utilities = {}));
})(Demandbase || (Demandbase = {}));

(function(window) {
  window.Demandbase.utils = window.Demandbase.utils || {};
  Object.assign(window.Demandbase.utils, window.Demandbase.utils, Demandbase.Utilities);
  Object.assign(window.Demandbase.utils, Demandbase.utils, {
    loadScript: Demandbase.Utilities.insertScript,
    flattenData: Demandbase.Utilities.flatten,
    getAttrValue: Demandbase.Utilities.getAttributeValue
  });
})(window);

var Demandbase;

(function(Demandbase) {
  var BaseModule = function() {
    function BaseModule() {}
    BaseModule.prototype.isEnabled = function() {
      return this.configuration.enabled;
    };
    return BaseModule;
  }();
  Demandbase.BaseModule = BaseModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var AdvertisingModule = function(_super) {
    __extends(AdvertisingModule, _super);
    function AdvertisingModule() {
      var _this = _super.call(this) || this;
      _this.ADVERTISING_PIXEL_ID = "ad";
      _this.CONVERSION_PIXEL_ID = "cn";
      _this.RETARGETING_PIXEL_ID = "rt";
      _this.DEFAULT_CONFIGURATION = {
        enabled: true,
        key: null,
        reportingOnly: false,
        campaigns: [],
        pixels: {
          ad: null,
          rt: null,
          cn: null
        },
        conversionTriggers: {
          pages: [],
          events: {}
        }
      };
      _this.configuration = {};
      _this.trackConversion = _this.trackConversionListener;
      _this.load = _this.initialize;
      _this.loadPixels = _this.insertPixels;
      _this._loadPixel = _this.insertPixel;
      _this._setCampaign = _this.loadCampaign;
      _this._setEvents = _this.registerEvents;
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.Advertising);
      Object.assign(_this.configuration, _this.configuration, Demandbase.Config.ads);
      return _this;
    }
    AdvertisingModule.prototype.initialize = function() {
      this.loadCampaign();
      this.insertPixels();
      this.registerEvents();
      if (this.configuration.reportingOnly === true && this.configuration.key && this.configuration.key !== Demandbase.Config.key) {
        Demandbase.IpApiReportingOnly.get(this.configuration.key, false);
      }
    };
    AdvertisingModule.prototype.isConversionPage = function() {
      var pages = this.configuration.conversionTriggers.pages;
      for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (Demandbase.Utilities.isCurrentPage(page)) {
          return true;
        }
      }
      return false;
    };
    AdvertisingModule.prototype.insertPixels = function() {
      this.insertPixel(this.ADVERTISING_PIXEL_ID);
      if (this.isConversionPage()) {
        this.insertPixel(this.CONVERSION_PIXEL_ID);
      } else {
        this.insertPixel(this.RETARGETING_PIXEL_ID);
      }
    };
    AdvertisingModule.prototype.insertPixel = function(name) {
      var pixelId = this.configuration.pixels[name];
      if (!pixelId) {
        return;
      }
      var element = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
      var img = document.createElement("img");
      img.setAttribute("style", "display:none");
      img.setAttribute("alt", "Demandbase pixel");
      img.id = "db_pixel_" + name;
      img.src = Demandbase.Utilities.Constants.PROTOCOL + Demandbase.Utilities.Constants.URL_AD_PIXEL + pixelId + "&page=" + Demandbase.Utilities.Constants.URL_CURRENT;
      element.appendChild(img);
    };
    AdvertisingModule.prototype.loadCampaign = function() {
      var campaigns = this.configuration.campaigns;
      for (var i = 0; i < campaigns.length; i++) {
        var campaign = campaigns[i];
        for (var j = 0; j < campaign.pages.length; j++) {
          var page = campaign.pages[j];
          if (Demandbase.Utilities.isCurrentPage(page)) {
            this.configuration.pixels = campaign.pixels;
            this.configuration.conversionTriggers = campaign.conversionTriggers;
            return;
          }
        }
      }
    };
    AdvertisingModule.prototype.registerEvents = function() {
      var events = this.configuration.conversionTriggers.events;
      for (var eventId in events) {
        if (!events.hasOwnProperty(eventId)) {
          continue;
        }
        var event_1 = events[eventId];
        if (!event_1.listener) {
          if (event_1.trackConversion) {
            event_1.listener = this.trackConversionListener;
          } else if (event_1.virtualPageview) {
            event_1.listener = this.virtualPageViewListener;
          }
        }
        Demandbase.Utilities.Events.add(event_1);
      }
    };
    AdvertisingModule.prototype.trackConversionListener = function() {
      Demandbase.Advertising.insertPixel(Demandbase.Advertising.CONVERSION_PIXEL_ID);
    };
    AdvertisingModule.prototype.virtualPageViewListener = function() {
      Demandbase.Advertising.insertPixels();
      Demandbase.IpApi.get(undefined, false);
    };
    return AdvertisingModule;
  }(Demandbase.BaseModule);
  Demandbase.AdvertisingModule = AdvertisingModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var AssetReporterModule = function(_super) {
    __extends(AssetReporterModule, _super);
    function AssetReporterModule() {
      var _this = _super.call(this) || this;
      _this.DEFAULT_CONFIGURATION = {
        enabled: true,
        assetList: [ "api.demandbase.com/autocomplete/widget.js", "api.demandbase.com/autocomplete/widget.min.js", "autocomplete.demandbase.com/autocomplete/widget.js", "autocomplete.demandbase.com/autocomplete/widget.min.js", "scripts.demandbase.com/formWidget.js", "scripts.demandbase.com/formWidgetDebug.js", "scripts.demandbase.com/demandbase-sdk.js", "scripts.demandbase.com/demandbase-sdk-debug.js" ]
      };
      _this.ERROR_MESSAGE_PREFIX = "Legacy Asset Detected: ";
      _this.configuration = {};
      _this.values = {};
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.AssetReporter);
      return _this;
    }
    AssetReporterModule.prototype.initialize = function() {
      if (Demandbase.Utilities.getDocumentReadyState() === "complete") {
        this.read();
      } else {
        Demandbase.Utilities.addEventListener(window, "load", Demandbase.ErrorReporter.wrap(this.read.bind(this)));
      }
    };
    AssetReporterModule.prototype.read = function() {
      var assetQty = this.configuration.assetList.length;
      for (var i = 0; i < assetQty; i++) {
        var assetUrl = this.configuration.assetList[i];
        var asset = document.querySelector("script[src='" + Demandbase.Utilities.Constants.PROTOCOL + assetUrl + "']");
        if (asset) {
          this.values[assetUrl] = true;
          this.send(assetUrl);
        } else {
          this.values[assetUrl] = false;
        }
      }
    };
    AssetReporterModule.prototype.send = function(message) {
      var error = new Error(this.ERROR_MESSAGE_PREFIX + message);
      Demandbase.ErrorReporter.send(error);
    };
    return AssetReporterModule;
  }(Demandbase.BaseModule);
  Demandbase.AssetReporterModule = AssetReporterModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var ContentModule = function(_super) {
    __extends(ContentModule, _super);
    function ContentModule() {
      var _this = _super.call(this) || this;
      _this.DEFAULT_CONFIGURATION = {
        enabled: true
      };
      _this.configuration = {};
      _this.mods = {};
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.Content);
      Object.assign(_this.configuration, Demandbase.Config.content);
      return _this;
    }
    ContentModule.prototype.initialize = function() {
      Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
      this.setup();
    };
    ContentModule.prototype.callback = function() {
      this.setup();
      this.modify();
    };
    ContentModule.prototype.setup = function() {
      if (typeof Demandbase.Config.content !== "undefined") {
        for (var index in Demandbase.Config.content) {
          var modObj = Demandbase.Config.content[index];
          var dbContent = window.Demandbase.DBContentBuilder.build(modObj);
          if (dbContent) {
            this.mods[dbContent.name] = dbContent;
          }
        }
      }
    };
    ContentModule.prototype.modify = function() {
      var _this = this;
      return Demandbase.ErrorReporter.wrap(function() {
        var isMod = false;
        for (var eachMod in _this.mods) {
          if (_this.mods.hasOwnProperty(eachMod)) {
            var modObj = _this.mods[eachMod];
            var isRunMod = modObj.run();
            if (isRunMod) isMod = true;
          }
        }
      })();
    };
    return ContentModule;
  }(Demandbase.BaseModule);
  Demandbase.ContentModule = ContentModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var ErrorReporterModule = function(_super) {
    __extends(ErrorReporterModule, _super);
    function ErrorReporterModule() {
      var _this = _super.call(this) || this;
      _this.VERSION = "0.0.0";
      _this.PROJECT_ID = "141580";
      _this.PROJECT_KEY = "9a0a3519e930259f5886a7af53b0ccaa";
      _this.DEFAULT_CONFIGURATION = {
        environment: "production"
      };
      _this.configuration = {};
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.ErrorReporter);
      return _this;
    }
    ErrorReporterModule.prototype.initialize = function() {};
    ErrorReporterModule.prototype.send = function(error) {
      var xhttp;
      if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } else {
        xhttp = new XMLHttpRequest();
      }
      var url = "https://airbrake.io/api/v3/projects/" + this.PROJECT_ID + "/notices?key=" + this.PROJECT_KEY;
      try {
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(this.formatMessage(error));
      } catch (requestError) {}
    };
    ErrorReporterModule.prototype.wrap = function(method) {
      var _this = this;
      if (typeof method !== "function") {
        throw new Error("Invalid Function: " + method);
      }
      return function() {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          parameters[_i] = arguments[_i];
        }
        try {
          return method.apply(_this, parameters);
        } catch (error) {
          _this.send(error);
          Demandbase.Utilities.Logging.alert("Error: " + error + "\n" + error.stack);
        }
      };
    };
    ErrorReporterModule.prototype.formatMessage = function(error) {
      return JSON.stringify({
        errors: [ this.parseError(error) ],
        context: this.parseContext(),
        environment: this.parseEnviroment(),
        session: this.parseSession(),
        params: this.parseParams()
      });
    };
    ErrorReporterModule.prototype.parseError = function(error) {
      return {
        type: error.name,
        message: error.message,
        backtrace: Demandbase.Utilities.ErrorStackParser.parse(error)
      };
    };
    ErrorReporterModule.prototype.parseContext = function() {
      return {
        notifier: {
          name: "ErrorReporterModule",
          version: this.VERSION
        },
        environment: this.configuration.environment,
        version: Demandbase.version,
        url: window.location.href,
        userAgent: navigator.userAgent,
        rootDirectory: window.location.origin,
        readyState: document.readyState
      };
    };
    ErrorReporterModule.prototype.parseEnviroment = function() {
      return {
        config: Demandbase.Utilities.dig(Demandbase, "Config")
      };
    };
    ErrorReporterModule.prototype.parseSession = function() {
      return {
        companyProfile: Demandbase.Utilities.dig(Demandbase, "IP", "CompanyProfile")
      };
    };
    ErrorReporterModule.prototype.parseParams = function() {
      return {};
    };
    return ErrorReporterModule;
  }(Demandbase.BaseModule);
  Demandbase.ErrorReporterModule = ErrorReporterModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var ExtendedCompanyTargetingModule = function(_super) {
    __extends(ExtendedCompanyTargetingModule, _super);
    function ExtendedCompanyTargetingModule() {
      var _this = _super.call(this) || this;
      _this.ORIGIN = "//b.company-target.com";
      _this.DEFAULT_CONFIGURATION = {
        enabled: true,
        callback: function(values) {}
      };
      _this.configuration = {};
      _this.values = {
        gpid: undefined,
        cid: undefined,
        sid: undefined,
        ip: undefined,
        impid: undefined,
        tuuid: undefined,
        dmps: undefined
      };
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.ExtendedCompanyTargeting);
      if (Demandbase.Config.disableEctModule !== undefined) {
        _this.configuration.enabled = !Demandbase.Config.disableEctModule;
      }
      return _this;
    }
    ExtendedCompanyTargetingModule.prototype.isEnabled = function() {
      return _super.prototype.isEnabled.call(this) && !Demandbase.Utilities.isOldBrowserOrUserAgentUnavailable();
    };
    ExtendedCompanyTargetingModule.prototype.initialize = function() {
      this.read();
    };
    ExtendedCompanyTargetingModule.prototype.loadIFrame = function() {
      Demandbase.Utilities.addEventListener(window, "message", Demandbase.ErrorReporter.wrap(this.iFrameCallback.bind(this)));
      switch (Demandbase.Utilities.getDocumentReadyState()) {
       case "uninitialized":
       case "loading":
       case "loaded":
        Demandbase.Utilities.addEventListener(document, "DOMContentLoaded", Demandbase.ErrorReporter.wrap(this.appendIFrame.bind(this)));
        break;

       case "interactive":
       case "complete":
       default:
        if (document.body) {
          this.appendIFrame();
        } else {
          Demandbase.Utilities.addEventListener(window, "load", Demandbase.ErrorReporter.wrap(this.appendIFrame.bind(this)));
        }
      }
    };
    ExtendedCompanyTargetingModule.prototype.appendIFrame = function() {
      if (document.getElementById("db_ect")) {
        return;
      }
      var iFrame = document.createElement("iframe");
      var body = document.body || document.getElementsByTagName("body")[0] || document.querySelector("body");
      iFrame.src = document.location.protocol + this.ORIGIN + "/ect.html";
      iFrame.id = "db_ect";
      iFrame.height = "0";
      iFrame.width = "0";
      iFrame.style.display = "none";
      body.appendChild(iFrame);
    };
    ExtendedCompanyTargetingModule.prototype.iFrameCallback = function(event) {
      if (event.origin.indexOf(document.location.protocol + this.ORIGIN) !== 0 || !event.data) {
        return;
      }
      Demandbase.Utilities.DataStorage.update({
        ssid: event.data.ssid,
        tuuid: event.data.tuuid
      });
      this.read();
    };
    ExtendedCompanyTargetingModule.prototype.read = function() {
      var _this = this;
      var dataStorage = Demandbase.Utilities.DataStorage.fetch();
      if (dataStorage.isStale() || !dataStorage.ssid || !dataStorage.tuuid) {
        this.loadIFrame();
        if (!dataStorage.ssid && !dataStorage.tuuid) {
          return;
        }
      }
      this.parse(dataStorage.ssid, dataStorage.tuuid);
      Demandbase.IpApi.getOnce();
      Demandbase.ErrorReporter.wrap(function() {
        _this.configuration.callback(_this.values);
      })();
    };
    ExtendedCompanyTargetingModule.prototype.parse = function(ssidCookie, tuuidCookie) {
      if (ssidCookie) {
        var positionMap = {
          gpid: 0,
          cid: 1,
          sid: 2,
          ip: 3,
          dmps: 4
        };
        var ssidValues = ssidCookie.split("-");
        this.values.gpid = ssidValues[positionMap.gpid];
        this.values.cid = ssidValues[positionMap.cid];
        this.values.sid = ssidValues[positionMap.sid];
        this.values.ip = ssidValues[positionMap.ip];
        this.values.dmps = ssidValues[positionMap.dmps];
      }
      if (tuuidCookie) {
        this.values.impid = tuuidCookie;
        this.values.tuuid = tuuidCookie;
      }
    };
    ExtendedCompanyTargetingModule.prototype.buildParamString = function() {
      var params = {};
      if (this.isEnabled() && (this.values.gpid || this.values.cid || this.values.dmps || this.values.ip || this.values.sid)) {
        Object.assign(params, {
          gpid: this.values.gpid || "",
          cid: this.values.cid || "",
          dmps: this.values.dmps || "",
          tip: this.values.ip || "",
          tsid: this.values.sid || ""
        });
      }
      if (this.values.impid) {
        params["impid"] = this.values.impid;
      }
      return Demandbase.Utilities.Api.buildQueryString(params).replace("?", "&");
    };
    return ExtendedCompanyTargetingModule;
  }(Demandbase.BaseModule);
  Demandbase.ExtendedCompanyTargetingModule = ExtendedCompanyTargetingModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var FormsLoaderModule = function(_super) {
    __extends(FormsLoaderModule, _super);
    function FormsLoaderModule() {
      var _this = _super.call(this) || this;
      _this.REMOTE_MODULE_URL = "scripts.demandbase.com/forms.min.js";
      _this.DEFAULT_CONFIGURATION = {
        enabled: undefined,
        emailID: null,
        emailFields: []
      };
      _this.configuration = {};
      _this.inserted = false;
      _this.setConfiguration();
      return _this;
    }
    FormsLoaderModule.prototype.initialize = function() {
      Demandbase.Utilities.Callbacks.registerCallback(this.whenReady.bind(this));
    };
    FormsLoaderModule.prototype.whenReady = function() {
      if (this.isMktoForms2Installed()) {
        window.MktoForms2.whenReady(Demandbase.ErrorReporter.wrap(this.load.bind(this)));
      } else {
        this.load();
      }
    };
    FormsLoaderModule.prototype.load = function() {
      var isFormPage = false;
      if (typeof Demandbase.Config.isFormPage === "function") {
        isFormPage = Demandbase.Config.isFormPage();
        this.setConfiguration();
        isFormPage = Demandbase.Config.isFormPage();
      } else {
        isFormPage = this.isFormPage();
      }
      if (!isFormPage || this.inserted) {
        return;
      }
      this.insertForms();
    };
    FormsLoaderModule.prototype.isFormPage = function() {
      var emailFieldList = this.configuration.emailFields;
      if (this.configuration.emailID) {
        emailFieldList.push(this.configuration.emailID);
      }
      for (var i = 0; i < emailFieldList.length; i++) {
        if (Demandbase.Utilities.getElementByIdOrName(emailFieldList[i])) {
          return true;
        }
      }
      return false;
    };
    FormsLoaderModule.prototype.isMktoForms2Installed = function() {
      return window.MktoForms2 !== undefined && window.MktoForms2.whenReady !== undefined;
    };
    FormsLoaderModule.prototype.insertForms = function() {
      this.inserted = true;
      Demandbase.Connectors.initWebForm = this.initializeWebForm;
      Demandbase.Utilities.insertScript(Demandbase.FormsLoader.REMOTE_MODULE_URL, "db_form_module");
    };
    FormsLoaderModule.prototype.initializeWebForm = function(config) {
      config = config || Demandbase.Config.forms || Demandbase.Config.Forms || {};
      window.Demandbase.Connectors.WebForm.connect(config);
    };
    FormsLoaderModule.prototype.setConfiguration = function() {
      Object.assign(this.configuration, this.DEFAULT_CONFIGURATION, Demandbase.Config.Forms);
      if (this.configuration.enabled === undefined && Demandbase.Config.Forms !== undefined) {
        this.configuration.enabled = true;
      }
      Object.assign(this.configuration, this.configuration, Demandbase.Config.forms);
      if (this.configuration.enabled === undefined && Demandbase.Config.forms !== undefined) {
        this.configuration.enabled = true;
      }
    };
    return FormsLoaderModule;
  }(Demandbase.BaseModule);
  Demandbase.FormsLoaderModule = FormsLoaderModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var SiteOptimizationLoaderModule = function(_super) {
    __extends(SiteOptimizationLoaderModule, _super);
    function SiteOptimizationLoaderModule() {
      var _this = _super.call(this) || this;
      _this.REMOTE_MODULE_URL = "https://tag.demandbase.com/shared/siteOptimization.min.js";
      _this.REMOTE_STYLESHEET_URL = "https://tag.demandbase.com/shared/siteOptimization.css";
      _this.DEFAULT_CONFIGURATION = {
        additionalClass: null,
        backgroundColorClass: null,
        closedTitle: "Recommended Content",
        companyProfile: null,
        cssFileURL: _this.REMOTE_STYLESHEET_URL,
        delay: 0,
        enabled: undefined,
        fadeIn: 0,
        fontColor: null,
        fontName: null,
        googleAnalyticsTrackerName: null,
        isGoogleAnalyticsEnabled: false,
        isRippleAnimation: true,
        isSwitchersDots: true,
        isSwitchersArrows: false,
        itemBackgroundColor: null,
        mainClass: "defaultBlock",
        openByDefault: false,
        openTitle: null,
        recommendationApiURL: "https://ai-personalization-prod-api.demandbase.com/recommend/",
        recommendationCompanyName: null,
        recommendationCompanyId: null,
        recommendationKey: null,
        recommendationsProtocol: "forceHTTPS",
        recommendationUrl: window.location.href,
        showCloseButton: true,
        showCompanyName: true,
        showFeedbackLink: false,
        showIndicatorArrows: true,
        showLogo: true,
        showLogoWhenClosed: true,
        showLogoWhenOpen: false,
        showOnlyOnScroll: false,
        showTitleWhenClosed: true,
        showTitleWhenOpen: true,
        switcherArrowsColor: "#444",
        state: {
          openedRecommendationBlock: null
        },
        widgetBackgroundColor: null,
        widgetContainerId: null
      };
      _this.configuration = {};
      _this.inserted = false;
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.SiteOptimization);
      _this.configuration.recommendationKey = Demandbase.Config.key;
      return _this;
    }
    SiteOptimizationLoaderModule.prototype.initialize = function() {
      Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
    };
    SiteOptimizationLoaderModule.prototype.callback = function(data) {
      this.configuration.companyProfile = data;
      this.insertSiteOptimization();
    };
    SiteOptimizationLoaderModule.prototype.insertSiteOptimization = function() {
      this.inserted = true;
      Demandbase.Utilities.insertScript(Demandbase.SiteOptimizationLoader.REMOTE_MODULE_URL, "db_site_optimization_module");
    };
    return SiteOptimizationLoaderModule;
  }(Demandbase.BaseModule);
  Demandbase.SiteOptimizationLoaderModule = SiteOptimizationLoaderModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Google_AnalyticsModule = function(_super) {
    __extends(Google_AnalyticsModule, _super);
    function Google_AnalyticsModule() {
      var _this = _super.call(this) || this;
      _this.DEFAULT_CONFIGURATION = {
        enabled: true,
        events: null,
        fieldMap: null,
        googleAnalyticsClassicScope: 2,
        trackerName: null
      };
      _this.configuration = {};
      _this.gType = "";
      _this._cEvent = _this.sendEvent;
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.Google_Analytics);
      Object.assign(_this.configuration, _this.configuration, Demandbase.Config.analytics);
      return _this;
    }
    Google_AnalyticsModule.prototype.initialize = function() {
      this._detectG();
      this._setTrackerName();
      if (this.configuration.fieldMap) {
        Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
      }
      this._setEvents();
    };
    Google_AnalyticsModule.prototype.sendEvent = function(category, action, label) {
      if (this.gType === "ga") {
        this._trackEvent(category, action, label);
      } else {
        window.ga(function() {
          Demandbase.Connectors.Google_Analytics._sendEvent(category, action, label);
        });
      }
      Demandbase.Utilities.Logging.log("Sent Custom Event:" + category + "/" + action + "/" + label);
    };
    Google_AnalyticsModule.prototype._setTrackerName = function() {
      var _this = this;
      if (this.configuration.trackerName) {
        return;
      }
      if ("undefined" !== typeof window._gat && "function" === typeof window._gat._getTrackers) {
        var trackers = _gat._getTrackers();
        if (trackers.length > 0) {
          var tracker = trackers[0];
          var name = tracker._getName() || "";
          this.configuration.trackerName = name;
        }
      } else {
        window.ga(function() {
          var trackers = window.ga.getAll() || [];
          if (trackers.length > 0) {
            var tracker = trackers[0];
            var name = tracker.get("name") || "";
            _this.configuration.trackerName = name;
          }
        });
      }
    };
    Google_AnalyticsModule.prototype.callback = function(data) {
      try {
        if (!data) {
          throw new Error("Error - no data passed to callback");
        }
        var self = Demandbase.Connectors.Google_Analytics;
        self._detectG();
        self._setTrackerName();
        for (var field in self.configuration.fieldMap) {
          if (self.configuration.fieldMap.hasOwnProperty(field)) {
            var num = +field;
            var lbl = self.configuration.fieldMap[field];
            var val = Demandbase.Utilities.getAttributeValue(data, lbl);
            self._var(num, lbl, val.toString());
          }
        }
        self.sendEvent("Demandbase", "API Resolution", "IP API");
      } catch (e) {
        Demandbase.Utilities.Logging.log("GA Error: " + e + "\n" + e.stack);
        Demandbase.Connectors.Google_Analytics.sendEvent("Demandbase", "API Resolution", "Callback Error");
      }
    };
    Google_AnalyticsModule.prototype._detectG = function() {
      if (window._gaq) {
        this.gType = "ga";
        _gaq.push([ "_addDevId", "NE7T9" ]);
      } else {
        this.gType = null;
      }
      this._setGaObject();
      window.ga(function() {
        Demandbase.Connectors.Google_Analytics.gType = "ua";
      });
      Demandbase.Utilities.Logging.log("Detected Google version: " + this.gType);
    };
    Google_AnalyticsModule.prototype._sendEvent = function(category, action, label) {
      var command = this.configuration.trackerName ? this.configuration.trackerName + ".send" : "send";
      window.ga(command, "event", {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        nonInteraction: true
      });
    };
    Google_AnalyticsModule.prototype._setCustomDimension = function(index, value) {
      var command = this.configuration.trackerName ? this.configuration.trackerName + ".set" : "set";
      window.ga(command, "dimension" + index, value);
    };
    Google_AnalyticsModule.prototype._setCustomVariable = function(index, name, value) {
      var command = this.configuration.trackerName ? this.configuration.trackerName + "._setCustomVar" : "_setCustomVar";
      var scope = this.configuration.googleAnalyticsClassicScope || 2;
      window._gaq.push([ command, index >> 0, name, value, scope ]);
    };
    Google_AnalyticsModule.prototype._setEvents = function() {
      var eventList = this.configuration.events || [];
      if (eventList) {
        for (var i in eventList) {
          if (eventList.hasOwnProperty(i)) {
            var eventObj = eventList[i];
            if (eventObj.data) {
              var cat = eventObj.data.category || "";
              var act = eventObj.data.action || "";
              var lbl = eventObj.data.label || "";
              if (typeof eventObj.listener === "undefined" && cat && act && lbl) {
                eventObj.listener = function() {
                  Demandbase.Connectors.Google_Analytics.sendEvent(cat, act, lbl);
                  Demandbase.Utilities.Logging.log("Event listener ran");
                };
              } else if (!cat || !act || !lbl) {
                Demandbase.Utilities.Logging.log("Need to define a custom listener function or set data with category/action/label");
              }
            }
            Demandbase.Utilities.Events.add(eventObj);
          }
        }
      }
    };
    Google_AnalyticsModule.prototype._setGaObject = function() {
      if (typeof window.ga === "undefined") {
        window["GoogleAnalyticsObject"] = "ga";
        window["ga"] = window["ga"] || function() {
          (window["ga"].q = window["ga"].q || []).push(arguments);
        };
        window["ga"].l = +new Date();
      }
    };
    Google_AnalyticsModule.prototype._trackEvent = function(category, action, label) {
      var command = this.configuration.trackerName ? this.configuration.trackerName + "._trackEvent" : "_trackEvent";
      window._gaq.push([ command, category, action, label, 0, 1 ]);
    };
    Google_AnalyticsModule.prototype._var = function(index, name, value) {
      if (this.gType === "ga") {
        this._setCustomVariable(index, name, value);
      } else {
        window.ga(function() {
          Demandbase.Connectors.Google_Analytics._setCustomDimension(index, value);
        });
      }
      Demandbase.Utilities.Logging.log(index + " " + name + " : " + value);
    };
    return Google_AnalyticsModule;
  }(Demandbase.BaseModule);
  Demandbase.Google_AnalyticsModule = Google_AnalyticsModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Google_TagManagerModule = function(_super) {
    __extends(Google_TagManagerModule, _super);
    function Google_TagManagerModule() {
      var _this = _super.call(this) || this;
      _this.DEFAULT_CONFIGURATION = {
        enabled: true
      };
      _this.configuration = {};
      Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, Demandbase.Config.Google_TagManager);
      return _this;
    }
    Google_TagManagerModule.prototype.initialize = function() {
      Demandbase.Utilities.Callbacks.registerCallback(this.callback.bind(this));
    };
    Google_TagManagerModule.prototype.callback = function(data) {
      Demandbase.Connectors.Google_TagManager.pushToDataLayer(data);
    };
    Google_TagManagerModule.prototype.pushToDataLayer = function(data, id) {
      if (!window.google_tag_manager || !window.dataLayer || typeof dataLayer.push !== "function") {
        return false;
      }
      var eventLabel = id ? "_" + id : "";
      dataLayer.push(data);
      dataLayer.push({
        event: "Demandbase_Loaded" + eventLabel
      });
      Demandbase.Utilities.Logging.log("Pushed to GTM dataLayer");
      return true;
    };
    return Google_TagManagerModule;
  }(Demandbase.BaseModule);
  Demandbase.Google_TagManagerModule = Google_TagManagerModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var IpApiModule = function(_super) {
    __extends(IpApiModule, _super);
    function IpApiModule() {
      var _this = _super.call(this) || this;
      _this.TEST_MODE_ENABLED = "db_useTestIp";
      _this.TEST_MODE_VALUE = "db_ip";
      _this.API_ENDPOINT = "api.demandbase.com/api/v2/ip.json";
      _this.DEFAULT_CONFIGURATION = {
        apiKey: null,
        testModeEnabled: false,
        testModeValue: null
      };
      _this.configuration = {};
      _this.initialized = false;
      _this.key = _this.configuration.apiKey;
      _this.useTestValue = _this.configuration.testModeEnabled;
      _this.testValue = _this.configuration.testModeValue;
      _this.load = _this.get;
      _this._loadOnce = _this.getOnce;
      _this.CompanyProfile = undefined;
      _this.isCalled = false;
      try {
        Object.assign(_this.configuration, _this.DEFAULT_CONFIGURATION, {
          apiKey: Demandbase.Config.key || Demandbase.Utilities.dig(Demandbase.Config, "analytics", "key") || Demandbase.Utilities.dig(Demandbase.Config, "ads", "key") || Demandbase.Utilities.dig(Demandbase.Config, "forms", "key"),
          testModeEnabled: Demandbase.Utilities.getQueryParam(_this.TEST_MODE_ENABLED) || Demandbase.Config.useTestIp,
          testModeValue: Demandbase.Utilities.getQueryParam(_this.TEST_MODE_VALUE) || Demandbase.Config.testIp
        });
        _this.initialized = true;
      } catch (e) {
        _this.initialized = false;
      }
      return _this;
    }
    IpApiModule.prototype.initialize = function() {
      try {
        Object.assign(this.configuration, this.configuration, {
          apiKey: Demandbase.Config.key || Demandbase.Utilities.dig(Demandbase.Config, "analytics", "key") || Demandbase.Utilities.dig(Demandbase.Config, "ads", "key") || Demandbase.Utilities.dig(Demandbase.Config, "forms", "key"),
          testModeEnabled: Demandbase.Utilities.getQueryParam(this.TEST_MODE_ENABLED) || Demandbase.Config.useTestIp,
          testModeValue: Demandbase.Utilities.getQueryParam(this.TEST_MODE_VALUE) || Demandbase.Config.testIp
        });
        this.initialized = true;
      } catch (e) {
        this.initialized = false;
        Demandbase.ErrorReporter.send(e);
      }
    };
    IpApiModule.prototype.get = function(apiKey, triggerCallback) {
      var _this = this;
      if (apiKey === void 0) {
        apiKey = undefined;
      }
      if (triggerCallback === void 0) {
        triggerCallback = true;
      }
      if (!this.initialized) {
        this.initialize();
      }
      if (Demandbase.Utilities.isOldBrowserOrUserAgentUnavailable()) {
        this.getByDomScript(apiKey, triggerCallback);
        return Demandbase.Utilities.Logging.log("IP API query via DOM tag");
      }
      var request;
      if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } else {
        request = new XMLHttpRequest();
      }
      var params = {
        key: apiKey || this.configuration.apiKey,
        query: this.fetchIpAddress()
      };
      if (!params.key) {
        return Demandbase.Utilities.Logging.log("IP API query cancelled - check auth key.");
      }
      if (triggerCallback) {
        request.onreadystatechange = Demandbase.ErrorReporter.wrap(function() {
          _this.responseHandler(request);
        });
      }
      try {
        request.open("GET", "https://" + Demandbase.Utilities.Api.buildApiUrl(this.API_ENDPOINT, params));
        request.send();
      } catch (error) {
        if (request.status === 0) {
          throw new Error("IP API Request Blocked");
        } else {
          throw error;
        }
      }
    };
    IpApiModule.prototype.getByDomScript = function(apiKey, triggerCallback) {
      if (apiKey === void 0) {
        apiKey = undefined;
      }
      if (triggerCallback === void 0) {
        triggerCallback = true;
      }
      var params = {
        key: apiKey || this.configuration.apiKey,
        query: this.fetchIpAddress(),
        callback: triggerCallback ? "Demandbase.Utilities.Callbacks.domScriptCallback" : ""
      };
      if (!params.key) {
        return Demandbase.Utilities.Logging.log("IP API query cancelled - check auth key.");
      }
      Demandbase.Utilities.insertScript(Demandbase.Utilities.Api.buildApiUrl(this.API_ENDPOINT, params), "db_ip_api");
    };
    IpApiModule.prototype.getOnce = function() {
      if (this.isCalled) {
        Demandbase.Utilities.Logging.log("IP API call halted. Already called.");
        return;
      }
      this.isCalled = true;
      this.get();
    };
    IpApiModule.prototype.fetchIpAddress = function() {
      if (this.configuration.testModeEnabled) {
        return this.configuration.testModeValue;
      }
      if (typeof Demandbase.ExtendedCompanyTargeting !== "undefined" && Demandbase.ExtendedCompanyTargeting.isEnabled() && Demandbase.ExtendedCompanyTargeting.values.ip) {
        return Demandbase.ExtendedCompanyTargeting.values.ip;
      }
      return undefined;
    };
    IpApiModule.prototype.responseHandler = function(request) {
      if (request.readyState !== 4 || request.status !== 200) {
        return;
      }
      var responseData = JSON.parse(request.responseText);
      this.CompanyProfile = Demandbase.Utilities.flatten(responseData);
      Demandbase.Utilities.Callbacks.callback(this.CompanyProfile);
    };
    return IpApiModule;
  }(Demandbase.BaseModule);
  Demandbase.IpApiModule = IpApiModule;
})(Demandbase || (Demandbase = {}));

var Demandbase;

(function(Demandbase) {
  var Domain = function() {
    function Domain() {}
    Domain._callback = function(data) {
      if (!data.domain && !data.person) {
        Demandbase.Utilities.Logging.log("Demandbase.Domain: No company profile available for domain: " + this.getDomain());
        return;
      }
      data = data.domain || data.person;
      var flatData = Demandbase.Utilities.flatten(data);
      this.CompanyProfile = data;
    };
    Domain.load = function() {
      if (typeof Demandbase.Config.getDomain === "function" && this.key !== undefined) {
        var queryDomain = "";
        var params = {};
        if (this.useTestValue) {
          queryDomain = this.testValue;
        } else {
          queryDomain = this.getDomain();
        }
        params = {
          key: this.key,
          callback: "Demandbase.Domain._callback",
          query: queryDomain
        };
        Demandbase.Utilities.Logging.log("Calling Domain API...");
        Demandbase.Utilities.insertScript(Demandbase.Utilities.Api.buildApiUrl(Demandbase.Utilities.Constants.URL_DOMAIN_API, params), "db_domain_api");
      } else {
        Demandbase.Utilities.Logging.log("Domain API query cancelled - check auth key or Config.getDomain");
      }
    };
    Domain.getDomain = function() {
      if (this.useTestValue) {
        return this.testValue;
      } else if (typeof Demandbase.Config.getDomain === "function") {
        return Demandbase.Config.getDomain.call(Demandbase.Config);
      } else {
        Demandbase.Utilities.Logging.log("Warning: Config.getDomain fcn not defined.");
        return "getDomain function is not defined";
      }
    };
    Domain.key = Demandbase.Utilities.dig(Demandbase, "Config", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "analytics", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "ads", "key") || Demandbase.Utilities.dig(Demandbase, "Config", "forms", "key") || "ERR_NO_AUTH_KEY";
    Domain.CompanyProfile = null;
    Domain.useTestValue = Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_USE_TEST_DOMAIN) === "true" || Demandbase.Config.useTestDomain || false;
    Domain.testValue = Demandbase.Utilities.getQueryParam(Demandbase.Utilities.Constants.QS_QUERY_DOMAIN) || Demandbase.Config.testDomain || "No Test Domain Set";
    return Domain;
  }();
  Demandbase.Domain = Domain;
})(Demandbase || (Demandbase = {}));

if (typeof window.__db === "undefined") {
  var __db = {
    segments: null,
    conditions: null
  };
}

window.Demandbase.DBCondition = function(name, attrVal, op, val, attrName) {
  this.name = name;
  this.attributeValue = attrVal;
  this.operator = op;
  this.value = val;
  this.attributeName = attrName;
  this._checkValue = function(chkVal) {
    switch (op) {
     case "equals":
      return this.attributeValue == chkVal;

     case "not equals":
      return this.attributeValue !== chkVal;

     case "contains":
      return this.attributeValue.indexOf(chkVal) !== -1;

     default:
      return false;
    }
  };
  this.evaluate = function() {
    op = this.operator.toLowerCase();
    op = window.Demandbase.DBCondition.prototype.supportedOperators[op];
    if (typeof this.value === "object") {
      for (var eachVal in this.value) {
        if (this._checkValue(this.value[eachVal]) === true) {
          return true;
        }
      }
      return false;
    } else {
      return this._checkValue(this.value);
    }
  };
};

window.Demandbase.DBCondition.prototype.name = "DBCondition";

window.Demandbase.DBCondition.prototype.supportedOperators = {
  "=": "equals",
  "==": "equals",
  equal: "equals",
  equals: "equals",
  "!=": "not equals",
  "!==": "not equals",
  "not equal": "not equals",
  "not equals": "not equals",
  contains: "contains",
  contain: "contains"
};

window.Demandbase.DBConditionBuilder = {
  isValid: function(condition) {
    var reqdPropsList = [ "name", "attributeValue", "operator", "value", "attributeName" ];
    for (var i = 0; i < reqdPropsList.length; i++) {
      if (typeof condition[reqdPropsList[i]] === "undefined") {
        return false;
      } else {}
    }
    return true;
  },
  build: function(condition, data) {
    if (typeof condition.constructor.prototype.name !== "undefined" && condition.constructor.prototype.name === "DBCondition") {
      return condition;
    }
    if (!condition.attributeName) condition.attributeName = condition.attribute || "NO_ATTR_SET";
    condition.attributeValue = data[condition.attribute] || "";
    if (!this.isValid(condition)) return null;
    var name = condition["name"], apiValue = condition["attributeValue"], op = condition["operator"], val = condition["value"], apiName = condition["attributeName"];
    var condObj = new window.Demandbase.DBCondition(name, apiValue, op, val, apiName);
    return condObj;
  }
};

var DBSegment = function(n, c) {
  this.name = n;
  this.rules = [];
  this.operator = "";
  this.addCondition = function(c) {
    if (!c || !c.evaluate) {
      if (typeof c.constructor.prototype.name === "undefined" || c.constructor.prototype.name !== "DBCondition") {
        var c = window.Demandbase.DBConditionBuilder.build(c, window.Demandbase.Segments.CompanyProfile);
        if (!c) {
          throw new Error("Invalid Condition: " + c.name);
        } else {
          Demandbase.Utilities.Logging.log("DBSegmentBuilder converted condition successfully...");
        }
      }
    }
    this.rules.push(c);
    var op = this.operator || DBSegment.prototype.supportedOperators["any"];
    switch (op) {
     case "and":
      return this.value = this.value && c.evaluate();

     case "or":
      return this.value = this.value || c.evaluate();

     default:
      return c.evaluate();
    }
  };
  this.value = this.addCondition(c);
};

DBSegment.prototype.name = "DBSegment";

DBSegment.prototype.supportedOperators = {
  "&&": "and",
  "&": "and",
  and: "and",
  "||": "or",
  "|": "or",
  or: "or",
  any: "or",
  all: "and"
};

window.Demandbase.DBSegmentBuilder = {
  isValid: function(segment) {
    var reqdPropsList = [ "name", "operator", "rules" ];
    for (var i = 0; i < reqdPropsList.length; i++) {
      if (typeof segment[reqdPropsList[i]] === "undefined") {
        return false;
      } else {}
    }
    if (segment.rules.constructor.name !== "Array") return false;
    return true;
  },
  build: function(segment) {
    if (!this.isValid(segment)) {
      return null;
    }
    var segmentObj, name = segment["name"], condition = segment["rules"][0], op = segment["operator"];
    if (condition) {
      segmentObj = new DBSegment(name, condition);
      segmentObj.operator = DBSegment.prototype.supportedOperators[op] || DBSegment.prototype.supportedOperators["any"];
      if (segment["rules"].length > 1) {
        for (var i = 1; i < segment["rules"].length; i = i + 1) {
          var condition = segment["rules"][i];
          if (typeof condition.constructor.prototype.name === "undefined" || condition.constructor.prototype.name !== "DBCondition") {
            var dbCond = window.Demandbase.DBConditionBuilder.build(condition, undefined);
            if (dbCond) condition = dbCond;
          }
          segmentObj.addCondition(condition);
        }
      }
      return segmentObj;
    }
  }
};

window.Demandbase.Segments = window.Demandbase.Segments || {
  name: "Demandbase Segments",
  CompanyProfile: null,
  AccountWatchVisitor: false,
  IsCompany: false,
  version: "1.2.2",
  _debug: false,
  _allConditions: [],
  _allSegments: [],
  _isInitialized: false,
  _setup: function() {
    if (this._isInitialized) {
      this._reset();
    }
    if (!this.CompanyProfile && (window.Demandbase.IP || window.Demandbase.Domain)) {
      this.CompanyProfile = window.Demandbase.IP.CompanyProfile || window.Demandbase.Domain.CompanyProfile || {};
    }
    if (this.CompanyProfile.information_level === "Detailed") {
      this.IsCompany = true;
    }
    for (var eachAttr in this.CompanyProfile) {
      if (this.CompanyProfile.hasOwnProperty(eachAttr)) {
        if (eachAttr.indexOf("watch_list_") === 0) {
          this.AccountWatchVisitor = true;
        }
      }
    }
    for (var eachCond in this._allConditions) {
      if (this._allConditions.hasOwnProperty(eachCond) && this._allConditions[eachCond] && (typeof this._allConditions[eachCond].constructor.prototype.name === "undefined" || this._allConditions[eachCond].constructor.prototype.name !== "DBCondition")) {
        this.add("condition", this._allConditions[eachCond]);
      }
    }
    for (var eachSegment in this._allSegments) {
      if (this._allSegments.hasOwnProperty(eachSegment) && this._allSegments[eachSegment].name && (typeof this._allSegments[eachSegment].constructor.prototype.name === "undefined" || this._allSegments[eachSegment].constructor.prototype.name !== "DBSegment")) {
        this.add("segment", this._allSegments[eachSegment]);
      }
    }
  },
  _reset: function() {
    this._allConditions = Demandbase.Config.conditions || __db.conditions || [];
    this._allSegments = Demandbase.Config.segments || __db.segments || [];
  },
  load: function() {
    Demandbase.Utilities.Callbacks.registerCallback(this.init.bind(this));
  },
  init: function(data) {
    window.Demandbase.Segments._debug = Demandbase.Utilities.Logging.debug || false;
    window.Demandbase.Segments._allConditions = Demandbase.Config.conditions || __db.conditions || [];
    window.Demandbase.Segments._allSegments = Demandbase.Config.segments || __db.segments || [];
    var dbs = window.Demandbase.Segments;
    dbs.CompanyProfile = data;
    dbs._setup();
    dbs._isInitialized = true;
  },
  getActiveSegments: function() {
    var segList = [];
    for (var eachSegment in this._allSegments) {
      if (this._allSegments.hasOwnProperty(eachSegment)) {
        if (this._allSegments[eachSegment].value) {
          segList.push(this._allSegments[eachSegment]);
        }
      }
    }
    return segList;
  },
  getInactiveSegments: function() {
    var segList = [];
    for (var eachSegment in this._allSegments) {
      if (this._allSegments.hasOwnProperty(eachSegment)) {
        if (!this._allSegments[eachSegment].value) {
          segList.push(this._allSegments[eachSegment]);
        }
      }
    }
    return segList;
  },
  add: function(type, newObject) {
    if (!type || !newObject || newObject == {}) {
      Demandbase.Utilities.Logging.log("Demandbase.Segments.add operation failed due to invalid/empty parameters.");
      return null;
    }
    if (type === "condition") {
      var newCondObj, condPos = this._allConditions.length;
      for (var eachCond = 0; eachCond < this._allConditions.length; eachCond++) {
        if (this._allConditions[eachCond].name === newObject.name) {
          condPos = eachCond;
          break;
        }
      }
      newCondObj = window.Demandbase.DBConditionBuilder.build(newObject, this.CompanyProfile);
      if (newCondObj) {
        this._allConditions[condPos] = newCondObj;
      } else {
        Demandbase.Utilities.Logging.log("Invalid Condition (not created) from: " + JSON.stringify(newObject));
      }
      if (typeof newObject.standalone === "undefined" || newObject.standalone !== false) {
        var condName = newObject.name;
        this.add("segment", {
          name: condName,
          rules: [ condName ],
          operator: DBSegment.prototype.supportedOperators.any
        });
      }
    } else if (type === "segment") {
      if (this.isValid(newObject) !== "segment") {
        return null;
      }
      var newSegName = newObject["name"], newSegmentObj, condObj, segPos = this._allSegments.length, segArr = newObject.rules || [];
      for (var eachSeg = 0; eachSeg < this._allSegments.length; eachSeg++) {
        if (this._allSegments[eachSeg].name === newObject.name) {
          segPos = eachSeg;
          break;
        }
      }
      for (var eachItem = 0; eachItem < segArr.length; eachItem++) {
        var segItem = segArr[eachItem];
        if (DBSegment.prototype.supportedOperators[segItem]) continue;
        if (!DBSegment.prototype.supportedOperators[segItem]) {
          condObj = this.get("condition", segItem);
        }
        if (condObj) {
          segArr[eachItem] = condObj;
        } else {
          Demandbase.Utilities.Logging.log("Segment: " + newObject + " uses a Condition (" + segArr[eachItem] + ") that is not defined.");
        }
      }
      newObject.rules = segArr;
      newSegmentObj = window.Demandbase.DBSegmentBuilder.build(newObject);
      if (newSegmentObj) {
        this._allSegments[segPos] = newSegmentObj;
        if (this.hasOwnProperty(newSegmentObj.name)) {
          this[newSegmentObj.name] = newSegmentObj;
        } else {
          try {
            Object.defineProperty(this, newSegmentObj.name, {
              value: newSegmentObj.value,
              writable: true
            });
          } catch (error) {
            window.Demandbase.Segments[newSegmentObj.name] = newSegmentObj.value;
          }
        }
      } else {
        Demandbase.Utilities.Logging.log("Invalid Segment (not created) from: " + JSON.stringify(newObject));
      }
    } else {
      Demandbase.Utilities.Logging.log('Invalid "type" parameter (' + type + ') passed to "add" function.  Must be "segment" or "condition".');
    }
  },
  get: function(type, itemName) {
    var itList = [];
    if (arguments.length === 1) itemName = type;
    if (type === "condition") {
      if (typeof itemName.constructor.prototype.name !== "undefined" && itemName.constructor.prototype.name === "DBCondition") {
        return itemName;
      }
      itList = this._allConditions;
    } else {
      if (typeof itemName.constructor.prototype.name !== "undefined" && itemName.constructor.prototype.name === "DBSegment") {
        return itemName;
      }
      itList = this._allSegments;
    }
    for (var eachCond in itList) {
      if (this._allConditions[eachCond].name === itemName) {
        return this._allConditions[eachCond];
      }
    }
    if (!DBSegment.prototype.supportedOperators[itemName]) {
      Demandbase.Utilities.Logging.log('No item with type: "' + type + '" found with name: ' + itemName);
    }
    return null;
  },
  isValid: function(objToCheck) {
    var result;
    var retCondition = "condition";
    var retSegment = "segment";
    var segProps = [ "name", "rules" ];
    var condProps = [ "name", "attribute", "operator", "value" ];
    if (!objToCheck) return false;
    if (typeof objToCheck.constructor.prototype.name !== "undefined" && objToCheck.constructor.prototype.name === "DBSegment") return retSegment;
    if (typeof objToCheck.constructor.prototype.name !== "undefined" && objToCheck.constructor.prototype.name === "DBCondition") return retCondition;
    try {
      if (objToCheck.hasOwnProperty("name") && objToCheck.hasOwnProperty("rules")) {
        if (typeof objToCheck.rules === "object") {
          return retSegment;
        }
      } else {
        for (var prop in segProps) {
          if (!objToCheck.hasOwnProperty(segProps[prop])) {
            Demandbase.Utilities.Logging.log('Invalid DBSegment definition.  Missing property:"' + segProps[prop] + '"');
            return false;
          }
        }
      }
      if (result) return result;
      for (var prop in condProps) {
        if (objToCheck.hasOwnProperty(condProps[prop])) {
          result = retCondition;
        } else {
          Demandbase.Utilities.Logging.log('Invalid DBCondition definition.  Missing property:"' + condProps[prop] + '"');
          return false;
        }
      }
      return result;
    } catch (error) {
      Demandbase.ErrorReporter.send(error);
      return false;
    }
  }
};

var Demandbase;

(function(Demandbase) {
  function initialize() {
    if (Demandbase.Config.isInIFrame == null) {
      Demandbase.Config.isInIFrame = Demandbase.Utilities.detectIFrame();
    }
    Demandbase.Utilities.DataStorage.initialize();
    Demandbase.AssetReporter = new Demandbase.AssetReporterModule();
    if (Demandbase.AssetReporter.isEnabled()) {
      Demandbase.AssetReporter.initialize();
    }
    Demandbase.Advertising = new Demandbase.AdvertisingModule();
    Demandbase.Ads = Demandbase.Advertising;
    if (Demandbase.Advertising.isEnabled()) {
      Demandbase.IpApiReportingOnly = new Demandbase.IpApiModule();
      Demandbase.Advertising.initialize();
    }
    Demandbase.IpApi = new Demandbase.IpApiModule();
    Demandbase.IP = Demandbase.IpApi;
    window.Demandbase.Segments.load();
    if (Demandbase.Config.callback) {
      Demandbase.Utilities.Callbacks.registerCallback(Demandbase.Config.callback);
    }
    Demandbase.FormsLoader = new Demandbase.FormsLoaderModule();
    if (Demandbase.FormsLoader.isEnabled()) {
      Demandbase.FormsLoader.initialize();
      window.Demandbase.utils.loadFormModule = Demandbase.FormsLoader.load.bind(Demandbase.FormsLoader);
      window.Demandbase.utils.isFormPage = Demandbase.FormsLoader.isFormPage.bind(Demandbase.FormsLoader);
    }
    Demandbase.SiteOptimizationLoader = new Demandbase.SiteOptimizationLoaderModule();
    if (Demandbase.SiteOptimizationLoader.isEnabled()) {
      Demandbase.SiteOptimizationLoader.initialize();
    }
    Demandbase.Connectors.Google_Analytics = new Demandbase.Google_AnalyticsModule();
    if (Demandbase.Connectors.Google_Analytics.isEnabled()) {
      Demandbase.Connectors.Google_Analytics.initialize();
    }
    Demandbase.Connectors.Google_TagManager = new Demandbase.Google_TagManagerModule();
    if (Demandbase.Connectors.Google_TagManager.isEnabled()) {
      Demandbase.Connectors.Google_TagManager.initialize();
    }
    Demandbase.ExtendedCompanyTargeting = new Demandbase.ExtendedCompanyTargetingModule();
    window.Demandbase.utils.ect = Demandbase.ExtendedCompanyTargeting;
    window.Demandbase.utils.ect.initialize();
    setTimeout(function() {
      Demandbase.IpApi.getOnce();
    }, Demandbase.Config.ectTimeout || 200);
    Demandbase.Content = new Demandbase.ContentModule();
    if (Demandbase.Content.isEnabled()) {
      Demandbase.Content.initialize();
    }
    if (typeof Demandbase.Config.getDomain === "function") {
      var domain = Demandbase.Config.getDomain();
      if (domain) {
        Demandbase.Domain.load();
      }
    }
    Demandbase._isInitialized = true;
    if (typeof Demandbase.Config.onLoad === "function") {
      Demandbase.Config.onLoad.call(Demandbase);
    }
  }
  Demandbase.initialize = initialize;
})(Demandbase || (Demandbase = {}));

/*! */window.Demandbase.Config = {
    "clientId": "61seJu4w",
    "key": "f783f64236befdcd4bfcb92c1d6e219a",
    "enableTestMode": true,
    "disableEctModule": false,

    "ads": { 
        "pixels": { 
        "ad": "1447180749", 
        "rt": "1447180818", 
        "cn": null 
        }
    },
    "analytics": { 
        "key": "f783f64236befdcd4bfcb92c1d6e219a",        
        "fieldMap": {
            3:"demandbase_sid",
            4:"audience",
            5:"audience_segment",
            6:"company_name",
            7:"industry",
            8:"sub_industry",
            9:"revenue_range",
            10:"employee_range",
            11:"watch_list_account_type",
            12:"watch_list_account_status",
            13:"city"
        }
    },
    "isFormPage" : function() {
        //append Not Applicable to state input element
        if(window.jQuery){
            window.jQuery('<input>').attr({
                type: 'hidden',
                id: 'company_hidden',
                name: 'company_hidden'
            }).appendTo('form');
            window.jQuery("#stateProv").append("<option value=\"Not Applicable\">Not Applicable</option>");
        }
        return window.Demandbase.utils.isFormPage();
    },
    "forms": {
        //priority is set to Domain, Company, IP
        "priorityMap" : {
          "domain": 3, 
          "ip": 1, 
          "company": 2
            
        },
        "prevPriority" : 0,
        //Client wants registry state and country mapped
        "filterIsp" : false,
        //only enable the autocomplete widget if country as determined by IP is US
        "companyID": "company_hidden", 
        "emailID": "email",
        "fieldMap" : {
            //pulling from HQ data set for all relevant fields
            "ip" : "ip_address",
            "hq_country_name" : "country",
            "hq_state" : "stateProv",
            
            //all other input fields have default naming convention
            "hq_city":"db_city",
            "hq_zip":"db_zip",
            "hq_street_address":"db_street_address",
            "hq_latitude":"db_latitude",
            "hq_longitude":"db_longitude",
            "hq_company_name": "db_company_name",
            "hq_demandbase_sid": "db_demandbase_sid",
            "hq_marketing_alias": "db_marketing_alias",
            "hq_industry": "db_industry",
            "hq_sub_industry": "db_sub_industry",
            "hq_primary_sic": "db_primary_sic",
            "hq_employee_count": "db_employee_count",
            "hq_revenue_range": "db_revenue_range",
            "hq_employee_range": "db_employee_range",
            "hq_country": "db_country",
            "hq_phone": "db_phone",
            "hq_annual_sales": "db_annual_sales",
            "hq_fortune_1000": "db_fortune_1000",
            "hq_forbes_2000": "db_forbes_2000",
            "hq_b2b": "db_b2b",
            "hq_b2c": "db_b2c",
            "hq_web_site": "db_web_site",
            "hq_stock_ticker": "db_stock_ticker",
            "hq_traffic": "db_traffic",
            "registry_state": "db_registry_state",
            "registry_country": "db_registry_country"
        },
        "toggleFieldList" : [
            // "stateProv"
        ],

        "getToggleElement": function(id){
            return this.djq("#"+id).parents(".field-wrapper");
        },
        "getToggleFieldValue": function(id){
            return this.djq("#"+id).val();
        },
        "hooks": {
            after_parse: function(data, source) {
                if(window.jQuery){
                    var dbf = window.Demandbase.Connectors.WebForm;
                    var dbc = window.Demandbase.Config.forms;

                    if(dbf.priorityMap[source] >= dbc.prevPriority){
                        if(data.isp || !data.country){
                            //if it is an ip response, and it is non-company
                            //map registry data to state and country.
                            window.jQuery("#country").val(data.registry_country).change();
                            window.jQuery("#stateProv").val(data.registry_state).change();
                            
                            //also map registry country, state, and country_name to hidden fields
                            window.jQuery("#db_country").val(data.registry_country_code);
                            window.jQuery("#db_state").val(data.registry_state);
                            window.jQuery("#db_country_name").val(data.registry_country);
                            window.jQuery("#db_latitude").val(data.registry_latitude);
                            window.jQuery("#db_longitude").val(data.registry_longitude);
                        }else{
                            //also map country, state, and country_name to hidden fields                            
                            window.jQuery("#db_country").val(data.country);
                            window.jQuery("#db_state").val(data.state);
                            window.jQuery("#db_country_name").val(data.country_name);                            
                        }
                        dbc.prevPriority = dbf.priorityMap[source];
                    }
                }
                // if state not determined, choose Not Applicable 
                if(window.jQuery("#stateProv").val() ==="" || !(window.jQuery("#stateProv").val())){
                    window.jQuery("#stateProv").val("Not Applicable").change();
                    window.jQuery("#db_state").val("Not Applicable");                    
                }
            }
        }
    },
    "callback": function(data){
        if(window.Demandbase.Config.runPersonalization){
            window.Demandbase.Segments.load();
            window.Demandbase.Config.runPersonalization.call(window.Demandbase, data);            
        }
        //console.log("industry: " + window.Demandbase.IP.CompanyProfile.industry);
        //console.log("sub_industry: " + window.Demandbase.IP.CompanyProfile.sub_industry);

        //use IP response callback to enable auto-complete widget for us or united states only 
        if(window.Demandbase && window.Demandbase.Config && window.Demandbase.Config.forms) {
        	var data_country = data.country || data.registry_country_code || "";
            var data_country_name = data.country_name || data.registry_country || "";
        	if(data_country && (data_country.trim().toLowerCase() === "us" || data_country_name.trim().toLowerCase() === "united states")) {
        		window.Demandbase.Config.forms.companyID = "company";
        	    window.Demandbase.Config.forms.toggleFieldList.push("country");
        	} else {
        	    if(window.jQuery) {
        	        window.jQuery("#country").parents(".field-wrapper").css("display", "block");   
        	    }
        	}
        }
    },
    "conditions": [],
    "segments": [],
    "content": []
};


/* !*/
Demandbase.ErrorReporter = new Demandbase.ErrorReporterModule();

Demandbase.ErrorReporter.initialize();

Demandbase.ErrorReporter.wrap(Demandbase.initialize.bind(Demandbase))();