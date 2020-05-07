import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import MokeData from "../../moke";
import Link from "next/link";
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
    };
  }

  async componentDidMount() {}

  onOutClick(name) {
    window.location.href = `/out?name=${name}`;
  }

  render() {
    const { list } = this.state;

    return (
      <section className="index-page">
        <div className="list">
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
              background-size: 100%;
              // height: 50rem;
            }

            .list {
            }

            .list > .item {
              height: 11rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .list > .item > .item-img {
              width: 100%;
              height: 10rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
