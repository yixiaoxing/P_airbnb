import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { PictureBrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon_close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "../indicator";
import classNames from "classnames";
const PictureBrowser = memo((props) => {
  const { pictures, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showIn, setShowIn] = useState(true);
  useEffect(() => {
    // 散失滚动功能，隐藏滚动条
    document.body.style.overflow = "hidden";
    return () => {
      // 结束后恢复滚动
      document.body.style.overflow = "auto";
    };
  }, []);

  function closeHandel() {
    if (closeClick) closeClick();
  }

  function controlBtnHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictures.length - 1;
    if (newIndex > pictures.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function bottomClickHandle(index) {
    if (index > currentIndex) setIsNext(true);
    if (index < currentIndex) setIsNext(false);
    setCurrentIndex(index);
  }

  return (
    <PictureBrowserWrapper isNext={isNext} showIn={showIn}>
      <div className="top">
        <div className="close-btn" onClick={(e) => closeHandel()}>
          <IconClose />
        </div>
      </div>

      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlBtnHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlBtnHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictures[currentIndex]}
              className="fadePic"
              timeout={200}
            >
              <img src={pictures[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictures.length}:
              </span>
              <span>room apartment图片</span>
            </div>
            <div className="toggle" onClick={(e) => setShowIn(!showIn)}>
              <span>{showIn ? "隐藏" : "显示"}照片列表</span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictures.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: index === currentIndex,
                    })}
                    key={item}
                    onClick={(e) => bottomClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictures: PropTypes.array,
};

export default PictureBrowser;
