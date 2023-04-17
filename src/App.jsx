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
import { LoginContext } from "./context";
import CurrentNewsPage from "./pages/CurrentNewsPage";
import CurrentArticlePage from "./pages/CurrentArticlePage";
import CurrentVacancyPage from "./pages/CurrentVacancyPage";
import CurrentCoopPage from "./pages/CurrentCoopPage";
import CurrentDiscussionPage from "./pages/CurrentDiscussionPage";

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
          <Route path='/news/:newsId' element={<CurrentNewsPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/articles/:articleId' element={<CurrentArticlePage />} />
          <Route path='/weather' element={<WeatherPage />} />
          <Route path='/vacancy' element={<VacancyPage />} />
          <Route path='/vacancy/:vacancyId' element={<CurrentVacancyPage />} />
          <Route path='/coop' element={<CoopPage />} />
          <Route path='/coop/:coopId' element={<CurrentCoopPage />} />
          <Route path='/discussions' element={<DiscussionsPage />} />
          <Route
            path='/discussions/:discussionId'
            element={<CurrentDiscussionPage />}
          />
          <Route path='/signup' element={<SignUpPage />} />
          <Route
            path='/login'
            element={
              isLogged ? (
                <ProfilePage setIsLogged={setIsLogged} />
              ) : (
                <LoginPage login={login} />
              )
            }
          />
          <Route path='/privacy' element={<PrivacyPolicyPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
