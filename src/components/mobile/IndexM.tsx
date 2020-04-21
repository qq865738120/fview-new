import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import MokeData from "../../moke";

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

  componentDidMount() {}

  render() {
    const { list } = this.state;

    return (
      <section className="index-page">
        <div className="list">
          {list.map((item, index) => (
            <div className="item" key={index}>
              <img className="item-img" src={item.image} />
            </div>
          ))}
        </div>

        <style jsx>
          {`
            .index-page {
              background-image: url("https://t1.hddhhn.com/uploads/tu/201812/622/484.jpg");
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
            }
          `}
        </style>
      </section>
    );
  }
}
