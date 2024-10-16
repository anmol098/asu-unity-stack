import { testimonialWithImage } from "../../src/components/TestimonialCarousel/examples";
import React from "react";

const imageFormats = [
  "500x400",
  "300x400",
  "400x400",
  "200x200",
  "300x400",
  "300x400",
  "400x400",
  "300x400",
];

const getImageFormat = index => imageFormats[index];

const cardCarouselItems = [];
for (let index = 0; index < 8; index += 1) {
  const content =
    index === 3
      ? "Only two lines of text here, to show our fixed height."
      : `Body ${index + 1}
    copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua eiusmod tempo.`;

  const imageSource =
    index === 5
      ? "https://br0ken"
      : `https://source.unsplash.com/random/${getImageFormat(index)}?a=${
          index - 1
        }`;

  cardCarouselItems.push({
    id: index,
    imageSource,
    imageAltText: "Card image cap",
    title: `Card ${index + 1}`,
    content,
    buttons: [
      {
        ariaLabel: "dummy button",
        color: "maroon",
        href: "#",
        label: `Learn More`,
        size: "small",
        onClick: () => {
          // eslint-disable-next-line no-alert
          window.alert("Hola Amigo 😃.");
          return false;
        },
      },
      {
        ariaLabel: "dummy button",
        color: "dark",
        href: "#",
        label: `More Info`,
        size: "small",
        onClick: () => {
          // eslint-disable-next-line no-alert
          window.alert("Hola Amigo 😃.");
          return false;
        },
      },
    ],
  });
}

cardCarouselItems.push({
  id: 8,
  imageSource: "https://source.unsplash.com/random/400x400?a=8",
  imageAltText: "Card image cap",
  title: `Don’t miss the Maroon and Gold Spring Game`,
  content:
    '<div style="\n' +
    "                display: flex;\n" +
    "                justify-content: space-between;\n" +
    "        font-family: Arial, sans-serif;\n" +
    "        font-weight: 700;\n" +
    "        font-size: 16px;\n" +
    "        line-height: 19px;\n" +
    "        color: #747474;\n" +
    "        text-align: left;\n" +
    '        margin-bottom: 8px;">\n' +
    "      <span>April 26, 2024</span><span>Free Admission</span>\n" +
    "    </div> " +
    "Join us for the Maroon and Gold Spring Game on Saturday, April 10 at 12:00 p.m. at TCF Bank Stadium. Admission is free, but tickets are required. Reserve your tickets today!",
  buttons: [
    {
      ariaLabel: "dummy button",
      color: "maroon",
      href: "#",
      label: `Learn More`,
      size: "small",
      onClick: () => {
        // eslint-disable-next-line no-alert
        window.alert("Hola Amigo 😃.");
        return false;
      },
    },
    {
      ariaLabel: "dummy button",
      color: "dark",
      href: "#",
      label: `More Info`,
      size: "small",
      onClick: () => {
        // eslint-disable-next-line no-alert
        window.alert("Hola Amigo 😃.");
        return false;
      },
    },
  ],
  buttonOrientation: "horizontal",
  topic:
    '<div><i class="far fa-calendar"></i> </div> <div><span>Football </span></div>',
});

const imageCarouselItems = [
  {
    id: 1,
    imageSource: "https://source.unsplash.com/random/800x400?a=1",
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 2,
    imageSource: "https://source.unsplash.com/random/400x200?a=2",
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 3,
    imageSource: "https://source.unsplash.com/random/600x400?a=3",
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 4,
    imageSource: "https://source.unsplash.com/random/600x600?a=4",
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 5,
    imageSource: "https://source.unsplash.com/random/600x500?a=5",
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
];

const imageGalleryCarouselItems = [];
for (let index = 0; index < 8; index += 1) {
  imageGalleryCarouselItems.push({
    id: index,
    imageSource: `https://source.unsplash.com/random/${getImageFormat(
      index
    )}?a=${index - 1}`,
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  });
}

const cardCarouselProps = { perView: 3, cardItems: cardCarouselItems };

const imageCarouselProps = { perView: 1, imageItems: imageCarouselItems };

const imageGalleryCarouselProps = { imageItems: imageGalleryCarouselItems };

const testimonialCarouselProps = {
  hasNavButtons: true,
  hasPositionIndicators: true,
  testimonialItems: testimonialWithImage,
};

export {
  cardCarouselItems,
  imageCarouselItems,
  imageGalleryCarouselItems,
  cardCarouselProps,
  imageCarouselProps,
  imageGalleryCarouselProps,
  testimonialCarouselProps,
};
