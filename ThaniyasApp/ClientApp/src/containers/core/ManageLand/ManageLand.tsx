import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const ManageLand: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Manage Land</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <IonSelect placeholder="State">
                    <IonSelectOption value="e">English</IonSelectOption>
                    <IonSelectOption value="t">Tamil</IonSelectOption>
                  </IonSelect>
                  <IonSelect placeholder="City">
                    <IonSelectOption value="e">English</IonSelectOption>
                    <IonSelectOption value="t">Tamil</IonSelectOption>
                  </IonSelect>
                  <IonSelect placeholder="Village">
                    <IonSelectOption value="e">English</IonSelectOption>
                    <IonSelectOption value="t">Tamil</IonSelectOption>
                  </IonSelect>
                  Patta Number <input type="text" placeholder="abcd" className="input-text" required />
                  Area Size <input type="text" placeholder="12345 67890" className="input-text" required />
                  Land Name <input type="text" placeholder="abc@gmail.com" className="input-text" required />                 
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default ManageLand;
