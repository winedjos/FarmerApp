import { IonItem, IonContent, IonText, IonPage, IonRow, IonCol, IonSelect,IonSelectOption } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getSaleById, storeSaleData } from "../../../store/actions/Sales";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';

interface ISaleAddEditProps {
  dispatch: Dispatch<any>;
  getSaleById1: any;
  storeSaleData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  saleData: any;
  LandDetailData: any;

}

interface ISaleAddEditState {
  id: 0;
  saleDate: any;
    quantity: any;
    price: any;
    buyerName: any;
  buyerMobileNumber: any;
  landDetailsId: any;
  partitionLandDetailsId: any;
  
}

class SaleEditPage extends React.Component<ISaleAddEditProps, ISaleAddEditState> {
  constructor(props:any) {
    super(props);

    this.state = {
     id:0,
      saleDate: new Date(),
        quantity: null,
        price: null,
        buyerName: null,
      buyerMobileNumber: null,
      landDetailsId: 0,
      partitionLandDetailsId: 0,
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getSaleById1(this.props.match.params.id);
  }

  handleChange(event:any) {
  //  alert("Edit");
    const { name, value } = event.target;
    if (this.state) {
      this.setState({
       
          ...this.state,
          [name]: value
       
      });
    }
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.saleData.isFormSubmit) {
      window.location.href = '/sales';
    }
    if (newProps.saleData.SaleItems) {
      this.setState({
        landDetailsId: newProps.saleData.SaleItems.selectedLandDetailId,
        partitionLandDetailsId: newProps.saleData.SaleItems.selectedPartLandDetailId,
        buyerMobileNumber: newProps.saleData.SaleItems.buyerMobileNumber,
        buyerName: newProps.saleData.SaleItems.buyerName,
        price: newProps.saleData.SaleItems.price,
        quantity: newProps.saleData.SaleItems.quantity,
        id: newProps.saleData.SaleItems.id,
        saleDate: newProps.saleData.SaleItems.date
      })
    }
  }

  setDate(dateValue: any) {
    this.setState({
      ...this.state,
      saleDate: dateValue
    });
  }
  handleLandChange = (event: any) => {
    this.setState({
      landDetailsId: event.target.value
    });
  }

  handlePLChange = (event: any) => {
    this.setState({
      partitionLandDetailsId: event.target.value
    });
  }

  handleOnsubmit(event: any) {
    //alert("Sabve");
     event.preventDefault();
    //const { dispatch } = this.props;
    this.props.storeSaleData1(this.state);
  }

  render() {
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>Edit Sale</h1>
            </div>
            {this.state.id && (
            <form className="form">
              <IonRow>
                <IonCol>
                    <IonText className="reg-fields">
                      <label> Land Name </label>
                      {this.props.saleData.SaleItems.landDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handleLandChange}>
                          {this.props.saleData.SaleItems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.saleData.SaleItems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                        </IonSelect>)}
                      <label> Partition Land Name </label>
                      {this.props.saleData.SaleItems.partLandDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handlePLChange}>
                          {this.props.saleData.SaleItems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.saleData.SaleItems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                        </IonSelect>)}
                      <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.saleDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>                     
                      Quantity <input type="text" name="quantity" className="input-text" onChange={this.handleChange} value={this.state.quantity} required />
                      Price <input type="text" name="price" className="input-text" onChange={this.handleChange} value={this.state.price} required />
                      Buyer Name <input type="text" name="buyerName" className="input-text" onChange={this.handleChange} value={this.state.buyerName} required />
                      Buyer Mobile Number <input type="text" name="buyerMobileNumber" className="input-text" onChange={this.handleChange} value={this.state.buyerMobileNumber} required />
                  </IonText>
                </IonCol>
              </IonRow>
              </form>
            )}
          </div>
        </IonContent>
        <footer className="footcolor" >
          <div>
            <button className="ok-btn" onClick={this.handleOnsubmit}> SAVE </button>

          </div>
          <Footer />
        </footer>
      </IonPage>
    );
     
  }

};

const mapStateToProps = (state: any) => {
  const { saleData } = state;

  return {
    saleData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getSaleById1: (id: any) => {
      dispatch(getSaleById(id));
    },
    storeSaleData1: (id: any) => {
      dispatch(storeSaleData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(SaleEditPage);