const detailUrl = [
  "IMG_2471.jpg", // 头
  "IMG_2472.jpg", // 尾部
  "IMG_2475.jpg", // 尾部
  "IMG_2477.jpg", // 尾部
  "IMG_2481.jpg", // 全
  "IMG_2480.jpg", // 尾部
  "IMG_2484.jpg", // 尾部
  "IMG_2491.jpg", // 头
];
const detailWH = [
  { width: 1417, height: 1030 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
];
const isShowArr = [
  [true, true, true, true, true, true, true, true], // 1
  [true, true, true, true, true, true, true, true], // 2
  [true, true, true, true, true, true, true, true], // 3
  [false, true, true, true, true, true, true, false], // 4
  [false, true, true, true, true, true, true, false], // 5
  [false, true, true, true, true, true, true, false], // 6
  [false, true, true, true, true, true, true, false], // 7
  [false, true, true, true, true, true, true, false], // 8
  [false, true, true, true, true, true, true, false], // 9
  [false, true, true, true, true, true, true, false], // 10
  [false, true, true, true, true, true, true, false], // 11
  [false, true, true, true, true, true, true, false], // 12
  [false, true, true, true, true, true, true, false], // 13
  [false, true, true, true, true, true, true, false], // 14
  [false, true, true, true, true, true, true, false], // 15
  [false, true, true, true, true, true, true, false], // 16
  [false, true, true, true, true, true, true, false], // 17
  [false, true, true, true, true, true, true, false], // 18
  [true, true, true, true, true, true, true, true], // 19
  [true, true, true, true, true, true, true, true], // 20
  [true, true, true, true, true, true, true, true], // 21
  [true, false, false, false, true, false, false, false, true], // 22
  [true, false, false, false, true, false, false, false, true], // 23
  [true, false, false, false, true, false, false, false, true], // 24
  [true, false, false, false, true, false, false, false, true], // 25
  [true, false, false, false, true, false, false, false, true], // 26
  [true, false, false, false, true, false, false, false, true], // 27
  [true, false, false, false, true, false, false, false, true], // 28
  [true, false, false, false, true, false, false, false, true], // 29
  [true, false, false, false, true, false, false, false, true], // 30
  [true, false, false, false, true, false, false, false, true], // 31
  [true, false, false, false, true, false, false, false, true], // 32
  [true, false, false, false, true, false, false, false, true], // 33
  [true, false, false, false, true, false, false, false, true], // 34
  [true, false, false, false, true, false, false, false, true], // 35
  [true, false, false, false, true, false, false, false, true], // 36
];

const ztc800h2: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  ztc800h2.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

export default ztc800h2;
