import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

const CategoriIconList = () => {
  const [nameIcon, setNameIcon] = useState(null);

  const iconNames = Object.keys(FaIcons);

  useEffect(() => {
    console.log(nameIcon);
  }, [nameIcon]);

  return (
    <div>
      {iconNames.map((iconName) => {
        const IconCompoent = FaIcons[iconName];

        return (
          <button key={iconName} onClick={() => setNameIcon(iconName)}>
            <IconCompoent size={32}></IconCompoent>
          </button>
        );
      })}
    </div>
  );
};

export default CategoriIconList;
