import Image from "next/image";
import { useState } from "react";

export default function Category({ item, functionSelected, selected = [] }) {
  const [active, setActive] = useState(false);

  const changeActive = (event) => {
    var array = [...selected];
    if (event) {
      array = [...selected, item.title];
    } else {
      array.splice(selected.indexOf(item.title), 1);
    }
    functionSelected(array);
    setActive(event);
  };

  return (
    <div
      onClick={() => changeActive(!active)}
      className={`${
        active
          ? "border-2 border-primary bg-primaryLight text-primary"
          : "border hover:border-primary hover:bg-[#F8F9FF]"
      } flex flex-col items-center font-semibold justify-center gap-y-2 py-4 rounded-xl`}
    >
      <Image width="32" height="32" src={item.image} />
      <p>{item.title}</p>
    </div>
  );
}
