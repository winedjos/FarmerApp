import { IonHeader, IonSelect, IonSelectOption, IonLabel, IonBackButton } from '@ionic/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
//import { withRouter } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

interface Props extends RouteComponentProps { }

interface IHeaderProps {  
  route: RouteComponentProps;
  //LandDetailData: any;  
}

const Header: React.SFC<IHeaderProps & RouteComponentProps> = ({ history }) => {
 // const BrowserHistory = require('react-router/lib/BrowserHistory').default;
 // onClick = { BrowserHistory.goBack }
  return (   
    <IonHeader className="headcolor">
     
        <img src="assets/backarrow.png" height="20" onClick={history.goBack} className="arrow"></img>
      
      <img src="assets/Logocropped.png" height="40" className="logo" ></img>
      <img src="assets/searchicon.png" height="20" className="search" ></img>
      <IonSelect placeholder="Language" className="drop" >
        <IonSelectOption value="english" selected={true}>English</IonSelectOption>
        <IonSelectOption value="tamil">Tamil</IonSelectOption>
      </IonSelect>
    </IonHeader>
  );
};

const Child = withRouter(Header as any);
export default Child;


