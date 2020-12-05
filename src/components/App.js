import React from 'react';
import SideNav from './Sidenav';
import Header from './Header';
import styled from 'styled-components'

import GlobalStyle from '../globalStyles';
import Routes from '../routes';

function App() {
  console.log('APP rendering!')
  const routes = Routes();

  const StyledLayout = styled.div`
    display: flex;
    flex-wrap:wrap;
    height: 100%;
    background-color: #f4f5f9;
  `;  

  return (
    <>
      <GlobalStyle/>
      <StyledLayout>
        <Header />
        <SideNav />
        {routes}
      </StyledLayout>
    </>
  );
}

export default App