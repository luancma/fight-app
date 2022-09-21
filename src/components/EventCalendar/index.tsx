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
  PixelRatio,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { WEEK } from "../../utils/weekList";
import {
  CurrentDayIndicator,
  EventDayIndicator,
  ListItem,
  StyledContainer,
  StyledPressable,
  TextDayOfWeek,
  TextWeekDay,
} from "./EventCalendar.styles";
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

  const showSelectedDayIndicator = (item) =>
    item.date === pressedDay && !isToday(item.date);

  const itemListDetails = (item: ListItem) => {
    const dayOfWeek = WEEK.filter((w) => w.dayOfWeek === item.date.getDay())[0]
      .day;
    const showDayWithValues = eventList.find(
      (activity) => activity?.day === item?.date.getDay()
    );

    return (
      <TouchableWithoutFeedback onPress={() => handleSelectADay(item.date)}>
        <ListItem screenWidth={Dimensions.get("window").width}>
          {showDayWithValues && <EventDayIndicator />}
          <TextWeekDay
            isToday={isToday(item.date)}
            offsetH={Dimensions.get("window").height}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {dayOfWeek.substring(0, 3)}
          </TextWeekDay>
          <StyledPressable isToday={isToday(item.date)} />
          {showSelectedDayIndicator(item) && (
            <CurrentDayIndicator 
            testID="activatedDayIndicator" />
          )}
          <TextDayOfWeek isToday={isToday(item.date)}>{item.day}</TextDayOfWeek>
        </ListItem>
      </TouchableWithoutFeedback>
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

  containerListStyle: {
    display: "flex",
    flexGrow: 1,
  },
  listStyle: {
    flexGrow: 0,
    height: 80,
  },
});
