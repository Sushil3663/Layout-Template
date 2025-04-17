import React, { useState } from "react";

import { Layout } from "antd";
import { COLORS } from "../constants/style/colors";
import Header from "./header";
import Sidebar from "./sidebar";
import { ProtectedRouterWrapper } from "../constants/style/common.styled";
import RoutesContainer from "../routes/routesContainer";
import { useLocation } from "react-router-dom";

const { Content } = Layout;

const Template: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  console.log(location?.pathname);

  return (
    <>
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        <Layout>
          {location?.pathname !== "/profile" && (
            <Sidebar collapsed={collapsed} />
          )}

          <Content
            style={{
              padding: 15,
              minHeight: "calc(-65px + 100vh)",
              background: COLORS.backgroundColor,
            }}
          >
            <ProtectedRouterWrapper>
              <RoutesContainer />
            </ProtectedRouterWrapper>
          </Content>
        </Layout>
        {/* <TemplateFooter /> */}
      </Layout>
    </>
  );
};

export default Template;
