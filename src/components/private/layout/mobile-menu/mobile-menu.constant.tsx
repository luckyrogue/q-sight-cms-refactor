import { MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

export const MOBILE_MENU_CONSTANT: MenuItem[] = [
  {
    key: "drawer.administration",
    label: "drawer.administration",
    icon: <HomeOutlined />,
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
    icon: <HomeOutlined />,
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
    key: 'mobile-menu.user',
    label: 'mobile-menu.user',
    icon: <HomeOutlined />,
  },
  {
    key: "drawer.photo_results",
    label: "drawer.photo_results",
    icon: <HomeOutlined />,
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
    icon: <HomeOutlined />,
  },
];
