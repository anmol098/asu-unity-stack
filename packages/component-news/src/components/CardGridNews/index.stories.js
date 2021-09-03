// @ts-check
import React from "react";

import { CardGridNews } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType } FeedType */

export default {
  title: "UDS/GridCardNews",
  component: CardGridNews,
};

const Template = args => <CardGridNews {...args} />;
/**
 * @type {{ args: FeedType}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News grid" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://asunow.asu.edu/feeds-json/",
  },
  maxItems: 7,
};

/**
 * @type {{ args: FeedType}}
 */
export const WithFilters = Template.bind({});
WithFilters.args = {
  ...Default.args,
  dataSource: {
    ...Default.args.dataSource,
    filters:
      "nursing_and_health_care,School of Mathematical and Natural Sciences,Student",
    // filters: "Nursing and Health Care",
    // filters: "Health,Journalism",
  },
};
