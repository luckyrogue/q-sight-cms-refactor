import { Button } from "antd";
import { ADMINISTRATION_ROUTES_MAPPING } from "@/pages/private/administration/administration.constants.ts";
import { useLocation, useNavigate } from "react-router";

export const AdministrationHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{ADMINISTRATION_ROUTES_MAPPING[location.pathname]}</h2>
      <div>
        <Button onClick={() => navigate("/administration/positions")}>
          Должности
        </Button>
        <Button onClick={() => navigate("/administration/employees")}>
          Сотрудники
        </Button>
      </div>
    </div>
  );
};
