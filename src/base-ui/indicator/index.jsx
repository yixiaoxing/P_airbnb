import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    const selectEl = contentRef.current.children[selectIndex];
    const selectOffset = selectEl.offsetLeft;
    const itemWidth = selectEl.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 获取滚动距离

    let distance = selectOffset + itemWidth * 0.5 - contentWidth * 0.5;
    // 左边的处理
    if (distance < 0) distance = 0;
    // 右边的处理
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="indicator-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
