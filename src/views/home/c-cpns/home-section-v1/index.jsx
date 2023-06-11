import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
const HomeSectionV1 = memo((props) => {
  const { dataInfo } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionRooms roomList={dataInfo.list} />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV1;
