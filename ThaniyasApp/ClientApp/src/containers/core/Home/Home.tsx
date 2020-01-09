import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';

const Home: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Home Page</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>   
                <img src="assets/applogo.png" height="75" width="75"></img>
                
               Manage Land
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Manage Partition
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Plowing
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Seeding
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Pest Control
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Weed Remove
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Harvesting
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Sale
              </IonCol>
              <IonCol>
                <img src="assets/applogo.png" height="75" width="75"></img>Report
              </IonCol>              
            </IonRow>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
