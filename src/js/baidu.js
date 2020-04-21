let BosClient = require("@baiducloud/sdk").BosClient;

// 官方域名： fview-zl-0416.bj.bcebos.com 
// CDN加速： 开
//  加速域名：fview-zl-0416.cdn.bcebos.com 管理CDN域名

module.exports = {
    
  showImage:function(key){
    var config = {
      endpoint: "http://fview-zl-0416.bj.bcebos.com",
      // endpoint: "http://zwj-test.bj.bcebos.com",
      credentials: {
        ak: "350f1c898e5d41ef9d95b8eddb39ba82", //您的AK
        sk: "1448aae559f044c0a1f8b35c630114a7", //您的SK
        // ak: "e0202c39b4d044dc8bea53bef849eb98",
        // sk: "ab396c378613412a9281914d42e48be9"
      },
    };

      var client = new BosClient(config);
      
      var bucketName = "";
      var key = key;
      var timestamp = Date.now() / 1000;
      var expirationInSeconds = 60 * 60 * 6;
      var headers = {};
      var params = {};
      var headersToSign = {};
      
      var signedUrl = client.generatePresignedUrl(bucketName, key, timestamp, expirationInSeconds, headers, params, headersToSign, config);
      
      return signedUrl;
  }
};