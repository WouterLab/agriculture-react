import { useEffect, useState } from "react";
import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";

const CurrentArticlePage = () => {
  const [articleTitle, setArticleTitle] = useState(
    "Статья о ведении агропромышленности",
  );
  const [articleImage, setArticleImage] = useState(
    "https://source.unsplash.com/random/200×200",
  );
  const navigate = useNavigate();

  useEffect(() => {
    const updatedTitle = localStorage.getItem("article-title");
    setArticleTitle(updatedTitle);
    const updatedImage = localStorage.getItem("article-image");
    setArticleImage(updatedImage);
  }, []);

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='СТАТЬЯ' />
        <p className='md:w-3/5 w-full px-8 text-center text-2xl mb-12'>
          {articleTitle}
        </p>
        <div className='md:w-3/5 w-full px-8 mb-8 text-xl'>
          <img
            src={articleImage}
            alt='article'
            className='max-h-[700px] md:max-w-[50%] mx-auto float-none max-w-[100%] md:float-right md:mx-8 mb-8'
          />
          Росстат: Россия в 2022 году собрала рекордные 153,83 млн зерна в
          чистом весе. Как ранее сообщалось, это абсолютный рекорд для страны.
          <br />
          <br />
          Предыдущий был получен в 2017 году - 135,5 млн тонн. В том числе
          пшеницы в 2022 году было собрано 104,44 млн тонн - на 27,2% больше,
          чем в 2021 году (76,1 млн тонн). Вырос также урожай ржи - с 1,7 млн
          тонн в 2021 году до 2,2 млн тонн в 2022 году. Ячменя было собрано 23,5
          млн тонн против 18 млн тонн в 2021 году.
          <br />
          <br />
          Однако снизился урожай кукурузы: в 2022 году он составил 11, 8 млн
          тонн, тогда как в 2021 году - 15,2 млн тонн. Увеличился сбор овса - до
          4,56 млн тонн против 3,78 млн тонн в 2021 году, гречихи - 1,2 млн тонн
          против 919,1 тыс. тонн. А вот урожай риса и проса снизился: риса - до
          797,5 тыс. тонн против 1,076 млн тонн, проса - до 3,1 млн тонн против
          3,7 млн тонн.
          <br />
          <br />
          Также снизился урожай подсолнечника - до 14,5 млн тонн с 15,7 млн тонн
          в 2021 году. Зато остальные масличные показали существенный рост:
          урожай сои вырос до 5,8 млн тонн с 4,8 млн тонн, рапса - 4,5 млн тонн
          против 2,79 годом ранее. Есть прибавка по сахарной свекле: в 2022 году
          накопано 41,7 млн тонн, тогда как в 2021 году урожай составил 41,2 млн
          тонн. Урожай картофеля тоже оказался выше, чем в 2021 году: 18,7 млн
          тонн против 17,9 млн тонн. Овощей собрано 13,02 млн тонн против 13,03
          млн тонн в 2021 году.
        </div>
        <Button onClick={() => navigate("/articles")}>Назад</Button>
      </div>
    </Layout>
  );
};

export { CurrentArticlePage };
