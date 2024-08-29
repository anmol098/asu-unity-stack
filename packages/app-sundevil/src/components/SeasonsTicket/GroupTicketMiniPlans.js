import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { SectionHeader } from "../SectionHeader";
import backgroundPattern from "./background-pattern.svg";

const ensureArray = value => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

const ensureCleanArray = value => {
  return ensureArray(value).filter(Boolean);
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  position: relative;
  padding-top: ${props => (props.isMobile ? "48px" : "120px")};
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  object-fit: fill;
  height: 100%;
  max-height: 100%;
`;

const ContentRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
  position: relative;
`;

const Content = styled.div`
  padding-bottom: ${props => (props.isMobile ? "64px" : "120px")};
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
`;

const CtaRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=uotPNV4wAL53RXmU-0
 */
export const GroupTicketMiniPlans = ({
  miniPlans,
  title,
  description,
  cta,
  backgroundSrc = backgroundPattern,
  backgroundAlt = " ",
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  return (
    <Root isMobile={isMobile}>
      <SectionHeader title={title} subtitle={description} />

      <ContentRoot>
        <BackgroundImage src={backgroundSrc} alt={backgroundAlt ?? " "} />
        <Content className="container" isMobile={isMobile}>
          {Array.isArray(miniPlans) && miniPlans.length > 0 && (
            <div className="d-flex flex-column flex-md-row gap-3 w-100">
              {ensureArray(miniPlans).map(miniPlan => {
                return (
                  <div
                    className="w-100"
                    style={{ backgroundColor: "#E8E8E8", padding: "24px" }}
                  >
                    <div style={{ fontSize: "20px", fontWeight: "700" }}>
                      <h3 className="m-0 p-0">{miniPlan?.title}</h3>
                    </div>
                    <span
                      className="m-0 p-0"
                      style={{ fontSize: "16px", fontWeight: "400" }}
                    >
                      {miniPlan?.description}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {ensureCleanArray(cta).length > 0 && (
            <CtaRoot>
              {ensureCleanArray(cta).map(ctaItem => {
                if (!ctaItem) {
                  return null;
                }
                return (
                  <a
                    href={ctaItem?.href ?? ctaItem?.link}
                    style={{ alignSelf: "center", marginTop: "48px" }}
                    className="btn btn-default btn-gold"
                    target={ctaItem?.target}
                  >
                    {ctaItem?.label ?? ctaItem?.text}
                  </a>
                );
              })}
            </CtaRoot>
          )}
        </Content>
      </ContentRoot>
    </Root>
  );
};

GroupTicketMiniPlans.propTypes = {
  miniPlans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundSrc: PropTypes.string,
  backgroundAlt: PropTypes.string,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};
