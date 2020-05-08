import App, { AppContext } from "next/app";
import React from "react";
import { initializeStore, Store } from "../stores";
import { Provider, inject, observer } from "mobx-react";
import getConfig from "next/config";
import "../styles/app.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
const axios = require("axios");

const isMobile = (req) => {
  const deviceAgent = req && req.headers["user-agent"];
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(deviceAgent);
};

class MyMobxApp extends App {
  mobxStore: Store;

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext: AppContext): Promise<any> {
    const { publicRuntimeConfig } = getConfig();
    const ctx: any = appContext.ctx;
    const appProps = await App.getInitialProps(appContext);
    const outData = await axios.get(
      publicRuntimeConfig.apiHost + "/api/out/data"
    );

    ctx.mobxStore = initializeStore({
      appStore: { title: "", isMobile: isMobile(ctx.req) },
      carStore: { outData: outData.data },
    });

    return {
      ...appProps,
      initialMobxState: ctx.mobxStore,
      isMobile: isMobile(ctx.req),
    };
  }

  constructor(props: any) {
    super(props);
    // Comment 2
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  componentDidMount() {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      const isWeixin = navigator.userAgent.indexOf("MicroMessenger") !== -1;
      if (isWeixin) {
        window.location.href = "/page/wxError.html";
      }
    }
  }

  render() {
    const { Component, pageProps }: any = this.props;

    return (
      // Comment 3
      <Provider {...this.mobxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyMobxApp;
