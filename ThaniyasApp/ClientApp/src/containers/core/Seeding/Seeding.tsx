import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Seeding: React.FC = () => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Seeding</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  Land <input type="text" placeholder="Land " className="input-text" required />
                  Partition Land <input type="text" placeholder="Partition Land" className="input-text" required />
                  Quantity <input type="text" placeholder="Plowing type" className="input-text" required />
                  Seed Name <input type="text" placeholder="Date" className="input-text" required />
                  Seed Cost <input type="text" placeholder="Plowing Expenses" className="input-text" required />
                  NO of Labours <input type="text" placeholder="Plowing Expenses" className="input-text" required />
                  Labour Cost <input type="text" placeholder="Plowing Expenses" className="input-text" required />                 
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

export default Seeding;
