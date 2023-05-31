import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Layout } from '@/components/layout/Layout';
import axios from 'axios';

const JournalApp = dynamic(() => import('../components/journalApp/JournalApp'), {
  loading: () => <div>Cargando...</div>
});

const HomePage:NextPage = () => {
  return (
    <Layout
      title='Journal App'
      description='Aplicación de diario diseñada para ayudar a las personas a llevar un registro de sus pensamientos, emociones, experiencias y eventos importantes en su vida.'
    >
      <JournalApp />
    </Layout>
  )
}

export default HomePage;

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

  if (!data.isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}