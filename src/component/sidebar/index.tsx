/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Layout, Menu } from "antd";

import { COLORS } from "../../constants/style/colors";
import { RouteList } from "../../routes/routesList";
import { useLocation, useNavigate } from "react-router-dom";
interface IProps {
  collapsed: boolean;
}


const Sidebar = ({ collapsed }: IProps) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const findSelectedKey = (
    routes:any,
    currentPath: string
  ): string | undefined => {
    for (const route of routes) {
      if (route.path === currentPath) return route.path;
      if (route.children) {
        const child = route.children.find((c:any) => c.path === currentPath);
        if (child) return child.path;
      }
    }
    return undefined;
  };

  const findOpenKey = (
    routes:any,
    currentPath: string
  ): string | undefined => {
    for (const route of routes) {
      if (route.children?.some((child:any) => child.path === currentPath)) {
        return route.pathname;
      }
    }
    return undefined;
  };

  const openKey = findOpenKey(RouteList, location.pathname);

  const selectedKey = findSelectedKey(RouteList, location.pathname);

  const buildMenuItems = (routes:any) =>
    routes.map((route:any) => {
      if (route?.children) {
        return {
          key: route.pathname,
          icon: <route.icon />,
          label: route.pathname,
          children: route?.children?.map((child:any) => ({
            key: child.path,
            icon: <child.icon />,
            label: child.pathname,
          })),
        };
      }

      return {
        key: route.path,
        // icon: route.icon ? <route.icon /> : null,
        label: <Flex justify="center" align="center">{route.pathname}</Flex>,
      };
    });
  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{
          background: COLORS.White,
          minWidth: 80,
          overflow: "auto",
          height: "60vh",
          marginTop: "12rem",
          marginLeft: "2rem",
          borderRadius: "1rem" 
        }}
      >
        {/* <Logo
          style={{
            background: "white",
            padding: "10px 10px",
            height: "65px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <p style={{ paddingLeft: "8rem" }}>Logo</p>
        </Logo> */}

        <Menu
          theme="light"
          mode="inline"
          style={{ background: COLORS.White,}}
          selectedKeys={[selectedKey || ""]}
          defaultOpenKeys={[openKey || ""]}
          onClick={({ key }) => navigate(key)}
          items={buildMenuItems(RouteList)}
          
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
