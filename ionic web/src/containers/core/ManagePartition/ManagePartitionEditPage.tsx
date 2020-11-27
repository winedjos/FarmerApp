﻿import { IonItem, IonContent, IonPage, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect, IonLoading, IonRow, IonCol, IonText } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getPartitionLandById, storePartitionLandData } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';
import { validatePartiation } from '../../common/FormValidationRules';

interface IPartLandAddEditProps {
  partitionLandInput: any;
  dispatch: Dispatch<any>;
  getPartitionLandById1: any;
  storePartitionLandData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;
  getLandDetailList:any;
}

interface IPartLandAddEditState {

  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  isSubmitting: boolean;
  selectedLand: any;
  errors: any;    
}

class ManagePartitionEditPage extends React.Component<IPartLandAddEditProps,IPartLandAddEditState> {
  constructor(props : any) {
    super(props);

    this.state = {
      input: this.inputInit,
      isFormSubmited: false,
      isEdit: false,
      selectedLand: {},
      isSubmitting: false,
      errors: {}
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }
  componentWillMount() {
    this.props.getPartitionLandById1(this.props.match.params.id);
    var id = this.props.match.params.id;
    if (id && id !== null && id !== 0 && id !== "0") {
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
  }
  inputInit = {
    landDirection: "",
    notes: "",
    areaSize: 0,
    landDetailId: 0,
    id: 0,
    isFormSubmited: false

  };
 
  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validatePartiation(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);

  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storePartitionLandData1(values);
    }
  }
  getLand(id: any) {
    if (this.props.LandDetailData.Landitems.length > 0) {
      var item = this.props.LandDetailData.Landitems.find((x: { id: any; }) => x.id === id);
      
      return item;
    }
    return null;
  }

  componentWillReceiveProps(newProps: any) {
    if(this.state.isFormSubmited && newProps.PartitionLandData.isPartLandNameExist)
    {
      this.setState({ isFormSubmited: false });
      alert("Given land name exist");
      return;
    }
    if (!newProps.PartitionLandData.isFormSubmit && !newProps.PartitionLandData.isFormSubmit ) { 
      this.setState({ isFormSubmited: false });
      window.location.href = '/managePartitions';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (newProps.PartitionLandData.PLitem) {

      var item = newProps.PartitionLandData.PLitems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
      var land = this.getLand(item.landDetailId);

      this.setState({
        input: {

          ...item,
          landDetailId: item.landDetailId,
        },
        selectedLand: land
      });      
    }
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    var errors = validatePartiation(this.state.input);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          [name]: value
        },
        errors: errors
      });
    }
  }

 
    handleLandChange = (event : any) => {      
     
      var selectedLand = this.getLand(event.target.value);
      if (this.state) {
        const { input } = this.state;
        this.setState({
          input: {
            ...input,
            landDetailId: event.target.value,
            partitionLandDetailId:0
          },
          selectedLand: selectedLand
        
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
                 <div> Add Partition </div>
               )}
               {this.state.isEdit && (
                 <div> Edit Partition </div>
               )}
            </div>     
            <IonLoading
                isOpen={this.state.isFormSubmited}
                onDidDismiss={() => this.setState({ isFormSubmited: false })}
                message={'Please wait...'}               
              />       
              <form className="form">
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
                          Land Direction<input type="text" className="input-text" name="landDirection" onChange={this.handleChange} value={this.state.input.landDirection} />
                        {this.state.errors.landDirection && (
                          <p className="help is-danger">{this.state.errors.landDirection}</p>
                        )}
                      
                        
                           Area Size (By Acre) <input type="number" className="input-text"  name="areaSize" onChange={this.handleChange} value={this.state.input.areaSize}  /> 
                        {this.state.errors.areaSize && (
                          <p className="help is-danger">{this.state.errors.areaSize}</p>
                         )}

                          Notes <textarea  className="input-text"  name="notes" onChange={this.handleChange} value={this.state.input.notes}  /> 
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
            <button className="ok-btn" onClick={this.handleOnsubmit}>SAVE </button>
        </footer>
      </IonPage>
    );
  }
};

const mapStateToProps = (state: any) => {
  const { PartitionLandData, LandDetailData} = state;

  return {
    PartitionLandData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch:any) => { 
  return {
    getPartitionLandById1: (id:any) => {
      dispatch(getPartitionLandById(id));
    },
   storePartitionLandData1: (id: any) => {
     dispatch(storePartitionLandData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ManagePartitionEditPage);
