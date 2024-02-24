import  { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import loading from "./assets/images/loading.gif";
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


function App() {
  return (
    <Router>
        <Suspense fallback={<img src={loading} alt="Loading..."/>}>
          <Routes>
            <Route path="/" element={<LazySignin />} />
            <Route path="/register" element={<LazyRegister />} />
            <Route path="/home" element={<LazyHome />} />
            <Route path="/profile" element={<LazyUserProfile />} />
            <Route path="/birthday" element={<LazyBirthday />} />
            <Route path="/anniversary" element={<LazyAnniversary />} />
            <Route path="/corporate" element={<LazyCorporate />} />
            <Route path="/personalised" element={<LazyPersonalised />} />
            <Route path="/about" element={<LazyAbout />} />
            <Route path="/review" element={<LazyReview />} />
            <Route path="/contact" element={<LazyContact />} />
            <Route path="/combo" element={<LazyCombo />} />
            <Route path="/footer" element={<LazyFooter />} />

          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
