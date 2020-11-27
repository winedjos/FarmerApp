import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../../common/Header';



const Reportcopy: React.SFC = () => {


  return (
    <IonPage>
      <Header />


      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="AEreg-head">
           Report 
          </div>

          <form className="form">
          <img src="assets/under.jpg"></img>
          </form>
         </div>
      </IonContent> 
      
    </IonPage>
  );
};




export default Reportcopy;

