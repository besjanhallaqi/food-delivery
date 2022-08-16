import Image from "next/image";

export default function ProfileSettings({
  title = "",
  subtitle = "",
  svg = "",
  svgClicked = "",
  active = "",
  setActive,
}) {
  const activeSetting = active === title ? true : false;
  return (
    <button
      onClick={() => setActive(title)}
      className={`${
        activeSetting
          ? "border-2 border-primary bg-primaryLight"
          : "border hover:border-primary hover:bg-[#F8F9FF]"
      } flex p-4 gap-4 text-left rounded-xl`}
    >
      <div
        className={`${
          activeSetting ? "bg-primary" : "bg-lightGray"
        } flex items-center justify-center p-2 rounded-xl`}
      >
        {activeSetting && <Image width="32" height="32" src={svgClicked} />}
        {activeSetting === false && <Image width="32" height="32" src={svg} />}
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </button>
  );
}
