import ruRU from "antd/locale/ru_RU";
import { TLocalHandler } from "@/utils/locale-handler/local-handler.types.ts";

export const localHandler: TLocalHandler = (locale) => {
  switch (locale) {
    case "ru": {
      return ruRU;
    }
  }
};
