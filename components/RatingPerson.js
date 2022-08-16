import Image from "next/image";

export default function RatingPerson({
  name = "",
  time = "",
  likes = "",
  dislikes = "",
  stars = 0,
  image = "",
}) {
  const starsGray = 5 - stars;
  return (
    <div className="flex py-2">
      <div className="overflow-hidden w-36 max-h-16 rounded-full">
        <Image width="60" height="70" layout="responsive" src={image} />
      </div>

      <div className="flex flex-col px-2">
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex gap-x-2">
          <div className="flex">
            {[
              [...Array(stars)].map((item, index) => (
                <Image
                  key={index}
                  width="16"
                  height="16"
                  src={"/svg/starPrimary.svg"}
                />
              )),
            ]}
            {[
              [...Array(starsGray)].map((item, index) => (
                <Image
                  key={index}
                  width="16"
                  height="16"
                  src={"/svg/starGray.svg"}
                />
              )),
            ]}
          </div>
          <p className="text-sm text-neutralGray">{time} days ago</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
          aperiam delicata est.
        </p>
        <div className="flex gap-x-4 pt-2">
          <div className="flex gap-2 ">
            <Image width="24" height="24" src="/svg/like.svg" />
            <p>{likes}</p>
          </div>
          <div className="flex gap-2">
            <Image width="24" height="24" src="/svg/dislike.svg" />
            <p>{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
