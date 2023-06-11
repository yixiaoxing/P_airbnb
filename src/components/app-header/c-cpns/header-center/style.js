import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 25px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${(props) => props.theme.textColor.secondColor};
      font-weight: 600;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      margin-right: 10px;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }
`;
