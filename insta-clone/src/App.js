import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LandingPage from './component/landing_page';
import PostView from './component/post-view/post_view'

// import Header from './component/header/header';
import Landingpage from './component/landing-page/landing_page';

import Post from './component/post-form/postform';


//Day2----------
// import { AddNewPost } from "./AddNewPost";
// import { ViewPost } from "./AddNewPost";
// import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// export const App = () => {

// }

function App() {
  return (
    <div className="wrapper">
      {/* <h1>Landing Page</h1> */}
      {/* <LandingPage/> */}
      {/* <Header/> */}
      {/* <PostView/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/post-view' element={<PostView/>} />
          <Route path='/postform' element={<Post/>} />

          {/* <Route path='/post' element={<AddNewPost/>} />
          <Route path='/view' element={<ViewPost/>} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
