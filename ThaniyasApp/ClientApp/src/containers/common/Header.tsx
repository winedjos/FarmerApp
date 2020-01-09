import { IonHeader,IonSelect, IonSelectOption } from '@ionic/react';
import * as React from 'react';

const Header: React.FC = () => {

  return (   
    <IonHeader className="headcolor">
      <img src="assets/backarrow.png" height="20" className="arrow" ></img>
      <img src="assets/Logocropped.png" height="40" className="logo" ></img>
      <img src="assets/searchicon.png" height="20" className="search" ></img>
      <IonSelect placeholder="Language" className="drop">
        <IonSelectOption value="e">English</IonSelectOption>
        <IonSelectOption value="t">Tamil</IonSelectOption>
      </IonSelect>
    </IonHeader>
  );
};

export default Header;
