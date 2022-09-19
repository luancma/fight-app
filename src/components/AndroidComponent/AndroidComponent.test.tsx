import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import { IEventListData } from "../../utils/mocks/events";
import { AndroidComponent } from ".";
import { generateDays } from "../../utils/mocks/mockGenerateWeekDays";

describe("Testing AndroidComponent", () => {
  const mockEvent: IEventListData[] = [
    {
      id: "foo-id-1",
      day: 2,
      event: [
        {
          id: "foo-event-id-1",
          name: "Muay Thai",
          tutor: "Nguyen",
          scheduledTime: "10:00",
          duration: 1,
        },
      ],
    },
  ];

  const mockFunction = jest.fn();
  test("Should not render the event details when a validateEventDay is null", async () => {
    const { queryByTestId } = render(
      <AndroidComponent
        handleIncrementWeek={mockFunction}
        handleSelectADay={mockFunction}
        selectedDay={new Date("2020-12-04T02:00:00.000Z")}
        weekList={generateDays()}
        validatedEventDay={null}
      />
    );
    await waitFor(() => expect(queryByTestId("eventDetails")).toBeFalsy());
  });
  test("Should not render the event details when a validateEventDay is null", async () => {
    const { queryByTestId } = render(
      <AndroidComponent
        handleIncrementWeek={mockFunction}
        handleSelectADay={mockFunction}
        selectedDay={new Date("2020-12-04T02:00:00.000Z")}
        weekList={generateDays()}
        validatedEventDay={{
          day: 1,
          event: [
            {
              duration: 1,
              id: "validated-event-item-details-1",
              name: "Muay Thai",
              scheduledTime: "10:00",
              tutor: "Nguyen",
            },
          ],
          id: "validated--event-item-id-1",
        }}
      />
    );
    await waitFor(() => expect(queryByTestId("eventDetails")).toBeTruthy());
  });
});
