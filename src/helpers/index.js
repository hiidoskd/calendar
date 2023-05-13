import { ITEMS_PER_DAY } from './constants';

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
  for (let i = 0; i < events.length; i++) {
    const eventDate = new Date(events[i].time);
    if (
      eventDate.getDate() <= week[6].getDate() &&
      eventDate.getDate() >= week[0].getDate()
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
