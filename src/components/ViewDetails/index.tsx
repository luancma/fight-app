import { View, Text } from "react-native";
import React from "react";
import { IEventType } from "../../utils/mocks/events";
import { StyledText } from "../DetailsContent/Styles";
import { EventDetailsItem, TimeWrapper } from "./EventDetails.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import defaultStyles from "../../theme/default";

export function EventDetails({ event }: { event: IEventType }) {
  const { name, tutor, scheduledTime } = event;
  console.log("EventDetails component", name, tutor, scheduledTime);
  const clockIcon = (
    <Icon name="clock-o" size={24} color={defaultStyles.COLORS.BLUE_GRAY_50} />
  );
  const trophyIcon = (
    <Icon name="trophy" size={24} color={defaultStyles.COLORS.BLUE_GRAY_50} />
  );

  return (
    <EventDetailsItem
      style={{
        display: "flex",
      }}
    >
      <TimeWrapper>
        {clockIcon}
        <StyledText
          style={{
            fontWeight: "bold",
            verticalAlign: "middle",
            color: defaultStyles.COLORS.BLUE_GRAY_50,
            paddingLeft: 8,
          }}
        >
          {scheduledTime}
        </StyledText>
      </TimeWrapper>
      <View>
        <TimeWrapper>
          {trophyIcon}
          <StyledText
            style={{
              fontWeight: "bold",
              verticalAlign: "middle",
              color: defaultStyles.COLORS.BLUE_GRAY_50,
              paddingLeft: 8,
            }}
          >
            {name}
          </StyledText>
        </TimeWrapper>
        <StyledText style={{
          fontSize: 16
        }}>Professor: {tutor}</StyledText>
        <StyledText style={{
          fontSize: 16
        }}>Local: Lorem impsun</StyledText>
      </View>
    </EventDetailsItem>
  );
}
