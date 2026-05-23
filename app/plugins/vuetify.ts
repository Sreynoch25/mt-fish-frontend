// app/plugins/vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify-sonner/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "crystalLagoon",
      themes: {
        crystalLagoon: {
          dark: false,
          colors: {
            primary: "#0097A7",
            secondary: "#00BCD4",
            background: "#F0FBFF",
            surface: "#FFFFFF",
            accent: "#FF8F00",
            success: "#FF8F00",
            warning: "#E53935",
            error: "#E53935",
            info: "#0097A7",
            "on-background": "#1A3A4A",
            "on-surface": "#1A3A4A",
            "on-primary": "#E0F7FA",
            "on-secondary": "#FFFFFF",
            "on-accent": "#FFFFFF",
            "on-success": "#FFFFFF",
            "on-warning": "#FFFFFF",
            "on-error": "#FFFFFF",
            "on-info": "#FFFFFF",
            "close-btn": "#E53935",
          },
        },

        deepOcean: {
          dark: true,
          colors: {
            primary: "#00C2D4",
            secondary: "#0B6E8C",
            background: "#0A1628",
            surface: "#0E2744",
            accent: "#FFD54F",
            success: "#FFD54F",
            warning: "#FF6B35",
            error: "#FF6B35",
            info: "#00C2D4",
            "on-background": "#E0F7FA",
            "on-surface": "#E0F7FA",
            "on-primary": "#0A1628",
            "on-secondary": "#E0F7FA",
            "on-accent": "#0A1628",
            "on-success": "#0A1628",
            "on-warning": "#0A1628",
            "on-error": "#0A1628",
            "on-info": "#0A1628",
            "close-btn": "#FF5252",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
