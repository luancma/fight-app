import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import "react-native-get-random-values";
import { EventCalendar } from "./components/EventCalendar";
import { generateWeekList } from "./utils/generateWeekList";
import { AndroidComponent } from "./components/AndroidComponent";
import { eventsList, IEventListData } from "./utils/mocks/events";

interface WeekCalendarProps {
  uuid: string;
  formatted: string;
  date: Date;
  day: number;
}

const WebWrapper = ({ children }: { children: ReactNode }) => {
  return <View>{children}</View>;
};
export default function App() {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [week, setWeek] = useState<WeekCalendarProps[]>([]);
  const [selectedDay, setSelectedDay] = useState<any | null>(new Date());
  const handleIncrementWeek = useCallback(() => {
    const lastDayObject = week[week.length - 1];
    const lastWeek = generateWeekList(lastDayObject?.date, true);
    setWeek([...week, ...lastWeek]);
  }, [selectedDate, week]);

  const test: IEventListData | null = useMemo(() => {
    const result = eventsList.filter(
      (event) => event?.day === new Date(selectedDay).getDay()
    );
    if (result.length) {
      return result[0];
    }
    return null;
  }, [selectedDay]);

  useEffect(() => {
    setWeek(generateWeekList(selectedDate));
  }, []);

  const handleSelectADay = useCallback(
    (day: Date) => {
      setSelectedDay(day);
    },
    [selectedDay]
  );

  return Platform.OS === "web" ? (
    <WebWrapper>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <EventCalendar
          week={week}
          nextWeek={handleIncrementWeek}
          handleSelectADay={handleSelectADay}
          pressedDay={selectedDay}
        />
      </View>
    </WebWrapper>
  ) : (
    <AndroidComponent
      handleIncrementWeek={handleIncrementWeek}
      handleSelectADay={handleSelectADay}
      selectedDay={selectedDay}
      weekList={week}
      validatedEventDay={test}
    />
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
