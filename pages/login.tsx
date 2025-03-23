import Layout from "../components/Layout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Layout title="Login | MSF">
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
