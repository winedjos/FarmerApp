import { IonItem, IonContent, IonPage, IonPopover, IonSelectOption, IonLabel, IonSelect, IonList } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getWeedRemoveList } from '../../../store/actions/WeedRemove';

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  weedRemoveData: any;
}

const WeedRemove: React.SFC<IWeedRemoveProps> = ({ dispatch, weedRemoveData}) => {

  React.useEffect(() => {
    dispatch(getWeedRemoveList());
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

  const [WeedRemove, setWeedRemove] = useState();
  const onEditWeedRemoveClick = (id:any) => {
    setWeedRemove(id);
  }

  const onDeleteWeedRemoveClick = () => {
    alert("DELETE");
  }

  const [WeedData, setWeedRemoveData] = useState([]);

  if (weedRemoveData.WeedItems.length > 0 && WeedData.length === 0) {
    setWeedRemoveData(weedRemoveData.WeedItems);
  }
  const WeedItems: any = (WeedData || []);
  const WeeditemLandList: any = [];
  WeedItems.forEach((WeedItems: any) => WeeditemLandList.push(
    <IonItem key={WeedItems.id}>
      <IonLabel> {WeedItems.nOofLabours} </IonLabel>
      <a href={"/weedRemoveEditPage/" + WeedItems.id } >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditWeedRemoveClick(WeedItems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteWeedRemoveClick} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Weed Remove </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Weed Remove Details </label>
              <a href="weedRemoveDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {WeeditemLandList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { weedRemoveData } = state;

  return {
    weedRemoveData
  };
};

export default connect(mapStateToProps)(WeedRemove);
