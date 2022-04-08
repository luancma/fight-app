import * as React from "react";
import { render } from "@testing-library/react-native";
import { EventDetails } from "./index";
import { IEventType } from "../../utils/mocks/events";

describe("Testing EventDetails.test", () => {
  it("should render the EventDetails component", () => {
    const mockEvent: IEventType = {
      id: "foo-id",
      name: "Exemple name",
      tutor: "Tutor name",
      scheduledTime: "12:00",
      duration: 1,
    };
    const { debug, getByText } = render(
      <EventDetails event={mockEvent} />
    );
    debug();
    expect(getByText(/exemple name/i)).toBeTruthy();
    expect(getByText(/tutor name/i)).toBeTruthy();
    expect(getByText(/12:00/i)).toBeTruthy();
  });
});
