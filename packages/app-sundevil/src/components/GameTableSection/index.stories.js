// @ts-nocheck
import React from "react";

import { GameTableSection } from "./index";

import { GameAPIMock } from "../Game/game-api";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "Game Table Section",
  component: GameTableSection,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <GameTableSection {...args} />;

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const AllSports = Template.bind({});
AllSports.args = {
  gameDataSource: {
    type: "asu-events",
    url: "http://localhost:8888/",
  },
  title: "Upcoming Games",
  emptyStateMessage: "No upcoming games",
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
      footerButtons: [
        {
          color: "gold",
          label: "Full schedule - Football",
          size: "small",
          href: "#",
        },
        {
          color: "maroon",
          label: "Gear up for the game - Football",
          size: "small",
          href: "#",
        },
      ],
      footerLinks: [
        {
          label: "See past game scores - Football",
          href: "#",
        },
      ],
    },
    {
      name: "M. Basketball",
      icon: "fas fa-basketball-ball",
      position: 3,
      id: "basketball",
    },
    {
      name: "Hockey",
      icon: "fas fa-hockey-puck",
      position: 4,
      id: "hockey",
    },
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
    {
      name: "Softball",
      icon: "fas fa-futbol",
      id: "softball",
    },
    {
      name: "Soccer",
      icon: "fas fa-baseball-ball",
      id: "soccer",
    },
    {
      name: "Swimming",
      icon: "fas fa-swimmer",
      id: "swimming",
    },
    {
      name: "Golf",
      icon: "fas fa-golf-ball",
      id: "golf",
    },
  ],
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com/",
  },
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
  footerLinks: [
    {
      label: "See past game scores",
      href: "#",
    },
  ],
};

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const SingleSport = Template.bind({});
SingleSport.args = {
  gameDataSource: {
    type: "custom",
    gameAPI: new GameAPIMock(),
  },
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n there are football games and events throughout the year.",
  emptyStateMessage: "No upcoming games",
  tabs: [
    {
      label: "All Games",
      active: true,
      id: "all",
      gameType: "all",
    },
    {
      label: "Home",
      active: false,
      id: "home",
      gameType: "home",
    },
    {
      label: "Away",
      active: false,
      id: "away",
      gameType: "away",
    },
  ],
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com/",
  },

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
