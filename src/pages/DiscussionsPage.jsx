import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import { ThemeCard } from "../components/ThemeCard";
import { Input } from "../ui/Input";

const DiscussionsPage = () => {
  const themes = [
    { id: 0, title: "Как защитить свою ферму от кукурузного жука?" },
    { id: 1, title: "Плодородность почвы" },
    { id: 2, title: "Как определить болезнь растений?" },
    { id: 3, title: "Семена на 2025" },
    { id: 4, title: "Как защитить свою ферму от картофельного жука?" },
    { id: 5, title: "Плодородность земли" },
    { id: 6, title: "Как определить цвет растений?" },
    { id: 7, title: "Семена на 2023" },
    { id: 8, title: "Как защитить свою ферму от капустного жука?" },
    { id: 9, title: "Плодородность поля" },
    { id: 10, title: "Как определить вид растений?" },
    { id: 11, title: "Семена на 2024" },
  ];
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='ОБСУЖДЕНИЯ' />
        <div className='flex flex-col items-center w-full'>
          <div className='flex flex-col sm:flex-row mb-4 sm:mb-0 items-center justify-between w-5/6'>
            <div>
              <p className='text-lg'>Поиск по темам:</p>
              <Input
                type='text'
                placeholder='Тема...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='space-x-2 text-2xl sm:text-lg'>
              <span>Страницы:</span>{" "}
              <Link
                to='/discussions/1'
                className={
                  pathname === "/discussions/1"
                    ? "text-green-400 pointer-events-none"
                    : ""
                }
              >
                1
              </Link>
              <Link
                to='/discussions/2'
                className={
                  pathname === "/discussions/2"
                    ? "text-green-400 pointer-events-none"
                    : ""
                }
              >
                2
              </Link>
              <Link
                to='/discussions/3'
                className={
                  pathname === "/discussions/3"
                    ? "text-green-400 pointer-events-none"
                    : ""
                }
              >
                3
              </Link>
              <Link
                to='/discussions/4'
                className={
                  pathname === "/discussions/4"
                    ? "text-green-400 pointer-events-none"
                    : ""
                }
              >
                4
              </Link>
              <Link
                to='/discussions/5'
                className={
                  pathname === "/discussions/5"
                    ? "text-green-400 pointer-events-none"
                    : ""
                }
              >
                5
              </Link>
            </div>
          </div>
          <div className='w-5/6'>
            {themes.map((theme) => {
              if (search === "")
                return (
                  <ThemeCard key={theme.id} id={theme.id} title={theme.title} />
                );
              else if (
                theme.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
              ) {
                return <ThemeCard key={theme.id} title={theme.title} />;
              } else return null;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { DiscussionsPage };
