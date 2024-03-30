//配列の宣言と値の代入を行う
const holiDays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// forループを使用してholidaysをコンソールに表示
for (let i = 0; i < holiDays.length; i++) {
  console.log(`${i + 1}. ${holiDays[i]}`);
}

//while文を使用した場合
// インデックス用の変数
let i = 0;

while (i < holiDays.length) {
  console.log(`${i + 1}. ${holiDays[i]}`);
  i++;
}

