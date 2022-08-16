import Image from "next/image";

export default function DiscountProduct({
  title = "",
  discount = 0,
  category = "",
  backgroundColor = "",
  image = "",
  textColor = "",
}) {
  return (
    <div
      className={`${backgroundColor} w-full px-2 md:px-16 flex flex-col-reverse md:flex-row gap-6 rounded-2xl`}
    >
      <div className="w-full md:w-1/2 flex justify-end overflow-hidden">
        <Image width="400" height="360" src={image} />
      </div>
      <div className="w-full md:w-1/2 flex flex-row md:flex-col pt-8 pb-4 pl-4">
        <div>
          <h2 className="text-xl md:text-[28px]">{title}</h2>
          <h3
            className={`${textColor} text-[40px] md:text-[56px] font-semibold uppercase`}
          >
            {discount}% off
          </h3>
        </div>
        <p className="text-neutralGray text-sm md:text-base ml-auto md:ml-0 md:mt-auto">
          {category}
        </p>
      </div>
    </div>
  );
}
