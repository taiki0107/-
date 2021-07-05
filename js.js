//キーワード検索機能
$("#keyword").on("input", searchEvent);

function searchEvent() {
  const results = [];
  const inputText = $(this).val(); 

 /* const result2 = [];
  const inputAtr = $(this).val(); */

  if (inputText) {
    $("#list li").each((index, name) => {
      if (name.textContent.indexOf(inputText) !== -1) {
        results.push(name.textContent);
      }
    });

    $("#info").empty();

for(i=0;i<results.length;i++){
  $("#info").append("<li>"+"<a href='"+results[i]+".html'>"+results[i]+"</a>"+"<li>");
}

  }
}


//アコーディオンメニュー

/*function toggle() {
        //const menu = document.querySelectorAll(".menu");
        const content = document.getElementsByClassName("content");
       // this.classList.toggle("is-active");
        content.classList.toggle("is-open");
      }*/
 