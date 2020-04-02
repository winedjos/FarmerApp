import { IonHeader, IonSelect, IonSelectOption, IonLabel, IonBackButton } from '@ionic/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { HttpLocal } from '../../utils/Http';
//import { withRouter } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

interface Props extends RouteComponentProps { }

interface IHeaderProps {  
  route: RouteComponentProps;
  //sessionTimeout: number;
  //login: any;
 // loginData: any;
 // userName: string;
  //LandDetailData: any;  
}

const Header: React.SFC<IHeaderProps & RouteComponentProps> = ({ history }) => {
 // const BrowserHistory = require('react-router/lib/BrowserHistory').default;
 // onClick = { BrowserHistory.goBack }
  const clickLogout = () => {
    //this.props.login.dispatch(fetchLogout());
    HttpLocal.axios().get('/Login/SignOutbyClient')
      .then((e) => {
        var results = e.data;
        window.localStorage.setItem('AUTHDATA', "");
        window.location.href = "/login";
      })
      .catch((e) => {
      })
  }

  return (   
    <IonHeader className="headcolor">
     
        <img src="assets/backarrow.png" height="20" onClick={history.goBack} className="arrow"></img>
      
      <img src="assets/Logocropped.png" height="40" className="logo" ></img>
      <img src="assets/searchicon.png" height="20" className="search" ></img>
      <IonSelect placeholder="Language" className="drop" >
        <IonSelectOption value="english" selected={true}>English</IonSelectOption>
        <IonSelectOption value="tamil">Tamil</IonSelectOption>
      </IonSelect>
      <button onClick={clickLogout} className="Logout"> Logout </button>
    </IonHeader>
  );
};

//const mapStateToProps = (state: any) => {
//  const { loginData } = state;
//  return {
//    loginData
//  };
//};

const Child = withRouter(Header as any);
export default Child;


