import Image from "next/image";

export default function Restaurant({ item }) {
  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden border border-lightGray">
      <Image width="300" height="200" src={item.image} />
      <div className="flex flex-col p-4 gap-4">
        <div className="flex justify-between text-2xl">
          <h2>{item.name}</h2>
          {item.card === 0 && (
            <Image width="24" height="24" src="/svg/grayBag.svg" />
          )}
          {item.card !== 0 && (
            <div className="relative">
              <Image width="24" height="24" src="/svg/bag.svg" />
              <p className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center p-1 rounded-full bg-primary text-white text-[12px]">
                {item.card}
              </p>
            </div>
          )}
        </div>
        <div className="flex gap-2 text-neutralGray">
          <Image width="20" height="20" src="/svg/clock.svg" />
          <p>{item.deliveryTime} min</p>
          <p>&#8226;</p>
          <p>${item.deliveryAverage} min sum</p>
        </div>
        <div className="w-full flex flex-wrap gap-2">
          {item.category.map((items, index) => (
            <div
              key={index}
              className="flex px-3 py-1 gap-2 text-[14px] text-[#545563] rounded-full bg-lightGray"
            >
              <Image width="20" height="20" src={items.image} />
              <p>{items.title}</p>
            </div>
          ))}
        </div>
      </div>
      {item.featured && (
        <div className="absolute rounded-bl-2xl text-[14px] top-0 right-0 bg-primary text-white uppercase px-4 py-2">
          <p>Featured</p>
        </div>
      )}
    </div>
  );
}
