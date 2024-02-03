import React, { useState } from 'react';

interface Props {
  onSubmit: (selection: number) => void;
}

const FirstArticle: React.FC<Props> = ({ onSubmit }) => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleButtonClick = (articleNumber: number) => {
    setSelectedArticle(articleNumber);
  };

  const handleSubmit = () => {
    if (selectedArticle !== null) {
      setSubmitted(true); // Marcar como enviado
      onSubmit(selectedArticle);
    }
  };

  return (
    <article className={`bg-[#252d37] rounded-xl w-[338px] h-[360px] flex justify-center flex-col pt-[32px] pb-[32px] ${submitted ? 'hidden' : ''}`}>
      <div className='relative left-6 bottom-2 bg-[#2b3644] rounded-full w-10 h-10 flex items-center justify-center mb-[8px]'>
        <img className='w-3 h-3' src='icon-star.svg' alt='star' />
      </div>
      <h1 className='text-[#FAFAFA] font-[overpass] font-bold text-[25px] ml-6'>How did we do?</h1>
      <p className='text-LightGrey text-[15px] mx-[23px] mt-3'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className='flex flex-grow gap-6 mx-6 mt-5'>
        {[1, 2, 3, 4, 5].map(number => (
          <button key={number} onClick={() => handleButtonClick(number)}>{number}</button>
        ))}
      </ul>
      <button className='font-bold text-[#FAFAFA] bg-Orange rounded-[200px] h-[45px] w-[290px] self-center focus:bg-[#FAFAFA] focus:text-Orange hover:bg-[#FAFAFA] hover:text-Orange' onClick={handleSubmit}>S U B M I T</button>
    </article>
  );
}

export default FirstArticle;
