import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const ManagePartition: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Manage Partition</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  Land Direction <input type="text" placeholder="Land direction" className="input-text" required />
                  Land Name <input type="text" placeholder="Land name" className="input-text" required />
                  Area Size <input type="text" placeholder="Size of Land" className="input-text" required />                 
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

export default ManagePartition;
