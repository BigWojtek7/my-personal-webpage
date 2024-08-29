import App from './App';
import Home from './pages/Home/Home';
import PortfolioItem from './pages/PortfolioItem/PortfolioItem';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/projects/:projectid', element: <PortfolioItem /> },
    ],
  },
];

export default routes;
