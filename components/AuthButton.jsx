import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signOutUser } from "@/utils/actions";

export default async function AuthButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <form action={signOutUser} className="cursor-pointer text-orange-500">
        <button type="submit">Sign out</button>
      </form>
    );
  } else {
    return (
      <Link href={"/auth/login"} className=" text-orange-500">
        Login
      </Link>
    );
  }
}
