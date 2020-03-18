import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getPlowingList, deletePlowing } from '../../../store/actions/Plowing';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface IPlowingProps {
  dispatch: Dispatch<any>;
  plowingData: any;
  route: RouteComponentProps;
}


const Plowing: React.SFC<IPlowingProps & RouteComponentProps> = ({ dispatch, plowingData, history }) => {
  React.useEffect(() => {
    dispatch(getPlowingList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);

  const [Plowing, setPlowing] = useState();
  const onEditPlowingClick = (id:any) => {
    setPlowing(id);
    history.push("/plowingEditPage/" + id);
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [weedRemoveDel, setWeedRemoveDel] = useState();
  const onDeletePlowingClick = (id: any) => {
    setShowAlert1(true);
    setWeedRemoveDel(id);
    dispatch(deletePlowing(id));
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
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditPlowingClick(PlowingItems.id)}></img>      
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeletePlowingClick(PlowingItems.id)} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Plowing List </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Plowing Details </label>
              <a onClick={() => {

                history.push("/plowingDetails")
              }}

                className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {PlowingList}
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
  const { plowingData } = state;

  return {
    plowingData
  };
};

const Child = withRouter(Plowing as any);
export default connect(mapStateToProps)(Child);
