import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { SliderContainer } from './style';
import 'swiper/dist/css/swiper.css';

type Props = {
  bannerList: {
    imageUrl: string;
  }[];
};

function Slider(props: Props) {
  const { bannerList } = props;
  const [sliderSwiper, setSliderSwiper] = useState<Swiper | null>(null);
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <div className="slider-nav">
                  <img
                    src={slider.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SliderContainer>
  );
}

export default Slider;
