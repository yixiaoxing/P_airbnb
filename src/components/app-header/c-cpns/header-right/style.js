import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;

  color: ${(props) => props.theme.textColor.primaryColor};
  .btns {
    display: flex;
    align-items: center;

    .btn {
      box-sizing: content-box;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 22px;
    background-color: #fff;
    cursor: pointer;
    color: #999;
    margin-right: 24px;
    margin-left: 10px;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 55px;
      width: 240px;
      color: #666;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
      border-radius: 15px;
      background-color: #fff;
      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
