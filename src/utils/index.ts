const isServer = typeof window === "undefined";

const getQuery = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};

const px2Rem = (px: number) => {
  if (!isServer) {
    return px / window.innerWidth / 13.333333333333333 * 100
  } else {
    return px
  }

};

const utils = {
  isServer,
  getQuery,
  px2Rem
};

export default utils;
