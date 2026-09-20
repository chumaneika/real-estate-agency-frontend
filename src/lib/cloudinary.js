const DEFAULT_CLOUD_NAME = "ngbsgwu8";
const DEFAULT_UPLOAD_PRESET = "primekey_unsigned";

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? DEFAULT_CLOUD_NAME;
export const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? DEFAULT_UPLOAD_PRESET;

export function cloudinaryUploadEndpoint(cloudName = CLOUDINARY_CLOUD_NAME) {
  if (!cloudName) throw new Error("Cloudinary cloud name is not configured.");
  return `https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/image/upload`;
}

export async function uploadPropertyImage(file, options = {}) {
  const {
    fetcher = fetch,
    cloudName = CLOUDINARY_CLOUD_NAME,
    uploadPreset = CLOUDINARY_UPLOAD_PRESET,
  } = options;

  if (!file || !file.type?.startsWith("image/")) {
    throw new Error("Only image files can be uploaded.");
  }
  if (!uploadPreset) throw new Error("Cloudinary upload preset is not configured.");

  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", uploadPreset);
  body.append("folder", "properties");

  const response = await fetcher(cloudinaryUploadEndpoint(cloudName), {
    method: "POST",
    body,
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || typeof payload.secure_url !== "string") {
    throw new Error(payload.error?.message || "Cloudinary image upload failed.");
  }
  return payload.secure_url;
}

export function uploadPropertyImages(files, options = {}) {
  return Promise.all(Array.from(files ?? [], file => uploadPropertyImage(file, options)));
}
