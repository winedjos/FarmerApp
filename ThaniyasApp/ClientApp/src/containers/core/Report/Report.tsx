import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';

const Report: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Report</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <IonList>
                    <IonItemDivider>
                      <IonLabel>
                        Section A
        </IonLabel>
                    </IonItemDivider>

                    <IonItem><IonLabel>A1</IonLabel></IonItem>
                    <IonItem><IonLabel>A2</IonLabel></IonItem>
                    <IonItem><IonLabel>A3</IonLabel></IonItem>
                    <IonItem><IonLabel>A4</IonLabel></IonItem>
                    <IonItem><IonLabel>A5</IonLabel></IonItem>

                    <IonItemDivider>
                      <IonLabel>
                        Section B
        </IonLabel>
                    </IonItemDivider>

                    <IonItem><IonLabel>B1</IonLabel></IonItem>
                    <IonItem><IonLabel>B2</IonLabel></IonItem>
                    <IonItem><IonLabel>B3</IonLabel></IonItem>
                    <IonItem><IonLabel>B4</IonLabel></IonItem>
                    <IonItem><IonLabel>B5</IonLabel></IonItem>
                  </IonList>
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Report;
