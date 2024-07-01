import PropTypes from "prop-types";
import React, { useEffect, useLayoutEffect, useRef } from "react";
// eslint-disable-next-line import/no-unresolved
import { register } from "swiper/element/bundle";

register();

export class CarouselController {
  constructor() {
    this.swiper = null;
  }

  setSwiper(swiper) {
    this.swiper = swiper;
  }

  slideNext() {
    this.swiper.slideNext();
  }

  slidePrev() {
    this.swiper.slidePrev();
  }

  reset() {
    this.swiper.slideTo(0);
  }
}

export function Carousel(props) {
  const swiperRef = useRef(null);
  const {
    children,
    index,
    onIndexChanged,
    controller,
    initialSlide,
    loop = false,
    ...rest
  } = props;

  useLayoutEffect(() => {
    if (!swiperRef.current) {
      return;
    }

    const params = {
      initialSlide,
      loop,
      ...rest,
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();

    const swiperInstance = swiperRef.current.swiper;

    controller?.setSwiper(swiperInstance);

    const handleSlideChange = () => {
      if (swiperInstance) {
        const { realIndex } = swiperInstance;
        if (realIndex !== index) {
          onIndexChanged(realIndex);
        }
      }
    };

    swiperInstance?.off("slideChange", handleSlideChange);
    swiperInstance.on("slideChange", handleSlideChange);

    // eslint-disable-next-line consistent-return
    return () => {
      swiperInstance?.off("slideChange", handleSlideChange);
    };
  }, [rest, index, onIndexChanged, loop]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { realIndex } = swiperRef.current.swiper;
      if (realIndex !== index) {
        if (loop) {
          const adjustedIndex =
            (index + swiperRef.current.swiper.slides.length) %
            swiperRef.current.swiper.slides.length;
          swiperRef.current.swiper.slideToLoop(adjustedIndex);
        } else {
          swiperRef.current.swiper.slideToLoop(index);
        }
      }
    }
  }, [index, loop]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

Carousel.propTypes = {
  index: PropTypes.number.isRequired,
  onIndexChanged: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  initialSlide: PropTypes.number,
  loop: PropTypes.bool,
  controller: PropTypes.instanceOf(CarouselController),
};

export function CarouselItem(props) {
  const { children, ...rest } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};
