import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeekCalendarProps } from "../../utils/generateWeekList";
import { IEventListData, IEventType } from "../../utils/mocks/events";
import { WEEK } from "../../utils/weekList";
import { EventCalendar } from "../EventCalendar";
import { EventDetails } from "../ViewDetails";

type NewType = {
  handleIncrementWeek: () => void;
  handleSelectADay: (day: Date) => void;
  selectedDay: Date;
  weekList: WeekCalendarProps[];
  scheduledEventsList: IEventListData[];
  validatedEventDay: any | null;
};

export function AndroidComponent({
  handleIncrementWeek,
  handleSelectADay,
  selectedDay,
  weekList,
  validatedEventDay,
}: NewType) {
  console.log(11111, { validatedEventDay });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <EventCalendar
        week={weekList}
        nextWeek={handleIncrementWeek}
        handleSelectADay={handleSelectADay}
        pressedDay={selectedDay}
      />

      {validatedEventDay && (
        <View>
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
