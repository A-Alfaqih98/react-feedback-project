import { useState } from 'react';
import Header from './componenets/Header';
import FeedbackItems from './componenets/FeedbackItems';
import FeedbackStats from './componenets/FeedbackStats';
import AboutPage from './pages/AboutPage';

import { FeedbackProvider } from './context/FeedbackContext';
import Data from './data/feedbackData';
import Form from './componenets/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './componenets/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <FeedbackStats />
                  <FeedbackItems />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
