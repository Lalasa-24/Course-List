// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/list" element={<CourseList />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
