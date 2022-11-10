import { useEffect, useState } from "react";

const HomeImage = () => {
  const handleMouseMove = (e) => {
    const halfWidth = window.screen.availWidth / 2;
    const halfHeight = window.screen.availHeight / 2;
    const calcX = (e.x - halfWidth) / 50;
    const calcY = (e.y - halfHeight) / 50;
    const newStyleImg = {
      transform: `rotateY(${calcX}deg) rotateX(${calcY}deg)`,
      zIndex: -1,
      filter: `drop-shadow(${calcX}px ${calcY}px 15px rgba(0,0,0,0.5))`,
    };
    const newStyleText = {
      transform: `rotateY(${calcX}deg) rotateX(${calcY}deg)`,
      zIndex: 0,
      perspective: "100px",
      WebkitTextStroke: "2px #5a9f0e",
      filter: `drop-shadow(${calcX}px ${calcY}px 5px rgba(0,0,0,0.5))`
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
    <>
      <img
        style={imageStyle}
        className='h-[400px] md:h-[500px] xl:h-[600px]'
        src='HomePage/home-image.png'
        alt='plants'
      />
      <p
        style={textStyle}
        className='absolute text-7xl uppercase font-black text-white top-1/3'>
        Agriculture
      </p>
    </>
  );
};

export default HomeImage;
