import { useState } from 'react';
import FirstArticle from './componentss/FirstArticle';
import SecondArticle from './componentss/SecondArticle';
import './index.css';

function App() {
  const [submittedSelection, setSubmittedSelection] = useState<number | null>(null);

  const handleFirstArticleSubmit = (selection: number) => {
    setSubmittedSelection(selection);
  };

  return (
    <main className='w-[100vw] h-[100vh] bg-VeryDarkBlue items-center flex justify-center'>
      <FirstArticle onSubmit={handleFirstArticleSubmit} />
      <SecondArticle submittedSelection={submittedSelection} />
    </main>
  );
}

export default App;
