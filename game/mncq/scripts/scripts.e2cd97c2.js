(function () {
    "use strict";
    angular.module("swarmApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "swarmEnv", "swarmSpreadsheetPreload", "angulartics", "angulartics.google.analytics", "googlechart", "cfp.hotkeys"]), angular.module("swarmApp").config(["$locationProvider", function (a) {
        return a.hashPrefix("")
    }]), angular.module("swarmApp").config(["$routeProvider", "env", function (a, b) {
        return b.isOffline ? a.when("/debug", {
            templateUrl: "views/debug.html",
            controller: "DebugCtrl"
        }).when("/changelog", {
            templateUrl: "views/changelog.html",
            controller: "ChangelogCtrl"
        }).when("/contact", {
            templateUrl: "views/contact.html",
            controller: "ContactCtrl"
        }).when("/cleartheme", {
            templateUrl: "views/cleartheme.html",
            controller: "ClearthemeCtrl"
        }).when("/importsplash", {
            templateUrl: "views/importsplash.html",
            controller: "ImportsplashCtrl"
        }).otherwise({
            redirectTo: "/"
        }) : a.when("/debug", {
            templateUrl: "views/debug.html",
            controller: "DebugCtrl"
        }).when("/options", {
            templateUrl: "views/options.html",
            controller: "OptionsCtrl"
        }).when("/changelog", {
            templateUrl: "views/changelog.html",
            controller: "ChangelogCtrl"
        }).when("/statistics", {
            templateUrl: "views/statistics.html",
            controller: "StatisticsCtrl"
        }).when("/achievements", {
            templateUrl: "views/achievements.html",
            controller: "AchievementsCtrl"
        }).when("/", {
            templateUrl: "views/main.html",
            controller: "MainCtrl"
        }).when("/tab/:tab/unit/:unit", {
            templateUrl: "views/unit.html",
            controller: "MainCtrl"
        }).when("/unit/:unit", {
            templateUrl: "views/unit.html",
            controller: "MainCtrl"
        }).when("/tab/:tab", {
            templateUrl: "views/main.html",
            controller: "MainCtrl"
        }).when("/contact", {
            templateUrl: "views/contact.html",
            controller: "ContactCtrl"
        }).when("/cleartheme", {
            templateUrl: "views/cleartheme.html",
            controller: "ClearthemeCtrl"
        }).when("/login", b.isServerFrontendEnabled ? {
            templateUrl: "views/login.html",
            controller: "LoginCtrl"
        } : {
            redirectTo: "/"
        }).when("/debug/api", b.isServerBackendEnabled ? {
            templateUrl: "views/debugapi.html",
            controller: "DebugApiCtrl"
        } : {
            redirectTo: "/"
        }).when("/decimallegend", {
            templateUrl: "views/decimallegend.html",
            controller: "DecimallegendCtrl"
        }).otherwise({
            redirectTo: "/"
        })
    }]), angular.module("swarmApp").config(["env", "$logProvider", function (a, b) {
        return b.debugEnabled(a.isDebugLogged)
    }]), angular.module("swarmApp").run(["env", "$location", "$log", function (a, b, c) {
        var d, e, f, g;
        if (e = {
                0: !1,
                "": !1,
                false: !1
            }, d = null != (f = b.search().allowinsecure) ? f : a.httpsAllowInsecure, d = null == (g = e[d]) || g, c.debug("protocol check", d, b.protocol()), "http" === b.protocol() && !d) return window.location.protocol = "https", c.debug("window.location.protocol = 'https:'")
    }]), angular.module("swarmApp").run(["$location", "isKongregate", function (a, b) {
        if (!("swarmsim.com" !== window.location.host && "www.swarmsim.com" !== window.location.host || a.search().noredirect || b())) return window.location.host = "swarmsim.github.io"
    }]), angular.module("swarmApp").config(["env", "version", function (a, b) {
        var c, d, e;
        if (a.gaTrackingID && null != window.ga && !a.isOffline) {
            window.ga("create", a.gaTrackingID, "auto");
            try {
                if (window.parent !== window && null != (c = "undefined" != typeof window && null !== window && null != (d = window.parent) && null != (e = d.document) ? e.referrer : void 0)) return window.ga("set", "referrer", c)
            } catch (a) {
                a
            }
        }
    }]), angular.module("swarmApp").run(["$rootScope", function (a) {
        return a.floor = function (a) {
            return Math.floor(a)
        }
    }]), angular.module("swarmApp").run(["$rootScope", function (a) {
        if (window.module && window.module.exports && !window.Decimal && window.module.exports.random) return window.Decimal = window.module.exports, delete window.module.exports
    }]), angular.module("swarmApp").value("UNIT_LIMIT", "1e100000"), angular.module("swarmApp").run(["hotkeys", "$location", function (a, b) {
        var c, d, e, f, g, h, i, j;
        for (g = [
                ["m", "/tab/meat", "Open the meat tab"],
                ["l", "/tab/larva", "Open the larva tab"],
                ["t", "/tab/territory", "Open the territory tab"],
                ["e", "/tab/energy", "Open the energy tab"],
                ["u", "/tab/mutagen", "Open the mutagen tab"],
                ["a", "/tab/all", "Open the all-units tab"],
                ["o", "/options", "Open the options screen"],
                ["y", "/achievements", "Open the achievements screen"],
                ["shift+y", "/statistics", "Open the statistics screen"],
                ["n", "/changelog", "Open the patch notes screen"]
            ], j = [], e = 0, f = g.length; e < f; e++) i = g[e], c = i[0], h = i[1], d = i[2], j.push(function (c, d, e) {
            return a.add({
                combo: c,
                description: e,
                callback: function () {
                    return b.path(d)
                }
            })
        }(c, h, d));
        return j
    }]), angular.module("swarmApp").run(["hotkeys", "$rootScope", function (a, b) {
        var c;
        return c = function (a) {
            return a = a.split(""), a.reverse(), a.join("")
        }, a.add({
            combo: c("l e u q e s"),
            callback: function () {
                return b.$emit(c("noitseuqthgireht"))
            }
        })
    }]), angular.module("swarmApp").run(function () {
        return $(document).on("mousedown", ".dropdown-toggle", function () {
            return $(this).dropdown();
        })
    })
}).call(this), angular.module("swarmEnv", []).constant("version", "1.1.6").constant("env", {
    name: "prod",
    isDebugEnabled: !1,
    isDebugLogged: !1,
    httpsAllowInsecure: !1,
    showSkipped: !1,
    spreadsheetKey: "v0.2",
    saveId: "v0.2",
    dropboxAppKey: "n2mff9wz6bv0f91",
    isDropboxEnabled: !0,
    saveServerUrl: "https://api.swarmsim.com",
    isKongregateSyncEnabled: !0,
    autopushIntervalMs: 9e5,
    googleApiKey: "AIzaSyCS8nqXFvhdr0AR-ox-9n_wKP2std_fHHs",
    playfabTitleId: "7487",
    isAppcacheEnabled: !1,
    sentryDSN: "https://5b47c35e40a34619954d42f17712eb5f@app.getsentry.com/39331",
    sentrySampleRate: .001,
    isServerBackendEnabled: !1,
    isServerFrontendEnabled: !1,
    isPaypalSandbox: !1,
    gaTrackingID: "UA-53523462-1"
});
try {
    angular.module("swarmSpreadsheetPreload")
} catch (a) {
    angular.module("swarmSpreadsheetPreload", [])
}
angular.module("swarmSpreadsheetPreload").value("spreadsheetPreload-v0.2", {
        achievements: {
            column_names: ["name", "label", "description", "longdesc", "requires.event", "requires.unittype", "requires.upgradetype", "requires.val", "points", "visible.unittype", "visible.upgradetype", "visible.val"],
            elements: [{
                description: "完成本教程",
                label: "教程完成",
                longdesc: "",
                name: "tutorial",
                points: 50,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 5,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "完成你的第一次扩张",
                label: "两个基本游戏",
                longdesc: "",
                name: "expansion1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 1,
                "visible.unittype": "territory",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "广阔的领域",
                longdesc: "",
                name: "expansion2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 20,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 1
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "侵扰",
                longdesc: "",
                name: "expansion3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 50,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 5
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "毛骨悚然",
                longdesc: "",
                name: "expansion4",
                points: 40,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 100,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 20
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "没有空位",
                longdesc: "",
                name: "expansion5",
                points: 50,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 200,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 50
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "收益递减",
                longdesc: "",
                name: "expansion6",
                points: 60,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 500,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 100
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "we have become as a vapor",
                longdesc: "",
                name: "expansion7",
                points: 70,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 1e3,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 200
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "帝国理念",
                longdesc: "",
                name: "expansion8",
                points: 80,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 2e3,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 500
            }, {
                description: "完成 $REQUIRED 次扩张",
                label: "天定命运",
                longdesc: "",
                name: "expansion9",
                points: 90,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "expansion",
                "requires.val": 5e3,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 1e3
            }, {
                description: "孵化你的第一个雄蜂",
                label: "a good start",
                longdesc: "",
                name: "drone1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "drone",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 雄蜂。",
                label: "supply limit exceeded",
                longdesc: "Drones hatched by queens don't count.",
                name: "drone2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "drone",
                "requires.upgradetype": "",
                "requires.val": 201,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 雄蜂",
                label: '“指数”增长',
                longdesc: "由蜂后孵化的雄蜂不算在内。",
                name: "drone3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "drone",
                "requires.upgradetype": "",
                "requires.val": 1e4,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化你的第一个蜂后",
                label: "queen me",
                longdesc: "",
                name: "queen1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 蜂后",
                label: "这是真实的生活吗?",
                longdesc: "由蜂巢孵化的蜂后不算在内。",
                name: "queen2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 1e3,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 蜂后",
                label: "现在不要阻止我。",
                longdesc: "由蜂巢孵化的蜂后不算在内。",
                name: "queen3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "建造你的第一个蜂巢",
                label: "我想成为最好的蜂巢",
                longdesc: "",
                name: "nest1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "nest",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "queen",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "建造 $REQUIRED nests",
                label: "孵化他们是我真正的考验",
                longdesc: "",
                name: "nest2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "nest",
                "requires.upgradetype": "",
                "requires.val": 1e4,
                "visible.unittype": "nest",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "建造 $REQUIRED nests",
                label: "final nesting place",
                longdesc: "",
                name: "nest3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "nest",
                "requires.upgradetype": "",
                "requires.val": 1e8,
                "visible.unittype": "nest",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化你的第一个greater queen",
                label: "some are born great",
                longdesc: "",
                name: "greaterqueen1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "greaterqueen",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "nest",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "孵化 $REQUIRED greater queens",
                label: "catherine",
                longdesc: "",
                name: "greaterqueen2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "greaterqueen",
                "requires.upgradetype": "",
                "requires.val": 1e5,
                "visible.unittype": "greaterqueen",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED greater queens",
                label: "greater and greater",
                longdesc: "",
                name: "greaterqueen3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "greaterqueen",
                "requires.upgradetype": "",
                "requires.val": 1e10,
                "visible.unittype": "greaterqueen",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "建造你的第一个hive",
                label: "we'll do it hive",
                longdesc: "",
                name: "hive1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "hive",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "greaterqueen",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "建造 $REQUIRED hives",
                label: "breaking out",
                longdesc: "",
                name: "hive2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "hive",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "hive",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "建造 $REQUIRED hives",
                label: "蜂房思维",
                longdesc: "",
                name: "hive3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "hive",
                "requires.upgradetype": "",
                "requires.val": 1e12,
                "visible.unittype": "hive",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化你的第一个hive queen",
                label: "too many kinds of queens",
                longdesc: "",
                name: "hivequeen1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "hivequeen",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "hive",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "孵化 $REQUIRED hive queens",
                label: "or just too many queens",
                longdesc: "",
                name: "hivequeen2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "hivequeen",
                "requires.upgradetype": "",
                "requires.val": 1e7,
                "visible.unittype": "hivequeen",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED hive queens",
                label: "no more queens, honest",
                longdesc: "",
                name: "hivequeen3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "hivequeen",
                "requires.upgradetype": "",
                "requires.val": 1e14,
                "visible.unittype": "hivequeen",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个蜂房女王",
                label: "queen of queens",
                longdesc: "",
                name: "empress1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "empress",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "hivequeen",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 蜂房女王",
                label: "wu zetian",
                longdesc: "",
                name: "empress2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "empress",
                "requires.upgradetype": "",
                "requires.val": 1e8,
                "visible.unittype": "empress",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 蜂房女王",
                label: "matriarchy",
                longdesc: "",
                name: "empress3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "empress",
                "requires.upgradetype": "",
                "requires.val": 1e16,
                "visible.unittype": "empress",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个neuroprophet",
                label: "1. collect larvae",
                longdesc: "",
                name: "prophet1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "prophet",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "empress",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED neuroprophets",
                label: "2. ?",
                longdesc: "",
                name: "prophet2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "prophet",
                "requires.upgradetype": "",
                "requires.val": 1e9,
                "visible.unittype": "prophet",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED neuroprophets",
                label: "3. prophet",
                longdesc: "",
                name: "prophet3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "prophet",
                "requires.upgradetype": "",
                "requires.val": 1e18,
                "visible.unittype": "prophet",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个hive neuron",
                label: "neurogenesis",
                longdesc: "",
                name: "goddess1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "goddess",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "prophet",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED hive neurons",
                label: "new neurons",
                longdesc: "",
                name: "goddess2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "goddess",
                "requires.upgradetype": "",
                "requires.val": 1e10,
                "visible.unittype": "goddess",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED hive neurons",
                label: "neuronerd",
                longdesc: "",
                name: "goddess3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "goddess",
                "requires.upgradetype": "",
                "requires.val": 1e20,
                "visible.unittype": "goddess",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个neural cluster",
                label: "nucleus",
                longdesc: "",
                name: "pantheon1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "pantheon",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "goddess",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED neural clusters",
                label: "ganglion",
                longdesc: "",
                name: "pantheon2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "pantheon",
                "requires.upgradetype": "",
                "requires.val": 1e11,
                "visible.unittype": "pantheon",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED neural clusters",
                label: "cluster-something",
                longdesc: "",
                name: "pantheon3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "pantheon",
                "requires.upgradetype": "",
                "requires.val": 1e22,
                "visible.unittype": "pantheon",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个hive network",
                label: "arpanet",
                longdesc: "",
                name: "pantheon21",
                points: 10,
                "requires.event": "",
                "requires.unittype": "pantheon2",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "pantheon",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED hive networks",
                label: "backpropagation",
                longdesc: "",
                name: "pantheon22",
                points: 20,
                "requires.event": "",
                "requires.unittype": "pantheon2",
                "requires.upgradetype": "",
                "requires.val": 1e12,
                "visible.unittype": "pantheon2",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED hive networks",
                label: "nydus",
                longdesc: "",
                name: "pantheon23",
                points: 30,
                "requires.event": "",
                "requires.unittype": "pantheon2",
                "requires.upgradetype": "",
                "requires.val": 1e24,
                "visible.unittype": "pantheon2",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个lesser hive mind",
                label: "do you mind?",
                longdesc: "",
                name: "pantheon31",
                points: 10,
                "requires.event": "",
                "requires.unittype": "pantheon3",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "pantheon2",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED lesser hive minds",
                label: "lesser is morer",
                longdesc: "",
                name: "pantheon32",
                points: 20,
                "requires.event": "",
                "requires.unittype": "pantheon3",
                "requires.upgradetype": "",
                "requires.val": 1e13,
                "visible.unittype": "pantheon3",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED lesser hive minds",
                label: "lord have mercy",
                longdesc: "",
                name: "pantheon33",
                points: 30,
                "requires.event": "",
                "requires.unittype": "pantheon3",
                "requires.upgradetype": "",
                "requires.val": 1e26,
                "visible.unittype": "pantheon3",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "创造你的第一个蜂房思维",
                label: "我们中的一个",
                longdesc: "",
                name: "pantheon41",
                points: 10,
                "requires.event": "",
                "requires.unittype": "pantheon4",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "pantheon3",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "创造 $REQUIRED 蜂房思维",
                label: "群体思维",
                longdesc: "",
                name: "pantheon42",
                points: 20,
                "requires.event": "",
                "requires.unittype": "pantheon4",
                "requires.upgradetype": "",
                "requires.val": 1e14,
                "visible.unittype": "pantheon4",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "创造 $REQUIRED 蜂房思维",
                label: "虫群智力",
                longdesc: "",
                name: "pantheon43",
                points: 30,
                "requires.event": "",
                "requires.unittype": "pantheon4",
                "requires.upgradetype": "",
                "requires.val": 1e28,
                "visible.unittype": "pantheon4",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "创造你的第一个拱形思维",
                label: "午前",
                longdesc: "",
                name: "pantheon51",
                points: 10,
                "requires.event": "",
                "requires.unittype": "pantheon5",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "pantheon4",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "创造 $REQUIRED 拱形思维",
                label: "射箭",
                longdesc: "",
                name: "pantheon52",
                points: 20,
                "requires.event": "",
                "requires.unittype": "pantheon5",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "pantheon5",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "创造 $REQUIRED 拱形思维",
                label: "cerebration time",
                longdesc: "",
                name: "pantheon53",
                points: 30,
                "requires.event": "",
                "requires.unittype": "pantheon5",
                "requires.upgradetype": "",
                "requires.val": 1e30,
                "visible.unittype": "pantheon5",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个主宰",
                label: "awaken, my child",
                longdesc: "",
                name: "overmind1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "pantheon5",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED overminds",
                label: "how ya like my groove?",
                longdesc: "",
                name: "overmind2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind",
                "requires.upgradetype": "",
                "requires.val": 1e16,
                "visible.unittype": "overmind",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED overminds",
                label: "well done!",
                longdesc: "",
                name: "overmind3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind",
                "requires.upgradetype": "",
                "requires.val": 1e32,
                "visible.unittype": "overmind",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个overmind II",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind2_1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind2",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "overmind",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 主宰 II",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind2_2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind2",
                "requires.upgradetype": "",
                "requires.val": 1e19,
                "visible.unittype": "overmind2",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 主宰 II",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind2_3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind2",
                "requires.upgradetype": "",
                "requires.val": 1e38,
                "visible.unittype": "overmind2",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个overmind III",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind3_1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind3",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "overmind2",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 主宰 III",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind3_2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind3",
                "requires.upgradetype": "",
                "requires.val": 1e22,
                "visible.unittype": "overmind3",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 主宰 III",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind3_3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind3",
                "requires.upgradetype": "",
                "requires.val": 1e44,
                "visible.unittype": "overmind3",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个 主宰 IV",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind4_1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind4",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "overmind3",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 主宰 IV",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind4_2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind4",
                "requires.upgradetype": "",
                "requires.val": 1e25,
                "visible.unittype": "overmind4",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 主宰 IV",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind4_3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind4",
                "requires.upgradetype": "",
                "requires.val": 1e50,
                "visible.unittype": "overmind4",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个overmind V",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind5_1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind5",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "overmind4",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 主宰 V",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind5_2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind5",
                "requires.upgradetype": "",
                "requires.val": 1e28,
                "visible.unittype": "overmind5",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 主宰 V",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind5_3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind5",
                "requires.upgradetype": "",
                "requires.val": 1e56,
                "visible.unittype": "overmind5",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得你的第一个overmind VI",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind6_1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "overmind6",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "overmind5",
                "visible.upgradetype": "",
                "visible.val": 5
            }, {
                description: "获得 $REQUIRED 主宰 VI",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind6_2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "overmind6",
                "requires.upgradetype": "",
                "requires.val": 1e31,
                "visible.unittype": "overmind6",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "获得 $REQUIRED 主宰 VI",
                label: "卓越的想法",
                longdesc: "",
                name: "overmind6_3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "overmind6",
                "requires.upgradetype": "",
                "requires.val": 1e62,
                "visible.unittype": "overmind6",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "转生1次",
                label: "不能只打败你一次",
                longdesc: "",
                name: "ascension1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 1,
                "visible.unittype": "",
                "visible.upgradetype": "expansion",
                "visible.val": 40
            }, {
                description: "转生 $REQUIRED 次",
                label: "第三次的魅力",
                longdesc: "",
                name: "ascension11",
                points: 20,
                "requires.event": "",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 3,
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "转生 $REQUIRED 次",
                label: "星际侵扰",
                longdesc: "",
                name: "ascension2",
                points: 30,
                "requires.event": "",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 5,
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "转生 $REQUIRED 次",
                label: "好极了",
                longdesc: "",
                name: "ascension21",
                points: 40,
                "requires.event": "",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 10,
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "转生 $REQUIRED 次",
                label: "享负盛名",
                longdesc: "",
                name: "ascension3",
                points: 50,
                "requires.event": "",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 20,
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "解锁你的第一个突变",
                label: "牛仔!",
                longdesc: "",
                name: "mutation1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatehidden",
                "requires.val": 1,
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "解锁 $REQUIRED 突变",
                label: "智能设计",
                longdesc: "",
                name: "mutation2",
                points: 20,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatehidden",
                "requires.val": 3,
                "visible.unittype": "",
                "visible.upgradetype": "mutatehidden",
                "visible.val": 1
            }, {
                description: "解锁 $REQUIRED 突变",
                label: "非自然选择",
                longdesc: "",
                name: "mutation3",
                points: 30,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatehidden",
                "requires.val": 6,
                "visible.unittype": "",
                "visible.upgradetype": "mutatehidden",
                "visible.val": 1
            }, {
                description: "解锁 $REQUIRED 突变",
                label: "一个浴室，呃",
                longdesc: "",
                name: "mutation4",
                points: 40,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatehidden",
                "requires.val": 10,
                "visible.unittype": "",
                "visible.upgradetype": "mutatehidden",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED 工虫",
                label: "热潮",
                longdesc: "",
                name: "swarmling1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "swarmling",
                "requires.upgradetype": "",
                "requires.val": 6,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 工虫",
                label: "代谢增强",
                longdesc: "",
                name: "swarmling2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "swarmling",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED 工虫",
                label: "肾上腺",
                longdesc: "由联系能力孵化出来的工虫不算数。",
                name: "swarmling3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "swarmling",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED stingers",
                label: "beekeeper",
                longdesc: "",
                name: "stinger1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "stinger",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED stingers",
                label: "to bee or not to bee",
                longdesc: "",
                name: "stinger2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "stinger",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED stingers",
                label: "waxing poetic",
                longdesc: "Stingers hatched by nexus abilities don't count.",
                name: "stinger3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "stinger",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "孵化 $REQUIRED arachnomorphs",
                label: "with great power",
                longdesc: "",
                name: "spider1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "spider",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "spider",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED arachnomorphs",
                label: "the amazing spider",
                longdesc: "",
                name: "spider2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "spider",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "spider",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED arachnomorphs",
                label: "how do i shot web",
                longdesc: "Arachnomorphs hatched by nexus abilities don't count.",
                name: "spider3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "spider",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "spider",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED culicimorphs",
                label: "sparkly",
                longdesc: "",
                name: "mosquito1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "mosquito",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "mosquito",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED culicimorphs",
                label: "west nile",
                longdesc: "",
                name: "mosquito2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "mosquito",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "mosquito",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED culicimorphs",
                label: "this achievement sucks",
                longdesc: "Culicimorphs hatched by nexus abilities don't count.",
                name: "mosquito3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "mosquito",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "mosquito",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED locusts",
                label: "shadow over egypt",
                longdesc: "",
                name: "locust1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "locust",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "locust",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED locusts",
                label: "stalemate",
                longdesc: "",
                name: "locust2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "locust",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "locust",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED locusts",
                label: "trypophobia",
                longdesc: "Locusts hatched by nexus abilities don't count.",
                name: "locust3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "locust",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "locust",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED roaches",
                label: "roach coach",
                longdesc: "",
                name: "roach1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "roach",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "roach",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED roaches",
                label: "roach clips",
                longdesc: "",
                name: "roach2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "roach",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "roach",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED roaches",
                label: "papa",
                longdesc: "Roaches hatched by nexus abilities don't count.",
                name: "roach3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "roach",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "roach",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED giant arachnomorphs",
                label: "with greater power",
                longdesc: "",
                name: "giantspider1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "giantspider",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "giantspider",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED giant arachnomorphs",
                label: "whatever a spider can",
                longdesc: "",
                name: "giantspider2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "giantspider",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "giantspider",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED giant arachnomorphs",
                label: "and I'm just sitting here",
                longdesc: "Giant Arachnomorphs hatched by nexus abilities don't count.",
                name: "giantspider3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "giantspider",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "giantspider",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED chilopodomorphs",
                label: "centipede",
                longdesc: "",
                name: "centipede1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "centipede",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "centipede",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED chilopodomorphs",
                label: "millipede",
                longdesc: "",
                name: "centipede2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "centipede",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "centipede",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED chilopodomorphs",
                label: "missile command",
                longdesc: "Chilopodomorphs hatched by nexus abilities don't count.",
                name: "centipede3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "centipede",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "centipede",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED wasps",
                label: "aldrin",
                longdesc: "",
                name: "wasp1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "wasp",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "wasp",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED wasps",
                label: "lightyear",
                longdesc: "",
                name: "wasp2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "wasp",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "wasp",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED wasps",
                label: "kill",
                longdesc: "Wasps hatched by nexus abilities don't count.",
                name: "wasp3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "wasp",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "wasp",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED devourers",
                label: "these things fly, right?",
                longdesc: "",
                name: "devourer1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "devourer",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "devourer",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED devourers",
                label: "or do they burrow?",
                longdesc: "",
                name: "devourer2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "devourer",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "devourer",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED devourers",
                label: "sometimes they drain energy",
                longdesc: "Devourers hatched by nexus abilities don't count.",
                name: "devourer3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "devourer",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "devourer",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "孵化 $REQUIRED goons",
                label: "new year's",
                longdesc: "",
                name: "goon1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "goon",
                "requires.upgradetype": "",
                "requires.val": 100,
                "visible.unittype": "goon",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED goons",
                label: "adam and",
                longdesc: "",
                name: "goon2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "goon",
                "requires.upgradetype": "",
                "requires.val": 1e6,
                "visible.unittype": "goon",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "孵化 $REQUIRED goons",
                label: "all hallows'",
                longdesc: "Goons hatched by nexus abilities don't count.",
                name: "goon3",
                points: 10,
                "requires.event": "",
                "requires.unittype": "goon",
                "requires.upgradetype": "",
                "requires.val": 1e15,
                "visible.unittype": "goon",
                "visible.upgradetype": "",
                "visible.val": 100
            }, {
                description: "建造 $REQUIRED nexus",
                label: "phenomenal cosmic power",
                longdesc: "",
                name: "nexus1",
                points: 10,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "nexus1",
                "requires.val": 1,
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 33333333333
            }, {
                description: "建造 5 nexus",
                label: "power overwhelming",
                longdesc: "",
                name: "nexus2",
                points: 10,
                "requires.event": "",
                "requires.unittype": "",
                "requires.upgradetype": "nexus5",
                "requires.val": 1,
                "visible.unittype": "nexus",
                "visible.upgradetype": "",
                "visible.val": 1
            }, {
                description: "找到更新日志",
                label: "不完整的知识",
                longdesc: "请不要带任何书。",
                name: "changelog",
                points: 10,
                "requires.event": "changelog",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                "visible.unittype": "meat",
                "visible.upgradetype": "",
                "visible.val": 0
            }, {
                description: "Import your saved game",
                label: "portable swarm",
                longdesc: "",
                name: "import",
                points: 10,
                "requires.event": "import",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": '{"success":true}',
                "visible.unittype": "",
                "visible.upgradetype": "",
                "visible.val": ""
            }, {
                description: "Click this achievement's slot",
                label: "since you asked nicely",
                longdesc: "",
                name: "clickme",
                points: 30,
                "requires.event": "achieveclick",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": '{"name":"clickme"}',
                "visible.unittype": "",
                "visible.upgradetype": "",
                "visible.val": ""
            }, {
                description: "Enter the Konami Code",
                label: "l33t h4x",
                longdesc: "",
                name: "konami",
                points: 30,
                "requires.event": "konami",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                "visible.unittype": "",
                "visible.upgradetype": "",
                "visible.val": ""
            }, {
                description: "Find the debug page",
                label: "even de bugs have bugs",
                longdesc: "",
                name: "debug",
                points: 30,
                "requires.event": "debugPage",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                "visible.unittype": "",
                "visible.upgradetype": "",
                "visible.val": ""
            }, {
                description: "Help test Swarm Simulator v1.0.",
                label: "public test v1.0",
                longdesc: "Thank you for your help!",
                name: "publictest1",
                points: 0,
                "requires.event": "achieve-publictest1",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                "visible.unittype": "",
                "visible.upgradetype": "",
                "visible.val": ""
            }, {
                description: "Ask the right question",
                label: "signs point to yes",
                longdesc: "The secret's out - read it on /r/swarmsim",
                name: "therightquestion",
                points: 0,
                "requires.event": "therightquestion",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                "visible.unittype": "ascension",
                "visible.upgradetype": "",
                "visible.val": 20
            }],
            name: "achievements"
        },
        mtx: {
            column_names: ["name", "label", "description", "pricekreds", "priceusdpaypal", "uses", "pack.unittype", "bulkbonus", "pack.val", "paypalurl", "paypalsandboxurl"],
            elements: [{
                bulkbonus: 1,
                description: "10,000 crystals",
                label: "10,000 crystals",
                name: "crystal000",
                "pack.unittype": "crystal",
                "pack.val": 1e4,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A4DNJ5VY8MWV8",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VTLR9A5SGD88U",
                price_kreds: 10,
                price_usd_paypal: 99,
                uses: 1
            }, {
                bulkbonus: 1.1,
                description: "55,000 crystals",
                label: "55,000 crystals",
                name: "crystal001",
                "pack.unittype": "crystal",
                "pack.val": 55e3,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H982J7ACEWUUC",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UQYE7GYCB93M4",
                price_kreds: 50,
                price_usd_paypal: 499,
                uses: 1
            }, {
                bulkbonus: 1.2,
                description: "120,000 crystals",
                label: "120,000 crystals",
                name: "crystal002",
                "pack.unittype": "crystal",
                "pack.val": 12e4,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KBAEKDS5JDBKS",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BFP63KZ2SAVWE",
                price_kreds: 100,
                price_usd_paypal: 999,
                uses: 1
            }, {
                bulkbonus: 1.3,
                description: "260,000 crystals",
                label: "260,000 crystals",
                name: "crystal003",
                "pack.unittype": "crystal",
                "pack.val": 26e4,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YP45TQT6UM2P8",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3VLJDNEYEHJ9Y",
                price_kreds: 200,
                price_usd_paypal: 1999,
                uses: 1
            }, {
                bulkbonus: 1.4,
                description: "700,000 crystals",
                label: "700,000 crystals",
                name: "crystal004",
                "pack.unittype": "crystal",
                "pack.val": 7e5,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB5KNYZCCEHD4",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YYFCE3PQ4KY8Y",
                price_kreds: 500,
                price_usd_paypal: 4999,
                uses: 1
            }, {
                bulkbonus: 1.5,
                description: "1,500,000 crystals",
                label: "1,500,000 crystals",
                name: "crystal005",
                "pack.unittype": "crystal",
                "pack.val": 15e5,
                paypalSandboxUrl: "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2G5NLN7SE4L5U",
                paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RYA3WRJJRK6LC",
                price_kreds: 1e3,
                price_usd_paypal: 9999,
                uses: 1
            }],
            name: "mtx"
        },
        unittypes: {
            column_names: ["name", "label", "plural", "verb", "verbone", "verbing", "column", "tab", "init", "ascendpreserve", "description", "lol", "disabled", "unbuyable", "isbuyhidden", "tier", "cost.unittype", "cost.val", "prod.unittype", "prod.val", "showparent", "warnfirst.unittype", "warnfirst.val", "warnfirst.text", "requires.unittype", "requires.upgradetype", "requires.val", "requires.op", "effect.type", "effect.unittype", "effect.val", "effect.stat", "effect.val2", "effect.unittype2", "effect.val3"],
            elements: [{
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "",
                "cost.val": "",
                description: "幼虫的主要来源。每个人开始時都有一个，不能购买更多。没有人知道他们擁有它，因为它是看不见的。",
                disabled: "TRUE",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: 1,
                isBuyHidden: "",
                label: "看不见的孵化场",
                lol: "停止在源代码到处翻找，你这个肮脏的作弊者。",
                name: "invisiblehatchery",
                plural: "看不见的孵化场",
                "prod.unittype": "larva",
                "prod.val": 1,
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "",
                "cost.val": "",
                description: "肉很美味。你群体所有的生物都吃肉。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: 35,
                isBuyHidden: "",
                label: "肉",
                lol: "有些国家用肉来制作肉酱或是车辆，肉，肉，它不会被打败〜",
                name: "meat",
                plural: "肉",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 0,
                showparent: "",
                tab: "meat",
                tier: 0,
                unbuyable: "TRUE",
                verb: "gather",
                verbing: "gathering",
                verbone: "gathers",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "cocoon",
                "cost.val": 1,
                description: "你的虫群的幼年时期，这些年轻的生物最终会变成其他成年单位。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: 10,
                isBuyHidden: "",
                label: "幼虫",
                lol: '为什么不是“幼虫”，英文？',
                name: "larva",
                plural: "幼虫",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 0,
                showparent: "invisiblehatchery",
                tab: "larva",
                tier: "",
                unbuyable: "",
                verb: "脱茧",
                verbing: "脱茧",
                verbone: "uncocoons",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "茧",
                lol: "Enemy COCOON used HARDEN!",
                name: "cocoon",
                plural: "茧",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "cocooning",
                "requires.val": 1,
                showparent: "",
                tab: "larva",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "结茧",
                verbone: "结茧",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "",
                "cost.val": "",
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "领土",
                lol: "",
                name: "territory",
                plural: "领土",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "territory",
                tier: "",
                unbuyable: "TRUE",
                verb: "capture",
                verbing: "capturing",
                verbone: "captures",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 0,
                "cost.unittype": "crystal",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "TRUE",
                label: "能量",
                lol: "",
                name: "energy",
                plural: "能量",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "nexus",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "",
                verb: "转换",
                verbing: "转换",
                verbone: "converts",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "energy",
                "cost.val": -1,
                description: "spent-energy consumed for respecs. affects ascension cost.",
                disabled: "TRUE",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "respecEnergy",
                lol: "",
                name: "respecEnergy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "energy bought with microtransactions also permanently increases max energy. Don't wanna worry about hitting the cap.",
                disabled: "TRUE",
                "effect.stat": "capFlat",
                "effect.type": "addStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "能量和最大能量",
                lol: "",
                name: "mtxEnergy",
                plural: "能量和最大能量",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "-",
                disabled: "",
                "effect.stat": "capBase",
                "effect.type": "addStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1e4,
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "联系",
                lol: "There was a lot more to magic, as Hairy quickly found out, than waving your antennae and saying a few funny words.",
                name: "nexus",
                plural: "联系",
                "prod.unittype": "energy",
                "prod.val": .1,
                "requires.op": "",
                "requires.unittype": "nexus",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "水晶",
                lol: "",
                name: "crystal",
                plural: "水晶",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 0,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "突变体",
                lol: "",
                name: "mutagen",
                plural: "突变体",
                "prod.unittype": "larva",
                "prod.val": .1,
                "requires.op": "OR",
                "requires.unittype": "mutagen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "OR",
                "requires.unittype": "premutagen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "OR",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "always false, hack to make OR work",
                "requires.unittype": "invisiblehatchery",
                "requires.upgradetype": "",
                "requires.val": 2,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "-",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "突变 (闲置)",
                lol: "Near comatose, no exercise / Don't tag my toe, I'm still alive",
                name: "premutagen",
                plural: "突变 (闲置)",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "OR",
                "requires.unittype": "mutagen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "premutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "OR",
                "requires.unittype": "premutagen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "premutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "OR",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "premutagen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "always false, hack to make OR work",
                "requires.unittype": "invisiblehatchery",
                "requires.upgradetype": "",
                "requires.val": 2,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "total ascensions",
                disabled: "TRUE",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "ascension",
                lol: "",
                name: "ascension",
                plural: "转生",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "TRUE",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: 4,
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "freeRespec",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "TRUE",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "雄峰是你的巢穴中最低级的工人. 他们不断地收集肉来喂养你的巢穴。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "雄蜂",
                lol: "Not to be confused with probes or mules.",
                name: "drone",
                plural: "雄蜂",
                "prod.unittype": "meat",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 0,
                showparent: "",
                tab: "meat",
                tier: 1,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "drone",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "蜂后统治你巢穴中的工人。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂后",
                lol: "I want to ride my bicycle / I want to ride my bike / I want to ride my bicycle / I want to ride it where I like",
                name: "queen",
                plural: "蜂后",
                "prod.unittype": "drone",
                "prod.val": 1000,
                "requires.op": "OR",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 2,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "drone",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "queen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "drone",
                "requires.upgradetype": "",
                "requires.val": 10,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "queen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "蜂巢为你虫群的蜂后提供空间和支援。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂巢",
                lol: "They also have fancy temperature controls.",
                name: "nest",
                plural: "蜂巢",
                "prod.unittype": "queen",
                "prod.val": 10000,
                "requires.op": "OR",
                "requires.unittype": "ascension",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 3,
                unbuyable: "",
                verb: "建造",
                verbing: "建造",
                verbone: "builds",
                "warnfirst.text": "你的第一个巢要花很长时间才能让蜂后们做出牺牲来建造它。考虑先孵化更多的蜂后。",
                "warnfirst.unittype": "queen",
                "warnfirst.val": 2e3
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "queen",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "nest",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "nest",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "territory",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "大蜂后统治巨大虫群的次蜂后。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "大蜂后",
                lol: '我想不起名字了吗?选择另一种生物，在它前面写上“更大的”！',
                name: "greaterqueen",
                plural: "大蜂后",
                "prod.unittype": "nest",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "nest",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 4,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "你的第一批大蜂后要花很长时间才能通过牺牲自己来建造它们的巢。首先考虑建更多的巢。",
                "warnfirst.unittype": "nest",
                "warnfirst.val": 4e4
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "nest",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "greaterqueen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "greaterqueen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "蜂房是由肉向数以万计的蜂后尸体所做成的巨大结构体。他们让你的虫群增长得更加快。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房",
                lol: "Serve the hive. Feel the groove. I control the way you move.",
                name: "hive",
                plural: "蜂房",
                "prod.unittype": "greaterqueen",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "greaterqueen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 5,
                unbuyable: "",
                verb: "建造",
                verbing: "建造",
                verbone: "builds",
                "warnfirst.text": "Your first few hives will take a long time to regenerate the greater queens sacrificed to build them. Consider hatching more greater queens first.",
                "warnfirst.unittype": "greaterqueen",
                "warnfirst.val": 8e5
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "greaterqueen",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "hive",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "hive",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "蜂房蜂后在最大的虫群中监督蜂房的生产。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房蜂后",
                lol: "管理管理经理的经理的经理",
                name: "hivequeen",
                plural: "蜂房蜂后",
                "prod.unittype": "hive",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "hive",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 6,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "Your first few hive queens will take a long time to regenerate the hives sacrificed to build them. Consider building more hives first.",
                "warnfirst.unittype": "hive",
                "warnfirst.val": 4e6
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "hive",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "hivequeen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "hivequeen",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "迄今为止，这是能统治你的蜂群的最强大的生物。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房女王",
                lol: "On her thorax and on her forewing she has this name written: queen of queens and lady of ladies.",
                name: "empress",
                plural: "蜂房女王",
                "prod.unittype": "hivequeen",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "hivequeen",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 7,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "hivequeen",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "empress",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "empress",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "你的先知预见了一个更高的力量的引导，一个更大的存在——然而，天堂已经沉寂了。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "神经先知",
                lol: "Heavens and goddesses and pantheons never really made much sense for a swarm, did they?",
                name: "prophet",
                plural: "神经先知",
                "prod.unittype": "empress",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "empress",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 8,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "empress",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "prophet",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "prophet",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "神经是更大蜂房智能的基石。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房神经",
                lol: "谢了，神经呆子。会想你的。",
                name: "goddess",
                plural: "蜂房神经",
                "prod.unittype": "prophet",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "prophet",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 9,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "prophet",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "goddess",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "goddess",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "神经群开始发挥轻微的精神力量，影响你虫群中的次生物的思维。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "神经群",
                lol: "Their trick for avoiding cluster headaches is to avoid having a head.",
                name: "pantheon",
                plural: "神经群",
                "prod.unittype": "goddess",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "goddess",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 10,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "goddess",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "将你的蜂房神经网络化来它们协调行动，就像个单一的实体一样。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房网络",
                lol: "Networks also allow them to play games and watch videos of ...uh, cats.",
                name: "pantheon2",
                plural: "蜂房网络",
                "prod.unittype": "pantheon",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "pantheon",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 11,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "pantheon",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon2",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon2",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "你的神经网络终于形成了一个单一的高度智慧，尽管可能是未开化的。次蜂房思维的精神力量强大到能直接控制几百只虫群的成员。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "次蜂房思维",
                lol: 'Hey, "lesser" works just as well as "greater" for naming things!',
                name: "pantheon3",
                plural: "次蜂房思维",
                "prod.unittype": "pantheon2",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "pantheon2",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 12,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "pantheon2",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon3",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon3",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "成熟的蜂房思维控制数千只你虫群的次成员，他们智能规划的能力显着提高。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜂房思维",
                lol: "Do hive minds have hives on their minds? Sounds painful.",
                name: "pantheon4",
                plural: "蜂房思维",
                "prod.unittype": "pantheon3",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "pantheon3",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 13,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "pantheon3",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon4",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon4",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "多重蜂房思维融合他们的集体意识成一个更高等的存在。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "弧形思维",
                lol: "By your powers combined...",
                name: "pantheon5",
                plural: "弧形思维",
                "prod.unittype": "pantheon4",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "pantheon4",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 14,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "pantheon4",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon5",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "pantheon5",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "主宰在精神上控制你虫群的每一个成员的行动，包括所有的次蜂房思维。建造更多主宰的物理表现只会增加它的影响；全都属于同一个存在，同一个高等智慧。你的虫群现在为服务其主宰的意志而存在。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰",
                lol: "SO much cooler than that infested human, even if she did win.",
                name: "overmind",
                plural: "主宰",
                "prod.unittype": "pantheon5",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "pantheon5",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 15,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "pantheon5",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "永恒摆在我们面前和背后。你喝了个够么？",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰 II",
                lol: "And here's where I ran out of ideas.",
                name: "overmind2",
                plural: "主宰 II",
                "prod.unittype": "overmind",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "overmind",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 16,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "overmind",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind2",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind2",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "永恒摆在我们面前和背后。你喝了个够么？",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰 III",
                lol: "And here's where I ran out of ideas.",
                name: "overmind3",
                plural: "主宰 III",
                "prod.unittype": "overmind2",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "overmind2",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 17,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "overmind2",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind3",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind3",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "永恒摆在我们面前和背后。你喝了个够么？",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰 IV",
                lol: "And here's where I ran out of ideas.",
                name: "overmind4",
                plural: "主宰 IV",
                "prod.unittype": "overmind3",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "overmind3",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 18,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "overmind3",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind4",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind4",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "永恒摆在我们面前和背后。你喝了个够么？",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰 V",
                lol: "And here's where I ran out of ideas.",
                name: "overmind5",
                plural: "主宰 V",
                "prod.unittype": "overmind4",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "overmind4",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 19,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "overmind4",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind5",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind5",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 1,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "永恒摆在我们面前和背后。你喝了个够么？",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "主宰 VI",
                lol: "And here's where I ran out of ideas.",
                name: "overmind6",
                plural: "overmind VIs",
                "prod.unittype": "overmind5",
                "prod.val": 1000,
                "requires.op": "",
                "requires.unittype": "overmind5",
                "requires.upgradetype": "",
                "requires.val": 1,
                showparent: "",
                tab: "meat",
                tier: 20,
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "grows",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "overmind5",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind6",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "overmind6",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "你虫群中最小和最弱的战士。他们用自己的牙齿和爪子攻击敌人，并且有大量时可以很凶残。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "工虫",
                lol: "在错误的时间，六人组也相当凶残。",
                name: "swarmling",
                plural: "工虫",
                "prod.unittype": "territory",
                "prod.val": .07,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 225,
                showparent: "",
                tab: "territory",
                tier: 1,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "swarmling",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "弱小的飞行战士。它们一群群的徘徊，用毒针攻击任何的威胁。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "剌针虫",
                lol: "Reasonably smart critters - they consistently earn a 3.0 GPA.",
                name: "stinger",
                plural: "剌针虫",
                "prod.unittype": "territory",
                "prod.val": 3.15,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 101250,
                showparent: "",
                tab: "territory",
                tier: 2,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "stinger",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "可怕的八脚兽，会跳到猎物之上，用粘网捕捉它，最后将它液化成美味的饮料。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蛛形虫",
                lol: "Four legs good. Eight legs better.",
                name: "spider",
                plural: "蛛形虫",
                "prod.unittype": "territory",
                "prod.val": 141.75,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 45562500,
                showparent: "",
                tab: "territory",
                tier: 3,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "spider",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "这些神憎鬼厌的生物在受害者的鲜血上大排筵席，把疾病传播给它们不能完全杀死的大型猎物。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "白鸟蚊",
                lol: "These guys really suck.",
                name: "mosquito",
                plural: "白鸟蚊",
                "prod.unittype": "territory",
                "prod.val": 6378.75,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 20503125e3,
                showparent: "",
                tab: "territory",
                tier: 4,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mosquito",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "一群饥饿的蝗螽虫会吞噬错误站在它们路上的任何生物。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蝗螽虫",
                lol: "Preceded by fiery hail, followed by darkness.",
                name: "locust",
                plural: "蝗螽虫",
                "prod.unittype": "territory",
                "prod.val": 287043.75,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 922640625e4,
                showparent: "",
                tab: "territory",
                tier: 5,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "locust",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "蜚蠊的硬壳使它成为可怕的对手;它几乎是不可能杀死。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蜚蠊",
                lol: "ROOSTERS.",
                name: "roach",
                plural: "蜚蠊",
                "prod.unittype": "territory",
                "prod.val": 12916968.75,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 415188e10,
                showparent: "",
                tab: "territory",
                tier: 6,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "roach",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "更大更可怕，蛛形虫的表亲。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "巨大蛛形虫",
                lol: "Rest assured that you do not swallow eight of these per year while sleeping.",
                name: "giantspider",
                plural: "巨大蛛形虫",
                "prod.unittype": "territory",
                "prod.val": 581263593.8,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 186835e13,
                showparent: "",
                tab: "territory",
                tier: 7,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "giantspider",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "敏捷的虫状生物，有上百只脚和带有剧毒的叮咬。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "天龙虫",
                lol: "Hi Mom!",
                name: "centipede",
                plural: "天龙虫",
                "prod.unittype": "territory",
                "prod.val": 26156861719,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 840756e15,
                showparent: "",
                tab: "territory",
                tier: 8,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "centipede",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "作为剌针虫的一个高级表亲，黄胡蜂的攻击性强得多，而且是更好的捕猎者。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "黄胡蜂",
                lol: "我不能相信你真的在读这篇文章。",
                name: "wasp",
                plural: "黄胡蜂",
                "prod.unittype": "territory",
                "prod.val": 1177058777344,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 3.7834e23,
                showparent: "",
                tab: "territory",
                tier: 9,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "wasp",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "巨大的穴居虫虫，吞噬者从地底出现，趁猎物能反应前将其吞噬。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "吞噬者",
                lol: "Extra fun in hardcore leagues and fractured maps.",
                name: "devourer",
                plural: "吞噬者",
                "prod.unittype": "territory",
                "prod.val": 52967644980469,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 1.70253e26,
                showparent: "",
                tab: "territory",
                tier: 10,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "devourer",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: 2,
                "cost.unittype": "meat",
                "cost.val": 1,
                description: "打手不能靠自己飞行，而是用金属来建造统治天空的强大飞行外骨骼。",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "打手",
                lol: "They like spreadsheets too.",
                name: "goon",
                plural: "打手",
                "prod.unittype": "territory",
                "prod.val": 238354e10,
                "requires.op": "",
                "requires.unittype": "meat",
                "requires.upgradetype": "",
                "requires.val": 7.66139e28,
                showparent: "",
                tab: "territory",
                tier: 11,
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "goon",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "queen",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "energy",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "capMult",
                "effect.type": "asympStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 6,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "夜虫",
                lol: "Often seen in the company of an ice fairy, a singing sparrow, and a ball of darkness.",
                name: "nightbug",
                plural: "夜虫",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "nexus",
                "requires.upgradetype": "",
                "requires.val": 3,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "nightbug",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "energy",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "asympStat",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.val": 2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "鳞翅类",
                lol: "on the one ton temple bell / a moon-moth, folded into sleep, / sits still.",
                name: "moth",
                plural: "鳞翅类",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "nexus",
                "requires.upgradetype": "",
                "requires.val": 4,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "",
                verb: "孵化",
                verbing: "孵化",
                verbone: "hatches",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "moth",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "energy",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "power",
                "effect.type": "asympStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1.6,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "蝙蝠",
                lol: '"Bats aren\'t bugs!!" "Look, who\'s giving this report? You chowderheads... or me?!"',
                name: "bat",
                plural: "蝙蝠",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "nexus",
                "requires.upgradetype": "",
                "requires.val": 5,
                showparent: "",
                tab: "energy",
                tier: "",
                unbuyable: "",
                verb: "购买",
                verbing: "购买",
                verbone: "raises",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                disabled: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.val": "",
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "bat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 1,
                init: "",
                isBuyHidden: "",
                label: "孵化场突变",
                lol: "",
                name: "mutanthatchery",
                plural: "孵化场突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatehatchery",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "power",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": 1,
                init: "",
                isBuyHidden: "",
                label: "蝙蝠突变",
                lol: "",
                name: "mutantbat",
                plural: "蝙蝠突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatebat",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "power.clonelarvae",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 1.8,
                init: "",
                isBuyHidden: "",
                label: "克隆突变",
                lol: "",
                name: "mutantclone",
                plural: "克隆突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutateclone",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "power.swarmwarp",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 2,
                init: "",
                isBuyHidden: "",
                label: "扭曲突变",
                lol: "",
                name: "mutantswarmwarp",
                plural: "扭曲突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutateswarmwarp",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "power.larvarush",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 3,
                init: "",
                isBuyHidden: "",
                label: "热潮突变",
                lol: "",
                name: "mutantrush",
                plural: "热潮突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutaterush",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "power.meatrush",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 13,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantrush",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "power.territoryrush",
                "effect.type": "logStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 1,
                "effect.val2": 10,
                "effect.val3": 13,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantrush",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "random.each",
                "effect.type": "logStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .5,
                init: "",
                isBuyHidden: "",
                label: "元突变",
                lol: "",
                name: "mutanteach",
                plural: "元突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutateeach",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "random.minlevel.hatchery",
                "effect.type": "initStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": 40,
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutanteach",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "random.minlevel.expansion",
                "effect.type": "initStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": 80,
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutanteach",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "random.freq",
                "effect.type": "asympStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": 5,
                "effect.val2": .001,
                "effect.val3": 5,
                init: "",
                isBuyHidden: "",
                label: "突变频率",
                lol: "Savescumming won't work, by the way.",
                name: "mutantfreq",
                plural: "突变频率",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatefreq",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "random.freq",
                "effect.type": "initStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": "",
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantfreq",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "asympStat",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.val": 2,
                "effect.val2": 5e-4,
                "effect.val3": 5,
                init: "",
                isBuyHidden: "",
                label: "鳞翅类突变",
                lol: "",
                name: "mutantnexus",
                plural: "鳞翅类突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatenexus",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "capMult",
                "effect.type": "asympStat",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.val": 2,
                "effect.val2": 5e-4,
                "effect.val3": 5,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantnexus",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "ascendCost",
                "effect.type": "asympStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.val": 1.6,
                "effect.val2": 5e-4,
                "effect.val3": 5,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantnexus",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "领土突变",
                lol: "",
                name: "mutantarmy",
                plural: "领土突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatearmy",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "expStat",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.val": .2,
                "effect.val2": .001,
                "effect.val3": "",
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantarmy",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "TRUE",
                column: "",
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "-",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "drone",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .48,
                init: "",
                isBuyHidden: "",
                label: "肉突变",
                lol: "",
                name: "mutantmeat",
                plural: "肉突变",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "mutatemeat",
                "requires.val": 1,
                showparent: "",
                tab: "mutagen",
                tier: "",
                unbuyable: "",
                verb: "突变",
                verbing: "购买",
                verbone: "mutates",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "queen",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .408,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "nest",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .3468,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "greaterqueen",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .29478,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "hive",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .250563,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "hivequeen",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .21297855,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "empress",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .1810317675,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "prophet",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .1538770024,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "goddess",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .130795452,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "pantheon",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .1111761342,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "pantheon2",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .09449971408,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "pantheon3",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .08032475697,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "pantheon4",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .06827604343,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "pantheon5",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .05803463691,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .04932944137,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind2",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .04193002517,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind3",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .03564052139,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind4",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .03029444318,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind5",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .02575027671,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }, {
                ascendPreserve: "",
                column: "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                disabled: "",
                "effect.stat": "prod",
                "effect.type": "logStat",
                "effect.unittype": "overmind6",
                "effect.unittype2": "",
                "effect.val": .1,
                "effect.val2": 10,
                "effect.val3": .0218877352,
                init: "",
                isBuyHidden: "",
                label: "",
                lol: "",
                name: "mutantmeat",
                plural: "",
                "prod.unittype": "",
                "prod.val": "",
                "requires.op": "",
                "requires.unittype": "",
                "requires.upgradetype": "",
                "requires.val": "",
                showparent: "",
                tab: "",
                tier: "",
                unbuyable: "",
                verb: "",
                verbing: "",
                verbone: "",
                "warnfirst.text": "",
                "warnfirst.unittype": "",
                "warnfirst.val": ""
            }],
            name: "unittypes"
        },
        upgrades: {
            column_names: ["name", "label", "description", "lol", "maxlevel", "class", "unittype", "requires.unittype", "requires.val", "cost.unittype", "cost.val", "cost.factor", "effect.type", "effect.unittype", "effect.upgradetype", "effect.val", "effect.stat", "effect.val2", "effect.unittype2"],
            elements: [{
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "meat",
                "cost.val": 300,
                description: "-",
                "effect.stat": "base",
                "effect.type": "addStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "孵化场",
                lol: "",
                maxlevel: "",
                name: "hatchery",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "invisiblehatchery"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnitRand",
                "effect.unittype": "premutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.2544,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "hatchery",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnitTimed",
                "effect.unittype": "crystal",
                "effect.unittype2": "energy",
                "effect.upgradetype": "",
                "effect.val": 500,
                "effect.val2": 1800,
                label: "",
                lol: "",
                maxlevel: "",
                name: "hatchery",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 2.45,
                "cost.unittype": "territory",
                "cost.val": 10,
                description: "-",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "invisiblehatchery",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.1,
                "effect.val2": "",
                label: "扩张",
                lol: "",
                maxlevel: "",
                name: "expansion",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "invisiblehatchery"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnitRand",
                "effect.unittype": "premutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.12,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "expansion",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnitTimed",
                "effect.unittype": "crystal",
                "effect.unittype2": "energy",
                "effect.upgradetype": "",
                "effect.val": 500,
                "effect.val2": 1800,
                label: "",
                lol: "",
                maxlevel: "",
                name: "expansion",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1e4,
                "cost.unittype": "meat",
                "cost.val": 5e6,
                description: "-",
                "effect.stat": "prod",
                "effect.type": "multStatPerAchievementPoint",
                "effect.unittype": "larva",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": .001,
                "effect.val2": "",
                label: "accomplished ancestry",
                lol: "",
                maxlevel: 5,
                name: "achievementbonus",
                "requires.unittype": "meat",
                "requires.val": 5e4,
                unittype: "invisiblehatchery"
            }, {
                class: "",
                "cost.factor": 1e4,
                "cost.unittype": "territory",
                "cost.val": 500,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "achievementbonus",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 3.33333e21,
                description: "Allows your larvae to encase themselves within cocoons. Cocooned larvae cannot mutate into other units, and can still be cloned by Clone Larvae. You may cocoon and uncocoon your larvae whenever you wish.",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "cocooning",
                lol: "",
                maxlevel: 1,
                name: "cocooning",
                "requires.unittype": "nexus",
                "requires.val": 4,
                unittype: "invisiblehatchery"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "drone",
                "cost.val": 66,
                description: "雄蜂收集更多的肉。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "drone",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的雄蜂",
                lol: "",
                maxlevel: "",
                name: "droneprod",
                "requires.unittype": "drone",
                "requires.val": 67,
                unittype: "drone"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "queen",
                "cost.val": 66,
                description: "蜂后产生更多的雄蜂。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "queen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂后",
                lol: "",
                maxlevel: "",
                name: "queenprod",
                "requires.unittype": "queen",
                "requires.val": 67,
                unittype: "queen"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "nest",
                "cost.val": 66,
                description: "蜂巢生产更多的蜂后。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "nest",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂巢",
                lol: "",
                maxlevel: "",
                name: "nestprod",
                "requires.unittype": "nest",
                "requires.val": 67,
                unittype: "nest"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "greaterqueen",
                "cost.val": 66,
                description: "大蜂后生产更多的蜂巢。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "greaterqueen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的大蜂后",
                lol: "",
                maxlevel: "",
                name: "greaterqueenprod",
                "requires.unittype": "greaterqueen",
                "requires.val": 67,
                unittype: "greaterqueen"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "hive",
                "cost.val": 66,
                description: "蜂房生产更多的大蜂后。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "hive",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房",
                lol: "",
                maxlevel: "",
                name: "hiveprod",
                "requires.unittype": "hive",
                "requires.val": 67,
                unittype: "hive"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "hivequeen",
                "cost.val": 66,
                description: "蜂房蜂后生产更多的蜂房。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "hivequeen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房蜂后",
                lol: "",
                maxlevel: "",
                name: "hivequeenprod",
                "requires.unittype": "hivequeen",
                "requires.val": 67,
                unittype: "hivequeen"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "empress",
                "cost.val": 66,
                description: "蜂房女王生产更多的蜂房蜂后。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "empress",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房女王",
                lol: "",
                maxlevel: "",
                name: "empressprod",
                "requires.unittype": "empress",
                "requires.val": 67,
                unittype: "empress"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "prophet",
                "cost.val": 66,
                description: "神经先知生产更多的蜂房女王。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "prophet",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的神经先知",
                lol: "",
                maxlevel: "",
                name: "prophetprod",
                "requires.unittype": "prophet",
                "requires.val": 67,
                unittype: "prophet"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "goddess",
                "cost.val": 66,
                description: "蜂房神经生产更多的神经先知。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "goddess",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房神经",
                lol: "",
                maxlevel: "",
                name: "goddessprod",
                "requires.unittype": "goddess",
                "requires.val": 67,
                unittype: "goddess"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "pantheon",
                "cost.val": 66,
                description: "神经群生产更多的蜂房神经。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "pantheon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的神经群",
                lol: "",
                maxlevel: "",
                name: "pantheonprod",
                "requires.unittype": "pantheon",
                "requires.val": 67,
                unittype: "pantheon"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "pantheon2",
                "cost.val": 66,
                description: "蜂房网络生产更多的神经群。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "pantheon2",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房网络",
                lol: "",
                maxlevel: "",
                name: "pantheon2prod",
                "requires.unittype": "pantheon2",
                "requires.val": 67,
                unittype: "pantheon2"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "pantheon3",
                "cost.val": 66,
                description: "次蜂房思维生产更多的蜂房网络。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "pantheon3",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的次蜂房思维",
                lol: "",
                maxlevel: "",
                name: "pantheon3prod",
                "requires.unittype": "pantheon3",
                "requires.val": 67,
                unittype: "pantheon3"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "pantheon4",
                "cost.val": 66,
                description: "蜂房思维生产更多的次蜂房思维。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "pantheon4",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的蜂房思维",
                lol: "",
                maxlevel: "",
                name: "pantheon4prod",
                "requires.unittype": "pantheon4",
                "requires.val": 67,
                unittype: "pantheon4"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "pantheon5",
                "cost.val": 66,
                description: "弧形思维生产更多的蜂房思维。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "pantheon5",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的弧形思维 ",
                lol: "",
                maxlevel: "",
                name: "pantheon5prod",
                "requires.unittype": "pantheon5",
                "requires.val": 67,
                unittype: "pantheon5"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind",
                "cost.val": 66,
                description: "主宰生产更多的弧形思维。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰",
                lol: "",
                maxlevel: "",
                name: "overmindprod",
                "requires.unittype": "overmind",
                "requires.val": 67,
                unittype: "overmind"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind2",
                "cost.val": 66,
                description: "主宰II生产更多的主宰。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind2",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰II",
                lol: "",
                maxlevel: "",
                name: "overmind2prod",
                "requires.unittype": "overmind2",
                "requires.val": 67,
                unittype: "overmind2"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind3",
                "cost.val": 66,
                description: "主宰III生产更多的主宰II。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind3",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰III",
                lol: "",
                maxlevel: "",
                name: "overmind3prod",
                "requires.unittype": "overmind3",
                "requires.val": 67,
                unittype: "overmind3"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind4",
                "cost.val": 66,
                description: "主宰IV生产更多的主宰III。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind4",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰IV",
                lol: "",
                maxlevel: "",
                name: "overmind4prod",
                "requires.unittype": "overmind4",
                "requires.val": 67,
                unittype: "overmind4"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind5",
                "cost.val": 66,
                description: "主宰V生产更多的主宰IV。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind5",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰V",
                lol: "",
                maxlevel: "",
                name: "overmind5prod",
                "requires.unittype": "overmind5",
                "requires.val": 67,
                unittype: "overmind5"
            }, {
                class: "upgrade",
                "cost.factor": 666,
                "cost.unittype": "overmind6",
                "cost.val": 66,
                description: "主宰VI生产更多的主宰V。",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "overmind6",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "更快的主宰VI",
                lol: "",
                maxlevel: "",
                name: "overmind6prod",
                "requires.unittype": "overmind6",
                "requires.val": 67,
                unittype: "overmind6"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "queen",
                "cost.val": 1,
                description: "从每个幼虫孵化的雄蜂加倍。 （这不会影响蜂后生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "drone",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎雄蜂",
                lol: "",
                maxlevel: "",
                name: "dronetwin",
                "requires.unittype": "queen",
                "requires.val": 1,
                unittype: "drone"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "nest",
                "cost.val": 1,
                description: "从每个幼虫孵化的蜂后加倍。（这不会影响蜂巢生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "queen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂后",
                lol: "",
                maxlevel: "",
                name: "queentwin",
                "requires.unittype": "nest",
                "requires.val": 1,
                unittype: "queen"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "greaterqueen",
                "cost.val": 1,
                description: "由每个幼虫建造的蜂巢加倍。（这不会影响大蜂后生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "nest",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂巢",
                lol: "",
                maxlevel: "",
                name: "nesttwin",
                "requires.unittype": "greaterqueen",
                "requires.val": 1,
                unittype: "nest"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "hive",
                "cost.val": 1,
                description: "从每个幼虫孵化的大蜂后加倍。（这不会影响蜂房生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "greaterqueen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎大蜂后",
                lol: "",
                maxlevel: "",
                name: "greaterqueentwin",
                "requires.unittype": "hive",
                "requires.val": 1,
                unittype: "greaterqueen"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "hivequeen",
                "cost.val": 1,
                description: "由每个幼虫建造的蜂房加倍。（这不会影响蜂房蜂后生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "hive",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房",
                lol: "",
                maxlevel: "",
                name: "hivetwin",
                "requires.unittype": "hivequeen",
                "requires.val": 1,
                unittype: "hive"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "empress",
                "cost.val": 1,
                description: "由每个幼虫建造的蜂房蜂后加倍。（这不会影响蜂房女王生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "hivequeen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房蜂后",
                lol: "",
                maxlevel: "",
                name: "hivequeentwin",
                "requires.unittype": "empress",
                "requires.val": 1,
                unittype: "hivequeen"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "prophet",
                "cost.val": 1,
                description: "由每个幼虫建造的蜂房蜂后加倍。（这不会影响蜂房女王生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "empress",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房蜂后",
                lol: "",
                maxlevel: "",
                name: "empresstwin",
                "requires.unittype": "prophet",
                "requires.val": 1,
                unittype: "empress"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "goddess",
                "cost.val": 1,
                description: "从每个幼虫孵化的神经先知加倍。（这不会影响蜂房神经生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "prophet",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎神经先知",
                lol: "",
                maxlevel: "",
                name: "prophettwin",
                "requires.unittype": "goddess",
                "requires.val": 1,
                unittype: "prophet"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "pantheon",
                "cost.val": 1,
                description: "由每个幼虫创造的蜂房神经加倍。（这不会影响神经群生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "goddess",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房神经",
                lol: "",
                maxlevel: "",
                name: "goddesstwin",
                "requires.unittype": "pantheon",
                "requires.val": 1,
                unittype: "goddess"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "pantheon2",
                "cost.val": 1,
                description: "由每个幼虫创造的神经群加倍。（这不会影响蜂房网络生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "pantheon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎神经群",
                lol: "",
                maxlevel: "",
                name: "pantheontwin",
                "requires.unittype": "pantheon2",
                "requires.val": 1,
                unittype: "pantheon"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "pantheon3",
                "cost.val": 1,
                description: "由每个幼虫创造的蜂房网络加倍。（这不会影响次蜂房思维生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "pantheon2",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房网络",
                lol: "",
                maxlevel: "",
                name: "pantheon2twin",
                "requires.unittype": "pantheon3",
                "requires.val": 1,
                unittype: "pantheon2"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "pantheon4",
                "cost.val": 1,
                description: "由每个幼虫创造的次蜂房思维加倍。（这不会影响蜂房思维生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "pantheon3",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎次蜂房思维",
                lol: "",
                maxlevel: "",
                name: "pantheon3twin",
                "requires.unittype": "pantheon4",
                "requires.val": 1,
                unittype: "pantheon3"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "pantheon5",
                "cost.val": 1,
                description: "由每个幼虫创造的蜂房思维加倍。（这不会影响弧形思维生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "pantheon4",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜂房思维",
                lol: "",
                maxlevel: "",
                name: "pantheon4twin",
                "requires.unittype": "pantheon5",
                "requires.val": 1,
                unittype: "pantheon4"
            }, {
                class: "upgrade",
                "cost.factor": 10,
                "cost.unittype": "overmind",
                "cost.val": 1,
                description: "由每个幼虫创造的弧形思维加倍。（这不会影响主宰生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "pantheon5",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎弧形思维",
                lol: "",
                maxlevel: "",
                name: "pantheon5twin",
                "requires.unittype": "overmind",
                "requires.val": 1,
                unittype: "pantheon5"
            }, {
                class: "upgrade",
                "cost.factor": 12,
                "cost.unittype": "overmind2",
                "cost.val": 1,
                description: "由每个幼虫创造的主宰加倍。（这不会影响主宰II生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "overmind",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎主宰",
                lol: "",
                maxlevel: "",
                name: "overmindtwin",
                "requires.unittype": "overmind2",
                "requires.val": 1,
                unittype: "overmind"
            }, {
                class: "upgrade",
                "cost.factor": 14,
                "cost.unittype": "overmind3",
                "cost.val": 1,
                description: "由每个幼虫创造的主宰II加倍。（这不会影响主宰III生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "overmind2",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎主宰II",
                lol: "",
                maxlevel: "",
                name: "overmind2twin",
                "requires.unittype": "overmind3",
                "requires.val": 1,
                unittype: "overmind2"
            }, {
                class: "upgrade",
                "cost.factor": 16,
                "cost.unittype": "overmind4",
                "cost.val": 1,
                description: "由每个幼虫创造的主宰III加倍。（这不会影响主宰IV生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "overmind3",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎主宰III",
                lol: "",
                maxlevel: "",
                name: "overmind3twin",
                "requires.unittype": "overmind4",
                "requires.val": 1,
                unittype: "overmind3"
            }, {
                class: "upgrade",
                "cost.factor": 18,
                "cost.unittype": "overmind5",
                "cost.val": 1,
                description: "由每个幼虫创造的主宰IV加倍。（这不会影响主宰V生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "overmind4",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎主宰IV",
                lol: "",
                maxlevel: "",
                name: "overmind4twin",
                "requires.unittype": "overmind5",
                "requires.val": 1,
                unittype: "overmind4"
            }, {
                class: "upgrade",
                "cost.factor": 20,
                "cost.unittype": "overmind6",
                "cost.val": 1,
                description: "由每个幼虫创造的主宰V加倍。（这不会影响主宰VI生产。）",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "overmind5",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎主宰V",
                lol: "",
                maxlevel: "",
                name: "overmind5twin",
                "requires.unittype": "overmind6",
                "requires.val": 1,
                unittype: "overmind5"
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "由每个幼虫创造的主宰VI加倍。",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "双胞胎主宰VI",
                lol: "",
                maxlevel: "",
                name: "overmind6twin",
                "requires.unittype": "invisiblehatchery",
                "requires.val": 2,
                unittype: "overmind6"
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的工虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎工虫",
                lol: "",
                maxlevel: "",
                name: "swarmlingtwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "swarmling"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "swarmlingtwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的剌针虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎剌针虫",
                lol: "",
                maxlevel: "",
                name: "stingertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "stinger"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "stingertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的蛛形虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蛛形虫",
                lol: "",
                maxlevel: "",
                name: "spidertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "spider"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "spidertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的白鸟蚊加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎白鸟蚊",
                lol: "",
                maxlevel: "",
                name: "mosquitotwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "mosquito"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mosquitotwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的蝗螽虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蝗螽虫",
                lol: "",
                maxlevel: "",
                name: "locusttwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "locust"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "locusttwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的蜚蠊加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎蜚蠊 ",
                lol: "",
                maxlevel: "",
                name: "roachtwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "roach"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "roachtwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的巨大蛛形虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎巨大蛛形虫",
                lol: "",
                maxlevel: "",
                name: "giantspidertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "giantspider"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "giantspidertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的天龙虫加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎天龙虫",
                lol: "",
                maxlevel: "",
                name: "centipedetwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "centipede"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "centipedetwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的黃胡蜂加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎黄胡蜂",
                lol: "",
                maxlevel: "",
                name: "wasptwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "wasp"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "wasptwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的吞噬者加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎吞噬者",
                lol: "",
                maxlevel: "",
                name: "devourertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "devourer"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "devourertwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 500,
                "cost.unittype": "meat",
                "cost.val": 100,
                description: "由每个幼虫创造的打手加倍。",
                "effect.stat": "twin",
                "effect.type": "multStat",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "双胞胎打手",
                lol: "",
                maxlevel: "",
                name: "goontwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: "goon"
            }, {
                class: "",
                "cost.factor": 50,
                "cost.unittype": "larva",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "goontwin",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 1.14921e32,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权工虫",
                lol: "",
                maxlevel: "",
                name: "swarmlingempower",
                "requires.unittype": "meat",
                "requires.val": 2.5538e29,
                unittype: "swarmling"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "swarmlingempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "swarmlingempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "swarmlingempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 5.17144e34,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权剌针虫",
                lol: "",
                maxlevel: "",
                name: "stingerempower",
                "requires.unittype": "meat",
                "requires.val": 1.14921e32,
                unittype: "stinger"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "stingerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "stingerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "stingerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 2.32715e37,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权蛛形虫",
                lol: "",
                maxlevel: "",
                name: "spiderempower",
                "requires.unittype": "meat",
                "requires.val": 5.17144e34,
                unittype: "spider"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "spiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "spiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "spiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 1.04722e40,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权白鸟蚊",
                lol: "",
                maxlevel: "",
                name: "mosquitoempower",
                "requires.unittype": "meat",
                "requires.val": 2.32715e37,
                unittype: "mosquito"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mosquitoempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mosquitoempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mosquitoempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 4.71247e42,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权蝗螽虫",
                lol: "",
                maxlevel: "",
                name: "locustempower",
                "requires.unittype": "meat",
                "requires.val": 1.04722e40,
                unittype: "locust"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "locustempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "locustempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "locustempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 2.12061e45,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权蜚蠊",
                lol: "",
                maxlevel: "",
                name: "roachempower",
                "requires.unittype": "meat",
                "requires.val": 4.71247e42,
                unittype: "roach"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "roachempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "roachempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "roachempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 9.54276e47,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权巨大蛛形虫",
                lol: "",
                maxlevel: "",
                name: "giantspiderempower",
                "requires.unittype": "meat",
                "requires.val": 2.12061e45,
                unittype: "giantspider"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "giantspiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "giantspiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "giantspiderempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 4.29424e50,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权天龙虫",
                lol: "The US presidency isn't enough power for you?",
                maxlevel: "",
                name: "centipedeempower",
                "requires.unittype": "meat",
                "requires.val": 9.54276e47,
                unittype: "centipede"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "centipedeempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "centipedeempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "centipedeempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 1.93241e53,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权胡蜂",
                lol: "",
                maxlevel: "",
                name: "waspempower",
                "requires.unittype": "meat",
                "requires.val": 4.29424e50,
                unittype: "wasp"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "waspempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "waspempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "waspempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 8.69584e55,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权吞噬者",
                lol: "hey, that rhymes",
                maxlevel: "",
                name: "devourerempower",
                "requires.unittype": "meat",
                "requires.val": 1.93241e53,
                unittype: "devourer"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "devourerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "devourerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "devourerempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 1.53228e29,
                "cost.unittype": "meat",
                "cost.val": 3.91313e58,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 0,
                "effect.val2": "",
                label: "授权暴徒",
                lol: "",
                maxlevel: "",
                name: "goonempower",
                "requires.unittype": "meat",
                "requires.val": 8.69584e55,
                unittype: "goon"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "prod",
                "effect.type": "multStat",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 153228e13,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "goonempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "cost.meat",
                "effect.type": "multStat",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1.53228e29,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "goonempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "suffix",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "goonempower",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 3333333333333,
                description: "建立你的第一个联系，它会产生能量并让你施展基础魔法。",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "建立联系",
                lol: "",
                maxlevel: 1,
                name: "nexus1",
                "requires.unittype": "meat",
                "requires.val": 333333333333,
                unittype: "meat"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2e3,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus1",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 333333e10,
                description: "建立你的第二个联系，它会产生更多能量并解锁几个特殊能力。",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "建立联系",
                lol: "",
                maxlevel: 1,
                name: "nexus2",
                "requires.unittype": "meat",
                "requires.val": 0,
                unittype: "nexus"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "energy",
                "cost.val": 625,
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 4e3,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus2",
                "requires.unittype": "nexus",
                "requires.val": 1,
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 333333e13,
                description: "建立你的第三个联系，它会产生更加多能量并解锁更多高级魔法。",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "建立联系",
                lol: "",
                maxlevel: 1,
                name: "nexus3",
                "requires.unittype": "meat",
                "requires.val": 0,
                unittype: "nexus"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "energy",
                "cost.val": 2500,
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 6e3,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus3",
                "requires.unittype": "nexus",
                "requires.val": 2,
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "larva",
                "cost.val": 3333333,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus3",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 3.33333e21,
                description: "建立你的第四个联系，它会产生更加多能量并解锁一些你虫群可用的最高级的魔法。",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "建立联系",
                lol: "",
                maxlevel: 1,
                name: "nexus4",
                "requires.unittype": "meat",
                "requires.val": 0,
                unittype: "nexus"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "energy",
                "cost.val": 1e4,
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 8e3,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus4",
                "requires.unittype": "nexus",
                "requires.val": 3,
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "larva",
                "cost.val": 33333330,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus4",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": "",
                "cost.unittype": "meat",
                "cost.val": 3.33333e24,
                description: "建立你的第五个也是最后一个的联系。所有魔法和能力都会解锁。你的施法者无法从五个以上的联系引导能量；这是他们力量上限。",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "nexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "建立联系",
                lol: "",
                maxlevel: 1,
                name: "nexus5",
                "requires.unittype": "meat",
                "requires.val": 0,
                unittype: "nexus"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "energy",
                "cost.val": 36e3,
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1e4,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus5",
                "requires.unittype": "nexus",
                "requires.val": 4,
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "larva",
                "cost.val": 3333333e3,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "nexus5",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 1600,
                description: "-",
                "effect.stat": "",
                "effect.type": "addUnitByVelocity",
                "effect.unittype": "larva",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2400,
                "effect.val2": "",
                label: "幼虫爆发",
                lol: "",
                maxlevel: "",
                name: "larvarush",
                "requires.unittype": "nexus",
                "requires.val": 1,
                unittype: "energy"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "larva",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1e5,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "larvarush",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 2e3,
                description: "-",
                "effect.stat": "",
                "effect.type": "skipTime",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 900,
                "effect.val2": "",
                label: "虫群扭曲",
                lol: "",
                maxlevel: "",
                name: "swarmwarp",
                "requires.unittype": "nexus",
                "requires.val": 1,
                unittype: "energy"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnitByVelocity",
                "effect.unittype": "energy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": -900,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "swarmwarp",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 1600,
                description: "-",
                "effect.stat": "",
                "effect.type": "addUnitByVelocity",
                "effect.unittype": "meat",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 7200,
                "effect.val2": "",
                label: "肉爆发",
                lol: "",
                maxlevel: "",
                name: "meatrush",
                "requires.unittype": "nexus",
                "requires.val": 2,
                unittype: "energy"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "meat",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1e11,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "meatrush",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 1600,
                description: "-",
                "effect.stat": "",
                "effect.type": "addUnitByVelocity",
                "effect.unittype": "territory",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 7200,
                "effect.val2": "",
                label: "领土爆发",
                lol: "",
                maxlevel: "",
                name: "territoryrush",
                "requires.unittype": "nexus",
                "requires.val": 3,
                unittype: "energy"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "territory",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1e9,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "territoryrush",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 12e3,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "larva",
                "effect.unittype2": "cocoon",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": 1e5,
                label: "克隆幼虫",
                lol: "",
                maxlevel: "",
                name: "clonelarvae",
                "requires.unittype": "nexus",
                "requires.val": 4,
                unittype: "energy"
            }, {
                class: "ability",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "",
                "effect.type": "",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": "",
                "effect.val2": "",
                label: "hidden mutation cost tracker",
                lol: "",
                maxlevel: "",
                name: "mutatehidden",
                "requires.unittype": "invisiblehatchery",
                "requires.val": 2,
                unittype: "ascension"
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "孵化场突变",
                lol: "",
                maxlevel: 1,
                name: "mutatehatchery",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatehatchery",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutanthatchery",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatehatchery",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "mutate bats",
                lol: "",
                maxlevel: 1,
                name: "mutatebat",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatebat",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantbat",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatebat",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "克隆突变",
                lol: "",
                maxlevel: 1,
                name: "mutateclone",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateclone",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantclone",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateclone",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "模拟虫群突变",
                lol: "",
                maxlevel: 1,
                name: "mutateswarmwarp",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateswarmwarp",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantswarmwarp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateswarmwarp",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "热潮突变",
                lol: "",
                maxlevel: 1,
                name: "mutaterush",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutaterush",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantrush",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutaterush",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "元突变",
                lol: "",
                maxlevel: 1,
                name: "mutateeach",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateeach",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutanteach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutateeach",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "突变频率",
                lol: "",
                maxlevel: 1,
                name: "mutatefreq",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatefreq",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantfreq",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatefreq",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "鳞翅目突变",
                lol: "",
                maxlevel: 1,
                name: "mutatenexus",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatenexus",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantnexus",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatenexus",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "领土突变",
                lol: "",
                maxlevel: 1,
                name: "mutatearmy",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantarmy",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "upgrade",
                "cost.factor": 15625,
                "cost.unittype": "mutagen",
                "cost.val": 1,
                description: "",
                "effect.stat": "upgradecost",
                "effect.type": "addStat",
                "effect.unittype": "mutagen",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "肉突变",
                lol: "",
                maxlevel: 1,
                name: "mutatemeat",
                "requires.unittype": "ascension",
                "requires.val": 0,
                unittype: "mutagen"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUpgrade",
                "effect.unittype": "",
                "effect.unittype2": "",
                "effect.upgradetype": "mutatehidden",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatemeat",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "addUnit",
                "effect.unittype": "mutantmeat",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 1,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "mutatemeat",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "ability",
                "cost.factor": 1,
                "cost.unittype": "energy",
                "cost.val": 2500,
                description: "-",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "swarmling",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "镜子屋",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "nexus",
                "requires.val": 5,
                unittype: "energy"
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "stinger",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "spider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "mosquito",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "locust",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "roach",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "giantspider",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "centipede",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "wasp",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "devourer",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }, {
                class: "",
                "cost.factor": "",
                "cost.unittype": "",
                "cost.val": "",
                description: "",
                "effect.stat": "",
                "effect.type": "compoundUnit",
                "effect.unittype": "goon",
                "effect.unittype2": "",
                "effect.upgradetype": "",
                "effect.val": 2,
                "effect.val2": "",
                label: "",
                lol: "",
                maxlevel: "",
                name: "clonearmy",
                "requires.unittype": "",
                "requires.val": "",
                unittype: ""
            }],
            name: "upgrades"
        }
    }),
    function () {
        "use strict";
        angular.module("swarmApp").factory("saveId", ["env", "isKongregate", function (a, b) {
            var c;
            return c = b() ? "-kongregate" : "", "" + a.saveId + c
        }]), angular.module("swarmApp").factory("session", ["storage", "$rootScope", "$log", "util", "version", "env", "saveId", "isKongregate", function (a, b, c, d, e, f, g, h) {
            var i, j;
            return i = btoa("Cheater :(\n\n"), j = "|", new(function () {
                function k() {
                    this.reset(), c.debug("save id", this.id), d.assert(this.id, "no save id defined")
                }
                return k.prototype.reset = function () {
                    var a;
                    return a = new Date, this.id = g, this.heartbeatId = this.id + ":heartbeat", this.state = {
                        unittypes: {},
                        date: {
                            started: a,
                            restarted: a,
                            saved: a,
                            loaded: a,
                            reified: a,
                            closed: a
                        },
                        options: {},
                        upgrades: {},
                        statistics: {},
                        achievements: {},
                        watched: {},
                        skippedMillis: 0,
                        version: {
                            started: e,
                            saved: e
                        }
                    }, h() && (this.state.kongregate = !0), b.$broadcast("reset", {
                        session: this
                    })
                }, k.prototype._saves = function (a, b) {
                    var c, d;
                    return null == a && (a = this.state), null == b && (b = !0), b && (a.date.saved = new Date, delete a.date.loaded, null != (c = a.version) && (c.saved = e)), d = JSON.stringify(a), d = LZString.compressToBase64(d), d = i + d, d = "" + btoa(e) + j + d
                }, k.prototype._hasVersionHeader = function (a) {
                    return a.indexOf(j) >= 0
                }, k.prototype._splitVersionHeader = function (a) {
                    var b, c;
                    return this._hasVersionHeader(a) && (b = a.split(j), c = b[0], a = b[1]), [c, a]
                }, k.prototype._validateSaveVersion = function (a, b) {
                    var c, d, f, g, h, i, j, k, l, m, n;
                    if (null == a && (a = "0.1.0"), null == b && (b = e), j = a.split(".").map(function (a) {
                            return parseInt(a)
                        }), m = j[0], n = j[1], j[2], k = b.split(".").map(function (a) {
                            return parseInt(a)
                        }), f = k[0], g = k[1], k[2], m === f && 0 === f && n !== g) throw new Error("Beta save from different minor version");
                    if (m > 0 && 0 === f) throw new Error("1.0 save in 0.x game");
                    if (f > 0 && 0 === m && n < 2) throw new Error("nice try, no 0.1.x saves");
                    if (d = [/^1\.0\.0-publictest/], a !== b) {
                        for (l = [], h = 0, i = d.length; h < i; h++) {
                            if (c = d[h], c.test(a)) throw new Error("blacklisted save version");
                            l.push(void 0)
                        }
                        return l
                    }
                }, k.prototype._validateFormatVersion = function (a, b) {
                    var c, d, f, g, h;
                    if (null == b && (b = e), d = [/^1\.0\.0-publictest/], a !== b) {
                        for (h = [], f = 0, g = d.length; f < g; f++) {
                            if (c = d[f], c.test(a)) throw new Error("blacklisted save version");
                            h.push(void 0)
                        }
                        return h
                    }
                }, k.prototype._loads = function (a) {
                    var b, d, e, f, g, h, j, k, l, m, n;
                    a = a.replace(/\s+/g, ""), c.debug("decoding imported game. len", null != a ? a.length : void 0), g = this._splitVersionHeader(a), m = g[0], a = g[1], a = a.substring(i.length), a = LZString.decompressFromBase64(a), c.debug("decompressed imported game successfully", [a]), l = JSON.parse(a), c.debug("parsed imported game successfully", l), h = l.date;
                    for (d in h) n = h[d], l.date[d] = new Date(n);
                    for (l.date.loaded = new Date, this._validateSaveVersion(null != (j = l.version) ? j.started : void 0), m && this._validateFormatVersion(atob(m)), k = [l.unittypes, l.upgrades], b = 0, e = k.length; b < e; b++) {
                        f = k[b];
                        for (d in f) n = f[d], _.isNumber(n) && (n = n.toPrecision(15)), f[d] = new Decimal(n)
                    }
                    return l
                }, k.prototype.exportSave = function () {
                    return null == this._exportCache && (this._exportCache = this._saves(void 0, !1)), this._exportCache
                }, k.prototype.exportJson = function () {
                    return JSON.stringify(this.state)
                }, k.prototype.importSave = function (a, b) {
                    if (null == b && (b = !0), this.state = this._loads(a), this._exportCache = a, !b) return this._write()
                }, k.prototype._write = function () {
                    var d, e;
                    try {
                        a.setItem(this.id, this._exportCache), e = !0
                    } catch (a) {
                        d = a, c.error("failed to save game", d), b.$broadcast("save:failed", {
                            error: d,
                            session: this
                        })
                    }
                    if (e) return b.$broadcast("save", this)
                }, k.prototype.save = function () {
                    return f.isOffline && c.warn("cannot save, game is offline"), delete this._exportCache, this._exportCache = this._saves(), this._write(), c.debug("saving game (fresh export)")
                }, k.prototype._setItem = function (b, c) {
                    return a.setItem(b, c)
                }, k.prototype.getStoredSaveData = function (b) {
                    return null == b && (b = this.id), a.getItem(b)
                }, k.prototype.load = function (a) {
                    return this.importSave(this.getStoredSaveData(a))
                }, k.prototype.onClose = function () {
                    return this.onHeartbeat()
                }, k.prototype.onHeartbeat = function () {
                    if (f.isOffline) return !1;
                    try {
                        return this._setItem(this.heartbeatId, new Date)
                    } catch (a) {
                        return a, c.warn("couldn't write heartbeat")
                    }
                }, k.prototype._getHeartbeatDate = function () {
                    var b, d;
                    try {
                        if (d = a.getItem(this.heartbeatId)) return new Date(d)
                    } catch (a) {
                        return b = a, c.debug("Couldn't load heartbeat time to determine game-closed time. No biggie, continuing.", b)
                    }
                }, k.prototype.dateClosed = function (a) {
                    var b, d, e, f, g;
                    null == a && (a = !1), b = 0, !a && (e = this._getHeartbeatDate()) && (b = Math.max(b, e.getTime())), g = this.state.date;
                    for (f in g) d = g[f], "loaded" !== f && "saved" !== f && (b = Math.max(b, d.getTime()));
                    return c.debug("dateclosed final", b, f, (new Date).getTime() - b), new Date(b)
                }, k.prototype.millisSinceClosed = function (a, b) {
                    var c;
                    return null == a && (a = new Date), c = this.dateClosed(b), a.getTime() - c.getTime()
                }, k.prototype.durationSinceClosed = function (a, b) {
                    var c;
                    return c = this.millisSinceClosed(a, b), moment.duration(c, "milliseconds")
                }, k
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("DebugCtrl", ["$scope", "session", "game", "spreadsheet", "env", "unittypes", "flashqueue", "$timeout", "$log", "util", function (a, b, c, d, e, f, g, h, i, j) {
            if (a.$emit("debugPage"), e.isDebugEnabled) return a.dumps = [{
                title: "env",
                data: e
            }, {
                title: "game",
                data: !!c
            }, {
                title: "session",
                data: b
            }, {
                title: "unittypes",
                data: !!f
            }, {
                title: "spreadsheet",
                data: d
            }], a.notify = g, a.achieve = function () {
                return a.notify.push({
                    type: {
                        label: "fake achievement",
                        longdesc: "yay"
                    },
                    pointsEarned: function () {
                        return 42
                    },
                    description: function () {
                        return "wee"
                    }
                })
            }, a.throwUp = function () {
                throw new Error("throwing up (test exception)")
            }, a.assertFail = function () {
                return j.assert(!1, "throwing up (test assertion failure)")
            }, a.error = function () {
                return j.error("throwing up (test util.error)")
            }, a.form = {}, a.session = b, a.$watch("form.session", function (b, c) {
                return b !== c ? (i.debug("formsession update", b, a.session._saves(b, !1)), a.session.importSave(a.session._saves(JSON.parse(b), !1))) : i.debug("formsession equal")
            }), a.$watch("session", function () {
                return i.debug("session update"), a.form.sessionExport = a.session.exportSave(), a.form.session = JSON.stringify(a.session._loads(a.form.sessionExport), void 0, 2)
            }()), a.game = c, a.env = e, a.confirmReset = function () {
                if (confirm("You will lose everything and restart the game. You sure?")) return c.reset()
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("spreadsheet", ["$log", "$injector", "env", function (a, b, c) {
            var d;
            return d = b.get("spreadsheetPreload-" + c.spreadsheetKey), a.debug("loaded spreadsheet", c.spreadsheetKey, d), {
                data: d
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("bignumFormatter", ["options", function (a) {
            var b;
            return b = new numberformat.Formatter({
                    backend: "decimal.js",
                    format: "standard-decimal",
                    rounding: Decimal.ROUND_FLOOR,
                    formats: _.extend({}, _.pick(numberformat.Formats, "hybrid", "engineering"), {
                        "standard-decimal": numberformat.Formats.standard,
                        "scientific-e": numberformat.Formats.scientific
                    })
                }),
                function (c) {
                    var d;
                    return null == c && (c = {}), d = function (e, f, g) {
                        var h;
                        return null == f && (f = 0), h = c, g && (h = _.extend({}, h, g)), void 0 === e ? "" : (h.format = a.notation(), h.maxSmall = f, d = b.format(e, h))
                    }, d.$stateful = !0, d
                }
        }]), angular.module("swarmApp").filter("bignum", ["bignumFormatter", function (a) {
            return a({
                flavor: "short"
            })
        }]), angular.module("swarmApp").filter("longnum", ["bignumFormatter", function (a) {
            return a({
                flavor: "full",
                sigfigs: 6,
                minsuffix: 1e6
            })
        }]), angular.module("swarmApp").filter("ceil", function () {
            return function (a) {
                return Math.ceil(a)
            }
        }), angular.module("swarmApp").filter("percent", ["$filter", function (a) {
            return function (b, c) {
                var d;
                return null == c && (c = {}), _.isNumber(c) && (c = {
                    places: c
                }), null == c.places && (c.places = 0), d = new Decimal(b + ""), c.plusOne && (d = d.minus(1)), d = d.times(100), c.floor && (d = d.floor()), (d = c.longnum ? a("longnum")(d) : a("number")(d.toNumber(), c.places)) + "%"
            }
        }]), angular.module("swarmApp").constant("numberSuffixesShort", numberformat.Formats.standard.suffixGroups.short), angular.module("swarmApp").constant("numberSuffixesLong", numberformat.Formats.standard.suffixGroups.full)
    }.call(this),
    function () {
        "use strict";
        var a = [].slice;
        angular.module("swarmApp").factory("spreadsheetUtil", ["util", function (b) {
            return new(function () {
                function c() {}
                return c.prototype.defaultFilter = function (a) {
                    return !!a || _.isNumber(a)
                }, c.prototype.setNested = function (b, c, d) {
                    var e, f, g, h, i, j, k;
                    for (k = c, c = 2 <= k.length ? a.call(k, 0, f = k.length - 1) : (f = 0, []), h = k[f++], e = b, g = 0, i = c.length; g < i; g++) j = c[g], null == e[j] && (e[j] = {}), e = e[j];
                    return e[h] = d, b
                }, c.prototype.getNested = function (a, b) {
                    var c, d, e, f;
                    for (c = a, d = 0, e = b.length; d < e; d++) f = b[d], c = c[f];
                    return c
                }, c.prototype.normalizeRow = function (a, b) {
                    var c, d, e, f;
                    null == b && (b = this.defaultFilter), e = {};
                    for (c in a) f = a[c], b(f) && (d = c.split("."), this.setNested(e, d, f));
                    return e
                }, c.prototype.normalizeRows = function (a, b) {
                    var c, d, e, f;
                    for (null == b && (b = this.defaultFilter), e = [], c = 0, d = a.length; c < d; c++) f = a[c], e.push(this.normalizeRow(f, b));
                    return e
                }, c.prototype.groupRows = function (a, b, c) {
                    var d, e, f, g, h, i, j, k, l, m, n, o, p, q;
                    null == c && (c = this.defaultFilter), q = [];
                    for (h in a) {
                        if (m = a[h], e = _.groupBy(b, h), p = _.uniq(_.map(b, h)), _.isString(m) && (m = [m]), !_.isArray(m)) throw new Error("groupRows: nested groupings not supported yet");
                        for (f = 0, j = p.length; f < j; f++)
                            for (i = p[f], d = e[i], q.push(o = _.clone(d[0])), g = 0, k = m.length; g < k; g++) l = m[g], n = _.map(d, l), o[l] = _.filter(n, c)
                    }
                    return q
                }, c.prototype.parseRows = function (a, b, c) {
                    var d;
                    return null == c && (c = this.defaultFilter), d = this.normalizeRows(b, c), this.groupRows(a, d, c)
                }, c.prototype.resolveList = function (a, c, d, e) {
                    var f, g, h, i, j;
                    for (null == e && (e = {}), null == e.required && (e.required = !0), j = [], f = 0, g = a.length; f < g; f++) i = a[f], h = i[c], i[c] = d[h], j.push(b.assert(i[c] || !e.required, "couldn't resolve ref: " + i + "." + c + "=" + h, i, c, h, d[h], a));
                    return j
                }, c
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").config(["$provide", function (a) {
            return a.decorator("$exceptionHandler", ["$delegate", "$injector", function (a, b) {
                var c;
                return c = null,
                    function (d, e) {
                        return a(d, e), null == c && (c = b.get("$rootScope")), c.$emit("unhandledException", {
                            exception: d,
                            cause: e
                        })
                    }
            }])
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("ProducerPath", ["$log", "UNIT_LIMIT", function (a, b) {
            return function () {
                function a(a, b) {
                    var c;
                    this.unit = a, this.path = b, c = _.map(this.path, function (a) {
                        return function (a) {
                            return a.parent.name
                        }
                    }()).join(">"), this.name = this.unit.name + ":" + c + ">" + this.unit.name
                }
                return a.prototype.first = function () {
                    return this.path[0]
                }, a.prototype.isZero = function () {
                    return this.first().parent.count().isZero()
                }, a.prototype.degree = function () {
                    return this.path.length
                }, a.prototype.degreeOrZero = function () {
                    return this.isZero() ? 0 : this.degree()
                }, a.prototype.prodEach = function () {
                    var a, c;
                    return null != (a = this.unit.game.cache.producerPathProdEach)[c = this.name] ? a[c] : a[c] = function (a) {
                        return function () {
                            var c, d, e, f, g, h;
                            for (g = new Decimal(1), f = a.path, d = 0, e = f.length; d < e; d++) c = f[d], h = new Decimal(c.prod.val).plus(c.parent.stat("base", 0)), g = g.times(h), g = g.times(c.parent.stat("prod", 1)), g = Decimal.min(g, b);
                            return g
                        }
                    }(this)()
                }, a.prototype.coefficient = function (a) {
                    return null == a && (a = this.first().parent.rawCount()), a.floor().times(this.prodEach())
                }, a.prototype.coefficientNow = function () {
                    return this.coefficient(this.first().parent.count())
                }, a.prototype.count = function (a) {
                    var b, c;
                    return c = this.degree(), b = this.coefficient(), b.times(Decimal.pow(a, c)).dividedBy(math.factorial(c))
                }, a
            }()
        }]), angular.module("swarmApp").factory("ProducerPaths", ["$log", "ProducerPath", function (a, b) {
            return function () {
                function a(a, c) {
                    this.unit = a, this.raw = c, this.list = _.map(this.raw, function (a) {
                        return function (c) {
                            var d;
                            return d = c.concat([a.unit]), new b(a.unit, _.map(c, function (a, b) {
                                var c, e;
                                return c = d[b + 1], e = a.prodByName[c.name], {
                                    parent: a,
                                    child: c,
                                    prod: e
                                }
                            }))
                        }
                    }(this)), this.byDegree = _.groupBy(this.list, function (a) {
                        return a.degree()
                    })
                }
                return a.prototype.getDegreeCoefficient = function (a, b) {
                    var c, d, e, f, g, h;
                    for (null == b && (b = !1), h = new Decimal(0), g = null != (f = this.byDegree[a]) ? f : [], c = 0, d = g.length; c < d; c++) e = g[c], h = h.plus(b ? e.coefficientNow() : e.coefficient());
                    return h
                }, a.prototype.getMaxDegree = function () {
                    return this.getCoefficients().length - 1
                }, a.prototype.getCoefficients = function () {
                    var a, b;
                    return null != (a = this.unit.game.cache.producerPathCoefficients)[b = this.unit.name] ? a[b] : a[b] = this._getCoefficients()
                }, a.prototype._getCoefficients = function (a) {
                    var b, c, d, e, f, g, h, i, j, k;
                    for (null == a && (a = !1), k = [a ? this.unit.count() : this.unit.rawCount()], i = this.list, d = 0, f = i.length; d < f; d++) h = i[d], c = h.degree(), b = a ? h.coefficientNow() : h.coefficient(), b.isZero() || (k[c] = (null != (j = k[c]) ? j : new Decimal(0)).plus(b));
                    for (c = e = 0, g = k.length; e < g; c = ++e) null == k[c] && (k[c] = new Decimal(0));
                    return k
                }, a.prototype.getCoefficientsNow = function () {
                    return this._getCoefficients(!0)
                }, a.prototype.count = function (a) {
                    var b, c, d, e, f, g;
                    for (g = new Decimal(0), f = this.getCoefficients(), c = d = 0, e = f.length; d < e; c = ++d) b = f[c], g = g.plus(b.times(Decimal.pow(a, c)).dividedBy(math.factorial(c)));
                    return g
                }, a
            }()
        }]), angular.module("swarmApp").factory("Unit", ["util", "$log", "Effect", "ProducerPaths", "UNIT_LIMIT", function (a, b, c, d, e) {
            return function () {
                function f(a, b) {
                    this.game = a, this.unittype = b, this.name = this.unittype.name, this.suffix = "", this.affectedBy = [], this.type = this.unittype
                }
                return f.prototype._init = function () {
                    var b;
                    if (this.prod = _.map(this.unittype.prod, function (a) {
                            return function (b) {
                                var c;
                                return c = _.clone(b), c.unit = a.game.unit(b.unittype), c.val = new Decimal(c.val), c
                            }
                        }(this)), this.prodByName = _.keyBy(this.prod, function (a) {
                            return a.unit.name
                        }), this.cost = _.map(this.unittype.cost, function (a) {
                            return function (b) {
                                var c;
                                return c = _.clone(b), c.unit = a.game.unit(b.unittype), c.val = new Decimal(c.val), c
                            }
                        }(this)), this.costByName = _.keyBy(this.cost, function (a) {
                            return a.unit.name
                        }), this.warnfirst = _.map(this.unittype.warnfirst, function (a) {
                            return function (b) {
                                var c;
                                return c = _.clone(b), c.unit = a.game.unit(b.unittype), c
                            }
                        }(this)), this.showparent = this.game.unit(this.unittype.showparent), this.upgrades = {
                            list: function () {
                                var a, c, d, e, f;
                                for (d = this.game.upgradelist(), f = [], a = 0, c = d.length; a < c; a++) b = d[a], this.unittype !== b.type.unittype && (null != (e = this.showparent) ? e.unittype : void 0) !== b.type.unittype || f.push(b);
                                return f
                            }.call(this)
                        }, this.upgrades.byName = _.keyBy(this.upgrades.list, "name"), this.upgrades.byClass = _.groupBy(this.upgrades.list, function (a) {
                            return a.type.class
                        }), this.requires = _.map(this.unittype.requires, function (b) {
                            return function (c) {
                                var d;
                                return a.assert(c.unittype || c.upgradetype, "unit require without a unittype or upgradetype", b.name, name, c), a.assert(!(c.unittype && c.upgradetype), "unit require with both unittype and upgradetype", b.name, name, c), d = _.clone(c), d.val = new Decimal(d.val), null != c.unittype && (d.resource = d.unit = a.assert(b.game.unit(c.unittype))), null != c.upgradetype && (d.resource = d.upgrade = a.assert(b.game.upgrade(c.upgradetype))), d
                            }
                        }(this)), this.cap = _.map(this.unittype.cap, function (a) {
                            return function (b) {
                                var c;
                                return c = _.clone(b), c.unit = a.game.unit(c.unittype), c.val = new Decimal(c.val), c
                            }
                        }(this)), this.effect = _.map(this.unittype.effect, function (a) {
                            return function (b) {
                                var d;
                                return d = new c(a.game, a, b), d.unit.affectedBy.push(d), d
                            }
                        }(this)), this.tab = this.game.tabs.byName[this.unittype.tab], this.tab) return this.next = this.tab.next(this), this.prev = this.tab.prev(this)
                }, f.prototype._init2 = function () {
                    return this._producerPath = new d(this, _.map(this.unittype.producerPathList, function (b) {
                        return function (c) {
                            return _.map(c, function (c) {
                                var d;
                                return d = b.game.unit(c), a.assert(d), d
                            })
                        }
                    }(this)))
                }, f.prototype.isCountInitialized = function () {
                    return null != this.game.session.state.unittypes[this.name]
                }, f.prototype.rawCount = function () {
                    var b, c;
                    return null != (b = this.game.cache.unitRawCount)[c = this.name] ? b[c] : b[c] = function (b) {
                        return function () {
                            var c, d;
                            return d = null != (c = b.game.session.state.unittypes[b.name]) ? c : 0, _.isNaN(d) && (a.error("NaN count. oops.", b.name, d), d = 0), _.isNumber(d) && (d = d.toPrecision(15)), new Decimal(d)
                        }
                    }(this)()
                }, f.prototype._setCount = function (a) {
                    return this.game.session.state.unittypes[this.name] = new Decimal(a), this.game.cache.onUpdate()
                }, f.prototype._addCount = function (a) {
                    return this._setCount(this.rawCount().plus(a))
                }, f.prototype._subtractCount = function (a) {
                    return this._addCount(new Decimal(a).times(-1))
                }, f.prototype._parents = function () {
                    var a, b, c, d, e;
                    for (d = this._producerPath.list, e = [], a = 0, b = d.length; a < b; a++) c = d[a], c.first().parent.prodByName[this.name] && e.push(c.first().parent);
                    return e
                }, f.prototype._getCap = function () {
                    var a, b;
                    return null != (a = this.game.cache.unitCap)[b = this.name] ? a[b] : a[b] = function (a) {
                        return function () {
                            var b;
                            if (a.hasStat("capBase")) return b = a.stat("capBase"), b = b.times(a.stat("capMult", 1)), b = b.plus(a.stat("capFlat", 0))
                        }
                    }(this)()
                }, f.prototype.capValue = function (a) {
                    var b;
                    return b = this._getCap(), null == b ? null == a ? a : Decimal.min(a, e) : null == a ? b : Decimal.min(a, b)
                }, f.prototype.capPercent = function () {
                    var a;
                    if (null != (a = this.capValue())) return this.count().dividedBy(a)
                }, f.prototype.capDurationSeconds = function () {
                    var a, b, c;
                    if (null != (b = this.capValue())) return null != (c = "function" == typeof (a = this.estimateSecsUntilEarned(b)).toNumber ? a.toNumber() : void 0) ? c : 0
                }, f.prototype.capDurationMoment = function () {
                    var a;
                    if (null != (a = this.capDurationSeconds())) return moment.duration(a, "seconds")
                }, f.ESTIMATE_BISECTION = !0, f.prototype.isEstimateExact = function () {
                    return this._producerPath.getMaxDegree() <= 2 || this.constructor.ESTIMATE_BISECTION
                }, f.prototype.isEstimateCacheable = function () {
                    return this._producerPath.getMaxDegree() <= 2 || this.constructor.ESTIMATE_BISECTION
                }, f.prototype.estimateSecsUntilEarned = function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
                    if (g = this.count(), a = new Decimal(a), p = a.minus(g), p.lessThanOrEqualTo(0)) return 0;
                    if (i = this._producerPath.getMaxDegree(), f = this._producerPath.getCoefficientsNow(), q = new Decimal(1 / 0), i > 0 && (f[1].isZero() || (m = q = Decimal.min(q, p.dividedBy(f[1]))), i > 1 && (f[0], c = f[1], b = f[2], b.isZero() || (d = p.negated(), b = b.dividedBy(2), j = c.times(c).minus(b.times(d).times(4)).sqrt(), q = Decimal.min(q, c.negated().plus(j).dividedBy(b.times(2)))), i > 2)))
                        if (this.constructor.ESTIMATE_BISECTION) n = null != m ? m : p.dividedBy(this._countInSecsFromNow(new Decimal(1)).minus(g)), q = n.greaterThan(0) ? this.estimateSecsUntilEarnedBisection(a, n) : new Decimal(1);
                        else
                            for (o = f.slice(3), h = k = 0, l = o.length; k < l; h = ++k) e = o[h], e.isZero() || (h += 3, q = Decimal.min(q, p.dividedBy(e).times(math.factorial(h)).pow(new Decimal(1).dividedBy(h))));
                    return q
                }, f.prototype.estimateSecsUntilEarnedBisection = function (a, c) {
                    var d, e, f, g, h, i, j, k, l, m, n;
                    for (b.debug("bisecting"), e = function (b) {
                            return function (c) {
                                return a.minus(b._countInSecsFromNow(c))
                            }
                        }(this), f = function (a, b) {
                            var c;
                            return c = new Decimal(.2), b.minus(a).dividedBy(2).lessThan(c)
                        }, k = new Decimal(0), h = c, l = e(k), e(h), g = 0, m = (new Date).getTime(), d = !1; g < 50 && !d;) g += 1, i = h.plus(k).dividedBy(2), j = e(i), j.isZero() || f(k, h) ? d = !0 : j.isNegative() === l.isNegative() ? (k = i, l = e(k)) : (h = i, e(h));
                    return n = (new Date).getTime() - m, d ? b.debug("bisection estimate for " + this.name + " finished in " + g + " iterations. original range: " + c + ", estimate is " + i + " - plus game.difftime of " + this.game.diffSeconds() + ", that's " + i.plus(this.game.diffSeconds()) + " - this shouldn't change much over multiple iterations. time: " + n) : b.debug("bisection estimate for " + this.name + " took more than " + g + " iterations; quitting. precision: " + h.minus(k).dividedBy(2) + " (down from " + c + "). time: " + n), i
                }, f.prototype.count = function () {
                    var a, b;
                    return null != (a = this.game.cache.unitCount)[b = this.name] ? a[b] : a[b] = this._countInSecsFromNow()
                }, f.prototype._countInSecsFromNow = function (a) {
                    return null == a && (a = new Decimal(0)), this._countInSecsFromReified(a.plus(this.game.diffSeconds()))
                }, f.prototype._countInSecsFromReified = function (a) {
                    return null == a && (a = 0), this.capValue(this._producerPath.count(a))
                }, f.prototype.spentResources = function () {
                    var a, b, c, d, e;
                    for (c = [].concat(this.game.unitlist(), this.game.upgradelist()), d = [], a = 0, b = c.length; a < b; a++) e = c[a], null != e.costByName[this.name] && d.push(e);
                    return d
                }, f.prototype.spent = function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
                    for (null == a && (a = {}), n = new Decimal(0), i = this.game.unitlist(), e = 0, g = i.length; e < g; e++) o = i[e], c = null != (j = null != (k = o.costByName[this.name]) ? k.val : void 0) ? j : 0, n = n.plus(o.count().times(c));
                    for (l = this.game.upgradelist(), f = 0, h = l.length; f < h; f++) o = l[f], o.costByName[this.name] && null == a[o.name] && (d = o.sumCost(o.count(), 0), b = _.find(d, function (a) {
                        return function (b) {
                            return b.unit.name === a.name
                        }
                    }(this)), n = n.plus(null != (m = null != b ? b.val : void 0) ? m : 0));
                    return n
                }, f.prototype._costMetPercent = function () {
                    var a, b, c, d, e;
                    for (d = new Decimal(1 / 0), e = this.eachCost(), b = 0, c = e.length; b < c; b++) a = e[b], a.val.greaterThan(0) && (d = Decimal.min(d, a.unit.count().dividedBy(a.val)));
                    return d
                }, f.prototype._costMetPercentOfVelocity = function () {
                    var a, b, c, d, e;
                    for (d = new Decimal(1 / 0), e = this.eachCost(), b = 0, c = e.length; b < c; b++) a = e[b], a.val.greaterThan(0) && (d = Decimal.min(d, a.unit.velocity().dividedBy(a.val)));
                    return d
                }, f.prototype.isVisible = function () {
                    return !this.unittype.disabled && (!!this.game.cache.unitVisible[this.name] || (this.game.cache.unitVisible[this.name] = this._isVisible()))
                }, f.prototype._isVisible = function () {
                    var b, c, d, e;
                    if (this.count().greaterThan(0)) return !0;
                    for (a.assert(this.requires.length > 0, "unit without visibility requirements", this.name), d = this.requires, b = 0, c = d.length; b < c; b++)
                        if (e = d[b], e.val.greaterThan(e.resource.count())) {
                            if ("OR" !== e.op) return !1
                        } else if ("OR" === e.op) return !0;
                    return !0
                }, f.prototype.isBuyButtonVisible = function () {
                    var a, b, c, d;
                    if (b = this.eachCost(), this.unittype.unbuyable || 0 === b.length) return !1;
                    for (c = 0, d = b.length; c < d; c++)
                        if (a = b[c], !a.unit.isVisible()) return !1;
                    return !0
                }, f.prototype.maxCostMet = function (a) {
                    var b, c;
                    return null == a && (a = 1), null != (b = this.game.cache.unitMaxCostMet)[c = this.name + ":" + a] ? b[c] : b[c] = function (b) {
                        return function () {
                            return b._costMetPercent().times(a).floor()
                        }
                    }(this)()
                }, f.prototype.maxCostMetOfVelocity = function () {
                    var a, b;
                    return null != (a = this.game.cache.unitMaxCostMetOfVelocity)[b = "" + this.name] ? a[b] : a[b] = function (a) {
                        return function () {
                            return a._costMetPercentOfVelocity()
                        }
                    }(this)()
                }, f.prototype.maxCostMetOfVelocityReciprocal = function () {
                    return new Decimal(1).dividedBy(this.maxCostMetOfVelocity())
                }, f.prototype.isCostMet = function () {
                    return this.maxCostMet().greaterThan(0)
                }, f.prototype.isBuyable = function (a) {
                    return null == a && (a = !1), (this.isCostMet() || a) && this.isBuyButtonVisible() && !this.unittype.unbuyable
                }, f.prototype.buyMax = function (a) {
                    return this.buy(this.maxCostMet(a))
                }, f.prototype.twinMult = function () {
                    var a;
                    return a = new Decimal(1), a = a.plus(this.stat("twinbase", 0)), a = a.times(this.stat("twin", 1))
                }, f.prototype.buy = function (a) {
                    if (null == a && (a = 1), !this.isCostMet()) throw new Error("We require more resources");
                    if (!this.isBuyable()) throw new Error("Cannot buy that unit");
                    return a = Decimal.min(a, this.maxCostMet()), this.game.withSave(function (b) {
                        return function () {
                            var c, d, e, f, g, h, i, j, k;
                            for (i = b.eachCost(), e = 0, g = i.length; e < g; e++) c = i[e], c.unit._subtractCount(c.val.times(a));
                            for (k = a.times(b.twinMult()), b._addCount(k), j = b.effect, f = 0, h = j.length; f < h; f++) d = j[f], d.onBuyUnit(k);
                            return "energy" === b.name && b.game.unit("mtxEnergy")._addCount(k), {
                                num: a,
                                twinnum: k
                            }
                        }
                    }(this))
                }, f.prototype.isNewlyUpgradable = function () {
                    var a, b, c, d;
                    return d = null != (a = null != (b = this.showparent) && null != (c = b.upgrades) ? c.list : void 0) ? a : this.upgrades.list, _.some(d, function (a) {
                        return a.isVisible() && a.isNewlyUpgradable()
                    })
                }, f.prototype.totalProduction = function () {
                    var a, b;
                    return null != (a = this.game.cache.totalProduction)[b = this.name] ? a[b] : a[b] = function (a) {
                        return function () {
                            var b, c, d, e, f;
                            e = {}, b = a.count().floor(), d = a.eachProduction();
                            for (c in d) f = d[c], e[c] = f.times(b);
                            return e
                        }
                    }(this)()
                }, f.prototype.eachProduction = function () {
                    var a, b;
                    return null != (a = this.game.cache.eachProduction)[b = this.name] ? a[b] : a[b] = function (a) {
                        return function () {
                            var b, c, d, e, f;
                            for (f = {}, e = a.prod, b = 0, c = e.length; b < c; b++) d = e[b], f[d.unit.unittype.name] = d.val.plus(a.stat("base", 0)).times(a.stat("prod", 1));
                            return f
                        }
                    }(this)()
                }, f.prototype.eachCost = function () {
                    var a, b;
                    return null != (a = this.game.cache.eachCost)[b = this.name] ? a[b] : a[b] = _.map(this.cost, function (a) {
                        return function (b) {
                            return b = _.clone(b), b.val = b.val.times(a.stat("cost", 1)).times(a.stat("cost." + b.unit.unittype.name, 1)), b
                        }
                    }(this))
                }, f.prototype.velocity = function () {
                    var a, b;
                    return null != (a = this.game.cache.velocity)[b = this.name] ? a[b] : a[b] = Decimal.min(e, this._producerPath.getDegreeCoefficient(1, !0))
                }, f.prototype.isVelocityConstant = function () {
                    return this._producerPath.getMaxCoefficient() <= 1
                }, f.prototype.hasStat = function (a, b) {
                    return null == b && (b = void 0), null != this.stats()[a] && this.stats()[a] !== b
                }, f.prototype.stat = function (b, c) {
                    var d, e;
                    return null == c && (c = void 0), a.assert(null != b), null != c && (c = new Decimal(c)), e = null != (d = this.stats()[b]) ? d : c, a.assert(null != e, "no such stat", this.name, b), new Decimal(e)
                }, f.prototype.stats = function () {
                    var a, b;
                    return null != (a = this.game.cache.stats)[b = this.name] ? a[b] : a[b] = function (a) {
                        return function () {
                            var b, c, d, e, f, g, h, i, j, k;
                            for (i = {}, h = {}, f = a.upgrades.list, b = 0, d = f.length; b < d; b++) k = f[b], k.calcStats(i, h);
                            for (g = a.affectedBy, c = 0, e = g.length; c < e; c++) j = g[c], j.calcStats(i, h, j.parent.count());
                            return i
                        }
                    }(this)()
                }, f.prototype.statistics = function () {
                    var a, b, c;
                    return null != (a = null != (b = this.game.session.state.statistics) && null != (c = b.byUnit) ? c[this.name] : void 0) ? a : {}
                }, f.prototype.url = function () {
                    return this.tab.url(this)
                }, f.prototype.addUnitTimer = function () {
                    var a, b;
                    return a = "addUnitTimed-" + this.name, null != (b = this.game.session.state.date[a]) ? b : new Date(0)
                }, f.prototype.addUnitTimerElapsedMillis = function (a) {
                    return null == a && (a = this.game.now), a.getTime() - this.addUnitTimer().getTime()
                }, f.prototype.addUnitTimerRemainingMillis = function (a, b) {
                    return null == b && (b = this.game.now), Math.max(0, a - this.addUnitTimerElapsedMillis(b))
                }, f.prototype.isAddUnitTimerReady = function (a, b) {
                    return null == b && (b = this.game.now), 0 === this.addUnitTimerRemainingMillis(a)
                }, f.prototype.setAddUnitTimer = function (b) {
                    var c;
                    return null == b && (b = this.game.now), c = "addUnitTimed-" + this.name, this.game.session.state.date[c] = b, a.assert(0 === this.addUnitTimerElapsedMillis(b))
                }, f
            }()
        }]), angular.module("swarmApp").factory("UnitType", function () {
            return function () {
                function a(a) {
                    _.extend(this, a), this.producerPath = {}, this.producerPathList = []
                }
                return a.prototype.producerNames = function () {
                    return _.mapValues(this.producerPath, function (a) {
                        return _.map(a, function (a) {
                            return _.map(a, "name")
                        })
                    })
                }, a
            }()
        }), angular.module("swarmApp").factory("UnitTypes", ["spreadsheetUtil", "UnitType", "util", "$log", function (a, b, c, d) {
            return function () {
                function e(a) {
                    var b, c, d;
                    for (null == a && (a = []), this.list = [], this.byName = {}, b = 0, c = a.length; b < c; b++) d = a[b], this.register(d)
                }
                return e.prototype.register = function (a) {
                    return this.list.push(a), this.byName[a.name] = a
                }, e._buildProducerPath = function (a, b, c) {
                    var d, e, f, g, h, i, j;
                    for (c = [b].concat(c), a.producerPathList.push(c), null == (d = a.producerPath)[g = b.name] && (d[g] = []), a.producerPath[b.name].push(c), i = b.producedBy, j = [], e = 0, f = i.length; e < f; e++) h = i[e], j.push(this._buildProducerPath(a, h, c));
                    return j
                }, e.parseSpreadsheet = function (f, g) {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F;
                    for (E = a.parseRows({
                            name: ["cost", "prod", "warnfirst", "requires", "cap", "effect"]
                        }, g.data.unittypes.elements), C = new e(function () {
                            var a, c, d;
                            for (d = [], a = 0, c = E.length; a < c; a++) D = E[a], d.push(new b(D));
                            return d
                        }()), w = C.list, i = 0, m = w.length; i < m; i++) F = w[i], F.producedBy = [], F.affectedBy = [];
                    for (x = C.list, j = 0, n = x.length; j < n; j++) {
                        for (F = x[j], F.showparent && a.resolveList([F], "showparent", C.byName), a.resolveList(F.cost, "unittype", C.byName), a.resolveList(F.prod, "unittype", C.byName), a.resolveList(F.warnfirst, "unittype", C.byName), a.resolveList(F.requires, "unittype", C.byName, {
                                required: !1
                            }), a.resolveList(F.cap, "unittype", C.byName, {
                                required: !1
                            }), a.resolveList(F.effect, "unittype", C.byName), a.resolveList(F.effect, "type", f.byName), F.slug = F.label, y = F.prod, k = 0, o = y.length; k < o; k++) u = y[k], u.unittype.producedBy.push(F), c.assert(u.val > 0, "unittype prod.val must be positive", u);
                        for (z = F.cost, l = 0, p = z.length; l < p; l++) h = z[l], c.assert(h.val > 0 || F.unbuyable && F.disabled, "unittype cost.val must be positive", h)
                    }
                    for (A = C.list, s = 0, q = A.length; s < q; s++)
                        for (F = A[s], B = F.producedBy, t = 0, r = B.length; t < r; t++) v = B[t], this._buildProducerPath(F, v, []);
                    return d.debug("built unittypes", C), C
                }, e
            }()
        }]), angular.module("swarmApp").factory("unittypes", ["UnitTypes", "effecttypes", "spreadsheet", function (a, b, c) {
            return a.parseSpreadsheet(b, c)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("HeaderCtrl", ["$scope", "$window", "env", "version", "session", "timecheck", "$http", "$interval", "$log", "$location", "kongregateScrolling", "pageTheme", "remoteSaveInit", "touchTooltipInit", "versioncheck", "analytics", "statistics", "achievementslistener", "favico", function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
            var t, u;
            return a.env = c, a.version = d, a.session = e, u = 18e5, (t = function () {
                return f.enforceNetTime().then(function (b) {
                    return i.debug("net time check successful", b), a.netTimeInvalid = b
                }, function () {
                    return i.warn("failed to check net time")
                })
            })(), h(t, u), a.konami = new Konami(function () {
                return a.$emit("konami"), i.debug("konami")
            }), k(a), l(a), m(a), n(a)
        }]), angular.module("swarmApp").factory("pageTheme", ["$log", "options", function (a, b) {
            return function (c) {
                var d;
                return c.options = b, d = b.constructor.THEME_EL, c.$watch("options.theme()", function (a) {
                    return function (a, b) {
                        var c;
                        return a.url !== d.attr("href") && d.attr("href", a.url), c = $("body"), null != b && c.removeClass("theme-" + b.name), c.addClass("theme-" + a.name)
                    }
                }()), c.$watch("options.themeExtra()", function (b) {
                    return function (b, d) {
                        if (null != b || null != d) return null == c.themeExtraEl && (c.themeExtraEl = $('<style type="text/css"></style>'), c.themeExtraEl.appendTo("body")), c.themeExtraEl.html(b), a.debug("extratheming", c.themeExtraEl, b)
                    }
                }())
            }
        }]), angular.module("swarmApp").factory("kongregateScrolling", ["$log", "kongregate", "options", function (a, b, c) {
            return function (d) {
                if (d.options = c, b.isKongregate()) return d.$watch("options.scrolling()", function (a) {
                    return function (a, d) {
                        return a !== d && (c.isScrollingChangedSincePageLoad = !0, "resize" === d && (c.isScrollingChangedFromResizeSincePageLoad = !0)), b.onScrollOptionChange(!c.isScrollingChangedSincePageLoad, d)
                    }
                }()), d.$watch("options.iframeMinX()", function (c) {
                    return function (c, d) {
                        if (c !== d) return a.debug("onchange resize x", c, d), b._resizeGame()
                    }
                }()), d.$watch("options.iframeMinY()", function (c) {
                    return function (c, d) {
                        if (c !== d) return a.debug("onchange resize y", c, d), b._resizeGame()
                    }
                }()), b.onScrollOptionChange(!c.isScrollingChangedSincePageLoad), b.onLoad.then(function () {
                    if (c.iframeMinX() !== c.constructor.IFRAME_X_MIN || c.iframeMinY() !== c.constructor.IFRAME_Y_MIN) return a.debug("onload resize", c.iframeMinX(), c.iframeMinY()), b._resizeGame()
                }), d.onRender = function () {
                    return b.onResize()
                }
            }
        }]), angular.module("swarmApp").factory("remoteSaveInit", ["$log", "kongregate", "kongregatePlayfabSyncer", "wwwPlayfabSyncer", "options", function (a, b, c, d, e) {
            return function (b) {
                return b.$watch("options.autopush()", function (b) {
                    return function (b, e) {
                        var f, g, h, i, j;
                        for (h = [c, d], i = [], f = 0, g = h.length; f < g; f++) j = h[f], i.push(function (c) {
                            if (a.debug("autopush trying to setup", c.constructor.name), c.isVisible() || ("function" == typeof c.isActive ? c.isActive() : void 0)) return a.debug("autopush visible", c.constructor.name), c.isInit() ? (a.debug("autopush setup", c.constructor.name), c.initAutopush(b)) : (a.debug("autopush not yet init", c.constructor.name), c.init(function () {
                                if (a.debug("autopush init done, checking success", c.constructor.name), c.isInit()) return a.debug("autopush setup", c.constructor.name), c.initAutopush(b)
                            }))
                        }(j));
                        return i
                    }
                }())
            }
        }]), angular.module("swarmApp").factory("touchTooltipInit", ["$log", "$location", "$timeout", function (a, b, c) {
            return function (c) {
                var d, e, f, g;
                return d = $("body"), e = $(window.document), f = "touchstart touchmove touchend touchcancel", b.search().mousetouch && (f += " mousedown mouseup"), g = function () {
                    var b;
                    return a.debug("touch event detected, setting up tooltip-on-touch"), e.off(f, g), b = "[title]", d.tooltip({
                        selector: b,
                        trigger: "click"
                    })
                }, e.on(f, g), a.debug("adding setupTouch hook")
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var a = [].slice;
        angular.module("swarmApp").factory("Cache", function () {
            return function () {
                function a() {
                    this.firstSpawn = {}, this.onUpdate(), this.onRespec()
                }
                return a.prototype.onPeriodic = function () {
                    return this._lastPeriodicClear = (new Date).getTime(), this.upgradeIsUpgradable = {}, this.upgradeEstimateSecsUntilBuyablePeriodic = {}
                }, a.prototype.onUpdate = function () {
                    return this.onPeriodic(), this.onTick(), this.tinyUrl = {}, this.stats = {}, this.eachCost = {}, this.eachProduction = {}, this.upgradeTotalCost = {}, this.producerPathProdEach = {}, this.producerPathCoefficients = {}, this.unitRawCount = {}, this.unitCap = {}, this.unitCapPercent = {}, this.upgradeEstimateSecsUntilBuyableCacheSafe = {}
                }, a.prototype.onTick = function () {
                    if (this.unitCount = {}, this.velocity = {}, this.totalProduction = {}, this.upgradeMaxCostMet = {}, this.unitMaxCostMet = {}, this.unitMaxCostMetOfVelocity = {}, delete this.tutorialStep, (new Date).getTime() - this._lastPeriodicClear >= 3e3) return this.onPeriodic()
                }, a.prototype.onRespec = function () {
                    return this.unitVisible = {}, this.upgradeVisible = {}
                }, a
            }()
        }), angular.module("swarmApp").factory("Game", ["unittypes", "upgradetypes", "achievements", "util", "$log", "Upgrade", "Unit", "Achievement", "Tab", "Cache", function (b, c, d, e, f, g, h, i, j, k) {
            return function () {
                function l(a) {
                    this.session = a, this._init()
                }
                return l.prototype._init = function () {
                    var a, e, l, m, n, o, p, q, r, s, t;
                    for (this._units = {
                            list: _.map(b.list, function (a) {
                                return function (b) {
                                    return new h(a, b)
                                }
                            }(this))
                        }, this._units.byName = _.keyBy(this._units.list, "name"), this._units.bySlug = _.keyBy(this._units.list, function (a) {
                            return a.unittype.slug
                        }), this._upgrades = {
                            list: _.map(c.list, function (a) {
                                return function (b) {
                                    return new g(a, b)
                                }
                            }(this))
                        }, this._upgrades.byName = _.keyBy(this._upgrades.list, "name"), this._achievements = {
                            list: _.map(d.list, function (a) {
                                return function (b) {
                                    return new i(a, b)
                                }
                            }(this))
                        }, this._achievements.byName = _.keyBy(this._achievements.list, "name"), this.achievementPointsPossible = d.pointsPossible(), f.debug("possiblepoints: ", this.achievementPointsPossible), this.tabs = j.buildTabs(this._units.list), this.skippedMillis = 0, this.gameSpeed = 1, null == (a = this.session.state).skippedMillis && (a.skippedMillis = 0), p = [].concat(this._units.list, this._upgrades.list, this._achievements.list), e = 0, n = p.length; e < n; e++) l = p[e], l._init();
                    for (q = this._units.list, m = 0, o = q.length; m < o; m++) l = q[m], l._init2();
                    return this.cache = new k, delete this.now, this.tick(null != (r = this.session) && null != (s = r.state) && null != (t = s.date) ? t.reified : void 0), this.tick()
                }, l.prototype.diffMillis = function () {
                    return this._realDiffMillis() * this.gameSpeed + this.skippedMillis
                }, l.prototype._realDiffMillis = function () {
                    var a;
                    return a = this.now.getTime() - this.session.state.date.reified.getTime(), Math.max(0, a)
                }, l.prototype.diffSeconds = function () {
                    return this.diffMillis() / 1e3
                }, l.prototype.skipMillis = function (a) {
                    return a = Math.floor(a), this.skippedMillis += a, this.session.state.skippedMillis += a
                }, l.prototype.skipDuration = function (a) {
                    return this.skipMillis(a.asMilliseconds())
                }, l.prototype.skipTime = function () {
                    var b;
                    return b = 1 <= arguments.length ? a.call(arguments, 0) : [], this.skipDuration(moment.duration.apply(moment, b))
                }, l.prototype.setGameSpeed = function (a) {
                    return this.reify(), this.gameSpeed = a
                }, l.prototype.totalSkippedMillis = function () {
                    return this.session.state.skippedMillis
                }, l.prototype.totalSkippedDuration = function () {
                    return moment.duration(this.totalSkippedMillis())
                }, l.prototype.dateStarted = function () {
                    return this.session.state.date.started
                }, l.prototype.momentStarted = function () {
                    return moment(this.dateStarted())
                }, l.prototype.tick = function (a, b) {
                    var c;
                    return null == a && (a = new Date), null == b && (b = !1), e.assert(a, "can't tick to undefined time", a), !this.now || this.now <= a ? (this.now = a, this.cache.onTick()) : (c = this.now.getTime() - a.getTime(), e.assert(c <= 12e4, "tick tried to go back in time. System clock problem?", this.now, a, c))
                }, l.prototype.elapsedStartMillis = function () {
                    return this.now.getTime() - this.session.state.date.started.getTime()
                }, l.prototype.timestampMillis = function () {
                    return this.elapsedStartMillis() + this.totalSkippedMillis()
                }, l.prototype.unit = function (a) {
                    if (!_.isUndefined(a)) return _.isString(a) || (a = a.name), this._units.byName[a]
                }, l.prototype.unitBySlug = function (a) {
                    if (a) return this._units.bySlug[a]
                }, l.prototype.units = function () {
                    return _.clone(this._units.byName)
                }, l.prototype.unitlist = function () {
                    return _.clone(this._units.list)
                }, l.prototype.count = function (a, b) {
                    return this.unit(a).count(b)
                }, l.prototype.counts = function () {
                    return this.countUnits()
                }, l.prototype.countUnits = function () {
                    return _.mapValues(this.units(), function (a, b) {
                        return a.count()
                    })
                }, l.prototype.countUpgrades = function () {
                    return _.mapValues(this.upgrades(), function (a, b) {
                        return a.count()
                    })
                }, l.prototype.getNewlyUpgradableUnits = function () {
                    var a, b, c, d, e;
                    for (c = this.unitlist(), d = [], a = 0, b = c.length; a < b; a++) e = c[a], e.isNewlyUpgradable() && e.isVisible() && d.push(e);
                    return d
                }, l.prototype.upgrade = function (a) {
                    return _.isString(a) || (a = a.name), this._upgrades.byName[a]
                }, l.prototype.upgrades = function () {
                    return _.clone(this._upgrades.byName)
                }, l.prototype.upgradelist = function () {
                    return _.clone(this._upgrades.list)
                }, l.prototype.availableUpgrades = function (a) {
                    var b, c, d, e, f;
                    for (null == a && (a = void 0), d = this.upgradelist(), e = [], b = 0, c = d.length; b < c; b++) f = d[b], f.isVisible() && f.isUpgradable(a, !0) && e.push(f);
                    return e
                }, l.prototype.availableAutobuyUpgrades = function (a) {
                    var b, c, d, e, f;
                    for (null == a && (a = void 0), d = this.availableUpgrades(a), e = [], b = 0, c = d.length; b < c; b++) f = d[b], f.isAutobuyable() && e.push(f);
                    return e
                }, l.prototype.ignoredUpgrades = function () {
                    var a, b, c, d, e;
                    for (c = this.upgradelist(), d = [], a = 0, b = c.length; a < b; a++) e = c[a], e.isVisible() && e.isIgnored() && d.push(e);
                    return d
                }, l.prototype.unignoredUpgrades = function () {
                    var a, b, c, d, e;
                    for (c = this.upgradelist(), d = [], a = 0, b = c.length; a < b; a++) e = c[a], e.isVisible() && !e.isIgnored() && d.push(e);
                    return d
                }, l.prototype.resourcelist = function () {
                    return this.unitlist().concat(this.upgradelist())
                }, l.prototype.achievement = function (a) {
                    return _.isString(a) || (a = a.name), this._achievements.byName[a]
                }, l.prototype.achievements = function () {
                    return _.clone(this._achievements.byName)
                }, l.prototype.achievementlist = function () {
                    return _.clone(this._achievements.list)
                }, l.prototype.achievementsSorted = function () {
                    return _.sortBy(this.achievementlist(), function (a) {
                        return a.earnedAtMillisElapsed()
                    })
                }, l.prototype.achievementPoints = function () {
                    return e.sum(_.map(this.achievementlist(), function (a) {
                        return a.pointsEarned()
                    }))
                }, l.prototype.achievementPercent = function () {
                    return this.achievementPoints() / this.achievementPointsPossible
                }, l.prototype.reify = function (a) {
                    var b, c;
                    return null == a && (a = 0), c = this.diffSeconds(), b = this.counts(c), _.extend(this.session.state.unittypes, b), this.skippedMillis = 0, this.session.state.skippedMillis += this.diffMillis() - this._realDiffMillis(), this.session.state.date.reified = this.now, this.cache.onUpdate(), e.assert(0 === this.diffSeconds(), "diffseconds != 0 after reify!")
                }, l.prototype.save = function () {
                    return this.withSave(function () {})
                }, l.prototype.importSave = function (a, b) {
                    return this.session.importSave(a, b), this._init()
                }, l.prototype.withSave = function (a) {
                    var b;
                    return this.reify(), b = a(), this.reify(), this.session.save(), this.cache.onUpdate(), b
                }, l.prototype.withUnreifiedSave = function (a) {
                    var b;
                    return b = a(), this.session.save(), b
                }, l.prototype.reset = function (a) {
                    var b, c, d, e;
                    for (null == a && (a = !1), this.session.reset(), this._init(), d = this.unitlist(), b = 0, c = d.length; b < c; b++) e = d[b], e._setCount(e.unittype.init || 0);
                    if (!a) return this.save()
                }, l.prototype.ascendEnergySpent = function () {
                    var a;
                    return a = this.unit("energy"), a.spent()
                }, l.prototype.ascendCost = function (a) {
                    var b, c, d, e;
                    return null == a && (a = {}), e = null != a.spent ? new Decimal(a.spent) : this.ascendEnergySpent(), c = this.unit("ascension").count(), b = Decimal.pow(1.12, c), d = new Decimal(5e4).times(this.unit("mutagen").stat("ascendCost", 1)), b.times(5e6).dividedBy(Decimal.pow(2, e.dividedBy(d))).ceil()
                }, l.prototype.ascendCostCapDiff = function (a) {
                    return null == a && (a = this.ascendCost()), a.minus(this.unit("energy").capValue())
                }, l.prototype.ascendCostPercent = function (a) {
                    return null == a && (a = this.ascendCost()), Decimal.min(1, this.unit("energy").count().dividedBy(a))
                }, l.prototype.ascendCostDurationSecs = function (a) {
                    var b;
                    if (null == a && (a = this.ascendCost()), b = this.unit("energy"), a.lessThan(b.capValue())) return b.estimateSecsUntilEarned(a).toNumber()
                }, l.prototype.ascendCostDurationMoment = function (a) {
                    var b;
                    if (null != (b = this.ascendCostDurationSecs(a))) return moment.duration(b, "seconds")
                }, l.prototype.ascend = function (a) {
                    if (null == a && (a = !1), !a && this.ascendCostPercent() < 1) throw new Error("We require more resources (ascension cost)");
                    return this.withSave(function (a) {
                        return function () {
                            var b, c, d, e, f, g, h, i, j, k, l, m, n;
                            for (h = a.unit("premutagen"), g = a.unit("mutagen"), b = a.unit("ascension"), g._addCount(h.count()), h._setCount(0), b._addCount(1), a.session.state.date.restarted = a.now, b.count().modulo(3).isZero() && a.unit("freeRespec")._addCount(1), a._init(), b.count().equals(1) && (a.cache.firstSpawn.ascension = !0), i = a.unitlist(), c = 0, e = i.length; c < e; c++) m = i[c], m.unittype.ascendPreserve || m._setCount(m.unittype.init || 0);
                            for (j = a.upgradelist(), l = [], d = 0, f = j.length; d < f; d++) n = j[d], "mutagen" !== (null != (k = n.unit.tab) ? k.name : void 0) ? l.push(n._setCount(0)) : l.push(void 0);
                            return l
                        }
                    }(this))
                }, l.prototype.respecRate = function () {
                    return 1
                }, l.prototype.respecCost = function () {
                    return this.ascendCost().times(this.respecCostRate).ceil()
                }, l.prototype.respecCostRate = .3, l.prototype.respecCostCapDiff = function () {
                    return this.ascendCostCapDiff(this.respecCost())
                }, l.prototype.respecCostPercent = function () {
                    return this.ascendCostPercent(this.respecCost())
                }, l.prototype.respecCostDurationSecs = function () {
                    return this.ascendCostDurationSecs(this.respecCost())
                }, l.prototype.respecCostDurationMoment = function () {
                    return this.ascendCostDurationMoment(this.respecCost())
                }, l.prototype.isRespecCostMet = function () {
                    return this.unit("energy").count().greaterThanOrEqualTo(this.respecCost())
                }, l.prototype.respecSpent = function () {
                    var a, b, c, d, e, f;
                    for (d = this.unit("mutagen"), b = {}, e = d.upgrades.list, a = 0, c = e.length; a < c; a++) f = e[a], b[f.name] = !0;
                    return d.spent(b).minus(this.upgrade("mutatehidden").count())
                }, l.prototype.respec = function () {
                    return this.withSave(function (a) {
                        return function () {
                            var b, c;
                            if (!a.isRespecCostMet()) throw new Error("We require more resources");
                            return b = a.respecCost(), a.unit("energy")._subtractCount(b), c = a.ascendEnergySpent().minus(b), a.unit("respecEnergy")._addCount(c), a._respec()
                        }
                    }(this))
                }, l.prototype.respecFree = function () {
                    return this.withSave(function (a) {
                        return function () {
                            if (!a.unit("freeRespec").count().greaterThan(0)) throw new Error("We require more resources");
                            return a.unit("freeRespec")._subtractCount(1), a._respec()
                        }
                    }(this))
                }, l.prototype._respec = function () {
                    var a, b, c, d, f, g;
                    for (c = this.unit("mutagen"), g = this.respecSpent(), d = c.spentResources(), a = 0, b = d.length; a < b; a++) f = d[a], f._setCount(0);
                    return c._addCount(g.times(this.respecRate()).floor()), this.cache.onRespec(), e.assert(c.spent().isZero(), "respec didn't refund all mutagen!")
                }, l
            }()
        }]), angular.module("swarmApp").factory("game", ["Game", "session", function (a, b) {
            return new a(b)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Options", ["$log", "util", "env", "game", "$location", function (a, b, c, d, e) {
            return function () {
                function f(a) {
                    var b;
                    this.session = a, this.VELOCITY_UNITS = {
                        byName: {},
                        list: []
                    }, b = function (a) {
                        return function (b, c, d, e) {
                            var f;
                            return f = {
                                name: b,
                                label: c,
                                plural: d,
                                mult: e
                            }, _.isFunction(e) ? f._get = function () {
                                var a;
                                return a = _.clone(this), a.mult = a.mult(), a
                            } : f._get = function () {
                                return this
                            }, a.VELOCITY_UNITS.byName[f.name] = f, a.VELOCITY_UNITS.list.push(f)
                        }
                    }(this), b("秒", "秒", "秒", 1), b("分", "分钟", "分钟", 60), b("时", "小时", "小时", 3600), b("天", "天", "天", 86400), b("扭曲", "虫群扭曲", "虫群扭曲", function () {
                        return d.upgrade("swarmwarp").effect[0].output()
                    })
                }
                return f.prototype.maybeSet = function (c, d, e) {
                    if (null != d) return a.debug("set options value", c, d), null != e && b.assert(e[d], "invalid option for " + c + ": " + d), this.set(c, d)
                }, f.prototype.set = function (a, b) {
                    return this.session.state.options[a] = b, this.session.save()
                }, f.prototype.get = function (a, b) {
                    var c;
                    return null != (c = this.session.state.options[a]) ? c : b
                }, f.prototype.reset = function (a) {
                    return delete this.session.state.options[a]
                }, f.prototype.fpsAuto = function (a) {
                    return this.maybeSet("fpsAuto", a), this.get("fpsAuto", !(null != this.get("fps")))
                }, f.prototype.fps = function (a) {
                    return this.maybeSet("fps", a), Math.min(60, Math.max(1e-4, this.get("fps", 10)))
                }, f.prototype.fpsSleepMillis = function () {
                    return 1e3 / this.fps()
                }, f.prototype.showAdvancedUnitData = function (a) {
                    return this.maybeSet("showAdvancedUnitData", a), !!this.get("showAdvancedUnitData")
                }, f.prototype.durationFormat = function (a) {
                    var c;
                    return null != a && (c = {
                        human: !0,
                        full: !0,
                        abbreviated: !0
                    }, b.assert(c[a], "invalid options.durationFormat value", a), this.maybeSet("durationFormat", a)), this.get("durationFormat", "abbreviated")
                }, f.prototype.notation = function (a) {
                    var c;
                    return null != a && (c = {
                        "standard-decimal": !0,
                        "scientific-e": !0,
                        hybrid: !0,
                        engineering: !0
                    }, b.assert(c[a], "invalid options.notation value", a), this.maybeSet("notation", a)), this.get("notation", "standard-decimal")
                }, f.prototype.velocityUnit = function (a, b) {
                    var c, d, e, f, g;
                    return null == b && (b = {}), this.maybeSet("velocityUnit", a, this.VELOCITY_UNITS.byName), g = this.VELOCITY_UNITS.byName[this.get("velocityUnit")], null != g && ("warp" !== g.name || "energy" !== (null != (c = null != (d = b.unit) ? d.name : void 0) ? c : b.unit) && "nexus" !== (null != (e = null != (f = b.prod) ? f.name : void 0) ? e : b.prod)) || (g = this.VELOCITY_UNITS.list[0]), g._get()
                }, f.prototype.getVelocityUnit = function (a) {
                    return null == a && (a = {}), this.velocityUnit(void 0, a)
                }, f.prototype.scrolling = function (a) {
                    var b;
                    return this.maybeSet("scrolling", a, {
                        none: !0,
                        resize: !0,
                        lockhover: "lockhover"
                    }), null != (b = this.get("scrolling")) ? b : "none"
                }, f.IFRAME_X_MIN = 800, f.IFRAME_Y_MIN = 600, f.prototype.iframeMinX = function (a) {
                    return this.maybeSet("iframeMinX", a), Math.max(this.get("iframeMinX") || 0, this.constructor.IFRAME_X_MIN)
                }, f.prototype.iframeMinY = function (a) {
                    return this.maybeSet("iframeMinY", a), Math.max(this.get("iframeMinY") || 0, this.constructor.IFRAME_Y_MIN)
                }, f.prototype.autopush = function (a) {
                    var b;
                    return this.maybeSet("autopush", a), null == (b = this.get("autopush")) || b
                }, f.THEME_EL = $('link[href^="styles/bootstrapdefault"]'), f.THEMES = function () {
                    var a, d, e, g, h, zt;
                    for (b.assert(c.isDebugEnabled || f.THEME_EL[0], "找不到主题链接"), h = {
                            list: []
                        }, h.list.push({
                            name: "none",
                            label: "默认白色",
                            url: f.THEME_EL.attr("href"),
                            credit: "http://bootswatch.com/default/"
                        }), g = ["cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "lumen", "paper", "readable", "sandstone", "simplex", "slate", "spacelab", "superhero", "united", "yeti"], a = 0, d = g.length; a < d; a++) e = g[a], zt = cnzt(e), h.list.push({
                        name: e,
                        label: zt,
                        url: "bower_components/bootswatch/" + e + "/bootstrap.min.css",
                        credit: "http://bootswatch.com/" + e + "/"
                    });
                    return h.byName = _.keyBy(h.list, "name"), h
                }(), f.prototype.theme = function (a) {
                    var b;
                    return null != a && (this.set("isCustomTheme", !1), this.maybeSet("theme", a, f.THEMES.byName)), this.get("isCustomTheme") ? this.get("theme") : (a = null != (b = this.get("theme")) ? b : "none", "dark-ff" !== a && "dark-chrome" !== a || (a = "slate"), f.THEMES.byName[a])
                }, f.prototype.customTheme = function (a) {
                    return this.set("isCustomTheme", !0), this.set("theme", {
                        isCustom: !0,
                        url: a
                    })
                }, f.prototype.showCharts = function (a) {
                    var b;
                    return this.maybeSet("showCharts", a), null == (b = this.get("showCharts")) || b
                }, f.THEME_EXTRA_LENGTH = 1e3, f.prototype.themeExtra = function (a) {
                    if (null != a) {
                        if (a.length >= this.constructor.THEME_EXTRA_LENGTH) throw new Error("But it's so big!");
                        this.set("themeExtra", a)
                    }
                    return this.isAprilFoolsTheme() && "on" === this.aprilFoolsState() ? "@import url('/static/kittens.css?1');" : this.get("themeExtra", null)
                }, f.prototype.aprilFoolsState = function () {
                    var a, b, c;
                    return null != (b = e.search().forcefools) ? b : (a = moment(), c = (new Date).getFullYear(), a.isBetween(moment.parseZone(c + "-03-31T21:00:00-07:00"), moment.parseZone(c + "-04-02T00:00:00-07:00")) ? "on" : a.isBetween(moment.parseZone(c + "-04-02T00:00:00-07:00"), moment.parseZone(c + "-04-04T00:00:00-07:00")) ? "after" : "off")
                }, f.prototype.isAprilFoolsTheme = function (a) {
                    var b;
                    return this.maybeSet("aprilFoolsTheme", a), null != (b = this.get("aprilFoolsTheme")) && b
                }, f
            }()
        }]), angular.module("swarmApp").factory("options", ["Options", "session", function (a, b) {
            return new a(b)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("OptionsCtrl", ["$scope", "$location", "options", "session", "game", "env", "$log", "backfill", "isKongregate", "storage", "feedback", function (a, b, c, d, e, f, g, h, i, j, k) {
            var l, m;
            return a.options = c, a.game = e, a.session = d, a.env = f, a.imported = {}, a.isKongregate = i, a.duration_examples = [moment.duration(16, "seconds"), moment.duration(163, "seconds"), moment.duration(2.5, "hours"), moment.duration(3.33333333, "weeks"), moment.duration(2.222222222222, "months"), moment.duration(1.2, "year")], a.form = {
                isCustomTheme: c.theme().isCustom,
                customThemeUrl: c.theme().url,
                theme: c.theme().name,
                themeExtra: c.themeExtra(),
                isThemeExtraOpen: !!c.themeExtra(),
                iframeMinSize: {
                    x: c.iframeMinX(),
                    y: c.iframeMinY()
                }
            }, a.setFpsSlider = function (b) {
                if (Math.abs(c.fps() - b) >= 1) return c.fps(b), a.form.fpsNum = c.fps()
            }, a.setTheme = function (b) {
                return a.options.theme(b), a.form.isCustomTheme = !1
            }, a.selectCustomTheme = function () {
                return a.form.isCustomTheme = !0, a.form.customThemeUrl = ""
            }, a.setCustomTheme = function (b) {
                return console.log("setcustomtheme", b), a.options.customTheme(b)
            }, a.select = function (a) {
                return a.target.select()
            }, l = function (a) {
                var b, c, e;
                try {
                    c = a.storage.getItem(d.id)
                } catch (c) {
                    b = c, g.debug("error loading saveddatadetails from storage, continuing", a.name, b)
                }
                return e = {
                    name: a.name,
                    exists: null != c
                }, null != c && (e.size = c.length), e
            }, a.savedDataDetails = function () {
                var a, b, c, d;
                for (c = j.storages.list, d = [], a = 0, b = c.length; a < b; a++) m = c[a], d.push(l(m));
                return d
            }(), null == j.flash.isReady && j.flash.onReady.then(function (b) {
                return function () {
                    return a.savedDataDetails = function () {
                        var a, b, c, d;
                        for (c = j.storages.list, d = [], a = 0, b = c.length; a < b; a++) m = c[a], d.push(l(m));
                        return d
                    }()
                }
            }()), a.importSave = function (b) {
                var c;
                if (!b || 0 !== b.indexOf("http")) {
                    a.imported = {};
                    try {
                        return a.game.importSave(b), h.run(a.game), a.imported.success = !0, a.$root.$broadcast("import", {
                            source: "options",
                            success: !0
                        }), g.debug("import success")
                    } catch (b) {
                        return c = b, a.imported.error = !0, a.$root.$broadcast("import", {
                            source: "options",
                            success: !1
                        }), g.warn("import error", c)
                    }
                }
            }, a.confirmReset = function () {
                if (confirm("You will lose everything and restart the game. No reset-bonuses here. You sure?")) return j.removeItem(d.id), a.game.reset(!0), b.url("/")
            }, a.clearThemeExtra = function () {
                return a.form.themeExtraSuccess = null, a.form.themeExtraError = null
            }, a.themeExtra = function (b) {
                var d;
                a.clearThemeExtra();
                try {
                    return c.themeExtra(b), a.form.themeExtraSuccess = !0
                } catch (b) {
                    d = b, g.error(d), a.form.themeExtraError = null != d ? d.message : void 0
                }
            }, a.isDefaultMinSize = function () {
                return a.form.iframeMinSize.x === a.options.constructor.IFRAME_X_MIN && a.form.iframeMinSize.y === a.options.constructor.IFRAME_Y_MIN
            }, a.resetMinSize = function () {
                return a.options.iframeMinX(a.form.iframeMinSize.x = a.options.constructor.IFRAME_X_MIN), a.options.iframeMinY(a.form.iframeMinSize.y = a.options.constructor.IFRAME_Y_MIN)
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Upgrade", ["util", "Effect", "$log", function (a, b, c) {
            var d;
            return d = new Decimal(1),
                function () {
                    function e(b, c) {
                        this.game = b, this.type = c, this.name = this.type.name, this.unit = a.assert(this.game.unit(this.type.unittype))
                    }
                    return e.prototype._init = function () {
                        return this.costByName = {}, this.cost = _.map(this.type.cost, function (b) {
                            return function (c) {
                                var d;
                                return a.assert(c.unittype, "upgrade cost without a unittype", b.name, name, c), d = _.clone(c), d.unit = a.assert(b.game.unit(c.unittype)), d.val = new Decimal(d.val), d.factor = new Decimal(d.factor), b.costByName[d.unit.name] = d, d
                            }
                        }(this)), this.requires = _.map(this.type.requires, function (b) {
                            return function (c) {
                                var d;
                                return a.assert(c.unittype, "upgrade require without a unittype", b.name, name, c), d = _.clone(c), d.unit = a.assert(b.game.unit(c.unittype)), d.val = new Decimal(d.val), d
                            }
                        }(this)), this.effect = _.map(this.type.effect, function (a) {
                            return function (c) {
                                return new b(a.game, a, c)
                            }
                        }(this)), this.effectByType = _.groupBy(this.effect, "type.name")
                    }, e.prototype.count = function () {
                        var b, c;
                        return c = null != (b = this.game.session.state.upgrades[this.name]) ? b : 0, _.isNaN(c) && (a.error("count is NaN! resetting to zero. " + this.name), c = 0), this.type.maxlevel && (c = Decimal.min(this.type.maxlevel, c)), new Decimal(c)
                    }, e.prototype._setCount = function (a) {
                        return this.game.session.state.upgrades[this.name] = new Decimal(a), this.game.cache.onUpdate()
                    }, e.prototype._addCount = function (a) {
                        return this._setCount(this.count().plus(a))
                    }, e.prototype._subtractCount = function (a) {
                        return this._addCount(new Decimal(a).negated())
                    }, e.prototype.isVisible = function () {
                        return !(!this.unit.isVisible() && !this.unit.unittype.disabled) && ((null == this.type.maxlevel || !this.count().greaterThanOrEqualTo(this.type.maxlevel)) && (!this.type.disabled && (!!this.game.cache.upgradeVisible[this.name] || (this.game.cache.upgradeVisible[this.name] = this._isVisible()))))
                    }, e.prototype._isVisible = function () {
                        var a, b, c, d;
                        if (this.count().greaterThan(0)) return !0;
                        for (c = this.requires, a = 0, b = c.length; a < b; a++)
                            if (d = c[a], d.val.greaterThan(d.unit.count())) return !1;
                        return !0
                    }, e.prototype.totalCost = function () {
                        var a, b;
                        return null != (a = this.game.cache.upgradeTotalCost)[b = this.name] ? a[b] : a[b] = this._totalCost()
                    }, e.prototype._totalCost = function (a) {
                        return null == a && (a = this.count().plus(this.unit.stat("upgradecost", 0))), _.map(this.cost, function (b) {
                            return function (c) {
                                var d;
                                return d = _.clone(c), d.val = d.val.times(Decimal.pow(d.factor, a)).times(b.unit.stat("upgradecostmult", 1)).times(b.unit.stat("upgradecostmult." + b.name, 1)), d
                            }
                        }(this))
                    }, e.prototype.sumCost = function (a, b) {
                        return _.map(this._totalCost(b), function (b) {
                            var c;
                            return c = _.clone(b), c.factor.equals(1) ? c.val = c.val.times(a) : c.val = c.val.times(d.minus(Decimal.pow(c.factor, a)).dividedBy(d.minus(c.factor))), c
                        })
                    }, e.prototype.isCostMet = function () {
                        return this.maxCostMet().greaterThan(0)
                    }, e.prototype.maxCostMet = function (b) {
                        var e, f;
                        return null == b && (b = 1), null != (e = this.game.cache.upgradeMaxCostMet)[f = this.name + ":" + b] ? e[f] : e[f] = function (e) {
                            return function () {
                                var f, g, h, i, j, k, l, m, n;
                                for (l = new Decimal(1 / 0), e.type.maxlevel && (l = new Decimal(e.type.maxlevel).minus(e.count())), m = e.totalCost(), g = 0, i = m.length; g < i; g++) f = m[g], a.assert(f.val.greaterThan(0), "upgrade cost <= 0", e.name, e), k = f.factor.equals(1) ? f.unit.count().dividedBy(f.val) : d.minus(f.unit.count().times(b).times(d.minus(f.factor)).dividedBy(f.val)).log().dividedBy(f.factor.log()), l = Decimal.min(l, k);
                                if (l = l.floor(), l.greaterThanOrEqualTo(0))
                                    for (n = e.sumCost(l), h = 0, j = n.length; h < j; h++)
                                        if (f = n[h], f.unit.count().lessThan(f.val)) return c.debug("maxCostMet corrected its own precision"), l.minus(1);
                                return l
                            }
                        }(this)()
                    }, e.prototype.isMaxAffordable = function () {
                        return null != this.type.maxlevel && this.maxCostMet().greaterThanOrEqualTo(this.type.maxlevel)
                    }, e.prototype.costMetPercent = function () {
                        var a, b, c, e, f, g, h, i;
                        if (b = _.keyBy(this.sumCost(this.maxCostMet()), function (a) {
                                return a.unit.name
                            }), g = new Decimal(1 / 0), this.isMaxAffordable()) return d;
                        for (h = this.sumCost(this.maxCostMet().plus(1)), e = 0, f = h.length; e < f; e++) a = h[e], c = a.unit.count().minus(b[a.unit.name].val), i = a.val.minus(b[a.unit.name].val), g = Decimal.min(g, c.dividedBy(i));
                        return Decimal.min(1, Decimal.max(0, g))
                    }, e.prototype.estimateSecsUntilBuyable = function (a) {
                        var b, c, d, e;
                        return this.isMaxAffordable() ? {
                            val: new Decimal(1 / 0)
                        } : (c = this.game.cache.upgradeEstimateSecsUntilBuyableCacheSafe[this.name], null == c && (c = null != (b = this.game.cache.upgradeEstimateSecsUntilBuyablePeriodic)[d = this.name] ? b[d] : b[d] = this._estimateSecsUntilBuyable(), c.cacheSafe && (this.game.cache.upgradeEstimateSecsUntilBuyableCacheSafe[this.name] = c)), e = _.extend({
                            val: c.rawVal.plus((c.now - this.game.now.getTime()) / 1e3)
                        }, c), e.val.lessThanOrEqualTo(0) && !a && (delete this.game.cache.upgradeEstimateSecsUntilBuyableCacheSafe[this.name], delete this.game.cache.upgradeEstimateSecsUntilBuyablePeriodic[this.name], e = this.estimateSecsUntilBuyable(!0)), e)
                    }, e.prototype._estimateSecsUntilBuyable = function () {
                        var a, b, c, d, e, f, g;
                        if (_.keyBy(this.sumCost(this.maxCostMet()), function (a) {
                                return a.unit.name
                            }), a = !0, e = {
                                rawVal: new Decimal(0),
                                unit: null
                            }, null != this.type.maxlevel && this.maxCostMet().plus(1).greaterThan(this.type.maxlevel)) return 0;
                        for (f = this.sumCost(this.maxCostMet().plus(1)), c = 0, d = f.length; c < d; c++) b = f[c], g = b.unit.estimateSecsUntilEarned(b.val), e.rawVal.lessThan(g) && (e = {
                            rawVal: g,
                            unit: b.unit,
                            now: this.game.now.getTime()
                        }), a &= b.unit.isEstimateCacheable();
                        return e.cacheSafe = a, e
                    }, e.prototype.isUpgradable = function (a, b) {
                        var c, d;
                        return null == a && (a = void 0), null == b && (b = !1), b && (a = new Decimal(null != a ? a : 1).dividedBy(this.watchedDivisor())), null != (c = this.game.cache.upgradeIsUpgradable)[d = this.name + ":" + a] ? c[d] : c[d] = "upgrade" === this.type.class && this.isBuyable() && this.maxCostMet(a).greaterThan(0)
                    }, e.prototype.isAutobuyable = function () {
                        return this.watchedAt() > 0
                    }, e.prototype.isNewlyUpgradable = function (a) {
                        return null == a && (a = 1), this.watchedAt() > 0 && this.isUpgradable(a / this.watchedDivisor())
                    }, e.prototype.isBuyable = function () {
                        return this.isCostMet() && this.isVisible()
                    }, e.prototype.buy = function (b) {
                        if (null == b && (b = 1), !this.isCostMet()) throw new Error("We require more resources");
                        if (!this.isBuyable()) throw new Error("Cannot buy that upgrade");
                        return b = Decimal.min(b, this.maxCostMet()), c.debug("buy", this.name, b), this.game.withSave(function (c) {
                            return function () {
                                var d, e, f, g, h, i, j, k, l, m, n, o;
                                for (m = c.sumCost(b), h = 0, k = m.length; h < k; h++) d = m[h], a.assert(d.unit.count().greaterThanOrEqualTo(d.val), "tried to buy more than we can afford. upgrade.maxCostMet is broken!", c.name, name, d), a.assert(d.val.greaterThan(0), "zero cost from sumCost, yet cost was met?", c.name, name, d), d.unit._subtractCount(d.val);
                                for (e = c.count(), c._addCount(b), g = i = 0, n = b.toNumber(); 0 <= n ? i < n : i > n; g = 0 <= n ? ++i : --i)
                                    for (o = c.effect, j = 0, l = o.length; j < l; j++) f = o[j], f.onBuy(e.plus(g + 1));
                                return b
                            }
                        }(this))
                    }, e.prototype.buyMax = function (a) {
                        return this.buy(this.maxCostMet(a))
                    }, e.prototype.calcStats = function (a, b) {
                        var c, d, e, f, g;
                        for (null == a && (a = {}), null == b && (b = {}), c = this.count(), g = this.effect, e = 0, f = g.length; e < f; e++) d = g[e], d.calcStats(a, b, c);
                        return a
                    }, e.prototype.statistics = function () {
                        var a, b, c;
                        return null != (a = null != (b = this.game.session.state.statistics) && null != (c = b.byUpgrade) ? c[this.name] : void 0) ? a : {}
                    }, e.prototype._watchedAtDefault = function () {
                        var a;
                        return "mutagen" !== (null != (a = this.unit.tab) ? a.name : void 0)
                    }, e.prototype.isManuallyHidden = function () {
                        return this.watchedAt() < 0
                    }, e.prototype.watchedAt = function () {
                        var a, b, c;
                        return null == (a = this.game.session.state).watched && (a.watched = {}), c = null != (b = this.game.session.state.watched[this.name]) ? b : this._watchedAtDefault(), "boolean" == typeof c ? c ? 1 : 0 : c
                    }, e.prototype.watchedDivisor = function () {
                        return Math.max(this.watchedAt(), 1)
                    }, e.prototype.watch = function (a) {
                        return this.game.withUnreifiedSave(function (b) {
                            return function () {
                                var c;
                                return null == (c = b.game.session.state).watched && (c.watched = {}), a !== b._watchedAtDefault() ? b.game.session.state.watched[b.name] = a : delete b.game.session.state.watched[b.name]
                            }
                        }(this))
                    }, e
                }()
        }]), angular.module("swarmApp").factory("UpgradeType", function () {
            return function () {
                function a(a) {
                    _.extend(this, a)
                }
                return a
            }()
        }), angular.module("swarmApp").factory("UpgradeTypes", ["spreadsheetUtil", "UpgradeType", "util", function (a, b, c) {
            return function () {
                function d(a, b) {
                    var c, d, e;
                    for (this.unittypes = a, null == b && (b = []), this.list = [], this.byName = {}, c = 0, d = b.length; c < d; c++) e = b[c], this.register(e)
                }
                return d.prototype.register = function (a) {
                    return c.assert(a.name, "upgrade without a name", a), this.list.push(a), this.byName[a.name] = a
                }, d.parseSpreadsheet = function (e, f, g) {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                    for (t = a.parseRows({
                            name: ["requires", "cost", "effect"]
                        }, g.data.upgrades.elements), r = new d(e, function () {
                            var a, c, d;
                            for (d = [], a = 0, c = t.length; a < c; a++) s = t[a], s.name && d.push(new b(s));
                            return d
                        }()), o = r.list, i = 0, l = o.length; i < l; i++)
                        for (v = o[i], a.resolveList([v], "unittype", e.byName), a.resolveList(v.cost, "unittype", e.byName), a.resolveList(v.requires, "unittype", e.byName), a.resolveList(v.effect, "unittype", e.byName, {
                                required: !1
                            }), a.resolveList(v.effect, "upgradetype", r.byName, {
                                required: !1
                            }), a.resolveList(v.effect, "type", f.byName), p = v.cost, j = 0, m = p.length; j < m; j++) h = p[j], c.assert(h.val > 0, "upgradetype cost.val must be positive", h), 1 !== v.maxlevel || h.factor || (h.factor = 1), c.assert(h.factor > 0, "upgradetype cost.factor must be positive", h);
                    for (q = e.list, k = 0, n = q.length; k < n; k++) u = q[k], a.resolveList(u.requires, "upgradetype", r.byName, {
                        required: !1
                    });
                    return r
                }, d
            }()
        }]), angular.module("swarmApp").factory("upgradetypes", ["UpgradeTypes", "unittypes", "effecttypes", "spreadsheet", function (a, b, c, d) {
            return a.parseSpreadsheet(b, c, d)
        }])
    }.call(this),
    function () {
        "use strict";
        var a = [].slice;
        angular.module("swarmApp").factory("util", ["$log", "$rootScope", "$timeout", "$animate", function (b, c, d, e) {
            return new(function () {
                function e() {}
                return e.prototype.sum = function (a) {
                    return _.reduce(a, function (a, b) {
                        return a + b
                    }, 0)
                }, e.prototype.assert = function () {
                    var d, e;
                    if (e = arguments[0], d = 2 <= arguments.length ? a.call(arguments, 1) : [], !e) throw b.error.apply(b, ["Assertion error"].concat(a.call(d))), c.$emit("assertionFailure", d), new Error(d);
                    return e
                }, e.prototype.error = function () {
                    var b;
                    return b = 1 <= arguments.length ? a.call(arguments, 0) : [], c.$emit("error", b)
                }, e.prototype.requestAnimationFrame = function (a) {
                    return window.requestAnimationFrame(function () {
                        return a(), c.$digest()
                    })
                }, e.prototype.animateController = function (a, b) {
                    var e, f, g, h, i, j, k;
                    return null == b && (b = {}), f = null != (i = b.game) ? i : a.game, g = null != (j = b.options) ? j : a.options, k = null, h = null, (e = function (a) {
                        return function () {
                            return g.fpsAuto() && window.requestAnimationFrame ? (h = a.requestAnimationFrame(e), k = null) : (k = d(e, g.fpsSleepMillis()), h = null), f.tick(), c.$emit("tick", f)
                        }
                    }(this))(), a.$on("$destroy", function () {
                        return d.cancel(k), window.cancelAnimationFrame(h)
                    })
                }, e.prototype.isWindowFocused = function (a) {
                    var b;
                    return null == a && (a = !0), !(null != (b = "function" == typeof document.hidden ? document.hidden() : void 0) ? b : !a)
                }, e.prototype.isFloatEqual = function (a, b, c) {
                    return null == c && (c = 0), Math.abs(a - b) <= c
                }, e.prototype.utcdoy = function (a) {
                    var b, c;
                    return c = moment.utc(a), b = parseInt(c.format("DDD")) - 1, "" + (b > 0 ? b + "d " : "") + c.format("H\\h mm:ss.SSS")
                }, e
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Effect", ["util", function (a) {
            return function () {
                function b(b, c, d) {
                    this.game = b, this.parent = c, _.extend(this, d), null != d.unittype && (this.unit = a.assert(this.game.unit(d.unittype))), null != d.unittype2 && (this.unit2 = a.assert(this.game.unit(d.unittype2))), null != d.upgradetype && (this.upgrade = a.assert(this.game.upgrade(d.upgradetype)))
                }
                return b.prototype.parentUnit = function () {
                    return null != this.parent.unittype ? this.parent : this.parent.unit
                }, b.prototype.parentUpgrade = function () {
                    return null != this.parent.unittype ? null : this.parent
                }, b.prototype.hasParentStat = function (a, b) {
                    return this.parentUnit().hasStat(a, b)
                }, b.prototype.parentStat = function (a, b) {
                    return this.parentUnit().stat(a, b)
                }, b.prototype.onBuy = function (a) {
                    var b;
                    return "function" == typeof (b = this.type).onBuy ? b.onBuy(this, this.game, this.parent, a) : void 0
                }, b.prototype.onBuyUnit = function (a) {
                    var b;
                    return "function" == typeof (b = this.type).onBuyUnit ? b.onBuyUnit(this, this.game, this.parent, a) : void 0
                }, b.prototype.calcStats = function (a, b, c) {
                    var d;
                    return null == a && (a = {}), null == b && (b = {}), null == c && (c = this.parent.count()), "function" == typeof (d = this.type).calcStats && d.calcStats(this, a, b, c), a
                }, b.prototype.bank = function () {
                    var a;
                    return "function" == typeof (a = this.type).bank ? a.bank(this, this.game) : void 0
                }, b.prototype.cap = function () {
                    var a;
                    return "function" == typeof (a = this.type).cap ? a.cap(this, this.game) : void 0
                }, b.prototype.output = function (a) {
                    var b;
                    return "function" == typeof (b = this.type).output ? b.output(this, this.game, void 0, a) : void 0
                }, b.prototype.outputNext = function () {
                    return this.output(this.parent.count().plus(1))
                }, b.prototype.power = function () {
                    var a, b, c;
                    return b = this.parentStat("power", 1), c = null != (a = this.parentUpgrade()) ? a.name : void 0, c && (b = b.times(this.parentStat("power." + c, 1))), b
                }, b
            }()
        }]), angular.module("swarmApp").factory("EffectType", function () {
            return function () {
                function a(a) {
                    _.extend(this, a)
                }
                return a
            }()
        }), angular.module("swarmApp").factory("EffectTypes", function () {
            return function () {
                function a(a) {
                    var b, c, d;
                    for (null == a && (a = []), this.list = [], this.byName = {}, c = 0, d = a.length; c < d; c++) b = a[c], this.register(b)
                }
                return a.prototype.register = function (a) {
                    return this.list.push(a), this.byName[a.name] = a, this
                }, a
            }()
        }), angular.module("swarmApp").factory("romanize", function () {
            return function (a) {
                if (!+a) return !1;
                for (var b = String(+a).split(""), c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], d = "", e = 3; e--;) d = (c[+b.pop() + 10 * e] || "") + d;
                return Array(+b.join("") + 1).join("M") + d
            }
        }), angular.module("swarmApp").factory("effecttypes", ["EffectType", "EffectTypes", "util", "seedrand", "$log", "romanize", function (a, b, c, d, e, f) {
            var g, h, i;
            return g = new Decimal(1), h = new b, i = function (a, b, d) {
                return null == b[a] && (b[a] = d), c.assert(b[a] === d, "conflicting stat operations. expected " + d + ", got " + b[a], a, b, d)
            }, h.register({
                name: "addUnit",
                onBuy: function (a, b) {
                    return a.unit._addCount(this.output(a, b))
                },
                onBuyUnit: function (a, b, c, d) {
                    return a.unit._addCount(this.output(a, b, d))
                },
                output: function (a, b, c) {
                    return null == c && (c = 1), a.power().times(a.val).times(c)
                }
            }), h.register({
                name: "addUnitByVelocity",
                onBuy: function (a, b) {
                    return a.unit._addCount(this.output(a, b))
                },
                output: function (a, b) {
                    return a.unit.velocity().times(a.val).times(a.power())
                }
            }), h.register({
                name: "addUnitTimed",
                onBuy: function (a, b, c, d) {
                    var e;
                    if (e = 1e3 * a.val2, (null == a.unit2 || a.unit2.isVisible()) && a.unit.isAddUnitTimerReady(e)) return a.unit._addCount(a.val), a.unit.setAddUnitTimer()
                }
            }), h.register({
                name: "addUnitRand",
                onBuy: function (a, b, c, d) {
                    var e;
                    if (e = this.output(a, b, c, d), e.spawned) return a.unit.count().isZero() && (b.cache.firstSpawn[a.unit.name] = b.now), a.unit._addCount(e.qty)
                },
                output: function (a, b, c, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
                    return null == c && (c = a.parent), null == e && (e = c.count()), j = a.parentStat("random.minlevel." + c.name), e.greaterThanOrEqualTo(j) ? (t = a.parentStat("random.each", 1), m = a.parentStat("random.freq"), k = .9, i = 1.1, o = a.val, g = t.times(Decimal.pow(o, e)), null == (f = b.session.state.date).restarted && (f.restarted = b.session.state.date.started), s = "[" + b.session.state.date.restarted.getTime() + ", " + a.parent.name + ", " + e + "]", p = d.rng(s), q = p(), h = e.equals(j) || e.modulo(8).equals(0) || new Decimal(q + "").lessThan(m), r = p(), l = k + r * (i - k), n = g.times(l + "").ceil(), {
                        spawned: h,
                        baseqty: g,
                        qty: n
                    }) : {
                        spawned: !1,
                        baseqty: new Decimal(0),
                        qty: new Decimal(0)
                    }
                }
            }), h.register({
                name: "compoundUnit",
                bank: function (a, b) {
                    var c;
                    return c = a.unit.count(), null != a.unit2 && (c = c.plus(a.unit2.count())), c
                },
                cap: function (a, b) {
                    var c;
                    if ("" !== a.val2 && null != a.val2) return c = a.unit.velocity(), null != a.unit2 && (c = c.plus(a.unit2.velocity())), c.times(a.val2).times(a.power())
                },
                output: function (a, b) {
                    var c, d, e;
                    return c = this.bank(a, b), e = c.times(a.val - 1), null != (d = this.cap(a, b)) && (e = Decimal.min(e, d)), e
                },
                onBuy: function (a, b) {
                    return a.unit._addCount(this.output(a, b))
                }
            }), h.register({
                name: "addUpgrade",
                onBuy: function (a, b) {
                    return a.upgrade._addCount(this.output(a, b))
                },
                output: function (a, b) {
                    return a.power().times(a.val)
                }
            }), h.register({
                name: "skipTime",
                onBuy: function (a) {
                    return a.game.skipTime(this.output(a).toNumber(), "seconds")
                },
                output: function (a) {
                    return a.power().times(a.val)
                }
            }), h.register({
                name: "multStat",
                calcStats: function (a, b, c, d) {
                    var e;
                    return i(a.stat, c, "mult"), b[a.stat] = (null != (e = b[a.stat]) ? e : g).times(Decimal.pow(a.val, d))
                }
            }), h.register({
                name: "expStat",
                calcStats: function (a, b, c, d) {
                    var e;
                    return i(a.stat, c, "mult"), b[a.stat] = (null != (e = b[a.stat]) ? e : g).times(Decimal.pow(d, a.val).times(a.val2).plus(1))
                }
            }), h.register({
                name: "asympStat",
                calcStats: function (a, b, d, e) {
                    var f, h;
                    return i(a.stat, d, "mult"), h = e.times(a.val2), c.assert(!h.isNegative(), "negative asympStat weight"), b[a.stat] = (null != (f = b[a.stat]) ? f : g).times(g.plus(new Decimal(a.val).minus(1).times(g.minus(g.dividedBy(h.plus(1))))))
                }
            }), h.register({
                name: "logStat",
                calcStats: function (a, b, c, d) {
                    var e, f;
                    return i(a.stat, c, "mult"), b[a.stat] = (null != (f = b[a.stat]) ? f : g).times(new Decimal(null != (e = a.val3) ? e : 1).times(Decimal.log(d.times(a.val).plus(a.val2)).dividedBy(Decimal.log(a.val2)).minus(1)).plus(1))
                }
            }), h.register({
                name: "addStat",
                calcStats: function (a, b, c, d) {
                    var e;
                    return i(a.stat, c, "add"), b[a.stat] = (null != (e = b[a.stat]) ? e : new Decimal(0)).plus(new Decimal(a.val).times(d))
                }
            }), h.register({
                name: "initStat",
                calcStats: function (a, b, c, d) {
                    var e;
                    return i(a.stat, c, "mult"), b[a.stat] = (null != (e = b[a.stat]) ? e : g).times(a.val)
                }
            }), h.register({
                name: "multStatPerAchievementPoint",
                calcStats: function (a, b, c, d) {
                    var e, f;
                    return i(a.stat, c, "mult"), e = a.game.achievementPoints(), b[a.stat] = (null != (f = b[a.stat]) ? f : g).times(Decimal.pow(g.plus(new Decimal(a.val).times(e)), d))
                }
            }), h.register({
                name: "suffix",
                calcStats: function (a, b, c, d) {
                    var e, g;
                    return d.isZero() ? g = "" : d.lessThan(3999) && (g = f(d.plus(1).toNumber())), null == g && (g = d.plus(1).toString()), a.unit.suffix = g, b.empower = (null != (e = b.empower) ? e : new Decimal(0)).plus(d)
                }
            }), h
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").value("analyticsDimensionList", ["version"]), angular.module("swarmApp").factory("analyticsDimensions", ["analyticsDimensionList", function (a) {
            var b, c, d, e, f;
            for (f = {}, b = 0, c = 0, d = a.length; c < d; c++) e = a[c], b += 1, f[e] = "dimension" + b;
            return f
        }]), angular.module("swarmApp").value("analyticsMetricList", ["saveFileChars", "clickLogChars"]), angular.module("swarmApp").factory("analyticsMetrics", ["analyticsMetricList", function (a) {
            var b, c, d, e, f;
            for (f = {}, b = 0, c = 0, d = a.length; c < d; c++) e = a[c], b += 1, f[e] = "metric" + b;
            return f
        }]), angular.module("swarmApp").factory("analytics", ["$rootScope", "$analytics", "env", "game", "version", "analyticsDimensions", "analyticsMetrics", "statistics", "session", "$log", function (a, b, c, d, e, f, g, h, i, j) {
            var k, l, m, n, o, p;
            return k = f, p = g, c.gaTrackingID && null != window.ga ? (window.ga("set", k.version, e), a.$on("select", function (a, c) {
                var d, e, f;
                return d = null != (e = null != c && null != (f = c.unit) ? f.name : void 0) ? e : "#back-button", b.pageTrack("/oldui/unit/" + d)
            }), a.$on("save", function (a, b) {
                return window.ga("set", p.saveFileChars, i.exportSave().length)
            }), a.$on("achieve", function (a, c) {
                return b.eventTrack("achievementEarned", {
                    category: "achievement",
                    label: c.name,
                    value: c.earnedAtMillisElapsed()
                })
            }), a.$on("command", function (a, c) {
                var d, e;
                return b.eventTrack(c.name, {
                    category: "command",
                    label: null != (d = c.unitname) ? d : c.upgradename,
                    value: null != (e = c.twinnum) ? e : c.num
                })
            }), a.$on("buyFirst", function (a, c) {
                var d;
                return b.eventTrack("buyFirst:" + c.name, {
                    category: "buyFirst",
                    label: null != (d = c.unitname) ? d : c.upgradename,
                    value: c.elapsed
                })
            }), a.$on("reset", function (a) {
                return b.eventTrack("reset", {
                    category: "reset"
                })
            }), a.$on("import", function (a, c) {
                return b.eventTrack("import", {
                    category: "import",
                    value: c.success ? 1 : 0
                })
            }), a.$on("timecheckFailed", function (a, c) {
                return b.eventTrack("timecheckFailed", {
                    category: "timecheck"
                })
            }), a.$on("timecheckError", function (a, c) {
                return b.eventTrack("timecheckError", {
                    category: "timecheck"
                })
            }), l = 0, 12, m = function (a) {
                var b;
                return n(null != (b = null != a ? a.message : void 0) ? b : a, a, "captureException")
            }, o = function (a) {
                return n(a, a, "captureMessage")
            }, n = function (a, b, c) {
                return l += 1
            }, a.$on("unhandledException", function (a, b) {
                var c, d;
                try {
                    return m(b.exception)
                } catch (a) {
                    c = a;
                    try {
                        return j.warn("unhandled exception error logging loop", c)
                    } catch (a) {
                        return d = a, j.warn("exception logging failed, giving up", d)
                    }
                }
            }), a.$on("error", function (a, b) {
                return o("emittedError", b)
            }), a.$on("assertionFailure", function (a, b) {
                return o("assertionFailure", b)
            }), a.$on("loadGameFromStorageFailed", function (a, b) {
                return o("loadGameFromStorageFailed", b)
            })) : void j.debug("skipping analytics event logging", window.ga, c.gaTrackingID)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("ChangelogCtrl", ["$log", "$scope", "env", "version", function (a, b, c, d) {
            var e, f, g, h, i;
            return b.$emit("changelog"), b.env = c, i = -8, b.changestats = {
                _rawheaders: $(".changelog h4"),
                lastHeaders: function (a) {
                    return _.filter(b.changestats.headers, function (b) {
                        return b.diffDays < a
                    })
                }
            }, f = function (a) {
                var b, c, d, e, f, g;
                return f = $(a).text(), e = f.split(" "), g = e[0], c = e[1], b = moment(c, "YYYY/MM/DD").zone(i), d = moment().zone(i).diff(b, "days"), {
                    text: f,
                    version: g,
                    date: b,
                    diffDays: d
                }
            }, b.changestats.headers = function () {
                var a, c, d, g;
                for (d = b.changestats._rawheaders, g = [], a = 0, c = d.length; a < c; a++) e = d[a], g.push(f(e));
                return g
            }(), g = b.changestats.headers, b.changestats.lastrelease = g[0], b.changestats.firstrelease = g[g.length - 1], b.changestats.days = null != (h = b.changestats.firstrelease) ? h.diffDays : void 0, a.debug("changelogdate", b.changestats)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("commands", ["util", "game", "$rootScope", "$log", "loginApi", "mtx", function (a, b, c, d, e, f) {
            return new(function () {
                function d() {}
                return d.prototype._setUndo = function (a) {
                    return null == a && (a = {}), this._undo = _.extend({}, a, {
                        state: b.session.exportSave(),
                        date: b.now
                    })
                }, d.prototype.undo = function () {
                    var a, c;
                    if (!(null != (a = this._undo) ? a.state : void 0)) throw new Error("no undostate available");
                    return c = this._undo.state, this._setUndo({
                        isRedo: !0
                    }), b.importSave(c, !1)
                }, d.prototype._emit = function (b, d) {
                    return a.assert(null == d.name, "command has a name already?"), d.name = b, c.$emit("command", d), e.saveCommand(d)
                }, d.prototype.buyUnit = function (a) {
                    var b, c, d;
                    return this._setUndo(), d = a.unit, c = a.num, b = d.buy(c), this._emit("buyUnit", {
                        unit: d,
                        unitname: d.name,
                        now: d.game.now,
                        elapsed: d.game.elapsedStartMillis(),
                        attempt: c,
                        num: b.num,
                        twinnum: b.twinnum,
                        ui: a.ui
                    })
                }, d.prototype.buyMaxUnit = function (a) {
                    var b, c;
                    return this._setUndo(), c = a.unit, b = c.buyMax(a.percent), this._emit("buyMaxUnit", {
                        unit: c,
                        unitname: c.name,
                        now: c.game.now,
                        elapsed: c.game.elapsedStartMillis(),
                        num: b.num,
                        twinnum: b.twinnum,
                        percent: a.percent,
                        ui: a.ui
                    })
                }, d.prototype.buyUpgrade = function (a) {
                    var b, c;
                    return this._setUndo(), c = a.upgrade, b = c.buy(a.num), this._emit("buyUpgrade", {
                        upgrade: c,
                        upgradename: c.name,
                        now: c.game.now,
                        elapsed: c.game.elapsedStartMillis(),
                        num: b,
                        ui: a.ui
                    })
                }, d.prototype.buyMaxUpgrade = function (a) {
                    var b, c;
                    return this._setUndo(), c = a.upgrade, b = c.buyMax(a.percent), this._emit("buyMaxUpgrade", {
                        upgrade: c,
                        upgradename: c.name,
                        now: c.game.now,
                        elapsed: c.game.elapsedStartMillis(),
                        num: b,
                        percent: a.percent,
                        ui: a.ui
                    })
                }, d.prototype.buyAllUpgrades = function (a) {
                    var b, c, d, e, f;
                    for (this._setUndo(), f = a.upgrades, b = 0, c = f.length; b < c; b++) e = f[b], d = e.buyMax(a.percent / e.watchedDivisor()), this._emit("buyMaxUpgrade", {
                        upgrade: e,
                        upgradename: e.name,
                        now: e.game.now,
                        elapsed: e.game.elapsedStartMillis(),
                        num: d,
                        percent: a.percent,
                        ui: "buyAllUpgrades"
                    });
                    if (f.length) return this._emit("buyAllUpgrades", {
                        now: f[0].game.now,
                        elapsed: f[0].game.elapsedStartMillis(),
                        percent: a.percent
                    })
                }, d.prototype.ascend = function (a) {
                    return this._setUndo(), b = a.game, b.ascend(), this._emit("ascension", {
                        now: b.now,
                        unit: b.unit("ascension"),
                        unitname: "ascension",
                        num: 1,
                        twinnum: 1,
                        elapsed: b.elapsedStartMillis()
                    })
                }, d.prototype.respec = function (a) {
                    return this._setUndo(), b = a.game, b.respec(), this._emit("respec", {
                        now: b.now,
                        elapsed: b.elapsedStartMillis()
                    })
                }, d.prototype.respecFree = function (a) {
                    return this._setUndo(), b = a.game, b.respecFree(), this._emit("respec", {
                        now: b.now,
                        elapsed: b.elapsedStartMillis()
                    })
                }, d.prototype.convertCrystal = function (a) {
                    var c;
                    return this._setUndo(), c = a.conversion, f.convert(c), this._emit("convertEnergy", {
                        now: b.now,
                        crystal: c.crystal,
                        energy: c.energy
                    })
                }, d
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("StatisticsListener", ["util", "$log", "kongregate", function (a, b, c) {
            return function () {
                function a(a, b) {
                    this.session = a, this.scope = b, this._init()
                }
                return a.prototype._init = function () {
                    var a, b;
                    return b = null != (a = this.session.state).statistics ? a.statistics : a.statistics = {}, null == b.byUnit && (b.byUnit = {}), null == b.byUpgrade && (b.byUpgrade = {}), null != b.clicks ? b.clicks : b.clicks = 0
                }, a.prototype.push = function (a) {
                    var c, d, e;
                    if (d = this.session.state.statistics, d.clicks += 1, null != a.unitname) {
                        e = d.byUnit[a.unitname], null == e && (e = d.byUnit[a.unitname] = {
                            clicks: 0,
                            num: 0,
                            twinnum: 0,
                            elapsedFirst: a.elapsed
                        }, this.scope.$emit("buyFirst", a)), e.clicks += 1;
                        try {
                            e.num = new Decimal(e.num).plus(a.num), e.twinnum = new Decimal(e.twinnum).plus(a.twinnum)
                        } catch (d) {
                            c = d, b.warn("statistics corrupt for unit, resetting", a.unitname, e, c), e.num = new Decimal(a.num), e.twinnum = new Decimal(a.twinnum)
                        }
                    }
                    if (null != a.upgradename) {
                        e = d.byUpgrade[a.upgradename], null == e && (e = d.byUpgrade[a.upgradename] = {
                            clicks: 0,
                            num: 0,
                            elapsedFirst: a.elapsed
                        }, this.scope.$emit("buyFirst", a)), e.clicks += 1;
                        try {
                            e.num = new Decimal(e.num).plus(a.num)
                        } catch (d) {
                            c = d, b.warn("statistics corrupt for upgrade, resetting", a.upgradename, e, c), e.num = new Decimal(a.num)
                        }
                    }
                    return this.session.save(), delete a.now, delete a.unit, delete a.upgrade
                }, a.prototype.listen = function (a) {
                    return a.$on("reset", function (a) {
                        return function () {
                            return a._init()
                        }
                    }(this)), a.$on("command", function (a) {
                        return function (d, e) {
                            return b.debug("statistics", d, e), a.push(e), c.reportStats()
                        }
                    }(this))
                }, a
            }()
        }]), angular.module("swarmApp").factory("statistics", ["session", "StatisticsListener", "$rootScope", function (a, b, c) {
            var d;
            return d = new b(a, c), d.listen(c), d
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("StatisticsCtrl", ["$scope", "session", "statistics", "game", "options", "util", function (a, b, c, d, e, f) {
            return a.listener = c, a.session = b, a.statistics = b.state.statistics, a.game = d, a.unitStats = function (b) {
                var c, d;
                return d = _.clone(null != (c = a.statistics.byUnit) ? c[null != b ? b.name : void 0] : void 0), null != d && (d.elapsedFirstStr = f.utcdoy(d.elapsedFirst)), d
            }, a.hasUnitStats = function (b) {
                return !!a.unitStats(b)
            }, a.showStats = function (b) {
                return a.hasUnitStats(b) || !b.isBuyable() && b.isVisible()
            }, a.upgradeStats = function (b) {
                var c;
                return c = a.statistics.byUpgrade[b.name], null != c && (c.elapsedFirstStr = f.utcdoy(c.elapsedFirst)), c
            }, a.hasUpgradeStats = function (b) {
                return !!a.upgradeStats(b)
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").value("timecheckerServerFormat", "ddd, DD MMM YYYY HH:mm:ss"), angular.module("swarmApp").factory("TimeChecker", ["$rootScope", "$http", "$q", "timecheckUrl", "game", "timecheckerServerFormat", "$log", function (a, b, c, d, e, f, g) {
            return function () {
                function e(a) {
                    this.threshold = moment.duration(a, "hours")
                }
                return e.prototype.fetchNetTime = function () {
                    return b.get(d)
                }, e.prototype.isNetTimeInvalid = function () {
                    return this.fetchNetTime().then(function (b) {
                        return function (c) {
                            var d;
                            return d = b._isNetTimeInvalid(c.headers().date), a.$emit("timecheck", c), d
                        }
                    }(this), function (b) {
                        return function (b) {
                            return g.debug("fetchnettime promise failed", b), a.$emit("timecheckError", {
                                error: "fetchNetTime promise failed",
                                res: b
                            }), c.reject(b)
                        }
                    }())
                }, e.prototype._parseDate = function (a) {
                    return a = a.replace(/\ [A-Za-z]+$/, ""), moment(a, f, !0)
                }, e.prototype._isNetTimeInvalid = function (b, c) {
                    var d, e, f;
                    if (null == c && (c = moment()), null == b) return a.$emit("timecheckError", {
                        error: "netnowString is required (network failure?)"
                    }), null;
                    try {
                        f = this._parseDate(b)
                    } catch (b) {
                        return e = b, a.$emit("timecheckError", {
                            error: "_parseDate exception: " + e
                        }), null
                    }
                    return f.isValid() ? (d = c.diff(f, "hours"), Math.abs(d) > this.threshold.as("hours")) : (a.$emit("timecheckError", {
                        error: "无法解析日期: " + b
                    }), null)
                }, e.prototype.enforceNetTime = function () {
                    return this.isNetTimeInvalid().then(function (b) {
                        return function (b) {
                            return b && a.$emit("timecheckFailed"), b
                        }
                    }(), function (a) {
                        return function () {}
                    }())
                }, e
            }()
        }]), angular.module("swarmApp").value("timecheckUrl", "./version.json"), angular.module("swarmApp").value("timecheckThresholdHours", 96), angular.module("swarmApp").factory("timecheck", ["TimeChecker", "timecheckThresholdHours", function (a, b) {
            return new a(b)
        }]), angular.module("swarmApp").factory("VersionChecker", ["env", "util", "$log", function (a, b, c) {
            return function () {
                function a(a) {
                    this.version = a, this._MAX = 1e5
                }
                return a.prototype.check = function (a) {
                    if (this.compare(this.version, a) < 0) return c.debug("newer version found on server! reloading.", {
                        local: this.version,
                        remote: a
                    }), window.setTimeout(function () {
                        return window.location.reload()
                    }, 3e4)
                }, a.prototype.compare = function (a, b) {
                    return this.normalize(a) - this.normalize(b)
                }, a.prototype.normalize = function (a) {
                    var c, d, e, f, g, h;
                    for (h = 0, d = a.split("."), d.reverse(), f = e = 0, g = d.length; e < g; f = ++e) c = d[f], c = parseInt(c), b.assert(!_.isNaN(c), "version compare failed, a chunk isNaN", c, a), b.assert(c < this._MAX, "version compare failed, a chunk is too big", c, a), h += c * Math.pow(this._MAX, f);
                    return h
                }, a
            }()
        }]), angular.module("swarmApp").factory("versioncheck", ["$rootScope", "VersionChecker", "version", "$log", function (a, b, c, d) {
            var e;
            return e = new b(c), a.$on("timecheck", function (a, b) {
                var f, g;
                if (g = null != b && null != (f = b.data) ? f.version : void 0, d.debug("version check", {
                        local: c,
                        remote: g
                    }), g) return e.check(g)
            }), e
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("FlashQueue", ["$log", "$timeout", "util", function (a, b, c) {
            return function () {
                function c(a, b) {
                    this.showTime = null != a ? a : 5e3, this.fadeTime = null != b ? b : 1e3, this.queue = [], this._state = "invisible", this._timeout = null
                }
                return c.prototype.push = function (a) {
                    return this.queue.push(a), this.animate()
                }, c.prototype.animate = function () {
                    if ("invisible" === this._state && this.queue.length > 0) return a.debug("flashqueue beginning animation", this.get()), this._state = "visible", this._timeout = b(function (c) {
                        return function () {
                            return c._state = "fading", c._timeout = b(function () {
                                return a.debug("flashqueue ending animation", c.get()), c._state = "invisible", c.queue.shift(), c.animate()
                            }, c.fadeTime)
                        }
                    }(this), this.showTime)
                }, c.prototype.isVisible = function () {
                    return "visible" === this._state
                }, c.prototype.get = function () {
                    return this.queue[0]
                }, c.prototype.clear = function () {
                    return a.debug("flashqueue clearing animation"), this.queue.length = 0, this._timeout && b.cancel(this._timeout), this._state = "invisible"
                }, c
            }()
        }]), angular.module("swarmApp").factory("flashqueue", ["$log", "FlashQueue", "$rootScope", function (a, b, c) {
            var d;
            return d = new b, c.$on("achieve", function (b, c) {
                return a.debug("achievement flashqueue pushing achievement", c), d.push(c)
            }), d
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("FlashQueueCtrl", ["$scope", "flashqueue", function (a, b) {
            return a.achieveQueue = b
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("AchievementsCtrl", ["$scope", "game", "$location", "$log", function (a, b, c, d) {
            var e, f;
            return a.game = b, null == (e = b.session.state).achievementsShown && (e.achievementsShown = {
                earned: !0,
                unearned: !0,
                masked: !0,
                order: "default",
                reverse: !1
            }), a.form = {
                show: _.clone(b.session.state.achievementsShown)
            }, f = {
                default: function (a) {
                    return a.earnedAtMillisElapsed()
                },
                percentComplete: function (a) {
                    return a.progressOrder()
                }
            }, a.order = {
                pred: f[a.form.show.order]
            }, a.onChangeVisibility = function () {
                return a.order.pred = f[a.form.show.order], b.withUnreifiedSave(function () {
                    return b.session.state.achievementsShown = _.clone(a.form.show)
                })
            }, a.state = function (a) {
                return a.isEarned() ? "earned" : a.isUnmasked() ? "unearned" : a.type.points <= 0 ? "hidden" : "masked"
            }, a.isVisible = function (b) {
                var c;
                return c = a.state(b), "earned" === c ? a.form.show.earned : "unearned" === c ? a.form.show.unearned : a.form.show.masked
            }, a.achieveclick = function (b) {
                return d.debug("achieveclick", b), a.$emit("achieveclick", b)
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Achievement", ["util", "$log", "$rootScope", "$filter", function (a, b, c, d) {
            return function () {
                function b(a, b) {
                    this.game = a, this.type = b, this.name = this.type.name
                }
                return b.prototype._init = function () {
                        var b;
                        return null == (b = this.game.session.state).achievements && (b.achievements = {}), this.requires = _.map(this.type.requires, function (b) {
                            return function (c) {
                                return c = _.clone(c), c.unittype && (c.resource = c.unit = a.assert(b.game.unit(c.unittype))), c.upgradetype && (c.resource = c.upgrade = a.assert(b.game.upgrade(c.upgradetype))), a.assert(!(c.unit && c.upgrade), "achievement requirement can't have both unit and upgrade", b.name), c
                            }
                        }(this)), a.assert(this.requires.length <= 1, "multiple achievement requirements not yet supported", this.name), this.visible = _.map(this.type.visible, function (b) {
                            return function (c) {
                                return c = _.clone(c), c.unittype && (c.resource = c.unit = a.assert(b.game.unit(c.unittype))), c.upgradetype && (c.resource = c.upgrade = a.assert(b.game.upgrade(c.upgradetype))), a.assert(!!c.unit != !!c.upgrade, "achievement visiblity must have unit xor upgrade", b.name), c
                            }
                        }(this))
                    }, b.prototype.description = function () {
                        var a;
                        return a = this.type.description, this.type.requires.length > 0 && (this.type.requires[0].unittype || this.type.requires[0].upgradetype) && (a = a.replace("$REQUIRED", d("longnum")(this.type.requires[0].val, void 0, {
                            sigfigs: void 0
                        }))), a
                    }, b.prototype.isEarned = function () {
                        return null != this.game.session.state.achievements[this.name]
                    }, b.prototype.earn = function (a) {
                        if (null == a && (a = this.game.elapsedStartMillis()), !this.isEarned()) return this.game.withUnreifiedSave(function (b) {
                            return function () {
                                return b.game.session.state.achievements[b.name] = a
                            }
                        }(this)), c.$emit("achieve", this)
                    }, b.prototype.earnedAtMillisElapsed = function () {
                        return this.game.session.state.achievements[this.name]
                    }, b.prototype.earnedAtMoment = function () {
                        var a;
                        if (null != this.isEarned()) return a = moment(this.game.session.state.date.started), a.add(this.game.session.state.achievements[this.name], "ms"), a
                    }, b.prototype.pointsEarned = function () {
                        return this.isEarned() ? this.type.points : 0
                    }, b.prototype.isMasked = function () {
                        return !this.isUnmasked()
                    }, b.prototype.isUnmasked = function () {
                        var a, b, c, d;
                        if (0 === this.visible.length) return !1;
                        for (c = this.visible, a = 0, b = c.length; a < b; a++)
                            if (d = c[a], d.resource.count().lessThan(d.val)) return !1;
                        return !0
                    },
                    b.prototype.hasProgress = function () {
                        var a, b, c, d;
                        for (c = this.requires, a = 0, b = c.length; a < b; a++)
                            if (d = c[a], null != d.resource) return !0;
                        return !1
                    }, b.prototype.progressMax = function () {
                        if (null != this.hasProgress() && null != this.requires[0].val) return new Decimal(this.requires[0].val)
                    }, b.prototype.progressVal = function () {
                        var a, b;
                        return b = this.requires[0], null != b.upgrade ? b.upgrade.count() : null != b.unit ? b.unit.unittype.unbuyable ? b.unit.count() : new Decimal(null != (a = b.unit.statistics().twinnum) ? a : 0) : void 0
                    }, b.prototype.progressPercent = function () {
                        if (null != this.hasProgress()) return this.progressVal().dividedBy(this.progressMax())
                    }, b.prototype.progressOrder = function () {
                        return this.isEarned() ? 2 : this.isMasked() ? -2 : this.hasProgress() && this.progressMax() > 0 ? this.progressPercent().toNumber() : -1
                    }, b
            }()
        }]), angular.module("swarmApp").factory("AchievementTypes", ["spreadsheetUtil", "util", "$log", function (a, b, c) {
            return function () {
                function c() {
                    this.list = [], this.byName = {}
                }
                return c.prototype.register = function (a) {
                    return this.list.push(a), this.byName[a.name] = a
                }, c.prototype.pointsPossible = function () {
                    return b.sum(_.map(this.list, function (a) {
                        return a.points
                    }))
                }, c.parseSpreadsheet = function (d, e, f) {
                    var g, h, i, j, k, l, m, n;
                    for (n = a.parseRows({
                            name: ["requires", "visible"]
                        }, d.data.achievements.elements), l = new c, g = 0, i = n.length; g < i; g++) m = n[g], l.register(m);
                    for (k = l.list, h = 0, j = k.length; h < j; h++) m = k[h], a.resolveList(m.requires, "unittype", e.byName, {
                        required: !1
                    }), a.resolveList(m.requires, "upgradetype", f.byName, {
                        required: !1
                    }), a.resolveList(m.visible, "unittype", e.byName, {
                        required: !1
                    }), a.resolveList(m.visible, "upgradetype", f.byName, {
                        required: !1
                    }), b.assert(m.points >= 0, "achievement must have points", m.name, m), b.assert(_.isNumber(m.points), "achievement points must be number", m.name, m);
                    return l
                }, c
            }()
        }]), angular.module("swarmApp").factory("AchievementsListener", ["util", "$log", function (a, b) {
            return function () {
                function a(a, b) {
                    this.game = a, this.scope = b, this._listen(this.scope)
                }
                return a.prototype.achieveUnit = function (a, c) {
                    var d, e, f, g, h, i, j;
                    for (null == c && (c = !1), h = this.game.achievementlist(), j = [], f = 0, g = h.length; f < g; f++) d = h[f], j.push(function () {
                        var a, f, g, h, j;
                        for (g = d.requires, j = [], a = 0, f = g.length; a < f; a++) i = g[a], !i.event && i.unit && i.val ? (c ? e = i.unit.count() : (e = null != (h = i.unit.statistics().twinnum) ? h : 0, e = new Decimal(e)), b.debug("achievement check: unitcount after command", i.unit.name, e + "", null != e && e >= i.val), null != e && e.greaterThanOrEqualTo(i.val) ? (b.debug("earned", d.name, d), j.push(d.earn())) : j.push(void 0)) : j.push(void 0);
                        return j
                    }());
                    return j
                }, a.prototype.achieveUpgrade = function (a) {
                    var c, d, e, f, g, h, i;
                    for (g = this.game.achievementlist(), i = [], e = 0, f = g.length; e < f; e++) c = g[e], i.push(function () {
                        var a, e, f, g;
                        for (f = c.requires, g = [], a = 0, e = f.length; a < e; a++) h = f[a], !h.event && h.upgrade && h.val ? (d = h.upgrade.count(), b.debug("achievement check: upgradecount after command", h.upgrade.name, d, null != d && d >= h.val), null != d && d.greaterThanOrEqualTo(h.val) ? (b.debug("earned", c.name, c), g.push(c.earn())) : g.push(void 0)) : g.push(void 0);
                        return g
                    }());
                    return i
                }, a.prototype._listen = function (a) {
                    var c, d, e, f, g;
                    for (this.scope = a, g = this.game.achievementlist(), d = function (a) {
                            return function (c) {
                                var d, e, f, g, h;
                                for (f = c.requires, h = [], d = 0, e = f.length; d < e; d++) g = f[d], g.event && !g.unit ? h.push(function (d) {
                                    return d.val && (d.val = JSON.parse(d.val), b.debug("parse event-achievement json", d.event, d.val)), a.scope.$on(d.event, function (a, e) {
                                        var f, g;
                                        if (b.debug("achieve listen", d.event, e, d.val), !d.val || (g = _.pick(e, _.keys(d.val)), f = _.isEqual(g, d.val), b.debug("validate", d.event, d.val, g, f), f)) return c.earn()
                                    })
                                }(g)) : h.push(void 0);
                                return h
                            }
                        }(this), e = 0, f = g.length; e < f; e++) c = g[e], d(c);
                    return this.scope.$on("command", function (a) {
                        return function (c, d) {
                            if (b.debug("checking achievements for command", d), null != d.unitname && a.achieveUnit(d.unitname), null != d.upgradename && a.achieveUpgrade(d.upgradename), "ascension" === d.name) return b.debug("ascending!", a.game.unit("ascension").count()), a.achieveUnit("ascension", !0)
                        }
                    }(this))
                }, a
            }()
        }]), angular.module("swarmApp").factory("achievementslistener", ["AchievementsListener", "game", "$rootScope", function (a, b, c) {
            return new a(b, c)
        }]), angular.module("swarmApp").factory("achievements", ["AchievementTypes", "unittypes", "upgradetypes", "spreadsheet", function (a, b, c, d) {
            return a.parseSpreadsheet(d, b, c)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").filter("encodeURIComponent", function () {
            return function (a) {
                return window.encodeURIComponent(a)
            }
        }), angular.module("swarmApp").directive("cost", ["$log", function (a) {
            return {
                restrict: "E",
                scope: {
                    costlist: "=",
                    num: "=?",
                    buybuttons: "=?",
                    noperiod: "=?"
                },
                template: '<span ng-repeat="cost in costlist track by cost.unit.name">\n  <span ng-if="!$first && $last"> 和 </span>\n  <a ng-if="isRemainingBuyable(cost)" ng-href="#{{cost.unit.url()}}?num={{\'@\'+totalCostVal(cost)|encodeURIComponent}}">\n    {{totalCostVal(cost) | bignum}} {{totalCostVal(cost) == 1 ? cost.unit.unittype.label : cost.unit.unittype.plural}}<!--whitespace\n  --></a><span ng-if="!isRemainingBuyable(cost)" ng-class="{costNotMet:!isCostMet(cost)}">\n    {{totalCostVal(cost) | bignum}} {{totalCostVal(cost) == 1 ? cost.unit.unittype.label : cost.unit.unittype.plural}}<!--whitespace\n  --></span><span ng-if="$last && !noperiod">.</span><span ng-if="!$last && costlist.length > 2">, </span>\n</span>',
                link: function (a, b, c) {
                    return null == a.num && (a.num = 1), a.totalCostVal = function (b) {
                        return b.val.times(a.num + "")
                    }, a.isCostMet = function (b) {
                        return b.unit.count().greaterThanOrEqualTo(a.totalCostVal(b))
                    }, a.countRemaining = function (b) {
                        return a.totalCostVal(b).minus(b.unit.count()).ceil()
                    }, a.isRemainingBuyable = function (b) {
                        var c, d;
                        return d = a.countRemaining(b), c = b.unit.isBuyable(!0) && b.unit.isBuyButtonVisible(), d.greaterThan(0) && c || "energy" === b.unit.name
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("MainCtrl", ["$scope", "$log", "game", "$routeParams", "$location", "version", "options", "hotkeys", function (a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
            for (a.game = c, a.options = g, "energy" === d.unit && "energy" === d.tab && null != e.search().num && (console.log("hellohello", e.search().num), e.path("/tab/energy/unit/crystal")), a.cur = {}, a.cur.unit = a.game.unitBySlug(d.unit), a.cur.tab = null != (o = null != (p = a.game.tabs.byName[d.tab]) ? p : null != (q = a.cur.unit) ? q.tab : void 0) ? o : a.game.tabs.list[0], a.cur.tab.lastselected = a.cur.unit, (d.tab !== a.cur.tab.name && null != d.tab || !a.cur.tab.isVisible()) && e.url("/"), null == d.unit || null != a.cur.unit && a.cur.unit.unittype.slug === d.unit && null != a.cur.tab.indexByUnitName[a.cur.unit.name] && a.cur.unit.isVisible() || (b.debug("invalid unit", d.unit, a.cur.unit, null == a.cur.unit, (null != (r = a.cur.unit) && null != (s = r.unittype) ? s.slug : void 0) !== d.unit, null == a.cur.tab.indexByUnitName[null != (t = a.cur.unit) ? t.name : void 0], !(null != (u = a.cur.unit) && "function" == typeof u.isVisible ? u.isVisible() : void 0)), e.url(a.cur.tab.url(!1))), b.debug("tab", a.cur), a.click = function (b) {
                    return e.url(a.cur.tab.url(b))
                }, a.filterVisible = function (a) {
                    return a.isVisible()
                }, i = function (b, d) {
                    var e;
                    return b += d + c.tabs.list.length, b %= c.tabs.list.length, e = c.tabs.list[b], e === a.cur.tab ? null : e.isVisible() ? e : i(b, d)
                }, j = h.bindTo(a), m = "1234567890", m = m.split("").concat(m.split("").map(function (a) {
                    return "shift+" + a
                })), v = _.reverse(_.filter(a.cur.tab.sortUnits(), a.filterVisible)), w = [], k = l = 0, n = v.length; l < n; k = ++l) x = v[k], w.push(function (a, b) {
                if (null != m[b]) return j.add({
                    combo: m[b],
                    callback: function () {
                        return e.path("/unit/" + a.type.slug)
                    }
                })
            }(x, k));
            return w
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Tab", function () {
            return function () {
                function a(a, b, c) {
                    this.leadunit = a, this.index = b, this.name = null != c ? c : this.leadunit.name, this.units = [], this.sortedUnits = [], this.indexByUnitName = {}, this.push(this.leadunit)
                }
                return a.prototype.push = function (a) {
                    return this.indexByUnitName[a.name] = this.units.length, this.units.push(a), this.sortedUnits.unshift(a)
                }, a.prototype.next = function (a) {
                    var b, c;
                    return b = this.indexByUnitName[null != (c = null != a ? a.name : void 0) ? c : a], this.units[b + 1]
                }, a.prototype.prev = function (a) {
                    var b, c;
                    return b = this.indexByUnitName[null != (c = null != a ? a.name : void 0) ? c : a], this.units[b - 1]
                }, a.prototype.isVisible = function () {
                    return this.leadunit.isVisible()
                }, a.prototype.isNewlyUpgradable = function () {
                    return _.some(this.units, function (a) {
                        return a.isVisible() && a.isNewlyUpgradable()
                    })
                }, a.prototype.sortUnits = function () {
                    return "all" === this.name ? this.sortedUnits : _.sortBy(this.sortedUnits, function (a) {
                        return -1 * a.stat("empower", 0)
                    })
                }, a.buildTabs = function (b) {
                    var c, d, e, f, g, h;
                    for (f = {
                            list: [],
                            byName: {},
                            byUnit: {}
                        }, c = null, d = 0, e = b.length; d < e; d++) h = b[d], h.unittype.tab && !h.unittype.disabled && (g = f.byName[h.unittype.tab], null != g ? g.push(h) : (g = f.byName[h.unittype.tab] = new a(h, f.list.length), f.list.push(g)), f.byUnit[h.name] = g, c ? c.push(h) : c = f.byName.all = new a(h, 1, "all"));
                    return c.sortedUnits.reverse(), f
                }, a.prototype.url = function (a) {
                    var b;
                    return null == a && (a = this.lastselected), b = a ? "/unit/" + a.unittype.slug : "", "/tab/" + this.name + b
                }, a
            }()
        })
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("buyunit", ["$log", "game", "commands", "hotkeys", function (a, b, c, d) {
            return {
                templateUrl: "views/buyunit.html",
                scope: {
                    num: "=?",
                    fixednum: "=?",
                    unit: "="
                },
                restrict: "E",
                link: function (e, f, g) {
                    var h, i, j;
                    return e.commands = c, e.is25Visible = function () {
                        var a;
                        return a = e.resource.maxCostMet(.25), e.resource.maxCostMet().greaterThan(a) && a.greaterThan(1)
                    }, e.fullnum = function () {
                        var a, b;
                        return null != e.fixednum ? new Decimal(e.fixednum + "").dividedBy(e.unit.twinMult()) : (a = null != (b = e.num) ? b : 1, a = Decimal.max(1, Decimal.min(e.resource.maxCostMet(), new Decimal(a + "").floor())), a.isNaN() && (a = new Decimal(1)), a)
                    }, e.unit = e.resource = b.unit(e.unit), a.debug("buyunit", e.resource), e.buyResource = function (a) {
                        return a.unit = a.resource, delete a.resource, c.buyUnit(a)
                    }, e.buyMaxResource = function (a) {
                        return a.unit = a.resource, delete a.resource, c.buyMaxUnit(a)
                    }, e.statTwin = function () {
                        return e.resource.twinMult()
                    }, e.isBuyButtonVisible = function () {
                        return e.resource.isBuyButtonVisible()
                    }, e.verb = null != (h = null != (i = e.unit) && null != (j = i.type) ? j.verb : void 0) ? h : "购买", d.bindTo(e).add({
                        combo: "alt+b",
                        description: _.capitalize(e.verb) + " " + e.resource.type.plural,
                        callback: function () {
                            if (e.resource.isCostMet()) return e.buyResource({
                                resource: e.resource,
                                num: e.fullnum()
                            })
                        }
                    }).add({
                        combo: "shift+alt+b",
                        description: _.capitalize(e.verb) + " max " + e.resource.type.plural,
                        callback: function () {
                            if (e.resource.maxCostMet().greaterThan(1)) return e.buyMaxResource({
                                resource: e.resource,
                                percent: 1
                            })
                        }
                    })
                }
            }
        }]), angular.module("swarmApp").directive("buyupgrade", ["$log", "game", "commands", "hotkeys", function (a, b, c, d) {
            return {
                templateUrl: "views/buyunit.html",
                scope: {
                    num: "=?",
                    upgrade: "=",
                    index: "=?"
                },
                restrict: "E",
                link: function (e, f, g) {
                    var h, i;
                    if (e.commands = c, e.is25Visible = function () {
                            var a;
                            return a = e.resource.maxCostMet(.25), e.resource.maxCostMet().greaterThan(a) && a.greaterThan(1)
                        }, e.fullnum = function () {
                            var a, b;
                            return a = null != (b = e.num) ? b : 1, a = Decimal.max(1, Decimal.min(e.resource.maxCostMet(), new Decimal(a + "").floor())), a.isNaN() && (a = new Decimal(1)), a
                        }, e.upgrade = e.resource = b.upgrade(e.upgrade), a.debug("buyupgrade", e.resource), e.buyResource = function (a) {
                            return a.upgrade = a.resource, delete a.resource, c.buyUpgrade(a)
                        }, e.buyMaxResource = function (a) {
                            return a.upgrade = a.resource, delete a.resource, c.buyMaxUpgrade(a)
                        }, e.statTwin = function () {
                            return new Decimal(1)
                        }, e.isBuyButtonVisible = function () {
                            return !0
                        }, e.verb = "ability" === e.upgrade.type.class ? "投入" : "购买", i = "1234567890-=", null != e.index) return console.log("bind upgrade key", e.index), h = i[e.index], d.bindTo(e).add({
                        combo: "alt+shift+" + h,
                        description: _.capitalize(e.verb) + " " + e.resource.type.label,
                        callback: function (a) {
                            if (e.resource.isCostMet()) return e.buyResource({
                                resource: e.resource,
                                num: e.fullnum()
                            })
                        }
                    })
                }
            }
        }]), angular.module("swarmApp").directive("buyunitdropdown", ["$log", "game", "commands", function (a, b, c) {
            return {
                templateUrl: "views/buyunit-dropdown.html",
                scope: {
                    num: "=?",
                    unit: "="
                },
                restrict: "E",
                transclude: !0,
                link: function (d, e, f) {
                    return d.commands = c, d.is25Visible = function (a) {
                        var b;
                        return null == a && (a = d.unit), b = a.maxCostMet(.25), a.maxCostMet().greaterThan(b) && b.greaterThan(1)
                    }, d.fullnum = function () {
                        var a, b;
                        return a = null != (b = d.num) ? b : 1, a = Decimal.max(1, Decimal.min(d.unit.maxCostMet(), new Decimal(a + "").floor())), a.isNaN() && (a = new Decimal(1)), a
                    }, d.filterVisible = function (a) {
                        return a.isVisible()
                    }, d.unit = b.unit(d.unit), a.debug("buyunit", d.unit), d.buyUnit = function (a) {
                        return c.buyUnit(a)
                    }, d.buyMaxUnit = function (a) {
                        return c.buyMaxUnit(a)
                    }, d.buyUpgrade = function (a) {
                        return c.buyUpgrade(a)
                    }, d.buyMaxUpgrade = function (a) {
                        return c.buyMaxUpgrade(a)
                    }, d.statTwin = function () {
                        return d.unit.twinMult()
                    }, d.isBuyButtonVisible = function () {
                        return d.unit.isBuyButtonVisible()
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("tabs", ["game", "util", "options", "version", "commands", "hotkeys", function (a, b, c, d, e, f) {
            return {
                templateUrl: "views/tabs.html",
                scope: {
                    cur: "="
                },
                restrict: "E",
                link: function (d, g, h) {
                    return d.tabs = a.tabs, d.options = c, d.game = a, d.filterVisible = function (a) {
                        return a.isVisible()
                    }, d.buyUpgrades = function (a, b) {
                        if (null == b && (b = 1), a.length > 0) return e.buyAllUpgrades({
                            upgrades: a,
                            percent: b
                        })
                    }, b.animateController(d, {
                        game: a,
                        options: c
                    }), d.undo = function () {
                        if (d.isUndoable()) return e.undo()
                    }, d.secondsSinceLastAction = function () {
                        var b, c, d;
                        return (a.now.getTime() - (null != (b = null != (c = e._undo) && null != (d = c.date) && "function" == typeof d.getTime ? d.getTime() : void 0) ? b : 0)) / 1e3
                    }, d.undoLimitSeconds = 30, d.isRedo = function () {
                        var a;
                        return null != (a = e._undo) ? a.isRedo : void 0
                    }, d.isUndoable = function () {
                        return d.secondsSinceLastAction() < d.undoLimitSeconds && !d.isRedo()
                    }, d.buyAllUpgrades = function () {
                        return d.buyUpgrades(a.availableAutobuyUpgrades())
                    }, d.buyCheapestUpgrades = function () {
                        return d.buyUpgrades(a.availableAutobuyUpgrades(.25), .25)
                    }, f.bindTo(d).add({
                        combo: "z",
                        description: "Undo the last action",
                        callback: function () {
                            return d.undo()
                        }
                    }).add({
                        combo: "alt+a",
                        description: "Buy all available upgrades",
                        callback: function () {
                            return d.buyAllUpgrades()
                        }
                    }).add({
                        combo: "alt+c",
                        description: "Buy cheapest available upgrades",
                        callback: function () {
                            return d.buyCheapestUpgrades()
                        }
                    })
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("tutorial", ["game", function (a) {
            return {
                template: '<div ng-if="tutStep() > 0" class="alert animif alert-info" role="alert">\n  <button ng-if="showCloseButton()" type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">关闭</span></button>\n\n  <div ng-if="tutStep() == 1">\n    <p>欢迎来到模拟虫群。从开始时的几只幼虫和一小堆肉，发展壮大成一个庞大的虫群。</p>\n    <p>你的育幼生涯的开头只有一小堆肉和一个生产幼虫的孵化场。幼虫突变成其他单位。利用肉和幼虫孵化一些 <a href="#/unit/drone">雄蜂</a>来开始你的育成吧。</p>\n  </div>\n  <p ng-if="tutStep() == 2">你领导着一小群雄峰工人。雄蜂可以收集肉。使用这些肉来生产更多雄峰并扩大你的巢穴。</p>\n  <p ng-if="tutStep() == 3">You lead a small brood of worker drones. Once you have plenty of meat, upgrade your hatchery to生产更多的larvae by selecting \'<a href="#/unit/larva">幼虫</a>\' and spending some meat.</p>\n  <p ng-if="tutStep() == 11">A <span class="glyphicon glyphicon-circle-arrow-up"></span> appears when you have enough meat to upgrade your hatchery.</p>\n  <p ng-if="tutStep() == 4">You lead a small brood of worker drones. They long for a <a href="#/unit/queen">queen</a>. You must sacrifice many drones to hatch a queen, but once born, your queen will slowly hatch drones without consuming meat or larvae.</p>\n  <p ng-if="tutStep() == 5">Hatch more queens to grow your swarm. Hatching drones with the "Twin Drones" upgrade will allow you to rapidly raise more queens.</p>\n  <p ng-if="tutStep() == 6">Queens have rapidly grown your swarm, and your growth demands more <a href="#/unit/territory">territory</a>. Begin capturing <a href="#/unit/territory">territory</a> by building military units - swarmlings or stingers.</p>\n  <p ng-if="tutStep() == 7">Your warriors have slowly begun securing territory. Continue expanding your military.</p>\n  <p ng-if="tutStep() == 8">Your warriors have captured a lot of territory, and soon you can secure你的第一个expansion. Expansions increase larva production. Select \'<a href="#/unit/larva">幼虫</a>\' to expand.</p>\n  <p ng-if="tutStep() == 9">Expansion is the key to growing your swarm rapidly. Build a large military to expand your territory and生产更多的larvae. Build more queens and, eventually, nests to生产更多的meat for your military.</p>\n\n  <p ng-if="tutStep() == 10">Your swarm has grown large enough to <b>ascend</b> - gain even greater power and restart on a new world! Take a look at the <a href="#/unit/mutagen">mutagen tab</a>.</p>\n  <p ng-if="tutStep() == 100">Congratulations on你的第一个ascension! Mutations can make your swarm much more powerful. Mutagen you haven\'t spent yet will produce some larvae - don\'t spend it all right away!</p>\n</div>',
                scope: {
                    game: "=?"
                },
                restrict: "E",
                link: function (b, c, d) {
                    var e, f;
                    return e = null != (f = b.game) ? f : a, b.showCloseButton = function () {
                        return 10 === b.tutStep() || 100 === b.tutStep()
                    }, b.tutStep = function () {
                        var b;
                        return null != (b = a.cache).tutorialStep ? b.tutorialStep : b.tutorialStep = function (a) {
                            return function () {
                                var a, b;
                                if (a = e.countUnits(), b = e.countUpgrades(), !a.ascension.isZero()) return e.cache.firstSpawn.ascension ? 100 : 0;
                                if (e.cache.firstSpawn.premutagen && a.ascension.isZero()) return 10;
                                if (b.expansion.greaterThanOrEqualTo(5)) return 0;
                                if (b.expansion.greaterThan(0)) return 9;
                                if (b.hatchery.greaterThan(0)) {
                                    if (a.queen.greaterThanOrEqualTo(5)) return a.territory.greaterThan(5) ? 8 : a.territory.greaterThan(0) ? 7 : 6;
                                    if (a.queen.greaterThan(0)) return 5
                                }
                                return a.drone.greaterThanOrEqualTo(10) ? b.hatchery.greaterThan(0) ? 4 : a.meat.greaterThanOrEqualTo(300) ? 11 : 3 : a.drone.greaterThan(0) ? 2 : 1
                            }
                        }()()
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("focusInput", ["$timeout", "hotkeys", function (a, b) {
            return {
                restrict: "A",
                link: function (a, c, d) {
                    var e;
                    return e = function (a) {
                        return c[0].focus(), a.preventDefault()
                    }, b.bindTo(a).add({
                        combo: "/",
                        description: "Focus buy-unit input field",
                        callback: e
                    })
                }
            }
        }]), angular.module("swarmApp").directive("unit", ["$log", "game", "options", "util", "$location", "hotkeys", function (a, b, c, d, e, f) {
            return {
                templateUrl: "views/directive-unit.html",
                restrict: "E",
                scope: {
                    cur: "="
                },
                link: function (a, d, g) {
                    var h, i, j, k, l, m, n, o, p, q;
                    for (a.game = b, a.options = c, h = f.bindTo(a), null != a.cur.prev && h.add({
                            combo: ["down", "left"],
                            description: "Select " + a.cur.prev.type.plural,
                            callback: function (b) {
                                return e.path("/unit/" + a.cur.prev.unittype.slug), b.preventDefault()
                            }
                        }), null != a.cur.next && h.add({
                            combo: ["up", "right"],
                            description: "Select " + a.cur.next.type.plural,
                            callback: function (b) {
                                return e.path("/unit/" + a.cur.next.unittype.slug), b.preventDefault()
                            }
                        }), function (a) {}, a.estimateUpgradeSecs = function (a) {
                            var b, c, d, e, f;
                            return b = a.estimateSecsUntilBuyable(), f = b.val.toNumber(), isFinite(f) ? (e = moment.duration(f, "seconds"), e.nonexact = !(null == (c = null != (d = b.unit) && "function" == typeof d.isEstimateExact ? d.isEstimateExact() : void 0) || c), e) : b.val.isFinite() || b.val.isNaN() ? NaN : 1 / 0
                        }, a.filterVisible = function (a) {
                            return a.isVisible()
                        }, a.watched = {}, n = null != (m = a.cur.upgrades.byClass.upgrade) ? m : [], i = 0, k = n.length; i < k; i++) q = n[i], a.watched[q.name] = q.watchedAt();
                    for (p = null != (o = a.cur.upgrades.byClass.ability) ? o : [], j = 0, l = p.length; j < l; j++) q = p[j], a.watched[q.name] = !q.isManuallyHidden();
                    return a.updateWatched = function (b) {
                        return b.watch(a.watched[b.name])
                    }, a.updateWatchedAbility = function (b) {
                        return b.watch(a.watched[b.name] ? 0 : -1)
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("unitdesc", ["game", "commands", "options", function (a, b, c) {
            return {
                template: '<p ng-if="templateUrl" ng-include="templateUrl" class="desc desc-unit desc-template desc-{{unit.name}}"></p><p ng-if="!templateUrl" class="desc desc-unit desc-text desc-{{unit.name}}">{{desc}}</p>',
                scope: {
                    unit: "=",
                    game: "=?"
                },
                restrict: "E",
                link: function (d, e, f) {
                    return null == d.game && (d.game = a), d.commands = b, d.options = c, d.desc = d.unit.unittype.description, d.templateUrl = function () {
                        return "-" !== d.desc && d.desc ? "" : "views/desc/unit/" + d.unit.name + ".html"
                    }()
                }
            }
        }]), angular.module("swarmApp").controller("MtxDesc", ["$scope", "$log", "mtx", "commands", "$location", function (a, b, c, d, e) {
            var f;
            return a.mtx = c, f = function () {
                return a.pullLoading = !0, a.mtx.pull().then(function () {
                    return a.pullLoading = !1, a.pullSuccess = !0, a.pullTx = e.search().tx, a.pullError = null
                }).catch(function (b) {
                    return a.pullLoading = !1, a.pullSuccess = !1, a.pullTx = e.search().tx, a.pullError = b
                })
            }, a.mtx.packs().then(function (b) {
                return a.packs = b, a.packsError = null, f()
            }).catch(function (b) {
                return a.packs = null, a.packsError = b
            }), a.buyLoading = !1, a.clickBuyPack = function (c) {
                return a.buySuccess = a.buyError = null, a.buyLoading = !0, a.mtx.buy(c.name).then(function (b) {
                    return a.buySuccess = !0, a.buyError = null, a.buyLoading = !1
                }).catch(function (c) {
                    return b.error("buyerror", c), a.buySuccess = !1, a.buyError = c, a.buyLoading = !1
                })
            }
        }]), angular.module("swarmApp").directive("upgradedesc", ["game", "commands", "options", function (a, b, c) {
            return {
                template: '<p ng-if="templateUrl" ng-include="templateUrl" desc desc-upgrade desc-template desc-{{upgrade.name}}"></p><p ng-if="!templateUrl" class="desc desc-upgrade desc-text desc-{{upgrade.name}}">{{desc}}</p>',
                scope: {
                    upgrade: "=",
                    game: "=?"
                },
                restrict: "E",
                link: function (d, e, f) {
                    return null == d.game && (d.game = a), d.commands = b, d.options = c, d.desc = d.upgrade.type.description, d.templateUrl = function () {
                        return "-" !== d.desc && d.desc ? "" : "views/desc/upgrade/" + d.upgrade.name + ".html"
                    }()
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("LoadSaveCtrl", ["$scope", "$log", "game", "session", "version", "$location", "backfill", "isKongregate", "storage", "saveId", function (a, b, c, d, e, f, g, h, i, j) {
            var k, l, m;
            a.form = {}, a.isKongregate = h, a.select = function (a) {
                return a.target.select()
            }, a.contactUrl = function () {
                return "#/contact?" + $.param({
                    error: a.form.error
                })
            };
            try {
                l = d.getStoredSaveData()
            } catch (d) {
                return k = d, b.error("couldn't even read localstorage! oh no!", k), c.reset(!0), a.form.errored = !0, a.form.error = k.message, a.form.domain = window.location.host, void a.$emit("loadGameFromStorageFailed", k.message)
            }
            try {
                d.load(), b.debug("Game data loaded successfully.", this)
            } catch (d) {
                k = d, l ? (b.warn("Failed to load non-empty saved data! Oh no!"), c.reset(!0), a.form.errored = !0, a.form.error = k.message, a.form.export = l, a.$emit("loadGameFromStorageFailed", k.message)) : (b.debug("Empty saved data; probably the user's first visit here. Resetting quietly."), c.reset(!0), i.flash.onReady.then(function () {
                    var d;
                    return d = i.flash.getItem(j), d ? (b.debug("flash loaded successfully, and found a saved game there that wasn't in cookies/localstorage! importing."), a.$root.$broadcast("savedGameRecoveredFromFlash", k.message), c.importSave(d, !0)) : b.debug("flash loaded successfully, but no saved game found. this is truly a new visitor.")
                }))
            }
            return null != (m = f.search().savedata) && (b.info("loading game from url..."), c.importSave(m, !0), b.info("loading game from url successful!")), g.run(c)
        }]), angular.module("swarmApp").controller("AprilFoolsCtrl", ["$scope", "options", function (a, b) {
            return a.options = b, a.year = (new Date).getFullYear()
        }]), angular.module("swarmApp").controller("WelcomeBackCtrl", ["$scope", "$log", "$interval", "game", "$location", function (a, b, c, d, e) {
            var f, g;
            return f = null, a.$on("import", function (a, c) {
                if (b.debug("welcome back: import", null != c ? c.success : void 0, c), null != c ? c.success : void 0) return g(!0, !0)
            }), a.$on("savedGameRecoveredFromFlash", function (a, c) {
                return b.debug("welcome back: saved game recovered from flash"), g()
            }), a.$on("reset", function (b, c) {
                return null != ("function" == typeof a.closeWelcomeBack ? a.closeWelcomeBack() : void 0)
            }), (g = function (g, h) {
                var i, j, k, l, m, n, o, p, q;
                if (a.durationSinceClosed = d.session.durationSinceClosed(void 0, h), a.showWelcomeBack = a.durationSinceClosed.asMinutes() >= 3 || e.search().forcewelcome, o = (d.session.dateClosed(h).getTime() - d.session.state.date.reified.getTime()) / 1e3, b.debug("time since game closed", a.durationSinceClosed.humanize(), {
                        millis: d.session.millisSinceClosed(void 0, h),
                        reifiedToCloseDiffInSecs: o
                    }), $(window).on("unload", function () {
                        return d.session.onClose()
                    }), null == f && (f = c(function () {
                        return d.session.onHeartbeat()
                    }, 6e4)), d.session.onHeartbeat(), !a.showWelcomeBack) return void b.debug("skipping welcome back screen: offline time too short", a.durationSinceClosed.asMinutes());
                for (a.closeWelcomeBack = function () {
                        b.debug("closeWelcomeBack"), $("#welcomeback").alert("close")
                    }, k = [], l = 0, n = d.tabs.byName.meat.sortedUnits, j = 0, m = n.length; j < m && (q = n[j], !(l >= 3)); j++) q.velocity().isZero() || (l += 1, k.push(q));
                return k = k.concat(_.map(d.tabs.list, "leadunit")), p = {}, a.offlineGains = _.map(k, function (a) {
                    var b, c, d;
                    if (!p[a.name] && (p[a.name] = !0, d = a.count(), b = a._countInSecsFromReified(o), c = d.minus(b), c.greaterThan(0))) return {
                        unit: a,
                        val: c
                    }
                }), a.offlineGains = function () {
                    var b, c, d, e;
                    for (d = a.offlineGains, e = [], b = 0, c = d.length; b < c; b++)(i = d[b]) && e.push(i);
                    return e
                }()
            })(!1, !1)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("favico", ["game", "env", "$rootScope", "$log", function (a, b, c, d) {
            var e;
            return e = null != window.Favico ? new(function () {
                function b() {
                    this.instance = new Favico({
                        animation: "none"
                    }), this.lastcount = 0
                }
                return b.prototype.update = function () {
                    var b, c;
                    return c = a.getNewlyUpgradableUnits(), b = c.length, b !== this.lastcount && (d.debug("favicon update", {
                        stale: this.lastcount,
                        fresh: b,
                        units: c
                    }), b > 0 ? this.instance.badge(b) : this.instance.reset()), this.lastcount = b
                }, b
            }()) : new(function () {
                function a() {}
                return a.prototype.update = function () {}, a
            }()), c.$on("tick", function () {
                return e.update()
            }), e
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("debugdd", ["env", "game", "util", function (a, b, c) {
            return {
                scope: {
                    label: "=",
                    min: "=?",
                    max: "=?",
                    value: "="
                },
                restrict: "E",
                template: '<dt ng-class="{envalert:value < min || value > max}">{{label}}</dt>\n<dd ng-class="{envalert:value < min || value > max}">{{value|number}}</dt>'
            }
        }]), angular.module("swarmApp").directive("debug", ["env", "game", "util", "$location", function (a, b, c, d) {
            return {
                template: '<div ng-cloak ng-if="env.isDebugEnabled" class="container well">\n  <p class="small pull-right">{{heights()}}</p>\n  <p class="envalert">调试</p>\n  <div class="row">\n    <div class="col-md-8">\n      <div>\n        Set count:\n        <select tabindex="1" ng-options="u as u.type.label for u in game.resourcelist()" ng-model="form.resource" ng-change="selectResource()">\n          <option value="">-- select unit --</option>\n        </selected>\n        <input tabindex="2" type="text" ng-model="form.count" ng-change="setResource()">\n        <code>{{form.count|longnum}}</code>\n        <button ng-click="game.save()">保存</button>\n      </div>\n      <div>\n        export <input tabindex="3" ng-model="form.export" onclick="this.select()">\n        import <input tabindex="4" ng-model="form.import" ng-change="game.importSave(form.import);form.import=\'\'">\n        <button tabindex="5" class="resetalert" ng-click="confirmReset()">\n          <span class="glyphicon glyphicon-warning-sign"></span>\n          Wipe all saved data and start over\n        </button>\n      </div>\n      <p>export age: {{now().getTime() - form.exportAge.getTime()}}</p>\n      <div>\n        跳过时间:\n        <button ng-click="game.skipTime(1, \'minute\')">1 minute</button>\n        <button ng-click="game.skipTime(5, \'minute\')">5 分钟</button>\n        <button ng-click="game.skipTime(15, \'minute\')">15 分钟</button>\n        <button ng-click="game.skipTime(1, \'hour\')">1 小时</button>\n        <button ng-click="game.skipTime(4, \'hour\')">4 小时</button>\n        <button ng-click="game.skipTime(8, \'hour\')">8 小时</button>\n        <button ng-click="game.skipTime(24, \'hour\')">24 小时</button>\n      </div>\n      <div>\n        Game speed: {{game.gameSpeed | number}}x\n        <button ng-click="game.setGameSpeed(1)">1x: 正常</button>\n        <button ng-click="game.setGameSpeed(0)">0x: 暂停</button>\n        <button ng-click="game.setGameSpeed(1.5)">1.5x</button>\n        <button ng-click="game.setGameSpeed(2)">2x</button>\n        <button ng-click="game.setGameSpeed(4)">4x</button>\n        <button ng-click="game.setGameSpeed(10)">10x</button>\n        <button ng-click="game.setGameSpeed(60)">60x</button>\n        <button ng-click="game.setGameSpeed(100)">100x</button>\n        <button ng-click="game.setGameSpeed(1000)">1000x</button>\n        <button ng-click="game.setGameSpeed(3600)">3600x</button>\n      </div>\n      <p title="{{game.dateStarted().toString()}}">你开始玩游戏 {{game.momentStarted().fromNow()}}<span ng-if="game.totalSkippedMillis() > 0"> (跳过额外的 {{game.totalSkippedDuration().humanize()}})</span>。</p>\n    </div>\n    <dl class="dl-horizontal col-md-4">\n      <debugdd label="\'performance.memory.usedJSHeapSize\'" value="mem()" max="100000000"></debugdd>\n    </dl>\n  </div>\n</div>',
                restrict: "E",
                link: function (e, f, g) {
                    return e.env = a, e.game = b, e.util = c, e.heights = function () {
                        return {
                            "htmlheight()": $(document.documentElement).height(),
                            "bodyheight()": $(document.body).height()
                        }
                    }, e.form = {}, e.export = function () {
                        return e.form.export = e.game.session.exportSave(), e.form.exportAge = new Date
                    }, e.now = function () {
                        return e.game.now
                    }, e.export(), e.selectResource = function () {
                        return e.form.count = e.form.resource.count()
                    }, e.setResource = function () {
                        return e.game.withSave(function () {
                            var a, c, d, f, g, h;
                            if (e.form.resource._setCount(e.form.count), "nexus" === e.form.resource.name) {
                                for (f = b.upgradelist(), g = [], a = 0, c = f.length; a < c; a++) h = f[a], "nexus" === h.name.substring(0, 5) ? (d = parseInt(h.name[5]), e.form.count >= d ? g.push(h._setCount(1)) : g.push(void 0)) : g.push(void 0);
                                return g
                            }
                        }), e.export()
                    }, e.confirmReset = function () {
                        if (confirm("really?")) return e.game.reset(!0), d.url("/")
                    }, e.mem = function () {
                        var a;
                        return "undefined" != typeof performance && null !== performance && null != (a = performance.memory) ? a.usedJSHeapSize : void 0
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("isKongregate", function () {
            return function () {
                return _.includes(window.location.search, "kongregate")
            }
        }), angular.module("swarmApp").factory("Kongregate", ["isKongregate", "$log", "$location", "game", "$rootScope", "$interval", "options", "$q", "loginApi", "env", function (a, b, c, d, e, f, g, h, i, j) {
            return function () {
                function c() {}
                return c.prototype.isKongregate = function () {
                    return a()
                }, c.prototype.load = function () {
                    var a;
                    b.debug("loading kongregate script..."), a = h.defer(), this.onLoad = a.promise, this.onLoad.then(function (a) {
                        return function () {
                            return a._onLoad()
                        }
                    }(this), console.warn);
                    try {
                        this.kongregate = window.parent.kongregate, this.parented = window.parent.document.getElementsByTagName("iframe")[0]
                    } catch (a) {
                        a
                    }
                    return this.kongregate ? (b.debug("kongregate api loaded from parent frame"), void a.resolve()) : $.getScript("https://cdn1.kongregate.com/javascripts/kongregate_api.js").done(function (c) {
                        return function (d, e, f) {
                            return b.debug("kongregate script loaded, now trying to load api", window.kongregateAPI), window.kongregateAPI.loadAPI(function () {
                                return b.debug("kongregate api loaded"), c.kongregate = window.kongregateAPI.getAPI(), a.resolve()
                            })
                        }
                    }(this)).fail(function (c) {
                        return function (c, d, e) {
                            return b.error("kongregate load failed", c, d, e), a.reject()
                        }
                    }())
                }, c.prototype.onResize = function () {}, c.prototype._onResize = function () {}, c.prototype._resizeGame = function (a, b) {
                    if (this.kongregate.services.resizeGame(Math.max(g.iframeMinX(), null != a ? a : 0), Math.max(g.iframeMinY(), null != b ? b : 0)), this.parented) return b = this.parented.style.height, a = this.parented.style.width, this.parented.style.height = "100%", this.parented.style.width = "100%", document.documentElement.style.height = b, document.documentElement.style.width = a
                }, c.prototype.onScrollOptionChange = function (a, c) {
                    var d;
                    if (d = g.scrolling(), b.debug("updating kong scroll option", d), "resize" === d ? (document.body.style.overflow = "hidden", this.onResize = this._onResize, this.onResize(!0)) : (document.body.style.overflow = "", this.onResize = function () {}), "lockhover" === d ? this.bindLockhover() : this.unbindLockhover(),
                        "resize" !== d && "resize" === c && this.isLoaded && !a) return this._resizeGame(null, null)
                }, c.prototype.unbindLockhover = function () {
                    return $("html").off("DOMMouseScroll mousewheel")
                }, c.prototype.bindLockhover = function () {
                    var a, b;
                    return b = $("body")[0], a = $("body,html"), $("html").on("DOMMouseScroll mousewheel", function (c) {
                        var d, e, f, g, h, i;
                        return $(this), h = this.scrollTop || b.scrollTop, g = this.scrollHeight, e = window.innerHeight, d = "DOMMouseScroll" === c.type ? c.originalEvent.detail * -40 : c.originalEvent.wheelDelta, i = d > 0, f = function () {
                            return c.stopPropagation(), c.preventDefault(), c.returnValue = !1, !1
                        }, !i && -d > g - e - h ? (a.scrollTop(g), f()) : i && d > h ? (a.scrollTop(0), f()) : void 0
                    })
                }, c.prototype._swarmApiLogin = function () {
                    var a;
                    if (j.isServerBackendEnabled) return a = function (a) {
                        return function () {
                            return b.debug("kongregate swarmapi login..."), i.login("kongregate", {
                                user_id: a.kongregate.services.getUserId(),
                                game_auth_token: a.kongregate.services.getGameAuthToken(),
                                username: a.kongregate.services.getUsername()
                            }).success(function (a, c, d) {
                                return b.debug("kongregate swarmapi login success", a, c, d)
                            }).error(function (a, c, d) {
                                return b.debug("kongregate swarmapi login error", a, c, d)
                            })
                        }
                    }(this), this.kongregate.services.isGuest() ? (b.debug("kongregate swarmapi guest login..."), i.login("guestuser").success(function (a, c, d) {
                        return b.debug("kongregate swarmapi guest login success", a, c, d)
                    }).error(function (a, c, d) {
                        return b.debug("kongregate swarmapi guest login error", a, c, d)
                    })) : a(), this.kongregate.services.addEventListener("login", a)
                }, c.prototype._onLoad = function () {
                    var a, c, d;
                    return b.debug("kongregate successfully loaded!", this.kongregate), this.isLoaded = !0, this.reportStats(), this._swarmApiLogin(), $(document.documentElement), a = $(document.body), d = null, c = new Date(0), this._onResize = function (e) {
                        return function (f) {
                            var g, h, i;
                            if (((i = Math.max(a.height(), 600)) !== d || f) && (g = new Date, h = g.getTime() - c.getTime(), (i > d || h >= 1e3 && d - i > 100 || f) && (b.debug("onresize: " + d + " to " + i + " (" + (i > d ? "up" : "down") + "), " + h + "ms"), d = i, c = g, e._resizeGame(800, i), e.parented))) return e.parented.style.height = i + "px"
                        }
                    }(this), this.onScrollOptionChange(!0), b.debug("setup onresize")
                }, c.prototype.reportStats = function () {
                    var a, c;
                    try {
                        if (!this.isLoaded || !d.session.state.kongregate) return;
                        if (c = new Date, this.lastReported && c.getTime() < this.lastReported.getTime() + 6e4) return;
                        return this.lastReported = c, this.kongregate.stats.submit("Hatcheries", this._count(d.upgrade("hatchery"))), this.kongregate.stats.submit("Expansions", this._count(d.upgrade("expansion"))), this.kongregate.stats.submit("GameComplete", this._count(d.unit("ascension"))), this.kongregate.stats.submit("Mutations Unlocked", this._count(d.upgrade("mutatehidden"))), this.kongregate.stats.submit("Achievement Points", d.achievementPoints()), this._submitTimetrialMins("Minutes to First Nexus", d.upgrade("nexus1")), this._submitTimetrialMins("Minutes to Fifth Nexus", d.upgrade("nexus5")), this._submitTimetrialMins("Minutes to First Ascension", d.unit("ascension"))
                    } catch (c) {
                        return a = c, b.warn("kongregate reportstats failed - continuing", a)
                    }
                }, c.prototype._count = function (a) {
                    return a.count().floor().toNumber()
                }, c.prototype._timetrialMins = function (a) {
                    var b, c;
                    if (b = null != (c = a.statistics()) ? c.elapsedFirst : void 0) return Math.ceil(b / 1e3 / 60)
                }, c.prototype._submitTimetrialMins = function (a, b) {
                    var c;
                    if (c = this._timetrialMins(b)) return this.kongregate.stats.submit(a, c)
                }, c
            }()
        }]), angular.module("swarmApp").factory("kongregate", ["$log", "Kongregate", function (a, b) {
            var c;
            return c = new b, a.debug("isKongregate:", c.isKongregate()), c.isKongregate() && c.load(), c
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").service("seedrand", ["session", function (a) {
            return new(function () {
                function b() {}
                return b.prototype.mkseed = function (b, c) {
                    return null == c && (c = a.state.date.started), c + ":" + b
                }, b.prototype.rng = function (a, b) {
                    var c;
                    return null == b && (b = null), c = this.mkseed(a, b), new Math.seedrandom(c)
                }, b.prototype.rand = function (a, b) {
                    return null == b && (b = null), this.rng(a, b)()
                }, b
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("Backfill", ["$log", "achievementslistener", function (a, b) {
            return function () {
                function b() {}
                return b.prototype.run = function (b) {
                    return function () {
                            var c, d, e, f, g, h, i, j, k, l, m, n, o;
                            if (l = b.unit("premutagen"), c = b.unit("ascension"), f = b.upgrade("hatchery"), e = b.upgrade("expansion"), k = b.unit("invisiblehatchery").stat("random.minlevel.hatchery"), j = b.unit("invisiblehatchery").stat("random.minlevel.expansion"), l.count().isZero() && c.count().isZero() && (f.count().greaterThanOrEqualTo(k) || e.count().greaterThanOrEqualTo(j))) {
                                for (a.info("backfilling mutagen for old save"), m = [f, e], n = [], h = 0, i = m.length; h < i; h++) o = m[h], n.push(function () {
                                    var a, b, c;
                                    for (c = [], g = a = 0, b = o.count().toNumber(); 0 <= b ? a < b : a > b; g = 0 <= b ? ++a : --a) c.push(function () {
                                        var a, b, c, e;
                                        for (c = o.effect, e = [], a = 0, b = c.length; a < b; a++) d = c[a], e.push(d.onBuy(new Decimal(g + 1)));
                                        return e
                                    }());
                                    return c
                                }());
                                return n
                            }
                            a.debug("no mutagen backfill necessary")
                        }(),
                        function () {
                            var a;
                            if (a = b.unit("freeRespec"), !a.isCountInitialized()) a._setCount(a.unittype.init)
                        }(),
                        function () {
                            var c, d, e;
                            if (c = b.unit("ascension"), e = c.statistics(), new Decimal(null != (d = null != e ? e.num : void 0) ? d : 0).greaterThan(c.count()) && c.count().isZero()) a.info("backfill lost ascension tally", c.count() + "", e.num), c._setCount(e.num)
                        }(), a.debug("backfill success")
                }, b
            }()
        }]), angular.module("swarmApp").factory("backfill", ["Backfill", function (a) {
            return new a
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").filter("duration", ["options", "$filter", function (a, b) {
            var c;
            return c = function (c, d, e, f) {
                var g, h;
                if (c === 1 / 0) return "";
                if (_.isNaN(c)) return "";
                if (null != c.toNumber && (c = c.toNumber()), !c) return "";
                if (h = null != (null != c ? c.nonexact : void 0) && c.nonexact ? " or less" : "", g = moment.duration(c, d), null == e) switch (e = "d[d] h:mm:ss", "function" == typeof a.durationFormat ? a.durationFormat() : void 0) {
                    case "human":
                        return h + g.humanize();
                    case "full":
                        e = function () {
                            switch (!1) {
                                case !(g.asSeconds() < 60):
                                    return "0:s";
                                default:
                                    return "y [yr] M [mth] d [day] hh:mm:ss"
                            }
                        }();
                        break;
                    case "abbreviated":
                        if (g.asYears() >= 100) return b("longnum")(g.asYears()) + " 年";
                        e = function () {
                            switch (!1) {
                                case !(g.asYears() >= 1):
                                    return "y [years] M [months]";
                                case !(g.asMonths() >= 1):
                                    return "M [months] d [days]";
                                case !(g.asDays() >= 1):
                                    return "d [days] h [hours]";
                                case !(g.asMinutes() >= 1):
                                    return "h:mm:ss";
                                default:
                                    return {
                                        template: "00:ss",
                                            trim: !1
                                    }
                            }
                        }()
                }
                return g.format(e, f) + h
            }, c.$stateful = !0, c
        }]), angular.module("swarmApp").filter("momentFromNow", ["$filter", function (a) {
            return function (a) {
                return moment(a).fromNow()
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("feedback", ["$log", "game", "version", "env", "isKongregate", function (a, b, c, d, e) {
            return new(function () {
                function c() {}
                return c.prototype.createTinyurl = function (c) {
                    var f;
                    return null == c && (c = b.session.exportSave()), null != (f = b.cache.tinyUrl)[c] ? f[c] : f[c] = function (b) {
                        return function () {
                            var b;
                            return b = e() ? "https://www.swarmsim.com?kongregate=1/#/importsplash?savedata=" + encodeURIComponent(c) : "https://swarmsim.github.io/#/importsplash?savedata=" + encodeURIComponent(c), jQuery.ajax("https://www.googleapis.com/urlshortener/v1/url", {
                                type: "POST",
                                data: JSON.stringify({
                                    key: d.googleApiKey,
                                    longUrl: b
                                }),
                                contentType: "application/json",
                                dataType: "json"
                            }).done(function (b, c, d) {
                                return a.debug("createTinyurl success", b, c, d)
                            }).fail(function (b, c, d) {
                                return a.debug("createTinyurl fail ", b, c, d)
                            })
                        }
                    }()()
                }, c
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("ContactCtrl", ["$scope", "feedback", "version", "$location", "isKongregate", "$log", "$sce", function (a, b, c, d, e, f, g) {
            var h, i, j, k, l, m, n;
            return a.urls = {
                short: "???",
                expand: "???"
            }, a.userAgentGuess = function (a) {
                return function () {
                    var a, b, c, d, e, f, g;
                    for (b = [{
                            name: "Chrome",
                            regex: /Chrome\/(\S+)/
                        }, {
                            name: "Firefox",
                            regex: /Firefox\/(\S+)/
                        }, {
                            name: "MSIE",
                            regex: /MSIE (\S+);/
                        }, {
                            name: "Opera",
                            regex: /Opera\/(\S+)/
                        }, {
                            name: "Safari",
                            regex: /Version\/(\S+).*?Safari\//
                        }], g = "undefined" != typeof window && null !== window && null != (f = window.navigator) ? f.userAgent : void 0, c = 0, d = b.length; c < d; c++)
                        if (a = b[c], e = g.match(a.regex)) return a.name + " " + e[1];
                    return g
                }
            }()(), b.createTinyurl().done(function (b) {
                return function (b, c, d) {
                    return a.urls.short = b.id, a.urls.expand = b.id + "+"
                }
            }()), a.initTopic = null != d.search().error ? "bug" : void 0, k = d.search().error && d.search().error !== !0, n = {
                bug: {
                    subject: function () {
                        return "Swarm Simulator Bug Report (" + (new Date).toLocaleString() + ")"
                    },
                    message: function () {
                        return "Describe the bug here. Step-by-step instructions saying how to make the bug reoccur are helpful.\n\n*****\n\nBug report information:\n\n* Swarm Simulator version: " + c + "\n* Source: " + (e() ? "Kongregate" : "Standalone") + "\n* Browser: " + a.userAgentGuess + (k ? "\n* Error message: ```" + d.search().error + "```" : "")
                    },
                    anonDebug: function () {
                        var b;
                        return (b = d.search().error || "") && (b += "|"), c + "|" + a.userAgentGuess + "|" + b + a.urls.expand
                    }
                },
                other: {
                    subject: function () {
                        return "Swarm Simulator Feedback (" + (new Date).toLocaleString() + ")"
                    },
                    message: function () {
                        return ""
                    },
                    anonDebug: function () {
                        return ""
                    },
                    emailTo: function () {
                        return LZString.decompressFromBase64("GYUxBMCMEMGMGsACBnA7tATgW2QSywHSwD2WQA==")
                    }
                }
            }, h = function (a, b) {
                var c, d;
                return (null != (c = null != (d = n[a]) ? d[b] : void 0) ? c : n.other[b])()
            }, m = function (a) {
                return h(a, "subject")
            }, l = function (a) {
                return h(a, "message")
            }, i = function (a) {
                return h(a, "anonDebug")
            }, a.emailTo = j = function (a) {
                return h(a, "emailTo")
            }, a.redditUrl = function (a) {
                return "https://www.reddit.com/message/compose/?to=kawaritai&subject=" + encodeURIComponent(m(a)) + "&message=" + encodeURIComponent(l(a))
            }, a.mailtoUrl = function (a) {
                var b;
                return b = window.Qs.stringify({
                    subject: m(a),
                    body: l(a)
                }), "mailto:" + j(a) + "?" + b
            }, a.anonForm = function (a) {
                var b, c;
                return c = "https://docs.google.com/a/swarmsim.com/forms/d/18ywqkqMlviAgKACVZUI6XkaGte2piKN3LGbii8Qwvmw/viewform?entry.1461412788=" + encodeURIComponent(i(a)), b = 1950, c.length > b && (c = c.substring(0, b) + encodeURIComponent("...TRUNCATED...")), c
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("ErrorSavingCtrl", ["$scope", "game", "$rootScope", function (a, b, c) {
            var d, e;
            return e = d = 0, a.game = b, a.form = {}, a.$on("save", function () {
                return e += 1
            }), a.$on("save:failed", function (c, f) {
                var g;
                if (d += 1, 0 === e) return a.form.errored = !0, a.form.error = null != (g = f.error) ? g.message : void 0, a.form.export = b.session.exportSave()
            }), a.select = function (a) {
                return a.target.select()
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("ClearthemeCtrl", ["$scope", "options", "$location", function (a, b, c) {
            var d, e;
            if (c.search().custom && c.search().theme ? b.customTheme(c.search().theme) : (e = c.search().theme, c.search().themeExtra || (e = "none"), e && b.theme(e)), c.search().themeExtra) return b.themeExtra(null != (d = c.search().themeExtra) ? d : "")
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("cookieStorage", function () {
            return new(function () {
                function a() {}
                return a.prototype.getItem = function (a) {
                    return $.cookie(a)
                }, a.prototype.setItem = function (a, b) {
                    return $.cookie(a, b, {
                        expires: 36500,
                        secure: !1
                    })
                }, a.prototype.removeItem = function (a) {
                    return $.removeCookie(a)
                }, a
            }())
        }), angular.module("swarmApp").factory("flashStorage", ["$q", "$log", "env", function (a, b, c) {
            return new(function () {
                function c() {
                    var c;
                    c = a.defer(), this.onReady = c.promise;
                    try {
                        this.storage = new SwfStore({
                            namespace: "swarmsim",
                            swf_url: "./storage.swf",
                            timeout: 10,
                            onready: function (a) {
                                return function () {
                                    return null == a.isReady && (a.isReady = !0), c.resolve(), b.debug("flash storage ready")
                                }
                            }(this),
                            onerror: function (a) {
                                return function () {
                                    return a.isReady = !1, c.reject(), b.warn("flash storage error")
                                }
                            }(this)
                        })
                    } catch (a) {
                        a,
                        this.isReady = !1,
                        c.reject(),
                        b.warn("flash storage init error")
                    }
                }
                return c.prototype.getItem = function (a) {
                    return this.storage.get(a)
                }, c.prototype.setItem = function (a, b) {
                    return this.storage.set(a, b)
                }, c.prototype.removeItem = function (a) {
                    return this.storage.clear(a)
                }, c.prototype.clear = function () {
                    return this.storage.clearAll()
                }, c
            }())
        }]), angular.module("swarmApp").factory("MultiStorage", ["$log", function (a) {
            return function () {
                function b() {
                    this.storages = {
                        list: [],
                        byName: {}
                    }
                }
                return b.prototype.addStorage = function (a, b) {
                    var c;
                    return c = {
                        name: a,
                        storage: b
                    }, this.storages.list.push(c), this.storages.byName[a] = c, this[a] = b, this
                }, b.prototype._withEachStore = function (b, c, d) {
                    var e, f, g, h, i, j, k;
                    for (null == d && (d = function (a) {
                            return !1
                        }), f = 0, i = this.storages.list, g = 0, h = i.length; g < h; g++) {
                        k = i[g];
                        try {
                            if (j = c(k), d(j)) return j
                        } catch (c) {
                            if (e = c, (f += 1) >= this.storages.list.length) throw a.warn("multistore." + b + " failed with all stores, throwing", e), e;
                            a.info("multistore." + b + " error (continuing)", k.name, e)
                        }
                    }
                }, b.prototype.getItem = function (b) {
                    var c;
                    return c = function (c) {
                        return a.debug("multistore.getitem", c.name), c.storage.getItem(b)
                    }, this._withEachStore("getItem", c, function (a) {
                        return null != a
                    })
                }, b.prototype.setItem = function (b, c) {
                    return this._withEachStore("setItem", function (d) {
                        return a.debug("multistore.setitem", d.name, b), d.storage.setItem(b, c)
                    })
                }, b.prototype.removeItem = function (b) {
                    return this._withEachStore("removeItem", function (c) {
                        return a.debug("multistore.removeitem", c.name, b), c.storage.removeItem(b)
                    })
                }, b.prototype.toJSON = function () {}, b
            }()
        }]), angular.module("swarmApp").factory("storage", ["MultiStorage", "flashStorage", "cookieStorage", function (a, b, c) {
            return (new a).addStorage("local", window.localStorage).addStorage("cookie", c).addStorage("flash", b)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("ImportsplashCtrl", ["$scope", "isKongregate", "game", function (a, b, c) {
            return a.isKongregate = b(), a.click = function () {
                return c.withSave(function () {}), a.isKongregate ? window.location.href = "http://www.kongregate.com/games/swarmsim/swarm-simulator" : window.location = "#/"
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("kongregateS3Syncer", ["$log", "kongregate", "storage", "game", "env", "$interval", "$q", "$rootScope", function (a, b, c, d, e, f, g, h) {
            return new(function () {
                function i() {
                    jQuery.ajaxSetup({
                        cached: !1
                    })
                }
                return i.prototype.isVisible = function () {
                    return !1
                }, i.prototype.isActive = function () {
                    return e.isKongregateSyncEnabled && b.isKongregate()
                }, i.prototype.init = function (e, f, h, i) {
                    var j, k;
                    return null == e && (e = function () {}), j = g.defer(), k = j.promise, k.then(e, console.warn), b.onLoad.then(function (b) {
                        return function () {
                            var e, g, k, l, m;
                            b.policy = null, i && c.removeItem("s3Policy");
                            try {
                                l = c.getItem("s3Policy"), l ? (b.policy = JSON.parse(l), b.cached = !0) : a.debug("no cached s3 policy", b.policy)
                            } catch (b) {
                                e = b, a.warn("couldn't load cached s3 policy", e)
                            }
                            return a.debug("cached policy", b.policy), null == b.policy || (g = (null != (m = b.policy.localDate) ? m.expires : void 0) < d.now.getTime()) ? (b.cached = !1, a.debug("refreshing s3 policy", i, g), k = function (d, e, f) {
                                return "success" === e ? (b.policy = d, a.debug("caching s3 policy", b.policy), c.setItem("s3Policy", JSON.stringify(b.policy))) : a.warn("couldn't refresh s3 policy", d, e), b.fetch(function (a) {
                                    return j.resolve(a)
                                })
                            }, b._refreshPolicy(k, f, h)) : (a.debug("cached s3 policy is good; not refreshing", b.policy), void b.fetch(function () {
                                return j.resolve()
                            }))
                        }
                    }(this)), b.onLoad.catch(function (a) {
                        return function (a) {
                            return j.reject(a)
                        }
                    }()), k
                }, i.prototype.isInit = function () {
                    return null != this.policy
                }, i.prototype.initAutopush = function (b) {
                    if (null == b && (b = !0), this.autopushInterval && (f.cancel(this.autopushInterval), this.autopushInterval = null), $(window).off("unload", "kongregate.autopush"), b) return this.autopushInterval = f(function (a) {
                        return function () {
                            return a.autopush()
                        }
                    }(this), e.autopushIntervalMs), $(window).on("unload", "kongregate.autopush", function (b) {
                        return function () {
                            return a.debug("autopush unload"), b.autopush()
                        }
                    }(this))
                }, i.prototype._refreshPolicy = function (c, f, g) {
                    var h, i;
                    return null == c && (c = function () {}), null == f && (f = b.kongregate.services.getUserId()), null == g && (g = b.kongregate.services.getGameAuthToken()), h = {
                        policy: {
                            user_id: f,
                            game_auth_token: g
                        }
                    }, i = $.post(e.saveServerUrl + "/policies", h, function (b) {
                        return function (b, e, f) {
                            return a.debug("refreshed s3 policy", b, e, f), b.localDate = {
                                refreshed: d.now.getTime(),
                                expires: d.now.getTime() + 1e3 * b.expiresIn
                            }, c(b, e, f)
                        }
                    }()), i.fail(function (b, c, d) {
                        return a.error("refreshing s3 failed", b, c, d)
                    })
                }, i.prototype.fetch = function (b) {
                    var c;
                    if (null == b && (b = function () {}), !this.policy.get) throw new Error("no policy. init() first.");
                    return c = $.get(this.policy.get, function (c) {
                        return function (d, e, f) {
                            return a.debug("fetched from s3", d, e, f), c.fetched = d, b(d, e, f)
                        }
                    }(this)), c.fail(function (b, c, d) {
                        return 404 === (null != b ? b.status : void 0) ? a.debug("s3 fetch empty", b, c, d) : a.warn("s3 fetch failed", b, c, d)
                    })
                }, i.prototype.fetchedSave = function () {
                    var a;
                    return null != (a = this.fetched) ? a.encoded : void 0
                }, i.prototype.fetchedDate = function () {
                    var a;
                    if (null != (null != (a = this.fetched) ? a.date : void 0)) return new Date(this.fetched.date)
                }, i.prototype.pull = function () {
                    var a;
                    if (!(a = this.fetchedSave())) throw new Error("nothing to pull");
                    return d.importSave(a), h.$broadcast("import", {
                        source: "kongregateS3Syncer",
                        success: !0
                    })
                }, i.prototype.push = function (b, c) {
                    var e, f, g, h, i;
                    if (null == b && (b = function () {}), null == c && (c = d.session.exportSave()), !this.policy.post) throw new Error("no policy. init() first.");
                    e = new FormData, h = this.policy.post.params;
                    for (f in h) i = h[f], a.debug("form keyval", f, i), e.append(f, i);
                    return g = {
                        encoded: c,
                        date: d.now
                    }, e.append("file", new Blob([JSON.stringify(g)], {
                        type: "application/json"
                    })), $.ajax({
                        url: this.policy.post.url,
                        data: e,
                        cache: !1,
                        contentType: !1,
                        processData: !1,
                        type: "POST",
                        error: function (b) {
                            return function (b, c, d) {
                                return a.error("s3 post fail", null != b ? b.responseText : void 0, b, c, d)
                            }
                        }(),
                        success: function (c) {
                            return function (d, e, f) {
                                return a.debug("exported to s3", d, e, f), c.fetched = g, b(d, e, f)
                            }
                        }(this)
                    })
                }, i.prototype.getAutopushError = function () {
                    var a;
                    return this.fetchedSave() === d.session.exportSave() ? "nochanges" : (null != (a = this.fetchedDate()) ? a : new Date(0)) > d.session.state.date.reified ? "remotenewer" : d.session.state.date.reified.getTime() === d.session.state.date.started.getTime() ? "newgame" : void 0
                }, i.prototype.autopush = function () {
                    if (this.isInit() && this.autopushInterval) return this.getAutopushError() ? a.debug("autopush triggered with no changes, ignoring") : (a.debug("autopushing (with changes, for real)"), this.push())
                }, i.prototype.clear = function (b) {
                    if (null == b && (b = function () {}), !this.policy.delete) throw new Error("no policy. init() first.");
                    return $.ajax({
                        type: "DELETE",
                        url: this.policy.delete,
                        error: function (b) {
                            return function (b, c, d) {
                                return a.error("s3 delete failed", null != b ? b.responseText : void 0, b, c, d)
                            }
                        }(),
                        success: function (c) {
                            return function (d, e, f) {
                                return a.debug("cleared from s3", d, e, f), delete c.fetched, b(d, e, f)
                            }
                        }(this)
                    })
                }, i
            }())
        }]), angular.module("swarmApp").factory("syncerUtil", ["$log", "env", "game", "isKongregate", "$interval", "$rootScope", "playfab", function (a, b, c, d, e, f, g) {
            return new(function () {
                function c() {}
                return c.prototype.initAutopush = function (c, d) {
                    if (null == d && (d = !0), this.autopushInterval && (e.cancel(this.autopushInterval), this.autopushInterval = null), $(window).off("unload", c + ".autopush"), d) return a.debug(c + " autopush enabled"), this.autopushInterval = e(function (a) {
                        return function () {
                            return a.autopush()
                        }
                    }(this), b.autopushIntervalMs), $(window).on("unload", c + ".autopush", function (b) {
                        return function () {
                            return a.debug(c + " autopush unload"), b.autopush()
                        }
                    }(this))
                }, c
            }())
        }]), angular.module("swarmApp").factory("kongregatePlayfabSyncer", ["$log", "env", "game", "kongregate", "$interval", "$rootScope", "playfab", "syncerUtil", function (a, b, c, d, e, f, g, h) {
            return new(function () {
                function e() {}
                return e.prototype.isVisible = function () {
                    return b.playfabTitleId && b.isKongregateSyncEnabled && d.isKongregate()
                }, e.prototype.isAuth = function () {
                    return g.isAuthed()
                }, e.prototype.isInit = function () {
                    return this.isAuth()
                }, e.prototype.init = function (a) {
                    return d.onLoad.then(function (b) {
                        return function () {
                            var b, c;
                            return c = window.parent.kongregate.services.getUserId(), b = window.parent.kongregate.services.getGameAuthToken(), g.kongregateLogin(c, b).then(a, console.warn)
                        }
                    }(), console.warn)
                }, e.prototype.initAutopush = function (a) {
                    return h.initAutopush.call(this, "kongregatePlayfab", a)
                }, e.prototype.fetch = function (a) {
                    return null == a && (a = function (a) {
                        return a
                    }), g.fetch().then(a, console.warn)
                }, e.prototype.fetchedSave = function () {
                    var a;
                    return null != (a = g.auth) ? a.state : void 0
                }, e.prototype.fetchedDate = function () {
                    var a;
                    return new Date(null != (a = g.auth) ? a.lastUpdated : void 0)
                }, e.prototype.push = function (a) {
                    return null == a && (a = function () {}), g.push(c.session.exportSave()).then(a, console.warn)
                }, e.prototype.getAutopushError = function () {
                    return this.fetchedSave() === c.session.exportSave() ? "nochanges" : c.session.state.date.reified.getTime() === c.session.state.date.started.getTime() ? "newgame" : void 0
                }, e.prototype.autopush = function () {
                    if (this.isInit() && this.autopushInterval) return this.getAutopushError() ? a.debug("autopush triggered with no changes, ignoring") : (a.debug("autopushing (with changes, for real)"), this.push())
                }, e.prototype.pull = function () {
                    var a;
                    if (!(a = this.fetchedSave())) throw new Error("nothing to pull");
                    return c.importSave(a), f.$broadcast("import", {
                        source: "kongregatePlayfabSyncer",
                        success: !0
                    })
                }, e.prototype.clear = function (a) {
                    return null == a && (a = function () {}), g.clear().then(a, console.warn)
                }, e
            }())
        }]), angular.module("swarmApp").factory("wwwPlayfabSyncer", ["$log", "env", "game", "$location", "isKongregate", "$interval", "$rootScope", "playfab", "syncerUtil", function (a, b, c, d, e, f, g, h, i) {
            return new(function () {
                function d() {}
                return d.prototype.isVisible = function () {
                    return b.playfabTitleId && !e()
                }, d.prototype.isAuth = function () {
                    return h.isAuthed()
                }, d.prototype.isInit = function () {
                    return this.isAuth()
                }, d.prototype.init = function (a) {
                    return h.autologin().then(a, console.warn)
                }, d.prototype.initAutopush = function (a) {
                    return null == a && (a = !0), i.initAutopush.call(this, "wwwPlayfab", a)
                }, d.prototype.fetch = function (a) {
                    return null == a && (a = function () {}), h.fetch().then(a, console.warn)
                }, d.prototype.fetchedSave = function () {
                    var a;
                    return null != (a = h.auth) ? a.state : void 0
                }, d.prototype.fetchedDate = function () {
                    var a;
                    return new Date(null != (a = h.auth) ? a.lastUpdated : void 0)
                }, d.prototype.push = function (a) {
                    return null == a && (a = function () {}), h.push(c.session.exportSave()).then(a, console.warn)
                }, d.prototype.getAutopushError = function () {
                    return this.fetchedSave() === c.session.exportSave() ? "nochanges" : c.session.state.date.reified.getTime() === c.session.state.date.started.getTime() ? "newgame" : void 0
                }, d.prototype.autopush = function () {
                    if (this.isInit() && this.autopushInterval) return this.getAutopushError() ? a.debug("autopush triggered with no changes, ignoring") : (a.debug("autopushing (with changes, for real)"), this.push())
                }, d.prototype.pull = function () {
                    var a;
                    if (!(a = this.fetchedSave())) throw new Error("nothing to pull");
                    return c.importSave(a), g.$broadcast("import", {
                        source: "wwwPlayfabSyncer",
                        success: !0
                    })
                }, d.prototype.clear = function (a) {
                    return null == a && (a = function () {}), h.clear().then(a, console.warn)
                }, d
            }())
        }])
    }.call(this),
    function () {
        angular.module("swarmApp").controller("ChartCtrl", ["$scope", "$log", "game", "options", function (a, b, c, d) {
            var e, f, g;
            return a.game = c, a.options = d, a.prodchart = e = {
                type: "PieChart"
            }, f = {
                color: $("body").css("color"),
                fontName: $("body").css("font"),
                fontSize: $("body").css("font-size")
            }, e.options = {
                backgroundColor: $("body").css("background-color"),
                titleTextStyle: f,
                fontName: f.fontName,
                fontSize: f.fontSize,
                chartArea: {
                    backgroundColor: $("body").css("background-color")
                },
                pieSliceBorderColor: $("body").css("background-color"),
                pieResidueSliceLabel: "Other",
                legend: {
                    position: "labeled",
                    textStyle: f
                },
                pieSliceTextStyle: _.omit(f, "color"),
                title: "Production Rates",
                sliceVisibilityThreshold: .01,
                tooltip: {
                    trigger: "none"
                }
            }, g = a.game.unit("territory").velocity(), a.updatecharts = function () {
                var c, d, f, h, i;
                for (b.debug("updating chart data"), e.data = [
                        ["Unit Name", "Production"]
                    ], f = a.game.tabs.byName.territory.sortedUnits, h = [], c = 0, d = f.length; c < d; c++) i = f[c], i.isVisible() && "territory" !== i.name ? h.push(e.data.push([i.type.label, i.totalProduction().territory.dividedBy(g).toNumber()])) : h.push(void 0);
                return h
            }, a.updatecharts()
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("parseNumber", ["$log", "numberSuffixesShort", "numberSuffixesLong", function (a, b, c) {
            var d, e, f, g, h, i, j, k, l, m;
            for (d = Decimal.clone({
                    rounding: Decimal.ROUND_CEIL
                }), l = {}, j = [b, c], e = 0, h = j.length; e < h; e++)
                for (m = j[e], f = g = 0, i = m.length; g < i; f = ++g)
                    if (k = m[f]) {
                        if (null != l[k.toLowerCase()]) throw new Error("duplicate parsenumber suffix: " + k);
                        l[k.toLowerCase()] = {
                            index: f,
                            exp: 3 * f,
                            replace: "e" + 3 * f
                        }
                    }
            return function (b, c) {
                var e, f, g, h, i, j, k, m, n;
                if (n = null != (j = b + "") ? j.replace(",", "") : void 0, null != (g = /%$/.exec(n))) {
                    try {
                        i = Decimal.min(100, Decimal.max(0, n.replace("%", "")))
                    } catch (a) {
                        e = a, i = new Decimal(0)
                    }
                    n = c.maxCostMet(i.dividedBy(100)), a.debug("parse percent", b, i, n + "")
                }
                null != (g = /\ ?[a-zA-Z]+/.exec(n)) && (g.length > 0 && null != (f = l[g[0].toLowerCase()]) ? (n = n.replace(g[0], f.replace), a.debug("parse suffix", b, n)) : a.debug("parse suffix (invalid)", b, n, g)), null != (h = /^\=/.exec(n)) ? n = n.replace("=", "") : null != (m = /^@/.exec(n)) && (h = !0, n = n.replace("@", ""));
                try {
                    if (k = d.max(1, n), m && (k = d.max(1, k.minus(c.count())), a.debug("parse target", b, k + "", "-" + c.count())), h ? (k = k.dividedBy(c.twinMult()).ceil(), a.debug("parse twins", b, k + "", "x" + c.twinMult())) : k = k.floor(), k = new Decimal(k), k.isFinite() && !k.isNaN()) return k
                } catch (b) {
                    return e = b, a.debug("user input parse error", e)
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("login", ["loginApi", "$log", "kongregate", "env", function (a, b, c, d) {
            return {
                restrict: "EA",
                template: '<div ng-cloak ng-if="env.isServerFrontendEnabled">\n  Login directive! user: {{loginApi.user.username}}\n  <div ng-if="!loginApi.user.id">\n    <a ng-if="isKongregate()" href="javascript:" ng-click="kongregateLogin()">Login</a>\n    <a ng-if="!isKongregate()" href="#/login">Login</a>\n  </div>\n  <a ng-if="loginApi.user.id && !isKongregate()" href="javascript:" ng-click="loginApi.logout()">Logout</a>\n</div>',
                link: function (b, e, f) {
                    return b.env = d, b.loginApi = a, b.isKongregate = function () {
                        return c.isKongregate()
                    }, b.kongregateLogin = function () {
                        return c.kongregate.services.showRegistrationBox()
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").factory("userApi", ["$resource", "env", function (a, b) {
            return a(b.isServerBackendEnabled ? b.saveServerUrl + "/user/:id" : "/DISABLED/user/:id")
        }]), angular.module("swarmApp").factory("characterApi", ["$resource", "env", function (a, b) {
            return a(b.isServerBackendEnabled ? b.saveServerUrl + "/character/:id" : "/DISABLED/character/:id")
        }]), angular.module("swarmApp").factory("commandApi", ["$resource", "env", function (a, b) {
            return a(b.isServerBackendEnabled ? b.saveServerUrl + "/command/:id" : "/DISABLED/command/:id")
        }]), angular.module("swarmApp").factory("user", ["loginApi", function (a) {
            return function () {
                return a.user
            }
        }]), angular.module("swarmApp").config(["$httpProvider", function (a) {
            return a.defaults.useXDomain = !0, a.defaults.withCredentials = !0
        }]), angular.module("swarmApp").factory("loginApi", ["loginApiEnabled", "env", function (a, b) {
            var c, d, e;
            if (b.isServerBackendEnabled) return a;
            e = {}, d = {
                logout: !0,
                saveCommand: !0,
                whoami: !0,
                maybeConnectLegacyCharacter: !0
            };
            for (c in a) a[c], d[c] ? e[c] = function () {} : e[c] = function () {
                throw new Error("login backend is disabled")
            };
            return e
        }]), angular.module("swarmApp").factory("loginApiEnabled", ["$http", "env", "util", "$log", "session", "characterApi", "isKongregate", "commandApi", function (a, b, c, d, e, f, g, h) {
            return new(function () {
                function c() {
                    this.characters = {}, b.isServerBackendEnabled && (this.user = this.whoami().then(function (a) {
                        return function () {
                            return a.maybeConnectLegacyCharacter(), d.debug("user already logged in", a.user)
                        }
                    }(this), function (a) {
                        return function () {
                            if (!g()) return a.login("guestuser").then(function () {
                                return d.debug("created guest user"), a.maybeConnectLegacyCharacter()
                            }, function () {
                                return d.debug("failed to create guest user")
                            })
                        }
                    }(this)))
                }
                return c.prototype.hasUser = function () {
                    return null != this.user.id
                }, c.prototype.whoami = function () {
                    if (b.isServerBackendEnabled) return a.get(b.saveServerUrl + "/whoami").then(function (a) {
                        return function (b, c, d) {
                            return a.user = b
                        }
                    }(this), function (a) {
                        return function (b, c, d) {
                            return a.user = {}
                        }
                    }(this))
                }, c.LOGIN_TAILS = {
                    kongregate: "/callback",
                    guestuser: "/callback"
                }, c.prototype.login = function (c, e) {
                    var f, g;
                    return null == e && (e = {}), g = null != (f = this.constructor.LOGIN_TAILS[c]) ? f : "", b.saveServerUrl || d.error("env.saveServerUrl is blank, expect all swarmapi calls to fail. I hope this isn't the production environment!"), a.post(b.saveServerUrl + "/auth/" + c + g, e, {
                        withCredentials: !0
                    }).then(function (a) {
                        return function (b, c, d) {
                            return a.user = b.user, a.maybeConnectLegacyCharacter()
                        }
                    }(this))
                }, c.prototype.logout = function () {
                    if (b.isServerBackendEnabled) return a.get(b.saveServerUrl + "/logout", {}, {
                        withCredentials: !0
                    }).then(function (a) {
                        return function (b, c, d) {
                            return a.whoami()
                        }
                    }(this))
                }, c.prototype.maybeConnectLegacyCharacter = function () {
                    var a;
                    if (b.isServerBackendEnabled) return null != this.user && null == e.state.idOnServer ? (d.debug("connectLegacyCharacter found a legacy character, connecting..."), e.exportJson(), a = f.save({
                        user: this.user.id,
                        name: "swarm",
                        source: "connectLegacy",
                        state: e.exportJson()
                    }, function (b) {
                        return function (c, f, g) {
                            return e.state.idOnServer = a.id, b.characters[a.id] = a, e.save(), d.debug("connectLegacyCharacter connected!", e.state.serverId)
                        }
                    }(this), function (a) {
                        return function (a, b, c) {
                            return d.warn("connectLegacyCharacter failed!", a, b, c)
                        }
                    }())) : void 0
                }, c.prototype.saveCommand = function (a) {
                    var c, f;
                    if (b.isServerBackendEnabled) return null == e.state.idOnServer ? (d.debug("server saveCommand quitting because character has no id. trying connectlegacycharacter.", a), this.maybeConnectLegacyCharacter()) : (c = e.exportJson(), a = _.omit(a, ["unit", "upgrade"]), d.debug("server saveCommand start", f), f = h.save({
                        character: e.state.idOnServer,
                        body: a,
                        state: c
                    }, function (a) {
                        return function (a, b, c) {
                            return d.debug("server saveCommand success", f)
                        }
                    }(), function (a) {
                        return function (b, c, g) {
                            var h;
                            if (d.warn("server saveCommand failed!", b, c, g), 400 <= (h = b.status) && h < 500) return d.warn("server saveCommand bad request. trying to recreate character on server.", f), delete e.state.idOnServer, a.maybeConnectLegacyCharacter()
                        }
                    }(this)))
                }, c
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("LoginCtrl", ["$scope", "loginApi", function (a, b) {
            return a.form = {}, a.submit = function () {
                return b.login("local", a.form)
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("DebugApiCtrl", ["$scope", "env", "loginApi", "$http", "$log", function (a, b, c, d, e) {
            var f, g;
            return a.env = b, a.loginApi = c, a.form = {
                url: "/whoami"
            }, a.calling = !1, f = function (a) {
                return $("<pre>").text(a).prependTo("#testApiCallResults")
            }, g = window.submitApiCall = function (b) {
                return a.calling ? (f("already calling an api. please be patient."), e.error("already calling an api. please be patient.")) : (e.info("debugapi request", b), a.calling = new Date, d(b).success(function (b, c, d) {
                    var g;
                    return g = (new Date).getTime() - a.calling.getTime(), a.calling = !1, e.info("debugapi response", b, c, d), f("success: " + c + ", " + g + "ms\n\n" + JSON.stringify(b, null, 2))
                }).error(function (b, c, d) {
                    var g;
                    return g = (new Date).getTime() - a.calling.getTime(), a.calling = !1, e.warn("debugapi error", b, c, d), f("ERROR: " + c + ", " + g + "ms\n\n" + JSON.stringify(b, null, 2))
                }))
            }, a.submitApiCall = function (c) {
                return g({
                    method: c,
                    url: "" + b.saveServerUrl + a.form.url,
                    headers: a.form.headers,
                    data: a.form.data
                })
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("DecimallegendCtrl", ["$scope", "numberSuffixesShort", "numberSuffixesLong", "$log", function (a, b, c, d) {
            var e, f, g;
            return g = _.zip(function () {
                e = [];
                for (var a = 0, c = b.length; 0 <= c ? a < c : a > c; 0 <= c ? a++ : a--) e.push(a);
                return e
            }.apply(this), b, c), a.rows = function () {
                var a, b, c;
                for (c = [], a = 0, b = g.length; a < b; a++) f = g[a], c.push({
                    rownum: f[0],
                    short: f[1],
                    long: f[2],
                    val: new Decimal("1e" + 3 * (f[0] || 0)),
                    string: "1e" + 3 * (f[0] || 0)
                });
                return c
            }(), a.rows[0].string += " (1)", a.rows[1].string += " (1,000)", a.rows[2].string += " (1,000,000)", d.debug(a.rows)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("convertToNumber", function () {
            return {
                require: "ngModel",
                link: function (a, b, c, d) {
                    return d.$parsers.push(function (a) {
                        return parseInt(a, 10)
                    }), d.$formatters.push(function (a) {
                        return "" + a
                    })
                }
            }
        })
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("wwwPlayfab", ["playfab", "wwwPlayfabSyncer", function (a, b) {
            return {
                template: '<div ng-if="isVisible()">\n  <div ng-include="\'views/playfab/title.html\'"></div>\n  <playfabauth ng-if="!isAuthed()"></playfabauth>\n  <playfaboptions ng-if="isAuthed()"></playfaboptions>\n</div>',
                restrict: "EA",
                scope: {},
                link: function (c, d, e) {
                    return c.isVisible = function () {
                        return b.isVisible()
                    }, c.isAuthed = function () {
                        return a.isAuthed()
                    }
                }
            }
        }]), angular.module("swarmApp").directive("kongregatePlayfab", ["$log", "env", "kongregate", "kongregateS3Syncer", "kongregatePlayfabSyncer", "options", "$timeout", function (a, b, c, d, e, f, g) {
            return {
                template: '<div ng-if="isVisible">\n  <div ng-include="\'views/playfab/kongregate.html\'"></div>\n</div>',
                restrict: "EA",
                scope: {},
                link: function (d, h, i) {
                    var j, k, l, m;
                    if (m = e, d.kongregate = c, d.env = b, d.options = f, b.isKongregateSyncEnabled && c.isKongregate()) return j = d.$watch("kongregate.kongregate", function (a, b) {
                        if (null != a) return j(), l()
                    }), d.isVisible = m.isVisible(), d.isGuest = function () {
                        return null == d.api || d.api.isGuest()
                    }, d.saveServerUrl = b.saveServerUrl, d.remoteSave = function () {
                        return m.fetchedSave()
                    }, d.remoteDate = function () {
                        return m.fetchedDate()
                    }, d.getAutopushError = function () {
                        return m.getAutopushError()
                    }, l = function () {
                        return d.api = c.kongregate.services, d.api.addEventListener("login", function (a) {
                            return d.$apply()
                        }), d.init()
                    }, d.isBrowserSupported = function () {
                        return null != window.FormData && null != window.Blob
                    }, k = d.cooldown = {
                        byName: {},
                        set: function (a, b) {
                            return null == b && (b = 5e3), k.byName[a] = g(function () {
                                return k.clear(a)
                            }, b)
                        },
                        clear: function (a) {
                            if (k.byName[a]) return g.cancel(k.byName[a]), delete k.byName[a]
                        }
                    }, d.init = function (a) {
                        return d.policyError = null, k.set("init"), m.init()
                    }, d.fetch = function () {
                        return k.set("fetch"), m.fetch().then(function (b) {
                            return k.clear("fetch"), a.debug("kong syncer fetched", b, m)
                        }, function (a) {
                            if (k.clear("fetch"), 404 !== data.status) return d.policyError = "Failed to fetch remote saved game: " + ("undefined" != typeof data && null !== data ? data.status : void 0) + ", " + ("undefined" != typeof data && null !== data ? data.statusText : void 0) + ", " + ("undefined" != typeof data && null !== data ? data.responseText : void 0)
                        })
                    }, d.push = function () {
                        return k.set("push"), m.push().then(function (a) {
                            return k.clear("push")
                        }, function (a) {
                            return k.clear("push"), d.policyError = "Error pushing remote saved game: " + a
                        })
                    }, d.pull = function () {
                        return m.pull()
                    }, d.clear = function () {
                        return k.set("clear"), m.clear().then(function (a) {
                            return k.clear("clear")
                        }, function (a) {
                            return k.clear("clear"), d.policyError = "Error clearing remote saved game: " + a
                        })
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("playfabauth", ["playfab", function (a) {
            return {
                templateUrl: "views/playfab/auth.html",
                restrict: "EA",
                scope: {},
                link: function (b, c, d) {
                    var e;
                    return b.setActive = function (a) {
                        return b.forgotSuccess = null, b.error = null, b.active = a, !1
                    }, b.setActive("login"), b.form = {}, e = function (a) {
                        var c, d, e, f;
                        return b.error = {
                            main: null != a ? a.errorMessage : void 0,
                            email: null != a && null != (c = a.errorDetails) && null != (d = c.Email) ? d[0] : void 0,
                            password: null != a && null != (e = a.errorDetails) && null != (f = e.Password) ? f[0] : void 0
                        }, console.log("fail", a, b.error)
                    }, b.runSignup = function () {
                        return b.error = null, a.signup(b.form.email, b.form.password, b.form.remember).then(function (a) {
                            return console.log("success", a)
                        }, e)
                    }, b.runLogin = function () {
                        return b.error = null, a.login(b.form.email, b.form.password, b.form.remember).then(function (a) {
                            return console.log("success", a)
                        }, e)
                    }, b.runForgot = function () {
                        return b.forgotSuccess = null, b.error = null, a.forgot(b.form.email).then(function (a) {
                            return console.log("success", a), b.forgotSuccess = !0
                        }, e)
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("playfaboptions", ["playfab", "options", "session", "game", "wwwPlayfabSyncer", function (a, b, c, d, e) {
            return {
                templateUrl: "views/playfab/options.html",
                restrict: "EA",
                scope: {},
                link: function (f, g, h) {
                    return f.form = {
                        autopush: b.autopush()
                    }, f.name = a.auth.email, f.fetched = {
                        state: function () {
                            var b;
                            return null != (b = a.auth) ? b.state : void 0
                        },
                        lastUpdated: function () {
                            return moment(a.auth.lastUpdated)
                        }
                    }, f.isFetched = function () {
                        return !!f.fetched.state()
                    }, e.initAutopush(b.autopush()), f.setAutopush = function (a) {
                        return b.autopush(a), e.initAutopush(a)
                    }, f.push = function () {
                        return a.push(c.exportSave())
                    }, f.fetch = function () {
                        return a.fetch()
                    }, f.pull = function () {
                        return a.fetch().then(function (a) {
                            return function (a) {
                                return d.importSave(a.state)
                            }
                        }(), console.warn)
                    }, f.clear = function () {
                        return a.clear().then(handleFetched, console.warn)
                    }, f.logout = function () {
                        return a.logout()
                    }, f.autopushError = function () {
                        return e.getAutopushError()
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var a = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        };
        angular.module("swarmApp").factory("playfabCredentialStore", ["$log", function (a) {
            return new(function () {
                function b(a) {
                    this.key = null != a ? a : "playfabCredentials"
                }
                return b.prototype.write = function (a, b) {
                    return window.localStorage.setItem(this.key, JSON.stringify({
                        email: a,
                        password: window.btoa(b)
                    }))
                }, b.prototype.read = function () {
                    var b, c;
                    if (c = window.localStorage.getItem(this.key)) try {
                        return c = JSON.parse(c), c.password = window.atob(c.password), c
                    } catch (c) {
                        return b = c, void a.warning(b)
                    }
                }, b.prototype.clear = function () {
                    return window.localStorage.removeItem(this.key)
                }, b
            }())
        }]), angular.module("swarmApp").factory("playfabStateChunker", function () {
            return window.persist.chunker
        }), angular.module("swarmApp").factory("Playfab", ["$q", "$log", "playfabCredentialStore", "playfabStateChunker", function (b, c, d, e) {
            return function () {
                function f() {
                    this._call = a(this._call, this)
                }
                return f.prototype.isAuthed = function () {
                    return !!this.auth
                }, f.prototype.logout = function () {
                    return this.auth = null, this.authRequest = null, d.clear()
                }, f.prototype.login = function (a, c, e) {
                    return this.authRequest = b(function (b) {
                        return function (f, g) {
                            return PlayFabClientSDK.LoginWithEmailAddress({
                                Email: a,
                                Password: c,
                                InfoRequestParameters: {
                                    GetUserAccountInfo: !0,
                                    GetUserData: !0
                                }
                            }, function (h, i) {
                                return h && 200 === h.code ? (console.log("login success", h), e && d.write(a, c), b.auth = {
                                    raw: h.data,
                                    rawType: "login",
                                    email: a
                                }, b._loadUserData(h.data.InfoResultPayload.UserData), f(h.data)) : g(i)
                            })
                        }
                    }(this))
                }, f.prototype.waitForAuth = function () {
                    return this.authRequest || this.autologin(), this.authRequest
                }, f.prototype.autologin = function () {
                    var a;
                    return a = d.read(), (null != a ? a.email : void 0) && (null != a ? a.password : void 0) ? (c.debug("found playfab autologin creds"), this.login(a.email, a.password, !1)) : (c.debug("playfab autologin failed, no creds stored"), this.authRequest = b(function (a, b) {
                        return b()
                    }))
                }, f.prototype.kongregateLogin = function (a, c) {
                    return this.authRequest = b(function (b) {
                        return function (d, e) {
                            return PlayFabClientSDK.LoginWithKongregate({
                                KongregateId: a,
                                AuthTicket: c,
                                CreateAccount: !0,
                                InfoRequestParameters: {
                                    GetUserAccountInfo: !0,
                                    GetUserData: !0
                                }
                            }, function (a, c) {
                                return a && 200 === a.code ? (console.log("login success", a), b.auth = {
                                    raw: a.data,
                                    rawType: "login"
                                }, b._loadUserData(a.data.InfoResultPayload.UserData), d(a.data)) : e(c)
                            })
                        }
                    }(this))
                }, f.prototype.signup = function (a, c) {
                    return this.authRequest(b(function (b) {
                        return function (d, e) {
                            return PlayFabClientSDK.RegisterPlayFabUser({
                                RequireBothUsernameAndEmail: !1,
                                Email: a,
                                Password: c
                            }, function (c, f) {
                                return c && 200 === c.code ? (console.log("signup success", c), b.auth = {
                                    raw: c.data,
                                    rawType: "signup",
                                    email: a,
                                    state: null,
                                    lastUpdated: (new Date).getTime()
                                }, d(c.data)) : e(f)
                            })
                        }
                    }(this)))
                }, f.prototype.forgot = function (a) {
                    return b(function (b) {
                        return function (b, c) {
                            return PlayFabClientSDK.SendAccountRecoveryEmail({
                                TitleId: window.PlayFab.settings.titleId,
                                Email: a
                            }, function (a, d) {
                                return a && 200 === a.code ? (console.log("forgot success", a), b(a.data)) : c(d)
                            })
                        }
                    }())
                }, f.prototype.push = function (a) {
                    return b(function (b) {
                        return function (c, d) {
                            return PlayFabClientSDK.UpdateUserData({
                                Data: e.encode(a)
                            }, function (e, f) {
                                return e && 200 === e.code ? (console.log("push success", e), b.auth.state = a, b.auth.lastUpdated = (new Date).getTime(), c(b.auth)) : d(f)
                            })
                        }
                    }(this))
                }, f.prototype.clear = function () {
                    return b(function (a) {
                        return function (b, c) {
                            return PlayFabClientSDK.UpdateUserData({
                                KeysToRemove: e.keys()
                            }, function (d, e) {
                                return d && 200 === d.code ? (console.log("clear success", d), a.auth.state = null, a.auth.lastUpdated = (new Date).getTime(), b(a.auth)) : c(e)
                            })
                        }
                    }(this))
                }, f.prototype._loadUserData = function (a) {
                    var b;
                    return this.auth.state = e.decode(a), this.auth.lastUpdated = new Date(null != (b = a.state) ? b.LastUpdated : void 0).getTime()
                }, f.prototype.fetch = function () {
                    return b(function (a) {
                        return function (b, c) {
                            return PlayFabClientSDK.GetUserData({}, function (d, e) {
                                return d && 200 === d.code ? (console.log("fetch success", d), a._loadUserData(d.data.Data), b(a.auth)) : c(e)
                            })
                        }
                    }(this))
                }, f.prototype._call = function (a, d) {
                    var e;
                    return null == d && (d = {}), e = {
                        name: a,
                        params: d
                    }, b(function (b) {
                        return function (f, g) {
                            return b.waitForAuth().then(function () {
                                return window.PlayFabClientSDK[a](d, function (b) {
                                    return e.result = b, "OK" !== b.status ? (e.message = "PlayFabClientAPI." + a + " returned status " + b.status, g(e)) : (c.debug("PlayFabClientAPI." + a, b.status, b), f(b))
                                })
                            }, function (a) {
                                return e.message = a, g(e)
                            })
                        }
                    }(this))
                }, f.prototype.getTitleNews = function () {
                    return this._call("GetTitleNews")
                }, f
            }()
        }]), angular.module("swarmApp").factory("playfab", ["Playfab", "env", function (a, b) {
            return window.PlayFab.settings.titleId = b.playfabTitleId, new a
        }]), angular.module("swarmApp").factory("playfabCall", ["$q", "$log", function (a, b) {}])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").controller("NewsArchiveCtrl", ["$scope", "playfab", "$sce", function (a, b, c) {
            var d;
            return a.state = "loading", d = function (a) {
                return function (a) {
                    try {
                        return JSON.parse(a.Body)
                    } catch (b) {
                        return b, {
                            trustedHtml: c.trustAsHtml(a.Body)
                        }
                    }
                }
            }(), b.getTitleNews().then(function (b) {
                return function (b) {
                    return a.state = "success", a.news = b.data.News.map(function (a) {
                        return Object.assign(d(a), {
                            date: new moment(a.Timestamp),
                            title: a.Title,
                            id: a.NewsId
                        })
                    })
                }
            }(), function (b) {
                return function (b) {
                    return a.state = "error", a.error = b
                }
            }())
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("newsModal", ["game", "playfab", "$location", "$sce", function (a, b, c, d) {
            return {
                restrict: "EA",
                templateUrl: "views/news-modal.html",
                link: function (e, f, g) {
                    var h, i, j;
                    return e.state = "loading", j = moment(c.search().lastnews || a.session.state.date.lastNews || a.session.state.date.started), h = $(f).children(), h.on("hidden.bs.modal", function (b) {
                        return function (b) {
                            return a.session.state.date.lastNews = new Date, a.save()
                        }
                    }()), e.close = function (a) {
                        return function () {
                            return h.modal("hide")
                        }
                    }(), i = function (a) {
                        return function (a) {
                            try {
                                return JSON.parse(a.Body)
                            } catch (b) {
                                return b, {
                                    trustedHtml: d.trustAsHtml(a.Body)
                                }
                            }
                        }
                    }(), b.getTitleNews().then(function (a) {
                        return function (a) {
                            var b;
                            if (e.state = "success", b = a.data.News.map(function (a) {
                                    return Object.assign(i(a), {
                                        date: new moment(a.Timestamp),
                                        title: a.Title,
                                        id: a.NewsId
                                    })
                                }), e.news = b.filter(function (a) {
                                    return a.date.isAfter(j)
                                }), e.news.length) return h.modal({
                                show: !0
                            })
                        }
                    }(), function (a) {
                        return function (a) {
                            return e.state = "error", e.error = a
                        }
                    }())
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var a, b;
        angular.module("swarmApp").factory("KongregateMtx", ["$q", "game", "kongregate", function (a, b, c) {
            return function () {
                function d(a) {
                    this.buyPacks = a, this.buyPacksByName = _.keyBy(this.buyPacks, "name")
                }
                return d.prototype.packs = function () {
                    return a(function (a) {
                        return function (b, c) {
                            return b(a.buyPacks)
                        }
                    }(this))
                }, d.prototype.pull = function () {
                    return a(function (a) {
                        return function (d, e) {
                            return c.onLoad.then(function () {
                                return c.kongregate.services.isGuest() ? e("Please log in to buy crystals.") : c.kongregate.mtx.requestUserItemList(null, function (c, f) {
                                    var g, h, i, j, k, l, m, n, o, p, q;
                                    try {
                                        if (!c.success) return e(c);
                                        for (i = !1, o = c.data, k = 0, l = o.length; k < l; k++) n = o[k], (null != (p = b.session.state.mtx) && null != (q = p.kongregate) ? q[n.id] : void 0) || null != (m = a.buyPacksByName[n.identifier]) && (b.unit("crystal")._addCount(m["pack.val"]), null == (g = b.session.state).mtx && (g.mtx = {}), null == (h = b.session.state.mtx).kongregate && (h.kongregate = {}), b.session.state.mtx.kongregate[n.id] = !0, i = !0);
                                        return d({
                                            changed: i
                                        })
                                    } catch (a) {
                                        return j = a, e(j)
                                    }
                                })
                            })
                        }
                    }(this))
                }, d.prototype.buy = function (b) {
                    return a(function (a) {
                        return function (d, e) {
                            return c.onLoad.then(function () {
                                return c.kongregate.services.isGuest() ? e("Please log in to buy crystals.") : c.kongregate.mtx.purchaseItems([b], function (b) {
                                    return b ? (a.pull(), d(b)) : e(b)
                                })
                            })
                        }
                    }(this))
                }, d
            }()
        }]), a = function (a) {
            return function (a, b, c) {
                var d;
                try {
                    return c()
                } catch (c) {
                    return d = c, console.error(d), a(b + ": " + d)
                }
            }
        }(), b = function (b) {
            return function (b, c, d) {
                return function (e) {
                    return a(b, c, function () {
                        return null == e || "OK" !== e.status ? b(e) : d(e)
                    })
                }
            }
        }(), angular.module("swarmApp").factory("PaypalHostedButtonMtx", ["$q", "$log", "$location", "game", "env", "$http", "playfab", function (c, d, e, f, g, h, i) {
            return function () {
                function h(a) {
                    var b, c, d, e;
                    if (this.buyPacks = a, g.isPaypalSandbox)
                        for (e = this.buyPacks, b = 0, c = e.length; b < c; b++) d = e[b], d.paypalUrl = d.paypalSandboxUrl;
                    this.buyPacksByName = _.keyBy(this.buyPacks, "name"), this.uiStyle = "paypal"
                }
                return h.prototype.packs = function () {
                    return c(function (a) {
                        return function (b, c) {
                            return i.waitForAuth().then(function () {
                                var d, e;
                                return i.isAuthed() ? (e = i.auth.raw.PlayFabId) ? (d = _.map(a.buyPacks, function (a) {
                                    return _.assign({}, a, {
                                        paypalUrl: a.paypalUrl + "&custom=" + encodeURIComponent(JSON.stringify({
                                            playfabId: e
                                        }))
                                    })
                                }), b(d)) : c("Please try logging in again. (playfab.auth.raw.PlayFabId missing)") : c("Please log in to buy crystals: More... > Options")
                            }).catch(function (a) {
                                return c(i.isAuthed() ? a : "Please log in to buy crystals: More... > Options")
                            })
                        }
                    }(this))
                }, h.prototype._pullInventory = function () {
                    return c(function (c) {
                        return function (e, g) {
                            return a(g, "_pullInventory", function () {
                                return i.waitForAuth().then(function () {
                                    return PlayFabClientSDK.GetUserInventory({}, b(g, "GetUserInventory", function (a) {
                                        var b, g, h, i, j, k, l, m, n, o, p, q;
                                        for (i = !1, n = a.data.Inventory, j = 0, l = n.length; j < l; j++) k = n[j], null == (null != (o = f.session.state.mtx) && null != (p = o.playfab) && null != (q = p.items) ? q[k.ItemInstanceId] : void 0) && null != (m = c.buyPacksByName[k.ItemId]) && (d.debug("applying pulled crystal pack", k.ItemInstanceId, m), f.unit("crystal")._addCount(m["pack.val"]), null == (b = f.session.state).mtx && (b.mtx = {}), null == (g = f.session.state.mtx).playfab && (g.playfab = {}), null == (h = f.session.state.mtx.playfab).items && (h.items = {}), f.session.state.mtx.playfab.items[k.ItemInstanceId] = !0, i = !0);
                                        return e({
                                            changed: i
                                        })
                                    }))
                                }).catch(function (a) {
                                    return g(i.isAuthed() ? a : "Please log in to buy crystals: More... > Options")
                                })
                            })
                        }
                    }(this))
                }, h.prototype._pullTransactionId = function (d) {
                    return c(function (c) {
                        return function (c, e) {
                            return a(e, "_pullTransactionId", function () {
                                return d ? i.waitForAuth().then(function () {
                                    return i.isAuthed() ? PlayFabClientSDK.ExecuteCloudScript({
                                        FunctionName: "paypalNotify",
                                        FunctionParameter: {
                                            tx: d
                                        }
                                    }, b(e, "ExecuteCloudScript(paypalNotify)", function (a) {
                                        return a.data.Error ? e("paypalNotify.Error: " + JSON.stringify(a.data.Error)) : a.data.FunctionResult ? "error" === a.data.FunctionResult.state ? e("paypalNotify.FunctionResult: " + JSON.stringify(a.data.FunctionResult)) : c(a.data.FunctionResult) : e("paypalNotify: " + JSON.stringify(a.data))
                                    })) : e("Please log in to buy crystals: More... > Options")
                                }).catch(function (a) {
                                    return e(i.isAuthed() ? a : "请在：更多… > 选项 登录后 购买水晶。")
                                }) : c()
                            })
                        }
                    }())
                }, h.prototype.pull = function () {
                    return this._pullTransactionId(e.search().tx).then(function (a) {
                        return function () {
                            return a._pullInventory()
                        }
                    }(this))
                }, h
            }()
        }]), angular.module("swarmApp").factory("DisabledMtx", ["$q", "game", function (a, b) {
            return function () {
                function b() {
                    this.uiStyle = "disabled"
                }
                return b.prototype.fail = function () {
                    return a(function (a) {
                        return function (a, b) {
                            return b("PayPal的水晶包即将上市。")
                        }
                    }())
                }, b.prototype.packs = function () {
                    return this.fail()
                }, b.prototype.pull = function () {
                    return this.fail()
                }, b.prototype.buy = function () {
                    return this.fail()
                }, b
            }()
        }]), angular.module("swarmApp").factory("Mtx", ["$q", "game", "isKongregate", "KongregateMtx", "DisabledMtx", "PaypalHostedButtonMtx", function (a, b, c, d, e, f) {
            return function () {
                function a(a) {
                    c() ? this.backend = new d(a) : this.backend = new f(a)
                }
                return a.prototype.uiStyle = function () {
                    return this.backend.uiStyle || "normal"
                }, a.prototype.packs = function () {
                    return this.backend.packs()
                }, a.prototype.pull = function () {
                    return this.backend.pull().then(function (a) {
                        return a.changed && b.save(), a
                    })
                }, a.prototype.buy = function (a) {
                    return this.backend.buy(a)
                }, a
            }()
        }]), angular.module("swarmApp").factory("mtx", ["Mtx", "spreadsheet", function (a, b) {
            return new a(b.data.mtx.elements)
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("buyunitInput", ["$log", "commands", "options", "$location", "parseNumber", function (a, b, c, d, e) {
            return {
                templateUrl: "views/buyunit-input.html",
                restrict: "E",
                scope: {
                    unit: "="
                },
                link: function (a, f, g) {
                    var h, i;
                    return a.commands = b, a.options = c, a.form = {
                        buyCount: ""
                    }, i = d.search(), null != i.num ? a.form.buyCount = i.num : null != i.twinnum && (a.form.buyCount = "=" + i.twinnum), h = new Decimal(1), a.buyCount = function () {
                        var b, c;
                        return b = null != (c = e(a.form.buyCount || "1", a.unit)) ? c : new Decimal(1), b.equals(h) || (h = b), h
                    }, a.unitCostAsPercent = function (a, b) {
                        var c, d, e;
                        return c = new Decimal(9999.99), d = b.unit.count(), d.lessThanOrEqualTo(0) ? c : (e = Decimal.max(1, a.maxCostMet()), Decimal.min(c, b.val.times(e).dividedBy(d)))
                    }, a.unitCostAsPercentOfVelocity = function (a, b) {
                        var c, d;
                        return c = new Decimal(9999.99), d = b.unit.velocity(), d.lessThanOrEqualTo(0) ? c : Decimal.min(c, b.val.times(a.maxCostMetOfVelocity()).dividedBy(d))
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("crystalTimer", ["game", function (a) {
            return {
                restrict: "E",
                template: '<div ng-if="isVisible()">\n<p ng-if="unit.isAddUnitTimerReady(crystalTimerDurationMillis())">\n  你的下一次 {{unittext}} 会奖励你 {{crystalTimerQuantity()}} 水晶。\n</p>\n<p ng-if="!unit.isAddUnitTimerReady(crystalTimerDurationMillis())">\n  在 {{unit.addUnitTimerRemainingMillis(crystalTimerDurationMillis()) | duration}}之后,\n  你的下一次 {{unittext}} 会奖励你 {{crystalTimerQuantity()}} 水晶。\n</p>\n</div>',
                scope: {
                    unittext: "=?"
                },
                link: function (b, c, d) {
                    var e;
                    return b.unit = a.unit("crystal"), null == b.unittext && (b.unittext = "孵化场或扩张"), b.isVisible = function () {
                        return a.unit("energy").isVisible()
                    }, e = function () {
                        var b;
                        return b = a.upgrade("hatchery"), b.effectByType.addUnitTimed[0]
                    }, b.crystalTimerDurationMillis = function () {
                        return 1e3 * e().val2
                    }, b.crystalTimerQuantity = function () {
                        return e().val
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        angular.module("swarmApp").directive("dropdownMenuAutoDirection", ["$compile", "$log", function (a, b) {
            return {
                restrict: "A",
                link: function (a, b, c) {
                    var d;
                    return d = function () {
                        var a, c;
                        return a = $(b).width() + $(b).offset().left, c = $(window).width(), "dropdown-menu-" + (c < a ? "right" : "left")
                    }, c.$set("class", "dropdown-menu " + d())
                }
            }
        }])
    }.call(this), angular.module("swarmApp").run(["$templateCache", function (a) {
        "use strict";
        a.put("views/achievements.html", '<tabs></tabs> <h2><b>{{game.achievementPoints() | longnum}}</b> 成就点</h2> <div class="progress"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="{{game.achievementPercent()*100|number:0}}" aria-valuemin="0" aria-valuemax="100" ng-style="{width: game.achievementPercent()*100+\'%\'}"> {{game.achievementPercent()|percent:0}} 已完成 </div> <!--div class="progress-bar progress-bar-warning" role="progressbar" style="width: {{(1-game.achievementPercent())|percent:0}}"></div--> </div> <p>显示 <label><input type="checkbox" checked ng-model="form.show.earned" ng-change="onChangeVisibility()">已获得</label> <label><input type="checkbox" checked ng-model="form.show.unearned" ng-change="onChangeVisibility()">未获得</label> <label><input type="checkbox" checked ng-model="form.show.masked" ng-change="onChangeVisibility()">模糊的</label> 成就, 排序方式 <label><input type="radio" ng-model="form.show.order" value="default" ng-change="onChangeVisibility()">默认</label> <label><input type="radio" ng-model="form.show.order" value="percentComplete" ng-change="onChangeVisibility()">% 完成度</label>, <label><input type="checkbox" checked ng-model="form.show.reverse" ng-change="onChangeVisibility()">{{form.show.reverse ? "最高" : "最低"}} 第一</label> </p> <p ng-if="game.upgrade(\'achievementbonus\').count().greaterThan(0)">你的成就给予你 <b>+{{game.upgrade(\'achievementbonus\').calcStats().prod|percent:{plusOne:true} }}</b> 的幼虫成长加成。</p> <ul class="list-unstyled"> <li ng-repeat="achievement in game.achievementsSorted() | filter:isVisible:achievement | orderBy:order.pred:form.show.reverse" class="achieve"> <div ng-if="state(achievement) == \'earned\'" class="alert achievetext alert-success" ng-click="achieveclick(achievement)"> <span class="achieveicon hidden-xs glyphicon glyphicon-ok" title="Someday I\'ll add real achievement icons"></span> <span class="achievepoints hidden-xs" ng-if="achievement.type.points > 0">+{{achievement.type.points|number}}</span> <span class="achieveicon-xs visible-xs glyphicon glyphicon-ok" title="Someday I\'ll add real achievement icons"></span> <span class="achievepoints-xs visible-xs" ng-if="achievement.type.points > 0">+{{achievement.type.points|number}}</span> <h3>{{achievement.type.label}}</h3> <p class="achievedesc">{{achievement.description()}}</p> <p><em>{{achievement.type.longdesc || \'&nbsp;\'}}</em></p> <span class="achievedate small" title="{{achievement.earnedAtMoment().format(\'dddd, MMMM Do YYYY, h:mm:ss a\')}}">已获得 {{achievement.earnedAtMoment().fromNow()}}</span> </div> <div ng-if="state(achievement) == \'unearned\'" class="alert achievetext alert-warning" ng-click="achieveclick(achievement)"> <span class="achieveicon hidden-xs glyphicon glyphicon-ok" title="Someday I\'ll add real achievement icons"></span> <span class="achievepoints hidden-xs" ng-if="achievement.type.points > 0">{{achievement.type.points|number}}</span> <span class="achieveicon-xs visible-xs glyphicon glyphicon-ok" title="Someday I\'ll add real achievement icons"></span> <span class="achievepoints-xs visible-xs" ng-if="achievement.type.points > 0">+{{achievement.type.points|number}}</span> <h3>{{achievement.type.label}}</h3> <p class="achievedesc">{{achievement.description()}}</p> <p><em>{{achievement.type.longdesc || \'&nbsp;\'}}</em></p> <div ng-if="achievement.hasProgress()" class="progress" style="margin-bottom:0"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="{{achievement.progressVal().toNumber()|number}}" aria-valuemin="0" aria-valuemax="{{achievement.progressMax().toNumber()|number}}" ng-style="{width:achievement.progressPercent().times(100)+\'%\'}"> {{achievement.progressPercent()|percent:0}}<span ng-if="achievement.progressPercent().greaterThan(0.3)">: {{achievement.progressVal() | bignum:0}} of {{achievement.progressMax() | bignum:0}} </span> </div> </div> </div> <div ng-if="state(achievement) == \'masked\'" class="alert achievetext alert-warning" ng-click="achieveclick(achievement)"> <span class="achieveicon hidden-xs glyphicon glyphicon-question-sign" title="it is a mystery"></span> <span class="achievepoints hidden-xs" ng-if="achievement.type.points > 0">{{achievement.type.points|number}}</span> <span class="achieveicon-xs visible-xs glyphicon glyphicon-question-sign" title="it is a mystery"></span> <span class="achievepoints-xs visible-xs">+{{achievement.type.points|number}}</span> <h3>???</h3> <p class="achievedesc">???</p> <p><em>&nbsp;</em></p> </div> </li> </ul> '), a.put("views/buyunit-dropdown.html", '<div class="dropdown btn-group" ng-if="isBuyButtonVisible()"> <button class="btn btn-default dropdown-toggle" data-toggle="dropdown"> <span ng-if="!unit.maxCostMet().isZero()">购买 {{unit.maxCostMet().times(statTwin())|bignum}}</span> <span ng-if="unit.maxCostMet().isZero()" class="disabled">不能购买</span> <span class="caret"></span> </button> <ul class="dropdown-menu" role="menu"> <li ng-if="!unit.isCostMet()" role="presentation" class="disabled"><a role="menuitem"> 不能购买 </a></li> <li ng-if="unit.isCostMet()" role="presentation"><a role="menuitem" tabindex="-1" ng-click="buyUnit({unit:unit, num:fullnum()})" href="javascript:"> Buy {{fullnum().times(statTwin())|bignum}} </a></li> <li ng-if="is25Visible()" role="presentation"><a role="menuitem" ng-click="buyMaxUnit({unit:unit, percent:0.25})" href="javascript:"> Buy {{unit.maxCostMet(0.25).times(statTwin())|bignum}} </a></li> <li ng-if="unit.maxCostMet().greaterThan(1)" role="presentation"><a role="menuitem" ng-click="buyMaxUnit({unit:unit, percent:1})" href="javascript:"> Buy {{unit.maxCostMet().times(statTwin())|bignum}} </a></li> <li ng-repeat-start="upgrade in unit.upgrades.list | filter:filterVisible" role="presentation" class="divider"></li> <li role="presentation" class="dropdown-header titlecase">{{upgrade.type.label}}</li> <li ng-if="!upgrade.isCostMet()" role="presentation" class="disabled"><a role="menuitem"> 不能购买 </a></li> <li ng-if="upgrade.isCostMet()" role="presentation"><a role="menuitem" tabindex="-1" ng-click="buyUpgrade({upgrade:upgrade, num:fullnum()})" href="javascript:"> Buy {{fullnum()|bignum}} </a></li> <li ng-if="is25Visible(upgrade)" role="presentation"><a role="menuitem" ng-click="buyMaxUpgrade({upgrade:upgrade, percent:0.25})" href="javascript:"> Buy {{upgrade.maxCostMet(0.25)|bignum}} </a></li> <li ng-repeat-end ng-if="upgrade.maxCostMet().greaterThan(1)" role="presentation"><a role="menuitem" ng-click="buyMaxUpgrade({upgrade:upgrade, percent:1})" href="javascript:"> Buy {{upgrade.maxCostMet()|bignum}} </a></li> </ul> </div> '), a.put("views/buyunit-input.html", '<div ng-if="unit.count().isZero() && unit.isCostMet()" ng-repeat="warn in (unit.warnfirst | filter:isWarningVisible)"> <div class="alert alert-warning alert-dismissable animif" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> <p>{{warn.text}}</p> </div> </div> <div class="form-group"> <p> <form class="form-inline" ng-submit="commands.buyUnit({unit:unit, num:buyCount()})"> <span class="titlecase">{{unit.unittype.verbing}}</span> <input focus-input type="text" ng-model="form.buyCount" placeholder="1" class="form-control" e="\'10%\' buys 10% of the maximum you can afford.\n00\' buys exactly 1,000 after accounting for twins, rounded up.\n00\' buys the number needed to have a total of 1,000. If you already have 200, this will buy up to 800.\ners with suffixes work: \'23 billion\', \'23b\', or \'23e9\'."> {{buyCount().equals(1) ? unit.unittype.label : unit.unittype.plural}} <span ng-if="unit.twinMult().greaterThan(1)" ng-class="{strikethrough:false && form.buyCount.indexOf(\'=\') >= 0}">(&times;{{unit.twinMult()|bignum}} 双胞胎)</span> 花费 <cost costlist="unit.eachCost()" num="buyCount()"></cost> </form> <p></p> <p ng-if="options.showAdvancedUnitData()"> <span ng-if="unit.maxCostMet().greaterThan(0)"> <span class="titlecase">{{unit.unittype.verbing}}</span> 你最大的 {{unit.maxCostMet().times(unit.twinMult())|longnum}} {{unit.maxCostMet().times(unit.twinMult()).equals(1) ? unit.unittype.label : unit.unittype.plural}} </span> <span ng-if="unit.maxCostMet().lessThanOrEqualTo(0)"> <span class="titlecase">{{unit.unittype.verbing}}</span> 你的下一 {{unit.unittype.label}} </span> 花费 <span ng-repeat="cost in unit.eachCost()"> <span ng-if="!$first && $last"> 和 </span> <span>{{unitCostAsPercent(unit, cost) | percent:0}} 你的 {{cost.unit.unittype.plural}}</span><span ng-if="$last">。</span><span ng-if="!$last && unit.eachCost().length > 2">, </span> </span> </p> <p ng-if="options.showAdvancedUnitData() && unit.maxCostMetOfVelocity().greaterThan(0)"> <span ng-if="unit.maxCostMetOfVelocity().times(unit.twinMult()).times(options.getVelocityUnit({unit:unit}).mult).greaterThanOrEqualTo(1)"> 你可以 {{unit.unittype.verb}} {{unit.maxCostMetOfVelocity().times(unit.twinMult()).times(options.getVelocityUnit({unit:unit}).mult)|longnum}} {{unit.maxCostMetOfVelocity().times(unit.twinMult()).times(options.getVelocityUnit({unit:unit}).mult).equals(1) ? unit.unittype.label : unit.unittype.plural}} 每个 {{options.getVelocityUnit({unit:unit}).label}}, 使用 </span> <span ng-if="unit.maxCostMetOfVelocity().times(unit.twinMult()).times(options.getVelocityUnit({unit:unit}).mult).lessThan(1)"> 你可以 {{unit.unittype.verb}} 1个 {{unit.unittype.label}} 每个 {{unit.maxCostMetOfVelocityReciprocal().dividedBy(unit.twinMult()).dividedBy(options.getVelocityUnit({unit:unit}).mult)|longnum}} {{unit.maxCostMetOfVelocityReciprocal().dividedBy(unit.twinMult()).dividedBy(options.getVelocityUnit({unit:unit}).mult).equals(1) ? options.getVelocityUnit({unit:unit}).label : options.getVelocityUnit({unit:unit}).plural}}, 使用 </span> <span ng-repeat="cost in unit.eachCost()"> <span ng-if="!$first && $last"> 喝 </span> <span>{{unitCostAsPercentOfVelocity(unit, cost) | percent:0}} 你的 {{cost.unit.unittype.label}} 收入</span><span ng-if="$last">.</span><span ng-if="!$last && unit.eachCost().length > 2">, </span> </span> </p> <buyunit unit="unit" num="buyCount()"></buyunit> </div> '), a.put("views/buyunit.html", '<span ng-if="isBuyButtonVisible()"> <span ng-if="fixednum"> <a ng-if="resource.isCostMet()" role="button" class="btn btn-default titlecase" ng-class="{disabled:unit.maxCostMet().lessThan(fullnum())}" ng-click="buyResource({resource:resource, num:fullnum()})"> {{verb}} {{fullnum().times(statTwin())|bignum}} {{unit.unittype.plural}} </a> </span> <div ng-if="!fixednum" class="btn-group btn-group-justified"> <a ng-if="!resource.isCostMet()" role="button" class="btn btn-default disabled"> 不能{{verb}} </a> <a ng-if="resource.isCostMet()" role="button" class="btn btn-default titlecase" ng-click="buyResource({resource:resource, num:fullnum()})"> {{verb}} {{fullnum().times(statTwin())|bignum}} </a> <a ng-if="is25Visible()" role="button" class="btn btn-default titlecase" ng-click="buyMaxResource({resource:resource, percent:0.25})"> {{verb}} {{resource.maxCostMet(0.25).times(statTwin())|bignum}} </a> <a ng-if="resource.maxCostMet().greaterThan(1)" role="button" class="btn btn-default titlecase" ng-click="buyMaxResource({resource:resource, percent:1})"> {{verb}} {{resource.maxCostMet().times(statTwin())|bignum}} </a> </div> </span> '),
            a.put("views/changelog.html", '<tabs></tabs> <h1>更新日志</h1> <p>模拟虫群是开源的。 你可以访问 <a analytics-on analytics-category="outbound" analytics-event="click" analytics-label="source code repository" target="_blank" href="https://github.com/erosson/swarm">源代码存储库</a> 查看更彻底，可读性更强的更新日志。总共有 {{changestats.headers.length|number}} 次更新从 {{changestats.firstrelease.date.format(\'YYYY/MM/DD\')}} 开始。</p> <hr> <div ng-if="false && env.isDebugEnabled" class="well"> <p>游戏已经运行了 {{changestats.firstrelease.date.format(\'YYYY/MM/DD\')}}, for {{changestats.days|number}} 天</p> <p>All-time: {{changestats.headers.length|number}} releases, {{changestats.headers.length/changestats.days|number:2}} releases per day</p> <p>Last week: {{changestats.lastHeaders(7).length|number}} releases, {{changestats.lastHeaders(7).length/7|number:2}} releases per day</p> </div> <div class="changelog"> <!-- template\n<h4>0.0.1 <span>2009/09/09</span></h4>\n<ul>\n  <li>blah</li>\n</ul>\n--> <div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" data-target="#changelog11x" href="javascript:"> Version 1.1.x </a> </h4> </div> <div id="changelog11x" class="panel-collapse collapse in"> <div class="panel-body"> <h4>1.1.6<span>2017/06/19</span></h4> <ul> <li>More icon sizes for mobile home screens.</li> <small><li title="Achievement shenanigans are done now, but check /r/swarmsim and /r/warswarms for a Big Announcement.">Secrets.</small> </ul> </div> <div class="panel-body"> <h4>1.1.5<span>2017/06/13</span></h4> <ul> <li>Respec buttons on the mutagen page are disabled when not available. Previously, they looked disabled but still worked in some circumstances.</li> <small><li title="I admit it\'s tricky, but one of you will solve it. I believe in you.">Secrets.</small> </ul> </div> <div class="panel-body"> <h4>1.1.4<span>2017/06/09</span></h4> <ul> <li>Kongregate online save auto-exporting should now work correctly.</li> <li>Kongregate no longer tries to export online saves to an old/unused save server.</li> <li>The \'more...\' menu should no longer scroll small screens to the right.</li> <li>"Buy all/cheapest 1 upgrade" instead of "upgrades". Thanks <a target="_blank" href="https://github.com/swarmsim/swarm/pull/709">Allen-B1</a>!</li> <s><li title="aka: added a service worker with sw-precache. Take 2: now with less catastrophic failure.">The game should now load faster in modern browsers.</s> <small><li title="Wouldn\'t you like to know?">Secrets.</small> </ul> </div> <div class="panel-body"> <h4>1.1.3<span>2017/06/02</span></h4> <ul> <li title="Implemented Paypal IPN. PDT, our previous method, still runs for faster notifications when possible; IPN is more reliable.">Paypal crystal purchases are now delivered more reliably. (Kongregate payments have been working reliably; no changes necessary.)</li> <li title="Shame on me for not getting this one right on release.">Problems when purchasing crystals should now be reported more clearly.</li> <li>Updates to the contact-the-developer page.</li> <li><a target="_blank" href="/repair">Is your Swarm Simulator browser tab reloading endlessly?</a></li> </ul> </div> <div class="panel-body"> <s><h4>1.1.2<span>2017/05/31</span></h4></s> </div> <div class="panel-body"> <h4>1.1.1<span>2017/05/29</span></h4> <ul> <li>Keyboard shortcuts (press shift+?) are now visible with dark themes like Slate.</li> <li>Small change to ascend-count wording on the mutation screen. Thanks <a href="https://github.com/swarmsim/swarm/pull/680">ghmeier</a>!</li> <li title="aka: added a service worker with sw-precache"><s>The game should now load faster on modern browsers. It might work offline, too - try it out.</s></li> <li>Install-to-homescreen for desktop and mobile (but not Kongregate). Thanks <a href="https://github.com/swarmsim/swarm/pull/707">Allen-B1</a>!</li> <li title="There is no cat level.">Crystals now have an associated kitten.</li> </ul> </div> <div class="panel-body"> <h4>1.1.0<span>2017/05/27</span></h4> <ul> <li>By popular demand, mutation frequency now has a maximum of 100%, up from 60%.</li> <li>Added a new ability, <b>House of Mirrors</b>: duplicates all of your territory-producing units once. Unlike Clone Larvae, this ability has no cap.</li> <li>Territory mutation scales better at higher levels. It\'s now root-based instead of log-based.</li> <li>Added keyboard shortcuts throughout the game. Press \'?\' for a list of shortcuts.</li> <li>Added some new achievements.</li> <li>Added <b>Crystals</b> to the game. Found in the energy tab, they give you energy instantly and help support the developer.</li> <li>Clone Mutation has been slightly buffed.</li> <li>Fixed buy-dropdown scrolling on the unit list page.</li> <li>System clock errors have been removed. Have fun.</li> </ul> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" data-target="#changelog10x" href="javascript:"> Version 1.0.x </a> </h4> </div> <div id="changelog10x" class="panel-collapse collapse"> <div class="panel-body"> <h4>1.0.66<span>2017/02/08</span></h4> <ul> <li>Online saves for Kongregate players are now stored on a different server (PlayFab). Your saved data should still be there; make sure no browser extensions block <b>https://7487.playfabapi.com</b>. (Non-Kongregate players: nothing\'s changed for you.)</li> </ul> <h4>1.0.65<span>2017/01/19</span></h4> <ul> <li>Fixed a bug where scientific-e number formatting broke the achievements screen.</li> </ul> <h4>1.0.64<span>2017/01/17</span></h4> <ul> <li>Fixed a bug that broke FPS settings below 1.</li> <li>Fixed a bug that introduced needlessly precise achievement number formatting.</li> </ul> <h4>1.0.63<span>2017/01/16</span></h4> <ul> <li>Fixed some bugs with how energy is displayed, introduced in the previous release.</li> </ul> <h4>1.0.62<span>2017/01/15</span></h4> <ul> <li title="requestAnimationFrame()">Added an "automatic" FPS setting to the options screen. When Swarm Simulator\'s in a background browser window/tab, automatic FPS uses less of your computer\'s resources. It\'s the default if you\'ve never changed your FPS.</li> <li>Some invisible backend changes.</li> <li>Programmers: you can now use <a target="_blank" href="https://github.com/erosson/swarm-numberformat">Swarm Simulator\'s number formatting</a> in your own projects.</li> </ul> <h4>1.0.61<span>2017/01/11</span></h4> <ul> <li>Fixed a bug that sometimes hid all upgrade levels.</li> <li>Added a note about upgrade notification dropdowns to \'显示高级单位数据\'.</li> </ul> <h4><a style="text-decoration:none" href="https://www.youtube.com/watch?v=Y6ljFaKRTrI" target="_blank" title="So I\'m glad I got burned [out] / Think of all the things we learned">1.0.60</a><span>2017/01/10</span></h4> <ul> <li>Added PlayFab-based online saves. Removed Dropbox online saves, which haven\'t worked for months. (Kongregate players: nothing has changed for you yet.)</li> <li title="?forcefools=[on|after|off]">A certain one-time event now happens every year.</li> <li>Upgrade notification dropdowns are now hidden by default; they confused some newer players. "显示高级单位数据" in the options screen reveals them.</li> <li>Simplified the <a href="/#/contact">developer contact page</a>.</li> <li>Lots of invisible backend changes.</li> </ul> <hr> <h4>1.0.59<span>2015/07/30</span></h4> <ul> <li>Fixed rounding errors when buying <code>@n</code> units. It should now buy that many or slightly more, but never less.</li> <li title="Mouseover text!">Added a critically import, but mildly secret, feature to inactive mutagen.</li> </ul> <h4>1.0.58<span>2015/07/05</span></h4> <ul> <li>The tooltip text for buy-exactly-n units is now more consistent.</li> <li title="Darn those \'invisible backend changes\'.">Fixed the buy-all-upgrades button.</li> </ul> <h4>1.0.57<span>2015/07/05</span></h4> <ul> <li>The options page now includes a legend for standard-decimal suffixes.</li> <li>Small update to the feedback page.</li> <li>Some invisible backend changes.</li> </ul> <h4>1.0.56<span>2015/06/06</span></h4> <ul> <li>Fixed a bug with buy-all-upgrades and upgrade notification settings.</li> </ul> <h4>1.0.55<span>2015/05/13</span></h4> <ul> <li>Fixed a minor grammar error in the swarmling description.</li> <li>"Buy all upgrades" and "buy cheapest upgrades" now use your upgrade notification settings.</li> </ul> <h4>1.0.54<span>2015/05/13</span></h4> <ul> <li>Upgrade notifiers have several new options: notify when buyable, notify at 2x cost, notify at 4x cost or never notify.</li> <li>Upgrades may now be hidden. (Mostly.)</li> <li title="Mouseover text changed too. Easy come, easy go.">Queen achievements have been changed slightly.</li> </ul> <h4>1.0.53<span>2015/05/07</span></h4> <ul> <li>Cocoons now include a buy-exact-cost link for the maximum number of larvae you can clone, similar to the Clone Larvae description.</li> <li>Fixed some bad grammar in the locust and hatchery descriptions.</li> </ul> <h4>1.0.52<span>2015/04/28</span></h4> <ul> <li>Fixed a bug involving mutagen, visibility, the undo button, and the respec button. (Really this time.)</li> <li>Added some links to the send-feedback page.</li> </ul> <h4>1.0.51<span>2015/04/28</span></h4> <ul> <li>You can now set FPS below 1.</li> <li>Fixed a bug involving mutagen, visibility, and the undo button.</li> <li>Some invisible backend changes.</li> </ul> <h4 title="What, you expected something special for the 50th update since 1.0?">1.0.50<span>2015/04/26</span></h4> <ul> <li>The "buy all upgrades" button is disabled if it would buy zero upgrades.</li> <li>Swarmwarp time-skipped now uses the same time format as the rest of the game, and respects the duration format chosen in the options screen. It shows months/years when necessary, instead of hundreds/thousands of days.</li> <li>Some invisible backend changes. The game now contacts `https://api.swarmsim.com` much more often.</li> </ul> <h4>1.0.49<span>2015/04/22</span></h4> <ul> <li>The buy-all-upgrades button is now always visible. Previously, it was visible only with show-advanced-unit-data selected in the options screen.</li> <li>Progress bar text outlining, zoomed in, looks slightly better.</li> <li>v1.0.48\'s hatched-per-second text now respects the velocity format chosen in the options screen. Thanks <a href="https://github.com/zorbathut" target="_blank">zorbathut</a>!</li> <li>Fixed a bug with some buy-n-units formats.</li> <li>Imported saved data is now better at ignoring whitespace.</li> <li>Some invisible backend changes. The game now contacts `https://api.swarmsim.com` more often.</li> </ul> <h4>1.0.48<span>2015/04/17</span></h4> <ul> <li>Swarmwarp duration can now display seconds. Thanks <a href="https://github.com/zorbathut" target="_blank">zorbathut</a>!</li> <li>"显示高级单位数据" in the options menu now shows information about how many of that unit you can hatch every second, based on your current income. Thanks <a href="https://github.com/zorbathut" target="_blank">zorbathut</a>!</li> <li>Added a reset button for the Kongregate minimum size option, and explained how it interacts with screen width.</li> <li>Some invisible backend changes.</li> </ul> <h4>1.0.47<span>2015/04/09</span></h4> <ul> <li>Improved the \'send feedback\' page.</li> <li>Made the in-game bug report page easier to find.</li> <li>Fixed a bug involving fractional creatures.</li> <li>You can now undo a mutagen respec with the undo button.</li> <li>Fixed a bug where the game wasn\'t saved after using the undo button.</li> </ul> <h4>1.0.46<span>2015/04/07</span></h4> <ul> <li>Added home screen icons for iOS/Android/Windows Metro. Thanks <a href="https://github.com/aeakett" target="_blank">aeakett</a>!</li> <li>The Cosmo, Paper, and Darkly themes now have larger progress bars with easier-to-read progress bar text.</li> <li>Kongregate players can now set a minimum size for the game in the options screen.</li> </ul> <h4><s>1.0.45<span><s>2015/04/06</s></span></s></h4> <h4>1.0.44<span>2015/04/05</span></h4> <ul> <li>Changed the server address used for Kongregate saves. No behavior changes.</li> <li>Touchscreens can now tap to see "mouseover" text. (If you don\'t have a touchscreen, or have a touchscreen but don\'t use it, nothing\'s changed.)</li> </ul> <h4>1.0.43<span>2015/04/02</span></h4> <ul> <li>The "undo" button, removed from the game months ago for technical reasons, <a href="https://imgur.com/Z1eHY3y" target="_blank">has now returned</a>. You can undo your most recent action (purchase, upgrade, ability, upgrade-all, or ascension) within 30 seconds. <ul> <li>Undo works like exporting your game before taking an action, then importing it afterward.</li> </ul></li> <li>Changed the abbreviated forms of sexagintillion ("Sx" to "Sg"), septuagintillion ("Sp" to "St"), and octogintillion ("Oc") to ("Og") - they were duplicates of sextillion, septillion, and octillion, respectively. "Sx", "Sp", and "Oc" now do what most people expect when used as input.</li> </ul> <h4>1.0.42<span>2015/04/01</span></h4> <ul> <li>Corrected the year shown in today\'s Exciting Announcement. I\'m sure it\'s correct this time. Wouldn\'t make the same mistake twice, no chance of that.</li> <li><a target="_blank" href="https://www.reddit.com/r/swarmsim/comments/310qs2/ascending_on_april_1/">Buffed mutagen.</a></li> </ul> <h4 title="Let\'s pretend that releasing .41 on 4/1 was part of my plan, and not just a coincidence.">1.0.41<span>2015/04/01</span></h4> <ul> <li>Fixed a spelling error in the buy-button verbs for bats and mutations.</li> <li>Fixed a bug that caused clone larvae to link to the wrong number of cocoons.</li> <li>Fixed a bug that caused next/previous links for territory units on small screens to display the wrong empower-level.</li> <li>Some super-secret changes.</li> </ul> <h4>1.0.40<span>2015/03/30</span></h4> <ul> <li>Fixed a bug where exact-cost links for buying a group of units often gave the wrong cost.</li> </ul> <h4>1.0.39<span>2015/03/30</span></h4> <ul> <li>Added a fancier input field for buy-exactly-N units. <ul> <li>Several new features: buy-percentage, buy-this-many-after-twins, and buy-until-this-many. Mouseover the input field for directions.</li> <li>Pressing Enter after typing a number now buys that many units, just like clicking the buy button.</li> <li>Standard-decimal suffixes, like \'10 billion\' or \'10b\', now work as input.</li> <li>Fixed a bug that limited how much you could buy at once. Numbers bigger than 1e300 (or 1e38 in Safari) work properly now.</li> <li>Fixed a bug that prevented the coefficient for numbers formatted like \'1e10\' from being anything other than 1.</li> <li>Fixed a bug that sometimes cleared numbers formatted like \'1e10\' while you typed them.</li> <li>The up/down arrows next to this input were, unfortunately, lost. No one used them anyway, right?</li> </ul></li> <li>All buy-exact-cost links use the new buy-until-this-many input format. Clicking \'buy\' twice now buys only one extra unit, and large numbers shouldn\'t have rounding errors that cause them to \'miss\' the required cost.</li> <li>Used v1.0.38\'s buy-button verbs in a few more places. Thanks <a target="_blank" href="https://github.com/0x4F72">0x4F72</a>!</li> </ul> <h4>1.0.38<span>2015/03/28</span></h4> <ul> <li>Reworded expansion achievements to clarify that they don\'t carry over between ascensions - you must have that many expansions all at once.</li> <li>Bugfix: upgrades should no longer throw errors or be \'undefined\' after using a buy-exact-cost link for a large number of units.</li> <li>Bugfix: displayed energy percentages are now rounded the same way everywhere.</li> <li>The options screen now allows you to use the old non-exact duration format ("a few seconds", etc).</li> <li>Buy buttons for units now use a more appropriate verb, instead of "buy" - drones hatch, nests build, larvae uncocoon, mutations mutate, etc.</li> </ul> <h4>1.0.37<span>2015/03/23</span></h4> <ul> <li>Importing a saved game through the options screen, importing an online save, and loading a game saved in Flash storage all show the \'welcome back\' screen.</li> <li>By popular demand, the options screen allows you to choose Swarmwarp as a velocity format. ("You produce 10 drones per second", "You produce 9,000 drones per Swarmwarp".) This format will show energy production in seconds.</li> <li>The energy tab now displays energy production correctly when no unit is selected.</li> </ul> <h4>1.0.36<span>2015/03/14</span></h4> <ul> <li>New games, where no units have been purchased, are no longer autosaved online.</li> <li>Engineering notation now works with very large numbers. Thanks <a target="_blank" href="https://github.com/Shoelace">Shoelace</a>!</li> <li>Selecting territory shows a <a target="_blank" href="https://imgur.com/5TyxGvb">territory production pie chart</a>, just in time for <span title="Missed the 1:59 release time by 10 分钟, though. Dang!">Pi Day. Thanks <a target="_blank" href="https://github.com/Shoelace">Shoelace</a>!</span></li> </ul> <h4>1.0.35<span>2015/03/12</span></h4> <ul> <li>Logging out of/importing from Dropbox works once again. (Oops.)</li> <li>Auto-export will no longer overwrite a remote save newer than your current game. "Newer" means "time of last action", so buying anything makes your game eligible for auto-export again.</li> <li>If auto-export won\'t run because nothing\'s changed or because the remote save is newer, it\'ll say so on the options screen.</li> </ul> <h4>1.0.34<span>2015/03/11</span></h4> <ul> <li>Kongregate and Dropbox automatically export an online save every 15 分钟. (Neither <i>imports</i> online saves automatically yet.) This can be disabled on the options screen.</li> <li>Dropbox\'s options screen UI has changed to be more similar to Kongregate\'s, and to be slightly more difficult to misclick.</li> </ul> <h4>1.0.33<span>2015/03/10</span></h4> <ul> <li>Some invisible backend changes.</li> </ul> <h4>1.0.32<span>2015/03/10</span></h4> <ul> <li>The anonymous feedback form works again.</li> <li>Some invisible backend changes.</li> </ul> <h4>1.0.31<span>2015/03/09</span></h4> <ul> <li>The in-game feedback page has been improved.</li> <li>The energy tab\'s percentage now updates as time passes, and matches the progress bar exactly.</li> <li>Added basic support for inserting your own graphics (and other styling) into the game through custom CSS. (No built-in graphics choices just yet.)</li> </ul> <h4>1.0.30<span>2015/03/07</span></h4> <ul> <li>Importing saved games works once again. (Oops.)</li> </ul> <h4>1.0.29<span>2015/03/07</span></h4> <ul> <li>The options screen should no longer raise a "mixed content error".</li> <li>Progress bar estimates involving meat are no longer capped at 2 years.</li> <li>Progress bar estimates many years long are now formatted nicely.</li> <li>Very long progress bar estimates involving meat are no longer "undefined".</li> <li title="Mouseover text!">Added a critically import, but mildly secret, feature that was missing from the Nexus.</li> <li>Kongregate\'s <code>autoresize</code> option should once again be stable.</li> <li>The options screen now allows you to export your game as a short url, and import by visiting that url.</li> </ul> <h4>1.0.28<span>2015/03/04</span></h4> <ul> <li>The nexus no longer has an "undefined" progress bar when you can afford to upgrade it.</li> <li>The unit velocity display ("你获得 x 雄蜂每秒") is no longer stuck. (This was only a display error, you didn\'t lose any production.)</li> </ul> <h4>1.0.27<span>2015/03/04</span></h4> <ul> <li>Estimated upgrade times involving units from the meat tab should now be much more accurate.</li> <li>All upgrade progress bars now display more precise estimates - "00:12:34", instead of "a few seconds". <ul><li>Thanks to <a target="_blank" href="https://github.com/Shoelace">Shoelace</a> for contributing the code for this change!</ul> </li> <li>Units and mutations with a maximum bonus now advertise their diminishing returns in their descriptions.</li> </ul> <h4>1.0.26<span>2015/03/02</span></h4> <ul> <li>Kongregate players now have the option to save your game online. Check out the options screen! <ul> <li>Kongregate doesn\'t sync automatically just yet - you\'ll have to go to the options menu and export/import by hand. This should be automated soon!</li> </ul></li> <li>Users of Internet Explorer 7 and 8 and earlier are now prompted to upgrade.</li> </ul> <h4>1.0.25<span>2015/03/01</span></h4> <ul> <li>Your mutagen tab should no longer mysteriously disappear. Players who\'ve ascended but lost their mutagen tab should now have it back.</li> </ul> <h4>1.0.24<span>2015/02/26</span></h4> <ul> <li>The game should now load properly on Kongregate with Flash or Kongregate\'s APIs disabled.</li> </ul> <h4>1.0.23<span>2015/02/26</span></h4> <ul> <li>Fixed a typo in the description for hatcheries.</li> <li>Added a warning to hatchery mutations about the pitfalls of spending mutagen too soon.</li> <li>Fixed a bug where predicted hatchery/expansion mutagen gains were too low. (Actual mutagen gains have not changed; this was a display error.)</li> <li>Changing the Kongregate scrolling style from autoresize to lock-mousewheel now resizes the window properly.</li> <li>Some invisible changes to how Kongregate embeds the game. Fixes some bugs around Kongregate statistics reporting and other Kongregate API use. (There is a small chance this affected Kongregate\'s scrolling behavior for some of you, though it\'s not intended to - let me know if scrolling\'s broken now.)</li> </ul> <h4>1.0.22<span>2015/02/25</span></h4> <ul> <li>After ascending for the first time, you\'ll see a tutorial message reminding you that unspent mutagen generates larvae.</li> <li>Fixed a bug that prevented mutant hatcheries from being displayed as part of the bonus multiplier on the "larva" screen. (They\'ve always correctly affected larva production; this was a display error.)</li> <li>Added more details to the description of hatcheries about larva production. It should now be easier to tell how much larvae your hatcheries are producing, compared to your mutagen.</li> </ul> <h4>1.0.21<span>2015/02/24</span></h4> <ul> <li>Added a "reset upgrade notifiers" button on the ascension screen.</li> <li>Kongregate users now have the option to lock mousewheel scrolling to the Swarm Simulator window, instead of the whole Kongregate page, while the mouse is over the game. This is still a bit experimental. You\'ll find it on the <a href="#/options">options screen</a>.</li> <li>The standalone/non-Kongregate game now has the option to sync your saved progress to a <a href="https://dropbox.com" target="_blank">Dropbox</a> account. Check out the options screen! <ul> <li>Dropbox doesn\'t sync automatically just yet - you\'ll have to go to the options menu and export/import by hand. This should be automated soon!</li> <li>Kongregate users - I\'m working on another form of online syncing for you, too. Patience! (Kongregate\'s terms won\'t let me show you Dropbox\'s login screen; sorry.)</li> <li>Thanks to <a target="_blank" href="https://github.com/Shoelace">Shoelace</a> for <a target="_blank" href="https://github.com/erosson/swarm/issues/164">contributing this code</a>!</li> </ul> </li> </ul> <h4>1.0.20<span>2015/02/23</span></h4> <ul> <li>Saved data is now stored in three places - browser localstorage, browser cookies, and Flash storage. This should make it harder to accidentally lose your save.</li> <li>The buy-dropdowns available with no unit selected no longer cause a scrollbar to appear.</li> <li>The progress bar at the top of the achievements screen works again.</li> <li>By popular demand, the achievements screen can now be sorted by percent completed.</li> </ul> <h4>1.0.19<span>2015/02/22</span></h4> <ul> <li>The list of themes now has a scrollbar.</li> <li>Themes are now hosted on the same server as the game - your browser is less likely to have them blocked.</li> </ul> <h4>1.0.18<span>2015/02/21</span></h4> <ul> <li>The patch notes page now displays how many times the game\'s been updated.</li> <li>You can now choose from a list of color themes from <a href="http://bootswatch.com/" target="_blank">http://bootswatch.com/</a>. <ul> <li>If you were using the dark/inverted theme before, it\'s been removed. You\'re now using the (far less buggy) <a href="http://bootswatch.com/slate" target="_blank">slate theme</a>. You might also like <a href="http://bootswatch.com/cyborg" target="_blank">cyborg</a> or <a href="http://bootswatch.com/darkly" target="_blank">darkly</a>.</li> <li>Designers: you can set a URL for your own custom theme (CSS file). <a href="#/contact">Contact me</a> if you come up with something cool, and I might add it to the game!</li> </ul></li> </ul> <h4>1.0.17<span>2015/02/20</span></h4> <ul> <li>Progress bars are now displayed correctly in Internet Explorer.</li> </ul> <h4>1.0.16<span>2015/02/20</span></h4> <ul> <li>Fixed ascension cost progress bar estimates better than in v1.0.14.</li> <li>Removed the link to a very old version of the game from the options menu.</li> <li>You can now <a href="#/cleartheme">disable the experimental dark theme with this link</a> if it\'s not working properly.</li> </ul> <h4>1.0.15<span>2015/02/19</span></h4> <ul> <li>Setting "velocity format" in the options screen works once again.</li> <li>The autoresize scroll option now works properly after reloading the page.</li> </ul> <h4>1.0.14<span>2015/02/19</span></h4> <ul> <li>Kongregate users can now find an option to use v1.0.11\'s autoresizing on the options screen.</li> <li>Fixed a bug that prevented estimated time from appearing on the ascension cost progress bar.</li> <li>The ascension cost progress bar now shows a more precise estimated time. (Other progress bars will get this soon; patience!)</li> <li>Experimental dark color themes for select web browsers are now available in the options menu. The old way of temporarily accessing these themes has been removed.</li> </ul> <h4>1.0.13<span>2015/02/18</span></h4> <ul> <li>Errors reading and writing to localstorage (perhaps because third-party cookies are blocked for a Kongregate user) now display a proper error message, instead of a blank screen.</li> <li>Swarmwarp now specifies that it doesn\'t generate energy.</li> </ul> <h4>1.0.12<span>2015/02/18</span></h4> <ul> <li>Removed the Kongregate resizing added in the last update.</li> </ul> <h4>1.0.11<span>2015/02/18</span></h4> <ul> <li>Mousewheel scrolling on Kongregate should now be less painful. The game should resize itself as needed to avoid double-scrollbars.</li> <li>The checkboxes on the achievement screen are now saved across page refreshes.</li> <li>Your last ascension date/time is now recorded, and visible in the statistics screen. If you\'ve already ascended, this date will be wrong until your next ascension - sorry!</li> <li>There\'s now a guaranteed mutagen spawn every 8 hatcheries or expansions. This is intended to help out players who\'ve had bad luck with their mutagen spawn rates.</li> <li>Fixed a bug with mutagen spawn calculations. Your saved game\'s random mutagen spawns are different than they were in v1.0.10.</li> </ul> <h4>1.0.10<span>2015/02/17</span></h4> <ul> <li>Fixed missing unit descriptions.</li> </ul> <h4>1.0.9<span>2015/02/17</span></h4> <ul> <li>Fixed the description of the "Power Overwhelming" achievement - it now correctly says 5 nexus are required, not one. (The achievement "Phenomenal Cosmic Power" is already awarded for one nexus.)</li> <li>Kongregate now has a high score list for best time, in minutes, to build your 5th nexus.</li> </ul> <h4>1.0.8<span>2015/02/15</span></h4> <ul> <li>Fixed a bug where simply viewing some types of units would log many errors.</li> <li>Fixed a bug that displayed a description of "undefined" for some achievements.</li> <li>Fixed a bug that sometimes caused problems when buying你的第一个nexus.</li> <li>Preparing to release the game on Kongregate. (No visible changes.)</li> </ul> <h4>1.0.7<span>2015/02/15</span></h4> <ul> <li>You can now ignore upgrade notifiers <span class="glyphicon glyphicon-circle-arrow-up"></span> using the checkbox <input type="checkbox" checked> next to each upgrade. Viewing an upgrade no longer causes its upgrade notifier to disappear. This new setting\'s saved when closing the browser or refreshing the page.</li> </ul> <h4>1.0.6<span>2015/02/15</span></h4> <ul> <li>Fixed a bug related to getting the public test achievement.</li> </ul> <h4>1.0.5<span>2015/02/15</span></h4> <ul> <li>The achievement earned for helping on public test is now worth no points.</li> <li>Achievements worth no points no longer display "+0 points", and aren\'t visible in the achievements list unless you\'ve earned them.</li> <li>Numbers in achievement descriptions now use the number format you\'ve selected in the options screen.</li> <li>Fixed a crash that sometimes occurred when calculating upgrade costs.</li> <li>Changes to the contact-the-developer link: <ul> <li>Fixed a bug that prevented saved data from being properly sent with all messages. Saved games are now included as shortened URLs.</li> <li>Instead of one form, there\'s now a "contact" page with three links: Reddit PM, email, or the anonymous feedback form. All of these include debug information for bug reports.</li> <li>Removed the Reddit-username-or-email field from the anonymous feedback form, since you can now contact the developer directly by Reddit or email.</li> </ul></li> </ul> <h4>1.0.4<span>2015/02/13</span></h4> <ul> <li>Long swarmwarp durations are now formatted with hours and days, not just minutes.</li> <li>Fixed a bug with very expensive unit/upgrade purchases that would sometimes enable the buy button when you didn\'t have quite enough resources to actually buy.</li> <li>Ascensions are now tracked on the statistics screen. (Your first ascension date is probably wrong because ascension dates/times weren\'t tracked before now - sorry!)</li> </ul> <h4>1.0.3<span>2015/02/12</span></h4> <ul> <li>When you reopen the game after being away for more than a few minutes, you\'ll see a "welcome back" screen that says how long you were away and how much your swarm produced.</li> </ul> <h4>1.0.2<span>2015/02/11</span></h4> <ul> <li>Fixed a misspeeled achievement.</li> <li>When you haven\'t yet spent any mutagen, the mutagen respec buttons are now visible, but disabled. Previously they weren\'t visible.</li> <li title="They have mouseover text now!">Added a critically important secret that was missing from most of v1.0\'s new units.</li> <li>The achievement for helping on the test server is now awarded if you ascended before the game was reset in v1.0.0-publictest9.</li> </ul> <h4>1.0.1<span>2015/02/10</span></h4> <ul> <li>Importing certain saved games from the test server should no longer work.</li> </ul> <h4>1.0.0 - <a href="https://www.reddit.com/r/swarmsim/comments/2vhiwp/v10_mutation_prestige_new_units_bigger_numbers_no/">release announcement</a><span>2015/02/10</span></h4> <ul> <li>Removed the "we\'re testing, your progress may be reset" warning. Version 1.0 means no more (intentional) resets, ever.</li> <li>The meat tab looks different. Late game units have been renamed, and there\'s several new units.</li> <li>Added <b>mutation</b>, a soft-reset/prestige system. <ul> <li>After your 80th expansion or 40th hatchery, building more expansions/hatcheries may, at random, provide some <b>mutagen</b>. <ul><li>If you\'ve already built more than 40 hatcheries or 80 expansions, you should have automatically received mutagen for building them.</ul> </li> <li>Mutagen starts off inactive. To activate your mutagen, you must <b>ascend</b> - travel through space to a new world with only a few mutagen-enhanced larvae.</li> <li>Ascension requires a large amount of energy and a mature swarm. (You can\'t reset as fast as lots of other games.)</li> <li>There are several interesting mutations you can choose to unlock with your mutagen. Unlocking any one type of mutation increases the cost to unlock others. Plan carefully which ones you want first!</li> <li>If you\'d like to try a different mutation strategy, you may <b>respec</b> to remove all mutations and restore all the mutagen you\'ve spent. You have a limited number of free respecs, and you can pay energy to respec more frequently.</li> </ul></li> <li>Several changes to existing units and abilities. <ul> <li>Swarmwarp now costs much less energy, but no longer restores energy.</li> <li>Bats now cost 100 energy. Previously they cost 10 lepidoptera - same energy required per bat, but it\'s now harder to accidentally spend all your lepidoptera.</li> <li>Nightbugs now increase max energy by up to x6 instead of x4.</li> <li>Expansions now display their total percentage with condensed numbers.</li> </ul></li> <li>Large numbers of units are handled better: it\'s now possible to produce up to 1e100,000 meat, or any other unit. (Units are no longer limited by Javascript\'s usual maximum of 1.7e308.) At that point, you\'ll simply stop producing meat, instead of receiving buggy "infinite" meat.</li> <li>"Buy all upgrades" moved into the "more..." menu, instead of its own menu/tab. It no longer buys meat-tab twin upgrades.</li> <li>Added an option to format numbers with engineering notation. Thanks to <a target="_blank" href="https://github.com/Shoelace">Shoelace</a> for <a target="_blank" href="https://github.com/erosson/swarm/issues/247">contributing this code</a>!</li> <li>Anonymous feedback form should work more reliably, even with very long save files.</li> <li>The buy-N-units input field now suports scientific-e notation, and allows buying more than 1e21 units at once.</li> <li>Added an achievement for everyone who\'s helped test v1.0. Your game on <a href="https://swarmsim.github.io">the production server</a> should receive the achievement automatically if you\'ve ascended at least once on <a href="https://swarmsim-publictest.github.io">the test server</a>.</li> </ul> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" data-target="#changelog10xpublictest" href="javascript:"> Version 1.0.x, public test </a> </h4> </div> <div id="changelog10xpublictest" class="panel-collapse collapse"> <div class="panel-body"> <h4>1.0.0-publictest29<span>2015/02/15</span></h4> <ul> <li>Created a button to award the publictest achievement. It\'s still awarded automatically, but this helps players with a web browser that doesn\'t allow it.</li> </ul> <h4>1.0.0-publictest28<span>2015/02/11</span></h4> <ul> <li>The achievement for helping on publictest is now awarded if you ascended before the game was reset in v1.0.0-publictest9.</li> <li>Updated offline-screen text: 1.0\'s out now, not "soon."</li> </ul> <h4>1.0.0-publictest27<span>2015/02/10</span></h4> <ul> <li>Updated the previous changelog entry to mention the new achievement.</li> <li>Disabled all UI. Full 1.0 release is coming. Thanks for all your help testing things!</li> </ul> <h4>1.0.0-publictest26<span>2015/02/09</span></h4> <ul> <li>Empowered units beyond level 20 now have their name formatted correctly.</li> <li>Meat mutation now has different effects on different units. It\'s a little more powerful for units earlier than hives, but becomes substantially less powerful for later units.</li> <li>The meat limit has been raised to 1e100,000.</li> <li>Added a few more meat-producing units.</li> <li>Twin costs for very advanced units have increased.</li> <li>A few invisible changes to prepare for the v1.0 release.</li> <li>Added an achievement for everyone who\'s helped test v1.0. After v1.0 is released, your game on <a href="https://swarmsim.github.io">the production server</a> should receive the achievement automatically if you\'ve ascended at least once on <a href="https://swarmsim-publictest.github.io">the test server</a>.</li> </ul> <h4>1.0.0-publictest25<span>2015/02/05</span></h4> <ul> <li>Fixed a typo in Mutation Frequency\'s description.</li> <li>Bugfix: mutant lepidoptera now increase maximum energy, as advertised.</li> <li>Bugfix: meat tab is selected by default, not mutagen.</li> <li>Bugfix: the buy-N-units input once again updates costs every time you press a key.</li> <li>Once mutagen is visible, hatcheries/expansions now show the minimum number required to earn mutagen.</li> </ul> <h4>1.0.0-publictest24<span>2015/02/05</span></h4> <ul> <li>Bugfix: mutagen respecs no longer reduce your current energy/meat/territory.</li> <li>Mutagen respecs have been redesigned. Respeccing now refunds 100% of your mutagen, but requires a fraction of your next ascension\'s energy cost, <i>and</i> resets your next ascension\'s energy cost (that is, sets your energy-spent for this ascension to 0). You may respec with no penalty 4 times, and gain 1 more free respec every three times you ascend. <ul> <li>Respeccing was intended to be a rarely-used way to correct mistakes or try a new mutation strategy, not something done multiple times per ascension to exploit specific mutations. The original cost of respeccing was a mistake; the cost was much too low to limit respec usage.</li> </ul></li> <li>The buy-N-units input field now suports scientific-e notation, and allows buying more than 1e21 units at once.</li> <li>Exact-cost links no longer round costs, and should now always cover the full cost of expensive upgrades. (Really this time.)</li> </ul> <h4>1.0.0-publictest23<span>2015/02/03</span></h4> <ul> <li>Bugfix: hatcheries and expansions once again display estimated mutagen rewards.</li> </ul> <h4>1.0.0-publictest22<span>2015/02/02</span></h4> <ul> <li>Fixed a bug that made lepidoptera additive with mutant lepidoptera, instead of multiplicative. Players with both will earn more energy now.</li> </ul> <h4>1.0.0-publictest21<span>2015/02/02</span></h4> <ul> <!--li>You\'ll now see a "welcome back" screen when you open the game, showing how long you were away and your swarm\'s production during that time.</li--> <li>The meat limit has been raised to 1e1000.</li> <li>Mutant lepidoptera now increase the energy cost of ascending. (More precisely, they decrease the effect of spending energy has on decreasing ascension cost.) <ul> <li>This mutation was speeding up ascensions a bit too much. Paying for an ascension is still quicker with this mutation than without it, but not by quite so much.</li> </ul></li> <li>Ascension cost increases by 12% per ascension, down from 20%.</li> <li>Meta-mutation is about 35% less effective.</li> <li>Meat rush and territory rush mutations are about 4 times stronger. (Larvae rush is unchanged.)</li> <li>Hatcheries grant slightly more mutagen than before.</li> <li>Expansions 40 to 79 no longer grant mutagen. The mutagen tab now appears at 80 expansions or 40 hatcheries, whichever comes first; instead of 40 expansions. <ul> <li>In a new game, mutagen became visible long before you could do anything with it. Timing should now be more appropriate. This change isn\'t intended to be a nerf; early expansions never gave much mutagen anyway.</li> </ul></li> </ul> <h4>1.0.0-publictest20<span title="rabbit rabbit">2015/02/01</span></h4> <ul> <li>It\'s no longer possible to crash the game by buying millions of upgrades at once.</li> <li>Exact-cost links now always round up whenever rounding is necessary; they should now always cover an upgrade\'s full cost.</li> </ul> <h4>1.0.0-publictest19<span>2015/01/31</span></h4> <ul> <li>Numbers throughout the game are always rounded down now. No more numbers formatted like "1.00e+3M".</li> <li>The unit limit has been raised from 1e300 to 1e400. (Units can exceed Javascript\'s normal maximum for the first time.)</li> <li>There\'s now some tutorial text when you first unlock mutagen.</li> </ul> <h4>1.0.0-publictest18<span>2015/01/31</span></h4> <ul> <li>The cocoons link in Clone Larvae\'s description now works properly.</li> <li>Ascension should no longer be disabled when you have enough energy.</li> <li>Importing v0.2 games should work again.</li> <li>Anonymous feedback form should work more reliably, even with very long save files.</li> <li>Using swarmwarp and immediately reloading the page should no longer result in negative energy.</li> </ul> <h4>1.0.0-publictest17<span>2015/01/30</span></h4> <ul> <li>Swarmwarp should now work properly.</li> <li>Available upgrades are updated slightly less often, but the game should run faster now.</li> <li>Added an option for engineering notation. Thanks to <a target="_blank" href="https://github.com/Shoelace">Shoelace</a> for <a target="_blank" href="https://github.com/erosson/swarm/issues/247">contributing this code</a>.</li> </ul> <h4>1.0.0-publictest16<span>2015/01/30</span></h4> <ul> <li>Ascending works once again.</li> <li>Buying large numbers of units with buy-exact-cost links or with the buy-exactly-n field work again.</li> <li>Units-bought are tracked properly for achievements once again.</li> </ul> <h4>1.0.0-publictest15<span>2015/01/29</span></h4> <ul> <li>Lots of invisible backend changes; preparing to remove the 1e300 meat limit. High risk of something breaking in this version - if you find bugs, or the game runs much slower than before, <a target="_blank" ng-href="#/contact">please let me know</a>. (The meat limit has <i>not</i> been removed yet.)</li> <li>Saved games should now load properly in all browsers.</li> </ul> <h4><s>1.0.0-publictest14</s><span><s>2015/01/29</s></span></h4> <h4>1.0.0-publictest13<span>2015/01/29</span></h4> <ul> <li>Ascending initially costs much more energy, but the cost drops much faster as you spend energy. This change should reduce the need to hoard energy for a long time before ascending.</li> <li>The cost of ascending now increases every time you ascend.</li> <li>"Upgrade all" no longer buys meat-tab twin upgrades or mutagen unlock upgrades.</li> <li>Unspent mutagen no longer produces meat. (It still produces larvae.)</li> <li>Some invisible backend changes.</li> </ul> <h4>1.0.0-publictest12<span>2015/01/24</span></h4> <ul> <li>Expansions now display their total percentage with condensed numbers.</li> <li>Ascension achievements now properly display a progress bar and progress percentage.</li> <li>The Clone Larvae description now has a link to preserve exactly your maximum cloneable as cocoons, similar to the exact-cost links found for upgrades.</li> <li>Upgrades that cost larvae no longer have a buy-exact-cost link for larvae before cocoons are available.</li> <li>Added a new secret.</li> </ul> <h4 title="also, celebrated programmer\'s birthday">1.0.0-publictest11 <span>2015/1/23</span></h4> <ul title="also, celebrated programmer\'s birthday"> <li>Merged change from 0.2.26: Added \'velocity format\' to the options menu. Units gained per second may instead be shown per-minute, per-hour, or per-day.</li> </ul> <h4>1.0.0-publictest10<span>2015/01/21</span></h4> <ul> <li>Unlocking mutations now works reliably.</li> <li>The game now saves/reloads reliably. (You might have lost progress since the last version. Sorry!)</li> </ul> <h4>1.0.0-publictest9<span>2015/01/21</span></h4> <ul> <li><b><a href="https://www.reddit.com/r/swarmsim/comments/2t5m25/v100publictest8_test_server_resetting_soon/">Your progress has been reset!</a></b></li> <li>All twin upgrades and achievements now use the correct unit names.</li> <li>Lots of new achievements are now available. You should see achievements for all new units, ascending, and unlocking mutations.</li> <li>Queens and nests are visible immediately after ascending.</li> </ul> <h4>1.0.0-publictest8<span>2015/01/21</span></h4> <ul> <li>Fixed a bug where mutagen-unlock costs were displayed too low.</li> <li>Mutagen gains increased, but mutation unlock costs also increased.</li> <ul> <li>The intent is to make it more difficult to unlock every type of mutation.你的第一个2-3 mutations require fewer hatcheries/expansions now, but everything past that requires more.</li> </ul> <li>Reduced random range for amount of mutagen gained. The expected amount of mutagen for building an expansion will always be greater than the amount for the previous expansion.</li> <li>Nightbugs now increase max energy by up to x6 instead of x4.</li> <li>Mutant lepidoptera now increase both max energy and energy regeneration.</li> <li>Unused mutagen now produces the correct/advertised amount of larvae, instead of 10x that.</li> <li>Mutagen text for hatcheries and expansions now names the correct upgrade.</li> </ul> <h4>1.0.0-publictest7<span>2015/01/19</span></h4> <ul> <li>Merged bugfix from 0.2.25: Fixed a bug that made it possible to buy more than 5 levels of Accomplished Ancestry upgrades.</li> </ul> <h4>1.0.0-publictest6<span>2015/01/19</span></h4> <ul> <li>All 0.2.x saves with the required 40 expansions now properly award mutagen when imported. If yours didn\'t, try again.</li> </ul> <h4>1.0.0-publictest5<span>2015/01/19</span></h4> <ul> <li>"Buy all upgrades" moved into the "more..." menu, instead of its own menu/tab</li> <li>The "mutant lepidoptera" upgrade now has the correct name</li> <li>The 1e300 unit cap is more thorough now</li> <li>Updated the description of bats to reflect their cost change</li> </ul> <h4>1.0.0-publictest4 - <a href="https://www.reddit.com/r/swarmsim/comments/2ssnw5/help_test_v10_mutation_and_new_units/">release announcement</a><span>2015/01/17</span></h4> <ul> <li>0.2.x saves no longer need to refresh the page to get their mutagen</li> <li>One new mutation; several rebalanced mutations</li> </ul> <h4>1.0.0-publictest3<span>2015/01/17</span></h4> <ul> <li>The \'ascend\' button works again</li> <li>Infinity meat is no longer possible; there\'s now a cap of 1e300</li> <li>Importing a mutagen-less 0.2.x save and reloading the page now awards you mutagen for the expansions/hatcheries you\'ve already bought</li> </ul> <h4>1.0.0-publictest2<span>2015/01/14</span></h4> <ul> <li>Opened <a href="http://swarmsim-publictest.github.io">http://swarmsim-publictest.github.io</a>. Break things!</li> <li>The meat tab looks different. Late game units have been renamed, and there\'s several new units.</li> <li>Added <b>mutation</b>, a soft-reset/prestige system. <ul> <li>After your 40th expansion or hatchery, building more expansions/hatcheries may, at random, provide some <b>mutagen</b>.</li> <li>Mutagen starts off inactive. To activate your mutagen, you must <b>ascend</b> - travel through space to a new world with only a few mutagen-enhanced larvae.</li> <li>Ascension requires a large amount of energy and a mature swarm. (You can\'t reset as fast as lots of other games.)</li> <li>There are several interesting mutations you can choose to unlock with your mutagen. Unlocking any one type of mutation increases the cost to unlock others. Plan carefully which ones you want first!</li> <li>If you\'d like to try a different mutation strategy, you may <b>respec</b> to remove all mutations and restore 70% of all the mutagen you\'ve spent.</li> </ul></li> <li>Swarmwarp now costs much less energy, but no longer restores energy.</li> <li>Bats now cost 100 energy. Previously they cost 10 lepidoptera - same energy required per bat, but it\'s now harder to accidentally spend all your lepidoptera.</li> </ul> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" data-target="#changelog02x" href="javascript:"> Version 0.2.x </a> </h4> </div> <div id="changelog02x" class="panel-collapse collapse"> <div class="panel-body"> <h4 title="also, celebrated programmer\'s birthday">0.2.26 <span>2015/1/23</span></h4> <ul title="also, celebrated programmer\'s birthday"> <li>Added \'velocity format\' to the options menu. Units gained per second may instead be shown per-minute, per-hour, or per-day.</li> </ul> <h4>0.2.25 <span>2015/1/19</span></h4> <ul> <li>Fixed a bug that made it possible to buy more than 5 levels of Accomplished Ancestry upgrades.</li> </ul> <h4>0.2.24 <span>2015/1/10</span></h4> <ul> <li>"Buy all upgrades" button.</li> </ul> <h4>0.2.23 <span>2014/12/11</span></h4> <ul> <li>Wasp achievements are no longer named after bees. (Switched achievement names with stingers.) Thanks /u/umbrot.</li> </ul> <h4>0.2.22 <span>2014/12/2</span></h4> <ul> <li>Cost links now work for very large numbers. (That is, <code>?twinnum=...</code> works for numbers formatted like <code>1e+21</code>.)</li> </ul> <h4>0.2.21 <span>2014/11/10</span></h4> <ul> <li>Fixed another memory leak. If you\'re still seeing the game crash your browser, <a target="_blank" ng-href="#/contact">please let me know</a>.</li> </ul> <h4>0.2.20 <span>2014/11/09</span></h4> <ul> <li>Fixed a bug with "next upgrade costs" links. They should now be links much more often, and mocking grey text much less often.</li> </ul> <h4>0.2.19 <span>2014/11/09</span></h4> <ul> <li>Added an option for old-style hybrid number formatting.</li> </ul> <h4>0.2.18 <span>2014/11/02</span></h4> <ul> <li>Some invisible backend changes. Nothing to see here.</li> </ul> <h4>0.2.17 <span>2014/11/02</span></h4> <ul> <li>Abbreviated numbers bigger than decillions no longer fall back to exponential format.</li> <li>Some preparation for a future release.</li> <li>Added some new units in the meat tab for very advanced players.</li> </ul> <h4>0.2.16 <span>2014/10/20</span></h4> <ul> <li>Removed 0.2.15\'s undo button. It\'ll be back once lag associated with it is resolved.</li> </ul> <h4>0.2.15 <span>2014/10/19</span></h4> <ul> <li>After buying something, an \'undo\' button is available for a few seconds.</li> </ul> <h4>0.2.14 <span>2014/10/13</span></h4> <ul> <li>Some invisible backend changes. Nothing to see here.</li> </ul> <h4>0.2.13 <span>2014/10/8</span></h4> <ul> <li>The statistics screen works again.</li> <li>Fixed a possible memory leak. If you\'re still seeing the game crash your browser, <a target="_blank" ng-href="#/contact">please let me know</a>.</li> </ul> <h4>0.2.12 <span>2014/10/7</span></h4> <ul> <li>Upgrade progress bars now estimate how long the wait is before you can afford the next upgrade.</li> <li>Progress bars at low percentages should now be easier to read.</li> </ul> <h4>0.2.11 <span>2014/10/5</span></h4> <ul> <li>Nexus purchases should work properly again.</li> </ul> <h4>0.2.10 <span>2014/10/5</span></h4> <ul> <li>Temporarily disabled the display of bat bonuses next to each energy ability. (Shouldn\'t have tried to rush that part.)</li> </ul> <h4>0.2.9 <span>2014/10/5</span></h4> <ul> <li>New ability: <b>Swarmwarp</b>. Travel through time, instantly gaining 15 分钟\' worth of production.</li> <li>新单位: <b>Bat</b>. 提高所有基于能量的能力的能力。</li> <li>The description for each new energy-tab unit now specifies its maximum effect.</li> </ul> <h4>0.2.8 <span>2014/10/4</span></h4> <ul> <li>Fixed a speling erorr in an achievement.</li> <li>Fixed several links on small screens and in the tutorial.</li> <li>Minor footer restyling.</li> </ul> <h4>0.2.7 <span>2014/10/3</span></h4> <ul> <li>Progress bars now have numbers again. Oops.</li> </ul> <h4>0.2.6 <span>2014/10/3</span></h4> <ul> <li>Energy income is now properly shown when no unit is selected.</li> <li>Achievements now have progress bars.</li> <li>Importing an exported game no longer complains of an error.</li> <li>Remove the front page link to 0.1.x. It\'s still available in the options menu.</li> </ul> <h4>0.2.5 <span>2014/10/2</span></h4> <ul> <li>The feedback form in the menu works again. Oops.</li> <li>Progress bars should now round numbers correctly.</li> </ul> <h4>0.2.4 <span>2014/10/1</span></h4> <ul> <li>New Energy unit: <b>Nightbug</b>. Increases maximum energy storage.</li> <li>New Energy unit: <b>Lepidoptera</b>. Increases energy generated per second.</li> <li>Changed how larvae production is displayed.</li> </ul> <h4>0.2.3 <span>2014/09/29</span></h4> <ul> <li>Empowered units now appear at the top of the unit list. The intent here is to keep the units you\'re most likely interested in near the top, but if having the order change on you is annoying, complain loudly and I\'ll consider changing it back.</li> <li>More digits are shown for long-formatted numbers ("1.23456 million", not "1.23m")</li> <li>The game should load slightly faster/more reliably.</li> <li>Selecting an invalid tab/unit is a little less broken.</li> </ul> <h4>0.2.2 <span>2014/09/28</span></h4> <ul> <li>Fixed memory leak: you should no longer need to periodically refresh the game.</li> <li>Added poorly-supported inverted color schemes for <a target="_blank" href="#?theme=dark-chrome">Chrome</a> and <a target="_blank" href="#?theme=dark-ff">Firefox</a>.</li> </ul> <h4>0.2.1 <span>2014/09/27</span></h4> <ul> <li>Earning an achievement now correctly updates larvae/秒.</li> </ul> <h4>0.2.0 - <a href="https://www.reddit.com/r/swarmsim/comments/2hb0lv/020_reset_and_release_date_friday_september_26/">release announcement</a><span>2014/09/26</span></h4> <ul> <li><b>Full Reset</b> - everyone\'s game has been restarted. If you like, <a href="archive/0.1.37">you may continue to play your 0.1.x save for a while longer here</a>, but you won\'t get any new features.</li> <li><b><a href="https://www.reddit.com/r/swarmsim/comments/2frtef/upcoming_inject_larvae_changes_cost_no_longer/">Energy</a></b> - buy你的第一个nexus for 3.3 trillion meat to begin generating energy. Energy is used for special abilities. <ul> <li>Inject Larvae has been renamed to Clone Larvae, now costs energy, no longer increases in cost, requires 4 nexus to cast, and has a cap based on your larvae gained per second.</li> <li>There are several other new energy-based abilities which generate meat, larvae, and territory quickly.</li> <li>Cocooning is no longer available until Clone Larvae is unlocked, and its description is now clearer about how it\'s used.</li> </ul> </li> <li><b><a href="https://www.reddit.com/r/swarmsim/comments/2gu9py/upcoming_020_changes_empowered_military_units/">Empowered Military Units</a></b> - you can now upgrade your territory-generating units to a higher tier, increasing both their cost and territory gains and adding a suffix to their name. A tier 2 swarmling - Swarmling II - is more expensive, and stronger, than the final unupgraded military unit. <ul> <li>Cost, and territory per second, for unupgraded military units have both been increased.</li> <li>Expansions are much more expensive.</li> <li>Hatcheries are cheaper.</li> <li>Accomplished Ancestry (larvae from achievements) now has a territory cost, but can be upgraded up to 5 times.</li> </ul> </li> <li>Meat-generating units no longer cost territory.</li> <li>Changed twin upgrade costs for meat-generating units.</li> <li>The last meat-generating unit is a little more expensive.</li> <li>Unit/upgrade costs, whenever possible, now include a link to buy the exact number of missing units. Due to twin upgrade cost changes, the button added for this in 0.1.36 is gone.</li> </ul> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" data-target="#changelog01x" href="javascript:"> Version 0.1.x </a> </h4> </div> <div id="changelog01x" class="panel-collapse collapse"> <div class="panel-body"> <h4>0.1.37 <span>2014/09/25</span></h4> <ul> <li>Minor tutorial text update.</li> <li>Options menu layout changes.</li> <li>0.2.0 prep.</li> </ul> <h4>0.1.36 <span>2014/09/24</span></h4> <ul> <li>Several achievements now require the correct unit count.</li> <li>There\'s now a button to buy exactly the number of units needed for twin upgrades.</li> </ul> <h4>0.1.35 <span>2014/09/23</span></h4> <ul> <li><a target="_blank" href="https://www.reddit.com/r/swarmsim/comments/2hb0lv/020_reset_and_release_date_friday_september_26/">v0.2.0 announcement.</a></li> </ul> <h4>0.1.34 <span>2014/09/23</span></h4> <ul> <li>Title bar icon now shows how many upgrades <span class="glyphicon glyphicon-circle-arrow-up"></span> are waiting.</li> <li>Upgrades now have a progress bar showing how soon you\'ll be able to buy the next upgrade.</li> <li>More preparation for 0.2.0. Getting close!</li> </ul> <h4>0.1.33 <span>2014/09/21</span></h4> <ul> <li>More preparation for 0.2.0\'s launch. Nothing to see yet.</li> </ul> <h4>0.1.32 <span>2014/09/19</span></h4> <ul> <li>Better savestate recovery if another accidental reset happens. <a target="_blank" href="https://www.reddit.com/r/swarmsim/comments/2gupcf/0130_deleted_my_save/ckn9hxi">Read more here</a>.</li> </ul> <h4>0.1.31 <span>2014/09/19</span></h4> <ul> <li>0.1.29 save files work again. Ooops. Unfortunately, if you\'ve bought anything in 0.1.30 your save is gone and unrecoverable - huge mistake on my part, sorry, the reset wasn\'t supposed to happen yet.</li> </ul> <h4>0.1.30 <span>2014/09/18</span></h4> <ul> <li>Minor sidebar formatting fix.</li> <li>Lots more invisible 0.2.0 preparation.</li> </ul> <h4>0.1.29 <span>2014/09/17</span></h4> <ul> <li>Inject Larvae now displays how many larvae will be cloned.</li> <li>Lots of invisible 0.2.0 preparation.</li> </ul> <h4>0.1.28 <span>2014/09/16</span></h4> <ul> <li>Units now have a \'close\' button, to deselect.</li> <li>Invisible backend change, nothing to see here.</li> </ul> <h4>0.1.27 <span>2014/09/16</span></h4> <ul> <li>The options menu allows you to always show numbers in scientific-E notation (like 1.23e8).</li> </ul> <h4>0.1.26 <span>2014/09/15</span></h4> <ul> <li>A few invisible backend changes. Preparing for 0.2.0.</li> <li>Buttons are now clickable on small screens again. Oops.</li> <li>0.1.19 link/warning is gone.</li> <li>Tabs remember their last selected unit.</li> </ul> <h4>0.1.25 <span>2014/09/14</span></h4> <ul> <li>Adjusted a late-game upgrade\'s visibility.</li> <li>Minor export format change.</li> <li>Minor sidebar formatting changes.</li> <li>Bigger clickable area to select a unit.</li> <li>Larva upgrades should now properly appear in their dropdown.</li> <li>Unlocking a new upgrade (for example, buying a nest to unlock twin queens) now makes the upgrade indicator appear properly.</li> </ul> <h4>0.1.24 <span>2014/09/14</span></h4> <ul> <li>Removed 0.1.22\'s grid UI.</li> <li>Wide screens are wider.</li> <li>Another UI overhaul: tabbed sidebar. We\'re getting closer to something I\'m happy with; the UI should be more stable soon - thanks for being patient.</li> <li>If you love scrolling, enable "advanced unit data" in options and look for the all-units tab in the menu.</li> </ul> <h4>0.1.23 <span>2014/09/13</span></h4> <ul> <li>Selecting a unit now continues to show that tab\'s unit table, instead of next/previous navigation.</li> <li>Unit selection no longer tries to fill the entire screen. (Oops.)</li> </ul> <h4>0.1.22 <span>2014/09/12</span></h4> <ul> <li>Added an <a href="#/maingrid">experimental, unpolished new(er) interface</a>. Let me know what you think of it - it might replace tabs.</li> </ul> <h4>0.1.21 <span>2014/09/12</span></h4> <ul> <li>Removed swipe navigation - no more accidentally moving to a different unit because you moved the mouse wrong.</li> <li>You\'ll now see an indicator <span class="glyphicon glyphicon-circle-arrow-up"></span> when you can afford a new upgrade. It should be hidden for unwanted upgrades - looking at a unit/buy-dropdown without buying an available upgrade will make the indicator for that type of upgrade disappear.</li> <li>Reformatted tables a bit.</li> </ul> <h4>0.1.20 <span>2014/09/11</span></h4> <ul> <li>New UI! Units are now grouped into tabs instead of one long sidebar, among other changes.</li> </ul> <h4>0.1.19 <span>2014/09/10</span></h4> <ul> <li>Fixed a bug with larva visibility.</li> <li>Altered some early units\' visibility to better match the tutorial text.</li> </ul> <h4>0.1.18 <span>2014/09/08</span></h4> <ul> <li>Some achievements are unmasked as you get closer to completing them.</li> <li>Fixed achievement link color.</li> <li>Masked achievements ("???") can now be shown/hidden.</li> </ul> <h4>0.1.17 <span>2014/09/07</span></h4> <ul> <li>Achievements!</li> <li>Added some missing unit descriptions.</li> </ul> <h4>0.1.16 <span>2014/09/05</span></h4> <ul> <li>Changelog link moved next to the other links. Maybe it\'ll be clearer that it\'s a link now, and people will actually see this page.</li> <li>Fixed cocoon typo.</li> </ul> <h4>0.1.15 <span>2014/09/05</span></h4> <ul> <li>Added a new larva upgrade, Cocooning, required to buy a new unit, the Cocoon. If you\'re trying to save up lots of larvae, encase them in cocoons for safekeeping so you don\'t accidentally spend them. Cocoons should let you use the "buy max" button without fear.</li> </ul> <h4>0.1.14 <span>2014/09/04</span></h4> <ul> <li>The game\'s non-https address should now load properly in Firefox.</li> <li>The options screen lets you opt out of Google Analytics.</li> </ul> <h4>0.1.13 <span>2014/09/04</span></h4> <ul> <li>You can now specify a much higher number of units to buy at once - it doesn\'t max out at 1 sextillion anymore.</li> </ul> <h4>0.1.12 <span>2014/09/04</span></h4> <ul> <li>Invisible backend changes, nothing to see here.</li> </ul> <h4>0.1.11 <span>2014/09/03</span></h4> <ul> <li>Upgrade costs should have more consistent order.</li> <li>Nicer, more consistent number formatting.</li> <li>The page refreshes automatically when a newer version of the game is detected.</li> </ul> <h4>0.1.10 <span>2014/09/02</span></h4> <ul> <li>Inject Larvae works again. Oops.</li> </ul> <h4>0.1.9 <span>2014/09/01</span></h4> <ul> <li>When buying multiple units, their total cost is shown instead of the cost for a single unit.</li> <li>The cost of the maximum number of units you can afford can now be shown as a percentage. This is off by default, visit the options menu to enable it.</li> </ul> <h4>0.1.8 <span>2014/09/01</span></h4> <ul> <li>Buy-exactly-n is back by popular demand.</li> <li>Units-bought counts include twins again. (Oops.)</li> <li>Top secret voodoo magic.</li> </ul> <h4>0.1.7 <span>2014/08/31</span></h4> <ul> <li>You can now buy multiple upgrades with one click.</li> <li>There are now three buttons for buying units: buy 1, buy 25%, buy max. Buy-exactly-n is gone; it was awkward to use anyway.</li> <li>Removed the buy/select mode from the top. It wasn\'t widely used, and was confusing if accidentally changed.</li> </ul> <h4>0.1.6 <span>2014/08/31</span></h4> <ul> <li>More invisible backend changes, nothing to see here.</li> </ul> <h4>0.1.5 <span>2014/08/31</span></h4> <ul> <li>Unit list is better behaved with long unit names and text selection.</li> <li>Some invisible backend changes.</li> </ul> <h4>0.1.4 <span>2014/08/29</span></h4> <ul> <li>Mid-tier meat-producing units now warn players who want to start their next tier very early. (High-tier units assume you already know better.)</li> <li>Selecting a unit now shows how fast it\'s being produced. Statistics page has this too.</li> </ul> <h4>0.1.3 <span>2014/08/29</span></h4> <ul> <li>Giant Arachnomorphs have a valid price.</li> <li>Any save state with a broken (NaN) value should have it automatically reset to 0.</li> </ul> <h4>0.1.2 <span>2014/08/29</span></h4> <ul> <li>Number formatting improved for numbers below 999 decillion.</li> </ul> <h4>0.1.1 <span>2014/08/28</span></h4> <ul> <li>Column buy/buy-max buttons work.</li> </ul> <h4>0.1.0 <span>2014/08/28</span></h4> <ul> <li>Initial public testing release. Here be dragons.</li> </ul> </div> </div> </div> <!--div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" href="javascript:">\n          Collapsible Group Item #3\n        </a>\n      </h4>\n    </div>\n    <div id="collapseThree" class="panel-collapse collapse">\n      <div class="panel-body">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div--> </div> </div> '),
            a.put("views/character_new.html", '<div ng-if="!user.id"> Loading... </div> <div ng-if="user.id"> <h1>{{user.username}}#{{user.id}}<small ng-if="isSelf"> (self)</small> - New Character</h1> <!--p>{{user.characters.length|number}} characters</p>\n  <ul>\n    <li ng-repeat="character in user.characters">\n      <a href="#/character/{{character.id}}">{{character.name}}</a>\n    </li>\n  </ul--> <form ng-submit="onSubmit()"> <div class="form-group"> <label for="character-name">Character Name</label> <span>(You may change this later)</span> <input id="character-name" type="text" class="form-control" ng-model="form.name"> </div> <div class="form-group"> <div class="radio" ng-repeat="league in leagues.playableList"> <label> <input type="radio" ng-value="league.name" ng-model="form.league"> <strong>{{league.label}}</strong> <p>{{league.desc}}</p> </label> </div> </div> <button type="submit" class="btn btn-primary">Create Character</button> <a ng-href="#/user/{{userSlug}}" class="btn-link btn">Back</a> </form> </div> '), a.put("views/cleartheme.html", "<p>Theme set.</p> "), a.put("views/contact.html", '<tabs></tabs> <h2 class="contact-title"><span><a target="_blank" href="https://www.reddit.com/r/swarmsim">联系模拟虫群的开发者</a></span></h2> <p class="well"><a target="_blank" href="https://www.reddit.com/r/swarmsim/submit?selftext=true">发布</a> 帖子在 <a target="_blank" href="https://www.reddit.com/r/swarmsim">模拟虫群版块</a> 是找到开发者最快的方式! 我读了所有写在那里的东西，即使我不总是回复。</p> <p><a class="btn btn-link" target="_blank" href="/repair">你的模拟虫群标签在浏览器一直处于加载状态吗?</a></p> <p><a class="btn btn-link" target="_blank" href="https://www.reddit.com/r/swarmsim/comments/30ndt6/i_will_no_longer_restore_lost_saved_games/">你丢失了游戏存档？</a></p> <p><small><button class="btn btn-link" data-toggle="collapse" data-target=".collapseEmail">给开发者发邮件?</button></small></p> <div class="collapse collapseEmail well"> <p>如果你在水晶购买上遇到麻烦，或者你正在报告一个可开发的bug，请给我发邮件。</p> <p>对于大多数其他的话题， <b>我大概不会回复的。请在Reddit上发帖。</b></p> <p>模拟虫群在一个人的空闲时间里运行。我喜欢你和你的反馈，我真的很喜欢 - 但邮件是很有压力的，而且比你想象的要花更多的时间。Reddit社区真的很有帮助!</p> <p><a target="_blank" ng-href="{{mailtoUrl()}}">{{emailTo()}}</a></p> <iframe title="Feedback Form" class="freshwidget-embedded-form" id="freshwidget-embedded-form" src="https://swarmsim.freshdesk.com/widgets/feedback_widget/new?widgetType=embedded&formTitle=+&submitTitle=Send+Feedback&submitThanks=Thank+you.+Please+don\'t+expect+a+reply.&screenshot=no" scrolling="no" height="500px" width="100%" frameborder="0"></iframe> </div> '), a.put("views/debug.html", '<div ng-cloak ng-if="!env.isDebugEnabled"> <p title="你没有作弊。不过，好好探索吧!">您找到了调试页面！糟糕的是，它只在开发构建中起作用。</p> </div> <div ng-cloak ng-if="env.isDebugEnabled"> <p title="如果你编辑了html只是为了来看看这个:你是可耻的，你这个肮脏的骗子。">您找到了调试页面！看起来这也是一个开发的构建版本。玩得开心。</p> <div> <button ng-click="session.save()">Save</button> </div> <div> <button ng-click="game.ascend(true)">转生</button> </div> <div> <button ng-click="throwUp()" title="Test exception handler">Test exception</button> <button ng-click="assertFail()" title="Test assertion error">Test assert</button> <button ng-click="error()" title="Test error report">Test error report</button> <button ng-click="achieve()">Test achievement UI</button> </div> <div> numberformat: <input placeholder="int" ng-model="form.numberformat"> == {{form.numberformat | longnum}}; {{form.numberformat | bignum}} </div> <div> <input type="text" ng-model="form.notify.label" ng-init="form.notify.label=\'hihi\'"> <input type="number" size="3" ng-model="form.notify.points" ng-init="form.notify.points=10"> <input type="text" ng-model="form.notify.description" ng-init="form.notify.description=\'haha\'"> <button ng-click="notify.push(form.notify)">通知</button> <button ng-click="notify.shift()">Next</button> queue: {{notify | json}} </div> <div> <a target="_blank" href="http://www.homestarrunner.com/vcr_cheat.html">alter session</a>: <textarea rows="20" cols="80" ng-model="form.session" ng-model-options="{\'default\':500, \'blur\':0}"></textarea> <div><input type="text" ng-model="form.sessionExport" readonly></div> </div> <ul> <li ng-repeat="dump in dumps"> <h4>{{dump.title}}</h4> <code>{{dump.data}}</code> </li> </ul> </div> '), a.put("views/debugapi.html", '<h1>Debug API</h1> <p>Not a computer programmer? Don\'t know what an API is? You\'re most likely lost. <a href="#/">Get me out of here!</a></p> <p>Here you can play around with API calls to the swarmsim server at {{env.saveServerUrl}}. (Unlike the other debug page, this one\'s visible in production because you can\'t cheat with it. It is not a bug.) Have fun!</p> <p>TODO: document available api calls. Until then, <a target="_blank" href="http://github.com/swarmsim/swarm-server-sails/tree/master/config/routes.js">use the source</a>. <a target="_blank" href="http://github.com/swarmsim/swarm-server-sails/tree/master/config/policies.js">This one, too</a>. It\'s mostly REST-style URLs, except for the AuthController and MiscController stuff. </p> <p ng-if="loginApi.user.id">Logged in as: <code>{{loginApi.user|json}}</code>. <a href="javascript:" ng-click="loginApi.logout()">Logout</a></p> <p ng-if="!loginApi.user.id">Not logged in.</p> <hr> <h4>Make an API call</h4> <p><code>window.submitApiCall()</code> works too, but only from this page.</p> <form ng-submit="testApiCall()"> <div class="form-group"> <label>url</label> <input class="form-control" type="text" placeholder="/whoami" ng-model="form.url"> <div><a ng-href="{{env.saveServerUrl}}{{form.url}}" target="_blank">{{env.saveServerUrl}}{{form.url}}</a></div> </div> <div class="form-group"> <label>headers</label> <textarea class="form-control" placeholder="{\'content-type\': \'application/json\', ...}" ng-model="form.headers"></textarea> </div> <div class="form-group"> <label>body</label> <textarea class="form-control" placeholder="{foo=\'bar\', baz=\'quux\', ...}" ng-model="form.data"></textarea> </div> <button class="btn btn-default" ng-class="{disabled:calling}" ng-click="submitApiCall(\'get\')">HTTP GET</button> <button class="btn btn-default" ng-class="{disabled:calling}" ng-click="submitApiCall(\'post\')">HTTP POST</button> </form> <div id="testApiCallResults"> </div> '), a.put("views/decimallegend.html", '<h1>标准十进制后缀</h1> <p>基于 <a target="_blank" href="http://home.kpn.nl/vanadovv/BignumbyN.html">这个列表</a>.</p> <table class="table table-striped"> <tr> <th>值</th> <th>短后缀</th> <th>长后缀</th> </tr> <tr ng-repeat="row in rows"> <td>{{row.string}}</td> <td>{{row.short}}</td> <td>{{row.long}}</td> </tr> </table> '), a.put("views/directive-unit.html", '<div class="desc-icon-resource desc-icon-{{cur.name}} icon-{{cur.name}}" title="{{cur.unittype.lol}}"></div> <unitdesc title="{{cur.unittype.lol}}" unit="cur"></unitdesc> <p> <ng-pluralize ng-if="!cur.capValue()" count="cur.count().toNumber()" when="{\'0\':\'你还没有 {{cur.unittype.plural}}.\',\n           \'one\':\'你拥有 1 {{cur.unittype.label}}。\',\n           \'other\':\'你拥有 {{cur.count()|longnum}} {{cur.unittype.plural}}。\'}"> </ng-pluralize> <div ng-if="cur.prod.length"> <p> 每只生产 <span ng-repeat="(name, val) in cur.eachProduction()"> <span ng-if="!$first && !$last">, </span><span ng-if="!$first && $last"> 和 </span> <span>{{val.times(options.getVelocityUnit({prod:cur}).mult)|longnum:2}} <ng-pluralize count="val" when="{\'one\':game.unit(name).unittype.label, \'other\':game.unit(name).unittype.plural}"></ng-pluralize></span> </span> 每{{options.getVelocityUnit({prod:cur}).label}}。 <span ng-if="cur.hasStat(\'prod\', 1)">(&times;{{cur.stat(\'prod\')|bignum:10}} 奖励)</span> </p> <p ng-if="cur.count().greaterThan(0)"> 它们总计生产 <span ng-repeat="(name, val) in cur.totalProduction()"> <span ng-if="!$first && !$last">, </span><span ng-if="!$first && $last"> 和 </span> <span>{{val.times(options.getVelocityUnit({prod:cur}).mult)|longnum:2}} <ng-pluralize count="val" when="{\'one\':game.unit(name).unittype.label, \'other\':game.unit(name).unittype.plural}"></ng-pluralize></span> </span>每{{options.getVelocityUnit({prod:cur}).label}}. </p> </div> <div ng-if="cur.showparent && cur.showparent.prod.length"> 你获得 <!--span ng-repeat="(name, val) in cur.showparent.totalProduction()">\n      <span ng-if="!$first && !$last">, </span><span ng-if="!$first && $last"> 和 </span>\n      <span>{{val|longnum:2}} <ng-pluralize count="val" when="{\'one\':game.unit(name).unittype.label, \'other\':game.unit(name).unittype.plural}"></ng-pluralize></span>\n    </span--> <span>{{cur.velocity().times(options.getVelocityUnit({unit:cur}).mult)|longnum:2}} {{cur.unittype.plural}}</span> 每{{options.getVelocityUnit({unit:cur}).label}}。 <span ng-if="cur.showparent.hasStat(\'prod\', 1)">(&times;{{cur.showparent.stat(\'prod\')|bignum:10}} 奖励)</span> <span ng-if="cur.capValue()"> At 100%, you\'ll stop earning {{cur.unittype.label}}. </span> </div> <div ng-if="!cur.showparent && cur.velocity() > 0"> 你获得 <!-- TODO why isn\'t ng-pluralize working here? Switching units keeps the same label. --> <span>{{cur.velocity().times(options.getVelocityUnit({unit:cur}).mult)|longnum:2}} {{cur.unittype.plural}}</span> 每{{options.getVelocityUnit({unit:cur}).label}}。 <span ng-if="cur.capValue()"> 当达到 100% 时, 会停止获得{{cur.unittype.label}}。 </span> </div> <div class="clear-afterdesc"></div> <div ng-if="!cur.type.unbuyable && !cur.type.isBuyHidden && cur.cost.length && cur.isBuyButtonVisible()"> <hr> <buyunit-input unit="cur"></buyunit-input> </div> <div ng-if="(visibleUpgrades = (cur.upgrades.byClass.upgrade | filter:filterVisible)).length > 0"> <hr> <h4>升级</h4> <ul class="list-unstyled"> <li ng-repeat="upgrade in visibleUpgrades"> <h5 ng-class="{\'text-muted\':upgrade.isManuallyHidden()}"> {{upgrade.type.label}} <span ng-if="upgrade.type.maxlevel != 1">({{upgrade.count()+""|number}})</span> <label ng-show="options.showAdvancedUnitData() || upgrade.isManuallyHidden()" class="form-inline pull-right" style="white-space:nowrap" title="Show upgrade notifier?"> <span class="glyphicon glyphicon-circle-arrow-up" ng-class="{\'text-muted\':!upgrade.isNewlyUpgradable()}"></span> <!--input type="checkbox" class="checkbox-inline" style="margin:0" ng-model="watched[upgrade.name]" ng-change="updateWatched(upgrade)"--> <select ng-model="watched[upgrade.name]" convert-to-number ng-change="updateWatched(upgrade)" class="form-control input-sm" style="display:inline"> <option value="-1">隐藏升级</option> <option value="0">永远不要通知</option> <option value="1">可买时通知</option> <option value="2">2&times; 成本时通知</option> <option value="4">4&times; 成本时通知</option> </select> </label> </h5> <div ng-hide="upgrade.isManuallyHidden()"> <upgradedesc title="{{upgrade.type.lol}}" upgrade="upgrade"></upgradedesc> <p> <span ng-if="upgrade.type.maxlevel == 1">此</span><span ng-if="upgrade.type.maxlevel != 1">下一次</span>升级花费 <!-- special-case: show buybuttons only for twin upgrades. a bit hacky, but for other upgrades it\'s a bad idea. TODO: move to spreadsheet. --> <cost costlist="upgrade.totalCost()" buybuttons="upgrade.name.indexOf(\'twin\') >= 0"></cost> </p> <div class="progress" style="margin-bottom:0"> <div class="progress-bar" role="progressbar" aria-valuenow="{{upgrade.costMetPercent().times(1000)}}" aria-valuemin="0" aria-valuemax="1000" ng-style="{width:upgrade.costMetPercent().times(100)+\'%\'}"> {{upgrade.costMetPercent()|percent:{floor:true} }} {{estimateUpgradeSecs(upgrade)|duration}} </div> </div> <buyupgrade upgrade="upgrade" index="$index"></buyupgrade> </div> <div style="clear:right"></div> </li> </ul> </div> <div ng-if="(visibleAbilities = (cur.upgrades.byClass.ability | filter:filterVisible)).length > 0"> <hr> <h4>能力</h4> <ul class="list-unstyled"> <li ng-repeat="abil in visibleAbilities"> <h5 ng-class="{\'text-muted\':abil.isManuallyHidden()}"> {{abil.type.label}} <div class="pull-right"> <input type="checkbox" class="checkbox-inline" style="margin:0" ng-model="watched[abil.name]" ng-change="updateWatchedAbility(abil)"> </div> <div style="clear:right"></div> </h5> <div ng-hide="abil.isManuallyHidden()"> <upgradedesc title="{{abil.type.lol}}" upgrade="abil"></upgradedesc> <p> 此能力花费 <cost costlist="abil.totalCost()" noperiod="true"></cost> 每次使用。 </p> <div class="progress" style="margin-bottom:0"> <div class="progress-bar" role="progressbar" aria-valuenow="{{abil.costMetPercent().times(1000)}}" aria-valuemin="0" aria-valuemax="1000" ng-style="{width:abil.costMetPercent().times(100)+\'%\'}"> {{abil.costMetPercent()|percent:{floor:true} }} {{estimateUpgradeSecs(abil)|duration}} </div> </div> <buyupgrade upgrade="abil" index="$index"></buyupgrade> </div> </li> </ul> </div> '), a.put("views/importsplash.html", '<tabs></tabs> <br> <p class="alert alert-info">游戏已导入，但尚未保存。</p> <div ng-if="isKongregate"> <button class="btn btn-primary" ng-click="click()">Save Game and Return to Kongregate</button> </div> <div ng-if="!isKongregate"> <button class="btn btn-primary" ng-click="click()">Save Game and Continue Playing</button> </div> '), a.put("views/login.html", '<!--form role="form" action="{{action}}" method="post"--> <form role="form" ng-submit="submit()" method="post"> <input type="text" name="identifier" ng-model="form.identifier" placeholder="Username or Email"> <input type="password" name="password" ng-model="form.password" placeholder="Password"> <button type="submit">Sign in</button> </form> '), a.put("views/main.html", '<tabs cur="cur.tab"></tabs> <div class="tab-content"> <!-- without this, dropdown creates vertical scrollbar due to table-responsive. we want horiz scrollbars on small screens, not vert on big screens! --> <div class="tab-pane active table-responsive" style="padding-bottom: 250px"> <table class="table unit-table table-hover" style="width:auto; float:left"> <!-- filthy hack to show achievements on larvae page --> <tr ng-if="cur.tab.name == \'larva\' && game.upgrade(\'achievementbonus\').count().greaterThan(0)"> <td class="upgrade-indicator"></td> <td class="titlecase"> <a href="#/achievements"> <span class="list-icon-resource icon-achievements"></span> 成就点 </a></td> <td>{{game.achievementPoints()|bignum:0}}</td> <td>+{{game.upgrade(\'achievementbonus\').calcStats().prod|percent:{plusOne:true} }} 幼虫</td> </tr> <tr ng-repeat="unit in cur.tab.sortUnits() | filter:filterVisible track by unit.name"> <td class="upgrade-indicator" ng-click="click(unit)"> <span ng-if="unit.isNewlyUpgradable()" title="New upgrade available" class="animif glyphicon glyphicon-circle-arrow-up"></span> </td> <td ng-click="click(unit)"> <span class="list-icon-resource icon-{{unit.name}}"></span> <a ng-href="#{{cur.tab.url(unit)}}" class="titlecase unselectedlist-label label-{{unit.name}}"> <span class="label-label">{{unit.unittype.label}}</span> <span class="label-suffix">{{unit.suffix}}</span> </a> </td> <td ng-click="click(unit)"> {{unit.count()|bignum:0}} </td> <td ng-click="click(unit)"> <span ng-if="!unit.velocity().isZero()"> +{{unit.velocity().times(options.getVelocityUnit({unit:unit}).mult)|bignum:2}}/{{options.getVelocityUnit({unit:unit}).name}} </span> <span ng-if="unit.velocity().isZero() && cur.tab.name == \'territory\' && !val.isZero()" ng-repeat="(name, val) in unit.totalProduction()"> +{{val.times(options.getVelocityUnit({unit:name}).mult)|bignum:2}}/{{options.getVelocityUnit({unit:name}).name}}</span> </td> <td ng-if="options.showAdvancedUnitData()"> <buyunitdropdown unit="unit" num="1"></buyunitdropdown> </td> </tr> </table> </div> </div> '), a.put("views/news-archive.html", '<tabs></tabs> <div ng-if="state === \'loading\'"> <img src="images/ajax-loader.e431d904.gif"> </div> <div ng-if="state === \'error\'" class="alert alert-danger"> {{error.message || error}} </div> <div ng-if="state === \'success\'"> <ul ng-if="news.length" class="list-unstyled"> <li ng-repeat="news in news track by news.NewsId" class="well"> <h3>{{news.title}} <small>{{news.date.format(\'LLLL\')}}</small></h3> <div ng-bind-html="news.trustedHtml"></div> </li> </ul> <div ng-if="!news.length">No recent news!</div> </div> '), a.put("views/news-modal.html", '<div ng-show="state === \'success\' && !!news.length" class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">Swarm Simulator News</h4> </div> <div class="modal-body"> <ul class="list-unstyled"> <li ng-repeat="news in news track by news.id" class="well"> <h3>{{news.title}} <small>{{news.date.format(\'LLLL\')}}</small></h3> <div ng-bind-html="news.trustedHtml"></div> </li> </ul> </div> <div class="modal-footer"> <a href="#/news-archive" ng-click="close()">News Archive</a> </div> </div> </div> </div> '), a.put("views/options.html", '<tabs></tabs> <div class="container"> <h1>选项</h1> <div class="form-group"> <label class="control-label"> <span class="glyphicon glyphicon-eye-open"></span> 显示高级单位数据 <input type="checkbox" ng-init="form.showadvancedunitdata=options.showAdvancedUnitData()" ng-model="form.showadvancedunitdata" ng-change="options.showAdvancedUnitData(form.showadvancedunitdata)"> </label> <p>为每个单元显示更详细的数字，并允许在每次升级通知出现时进行自定义。</p> </div> <div class="form-group" ng-if="isKongregate()"> <div><label class="control-label"><span class="glyphicon glyphicon-resize-vertical"></span> Kongregate scrolling style</label></div> <label style="font-weight:normal"><input type="radio" ng-model="form.scrolling" value="none" ng-change="options.scrolling(form.scrolling)" ng-init="form.scrolling=options.scrolling()">Browser default</label> <label style="font-weight:normal"><input type="radio" ng-model="form.scrolling" value="resize" ng-change="options.scrolling(form.scrolling)">Resize automatically, no inner scrollbar</label> <label style="font-weight:normal"><input type="radio" ng-model="form.scrolling" value="lockhover" ng-change="options.scrolling(form.scrolling)"><span class="envalert">(beta)</span> Lock mousewheel scrolling</label> <p ng-if="form.scrolling==\'lockhover\'">This makes mousewheel scrolling only affect Swarm Simulator\'s scrollbar, instead of the whole Kongregate page, while your mouse is over the game. We\'re still testing this option - if it\'s broken for you, <a href="#/contact">please report it</a>!</p> <p ng-if="options.isScrollingChangedFromResizeSincePageLoad && form.scrolling!=\'resize\'">The game will widen to fill your screen when you refresh the page.</p> <p>Minimum size: <input ng-model="form.iframeMinSize.x" type="number" min="0" max="99999" ng-change="options.iframeMinX(form.iframeMinSize.y)">&times; <input ng-model="form.iframeMinSize.y" type="number" min="0" max="99999" ng-change="options.iframeMinY(form.iframeMinSize.y)"> <button class="btn btn-default" ng-class="{disabled:isDefaultMinSize()}" ng-click="resetMinSize()">Reset size</button> </p> <p ng-if="form.scrolling!=\'resize\' && !isDefaultMinSize()"> Swarm Simulator can\'t automatically stretch to fill the width of your screen when a minimum size is set. </p> </div> <div class="form-group"> <label class="control-label" for="fps"><span class="glyphicon glyphicon-film"></span> 每秒最大帧率</label> <div><label><input type="checkbox" ng-init="form.fpsAuto=options.fpsAuto()" ng-model="form.fpsAuto" ng-change="options.fpsAuto(form.fpsAuto)"> 自动</label></div> <input type="range" class="form-control" ng-disabled="!!form.fpsAuto" id="fps" min="1" max="60" step="1" ng-init="form.fps=options.fps()" ng-model="form.fps" ng-change="setFpsSlider(form.fps)"> <!--button ng-click="options.reset(\'fps\');form.fps=options.fps()">Reset</button--> <p>当前帧率： <input type="number" min="0" ng-disabled="!!form.fpsAuto" ng-init="form.fpsNum=options.fps()" ng-model="form.fpsNum" ng-change="options.fps(form.fpsNum)"> 帧。平均帧率： {{options.fpsSleepMillis()|number:0}}毫秒</p> <p>如果游戏拖慢了你的电脑，那就降低设置。这并不影响你玩游戏;你的单位不会更快或更慢地生产资源。</p> </div> <div class="form-group"> <div><label class="control-label"><span class="glyphicon glyphicon-barcode"></span> 数字格式</label></div> <label style="font-weight:normal"><input type="radio" ng-model="form.notation" value="standard-decimal" ng-change="options.notation(form.notation)">标准十进制 <!--(<a target="_blank" href="http://home.kpn.nl/vanadovv/BignumbyN.html">legend</a>)--> (<a href="#/decimallegend">介绍</a>) </label> <label style="font-weight:normal"><input type="radio" ng-model="form.notation" value="scientific-e" ng-change="options.notation(form.notation)" ng-init="form.notation=options.notation()">科学计数法</label> <label style="font-weight:normal"><input type="radio" ng-model="form.notation" value="hybrid" ng-change="options.notation(form.notation)">混合格式</label> <label style="font-weight:normal"><input type="radio" ng-model="form.notation" value="engineering" ng-change="options.notation(form.notation)">工程格式</label> <p>示例： {{123456789|longnum}}, {{123456789|bignum}}, {{123456789e+30|longnum}}, {{123456789e+30|bignum}}</p> </div> <div class="form-group"> <div><label class="control-label"><span class="glyphicon glyphicon-dashboard" ng-init="form.velocityUnit=options.velocityUnit().name"></span> 速度格式</label></div> <label ng-repeat="vu in options.VELOCITY_UNITS.list" style="font-weight:normal" class="titlecase"> <input type="radio" ng-model="form.velocityUnit" value="{{vu.name}}" ng-change="options.velocityUnit(form.velocityUnit)">{{vu.plural}} </label> <p>示例： {{10 * options.velocityUnit().mult|longnum}} 肉/{{options.velocityUnit().name}}</p> </div> <div class="form-group"> <div><label class="control-label"><span class="glyphicon glyphicon-time"></span> 时间格式</label></div> <label style="font-weight:normal"><input type="radio" ng-model="form.durationFormat" value="abbreviated" ng-change="options.durationFormat(form.durationFormat)">精确</label> <label style="font-weight:normal"><input type="radio" ng-init="form.durationFormat=options.durationFormat()" ng-model="form.durationFormat" value="human" ng-change="options.durationFormat(form.durationFormat)">大概</label> <!--label style="font-weight:normal"><input type="radio" ng-model="form.durationFormat" value="full" ng-change="options.durationFormat(form.durationFormat)" ng-init="form.notation=options.notation()">完整</input></label--> <p>示例： <span ng-repeat="sample_duration in duration_examples">{{sample_duration |duration}}<span ng-if="!$last">, </span></span> </p> </div> <div class="form-group"> <div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"> <span class="glyphicon glyphicon-picture"></span> 主题 <span class="envalert">(测试)</span> <span class="caret"></span> </button> <ul class="dropdown-menu scrollable-menu" role="menu" aria-labelledby="themeMenu"> <li ng-repeat="theme in options.constructor.THEMES.list" role="presentation" style="list-style-type:none"> <a role="menuitem" tabindex="-1" class="titlecase" ng-click="setTheme(theme.name)" href="javascript:">{{theme.label}}</a> </li> <li role="presentation" class="divider" style="list-style-type:none"></li> <li role="presentation" style="list-style-type:none"> <a role="menuitem" tabindex="-1" class="titlecase" ng-click="selectCustomTheme()" href="javascript:">自定义样式</a> </li> <li role="presentation" style="list-style-type:none"> <a role="menuitem" tabindex="-1" href="javascript:" aria-expanded="false" aria-controls="themeExtra" ng-click="form.isThemeExtraOpen=true">附加样式(高级)</a> </li> </ul> </div> <p ng-if="!form.isCustomTheme">当前主题: <a ng-href="{{options.theme().credit}}" target="_blank" class="titlecase">{{options.theme().label}}</a></p> <div ng-if="form.isCustomTheme"> <p>CSS文件链接: (<a href="#/cleartheme">重置</a>)</p> <div class="input-group"> <input type="text" class="form-control" ng-model="form.customThemeUrl"> <span class="input-group-btn"><button class="btn btn-default" ng-click="setCustomTheme(form.customThemeUrl)">Set theme</button></span> </div> </div> <div> <div class="collapse" ng-class="{in:form.isThemeExtraOpen}" id="themeExtra"> <div class="well" ng-class="{\'has-success\':!!form.themeExtraSuccess,\'has-error\':!!form.themeExtraError,\'has-feedback\':!!form.themeExtraSuccess || !!form.themeExtraError}"> <button class="form-control btn btn-danger" ng-click="form.themeExtra = \'\'; themeExtra(form.themeExtra)">清除所有额外的样式/图形</button> <p>这里可以输入一些额外的CSS。 {{form.themeExtra.length|number}}/1,000 字符。 请使用 <code>@import</code> 为了节省空间。</p> <textarea class="form-control" ng-model="form.themeExtra" ng-change="clearThemeExtra()"></textarea> <button class="form-control btn btn-primary" ng-click="themeExtra(form.themeExtra)">确定</button> <p ng-show="form.themeExtraError" class="text-danger">{{form.themeExtraError}}</p> </div> </div> </div> </div> <www-playfab></www-playfab> <kongregate-playfab></kongregate-playfab> <div ng-class="{\'form-group\':true,\'has-success\':!!imported.success,\'has-error\':!!imported.error,\'has-feedback\':!!imported.success || !!imported.error}"> <label class="control-label" for="export"><span class="glyphicon glyphicon-download-alt"></span> 导入/导出存档数据</label> <input type="text" class="form-control" id="export" ng-init="form.export=session.exportSave()" ng-model="form.export" ng-change="importSave(form.export)" ng-click="select($event)"> <span ng-show="!!imported.success" class="glyphicon glyphicon-ok form-control-feedback"></span> <span ng-show="!!imported.error" class="glyphicon glyphicon-remove form-control-feedback"></span> <div class="alert alert-warning" ng-cloak ng-if="isKongregate() && !game.session.state.kongregate"> 这些保存的数据是从Kongregate外部导入的。你仍然可以在Kongregate上玩，但你不会出现在Kongregate的排行榜上。在Kongregate上开始一个新的游戏，让它有资格进入排行榜。 </div> <p>点击全选上面的文字并按(Ctrl + C)复制你现在的存档，保存到安全的地方 。点击全选文字并粘贴(Ctrl + V)你的存档，以导入你之前的存档。</p> <p>对于导入的存档数据来说，比导出时的数据有更多的单位是很正常的。因为即使在导出数据之后(在导入数据之前)，您的虫群仍然会继续工作（离线数据）。</p> </div> <div> <p><a class="" data-toggle="collapse" data-target="#saveDetails" href="javascript:" aria-expanded="false" aria-controls="saveDetails"> 模拟虫群的存档保存在哪里？ </a></p> <div class="collapse" id="saveDetails"> <div class="well"> <p>模拟虫群的存档保存在你的浏览器的本地存储、cookies, 和 Flash (SWF) 存储里面。 你保存的游戏将会被加载，如果它在任何一个源中被发现。这样做是为了避免意外地丢失您保存的数据;它不是为了跟踪你或者侵犯你的隐私。下面的“删除所有保存的数据”按钮将清除所有三个存储位置的游戏数据。</p> <p ng-repeat="detail in savedDataDetails"> <span class="titlecase">{{detail.name}}</span> storage: <span ng-if="detail.exists">{{detail.size}} chars</span> <span ng-if="!detail.exists">空的</span> </p> </div> </div> </div> <div class="form-group"> <button class="resetalert" ng-click="confirmReset()"> <span class="glyphicon glyphicon-warning-sign"></span> 删除所有游戏进度并重新开始 </button> <p title="{{game.dateStarted().toString()}}">你开始玩游戏 {{game.momentStarted().fromNow()}}<span ng-if="env.showSkipped && game.totalSkippedMillis() > 0"> (skipped an extra {{game.totalSkippedDuration().humanize()}})</span>.</p> </div> <div class="form-group"> <label class="control-label"><span class="glyphicon glyphicon-cloud-upload"></span> 分析</label> <p>模拟虫群, 和很多网站一样，我们用谷歌来分析你在玩的时候的行为。我们使用这些数据来改进游戏。 你可以选择 <a target="_blank" href="https://tools.google.com/dlpage/gaoptout" title="我曾想过要让分析来追踪有多少人点击了这个链接，但我决定不这么做。">禁用谷歌分析</a>。</p> <p><a target="_blank" href="http://www.google.com/policies/privacy/partners/">当你使用我们合作伙伴的网站或应用时，谷歌是如何使用数据的？</a></p> </div> </div> '), a.put("views/statistics.html", '<tabs></tabs> <div class="container statistics"> <h1>成就</h1> <div ng-repeat="unit in game.unitlist()">{{unit.label}}</div> <div class="table-responsive" ng-init="unitlist = (game.unitlist() | filter:showStats)"> <table class="table" ng-if="unitlist.length > 0"> <tr> <th>单位</th> <th>第一次购买</th> <th>点击次数</th> <th>手动购买</th> <th>双胞胎</th> </tr> <tbody> <tr ng-repeat="unit in unitlist" ng-init="ustats = unitStats(unit)"> <td class="name">{{unit.unittype.label}}</td> <td>{{ustats.elapsedFirstStr}}</td> <td>{{ustats.clicks | bignum}}</td> <td>{{ustats.num | bignum}}</td> <td>{{ustats.twinnum | bignum}}</td> </tr> </tbody> </table> <div ng-if="unitlist.length == 0"> 没有购买任何单位。 </div> </div> <div class="table-responsive" ng-init="upgradelist = (game.upgradelist() | filter:hasUpgradeStats)"> <table class="table" ng-if="upgradelist.length > 0"> <tr> <th>升级</th> <th>第一次购买</th> <th>点击次数</th> <th>总购买数量</th> </tr> <tbody> <tr ng-repeat="upgrade in upgradelist" ng-init="ustats = upgradeStats(upgrade)"> <td class="name">{{upgrade.type.label}}</td> <td>{{ustats.elapsedFirstStr}}</td> <td>{{ustats.clicks | number}}</td> <td>{{ustats.num | number}}</td> </tr> </tbody> </table> <div ng-if="upgradelist.length == 0"> 没有购买升级。 </div> </div> <dl class="dl-horizontal"> <dt>存档大小</dt> <dd>{{session.exportSave().length | number}} 64位字符</dd> <dt>开始玩游戏的日期</dt> <dd>{{game.momentStarted().fromNow()}} - {{game.dateStarted().toString()}}</dd> <dt>最近一次转生</dt> <dd ng-if="game.unit(\'ascension\').count().isZero()">无</dd> <dd ng-if="!game.unit(\'ascension\').count().isZero()">{{game.session.state.date.restarted|momentFromNow}} - {{game.session.state.date.restarted.toString()}}</dd> </dl> </div> '),
            a.put("views/tabs.html", '<ul ng-if="!isOffline" class="nav nav-tabs" role="tablist"> <li ng-repeat="tab in tabs.list | filter:filterVisible" class="tab-resource tab-{{name}}" ng-class="{active: cur.name === tab.name}"> <a ng-href="#{{tab.url()}}" role="tab"> <div class="tab-icon-resource tab-icon-{{tab.name}} icon-{{tab.name}}"></div> <!-- TODO why isnt\' pluralize working? --> {{tab.leadunit.count()|bignum:0}} <span class="tab-label label-{{tab.leadunit.name}}"> <span class="label-label">{{tab.leadunit.unittype.plural}}</span> <span class="label-suffix"></span> </span> <span ng-if="tab.leadunit.capValue()">({{tab.leadunit.capPercent()|percent:{floor:true,places:0} }})</span> <!--br>{{tab.unit.velocity()|bignum:0}}/秒--> <!--TODO: ewww, a special case--> <span ng-if="tab.name==\'mutagen\'">(+{{game.unit(\'premutagen\').count()|bignum:0}})</span> <span ng-if="tab.isNewlyUpgradable()" title="New upgrade available" class="animif glyphicon glyphicon-circle-arrow-up"></span> </a> </li> <li role="tab" class="dropdown" ng-class="{active: !cur}"> <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:"> 更多... <span class="caret"></span> </a> <ul class="dropdown-menu" dropdown-menu-auto-direction role="menu"> <li role="presentation" ng-class="{disabled:game.availableAutobuyUpgrades() <= 0}"><a role="menuitem" tabindex="-1" href="javascript:" ng-click="buyAllUpgrades()"> <span class="glyphicon glyphicon-circle-arrow-up"></span> 购买全部 {{game.availableAutobuyUpgrades().length | number}} 升级<span ng-if="game.availableAutobuyUpgrades().length !== 1"></span> </a></li> <li role="presentation" ng-class="{disabled:game.availableAutobuyUpgrades(0.25) <= 0}"><a role="menuitem" tabindex="-1" href="javascript:" ng-click="buyCheapestUpgrades()"> <span class="glyphicon glyphicon-upload"></span> 购买最便宜的 {{game.availableAutobuyUpgrades(0.25).length | number}} 升级<span ng-if="game.availableAutobuyUpgrades(0.25).length !== 1"></span> </a></li> <li role="presentation" class="divider"></li> <li ng-class="{disabled:!isUndoable()}" role="presentation"> <a role="menuitem" tabindex="-1" href="javascript:" ng-click="undo()"> <span class="glyphicon glyphicon-share-alt mirror"></span> 撤销 <span ng-if="isUndoable()">({{undoLimitSeconds - secondsSinceLastAction() | number:0}} 秒)</span> </a> </li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/options"> <span class="glyphicon glyphicon-cog"></span> 选项 </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/achievements"> <span class="glyphicon glyphicon-ok"></span> 成就 </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/statistics"> <span class="glyphicon glyphicon-stats"></span> 统计 </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/changelog"> <span class="glyphicon glyphicon-book"></span> 更新日志 </a></li> <!--li role="presentation"><a role="menuitem" tabindex="-1" href="#/news-archive">\n        <span class="glyphicon glyphicon-bullhorn"></span> 新闻\n      </a></li--> <li role="presentation"><a role="menuitem" tabindex="-1" href="http://reddit.com/r/swarmsim" target="_blank"> <span class="glyphicon glyphicon-user"></span> 社区 </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/contact"> <span class="fa fa-comment"></span> 发送反馈 </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/contact?error"> <span class="fa fa-bug"></span> 报告Bug </a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="#/tab/all"> <span class="glyphicon glyphicon-list-alt"></span> 显示所有单位 </a></li> </ul> </li> </ul> '), a.put("views/unit.html", '<tabs cur="cur.tab"></tabs> <div class="tab-content"> <div class="tab-pane active row"> <!-- we want the sidebar on the left on large screens, but "sidebar" on the bottom on phones.\n         table plus pull-right makes most of the page unclickable for some reason, so \n         individual pull/push offsets for each screen size are needed. --> <div class="col-lg-9 col-md-8 col-sm-7 col-lg-push-3 col-md-push-4 col-sm-push-5"> <ul class="nav nav-pills nav-justified text-nowrap visible-xs"> <li><a ng-href="#/unit/{{cur.unit.prev.unittype.slug}}" ng-if="cur.unit.prev && cur.unit.prev.isVisible()"> <span class="glyphicon glyphicon-chevron-left"></span> {{cur.unit.prev.count() | bignum:0}} {{cur.unit.prev.unittype.plural}} {{cur.unit.prev.suffix}} <span class="prev-icon-resource icon-{{cur.unit.prev.name}}"></span> </a></li> <li><a ng-href="#/unit/{{cur.unit.next.unittype.slug}}" ng-if="cur.unit.next && cur.unit.next.isVisible()"> <span class="next-icon-resource icon-{{cur.unit.next.name}}"></span> {{cur.unit.next.count() | bignum:0}} {{cur.unit.next.unittype.plural}} {{cur.unit.next.suffix}} <span class="glyphicon glyphicon-chevron-right"></span> </a></li> </ul> <a ng-href="#{{cur.tab.url(false)}}" type="button" class="close pull-right btn"><span aria-hidden="true">&times;</span><span class="sr-only">关闭</span></a> <h3><a class="selected-label label-{{cur.unit.name}}" ng-href="#{{cur.tab.url(false)}}"> <span class="label-label">{{cur.unit.unittype.label}}</span><span class="label-suffix"> {{cur.unit.suffix}}</span> </a></h3> <unit cur="cur.unit"></unit> </div> <div class="col-lg-3 col-md-4 col-sm-5 col-lg-pull-9 col-md-pull-8 col-sm-pull-7"> <table class="table unit-table table-hover"> <!-- filthy hack to show achievements on larvae page --> <tr ng-if="cur.tab.name == \'larva\' && game.upgrade(\'achievementbonus\').count() > 0"> <td class="upgrade-indicator"></td> <td class="titlecase"> <a href="#/achievements" class="unit-sidebar"> <span class="list-icon-resource icon-achievements"></span> <div class="pull-left">成就点</div> <div class="unit-count">{{game.achievementPoints()|bignum:0}}</div> </a> </td> </tr> <tr ng-repeat="unit in cur.tab.sortUnits() | filter:filterVisible track by unit.name" ng-class="{active:unit.name===cur.unit.name}" ng-click="click(unit)"> <td class="upgrade-indicator"> <span ng-if="unit.isNewlyUpgradable()" title="New upgrade available" class="animif glyphicon glyphicon-circle-arrow-up"></span> </td> <td class="titlecase"> <a href="#/tab/{{cur.tab.name}}/unit/{{unit.unittype.slug}}" class="unit-sidebar"> <span class="list-icon-resource icon-{{unit.name}}"></span> <div class="pull-left list-label label-{{unit.name}}"> <span class="label-label">{{unit.unittype.label}}</span> <span class="label-suffix">{{unit.suffix}}</span> </div> <div class="unit-count"> {{unit.count()|bignum:0}} <span ng-if="unit.capValue()">({{unit.capPercent()|percent:{floor:true} }})</span> </div> </a> </td> </tr> </table> </div> </div> </div> '), a.put("views/user.html", '<div ng-if="!user.id"> Loading... </div> <div ng-if="user.id"> <h1>{{user.username}}#{{user.id}} <small ng-if="isSelf"> (self)</small> <small>{{characters.length|number}} characters</small> </h1> <p ng-if="isSelf"> <a ng-href="#/user/{{userSlug}}/character/new" class="btn btn-default"><!--span class="fa fa-user-plus"--><span class="glyphicon glyphicon-plus"></span> Create a New Character</a> <a class="btn btn-default disabled"><span class="glyphicon glyphicon-import"></span> Import Open League Character (TODO)</a> <a class="pull-right btn btn-default disabled"><span class="glyphicon glyphicon-cog"></span> 选项 (待办事项)</a> </p> <ul class="list-unstyled"> <li ng-repeat="character in characters" class="well"> <p> <a ng-class="{disabled:character.league.isPlayable}" href="#/character/{{character.id}}">{{character.name}}</a> - {{character.league.label}}. Last played {{character.updatedAt.fromNow()}}. <span ng-if="character.deleted">DELETED</span> <span class="pull-right" ng-if="isSelf"> <button ng-if="character.league.name == \'open\'" ng-click="onDupe(character)" class="btn btn-default"><span class="fa fa-copy"></span> Duplicate</button> <button ng-if="character.league.name == \'open\'" class="btn btn-default disabled"><span class="glyphicon glyphicon-export"></span> Export</button> <button ng-click="onDelete(character)" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span> Delete</button> </span> </p> <p> <span ng-if="character.state.unittypes.ascension > 0">{{character.state.unittypes.ascension| bignum}} ascensions,</span> <span ng-if="character.state.unittypes.ascension > 0 || character.state.unittypes.nexus > 0">{{character.state.unittypes.nexus | bignum}} nexus,</span> {{character.state.upgrades.hatchery || 0 | bignum}} hatcheries, {{character.state.upgrades.expansion || 0 | bignum}} expansions. </p> <!--a ng-href="#/character/{{character.id}}" class="btn btn-default">Play</a--> </li> </ul> </div> '), a.put("views/playfab/auth.html", '<ul class="nav nav-tabs"> <li role="presentation" ng-class="{active:active===\'login\'}"><a href="javascript:" ng-click="setActive(\'login\')">登录</a></li> <li role="presentation" ng-class="{active:active===\'signup\'}"><a href="javascript:" ng-click="setActive(\'signup\')">注册</a></li> <li role="presentation" ng-class="{active:active===\'forgot\'}"><a href="javascript:" ng-click="setActive(\'forgot\')">忘记密码</a></li> </ul> <div ng-show="active===\'login\'" ng-include="\'views/playfab/login.html\'"></div> <div ng-show="active===\'signup\'" ng-include="\'views/playfab/signup.html\'"></div> <div ng-show="active===\'forgot\'" ng-include="\'views/playfab/forgot.html\'"></div> '), a.put("views/playfab/forgot.html", '<div class="form-group"> <label for="playfab-email">邮箱</label> <input type="text" name="playfab-email" ng-model="form.email" class="form-control"> <div>{{error.email}}</div> </div> <div ng-if="forgotSuccess">密码恢复邮件已发送。</div> <div>{{error.main}}</div> <button type="submit" class="btn btn-info form-control" ng-click="runForgot()">发送恢复邮件</button> '), a.put("views/playfab/kongregate.html", '<div> <div><label class="control-label"><img src="/images/badge16x16K.b088c361.gif" width="16" height="16" alt="Kongregate logo"> 与其他设备同步/保存数据 <span class="envalert">(c\测试)</span></label></div> <div ng-if="isGuest()"><a href="javascript:" ng-click="api.showSignInBox()">Sign in to Kongregate to save your game to Swarm Simulator\'s servers.</a></div> <div ng-if="!isGuest()"> <p>Hi {{api.getUsername()}}! Save your game to PlayFab using your Kongregate account.</p> <div><label><input type="checkbox" ng-init="form.autopush=options.autopush()" ng-model="form.autopush" ng-change="options.autopush(form.autopush)" class="">Auto-export every 15 分钟 and before closing</label></div> <div><button class="btn btn-primary" ng-class="{disabled:cooldown.byName.push}" ng-click="push()">Export online saved data</button></div> <div><button class="btn btn-default" ng-class="{disabled:cooldown.byName.fetch}" ng-click="fetch()">Check for new online saved data</button></div> <div ng-if="remoteSave()"> <div><button class="btn btn-primary" ng-click="pull()">Import online saved data (replaces your current game)</button></div> <div><button class="btn btn-default" ng-class="{disabled:cooldown.byName.clear}" ng-click="clear()">Delete online saved data</button></div> <p>Last exported: {{remoteSave().length|number}} chars {{remoteDate()|momentFromNow}}. <span ng-if="getAutopushError()">Will not auto-export online<span ng-if="getAutopushError()==\'nochanges\'"> because nothing\'s changed since the last export</span><span ng-if="getAutopushError()==\'newgame\'"> because this is a new game</span><span ng-if="getAutopushError()==\'remotenewer\'"> because the online save is newer than the one you\'re playing</span>.</span> </p> </div> <p ng-if="policyError" class="text-danger">{{policyError}}</p> <div ng-if="!isBrowserSupported()"> <p class="text-danger">Looks like your web browser won\'t work with Kongregate sync: <code>FormData</code>/<code>Blob</code> support not found. <a target="_blank" href="http://browsehappy.com">You should upgrade your browser.</a></p> </div> </div> </div> '), a.put("views/playfab/login.html", '<div class="form-group"> <label for="playfab-email">邮箱</label> <input type="text" name="playfab-email" ng-model="form.email" class="form-control"> <div>{{error.email}}</div> </div> <div class="form-group"> <label for="playfab-password">密码</label> <input type="password" name="playfab-password" ng-model="form.password" class="form-control"> <div>{{error.password}}</div> </div> <div>{{error.main}}</div> <label> <input type="checkbox" name="playfab-remember" ng-model="form.remember"> 记住账号密码 </label> <button type="submit" class="btn btn-info form-control" ng-click="runLogin()">登录</button> <a href="javascript:" ng-click="setActive(\'forgot\')">忘记密码？</a> '), a.put("views/playfab/options.html", '<p ng-show="!!name">你好 {{name}} ！ <button class="btn btn-default" ng-click="logout()">退出登录</button></p> <div><label><input type="checkbox" ng-model="form.autopush" ng-change="setAutopush(form.autopush)" class="">每15分钟自动导出存档，然后关闭</label></div> <div><button class="btn btn-primary" ng-click="push()">导出存档并在线保存</button></div> <div><button class="btn btn-default" ng-click="fetch()">检查是否有新的在线存档</button></div> <p ng-if="!isFetched()">你还没有在线存档</p> <div ng-if="isFetched()"> <div><button class="btn btn-primary" ng-click="pull()">导入在线存储的游戏进度 (会覆盖你当前的游戏进度)</button></div> <div><button class="btn btn-default" ng-click="clear()">删除在线存档</button></div> <p>最后导出： {{fetched.state().length|number}} 字符 {{fetched.lastUpdated().fromNow()}}。 <span ng-if="autopushError()">没有自动导出<span ng-if="autopushError()==\'nochanges\'"> 因为上次导出后没有发生任何变化</span><span ng-if="autopushError()==\'newgame\'"> because this is a new game</span><span ng-if="autopushError()==\'remotenewer\'"> because the online save is newer than the one you\'re playing</span>.</span> </p> </div> '), a.put("views/playfab/signup.html", '<div class="form-group"> <label for="playfab-email">邮箱</label> <input type="text" name="playfab-email" ng-model="form.email" class="form-control"> <div>我们只会向您发送帐户恢复/丢失密码的邮件。</div> <div>{{error.email}}</div> </div> <div class="form-group"> <label for="playfab-password">密码</label> <input type="password" name="playfab-password" ng-model="form.password" class="form-control"> <label for="playfab-password">重复密码</label><input type="password" name="playfab-password2" ng-model="form.password2" class="form-control"> <div ng-if="form.password != form.password2">两次密码不一致</div> <div>{{error.password}}</div> </div> <div>{{error.main}}</div> <label> <input type="checkbox" name="playfab-remember" ng-model="form.remember"> 记住账号密码 </label> <button type="submit" ng-class="{disabled: form.password != form.password2}" class="btn btn-info form-control" ng-click="runSignup()">注册</button> '), a.put("views/playfab/title.html", '<div> <label class="control-label"> <img src="images/playfab.0ef01669.png" style="height:18px;width:18px"> 与其他设备同步/保存数据 <span class="envalert">(测试)</span> </label> </div> '), a.put("views/desc/unit/bat.html", "<p>蝙蝠增强你所有虫群的基于能量的能力。</p> <p>你的蝙蝠让你的能力增强 {{unit.effect[0].calcStats().power | percent:{places:2,plusOne:true} }} 。养育更多会减少利润，但会将上限增至 {{unit.effect[0].val | percent:{plusOne:true} }}。</p> "), a.put("views/desc/unit/cocoon.html", "<p>每个茧都是封在保护罩中的幼虫。幼虫可以自由出入它们的茧，但不能在茧中变成其他单位。</p> <p>克隆幼虫像正常幼虫般复制茧。让你把打算用来复制的幼虫结茧，以避免意外消耗它们。</p> <p>你生产 {{ game.unit('larva').velocity().times(options.velocityUnit().mult) | longnum }} 幼虫每{{options.velocityUnit().label}}, 允许你克隆 <span ng-if=\"game.unit('cocoon').isVisible() && game.unit('cocoon').count().greaterThanOrEqualTo(game.upgrade('clonelarvae').effect[0].cap())\">{{ game.upgrade('clonelarvae').effect[0].cap() | longnum }} 幼虫。</span> <span ng-if=\"!(game.unit('cocoon').isVisible() && game.unit('cocoon').count().greaterThanOrEqualTo(game.upgrade('clonelarvae').effect[0].cap()))\"> <a ng-href=\"#{{game.unit('cocoon').url()}}?num={{'@'+game.upgrade('clonelarvae').effect[0].cap()|encodeURIComponent}}\">{{ game.upgrade('clonelarvae').effect[0].cap() | longnum }} 幼虫</a>。 </span> </p> "), a.put("views/desc/unit/crystal.html", '<div ng-controller="MtxDesc"> <p title="What should I name this new currency? It\'s a Golden opportunity to get Kredit for Coining a real Gem. Another Point, though - if I choose badly, they\'ll say &quot;what a RubeHe is. Just DieMan.&quot; I\'m sure the answer will be Crystal clear soon enough.">能量冻结成固体形式。水晶可以在任何时候被解冻，转换为能量。与能量不同，水晶没有最大值，并且在转生时可以保留。</p> <crystal-timer></crystal-timer> <div ng-if="mtx.uiStyle() == \'paypal\'"> <div ng-repeat="pack in packs"> <a href="{{pack.paypalUrl}}" target="_blank" class="btn btn-default"> 购买 {{pack[\'pack.val\'] | longnum:null:{minSuffix:1e300} }} 水晶需要 {{pack.price_usd_paypal/100 | currency }} </a> </div> </div> <div ng-if="mtx.uiStyle() == \'normal\'"> <div ng-repeat="pack in packs"> <button class="btn btn-default" ng-click="clickBuyPack(pack)"> Buy {{pack[\'pack.val\'] | longnum:null:{minSuffix:1e300} }} crystals for <img src="/images/kred_single.b37e127d.png" style="width:16px;height:16px"> {{pack.price_kreds | longnum:null:{minSuffix:1e300} }} </button> </div> </div> <div ng-if="mtx.uiStyle() != \'disabled\'"> <p><i>模拟虫群的开发人员感谢您的支持——谢谢！</i></p> <div class="alert alert-danger" ng-if="!packs && packsError"> {{packsError}} </div> <div class="alert alert-info" ng-if="pullSuccess && pullTx"> <p>Your crystals have been applied, your payment is complete, and a receipt has been emailed to you.</p> <p>Paypal transaction ID: {{pullTx}}</p> <p>Thank you for supporting Swarm Simulator!</p> </div> <div class="alert alert-danger" ng-if="pullError"> <p>We\'re sorry, there was a problem applying your crystals. If this continues, please <a href="#/contact">email the developer</a> for help, and I\'ll get back to you as soon as I possibly can. Include this entire error message in your email.</p> <p ng-if="pullErrorTx">Paypal transaction id: {{pullErrorTx}}</p> <code>{{pullError}}</code> </div> <div ng-if="(!packs && !packsError) || buyLoading || pullLoading"> <img src="images/ajax-loader.e431d904.gif"> </div> <div class="alert alert-info" ng-if="buySuccess"> <p>Your crystals have been applied.</p> <p>Thank you for supporting Swarm Simulator!</p> </div> <div class="alert alert-danger" ng-if="buyError"> {{buyError}} </div> <div class="alert alert-danger" ng-if="convertError"> {{convertError}} </div> </div> <div ng-if="mtx.uiStyle() == \'disabled\'"> </div> <br> <p>转换水晶会永久地增加你的最大能量存储上限 {{game.unit(\'mtxEnergy\').count() | longnum}}。</p> <buyunit-input unit="game.unit(\'energy\')"></buyunit-input> <!--button class="btn btn-default btn-disabled" disabled>Quick ascend (coming soon!)</button--> </div> '), a.put("views/desc/unit/energy.html", '<p title="Coffee is consumed to restore energy.">能量会在使用特殊能力时消耗。</p> <div class="progress" style="margin-bottom:0"> <div class="progress-bar" role="progressbar" aria-valuenow="{{unit.count()}}" aria-valuemin="0" aria-valuemax="{{unit.capValue()}}" ng-style="{width:unit.capPercent().times(100)+\'%\'}"> {{unit.capPercent()|percent:{floor:true} }}, {{unit.capDurationMoment()|duration}} </div> </div> <p>{{unit.count()|longnum:0}} / {{unit.capValue()|longnum:0}} {{unit.unittype.label}}</p> <p><a href="#/unit/crystal">需要更多能量?</a></p> <!--buyunit-input unit="game.unit(\'mtxEnergy\')"></buyunit-input--> '), a.put("views/desc/unit/moth.html", "<p>鳞翅目是神秘的生物，有着毛茸茸的身体和巨大的翅膀，只会在晚上从它们的巢穴出现。鳞翅目会被你的夜虫的光吸引，能量会被鳞翅目吸引。</p> <p>你的鳞翅目产生 {{unit.effect[0].calcStats().prod | percent:{places:2,plusOne:true} }} 的能量。 孵化更多会减少利润，但能将能量存储上限提升至 {{unit.effect[0].val | percent:{plusOne:true} }}。</p> "), a.put("views/desc/unit/mutagen.html", '<p title="Also creates heroic turtles.">启动突变，增加你的虫群中每个成员的力量。</p> <p>要活化突变，你的虫群必须 <b>转生</b> - 重新开始一个新的世界。 太空旅行对你大部分的虫群来说太过严苛，但突变会为你虫群小部分的幼虫前往新星球的旅程而强化它们。这些幼虫的后代 - 你的新虫群，将从突变的力量中受益。</p> <p>转生将会激活 {{game.unit(\'premutagen\').count()|longnum}} 新突变。你的虫群的祖先至今已经遍布于 {{game.unit(\'ascension\').count()|longnum}} 个新世界。</p> <p>现在转生花费 {{game.ascendCost()|longnum}} 能量。在其他地方消费能量以减少这个花费；你已消费了 {{game.ascendEnergySpent()|longnum}} 能量。</p> <div class="progress" style="margin-bottom:0"> <div ng-if="game.ascendCostCapDiff().greaterThan(0)" class="progress-bar progress-bar-danger pull-right" role="progressbar" aria-valuenow="{{game.ascendCostCapDiff()}}" aria-valuemin="0" aria-valuemax="{{game.ascendCost()}}" ng-style="{width:game.ascendCostCapDiff().dividedBy(game.ascendCost()).times(100)+\'%\'}"> {{game.ascendCostCapDiff()|longnum}} more than your max energy! </div> <div class="progress-bar" role="progressbar" aria-valuenow="{{game.unit(\'energy\').count()}}" aria-valuemin="0" aria-valuemax="{{game.ascendCost()}}" ng-style="{width:game.ascendCostPercent().times(100)+\'%\'}"> {{game.unit(\'energy\').count()|longnum}} 能量, {{game.ascendCostPercent()|percent:0}}<span ng-if="game.ascendCostCapDiff().lessThanOrEqualTo(0) && game.ascendCostPercent().lessThan(1)">: {{game.ascendCostDurationMoment()|duration}}</span> </div> </div> <p><button title="" ng-click="commands.ascend({game:game})" class="btn btn-primary" ng-class="{disabled:game.ascendCost().greaterThan(game.unit(\'energy\').count())}">转生 — 启动突变并重新开始</button></p> <p ng-if="options.showAdvancedUnitData()"><button title="" ng-click="game.session.state.watched={}" class="btn btn-default">重置升级通知<span class="small disabled glyphicon glyphicon-circle-arrow-up"></span></button></p> <div> <p> 这将退回所有 {{game.respecSpent().times(game.respecRate()) | longnum}} 你已消费的突变，但是会重置所有的突变单位和升级到0，并重置你的下一次提升的能量成本为{{game.ascendCost({spent:0}) | longnum}}。 </p> <p>现在回复会花费 {{game.respecCost()|longnum}} 能量 ({{game.respecCostRate|percent}} 你下一次转生的费用)。</p> <p><button title="" ng-click="commands.respec({game:game})" ng-disabled="game.respecSpent().isZero() || !game.isRespecCostMet()" class="btn btn-default">回复 — 复原突变，但会重设转生费用</button></p> <p>每三次转生就可免费使用一次回复。你还有{{game.unit(\'freeRespec\').count()|longnum}} 次免费回复。</p> <p><button title="" ng-click="commands.respecFree({game:game})" ng-disabled="game.respecSpent().isZero() || game.unit(\'freeRespec\').count().lessThanOrEqualTo(0)" class="btn btn-default">回复 (免费)</button></p> </div> '), a.put("views/desc/unit/mutantarmy.html", "<p>增加所有产生的领土 {{unit.effect[0].calcStats().prod | percent:{places:2, plusOne:true} }}.</p> "), a.put("views/desc/unit/mutantbat.html", "<p>提高所有能力的力量 {{unit.effect[0].calcStats().power | percent:{places:2, plusOne:true} }}.</p> "), a.put("views/desc/unit/mutantclone.html", "<p>增加克隆幼虫的上限 {{unit.effect[0].calcStats()['power.clonelarvae'] | percent:{places:2, plusOne:true} }}.</p> "), a.put("views/desc/unit/mutanteach.html", "<p>当一个孵化或扩张产生突变时，多产生 {{unit.effect[0].calcStats()['random.each'] | percent:{places:2,plusOne:true} }} 突变。</p> "), a.put("views/desc/unit/mutantfreq.html", "<p>在购买孵化或扩张时产生突变的几率增加 {{unit.effect[1].val * (unit.effect[0].calcStats()['random.freq'] - 1) | percent:2}}.</p> <p>你当前有 {{unit.effect[0].unit.stat('random.freq') | percent:2}} 几率产生突变。 更多的 {{unit.plural}} 会减少利润，但可以将上限提升至 {{unit.effect[1].val * unit.effect[0].val | percent:2}}。</p> "), a.put("views/desc/unit/mutanthatchery.html", "<p>增加幼虫产量 {{unit.effect[0].calcStats().prod | percent:{places:2, plusOne:true} }}.</p> <p ng-if=\"unit.count().lessThanOrEqualTo(10)\"><i>Raw mutagen produces larvae that doesn't benefit from hatchery mutations. Don't spend all your mutagen too early!</i></p> "), a.put("views/desc/unit/mutantmeat.html", '<p ng-repeat="effect in unit.effect"> <span ng-if="effect.unit.isVisible()"> <span class="titlecase">{{effect.unit.unittype.plural}}</span> 的生产效率提升 {{effect.calcStats().prod | percent:{places:2, plusOne:true} }} 。 </span> </p> '), a.put("views/desc/unit/mutantnexus.html", "<p>增加能量生产 {{unit.effect[0].calcStats().prod | percent:{places:2,plusOne:true} }}。 创造更多会减少利润，但会将上限增至 {{unit.effect[0].val | percent:{places:2,plusOne:true} }}。</p> <p>增加能量生产 {{unit.effect[1].calcStats().capMult | percent:{places:2,plusOne:true} }}。创造更多会减少利润，但会将上限增至 {{unit.effect[1].val | percent:{places:2,plusOne:true} }}.</p> <p>然而, {{unit.effect[2].calcStats().ascendCost | percent:{places:2,plusOne:true} }} 能量是必须消费以减少升天费用。 创造更多会将上限增至 {{unit.effect[2].val | percent:{places:2,plusOne:true} }}.</p> "), a.put("views/desc/unit/mutantrush.html", "<p>增加幼虫高峰期力量 {{unit.effect[0].calcStats()['power.larvarush'] | percent:{places:2,plusOne:true} }}.</p> <p>增加肉高峰期力量  {{unit.effect[1].calcStats()['power.meatrush'] | percent:{places:2,plusOne:true} }}.</p> <p>增加领地高峰期力量 {{unit.effect[2].calcStats()['power.territoryrush'] | percent:{places:2,plusOne:true} }}.</p> "), a.put("views/desc/unit/mutantswarmwarp.html", "<p>提升虫群扭曲的力量 {{unit.effect[0].calcStats()['power.swarmwarp'] | percent:{places:2,plusOne:true} }}.</p> "), a.put("views/desc/unit/nexus.html", "<p>联系是用于施放法术和使用特殊技能所需的能量的焦点。</p> <p>从多个联系中汲取能量是强大而困难的——每一个联系都比上一个更贵，并且你的施法者可以使用的联系的数量是有限的。</p> "), a.put("views/desc/unit/nightbug.html", "<p>夜虫在暴露于你的联系的能量时会蠕动和发光。将夜虫聚集在你的联系旁边来储存附加的能量。</p> <p>你的夜虫可以提高能量的最大存储上限 {{unit.effect[0].calcStats().capMult | percent:{places:2, plusOne:true} }} 。 孵化更多会减少利润，但能将上限提升至 {{unit.effect[0].val | percent:{plusOne:true} }}。</p> "), a.put("views/desc/unit/premutagen.html", "<p>突变不能在闲置时使用。升天以开始新的虫群，会重设你大部分的装置和升级，但会令你所有的突变激活。激活的突变可以强效的升级。</p> "), a.put("views/desc/unit/territory.html", '<p title="你的可怕的战士们为了占领领土而撕裂他们的敌人。">你的虫群军事占领了一片领土, 供给你的领土扩张.</p> <div class="titlecase" ng-controller="ChartCtrl" ng-hide="game.unit(\'territory\').velocity().isZero()"> <div ng-if="options.showCharts()" class="animif"> <div google-chart chart="prodchart" style="padding:0;width:500px"></div> </div> <div ng-show="options.showCharts()"> <div><button class="btn btn-default btn-sm" ng-click="options.showCharts(false)">隐藏图表</button></div> </div> <div ng-hide="options.showCharts()"> <div><button class="btn btn-default btn-sm" ng-click="options.showCharts(true)">显示图表</button></div> </div> </div> '), a.put("views/desc/upgrade/achievementbonus.html", "幼虫产量增加了 {{upgrade.type.effect[0].val * 10 | percent:0}} 每 10 成就点。 "), a.put("views/desc/upgrade/centipedeempower.html", "<p>大幅增加 天龙虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('centipede').count() | longnum }} 天龙虫。</p> "), a.put("views/desc/upgrade/clonearmy.html", '<div title="Bloody Mary, Bloody Mary, Bloody Mary"> <p>召唤你的军队的镜像副本。与克隆幼虫不同，这种能力没有上限。</p> <div ng-repeat="effect in upgrade.effect track by effect.unit.name"> <span ng-if="effect.output().greaterThan(0)"> 创造 {{ effect.output() | longnum }} {{effect.unit.type.plural}}。 </span> </div> </div> '), a.put("views/desc/upgrade/clonelarvae.html", "<p>克隆 {{ upgrade.effect[0].output() | longnum }} 新的幼虫。<p>你生产 {{ game.unit('larva').velocity().times(options.velocityUnit().mult) | longnum }} 幼虫 每{{options.velocityUnit().label}}, 允许你克隆直到拥有 <span ng-if=\"game.unit('cocoon').isVisible() && game.unit('cocoon').count().greaterThanOrEqualTo(upgrade.effect[0].cap())\">{{ upgrade.effect[0].cap() | longnum }} 幼虫。</span> <span ng-if=\"!(game.unit('cocoon').isVisible() && game.unit('cocoon').count().greaterThanOrEqualTo(upgrade.effect[0].cap()))\"> <a ng-href=\"#{{game.unit('cocoon').url()}}?num={{'@'+upgrade.effect[0].cap()|encodeURIComponent}}\">{{ upgrade.effect[0].cap() | longnum }} 幼虫</a>。 </span> 你现在有 {{ upgrade.effect[0].bank() | longnum}} 幼虫和茧可以用来克隆</p> "), a.put("views/desc/upgrade/devourerempower.html", "<p>大幅增加你的吞噬者的肉成本和领土。<p>这将毁灭你全部的 {{ game.unit('devourer').count() | longnum }} 吞噬者。</p> "), a.put("views/desc/upgrade/expansion.html", "<p>每个扩张增加你的孵化场幼虫产量 {{upgrade.type.effect[0].val | percent:{plusOne:true} }}。当前, 你的扩张提升了孵化场产量 {{upgrade.effect[0].calcStats().prod | percent:{plusOne:true,longnum:true} }}.</p> <p ng-if=\"upgrade.count().greaterThanOrEqualTo(upgrade.unit.stat('random.minlevel.expansion'))\" title=\"Savescumming won't work, by the way.\"> 你下一次扩张有 {{upgrade.unit.stat('random.freq')|percent:0}} 几率获得 {{upgrade.effect[1].outputNext().qty|longnum}} 突变。 </p> <p ng-if=\"!upgrade.count().greaterThanOrEqualTo(upgrade.unit.stat('random.minlevel.expansion')) && game.unit('mutagen').isVisible()\"> Build {{upgrade.unit.stat('random.minlevel.expansion')|longnum}} expansions to begin earning mutagen. </p> <crystal-timer unittext=\"'扩张'\"></crystal-timer> "), a.put("views/desc/upgrade/giantspiderempower.html", "<p>大幅增加 巨大蛛形虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('giantspider').count() | longnum }} 巨大蛛形虫。</p> "), a.put("views/desc/upgrade/goonempower.html", "<p>大幅增加 打手 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('goon').count() | longnum }} 打手。</p> "),
            a.put("views/desc/upgrade/hatchery.html", "<p> 每个孵化场生产 {{upgrade.type.effect[0].val.times(options.velocityUnit().mult) | longnum}} 幼虫每{{options.velocityUnit().label}}。当前, 你的孵化场总共生产了 {{upgrade.unit.totalProduction().larva.times(options.velocityUnit().mult) | longnum:0}} 幼虫 每{{options.velocityUnit().label}}。不算上翻倍的话, 它们会生产 {{upgrade.unit.prod[0].val.plus(upgrade.effect[0].calcStats().base).times(options.velocityUnit().mult) | longnum:0}} 幼虫 每{{options.velocityUnit().label}}。</p> <p ng-if=\"upgrade.count().greaterThanOrEqualTo(upgrade.unit.stat('random.minlevel.hatchery'))\" title=\"顺便说一下，除去保存是行不通的。\"> 你的下一个孵化场有 {{upgrade.unit.stat('random.freq')|percent:0}} 几率获得 {{upgrade.effect[1].outputNext().qty|longnum}} 突变。 </p> <p ng-if=\"!upgrade.count().greaterThanOrEqualTo(upgrade.unit.stat('random.minlevel.hatchery')) && game.unit('mutagen').isVisible()\"> Build {{upgrade.unit.stat('random.minlevel.hatchery')|longnum}} hatcheries to begin earning mutagen. </p> <crystal-timer unittext=\"'孵化'\"></crystal-timer> "), a.put("views/desc/upgrade/iamrich.html", ""), a.put("views/desc/upgrade/larvarush.html", "马上获得 {{ upgrade.effect[0].output().plus(upgrade.effect[1].output()) | longnum }} 幼虫。 "), a.put("views/desc/upgrade/locustempower.html", "<p>大幅增加 蝗螽虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('locust').count() | longnum }} 蝗螽虫。</p> "), a.put("views/desc/upgrade/meatrush.html", "马上获得 {{ upgrade.effect[0].output().plus(upgrade.effect[1].output()) | longnum }} 肉。 "), a.put("views/desc/upgrade/mosquitoempower.html", "<p>大幅增加 白鸟蚊 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('mosquito').count() | longnum }} 白鸟蚊。</p> "), a.put("views/desc/upgrade/mutatearmy.html", "<p>增加获得的领土数量, 并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutatebat.html", "<p>提高所有能力的力量, 并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutateclone.html", "<p>增加克隆幼虫的上限, 并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutateeach.html", "<p>当一个孵化场或扩张引起突变，会有更多突变被生产。并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutatefreq.html", "<p>增加在购买孵化或扩张时产生突变的机会， 并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutatehatchery.html", "<p>增加幼虫的产量，并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutatemeat.html", "<p>增加所有肉类单位的生产,并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutatenexus.html", "<p>增加产生的能量，但同时也增加转生的能量费用。并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutaterush.html", "<p>增加幼虫热潮、肉热潮，以及领地热潮的力量，并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/mutateswarmwarp.html", "<p>增加虫群的力量，并增加解锁其他突变力量的费用。</p> "), a.put("views/desc/upgrade/roachempower.html", "<p>大幅增加 蜚蠊 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('roach').count() | longnum }} 蜚蠊。</p> "), a.put("views/desc/upgrade/spiderempower.html", "<p>大幅增加 蛛形虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('spider').count() | longnum }} 蛛形虫。</p> "), a.put("views/desc/upgrade/stingerempower.html", "<p>大幅增加 剌针虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('stinger').count() | longnum }} 剌针虫。</p> "), a.put("views/desc/upgrade/swarmlingempower.html", "<p>大幅增加 工虫 的肉成本和获得的领地。<p>这将毁灭你全部的 {{ game.unit('swarmling').count() | longnum }} 工虫。</p> "), a.put("views/desc/upgrade/swarmwarp.html", "扭曲你的虫群周围的时间。即时穿越到未来，获得 {{ upgrade.effect[0].output() | duration:'seconds' }} 的生产。 不会产生能量。 "), a.put("views/desc/upgrade/territoryrush.html", "马上获得 {{ upgrade.effect[0].output().plus(upgrade.effect[1].output()) | longnum }} 新领土。 "), a.put("views/desc/upgrade/waspempower.html", "<p>大大增加你的黄蜂的肉成本和领地。<p>这将毁灭你全部的 {{ game.unit('wasp').count() | longnum }} 黃胡蜂。</p> ");

    }]);
//汉化名称
function cnzt(name) {
    var cnname = "";
    var temp = name;
    if (temp == "cerulean") {
        cnname = "天蓝色"
    } else if (temp == "cosmo") {
        cnname = "宇宙"
    } else if (temp == "cyborg") {
        cnname = "电子"
    } else if (temp == "darkly") {
        cnname = "黑暗"
    } else if (temp == "flatly") {
        cnname = "平淡"
    } else if (temp == "journal") {
        cnname = "刊物"
    } else if (temp == "lumen") {
        cnname = "流明"
    } else if (temp == "paper") {
        cnname = "纸"
    } else if (temp == "readable") {
        cnname = "可读"
    } else if (temp == "sandstone") {
        cnname = "砂岩"
    } else if (temp == "simplex") {
        cnname = "简单"
    } else if (temp == "slate") {
        cnname = "石板"
    } else if (temp == "spacelab") {
        cnname = "太空实验室"
    } else if (temp == "superhero") {
        cnname = "超级英雄"
    } else if (temp == "united") {
        cnname = "和睦"
    } else if (temp == "yeti") {
        cnname = "雪人"
    } else {
        return name;
    }
    return cnname;
}