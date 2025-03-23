import Layout from "../components/Layout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout title="Register | MSF">
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
