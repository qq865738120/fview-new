/* eslint-disable no-undef */
class vc3dEye {
  selector: JQuery<any>;
  imagePath: any;
  totalImages: any;
  imageExtension: string;
  isMoving: boolean;
  currentX: number;
  currentImage: number;
  height: any;
  width: any;
  angle: any;
  angleType: any;
  handlerMove: any;
  handlerLoaded: any;
  currentY: number;
  offsetLeft: any;
  offsetTop: any;

  constructor(
    selectorName: any,
    params: {
      imagePath: any;
      totalImages: any;
      imageExtension: string;
      height: any;
      width: any;
      angle: any;
      angleType: any;
      handlerMove: any;
      handlerLoaded: any;
    }
  ) {
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
    this.handlerLoaded = params.handlerLoaded;
    this.offsetLeft = 0;
    this.offsetTop = 0;

    function initializeOverlayDiv() {
      // $("html").append("<style type='text/css'>.onLoadingDiv{background-color:#00FF00;opacity:0.5;text-align:center;font-size:2em;font:color:#000000;}</style>")
      // $(selector).html("<div id='VCc' style='height:100%;width:100%;' class='onLoadingDiv'>Loading...</div>");
    }

    initializeOverlayDiv();
    this.forceLoadAllImages();
    //loadAppropriateImage();
    this.assignOperations();
  }

  assignOperations() {
    this.selector.mousedown(function (target: {
      pageX: number;
      pageY: number;
    }) {
      this.isMoving = true;
      this.currentX = target.pageX - this.offsetLeft;
      this.currentY = target.pageY - this.offsetTop;
      //console.log("mousedown : isMoving="+isMoving);
    });

    $(document).mouseup(() => {
      this.isMoving = false;
      //console.log("mouseup : isMoving="+isMoving);
    });

    this.selector.mousemove(function (target: {
      preventDefault: () => void;
      pageX: number;
      pageY: number;
    }) {
      //console.log("mousemove : isMoving="+isMoving);
      console.log("target", target, this.offsetLeft, this.offsetTop);
      target.preventDefault();
      if (this.isMoving == true)
        this.loadAppropriateImage(
          target.pageX - this.offsetLeft,
          target.pageY - this.offsetTop
        );
      // else
      // 	currentX = target.pageX - this.offsetLeft
    });

    this.selector.bind("touchstart", (target: any) => {
      console.log("touchstart : isMoving=" + this.isMoving);
      this.isMoving = true;

      //store the start position
      var actualTouch =
        target.originalEvent.touches[0] ||
        target.originalEvent.changedTouches[0];
      this.currentX = actualTouch.clientX;
      this.currentY = actualTouch.clientY;
    });

    $(document).bind("touchend", () => {
      console.log("touchend : isMoving=" + this.isMoving);
      this.isMoving = false;
    });

    this.selector.bind("touchmove", (target: any) => {
      console.log("touchmove : isMoving=" + this.isMoving);
      // console.log("target", target);
      target.preventDefault();
      var actualTouch =
        target.originalEvent.touches[0] ||
        target.originalEvent.changedTouches[0];
      if (this.isMoving == true) {
        this.loadAppropriateImage(
          actualTouch.pageX - this.offsetLeft,
          actualTouch.pageY - this.offsetTop
        );
      } else {
        this.currentX = actualTouch.pageX - this.offsetLeft;
        this.currentY = actualTouch.pageY - this.offsetTop;
      }
    });
  }

