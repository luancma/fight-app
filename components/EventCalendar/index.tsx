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
import { IEventCalendarProps } from "./eventCalendarTypes";

type ListItem = {
  date: Date;
  day: number;
  formatted: string;
  uuid: string;
};

export const EventCalendar = ({
  week,
  nextWeek,
  handleSelectADay,
  pressedDay,
  eventList = [],
}: IEventCalendarProps) => {
  const flatListRef = useRef<FlatList>(null);
  const showSelectedDayIndicator = (item) => {
    if (item.date === pressedDay && !isToday(item.date)) {
      return true;
    }
  };

  const itemListDetails = (item: ListItem) => {
    const day = WEEK.filter((w) => w.dayOfWeek === item.date.getDay())[0].day;
    const showPressedBorder = pressedDay;
    const showDayWithValues = eventList.find(
      (activity) => activity?.day === item?.date.getDay()
    );
    return (
      <View style={styles.itemWrapper}>
        {showDayWithValues && <View style={styles.eventDayIndicator} />}
        <Text
          style={{
            color: isToday(item.date) ? "red" : "black",
          }}
        >
          {day.substring(0, 3)}
        </Text>
        <Pressable
          onPress={() => handleSelectADay(item.date)}
          style={
            isToday(item.date)
              ? {
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                }
              : {
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          {showSelectedDayIndicator(item) && (
            <View
              testID="activatedDayIndicator"
              style={styles.activatedDateIndicator}
            />
          )}
          <Text
            style={isToday(item.date) ? { color: "white" } : { color: "black" }}
          >
            {item.day}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerListStyle}
      horizontal
      data={week}
      keyExtractor={(item) => item.uuid}
      renderItem={({ item }: { item: ListItem }) => itemListDetails(item)}
      style={styles.listStyle}
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
  containerListStyle: {
    display: "flex",
    flexGrow: 1,
  },
  listStyle: {
    flexGrow: 0,
    height: 80,
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
  activatedDateIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 4,
    width: "100%",
    backgroundColor: "red",
    borderRadius: 50,
  },
  eventDayIndicator: {
    position: "absolute",
    top: "10%",
    width: 8,
    marginLeft: -8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 8,
  },
});
