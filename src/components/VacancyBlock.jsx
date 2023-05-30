import { useContext, useState } from "react";
import VacancyIcon from "../assets/vacancy.png";
import { Modal } from "./Modal";
import { Input } from "../shared/Input";
import { Textarea } from "../shared/Textarea";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context";

const VacancyBlock = ({ title, desc }) => {
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
    <div className='bg-gray-100 mb-4 px-4 py-4 rounded-md'>
      <div className='flex items-center mb-6 sm:mb-2'>
        <img src={VacancyIcon} className='w-12 mr-2' alt='vacancy' />
        <p className='font-bold text-2xl cursor-pointer'>{title}</p>
      </div>
      <p className='mb-4'>{desc}</p>
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
        Откликнуться
      </button>
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

export { VacancyBlock };
