import { IonItem, IonContent, IonPage, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getPartitionLandById, storePartitionLandData } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';
import { resolveAny } from 'dns';
import { URLSearchParams } from 'url';
import { useLocation } from 'react-router';

interface IPartLandAddEditProps {
  partitionLandInput: any;
  dispatch: Dispatch<any>;
  getPartitionLandById1: any;
  storePartitionLandData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IPartLandAddEditState {
  
    landDirection: any;
    areaSize: any;
  landDetailsId: any;
    id: 0;
}

class ManagePartitionEditPage extends React.Component<IPartLandAddEditProps,IPartLandAddEditState> {
  constructor(props : any) {
    super(props);

    this.state = {
     
        landDirection: null,
        areaSize: 0,
      landDetailsId: 0,
        id:0,
     
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }
  componentWillMount() {
    this.props.getPartitionLandById1(this.props.match.params.id);
  }

 
  handleOnsubmit(event : any) {
   event.preventDefault();
    //const { dispatch } = this.props;
    this.props.storePartitionLandData1(this.state);
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.PartitionLandData.isFormSubmit) {
      window.location.href = '/managePartitions';
    }
    if (newProps.PartitionLandData.PLitem) {
      this.setState({
        landDetailsId: newProps.PartitionLandData.PLitem.selectedLandDetailId,
        landDirection: newProps.PartitionLandData.PLitem.landDirection,
        areaSize: newProps.PartitionLandData.PLitem.areaSize,
        id: newProps.PartitionLandData.PLitem.id
      })
    }
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

 
    handleLandChange = (event : any) => {
      this.setState({
        landDetailsId: event.target.value
      });
    }
 

  render() {
     return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1> Edit Manage Partition </h1>
            </div>
            {this.state.id && (
              <form className="form">
                 {this.props.PartitionLandData.PLitem.landDetailName && (
                   <IonSelect className="dropclr" onIonChange={this.handleLandChange}>
                     {this.props.PartitionLandData.PLitem.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.PartitionLandData.PLitem.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                  </IonSelect>)}
                Land Direction<input type="text" className="input-text" name="landDirection" onChange={this.handleChange} value={this.state.landDirection} />
                Area Size <input type="text" className="input-text" name="areaSize" onChange={this.handleChange} value={this.state.areaSize} />
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
