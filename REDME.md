## FVIEW
- 生产部署：npm run restart-prod



## 加车指南

> 以下是新增展示车辆的教程。

#### 1、增加首页车辆列表

在`src/public/index.tsx`文件中增加一行车辆信息，在`// TODO`部分添加新内容，如下所示：

```typescript
// src/public/index.tsx文件

  /**
   * 获取首页车辆列表
   *
   * @returns
   * @memberof MokeData
   */
  getAutoList() {
    return [
      {
        // 车辆型号
        name: "ZTC201E",
        // 车辆缩略图链接
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
      {
        name: "ZTC550H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/550H.png",
      },
      {
        name: "ZTC550R",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/550R.png",
      },
      {
        name: "ZTC700H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/700H.png",
      },
      {
        name: "ZTC800E",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800E.png",
      },
      {
        name: "ZTC800H",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800H.png",
      },
      {
        name: "ZTC800H-2",
        image:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/800H-2.png",
      },
      // 在这里按上面格式增加一行
    ];
  }
```

#### 2、添加车辆内外饰展示图以及可点击热点

在`src/public/index.tsx`文件中增加一行车辆信息，在`// TODO`部分添加新内容，如下所示：

```typescript
// src/public/index.tsx文件
  
  /**
   * 获取内外饰3d旋转图片列表
   *
   * @returns {*}
   * @memberof MokeData
   */
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
      // 型号要与首页配置的型号对应好，完全一样
      ZTC201E: {
        // 是否展示缩顶部缩略图横条。
        isHideDetail: true,
        // 外室视角1的图片数据，具体怎么写图片格式，后面会详细讲解。
        fv: ztc201e,
        // 外室视角2的图片数据，具体怎么写图片格式，后面会详细讲解。
        vv: ztc201e,
        // 内室图片名
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
      ZTC550H: {
        fv: ztc550h,
        vv: ztc550h,
        int: [{ url: "ZTC550H1.jpg" }, { url: "ZTC550H2.jpg" }],
      },
      ZTC550R: {
        isHideDetail: true,
        fv: ztc550r,
        vv: ztc550r,
        int: [{ url: "ZTC550R1.jpg" }, { url: "ZTC550R2.jpg" }],
      },
      ZTC700H: {
        fv: ztc700h,
        vv: ztc700h,
        int: [{ url: "ZTC700H1.jpg" }, { url: "ZTC700H2.jpg" }],
      },
      ZTC800E: {
        fv: ztc800e,
        vv: ztc800e,
        int: [{ url: "ZTC800E1.jpg" }, { url: "ZTC800E2.jpg" }],
      },
      ZTC800H: {
        isHideDetail: true,
        fv: ztc800h,
        vv: ztc800h,
        int: [{ url: "ZTC800H1.jpg" }, { url: "ZTC800H2.jpg" }],
      },
      "ZTC800H-2": {
        isHideDetail: true,
        fv: ztc800h2,
        vv: ztc800h2,
        int: [{ url: "ZTC800H-2-1.jpg" }, { url: "ZTC800H-2-2.jpg" }],
      },
      // TODO 在这里增加一行内外饰数据，参考上面的格式。
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
```

#### 3、添加具体的单个车辆图片数据

在第2步中需要在`fv: 图片数据`以及`vv: 图片数据`这里添加图片数据，下面是具体新建图片数据的方法，下面以`qy25h`这辆车为例，新建车辆图片数据格式跟已有车辆完全一致：

```typescript
// src/public/qy25h.ts文件

// TODO 只需要修改detailUrl、detailWH、isShowArr，文件最后一行改成文件名

// 述略图名字
const detailUrl = [
  "IMG_2301.jpg", // 头
  "IMG_2303.jpg", // 尾部
  "IMG_2304.jpg", // 尾部
  "IMG_2308.jpg", // 尾部
  "IMG_2311.jpg", // 全
  "IMG_2312.jpg", // 尾部
  "IMG_2315.jpg", // 尾部
  "IMG_2320.jpg", // 尾部
  "IMG_2321.jpg", // 尾部
  "IMG_2324.jpg", // 尾部
  "IMG_2326.jpg", // 头
  "IMG_2327.jpg",
  "IMG_2332.jpg",
  "IMG_2334.jpg",
];
// 述略图的宽度与高度，要以实际图片宽高为准，否则会拉伸
// 这里第一行对应上面detailUrl数组中的第一行，以此类推，行数要对应好。
const detailWH = [
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1141 },
  { width: 1417, height: 1141 },
  { width: 1417, height: 1141 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1143 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1229 },
  { width: 1417, height: 1143 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1143 },
];
// 是否展示缩略图，true表示展示，false表示不展示。
// 这是一个二维数组，外层数组每一行表示3d旋转中的每一张图
// 现在有36张图，所以外层数组要有36行，行号与3d旋转图的名字对应，例如：第一个图会使用外层数组的第一行。
// 内层数组表示哪些缩略图要展示，个数以及行号与detailUrl数组对应，可以参考detailWH数组。
const isShowArr = [
  [
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ], // 1
  [
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ], // 2
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 3
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 4
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 5
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 6
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
  ], // 7
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
  ], // 8
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 9
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 10
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 11
  [
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 12
  [
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 13
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ], // 14
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ], // 15
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 16
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 17
  [
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ], // 18
  [
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
  ], // 19
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 20
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 21
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 22
  [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
  ], // 23
  [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
  ], // 24
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 25
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 26
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 27
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 28
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 29
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 30
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 31
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 32
  [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 33
  [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 34
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 35
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ], // 36
];

const qy25h: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  qy25h.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

// TODO 这里的qy25h与文件名保持一致
export default qy25h;

```

#### 4、把第3步图片数据加到第2步里面去

刚刚第2步那里的`fv: 图片数据`以及`vv: 图片数据`改成第3步的图片数据，代码如下：

```typescript
// src/public/index.tsx文件

// 这些都是图片数据
import ztc201e from "./ztc201e";
import ztc251v from "./ztc251v";
import qy25h from "./qy25h";
import ztc250a from "./ztc250a";
import ztc251e from "./ztc251e";
import ztc350h from "./ztc350h";
import ztc500h from "./ztc500h";
import ztc550h from "./ztc550h";
import ztc550r from "./ztc550r";
import ztc700h from "./ztc700h";
import ztc800e from "./ztc800e";
import ztc800h from "./ztc800h";
import ztc800h2 from "./ztc800h2";
// TODO 在这里添加图片数据，格式与上面保持一致。以qy25h车型为例，下面图片数据那里需要写qy25h，与这里保持一致。
```

#### 5、测试

完成1到4步后，如果需要测试一下是否能够正常展示，按照一下步骤进行：

1. 检查电脑是否安装了`node`，如果没有安装需要去[官网](https://nodejs.org/zh-cn/)下载安装。
2. 打开命令行工具，进到项目目录中去。
3. 如果是第一次运行项目，需要在命令行工具中输入一下`npm install`命令来安装项目依赖，如果已经运行过就不需要运行了。
4. 在命令行工具中输入`npm run dev`命令。
5. 等命令运行成功后在浏览器中输入`http://127.0.0.1:3000/`会打开一个页面。
6. 如果提示“请在微信中打开”，可以在浏览器中增加一个新的移动设备，并且把UA设置成微信即可，不清楚[点击这里。](https://www.jianshu.com/p/d976e5330674)

