// @ts-check
import React from "react";

import { ASUHeader } from "../../../../component-header/src";
import * as HeaderContentSportLinks from "../HeaderContentSportLinks/index";
import { OfficialAthleticsSite } from "../OfficialAthleticsSite";

// https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105787&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width

/** @type {HeaderContentSportLinks.SportLinkItem[]} */
const sportLinks = [
  {
    label: "Tickets",
    url: "#",
  },
  {
    label: "Schedule",
    url: "#",
  },
  {
    label: "Roster",
    url: "#",
  },
  {
    label: "Stats",
    url: "#",
  },
  {
    label: "News",
    url: "#",
  },
];

/** @type {HeaderContentSportLinks.Props} */
const mensSports = {
  sports: [
    {
      sportName: "Baseball",
      sportLinks,
      faClassName: "fas fa-check-circle",
    },
    {
      sportName: "M. Basketball",
      sportLinks,
    },
    {
      sportName: "M. Cross Country",
      sportLinks,
    },
    {
      sportName: "Football",
      sportLinks,
    },
    {
      sportName: "M. Golf",
      sportLinks,
    },
    {
      sportName: "Ice Hockey",
      sportLinks,
    },
    {
      sportName: "M. Swimming and Diving",
      sportLinks,
    },
    {
      sportLinks,
      sportName: "M. Tennis",
    },
    {
      sportName: "M. Track and Field",
      sportLinks,
    },
    {
      sportName: "Wrestling",
      sportLinks,
    },
  ],
};

/** @type {HeaderContentSportLinks.Props} */
const womansSports = {
  sports: [
    {
      sportName: "W. Basketball",
      sportLinks,
      faClassName: "fas fa-basketball-ball",
    },
    {
      sportName: "Beach Volleyball",
      sportLinks,
      faClassName: "fas fa-volleyball-ball",
    },
    {
      sportName: "W. Cross Country",
      sportLinks,
    },
    {
      sportName: "W. Golf",
      sportLinks,
    },
    {
      sportName: "Gymnastics",
      sportLinks,
    },
    {
      sportName: "Lacrosse",
      sportLinks,
    },
    {
      sportName: "W. Soccer",
      sportLinks,
    },
    {
      sportLinks,
      sportName: "Softball",
    },
    {
      sportName: "W. Swimming and Diving",
      sportLinks,
    },
    {
      sportName: "W. Tennis",
      sportLinks,
    },
    {
      sportName: "W. Track and Field",
      sportLinks,
    },
    {
      sportName: "Triathlon",
      sportLinks,
    },
    {
      sportName: "Volleyball",
      sportLinks,
    },
    {
      sportName: "Water Polo",
      sportLinks,
    },
  ],
};

const navTree = [
  {
    href: "/",
    text: "Home",
    type: "icon-home",
    selected: true,
    class: "test-class",
  },
  {
    text: "Men's Sports",
    href: "#",
    renderContent: () =>
      React.createElement(
        HeaderContentSportLinks.HeaderContentSportLinks,
        mensSports
      ),
  },
  {
    text: "Woman's Sports",
    href: "#",
    isMega: false,
    renderContent: () =>
      React.createElement(
        HeaderContentSportLinks.HeaderContentSportLinks,
        womansSports
      ),
  },
  {
    text: "Tickets",
    href: "/",
    items: [
      [
        {
          type: "heading",
          text: "Column 1",
        },
        {
          href: "https://www.asu.edu/",
          text: "Pellentesque ornare",
        },
        {
          href: "https://www.asu.edu/",
          text: "Curabitur viverra arcu nisl",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          text: "Aenean pharetra",
        },
        {
          href: "https://www.asu.edu/?feature=alumni",
          text: "Pellentesque",
        },
        {
          href: "https://www.asu.edu/?feature=giving",
          text: "Donec sagittis nulla",
        },
        {
          href: "https://www.asu.edu/?feature=president",
          text: "Quisque fringilla",
        },
        {
          href: "https://www.asu.edu/about",
          text: "Integer vel gravida lectus",
        },
      ],
      [
        {
          href: "https://www.asu.edu/?feature=newsevents",
          type: "heading",
          text: "Ut quis",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Nunc in libero odio",
        },
        {
          href: "https://www.asu.edu/?feature=research",
          text: "Maecenas quam elit",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Ut at vehicula neque",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          type: "button",
          text: "Sed molestie",
        },
      ],
    ],
  },
  {
    text: "Fans and Community",
    href: "#",
    buttons: [
      {
        text: "CTA One",
        href: "https://asu.edu",
        color: "maroon",
      },
      {
        text: "CTA Two",
        href: "https://asu.edu",
        color: "gold",
      },
    ],
    items: [
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column One Heading Text",
        },
        {
          href: "https://havasu.asu.edu/",
          text: "The Lake Havasu Campus",
        },
        {
          href: "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
          classes: "border",
          text: "Thunderbird",
        },
        {
          href: "https://skysong.asu.edu/",
          text: "Skysong",
        },
        {
          href: "https://asuresearchpark.com/",
          text: "Research Park",
        },
        {
          href: "https://washingtoncenter.asu.edu/",
          text: "Washington D.C.",
        },
        {
          href: "https://wpcarey.asu.edu/mba/china-program/english/",
          text: "China",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Call to Action",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 2",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Faculty and Staff Directory",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "The Tempe Campus",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Sun Devils and Things",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Another nav link",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Action Button",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 3",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "University Technology Office",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Sun Devil Football",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "The School of Something",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Another Button",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 4",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Maps and Directions",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Office of the technology",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Office of the business",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Some longer text office of longtext",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Downtown Phoenix",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column Five",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Buildings and directory",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Some good news",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Directory Admin Tools",
        },
      ],
    ],
  },
  {
    text: "Ways to Support",
    href: "#",
    items: [
      [
        {
          type: "heading",
          text: "Column 1",
        },
        {
          href: "https://www.asu.edu/",
          text: "Pellentesque ornare",
        },
      ],
    ],
  },
  {
    text: "About",
    href: "#",
    items: [
      [
        {
          type: "heading",
          text: "Column 1",
        },
        {
          href: "https://www.asu.edu/",
          text: "Pellentesque ornare",
        },
      ],
    ],
  },
];

/** @type {import("../../../../component-header/src/header").HeaderProps} */
const headerProps = {
  loggedIn: false,
  logoutLink: "/caslogout",
  loginLink: "/cas",
  userName: "",
  // @ts-ignore
  navTree,
  title: "Sun Devil Athletics",
  // parentOrg: "Ira A. Fulton Schools of Engineering",
  // parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Lg",
  logo: {
    alt: "Arizona State University",
    title: "Arizona State University",
    // src: "https://live-asuocms.ws.asu.edu/sites/default/files/asu-vertical-logo.png",
    src: "https://thesundevils.com/images/responsive/primary_logo.svg",
    // mobileSrc: "https://live-asuocms.ws.asu.edu/sites/default/files/asu-vertical-logo.png",
    mobileSrc: "https://thesundevils.com/images/responsive/primary_logo.svg",
    brandLink: "/",
  },
  // https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
  sponsorLogo: {
    alt: "Sponsor Logo",
    title: "Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
    mobileSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
    brandLink: "/",
  },
  universalNavbar: {
    renderStart: () =>
      React.createElement(OfficialAthleticsSite, { href: "#" }),
  },
};

export default {
  title: "Header/Header",
  component: args => <ASUHeader {...{ ...args, ...headerProps }} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <ASUHeader {...{ ...args, ...headerProps }} />;
};

export const Default = Template.bind({});
Default.args = {};
