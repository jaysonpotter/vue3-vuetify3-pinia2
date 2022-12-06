// Plugins
import pinia from "./pinia";
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";

export function registerPlugins(app) {
  app.use(pinia);
  loadFonts();
  app.use(vuetify);
}
