import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout/Layout";
import { Login } from "@/components/auth/login/Login";
import axios from 'axios';

const LoginPage:NextPage = ():JSX.Element => {
  return (
    <Layout
      title="Iniciar Sesión"
      description="Página de inicio de sesión para usar el diario digital"
    >
      <Login />
    </Layout>
  )
}

export default LoginPage;


export const getServerSideProps: GetServerSideProps = async (context) => {

  let apiUrl = '';

  if (process.env.NODE_ENV === 'development') {
    // En modo de desarrollo
    apiUrl = 'http://localhost:3000';
  } else {
    // En modo de producción
    apiUrl = 'https://journal-app-con-next.vercel.app';
  }

  const api = axios.create({
    baseURL: apiUrl
  })

  const { data } = await api.get("/api/checkAuth");

  if (data.isAuthenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}