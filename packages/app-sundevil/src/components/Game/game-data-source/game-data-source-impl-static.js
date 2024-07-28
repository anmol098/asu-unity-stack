import { matchSort } from "../../../utils/match-sort";
import { asc } from "../../../utils/sort";
import { stringToSportId } from "../../Sport/sport-id";
import { GameDataSourceSortBy, IGameDataSource } from "./game-data-source";

const cleanString = str =>
  typeof str === "string" ? str?.toLowerCase().trim() : str;

const isEqual = (keyFn, a, b) => {
  return keyFn(a) === keyFn(b);
};

export const ALL_ID = "all";
const isAllId = id => isEqual(cleanString, ALL_ID, id);

export class GameDataSourceStatic extends IGameDataSource {
  /**
   * @param {{games: import("../game").Game[]}} input
   */
  constructor({ games, shouldLog }) {
    super();
    this.games = games;
    this.shouldLog = shouldLog;
  }

  log() {
    if (this.shouldLog) {
      // eslint-disable-next-line no-console, prefer-rest-params
      console.log("GameDataSourceStatic", ...arguments);
    }
  }

  /**
   * @type {import("./game-data-source").IGameDataSource['findMany']}
   */
  async findMany(input) {
    const filterLog = [];

    const filtered = matchSort({
      searchQuery: input?.searchQuery ?? "",
      toText: game =>
        `${game?.title ?? ""} ${game?.gameType ?? ""} ${game?.venue ?? ""} ${
          game?.sport?.name ?? ""
        }`,
      items: this.games.filter(game => {
        const matchedSportId =
          typeof input?.sportId === "string" &&
          input?.sportId?.length > 0 &&
          !isAllId(input?.sportId)
            ? isEqual(stringToSportId, game?.sportId, input?.sportId)
            : true;

        const matchedGameType =
          typeof input?.gameType === "string" &&
          input?.gameType.length > 0 &&
          !isAllId(input?.gameType)
            ? isEqual(cleanString, game?.gameType, input?.gameType)
            : true;

        const matchedVenueId =
          typeof input?.venueId === "string" &&
          input?.venueId.length > 0 &&
          !isAllId(input?.venueId)
            ? isEqual(cleanString, game?.venue, input?.venueId)
            : true;

        const matchedMaxAdmissionCost =
          typeof input?.maxAdmissionCost === "number" &&
          typeof game?.admissionCost === "number"
            ? game?.admissionCost <= input?.maxAdmissionCost
            : true;

        const matchedAdmissionCost =
          typeof input?.admissionCost === "string" &&
          String(input?.admissionCost).length > 0 &&
          !isAllId(input?.admissionCost)
            ? isEqual(cleanString, game?.admissionCost, input?.admissionCost)
            : true;

        const matchedEventType =
          typeof input?.eventType === "string" &&
          input?.eventType.length > 0 &&
          !isAllId(input?.eventType)
            ? isEqual(cleanString, game?.eventType, input?.eventType)
            : true;

        const matched =
          matchedSportId &&
          matchedGameType &&
          matchedVenueId &&
          matchedMaxAdmissionCost &&
          matchedEventType &&
          matchedAdmissionCost;

        if (this.shouldLog) {
          filterLog.push({
            game,
            input,
            matched,
            matchedSportId,
            matchedGameType,
            matchedVenueId,
            matchedMaxAdmissionCost,
            matchedAdmissionCost,
            matchedEventType,
          });
        }

        return matched;
      }),
    });

    const sorted = filtered.sort((a, b) => {
      switch (input?.sortBy) {
        case GameDataSourceSortBy.TITLE_A_TO_Z: {
          return asc(game => game.name)(a, b);
        }

        case GameDataSourceSortBy.DATE_NEWEST_TO_OLDEST: {
          return asc(game => new Date(game.startDate))(a, b);
        }

        default: {
          return asc(game => new Date(game.startDate))(a, b);
        }
      }
    });

    const offset = input?.offset ?? 0;
    const limit = input?.limit ?? Infinity;
    const sliced = sorted.slice(offset, offset + limit);

    const output = {
      limit: input?.limit ?? Infinity,
      offset: input?.offset ?? 0,
      rows: sliced,
      total: filtered.length,
    };

    if (this.shouldLog) {
      const gameIdFreq = this.games.reduce(
        (acc, game) => ({
          ...acc,
          [game.id]: (acc[game.id] ?? 0) + 1,
        }),
        {}
      );
      const warningDuplicateIds = Object.entries(gameIdFreq)
        .filter(([_, freq]) => freq > 1)
        .map(([id]) => id);

      const gameIds = this.games.map(game => game.id);
      const hasDuplicateIds = new Set(gameIds).size !== gameIds.length;

      this.log("findMany", {
        hasDuplicateIds,
        warningDuplicateIds,
        //
        input,
        games: this.games,
        //
        filtered,
        filterLog,
        filterLogHits: filterLog.filter(f => f.matched),
        filterLogMisses: filterLog.filter(f => !f.matched),
        //
        sliced,
        //
        sorted,
        GameDataSourceSortBy,
        //
        output,
      });
    }

    return output;
  }
}

// @ts-ignore
window.GameDataSourceStatic = GameDataSourceStatic;
