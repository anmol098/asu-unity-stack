// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { CheckboxList } from "../../CheckboxList/CheckboxList";
import { GameDataSourceSortBy } from "../../Game/game-data-source";
import { useGameVenuesLoader } from "../../Game/use-game-venues-loader";
import { Icon } from "../../Icon_";
import { Select } from "../../Select/Select";
import { sportSchema } from "../../SportsTabs/sports-tabs";
import { TextField } from "../../TextField/TextField";
import { configInputsSchema } from "../config-inputs";
import { configLayoutSchema } from "../config-layout";
import { gameTableFormSchema } from "./use-game-table-form";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

/**
 * @type {React.FC<{
 * style?: React.CSSProperties;
 * gameTableForm: import("./use-game-table-form").GameTableFormHook;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * className?: string;
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * }>}
 */
export const GameTableForm = ({
  style,
  gameTableForm,
  configLayout,
  configInputs,
  sports,
  className,
  darkMode,
  orientation,
}) => {
  const { allVenues } = useGameVenuesLoader();
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const inputStyle = {
    flex: 1,
    width: isMobile ? "100%" : "auto",
    minWidth: isMobile ? "100%" : "auto",
  };

  const includeAny =
    configLayout.includeInputSearch ||
    configLayout.includeInputSportType ||
    configLayout.includeInputVenueSelect ||
    configLayout.includeInputHomeOrAwaySelect ||
    configLayout.includeInputSortBySelect ||
    configLayout.includeInputEventTypeSelect ||
    configLayout.includeMaxAdmissionCostSelect;

  if (!includeAny) {
    return null;
  }

  return (
    <Root
      style={style}
      className={className}
      // @ts-ignore
      orientation={orientation}
    >
      {configLayout.includeInputSearch && (
        <TextField
          darkMode={darkMode}
          style={{ ...inputStyle, flex: 2 }}
          label={configInputs?.searchInput?.label ?? ""}
          placeholder={configInputs?.searchInput?.placeholder ?? ""}
          value={gameTableForm.searchQuery}
          onChange={gameTableForm.setSearchQuery}
          renderEndIcon={({ style: iconStyle }) => (
            <i
              style={iconStyle}
              className="fa fas fa-solid fa-magnifying-glass"
            />
          )}
        />
      )}

      {configLayout.includeInputSportType && (
        <Select
          darkMode={darkMode}
          style={inputStyle}
          label={configInputs.sportTypeSelect?.label ?? ""}
          placeholder={configInputs.sportTypeSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              sportId: option.id === gameTableForm.sportId ? null : option.id,
            })
          }
          options={sports.map(sport => ({
            label: sport.name,
            id: sport.id,
            active: sport.active,
            renderStart: ({ style: iconStyle }) => (
              <Icon icon={sport.icon} style={iconStyle} />
            ),
          }))}
        />
      )}

      {configLayout.includeSportTypeCheckboxList && isDesktop && (
        <CheckboxList
          style={inputStyle}
          label={configInputs.sportTypeCheckboxList?.label ?? ""}
          onChange={option =>
            gameTableForm.update({
              sportId: option.id === gameTableForm.sportId ? null : option.id,
            })
          }
          options={sports.map(sport => ({
            label: sport.name,
            id: sport.id,
            active: sport.active,
            renderStart: ({ style: iconStyle }) => (
              <Icon icon={sport.icon} style={iconStyle} />
            ),
          }))}
        />
      )}

      {configLayout.includeInputVenueSelect && (
        <Select
          darkMode={darkMode}
          style={inputStyle}
          label={configInputs.venueSelect?.label ?? ""}
          placeholder={configInputs.venueSelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              venueId: option.id === gameTableForm.venueId ? null : option.id,
            })
          }
          options={allVenues.map(venueOption => ({
            label: venueOption,
            id: venueOption,
            active: venueOption === gameTableForm.venueId,
          }))}
        />
      )}

      {configLayout.includeInputHomeOrAwaySelect && (
        <Select
          darkMode={darkMode}
          style={inputStyle}
          label={configInputs.homeOrAwaySelect?.label ?? ""}
          placeholder={configInputs.homeOrAwaySelect?.placeholder ?? ""}
          onChange={option =>
            gameTableForm.update({
              gameType: option.id === gameTableForm.gameType ? null : option.id,
            })
          }
          options={[
            {
              id: "home",
              label: "Home",
              active: gameTableForm.gameType === "home",
            },
            {
              id: "away",
              label: "Away",
              active: gameTableForm.gameType === "away",
            },
          ]}
        />
      )}

      {configLayout.includeInputEventTypeSelect &&
        Array.isArray(configInputs.eventTypeSelect?.options) &&
        configInputs.eventTypeSelect?.options.length > 0 && (
          <Select
            darkMode={darkMode}
            style={inputStyle}
            label={configInputs.eventTypeSelect?.label ?? ""}
            placeholder={configInputs.eventTypeSelect?.placeholder ?? ""}
            onChange={option =>
              gameTableForm.update({
                eventType:
                  option.value === gameTableForm.eventType
                    ? null
                    : option.value,
              })
            }
            options={configInputs.eventTypeSelect?.options.map(option => ({
              active: option.value === gameTableForm.eventType,
              id: option.id,
              label: option.label,
              value: option.value,
            }))}
          />
        )}

      {configLayout.includeMaxAdmissionCostSelect &&
        Array.isArray(configInputs.maxAdmissionCostSelect?.options) &&
        configInputs.maxAdmissionCostSelect?.options.length > 0 && (
          <Select
            darkMode={darkMode}
            style={inputStyle}
            label={configInputs.maxAdmissionCostSelect?.label ?? ""}
            placeholder={configInputs.maxAdmissionCostSelect?.placeholder ?? ""}
            onChange={option =>
              gameTableForm.update({
                maxAdmissionCost:
                  option.value === gameTableForm.maxAdmissionCost
                    ? null
                    : option.value,
              })
            }
            options={configInputs.maxAdmissionCostSelect?.options.map(
              option => ({
                active: option.value === gameTableForm.maxAdmissionCost,
                id: option.id,
                label: option.label,
                value: option.value,
              })
            )}
          />
        )}

      {configLayout.includeInputSortBySelect && (
        <Select
          darkMode={darkMode}
          style={inputStyle}
          label={configInputs.sortBySelect?.label ?? ""}
          placeholder={configInputs.sortBySelect?.placeholder ?? ""}
          onChange={option => {
            gameTableForm.update({
              sortBy:
                option.payload.sortBy === gameTableForm.sortBy
                  ? GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST
                  : option.payload.sortBy,
            });
          }}
          options={[
            {
              id: "date",
              label: "Date",
              active:
                gameTableForm.sortBy ===
                GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
              payload: {
                sortBy: GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST,
              },
            },
            {
              id: "event-name",
              label: "Event Name",
              active:
                gameTableForm.sortBy === GameDataSourceSortBy.TITLE_A_TO_Z,
              payload: {
                sortBy: GameDataSourceSortBy.TITLE_A_TO_Z,
              },
            },
          ]}
        />
      )}
    </Root>
  );
};

GameTableForm.propTypes = {
  // @ts-ignore
  gameTableForm: gameTableFormSchema,
  // @ts-ignore
  configLayout: configLayoutSchema,
  // @ts-ignore
  configInputs: configInputsSchema,
  className: PropTypes.string,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportSchema),
  darkMode: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
