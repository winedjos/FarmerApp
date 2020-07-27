import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonGrid, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getLandDetailById } from "../../../store/actions/LandDetail";
import { getPartitionLandList } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';


class ViewAll extends React.Component{
  
  
  render() {

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>View All</h1>
            </div>
          
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">                                           
                      <IonGrid>
                        <IonRow>
                          <IonCol>Land Name</IonCol>
                          <IonCol>Patta No</IonCol>
                          <IonCol>Survey No </IonCol>                          
                        </IonRow>
                        <IonRow>    
                        <IonCol>Land Name</IonCol>                      
                          <IonCol>Partition Land</IonCol>
                          <IonCol>Total </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>           
          </div>
        </IonContent>
       </IonPage>
    );
  }

};


export default ViewAll;