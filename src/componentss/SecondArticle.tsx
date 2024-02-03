import React from 'react';

interface Props {
  submittedSelection: number | null;
}

const SecondArticle: React.FC<Props> = ({ submittedSelection }) => {
  const totalButtons = 5;

  const renderMessage = () => {
    if (submittedSelection !== null) {
      return (
        <div className='bg-[#2b3644] my-5 shadow-2xl inline-block rounded-full w-[190px] h-[32px] p-1 font-bold text-[15px]'>
          <p className=' text-Orange '>You selected {submittedSelection} out of {totalButtons}.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>No selection made.</p>
        </div>
      );
    }
  };

  return (
    <article className={`flex bg-[#252d37] rounded-xl w-[338px] h-[360px] justify-center items-center text-center flex-col pt-[32px] pb-[32px] ${submittedSelection !== null ? '' : 'hidden'}`}>
    <div><img src="/illustration-thank-you.svg" alt="" /></div>
      {renderMessage()}
        <h1 className='font-bold text-[#fafafa] text-[25px]'>Thank you!</h1>
        <p className=' text-LightGrey text-[15px]'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </article>
  );
}

export default SecondArticle;
