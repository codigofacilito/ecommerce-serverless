import React, { Fragment } from 'react';
import SEO from './SEO';
import NavConnected from './NavConnected';

export default (props) => {
  return(
    <Fragment>
      <SEO />
      <NavConnected />
      <main className="max-w-4xl mx-auto">{ props.children }</main>
    </Fragment>    
  )
}