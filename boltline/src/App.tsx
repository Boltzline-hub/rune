import { Routes, Route } from 'react-router-dom';
import './globals.css';
import Signinform from './_auth/forms/Signinform';
import Signupform from './_auth/forms/Signupform';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main>
      <Routes>
        {/*Public routes */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<Signinform/>}/>
          <Route path='/sign-up' element={<Signupform/>}/>          
        </Route>

        {/*Private routes */}
        <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>          
        </Route>

      </Routes>
    </main>
  )
}

export default App