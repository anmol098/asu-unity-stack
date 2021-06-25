// @ts-check
import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { ListingPageContext } from "../../../../core/context";
import {
  columSettingsPropType,
  GRID_VIEW_ID,
  LIST_VIEW_ID,
} from "../../../../core/models";
import { computePages } from "../../../../core/utils";
import { AccordionView } from "./AccordionView";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { degreeListPropTypes } from "./programs-prop-types";

/**
 *  @typedef {{
 *    programms: Object[]
 *    loading: boolean
 *    columSettings: import("src/core/models/listing-page-types").ColumSettings
 * }} GridListingProps
 */

/**
 * @type {Object.<string, ListView |  GridView>}
 */
const programViewer = {
  [GRID_VIEW_ID]: GridView,
  [LIST_VIEW_ID]: ListView,
};

/**
 *
 * @param {{
 *  dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
 * } & GridListingProps} props
 */
function ProgramList({ dataViewComponent, loading, programms, columSettings }) {
  const ROW_PAGES = 8;
  const TOTAL_PAGES = computePages(programms.length, ROW_PAGES);
  const ProgramsViewer = programViewer[dataViewComponent];
  const [tableView, setTableView] = useState([]);

  const onPageChange = (_, newPage) => {
    const fromRecord = (newPage - 1) * ROW_PAGES;
    const toRecord = fromRecord + ROW_PAGES;

    setTableView(programms.slice(fromRecord, toRecord));
  };

  useEffect(() => {
    setTableView(programms.slice(0, ROW_PAGES));
  }, [programms]);

  return (
    <ListingPageContext.Provider
      value={{
        columSettings,
      }}
    >
      <ProgramsViewer
        loading={loading}
        programms={tableView}
        columSettings={columSettings}
      />

      <Pagination
        totalNumbers={7}
        type="default"
        background="white"
        totalPages={TOTAL_PAGES}
        onChange={onPageChange}
        showFirstButton
        showLastButton
      />
    </ListingPageContext.Provider>
  );
}

ProgramList.propTypes = {
  dataViewComponent: PropTypes.string,
  columSettings: columSettingsPropType,
  ...degreeListPropTypes,
};

export { ProgramList, GridView, ListView };
