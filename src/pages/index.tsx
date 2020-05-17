import * as React from "react";
import MokeData from "../public/moke";

export default class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: new MokeData().getAutoList(),
      listStyle: {},
      indexStyle: {},
    };
  }

  componentDidMount() {
    // document.body.addEventListener("touchmove", this.moveEvent, {
    //   passive: false,
    // });

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);
  }

  moveEvent(e: any) {
    alert("滚动");
    console.log("e", e);
    e.preventDefault(); //阻止默认事件(上下滑动)
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  onOutClick(name: string) {
    window.location.href = `/#/out?name=${name}`;
  }

  resize() {
    setTimeout(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width > height) {
        //横屏
        this.setState({
          indexStyle: {
            // maxWidth: "375px"
          },
        });
      } else {
        //竖屏
        this.setState({
          indexStyle: {},
        });
      }
    }, 150);
  }

  render() {
    const { list, indexStyle } = this.state;

    return (
      <section className="index-page" style={{ ...indexStyle }}>
        <div className="top-bar" style={{ ...indexStyle }}>
          <img
            src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-zoomlion.png"
            className="logo"
          ></img>
          <img
            src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-words.png"
            className="desc"
          ></img>
        </div>
        <div className="list">
          <div style={{ height: "2rem" }}></div>
          {list.map((item: any, index: number) => (
            <div
              className="item"
              key={index}
              style={{
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
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
              margin: 0 auto;
            }

            .top-bar {
              height: 1.5rem;
              width: 100%;
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
              width: 100%;
              overflow: scroll;
            }

            .list > .item {
              height: 8rem;
              display: flex;
              align-items: center;
            }

            .list > .item > .item-img {
              height: 6rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
