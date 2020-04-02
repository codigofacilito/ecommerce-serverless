import React from 'react';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { graphql } from 'gatsby';

export default (props) => {
  const products = props.data.allStripeProduct.nodes;
  return(
    <Layout>
      <Products products={products} />
    </Layout>
  )
};

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        name
        slug
      }
    }
  }
`;