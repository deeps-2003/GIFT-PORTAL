import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import loading from "./assets/images/loading.gif";

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust the height as needed
};

const loadingImageStyle = {
  width: '50px', // Adjust the width as needed
  height: '50px', // Adjust the height as needed
};

const LazySignin = lazy(() => import('./components/login'));
const LazyRegister = lazy(() => import('./components/signup'));
const LazyHome = lazy(() => import('./components/Home'));
const LazyUserProfile = lazy(() => import('./components/UserProfile'));
const LazyBirthday = lazy(() => import('./components/Birthday'));
const LazyAnniversary = lazy(() => import('./components/Anniversary'));
const LazyCorporate = lazy(() => import('./components/Corporate'));
const LazyPersonalised = lazy(() => import('./components/Personalised'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyReview = lazy(() => import('./components/Review'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyCombo = lazy(() => import('./components/Combo'));
const LazyFooter = lazy(() => import('./components/Footer'));
const LazyAHome = lazy(() => import('./components/AHome'));
const LazyABirthday = lazy(() => import('./components/ABirthday'));
const LazyAAniversary = lazy(() => import('./components/AAniversary'));
const LazyACorporate = lazy(() => import('./components/ACorporate'));
const LazyAPersonalised = lazy(() => import('./components/APersonalised'));
const LazyACombo = lazy(() => import('./components/ACombo'));
const LazyBirthdayInfo1 = lazy(() => import('./components/BirthdayInfo1'));
const LazyABirthdayInfo1 = lazy(() => import('./components/ABirthdayInfo1'));
const LazyPay = lazy(() => import('./components/Pay'));

function App() {
  return (
    
    <Router>
      <Suspense fallback={
        <div style={loadingStyle}>
          <img style={loadingImageStyle} src={loading} alt="Loading..." />
        </div>
      }>
        <Routes>
          <Route path="/" element={<LazySignin />} />
          <Route path="/register" element={<LazyRegister />} />
          <Route path="/home" element={<LazyHome />} />
          <Route path="/profile" element={<LazyUserProfile />} />
          <Route path="/birthday" element={<LazyBirthday />} />
          <Route path="/anniversary" element={<LazyAnniversary />} />
          <Route path="/corporate" element={<LazyCorporate />} />
          <Route path="/personalised" element={<LazyPersonalised />} />
          <Route path="/combo" element={<LazyCombo />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/review" element={<LazyReview />} />
          <Route path="/contact" element={<LazyContact />} />
          <Route path="/footer" element={<LazyFooter />} />
          <Route path="/ahome" element={<LazyAHome />} />
          <Route path="/abirthday" element={<LazyABirthday />} />
          <Route path="/aaniversary" element={<LazyAAniversary />} />
          <Route path="/acorporate" element={<LazyACorporate />} />
          <Route path="/apersonalised" element={<LazyAPersonalised />} />
          <Route path="/acombo" element={<LazyACombo />} />
          <Route path="/birthinfo" element={<LazyBirthdayInfo1 />} />
          <Route path="/pay" element={<LazyPay/>}/>
          <Route path="/orders" element={<LazyABirthdayInfo1/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;