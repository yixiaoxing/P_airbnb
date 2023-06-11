import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionRoomsWrapper } from "./style";
import RoomItem from "../room-item";
const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;

  return (
    <SectionRoomsWrapper>
      <ul className="room-list">
        {roomList?.slice(0, 8).map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
          );
        })}
      </ul>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
