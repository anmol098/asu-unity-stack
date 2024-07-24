// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/index";
import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentPosition } from "../../utils/use-element-position";
import { LoadMoreButton } from "../LoadMoreButton";
import { sportSchema } from "../Navigation";
import {
  buildNewsStoryDataSource,
  newsStoryDataSourceSchema,
} from "../NewsStory/news-story-data-source/news-story-data-source-impl";
import { NewsStoryDataSourceProvider } from "../NewsStory/NewsDataSourceContext";
import { newsStoriesSkeletonData } from "../NewsStory/NewsStoryCardGrid/news-stories-skeleton-data";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGrid } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import { useNewsStoryDataSourceLoader } from "../NewsStory/use-news-story-data-source-loader";
import { useSportIdsLoader } from "../NewsStory/use-sport-ids-loader";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { Skeleton } from "../Skeleton";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { configFormPropTypes } from "./config-form";
import { configInputsPropTypes, defaultConfigInputs } from "./config-inputs";
import { configLayoutPropTypes, defaultConfigLayout } from "./config-layout";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const AllStoriesRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

/**
 * @type {React.FC<NewsStorySectionProps>}
 */
const NewsStorySectionInner = ({
  sports,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  emptyStateMessage,
  removeSportsWithNoStories,
  configInputs: propsConfigInputs,
  configLayout: propsConfigLayout,
  mobileVariant = "carousel",
  loadMore,
}) => {
  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    propsConfigLayout ?? {},
    defaultConfigLayout
  );

  /** @type {import("./config-inputs").ConfigInputs} */
  const configInputs = deepMergeLeft(
    propsConfigInputs ?? {},
    defaultConfigInputs
  );

  // eslint-disable-next-line no-unused-expressions
  configInputs;

  const [selectedSportId, setSelectedSportId] = React.useState(sports[0]?.id);

  const sportsWithSelectedTab = sports.map(sport => ({
    ...sport,
    active: sport.id === selectedSportId,
  }));

  const selectedSport = sports.find(sport => sport.id === selectedSportId);

  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const { allSportIds } = useSportIdsLoader();

  const newsStoryDataSourceLoader = useNewsStoryDataSourceLoader({
    sportId: selectedSportId === "all" ? null : selectedSportId,
  });

  const skeleton = newsStoryDataSourceLoader.isLoadingInitial;
  const skeletonTabs = Boolean(
    skeleton && removeSportsWithNoStories && allSportIds.length === 0
  );
  const empty =
    !newsStoryDataSourceLoader.isLoading &&
    newsStoryDataSourceLoader.rows.length === 0;

  const newsStoriesFinal = skeleton
    ? newsStoriesSkeletonData
    : newsStoryDataSourceLoader.rows;
  const sportsFinal = sportsWithSelectedTab.filter(sport => {
    if (skeletonTabs) {
      return true;
    }
    if (removeSportsWithNoStories) {
      return allSportIds.includes(sport.id) || sport.id === "all";
    }
    return true;
  });

  const hasAllStories = Boolean(allStoriesHref && allStoriesLabel);

  return (
    <Root>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
      />

      {selectedSport && isDesktop && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container">
              <SportsTabsDesktop
                skeleton={skeletonTabs}
                // @ts-ignore
                sports={sportsFinal}
                onSportItemClick={sportId => () => setSelectedSportId(sportId)}
                moreTabOrientation="horizontal"
                moreTabColor="muted"
              />
            </div>
          )}
          <div className="container">
            <NewsStoryCardGrid
              key={selectedSport.id}
              newsStories={newsStoriesFinal}
              skeleton={skeleton}
              // @ts-ignore
              empty={empty}
              emptyStateMessage={emptyStateMessage}
            />
            {hasAllStories && (
              <AllStoriesRoot>
                {/* @ts-ignore */}
                <Skeleton skeleton={skeleton} fitContent>
                  <Button
                    color="maroon"
                    size="small"
                    label={allStoriesLabel}
                    href={allStoriesHref}
                    // @ts-ignore
                    skeleton={skeleton}
                  />
                </Skeleton>
              </AllStoriesRoot>
            )}
          </div>
        </>
      )}

      {selectedSport && isMobile && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container">
              <SportsTabsMobile
                // @ts-ignore
                sports={sportsFinal}
                onSportItemClick={sportId => () => setSelectedSportId(sportId)}
                skeleton={skeletonTabs}
              />
            </div>
          )}

          {mobileVariant === "carousel" && (
            <NewsStoryCardCarousel
              key={selectedSport.id}
              skeleton={skeleton}
              // @ts-ignore
              newsStories={newsStoriesFinal}
              slidesOffsetBefore={sectionHeaderPosition.left}
              slidesOffsetAfter={
                window.innerWidth - sectionHeaderPosition.right
              }
              cardWidth={cardWidth}
              empty={empty}
              emptyStateMessage={emptyStateMessage}
              renderBottomRightContent={() =>
                hasAllStories && (
                  // @ts-ignore
                  <Skeleton skeleton={skeleton} fitContent>
                    <Button
                      color="maroon"
                      size="small"
                      label={allStoriesLabel}
                      href={allStoriesHref}
                      // @ts-ignore
                      skeleton={skeleton}
                    />
                  </Skeleton>
                )
              }
            />
          )}

          {mobileVariant === "column" && (
            <div className="container">
              <NewsStoryCardGrid
                key={selectedSport.id}
                newsStories={newsStoriesFinal}
                skeleton={skeleton}
                // @ts-ignore
                empty={empty}
                emptyStateMessage={emptyStateMessage}
                columns={1}
              />
              {hasAllStories && (
                <AllStoriesRoot>
                  {/* @ts-ignore */}
                  <Skeleton skeleton={skeleton} fitContent>
                    <Button
                      color="maroon"
                      size="small"
                      label={allStoriesLabel}
                      href={allStoriesHref}
                      // @ts-ignore
                      skeleton={skeleton}
                    />
                  </Skeleton>
                </AllStoriesRoot>
              )}
            </div>
          )}
        </>
      )}

      {configLayout.includeLoadMore &&
        loadMore &&
        newsStoryDataSourceLoader.showLoadNextPage && (
          <div className="container d-flex justify-content-center align-items-center">
            <LoadMoreButton
              {...loadMore}
              onClick={newsStoryDataSourceLoader.loadNextPage}
              loading={newsStoryDataSourceLoader.isLoading}
            />
          </div>
        )}
    </Root>
  );
};

