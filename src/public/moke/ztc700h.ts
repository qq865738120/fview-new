const detailUrl = [
  "IMG_2438.jpg", // 头
  "IMG_2440.jpg", // 尾部
  "IMG_2441.jpg", // 尾部
  "IMG_2443.jpg", // 尾部
  "IMG_2450.jpg", // 全
  "IMG_2457.jpg", // 尾部
  "IMG_2466.jpg", // 尾部
];
const detailWH = [
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
];
const isShowArr = [
  [false, false, true, true, true, false, false], // 1
  [false, false, true, true, true, false, false], // 2
  [false, false, false, false, false, false, false], // 3
  [false, false, false, false, false, false, false], // 4
  [false, false, false, false, false, false, false], // 5
  [false, false, false, false, false, false, false], // 6
  [false, false, false, false, false, false, false], // 7
  [false, false, false, false, false, false, false], // 8
  [false, false, false, false, false, false, false], // 9
  [false, false, false, false, false, false, false], // 10
  [false, false, false, false, false, false, false], // 11
  [false, false, false, false, false, false, false], // 12
  [false, false, false, false, false, false, false], // 13
  [false, false, false, false, false, false, false], // 14
  [false, false, false, false, false, false, false], // 15
  [false, false, false, false, false, true, false], // 16
  [false, false, false, false, false, true, false], // 17
  [false, false, false, false, false, false, false], // 18
  [false, false, false, false, false, false, false], // 19
  [true, true, false, false, false, false, true], // 20
  [true, true, false, false, false, false, true], // 21
  [false, false, false, false, false, false, false], // 22
  [false, false, false, false, false, false, false], // 23
  [false, false, false, false, false, false, false], // 24
  [false, false, false, false, false, false, false], // 25
  [false, false, false, false, false, false, false], // 26
  [false, false, false, false, false, false, false], // 27
  [false, false, false, false, false, false, false], // 28
  [false, false, false, false, false, false, false], // 29
  [false, false, false, false, false, false, false], // 30
  [false, false, false, false, false, false, false], // 31
  [false, false, false, false, false, false, false], // 32
  [false, false, false, false, false, false, false], // 33
  [false, false, false, false, false, false, false], // 34
  [false, false, false, false, false, false, false], // 35
  [false, false, false, false, false, false, false], // 36
];

const ztc700h: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  ztc700h.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

export default ztc700h;
