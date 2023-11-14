import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from '../Pages/Header'
import SummaryPage from '../Pages/Summary'
import DetailsPage from '../Pages/Details'

const AppRouter = () => {
  return (
    <Router>
        <Header />        
        <Routes>
            <Route path="/"  exact element={<SummaryPage />} />
            <Route path="/details"  element={<DetailsPage />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