NewsStorySectionInner.propTypes = {
  // @ts-ignore
  sectionHeader: SectionHeader.propTypes,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportSchema).isRequired,
  allStoriesLabel: PropTypes.string,
  allStoriesHref: PropTypes.string,
  skeleton: PropTypes.bool,
  emptyStateMessage: PropTypes.string,
  removeSportsWithNoStories: PropTypes.bool,
  newsStoryDataSource: newsStoryDataSourceSchema,
  // @ts-ignore
  loadMore: LoadMoreButton.propTypes,
  // @ts-ignore
  configForm: configFormPropTypes,
  // @ts-ignore
  configLayout: configLayoutPropTypes,
  // @ts-ignore
  configInputs: configInputsPropTypes,
};

/**
 * @typedef {{
 *  sports: Sport[];
 *  sectionHeader: object;
 *  allStoriesLabel?: string;
 *  allStoriesHref?: string;
 *  skeleton?: boolean;
 *  newsStoryDataSource: object
 *  emptyStateMessage?: string;
 *  removeSportsWithNoStories?: boolean;
 *  loadMore?: import("../LoadMoreButton").LoadMoreButtonProps
 *  configForm?: import("./config-form").ConfigForm
 *  configLayout?: import("./config-layout").ConfigLayout
 *  configInputs?: import("./config-inputs").ConfigInputs
 *  mobileVariant?: "carousel" | "column"
 * }} NewsStorySectionProps
 */

export const NewsStorySection = ({
  newsStoryDataSource: newsStoryDataSourceConfig,
  ...props
}) => {
  const newsStoryDataSource = useMemo(
    () => buildNewsStoryDataSource(newsStoryDataSourceConfig),
    [newsStoryDataSourceConfig]
  );
  return (
    <NewsStoryDataSourceProvider newsStoryDataSource={newsStoryDataSource}>
      {/* @ts-ignore */}
      <NewsStorySectionInner {...props} />
    </NewsStoryDataSourceProvider>
  );
};
NewsStorySection.propTypes = NewsStorySectionInner.propTypes;
