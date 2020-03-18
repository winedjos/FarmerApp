import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface IReportProps {
  dispatch: Dispatch<any>;
  LandDetailData: any;
 // route: RouteComponentProps;
  //LandDetailData: any;  
}

const Report: React.SFC<IReportProps> = ({ dispatch, LandDetailData }) => {

  React.useEffect(() => {
    dispatch(getLandDetailList());
  }, []);
  //<img src="assets/share.png" height="75" width="75"></img>
  const [LandData, setLandData] = useState([]);

  if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
    setLandData(LandDetailData.Landitems);
  }

  const Landitems: any = (LandData || []);
  const itemLand: any = [];

  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.id}>
      <IonLabel> {Landitems.name} </IonLabel>
      <div > <button> View </button></div>      
    </IonItem>));

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
            <IonList>
              <div className="scroll">
                {itemLand}
              </div>
            </IonList>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};


const mapStateToProps = (state: any) => {
  const { LandDetailData } = state;

  return {
    LandDetailData
  };
};
export default connect(mapStateToProps)(Report);
