export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDVhZDYzNzE0NzgyNGU1MDE1MGU5ZmQ2MmVlYzEyYiIsInN1YiI6IjY1ZTQyZjVhOTk3OWQyMDE3Y2IxZjlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kHXnD8-xl4lf8-PFj45dHEHAadgGmeqV2ASCxdleZds",
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "हिन्दी" }, // Hindi
  { identifier: "es", name: "Español" }, // Spanish
  { identifier: "fr", name: "Français" }, // French
  { identifier: "zh", name: "中文" }, // Chinese
  { identifier: "ar", name: "العربية" }, // Arabic
  { identifier: "ru", name: "Русский" }, // Russian
  { identifier: "ja", name: "日本語" }, // Japanese
  { identifier: "ko", name: "한국어" }, // Korean
  { identifier: "de", name: "Deutsch" }, // German
  { identifier: "it", name: "Italiano" } // Italian
];


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;