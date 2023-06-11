import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";

import DetailPictures from "./c-cpns/detail-pictures";
import DetailInfos from "./c-cpns/detail-infos";
import { useDispatch } from "react-redux";
import { changeHandleConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHandleConfigAction({ isFixed: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
