import PropTypes from "prop-types";

export const gamePropTypes = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  titleHref: PropTypes.string,
  startDate: PropTypes.string,
  dateDay: PropTypes.string,
  dateMonth: PropTypes.string,
  homeTeamName: PropTypes.string.isRequired,
  homeTeamLogoSrc: PropTypes.string.isRequired,
  homeTeamLogoAlt: PropTypes.string,
  awayTeamName: PropTypes.string.isRequired,
  awayTeamLogoSrc: PropTypes.string.isRequired,
  awayTeamLogoAlt: PropTypes.string,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  ticketLink: PropTypes.string,
  ticketText: PropTypes.string,
  gameType: PropTypes.string, // "home" | "away"
  sportId: PropTypes.string,
  subtitleChip: PropTypes.string,
  admissionCost: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  eventType: PropTypes.string,
});

export const isGameTicketed = game => Boolean(game?.ticketLink);

/**
 * @typedef {object} Game
 * @property {string} sportId
 * @property {string} title
 * @property {string} titleHref
 * @property {string} dateDay
 * @property {string} dateMonth
 * @property {string} homeTeamName
 * @property {string} homeTeamLogoSrc
 * @property {string} homeTeamLogoAlt
 * @property {string} awayTeamName
 * @property {string} awayTeamLogoSrc
 * @property {string} awayTeamLogoAlt
 * @property {string} time
 * @property {string} venue
 * @property {string} ticketLink
 * @property {string} ticketText
 * @property {string} gameType
 * @property {string} subtitleChip
 * @property {number} admissionCost
 * @property {string} eventType
 */
