import React from 'react';
import { Button } from '@material-ui/core';

const PageNotFound = (props) => {
  const { history } = props;
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <Button
        size="large"
        onClick={() => history.push("/app")}
      >
      Return to Application  
      </Button>
    </div>
  );
}

export default PageNotFound;