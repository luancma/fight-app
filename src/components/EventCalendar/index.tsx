import React, { useEffect, useRef, useState } from "react";
import { isToday } from "date-fns";
import {
  FlatList,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Pressable,
  Platform
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { WEEK } from "../../utils/weekList";
import {
  CurrentDayIndicator,
  EventDayIndicator,
  ListItem,
  TextDayOfWeek,
  TextWeekDay,
} from "./EventCalendar.styles";
import { IEventCalendarProps } from "./eventCalendarTypes";
import THEME from "../../theme/default";

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
          {showSelectedDayIndicator(item) && (
            <CurrentDayIndicator
              testID="activatedDayIndicator" />
          )}
          <View>
            <View style={styles.backgroundStyle}>
              <TextDayOfWeek isToday={isToday(item.date)}>{item.day}</TextDayOfWeek>
            </View>
            {
              
            }
            {
              isToday(item.date) && (
                <View style={styles.circleIndicator} />
              )
            }
          </View>
        </ListItem>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    display: "flex",
  },
  backgroundStyle: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',
    height: '2.2rem',
    backgroundColor: "transparent",
  },
  circleIndicator: {
    height: '2rem',
    width: '2rem',
    backgroundColor: "transparent",
    borderWidth: 1,
    position: 'absolute',
    left: Platform.OS === 'android' ? -6.6 : -5.7,
    top: Platform.OS === 'android' ?  '0.10rem' : `${0.09}rem`,
    margin: 'auto',
    borderRadius: '1rem',
  },
  listStyle: {
    flexGrow: 0,
    height: 80,
  },
});
