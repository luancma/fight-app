import { isToday } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { WEEK } from "../../utils/weekList";
import { eventsList } from "../../utils/mocks/events";
import { IEventCalendarProps } from "./eventCalendarTypes";
export const EventCalendar = ({
  week,
  nextWeek,
  handleSelectADay,
  pressedDay,
}: IEventCalendarProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [extraDate, setExtraDate] = useState(week);
  const flatListRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        display: "flex",
        flexGrow: 1,
      }}
      horizontal
      data={week}
      keyExtractor={(item) => item.uuid}
      renderItem={({ item }) => {
        const day = WEEK.filter((w) => w.dayOfWeek === item.date.getDay())[0]
          .day;
        const showPressedBorder = pressedDay;
        const showDayWithValues = eventsList.find(
          (activity) => activity?.day === item?.date.getDay()
        );
        return (
          <View style={styles.itemWrapper}>
            {showDayWithValues && (
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "red",
                  borderRadius: 8,
                }}
              />
            )}
            <Text>{day.substring(0, 3)}</Text>
            <Pressable
              onPress={() => {
                if (!isToday(item.date)) {
                  handleSelectADay(item.date);
                  console.log("Pressed");
                }
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isToday(item.date) && "red",
              }}
            >
              <Text
                style={{
                  color: item.date === showPressedBorder ? "red" : "black",
                }}
              >
                {item.day}
              </Text>
            </Pressable>
          </View>
        );
      }}
      style={{
        flexGrow: 0,
        height: 80,
      }}
      extraData={week}
      onEndReached={() => {
        nextWeek();
      }}
      onEndReachedThreshold={0.5}
    />
  );
};

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
  itemWrapper: {
    width: Dimensions.get("window").width / 7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
