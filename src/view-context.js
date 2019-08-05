import React from 'react';

export const views = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
};

export const ViewContext = React.createContext(views.MOBILE);
