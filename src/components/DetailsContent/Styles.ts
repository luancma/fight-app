import styled from "styled-components/native";

const EventDetailsWrapper = styled.View<{
  firstItem: boolean;
}>`
  flex: 1;
  padding-top: ${({ firstItem }) => (firstItem ? 8 : 0)}px;
  margin-bottom: 16px;
`;

const EventTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-decoration: underline;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

const StyledDetails = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export { EventTitle, StyledText, StyledDetails, EventDetailsWrapper };
