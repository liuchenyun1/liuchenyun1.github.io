TITLE = document.getElementsByTagName("title")[0].innerText;
if (document.hidden) {
  document.getElementsByTagName("title")[0].innerText = '网页崩溃了';
  while (document.hidden) {}
  document.getElementsByTagName("title")[0].innerText = '诶 又好了QwQ';
  setTimeout(function () {
    document.getElementsByTagName("title")[0].innerText = TITLE;
  }, 1000);
}