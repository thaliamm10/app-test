import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';


const App: FC = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frm" element={<Form />} />
        </Routes>
    </Router>
  );
};

export default App;
