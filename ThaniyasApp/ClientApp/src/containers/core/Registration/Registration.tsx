import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow,IonCol, IonGrid, IonImg, IonFooter } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';
import './Reg.scss';
import Header from '../../common/Header';
import { storeRegData } from '../../../store/actions/Registration';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//import MediaQuery  from 'react-responsive';
//import '../theme/app.core.scss';
//import '../../src/images';
//import '../../public/assets';

interface IRegProps {
  dispatch: Dispatch<any>;
  regData: any;
}

const Registration: React.SFC<IRegProps> = ({ dispatch, regData}) => {
  
  //const [formSubmit, setformSubmit] = useState(false);
  //React.useEffect(() => {
  //  setformSubmit(false);
  //}, []);

  const onHandleSubmit = () => {
    dispatch(storeRegData(regData.regInput));
  }


  const handleNameChange = (event: any) => {
    regData.regInput.name = event.target.value;
  };

  const handleMobileNumberChange = (event: any) => {
    regData.regInput.mobileNumber = event.target.value;
  };

  const handleEmailChange = (event: any) => {
    regData.regInput.email = event.target.value;
  };


  //const handleSumbit = () => {
  //  window.location.href = "/homes";
  //}
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Registration</h1>
          </div>         
          <form className="form" >
            <IonRow>
            <IonCol>
                <IonText className="reg-fields">
                  Name <input type="text" placeholder="Peter" className="input-text" onChange={handleNameChange} required />
                  Mobile Number <input type="text" placeholder="12345 67890" className="input-text" onChange={handleMobileNumberChange} required />
                  Email <input type="text" placeholder="peter@gmailx.com" className="input-text" onChange={handleEmailChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>        
        </div>
      </IonContent>
      <IonFooter className="footcolor" >
        <button className="reg-btn" onClick={onHandleSubmit}> Submit </button>
      </IonFooter>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { regData } = state;
  return {
    regData
  };
};

export default connect(mapStateToProps)(Registration);
