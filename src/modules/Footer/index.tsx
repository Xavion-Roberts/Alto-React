import React from "react";
import { Link } from "react-router-dom";

import { Info } from "components";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Links, SpriteLinks, InfoLinks, StoreLinks } from "components/Footer";
import { links, spriteLinks, infoLinks, storeLinks } from "./constants";
import urac from "assets/urac.svg";
import vipps from "assets/vipps.svg";

export const Footer = () => {
  return (
    <footer className="relative bg-light-rose px-5 360:px-10 628:px-18">
      <Info
        title="Believe in a better pharmacy."
        link="Transfer in seconds"
        className="pb-16 628:pb-28"
        titleClassName="mb-12 628:mb-18"
        linkClassName="bg-light-green"
      />
      <div>
        <Link to="/">
          <Logo className="w-22 h-8" />
        </Link>
        <div className="flex justify-between flex-wrap mt-9">
          <Links links={links} />
          <SpriteLinks spriteLinks={spriteLinks} />
        </div>
        <div className="flex justify-between flex-wrap-reverse my-10 628:mt-24 628:mb-20 text-gray-blue text-sm leading-7 tracking-[0.44px]">
          <div className="628:mx-2.5 904:mx-0">
            ©2020 Alto Pharmacy. All rights reserved.
          </div>
          <InfoLinks infoLinks={infoLinks} />
        </div>
      </div>
      <div className="bg-white flex items-center 628:justify-around flex-col 628:flex-row 840:justify-start flex-wrap-reverse 840:flex-nowrap pb-9">
        <img src={urac} alt="urac" />
        <div className="max-w-41.5 text-center 628:text-start 628:ml-5 text-opacity70-black leading-6 tracking-[0.84px]">
          Specialty Pharmacy{" "}
          <span className="text-gray-blue text-sm leading-5 tracking-[0.75px]">
            Expires 04/01/2021
          </span>
        </div>
        <img src={vipps} alt="vipps" className="my-5 628:my-0 628:ml-14" />
        <StoreLinks storeLinks={storeLinks} />
      </div>
    </footer>
  );
};
