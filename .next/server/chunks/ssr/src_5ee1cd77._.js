module.exports = {

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
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
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
"[project]/src/lib/viewings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VIEWING_TIMES": (()=>VIEWING_TIMES),
    "formatViewingDate": (()=>formatViewingDate),
    "localDateValue": (()=>localDateValue),
    "validateViewing": (()=>validateViewing)
});
const VIEWING_TIMES = Array.from({
    length: 20
}, (_, index)=>{
    const totalMinutes = 9 * 60 + index * 30;
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
});
function localDateValue(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function validateViewing(values, now = new Date()) {
    if (!values.date || !values.time) return "Choose a preferred date and time.";
    if (!VIEWING_TIMES.includes(values.time)) return "Choose an available viewing time.";
    const selected = new Date(`${values.date}T${values.time}:00`);
    if (Number.isNaN(selected.getTime()) || selected.getTime() <= now.getTime() + 30 * 60 * 1000) {
        return "Choose a date and time at least 30 minutes from now.";
    }
    if (values.comment.trim().length > 1000) return "Comment must contain no more than 1000 characters.";
    return "";
}
function formatViewingDate(date, time, locale = "en") {
    return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    }).format(new Date(`${date}T${time}:00`));
}
}}),
"[project]/src/components/ViewingRequestForm.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ViewingRequestForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-ssr] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-text.js [app-ssr] (ecmascript) <export default as MessageSquareText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viewings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/viewings.js [app-ssr] (ecmascript)");
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
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const initialValues = {
    date: "",
    time: "",
    comment: ""
};
function ViewingRequestForm({ property }) {
    const { t, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [accountStatus, setAccountStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [accountAttempt, setAccountAttempt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [minimumDate, setMinimumDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmation, setConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMinimumDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viewings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localDateValue"])());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controller = new AbortController();
        setAccountStatus("loading");
        async function loadAccount() {
            try {
                const response = await fetch(`${API_URL}/api/v1/auth/me`, {
                    credentials: "include",
                    cache: "no-store",
                    signal: controller.signal
                });
                if (response.status === 401) {
                    setAccountStatus("guest");
                    return;
                }
                if (!response.ok) throw new Error("Account request failed");
                await response.json();
                if (!controller.signal.aborted) setAccountStatus("ready");
            } catch (requestError) {
                if (requestError.name !== "AbortError") setAccountStatus("error");
            }
        }
        loadAccount();
        return ()=>controller.abort();
    }, [
        accountAttempt
    ]);
    function update(name, value) {
        setValues((current)=>({
                ...current,
                [name]: value
            }));
        setError("");
    }
    async function submit(event) {
        event.preventDefault();
        const validationError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viewings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateViewing"])(values);
        if (validationError) {
            setError(validationError);
            return;
        }
        setSubmitStatus("submitting");
        setError("");
        try {
            const response = await fetch(`${API_URL}/api/v1/viewing-requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    propertyId: property.id,
                    viewingDate: values.date,
                    viewingTime: values.time,
                    comment: values.comment.trim()
                })
            });
            const payload = await response.json().catch(()=>({}));
            if (response.status === 401) {
                setAccountStatus("guest");
                throw new Error("Your session expired. Sign in and try again.");
            }
            if (!response.ok) throw new Error(payload.message || "We couldn’t send your request. Please try again.");
            setConfirmation(payload);
            setSubmitStatus("success");
            showToast(t("toast.viewing"), {
                type: "success"
            });
        } catch (requestError) {
            setError(requestError.message || "We couldn’t send your request. Please try again.");
            setSubmitStatus("error");
            showToast(requestError.message || t("toast.error"), {
                type: "error"
            });
        }
    }
    function reset() {
        setValues(initialValues);
        setConfirmation(null);
        setSubmitStatus("idle");
        setError("");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingCard}`,
        "aria-labelledby": "viewing-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingHeading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                            size: 20,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ViewingRequestForm.jsx",
                            lineNumber: 101,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "viewing-title",
                                children: t("viewing.title")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 102,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t("viewing.subtitle")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 102,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            accountStatus === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingStatus,
                role: "status",
                children: t("viewing.checking")
            }, void 0, false, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 105,
                columnNumber: 38
            }, this) : accountStatus === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingStatus,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        children: t("viewing.accountError")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 106,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textButton,
                        onClick: ()=>setAccountAttempt((value)=>value + 1),
                        children: t("catalog.tryAgain")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 106,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 106,
                columnNumber: 39
            }, this) : accountStatus === "guest" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingGuest,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t("viewing.guest")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 107,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/login",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                        children: t("viewing.signIn")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 107,
                        columnNumber: 103
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formError,
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 107,
                        columnNumber: 187
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 107,
                columnNumber: 39
            }, this) : submitStatus === "success" && confirmation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmation,
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmationIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 24,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ViewingRequestForm.jsx",
                            lineNumber: 109,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: t("viewing.received")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: t("viewing.contact")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t("viewing.saved", {
                            date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viewings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatViewingDate"])(confirmation.viewingDate, confirmation.viewingTime.slice(0, 5), locale)
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmationMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("viewing.reference", {
                                    id: confirmation.id
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 113,
                                columnNumber: 52
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("viewing.pending")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 113,
                                columnNumber: 114
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outlineButton,
                        onClick: reset,
                        children: t("viewing.another")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 108,
                columnNumber: 56
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingForm,
                onSubmit: submit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewingFields,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                children: [
                                    t("viewing.date"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        min: minimumDate,
                                        value: values.date,
                                        onChange: (event)=>update("date", event.target.value),
                                        disabled: submitStatus === "submitting",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                        lineNumber: 117,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                children: [
                                    t("viewing.time"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectWithIcon,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 16,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                                lineNumber: 118,
                                                columnNumber: 108
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: values.time,
                                                onChange: (event)=>update("time", event.target.value),
                                                disabled: submitStatus === "submitting",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t("viewing.choose")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 279
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$viewings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWING_TIMES"].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: time,
                                                            children: time
                                                        }, time, false, {
                                                            fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                                            lineNumber: 118,
                                                            columnNumber: 353
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                                lineNumber: 118,
                                                columnNumber: 146
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                        lineNumber: 118,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                        children: [
                            t("viewing.comment"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("viewing.optional")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 120,
                                columnNumber: 70
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentControl,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__["MessageSquareText"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                        lineNumber: 120,
                                        columnNumber: 146
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: values.comment,
                                        onChange: (event)=>update("comment", event.target.value),
                                        maxLength: 1000,
                                        rows: 4,
                                        disabled: submitStatus === "submitting",
                                        placeholder: t("viewing.placeholder")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                        lineNumber: 120,
                                        columnNumber: 196
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 120,
                                columnNumber: 106
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    values.comment.length,
                                    "/1000"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                lineNumber: 120,
                                columnNumber: 402
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formError,
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 121,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitViewing,
                        disabled: submitStatus === "submitting",
                        "aria-busy": submitStatus === "submitting",
                        children: submitStatus === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner,
                                    size: 18,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ViewingRequestForm.jsx",
                                    lineNumber: 123,
                                    columnNumber: 48
                                }, this),
                                t("viewing.sending")
                            ]
                        }, void 0, true) : t("viewing.send")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formNote,
                        children: t("viewing.note")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ViewingRequestForm.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ViewingRequestForm.jsx",
                lineNumber: 115,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ViewingRequestForm.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
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
"[project]/src/components/PropertyGallery.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/expand.js [app-ssr] (ecmascript) <export default as Expand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/propertyImages.js [app-ssr] (ecmascript)");
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
function GalleryImage({ src, alt, priority = false, fullscreen = false, onError }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoaded(false);
        setFailed(false);
    }, [
        src
    ]);
    if (failed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryFallback,
            role: "img",
            "aria-label": `${alt}. ${t("gallery.unavailable")}.`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                    size: fullscreen ? 76 : 64,
                    strokeWidth: 1,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t("gallery.unavailable")
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t("gallery.unavailableText")
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PropertyGallery.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gallerySkeleton,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/PropertyGallery.jsx",
                lineNumber: 32,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                fill: true,
                priority: priority,
                unoptimized: true,
                sizes: fullscreen ? "100vw" : "(max-width: 760px) 100vw, 70vw",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryImage} ${loaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryImageLoaded : ""}`,
                onLoad: ()=>setLoaded(true),
                onError: ()=>{
                    setFailed(true);
                    onError?.();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PropertyGallery.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function PropertyGallery({ property }) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$propertyImages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyImages"])(property), [
        property
    ]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fullscreen, setFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const title = property?.title?.trim() || property?.address?.trim() || "Property";
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelected(0);
        setFullscreen(false);
    }, [
        property?.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fullscreen) return undefined;
        const previousOverflow = document.body.style.overflow;
        const opener = openerRef.current;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        const onKeyDown = (event)=>{
            if (event.key === "Escape") setFullscreen(false);
            if (event.key === "ArrowLeft") setSelected((index)=>(index - 1 + images.length) % images.length);
            if (event.key === "ArrowRight") setSelected((index)=>(index + 1) % images.length);
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
            opener?.focus();
        };
    }, [
        fullscreen,
        images.length
    ]);
    const choosePrevious = ()=>setSelected((index)=>(index - 1 + images.length) % images.length);
    const chooseNext = ()=>setSelected((index)=>(index + 1) % images.length);
    if (!images.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailVisual,
            role: "img",
            "aria-label": t("property.noPhotos"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                    size: 90,
                    strokeWidth: .9,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t("property.photoSoon")
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t("property.noPhotos")
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyGallery.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PropertyGallery.jsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gallery,
        "aria-label": `${title} photo gallery`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: openerRef,
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].galleryMain,
                onClick: ()=>setFullscreen(true),
                "aria-label": t("gallery.open", {
                    current: selected + 1,
                    total: images.length
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                        src: images[selected],
                        alt: `${title}, photo ${selected + 1}`,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expandLabel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$expand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Expand$3e$__["Expand"], {
                                size: 17,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyGallery.jsx",
                                lineNumber: 108,
                                columnNumber: 46
                            }, this),
                            t("gallery.fullscreen")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageCounter,
                        children: [
                            selected + 1,
                            " / ",
                            images.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PropertyGallery.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbnails,
                "aria-label": t("gallery.choose"),
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbnail} ${index === selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumbnailActive : ""}`,
                        onClick: ()=>setSelected(index),
                        "aria-label": t("gallery.show", {
                            number: index + 1
                        }),
                        "aria-pressed": index === selected,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                            src: image,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyGallery.jsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    }, image, false, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PropertyGallery.jsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            fullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightbox,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": `${title} full-screen gallery`,
                onMouseDown: (event)=>{
                    if (event.target === event.currentTarget) setFullscreen(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: closeButtonRef,
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxClose,
                        onClick: ()=>setFullscreen(false),
                        "aria-label": t("gallery.close"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyGallery.jsx",
                            lineNumber: 139,
                            columnNumber: 156
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxImage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                            src: images[selected],
                            alt: `${title}, photo ${selected + 1} of ${images.length}`,
                            fullscreen: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyGallery.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxPrevious}`,
                                onClick: choosePrevious,
                                "aria-label": t("gallery.previous"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyGallery.jsx",
                                    lineNumber: 144,
                                    columnNumber: 160
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyGallery.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxNext}`,
                                onClick: chooseNext,
                                "aria-label": t("gallery.next"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyGallery.jsx",
                                    lineNumber: 145,
                                    columnNumber: 148
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PropertyGallery.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lightboxCounter,
                        "aria-live": "polite",
                        children: t("gallery.count", {
                            current: selected + 1,
                            total: images.length
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/PropertyGallery.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PropertyGallery.jsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PropertyGallery.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/PropertyDetails.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PropertyDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-ssr] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePropertyData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/properties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FavoriteButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ViewingRequestForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ViewingRequestForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyGallery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PropertyGallery.jsx [app-ssr] (ecmascript)");
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
function PropertyDetails({ id }) {
    const validId = /^\d+$/.test(id) && Number(id) > 0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProviders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferences"])();
    const { status, data: property, retry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePropertyData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(validId ? id : "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/properties",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 20,
                            columnNumber: 58
                        }, this),
                        t("property.back")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PropertyDetails.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                status === "loading" && validId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                    role: "status",
                    children: t("property.loading")
                }, void 0, false, {
                    fileName: "[project]/src/components/PropertyDetails.jsx",
                    lineNumber: 21,
                    columnNumber: 44
                }, this) : !validId || status === "notFound" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                            size: 40,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 22,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: t("property.notFound")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 22,
                            columnNumber: 121
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t("property.notFoundText")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 22,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/properties",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                            children: t("property.explore")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 22,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PropertyDetails.jsx",
                    lineNumber: 22,
                    columnNumber: 49
                }, this) : status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].state,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: t("property.unavailable")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 23,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            children: t("property.unavailableText")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 23,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: retry,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                            children: t("catalog.tryAgain")
                        }, void 0, false, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 23,
                            columnNumber: 151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PropertyDetails.jsx",
                    lineNumber: 23,
                    columnNumber: 34
                }, this) : property && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTypes"][property.type] ? t(`property.${property.type}`) : "PRIMEKEY PROPERTY"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                    lineNumber: 25,
                                    columnNumber: 45
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTitle"])(property)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                    lineNumber: 25,
                                    columnNumber: 164
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].address,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 17,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 25,
                                            columnNumber: 228
                                        }, this),
                                        property.address || t("property.addressMissing")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                    lineNumber: 25,
                                    columnNumber: 198
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLayout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PropertyGallery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            property: property
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: t("property.about")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 56
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                                    children: property.description?.trim() || t("property.noDescription")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 86
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ViewingRequestForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            property: property
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summary}`,
                                    "aria-label": t("property.info"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                                            children: t("property.price")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailPrice,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(property.price)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 33,
                                            columnNumber: 72
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].specifications,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                                    size: 16,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                                    lineNumber: 35,
                                                                    columnNumber: 28
                                                                }, this),
                                                                t("property.area")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 35,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: property.area == null ? t("property.notProvided") : `${property.area} m²`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 35,
                                                            columnNumber: 91
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                    lineNumber: 35,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                                                                    size: 16,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 28
                                                                }, this),
                                                                t("property.rooms")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 36,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: property.rooms ?? t("property.notProvided")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 36,
                                                            columnNumber: 95
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                    size: 16,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                                    lineNumber: 37,
                                                                    columnNumber: 28
                                                                }, this),
                                                                t("property.type")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 37,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTypes"][property.type] ? t(`property.${property.type}`) : t("property.notProvided")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                                            lineNumber: 37,
                                                            columnNumber: 95
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterNote,
                                            children: t("property.reference", {
                                                id: property.id
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            propertyId: property.id,
                                            propertyName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$properties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["propertyTitle"])(property),
                                            variant: "detail"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/properties",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$pages$2f$Properties$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outlineButton,
                                            children: t("property.continue")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PropertyDetails.jsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PropertyDetails.jsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PropertyDetails.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PropertyDetails.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PropertyDetails.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_5ee1cd77._.js.map