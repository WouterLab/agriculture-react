import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";

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
      <Parallax bgImage={img} bgImageAlt='stiling'>
        <div className='h-full w-full'></div>
        {/* <img
          src={img}
          ref={imageRef}
          alt='article-img'
          className={`h-96 w-72 object-cover ${isLoading ? "block" : "hidden"}`}
        /> */}
      </Parallax>
      <p className='text-xl line-clamp-2 ml-2'>{title}</p>
      <div
        className={`h-96 w-72 skeleton ${!isLoading ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default ArticleBlock;
