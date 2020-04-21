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
      {
        name: "ZTC350H",
        image: "https://www.diyimei.net/upload/2018/1523807721171765.jpg"
      },
      {
        name: "ZTC350H",
        image: "https://www.diyimei.net/upload/2018/1523807721767773.jpg"
      },
      {
        name: "ZTC350H",
        image: "https://www.diyimei.net/upload/2018/1523807722388733.jpg"
      },
      {
        name: "ZTC350H",
        image: "https://www.diyimei.net/upload/2018/1523807721171765.jpg"
      }
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