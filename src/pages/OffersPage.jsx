import { CoopBlock } from "../components/CoopBlock";
import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { Input } from "../shared/Input";
import { useContext, useEffect, useState } from "react";
import { CityFilter } from "../components/CityFilter";
import { Button } from "../shared/Button";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context";

const offers = [
  {
    id: 1,
    title: "Поставщик молочной продукции",
    desc: "Молочная продукция и изделия на основе молока",
    price: 100,
    phone: "+7 888 08 08",
    region: "krasnoyarsk",
  },
  {
    id: 2,
    title: 'Фермерское хозяйство "Зеленый луг"',
    desc: "Свежие овощи и зелень",
    price: 150,
    phone: "+7 999 11 22",
    region: "altai",
  },
  {
    id: 3,
    title: 'Птицефабрика "Золотое яйцо"',
    desc: "Куриное мясо и яйца",
    price: 80,
    phone: "+7 777 99 88",
    region: "krasnodar",
  },
  {
    id: 4,
    title: "Поставщик органических овощей",
    desc: "Органические овощи без использования химических удобрений",
    price: 120,
    phone: "+7 555 44 33",
    region: "msk",
  },
  {
    id: 5,
    title: 'Рыболовное хозяйство "Синий водоем"',
    desc: "Свежая рыба и морепродукты",
    price: 200,
    phone: "+7 123 45 67",
    region: "spb",
  },
  {
    id: 6,
    title: 'Пчеловодческое хозяйство "Медовый улей"',
    desc: "Натуральный мед и пчелопродукты",
    price: 90,
    phone: "+7 987 65 43",
    region: "tatarstan",
  },
  {
    id: 7,
    title: 'Ферма "Солнечное поле"',
    desc: "Свежие фрукты и ягоды",
    price: 160,
    phone: "+7 222 33 44",
    region: "krasnoyarsk",
  },
  {
    id: 8,
    title: 'Мясокомбинат "Золотая говядина"',
    desc: "Говядина высокого качества",
    price: 180,
    phone: "+7 777 88 99",
    region: "hakasiya",
  },
  {
    id: 9,
    title: "Поставщик органического меда",
    desc: "Органический мед с цветочных лугов",
    price: 100,
    phone: "+7 555 55 55",
    region: "altai",
  },
  {
    id: 10,
    title: 'Фермерское хозяйство "Здоровый урожай"',
    desc: "Свежие овощи и фрукты без ГМО",
    price: 120,
    phone: "+7 999 99 99",
    region: "krasnodar",
  },
  {
    id: 11,
    title: "Поставщик свежего козьего молока",
    desc: "Козье молоко и молочные продукты",
    price: 80,
    phone: "+7 123 45 67",
    region: "msk",
  },
  {
    id: 12,
    title: 'Птицефабрика "Золотой перепел"',
    desc: "Перепелиное мясо и яйца",
    price: 150,
    phone: "+7 987 65 43",
    region: "spb",
  },
  {
    id: 13,
    title: 'Фермерское хозяйство "Зеленый сад"',
    desc: "Свежие овощи и зелень",
    price: 100,
    phone: "+7 777 88 99",
    region: "tatarstan",
  },
  {
    id: 14,
    title: 'Рыболовное хозяйство "Пресноводный рай"',
    desc: "Свежая пресноводная рыба",
    price: 200,
    phone: "+7 555 44 33",
    region: "krasnoyarsk",
  },
  {
    id: 15,
    title: 'Пчеловодческое хозяйство "Медовая поляна"',
    desc: "Натуральный мед и пчелопродукты",
    price: 90,
    phone: "+7 999 11 22",
    region: "altai",
  },
  {
    id: 16,
    title: 'Ферма "Золотая ягода"',
    desc: "Свежие ягоды и фрукты",
    price: 160,
    phone: "+7 888 08 08",
    region: "krasnodar",
  },
  {
    id: 17,
    title: 'Мясокомбинат "Сочная свинина"',
    desc: "Свинина высокого качества",
    price: 180,
    phone: "+7 123 45 67",
    region: "msk",
  },
  {
    id: 18,
    title: "Поставщик органических овощей и фруктов",
    desc: "Органические овощи и фрукты без химии",
    price: 120,
    phone: "+7 987 65 43",
    region: "spb",
  },
  {
    id: 19,
    title: 'Фермерское хозяйство "Здоровое село"',
    desc: "Свежие овощи и зелень",
    price: 100,
    phone: "+7 555 55 55",
    region: "tatarstan",
  },
  {
    id: 20,
    title: "Поставщик козьего молока и сыров",
    desc: "Козье молоко и разнообразные сыры",
    price: 80,
    phone: "+7 999 99 99",
    region: "krasnoyarsk",
  },
  {
    id: 21,
    title: 'Птицефабрика "Золотая утка"',
    desc: "Утиное мясо и яйца",
    price: 150,
    phone: "+7 888 08 08",
    region: "altai",
  },
  {
    id: 22,
    title: 'Фермерское хозяйство "Зеленый огород"',
    desc: "Свежие овощи и зелень",
    price: 100,
    phone: "+7 999 11 22",
    region: "krasnodar",
  },
  {
    id: 23,
    title: "Поставщик органических яиц",
    desc: "Органические яйца от кур на свободном выгуле",
    price: 120,
    phone: "+7 777 99 88",
    region: "msk",
  },
  {
    id: 24,
    title: 'Рыболовное хозяйство "Морской бриз"',
    desc: "Свежая морская рыба и морепродукты",
    price: 200,
    phone: "+7 555 44 33",
    region: "spb",
  },
  {
    id: 25,
    title: 'Пчеловодческое хозяйство "Медовый рай"',
    desc: "Натуральный мед и пчелопродукты",
    price: 90,
    phone: "+7 987 65 43",
    region: "tatarstan",
  },
  {
    id: 26,
    title: 'Ферма "Золотое поле"',
    desc: "Свежие фрукты и овощи",
    price: 160,
    phone: "+7 222 33 44",
    region: "krasnoyarsk",
  },
  {
    id: 27,
    title: 'Мясокомбинат "Свежая баранина"',
    desc: "Баранина высокого качества",
    price: 180,
    phone: "+7 777 88 99",
    region: "hakasiya",
  },
  {
    id: 28,
    title: "Поставщик органического меда и пчелопродуктов",
    desc: "Органический мед и разнообразные пчелопродукты",
    price: 100,
    phone: "+7 555 55 55",
    region: "altai",
  },
  {
    id: 29,
    title: 'Фермерское хозяйство "Зеленый сад"',
    desc: "Свежие овощи и фрукты без ГМО",
    price: 120,
    phone: "+7 999 99 99",
    region: "krasnodar",
  },
  {
    id: 30,
    title: "Поставщик свежего козьего молока и молочных продуктов",
    desc: "Козье молоко, йогурты и сыры",
    price: 80,
    phone: "+7 123 45 67",
    region: "msk",
  },
];

