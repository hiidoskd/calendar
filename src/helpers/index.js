export const getDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

export const generateWeek = (d) => {
  d = new Date(d);
  let monday = getMonday(d);
  let diff = monday.getDate();
  let week = [];
  for (let i = 0; i < 7; i++) {
    week.push(new Date(monday.setDate(diff + i)));
  }
  return week;
};
