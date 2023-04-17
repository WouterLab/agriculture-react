import { useEffect, useState } from "react";

const HomeImage = () => {
  const handleMouseMove = (e) => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.screen.availHeight / 2;
    const calcX = ((e.x - halfWidth) * -1) / 50;
    const calcY = ((e.y - halfHeight) * -1) / 50;
    const newStyleImg = {
      transform: `rotateY(${calcX}deg) rotateX(${calcY}deg) scaleX(-1)`,
      zIndex: -1,
      filter: `drop-shadow(${calcX}px ${calcY}px 15px rgba(0,0,0,0.5))`,
    };
    const newStyleText = {
      transform: `rotateY(${calcX}deg) rotateX(${calcY}deg)`,
      filter: `drop-shadow(${calcX - 10}px ${
        calcY + 5
      }px 10px rgba(0,0,0,0.5))`,
    };
    setImageStyle(newStyleImg);
    setTextStyle(newStyleText);
  };
  const [imageStyle, setImageStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className='relative'>
      <img
        style={imageStyle}
        className='w-full rounded-lg max-w-[600px]'
        src='https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80'
        alt='plants'
      />
      <p
        style={textStyle}
        className='absolute top-1/3 w-full text-5xl inline-block uppercase font-black text-center text-white z-1'
      >
        Agriculture
      </p>
    </div>
  );
};

export default HomeImage;
