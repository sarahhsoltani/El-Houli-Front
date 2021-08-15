import './App.css';
import Home from './components/home/home';
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Propos from './components/propos/propos';
import Collection from './components/collection/collection';
import Blog from './components/blog/blog';
function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
         <Route path="/" exact> <Home/></Route>
         <Route path="/propos" exact> <Propos/> </Route>
         <Route path="/collection" exact><Collection/></Route>
         <Route path="/blog" exact><Blog/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
