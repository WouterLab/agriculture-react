import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='mt-32'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
