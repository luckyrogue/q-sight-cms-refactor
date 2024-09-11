export const mergeLocales = (locales: Record<string, any>[]) => {
  return locales.reduce(
    (acc, locale) => {
      Object.keys(locale).forEach((lang) => {
        if (!acc[lang]) {
          acc[lang] = {};
        }

        Object.keys(locale[lang]).forEach((ns) => {
          acc[lang][ns] = {
            ...acc[lang][ns],
            ...locale[lang][ns],
          };
        });
      });
      return acc;
    },
    {} as Record<string, any>,
  );
};
