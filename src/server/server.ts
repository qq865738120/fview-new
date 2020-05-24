//  Webull sample Node application
import compression from "compression";
import application, * as express from "express";
import * as path from "path";
import Axios from "axios";
import config from "../config/index";
import crypto from "crypto";

const app = application();
app.use(compression());
app.use((req, res, next) => {
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=15552000; includeSubDomains"
  );
  res.setHeader("X-Frame-Options", "deny");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  next();
});

app.use(
  express.static(path.join(__dirname, "./../../dist/client"), {
    extensions: ["html"],
    dotfiles: "allow",
    setHeaders(res, url) {
      // html文件不缓存
      if (url.match(/\.html$/)) {
        res.removeHeader("Etag");
        res.removeHeader("Last-Modified");
        res.setHeader("Cache-Control", "private, no-cache, no-store");
        res.setHeader("Expires", "0");
        res.setHeader("Pragma", "no-cache");
      }
    },
  })
);

/**
 * 参数url必传，url为当前页面url
 */
app.route("/api/wx/signature").get(async (req, res) => {
  const tokenRes = await Axios.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appId}&secret=${config.secret}`
  );

  console.log("req.query", req.query);

  if (tokenRes.data.access_token) {
    //token请求成功
    const ticketRes = await Axios.get(
      `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${tokenRes.data.access_token}&type=jsapi`
    );
    if (ticketRes.data.ticket) {
      // ticket拿到
      const noncestr = crypto
        .randomBytes(Math.ceil(16 / 2))
        .toString("hex")
        .slice(0, 16);
      const timestamp = new Date().getTime();
      const str = `jsapi_ticket=${ticketRes.data.ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${req.query.url}`;
      const hash = crypto.createHash("sha1");
      hash.update(str);
      const signature = hash.digest("hex");
      res.send({
        errcode: 0,
        noncestr,
        timestamp,
        signature,
      });
    } else {
      res.send({
        errcode: ticketRes.data.errcode,
        errmsg: ticketRes.data.errmsg,
      });
    }
  } else {
    res.send({ errcode: tokenRes.data.errcode, errmsg: tokenRes.data.errmsg });
  }
});

app.listen(3000, "0.0.0.0", (error) => {
  if (error) {
    console.log(error);
  }
  console.log(
    "%s: Node server started on %s:%d ...",
    new Date(),
    "0.0.0.0",
    3000
  );
});
