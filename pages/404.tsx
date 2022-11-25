import React from 'react';
import { Layout } from '../components';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Layout>
      <h1 style={styles.container}>Page Not Found</h1>
    </Layout>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
} as const;

export default NotFound;
