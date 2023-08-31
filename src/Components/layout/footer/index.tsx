import { Link } from "react-router-dom";
import { footerLinks } from "./footer-links";
import styled from "styled-components/macro";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-top">
        <Link to={"/"} className="footer-logo">
          EX
        </Link>
        <div className="footer-links">
          {footerLinks.map((e) => (
            <Link to={e.path}>{e.name}</Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-phone">
          <a href="tel:+79250628790">+7 (925) 062-87-90</a>
        </div>
        <div className="footer-copy">
          <p>2014 - {currentYear} ©</p>
        </div>
        <div className="footer-creator">
          <p>
            Сайт создан: <a href="https://t.me/Distcom">@Distcom</a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 40px 30px 40px;
  background: #242424;

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-links {
      a {
        margin-left: 40px;
        font-weight: 400;
        font-size: 16px;
      }
    }
    .footer-logo {
      text-decoration: none;
      font-weight: 600;
      font-size: ${({ theme: { size } }) => size.title.medium};
      color: white;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }

  .footer-bottom {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px 0px 0px;
    border-top: 1px solid #454545;
    color: white;
    .footer-phone {
      a {
        text-decoration: none;
        color: white;
      }
    }

    .footer-creator {
      a {
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 40px 15px 89px 15px;
    background: #242424;

    .footer-top {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      .footer-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 60px;
        a {
          margin-left: 0px;
          font-weight: 400;
          font-size: 20px;
          margin-bottom: 30px;
        }
      }
      .footer-logo {
        text-decoration: none;
        font-weight: 600;
        font-size: ${({ theme: { size } }) => size.title.medium};
        color: white;
      }
      a {
        text-decoration: none;
        color: white;
      }
    }

    .footer-bottom {
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 0px 0px 0px;
      border-top: 1px solid #454545;
      color: #9e9e9e;

      .footer-phone {
        a {
          font-weight: 400;
          font-size: 20px;
          text-decoration: none;
          color: white;
        }
      }
      .footer-copy {
        width: 100%;
        margin-top: 50px;
        display: flex;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 15px;
      }
      .footer-creator {
        width: 100%;
        display: flex;
        font-weight: 400;
        font-size: 18px;
        a {
          text-decoration: none;
          color: ${({ theme: { colors } }) => colors.primary};
        }
      }
    }
  }
`;
