import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { View, Text } from "react-native";

export default function CalendarComponent() {
  return (
    <Agenda
      // hideKnob={true}
      selected={"2022-03-25"}
      // Callback that fires when the calendar is opened or closed
      onCalendarToggled={(calendarOpened) => {
        console.log(calendarOpened);
      }}
      // Callback that gets called on day press
      onDayPress={(day) => {
        console.log("day pressed");
      }}
      // Callback that gets called when day changes while scrolling agenda list
      onDayChange={(day) => {
        console.log("day changed");
      }}
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
    />
  );
}
