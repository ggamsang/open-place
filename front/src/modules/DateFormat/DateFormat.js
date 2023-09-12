const DateFormat = (date) => {
  let update = new Date(date).getTime();
  let today = new Date();
  // today = (process.env.REACT_APP_TYPE === "local" || process.env.REACT_APP_TYPE === "aws_dev") ? today.getTime() + 32400000 : today.getTime();
  today = today.getTime() + 32400000;
  const m = 30;
  const diff = today - update;
  const diffMin = parseInt((diff / 1000 / 3600) * 60, 10); // N분 전
  const diffHour = parseInt(diff / 1000 / 3600, 10); // N시간 전
  const diffDay = parseInt(diffHour / 24, 10); // N일 전
  const diffMon = parseInt(diffDay / m, 10);
  if (diffMin === 0) {
    return `방금 전`;
  } else if (diffHour < 1) {
    // 한시간 전까지
    return `${diffMin}분 전`;
  } else if (1 <= diffHour && diffDay < 1) {
    // 하루 전까지
    return `${diffHour}시간 전`;
  } else if (1 <= diffDay && diffDay < m) {
    // 한달 전까지
    return `${diffDay}일 전`;
  } else if (11 >= diffMon && m <= diffDay) {
    // 한달 이후부터
    return `${diffMon}달 전`;
  } else if (12 <= diffMon) {
    let year = diffMon / 12.0;
    if (year - year.toFixed(0) === 0) return `${year}년 전`;
    else return `${year.toFixed(1)}년 전`;
  }
};
export default DateFormat;
// // "2023-09-07T14:27:48.000Z"
// export default function DateFormat(dateTZ) {
//   const m = 30;
//   const diff =
//     new Date().getTime() +
//     new Date(dateTZ).getTime() -
//     new Date().getTimezoneOffset();
//   const diffMin = parseInt((diff / 1000 / 3600) * 60, 10); // N분 전
//   const diffHour = parseInt(diff / 1000 / 3600, 10); // N시간 전
//   const diffDay = parseInt(diffHour / 24, 10); // N일 전
//   const diffMon = parseInt(diffDay / m, 10);
//   if (diffMin === 0) {
//     return `방금 전`;
//   } else if (diffHour < 1) {
//     // 한시간 전까지
//     return `${diffMin}분 전`;
//   } else if (1 <= diffHour && diffDay < 1) {
//     // 하루 전까지
//     return `${diffHour}시간 전`;
//   } else if (1 <= diffDay && diffDay < m) {
//     // 한달 전까지
//     return `${diffDay}일 전`;
//   } else if (11 >= diffMon && m <= diffDay) {
//     // 한달 이후부터
//     return `${diffMon}달 전`;
//   } else if (12 <= diffMon) {
//     let year = diffMon / 12.0;
//     if (year - year.toFixed(0) === 0) return `${year}년 전`;
//     else return `${year.toFixed(1)}년 전`;
//   }
//   return dateTZ;
// }

// 위 코드의 문제점
// 시스템에 설정된 로컬값에 따라 음수가 되어서 올바른 날짜가 안나옴

// import TimeAgo from "javascript-time-ago";
// import ko from "javascript-time-ago/locale/ko";
// // import en from 'javascript-time-ago/locale/en'
// // const TIME_ZONE = 9 * 60 * 60 * 1000;
// TimeAgo.addDefaultLocale(ko);
// const timeAgo = new TimeAgo("ko-KR");
// // timeAgo.format(new Date())// "just now"
// // timeAgo.format(Date.now() - 60 * 1000)// "1 minute ago"
// // timeAgo.format(Date.now() - 2 * 60 * 60 * 1000)// "2 hours ago"
// // timeAgo.format(Date.now() - 24 * 60 * 60 * 1000)// "1 day ago"
// export default function DateFormat(date) {
//   console.log(date);
//   return timeAgo.format(Date.now() - new Date(date).getTime());
//   // return timeAgo.format(Date.now() - new Date(date).getTime());
// }

// const date = new Date();
// // ✅ Get a string according to a provided Time zone
// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/Los_Angeles',
//   }),
// ); // 👉️ "7/24/2023, 4:48:16 AM"
// console.log(
//   date.toLocaleString('de-DE', {
//     timeZone: 'Europe/Berlin',
//   }),
// ); // 👉️ "24.7.2023, 13:48:16"
// // ✅ Or get a Date object with the specified Time zone
// function changeTimeZone(date, timeZone) {
//   if (typeof date === 'string') {
//     return new Date(
//       new Date(date).toLocaleString('en-US', {
//         timeZone,
//       }),
//     );
//   }
//   return new Date(
//     date.toLocaleString('en-US', {
//       timeZone,
//     }),
//   );
// }

// const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
// console.log(laDate); // 👉️ "Mon Jul 24 2023 04:52:34"

// const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
// console.log(berlinDate); // 👉️ "Mon Jul 24 2023 13:52:34"
