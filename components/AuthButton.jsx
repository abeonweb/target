import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

import { signOutUser } from "@/utils/actions/actions";
export default async function AuthButton() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  

  if (!user) {
    return (
      <div formAction={signOutUser} className="cursor-pointer">
        Sign out
      </div>
    );
  } else {
    return <Link href={"/auth/login"}>Login</Link>;
  }
};


