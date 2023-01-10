import styled from "styled-components/macro";
import { HiStar } from "react-icons/hi";
import { useRef, useState } from "react";
import { reviewsData } from "./reviews";
import { nanoid } from "nanoid";

interface IReview {
  id: string;
  rating: number;
  img: string;
  name: string;
  review: string;
  from: string;
  color?: string;
}

const OurReviews = () => {
  const [fullData, setFullData] = useState(false);
  const [reviews, setReviews] = useState(reviewsData);
  const myRef = useRef<any>(null);
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // создание подмассивов с отзывами
  function chunkArray(array: any, chunk: any) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }

  const handleShow = () => {
    if (!fullData) {
      setFullData((prev) => !prev);
    } else {
      myRef.current.scrollIntoView();
      setFullData((prev) => !prev);
    }
  };

  const sortedReviews = chunkArray(reviews, 5);

  return (
    <ReviewsContainer full={fullData} ref={myRef}>
      <ReviewsGrid>
        {sortedReviews.map((item) => (
          <ul key={nanoid()} className="inner-grid">
            {item.map(({ id, rating, img, name, review, from, color }: IReview) => (
              <li key={id} className="reviews__grid_item">
                <div className="reviews__grid_item_header">
                  <ReviewsImg color={color}>
                    {img && <img src={img} alt="img" />}
                    {!img && <p>{name.slice(0, 1)}</p>}
                  </ReviewsImg>
                  <div className="reviews__grid_item_info">
                    <h5>{name}</h5>
                    <div className="reviews__grid_item_info_rating">
                      {Array(5)
                        .fill(1)
                        .map((e, i) =>
                          i < rating ? (
                            <RatingItem bg="#708FFF">
                              <HiStar />
                            </RatingItem>
                          ) : (
                            <RatingItem bg="#E8E8E8">
                              <HiStar />
                            </RatingItem>
                          )
                        )}
                    </div>
                  </div>
                </div>
                <div className="reviews__grid_item_content">
                  <p>{review}</p>
                </div>
                <div className="reviews__grid_item_from">
                  <p>{from}</p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </ReviewsGrid>
      <div className="reviews__overlay">
        <button onClick={handleShow}>
          {fullData ? "Закрыть" : "Смотреть еще"}
        </button>
      </div>
    </ReviewsContainer>
  );
};

export default OurReviews;

interface IStar {
  bg: string | null;
}
interface IContainer {
  full: boolean;
}
interface IColor {
  color?: string;
}

const ReviewsContainer = styled.div<IContainer>`
  position: relative;
  height: ${({ full }) => (full ? "auto" : "650px")};
  overflow: hidden;
  .reviews__overlay {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 210px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      ${({ theme: { background } }) => background.body} 68.23%
    );

    button {
      padding: 20px 50px;
      border: none;
      border-radius: 10px;
      background: ${({ theme: { colors } }) => colors.textMain};
      color: ${({ theme: { colors } }) => colors.white};
      font-weight: 500;
      font-size: 16px;
    }
  }
  .close-data {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      padding: 20px 50px;
      border: none;
      border-radius: 10px;
      background: ${({ theme: { colors } }) => colors.textMain};
      color: ${({ theme: { colors } }) => colors.white};
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    .reviews__overlay {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 210px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        ${({ theme: { background } }) => background.body} 68.23%
      );

      button {
        padding: 20px 50px;
        border: none;
        border-radius: 10px;
        background: ${({ theme: { colors } }) => colors.textMain};
        color: ${({ theme: { colors } }) => colors.white};
        font-weight: 500;
        font-size: 16px;
      }
    }
    .close-data {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      button {
        padding: 20px 50px;
        border: none;
        border-radius: 10px;
        background: ${({ theme: { colors } }) => colors.textMain};
        color: ${({ theme: { colors } }) => colors.white};
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
`;
const ReviewsImg = styled.div<IColor>`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 15px;
  background: ${({ color }) => color};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    background: ${({ color }) => color};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (min-width: 320px) and (max-width: 390px) {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    background: ${({ color }) => color};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const ReviewsGrid = styled.div<IColor>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  .inner-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;

    gap: 20px;
  }
  .reviews__grid_item {
    padding: 20px;
    background: ${({ theme: { background } }) => background.extraLightBlue};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .reviews__grid_item_header {
    display: flex;
  }
  .reviews__grid_item_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 0px;

    h5 {
      font-weight: 500;
      font-size: 20px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }

  .reviews__grid_item_content {
    margin-top: 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
  .reviews__grid_item_info_rating {
    display: flex;
  }
  .reviews__grid_item_from {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }

  @media screen and (max-width: 480px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    grid-auto-rows: minmax(210px, auto);

    .reviews__grid_item {
      padding: 20px;
      background: ${({ theme: { background } }) => background.extraLightBlue};
      border-radius: 10px;
    }
    .reviews__grid_item_header {
      display: flex;
    }
    .reviews__grid_item_info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3px 0px;

      h5 {
        font-weight: 500;
        font-size: 20px;
        color: ${({ theme: { colors } }) => colors.textMain};
      }
    }

    .reviews__grid_item_content {
      margin-top: 20px;

      p {
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme: { colors } }) => colors.textMain};
      }
    }
    .reviews__grid_item_info_rating {
      display: flex;
    }
    .reviews__grid_item_from {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;

      p {
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme: { colors } }) => colors.textSecond};
      }
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    .reviews__grid_item_info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3px 0px;

      h5 {
        font-weight: 500;
        font-size: 16px;
        color: ${({ theme: { colors } }) => colors.textMain};
      }
    }
  }
`;

const RatingItem = styled.div<IStar>`
  color: ${({ bg }) => bg};
  svg {
    height: 22px;
    width: 22px;
  }

  @media screen and (max-width: 480px) {
    color: ${({ bg }) => bg};
    svg {
      height: 22px;
      width: 22px;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
  }
`;
