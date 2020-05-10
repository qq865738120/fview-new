import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import MokeData from "../../moke";
import Link from "next/link";
import utils from "../../utils";
const axios = require("axios");

interface IndexMProps {
  appStore?: AppStore;
}

@inject("appStore")
@observer
export default class IndexM extends React.PureComponent<IndexMProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: new MokeData().getAutoList(),
      listStyle: {}
    };
  }

  async componentDidMount() {
    this.setState({
      listStyle: {
        height: typeof window === "undefined" ? "" :  utils.px2Rem(window.innerHeight) - 2 + "rem"
      }
    })
  }

  onOutClick(name) {
    window.location.href = `/out?name=${name}`;
  }

  render() {
    const { list, listStyle } = this.state;

    return (
      <section className="index-page">
        <div className="top-bar">
          <img src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-zoomlion.png" className="logo"></img>
          <img src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-words.png" className="desc"></img>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <div className="item" key={index} style={{ justifyContent: index % 2 === 0 ? "flex-start" : "flex-end" }}>
              <img
                onClick={this.onOutClick.bind(this, item.name)}
                className="item-img"
                src={item.image}
              />
            </div>
          ))}
        </div>

        <style jsx>
          {`
            .index-page {
              background-image: url("https://fview-static.cdn.bcebos.com/zoomlion-360view%2Fimg%2Fbg-index.png");
              background-size: cover;
            }

            .top-bar {
              height: 1.5rem;
              width: 100vw;
              position: fixed;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .logo {
              width: 2rem;
              margin-left: 0.5rem;
            }

            .desc {
              width: 2rem;
              margin-right: 0.5rem;
            }

            .list {
              height: 100vh;
              width: 100vw;
              overflow: scroll;
            }

            .list > .item {
              height: 11rem;
              display: flex;
              align-items: center;
            }

            .list > .item > .item-img {
              height: 8rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
