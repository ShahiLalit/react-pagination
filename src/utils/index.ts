import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const classnames = (...classnames: ClassValue[]) => {
  return twMerge(clsx(classnames));
};
