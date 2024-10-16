// @ts-check

import { safeEncode } from "../../utils/encode";
import { usePaginatedLoader } from "../../utils/use-paginated-loader";
import { useGameDataSource } from "./GameDataSourceContext";

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 */
export const useGameDataSourceLoader = input => {
  const gameDataSource = useGameDataSource();
  const paginatedLoader = usePaginatedLoader({
    query: input,
    limit: input.limit,
    toQueryKey: query => safeEncode(query ?? {}),
    loadPage: async ({ offset, limit, query }) => {
      const found = await gameDataSource.findMany({
        ...query,
        offset,
        limit,
      });

      return found;
    },
  });
  return paginatedLoader;
};
