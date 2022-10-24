import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ArticlesPage from "./pages/ArticlesPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/discussions' element={<DiscussionsPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
