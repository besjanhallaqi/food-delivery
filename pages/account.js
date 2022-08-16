import Menu from "../components/Menu";
import ProfileSettings from "../components/ProfileSettings";
import PersonalInformations from "../components/sections/PersonalInformations";
import { useState } from "react";

export default function Account() {
  const [active, setActive] = useState("Account");

  const settings = [
    {
      title: "Account",
      subtitle: "Personal information",
      svg: "/svg/user.svg",
      svgClicked: "/svg/whiteUser.svg",
    },
    {
      title: "Address",
      subtitle: "Shipping addresses",
      svg: "/svg/location.svg",
      svgClicked: "/svg/whiteLocation.svg",
    },
    {
      title: "Payment method",
      subtitle: "Connected credit cards",
      svg: "/svg/card.svg",
      svgClicked: "/svg/whiteCard.svg",
    },
    {
      title: "Security",
      subtitle: "Password, 2FA",
      svg: "/svg/shield.svg",
      svgClicked: "/svg/whiteShield.svg",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Menu />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full px-8 md:px-0 container mx-auto py-10">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <p className="text-[28px] font-semibold">Settings</p>
          {settings.map((item, index) => (
            <ProfileSettings
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              svg={item.svg}
              svgClicked={item.svgClicked}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-[28px] font-semibold">{active}</p>
          {active !== "Account" && (
            <p className="text-lg text-primary py-2">Nothing to show!</p>
          )}
          {active === "Account" && <PersonalInformations />}
        </div>
      </div>
    </div>
  );
}
