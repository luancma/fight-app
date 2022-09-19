let days = [1, 2, 3, 4, 5, 6, 7];

export const generateDays = () => {
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
