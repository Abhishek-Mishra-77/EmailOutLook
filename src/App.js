import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import InboxMail from './components/InboxMail/InboxMail';
import SendMail from './components/SendMail/SendMail';
import Compose from './components/Compose/Compose';
import EmailDetail from './components/EmailDetail/EmailDetail';
import SendDetail from './components/SendMail/SendDetails';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import { auth } from './firebase';
import { userSignIn, signOut } from './store/authSlice';


function App() {

  const dispatch = useDispatch();
  const isMessageOpen = useSelector(state => state.mail.setComposeOpen);
  const user = useSelector(state => state.auth.authData);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userSignIn({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        }))
      }
      else {
        dispatch(signOut())
      }
    })
  }, [dispatch])

  


  return (
    <Router>
      {user ? <div className="App">
        <Header />
        <div className='app-body'>
          <SideBar />
          <Routes>
            <Route path='/' element={<InboxMail />} />
            <Route path='/inboxDetail' element={<EmailDetail />} />
            <Route path='/sendDetail' element={<SendDetail />} />
            <Route path='/send' element={<SendMail />} />
            <Route path='*' element={<InboxMail />} />
          </Routes>
        </div>
        {isMessageOpen && <Compose />}
      </div> :
        < Login />
      }
    </Router>
  );
}

export default App;
