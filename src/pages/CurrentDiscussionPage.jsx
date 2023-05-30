import { useContext, useState } from "react";
import { Layout } from "../shared/Layout";
import { UserAnswer } from "../components/UserAnswer";
import { UserQuestion } from "../components/UserQuestion";
import { Button } from "../shared/Button";
import { Textarea } from "../shared/Textarea";
import { LoginContext } from "../context";
import { useNavigate } from "react-router-dom";

const answers = [
  {
    id: 1,
    user: "Валентина Степановна",
    message:
      "Очень хорошо помогает в борьбе с колорадским жуком российский препарат РЕГЕНТ.Но разводить его в воде надо не по инструкции, а в чуть больших пропорциях.Сразу вроде бы эффекта не будет, но по прошествии дней трех ,вы заметите что жуков стало меньше, а через неделю их совсем будет мало.Я уже года два пользуюсь этим препаратом и в общем -то довольна.Конечно, всех жуков не выведите ,но и массового поражения растений уже не будет.Причем, у него низкая токсичность ,так что попробуйте -хуже не будет по- любому.",
    date: "чт, 15.05.2023 - 00:53",
  },
  {
    id: 2,
    user: "Anfisa",
    message:
      "Как мне кажется колорадский жук любит синие баклажаны даже больше, чем картофель. Не вредны ли указанные вами химикаты для плодов баклажана? Ведь картофель растет в земле, а они сверху.",
    date: "сб, 17.05.2023 - 15:41",
  },
  {
    id: 3,
    user: "Валентина Степановна",
    message:
      "Анфиса ,ну что тут можно сказать-химия конечно вся вредна для растений -а что делать?Ведь колорадский жук -это серьезная проблема и если уж добрался до овощей загубит все на корню.Я пыталась найти инфу про Регент, пишут вроде, что малая токсичность.Во всяком случае в инструкции ,есть указание ,что он безопасен для людей и животных.Это уже что- то.Лучше средства я пока не нашла для борьбы с жуком.",
    date: "сб, 17.05.2023 - 16:53",
  },
  {
    id: 4,
    user: "Лидия Ивановна",
    message:
      'Анфиса, у меня здесь для вас совет. Я уже несколько лет подряд  выращиваю синие баклажаны и нашла свой способ борьбы с колорадским жуком. Корни рассады необходимо замочить на пару часов в растворе препарата "Престиж". Правда, препарат не из дешевых, но эффект от применения стабильный.',
    date: "сб, 17.05.2023 - 19:36",
  },
  {
    id: 5,
    user: "Степан Васильевич",
    message:
      "Остаётся только использовать инсектициды, такие как Карате Зеон и Актара, не хочется конечно но это единственный метод, также растения которые вы обработаете этими препаратами становятся как бы невидимыми для жука, то есть теряют всякую привлекательность",
    date: "пн, 19.05.2023 - 06:19",
  },
  {
    id: 6,
    user: "Алексей Евгеньевич",
    message:
      "У меня есть совершенно простой способ борьбы с жуком. :-) Я сажу картофель на две, а то и три недели позже соседей! в первых числах июня, а то и ближе к 10 числу (Это Екатеринбург) Правда я сажаю картофель не в промышленных масштабах, так для себя по чуть-чуть на еду. Соток 5 не больше. Но всё равно. Соседи соберут всего жука, а у меня картошка ещё не взошла. И с урожаем у меня всё в порядке - органическое удобрение рулит по-любому. И кстати, обрывание цветоносов - тоже очень положительно сказывается на количестве урожая! Зачем мы у чеснока дудки обрываем? Правильно, нам цветение не нужно, нам нужны луковицы! Вот и с картофелем такая же штука! Все цветы - долой! Да и от возвратных заморозков, поздняя посадка картофеля очень хорошо помогает. У соседей все ростки побило морозом, а у меня их ещё и нет. :-)",
    date: "пн, 19.05.2023 - 20:26",
  },
];

const CurrentDiscussionPage = () => {
  const [currentAnswers, setCurrentAnswers] = useState(answers);
  const [userAnswer, setUserAnswer] = useState("");
  const isLogged = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const currentDate = new Date();
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedDay = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDate =
      dayOfWeek +
      ", " +
      formattedDay +
      "." +
      formattedMonth +
      "." +
      year +
      " - " +
      hours +
      ":" +
      minutes;

    setCurrentAnswers([
      ...currentAnswers,
      {
        id: currentAnswers.length,
        user: "Данил Панов",
        message: userAnswer,
        date: formattedDate,
      },
    ]);

    setUserAnswer("");
  };

  return (
    <Layout>
      <div className='flex flex-col items-center px-8'>
        <h3 className='text-green-400 font-bold text-4xl mb-8'>
          Как защитить свою ферму от кукурузного жука?
        </h3>
        <p className='md:w-3/5 w-full text-center text-xl mb-12'>
          Обсуждение интересующих вопросов фермерами и дачниками, решение
          вопросов и предложения по реализации товаров сельского хозяйства.
        </p>
        <div className='md:w-3/5 w-full mb-8'>
          <p className='text-3xl'>Тема:</p>
          <UserQuestion />
          <Button
            onClick={() => {
              if (!isLogged) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/login");
              } else {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }
            }}
          >
            Ответить
          </Button>
          <p className='text-3xl'>Обсуждение:</p>
          {currentAnswers.map((answer) => (
            <UserAnswer
              key={answer.id}
              user={answer.user}
              message={answer.message}
              date={answer.date}
            />
          ))}
          <p className='text-3xl mb-4'>Ваш ответ:</p>
          <Textarea
            className='w-full'
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => {
              if (isLogged && e.key === "Enter") {
                handleClick();
              }
              return;
            }}
          />
          {isLogged ? (
            <Button onClick={handleClick}>Отправить</Button>
          ) : (
            <p>Авторизуйтесь в аккаунт, чтобы ответить</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { CurrentDiscussionPage };
