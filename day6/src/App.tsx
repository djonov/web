import { useState } from 'react';
import './App.css';
import Field from './Field';

type TField = {
  value: number;
  isVisible: boolean;
  index: number;
}

const generateFields = (): number[] => {
  const pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
  
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  
  return pairs;
};

const FIELDS = generateFields();

function App() {
  const [openedFields, setOpenedFields] = useState<TField[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [visibleFields, setVisibleFields] = useState<boolean[]>(FIELDS.map(() => false));

  const handleFieldClick = (index: number) => {
    if (visibleFields[index] || openedFields.length >= 2) return;

    const updatedVisibleFields = [...visibleFields];
    updatedVisibleFields[index] = true;
    setVisibleFields(updatedVisibleFields);

    const newOpenedFields = [...openedFields, { value: FIELDS[index], index, isVisible: true }];
    setOpenedFields(newOpenedFields);

    if (newOpenedFields.length === 2) {
      const [first, second] = newOpenedFields;
      if (first.value === second.value) {
        setMatchedPairs(matchedPairs + 1);
        setOpenedFields([]);

        if (matchedPairs + 1 === FIELDS.length / 2) {
          setTimeout(() => alert("You are the winner!"), 300);
        }
      } else {
        setTimeout(() => {
          const resetVisibleFields = [...updatedVisibleFields];
          resetVisibleFields[first.index] = false;
          resetVisibleFields[second.index] = false;
          setVisibleFields(resetVisibleFields);
          setOpenedFields([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="background">
        <div className="center">
          {FIELDS.map((f, index) => (
            <Field
              key={index}
              fieldValue={f}
              isVisible={visibleFields[index]}
              onClick={() => handleFieldClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
