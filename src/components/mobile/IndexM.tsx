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

  render() {
    const { list } = this.state;

    return (
      <section className="index-page">
        <div className="list">
          {list.map((item, index) => (
            <div className="item" key={index}>
              <Link href={{ pathname: "/out", query: { name: "ZTC350H" } }}>
                <img className="item-img" src={item.image} />
              </Link>
            </div>
          ))}
        </div>

        <style jsx>
          {`
            .index-page {
              background-image: url("/static/bg-index.png");
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
              width: 5rem;
              height: 5rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
