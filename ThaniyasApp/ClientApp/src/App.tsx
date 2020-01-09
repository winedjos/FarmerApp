import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import Home from './pages/Home';
//import FirstPage from './pages/FirstPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
//import './theme/variables.css';
import OtpPage from './containers/pages/OtpPage';
import LoginPage from './containers/pages/LoginPage';
import FirstPage from './containers/pages/FirstPage';
import Registrations from './containers/pages/Registrations/Registrations';
import ManageLands from './containers/pages/ManageLands/ManageLands';
import ManagePartitions from './containers/pages/ManagePartitions/ManagePartitions';
import Plowings from './containers/pages/Plowings/Plowings';
import Seedings from './containers/pages/Seedings/Seedings';
import PestControls from './containers/pages/PestControls/PestControls';
import WeedRemoves from './containers/pages/WeedRemoves/WeedRemoves';
import Harvestings from './containers/pages/Harvestings/Harvestings';
import Sales from './containers/pages/Sales/Sales';
import Homes from './containers/pages/Homes/Homes';
import Reports from './containers/pages/Reports/Reports';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/registrations" component={Registrations} exact={true} />
        <Route path="/otpPage" component={OtpPage} exact={true} />
        <Route path="/homes" component={Homes} exact={true} />
        <Route path="/manageLands" component={ManageLands} exact={true} /> 
        <Route path="/managePartitions" component={ManagePartitions} exact={true} />
        <Route path="/plowings" component={Plowings} exact={true} />
        <Route path="/seedings" component={Seedings} exact={true} />
        <Route path="/pestControls" component={PestControls} exact={true} />
        <Route path="/weedRemoves" component={WeedRemoves} exact={true} />
        <Route path="/harvestings" component={Harvestings} exact={true} />
        <Route path="/sales" component={Sales} exact={true} />
        <Route path="/reports" component={Reports} exact={true} />
        <Route path="/loginpage" component={LoginPage} exact={true} />        
        <Route path="/firstpage" component={FirstPage} exact={true} />       
        <Route exact path="/" render={() => <Redirect to="/registrations" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
