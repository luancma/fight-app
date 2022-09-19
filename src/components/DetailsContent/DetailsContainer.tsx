import React from "react";
import { View } from "react-native";
import { IEventType } from "../../utils/mocks/events";
import { WEEK } from "../../utils/weekList";
import { EventDetails } from "../ViewDetails";
import { EventDetailsWrapper, EventTitle, StyledDetails, StyledText } from "./Styles";

const getDayOfWeek = (day: Date) => {
  const dayOfWeek = day.getDay();
  return WEEK[dayOfWeek].day;
};

export const DetailsContent = ({ validatedEventDay, selectedDay }) => {
  return (
    <StyledDetails>
      {validatedEventDay ? (
        <View testID="eventDetails">
          {/* TODO format validatedEventDay to receive non and valid event day  */}
          <EventTitle>{WEEK[validatedEventDay.day].day}</EventTitle>
          {validatedEventDay.event.map(
            (eventItem: IEventType, index: number) => (
              <EventDetailsWrapper firstItem={index === 0} key={eventItem.id}>
                <EventDetails event={eventItem} />
              </EventDetailsWrapper>
            )
          )}
        </View>
      ) : (
        <View>
            {/* TODO create a new component to render this title with a absolute underline */}
          <EventTitle>{getDayOfWeek(selectedDay)}</EventTitle>
          <StyledText>No events for this day</StyledText>
        </View>
      )}
    </StyledDetails>
  );
};
