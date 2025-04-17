import styled from "styled-components";

export const StyledRowContainer = styled.div`
  margin-top: 7rem;
  //   border: 2px solid rgba(58, 95, 160, 0.5);
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  width: auto;
  height: 80%;
`;

export const StyledCardContainer = styled.div<{ active?: boolean }>`
  width: 80%;
  text-align: center;
  border: 1px solid rgba(58, 95, 160, 0.5);
  border-radius: 10px;
  padding: 4rem;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${(props) => (props.active ? "scale(1.05)" : "scale(1)")};
  box-shadow: ${(props) =>
    props.active ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none"};
  cursor: pointer;
`;

export const CardActionsWrapper = styled.div`
  border: 1px solid rgba(58, 95, 160, 0.3);
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  width: 50%;
  margin-bottom: 1rem;
`;

// Radio button container
