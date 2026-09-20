(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/styles/pages/Admin.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "adminPulse": "Admin-module__r_12Ka__adminPulse",
  "analyticsGrid": "Admin-module__r_12Ka__analyticsGrid",
  "bars": "Admin-module__r_12Ka__bars",
  "breakdownLegend": "Admin-module__r_12Ka__breakdownLegend",
  "chart": "Admin-module__r_12Ka__chart",
  "chartColumn": "Admin-module__r_12Ka__chartColumn",
  "container": "Admin-module__r_12Ka__container",
  "dashboardGrid": "Admin-module__r_12Ka__dashboardGrid",
  "dealBar": "Admin-module__r_12Ka__dealBar",
  "dealDot": "Admin-module__r_12Ka__dealDot",
  "donut": "Admin-module__r_12Ka__donut",
  "donutLayout": "Admin-module__r_12Ka__donutLayout",
  "dotCANCELLED": "Admin-module__r_12Ka__dotCANCELLED",
  "dotCONFIRMED": "Admin-module__r_12Ka__dotCONFIRMED",
  "dotPENDING": "Admin-module__r_12Ka__dotPENDING",
  "empty": "Admin-module__r_12Ka__empty",
  "eyebrow": "Admin-module__r_12Ka__eyebrow",
  "heading": "Admin-module__r_12Ka__heading",
  "headingSkeleton": "Admin-module__r_12Ka__headingSkeleton",
  "legend": "Admin-module__r_12Ka__legend",
  "live": "Admin-module__r_12Ka__live",
  "message": "Admin-module__r_12Ka__message",
  "metricList": "Admin-module__r_12Ka__metricList",
  "page": "Admin-module__r_12Ka__page",
  "panel": "Admin-module__r_12Ka__panel",
  "panelHeading": "Admin-module__r_12Ka__panelHeading",
  "panelSkeleton": "Admin-module__r_12Ka__panelSkeleton",
  "performance": "Admin-module__r_12Ka__performance",
  "primary": "Admin-module__r_12Ka__primary",
  "quick": "Admin-module__r_12Ka__quick",
  "quickLink": "Admin-module__r_12Ka__quickLink",
  "request": "Admin-module__r_12Ka__request",
  "requestBar": "Admin-module__r_12Ka__requestBar",
  "requestCount": "Admin-module__r_12Ka__requestCount",
  "requestDot": "Admin-module__r_12Ka__requestDot",
  "requestList": "Admin-module__r_12Ka__requestList",
  "stat": "Admin-module__r_12Ka__stat",
  "statIcon": "Admin-module__r_12Ka__statIcon",
  "statSkeleton": "Admin-module__r_12Ka__statSkeleton",
  "stats": "Admin-module__r_12Ka__stats",
  "status": "Admin-module__r_12Ka__status",
  "statusCANCELLED": "Admin-module__r_12Ka__statusCANCELLED",
  "statusCONFIRMED": "Admin-module__r_12Ka__statusCONFIRMED",
  "statusPENDING": "Admin-module__r_12Ka__statusPENDING",
  "track": "Admin-module__r_12Ka__track",
  "typeChart": "Admin-module__r_12Ka__typeChart",
  "typeRow": "Admin-module__r_12Ka__typeRow",
});
}}),
"[project]/src/components/AdminDashboard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-clock.js [app-client] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js [app-client] (ecmascript) <export default as CircleDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Admin.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "";
function hasAdminRole(user) {
    return user?.roles?.split(",").some((role)=>role.trim() === "ROLE_ADMIN");
}
function AdminDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "loading",
        data: null
    });
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const controller = new AbortController();
            setState({
                status: "loading",
                data: null
            });
            async function load() {
                try {
                    const accountResponse = await fetch(`${API_URL}/api/v1/auth/me`, {
                        credentials: "include",
                        cache: "no-store",
                        signal: controller.signal
                    });
                    if (accountResponse.status === 401) {
                        router.replace("/login");
                        return;
                    }
                    if (!accountResponse.ok) throw new Error("Account request failed");
                    const account = await accountResponse.json();
                    if (!hasAdminRole(account)) {
                        setState({
                            status: "forbidden",
                            data: null
                        });
                        return;
                    }
                    const response = await fetch(`${API_URL}/api/v1/admin/dashboard`, {
                        credentials: "include",
                        cache: "no-store",
                        signal: controller.signal
                    });
                    if (response.status === 403) {
                        setState({
                            status: "forbidden",
                            data: null
                        });
                        return;
                    }
                    if (!response.ok) throw new Error("Dashboard request failed");
                    const data = await response.json();
                    if (!controller.signal.aborted) setState({
                        status: "ready",
                        data
                    });
                } catch (error) {
                    if (error.name !== "AbortError") setState({
                        status: "error",
                        data: null
                    });
                }
            }
            load();
            return ({
                "AdminDashboard.useEffect": ()=>controller.abort()
            })["AdminDashboard.useEffect"];
        }
    }["AdminDashboard.useEffect"], [
        attempt,
        router
    ]);
    const dateFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[dateFormatter]": ()=>new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
                day: "numeric",
                month: "short"
            })
    }["AdminDashboard.useMemo[dateFormatter]"], [
        locale
    ]);
    const dateTimeFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[dateTimeFormatter]": ()=>new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit"
            })
    }["AdminDashboard.useMemo[dateTimeFormatter]"], [
        locale
    ]);
    const moneyFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[moneyFormatter]": ()=>new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US", {
                style: "currency",
                currency: "USD",
                notation: "compact",
                maximumFractionDigits: 1
            })
    }["AdminDashboard.useMemo[moneyFormatter]"], [
        locale
    ]);
    if (state.status === "forbidden") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        size: 38,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 58,
                        columnNumber: 144
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: t("admin.forbidden")
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 58,
                        columnNumber: 188
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t("admin.forbiddenText")
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 58,
                        columnNumber: 219
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary,
                        children: t("error.home")
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 58,
                        columnNumber: 252
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 58,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AdminDashboard.jsx",
            lineNumber: 58,
            columnNumber: 74
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminDashboard.jsx",
        lineNumber: 58,
        columnNumber: 44
    }, this);
    if (state.status === "error") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        size: 38,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 60,
                        columnNumber: 140
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: t("admin.unavailable")
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 60,
                        columnNumber: 184
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        children: t("admin.unavailableText")
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 60,
                        columnNumber: 217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary,
                        onClick: ()=>setAttempt((value)=>value + 1),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 16,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                lineNumber: 60,
                                columnNumber: 361
                            }, this),
                            t("catalog.tryAgain")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminDashboard.jsx",
                        lineNumber: 60,
                        columnNumber: 265
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminDashboard.jsx",
                lineNumber: 60,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AdminDashboard.jsx",
            lineNumber: 60,
            columnNumber: 70
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminDashboard.jsx",
        lineNumber: 60,
        columnNumber: 40
    }, this);
    if (state.status === "loading" || !state.data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            role: "status",
            "aria-label": t("admin.loading"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingSkeleton
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 62,
                    columnNumber: 167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statSkeleton
                        }, value, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 62,
                            columnNumber: 263
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 62,
                    columnNumber: 209
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelSkeleton
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 62,
                    columnNumber: 322
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AdminDashboard.jsx",
            lineNumber: 62,
            columnNumber: 87
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminDashboard.jsx",
        lineNumber: 62,
        columnNumber: 57
    }, this);
    const data = state.data;
    const maxActivity = Math.max(1, ...data.activity.flatMap((point)=>[
            point.requests,
            point.deals
        ]));
    const requestTotal = data.requestBreakdown.reduce((sum, item)=>sum + item.count, 0);
    const propertyTotal = Math.max(1, data.propertyBreakdown.reduce((sum, item)=>sum + item.count, 0));
    const requestPercent = (key)=>requestTotal ? (data.requestBreakdown.find((item)=>item.key === key)?.count ?? 0) / requestTotal * 100 : 0;
    const confirmedEnd = requestPercent("CONFIRMED");
    const pendingEnd = confirmedEnd + requestPercent("PENDING");
    const stats = [
        {
            label: t("admin.properties"),
            value: data.propertyCount,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            label: t("admin.users"),
            value: data.userCount,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            label: t("admin.deals"),
            value: data.dealCount,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
        },
        {
            label: t("admin.pending"),
            value: data.pendingRequestCount,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                    children: t("admin.eyebrow")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 80,
                                    columnNumber: 47
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: t("admin.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 80,
                                    columnNumber: 101
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t("admin.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 80,
                                    columnNumber: 128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 80,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].live,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 80,
                                    columnNumber: 192
                                }, this),
                                t("admin.live")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 80,
                            columnNumber: 162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                    "aria-label": t("admin.overview"),
                    children: stats.map(({ label, value, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 20,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 82,
                                        columnNumber: 133
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 82,
                                    columnNumber: 99
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 82,
                                            columnNumber: 182
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: value.toLocaleString(locale === "ru" ? "ru-RU" : "en-US")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 82,
                                            columnNumber: 196
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 82,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 82,
                            columnNumber: 54
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                            "aria-labelledby": "activity-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                                    children: t("admin.lastSeven")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    id: "activity-title",
                                                    children: t("admin.activity")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 109
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 87,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legend,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestDot
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 202
                                                        }, this),
                                                        t("admin.requests")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 196
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dealDot
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 271
                                                        }, this),
                                                        t("admin.deals")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 265
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 87,
                                            columnNumber: 165
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 87,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chart,
                                    children: data.activity.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartColumn,
                                            "aria-label": t("admin.activityLabel", {
                                                date: dateFormatter.format(new Date(`${point.date}T12:00:00`)),
                                                requests: point.requests,
                                                deals: point.deals
                                            }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bars,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestBar,
                                                            style: {
                                                                "--bar-height": `${Math.max(point.requests ? 8 : 2, point.requests / maxActivity * 100)}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 44
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dealBar,
                                                            style: {
                                                                "--bar-height": `${Math.max(point.deals ? 8 : 2, point.deals / maxActivity * 100)}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 185
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: dateFormatter.format(new Date(`${point.date}T12:00:00`))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, point.date, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 89,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 88,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 86,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quick}`,
                            "aria-labelledby": "quick-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                                children: t("admin.workspace")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 96,
                                                columnNumber: 134
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "quick-title",
                                                children: t("admin.quick")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 96,
                                                columnNumber: 190
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                        lineNumber: 96,
                                        columnNumber: 129
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 96,
                                    columnNumber: 92
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/properties",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            size: 18,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 97,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t("admin.openCatalog")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t("admin.openCatalogText")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 154
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 97,
                                            columnNumber: 107
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 17,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 97,
                                            columnNumber: 204
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 97,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#requests",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                            size: 18,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 98,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t("admin.reviewRequests")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 115
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t("admin.reviewRequestsText")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 159
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 98,
                                            columnNumber: 109
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 17,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 98,
                                            columnNumber: 212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 98,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 18,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 62
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: t("admin.account")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: t("admin.accountText")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 143
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 100
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 17,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 189
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 96,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].analyticsGrid,
                    "aria-label": t("admin.analytics"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].performance}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                                    children: t("admin.performance")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: t("admin.keyMetrics")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 111
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 105,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 20,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 105,
                                            columnNumber: 149
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 105,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("admin.averagePrice")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: moneyFormatter.format(data.averagePropertyPrice)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 107,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("admin.dealVolume")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: moneyFormatter.format(data.totalDealVolume)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 54
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 108,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("admin.confirmationRate")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        Math.round(data.requestConfirmationRate),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 60
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 109,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                                    children: t("admin.requests")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: t("admin.requestHealth")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 108
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 114,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                            size: 20,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 114,
                                            columnNumber: 149
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 114,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].donutLayout,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].donut,
                                            style: {
                                                "--confirmed-end": `${confirmedEnd}%`,
                                                "--pending-end": `${pendingEnd}%`
                                            },
                                            role: "img",
                                            "aria-label": t("admin.requestChartLabel", {
                                                total: requestTotal
                                            }),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: requestTotal
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 212
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: t("admin.total")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 243
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AdminDashboard.jsx",
                                                lineNumber: 116,
                                                columnNumber: 206
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 116,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakdownLegend,
                                            children: data.requestBreakdown.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`dot${item.key}`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 114
                                                                }, this),
                                                                t(`admin.status.${item.key}`)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 117,
                                                            columnNumber: 108
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: item.count
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 117,
                                                            columnNumber: 194
                                                        }, this)
                                                    ]
                                                }, item.key, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 88
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 117,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 115,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 113,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                                    children: t("admin.inventory")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: t("admin.portfolioMix")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 109
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 122,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDollarSign$3e$__["CircleDollarSign"], {
                                            size: 20,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 122,
                                            columnNumber: 149
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 122,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeChart,
                                    children: data.propertyBreakdown.map((item)=>{
                                        const percentage = item.count / propertyTotal * 100;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: t(`property.${item.key}`)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: item.count
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 60
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            "--progress": `${percentage}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AdminDashboard.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, item.key, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 125,
                                            columnNumber: 20
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 123,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 103,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: "requests",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                    "aria-labelledby": "requests-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                            children: t("admin.inbox")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 134,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "requests-title",
                                            children: t("admin.recent")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 134,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 134,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestCount,
                                    children: data.recentRequests.length
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 134,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this),
                        data.recentRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"], {
                                    size: 30,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 135,
                                    columnNumber: 75
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: t("admin.noRequests")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 135,
                                    columnNumber: 121
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 135,
                            columnNumber: 45
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestList,
                            children: data.recentRequests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].request,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: request.propertyTitle || t("property.generic")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: request.username
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 83
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 137,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: dateTimeFormatter.format(new Date(`${request.viewingDate}T${request.viewingTime}`))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: request.createdAt ? dateTimeFormatter.format(new Date(request.createdAt)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 120
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 138,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Admin$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`status${request.status}`]}`,
                                            children: t(`admin.status.${request.status}`)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminDashboard.jsx",
                                            lineNumber: 139,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, request.id, true, {
                                    fileName: "[project]/src/components/AdminDashboard.jsx",
                                    lineNumber: 136,
                                    columnNumber: 85
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminDashboard.jsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminDashboard.jsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AdminDashboard.jsx",
            lineNumber: 79,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AdminDashboard.jsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
_s(AdminDashboard, "YGWc0jCikdl4IdDg5salY9kzM6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_fcbc1d74._.js.map