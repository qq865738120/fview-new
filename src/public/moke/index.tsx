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
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC251V.png",
      },
      {
        name: "ZTC201E",
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC201E.png",
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
        image: "https://fview-zl-0416.cdn.bcebos.com/home/ZTC700H.png",
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
     * 外室数据
     */
    const outData: any = {
      ZTC251V: {
        fv: [
          {
            url: "1.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.25, y: 2.23 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "2.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.2, y: 2.1 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "3.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.15, y: 1.88 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "4.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.15, y: 1.68 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "5.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.14, y: 1.48 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "6.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.13, y: 1.18 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "7.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "8.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "9.png",
            hotPoint: [
              { x: 0.45, y: 2 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "10.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "11.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "12.png",
            hotPoint: [
              { x: 0.5, y: 0.1 },
              { x: 0, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "13.png",
            hotPoint: [
              { x: 0.5, y: 0.4 },
              { x: 0.1, y: -1.7 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "14.png",
            hotPoint: [
              { x: 0.5, y: 0.8 },
              { x: 0.1, y: -1.92 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "15.png",
            hotPoint: [
              { x: 0.45, y: 1.2 },
              { x: 0.1, y: -2.07 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "16.png",
            hotPoint: [
              { x: 0.45, y: 1.35 },
              { x: 0.15, y: -2.23 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "17.png",
            hotPoint: [
              { x: 0.45, y: 1.65 },
              { x: 0.2, y: -2.4 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: false,
              },
            ],
          },
          {
            url: "18.png",
            hotPoint: [
              { x: 0.45, y: 1.6 },
              { x: 0.2, y: -2.45 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "19.png",
            hotPoint: [
              { x: 0.45, y: 1.55 },
              { x: 0.2, y: -2.5 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "20.png",
            hotPoint: [
              { x: 0.45, y: 1.5 },
              { x: 0.2, y: -2.5 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "21.png",
            hotPoint: [
              { x: 0.45, y: 1.45 },
              { x: 0.2, y: -2.4 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "22.png",
            hotPoint: [
              { x: 0.45, y: 1.4 },
              { x: 0.3, y: -2.1 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "23.png",
            hotPoint: [
              { x: 0.45, y: 1.35 },
              { x: 0.35, y: -1.6 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "24.png",
            hotPoint: [
              { x: 0.45, y: 1.2 },
              { x: 0.35, y: -1.1 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: true,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "25.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.4, y: -1.6 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "26.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: -0.6 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "27.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: 0 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "28.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: 0.5 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "29.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: 1 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "30.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: 1.4 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "31.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.45, y: 1.2 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "32.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.4, y: 1.6 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "33.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.4, y: 1.9 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "34.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.33, y: 2.3 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "35.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.3, y: 2.25 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
          {
            url: "36.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.22, y: 2.35 },
            ],
            detailImgs: [
              {
                url: "0",
                isShow: false,
              },
              {
                url: "1",
                isShow: true,
              },
            ],
          },
        ],
        vv: [
          {
            url: "1.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.5, y: 1.5 },
            ],
          },
          {
            url: "2.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.4, y: 1.6 },
            ],
          },
          {
            url: "3.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.25, y: 1.5 },
            ],
          },
          {
            url: "4.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.15, y: 1.5 },
            ],
          },
          {
            url: "5.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 1.48 },
            ],
          },
          {
            url: "6.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0.05, y: 1.4 },
            ],
          },
          {
            url: "7.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "8.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "9.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "10.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "11.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "12.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "13.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "14.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "15.png",
            hotPoint: [
              { x: -0.75, y: 0.3 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "16.png",
            hotPoint: [
              { x: -0.6, y: 0.5 },
              { x: 0.2, y: -1.4 },
            ],
          },
          {
            url: "17.png",
            hotPoint: [
              { x: -0.5, y: 0.75 },
              { x: 0.2, y: -1.5 },
            ],
          },
          {
            url: "18.png",
            hotPoint: [
              { x: -0.4, y: 1.05 },
              { x: 0.15, y: -1.65 },
            ],
          },
          {
            url: "19.png",
            hotPoint: [
              { x: -0.35, y: 1.3 },
              { x: 0.05, y: -1.75 },
            ],
          },
          {
            url: "20.png",
            hotPoint: [
              { x: -0.3, y: 1.45 },
              { x: 0, y: -1.8 },
            ],
          },
          {
            url: "21.png",
            hotPoint: [
              { x: -0.2, y: 1.55 },
              { x: -0.1, y: -1.8 },
            ],
          },
          {
            url: "22.png",
            hotPoint: [
              { x: 0.1, y: 1.7 },
              { x: -0.35, y: -1.7 },
            ],
          },
          {
            url: "23.png",
            hotPoint: [
              { x: 0.2, y: 1.65 },
              { x: -0.45, y: -1.6 },
            ],
          },
          {
            url: "24.png",
            hotPoint: [
              { x: 0.3, y: 1.6 },
              { x: -0.6, y: -1.55 },
            ],
          },
          {
            url: "25.png",
            hotPoint: [
              { x: 0.35, y: 1.55 },
              { x: -0.75, y: -1.35 },
            ],
          },
          {
            url: "26.png",
            hotPoint: [
              { x: 0.55, y: 1.5 },
              { x: -1, y: -1.05 },
            ],
          },
          {
            url: "27.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "28.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "29.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "30.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "31.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "32.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "33.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: 0, y: 0 },
            ],
          },
          {
            url: "34.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.9, y: 1 },
            ],
          },
          {
            url: "35.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.8, y: 1.1 },
            ],
          },
          {
            url: "36.png",
            hotPoint: [
              { x: 0, y: 0 },
              { x: -0.65, y: 1.2 },
            ],
          },
        ],
        int: [{ url: "ZTC251V1.jpg" }, { url: "ZTC251V2.jpg" }],
      },
      ZTC201E: {
        fv: [
          {
            url: "1.png",
            hotPoint: [{ x: 0.25, y: 2.23 }],
          },
          {
            url: "2.png",
            hotPoint: [{ x: 0.2, y: 2.1 }],
          },
          {
            url: "3.png",
            hotPoint: [{ x: 0.15, y: 1.88 }],
          },
          {
            url: "4.png",
            hotPoint: [{ x: 0.15, y: 1.68 }],
          },
          {
            url: "5.png",
            hotPoint: [{ x: 0.14, y: 1.48 }],
          },
          {
            url: "6.png",
            hotPoint: [{ x: 0.13, y: 1.18 }],
          },
          {
            url: "7.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "8.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "9.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "10.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "11.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "12.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "13.png",
            hotPoint: [{ x: 0.1, y: -1.7 }],
          },
          {
            url: "14.png",
            hotPoint: [{ x: 0.1, y: -1.92 }],
          },
          {
            url: "15.png",
            hotPoint: [{ x: 0.1, y: -2.07 }],
          },
          {
            url: "16.png",
            hotPoint: [{ x: 0.15, y: -2.23 }],
          },
          {
            url: "17.png",
            hotPoint: [{ x: 0.2, y: -2.4 }],
          },
          {
            url: "18.png",
            hotPoint: [{ x: 0.2, y: -2.45 }],
          },
          {
            url: "19.png",
            hotPoint: [{ x: 0.2, y: -2.5 }],
          },
          {
            url: "20.png",
            hotPoint: [{ x: 0.2, y: -2.5 }],
          },
          {
            url: "21.png",
            hotPoint: [{ x: 0.2, y: -2.4 }],
          },
          {
            url: "22.png",
            hotPoint: [{ x: 0.3, y: -2.1 }],
          },
          {
            url: "23.png",
            hotPoint: [{ x: 0.35, y: -1.6 }],
          },
          {
            url: "24.png",
            hotPoint: [{ x: 0.35, y: -1.1 }],
          },
          {
            url: "25.png",
            hotPoint: [{ x: 0.4, y: -1.6 }],
          },
          {
            url: "26.png",
            hotPoint: [{ x: 0.45, y: -0.6 }],
          },
          {
            url: "27.png",
            hotPoint: [{ x: 0.45, y: 0 }],
          },
          {
            url: "28.png",
            hotPoint: [{ x: 0.45, y: 0.5 }],
          },
          {
            url: "29.png",
            hotPoint: [{ x: 0.45, y: 1 }],
          },
          {
            url: "30.png",
            hotPoint: [{ x: 0.45, y: 1.4 }],
          },
          {
            url: "31.png",
            hotPoint: [{ x: 0.45, y: 1.2 }],
          },
          {
            url: "32.png",
            hotPoint: [{ x: 0.4, y: 1.6 }],
          },
          {
            url: "33.png",
            hotPoint: [{ x: 0.4, y: 1.9 }],
          },
          {
            url: "34.png",
            hotPoint: [{ x: 0.33, y: 2.3 }],
          },
          {
            url: "35.png",
            hotPoint: [{ x: 0.3, y: 2.25 }],
          },
          {
            url: "36.png",
            hotPoint: [{ x: 0.22, y: 2.35 }],
          },
        ],
        vv: [...imageUrls],
        int: [{ url: "ZTC201E1.jpg" }, { url: "ZTC201E2.jpg" }],
      },
      ZTC700H: {
        fv: [
          {
            url: "1.png",
            hotPoint: [{ x: 0.25, y: 2.23 }],
          },
          {
            url: "2.png",
            hotPoint: [{ x: 0.2, y: 2.1 }],
          },
          {
            url: "3.png",
            hotPoint: [{ x: 0.15, y: 1.88 }],
          },
          {
            url: "4.png",
            hotPoint: [{ x: 0.15, y: 1.68 }],
          },
          {
            url: "5.png",
            hotPoint: [{ x: 0.14, y: 1.48 }],
          },
          {
            url: "6.png",
            hotPoint: [{ x: 0.13, y: 1.18 }],
          },
          {
            url: "7.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "8.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "9.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "10.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "11.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "12.png",
            hotPoint: [{ x: 100, y: 100 }],
          },
          {
            url: "13.png",
            hotPoint: [{ x: 0.1, y: -1.7 }],
          },
          {
            url: "14.png",
            hotPoint: [{ x: 0.1, y: -1.92 }],
          },
          {
            url: "15.png",
            hotPoint: [{ x: 0.1, y: -2.07 }],
          },
          {
            url: "16.png",
            hotPoint: [{ x: 0.15, y: -2.23 }],
          },
          {
            url: "17.png",
            hotPoint: [{ x: 0.2, y: -2.4 }],
          },
          {
            url: "18.png",
            hotPoint: [{ x: 0.2, y: -2.45 }],
          },
          {
            url: "19.png",
            hotPoint: [{ x: 0.2, y: -2.5 }],
          },
          {
            url: "20.png",
            hotPoint: [{ x: 0.2, y: -2.5 }],
          },
          {
            url: "21.png",
            hotPoint: [{ x: 0.2, y: -2.4 }],
          },
          {
            url: "22.png",
            hotPoint: [{ x: 0.3, y: -2.1 }],
          },
          {
            url: "23.png",
            hotPoint: [{ x: 0.35, y: -1.6 }],
          },
          {
            url: "24.png",
            hotPoint: [{ x: 0.35, y: -1.1 }],
          },
          {
            url: "25.png",
            hotPoint: [{ x: 0.4, y: -1.6 }],
          },
          {
            url: "26.png",
            hotPoint: [{ x: 0.45, y: -0.6 }],
          },
          {
            url: "27.png",
            hotPoint: [{ x: 0.45, y: 0 }],
          },
          {
            url: "28.png",
            hotPoint: [{ x: 0.45, y: 0.5 }],
          },
          {
            url: "29.png",
            hotPoint: [{ x: 0.45, y: 1 }],
          },
          {
            url: "30.png",
            hotPoint: [{ x: 0.45, y: 1.4 }],
          },
          {
            url: "31.png",
            hotPoint: [{ x: 0.45, y: 1.2 }],
          },
          {
            url: "32.png",
            hotPoint: [{ x: 0.4, y: 1.6 }],
          },
          {
            url: "33.png",
            hotPoint: [{ x: 0.4, y: 1.9 }],
          },
          {
            url: "34.png",
            hotPoint: [{ x: 0.33, y: 2.3 }],
          },
          {
            url: "35.png",
            hotPoint: [{ x: 0.3, y: 2.25 }],
          },
          {
            url: "36.png",
            hotPoint: [{ x: 0.22, y: 2.35 }],
          },
        ],
        vv: [...imageUrls],
        int: [{ url: "ZTC700H1.jpg" }, { url: "ZTC700H2.jpg" }],
      },
    };

    const result = { ...JSON.parse(JSON.stringify(outData)) };
    Object.keys(outData).map((outKey) => {
      Object.keys(outData[outKey]).map((itemKey) => {
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
