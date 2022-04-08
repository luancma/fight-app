import { render } from "@testing-library/react-native";
import React from "react";
import { EventCalendar } from ".";
import { IEventCalendarProps } from "./eventCalendarTypes";

let days = [1, 2, 3, 4, 5, 6, 7];

const generateDays = () => {
  const result = [];
  for (const iterator of days) {
    const generatedDay = {
      uuid: `foo-id-${iterator}`,
      formatted: `12/${iterator}/2020`,
      date: new Date(`2020-12-${iterator}:00:00.000Z`),
      day: iterator,
    };
    result.push(generatedDay);
  }
  return result;
};

describe("Should test the EventCalendar", () => {
  const mockEventCalendarProps: IEventCalendarProps = {
    week: generateDays(),
    nextWeek: () => {},
    handleSelectADay: (date: Date) => {},
    pressedDay: null,
  };

  test("should render the EventCalendar component", () => {
    const { debug, getByText } = render(
      <EventCalendar
        week={mockEventCalendarProps.week}
        nextWeek={mockEventCalendarProps.nextWeek}
        handleSelectADay={mockEventCalendarProps.handleSelectADay}
        pressedDay={mockEventCalendarProps.pressedDay}
      />
    );
    mockEventCalendarProps.week.forEach((day, index) => {
      const value = getByText(`${day.day}`).props.children;
      expect(value).toBe(index + 1)
    });
  });
});
