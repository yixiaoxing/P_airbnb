import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils/home";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { changeHandleConfigAction } from "@/store/modules/main";
const Home = memo(() => {
  const {
    goodPriceInfo,
    hightScoreInfo,
    discountInfo,
    hotRecommend,
    longForInfo,
    plusInfo,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    hightScoreInfo: state.home.hightScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommend: state.home.hotRecommend,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHandleConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 dataInfo={discountInfo} />}
        {isEmptyO(hotRecommend) && <HomeSectionV2 dataInfo={hotRecommend} />}
        {isEmptyO(longForInfo) && <HomeLongFor dataInfo={longForInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 dataInfo={goodPriceInfo} />}
        {isEmptyO(hightScoreInfo) && (
          <HomeSectionV1 dataInfo={hightScoreInfo} />
        )}
        {isEmptyO(plusInfo) && <HomeSectionV3 dataInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
