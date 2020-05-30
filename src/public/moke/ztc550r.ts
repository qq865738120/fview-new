const detailUrl = [
  "IMG_2532.jpg", // 头
  "IMG_2536.jpg", // 尾部
  "IMG_2538.jpg", // 尾部
  "IMG_2546.jpg", // 尾部
];
const detailWH = [
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
  { width: 1417, height: 1030 },
];
const isShowArr = [
  [true, true, true, true], // 1
  [true, true, true, true], // 2
  [true, true, true, true], // 3
  [false, true, true, true], // 4
  [false, true, true, true], // 5
  [false, true, true, true], // 6
  [false, true, true, true], // 7
  [false, true, true, true], // 8
  [false, true, true, true], // 9
  [false, true, true, true], // 10
  [false, true, true, true], // 11
  [false, true, true, true], // 12
  [false, true, true, true], // 13
  [false, true, true, true], // 14
  [false, true, true, true], // 15
  [false, true, true, true], // 16
  [false, true, true, true], // 17
  [false, true, true, true], // 18
  [true, true, true, true], // 19
  [true, true, true, true], // 20
  [true, true, true, true], // 21
  [true, false, false, false], // 22
  [true, false, false, false], // 23
  [true, false, false, false], // 24
  [true, false, false, false], // 25
  [true, false, false, false], // 26
  [true, false, false, false], // 27
  [true, false, false, false], // 28
  [true, false, false, false], // 29
  [true, false, false, false], // 30
  [true, false, false, false], // 31
  [true, false, false, false], // 32
  [true, false, false, false], // 33
  [true, false, false, false], // 34
  [true, false, false, false], // 35
  [true, false, false, false], // 36
];

const ztc550r: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  ztc550r.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

export default ztc550r;
