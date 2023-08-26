import InstructorCard from '@/components/InstructorCard';
import { instructors } from '@/data';
import styles from '@/styles/containers/Instructors.module.scss';

type Props = {};

export default function Instructors({}: Props) {
  return (
    <div className='py-lg-120 py-sm-64'>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='title-lg tac'>Meet Our Instructors</h1>
        </div>
      </div>
      <div className='main-cont mt-lg-96 mt-sm-64'>
        <div className={styles['grid']}>
          {instructors.map(({ id, ...props }) => {
            return <InstructorCard {...props} key={id}/>;
          })}
        </div>
      </div>
    </div>
  );
}
