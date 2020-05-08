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
        <div className="top-bar" />
        <div className="list" style={{ ...listStyle }}>
          {list.map((item, index) => (
            <div className="item" key={index}>
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
              background-image: url("https://fview-static.cdn.bcebos.com/zoomlion-360view/img/bg-index.png");
              background-size: cover;
            }

            .top-bar {
              height: 2rem;
            }

            .list {
              height: 100vh;
              overflow: scroll;
            }

            .list > .item {
              height: 13rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .list > .item > .item-img {
              width: 100%;
              height: 9rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
