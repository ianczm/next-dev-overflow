export type SidebarLink = {
  imageSrc: string;
  route: string;
  label: string;
};

const SIDEBAR_LINKS: SidebarLink[] = [
  {
    imageSrc: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imageSrc: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imageSrc: "/icons/star.svg",
    route: "/collections",
    label: "Collections",
  },
  {
    imageSrc: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imageSrc: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imageSrc: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imageSrc: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export default SIDEBAR_LINKS;
