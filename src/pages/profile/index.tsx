import { Avatar, Flex, Tabs, TabsProps, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined, UserOutlined } from "@ant-design/icons";
import { COLORS } from "../../constants/style/colors";
import ProfileDetail from "./ProfileDetail";
import MyRequest from "./MyRequest";

const { Text, Title } = Typography;
const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <Text style={{ color: COLORS.primary }}>Profile Details</Text>,
      children: <ProfileDetail></ProfileDetail>,
    },
    {
      key: "2",
      label: <Text style={{ color: COLORS.primary }}>My Request</Text>,
      children: <MyRequest></MyRequest>,
    },
  ];
  return (
    <div style={{ margin: "2rem" }}>
      <Flex>
        <LeftCircleOutlined
          onClick={handleBack}
          style={{
            cursor: "pointer",
            fontSize: 20,
            color: COLORS.primary,
            marginRight: 15,
          }}
        />
        <Text onClick={handleBack}>Go Back</Text>
      </Flex>
      <Flex justify="space-between" style={{ marginTop: "2rem" }}>
        <Flex gap={5} vertical>
          <Title level={3}>Profile</Title>
          <Text strong style={{ fontSize: "1.5rem" }}>
            Name:{" "}
          </Text>
          <Text strong style={{ fontSize: "1.5rem" }}>
            A/C Number:{" "}
          </Text>
        </Flex>
        <div>
          <Avatar size={100} icon={<UserOutlined />} />
        </div>
      </Flex>

      {/* Detail page */}
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Profile;
