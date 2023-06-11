import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
const AppHeader = memo(() => {
  const { isFixed } = useSelector(
    (state) => ({
      isFixed: state.main.headerConfig.isFixed,
    }),
    shallowEqual
  );
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        {/* <div className="search-area"></div> */}
      </div>

      {/* <div className="cover"></div> */}
    </HeaderWrapper>
  );
});

export default AppHeader;
