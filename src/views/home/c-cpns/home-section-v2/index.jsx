import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { HomeSectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import { tabNamesFn } from "@/utils/home";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { dataInfo } = props;

  const initName = Object.keys(dataInfo.dest_list)[0];
  const [tabName, setTabName] = useState(initName);

  // 为了不让子组件重复渲染
  const toggleTab = useCallback((name) => {
    setTabName(name);
  }, []);

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionTabs
        tabNames={tabNamesFn(dataInfo.dest_address)}
        toggleTab={toggleTab}
      />
      <SectionRooms
        roomList={dataInfo.dest_list?.[tabName]}
        itemWidth="33.33%"
      />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV2;
