module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/i18n.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "messages": (()=>messages)
});
const messages = {
    en: {
        "nav.home": "Home",
        "nav.properties": "Properties",
        "nav.explore": "Explore",
        "nav.profile": "My profile",
        "nav.favorites": "Favorites",
        "nav.signIn": "Sign in",
        "nav.more": "More to explore",
        "nav.agents": "Agents",
        "nav.contact": "Contact",
        "nav.soon": "Coming soon",
        "account.member": "Member",
        "account.admin": "Administrator",
        "account.retry": "Retry account",
        "preferences.dark": "Use dark mode",
        "preferences.light": "Use light mode",
        "preferences.language": "Switch language to Russian",
        "breadcrumbs.home": "Home",
        "breadcrumbs.properties": "Properties",
        "breadcrumbs.property": "Property details",
        "breadcrumbs.profile": "Profile",
        "breadcrumbs.favorites": "Favorites",
        "breadcrumbs.admin": "Admin dashboard",
        "nav.admin": "Dashboard",
        "catalog.eyebrow": "PRIMEKEY COLLECTION",
        "catalog.title": "Find your next address.",
        "property.RESIDENTIAL": "Residential",
        "property.NONRESIDENTIAL": "Non-residential",
        "property.COMMERCIAL": "Commercial",
        "property.generic": "Property",
        "property.photoSoon": "Photography coming soon",
        "property.noPhotos": "Photos haven’t been added for this property yet.",
        "property.addressMissing": "Address not provided",
        "property.areaMissing": "Area not provided",
        "property.roomsMissing": "Rooms not provided",
        "property.room": "room",
        "property.roomsLabel": "rooms",
        "property.back": "Back to properties",
        "property.loading": "Loading property…",
        "property.notFound": "Property not found",
        "property.notFoundText": "This listing may have been removed or the link may be incorrect.",
        "property.unavailable": "Property unavailable",
        "property.unavailableText": "We couldn’t load this property. Please try again.",
        "property.explore": "Explore properties",
        "property.about": "About this property",
        "property.noDescription": "A description hasn’t been added for this property yet.",
        "property.info": "Property information",
        "property.price": "ASKING PRICE",
        "property.area": "Area",
        "property.rooms": "Rooms",
        "property.type": "Type",
        "property.notProvided": "Not provided",
        "property.reference": "Property reference: #{id}",
        "property.continue": "Continue exploring",
        "gallery.unavailable": "Image unavailable",
        "gallery.unavailableText": "Try another photo or come back later.",
        "gallery.fullscreen": "Full screen",
        "gallery.open": "Open photo {current} of {total} in full screen",
        "gallery.choose": "Choose property photo",
        "gallery.show": "Show photo {number}",
        "gallery.close": "Close full-screen gallery",
        "gallery.previous": "Previous photo",
        "gallery.next": "Next photo",
        "gallery.count": "{current} of {total}",
        "auth.loginEyebrow": "Private client access",
        "auth.registerEyebrow": "Your next chapter",
        "auth.welcome": "Welcome back",
        "auth.createTitle": "Create your account",
        "auth.loginSubtitle": "Sign in to manage your property journey.",
        "auth.registerSubtitle": "Save the homes that feel like yours.",
        "auth.username": "Username or email",
        "auth.usernameOptional": "Username (optional)",
        "auth.email": "Email",
        "auth.password": "Password",
        "auth.passwordPlaceholder": "Enter your password",
        "auth.remember": "Remember me",
        "auth.forgot": "Forgot password?",
        "auth.signIn": "Sign in",
        "auth.create": "Create account",
        "auth.hasAccount": "Already have an account?",
        "auth.new": "New to PrimeKey?",
        "auth.assurance": "Your information is protected with bank-level encryption.",
        "auth.hidePassword": "Hide password",
        "auth.showPassword": "Show password",
        "auth.recovery": "Password recovery will be available soon.",
        "favorite.save": "Save {name} to favorites",
        "favorite.remove": "Remove {name} from favorites",
        "favorite.loading": "Loading favorites",
        "favorite.saved": "Saved",
        "favorite.action": "Save to favorites",
        "viewing.title": "Request a viewing",
        "viewing.subtitle": "Choose a time that works for you.",
        "viewing.checking": "Checking your account…",
        "viewing.accountError": "We couldn’t check your account.",
        "viewing.guest": "Sign in to send a viewing request and receive a confirmation.",
        "viewing.signIn": "Sign in to continue",
        "viewing.received": "REQUEST RECEIVED",
        "viewing.contact": "We’ll be in touch.",
        "viewing.saved": "Your viewing request for {date} has been saved.",
        "viewing.reference": "Reference #{id}",
        "viewing.pending": "Pending review",
        "viewing.another": "Request another time",
        "viewing.date": "Preferred date",
        "viewing.time": "Preferred time",
        "viewing.choose": "Choose a time",
        "viewing.comment": "Comment",
        "viewing.optional": "(optional)",
        "viewing.placeholder": "Anything our agent should know?",
        "viewing.sending": "Sending request…",
        "viewing.send": "Send viewing request",
        "viewing.note": "Your request will be reviewed by the PrimeKey team.",
        "profile.eyebrow": "YOUR PRIMEKEY ACCOUNT",
        "profile.title": "My profile",
        "profile.subtitle": "Your personal details, all in one place.",
        "profile.back": "Back to dashboard",
        "profile.loading": "Loading your profile…",
        "profile.overview": "Account overview",
        "profile.caption": "A place for your next chapter.",
        "profile.personal": "Personal information",
        "profile.details": "The details connected to your account.",
        "profile.username": "Username",
        "profile.email": "Email address",
        "profile.missing": "Not provided",
        "profile.note": "Your username and email are separate. Your username is used to sign in.",
        "profile.session": "Account session",
        "profile.sessionText": "Finished for now? Sign out securely on this browser.",
        "favorites.eyebrow": "YOUR SHORTLIST",
        "favorites.title": "Favorite properties.",
        "favorites.subtitle": "Keep the places worth another look together. Favorites are stored on this browser.",
        "favorites.unavailable": "Favorites unavailable",
        "favorites.loadError": "We couldn’t load the property collection.",
        "favorites.saved": "saved",
        "favorites.unavailableCount": "unavailable",
        "favorites.gone": "Saved listings are no longer available",
        "favorites.empty": "Your shortlist is ready when you are.",
        "favorites.goneText": "These properties may have been removed from the collection.",
        "favorites.emptyText": "Select the heart on any property to save it here.",
        "admin.eyebrow": "PRIMEKEY OPERATIONS",
        "admin.title": "Admin dashboard",
        "admin.subtitle": "A clear view of your property business today.",
        "admin.live": "Live data",
        "admin.overview": "Business overview",
        "admin.properties": "Properties",
        "admin.users": "Users",
        "admin.deals": "Deals",
        "admin.pending": "Pending requests",
        "admin.lastSeven": "LAST 7 DAYS",
        "admin.activity": "Activity",
        "admin.requests": "Requests",
        "admin.activityLabel": "{date}: {requests} requests and {deals} deals",
        "admin.workspace": "WORKSPACE",
        "admin.quick": "Quick actions",
        "admin.openCatalog": "Open catalog",
        "admin.openCatalogText": "Review all property listings",
        "admin.reviewRequests": "Review requests",
        "admin.reviewRequestsText": "Jump to the latest inquiries",
        "admin.account": "Account settings",
        "admin.accountText": "Open your administrator profile",
        "admin.inbox": "REQUEST INBOX",
        "admin.recent": "Latest viewing requests",
        "admin.noRequests": "No viewing requests have arrived yet.",
        "admin.loading": "Loading admin dashboard",
        "admin.forbidden": "Administrator access required",
        "admin.forbiddenText": "This workspace is available only to PrimeKey administrators.",
        "admin.unavailable": "Dashboard unavailable",
        "admin.unavailableText": "We couldn’t load the administrative data. Please try again.",
        "admin.status.PENDING": "Pending",
        "admin.status.CONFIRMED": "Confirmed",
        "admin.status.CANCELLED": "Cancelled",
        "catalog.subtitle": "Thoughtful spaces. New possibilities. Explore the properties in our collection.",
        "catalog.filters": "Filters",
        "catalog.reset": "Reset",
        "catalog.search": "Search",
        "catalog.searchPlaceholder": "Title or address",
        "catalog.type": "Property type",
        "catalog.allTypes": "All types",
        "catalog.min": "Min price ($)",
        "catalog.max": "Max price ($)",
        "catalog.any": "Any",
        "catalog.rooms": "Rooms",
        "catalog.anyRooms": "Any number",
        "catalog.roomOption": "{value}+ rooms",
        "catalog.note": "Listings and prices are supplied by our property database.",
        "catalog.sort": "Sort by",
        "catalog.newest": "Recently added",
        "catalog.lowHigh": "Price: low to high",
        "catalog.highLow": "Price: high to low",
        "catalog.collection": "Our collection",
        "catalog.one": "property",
        "catalog.many": "properties",
        "catalog.unavailable": "Collection unavailable",
        "catalog.loadError": "We couldn’t load the properties. Please try again.",
        "catalog.tryAgain": "Try again",
        "catalog.rangeTitle": "Check your price range",
        "catalog.rangeText": "Adjust the minimum or maximum price to see matching properties.",
        "catalog.negative": "Prices must not be negative.",
        "catalog.invalidRange": "Minimum price must not exceed maximum price.",
        "catalog.noMatch": "No matching properties",
        "catalog.empty": "Your next chapter is coming.",
        "catalog.noMatchText": "Try another search or reset your filters.",
        "catalog.emptyText": "There are no properties in the collection yet. New listings will appear here when they’re added.",
        "catalog.resetFilters": "Reset filters",
        "catalog.page": "Page {current} of {total}",
        "catalog.previous": "Previous page",
        "catalog.next": "Next page",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "toast.saved": "Property saved to favorites.",
        "toast.removed": "Property removed from favorites.",
        "toast.viewing": "Viewing request sent successfully.",
        "toast.error": "Something went wrong. Please try again.",
        "notFound.eyebrow": "404 — ADDRESS NOT FOUND",
        "notFound.title": "This page has moved on.",
        "notFound.text": "The address may be incorrect or the page is no longer available.",
        "notFound.home": "Back to home",
        "notFound.properties": "Explore properties",
        "error.eyebrow": "SOMETHING WENT WRONG",
        "error.title": "We hit an unexpected problem.",
        "error.text": "Your data is safe. Try loading this section again or return home.",
        "error.retry": "Try again",
        "error.home": "Back to home"
    },
    ru: {
        "nav.home": "Главная",
        "nav.properties": "Объекты",
        "nav.explore": "Разделы",
        "nav.profile": "Мой профиль",
        "nav.favorites": "Избранное",
        "nav.signIn": "Войти",
        "nav.more": "Другие разделы",
        "nav.agents": "Агенты",
        "nav.contact": "Контакты",
        "nav.soon": "Скоро",
        "account.member": "Пользователь",
        "account.admin": "Администратор",
        "account.retry": "Повторить",
        "preferences.dark": "Включить тёмную тему",
        "preferences.light": "Включить светлую тему",
        "preferences.language": "Переключить язык на английский",
        "breadcrumbs.home": "Главная",
        "breadcrumbs.properties": "Объекты",
        "breadcrumbs.property": "Карточка объекта",
        "breadcrumbs.profile": "Профиль",
        "breadcrumbs.favorites": "Избранное",
        "breadcrumbs.admin": "Панель администратора",
        "nav.admin": "Панель",
        "catalog.eyebrow": "КОЛЛЕКЦИЯ PRIMEKEY",
        "catalog.title": "Найдите свой новый адрес.",
        "property.RESIDENTIAL": "Жилая недвижимость",
        "property.NONRESIDENTIAL": "Нежилая недвижимость",
        "property.COMMERCIAL": "Коммерческая недвижимость",
        "property.generic": "Объект",
        "property.photoSoon": "Фотографии скоро появятся",
        "property.noPhotos": "Для этого объекта фотографии пока не добавлены.",
        "property.addressMissing": "Адрес не указан",
        "property.areaMissing": "Площадь не указана",
        "property.roomsMissing": "Комнаты не указаны",
        "property.room": "комната",
        "property.roomsLabel": "комнат",
        "property.back": "Назад к объектам",
        "property.loading": "Загружаем объект…",
        "property.notFound": "Объект не найден",
        "property.notFoundText": "Возможно, объявление удалено или ссылка указана неверно.",
        "property.unavailable": "Объект недоступен",
        "property.unavailableText": "Не удалось загрузить объект. Попробуйте ещё раз.",
        "property.explore": "Смотреть объекты",
        "property.about": "Об объекте",
        "property.noDescription": "Описание этого объекта пока не добавлено.",
        "property.info": "Информация об объекте",
        "property.price": "СТОИМОСТЬ",
        "property.area": "Площадь",
        "property.rooms": "Комнаты",
        "property.type": "Тип",
        "property.notProvided": "Не указано",
        "property.reference": "Номер объекта: #{id}",
        "property.continue": "Продолжить просмотр",
        "gallery.unavailable": "Изображение недоступно",
        "gallery.unavailableText": "Выберите другое фото или попробуйте позже.",
        "gallery.fullscreen": "На весь экран",
        "gallery.open": "Открыть фото {current} из {total} на весь экран",
        "gallery.choose": "Выберите фотографию объекта",
        "gallery.show": "Показать фото {number}",
        "gallery.close": "Закрыть полноэкранную галерею",
        "gallery.previous": "Предыдущее фото",
        "gallery.next": "Следующее фото",
        "gallery.count": "{current} из {total}",
        "auth.loginEyebrow": "ДОСТУП ДЛЯ КЛИЕНТОВ",
        "auth.registerEyebrow": "ВАША НОВАЯ ГЛАВА",
        "auth.welcome": "С возвращением",
        "auth.createTitle": "Создайте аккаунт",
        "auth.loginSubtitle": "Войдите, чтобы управлять поиском недвижимости.",
        "auth.registerSubtitle": "Сохраняйте дома, которые вам понравились.",
        "auth.username": "Username или email",
        "auth.usernameOptional": "Username (необязательно)",
        "auth.email": "Email",
        "auth.password": "Пароль",
        "auth.passwordPlaceholder": "Введите пароль",
        "auth.remember": "Запомнить меня",
        "auth.forgot": "Забыли пароль?",
        "auth.signIn": "Войти",
        "auth.create": "Создать аккаунт",
        "auth.hasAccount": "Уже есть аккаунт?",
        "auth.new": "Впервые в PrimeKey?",
        "auth.assurance": "Ваши данные защищены банковским уровнем шифрования.",
        "auth.hidePassword": "Скрыть пароль",
        "auth.showPassword": "Показать пароль",
        "auth.recovery": "Восстановление пароля скоро появится.",
        "favorite.save": "Добавить {name} в избранное",
        "favorite.remove": "Удалить {name} из избранного",
        "favorite.loading": "Загружаем избранное",
        "favorite.saved": "Сохранено",
        "favorite.action": "В избранное",
        "viewing.title": "Заявка на просмотр",
        "viewing.subtitle": "Выберите удобное время.",
        "viewing.checking": "Проверяем аккаунт…",
        "viewing.accountError": "Не удалось проверить аккаунт.",
        "viewing.guest": "Войдите, чтобы отправить заявку и получить подтверждение.",
        "viewing.signIn": "Войти и продолжить",
        "viewing.received": "ЗАЯВКА ПОЛУЧЕНА",
        "viewing.contact": "Мы скоро свяжемся.",
        "viewing.saved": "Заявка на просмотр {date} сохранена.",
        "viewing.reference": "Номер #{id}",
        "viewing.pending": "Ожидает проверки",
        "viewing.another": "Выбрать другое время",
        "viewing.date": "Предпочтительная дата",
        "viewing.time": "Предпочтительное время",
        "viewing.choose": "Выберите время",
        "viewing.comment": "Комментарий",
        "viewing.optional": "(необязательно)",
        "viewing.placeholder": "Что ещё нужно знать нашему агенту?",
        "viewing.sending": "Отправляем заявку…",
        "viewing.send": "Отправить заявку",
        "viewing.note": "Команда PrimeKey рассмотрит вашу заявку.",
        "profile.eyebrow": "ВАШ АККАУНТ PRIMEKEY",
        "profile.title": "Мой профиль",
        "profile.subtitle": "Ваши личные данные в одном месте.",
        "profile.back": "Назад на главную",
        "profile.loading": "Загружаем профиль…",
        "profile.overview": "Обзор аккаунта",
        "profile.caption": "Место для вашей новой главы.",
        "profile.personal": "Личная информация",
        "profile.details": "Данные, связанные с вашим аккаунтом.",
        "profile.username": "Username",
        "profile.email": "Email",
        "profile.missing": "Не указано",
        "profile.note": "Username и email — отдельные поля. Для входа используется username.",
        "profile.session": "Сессия аккаунта",
        "profile.sessionText": "Закончили работу? Безопасно выйдите из аккаунта на этом устройстве.",
        "favorites.eyebrow": "ВАШ СПИСОК",
        "favorites.title": "Избранные объекты.",
        "favorites.subtitle": "Сохраняйте интересные места вместе. Избранное хранится в этом браузере.",
        "favorites.unavailable": "Избранное недоступно",
        "favorites.loadError": "Не удалось загрузить коллекцию объектов.",
        "favorites.saved": "сохранено",
        "favorites.unavailableCount": "недоступно",
        "favorites.gone": "Сохранённые объявления больше недоступны",
        "favorites.empty": "Ваш список пока пуст.",
        "favorites.goneText": "Возможно, эти объекты удалены из коллекции.",
        "favorites.emptyText": "Нажмите на сердце у объекта, чтобы сохранить его здесь.",
        "admin.eyebrow": "УПРАВЛЕНИЕ PRIMEKEY",
        "admin.title": "Панель администратора",
        "admin.subtitle": "Главные показатели агентства на сегодня.",
        "admin.live": "Актуальные данные",
        "admin.overview": "Обзор бизнеса",
        "admin.properties": "Объекты",
        "admin.users": "Пользователи",
        "admin.deals": "Сделки",
        "admin.pending": "Новые заявки",
        "admin.lastSeven": "ПОСЛЕДНИЕ 7 ДНЕЙ",
        "admin.activity": "Активность",
        "admin.requests": "Заявки",
        "admin.activityLabel": "{date}: заявок — {requests}, сделок — {deals}",
        "admin.workspace": "РАБОЧАЯ ОБЛАСТЬ",
        "admin.quick": "Быстрые действия",
        "admin.openCatalog": "Открыть каталог",
        "admin.openCatalogText": "Просмотреть все объекты",
        "admin.reviewRequests": "Проверить заявки",
        "admin.reviewRequestsText": "Перейти к последним обращениям",
        "admin.account": "Настройки аккаунта",
        "admin.accountText": "Открыть профиль администратора",
        "admin.inbox": "ВХОДЯЩИЕ ЗАЯВКИ",
        "admin.recent": "Последние заявки на просмотр",
        "admin.noRequests": "Заявок на просмотр пока нет.",
        "admin.loading": "Загружаем панель администратора",
        "admin.forbidden": "Нужны права администратора",
        "admin.forbiddenText": "Этот раздел доступен только администраторам PrimeKey.",
        "admin.unavailable": "Панель недоступна",
        "admin.unavailableText": "Не удалось загрузить административные данные. Попробуйте ещё раз.",
        "admin.status.PENDING": "Ожидает",
        "admin.status.CONFIRMED": "Подтверждена",
        "admin.status.CANCELLED": "Отменена",
        "catalog.subtitle": "Продуманные пространства и новые возможности. Изучите объекты нашей коллекции.",
        "catalog.filters": "Фильтры",
        "catalog.reset": "Сбросить",
        "catalog.search": "Поиск",
        "catalog.searchPlaceholder": "Название или адрес",
        "catalog.type": "Тип объекта",
        "catalog.allTypes": "Все типы",
        "catalog.min": "Цена от ($)",
        "catalog.max": "Цена до ($)",
        "catalog.any": "Любая",
        "catalog.rooms": "Комнаты",
        "catalog.anyRooms": "Любое количество",
        "catalog.roomOption": "{value}+ комнат",
        "catalog.note": "Объекты и цены загружаются из базы недвижимости.",
        "catalog.sort": "Сортировка",
        "catalog.newest": "Сначала новые",
        "catalog.lowHigh": "Цена: по возрастанию",
        "catalog.highLow": "Цена: по убыванию",
        "catalog.collection": "Наша коллекция",
        "catalog.one": "объект",
        "catalog.many": "объектов",
        "catalog.unavailable": "Коллекция недоступна",
        "catalog.loadError": "Не удалось загрузить объекты. Попробуйте ещё раз.",
        "catalog.tryAgain": "Повторить",
        "catalog.rangeTitle": "Проверьте диапазон цен",
        "catalog.rangeText": "Измените минимальную или максимальную цену.",
        "catalog.negative": "Цена не может быть отрицательной.",
        "catalog.invalidRange": "Минимальная цена не должна превышать максимальную.",
        "catalog.noMatch": "Ничего не найдено",
        "catalog.empty": "Новые объекты скоро появятся.",
        "catalog.noMatchText": "Измените запрос или сбросьте фильтры.",
        "catalog.emptyText": "В коллекции пока нет объектов. Новые предложения появятся здесь.",
        "catalog.resetFilters": "Сбросить фильтры",
        "catalog.page": "Страница {current} из {total}",
        "catalog.previous": "Предыдущая страница",
        "catalog.next": "Следующая страница",
        "footer.rights": "Все права защищены.",
        "footer.privacy": "Конфиденциальность",
        "footer.terms": "Условия использования",
        "toast.saved": "Объект добавлен в избранное.",
        "toast.removed": "Объект удалён из избранного.",
        "toast.viewing": "Заявка на просмотр отправлена.",
        "toast.error": "Что-то пошло не так. Попробуйте ещё раз.",
        "notFound.eyebrow": "404 — АДРЕС НЕ НАЙДЕН",
        "notFound.title": "Такой страницы нет.",
        "notFound.text": "Возможно, адрес указан неверно или страница больше недоступна.",
        "notFound.home": "На главную",
        "notFound.properties": "Смотреть объекты",
        "error.eyebrow": "ЧТО-ТО ПОШЛО НЕ ТАК",
        "error.title": "Произошла неожиданная ошибка.",
        "error.text": "Ваши данные в безопасности. Попробуйте загрузить раздел ещё раз или вернитесь на главную.",
        "error.retry": "Повторить",
        "error.home": "На главную"
    }
};
}}),
"[project]/src/styles/Ui.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "breadcrumbs": "Ui-module__a3EgDW__breadcrumbs",
  "error": "Ui-module__a3EgDW__error",
  "preferences": "Ui-module__a3EgDW__preferences",
  "preferencesCompact": "Ui-module__a3EgDW__preferencesCompact",
  "success": "Ui-module__a3EgDW__success",
  "toast": "Ui-module__a3EgDW__toast",
  "toastIn": "Ui-module__a3EgDW__toastIn",
  "toastRegion": "Ui-module__a3EgDW__toastRegion",
});
}}),
"[project]/src/components/AppProviders.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AppProviders),
    "usePreferences": (()=>usePreferences),
    "useToast": (()=>useToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Ui.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
const PreferencesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function usePreferences() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PreferencesContext);
    if (!value) throw new Error("usePreferences must be used inside AppProviders");
    return value;
}
function useToast() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!value) throw new Error("useToast must be used inside AppProviders");
    return value;
}
function AppProviders({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [preferencesReady, setPreferencesReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const toastId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLocale = window.localStorage.getItem("primekey-locale");
        const savedTheme = window.localStorage.getItem("primekey-theme");
        setLocaleState(savedLocale === "ru" ? "ru" : "en");
        setThemeState(savedTheme === "dark" || !savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setPreferencesReady(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!preferencesReady) return;
        document.documentElement.lang = locale;
        document.documentElement.dataset.locale = locale;
        window.localStorage.setItem("primekey-locale", locale);
    }, [
        locale,
        preferencesReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!preferencesReady) return;
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem("primekey-theme", theme);
    }, [
        theme,
        preferencesReady
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, values = {})=>{
        const template = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messages"][locale]?.[key] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messages"].en[key] ?? key;
        return Object.entries(values).reduce((text, [name, value])=>text.replaceAll(`{${name}}`, String(value)), template);
    }, [
        locale
    ]);
    const dismissToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>setToasts((current)=>current.filter((toast)=>toast.id !== id)), []);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, options = {})=>{
        const id = ++toastId.current;
        setToasts((current)=>[
                ...current.slice(-3),
                {
                    id,
                    message,
                    type: options.type || "info"
                }
            ]);
        window.setTimeout(()=>dismissToast(id), options.duration || 4200);
        return id;
    }, [
        dismissToast
    ]);
    const preferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            theme,
            t,
            setLocale: (value)=>setLocaleState(value === "ru" ? "ru" : "en"),
            toggleLocale: ()=>setLocaleState((value)=>value === "en" ? "ru" : "en"),
            toggleTheme: ()=>setThemeState((value)=>value === "light" ? "dark" : "light")
        }), [
        locale,
        theme,
        t
    ]);
    const toastApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            showToast,
            dismissToast
        }), [
        showToast,
        dismissToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PreferencesContext.Provider, {
        value: preferences,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
            value: toastApi,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toastRegion,
                    "aria-live": "polite",
                    "aria-label": "Notifications",
                    children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toast} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][toast.type]}`,
                            role: toast.type === "error" ? "alert" : "status",
                            children: [
                                toast.type === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 19,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppProviders.jsx",
                                    lineNumber: 79,
                                    columnNumber: 41
                                }, this) : toast.type === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    size: 19,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppProviders.jsx",
                                    lineNumber: 79,
                                    columnNumber: 114
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 19,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppProviders.jsx",
                                    lineNumber: 79,
                                    columnNumber: 157
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: toast.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppProviders.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>dismissToast(toast.id),
                                    "aria-label": "Dismiss notification",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppProviders.jsx",
                                        lineNumber: 81,
                                        columnNumber: 108
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppProviders.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, toast.id, true, {
                            fileName: "[project]/src/components/AppProviders.jsx",
                            lineNumber: 78,
                            columnNumber: 32
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/AppProviders.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppProviders.jsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AppProviders.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__2e29b135._.js.map