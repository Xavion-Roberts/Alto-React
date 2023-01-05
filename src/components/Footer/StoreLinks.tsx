import React, { FC } from "react";

interface IStoreLinks {
  icon: string | any;
  name: string;
}

interface storeLinksProps {
  storeLinks: IStoreLinks[];
}

export const StoreLinks: FC<storeLinksProps> = ({ storeLinks }) => {
  return (
    <div className="flex 460:flex-wrap 840:h-24 628:mb-10 840:mt-0">
      {storeLinks.map((item, index) => (
        <a key={item + "_" + index} href={"#" + item} className="840:ml-16">
          <img src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
  );
};
