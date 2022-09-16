import styled from "styled-components/native";

const EventTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const StyledContainer = styled.SafeAreaView`
  flex: 1;
`;

const StyledDetails = styled.ScrollView`
  flex: 1;
  padding: 0px 16px;
`;

export { EventTitle, StyledText, StyledContainer, StyledDetails };
