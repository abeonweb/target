import { signup } from "../../utils/actions";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-10 bg-orange-100 text-gray-500">
      <h1 className="pt-10 text-4xl text-center mb-10 font-semibold text-orange-500">
        Sign Up
      </h1>
      <form
        action={signup}
        className="mx-auto flex flex-col gap-3 max-w-2xl py-10 px-5 bg-white shadow-2xl rounded-2xl"
      >
        <label htmlFor="email" className="text-orange-500">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <label htmlFor="password" className="text-orange-500">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="px-6 py-2 rounded-full border-2 border-orange-400 w-64 bg-orange-50 focus:bg-white"
        />
        <button
          type="submit"
          className="px-8 py-2 bg-green-400 text-white shadow-2xl rounded-xl mt-8"
        >
          Sign up
        </button>
      </form>
      <p className="mt-4 text-orange-500">
        already have an account?{" "}
        <Link href={"/login"} className="hover:underline">
          Log in
        </Link>
        .
      </p>
    </div>
  );
}
