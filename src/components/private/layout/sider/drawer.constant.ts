import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export const DRAWER_CONSTANT: MenuItem[] = [
  {
    key: "drawer.administration",
    label: "drawer.administration",
    children: [
      {
        key: "/administration/organizations",
        label: "drawer.org_owners",
      },
      {
        key: "/administration/structure",
        label: "drawer.structure_org",
      },
      {
        key: "/administration/personnel/list",
        label: "drawer.employees_positions",
      },
    ],
  },
  {
    key: "drawer.checklists",
    label: "drawer.checklists",
    children: [
      {
        key: "/check-list/templates",
        label: "drawer.checklists_templates",
      },
      {
        key: "/check-list/list",
        label: "drawer.checklists",
      },
    ],
  },
  {
    key: "drawer.photo_results",
    label: "drawer.photo_results",
    children: [
      {
        key: "/photo-report/templates",
        label: "drawer.photo_results_templates",
      },
      {
        key: "/photo-report/list",
        label: "drawer.photo_results",
      },
    ],
  },
  {
    key: "/visits-log/attendance/list",
    label: "drawer.attendance_journal",
  },
];
