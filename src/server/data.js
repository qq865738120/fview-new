

const imageUrls = []
for (let i = 1; i <= 36; i++) {
  imageUrls.push({ url: i + ".png", hotPoint: [{ x: 100 + i*3, y: 100 }, { x: 400, y: 300 + i*3 }] })
}

/**
 * 外室数据
 */
const outData = {
  ZTC350H: {
    fv: [
      ...imageUrls
    ],
    vv: [
      ...imageUrls
    ],
    int: [
      { url: "ZTC350H1.jpg" },
      { url: "ZTC350H2.jpg" }
    ]
  }
}

const data = {
  outData
}

module.exports = data