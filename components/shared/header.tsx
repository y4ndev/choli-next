import { ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui';
import { Container } from './container';

interface Props {
  classname?: string;
}

export const Header: React.FC<Props> = ({ classname }) => {
  return (
    <header className={classname}>
      <Container className='flex items-center justify-between py-8'>
        {/*Левая часть */}
        <div>
          <Image
            loading='eager'
            src={'/logo.png'}
            alt='logo'
            width={174}
            height={60}
          />
        </div>
        {/*Правая часть */}
        <div className='flex items-center gap-3'>
          <Button variant={'outline'}>
            <User size={'26'} />
            Войти
          </Button>
          <div>
            <Button variant={'outline'}>
              <ShoppingCart size={'26'} />
              <b>0 р.</b>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
