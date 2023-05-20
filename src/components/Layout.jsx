import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LoginContext } from "../context";
import { useContext } from "react";

const Layout = ({ children }) => {
  const login = useContext(LoginContext);

  return (
    <>
      <Header login={login} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='mt-32'
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export { Layout };
