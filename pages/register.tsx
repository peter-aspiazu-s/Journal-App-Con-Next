import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout/Layout";
import { Register } from '../components/auth/register/Register';
import axios from 'axios';

const RegisterPage:NextPage = ():JSX.Element => {
  return (
    <Layout
      title="Registrar"
      description="Página de registro para usar el diario digital"
    >
      <Register />
    </Layout>
  )
}

export default RegisterPage;


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