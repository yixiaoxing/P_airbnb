import React, { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailItemAction } from "@/store/modules/detail";
const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailItemAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <EntireRoomsWrapper>
      <div className="title">{totalCount}多处住所</div>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              itemClick={itemClickHandle}
              key={item._id}
            />
          );
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
