// 今日の日付を取得
var today = new Date();

// 年を取得して文字列に変換
var year = today.getFullYear().toString();

// 月を取得して文字列に変換
var month = (today.getMonth() + 1).toString();
month = month.length === 1 ? '0' + month : month; // 1桁の場合は0埋め

// 日を取得して文字列に変換
var day = today.getDate().toString();
day = day.length === 1 ? '0' + day : day; // 1桁の場合は0埋め

// コンソールに表示
console.log(year + '年' + month + '月' + day + '日');