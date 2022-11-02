import { transform } from "@babel/core";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { dp, sp } from "../../utils/adaptiveCssSize";

const ListItem = styled.SafeAreaView<{
  screenWidth: number;
}>`
  width: ${({ screenWidth }) => screenWidth / 7}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${dp(4)}px;
  height: 80px;
  background-color: blueviolet;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLUE_500};
`;

const TextWeekDay = styled.Text<{
  isToday: boolean;
  offsetH?: number;
}>`
  color: ${({ theme, isToday }) =>
    isToday ? theme.COLORS.BLUE_600 : theme.COLORS.BLUE_GRAY_900};
  font-size: 16px;
  padding: 4px 0px;
  background-color: 4px;
`;

const TextDayOfWeek = styled.Text<{
  isToday: boolean;
}>`
  color: ${({ theme, isToday }) =>
    isToday ? theme.COLORS.WHITE : theme.COLORS.BLUE_GRAY_900};
  font-size: 16px;
`;

const StyledPressable = styled.Pressable<{
  isToday: boolean;
  offsetH?: number;
}>`
  ${({ theme, isToday }) => css`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background-color: ${isToday ? theme.COLORS.BLUE_600 : "transparent"};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 36px;  
`;

const CurrentDayIndicator = styled.View<{
}>`
  position: absolute;
  height: 4px;
  width: 24px;
  top: 48%;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};
  border-radius: 8px;
`;

const EventDayIndicator = styled.View`
  position: absolute;
  top: 10%;
  width: 8px;
  margin-left: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};
  border-radius: 8px;
`;

export {
  ListItem,
  TextWeekDay,
  TextDayOfWeek,
  StyledPressable,
  EventDayIndicator,
  CurrentDayIndicator,
};
