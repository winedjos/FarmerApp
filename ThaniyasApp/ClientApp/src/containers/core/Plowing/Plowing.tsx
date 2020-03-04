import { IonItem, IonContent, IonPage, IonList, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getPlowingList } from '../../../store/actions/Plowing';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IPlowingProps {
  dispatch: Dispatch<any>;
  plowingData : any;
}


const Plowing: React.SFC<IPlowingProps> = ({ dispatch, plowingData }) => {
  React.useEffect(() => {
    dispatch(getPlowingList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);

  const [Plowing, setPlowing] = useState();
  const onEditSeedClick = (id:any) => {
    setPlowing(id);
  }

  const onDeleteSeedClick = () => {
    alert("DELETE");
  }

  const [PlowingData, setPlowingData] = useState([]);

  if (plowingData.PlowingItems.length > 0 && PlowingData.length === 0) {
    setPlowingData(plowingData.PlowingItems);
  }
  const PlowingItems: any = (PlowingData || []);
  const PlowingList: any = [];
  PlowingItems.forEach((PlowingItems: any) => PlowingList.push(
    <IonItem key={PlowingItems.id}>
      <IonLabel> {PlowingItems.typeofPlowing} </IonLabel>
      <a href={"/plowingEditPage/" + PlowingItems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSeedClick(PlowingItems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Plowing </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Plowing Details </label>
              <a href="plowingDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {PlowingList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { plowingData } = state;

  return {
    plowingData
  };
};


export default connect(mapStateToProps)(Plowing);
