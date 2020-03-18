import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getSaleList,deleteSale } from '../../../store/actions/Sales';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface ISaleProps {
  dispatch: Dispatch<any>;
  saleData: any;
  route: RouteComponentProps;
}


const Sale: React.SFC<ISaleProps & RouteComponentProps> = ({ dispatch, saleData, history}) => {
  React.useEffect(() => {
    dispatch(getSaleList());
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Sale, setSale] = useState()
  const onEditSaleClick = (id:any) => {
    setSale(id);
    history.push("/saleEditPage/" + id);
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [saleDel, setSaleDel] = useState();
  const onDeleteSeedClick = (id: any) => {
    setShowAlert1(true);
    setSaleDel(id);
    dispatch(deleteSale(id));
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
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSaleClick(SaleItems.id)}></img>
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick(SaleItems.id)} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Sale List </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Sale Details </label>
              <a onClick={() => {

                history.push("/saleDetails")
              }}

                className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {SaleList}
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
  const { saleData } = state;

  return {
    saleData
  };
};

const Child = withRouter(Sale as any);
export default connect(mapStateToProps)(Child);



