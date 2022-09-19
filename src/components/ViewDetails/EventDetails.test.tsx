import * as React from "react";
import { render } from "@testing-library/react-native";
import { EventDetails } from "./index";
import { IEventType } from "../../utils/mocks/events";

describe("Testing EventDetails.test", () => {
     const mockEvent: IEventType = {
      id: "foo-id",
      name: "Example name",
      tutor: "Tutor name",
      scheduledTime: "12:00",
      duration: 1,
    };
  it("should render the EventDetails component", () => {
    const { debug, getByText } = render(
      <EventDetails event={mockEvent} />
    );
    debug();
    expect(getByText(/example name/i)).toBeTruthy();
    expect(getByText(/tutor name/i)).toBeTruthy();
    expect(getByText(/12:00/i)).toBeTruthy();
  });
});
