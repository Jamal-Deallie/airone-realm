import Layout from '@/components/Layout';
import Mission from '@/containers/Mission';
import Instructors from '@/containers/Instructors';
import Founder from '@/containers/Founder';
import Reviews from '@/containers/Reviews';
type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Layout>
      <div className='primary-bg'>
        <Mission />
        <Founder />
        <Instructors />
      </div>
    </Layout>
  );
}
