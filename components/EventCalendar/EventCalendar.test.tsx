import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { EventCalendar } from ".";
import { IEventCalendarProps } from "./eventCalendarTypes";
import { IEventListData } from '../../utils/mocks/events'
import { generateDays } from "../../utils/mocks/mockGenerateWeekDays";


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

  test('Should dispatch the click function then press the button', () => { 
    const mockEvent: IEventListData[] = [
      {
        id: 'foo-id-1',
        day: 2,
        event: [
          {
            id: 'foo-event-id-1',
            name: "Muay Thai",
            tutor: "Nguyen",
            scheduledTime: "10:00",
            duration: 1,
          },
        ],
      },
    ]

    const handleSelectADayMock = jest.fn();
    const { getByText } = render(
      <EventCalendar
        week={mockEventCalendarProps.week}
        nextWeek={mockEventCalendarProps.nextWeek}
        handleSelectADay={handleSelectADayMock}
        pressedDay={mockEventCalendarProps.pressedDay}
        eventList={mockEvent}
      />
      );
      const eventDay = getByText('7')
      expect(eventDay).toBeTruthy();
      fireEvent.press(eventDay, handleSelectADayMock);
      expect(handleSelectADayMock).toBeCalled();
   })
});
