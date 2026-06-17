import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  'Завтраки',
  'Пиццы',
  'Роллы',
  'Лапша/Рис',
  'Супы',
  'Напитки',
  'Десерты',
  'Еще',
];
const activeIndex = 0;
export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {cats.map((item, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-200  text-[#9fdb27]',
          )}
          key={index}
          href=''
        >
          <button>{item}</button>
        </a>
      ))}
    </div>
  );
};
