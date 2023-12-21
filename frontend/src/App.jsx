import AppRoutes from "./AppROutes.jsx";
import { Header } from "./components/Header/Header.jsx";
import Loading from "./components/Loading/Loading.jsx";
import setLoadingInterceptor from "./interceptors/loadingInterceptor.js";
import useLoading from "./hooks/useLoading.js";
import { useEffect } from "react";

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
