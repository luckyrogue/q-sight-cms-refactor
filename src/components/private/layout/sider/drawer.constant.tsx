import { MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

export const DRAWER_CONSTANT: MenuItem[] = [
  {
    key: "/administration",
    label: "layout.drawer.administration",
    icon: <HomeOutlined />,
    children: [
      {
        key: "/administration/organizations",
        label: "layout.drawer.org_owners",
      },
      {
        key: "/administration/structure",
        label: "layout.drawer.structure_org",
      },
      {
        key: "/administration/employees",
        label: "layout.drawer.employees_positions",
      },
    ],
  },
  {
    key: "/check-list",
    label: "layout.drawer.checklists",
    icon: <HomeOutlined />,
    children: [
      {
        key: "/check-list/templates",
        label: "layout.drawer.checklists_templates",
      },
      {
        key: "/check-list/list",
        label: "layout.drawer.checklists",
      },
    ],
  },
  {
    key: "/photo-report",
    label: "layout.drawer.photo_results",
    icon: <HomeOutlined />,
    children: [
      {
        key: "/photo-report/templates",
        label: "layout.drawer.photo_results_templates",
      },
      {
        key: "/photo-report/list",
        label: "layout.drawer.photo_results",
      },
    ],
  },
  {
    key: "/visits-log/attendance/list",
    label: "layout.drawer.attendance_journal",
    icon: <HomeOutlined />,
  },
];
