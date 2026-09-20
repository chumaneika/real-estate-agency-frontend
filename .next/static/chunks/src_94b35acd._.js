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
"[project]/src/lib/propertyImages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "propertyImages": (()=>propertyImages)
});
const MAX_GALLERY_IMAGES = 12;
function imageSource(image) {
    if (typeof image === "string") return image;
    if (image && typeof image.url === "string") return image.url;
    return "";
}
function propertyImages(property) {
    const source = Array.isArray(property?.imageUrls) ? property.imageUrls : Array.isArray(property?.images) ? property.images : [];
    return [
        ...new Set(source.map(imageSource).map((url)=>url.trim()).filter((url)=>url.startsWith("/") || /^https?:\/\//i.test(url)))
    ].slice(0, MAX_GALLERY_IMAGES);
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
  "cardFavorite": "Properties-module__QaNtRq__cardFavorite",
  "cardImage": "Properties-module__QaNtRq__cardImage",
  "cardLink": "Properties-module__QaNtRq__cardLink",
  "cardMeta": "Properties-module__QaNtRq__cardMeta",
  "cardSkeleton": "Properties-module__QaNtRq__cardSkeleton",
  "cards": "Properties-module__QaNtRq__cards",
  "catalogLayout": "Properties-module__QaNtRq__catalogLayout",
  "commentControl": "Properties-module__QaNtRq__commentControl",
  "confirmation": "Properties-module__QaNtRq__confirmation",
  "confirmationIcon": "Properties-module__QaNtRq__confirmationIcon",
  "confirmationMeta": "Properties-module__QaNtRq__confirmationMeta",
  "container": "Properties-module__QaNtRq__container",
  "description": "Properties-module__QaNtRq__description",
  "detailCard": "Properties-module__QaNtRq__detailCard",
  "detailFavorite": "Properties-module__QaNtRq__detailFavorite",
  "detailLayout": "Properties-module__QaNtRq__detailLayout",
  "detailPrice": "Properties-module__QaNtRq__detailPrice",
  "detailVisual": "Properties-module__QaNtRq__detailVisual",
  "error": "Properties-module__QaNtRq__error",
  "expandLabel": "Properties-module__QaNtRq__expandLabel",
  "eyebrow": "Properties-module__QaNtRq__eyebrow",
  "favoriteActive": "Properties-module__QaNtRq__favoriteActive",
  "favoriteButton": "Properties-module__QaNtRq__favoriteButton",
  "favoriteToolbar": "Properties-module__QaNtRq__favoriteToolbar",
  "field": "Properties-module__QaNtRq__field",
  "filterHeading": "Properties-module__QaNtRq__filterHeading",
  "filterNote": "Properties-module__QaNtRq__filterNote",
  "filters": "Properties-module__QaNtRq__filters",
  "formError": "Properties-module__QaNtRq__formError",
  "formField": "Properties-module__QaNtRq__formField",
  "formNote": "Properties-module__QaNtRq__formNote",
  "gallery": "Properties-module__QaNtRq__gallery",
  "galleryFallback": "Properties-module__QaNtRq__galleryFallback",
  "galleryImage": "Properties-module__QaNtRq__galleryImage",
  "galleryImageLoaded": "Properties-module__QaNtRq__galleryImageLoaded",
  "galleryMain": "Properties-module__QaNtRq__galleryMain",
  "galleryShimmer": "Properties-module__QaNtRq__galleryShimmer",
  "gallerySkeleton": "Properties-module__QaNtRq__gallerySkeleton",
  "heading": "Properties-module__QaNtRq__heading",
  "imageCounter": "Properties-module__QaNtRq__imageCounter",
  "lightbox": "Properties-module__QaNtRq__lightbox",
  "lightboxArrow": "Properties-module__QaNtRq__lightboxArrow",
  "lightboxClose": "Properties-module__QaNtRq__lightboxClose",
  "lightboxCounter": "Properties-module__QaNtRq__lightboxCounter",
  "lightboxImage": "Properties-module__QaNtRq__lightboxImage",
  "lightboxNext": "Properties-module__QaNtRq__lightboxNext",
  "lightboxPrevious": "Properties-module__QaNtRq__lightboxPrevious",
  "outlineButton": "Properties-module__QaNtRq__outlineButton",
  "page": "Properties-module__QaNtRq__page",
  "pagination": "Properties-module__QaNtRq__pagination",
  "photoNote": "Properties-module__QaNtRq__photoNote",
  "price": "Properties-module__QaNtRq__price",
  "priceFields": "Properties-module__QaNtRq__priceFields",
  "propertyCard": "Properties-module__QaNtRq__propertyCard",
  "pulse": "Properties-module__QaNtRq__pulse",
  "searchControl": "Properties-module__QaNtRq__searchControl",
  "selectWithIcon": "Properties-module__QaNtRq__selectWithIcon",
  "sort": "Properties-module__QaNtRq__sort",
  "specifications": "Properties-module__QaNtRq__specifications",
  "spin": "Properties-module__QaNtRq__spin",
  "spinner": "Properties-module__QaNtRq__spinner",
  "state": "Properties-module__QaNtRq__state",
  "submitViewing": "Properties-module__QaNtRq__submitViewing",
  "summary": "Properties-module__QaNtRq__summary",
  "textButton": "Properties-module__QaNtRq__textButton",
  "thumbnail": "Properties-module__QaNtRq__thumbnail",
  "thumbnailActive": "Properties-module__QaNtRq__thumbnailActive",
  "thumbnails": "Properties-module__QaNtRq__thumbnails",
  "toolbar": "Properties-module__QaNtRq__toolbar",
  "typeBadge": "Properties-module__QaNtRq__typeBadge",
  "viewingCard": "Properties-module__QaNtRq__viewingCard",
  "viewingFields": "Properties-module__QaNtRq__viewingFields",
  "viewingForm": "Properties-module__QaNtRq__viewingForm",
  "viewingGuest": "Properties-module__QaNtRq__viewingGuest",
  "viewingHeading": "Properties-module__QaNtRq__viewingHeading",
  "viewingIcon": "Properties-module__QaNtRq__viewingIcon",
  "viewingStatus": "Properties-module__QaNtRq__viewingStatus",
  "visual": "Properties-module__QaNtRq__visual",
});
}}),
"[project]/src/components/FavoriteButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FavoriteButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFavorites$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFavorites.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FavoriteButton({ propertyId, propertyName, variant = "card" }) {
    _s();
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFavorites$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const active = favorites.has(propertyId);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const label = t(active ? "favorite.remove" : "favorite.save", {
        name: propertyName
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favoriteButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`${variant}Favorite`]} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favoriteActive : ""}`,
        onClick: ()=>{
            favorites.toggle(propertyId);
            showToast(t(active ? "toast.removed" : "toast.saved"), {
                type: "success"
            });
        },
        disabled: !favorites.ready,
        "aria-label": favorites.ready ? label : t("favorite.loading"),
        "aria-pressed": active,
        title: favorites.ready ? label : t("favorite.loading"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                size: 18,
                fill: active ? "currentColor" : "none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/FavoriteButton.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            variant === "detail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t(active ? "favorite.saved" : "favorite.action")
            }, void 0, false, {
                fileName: "[project]/src/components/FavoriteButton.jsx",
                lineNumber: 29,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FavoriteButton.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(FavoriteButton, "PFeb+JR6f6ibTizkn9EPlSTwF6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFavorites$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = FavoriteButton;
var _c;
__turbopack_context__.k.register(_c, "FavoriteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PropertyCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/propertyImages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FavoriteButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function PropertyCard({ property }) {
    _s();
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyTitle"])(property);
    const coverImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyImages"])(property)[0];
    const [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyCard.useEffect": ()=>setImageFailed(false)
    }["PropertyCard.useEffect"], [
        coverImage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].propertyCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                propertyId: property.id,
                propertyName: title
            }, void 0, false, {
                fileName: "[project]/src/components/PropertyCard.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/properties/${property.id}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visual,
                        "aria-hidden": "true",
                        children: [
                            coverImage && !imageFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: coverImage,
                                alt: "",
                                fill: true,
                                unoptimized: true,
                                sizes: "(max-width: 540px) 100vw, (max-width: 760px) 50vw, (max-width: 950px) 100vw, 38vw",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                                onError: ()=>setImageFailed(true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        size: 54,
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoNote,
                                        children: t("property.photoSoon")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 36,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeBadge,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyTypes"][property.type] ? t(`property.${property.type}`) : t("property.generic")
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardArrow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyCard.jsx",
                                    lineNumber: 38,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(property.price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].address,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 14,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 43,
                                        columnNumber: 41
                                    }, this),
                                    property.address || t("property.addressMissing")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 43,
                                columnNumber: 11
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
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this),
                                            property.area == null ? t("property.areaMissing") : `${property.area} m²`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                                                size: 15,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PropertyCard.jsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this),
                                            property.rooms == null ? t("property.roomsMissing") : `${property.rooms} ${t(property.rooms === 1 ? "property.room" : "property.roomsLabel")}`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyCard.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PropertyCard.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PropertyCard.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(PropertyCard, "8f2Mdk6TK09HAqx9ac0TPRvmQ/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferences"]
    ];
});
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
}]);

//# sourceMappingURL=src_94b35acd._.js.map