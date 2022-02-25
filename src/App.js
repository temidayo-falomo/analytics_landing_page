
import React from 'react';
import Footer from './components/footer/Footer';
import MiddleSection from './components/middle-section/MiddleSection';
import TopPart from './components/top-part/TopPart';
import GlobalStyles from './Global';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TopPart />
      <MiddleSection />
      <Footer />
    </div>
  );
}

export default App;
