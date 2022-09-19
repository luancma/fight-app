import { render } from "@testing-library/react-native";
import React from "react";
import { IEventType } from "../../utils/mocks/events";
import { DetailsContent } from "./DetailsContainer";

const mockEventDay: IEventType | null = null;

test("renders the correct day", () => {
  jest
    .useFakeTimers("modern")
    .setSystemTime(new Date("2022-09-16T10:00:00.000Z"));

  const { getByTestId, getByText } = render(
    <DetailsContent validatedEventDay={mockEventDay} />
  );
  const dayOfWeek = getByText(/Sexta/);
  const nonEventInformation = getByText(/No events for this day/);
  expect(nonEventInformation).toBeTruthy();
  expect(dayOfWeek).toBeTruthy();
});
