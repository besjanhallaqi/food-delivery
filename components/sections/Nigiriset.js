import Image from "next/image";
import { useState } from "react";

export default function Nigiriset() {
  function productCount(number) {
    if (min === 1 && number) {
      return;
    } else if (min !== 1 && number) {
      setMin(min - 1);
    } else {
      setMin(min + 1);
    }
  }
  const [min, setMin] = useState(1);
  return (
    <div className="w-full flex gap-x-8 p-4">
      <Image
        className="rounded-xl"
        width="200"
        height="100"
        src="/images/sushi.jpg"
      />
      <div className="w-1/2 flex flex-col">
        <h3 className="font-bold text-xl">Nigiri set</h3>
        <p className="text-neutralGray leading-5">
          Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
          ignota euismod corpora, et saepe.
        </p>
        <h2 className="font-[900] text-[27px]">$ 16.80</h2>
      </div>
      <div className="flex flex-col justify-end gap-2">
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => productCount(true)}
            className={`bg-primaryLight text-2xl w-7 rounded-lg ${
              min === 1 ? "text-white" : ""
            }`}
          >
            -
          </button>
          <p className="font-bold text-lg">{min}</p>
          <button
            onClick={() => productCount(false)}
            className="bg-primaryLight text-2xl w-7 rounded-lg "
          >
            +
          </button>
        </div>
        <button className="bg-primaryLight whitespace-nowrap font-semibold text-md px-4 py-2 rounded-lg text-primary">
          + Add to cart
        </button>
      </div>
    </div>
  );
}
