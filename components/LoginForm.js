import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [showPassord, setShowPassord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const logIn = () => {
    if (password.length >= 8 && email.includes(".")) {
      router.push("/home");
    }
  };

  return (
    <form onSubmit={() => logIn()} className="w-full flex flex-col gap-y-8">
      <h2 className="text-[60px] font-semibold">Login</h2>
      <p>Sign in with your data that you entered during your registration.</p>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
          className="border-borderGray border-2 px-4 py-3 rounded-xl outline-none"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <div className="border-borderGray px-4 border-2 flex justify-between rounded-xl overflow-hidden">
          <input
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
            className="outline-none py-3"
            type={showPassord ? "text" : "password"}
            placeholder="min. 8 characters"
            required
          />
          <button
            className="flex items-center justify-center"
            onClick={() => setShowPassord(!showPassord)}
          >
            <Image width="24" height="24" src={"/svg/eye.svg"} />
          </button>
        </div>
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
