import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireData } from "@/store/modules/entire";
const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);
  const startPage = currentPage * 20 + 1;
  const endPage = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  function pageChangeHandle(e, count) {
    // dispatch(changeCurrentPageAction());

    window.scroll(0, 0);

    dispatch(fetchEntireData(count - 1));
  }

  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startPage} - {endPage}个房源,共超过{totalCount}个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
