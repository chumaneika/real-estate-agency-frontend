(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/properties.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterProperties": (()=>filterProperties),
    "formatPrice": (()=>formatPrice),
    "propertyTitle": (()=>propertyTitle),
    "propertyTypes": (()=>propertyTypes)
});
const propertyTypes = {
    RESIDENTIAL: "Residential",
    NONRESIDENTIAL: "Non-residential",
    COMMERCIAL: "Commercial"
};
const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});
function formatPrice(value) {
    return value == null ? "Price on request" : priceFormat.format(value);
}
function propertyTitle(property) {
    return property.title?.trim() || property.address || "Property";
}
function filterProperties(properties, filters) {
    const query = filters.search.trim().toLowerCase();
    const filtered = properties.filter((property)=>{
        if (query && !`${property.title ?? ""} ${property.address ?? ""}`.toLowerCase().includes(query)) return false;
        if (filters.type && property.type !== filters.type) return false;
        if (filters.rooms && (property.rooms == null || property.rooms < Number(filters.rooms))) return false;
        if (filters.minPrice !== "" && (property.price == null || property.price < Number(filters.minPrice))) return false;
        if (filters.maxPrice !== "" && (property.price == null || property.price > Number(filters.maxPrice))) return false;
        return true;
    });
    return filtered.sort((a, b)=>{
        if (filters.sort === "priceAsc" || filters.sort === "priceDesc") {
            if (a.price == null) return b.price == null ? 0 : 1;
            if (b.price == null) return -1;
            return filters.sort === "priceAsc" ? a.price - b.price : b.price - a.price;
        }
        return b.id - a.id;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/pages/Properties.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "address": "Properties-module__QaNtRq__address",
  "back": "Properties-module__QaNtRq__back",
  "button": "Properties-module__QaNtRq__button",
  "cardArrow": "Properties-module__QaNtRq__cardArrow",
  "cardBody": "Properties-module__QaNtRq__cardBody",
  "cardMeta": "Properties-module__QaNtRq__cardMeta",
  "cardSkeleton": "Properties-module__QaNtRq__cardSkeleton",
  "cards": "Properties-module__QaNtRq__cards",
  "catalogLayout": "Properties-module__QaNtRq__catalogLayout",
  "container": "Properties-module__QaNtRq__container",
  "description": "Properties-module__QaNtRq__description",
  "detailCard": "Properties-module__QaNtRq__detailCard",
  "detailLayout": "Properties-module__QaNtRq__detailLayout",
  "detailPrice": "Properties-module__QaNtRq__detailPrice",
  "detailVisual": "Properties-module__QaNtRq__detailVisual",
  "error": "Properties-module__QaNtRq__error",
  "eyebrow": "Properties-module__QaNtRq__eyebrow",
  "field": "Properties-module__QaNtRq__field",
  "filterHeading": "Properties-module__QaNtRq__filterHeading",
  "filterNote": "Properties-module__QaNtRq__filterNote",
  "filters": "Properties-module__QaNtRq__filters",
  "heading": "Properties-module__QaNtRq__heading",
  "outlineButton": "Properties-module__QaNtRq__outlineButton",
  "page": "Properties-module__QaNtRq__page",
  "pagination": "Properties-module__QaNtRq__pagination",
  "photoNote": "Properties-module__QaNtRq__photoNote",
  "price": "Properties-module__QaNtRq__price",
  "priceFields": "Properties-module__QaNtRq__priceFields",
  "propertyCard": "Properties-module__QaNtRq__propertyCard",
  "pulse": "Properties-module__QaNtRq__pulse",
  "searchControl": "Properties-module__QaNtRq__searchControl",
  "sort": "Properties-module__QaNtRq__sort",
  "specifications": "Properties-module__QaNtRq__specifications",
  "state": "Properties-module__QaNtRq__state",
  "summary": "Properties-module__QaNtRq__summary",
  "textButton": "Properties-module__QaNtRq__textButton",
  "toolbar": "Properties-module__QaNtRq__toolbar",
  "typeBadge": "Properties-module__QaNtRq__typeBadge",
  "visual": "Properties-module__QaNtRq__visual",
});
}}),
"[project]/src/components/PropertyCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-client] (css module)");
;
;
;
;
;
function PropertyCard({ property }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/properties/${property.id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].propertyCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visual,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeBadge,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyTypes"][property.type] || "Property"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        size: 54,
                        strokeWidth: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoNote,
                        children: "Photography coming soon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardArrow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyCard.jsx",
                            lineNumber: 13,
                            columnNumber: 44
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PropertyCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(property.price)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyTitle"])(property)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].address,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 14,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 18,
                                columnNumber: 39
                            }, this),
                            property.address || "Address not provided"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                        size: 15,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 20,
                                        columnNumber: 17
                                    }, this),
                                    property.area == null ? "Area not provided" : `${property.area} m²`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                                        size: 15,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this),
                                    property.rooms == null ? "Rooms not provided" : `${property.rooms} ${property.rooms === 1 ? "room" : "rooms"}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PropertyCard.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PropertyCard.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PropertyCard;
var _c;
__turbopack_context__.k.register(_c, "PropertyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/usePropertyData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>usePropertyData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "";
function usePropertyData(path) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "loading",
        data: null
    });
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePropertyData.useEffect": ()=>{
            const controller = new AbortController();
            setState({
                status: "loading",
                data: null
            });
            async function load() {
                try {
                    const response = await fetch(`${API_URL}/api/v1/properties/${path}`, {
                        credentials: "include",
                        cache: "no-store",
                        signal: controller.signal
                    });
                    if (response.status === 404 && path !== "get-all") {
                        setState({
                            status: "notFound",
                            data: null
                        });
                        return;
                    }
                    if (!response.ok) throw new Error("Property request failed");
                    const data = await response.json();
                    if (path === "get-all" ? !Array.isArray(data) : !data || typeof data.id !== "number") throw new Error("Invalid property data");
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
                "usePropertyData.useEffect": ()=>controller.abort()
            })["usePropertyData.useEffect"];
        }
    }["usePropertyData.useEffect"], [
        path,
        attempt
    ]);
    return {
        ...state,
        retry: ()=>setAttempt((value)=>value + 1)
    };
}
_s(usePropertyData, "QpF/Fzd1BHy9m77NIqbV1JiocWo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/sections/RecentProperties.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "address": "RecentProperties-module__3-2seG__address",
  "browse": "RecentProperties-module__3-2seG__browse",
  "card": "RecentProperties-module__3-2seG__card",
  "container": "RecentProperties-module__3-2seG__container",
  "empty": "RecentProperties-module__3-2seG__empty",
  "grid": "RecentProperties-module__3-2seG__grid",
  "image": "RecentProperties-module__3-2seG__image",
  "info": "RecentProperties-module__3-2seG__info",
  "meta": "RecentProperties-module__3-2seG__meta",
  "name": "RecentProperties-module__3-2seG__name",
  "price": "RecentProperties-module__3-2seG__price",
  "retry": "RecentProperties-module__3-2seG__retry",
  "title": "RecentProperties-module__3-2seG__title",
});
}}),
"[project]/src/components/RecentProperties.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RecentProperties)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PropertyCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePropertyData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/sections/RecentProperties.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RecentProperties() {
    _s();
    const { status, data, retry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("get-all");
    const properties = data ? [
        ...data
    ].sort((a, b)=>b.id - a.id).slice(0, 3) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Recent Properties"
            }, void 0, false, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Loading properties…"
            }, void 0, false, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 14,
                columnNumber: 31
            }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        children: "Properties are temporarily unavailable."
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentProperties.jsx",
                        lineNumber: 15,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].retry,
                        onClick: retry,
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecentProperties.jsx",
                        lineNumber: 15,
                        columnNumber: 96
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 15,
                columnNumber: 32
            }, this) : properties.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: properties.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        property: property
                    }, property.id, false, {
                        fileName: "[project]/src/components/RecentProperties.jsx",
                        lineNumber: 16,
                        columnNumber: 88
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 16,
                columnNumber: 31
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                children: "New properties will appear here when they’re added to the collection."
            }, void 0, false, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 17,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/properties",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$sections$2f$RecentProperties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browse,
                children: "Explore all properties →"
            }, void 0, false, {
                fileName: "[project]/src/components/RecentProperties.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecentProperties.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(RecentProperties, "X5HGISbLfM570WwwZerwo/IB0cA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = RecentProperties;
var _c;
__turbopack_context__.k.register(_c, "RecentProperties");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ArrowUpRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
];
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-up-right", __iconNode);
;
 //# sourceMappingURL=arrow-up-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowUpRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Building2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
            key: "1b4qmf"
        }
    ],
    [
        "path",
        {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
            key: "i71pzd"
        }
    ],
    [
        "path",
        {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
            key: "10jefs"
        }
    ],
    [
        "path",
        {
            d: "M10 6h4",
            key: "1itunk"
        }
    ],
    [
        "path",
        {
            d: "M10 10h4",
            key: "tcdvrf"
        }
    ],
    [
        "path",
        {
            d: "M10 14h4",
            key: "kelpxr"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
];
const Building2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("building-2", __iconNode);
;
 //# sourceMappingURL=building-2.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Building2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>MapPin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MapPin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Ruler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
            key: "icamh8"
        }
    ],
    [
        "path",
        {
            d: "m14.5 12.5 2-2",
            key: "inckbg"
        }
    ],
    [
        "path",
        {
            d: "m11.5 9.5 2-2",
            key: "fmmyf7"
        }
    ],
    [
        "path",
        {
            d: "m8.5 6.5 2-2",
            key: "vc6u1g"
        }
    ],
    [
        "path",
        {
            d: "m17.5 15.5 2-2",
            key: "wo5hmg"
        }
    ]
];
const Ruler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ruler", __iconNode);
;
 //# sourceMappingURL=ruler.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ruler": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>DoorOpen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 20H2",
            key: "nlcfvz"
        }
    ],
    [
        "path",
        {
            d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
            key: "au4z13"
        }
    ],
    [
        "path",
        {
            d: "M11 4H8a2 2 0 0 0-2 2v14",
            key: "74r1mk"
        }
    ],
    [
        "path",
        {
            d: "M14 12h.01",
            key: "1jfl7z"
        }
    ],
    [
        "path",
        {
            d: "M22 20h-3",
            key: "vhrsz"
        }
    ]
];
const DoorOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("door-open", __iconNode);
;
 //# sourceMappingURL=door-open.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript) <export default as DoorOpen>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DoorOpen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_f322c271._.js.map