//TODO: Check theme in system and install she
export function defaultThemeMode() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode__btn dark-mode__on";
  }
  return "dark-mode__btn";
}
