import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE_GRAY_50};
`;


const FloatButton = styled.TouchableOpacity`
  position: absolute;
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${({theme}) => {
    console.log(RFPercentage(5))
    return theme.COLORS.BLUE_500}
  };
  align-items: center;
  justify-content: center;
  right: ${RFValue(30)}px;
  bottom: ${RFValue(30)}px;
  border-radius: ${RFValue(30)}px;
  elevation: 8;
`;

const FloatButtonText = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE}
`;

export { StyledContainer, FloatButton, FloatButtonText };
