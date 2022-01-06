import { atom } from 'recoil';
import { ALL, ANIMALS } from '@/constants';

export const animalState = atom({
  key: 'animalState',
  default: [
    {
      id: 1,
      name: 'Rexy',
      type: ANIMALS.DOG,
    },
    {
      id: 2,
      name: 'Oscar',
      type: ANIMALS.CAT,
    },
    {
      id: 3,
      name: 'Tom',
      type: ANIMALS.CAT,
    },
  ],
});

export const animalFilterState = atom({
  key: 'animalFilterState',
  default: ALL,
});
