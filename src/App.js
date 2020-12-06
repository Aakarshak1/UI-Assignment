import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Layout from './component/Layout/Layout';
import Page1 from './component/page/Page1/Page1';
import Page2 from './component/page/Page2/Page2';
import Footer from './component/Footer/Footer';
function App() {
  const page1data = useSelector((state) => state.content.page1Content);
  const page2data = useSelector((state) => state.content.page2Content);

  let routes = (
    <Switch>
      <Route path="/" exact render={() => <Page1 data={page1data} />} />
      <Route path="/page1" exact render={() => <Page1 data={page1data} />} />
      <Route path="/page2" exact render={() => <Page2 data={page2data} />} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        {routes}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
