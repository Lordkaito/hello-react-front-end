import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import configureStore from './Redux/configureStore';
import Greeting from './components/greeting';

const store = configureStore();

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  </>
);

export default App;
