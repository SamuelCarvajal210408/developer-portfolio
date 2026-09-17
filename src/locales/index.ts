import { en } from "./en";
import { es } from "./es";
import { Language, Translations } from "../types";

export const dictionaries: Record<Language, Translations> = {
  en,
  es,
};

export { en, es };
