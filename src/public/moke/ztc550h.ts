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
  [false, false, false, false], // 1
  [false, false, false, false], // 2
  [false, false, false, false], // 3
  [false, false, false, false], // 4
  [false, false, false, false], // 5
  [false, false, false, false], // 6
  [false, false, false, false], // 7
  [false, false, false, false], // 8
  [false, false, false, false], // 9
  [false, false, false, false], // 10
  [false, false, false, false], // 11
  [true, false, true, true], // 12
  [true, false, true, true], // 13
  [false, false, false, false], // 14
  [false, false, false, false], // 15
  [false, false, false, false], // 16
  [false, false, false, false], // 17
  [false, false, false, false], // 18
  [false, false, false, false], // 19
  [false, false, false, false], // 20
  [false, false, false, false], // 21
  [false, false, false, false], // 22
  [false, false, false, false], // 23
  [false, false, false, false], // 24
  [false, false, false, false], // 25
  [false, false, false, false], // 26
  [false, false, false, false], // 27
  [false, false, false, false], // 28
  [false, false, false, false], // 29
  [false, false, false, false], // 30
  [false, false, false, false], // 31
  [false, false, false, false], // 32
  [false, false, false, false], // 33
  [false, false, false, false], // 34
  [false, true, false, false], // 35
  [false, true, false, false], // 36
];

const ztc550h: any[] = [];
for (let i = 0; i < 36; i++) {
  const detailImgs: any[] = [];
  detailUrl.map((item, index) => {
    detailImgs.push({
      url: item,
      ...detailWH[index],
      isShow: isShowArr[i][index],
    });
  });

  ztc550h.push({
    url: i + 1 + ".png",
    detailImgs,
  });
}

export default ztc550h;
