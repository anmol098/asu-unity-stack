// @ts-check
import React from "react";

import { NewsZoneSection } from "./index";

/**
 * @typedef {import("./index").Sport} Sport
 */

/**
 * @typedef {import("./index").Props} Props
 */

/**
 * @typedef {import("../NewsStory/news-story").NewsStory} NewsStory
 */

const imageSrc =
  "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg";

/** @type {Props} */
const props = {
  bottomButtons: [
    {
      color: "maroon",
      href: "#",
      label: "Read more stories",
    },
  ],
  sectionHeader: {
    title: "News Zone",
    sponsorBlock: {
      text: "Presented by:",
      // name: "Desert Financial",
      name: "Mountain America Credit Union",
      // logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMy45IDUyIiB2aWV3Qm94PSIwIDAgMjAzLjkgNTIiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjcwLjM0MSIgeDI9IjcwLjM0MSIgeTE9IjEiIHkyPSI1MyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDUzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzU5MGExYiIvPjxzdG9wIG9mZnNldD0iLjA3IiBzdHlsZT0ic3RvcC1jb2xvcjojNjAwYjFjIi8+PHN0b3Agb2Zmc2V0PSIuMTkiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NjBmMjAiLz48c3RvcCBvZmZzZXQ9Ii4zMyIgc3R5bGU9InN0b3AtY29sb3I6IzlhMTYyNiIvPjxzdG9wIG9mZnNldD0iLjQ5IiBzdHlsZT0ic3RvcC1jb2xvcjojY2IxZjJlIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3R5bGU9InN0b3AtY29sb3I6I2NlMjAyZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTUzIDAgMzUuNyAxN3M0LjctLjMgNS42LS4zYzEuNy0uMSAzLjQtLjEgNS4xIDAgMS43LjEgMy4zLjQgNC45LjcgMS44LjQgMy41IDEgNS4yIDEuOC41LjIgMS4xLjYuOSAxLjMtLjkgMi4yLTYuOC44LTExLjIgMi4zIDMuMiAxLjcgNC4yIDIuNyA2LjMgMy41LjUtLjQuOS0xIDEuMy0xLjVzLjktLjggMS40LTEuMWMyLjQtMS41IDktMS44IDEyLjEtLjggNiAyLjEgOC43IDUuOCA3LjQgMTMuMS0uNSAzLS43IDQuMy0xLjYgNi41LTIuNS03LjctMTMuMS04LjQtMTkuMy0zLjYtMi45IDIuMi02LjIgNS40LTguMiA5LjEtLjMuNi0xLjMgMi41LTEuOCA0LjFIMTA1TDUzIDB6IiBzdHlsZT0iZmlsbDp1cmwoI2EpIi8+PHBhdGggZD0iTTQ1LjYgNDcuOWMyLjEtMy43IDUuMy02LjkgOC4yLTkuMSA2LjItNC44IDE2LjgtNC4xIDE5LjMgMy42LjktMi4yIDEtMy41IDEuNi02LjUgMS4zLTcuMy0xLjMtMTEtNy41LTEzLjEtMy4xLTEuMS05LjctLjctMTIuMS44LS41LjMtMSAuNy0xLjQgMS4xLS40LjUtLjggMS0xLjMgMS41LTIuMS0uOC0zLjEtMS44LTYuMy0zLjUgNC40LTEuNCAxMC4yIDAgMTEuMi0yLjMuMy0uNy0uMy0xLS45LTEuMy0xLjctLjctMy40LTEuMy01LjItMS44LTEuNi0uNC0zLjMtLjYtNC45LS43LTEuNy0uMS0zLjQtLjEtNS4xIDAtLjkgMC01LjYuMy01LjYuM0wwIDUyaDQzLjhjLjQtMS41IDEuNC0zLjUgMS44LTQuMXoiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJNMTAzLjMgMTkuN2gyLjFsMi44LTUuOWguMVYyM2gzLjVWOC4zaC0zLjlsLTMuNSA3LjEtMy41LTcuMWgtNFYyM2gzLjZ2LTYuMWwtLjEtMy4xaC4xek0xMjAuNiAyMy4zYzQuMyAwIDctMi45IDctNy42cy0yLjgtNy42LTctNy42Yy00LjMgMC03IDIuOS03IDcuNnMyLjggNy42IDcgNy42em0wLTEyLjJjMi4xIDAgMy4yIDEuOCAzLjIgNC41cy0xLjEgNC41LTMuMiA0LjVjLTIgMC0zLjItMS44LTMuMi00LjVzMS4yLTQuNSAzLjItNC41ek0xMzUuNyAyMy4zYzMuNiAwIDYuMi0xLjggNi4yLTZ2LTloLTMuN1YxN2MwIDEuOS0uNyAzLjItMi41IDMuMnMtMi41LTEuMi0yLjUtMy4yVjguM2gtMy43djljMCA0LjIgMi43IDYgNi4yIDZ6TTE0OCAxMy45aC4xbDYgOS4xaDMuM1Y4LjNoLTMuNXY5aC0uMWwtNS44LTloLTMuNVYyM2gzLjV6TTE2My41IDIzaDMuOFYxMS40aDQuNlY4LjNoLTEzdjMuMWg0LjZ6TTE3My42IDIzbDEuMS0zLjFoNS40bDEuMSAzLjFoMy44bC01LjQtMTQuN2gtNC4yTDE3MCAyM2gzLjZ6bTMuNy0xMC45IDEuOCA1LjFoLTMuNWwxLjctNS4xek0xODUuNiA4LjNoMy43VjIzaC0zLjd6TTIwMC4zIDguM3Y5bC01LjktOWgtMy41VjIzaDMuNnYtOS4xbDYuMSA5LjFoMy4zVjguM3pNMTExLjggMjcuM2gtNC4yTDEwMi4yIDQyaDMuNmwxLjItM2g1LjRsMS4xIDMuMWgzLjhsLTUuNS0xNC44em0tMy45IDguOSAxLjctNS4xIDEuNyA1LjFoLTMuNHpNMTI2LjEgMzQuNWgtLjFsLTMuNS03LjJoLTR2MTQuOGgzLjZ2LTkuMmwyLjggNS44aDIuMmwyLjgtNS44djkuMmgzLjZWMjcuM2gtNHpNMTQ2LjYgMzAuNHYtMy4xaC0xMC41djE0LjhoMTAuNVYzOWgtNi45di0zaDYuMXYtMi44aC02LjF2LTIuOHpNMTYwLjcgMzcuOGMtLjQtMS40LTEuMS0yLjEtMi40LTIuNCAxLjctLjIgMy4yLTEuNSAzLjItMy43IDAtMy0yLjEtNC40LTUuNS00LjRoLTYuN1Y0MmgzLjZ2LTUuMmgyLjJjMS4xIDAgMS44LjQgMi4xIDEuNmwuNCAyYy4xLjcuMyAxLjEuNyAxLjZoNGMtLjUtLjUtLjctMS0uOS0xLjctLjEgMC0uNy0yLjUtLjctMi41em0tNS4xLTMuOGgtMi43di0zLjdoMi43YzEuNCAwIDIgLjYgMiAxLjggMCAxLjMtLjcgMS45LTIgMS45ek0xNjMuNSAyNy4zaDMuN1Y0MmgtMy43ek0xNzkgMzYuOWMtLjMgMS4zLTEuMSAyLjMtMi42IDIuMy0xLjggMC0zLjEtMS41LTMuMS00LjVzMS4zLTQuNSAzLjEtNC41YzEuNCAwIDIuMy45IDIuNiAyLjNsMy4zLTEuNWMtLjgtMi40LTIuOS0zLjktNS45LTMuOS00LjIgMC03IDIuOS03IDcuNnMyLjggNy42IDcgNy42YzMgMCA1LjEtMS41IDUuOS0zLjlsLTMuMy0xLjV6TTE4Ny44IDI3LjMgMTgyLjQgNDJoMy42bDEuMS0zLjFoNS40bDEuMSAzLjFoMy44TDE5MiAyNy4zaC00LjJ6bS4zIDguOSAxLjctNS4xIDEuNyA1LjFoLTMuNHpNMTE2LjIgNDcuN2MuNSAwIC44LjMuOS44bDEuMi0uNWMtLjMtLjktMS0xLjQtMi4xLTEuNC0xLjUgMC0yLjUgMS0yLjUgMi43czEgMi43IDIuNSAyLjdjMS4xIDAgMS44LS41IDIuMS0xLjRsLTEuMi0uNWMtLjEuNS0uNC44LS45LjgtLjcgMC0xLjEtLjUtMS4xLTEuNnMuNS0xLjYgMS4xLTEuNnpNMTI1LjEgNTAuNGMtLjEtLjUtLjQtLjgtLjktLjguNi0uMSAxLjEtLjUgMS4xLTEuMyAwLTEuMS0uNy0xLjUtMS45LTEuNUgxMjFWNTJoMS4zdi0xLjhoLjhjLjQgMCAuNi4xLjcuNmwuMS43YzAgLjMuMS40LjMuNmgxLjRjLS4yLS4yLS4zLS40LS4zLS42bC0uMi0xLjF6bS0xLjgtMS4zaC0xdi0xLjNoLjljLjUgMCAuNy4yLjcuNi4xLjQtLjIuNy0uNi43ek0xMjkuNSA0OS44aDIuMnYtMWgtMi4ydi0xaDIuNXYtMS4xaC0zLjd2NS4yaDMuN3YtMS4xaC0yLjV6TTEzNi45IDQ2LjdoLTJ2NS4yaDJjMS41IDAgMi42LS44IDIuNi0yLjZzLTEuMS0yLjYtMi42LTIuNnptLS4xIDQuMWgtLjZ2LTNoLjZjLjggMCAxLjMuNCAxLjMgMS41cy0uNSAxLjUtMS4zIDEuNXpNMTQyLjMgNDYuN2gxLjN2NS4yaC0xLjN6TTE0Ni4zIDQ3LjhoMS43djQuMWgxLjN2LTQuMWgxLjZ2LTEuMWgtNC42ek0xNTguOSA0OS44YzAgLjctLjMgMS4xLS45IDEuMXMtLjktLjQtLjktMS4xdi0zLjFoLTEuM3YzLjJjMCAxLjUuOSAyLjEgMi4yIDIuMSAxLjMgMCAyLjItLjYgMi4yLTIuMXYtMy4yaC0xLjN2My4xek0xNjYuNSA0OS45bC0yLjEtMy4yaC0xLjJ2NS4yaDEuMnYtMy4yaC4xbDIuMSAzLjJoMS4ydi01LjJoLTEuM3pNMTcwLjUgNDYuN2gxLjN2NS4yaC0xLjN6TTE3Ni42IDQ2LjZjLTEuNSAwLTIuNSAxLTIuNSAyLjcgMCAxLjcgMSAyLjcgMi41IDIuN3MyLjUtMSAyLjUtMi43LTEtMi43LTIuNS0yLjd6bTAgNC4zYy0uNyAwLTEuMS0uNi0xLjEtMS42cy40LTEuNiAxLjEtMS42Yy43IDAgMS4xLjYgMS4xIDEuNnMtLjQgMS42LTEuMSAxLjZ6TTE4NC42IDQ5LjlsLTIuMS0zLjJoLTEuMnY1LjJoMS4zdi0zLjJsMi4xIDMuMmgxLjJ2LTUuMmgtMS4zeiIvPjwvc3ZnPg==",
      // url: "https://www.desertfinancial.com/",
      url: "https://www.macu.com/",
    },
  },
  newsStories: [
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "News",
      imageSrc,
      sportName: "W. Lacrosse",
      sportIconFaClassName: "fas fa-lacrosse",
      title: "Gigi Gaspar Named Pac-12 Lacrosse Scholar Athlete of the Year",
    },
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "Video",
      imageSrc,
      sportName: "Football",
      sportIconFaClassName: "fas fa-football-ball",
      title: "Super Bowl #SunDevils4Life",
    },
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "Video",
      imageSrc,
      sportName: "M. Golf",
      sportIconFaClassName: "fas fa-golf-ball",
      title:
        "Men's Golf Gets No. 1 Seet at Rancho Santa Fe/The Farms Golf Club Regional",
    },
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "News",
      imageSrc,
      sportName: "Vollyball",
      sportIconFaClassName: "fas fa-volleyball-ball",
      title: "Rohr Pac-12 Coach of the Year, Kensinger Honored",
    },
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "Game Recap",
      title: "Lacrosse Downs Ducks, Will Face Stanford in Pac-12 Semifinals",
      sportName: "W. Lacrosse",
      imageSrc,
      sportIconFaClassName: "fas fa-lacrosse",
    },
    {
      href: "#",
      showCategory: false,
      showSportName: false,
      category: "News",
      title: "Kensinger, Williamson Named All-Americans",
      sportName: "Volleyball",
      sportIconFaClassName: "fas fa-volleyball-ball",
      imageSrc,
    },
  ],
};

export default {
  title: "News Zone Section / News Zone Section",
  component: args => <NewsZoneSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <NewsZoneSection {...args} {...props} />;
};

export const Default = Template.bind({
  ...props,
});
