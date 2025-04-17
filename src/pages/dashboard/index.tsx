import { Button, Col, Flex, Radio, Row, Typography } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { COLORS } from "../../constants/style/colors";
import {
  CardActionsWrapper,
  StyledCardContainer,
  StyledRowContainer,
} from "./dashboard.style";
import { useState } from "react";
import { actions } from "../../constants/initialValues";
const { Text, Title } = Typography;
const Dashboard = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const cards = ["Card 1", "Card 2", "Card 3"];

  return (
    <>
      <StyledRowContainer>
        <Flex vertical gap={1} style={{ width: "100%" }} wrap>
          <Flex gap={1} vertical justify="flex-end" align="flex-end" wrap>
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
          <Title level={3}>Card Services</Title>
          <div>
            <Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Your Cards
            </Text>
            {activeCardIndex === null && (
              <>
                <br />
                <Text style={{ fontSize: "1.5rem" }}>
                  Please select list from the of your available Cards to Proceed
                  ahead
                </Text>
              </>
            )}
          </div>
        </Flex>
        <Row>
          {cards.map((cardLabel, index) => (
            <Col span={8}>
              <StyledCardContainer
                active={activeCardIndex === index}
                onClick={() =>
                  setActiveCardIndex(activeCardIndex === index ? null : index)
                }
              >
                <Text>{cardLabel}</Text>
              </StyledCardContainer>

              {activeCardIndex === index && (
                <CardActionsWrapper>
                  <Radio.Group
                    onChange={(e) => console.log(`Selected: ${e.target.value}`)} // You can set state here
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {actions.map((action, actionIndex) => (
                      <Radio key={actionIndex} value={action}>
                        {action}
                      </Radio>
                    ))}
                  </Radio.Group>
                </CardActionsWrapper>
              )}
            </Col>
          ))}
        </Row>
      </StyledRowContainer>
      <Flex justify="flex-end" align="flex-end" style={{ marginTop: "0.4rem" }}>
        <Button>Proceed</Button>
      </Flex>
    </>
  );
};

export default Dashboard;
