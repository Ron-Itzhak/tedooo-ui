"use client";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";

interface PostImagesProps {
  images?: [string?, string?];
}
const PostImages = ({ images }: PostImagesProps) => {
  const [dominantColor, setDominantColor] = useState<string | null>(null);

  useEffect(() => {
    if (images && images.length > 0 && images[0]) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(images[0])
        .then((color) => {
          console.log(color);

          setDominantColor(color.rgb);
        })
        .catch((err) => {});
    } else {
      setDominantColor(null);
    }
  }, [images]);

  if (!images || images.length === 0 || !images[0]) {
    return (
      <div className="text-center py-3">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div
      className="  flex flex-row items-center justify-between gap-3 py-3 max-h-[517px] w-full "
      style={{ backgroundColor: dominantColor || "transparent" }}
    >
      {images
        .slice(0, 2)
        .map((image, i) =>
          image ? (
            <img
              key={i}
              className={`mx-auto object-cover max-h-[517px]${
                images.length === 1
                  ? " "
                  : "mx-auto  max-h-[517px]    max-w-[560px]"
              }`}
              src={image}
              alt={`Post Image ${i + 1}`}
            />
          ) : null
        )}
    </div>
  );
};

export default PostImages;
