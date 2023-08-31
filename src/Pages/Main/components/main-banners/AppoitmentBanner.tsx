import styled from "styled-components/macro";
import { Text } from "../../../../Components/ui-components/text";
import { RiSearchLine } from "react-icons/ri";
import { useAppDispatch } from "../../../../Hooks/useAppDispatch";
import {
  switchConsultModalView,
  switchSearchModalView,
} from "../../../../Store/slices/modal-slice";

const AppoitmentBanner = () => {
  const dispatch = useAppDispatch();

  const handleShowConsult = () => {
    dispatch(switchConsultModalView());
  };

  return (
    <AppoitmentBannerContainer>
      <div className="appointent-banner__content">
        <h2>
          Быстрая запись <br /> на удобное время
        </h2>
        <div className="appoitment-banner__buttons">
          <div
            className="appoitment-banner__search"
            onClick={() => dispatch(switchSearchModalView())}
          >
            <RiSearchLine />
            <Text variant="small" color="textSecond">
              Найти услугу
            </Text>
          </div>
          <button onClick={handleShowConsult}>Записаться</button>
        </div>
      </div>

      <img src="/haval.png" alt="haval" />
      <div className="image-bg"></div>
    </AppoitmentBannerContainer>
  );
};

export default AppoitmentBanner;

const AppoitmentBannerContainer = styled.div`
  position: relative;
  height: 500px;
  background: #0b1121;
  border-radius: 20px;
  padding: 80px 60px;
  overflow: hidden;

  h2 {
    color: white;
    font-weight: 700;
    font-size: 48px;
  }
  .appointent-banner__content {
    position: relative;
    z-index: 20;
  }
  .appoitment-banner__buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    margin-top: 40px;
    width: 60%;

    div:nth-child(1) {
      grid-column: span 4;
    }

    .appoitment-banner__search {
      height: 50px;
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      padding: 0px 20px;
      background: #313642;
      color: ${({ theme: { colors } }) => colors.textSecond};
      text-align: start;
      border: none;
      border-radius: 10px;
      cursor: pointer;

      svg {
        height: 18px;
        width: 18px;
        margin-right: 15px;
      }
    }
  }
  button {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 40px;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { size } }) => size.text.small};
    border: none;
    border-radius: 10px;
    margin-top: 0px;
    cursor: pointer;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    height: auto;

    z-index: 10;
  }

  .image-bg {
    display: block;
    background: #0b1121;
    opacity: 0.7;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;
  }

  @media screen and (max-width: 480px) {
    position: relative;
    height: 60vh;
    background: #0b1121;
    border-radius: 20px;
    padding: 40px 30px;
    overflow: hidden;

    h2 {
      font-weight: 500;
      font-size: 24px;
    }
    .image-bg {
      display: none;
    }
    .appoitment-banner__buttons {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      width: 100%;
      .appoitment-banner__search {
        height: 50px;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        padding: 0px 15px;
        background: #313642;
        color: ${({ theme: { colors } }) => colors.textSecond};
        text-align: start;
        border: none;
        border-radius: 10px;

        svg {
          height: 23px;
          width: 23px;
          margin-right: 15px;
        }
      }
    }
    button {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: ${({ theme: { colors } }) => colors.primary};
      color: ${({ theme: { colors } }) => colors.white};
      font-size: ${({ theme: { size } }) => size.text.small};
      border: none;
      border-radius: 10px;
      margin-top: 5px;
    }
    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80%;
      height: auto;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    position: relative;
    height: 500px;
    background: #0b1121;
    border-radius: 20px;
    padding: 40px 20px;
    overflow: hidden;

    .image-bg {
      display: none;
    }
    .appoitment-banner__buttons {
      .appoitment-banner__search {
        border-radius: 8px;

        svg {
          height: 23px;
          width: 23px;
          margin-right: 15px;
        }
      }
    }
    button {
      border-radius: 8px;
      margin-top: 5px;
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80%;
      height: auto;
    }
  }
`;
