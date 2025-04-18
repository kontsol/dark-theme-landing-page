const IMAGES_URL = `${process.env.PUBLIC_URL}/design/images`;
const HEADER_ITEMS = ["Features", "Team", "Sign In"];
const FOOTER_ITEMS = [
  "About Us",
  "Jobs",
  "Press",
  "Blog",
  "Contact Us",
  "Terms",
  "Privacy",
];

const TESTIMONIALS = [
  {
    icon: `${IMAGES_URL}/icon-access-anywhere.svg`,
    alt: "icon access anywhere",
    heading: "  Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: `${IMAGES_URL}/icon-security.svg`,
    alt: "icon security",
    heading: "  Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: `${IMAGES_URL}/icon-collaboration.svg`,
    alt: "icon collaboration",
    heading: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: `${IMAGES_URL}/icon-any-file.svg`,
    alt: "icon any file",
    heading: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const REVIEWS = [
  {
    name: "Bruce McKenzie",
    job: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profile: `${IMAGES_URL}/profile-3.jpg`,
  },
  {
    name: "Bruce McKenzie",
    job: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profile: `${IMAGES_URL}/profile-3.jpg`,
  },
  {
    name: "Bruce McKenzie",
    job: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profile: `${IMAGES_URL}/profile-3.jpg`,
  },
];

export { IMAGES_URL, HEADER_ITEMS, FOOTER_ITEMS, TESTIMONIALS, REVIEWS };
