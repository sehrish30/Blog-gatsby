import React from 'react';
import { ThemeProvider } from 'styled-components';
//Components
import Header from 'components/Header';
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';
//hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery';


const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  console.log(data.title);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  );
};
export default Layout;
