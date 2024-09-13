import { ThemeConfig } from "antd/es/config-provider/context";

export const customTheme: ThemeConfig = {
  components: {
    Button: {
      controlHeight: 48,
    },
    Input: {
      controlHeight: 48,
    },
    Select: {
      controlHeight: 48,
    },
    DatePicker: {
      controlHeight: 48,
    },
    Layout: {
      siderBg: "white",
    },
    Segmented: {
      controlHeight: 50,
      itemActiveBg: "#1677ff",
      itemSelectedBg: "#1677ff",
      itemSelectedColor: "white",
    },
  },
};
