import Image from "next/image";
import RatingPerson from "../RatingPerson";

export default function OverallRating() {
  return (
    <div className="w-full h-full flex pb-4 flex-col bg-white rounded-xl">
      <div className="w-full flex p-4 justify-between border-b pb-2">
        <div className="flex flex-col">
          <p>Overall rating</p>
          <div className="flex gap-2 text-primary text-md items-center">
            <p>4.2</p>
            <div className="flex">
              <Image width="16" height="16" src={"/svg/starPrimary.svg"} />{" "}
              <Image width="16" height="16" src={"/svg/starPrimary.svg"} />{" "}
              <Image width="16" height="16" src={"/svg/starPrimary.svg"} />{" "}
              <Image width="16" height="16" src={"/svg/starPrimary.svg"} />{" "}
              <Image width="16" height="16" src={"/svg/starGray.svg"} />
            </div>
            <p className="text-sm text-neutralGray">3 votes</p>
          </div>
        </div>
        <button className="h-full px-4 text-primary border border-primary rounded-md">
          Leave review
        </button>
      </div>
      <div className="w-full p-4 flex flex-col items-center">
        <div className="w-2/3 flex border-2 p-2 rounded-lg border-lightGray">
          <p className="whitespace-nowrap text-sm text-neutralGray">Sort by:</p>
          <select className="outline-none w-full">
            <option value="newest">Newest first</option>
          </select>
        </div>
        <div className="w-full divide-y py-4">
          <RatingPerson
            name="Savannah Miles"
            time="10"
            likes="14"
            dislikes="4"
            stars={5}
            image="/images/portrait.jpg"
          />
          <RatingPerson
            name="Jacob Jones"
            time="1"
            likes="4"
            dislikes="1"
            stars={4}
            image="/images/portrait2.jpg"
          />
        </div>
      </div>
    </div>
  );
}
