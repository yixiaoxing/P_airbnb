import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { tabNames = [], toggleTab } = props;

  function tabControl(index, item) {
    setCurrentIndex(index);
    toggleTab(item);
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={`item ${currentIndex === index ? "active" : ""}`}
              key={item}
              onClick={(e) => tabControl(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
