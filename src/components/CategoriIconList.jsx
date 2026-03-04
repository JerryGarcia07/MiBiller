import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

const CategoriIconList = ({ ResivirIconName }) => {
  const iconNames = Object.keys(FaIcons);

  return (
    <div>
      {iconNames.map((iconName) => {
        const IconCompoent = FaIcons[iconName];

        return (
          <button key={iconName} onClick={() => ResivirIconName(iconName)}>
            <IconCompoent size={32}></IconCompoent>
          </button>
        );
      })}
    </div>
  );
};

export default CategoriIconList;
