import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

const UserDashboard = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return <div className="pt-24">UserDashboard</div>;
};

export default UserDashboard;
