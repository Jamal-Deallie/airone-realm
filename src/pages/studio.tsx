import React from 'react';
import Layout from '@/components/Layout';
import HorizontalCarousel from '@/components/HorizontalCarousel';
type Props = {};

export default function studio({}: Props) {
  return (
    <Layout>
      <HorizontalCarousel />
    </Layout>
  );
}
