import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
