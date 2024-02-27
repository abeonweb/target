import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

const UserDashboard = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return (
    <div className="pt-24 h-[90vh]">
      <h1>Welcome to your Dashboard</h1>
    </div>
  );
};

export default UserDashboard;
