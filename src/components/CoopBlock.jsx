import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Modal } from "./Modal";
import { useContext, useState } from "react";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/Textarea";
import { LoginContext } from "../context";
import { useNavigate } from "react-router-dom";

const CoopBlock = ({ title, desc, price, phone, region }) => {
  const formInitial = {
    name: "",
    email: "",
    phone: "",
    question: "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(formInitial);
  const [formError, setFormError] = useState(false);
  const isLogged = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className='bg-gray-100 mb-4 px-2 py-4 rounded-md'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-2 items-center'>
          <BriefcaseIcon className='w-28' />
          <button
            onClick={() => {
              if (isLogged) {
                setIsModalOpen(true);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/login");
              }
            }}
            className='rounded-2xl px-4 py-2 font-semibold bg-green-400 hover:text-white transition-all duration-300'
          >
            Связаться
          </button>
        </div>
        <div className='py-4'>
          <p className='font-bold text-2xl mb-4'>{title}</p>
          <p className='line-clamp-3 text-xl font-semibold'>{desc}</p>
          <p className='line-clamp-3 text-xl font-semibold'>
            Цена за ед. товара: <span className='font-bold'>{price} ₽</span>
          </p>
          {isLogged ? (
            <p className='text-neutral-500 line-clamp-3 text-xl font-semibold'>
              Телефон для связи: <span className='font-bold'>{phone}</span>
            </p>
          ) : (
            <p className='text-neutral-500 line-clamp-3 text-xl font-semibold'>
              Телефон виден только авторизованным пользователям
            </p>
          )}
        </div>
      </div>
      <Modal
        message='Отправка заявки'
        isOpen={isModalOpen}
        onSend={() => {
          if (
            formData.name === "" ||
            formData.email === "" ||
            formData.phone === "" ||
            formData.question === ""
          )
            setFormError(true);
          else {
            setIsModalOpen(false);
            setFormData(formInitial);
          }
        }}
        onClose={() => {
          setFormError(false);
          setIsModalOpen(false);
        }}
        error={formError}
      >
        <Input
          placeholder='Имя'
          value={formData.name}
          onChange={(e) => {
            setFormError(false);
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <Input
          placeholder='Эл. Почта'
          value={formData.email}
          onChange={(e) => {
            setFormError(false);
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <Input
          placeholder='Телефон'
          value={formData.phone}
          onChange={(e) => {
            setFormError(false);
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
        <Textarea
          placeholder='Ваш вопрос...'
          value={formData.question}
          onChange={(e) => {
            setFormError(false);
            setFormData({ ...formData, question: e.target.value });
          }}
        />
      </Modal>
    </div>
  );
};

export { CoopBlock };
