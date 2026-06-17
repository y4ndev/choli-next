import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { ProductCard } from '@/components/shared/product-card';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='pb-14'>
        <div className='flex gap-15'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductCard
                id={0}
                name={'Танака темпура'}
                price={815}
                imageUrl={
                  'https://cdn-ru5.foodpicasso.com/assets/7b/21/9e/43/7b219e4394970ab184a356b403803024---jpeg_420x420:whitepadding15_94310_convert.webp?v2'
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
