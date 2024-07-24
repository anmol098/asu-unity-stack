import { usePaginatedLoader } from "../../utils/use-paginated-loader";
import { useNewsStoryDataSource } from "./NewsDataSourceContext";

const DEFAULT_LIMIT = 6;

/**
 * @param {import("./news-story-data-source/news-story-data-source").FindManyInput} input
 */
export const useNewsStoryDataSourceLoader = input => {
  const newsStoryDataSource = useNewsStoryDataSource();
  const paginatedLoader = usePaginatedLoader({
    limit: input.limit ?? DEFAULT_LIMIT,
    offset: input.offset ?? 0,
    query: input,
    toQueryKey: query => btoa(JSON.stringify(query ?? {})),
    loadPage: ({ offset, limit, query }) =>
      newsStoryDataSource.findMany({
        limit,
        offset,
        ...query,
      }),
  });

  const { rows } = paginatedLoader;

  return {
    ...paginatedLoader,
    /** @type {import("./news-story").NewsStory[]} */
    rows,
  };
};
