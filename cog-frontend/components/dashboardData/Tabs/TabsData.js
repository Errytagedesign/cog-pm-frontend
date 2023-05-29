import { BsUpload } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Home from "../Home/Home";
import Agency from "../Agency/Agency";

export const TabsData = [
  {
    TabTitle: [
      {
        id: "tab1",
        icon: <BsUpload />,
        title: [
          {
            name: "Agency",
            dropdown: [
              { select: "All inbound", options: ["create", "edit"] },
              { select: "Marketplace", options: ["view", "manage"] },
              { select: "Offers", options: ["All offers", "Make an offer"] },
              {
                select: "Onboarding",
                options: ["Add Agreement", "View all agreements"],
              },
            ],
          },
        ],
      },
      {
        id: "tab2",
        icon: <BsUpload />,
        title: [
          {
            name: "Manager",
            dropdown: [{ select: "All inbound", options: ["create", "edit"] }],
            dropdown: [{ select: "Marketplace", options: ["view", "manage"] }],
            dropdown: [
              { select: "Offers", options: ["All offers", "Make an offer"] },
            ],
            dropdown: [
              {
                select: "Onboarding",
                options: ["Add Agreement", "View all agreements"],
              },
            ],
          },
        ],
      },
      {
        id: "tab3",
        icon: <BsUpload />,
        title: [
          {
            name: "CRM",
            dropdown: [{ select: "All inbound", options: ["create", "edit"] }],
            dropdown: [{ select: "Marketplace", options: ["view", "manage"] }],
            dropdown: [
              { select: "Offers", options: ["All offers", "Make an offer"] },
            ],
            dropdown: [
              {
                select: "Onboarding",
                options: ["Add Agreement", "View all agreements"],
              },
            ],
          },
        ],
      },
    ],
    TabContents: [
      { id: "tab1", comp: <Home /> },
      { id: "tab2", comp: <Agency /> },
    ],
  },
];
