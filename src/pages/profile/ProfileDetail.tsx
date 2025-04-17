import { Col, Flex, Progress, Row, Typography } from "antd";
import { COLORS } from "../../constants/style/colors";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Text } = Typography;
const ProfileDetail = () => {
  return (
    <div
      style={{
        background: "#F3F4F6",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      {" "}
      <Row gutter={16}>
        <Col span={18}>
          <Progress
            percent={30}
            percentPosition={{ align: "center", type: "outer" }}
            strokeColor={COLORS.primary}
            style={{ paddingLeft: "15rem" }}
          />
          <Text strong style={{ marginLeft: "52%" }}>
            Complete Profile
          </Text>
        </Col>
        <Col span={6}>
          <Flex vertical align="end" wrap>
            <PlusSquareOutlined
              style={{
                cursor: "pointer",
                fontSize: 20,
                color: COLORS.primary,
                marginRight: 15,
              }}
            />
            <Text>Add Card</Text>
          </Flex>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>Full Name: XXX XXXX</Text>
        </Col>
        <Col span={24}>
          <Text strong>Account Number: XXX XXXX</Text>
        </Col>
        <Col span={24}>
          <Text strong>Date Of Birth: XXX XXXX</Text>
        </Col>
        <Col span={24}>
          <Text strong>Gender: XXX XXXX</Text>
        </Col>
        <Col span={24}>
          <Text strong>Email: XXX XXXX</Text>
        </Col>
        <Col span={24}>
          <Text strong>Occupation Type: XXX XXXX</Text>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileDetail;
