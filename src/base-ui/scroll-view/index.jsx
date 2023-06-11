// import PropTypes from 'prop-types'
import React, { useRef, memo, useEffect, useState } from "react";
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [index, setIndex] = useState(0);
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    setShowRightArrow(totalDistance > 0);
    totalDistanceRef.current = totalDistance;
  }, [props.children]);

  function controlClick(isRight) {
    const newIndex = isRight ? index + 1 : index - 1;
    setIndex(newIndex);
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffset = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffset}px)`;
    // 是否继续显示右边的按钮

    setShowRightArrow(totalDistanceRef.current > newOffset);
    setShowLeftArrow(newOffset > 0);
  }

  return (
    <ScrollViewWrapper>
      {showLeftArrow && (
        <div className="control left" onClick={(e) => controlClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightArrow && (
        <div className="control right" onClick={(e) => controlClick(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
