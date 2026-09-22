module.exports = {

"[project]/src/lib/properties.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/propertyImages.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/styles/pages/Properties.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/src/components/FavoriteButton.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FavoriteButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFavorites$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFavorites.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FavoriteButton({ propertyId, propertyName, variant = "card" }) {
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFavorites$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const active = favorites.has(propertyId);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const label = t(active ? "favorite.remove" : "favorite.save", {
        name: propertyName
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].favoriteButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`${variant}Favorite`]} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].favoriteActive : ""}`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                size: 18,
                fill: active ? "currentColor" : "none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/FavoriteButton.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            variant === "detail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}}),
"[project]/src/components/PropertyCard.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-ssr] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/properties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/propertyImages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FavoriteButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-ssr] (ecmascript)");
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
;
function PropertyCard({ property }) {
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTitle"])(property);
    const coverImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyImages"])(property)[0];
    const [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setImageFailed(false), [
        coverImage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].propertyCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                propertyId: property.id,
                propertyName: title
            }, void 0, false, {
                fileName: "[project]/src/components/PropertyCard.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/properties/${property.id}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visual,
                        "aria-hidden": "true",
                        children: [
                            coverImage && !imageFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: coverImage,
                                alt: "",
                                fill: true,
                                unoptimized: true,
                                sizes: "(max-width: 540px) 100vw, (max-width: 760px) 50vw, (max-width: 950px) 100vw, 38vw",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImage,
                                onError: ()=>setImageFailed(true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        size: 54,
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoNote,
                                        children: t("property.photoSoon")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PropertyCard.jsx",
                                        lineNumber: 36,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typeBadge,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTypes"][property.type] ? t(`property.${property.type}`) : t("property.generic")
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardArrow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(property.price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyCard.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].address,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardMeta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
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
}}),
"[project]/src/hooks/usePropertyData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>usePropertyData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8080") ?? "";
function usePropertyData(path) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: "loading",
        data: null
    });
    const [attempt, setAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>controller.abort();
    }, [
        path,
        attempt
    ]);
    return {
        ...state,
        retry: ()=>setAttempt((value)=>value + 1)
    };
}
}}),
"[project]/src/lib/catalogFilters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_CATALOG_FILTERS": (()=>DEFAULT_CATALOG_FILTERS),
    "catalogParams": (()=>catalogParams),
    "catalogStateFromParams": (()=>catalogStateFromParams)
});
const DEFAULT_CATALOG_FILTERS = {
    search: "",
    type: "",
    rooms: "",
    minPrice: "",
    maxPrice: "",
    sort: "newest"
};
const SORTS = new Set([
    "newest",
    "priceAsc",
    "priceDesc"
]);
const TYPES = new Set([
    "RESIDENTIAL",
    "NONRESIDENTIAL",
    "COMMERCIAL"
]);
function nonNegativeNumber(value) {
    return value !== null && value !== "" && Number.isFinite(Number(value)) && Number(value) >= 0 ? value : "";
}
function catalogStateFromParams(params) {
    const type = params.get("type") || "";
    const rooms = params.get("rooms") || "";
    const sort = params.get("sort") || "newest";
    const page = Number.parseInt(params.get("page") || "1", 10);
    return {
        filters: {
            search: (params.get("q") || "").slice(0, 120),
            type: TYPES.has(type) ? type : "",
            rooms: /^[1-5]$/.test(rooms) ? rooms : "",
            minPrice: nonNegativeNumber(params.get("min")),
            maxPrice: nonNegativeNumber(params.get("max")),
            sort: SORTS.has(sort) ? sort : "newest"
        },
        page: Number.isFinite(page) && page > 0 ? page : 1
    };
}
function catalogParams(filters, page = 1) {
    const params = new URLSearchParams();
    if (filters.search.trim()) params.set("q", filters.search.trim());
    if (filters.type) params.set("type", filters.type);
    if (filters.rooms) params.set("rooms", filters.rooms);
    if (filters.minPrice !== "") params.set("min", filters.minPrice);
    if (filters.maxPrice !== "") params.set("max", filters.maxPrice);
    if (filters.sort !== "newest") params.set("sort", filters.sort);
    if (page > 1) params.set("page", String(page));
    return params.toString();
}
}}),
"[project]/src/components/PropertyCatalog.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyCatalog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PropertyCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePropertyData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/properties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/pages/Properties.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalogFilters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProviders.jsx [app-ssr] (ecmascript)");
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
;
const PAGE_SIZE = 12;
function PropertyCatalog() {
    const { status, data, retry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("get-all");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.toString();
    const initialState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogStateFromParams"])(searchParams);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState.filters);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState.page);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogStateFromParams"])(new URLSearchParams(query));
        setFilters(next.filters);
        setPage(next.page);
    }, [
        query
    ]);
    const negativePrice = Number(filters.minPrice) < 0 || Number(filters.maxPrice) < 0;
    const invalidRange = negativePrice || filters.minPrice !== "" && filters.maxPrice !== "" && Number(filters.minPrice) > Number(filters.maxPrice);
    const properties = data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProperties"])(data, filters) : [];
    const pages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
    const currentPage = Math.min(page, pages);
    function updateUrl(nextFilters, nextPage) {
        const nextQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogParams"])(nextFilters, nextPage);
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
            scroll: false
        });
    }
    function changeFilter(name, value) {
        const next = {
            ...filters,
            [name]: value
        };
        setFilters(next);
        setPage(1);
        updateUrl(next, 1);
    }
    function changePage(nextPage) {
        setPage(nextPage);
        updateUrl(filters, nextPage);
    }
    function resetFilters() {
        setFilters(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_FILTERS"]);
        setPage(1);
        updateUrl(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalogFilters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CATALOG_FILTERS"], 1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: t("catalog.eyebrow")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: t("catalog.title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t("catalog.subtitle")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].catalogLayout,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filters,
                            "aria-labelledby": "filter-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "filter-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                                    size: 17,
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 73
                                                }, this),
                                                t("catalog.filters")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 60,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetFilters,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textButton,
                                            children: t("catalog.reset")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 60,
                                            columnNumber: 150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        t("catalog.search"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchControl,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    size: 17,
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 105
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "search",
                                                    value: filters.search,
                                                    onChange: (event)=>changeFilter("search", event.target.value),
                                                    placeholder: t("catalog.searchPlaceholder")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 144
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 61,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        t("catalog.type"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filters.type,
                                            onChange: (event)=>changeFilter("type", event.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t("catalog.allTypes")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 154
                                                }, this),
                                                Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTypes"]).map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: value,
                                                        children: t(`property.${value}`)
                                                    }, value, false, {
                                                        fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 244
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 62,
                                            columnNumber: 64
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].priceFields,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                t("catalog.min"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: filters.minPrice,
                                                    onChange: (event)=>changeFilter("minPrice", event.target.value),
                                                    placeholder: t("catalog.any"),
                                                    "aria-invalid": invalidRange,
                                                    "aria-describedby": invalidRange ? "price-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                t("catalog.max"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    value: filters.maxPrice,
                                                    onChange: (event)=>changeFilter("maxPrice", event.target.value),
                                                    placeholder: t("catalog.any"),
                                                    "aria-invalid": invalidRange,
                                                    "aria-describedby": invalidRange ? "price-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                invalidRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "price-error",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                                    role: "alert",
                                    children: negativePrice ? t("catalog.negative") : t("catalog.invalidRange")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 67,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                    children: [
                                        t("catalog.rooms"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filters.rooms,
                                            onChange: (event)=>changeFilter("rooms", event.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t("catalog.anyRooms")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 157
                                                }, this),
                                                [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5
                                                ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: value,
                                                        children: t("catalog.roomOption", {
                                                            value
                                                        })
                                                    }, value, false, {
                                                        fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                        lineNumber: 68,
                                                        columnNumber: 236
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 68,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterNote,
                                    children: t("catalog.note")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].results,
                            "aria-label": "Property results",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolbar,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            role: "status",
                                            "aria-live": "polite",
                                            children: status === "ready" ? `${properties.length} ${t(properties.length === 1 ? "catalog.one" : "catalog.many")}` : t("catalog.collection")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sort,
                                            children: [
                                                t("catalog.sort"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: filters.sort,
                                                    onChange: (event)=>changeFilter("sort", event.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "newest",
                                                            children: t("catalog.newest")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                            lineNumber: 75,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "priceAsc",
                                                            children: t("catalog.lowHigh")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                            lineNumber: 75,
                                                            columnNumber: 208
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "priceDesc",
                                                            children: t("catalog.highLow")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                            lineNumber: 75,
                                                            columnNumber: 264
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 75,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cards,
                                    role: "status",
                                    "aria-label": "Loading properties",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardSkeleton,
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 205
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 212
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 220
                                                }, this)
                                            ]
                                        }, value, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 77,
                                            columnNumber: 137
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 77,
                                    columnNumber: 37
                                }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            size: 36,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 78,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: t("catalog.unavailable")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 78,
                                            columnNumber: 110
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            role: "alert",
                                            children: t("catalog.loadError")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 78,
                                            columnNumber: 145
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                            onClick: retry,
                                            children: t("catalog.tryAgain")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 78,
                                            columnNumber: 189
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 78,
                                    columnNumber: 38
                                }, this) : invalidRange ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: t("catalog.rangeTitle")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 79,
                                            columnNumber: 62
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t("catalog.rangeText")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 79,
                                            columnNumber: 96
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 79,
                                    columnNumber: 32
                                }, this) : properties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            size: 40,
                                            strokeWidth: 1.2,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 80,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: data?.length ? t("catalog.noMatch") : t("catalog.empty")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 80,
                                            columnNumber: 133
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: data?.length ? t("catalog.noMatchText") : t("catalog.emptyText")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 80,
                                            columnNumber: 200
                                        }, this),
                                        data?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                            onClick: resetFilters,
                                            children: t("catalog.resetFilters")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 80,
                                            columnNumber: 294
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                    lineNumber: 80,
                                    columnNumber: 43
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cards,
                                            children: properties.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    property: property
                                                }, property.id, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 139
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        pages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pagination,
                                            "aria-label": "Catalog pagination",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>changePage(currentPage - 1),
                                                    disabled: currentPage === 1,
                                                    "aria-label": t("catalog.previous"),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 398
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 282
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t("catalog.page", {
                                                        current: currentPage,
                                                        total: pages
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 430
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>changePage(currentPage + 1),
                                                    disabled: currentPage === pages,
                                                    "aria-label": t("catalog.next"),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 618
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 502
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                                            lineNumber: 81,
                                            columnNumber: 215
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PropertyCatalog.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PropertyCatalog.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PropertyCatalog.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PropertyCatalog.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_5b02cee7._.js.map