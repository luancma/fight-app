import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const ActionButton = ({
  handleDecrementWeek,
  handleBackToday,
  handleIncrementWeek,
}: {
  handleDecrementWeek: () => void;
  handleBackToday: () => void;
  handleIncrementWeek: () => void;
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleDecrementWeek}
        style={{ width: 80, height: 32, backgroundColor: "#03a9f4" }}
      >
        <Text>Previous week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleBackToday}
        style={{ width: 80, height: 32, backgroundColor: "#67daff" }}
      >
        <Text>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleIncrementWeek}
        style={{ width: 80, height: 32, backgroundColor: "#03a9f4" }}
      >
        <Text>Next week</Text>
      </TouchableOpacity>
    </>
  );
};
