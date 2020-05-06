// 检测滚动栏，显示返回顶部的按钮
window.onscroll = function() {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.getElementsByClassName("top");
  if( t > 300 ) { 
    top[0].style.display = "block";
  } else {
    top[0].style.display = "none";
  }
}

// 回到顶部滚动函数
function toScroll() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollBy(0, -100);
    if (Math.ceil(scrolltop) <= 0) {  // 如果回到了顶部，就清除当前计时函数
        clearInterval(this.timer);
    };
  }, 10)  // 每 10 毫秒调用一次，这样绝对顺滑
}

// 显示壁纸
function showWP() {
  var c = document.getElementsByClassName("container")[0];
  var i = document.getElementsByClassName("wallpaper-button")[0].children[0];
  if (c.style.display === "block") {
    c.style.display = "none";
    i.className = "fa fa-file-alt";
  } else {
    c.style.display = "block";
    i.className = "fa fa-image";
  }
}