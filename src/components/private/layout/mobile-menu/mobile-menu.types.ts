import React from "react";

export type TMobileMenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: TMobileMenuItem[];
};
