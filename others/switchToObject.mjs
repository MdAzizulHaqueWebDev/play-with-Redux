const curntDayIndx = new Date().getDay();
const days = {
	0: "saturday",
	1: "sunday",
	2: "monday",
	3: "thuesday",
	4: "wednesday",
	5: "thursday",
	6: "friday",
};

const getDay =
	(days, _default = "_default") =>
	(dayIndex) =>
		days[dayIndex] || _default;

export const getDayName = getDay(days);

console.log(getDayName(curntDayIndx));
