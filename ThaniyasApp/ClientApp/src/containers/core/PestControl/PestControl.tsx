import { IonItem, IonContent, IonPage, IonList, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getPestControlList } from '../../../store/actions/PestControl';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IPestControlProps {
  dispatch: Dispatch<any>;
  pestControlData : any;
}


const PestControl: React.SFC<IPestControlProps> = ({ dispatch, pestControlData }) => {
  React.useEffect(() => {
    dispatch(getPestControlList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);
  const [PestControl, setPestControl] = useState();
  const onEditSeedClick = (id:any) => {
    setPestControl(id);
  }

  const onDeleteSeedClick = () => {
    alert("DELETE");
  }

  const [PestControlgData, setPestControlData] = useState([]);

  if (pestControlData.PetsControlItems.length > 0 && PestControlgData.length === 0) {
    setPestControlData(pestControlData.PetsControlItems);
  }
  const PetsControlItems: any = (PestControlgData || []);
  const PetsControlList: any = [];
  PetsControlItems.forEach((PetsControlItems: any) => PetsControlList.push(
    <IonItem key={PetsControlItems.id}>
      <IonLabel> {PetsControlItems.nameofthePestSide} </IonLabel>
      <a href={"/pestControlEditPage/" + PetsControlItems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSeedClick(PetsControlItems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Pest Control </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Pest Control Details </label>
              <a href="PestControlDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {PetsControlList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { pestControlData } = state;

  return {
    pestControlData
  };
};

export default connect(mapStateToProps)(PestControl);
