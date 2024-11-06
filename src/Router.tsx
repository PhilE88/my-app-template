import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorLayout from "./layouts/ErrorLayout";
import Settings from "./pages/Settings";
import Build from "./pages/Build";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import AppLayout from "./layouts/AppLayout";


export const MyRouter = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='settings' element={<Settings />} />
        <Route path='build' element={<Build />} />
        <Route path='support' element={<Support />} />
        <Route path='contact' element={<Contact />} />

        {/* <Route element={<NoAuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/otp-code' element={<OTPCode />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:hashed/:token' element={<ResetPassword />} />
        </Route>

        <Route id="auth-route" element={<AuthenticatedRoute />} loader={RouterAuthRouteLoader} errorElement={<ErrorLayout />}>
          <Route index path='/home' element={<InternalLanding />} />
            <Route index element={<Home />} />
        </Route> */}

        <Route path='*' element={<ErrorLayout />} />
      </Route>
  )
);