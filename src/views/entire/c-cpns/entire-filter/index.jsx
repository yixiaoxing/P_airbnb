import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItem, setSelectItem] = useState([]);

  function itemClickHandle(e, item) {
    const newArray = [...selectItem];

    if (newArray.includes(item)) {
      const itemIndex = newArray.findIndex((FindItem) => FindItem === item);

      newArray.splice(itemIndex, 1);
    } else {
      newArray.push(item);
    }

    setSelectItem(newArray);
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItem.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(e, item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
