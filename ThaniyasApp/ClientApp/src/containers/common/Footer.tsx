import { IonFooter, IonSelect, IonSelectOption } from '@ionic/react';
import * as React from 'react';

const Footer: React.FC = () => {

  return (
    <IonFooter className="footcolor">
      <div>
        <button className="ok-btn"> OK </button>
        
      </div>
      <div>
        <button className="cancel-btn"> CANCEL </button>
        </div>
    </IonFooter>
  );
};

export default Footer;