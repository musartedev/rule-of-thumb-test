import Home from '../pages/Home';
import Login from '../pages/Login';
import HowItWorks from '../pages/HowItWorks';
import PastTrials from '../pages/PastTrials';
import Search from '../pages/Search';

const ROUTES = [
  {
    path: ['/'], // could be an array or an string
    key: 'HOME',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: ['/login'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: ['/how-it-works'],
    key: 'HOW_IT_WORKS',
    exact: true,
    component: HowItWorks,
    auth: false,
  },
  {
    path: ['/past-trials'],
    key: 'PAST_TRIALS',
    exact: true,
    component: PastTrials,
    auth: true,
  },
  {
    path: ['/search'],
    key: 'SEARCH',
    exact: true,
    component: Search,
    auth: true,
  },
];

export default ROUTES;
