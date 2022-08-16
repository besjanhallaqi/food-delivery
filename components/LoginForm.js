import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function LoginForm({ login }) {
  const router = useRouter();

  const [showPassord, setShowPassord] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    router.push("/restaurants");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-8"
    >
      <h2 className="text-[60px] font-semibold">Login</h2>
      <p>Sign in with your data that you entered during your registration.</p>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          className="border-borderGray border-2 px-4 py-3 rounded-xl outline-none"
          type="email"
          placeholder="name@example.com"
        />
        {errors.email && <p className="text-red-700">Should be valid email</p>}
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <div className="border-borderGray px-4 border-2 flex justify-between rounded-xl overflow-hidden">
          <input
            {...register("password", { required: true, minLength: 8 })}
            className="outline-none py-3"
            type={showPassord ? "text" : "password"}
            placeholder="min. 8 characters"
          />
          <button
            className="flex items-center justify-center"
            onClick={() => setShowPassord(!showPassord)}
          >
            <Image width="24" height="24" src={"/svg/eye.svg"} />
          </button>
        </div>
        {errors.password && (
          <p className="text-red-700">Should be 8 or more characters</p>
        )}
      </div>
      <div className="flex items-center gap-x-3">
        <input className="w-6 h-6 accent-primary" type="checkbox" />
        <label>Keep me logged in</label>
      </div>

      <button
        type="submit"
        className="bg-primary text-white text-center font-semibold py-4 rounded-xl shadow-primary/40 shadow-lg md:shadow-2xl"
      >
        Login
      </button>

      <a className="w-full text-center text-primary font-semibold" href="#">
        Forgot password
      </a>
    </form>
  );
}
