import Link from "next/link";
import { loginUser } from "../../utils/actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-10 bg-orange-100 text-gray-500">
      <h1 className="pt-10 text-4xl text-center mb-10 font-semibold text-orange-500">
        Login
      </h1>
      <form
        action={loginUser}
        className="mx-auto flex flex-col gap-3 max-w-2xl py-10 px-5 bg-white shadow-2xl rounded-2xl"
      >
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <div>
          <button
            type="submit"
            className="px-8 py-2 bg-green-400 text-white shadow-2xl rounded-xl mt-8"
          >
            Login
          </button>
        </div>
      </form>
      <p className="mt-4 text-orange-500">
        don't have an account?{" "}
        <Link href={"/signup"} className="hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
