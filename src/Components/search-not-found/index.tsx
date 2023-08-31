import styled from "styled-components/macro";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { switchConsultModalView, switchSearchModalView } from "../../Store/slices/modal-slice";

type Props = {};

const SearchNotFound = (props: Props) => {
  const dispatch = useAppDispatch()

  const handleShowConsult = () => {
    dispatch(switchSearchModalView())
    setTimeout(() => {
      dispatch(switchConsultModalView())
    }, 400);
  }
  
  return (
    <SearchNotFoundContainer>
      <div className="not-found-content">
        <div className="not-found-img">
          <img src="/not-found.svg" alt="" />
        </div>
        <div className="not-found-text">
          <p>Мы не смогли ничего найти по вашему запросу</p>
          <p className="not-found-text-second">
            Вы можете оставить заявку на консультацию, в которой опишите суть
            проблемы, после чего наш менеджер свяжется с вами для дальнейшей
            записи
          </p>
        </div>
      </div>
      <div className="not-found-btn">
        <button onClick={handleShowConsult}>Оставить заявку</button>
      </div>
    </SearchNotFoundContainer>
  );
};

export default SearchNotFound;

const SearchNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  .not-found-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .not-found-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    p {
      text-align: center;
      width: 40%;
      color: ${({ theme: { colors } }) => colors.textMain};
      font-size: 16px;
    }

    .not-found-text-second {
      color: ${({ theme: { colors } }) => colors.textSecond};
      margin-top: 30px;
    }
  }

  .not-found-btn {
    margin-top: 60px;

    button {
      width: 100%;
      padding: 17px 40px;
      border-radius: 10px;
      border: none;
      font-size: ${({ theme: { size } }) => size.text.normal};
      background: ${({ theme: { background } }) => background.primary};
      color: white;
      font-weight: 400;
      margin-bottom: 20px;

      &:disabled {
        background: ${({ theme: { colors } }) => colors.darkPrimary};
      }

     
    }
  }

  @media screen and (max-width: 480px) {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;

    .not-found-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .not-found-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 80px;

      p {
        text-align: center;
        width: 100%;
        color: ${({ theme: { colors } }) => colors.textMain};
        font-size: 16px;
      }

      .not-found-text-second {
        color: ${({ theme: { colors } }) => colors.textSecond};
        margin-top: 30px;
      }
    }
    .not-found-img {
      height: 146px;
      width: 172px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .not-found-btn {
      margin-top: 60px;
      width: 100%;
      display: flex;

      button {
        width: 100%;
        padding: 17px;
        border-radius: 10px;
        border: none;
        font-size: ${({ theme: { size } }) => size.text.normal};
        background: ${({ theme: { background } }) => background.primary};
        color: white;
        font-weight: 400;
        margin-bottom: 20px;

        &:disabled {
          background: ${({ theme: { colors } }) => colors.darkPrimary};
        }

        @media (min-width: 320px) and (max-width: 380px) {
          margin-top: 10px;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;

    .not-found-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .not-found-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;

      p {
        text-align: center;
        width: 100%;
        color: ${({ theme: { colors } }) => colors.textMain};
        font-size: 16px;
      }

      .not-found-text-second {
        color: ${({ theme: { colors } }) => colors.textSecond};
        margin-top: 30px;
      }
    }
    .not-found-img {
      height: 146px;
      width: 172px;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
    .not-found-btn {
      margin-top: 40px;

      button {
        width: 100%;
        padding: 17px 40px;
        border-radius: 10px;
        border: none;
        font-size: ${({ theme: { size } }) => size.text.normal};
        background: ${({ theme: { background } }) => background.primary};
        color: white;
        font-weight: 400;
        margin-bottom: 20px;

        &:disabled {
          background: ${({ theme: { colors } }) => colors.darkPrimary};
        }

        @media (min-width: 320px) and (max-width: 380px) {
          margin-top: 10px;
        }
      }
    }
  }
`;
