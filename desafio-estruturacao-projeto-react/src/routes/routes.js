import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Cart } from '../pages/Cart/Cart';
import { Finish } from '../pages/Finish/Finish';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/purchase" component={Finish} />
    </Switch>
  );
};

export default Routes;