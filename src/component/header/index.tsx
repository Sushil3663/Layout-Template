import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Flex, Layout, Typography } from "antd";

import { useEffect, useState } from "react";
import { COLORS } from "../../constants/style/colors";
import { Logo } from "./header.styled";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

interface IHeaderProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, setCollapsed }: IHeaderProps) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  console.log(collapsed, setCollapsed);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 756);
    };

    window.addEventListener("resize", handleResize);

    setIsMobileView(window.innerWidth < 756);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <AntHeader
      style={{
        background: COLORS.White,
        paddingInline: "0 20px ",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        /> */}
      <Flex
        justify="space-between"
        align="center"
        gap={15}
        style={{ width: "100%" }}
      >
        <Logo
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
        </Logo>
        <Flex justify="space-between" align="center" gap={15}>
          <BellOutlined
            style={{
              cursor: "pointer",
              fontSize: 18,
              marginRight: "1.5rem",
              marginLeft: "0.5rem",
              color: COLORS.primary,
            }}
          />

          <UserOutlined
            style={{
              color: COLORS.primary,

              cursor: "pointer",
              fontSize: 18,
              marginRight: "1.5rem",
              marginLeft: "0.5rem",
            }}
          />
          {!isMobileView && (
            <Title
              onClick={handleProfile}
              style={{ marginTop: "1rem", cursor: "pointer" }}
              level={5}
            >
              Profile
            </Title>
          )}
        </Flex>
      </Flex>
    </AntHeader>
  );
};

export default Header;
