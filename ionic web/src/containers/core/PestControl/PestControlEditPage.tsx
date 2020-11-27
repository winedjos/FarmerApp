﻿import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPestControlById, storePestControlData } from "../../../store/actions/PestControl";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';
import { validatePestControl } from '../../common/FormValidationRules';

interface IPestControlAddEditProps {
  dispatch: Dispatch<any>;
  getPestControlById1: any;
  storePestControlData1: any;
  pestControlData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IPestControlAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  selectedLand: any;
  partitionList: any;
  isSubmitting: boolean;
  errors: any;
}

class PestControlEditPage extends React.Component<IPestControlAddEditProps, IPestControlAddEditState> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: this.inputInit,
      isFormSubmited: false,
      isEdit: false,
      selectedLand: {},
      partitionList: [],
      isSubmitting: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  inputInit = {
  id: 0,
  landDetailId: 0,
  partitionLandDetailId: 0,
  nameofthePestSide: "",
  cost: 0,
  purpose: "",
  labourCost: 0,
  notes: "", 
  pestControlDate: new Date(),
};

  componentWillMount() {
    var id = this.props.match.params.id;
    if (id && id !== null && id !== 0 && id !== "0") {      
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
  }

  componentWillReceiveProps(newProps: any) {
    if(newProps.pestControlData.isPestControlExist)
    {
      this.setState({ isFormSubmited: false });
      alert("Given land name exist");
      return;
    }
    if (!newProps.pestControlData.isFormSubmit && !newProps.pestControlData.isFormSubmit) {
      this.setState({ isFormSubmited: false });
      window.location.href = '/pestControls';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (this.state.isEdit && newProps.pestControlData.PetsControlItems) {
      var item = newProps.pestControlData.PetsControlItems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
      var land = this.getLand(item.partitionLandDetail.landDetailId);

      this.setState({
        input: {

          ...item,
          landDetailId: item.partitionLandDetail.landDetailId,
          partitionLandDetailId: item.partitionLandDetailId,
        },
        selectedLand: land,
        partitionList: land.partitionLandDetails
      });
    }     
  }
  setDate(dateValue: any) {
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          pestControlDate: dateValue
        }

      });
    }
  }


  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validatePestControl(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);

  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storePestControlData1(values);
    }
  }
  getLand(id: any) {
    if (this.props.LandDetailData.Landitems.length > 0) {
      var item = this.props.LandDetailData.Landitems.find((x: { id: any; }) => x.id === id);
      
      return item;
    }
    return null;
  }
  handleLandChange = (event: any) => {
    if (this.state.isSubmitting) { return; }
   
    var selectedLand = this.getLand(event.target.value);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          landDetailId: event.target.value,
          partitionLandDetailId:0
        },
        selectedLand: selectedLand,
        partitionList: selectedLand.partitionLandDetails
       
      });
    }
  }

  handlePLChange = (event: any) => {
    
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          partitionLandDetailId: event.target.value
        }
       
      });
    }
  }


  handleChange(event: any) {
    const { name, value } = event.target;
   
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          [name]: value
        },
        
      });
    }
  }

  render() {
       return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="AEreg-head">                 
                 {!this.state.isEdit && (
                   <div>  Add Pest Control </div>
                 )}
                 {this.state.isEdit && (
                   <div>  Edit Pest Control </div>
                 )}
               </div>
               <IonLoading
                isOpen={this.state.isFormSubmited}
                onDidDismiss={() => this.setState({ isFormSubmited: false })}
                message={'Please wait...'}               
              />
            <form className="form AddEditScroll">
              <IonRow>
                <IonCol>
                     <IonText className="reg-fields">
                       <label> Land Name </label>
                         {this.props.LandDetailData.Landitems && (
                           <IonSelect className="dropclr" onIonChange={this.handleLandChange} value={this.state.input.landDetailId}>
                             {this.props.LandDetailData.Landitems.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.state.input.landDetailId} > {data.name} </IonSelectOption>) })}
                           </IonSelect>)}
                         {this.state.errors.landDetailId && (
                           <p className="help is-danger">{this.state.errors.landDetailId}</p>
                         )}
                       <label> Partition Land Name </label>
                         <IonSelect className="dropclr" onIonChange={this.handlePLChange} value={this.state.input.partitionLandDetailId}>
                           {this.state.partitionList.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.state.input.partitionLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                           </IonSelect>
                         {this.state.errors.partitionLandDetailId && (
                           <p className="help is-danger">{this.state.errors.partitionLandDetailId}</p>
                         )}
                         <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.input.pestControlDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>                     
                         {this.state.errors.pestControlDate && (
                           <p className="help is-danger">{this.state.errors.pestControlDate}</p>
                         )}
                         Name of the Pesticide Name<input type="text" name="nameofthePestSide" className="input-text" onChange={this.handleChange} value={this.state.input.nameofthePestSide} required />
                         {this.state.errors.nameofthePestSide && (
                           <p className="help is-danger">{this.state.errors.nameofthePestSide}</p>
                         )}
                         Cost <input type="number" name="cost" className="input-text" onChange={this.handleChange} value={this.state.input.cost} required />
                         {this.state.errors.cost && (
                           <p className="help is-danger">{this.state.errors.cost}</p>
                         )}
                         Purpose <input type="text" name="purpose" className="input-text" onChange={this.handleChange} value={this.state.input.purpose} required />
                         {this.state.errors.purpose && (
                           <p className="help is-danger">{this.state.errors.purpose}</p>
                         )}
                         Labour Cost <input type="number" name="labourCost" className="input-text" onChange={this.handleChange} value={this.state.input.labourCost} required />
                         {this.state.errors.labourCost && (
                           <p className="help is-danger">{this.state.errors.labourCost}</p>
                         )}
                         Notes <textarea name="notes" className="input-text" onChange={this.handleChange} value={this.state.input.notes} />
                    {this.state.errors.notes && (
                      <p className="help is-danger">{this.state.errors.notes}</p>
                    )}
                  </IonText>
                </IonCol>
              </IonRow>
                 </form>
               
          </div>
        </IonContent>
        <footer className="footcolor" >
        <Footer />
               <button className="ok-btn" onClick={this.handleOnsubmit}> SAVE </button>      
        </footer>
      </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { pestControlData, LandDetailData } = state;

  return {
    pestControlData, LandDetailData
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