  loadAppropriateImage(newX: any, newY: any) {
    console.log("new", newX, newY);
    console.log(this.currentX, this.currentY);
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width > height) {
      // 横屏
      if (this.currentX - newX > 25) {
        console.log("currentX =" + this.currentX + " newX =" + newX);
        console.log("currentX-newX=" + (this.currentX - newX));
        this.currentX = newX;
        this.currentImage =
          --this.currentImage < 1 ? this.totalImages : this.currentImage;
        console.log("currentImage=" + this.currentImage);
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentX - newX < -25) {
        console.log("currentX =" + this.currentX + " newX =" + newX);
        console.log("currentX-newX=" + (this.currentX - newX));
        this.currentX = newX;
        this.currentImage =
          ++this.currentImage > this.totalImages ? 1 : this.currentImage;
        console.log("currentImage=" + this.currentImage);
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentY - newY > 100) {
        console.log("currentY =" + this.currentY + " newY =" + newY);
        console.log("currentY - newY = " + (this.currentY - newY));
        this.currentY = newY;
        this.angleType = 0;
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentY - newY < -100) {
        console.log("currentY =" + this.currentY + " newY =" + newY);
        console.log("currentY - newY = " + (this.currentY - newY));
        this.currentY = newY;
        this.angleType = 1;
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      }
    } else {
      // 竖屏
      if (this.currentX - newX > 100) {
        console.log("currentX =" + this.currentX + " newX =" + newX);
        console.log("currentX-newX=" + (this.currentX - newX));
        this.currentX = newX;
        this.angleType = 1;
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentX - newX < -100) {
        console.log("currentX =" + this.currentX + " newX =" + newX);
        console.log("currentX-newX=" + (this.currentX - newX));
        this.currentX = newX;
        this.angleType = 0;
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentY - newY > 25) {
        console.log("currentY =" + this.currentY + " newY =" + newY);
        console.log("currentY - newY = " + (this.currentY - newY));
        this.currentY = newY;
        this.currentImage =
          --this.currentImage < 1 ? this.totalImages : this.currentImage;
        console.log("currentImage=" + this.currentImage);
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      } else if (this.currentY - newY < -25) {
        console.log("currentY =" + this.currentY + " newY =" + newY);
        console.log("currentY - newY = " + (this.currentY - newY));
        this.currentY = newY;
        this.currentImage =
          ++this.currentImage > this.totalImages ? 1 : this.currentImage;
        console.log("currentImage=" + this.currentImage);
        this.selector.css(
          "background-image",
          "url(" +
            this.imagePath(this.currentImage, this.angle[this.angleType]) +
            ")"
        );
      }
    }

    this.handlerMove(this.currentImage, this.angleType);
  }

  forceLoadAllImages() {
    //load the first image
    var loadedImages = 2;
    var appropriateImageUrl = this.imagePath(1);
    this.selector.css("background-image", "url(" + appropriateImageUrl + ")");
    $("<img/>").attr("src", appropriateImageUrl);

    this.selector.height(this.height).width(this.width);

    //load all other images by force
    for (var n = 2; n <= this.totalImages; n++) {
      appropriateImageUrl = this.imagePath(n, this.angle[this.angleType]);
      this.selector.append(
        "<img data=" +
          this.angle[this.angleType] +
          " src='" +
          appropriateImageUrl +
          "' style='display:none;'>"
      );
      $("<img data=" + this.angle[this.angleType] + "/>")
        .attr("src", appropriateImageUrl)
        .css("display", "none");
      loadedImages++;
      if (loadedImages >= this.totalImages) {
        $("#VCc").removeClass("onLoadingDiv");
        $("#VCc").text("");
      }
    }

    (this.angle || []).map((item: string, index: any) => {
      if (index !== this.angleType) {
        for (let n = 1; n <= this.totalImages; n++) {
          appropriateImageUrl = this.imagePath(n, item);
          this.selector.append(
            "<img data=" +
              item +
              " src='" +
              appropriateImageUrl +
              "' style='display:none;'>"
          );
          $("<img data=" + item + "/>")
            .attr("src", appropriateImageUrl)
            .css("display", "none");
          loadedImages++;
          if (loadedImages >= this.totalImages) {
            $("#VCc").removeClass("onLoadingDiv");
            $("#VCc").text("");
          }
        }
      }
    });

    var imgdefereds: any[] = []; //定义一个操作数组
    $("img").each(function () {
      //遍历所有图片，将图片
      var dfd = $.Deferred(); //定义一个将要完成某个操作的对象
      $(this).bind("load", function () {
        dfd.resolve(); //图片加载完成后，表示操作成功
      });
      if (this.complete) {
        //如果图片加载状态为完成，那么也标识操作成功
        setTimeout(function () {
          dfd.resolve();
        }, 1000);
      }
      imgdefereds.push(dfd); //将所有操作对象放入数组中
    });
    $.when.apply(null, imgdefereds).done(() => {
      setTimeout(() => {
        this.handlerLoaded();
      }, 500);
    });
  }

  // loadAppropriateImage(arg0: number, arg1: number) {
  //   throw new Error("Method not implemented.");
  // }
}

export default vc3dEye;
