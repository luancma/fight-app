import styled from "styled-components/native";

const StyledContainer = styled.SafeAreaView`
  flex: 1;
`;


const FloatButton = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.COLORS.BLUE_500};
  align-items: center;
  justify-content: center;
  right: 30px;
  bottom: 30px;
  border-radius: 30px;
  elevation: 8;
`;

const FloatButtonText = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE}
`;

export { StyledContainer, FloatButton, FloatButtonText };
