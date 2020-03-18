import { IonItem, IonContent, IonPage,IonText,IonCol,IonRow, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getLandDetailById, storeLandDetailData } from "../../../store/actions/LandDetail";
//import { getStatelList } from "../../../store/actions/StateList";
import { useDispatch, connect } from 'react-redux';


interface ILandAddEditProps {
  dispatch: Dispatch<any>;
  getLandDetailById1: any;
  storeLandDetailData1: any;
  LandDetailData: any;  
  stateListData: any;
  match: any;
  params: any;
 
}

interface ILandAddEditState {
    id: 0;
    StateId: 0;
    city: any;
    village: any;
    pattaNumber: any;
    areaSize: any;
    name: any;
  
}

class LandDetailEditPage extends React.Component<ILandAddEditProps, ILandAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
        id:0,
        StateId: 0,
        city: null,
        village: null,
        pattaNumber: null,
        areaSize: null,
        name: null,
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getLandDetailById1(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.LandDetailData.isFormSubmit) {
      window.location.href = '/manageLands';
    }
    if (newProps.LandDetailData.LandItem) {
      this.setState({
        StateId: newProps.LandDetailData.LandItem.selectedStateListId,
        city: newProps.LandDetailData.LandItem.city,
        village: newProps.LandDetailData.LandItem.village,
        pattaNumber: newProps.LandDetailData.LandItem.pattaNumber,
        areaSize: newProps.LandDetailData.LandItem.areaSize,
        name: newProps.LandDetailData.LandItem.name,
        id: newProps.LandDetailData.LandItem.id,
       // state: newProps.LandDetailData.Landitems.state
      })
    }
  }

  handleOnsubmit(event: any) {
    event.preventDefault();
    this.props.storeLandDetailData1(this.state);
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

  handleStateChange = (event: any) => {
    this.setState({
      StateId: event.target.value
    });
  }

  render() {
   
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>  Edit Land Detail </h1>
            </div>
            {this.state.id > 0 && (
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <IonLabel>State</IonLabel>
                      <IonItem >   
                        <IonLabel>State</IonLabel>
                        {this.props.LandDetailData.LandItem.states && (
                          <IonSelect placeholder="Select One" className="dropclr" onIonChange={this.handleStateChange}>
                            {this.props.LandDetailData.LandItem.states.map((data: any) => { return <IonSelectOption value={data.id} onChange={this.handleChange} key={data.id} title={data.stateName} selected={data.id == this.props.LandDetailData.LandItem.selectedStateListId}> {data.stateName} </IonSelectOption> })}
                          </IonSelect>
                        )}
                  </IonItem> 
                      City <input type="text" name="city" className="input-text" onChange={this.handleChange} value={this.state.city} required />
                      Village <input type="text" name="village" className="input-text" onChange={this.handleChange} value={this.state.village} required />
                      Patta Number <input type="text" name="pattaNumber" className="input-text" onChange={this.handleChange} value={this.state.pattaNumber} required />
                      Area Size <input type="text" name="areaSize" className="input-text" onChange={this.handleChange} value={this.state.areaSize} required />
                      Land Name <input type="text" name="name" className="input-text" onChange={this.handleChange} value={this.state.name} required />
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
          <Footer />
        </footer>
      </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { LandDetailData, stateListData } = state;

  return {
    LandDetailData, stateListData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetailById1: (id: any) => {
      dispatch(getLandDetailById(id));
    },
    storeLandDetailData1: (id: any) => {
      dispatch(storeLandDetailData(id));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(LandDetailEditPage);