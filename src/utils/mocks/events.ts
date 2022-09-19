import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export interface IEventType {
  id: string;
  name: string;
  tutor: string;
  scheduledTime: string;
  duration: number;
}

export interface IEventListData {
  id: string;
  day: number;
  event: IEventType[];
}

export const eventsList: IEventListData[] = [
  {
    id: uuidv4(),
    day: 1,
    event: [
      {
        id: uuidv4(),
        name: "Muay Thai",
        tutor: "Nguyen",
        scheduledTime: "10:00",
        duration: 1,
      },
      {
        id: uuidv4(),
        name: "Box",
        tutor: "Thiago Box",
        scheduledTime: "15:00",
        duration: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    day: 3,
    event: [
      {
        id: uuidv4(),
        name: "Muay Thai",
        tutor: "Nguyen",
        scheduledTime: "10:00",
        duration: 1,
      },
    ],
  },
];
