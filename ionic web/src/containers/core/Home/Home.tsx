import { IonContent,  IonPage,   IonRow, IonCol, } from '@ionic/react';
import * as React from 'react';

import HomeHeader from '../../common/HomeHeader';


interface IHomeProps {
 
}

interface IHeaderState {
  dropdownOpen: boolean;
  dropdownUsersOpen: boolean;
  dropdownLogoutOpen: boolean;
  islocalTimerStart: boolean;
  isTimeOutCalled: boolean;
  CHECK_INTERVAL: number;

}

class Home extends React.Component<IHomeProps, IHeaderState>{
 
 public render() {
  return (
    <IonPage>
      <HomeHeader />
      <IonContent className=".reg-login">
        <div className="bg-image">         
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
  }
}
export default Home;
