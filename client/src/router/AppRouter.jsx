import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Ajustes from '../components/Ajustes';

function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/ajustes" element={<Ajustes />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default AppRouter;