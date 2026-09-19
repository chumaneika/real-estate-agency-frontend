const MAX_GALLERY_IMAGES = 12;

function imageSource(image) {
  if (typeof image === "string") return image;
  if (image && typeof image.url === "string") return image.url;
  return "";
}

export function propertyImages(property) {
  const source = Array.isArray(property?.imageUrls)
    ? property.imageUrls
    : Array.isArray(property?.images)
      ? property.images
      : [];

  return [...new Set(source
    .map(imageSource)
    .map(url => url.trim())
    .filter(url => url.startsWith("/") || /^https?:\/\//i.test(url)))]
    .slice(0, MAX_GALLERY_IMAGES);
}
