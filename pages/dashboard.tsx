import UserDashboard from "@/components/users/UserDashboard";
import Layout from "../components/Layout";

const DashboardPage = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
  };

  return (
    <Layout title="Dashboard | MSF">
      <UserDashboard user={user} />
    </Layout>
  );
};

export default DashboardPage;
