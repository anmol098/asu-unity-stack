// @ts-check
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Button } from "../../../../components-core/src";
import { SportIcon } from "../SportIcon";
import { stringToClosestSportName } from "../sport-name";

const sportLinkItemSchema = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
/**
 * @typedef {Object} SportLinkItem
 * @property {string} label
 * @property {string} url
 */

const sportSchema = PropTypes.shape({
  sportName: PropTypes.string.isRequired,
  sportLinks: PropTypes.arrayOf(sportLinkItemSchema.isRequired).isRequired,
});
/**
 * @typedef {Object} Sport
 * @property {string} sportName
 * @property {SportLinkItem[]} sportLinks
 */

const SportLinkItemLink = styled.a`
  color: var(--text-color-muted);
  text-decoration: underline !important;
  font-size: var(--font-size-small);
  &:hover {
    color: var(--text-color-primary);
  }
`;

const SportLinkItemRoot = styled.li`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/**
 * @param {{sportLinkItem: SportLinkItem}} props
 */
const SportLinkItem = ({ sportLinkItem }) => {
  return (
    <SportLinkItemRoot key={sportLinkItem.label}>
      <SportLinkItemLink href={sportLinkItem.url}>
        {sportLinkItem.label}
      </SportLinkItemLink>
    </SportLinkItemRoot>
  );
};
SportLinkItem.propTypes = {
  sportLinkItem: sportLinkItemSchema.isRequired,
};

const SportItemLinksRoot = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

/**
 * @param {{sport: Sport}} props
 */
const SportItemLinks = ({ sport }) => {
  return (
    <SportItemLinksRoot>
      {sport.sportLinks.map(sportLinkItem => (
        <SportLinkItem
          key={sportLinkItem.label}
          sportLinkItem={sportLinkItem}
        />
      ))}
    </SportItemLinksRoot>
  );
};
SportItemLinks.propTypes = {
  sport: sportSchema.isRequired,
};

const SportGridListItemRoot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.25rem;
`;

const SportLinksRoot = styled.div`
  display: flex;
  flex-direction: row;
`;

const SportNameLink = styled.a`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-color-primary);
  &:hover {
    color: var(--text-color-brand);
  }
`;

const SportIconWrapper = styled.span`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 28px;
  height: 100%;
  padding-top: 2px;
`;

/**
 * @param {{sport: Sport}} props
 */
const SportGridListItem = ({ sport }) => {
  const sportName = stringToClosestSportName(sport.sportName);
  return (
    <SportGridListItemRoot>
      <SportNameLink>
        <SportIconWrapper>
          <SportIcon sportName={sportName} />
        </SportIconWrapper>
        {sport.sportName}
      </SportNameLink>

      <SportLinksRoot>
        <SportIconWrapper />
        <SportItemLinks sport={sport} />
      </SportLinksRoot>
    </SportGridListItemRoot>
  );
};
SportGridListItem.propTypes = {
  sport: sportSchema.isRequired,
};

const FooterRoot = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 1px solid var(--divider-color);
`;

/**
 * @returns {React.ReactElement}
 */
const Footer = () => {
  return (
    <>
      <FooterRoot>
        <Button
          href=""
          color="gold"
          label="Get tickets"
          size="small"
          renderIcon={() => <FontAwesomeIcon style={{paddingRight: "8px"}} icon={faTicket} />}
        />
      </FooterRoot>
      <FooterTicketMaster>
        ticketmaster
      </FooterTicketMaster>
    </>
  );
};
Footer.propTypes = {};

const FooterTicketMaster = styled.div`
  display: flex;
  width: 100%;
  background-color: #191919;
  height: 64px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SportGridList = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  /* Horizontal Divider */
  & > * + * {
    position: relative;
    padding-left: 1rem;
  }

  & > * + *::before {
    content: "";
    position: absolute;
    top: 3%;
    bottom: 3%;
    /* So it's in middle of the gap for this component */
    left: -1rem;
    width: 1px;
    background-color: var(--divider-color);
  }
`;

const SportGridListColumn = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  gap: 2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Vars = createGlobalStyle`
  :root {
    --text-color-primary: #191919;
    --text-color-muted: #747474;
    --text-color-brand: #8C1D40;

    --divider-color: #ccc;

    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
  }
`;

const Root = styled.div``;

const propTypesSchema = {
  sports: PropTypes.arrayOf(sportSchema.isRequired).isRequired,
};

/**
 * @typedef {Object} Props
 * @property {Sport[]} sports
 */

const COLUMN_HEIGHT = 5;

/**
 * @template T
 * @param {T[]} array
 * @param {number} chunkSize
 * @returns {T[][]}
 */
const chunk = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};

/**
 * @param {Props} props
 * @returns {React.ReactElement}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105787&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105743&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108410&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108411&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
export const HeaderContentSportLinks = ({ sports }) => {
  const columns = chunk(sports, COLUMN_HEIGHT);
  return (
    <Root>
      <Vars />
      <SportGridList>
        {columns.map(column => (
          <SportGridListColumn
            key={column.map(sport => sport.sportName).join("")}
          >
            {column.map(sport => (
              <SportGridListItem key={sport.sportName} sport={sport} />
            ))}
          </SportGridListColumn>
        ))}
      </SportGridList>
      <Footer />
    </Root>
  );
};
HeaderContentSportLinks.propTypes = propTypesSchema;
