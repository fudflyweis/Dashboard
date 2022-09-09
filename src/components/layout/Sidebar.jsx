import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsBorderWidth } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { MdPrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../assets/Final Direct2U Logo-01.png";
import { BiLogOutCircle } from "react-icons/bi";

import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineNotifications,
  MdHistory,
  MdAttachMoney,
  MdOutlineFileUpload,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai"
const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <MdHistory className="text-xl mr-3" />,
      link: "/history",
      name: "History",
    },
    {
      icon: <MdHistory className="text-xl mr-3" />,
      link: "/gallery",
      name: "Gallery",
    },
    {
      icon: <CgProfile className="text-xl mr-3" />,
      link: "/manageprofiles",
      name: "Manage Profiles",
    },
    {
      icon: <MdAttachMoney className="text-xl mr-3" />,
      link: "/payments",
      name: "Payments",
    },
    {
      icon: <MdOutlineFileUpload className="text-xl mr-3" />,
      link: "/uploadservices",
      name: "Upload Services",
    },
    {
      icon: <AiFillPlusCircle className="text-xl mr-3" />,
      link: "/acceptrequest",
      name: "Accept Request",
    },
    {
      icon: <MdOutlineProductionQuantityLimits className="text-xl mr-3" />,
      link: "/products",
      name: "Products",
    },

    {
      icon: <MdOutlineCategory className="text-xl mr-3" />,
      link: "/categories",
      name: "Categories",
    },
    {
      icon: <GiKnightBanner className="text-xl mr-3" />,
      link: "/banners",
      name: "Banners",
    },
    {
      icon: <BsBorderWidth className="text-xl mr-3" />,
      link: "/orders",
      name: "Orders",
    },
    {
      icon: <CgTerminal className="text-xl mr-3" />,
      link: "/terms",
      name: "Terms and Conditions",
    },

    {
      icon: <MdPrivacyTip className="text-xl mr-3" />,
      link: "/privacyPolicy",
      name: "Privacy Policy",
    },
    {
      icon: <BiSupport className="text-xl mr-3" />,
      link: "/support",
      name: "Help and Support ",
    },
    {
      icon: <BiSupport className="text-xl mr-3" />,
      link: "/vendors",
      name: "Vendors ",
    },
    {
      icon: <BiLogOutCircle className="text-xl mr-3" />,
      link: "/",
      name: "Logout",
    },
  ];
  return (
    <>
      <aside className="p-4">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">
            <img src={image} className="h-24" />
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
