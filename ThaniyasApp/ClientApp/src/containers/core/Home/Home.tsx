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
              <IonCol className="h-img">
                <a href="manageLands">
                  <img src="assets/ManageLand.png" height="75" width="75"></img>                
                  Manage Land
                </a>   
              </IonCol>
              <IonCol className="h-img">
                <a href="managePartitions">
                  <img src="assets/ManagePartition.png" height="75" width="75"></img>Manage Partition
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="plowings">
                  <img src="assets/Plowing.png" height="75" width="75"></img>Plowing
                </a>  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="h-img">
                <a href="seedings">
                  <img src="assets/Seeding.png" height="75" width="75"></img>Seeding
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="pestControls">
                  <img src="assets/PestControl.png" height="75" width="75"></img>Pest Control
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="weedRemoves">
                  <img src="assets/WeedRemove.png" height="75" width="75"></img>Weed Remove
                </a>  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="h-img">
                <a href="harvestings">
                  <img src="assets/Harvesting.png" height="75" width="75"></img>Harvesting
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="sales">
                  <img src="assets/Sale.png" height="75" width="75"></img>Sale
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="reports">
                  <img src="assets/Report.png" height="75" width="75"></img>Report
                </a>  
              </IonCol>              
            </IonRow>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
