// reference: https://ui.toast.com/weekly-pick/ko_20200616
import type { NextPage } from 'next';
import {
  useRecoilValue,
  useRecoilState,
  selector,
} from 'recoil';
import { animalState, animalFilterState } from './atom';
import { ALL, ANIMALS } from '@/constants';

const filteredAnimalsState = selector({
  key: 'animalListState',
  get: ({ get }) => {
    const filter = get(animalFilterState);
    const animals = get(animalState);

    if (filter === ALL) return animals;

    return animals.filter((animal) => animal.type === filter);
  },
});

const AnimalButton = ({ title, onClick }) => (
  <button onClick={onClick}> {title} </button>
);

const icon = (type) => {
  if (type === ANIMALS.DOG) return '🐶';
  if (type === ANIMALS.CAT) return '🐱';
};

const Main: NextPage = () => {
  const [animalFilter, setAnimalFilter] = useRecoilState(animalFilterState);
  const animals = useRecoilValue(filteredAnimalsState);

  return (
    <>
      <div>
        <AnimalButton
          title='ALL'
          onClick={() => {
            setAnimalFilter(ALL);
          }}
        />
        <AnimalButton
          title='Dogs'
          onClick={() => {
            setAnimalFilter(ANIMALS.DOG);
          }}
        />
        <AnimalButton
          title='Cats'
          onClick={() => {
            setAnimalFilter(ANIMALS.CAT);
          }}
        />
      </div>
      <h1>Animals: {animalFilter}</h1>
      {animals.map((animal) => (
        <div key={animal.id}>
          {animal.name} {icon(animal.type)}
        </div>
      ))}
    </>
  );
};

export default Main;
