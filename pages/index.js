import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import OverallRating from "../components/sections/OverallRating";
import Rollset from "../components/sections/Rollset";
import Nigiriset from "../components/sections/Nigiriset";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex overflow-hidden ">
      <div className="w-full md:w-5/12 px-4 md:pl-40 md:pr-32 flex flex-col justify-between">
        <Logo />
        <LoginForm />
        <p className="w-full text-center pb-8">
          Don't have an account?{" "}
          <a className="text-primary font-semibold" href="#">
            Sign up
          </a>
        </p>
      </div>
      <div className="hidden overflow-hidden items-center md:flex flex-col md:w-7/12 px-32 py-8 bg-[#697BFF]">
        <div className="relative flex justify-end w-full gap-x-12">
          <div className="w-[45%] box-shadow-xl box-shadow-primary">
            <OverallRating />
          </div>
          <div className="w-[45%] pt-12 box-shadow-xl box-shadow-primary">
            <Rollset />
          </div>
          <div className="absolute w-11/12 left-0 -bottom-24 h-36 rounded-xl bg-white shadow-2xl shadow-primary">
            <Nigiriset />
          </div>
        </div>
        <div className="w-2/3 pt-32 text-white text-center space-y-8">
          <h3 className="text-4xl">Leave reviews for all meals</h3>
          <p>
            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
            probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
          </p>
          <div className="space-x-2 text-white/30 text-3xl">
            <button>&#8226;</button>
            <button className="text-white">&#8226;</button>
            <button>&#8226;</button>
            <button>&#8226;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
