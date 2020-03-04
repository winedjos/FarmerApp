import { IonItem, IonContent, IonPage, IonList, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getSaleList } from '../../../store/actions/Sales';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface ISaleProps {
  dispatch: Dispatch<any>;
  saleData: any;
}


const Sale: React.SFC<ISaleProps> = ({ dispatch, saleData}) => {
  React.useEffect(() => {
    dispatch(getSaleList());
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Sale, setSale] = useState()
  const onEditSaleClick = (id:any) => {
    setSale(id);
  }

  const onDeleteSeedClick = () => {
    alert("DELETE");
  }

  const [SaleData, setSaleData] = useState([]);

  if (saleData.SaleItems.length > 0 && SaleData.length === 0) {
    setSaleData(saleData.SaleItems);
  }
  const SaleItems: any = (SaleData || []);
  const SaleList: any = [];
  SaleItems.forEach((SaleItems: any) => SaleList.push(
    <IonItem key={SaleItems.id}>
      <IonLabel> {SaleItems.buyerName} </IonLabel>
      <a href={"/saleEditPage/" + SaleItems.id} >
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSaleClick(SaleItems.id)}></img>
      </a>

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Sale </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Sale Details </label>
              <a href="saleDetails" className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {SaleList}
            </IonList>
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { saleData } = state;

  return {
    saleData
  };
};

export default connect(mapStateToProps)(Sale);
