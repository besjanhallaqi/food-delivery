import Image from "next/image";

export default function Rollset() {
  return (
    <div className="w-full bg-white flex flex-col rounded-xl p-4 gap-y-4">
      <Image
        className="rounded-xl"
        width="400"
        height="240"
        src="/images/sushi.jpg"
      />
      <div className="w-full flex flex-col">
        <h3 className="font-bold text-xl">Roll set</h3>
        <p className="text-neutralGray leading-5">
          Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
          ignota euismod corpora, et saepe.
        </p>
        <div className="flex justify-between py-2">
          <h2 className="font-[900] text-[27px]">$ 22.56</h2>
          <button className="bg-primaryLight text-2xl px-3 rounded-lg text-primary border border-primary">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
