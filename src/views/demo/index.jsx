import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0);
  const names = ["nab", "cba", "mba", "aaa", "ccc", "hua", "sdd"];
  function toggleHandle(isNext) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleHandle(false)}>上一个</button>
        <button onClick={(e) => toggleHandle(true)}>下一个</button>
        <div className="list">
          <Indicator selectIndex={selectIndex}>
            {names.map((item) => {
              return <button key={item}>{item}</button>;
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
