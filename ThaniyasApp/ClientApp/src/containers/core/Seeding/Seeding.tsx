import { IonItem, IonContent, IonPage, IonList, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getSeedList } from '../../../store/actions/Seedings';

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  seedData: any;
}


const Seeding: React.SFC<IWeedRemoveProps> = ({ dispatch, seedData }) => {

  React.useEffect(() => {
    dispatch(getSeedList());
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
  const [Seed, setSeed] = useState();
  const onEditSeedClick = (id:any) => {
    setSeed(id);
  }

  const onDeleteSeedClick = () => {
    alert("DELETE");
  }

  const [SeedData, setSeedData] = useState([]);

  if (seedData.Seeditems.length > 0 && SeedData.length === 0) {
    setSeedData(seedData.Seeditems);
  }
  const Seeditems: any = (SeedData || []);
  const SeedList: any = [];
  Seeditems.forEach((Seeditems: any) => SeedList.push(
    <IonItem key={Seeditems.id}>
      <IonLabel> {Seeditems.seedName} </IonLabel>
      <a href={"/seedEditPage/" + Seeditems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSeedClick(Seeditems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick} ></img>
    </IonItem>));


  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Seeding </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Seeding Details </label>
              <a href="seedingDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {SeedList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { seedData } = state;

  return {
    seedData
  };
};

export default connect(mapStateToProps)(Seeding);
