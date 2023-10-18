import styled from "styled-components";
import HotelOne from "../Assets/Images/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import UiIcon from "../Component/Ui/UiIcon";

export default function SectionThree() {
  return (
    <Container>
      <div className="Best-offer-container">
        <div className="best-test">Best Offer</div>
        <div className="view-text">View All</div>
      </div>
      <div className="box-container">
        <Box>
          <div className="image-container">
            <img src={HotelOne} alt="logo" />
          </div>
          <div className="apartment-text">7 Seasons Apartment</div>
          <div className="location-icon">
            <UiIcon icon="LocationOnIcon" size={10} /> Kensington/London
          </div>
          <div className="favorite-container">
            <div>
              $65,00 <span>/night</span>
            </div>
            <UiIcon icon="FavoriteIcon" />
          </div>
        </Box>
        <Box>
          <div className="image-container">
            <img src={HotelOne} alt="logo" />
          </div>
          <div className="apartment-text">7 Seasons Apartment</div>
          <div className="location-icon">
            <UiIcon icon="LocationOnIcon" size={10} /> Kensington/London
          </div>
          <div className="favorite-container">
            <div>
              $65,00 <span>/night</span>
            </div>
            <UiIcon icon="FavoriteIcon" />
          </div>
        </Box>
        <Box>
          <div className="image-container">
            <img src={HotelOne} alt="logo" />
          </div>
          <div className="apartment-text">7 Seasons Apartment</div>
          <div className="location-icon">
            <UiIcon icon="LocationOnIcon" size={10} /> Kensington/London
          </div>
          <div className="favorite-container">
            <div>
              $65,00 <span>/night</span>
            </div>
            <UiIcon icon="FavoriteIcon" />
          </div>
        </Box>
        <Box>
          <div className="image-container">
            <img src={HotelOne} alt="logo" />
          </div>
          <div className="apartment-text">7 Seasons Apartment</div>
          <div className="location-icon">
            <UiIcon icon="LocationOnIcon" size={10} /> Kensington/London
          </div>
          <div className="favorite-container">
            <div>
              $65,00 <span>/night</span>
            </div>
            <UiIcon icon="FavoriteIcon" />
          </div>
        </Box>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .box-container {
    display: flex;
    justify-content: space-around;
  }

  .Best-offer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .best-test {
      font-size: 20px;
      color: var(--color-primary-50);
      font-weight: bold;
      /* margin-bottom: 30px; */
    }

    .view-text {
      font-size: 15px;
      color: var(--color-primary-50);
      font-weight: bold;
      cursor: pointer;
      z-index: 9;
    }
  }
`;

const Box = styled.div`
  background: var(--color-primary-300);
  height: 200px;
  width: 200px;
  border-radius: 15px;
  color: var(--text-light-200);
  padding: 9px;

  .image-container {
    height: 100px;
    width: 200px;
    margin-bottom: 10px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }
  }

  .apartment-text {
    font-size: 12px;
    font-weight: bold;
    color: var(--color-primary-50);
    margin-bottom: 10px;
  }

  .location-icon {
    font-size: 12px;
    font-weight: bold;
    color: var(--color-primary-150);
    margin-bottom: 10px;
  }

  .favorite-container {
    display: flex;
    justify-content: space-between;

    div {
      font-size: 12px;
      font-weight: bold;
      color: var(--color-primary-50);
    }

    span {
      font-size: 12px;
      font-weight: bold;
      color: var(--color-primary-150);
      margin-bottom: 10px;
    }
  }
`;
