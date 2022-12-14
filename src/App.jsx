import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WeatherPage from "./pages/WeatherPage";
import ArticlesPage from "./pages/ArticlesPage";
import VacancyPage from "./pages/VacancyPage";
import CoopPage from "./pages/CoopPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import React, { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import { LoginContext } from './context';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const login = (data) => {
    if (data.login === "danil" && data.password === "danil") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  return (
    <LoginContext.Provider value={isLogged}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/weather' element={<WeatherPage />} />
          <Route path='/vacancy' element={<VacancyPage />} />
          <Route path='/coop' element={<CoopPage />} />
          <Route path='/discussions' element={<DiscussionsPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route
            path='/login'
            element={isLogged ? <ProfilePage /> : <LoginPage login={login} />}
          />
          <Route path='/privacy' element={<PrivacyPolicyPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
