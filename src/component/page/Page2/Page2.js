import React from 'react';

import classes from './Page2.module.css';

const Page2 = ({ data }) => {
  return (
    <React.Fragment>
      {data !== null && data ? (
        <React.Fragment>
          <span className={classes.pageTitle}>{data.title}</span>
          <div className={classes.container}>
            <div className={classes.page2_Content}>{data.Content}</div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Page2;
