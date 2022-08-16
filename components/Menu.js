import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../components/Logo";

export default function Menu() {
  const router = useRouter();
  const accountPage = router.pathname === "/account" ? true : false;
  return (
    <div className="w-full border-b-2 border-lightGray ">
      <div className="flex justify-between items-center px-8 md:px-0 container mx-auto">
        <div className="flex items-center gap-x-12">
          <Logo />
          <div className="hidden md:flex bg-lightGray px-3 rounded-lg">
            <input
              className="outline-none py-2 bg-transparent"
              type="search"
              placeholder="Search"
            />
            <Image width="24" height="24" src="/svg/search.svg" />
          </div>
        </div>
        <ul className="flex flex-row items-center gap-4 md:gap-2 font-bold">
          <li className="hidden md:block">
            <a href="#" className="px-4 py-2">
              Restaurants
            </a>
          </li>
          <li className="hidden md:block">
            <a href="#" className="px-4 py-2 border-r-2 border-lightGray">
              Deals
            </a>
          </li>
          <li className="hidden md:block">
            <a href="#" className="px-4 py-2">
              My orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex items-center bg-primaryLight p-2 rounded-xl border border-primaryLight ring ring-primaryLight"
            >
              <Image width="24" height="24" src="/svg/bag.svg" />
              <p className="absolute -right-2 -top-2 px-2 py-1 rounded-lg bg-primary text-white text-[10px]">
                4
              </p>
            </a>
          </li>
          <li>
            <Link href="/account">
              <a
                className={`${
                  accountPage ? "ring-primary" : "ring-primaryLight"
                } md:ml-4 flex items-center bg-primaryLight rounded-xl overflow-hidden border border-white ring`}
              >
                <Image width="44" height="44" src="/images/portrait.jpg" />
              </a>
            </Link>
          </li>
          <li className="md:hidden ">
            <a
              href="#"
              className="flex items-center bg-primaryLight p-2 rounded-xl border border-primaryLight ring ring-primaryLight"
            >
              <Image width="24" height="24" src="/svg/burgerMenu.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
