import { generateWeekList } from "./generateWeekList";

describe("Generate week list", () => {
  test("Should start in the week of the current date", () => {
    const weekList = generateWeekList(new Date("04/08/2022"));
    const summer = weekList[0];
    expect(summer.formatted).toBe("Apr 03");
  });
  test("Shold return a list of weeks", () => {
    const list = generateWeekList(new Date("04/06/2022"));
    const summer = list[0];
    const nextSummer = list[7];

    expect(summer.formatted).toBe("Apr 03");
    expect(nextSummer.formatted).toBe("Apr 10");
    expect(list.length).toBe(14);
  });
    test("Should return the 13 days after the current day", () => {
      const weekList = generateWeekList(new Date('04/14/2022'), true);
      const firstDay = weekList[0];
      expect(firstDay.formatted).toBe("Apr 15");
    })
});
