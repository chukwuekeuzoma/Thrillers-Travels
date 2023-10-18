import styled from "styled-components";
import HotelOne from "../Assets/Images/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import UiIcon from "../Component/Ui/UiIcon";

export default function SectionOne() {
  return (
    <Container>
      <ImageContainer />
      <div className="search-container">
        <div className="going">
          <UiIcon icon="LocationOnIcon" />
          <div>Where Are You Going?</div>
          <UiIcon icon="ExpandMoreIcon" size={20} />
        </div>
        <div className="check-in">
          <UiIcon icon="DateRangeIcon" />
          <div> Check in date</div>
          <UiIcon icon="ExpandMoreIcon" size={20} />
        </div>
        <div className="adults">
          <div className="adults-inner-text">
            <UiIcon icon="PermIdentityIcon" size={20} />
            <div>3 Adults</div>
          </div>
          <UiIcon icon="ExpandMoreIcon" size={20} />
          <button>Search</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .search-container {
    border-radius: 15px;
    background: var(--color-primary-300);
    height: 80px;
    width: 90%;
    margin: auto;
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .going {
    display: flex;
    gap: 25px;
    margin-left: 20px;
    color: var(--color-primary-150);
  }

  .check-in {
    display: flex;
    gap: 25px;
    color: var(--color-primary-150);
    border-left: 1px solid var(--color-primary-150);
    border-right: 1px solid var(--color-primary-150);
    padding-left: 30px;
    padding-right: 30px;
  }

  .adults {
    display: flex;
    align-items: center;
    gap: 25px;
    color: var(--color-primary-150);
    margin-right: 20px;

    .adults-inner-text {
      display: flex;
      gap: 10px;
    }

    button {
      text-align: center;
      width: 100px;
      height: 40px;
      padding: 4px;
      background: var(--color-primary-50);
      color: white;
      cursor: pointer;
      border: none;
      border-radius: 15px;
      font-weight: bold;
    }
  }
`;

const ImageContainer = styled.div`
  height: 150px;
  width: 100%;
  background-image: url(${HotelOne});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
`;
