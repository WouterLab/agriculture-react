import { createPortal } from "react-dom";
import { Button } from "../ui/Button";
import CloseIcon from "../assets/close.png";

export const Modal = ({
  message,
  isOpen,
  onClose,
  onSend,
  children,
  error,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className='w-screen h-screen fixed flex justify-center items-center top-0 left-0 bg-[#00000050] z-[1000]'>
      <div className='relative w-full max-w-[800px] h-[600px] bg-white md:p-12 rounded-2xl flex justify-center items-center flex-col gap-4 text-2xl text-center'>
        <p>{message}</p>
        {children}
        <Button onClick={onSend}>Отправить</Button>
        {error && <p className='text-red-500'>Проверьте данные</p>}
        <img
          src={CloseIcon}
          alt='close'
          onClick={onClose}
          className='absolute top-2 right-4 text-md cursor-pointer w-8 h-8'
        />
      </div>
    </div>,
    document.body,
  );
};
