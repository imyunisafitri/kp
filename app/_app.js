import { useRouter } from 'next/router';

import LoginPage from '../app/adminpanel'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const protectedRoutes = [ '/adminpanel/admin'];

  // Cek jika pengguna mencoba mengakses halaman yang memerlukan login
  if (protectedRoutes.includes(router.pathname)) {
    // Lakukan pengecekan apakah pengguna sudah login atau belum
    // Jika belum login, arahkan ke halaman login
    // Anda dapat menyesuaikan logika pengecekan login sesuai kebutuhan Anda
    const isLoggedIn = false; // Ganti dengan logika pengecekan login yang sesuai
    if (!isLoggedIn) {
      return <LoginPage />;
    }
  }

  return <Component {...pageProps} />;
}

export default MyApp;

