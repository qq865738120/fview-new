const detailUrl = [
  "IMG_2411.jpg", // 头
  "IMG_2390.jpg", // 尾部
  "IMG_2395.jpg", // 尾部
  "IMG_2413.jpg", // 尾部
  "IMG_2428.jpg", // 全
  "IMG_2417.jpg", // 尾部
  "IMG_2419.jpg", // 尾部
  "IMG_2425.jpg", // 尾部
  "IMG_2426.jpg", // 尾部
  "IMG_2433.jpg", // 尾部
  "IMG_2412.jpg", // 头
  "IMG_2430.jpg", // 头
];
const detailWH = [
  { width: 1417, height: 1087 },
  { width: 1417, height: 1146 },
  { width: 1417, height: 1144 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1143 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1144 },
  { width: 1417, height: 1200 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1087 },
  { width: 1417, height: 1143 },
];
const isShowArr = [
  [true, true, true, true, true, true, true, true, true, true, true, true], // 1
  [true, true, true, true, true, true, true, true, true, true, true, true], // 2
  [true, true, true, true, true, true, true, true, true, true, true, true], // 3
  [false, true, true, true, true, true, true, true, true, true, false, false], // 4
  [false, true, true, true, true, true, true, true, true, true, false, false], // 5
  [false, true, true, true, true, true, true, true, true, true, false, false], // 6
  [false, true, true, true, true, true, true, true, true, true, false, false], // 7
  [false, true, true, true, true, true, true, true, true, true, false, false], // 8
  [false, true, true, true, true, true, true, true, true, true, false, false], // 9
  [false, true, true, true, true, true, true, true, true, true, false, false], // 10
  [false, true, true, true, true, true, true, true, true, true, false, false], // 11
  [false, true, true, true, true, true, true, true, true, true, false, false], // 12
  [false, true, true, true, true, true, true, true, true, true, false, false], // 13
  [false, true, true, true, true, true, true, true, true, true, false, false], // 14
  [false, true, true, true, true, true, true, true, true, true, false, false], // 15
  [false, true, true, true, true, true, true, true, true, true, false, false], // 16
  [false, true, true, true, true, true, true, true, true, true, false, false], // 17
  [false, true, true, true, true, true, true, true, true, true, false, false], // 18
  [true, true, true, true, true, true, true, true, true, true, true, true], // 19
  [true, true, true, true, true, true, true, true, true, true, true, true], // 20
  [true, true, true, true, true, true, true, true, true, true, true, true], // 21
  [
    true,
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
    true,
    true,
  ], // 22
  [
    true,
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
    true,
    true,
  ], // 23
  [
    true,
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
    true,
    true,
  ], // 24
  [
    true,
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
    true,
    true,
  ], // 25
  [
    true,
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
    true,
    true,
  ], // 26
  [
    true,
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
    true,
    true,
  ], // 27
  [
    true,
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
    true,
    true,
  ], // 28
  [
    true,
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
    true,
    true,
  ], // 29
  [
    true,
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
    true,
    true,
  ], // 30
  [
    true,
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
    true,
    true,
  ], // 31
  [
    true,
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
    true,
    true,
  ], // 32
  [
    true,
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
    true,
    true,
  ], // 33
  [
    true,
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
    true,
    true,
  ], // 34
  [
    true,
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
    true,
    true,
  ], // 35
  [
    true,
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
    true,
    true,
  ], // 36
];

const ztc500h: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  ztc500h.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

export default ztc500h;
