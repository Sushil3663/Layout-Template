import styled from 'styled-components';
import { COLORS } from '../../constants/style/colors';

interface HeaderWrapperType {
  backgroundcolor: string;
}

export const HeaderWrapper = styled.header<HeaderWrapperType>`
  background-color: ${(props) => props.backgroundcolor};
  padding: 10px 0;
  height:65px;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
  .collapsable-btn {
    /* background: transparent; */
    /* border: none; */
    color: ${COLORS.White};
    /* padding-top: 10px; */

    &:hover {
      color: ${COLORS.primary} !important;
    }
  }

  img {
    display: flex;
    align-items: center;
  }

  h5 {
    margin-bottom: 0;
    color: ${COLORS.White};
    font-weight: 500;
    margin-top: 0 !important;
  }

  .header-logout {
    height: 100%;
    // padding-right: 200px;
    margin-right: 3rem;

    &--button {
      cursor: pointer;

      &:hover {
        color: ${COLORS.secondary};
      }
    }

    &--info {
      margin-right: 20px;
      color: ${COLORS.Black};
    }
  }

 
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  /* height: 10%; */
  padding-left: 1px;

  /* width: 400px; */
  @media (max-width: 768px) {
    /* width: 270px; */
    /* padding-left: 10px; */
  }
  @media (max-width: 565px) {
    /* width: 250px; */
  }
  img {
    /* width: 11%; */
    /* height: 50%; */
    /* transform: scale(3) */
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionList = styled.ul`
  list-style: none;
  display: flex;

  & li {
    margin-left: 10px;
  }
`;
