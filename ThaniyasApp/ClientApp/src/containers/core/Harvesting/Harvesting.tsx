import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getHarvestList, deleteHarvest } from '../../../store/actions/Harvestings';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  harvestData: any;
  route: RouteComponentProps;
}


const Harvesting: React.SFC<IWeedRemoveProps & RouteComponentProps> = ({ dispatch, harvestData, history }) => {
  React.useEffect(() => {
    dispatch(getHarvestList());
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Harvest, setHarvest] = useState();
  const onEditHarvestClick = (id:any) => {
    setHarvest(id);
    history.push("/harvestingEditPage/" + id);
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [weedRemoveDel, setWeedRemoveDel] = useState();
  const onDeleteHarvestClick = (id: any) => {
    setShowAlert1(true);
    setWeedRemoveDel(id);
    dispatch(deleteHarvest(id));
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

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteHarvestClick(HarvestItems.id)} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Harvesting Detail List</h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Harvest Details </label>
              <a onClick={() => {

                history.push("/harvestDetails")
              }}

                className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {HarvestList}
            </IonList>
          </form>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            message={'Successfully Deleted'}
            buttons={['OK']}
          />
        </div>
      </IonContent>     
    </IonPage>
  );
};
const mapStateToProps = (state: any) => {
  const { harvestData } = state;

  return {
    harvestData
  };
};

const Child = withRouter(Harvesting as any);
export default connect(mapStateToProps)(Child);


