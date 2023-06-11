import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeLongForWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongFor = memo((props) => {
  const { dataInfo } = props;

  return (
    <HomeLongForWrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />

      <ScrollView>
        {dataInfo.list.map((item) => {
          return (
            <LongForItem itemData={item} key={item.city}>
              {item.city}
            </LongForItem>
          );
        })}
      </ScrollView>
    </HomeLongForWrapper>
  );
});

HomeLongFor.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeLongFor;
