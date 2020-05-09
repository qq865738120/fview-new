export default class MokeData {
  imageUrls = []

  constructor() {
    const imageUrls = []
    for (let i = 1; i <= 36; i++) {
      imageUrls.push({ url: i + ".png" })
    }
    this.imageUrls = imageUrls
  }

  getAutoList() {
    return [
      // {
      //   name: "QY25H",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC250A",
      //   image: "/static/car-2.png"
      // },
      // {
      //   name: "ZTC251E",
      //   image: "/static/car-1.png"
      // },
      {
        name: "ZTC251V",
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC251V.png"
      },
      {
        name: "ZTC201E",
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC201E.png"
      },
      // {
      //   name: "ZTC350H",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC500H",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC550H",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC550R",
      //   image: "/static/car-1.png"
      // },
      {
        name: "ZTC700H",
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC700H.png"
      },
      // {
      //   name: "ZTC800E",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC800H-2",
      //   image: "/static/car-1.png"
      // },
      // {
      //   name: "ZTC800H",
      //   image: "/static/car-1.png"
      // }
    ]
  }

  /**
   * 获取外室数据
   * @param type 汽车类型
   */
  getOutList(type: string) {
    let res = {
      ZTC350H: {
        fv: [
          ...this.imageUrls
        ],
        vv: [
          ...this.imageUrls
        ]
      }
    };
    return res[type] || {};
  }
}
