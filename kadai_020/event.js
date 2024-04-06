// HTMLの要素を取得
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理を定義
buttonElement.addEventListener('click', function() {
  // ボタンがクリックされたら、<h2> 要素のテキストを変更する
  textElement.textContent = 'ボタンをクリックしました';
});