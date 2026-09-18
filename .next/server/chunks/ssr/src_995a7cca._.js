module.exports = {

"[project]/src/styles/LogoutButton.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "button": "LogoutButton-module__NpaP3W__button",
  "error": "LogoutButton-module__NpaP3W__error",
  "menu": "LogoutButton-module__NpaP3W__menu",
  "spin": "LogoutButton-module__NpaP3W__spin",
  "spinner": "LogoutButton-module__NpaP3W__spinner",
  "wrapper": "LogoutButton-module__NpaP3W__wrapper",
});
}}),
"[project]/src/components/LogoutButton.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LogoutButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/LogoutButton.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
function LogoutButton({ variant = "primary" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function signOut() {
        if (loading) return;
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_URL}/api/v1/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
            if (!response.ok) throw new Error("Logout failed");
            router.replace("/login");
            router.refresh();
        } catch  {
            setError("Could not sign out. Please try again.");
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper} ${variant === "menu" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menu : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                onClick: signOut,
                disabled: loading,
                "aria-busy": loading,
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                        size: 17,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoutButton.jsx",
                        lineNumber: 36,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                        size: 17,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoutButton.jsx",
                        lineNumber: 36,
                        columnNumber: 95
                    }, this),
                    loading ? "Signing out…" : "Sign out"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LogoutButton.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$LogoutButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/LogoutButton.jsx",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LogoutButton.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/styles/TheHeader.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "accountActive": "TheHeader-module__qrsTIG__accountActive",
  "accountControl": "TheHeader-module__qrsTIG__accountControl",
  "accountDetails": "TheHeader-module__qrsTIG__accountDetails",
  "accountName": "TheHeader-module__qrsTIG__accountName",
  "accountPanel": "TheHeader-module__qrsTIG__accountPanel",
  "accountSlot": "TheHeader-module__qrsTIG__accountSlot",
  "actions": "TheHeader-module__qrsTIG__actions",
  "active": "TheHeader-module__qrsTIG__active",
  "avatar": "TheHeader-module__qrsTIG__avatar",
  "brand": "TheHeader-module__qrsTIG__brand",
  "brandCaption": "TheHeader-module__qrsTIG__brandCaption",
  "brandName": "TheHeader-module__qrsTIG__brandName",
  "chevron": "TheHeader-module__qrsTIG__chevron",
  "divider": "TheHeader-module__qrsTIG__divider",
  "explorePanel": "TheHeader-module__qrsTIG__explorePanel",
  "exploreWrap": "TheHeader-module__qrsTIG__exploreWrap",
  "header": "TheHeader-module__qrsTIG__header",
  "inner": "TheHeader-module__qrsTIG__inner",
  "mobilePanel": "TheHeader-module__qrsTIG__mobilePanel",
  "mobileToggle": "TheHeader-module__qrsTIG__mobileToggle",
  "nav": "TheHeader-module__qrsTIG__nav",
  "navLink": "TheHeader-module__qrsTIG__navLink",
  "panel": "TheHeader-module__qrsTIG__panel",
  "panelEyebrow": "TheHeader-module__qrsTIG__panelEyebrow",
  "panelLink": "TheHeader-module__qrsTIG__panelLink",
  "pulse": "TheHeader-module__qrsTIG__pulse",
  "retry": "TheHeader-module__qrsTIG__retry",
  "role": "TheHeader-module__qrsTIG__role",
  "rotated": "TheHeader-module__qrsTIG__rotated",
  "signIn": "TheHeader-module__qrsTIG__signIn",
  "skeleton": "TheHeader-module__qrsTIG__skeleton",
  "soon": "TheHeader-module__qrsTIG__soon",
  "upcoming": "TheHeader-module__qrsTIG__upcoming",
  "username": "TheHeader-module__qrsTIG__username",
});
}}),
"[project]/src/components/TheHeader.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TheHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoutButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoutButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/TheHeader.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const upcomingSections = [
    "Agents",
    "Contact"
];
function UpcomingSections() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].upcoming,
        children: upcomingSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: section
                    }, void 0, false, {
                        fileName: "[project]/src/components/TheHeader.jsx",
                        lineNumber: 15,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].soon,
                        children: "Coming soon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TheHeader.jsx",
                        lineNumber: 15,
                        columnNumber: 78
                    }, this)
                ]
            }, section, true, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 15,
                columnNumber: 38
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TheHeader.jsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
function TheHeader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controller = new AbortController();
        async function loadUser() {
            setStatus("loading");
            try {
                const response = await fetch(`${API_URL}/api/v1/auth/me`, {
                    credentials: "include",
                    cache: "no-store",
                    signal: controller.signal
                });
                if (response.status === 401) {
                    setUser(null);
                    setStatus("ready");
                    return;
                }
                if (!response.ok) throw new Error("Account request failed");
                const account = await response.json();
                if (!controller.signal.aborted) {
                    setUser(account);
                    setStatus("ready");
                }
            } catch (error) {
                if (error.name !== "AbortError") setStatus("error");
            }
        }
        loadUser();
        return ()=>controller.abort();
    }, [
        attempt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMenu(null);
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const breakpoint = window.matchMedia("(max-width: 760px)");
        const closeMenu = ()=>setMenu(null);
        breakpoint.addEventListener("change", closeMenu);
        return ()=>breakpoint.removeEventListener("change", closeMenu);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!menu) return;
        if (pendingFocus.current) {
            const items = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
            const target = pendingFocus.current === "last" ? items?.[items.length - 1] : items?.[0];
            target?.focus();
            pendingFocus.current = null;
        }
        function onPointerDown(event) {
            if (!panelRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) setMenu(null);
        }
        function onKeyDown(event) {
            if (event.key === "Escape") {
                event.preventDefault();
                setMenu(null);
                triggerRef.current?.focus();
            }
        }
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [
        menu
    ]);
    function toggleMenu(name, event) {
        triggerRef.current = event.currentTarget;
        setMenu((current)=>current === name ? null : name);
    }
    function onTriggerKeyDown(name, event) {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        event.preventDefault();
        triggerRef.current = event.currentTarget;
        pendingFocus.current = event.key === "ArrowUp" ? "last" : "first";
        if (menu === name) {
            const items = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
            (event.key === "ArrowUp" ? items?.[items.length - 1] : items?.[0])?.focus();
            pendingFocus.current = null;
        } else setMenu(name);
    }
    function onPanelKeyDown(event) {
        if (![
            "ArrowDown",
            "ArrowUp",
            "Home",
            "End"
        ].includes(event.key)) return;
        const items = Array.from(event.currentTarget.querySelectorAll("a[href], button:not([disabled])"));
        if (!items.length) return;
        event.preventDefault();
        const current = items.indexOf(document.activeElement);
        let next = event.key === "ArrowUp" ? (current - 1 + items.length) % items.length : (current + 1) % items.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = items.length - 1;
        items[next].focus();
    }
    const role = user?.roles?.split(",").some((value)=>value.trim() === "ROLE_ADMIN") ? "Administrator" : "Member";
    const initials = user?.username?.slice(0, 2).toUpperCase() || "PK";
    const accountDetails = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountDetails,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                "aria-hidden": "true",
                children: initials
            }, void 0, false, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 125,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountName,
                        children: user.username
                    }, void 0, false, {
                        fileName: "[project]/src/components/TheHeader.jsx",
                        lineNumber: 126,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                        children: role
                    }, void 0, false, {
                        fileName: "[project]/src/components/TheHeader.jsx",
                        lineNumber: 126,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 126,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TheHeader.jsx",
        lineNumber: 124,
        columnNumber: 34
    }, this);
    const accountActions = user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/profile",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelLink,
                "aria-current": pathname === "/profile" ? "page" : undefined,
                onClick: ()=>setMenu(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                        size: 17,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TheHeader.jsx",
                        lineNumber: 130,
                        columnNumber: 7
                    }, this),
                    "My profile"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 129,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 132,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoutButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "menu"
            }, void 0, false, {
                fileName: "[project]/src/components/TheHeader.jsx",
                lineNumber: 133,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        ref: headerRef,
        onBlur: (event)=>{
            if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setMenu(null);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/home",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brand,
                    "aria-label": "PrimeKey — home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                            size: 23,
                            strokeWidth: 1.8,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandName,
                            children: "PrimeKey"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brandCaption,
                            children: "REAL ESTATE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TheHeader.jsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                    "aria-label": "Main navigation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/home",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink} ${pathname === "/home" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                            "aria-current": pathname === "/home" ? "page" : undefined,
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/properties",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink} ${pathname.startsWith("/properties") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                            "aria-current": pathname === "/properties" ? "page" : undefined,
                            children: "Properties"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exploreWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                    "aria-expanded": menu === "explore",
                                    "aria-controls": `${id}-explore`,
                                    onClick: (event)=>toggleMenu("explore", event),
                                    children: [
                                        "Explore",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 14,
                                            className: menu === "explore" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rotated : "",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TheHeader.jsx",
                                            lineNumber: 151,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TheHeader.jsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                menu === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: `${id}-explore`,
                                    ref: panelRef,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorePanel}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelEyebrow,
                                            children: "More to explore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TheHeader.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UpcomingSections, {}, void 0, false, {
                                            fileName: "[project]/src/components/TheHeader.jsx",
                                            lineNumber: 154,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TheHeader.jsx",
                                    lineNumber: 153,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TheHeader.jsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountSlot,
                            children: status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skeleton,
                                role: "status",
                                "aria-label": "Loading account",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/TheHeader.jsx",
                                        lineNumber: 160,
                                        columnNumber: 113
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/TheHeader.jsx",
                                        lineNumber: 160,
                                        columnNumber: 121
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 160,
                                columnNumber: 37
                            }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retry,
                                onClick: ()=>setAttempt((value)=>value + 1),
                                "aria-label": "Account unavailable. Retry loading",
                                children: "Retry account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 161,
                                columnNumber: 38
                            }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountControl} ${menu === "account" || pathname === "/profile" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountActive : ""}`,
                                "aria-label": `Account: ${user.username}`,
                                "aria-expanded": menu === "account",
                                "aria-controls": `${id}-account`,
                                onClick: (event)=>toggleMenu("account", event),
                                onKeyDown: (event)=>onTriggerKeyDown("account", event),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                        "aria-hidden": "true",
                                        children: initials
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TheHeader.jsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].username,
                                        children: user.username
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TheHeader.jsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 15,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chevron} ${menu === "account" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rotated : ""}`,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TheHeader.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 162,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signIn,
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 166,
                                columnNumber: 27
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileToggle,
                            "aria-label": menu === "mobile" ? "Close navigation" : "Open navigation",
                            "aria-expanded": menu === "mobile",
                            "aria-controls": `${id}-mobile`,
                            onClick: (event)=>toggleMenu("mobile", event),
                            onKeyDown: (event)=>onTriggerKeyDown("mobile", event),
                            children: menu === "mobile" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 22,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 169,
                                columnNumber: 34
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 22,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TheHeader.jsx",
                                lineNumber: 169,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TheHeader.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                menu === "account" && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: `${id}-account`,
                    ref: panelRef,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accountPanel}`,
                    onKeyDown: onPanelKeyDown,
                    children: [
                        accountDetails,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 173,
                            columnNumber: 27
                        }, this),
                        accountActions
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TheHeader.jsx",
                    lineNumber: 172,
                    columnNumber: 40
                }, this),
                menu === "mobile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: `${id}-mobile`,
                    ref: panelRef,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobilePanel}`,
                    "aria-label": "Mobile navigation",
                    onKeyDown: onPanelKeyDown,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/home",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelLink,
                            "aria-current": pathname === "/home" ? "page" : undefined,
                            onClick: ()=>setMenu(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    size: 17,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TheHeader.jsx",
                                    lineNumber: 176,
                                    columnNumber: 146
                                }, this),
                                "Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/properties",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelLink,
                            "aria-current": pathname === "/properties" ? "page" : undefined,
                            onClick: ()=>setMenu(null),
                            children: "Properties"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelEyebrow,
                            children: "Explore"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 178,
                            columnNumber: 45
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UpcomingSections, {}, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 178,
                            columnNumber: 91
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                accountDetails,
                                accountActions
                            ]
                        }, void 0, true) : status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                            role: "status",
                            children: "Loading account…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 180,
                            columnNumber: 82
                        }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelLink,
                            onClick: ()=>setAttempt((value)=>value + 1),
                            children: "Retry account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 180,
                            columnNumber: 167
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$TheHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelLink,
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TheHeader.jsx",
                            lineNumber: 180,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TheHeader.jsx",
                    lineNumber: 175,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TheHeader.jsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TheHeader.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_995a7cca._.js.map