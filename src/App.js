import React from 'react';
import './App.css';
/* import LoginPage from './pages/LoginPage'; */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import QuestionForm1 from './pages/QuestionForm1';
import QuestionForm2 from './pages/QuestionForm2';
import QuestionForm3 from './pages/QuestionForm3';
import QuestionForm4 from './pages/QuestionForm4';
import QuestionForm5 from './pages/QuestionForm5';
import QuestionForm6 from './pages/QuestionForm6';
import QuestionForm7 from './pages/QuestionForm7';
import QuestionForm8 from './pages/QuestionForm8';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import ScheduleCall from './pages/ScheduleCall';
import UploadResume from './pages/UploadResume';
import SOPPage from './pages/SOPPage';
import ImmigrationServices from './pages/ImmigrationServices'
import QuickDocCheck from './pages/QuickDocCheck'
import FundingFinances from './pages/FundingFinances'
import RecommendedMentors from './pages/RecommendedMentors'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path='/'>
            <LoginPage></LoginPage>
          </Route> */}

          <Route exact path='/'>
            <RegisterPage></RegisterPage>
          </Route>

          <Route path='/ForgotPasswordPage'>
            <ForgotPasswordPage></ForgotPasswordPage>
          </Route>

          <Route path='/QuestionForm1'>
            <QuestionForm1></QuestionForm1>
          </Route>

          <Route path='/QuestionForm2'>
            <QuestionForm2></QuestionForm2>
          </Route>

          <Route path='/QuestionForm3'>
            <QuestionForm3></QuestionForm3>
          </Route>

          <Route path='/QuestionForm4'>
            <QuestionForm4></QuestionForm4>
          </Route>

          <Route path='/QuestionForm5'>
            <QuestionForm5></QuestionForm5>
          </Route>

          <Route path='/QuestionForm6'>
            <QuestionForm6></QuestionForm6>
          </Route>

          <Route path='/QuestionForm7'>
            <QuestionForm7></QuestionForm7>
          </Route>

          <Route path='/QuestionForm8'>
            <QuestionForm8></QuestionForm8>
          </Route>

          <Route path='/Dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/Calendar'>
            <Calendar></Calendar>
          </Route>

          <Route path='/ScheduleCall'>
            <ScheduleCall></ScheduleCall>
          </Route>

          <Route path='/UploadResume'>
            <UploadResume></UploadResume>
          </Route>

          <Route path='/SOPPage'>
            <SOPPage></SOPPage>
          </Route>

          <Route path='/ImmigrationServices'>
            <ImmigrationServices></ImmigrationServices>
          </Route>

          <Route path='/QuickDocCheck'>
            <QuickDocCheck></QuickDocCheck>
          </Route>

          <Route path='/FundingFinances'>
            <FundingFinances></FundingFinances>
          </Route>

          <Route path='/RecommendedMentors'>
            <RecommendedMentors></RecommendedMentors>
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
