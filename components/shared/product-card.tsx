import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui';
import { Title } from './title';

interface Props {
  className?: string;
  imageUrl: string;
  id: number;
  price: number;
  name: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  imageUrl,
  id,
  price,
  name,
}) => {
  return (
    <div className={className}>
      <Link href={`/product1/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>
        <Title text={name} size={'sm'} className='mb-1 mt-3 font-bold' />
        <p className='text-sm text-gray-400'>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус , томаты
          альфредо, чеснок
        </p>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            от<b>{price} Р</b>
          </span>
          <Button variant={'secondary'} className='text-base font-bold'>
            <Plus size={20} className=' mr-1' />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
