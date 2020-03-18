import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPestControlById, storePestControlData } from "../../../store/actions/PestControl";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';

interface IPestControlAddEditProps {
  dispatch: Dispatch<any>;
  getPestControlById1: any;
  storePestControlData1: any;
  pestControlData: any;
  //PartitionLandData: any;
  match: any;
  params: any;
  // LandDetailData: any;

}

interface IPestControlAddEditState {
    landDetailsId: 0,
    partitionLandDetailsId: 0,
    id: 0,
    nameofthePestSide: any;
    Cost: any;
    purpose: any;
    labourCost: any;
  pestControlDate: any;
}

class PestControlEditPage extends React.Component<IPestControlAddEditProps, IPestControlAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
        id: 0,
        landDetailsId: 0,
        partitionLandDetailsId: 0,
        nameofthePestSide: null,
        Cost: null,
        purpose: null,
        labourCost: null,
      pestControlDate: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPestControlById1(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps: any) {
    //if (!newProps.weedRemoveData.isFormSubmit) {
    //  window.location.href = '/weedRemoves';
    //}
    if (newProps.pestControlData.PetsControlItems) {
      this.setState({
        landDetailsId: newProps.pestControlData.PetsControlItems.selectedLandDetailId,
        partitionLandDetailsId: newProps.pestControlData.PetsControlItems.selectedPartLandDetailId,
        Cost: newProps.pestControlData.PetsControlItems.cost,
        nameofthePestSide: newProps.pestControlData.PetsControlItems.nameofthePestSide,
        labourCost: newProps.pestControlData.PetsControlItems.labourCost,
        purpose: newProps.pestControlData.PetsControlItems.purpose,
        id: newProps.pestControlData.PetsControlItems.id,
        pestControlDate: newProps.pestControlData.PetsControlItems.pestControlDate
      })
    }
  }

  handleOnsubmit(event: any) {    
    event.preventDefault();
    this.props.storePestControlData1(this.state);
  }
  setDate(dateValue: any) {
    this.setState({
      ...this.state,
      pestControlDate: dateValue
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
              <h1> Edit Pest Control </h1>
               </div>
               {this.state.id > 0 &&(
            <form className="form">
              <IonRow>
                <IonCol>
                     <IonText className="reg-fields">
                       <label> Land Name </label>
                         {this.props.pestControlData.PetsControlItems.landDetailName && (
                           <IonSelect className="dropclr" onIonChange={this.handleLandChange}>
                             {this.props.pestControlData.PetsControlItems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.pestControlData.PetsControlItems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                         </IonSelect>)}
                       <label> Partition Land Name </label>
                         {this.props.pestControlData.PetsControlItems.partLandDetailName && (
                           <IonSelect className="dropclr" onIonChange={this.handlePLChange}>
                             {this.props.pestControlData.PetsControlItems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.pestControlData.PetsControlItems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                         </IonSelect>)}
                         <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.pestControlDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>                     
                         Name of the PestSide Name<input type="text" name="nameofthePestSide" className="input-text" onChange={this.handleChange} value={this.state.nameofthePestSide} required />
                         Cost <input type="text" name="Cost" className="input-text" onChange={this.handleChange} value={this.state.Cost} required />
                         Purpose <input type="text" name="purpose" className="input-text" onChange={this.handleChange} value={this.state.purpose} required />
                         Labour Cost <input type="text" name="labourCost" className="input-text" onChange={this.handleChange} value={this.state.labourCost} required />

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
  const { pestControlData } = state;

  return {
    pestControlData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getPestControlById1: (id: any) => {
      dispatch(getPestControlById(id));
    },
    storePestControlData1: (id: any) => {
      dispatch(storePestControlData(id));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(PestControlEditPage);