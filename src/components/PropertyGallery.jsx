"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Building2, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { propertyImages } from "@/lib/propertyImages";
import styles from "@/styles/pages/Properties.module.css";

function GalleryImage({ src, alt, priority = false, fullscreen = false, onError }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div className={styles.galleryFallback} role="img" aria-label={`${alt}. Image unavailable.`}>
        <Building2 size={fullscreen ? 76 : 64} strokeWidth={1} aria-hidden="true" />
        <p>Image unavailable</p>
        <span>Try another photo or come back later.</span>
      </div>
    );
  }

  return (
    <>
      {!loaded && <div className={styles.gallerySkeleton} aria-hidden="true" />}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        sizes={fullscreen ? "100vw" : "(max-width: 760px) 100vw, 70vw"}
        className={`${styles.galleryImage} ${loaded ? styles.galleryImageLoaded : ""}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          onError?.();
        }}
      />
    </>
  );
}

export default function PropertyGallery({ property }) {
  const images = useMemo(() => propertyImages(property), [property]);
  const [selected, setSelected] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);
  const title = property?.title?.trim() || property?.address?.trim() || "Property";

  useEffect(() => {
    setSelected(0);
    setFullscreen(false);
  }, [property?.id]);

  useEffect(() => {
    if (!fullscreen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = event => {
      if (event.key === "Escape") setFullscreen(false);
      if (event.key === "ArrowLeft") setSelected(index => (index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setSelected(index => (index + 1) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      opener?.focus();
    };
  }, [fullscreen, images.length]);

  const choosePrevious = () => setSelected(index => (index - 1 + images.length) % images.length);
  const chooseNext = () => setSelected(index => (index + 1) % images.length);

  if (!images.length) {
    return (
      <div className={styles.detailVisual} role="img" aria-label="Property photography is not available">
        <Building2 size={90} strokeWidth={.9} aria-hidden="true" />
        <p>Photography coming soon</p>
        <span>Photos haven’t been added for this property yet.</span>
      </div>
    );
  }

  return (
    <section className={styles.gallery} aria-label={`${title} photo gallery`}>
      <button
        ref={openerRef}
        type="button"
        className={styles.galleryMain}
        onClick={() => setFullscreen(true)}
        aria-label={`Open photo ${selected + 1} of ${images.length} in full screen`}
      >
        <GalleryImage src={images[selected]} alt={`${title}, photo ${selected + 1}`} priority />
        <span className={styles.expandLabel}><Expand size={17} aria-hidden="true" />Full screen</span>
        <span className={styles.imageCounter}>{selected + 1} / {images.length}</span>
      </button>

      {images.length > 1 && (
        <div className={styles.thumbnails} aria-label="Choose property photo">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`${styles.thumbnail} ${index === selected ? styles.thumbnailActive : ""}`}
              onClick={() => setSelected(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === selected}
            >
              <GalleryImage src={image} alt="" />
            </button>
          ))}
        </div>
      )}

      {fullscreen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full-screen gallery`}
          onMouseDown={event => {
            if (event.target === event.currentTarget) setFullscreen(false);
          }}
        >
          <button ref={closeButtonRef} type="button" className={styles.lightboxClose} onClick={() => setFullscreen(false)} aria-label="Close full-screen gallery"><X aria-hidden="true" /></button>
          <div className={styles.lightboxImage}>
            <GalleryImage src={images[selected]} alt={`${title}, photo ${selected + 1} of ${images.length}`} fullscreen />
          </div>
          {images.length > 1 && <>
            <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} onClick={choosePrevious} aria-label="Previous photo"><ChevronLeft aria-hidden="true" /></button>
            <button type="button" className={`${styles.lightboxArrow} ${styles.lightboxNext}`} onClick={chooseNext} aria-label="Next photo"><ChevronRight aria-hidden="true" /></button>
          </>}
          <p className={styles.lightboxCounter} aria-live="polite">{selected + 1} of {images.length}</p>
        </div>
      )}
    </section>
  );
}
