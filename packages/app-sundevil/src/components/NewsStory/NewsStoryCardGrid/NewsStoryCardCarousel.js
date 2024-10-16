import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styled from "styled-components";

import { repeat } from "../../../utils/repeat";
import { ArrowButtons } from "../../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../../Carousel";
import { EmptyStateMessage } from "../../EmptyState/EmptyStateMessage";
import * as NewsStory from "../news-story";
import {
  DEFAULT_EMPTY_STATE_MESSAGE,
  newsStorySkeleton,
} from "./news-stories-skeleton-data";
import { NewsStoryCard } from "./NewsStoryCard";

const Root = styled.div`
  /* Ensure swiper-container and swiper-slide have full width */
  swiper-container {
    width: 100%;
    height: 273px;
  }

  swiper-slide {
    width: auto;
    padding: 0 24px 0 0;
    height: 273px;
  }

  @media (max-width: 768px) {
    swiper-slide {
      width: auto;
      padding: 0 12px 0 0;
      height: 273px;
    }
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 52px;
`;

const WhitespaceFill = styled.div`
  flex: 1;
`;

/**
 * @typedef {{
 * newsStories: import("./NewsStoryCard").NewsStory[];
 * slidesOffsetBefore?; number;
 * slidesOffsetAfter?: number;
 * cardWidth?: number;
 * renderBottomRightContent?: (() => React.ReactNode);
 * skeleton?: boolean;
 * empty?: boolean;
 * emptyStateMessage?: string;
 * skeletonCount?: number;
 * sectionName: string;
 * }} Props
 */

/** @type {React.FC<Props>} */
export const NewsStoryCardCarousel = ({
  newsStories,
  slidesOffsetBefore,
  slidesOffsetAfter,
  cardWidth,
  renderBottomRightContent,
  emptyStateMessage = DEFAULT_EMPTY_STATE_MESSAGE,
  skeleton = false,
  empty = false,
  skeletonCount = 6,
  sectionName,
}) => {
  const [carouselController] = React.useState(() => new CarouselController());
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    carouselController.reset();
  }, [newsStories]);

  return (
    <Root>
      <Carousel
        slidesPerView="auto"
        initialSlide={index}
        controller={carouselController}
        index={index}
        onIndexChanged={setIndex}
        slidesOffsetBefore={slidesOffsetBefore ?? 0}
        slidesOffsetAfter={slidesOffsetAfter ?? 0}
        disabled={Boolean(skeleton) || Boolean(empty)}
      >
        {!empty && !skeleton && (
          <>
            {newsStories.map(newsStory => (
              <CarouselItem
                key={newsStory?.id ?? newsStory?.title}
                style={{ width: "fit-content" }}
              >
                <div style={{ width: cardWidth, height: "100%" }}>
                  <NewsStoryCard
                    skeleton={Boolean(skeleton)}
                    newsStory={newsStory}
                    sectionName={sectionName}
                  />
                </div>
              </CarouselItem>
            ))}
          </>
        )}
        {skeleton && (
          <>
            {repeat(skeletonCount, newsStorySkeleton).map(newsStory => (
              <CarouselItem
                key={newsStory?.id ?? newsStory?.title}
                style={{ width: "fit-content" }}
              >
                <div style={{ width: cardWidth, height: "100%" }}>
                  <NewsStoryCard
                    sectionName={sectionName}
                    skeleton
                    newsStory={newsStory}
                  />
                </div>
              </CarouselItem>
            ))}
          </>
        )}
        {empty && (
          <>
            <CarouselItem style={{ width: "fit-content" }}>
              <div
                style={{
                  width: cardWidth,
                  height: "100%",
                  position: "relative",
                }}
              >
                <NewsStoryCard
                  sectionName={sectionName}
                  empty
                  newsStory={newsStorySkeleton[0]}
                />
                <EmptyStateMessage message={emptyStateMessage} />
              </div>
            </CarouselItem>
          </>
        )}
      </Carousel>
      <BottomContent className="container">
        <ArrowButtons
          onLeft={() => carouselController.slidePrev()}
          onRight={() => carouselController.slideNext()}
          skeleton={Boolean(skeleton)}
          sectionName={sectionName}
        />
        <WhitespaceFill />
        {renderBottomRightContent?.()}
      </BottomContent>
    </Root>
  );
};
NewsStoryCardCarousel.propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStoryPropTypes),
  slidesOffsetAfter: PropTypes.number,
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  renderBottomRightContent: PropTypes.func,
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
  emptyStateMessage: PropTypes.string,
  skeletonCount: PropTypes.number,
  sectionName: PropTypes.string,
};
