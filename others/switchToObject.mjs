// const curntDayIndx = new Date().getDay();
// const days = {
// 	0: "saturday",
// 	1: "sunday",
// 	2: "monday",
// 	3: "thuesday",
// 	4: "wednesday",
// 	5: "thursday",
// 	6: "friday",
// };

// const getDay =
// 	(days, _default = "_default") =>
// 	(dayIndex) =>
// 		days[dayIndex] || _default;

const getDay = () => {
	return {
		0: "saturday",
		1: "sunday",
		2: "monday",
		3: "thuesday",
		4: "wednesday",
		5: "thursday",
		6: "friday",
	}[new Date().getDay()];
};
// console.log(getDay());
// console.log(getDayName(curntDayIndx));

// function getEmoji(mood) {
// 	let emoji;
// 	if (mood === "happy") {
// 		emoji = "😃";
// 	} else if (mood === "sad") {
// 		emoji = "Sad";
// 	} else if (mood === "angry") {
// 		emoji = "😡 Angry";
// 	} else {
// 		emoji = "😑";
// 	}
// 	return emoji;
// }

function getEmoji(mood) {
	return (
		{
			happy: "😁 happy",
			sad: "😥 sad",
			angry: "😡 Angry",
		}[mood] || "😑 default"
	);
}

console.log("Getting emoji", getEmoji("a"));
