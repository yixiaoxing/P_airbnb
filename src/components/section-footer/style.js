import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: ${(props) => props.color};
    font-weight: 700;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`;
