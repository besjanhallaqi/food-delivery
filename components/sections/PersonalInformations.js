import Image from "next/image";
import Link from "next/link";

export default function PersonalInformations() {
  return (
    <form className="w-full border border-lightGray mt-4 rounded-xl ">
      <div className="w-full px-4 py-8 space-y-4">
        <p className="text-2xl font-semibold">Personal information</p>
        <div className="w-full flex flex-col gap-2">
          <p className="text-[14px]">Avatar</p>
          <div className="flex items-center gap-x-8 font-semibold">
            <Image
              className="rounded-xl"
              width="150"
              height="150"
              src="/images/portrait.jpg"
            />
            <button className="border-2 border-primary rounded-xl text-primary py-3 px-4">
              Change
            </button>
            <button className="text-neutralGray">Remove</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 text-[14px]">
          <div className="w-full flex flex-col">
            <label>First name</label>
            <input
              type="text"
              placeholder="Jane"
              className="p-3 rounded-lg border border-borderGray outline-primary"
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Robertson"
              className="p-3 rounded-lg border border-borderGray outline-primary"
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="jane.robertson@example.com"
              className="p-3 rounded-lg border border-borderGray outline-primary"
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Phone number</label>
            <input
              type="text"
              placeholder="(217) 555-0113"
              className="p-3 rounded-lg border border-borderGray outline-primary"
            />
          </div>
        </div>
        <div className="w-full flex flex-col pt-16 gap-4">
          <p className="text-2xl font-semibold">Email notifications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>New deals</label>
            </div>
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>Password changes</label>
            </div>
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>New restaurants</label>
            </div>
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>Special offers</label>
            </div>
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>Order statuses</label>
            </div>
            <div className="w-full flex gap-4">
              <input type="checkbox" className="w-6 h-6 accent-primary" />
              <label>Newsletter</label>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className="block md:hidden text-center w-full px-4 py-2 font-semibold rounded-lg border border-[#FF5C60] text-[#FF5C60] text-sm">
            Log out
          </a>
        </Link>
      </div>
      <div className="w-full flex justify-between border-t border-lightGray px-4 py-6">
        <Link href="/">
          <a className="hidden md:block px-4 py-2 font-semibold rounded-lg border border-[#FF5C60] text-[#FF5C60]">
            Log out
          </a>
        </Link>
        <div className="flex gap-3 md:gap-6">
          <button
            type="button"
            className="px-4 py-2 whitespace-nowrap text-sm md:text-base font-semibold rounded-lg border border-neutralGray text-neutralGray"
          >
            Discard Changes
          </button>
          <button
            type="button"
            className="px-4 py-2 whitespace-nowrap text-sm md:text-base font-semibold rounded-lg bg-primary shadow-lg shadow-primary/30 text-white"
          >
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
}
