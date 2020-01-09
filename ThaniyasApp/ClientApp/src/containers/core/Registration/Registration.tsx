import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow,IonCol, IonGrid, IonImg, IonFooter } from '@ionic/react';
import * as React from 'react';
import './Reg.scss';
import Header from '../../common/Header';

//import MediaQuery  from 'react-responsive';
//import '../theme/app.core.scss';
//import '../../src/images';
//import '../../public/assets';


const Registration: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Registration</h1>
          </div>         
          <form className="form">
            <IonRow>
            <IonCol>
              <IonText className="reg-fields">
                Name <input type="text" placeholder="abcd" className="input-text" required />                 
                Mobile Number <input type="text" placeholder="12345 67890" className="input-text" required />
                Email <input type="text" placeholder="abc@gmail.com" className="input-text" required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>        
        </div>
      </IonContent>
      <IonFooter className="footcolor">
        <button className="reg-btn"> Submit </button>
        </IonFooter>
    </IonPage>
  );
};

export default Registration;
