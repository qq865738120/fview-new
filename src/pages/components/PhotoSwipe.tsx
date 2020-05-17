import * as React from "react";
// import PhotoSwipe from "photoswipe/dist/photoswipe";
// import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

export interface PhotoSwipeItems {
  src: string;
  w: number;
  h: number;
}

interface PhotoSwipeProps {
  items: PhotoSwipeItems[];
  index?: number;
}

const options = {
  index: 0,
  bgOpacity: 0.9,
  spacing: 0,
  closeEl: false,
  captionEl: false,
  fullscreenEl: false,
  zoomEl: false,
  shareEl: false,
  counterEl: false,
  arrowEl: false,
  preloaderEl: false,
  tapToClose: true,
  closeOnVerticalDrag: false,
  loop: false,
};

const indicatorStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "6rem",
  left: 0,
  right: 0,
  color: "#FFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const indicatorItemStyle: React.CSSProperties = {
  width: "0.6rem",
  height: "0.6rem",
  borderRadius: "100%",
  margin: "0.3rem",
  backgroundColor: "#dcdada",
  transition: "opacity 0.12s ease-in-out",
};

export default class PhotoSwipeWap extends React.PureComponent<
  PhotoSwipeProps,
  any
> {
  gallery: any;
  constructor(props: any) {
    super(props);
    this.state = {
      indicatorIndx: props.index,
    };
  }

  componentDidMount() {
    this.init(this.props);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillUpdate(props: any) {
    if (props.items !== this.props.items) {
      this.init(props);
    }
    if (this.gallery) {
      console.log("this.gallery.items", this.gallery.items);
    }
  }

  init = (props: any) => {
    if (this.gallery) {
      console.log("this.gallery", this.gallery);
      this.gallery.close();
      this.gallery = undefined;
    }
    if (props.items && props.items.length > 0) {
      const { items } = props;
      const pswpElement: any = document.querySelectorAll(".pswp")[0];
      options.index = props.index || 0;
      this.setState({ indicatorIndx: props.index });
      const gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );
      gallery.init();
      if (
        items[props.index || 0].h * items[props.index || 0].initialZoomLevel >
        gallery.viewportSize.y - 100
      ) {
        gallery.zoomTo(
          items[props.index || 0].initialZoomLevel - 0.05,
          { x: gallery.viewportSize.x / 2, y: gallery.viewportSize.y / 2 },
          0
        );
      }
      gallery.listen("afterChange", () => {
        this.setState({ indicatorIndx: gallery.getCurrentIndex() });
      });
      gallery.listen("parseVerticalMargin", (item: any) => {
        item.vGap.top = 50;
        item.vGap.bottom = 50;
      });
      this.gallery = gallery;
    }
  };

  render() {
    const { items } = this.props;
    const { indicatorIndx } = this.state;

    return (
      <section className="pswp">
        <div className="pswp__bg" />

        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>

            <div className="pswp__counter" />

            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>

            {(items || []).length > 1 && (
              <div style={{ ...indicatorStyle }}>
                {(items || []).map((item, index) => (
                  <span
                    key={index}
                    style={{
                      ...indicatorItemStyle,
                      backgroundColor:
                        index === indicatorIndx ? "#dcdada" : "#909090",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
