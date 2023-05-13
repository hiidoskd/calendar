import { ITEMS_PER_DAY } from './constants';

export const getDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
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

export const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
};

export const mapEvents = (events, week) => {
  const emptyEvents = [
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
    [...new Array(ITEMS_PER_DAY)].map(() => {}),
  ];

  const eventsMap = emptyEvents;
  console.log(week[0]);
  for (let i = 0; i < events.length; i++) {
    if (
      events[i].time <= week[6].getTime() &&
      events[i].time >= week[0].getTime()
    ) {
      const date = new Date(events[i].time);
      const day = date.getDay();
      const diff = day ? day - 1 : 6;

      const hour = date.getHours();
      eventsMap[diff][hour] = events[i];
    }
  }
  return eventsMap;
};
