import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeekCalendarProps } from "../../utils/generateWeekList";
import {
  IEventListData,
  IEventType,
  eventsList,
} from "../../utils/mocks/events";
import { WEEK } from "../../utils/weekList";
import { EventCalendar } from "../EventCalendar";
import { EventDetails } from "../ViewDetails";
import {
  EventTitle,
  StyledContainer,
  StyledText,
  StyledDetails,
} from "./Styles";
import { AndroidComponentType } from "./types";

export function AndroidComponent({
  handleIncrementWeek,
  handleSelectADay,
  selectedDay,
  weekList,
  validatedEventDay,
}: AndroidComponentType) {
  console.log(11111111111111, selectedDay?.toDateString());

  return (
    <StyledContainer>
      <StatusBar />
      <EventCalendar
        week={weekList}
        nextWeek={handleIncrementWeek}
        handleSelectADay={handleSelectADay}
        pressedDay={selectedDay}
        eventList={eventsList}
      />
      <StyledDetails>
        {validatedEventDay ? (
          <View testID="eventDetails">
            <StyledText>{WEEK[validatedEventDay.day].day}</StyledText>
            {validatedEventDay.event.map((eventItem: IEventType) => (
              <EventDetails event={eventItem} key={eventItem.id} />
            ))}
          </View>
        ) : (
          <View>
            <StyledText>{new Date().toDateString()}</StyledText>
            <StyledText>No events for this day</StyledText>
          </View>
        )}
      </StyledDetails>
    </StyledContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  textItem: {
    fontSize: 48,
    fontWeight: "700",
  },
});
