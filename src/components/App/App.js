import {Routes, Route} from 'react-router-dom';

import AppStyle from './App.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Home from '../../routes/Home/Home';
import Error from '../../routes/Error/Error';

function App() {
  return (
    <AppStyle>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      <Footer />
    </AppStyle>
  );
}

export default App;
