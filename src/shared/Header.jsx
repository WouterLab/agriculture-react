import { NavButton } from "./NavButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "../assets/logo.png";

const Header = ({ login }) => {
  const currentPage = useLocation();
  const [isNavActive, setNavActive] = useState(false);
  return (
    <header className='fixed h-20 top-0 bg-[#F3FCF7] w-full flex justify-between items-center z-[500]'>
      <Link to='/'>
        <img className='w-16 ml-12 cursor-pointer' src={LogoIcon} alt='logo' />
      </Link>
      <div className='space-x-8 mr-12 hidden md:flex'>
        <NavButton
          text='Главная'
          link='/'
          active={currentPage.pathname === "/"}
        />
        <NavButton
          text='Новости'
          link='/news'
          active={currentPage.pathname === "/news"}
        />
        <NavButton
          text='Статьи'
          link='/articles'
          active={currentPage.pathname === "/articles"}
        />
        <NavButton
          text='Погода'
          link='/weather'
          active={currentPage.pathname === "/weather"}
        />
        <NavButton
          text='Вакансии'
          link='/vacancy'
          active={currentPage.pathname === "/vacancy"}
        />
        <NavButton
          text='Предложения'
          link='/offers'
          active={currentPage.pathname === "/offers"}
        />
        <NavButton
          text='Обсуждения'
          link='/discussions/1'
          active={currentPage.pathname.includes("/discussions/")}
        />
        {login ? (
          <NavButton
            text='Профиль'
            link='/login'
            active={currentPage.pathname === "/login"}
          />
        ) : (
          <NavButton
            text='Вход'
            link='/login'
            active={currentPage.pathname === "/login"}
          />
        )}
      </div>
      <AnimatePresence>
        {isNavActive ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            key='burger'
            className='md:hidden flex flex-col absolute h-screen top-0 right-0 w-full gap-6 py-12 items-center bg-[#F3FCF7] z-[500]'
          >
            <XMarkIcon
              className='w-12 min-w-[48px] min-h-[48px] h-12 cursor-pointer'
              onClick={() => setNavActive(false)}
            />
            <NavButton
              text='Главная'
              link='/'
              active={currentPage.pathname === "/"}
            />
            <NavButton
              text='Новости'
              link='/news'
              active={currentPage.pathname === "/news"}
            />
            <NavButton
              text='Статьи'
              link='/articles'
              active={currentPage.pathname === "/articles"}
            />
            <NavButton
              text='Погода'
              link='/weather'
              active={currentPage.pathname === "/weather"}
            />
            <NavButton
              text='Вакансии'
              link='/vacancy'
              active={currentPage.pathname === "/vacancy"}
            />
            <NavButton
              text='Предложения'
              link='/offers'
              active={currentPage.pathname === "/offers"}
            />
            <NavButton
              text='Обсуждения'
              link='/discussions/1'
              active={currentPage.pathname === "/discussions/"}
            />
            {login ? (
              <NavButton
                text='Профиль'
                link='/login'
                active={currentPage.pathname === "/login"}
              />
            ) : (
              <NavButton
                text='Вход'
                link='/login'
                active={currentPage.pathname === "/login"}
              />
            )}
          </motion.div>
        ) : (
          <Bars4Icon
            className='w-12 mr-12 cursor-pointer md:hidden'
            onClick={() => setNavActive(true)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export { Header };
