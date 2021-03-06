﻿import { IonHeader, IonRow, IonCol} from '@ionic/react';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Plugins } from '@capacitor/core';
import "@codetrix-studio/capacitor-google-auth";

interface Props extends RouteComponentProps { }

interface IHeaderProps {  
  route: RouteComponentProps;
  
}

const Header: React.SFC<IHeaderProps & RouteComponentProps> = ({ history}) => {
 
  const clickLogout = () => {

    window.localStorage.setItem('AUTHDATA', "");
    signOut();
        window.location.href = "/login";
  }

  async function signOut(): Promise<void> {    
    try{
    await Plugins.GoogleAuth.signOut();  
    }
    catch(e){
      console.error(e);
    }  
  }
  React.useEffect(() => {
    const loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString && loggedInString!=="" && loggedInString!==null) {
      
    }
    else{
      window.location.href = "/login";
    }
  });

  function goBack(){    
    var old=document.referrer;    
    const previousPath =window.document.referrer;
    if (previousPath.indexOf('Edit') > -1){
      window.location.href = "/home";      
  } else {    
    history.goBack();
  }
  }
  return (   
    <IonHeader className="headcolor">
       <IonRow>
              <IonCol className="h-img">
              <img src="assets/backarrow.png" height="20" onClick={goBack} className="arrow"></img> 
              </IonCol>
              <IonCol className="logout-img">             
              <img src="assets/logouticon.png" height="40" onClick={clickLogout}></img>
              </IonCol>
        </IonRow>   
        
    </IonHeader>
  );
};



const Child = withRouter(Header as any);
export default Child;


