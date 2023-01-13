import { useEffect, useRef, useState } from "react";

const ArticleBlock = ({
  title,
  img = "https://source.unsplash.com/random/200×200",
}) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoading(true);
    }
  }, []);

  return (
    <div className='w-72'>
      <img
        ref={imageRef}
        src={img}
        alt='article-img'
        className={`h-96 w-72 object-cover ${isLoading ? "block" : "hidden"}`}
      />
      <p className='text-xl text-black line-clamp-3 px-2 h-18 bg-white w-full border-b-2 pb-1'>
        {title}
      </p>
      <div
        className={`h-96 w-72 skeleton ${!isLoading ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default ArticleBlock;
