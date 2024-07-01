// @ts-check
import React from "react";

import { GameList } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "Full Game List",
  component: GameList,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <GameList {...args} />;

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n" +
    "        there are football games and events throughout the year.",
  sports: [
    {
      name: "All Sports",
      icon: "fas fa-sync-alt",
      active: true,
      position: 1,
      id: "all",
    },
    {
      name: "Football",
      icon: "fas fa-football-ball",
      position: 2,
      id: "football",
    },
    {
      name: "M. Basketball",
      icon: "fas fa-basketball-ball",
      position: 3,
      id: "basketball",
    },
    { name: "Hockey", icon: "fas fa-hockey-puck", position: 4, id: "hockey" },
    {
      name: "Baseball",
      icon: "fas fa-baseball-ball",
      position: 5,
      id: "baseball",
    },
    {
      name: "W. Basketball",
      icon: "fas fa-basketball-ball",
      id: "w-basketball",
    },
    { name: "Softball", icon: "fas fa-futbol", id: "softball" },
    { name: "Soccer", icon: "fas fa-baseball-ball", id: "soccer" },
    { name: "Swimming", icon: "fas fa-swimmer", id: "swimming" },
    { name: "Golf", icon: "fas fa-golf-ball", id: "golf" },
  ],
  tabs: [
    { label: "All Games", active: true, id: "all" },
    { label: "Home", active: false, id: "home" },
    { label: "Away", active: false, id: "away" },
  ],
  onTabItemClick: tabId => () => {
    // eslint-disable-next-line no-console
    console.log(tabId);
  },
  onSportItemClick: sportId => () => {
    // eslint-disable-next-line no-console
    console.log(sportId);
  },
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  },
  games: [
    {
      date: {
        day: "25",
        month: "Nov",
      },
      sport: { name: "Sport Name", icon: "fa fa-rocket" },

      homeTeam: {
        name: "Sun Devils",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      awayTeam: {
        name: "Wildcats",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      time: "5:30pm",
      venue: "Phoenix Muni Stadium",
    },
    {
      date: {
        day: "12",
        month: "Mar",
      },
      sport: { name: "Sport Name", icon: "fa fa-rocket" },
      homeTeam: {
        name: "Sun Devils",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      awayTeam: {
        name: "Wildcats",
        logo: "https://1000logos.net/wp-content/uploads/2021/06/Arizona-State-Sun-Devils-logo.png",
      },
      time: "5:30pm",
      venue: "Phoenix Muni Stadium",
    },
  ],
  footerButtons: [
    {
      color: "gold",
      label: "Full schedule",
      size: "small",
    },
    {
      color: "maroon",
      label: "Gear up for the game",
      size: "small",
    },
  ],
};
