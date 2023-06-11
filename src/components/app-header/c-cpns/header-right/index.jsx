import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    function clickHandel() {
      setShowPanel(false);
    }

    // 这里涉及到冒泡所以在点击profile后将事件冒泡到window又设置为false了
    // 解决办法是设置为捕获的过程
    window.addEventListener("click", clickHandel, true);

    return () => {
      window.removeEventListener("click", clickHandel);
    };
  }, []);

  function profileClickHandel() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
        <div className="profile" onClick={profileClickHandel}>
          <IconMenu />
          <IconAvatar />
          {showPanel && (
            <div className="panel">
              <div className="top">
                <div className="register item">注册</div>
                <div className="login item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
