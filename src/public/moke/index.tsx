import ztc201e from "./ztc201e";
import ztc251v from "./ztc251v";
import qy25h from "./qy25h";
import ztc250a from "./ztc250a";
import ztc251e from "./ztc251e";
import ztc350h from "./ztc350h";
import ztc500h from "./ztc500h";

export default class MokeData {
  imageUrls: any[];

  constructor() {
    const imageUrls = [];
    for (let i = 1; i <= 36; i++) {
      imageUrls.push({ url: i + ".png" });
    }
    this.imageUrls = imageUrls;
  }

  getAutoList() {
    return [
      {
        name: "ZTC201E",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/201E.png",
      },
      {
        name: "QY25H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/QY25H.png",
      },
      {
        name: "ZTC250A",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/250A.png",
      },
      {
        name: "ZTC251E",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/251E.png",
      },
      {
        name: "ZTC251V",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/251V.png",
      },
      {
        name: "ZTC350H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/350H.png",
      },
      {
        name: "ZTC500H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/500H.png",
      },
      // {
      //   name: "ZTC550H",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/550H.png",
      // },
      // {
      //   name: "ZTC550R",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/550R.png",
      // },
      // {
      //   name: "ZTC700H",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/700H.png",
      // },
      // {
      //   name: "ZTC800E",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800E.png",
      // },
      // {
      //   name: "ZTC800H",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800H.png",
      // },
      // {
      //   name: "ZTC800H-2",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800H-2.png",
      // },
      // {
      //   name: "ZTC900H",
      //   image:
      //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/900H.png",
      // },
    ];
  }

  getOutList(): any {
    const imageUrls = [];
    for (let i = 1; i <= 36; i++) {
      imageUrls.push({
        url: i + ".png",
        hotPoint: [
          { x: 100 + i * 3, y: 100 },
          { x: 400, y: 300 + i * 3 },
        ],
      });
    }

    /**
     * 内外室数据
     */
    const outData: any = {
      ZTC201E: {
        isHideDetail: true,
        fv: ztc201e,
        vv: ztc201e,
        int: [{ url: "ZTC201E1.jpg" }, { url: "ZTC201E2.jpg" }],
      },
      QY25H: {
        fv: qy25h,
        vv: qy25h,
        int: [{ url: "QY25H1.jpg" }, { url: "QY25H2.jpg" }],
      },
      ZTC250A: {
        fv: ztc250a,
        vv: ztc250a,
        int: [{ url: "ZTC250A1.jpg" }, { url: "ZTC250A2.jpg" }],
      },
      ZTC251E: {
        isHideDetail: true,
        fv: ztc251e,
        vv: ztc251e,
        int: [{ url: "ZTC251E1.jpg" }, { url: "ZTC251E2.jpg" }],
      },
      ZTC251V: {
        fv: ztc251v,
        vv: ztc251v,
        int: [{ url: "ZTC251V1.jpg" }, { url: "ZTC251V2.jpg" }],
      },
      ZTC350H: {
        fv: ztc350h,
        vv: ztc350h,
        int: [{ url: "ZTC350H1.jpg" }, { url: "ZTC350H2.jpg" }],
      },
      ZTC500H: {
        fv: ztc500h,
        vv: ztc500h,
        int: [{ url: "ZTC500H1.jpg" }, { url: "ZTC500H2.jpg" }],
      },
    };

    const result = { ...JSON.parse(JSON.stringify(outData)) };
    Object.keys(outData).map((outKey) => {
      Object.keys(outData[outKey]).map((itemKey) => {
        outData[outKey][itemKey] instanceof Array &&
          outData[outKey][itemKey].map((item: any, index: any) => {
            // const url = showImage(outKey + "-" + itemKey + "/" + item.url).split("?")[0];
            const url =
              "https://fview-zl-0416.cdn.bcebos.com/" +
              outKey +
              "-" +
              itemKey +
              "/" +
              item.url;
            // console.log("url", url);

            result[outKey][itemKey][index].url = url;
          });
      });
    });

    return result;
  }
}
