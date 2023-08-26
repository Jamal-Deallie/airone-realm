import ServiceCategory from '@/components/ServiceCategory';
import { categories } from '@/data';
type Props = {};

export default function Categories({}: Props) {
  return (
    <>
      <div className='sections'>
        <ServiceCategory {...categories[0]} />
      </div>
      <div className='sections'>
        <ServiceCategory {...categories[1]} reverse />
      </div>
      <div className='sections'>
        <ServiceCategory {...categories[2]} />
      </div>
      <div className='sections'>
        <ServiceCategory {...categories[3]} reverse />
      </div>
    </>
  );
}
