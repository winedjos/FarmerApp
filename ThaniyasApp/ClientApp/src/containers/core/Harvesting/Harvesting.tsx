import { IonItem, IonContent, IonPage, IonList, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getHarvestList } from '../../../store/actions/Harvestings';

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  harvestData: any;
}


const Harvesting: React.SFC<IWeedRemoveProps> = ({ dispatch, harvestData }) => {
  React.useEffect(() => {
    dispatch(getHarvestList());
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Harvest, setHarvest] = useState();
  const onEditHarvestClick = (id:any) => {
    setHarvest(id);
  }

  const onDeleteHarvestClick = () => {
    alert("DELETE");
  }

  const [HarvestData, setHarvestData] = useState([]);

  if (harvestData.HarvestItems.length > 0 && HarvestData.length === 0) {
    setHarvestData(harvestData.HarvestItems);
  }
  const HarvestItems: any = (HarvestData || []);
  const HarvestList: any = [];
  HarvestItems.forEach((HarvestItems: any) => HarvestList.push(
    <IonItem key={HarvestItems.id}>
      <IonLabel> {HarvestItems.cost} </IonLabel>
      <a href={"/harvestingEditPage/" + HarvestItems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditHarvestClick(HarvestItems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteHarvestClick} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Harvesting</h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Harvest Details </label>
              <a href="/harvestDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {HarvestList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
const mapStateToProps = (state: any) => {
  const { harvestData } = state;

  return {
    harvestData
  };
};
export default connect(mapStateToProps)(Harvesting);
