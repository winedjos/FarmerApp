import { IonItem, IonContent, IonPage,IonRow,IonCol,IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getWeedRemoveById, storeWeedRemoveData } from "../../../store/actions/WeedRemove";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


interface IWeedRemoveAddEditProps {
  dispatch: Dispatch<any>;
  getWeedRemoveById1: any;
  storeWeedRemoveData1: any;
  weedRemoveData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IWeedRemoveAddEditState {
 
    id: 0;
    Cost: any;
    NOofLabours: any;
  LabourCost: any;
  date: any;
  landDetailsId: any;
  partitionLandDetailsId: any;
  
}

class WeedRemoveEditPage extends React.Component<IWeedRemoveAddEditProps, IWeedRemoveAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
     
        id:0,
        Cost: null,
        NOofLabours: null,
      LabourCost: null,
      date: new Date(),
      landDetailsId: 0,
      partitionLandDetailsId: 0,
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getWeedRemoveById1(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps: any) {
    //if (!newProps.weedRemoveData.isFormSubmit) {
    //  window.location.href = '/weedRemoves';
    //}
    if (newProps.weedRemoveData.WeedItems) {
      this.setState({
        landDetailsId: newProps.weedRemoveData.WeedItems.selectedLandDetailId,
        partitionLandDetailsId: newProps.weedRemoveData.WeedItems.selectedPartLandDetailId,
        Cost: newProps.weedRemoveData.WeedItems.cost,
        NOofLabours: newProps.weedRemoveData.WeedItems.nOofLabours,
        LabourCost: newProps.weedRemoveData.WeedItems.labourCost,
        id: newProps.weedRemoveData.WeedItems.id,
        date: newProps.weedRemoveData.WeedItems.date
      })
    }
  }

  handleOnsubmit(event: any) {
     event.preventDefault();
    this.props.storeWeedRemoveData1(this.state);
  }

  setDate(dateValue: any) {
    this.setState({
      ...this.state,
      date: dateValue
    });
  }

   handleChange(event: any) {
    const { name, value } = event.target;
    if (this.state) {
      this.setState({
        ...this.state,
        [name]: value,
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
              <h1> Edit Weed Remove </h1>
            </div>
            {this.state.id > 0 && (
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      {this.props.weedRemoveData.WeedItems.landDetailName && (
                        <IonSelect className="dropclr">
                          {this.props.weedRemoveData.WeedItems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.weedRemoveData.WeedItems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                        </IonSelect>)}
                      <label> Partition Land Name </label>
                      {this.props.weedRemoveData.WeedItems.partLandDetailName && (
                        <IonSelect className="dropclr">
                          {this.props.weedRemoveData.WeedItems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.weedRemoveData.WeedItems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                        </IonSelect>)}
                      <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.date).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>                     
                      Labour Cost <input type="text" name="LabourCost" className="input-text" onChange={this.handleChange} value={this.state.LabourCost} required />
                      Cost <input type="text" name="Cost" className="input-text" onChange={this.handleChange} value={this.state.Cost} required />
                      NO of Labours <input type="text" name="NOofLabours" className="input-text" onChange={this.handleChange} value={this.state.NOofLabours} required />
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

};

const mapStateToProps = (state: any) => {
  const { weedRemoveData } = state;

  return {
    weedRemoveData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getWeedRemoveById1: (id: any) => {
      dispatch(getWeedRemoveById(id));
    },
    storeWeedRemoveData1: (id: any) => {
      dispatch(storeWeedRemoveData(id));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(WeedRemoveEditPage);