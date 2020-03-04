import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';

const Report: React.FC = () => {
 
  //<img src="assets/share.png" height="75" width="75"></img>
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Report</h1>
          </div>
          <form className="form">
            <button className="view-btn"> View </button>
            <img src="assets/share.png" className="share-icon"></img> 
            <table className="table">
              <tr>
                <th>SNO</th>
                <th>Date</th>
                <th>Description</th>
                <th>Expenses</th>
              </tr>
            </table>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Report;
