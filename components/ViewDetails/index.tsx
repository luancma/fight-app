import { View, Text } from "react-native";
import React from "react";
import { IEventType } from "../../utils/mocks/events";

export function EventDetails({ event }: { event: IEventType }) {
  const {
    name,
    tutor,
    scheduledTime
  } = event
  console.log(name,
    tutor,
    scheduledTime)
  return (
    <View>
      <Text>{name}</Text>
      <Text>{tutor}</Text>
      <Text>{scheduledTime}</Text>
    </View>
  );
}
