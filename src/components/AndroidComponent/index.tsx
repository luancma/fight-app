import React from "react";
import { StatusBar, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeekCalendarProps } from "../../utils/generateWeekList";
import {
  IEventListData,
  IEventType,
  eventsList,
} from "../../utils/mocks/events";
import { WEEK } from "../../utils/weekList";
import { DetailsContent } from "../DetailsContent/DetailsContainer";
import { EventCalendar } from "../EventCalendar";
import { EventDetails } from "../ViewDetails";
import { FloatButton, FloatButtonText, StyledContainer } from "./Styles";
import { AndroidComponentType } from "./types";

export function AndroidComponent({
  handleIncrementWeek,
  handleSelectADay,
  selectedDay,
  weekList,
  validatedEventDay,
}: AndroidComponentType) {
  console.log({ validatedEventDay });
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
      <DetailsContent
        validatedEventDay={validatedEventDay}
        selectedDay={selectedDay}
      />

      <FloatButton>
        <FloatButtonText>+</FloatButtonText>
      </FloatButton>
    </StyledContainer>
  );
}
