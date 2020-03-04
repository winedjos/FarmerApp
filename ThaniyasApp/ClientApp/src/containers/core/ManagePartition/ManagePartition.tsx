import { IonItem, IonContent, IonPage, IonList, IonAlert,  IonVirtualScroll, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
//import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
//import { storeLandDetailData } from '../../../store/actions/LandDetail';
import { getPartitionLandList, deletePartitionLand} from '../../../store/actions/PartitionLand';
//import { CANCEL } from 'redux-saga';
//import PartitionLandData from '../../../store/reducers/PartitionLand/PartitionLand';
//import PartitionLandData from '../../../store/reducers/PartitionLand/PartitionLand';


interface IPartitionProps {
  dispatch: Dispatch<any>;
  PartitionLandData: any;
  //LandDetailData: any;  
}

const ManagePartition: React.SFC<IPartitionProps> = ({ dispatch, PartitionLandData }) => {


  React.useEffect(() => {
    dispatch(getPartitionLandList());
  }, []);

  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [partitionLand, setPartitionLand] = useState();
  const onEditPartitionClick = (id: any) => {
    setPartitionLand(id);
   // dispatch(savePartitionLand(id));
  }
  const [PartInput, setPartrInput] = useState();
  const onDeletePartitionClick = (id: any, value: boolean, ) => {
    alert("DELETe");
   
    if (value) {
      setShowAlert1(true);
      setPartrInput(id);
      dispatch(deletePartitionLand(id));
    }
    setShowAlert(false);
  }

  const [PLdata, setPLData] = useState([]);

  if (PartitionLandData.PLitems.length > 0 && PLdata.length === 0) {
    setPLData(PartitionLandData.PLitems);
  }

  const PLitems: any = (PLdata || []);
  const itemPL: any = [];
  
  
  PLitems.forEach((PLitems: any) => itemPL.push(
    <IonItem key={PLitems.id}>
      <IonLabel> {PLitems.landDirection} </IonLabel>     
      <a href={"/managePartitionEdit/" + PLitems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditPartitionClick(PLitems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeletePartitionClick(PLitems.id, PLitems.value)} ></img>
       
     
    </IonItem>));
 
  return (
    
    <IonPage>
     
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Manage Partition </h1>
          </div>
          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Manage Partition Details </label>
              <a href="/managePartitionDetails" className="add-btn">  ADD  </a>
            </IonItem>
            
            <IonList>
              <div className="scroll">
                {itemPL}
                </div>
                </IonList>
           
          </form>
          <IonAlert isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            message={'Permanently deleted'}
            buttons={['OK','CNACEL']}
          />
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
           // header={'Alert'}
           // subHeader={'Subtitle'}
            message={'Successfully Deleted'}
            buttons={['OK']}
          />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { PartitionLandData } = state;

  return {
    PartitionLandData
  };
};

export default connect(mapStateToProps)(ManagePartition);
