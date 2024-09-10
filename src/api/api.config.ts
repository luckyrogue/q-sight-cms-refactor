export const modeObserver = (mode: string) => {
  switch (mode) {
    case "development":
      return String(import.meta.env.VITE_DEV_API_URL);
    case "production":
      return String(import.meta.env.VITE_PROD_API_URL);
    default:
      throw new Error("Invalid mode");
  }
};
