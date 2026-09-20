import { uploadPropertyImages } from "./cloudinary.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function createPropertyWithImages(property, files, options = {}) {
  const { fetcher = fetch, apiUrl = API_URL } = options;
  const imageUrls = await uploadPropertyImages(files, { ...options, fetcher });
  const response = await fetcher(`${apiUrl}/api/v1/properties/create`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...property, imageUrls }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Property creation failed.");
  }
  return payload;
}
