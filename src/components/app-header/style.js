import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .content {
    position: relative;
    background-color: #fff;
    z-index: 99;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .search-area {
      height: 100px;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
