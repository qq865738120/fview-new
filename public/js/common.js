(function () {
  document.body.addEventListener("touchmove", function(e) {
    alert("滑动")
    e.preventDefault();
  }, {
    passive: false,
  });
})();
