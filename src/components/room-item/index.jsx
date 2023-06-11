import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const slideRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);
  function controlBtnHandel(isRight, e) {
    isRight ? slideRef.current.next() : slideRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData?.picture_urls?.length - 1;
    if (newIndex > itemData?.picture_urls?.length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止事件冒泡
    e.stopPropagation();
  }

  function itemHandle(itemData) {
    if (itemClick) itemClick(itemData);
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderEl = (
    <div className="slide">
      <div className="control">
        <div className="btn left" onClick={(e) => controlBtnHandel(false, e)}>
          <IconArrowLeft width="24" height="24" />
        </div>
        <div className="btn right" onClick={(e) => controlBtnHandel(true, e)}>
          <IconArrowRight width="24" height="24" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <span className="dot-item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </span>
            );
          })}
        </Indicator>
      </div>

      <Carousel dots={false} ref={slideRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <RoomItemWrapper
      verifyColor={itemData.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={(e) => itemHandle(itemData)}
    >
      <div className="inner">
        {!!itemData?.picture_urls?.length ? sliderEl : pictureEl}
        <div className="desc">{itemData.verify_info.messages.join("⋅")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <div className="count">{itemData.reviews_count}</div>
          {itemData?.bottom_info && (
            <div className="extra"> ⋅{itemData.bottom_info?.content}</div>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
