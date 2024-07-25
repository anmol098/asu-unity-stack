// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * cellTitle: {
 *  subtitleFontWeight: "normal" | "bold";
 *  includeSubtitleChip?: boolean;
 * }
 * cellTicketButton: {
 *  label?: string | null;
 * }
 * }} ConfigCells
 */

export const configCellsPropTypes = PropTypes.shape({
  cellTitle: PropTypes.shape({
    subtitleFontWeight: PropTypes.oneOf(["normal", "bold"]),
    includeSubtitleChip: PropTypes.bool,
  }),
  cellTicketButton: PropTypes.shape({
    label: PropTypes.string,
  }),
});

/**
 * @type {ConfigCells}
 */
export const defaultConfigCells = {
  cellTitle: {
    subtitleFontWeight: "normal",
    includeSubtitleChip: true,
  },
  cellTicketButton: {
    label: null,
  },
};
