// const menu2 = document.querySelector("#menu2");
// const content2 = document.querySelector("#content2");
const allcontent = document.querySelectorAll('.content');

// menu2.addEventListener("click", (event) => {
//   allcontent.forEach((element) => {
//     element.classList.remove('active');
//   });
//   event.target.classList.add('active');
//   content2.classList.add('active');

// });


const menuElements = document.querySelectorAll('.menu-item');
for(var i = 0; i < menuElements.length ; i++) {
   menuElements[i].addEventListener('click', change, false);
}

function change(e) {
    allcontent.forEach((element) => {
      element.classList.remove('active');
    });

    menuElements.forEach((element) => {
      element.classList.remove('active');
    });
  
    e.target.classList.add('active');
    var target = e.currentTarget.getAttribute('data-content');
    document.getElementById(target).classList.add('active');
  
    if (target == 'content2') {
      document.getElementById("box").classList.add('test')
    } else {
      document.getElementById("box").classList.remove('test')
    }

  }

// 送信ボタン
  document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルトの送信をキャンセル

    // フォームの値を取得
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // メール内容を表示
    alert("宛先: " + to + "\n件名: " + subject + "\nメッセージ: " + message);
    