import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPlowingById, storePlowingData } from "../../../store/actions/Plowing";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';

interface IPlowingAddEditProps {
  dispatch: Dispatch<any>;
  getPlowingById1: any;
  storePlowingData1: any;
  plowingData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IPlowingAddEditState {
  id: 0;
  landDetailsId: any;
  partitionLandDetailsId: any;
  typeofPlowing: any;
  plowingExp: any;
  plowingDate: any;
}

class PlowingEditPage extends React.Component<IPlowingAddEditProps, IPlowingAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {    
      id: 0,
      landDetailsId: 0,
      partitionLandDetailsId: 0,
      plowingDate :new Date(),
      typeofPlowing: null,
      plowingExp: null, 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPlowingById1(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.plowingData.isFormSubmit) {
      window.location.href = '/plowings';
    }
    if (newProps.plowingData.PlowingItems) {
      this.setState({
        landDetailsId: newProps.plowingData.PlowingItems.selectedLandDetailId,
        partitionLandDetailsId: newProps.plowingData.PlowingItems.selectedPartLandDetailId,
        typeofPlowing: newProps.plowingData.PlowingItems.typeofPlowing,
        plowingExp: newProps.plowingData.PlowingItems.plowingExp,       
        id: newProps.plowingData.PlowingItems.id,
        plowingDate: newProps.plowingData.PlowingItems.plowingDate
      })
    }
  }

  setDate(dateValue: any) {
    this.setState({
      ...this.state,
      plowingDate: dateValue
    });
  }

  handleOnsubmit(event: any) {
   
    event.preventDefault();
    this.props.storePlowingData1(this.state);
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


  handleChange(event: any) {
    const { name, value } = event.target;
    if (this.state) {
      this.setState({       
          ...this.state,
          [name]: value       
      });
    }
  }
  render() {  

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1> Edit Plowing </h1>
            </div>
            {this.state.id && (
            <form className="form">
              <IonRow>
                <IonCol>
                  <IonText className="reg-fields">
                    <label> Land Name </label>
                    {this.props.plowingData.PlowingItems.landDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handleLandChange}>
                        {this.props.plowingData.PlowingItems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.plowingData.PlowingItems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                      </IonSelect>)}
                    <label> Partition Land Name </label>
                    {this.props.plowingData.PlowingItems.partLandDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handlePLChange}>
                        {this.props.plowingData.PlowingItems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.plowingData.PlowingItems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                      </IonSelect>)}
                      <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.plowingDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>
                      Type of Plowing <input type="text" name="typeofPlowing" className="input-text" onChange={this.handleChange} value={this.state.typeofPlowing} required />
                      Plowing Expenses <input type="text" name="plowingExp" className="input-text" onChange={this.handleChange} value={this.state.plowingExp} required />
                  </IonText>
                </IonCol>
              </IonRow>
              </form>
            )}
          </div>
        </IonContent>
        <footer className="footcolor" >
          <div>
            <button className="ok-btn" onClick={this.handleOnsubmit}>SAVE </button>
          </div>
          <Footer />
        </footer>
      </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { plowingData } = state;

  return {
    plowingData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getPlowingById1: (id: any) => {
      dispatch(getPlowingById(id));
    },
    storePlowingData1: (id: any) => {
      dispatch(storePlowingData(id));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(PlowingEditPage);