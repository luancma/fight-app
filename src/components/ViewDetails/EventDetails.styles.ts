import styled from "styled-components/native";

const EventDetailsItem = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  padding: 8px 16px;
  elevation: 4px;
`;

const TimeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
`;
export { EventDetailsItem, TimeWrapper };