const OffersPage = () => {
  const regionInitial = {
    msk: true,
    spb: true,
    krasnoyarsk: true,
    altai: true,
    tatarstan: true,
    krasnodar: true,
    hakasiya: true,
  };
  const [searchOffer, setSearchOffer] = useState("");
  const [viewOffers, setViewOffers] = useState(offers);
  const [regionFilter, setRegionFilter] = useState(regionInitial);
  const [newOffer, setNewOffer] = useState({
    id: viewOffers.length,
    title: "",
    desc: "",
    price: 0,
    phone: "",
    region: "msk",
  });
  const [newOfferModal, setNewOfferModal] = useState(false);
  const [newOfferModalError, setNewOfferModalError] = useState(false);
  const isLogged = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    setViewOffers(
      offers.filter(
        (offer) =>
          offer.title.toLowerCase().indexOf(searchOffer.toLowerCase()) >= 0,
      ),
    );
  }, [searchOffer]);

  useEffect(() => {
    setViewOffers(
      offers.filter((vacancy) => regionFilter[vacancy.region] === true),
    );
  }, [regionFilter]);

  return (
    <Layout>
      <div className='flex flex-col items-center px-2 sm:px-16'>
        <div className='flex flex-col md:flex-row items-center space-x-4 mb-8'>
          <PageTitle title='ПРЕДЛОЖЕНИЯ' />
        </div>
        <div className='flex flex-col md:flex-row justify-center w-full gap-10'>
          <aside>
            <Input
              type='text'
              placeholder='Поиск...'
              value={searchOffer}
              onChange={(e) => setSearchOffer(e.target.value)}
            />
            <div className='border rounded-md px-2 py-4 mb-10'>
              <p className='text-2xl font-bold'>Фильтры</p>
              <CityFilter
                regionFilter={regionFilter}
                setRegionFilter={setRegionFilter}
                regionInitial={regionInitial}
              />
            </div>
            <Button
              onClick={() => {
                if (isLogged) {
                  setNewOfferModal(true);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/login");
                }
                setNewOfferModal(true);
              }}
            >
              + Предложение
            </Button>
          </aside>
          <div className='w-full md:w-3/5'>
            {viewOffers.map((offer) => (
              <CoopBlock
                key={offer.id}
                title={offer.title}
                desc={offer.desc}
                region={offer.region}
                phone={offer.phone}
                price={offer.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        message='Новое предложение'
        isOpen={newOfferModal}
        offer
        onSend={() => {
          if (
            newOffer.title === "" ||
            newOffer.desc === "" ||
            newOffer.phone === "" ||
            newOffer.price === ""
          )
            setNewOfferModalError(true);
          else {
            setNewOfferModal(false);
            setNewOffer({
              id: viewOffers.length,
              title: "",
              desc: "",
              price: 0,
              phone: "",
              region: "msk",
            });
          }
        }}
        onClose={() => {
          setNewOfferModalError(false);
          setNewOfferModal(false);
        }}
        error={newOfferModalError}
      >
        <Input
          placeholder='Заголовок'
          value={newOffer.title}
          onChange={(e) => {
            setNewOfferModalError(false);
            setNewOffer({ ...newOffer, title: e.target.value });
          }}
        />
        <Input
          placeholder='Описание'
          value={newOffer.desc}
          onChange={(e) => {
            setNewOfferModalError(false);
            setNewOffer({ ...newOffer, desc: e.target.value });
          }}
        />
        <Input
          placeholder='Цена'
          value={newOffer.price}
          onChange={(e) => {
            setNewOfferModalError(false);
            setNewOffer({ ...newOffer, price: e.target.value });
          }}
          type='number'
        />
        <Input
          placeholder='Телефон'
          value={newOffer.phone}
          onChange={(e) => {
            setNewOfferModalError(false);
            setNewOffer({ ...newOffer, phone: e.target.value });
          }}
        />
        <Button
          onClick={() => {
            if (
              newOffer.title === "" ||
              newOffer.desc === "" ||
              newOffer.phone === "" ||
              newOffer.price === ""
            )
              setNewOfferModalError(true);
            else {
              setNewOfferModal(false);
              setViewOffers([...viewOffers, newOffer]);
              setNewOffer({
                id: viewOffers.length,
                title: "",
                desc: "",
                price: 0,
                phone: "",
                region: "msk",
              });
            }
          }}
        >
          Опубликовать
        </Button>
      </Modal>
    </Layout>
  );
};

export { OffersPage };
