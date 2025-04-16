import { Col, Flex, Row, Typography } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { COLORS } from "../../constants/style/colors";
const { Text, Title } = Typography;
const Dashboard = () => {
  return (
    <Row
      gutter={16}
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        marginTop: "5rem",
        border: "2px solid rgba(58, 95, 160, 0.5)", 
        borderRadius: "10px",
        padding: "1rem", 
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <Flex justify="flex-end" align="center" vertical>
        <PlusSquareOutlined
          style={{
            cursor: "pointer",
            fontSize: 22,
            marginRight: "1.5rem",
            marginLeft: "0.5rem",
            color: COLORS.primary,
          }}
        />
        <Text>Add Card</Text>
        </Flex>
      </div>
      <Col span={24}>
        <Row>
          <Title level={3}>Card Services</Title>
        </Row>
      </Col>

      <Col span={24}>
        <Text style={{ fontSize: "2rem", fontWeight: "bold" }}>Your Cards</Text>
      </Col>
      <Col>
        <Text style={{ fontSize: "1.5rem" }}>
          Please select list from the of your available Cards to Proceed ahead
        </Text>
      </Col>
    </Row>
  );
};

export default Dashboard;
