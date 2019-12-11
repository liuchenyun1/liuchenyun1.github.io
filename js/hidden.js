TITLE = document.getElementsByTagName("title")[0].innerText;
last = false;
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden, " ", last);
  if (document.hidden) {
    document.getElementsByTagName("title")[0].innerText = '网页崩溃了';
  } else {
    if (last) {
      document.getElementsByTagName("title")[0].innerText = '又好了QwQ';
      setTimeout(function () {}, 1000);
    }
    document.getElementsByTagName("title")[0].innerText = TITLE;
  }
  last = document.hidden;
});