import { IonItem, IonContent, IonPage, IonList, IonAlert, IonPopover, IonSelectOption, IonLabel, IonSelect, IonVirtualScroll } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getLandDetailList, deleteLand } from '../../../store/actions/LandDetail';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';



interface ILandDetailProps {
  dispatch: Dispatch<any>;
  LandDetailData : any;
  //LandDetailData: any;  
}


const ManageLand: React.SFC<ILandDetailProps> = ({ dispatch, LandDetailData }) => {
  React.useEffect(() => {
    dispatch(getLandDetailList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);
  // <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
  //const onaddClick = () => {
    //alert("Edit");
   // window.location.href ="/landDetails";
   // setShowModal(true);
    //isShowAddEditModal: true;
    //setShowModal(false);
  //<button onClick={() => onaddClick}> add  </button>
  //}

  const onEditLandClick = () => {
    alert("Edit");
  }
  const [showAlert1, setShowAlert1] = useState(false);
  const [LandInput, setLandInput] = useState();
  const onDeleteLnadClick = (id: any) => {
    setShowAlert1(true);
    setLandInput(id);
    dispatch(deleteLand(id));
  }
  const [LandData, setLandData] = useState([]);

  if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
    setLandData(LandDetailData.Landitems);
  }

  const Landitems: any = (LandData || []);
  const itemLand: any = [];


  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.id}>
      <IonLabel> {Landitems.name} </IonLabel>
      <a href={"/landDetailEditPage/" + Landitems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditLandClick}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteLnadClick(Landitems.id)} ></img>


    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Manage Land </h1>
          </div>      
         
          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Land Details </label>
              <a href="/landDetails" className="add-btn">  ADD  </a> 
            </IonItem>
  
            <IonList>
              <div className="scroll">
                {itemLand}
                </div>
              </IonList>
            
          </form>
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
  const { LandDetailData } = state;

  return {
    LandDetailData
  };
};

export default connect(mapStateToProps)(ManageLand);
