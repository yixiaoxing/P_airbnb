import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  background-color: #333;
  z-index: 999;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      color: #fff;
      z-index: 99;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;

      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      .fadePic-enter {
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .fadePic-enter-active {
        transform: translate(0);
        opacity: 1;

        transition: all 200ms ease;
      }
      .fadePic-exit {
        opacity: 1;
      }

      .fadePic-exit-active {
        opacity: 0;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          z-index: 9;
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showIn ? "67px" : "0")};
        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
