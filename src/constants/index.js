import { facebook, instagram, twitter } from "../assets/icons";
import {
  coding,
  graphic_design,
  ux,
  css2,
  node3,
  react2
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#contact-us", label: "Contact Us" },
];

export const contactLists = [
  {
    name: "Adress _",
    value: "23 S 80 Road, Benedict,ne, 68316 United States",
  },
  {
    name: "Phone _",
    value: "+01 123 456 789",
  },
  {
    name: "Email _",
    value: "abc.xyz@gmail.com",
  },
  {
    name: "Website _",
    value: "www.abc.xyz.com",
  },
];

export const services = [
  {
    imgURL: graphic_design,
    label: "Web Design",
    subtext: "labore et dolore magna aliqua Ut enim ad minim veniam",
  },
  {
    imgURL: coding,
    label: "Web Development",
    subtext: "labore et dolore magna aliqua Ut enim ad minim veniam",
  },
  {
    imgURL: ux,
    label: "UI/UX Design",
    subtext: "labore et dolore magna aliqua Ut enim ad minim veniam",
  },
];

export const projects = [
  {
    imgURL: css2,
    label: "Project One",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },

  {
    imgURL: react2,
    label: "Project Two",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },

  {
    imgURL: node3,
    label: "Project Three",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
