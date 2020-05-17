//  Webull sample Node application
import compression from "compression";
import application, * as express from "express";
import * as path from "path";

const app = application();
app.use(compression());
app.use((req, res, next) => {
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=15552000; includeSubDomains"
  );
  res.setHeader("X-Frame-Options", "deny");
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
