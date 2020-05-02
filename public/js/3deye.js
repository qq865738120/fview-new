(function ($) {
  $.fn.extend({
    vc3dEye: function (params) {
      vc3dEye(this.selector, params);
      return;
    },
  });

  var vc3dEye = function (selectorName, params) {
    //assigning params
    this.selector = $(selectorName);
    this.imagePath = params.imagePath;
    this.totalImages = params.totalImages;
    this.imageExtension = params.imageExtension || "png";
    this.isMoving = false;
    this.currentX = 0;
    this.currentY = 0;
    this.currentImage = 1;
    this.height = params.height;
    this.width = params.width;
    this.angle = params.angle;
    this.angleType = params.angleType;
    this.handlerMove = params.handlerMove;

    function assignOperations() {
      selector.mousedown(function (target) {
        isMoving = true;
        currentX = target.pageX - this.offsetLeft;
        currentY = target.pageY - this.offsetTop;
        //console.log("mousedown : isMoving="+isMoving);
      });

      $(document).mouseup(function () {
        isMoving = false;
        //console.log("mouseup : isMoving="+isMoving);
      });

      selector.mousemove(function (target) {
        //console.log("mousemove : isMoving="+isMoving);
        console.log("target", target, this.offsetLeft, this.offsetTop);

        if (isMoving == true)
          loadAppropriateImage(
            target.pageX - this.offsetLeft,
            target.pageY - this.offsetTop
          );
        // else
        // 	currentX = target.pageX - this.offsetLeft
      });

      selector.bind("touchstart", function (target) {
        console.log("touchstart : isMoving=" + isMoving);
        isMoving = true;

        //store the start position
        var actualTouch =
          target.originalEvent.touches[0] ||
          target.originalEvent.changedTouches[0];
        currentX = actualTouch.clientX;
        currentY = actualTouch.clientY;
      });

      $(document).bind("touchend", function () {
        console.log("touchend : isMoving=" + isMoving);
        isMoving = false;
      });

      selector.bind("touchmove", function (target) {
        console.log("touchmove : isMoving=" + isMoving);
        target.preventDefault();
        var actualTouch =
          target.originalEvent.touches[0] ||
          target.originalEvent.changedTouches[0];
        if (isMoving == true) {
          loadAppropriateImage(
            actualTouch.pageX - this.offsetLeft,
            actualTouch.pageY - this.offsetTop
          );
        } else {
          currentX = actualTouch.pageX - this.offsetLeft;
          currentY = actualTouch.pageY - this.offsetTop;
        }
      });
    }

    function loadAppropriateImage(newX, newY) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width > height) {
        // 横屏
        if (currentX - newX > 25) {
          console.log("currentX =" + currentX + " newX =" + newX);
          console.log("currentX-newX=" + (currentX - newX));
          currentX = newX;
          currentImage = --currentImage < 1 ? totalImages : currentImage;
          console.log("currentImage=" + currentImage);
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentX - newX < -25) {
          console.log("currentX =" + currentX + " newX =" + newX);
          console.log("currentX-newX=" + (currentX - newX));
          currentX = newX;
          currentImage = ++currentImage > totalImages ? 1 : currentImage;
          console.log("currentImage=" + currentImage);
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentY - newY > 50) {
          console.log("currentY =" + currentY + " newY =" + newY);
          console.log("currentY - newY = " + (currentY - newY));
          currentY = newY;
          angleType = 0;
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentY - newY < -50) {
          console.log("currentY =" + currentY + " newY =" + newY);
          console.log("currentY - newY = " + (currentY - newY));
          currentY = newY;
          angleType = 1;
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        }
      } else {
        // 竖屏
        if (currentX - newX > 50) {
          console.log("currentX =" + currentX + " newX =" + newX);
          console.log("currentX-newX=" + (currentX - newX));
          currentX = newX;
          // currentImage = --currentImage < 1 ? totalImages : currentImage;
          // console.log("currentImage=" + currentImage);
          // selector.css(
          //   "background-image",
          //   "url(" + imagePath(currentImage, angle[angleType]) + ")"
          // );

          angleType = 1;
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentX - newX < -50) {
          console.log("currentX =" + currentX + " newX =" + newX);
          console.log("currentX-newX=" + (currentX - newX));
          currentX = newX;
          // currentImage = ++currentImage > totalImages ? 1 : currentImage;
          // console.log("currentImage=" + currentImage);
          // selector.css(
          //   "background-image",
          //   "url(" + imagePath(currentImage, angle[angleType]) + ")"
          // );

          angleType = 0;
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentY - newY > 25) {
          console.log("currentY =" + currentY + " newY =" + newY);
          console.log("currentY - newY = " + (currentY - newY));
          currentY = newY;
          // angleType = 0;
          // selector.css(
          //   "background-image",
          //   "url(" + imagePath(currentImage, angle[angleType]) + ")"
          // );

          currentImage = --currentImage < 1 ? totalImages : currentImage;
          console.log("currentImage=" + currentImage);
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        } else if (currentY - newY < -25) {
          console.log("currentY =" + currentY + " newY =" + newY);
          console.log("currentY - newY = " + (currentY - newY));
          currentY = newY;
          // angleType = 1;
          // selector.css(
          //   "background-image",
          //   "url(" + imagePath(currentImage, angle[angleType]) + ")"
          // );

          currentImage = ++currentImage > totalImages ? 1 : currentImage;
          console.log("currentImage=" + currentImage);
          selector.css(
            "background-image",
            "url(" + imagePath(currentImage, angle[angleType]) + ")"
          );
        }
      }

      handlerMove(currentImage, angleType);
    }

    function forceLoadAllImages() {
      //load the first image
      var loadedImages = 2;
      var appropriateImageUrl = imagePath(1);
      selector.css("background-image", "url(" + appropriateImageUrl + ")");
      $("<img/>")
        .attr("src", appropriateImageUrl)
        .load(() => {
          selector.height(this.height).width(this.width);
        });

      //load all other images by force
      for (var n = 2; n <= totalImages; n++) {
        appropriateImageUrl = imagePath(n, angle[angleType]);
        selector.append(
          "<img data=" +
            angle[angleType] +
            " src='" +
            appropriateImageUrl +
            "' style='display:none;'>"
        );
        $("<img data=" + angle[angleType] + "/>")
          .attr("src", appropriateImageUrl)
          .css("display", "none")
          .load(function () {
            loadedImages++;
            if (loadedImages >= totalImages) {
              $("#VCc").removeClass("onLoadingDiv");
              $("#VCc").text("");
            }
          });
      }

      (angle || []).map((item, index) => {
        if (index !== angleType) {
          for (let n = 1; n <= totalImages; n++) {
            appropriateImageUrl = imagePath(n, item);
            selector.append(
              "<img data=" +
                item +
                " src='" +
                appropriateImageUrl +
                "' style='display:none;'>"
            );
            $("<img data=" + item + "/>")
              .attr("src", appropriateImageUrl)
              .css("display", "none")
              .load(function () {
                loadedImages++;
                if (loadedImages >= totalImages) {
                  $("#VCc").removeClass("onLoadingDiv");
                  $("#VCc").text("");
                }
              });
          }
        }
      });
    }

    function initializeOverlayDiv() {
      // $("html").append("<style type='text/css'>.onLoadingDiv{background-color:#00FF00;opacity:0.5;text-align:center;font-size:2em;font:color:#000000;}</style>")
      // $(selector).html("<div id='VCc' style='height:100%;width:100%;' class='onLoadingDiv'>Loading...</div>");
    }

    initializeOverlayDiv();
    forceLoadAllImages();
    //loadAppropriateImage();
    assignOperations();
  };
})(jQuery);
