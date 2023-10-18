import styled from "styled-components";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import UiIcon from "../Component/Ui/UiIcon";
import HotelOne from "../Assets/Images/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SectionTwo() {
  const handleNextClick = () => {};

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i) => <div className="custom-dot" />,
    prevArrow: <CustomPrevArrow onClick={handleNextClick} />,
    nextArrow: <CustomNextArrow onClick={handleNextClick} />,
    // className: "my-slider",
  };

  function CustomNextArrow(props: CustomArrowProps & { onClick: () => void }) {
    const { onClick } = props;
    return (
      <NextButton onClick={onClick}>
        <UiIcon icon="ArrowCircleRightIcon" size={20} />
      </NextButton>
    );
  }

  function CustomPrevArrow(props: CustomArrowProps & { onClick: () => void }) {
    const { onClick } = props;
    return (
      <PrevButton onClick={onClick}>
        <UiIcon icon="ArrowCircleLeftIcon" size={20} />
      </PrevButton>
    );
  }

  return (
    <Container>
      <div className="trading-conditions">Trading destinations</div>
      <SlideContainer>
        <div className="slider-inner-container">
          <Slider {...settings}>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
            <SliderItems>
              <div className="slideitem-inner">
                <div className="slide-img-contianer">
                  <img src={HotelOne} alt="logo" />
                </div>
                <div>
                  <br />
                  <div className="title-container">
                    <div className="title">Montmartre, France</div>
                    <div className="star">
                      <UiIcon icon="StarIcon" /> <div>3/4</div>
                    </div>
                  </div>
                  <div className="dis-text">
                    Visiting the best <br />
                    tourist areas chosen by <br />
                    the audience
                  </div>
                  <p className="amount">$500,000</p>
                </div>
              </div>
            </SliderItems>
          </Slider>
        </div>
      </SlideContainer>
    </Container>
  );
}

const Container = styled.div`
  .trading-conditions {
    font-size: 20px;
    color: var(--color-primary-50);
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  margin: auto;
  margin-top: 170px;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;

  .slider-inner-container {
    width: 1000px;
  }
`;

const SliderItems = styled.div`
  background: var(--color-primary-300);
  height: 150px;
  width: 70px;
  border-radius: 15px;
  color: var(--text-light-200);
  padding: 5px;

  .slideitem-inner {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .slide-img-contianer {
      width: 100px;
      height: 100px;
      margin-top: 20px;

      img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
      }
    }

    .dis-text {
      font-size: 12px;
      font-weight: bold;
      color: var(--color-primary-150);
    }

    .amount {
      font-size: 12px;
      font-weight: bold;
      color: var(--color-primary-50);
    }
  }

  .title-container {
    display: flex;
    font-size: 12px;
    font-weight: bold;
    gap: 10px;
    color: var(--color-primary-50);

    .star {
      display: flex;
      gap: 10px;
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -35px;
  background-color: var(--dark-200);
  color: var(--color-primary-50);
  padding: 10px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -35px;
  margin-right: 25px;
  background-color: var(--dark-200);
  color: var(--color-primary-50);
  padding: 10px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
`;
