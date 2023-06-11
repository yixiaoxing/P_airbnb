import React, { memo, useState } from "react";
import { DetailPicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPictures = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);

  const { detailItem } = useSelector(
    (state) => ({
      detailItem: state.detail.detailItem,
    }),
    shallowEqual
  );

  return (
    <DetailPicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowser(true)}>
            <img src={detailItem?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailItem?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictures={detailItem?.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </DetailPicturesWrapper>
  );
});

export default DetailPictures;
