import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticleBlock = ({
  title,
  img = "https://source.unsplash.com/random/200×200",
}) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoading(true);
    }
  }, []);

  return (
    <div
      className='w-72 cursor-pointer'
      onClick={() => navigate("/articles/1")}
    >
      <img
        ref={imageRef}
        src={img}
        alt='article-img'
        className={`h-96 w-72 object-cover ${isLoading ? "block" : "hidden"}`}
      />
      <p className='text-xl text-black line-clamp-3 px-2 h-18 bg-white w-full pb-1'>
        {title}
      </p>
      <div
        className={`h-96 w-72 skeleton ${!isLoading ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default ArticleBlock;
