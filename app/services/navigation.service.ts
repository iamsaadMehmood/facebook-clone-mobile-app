import * as React from 'react';

export const isMountedRef: any = React.createRef();
export const navigationRef: any = React.createRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const navigatePush = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.push(name, params);
  }
};

export const goBack = () => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};
