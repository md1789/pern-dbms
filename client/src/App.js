import './App.css';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Admin from './components/Admin';
import Home from './components/Home';
import Login from './components/Login';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register';
import Missing from './components/Missing';
import Event from './components/Event';
import SuperAdmin from './components/SuperAdmin';
import RSO from './components/RSO';

const user = {
  roles: ['user'],
  rights: ['can_view_events', 'can_view_rsos']
};

const admin = {
  roles: ['admin'],
  rights: ['can_view_events', 'can_view_rsos', 'can_edit_events', 'can_create_events']
};

const superadmin = {
  roles: ['superadmin'],
  rights: ['can_view_events', 'can_view_rsos', 'can_edit_events', 'can_create_events', 'can_create_accounts']
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={[user, admin, superadmin]} />}>
          <Route path="/" element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="rso" element={<RSO />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[admin, superadmin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[superadmin]} />}>
          <Route path="superadmin" element={<SuperAdmin />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
