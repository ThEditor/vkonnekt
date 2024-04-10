import type { StaticImageData } from "next/image";
import type { Language } from "../utils/languages";

export const Flag = ({
  language,
  width = 84,
}: {
  language: Language;
  width?: number;
}) => {
  const height = width * (19.3171 / 24);
  return (
    <language.icon width={width} height={height} />
  );
};
