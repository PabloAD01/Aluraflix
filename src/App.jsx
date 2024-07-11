import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NewVideo from "./pages/NewVideo/NewVideoPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Footer from "./components/Footer/Footer";

import GlobalContextProvider from "./provider/GlobalContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newVideo" element={<NewVideo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export default App;
