import './App.css';
import Home from './components/home/home';
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Propos from './components/propos/propos';
import Collection from './components/collection/collection';
import Blog from './components/blog/blog';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/Dashboard/homeAdmin/dashboard';
import UsersAd from './components/Dashboard/usersAd/usersAd';
import ProductAd from "./components/Dashboard/prodcut/produitAd"
function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
         <Route path="/" exact> <Home/></Route>
         <Route path="/propos" exact> <Propos/> </Route>
         <Route path="/collection" exact><Collection/></Route>
         <Route path="/blog" exact><Blog/></Route>
         <Route path="/register" exact><Register/></Route>
         <Route path="/login"><Login/></Route>
         <Route path="/dashboard/home"><Dashboard/></Route>
         <Route path="/dashboard/users" exact> <UsersAd/></Route>
         <Route path="/dashboard/products" exact> <ProductAd/></Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
