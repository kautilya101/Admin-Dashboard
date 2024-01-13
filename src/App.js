import React from 'react';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import {Route, Routes} from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import { Bar, Geography,Calendar,Form, Contacts, Dashboard, FAQ, Invoices, Line, Pie, Team } from './scenes/index';
import Sidebar from './scenes/global/Sidebar';
import StickyBox from 'react-sticky-box';




function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">  
    {/* <StickyBox> */}
      <Sidebar/>
    {/* </StickyBox> */}
      <main className='content'>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/invoices' element={<Invoices/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/bar' element={<Bar/>} />
          <Route path='/line' element={<Line/>} />
          <Route path='/pie' element={<Pie/>} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/geography' element={<Geography/>} />
          <Route path='/calendar' element={<Calendar/>} />
        </Routes>
      </main>
    </div>

    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
