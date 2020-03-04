import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getHarvestById, storeHarvestData } from "../../../store/actions/Harvestings";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

interface IHarvestAddEditProps {
  //partitionLandInput: any;
  dispatch: Dispatch<any>;
  getHarvestById1: any;
  storeHarvestData1: any;
  harvestData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IHarvestLandAddEditState {
 // harvestData: any;
  landDetailsId: any;
  partitionLandDetailsId: any;
  cost: any;
  nOofLabours: 0;
  labourCost: 0;
  id: 0;
  date: any;
}

class HarvestingEditPage extends React.Component<IHarvestAddEditProps, IHarvestLandAddEditState> {

  constructor(props:any) {
    super(props);

    this.state = {     
     // harvestData: {},
      landDetailsId: 0,
      partitionLandDetailsId: 0,
      cost: null,
      nOofLabours: 0,
      labourCost: 0,
      id: 0,
      date: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getHarvestById1(this.props.match.params.id);
  }
  componentWillReceiveProps(newProps: any) {
    if (!newProps.harvestData.isFormSubmit) {
      window.location.href = '/harvestings';
    }
    if (newProps.harvestData.HarvestItems) {
      this.setState({
        landDetailsId: newProps.harvestData.HarvestItems.selectedLandDetailId,
        partitionLandDetailsId: newProps.harvestData.HarvestItems.selectedPartLandDetailId,
        cost: newProps.harvestData.HarvestItems.cost,
        nOofLabours: newProps.harvestData.HarvestItems.nOofLabours,
        labourCost: newProps.harvestData.HarvestItems.labourCost,
        id: newProps.harvestData.HarvestItems.id,
        date: newProps.harvestData.HarvestItems.date
      })
    }
  }

  handleOnsubmit(event: any) {
    event.preventDefault();
    this.props.storeHarvestData1(this.state);
  }

handleChange(event : any) {
  const { name, value } = event.target;
  if (this.state) {
    this.setState({
      ...this.state,
      [name]:value,
    });
  }
}

  setDate(dateValue:any) {
    this.setState({
     ...this.state,
      date: dateValue
    });
  }

  render() {

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Harvesting Details</h1>
          </div>
          {this.state.id > 0 && (
          <form className="form">
            <IonRow>
              <IonCol>
                  <IonText className="reg-fields">
                    <label> Land Name </label>
                  {this.props.harvestData.HarvestItems.landDetailName && (
                      <IonSelect className="dropclr">
                        {this.props.harvestData.HarvestItems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.harvestData.HarvestItems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                      </IonSelect>)}
                    <label> Partition Land Name </label>
                    {this.props.harvestData.HarvestItems.partLandDetailName && (
                      <IonSelect className="dropclr">
                        {this.props.harvestData.HarvestItems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.harvestData.HarvestItems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                      </IonSelect>)}
                    <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.date).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>
                    Cost <input type="text" name="cost" className="input-text" onChange={this.handleChange} value={this.state.cost} />
                    NO of Labours <input type="text" name="nOofLabours" className="input-text" onChange={this.handleChange} value={this.state.nOofLabours} />
                    Labour Cost <input type="text" name="labourCost" className="input-text" onChange={this.handleChange} value={this.state.labourCost} />
                </IonText>
              </IonCol>
            </IonRow>
            </form>
          )}
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={this.handleOnsubmit}> OK </button>
        </div>
        <div>
          <button className="cancel-btn"> CANCEL </button>
        </div>
      </footer>
    </IonPage>
  );
}
}

const mapStateToProps = (state: any) => {
  const { harvestData  } = state;

  return {
    harvestData 
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getHarvestById1: (id: any) => {
      dispatch(getHarvestById(id));
    },
    storeHarvestData1: (obj: any) => {
      dispatch(storeHarvestData(obj));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(HarvestingEditPage);