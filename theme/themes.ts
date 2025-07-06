import "@rneui/themed";
import { createTheme } from "@rneui/themed";

declare module "@rneui/themed" {
  export interface Colors {
    tertiary: string;
    accent: string;
    container: string;
    surface: string;
    onPrimary: string;
    onSecondary: string;
    onAccent: string;
    textPrimary: string;
    textSecondary: string;
  }
}

// themes.ts
const theme = createTheme({
  lightColors: {
    background: "#FAFAFA", // Light background
    surface: "#FFFFFF", // Main UI surface (cards, sheets)
    primary: "#3664E2", // Deep blue - brand color
    onPrimary: "#FFFFFF", // Text on primary
    secondary: "#3B82F6", // Lighter blue
    onSecondary: "#FFFFFF", // Text on secondary
    tertiary: "#8B5CF6", // Purple
    accent: "#06B6D4", // Cyan
    onAccent: "#FFFFFF",
    container: "#F1F5F9", // Card/container background
    divider: "#E2E8F0", // Light divider
    textPrimary: "#1E293B", // Almost black
    textSecondary: "#475569", // Muted text
    success: "#059669", // Green
    error: "#DC2626", // Red
    warning: "#D97706", // Orange
  },
  darkColors: {
    background: "#0D0D0D", // Near-black background
    surface: "#1A1A1A", // Cards, sheets, modals
    primary: "#FFD700", // Gold primary (buttons, highlights)
    onPrimary: "#000000", // Black text on gold button
    secondary: "#FACC15", // Lighter gold/amber
    onSecondary: "#000000",
    tertiary: "#EAB308", // Gold-orange
    accent: "#FBBF24", // Bright gold-accent
    onAccent: "#000000",
    container: "#111111", // Slightly lighter than background
    divider: "#333333", // Subtle divider lines
    textPrimary: "#F5F5F5", // High-contrast text
    textSecondary: "#D4D4D4", // Muted text
    success: "#22C55E", // Green for success
    error: "#EF4444", // Red for errors
    warning: "#F59E0B", // Orange for warnings
  },
  mode: "dark",
});

export default theme;
