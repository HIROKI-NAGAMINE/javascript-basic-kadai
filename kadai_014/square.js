// アロー関数を使って定義する
const square = (num) => {
  const result = num * num;
  return result;
};

// 引数として10を渡して関数を呼び出し、結果をコンソールに出力する
const inputNum = 10;  // 10を渡す
const outputResult = square(inputNum);
console.log(outputResult); // 結果は100になります
