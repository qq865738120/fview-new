// node-cache 保存和获取缓存
import NodeCache from "node-cache";
const myCache = new NodeCache({
  stdTTL: 7200, // 缓存过期时间
  checkperiod: 120, // 定期检查时间
});

// 设置缓存
var setCache = (key: string, value: string) => {
  // 设置缓存
  myCache.set(key, value);
};

// 获取缓存
var getCache = (key: string | number): string => {
  // 读取缓存
  const value = myCache.get(key) as string;
  if (value) {
    console.log(`存在于缓存中${key}=${value}`);
  } else {
    console.log(`${key} not found in node-cache`);
  }
  return value;
};

export default {
  setCache,
  getCache,
};
