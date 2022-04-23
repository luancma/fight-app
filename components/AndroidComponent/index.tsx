import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeekCalendarProps } from "../../utils/generateWeekList";
import { IEventListData, IEventType, eventsList } from '../../utils/mocks/events';
import { WEEK } from "../../utils/weekList";
import { EventCalendar } from "../EventCalendar";
import { EventDetails } from "../ViewDetails";
import { AndroidComponentType } from "./types";

export function AndroidComponent({
  handleIncrementWeek,
  handleSelectADay,
  selectedDay,
  weekList,
  validatedEventDay,
}: AndroidComponentType) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <EventCalendar
        week={weekList}
        nextWeek={handleIncrementWeek}
        handleSelectADay={handleSelectADay}
        pressedDay={selectedDay}
        eventList={eventsList}
      />

      {validatedEventDay && (
        <View testID="eventDetails">
          <Text>{WEEK[validatedEventDay.day].day}</Text>
          {validatedEventDay.event.map((eventItem: IEventType) => (
            <EventDetails event={eventItem} key={eventItem.id} />
          ))}
        </View>
      )}
    </SafeAreaView>
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
