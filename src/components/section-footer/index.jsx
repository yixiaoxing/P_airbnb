import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showName = "显示更多";
  if (name) {
    showName = `显示更多${name}房源`;
  }
  const navigate = useNavigate();
  function entireClickHandle() {
    navigate("/entire");
  }

  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={(e) => entireClickHandle()}>
        <div className="text">{showName}</div>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
