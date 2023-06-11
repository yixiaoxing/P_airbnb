import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionV3Wrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
const HomeSectionV3 = memo((props) => {
  const { dataInfo } = props;
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />

      <ScrollView>
        {dataInfo.list.map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth="20%"></RoomItem>
          );
        })}
      </ScrollView>
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV3;
