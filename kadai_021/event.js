const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');


// ボタンがクリックされたときの処理を定義
buttonElement.addEventListener('click', function() {
  // 2秒後にテキストを変更する
  setTimeout(function() {
    // テキスト要素を取得してテキストを変更
    document.getElementById('text').textContent = 'ボタンをクリックしました';
  }, 2000); // 2秒後に実行するためのミリ秒数を指定
});



