import { IonHeader, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import * as React from 'react';

const Header: React.FC = () => {

  return (   
    <IonHeader className="headcolor">
      < a href = "/homes">
      <img src="assets/backarrow.png" height="20" className="arrow"></img></a>
      <img src="assets/Logocropped.png" height="40" className="logo" ></img>
      <img src="assets/searchicon.png" height="20" className="search" ></img>
      <IonSelect placeholder="Language" className="drop" >
        <IonSelectOption value="english" selected={true}>English</IonSelectOption>
        <IonSelectOption value="tamil">Tamil</IonSelectOption>
      </IonSelect>
    </IonHeader>
  );
};

export default Header;
