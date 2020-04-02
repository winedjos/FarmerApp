import { IonItem, IonContent, IonPage, IonRow,IonCol,IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getSeedById, storeSeedData } from "../../../store/actions/Seedings";
import { useDispatch, connect } from 'react-redux';
import Footer from '../../common/Footer';


interface ISeedAddEditProps {
  dispatch: Dispatch<any>;
  getSeedById1: any;
  storeSeedData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  seedData: any;
  LandDetailData: any;

}

interface ISeedAddEditState {
    quantity: any;
    seedName: any;
    seedCost: any;
    nOofLabours: any;
    labourCost: any;
    id: 0;
    landDetailsId: any;
    partitionLandDetailsId: any;
  
}


class SeedEditPage extends React.Component<ISeedAddEditProps, ISeedAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
        quantity: null,
        seedName: null,
        seedCost: null,
        nOofLabours: null,
        labourCost: null,
        id:0,
        landDetailsId: 0,
        partitionLandDetailsId: 0,
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getSeedById1(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.seedData.isFormSubmit) {
      window.location.href = '/seedings';
    }
    if (newProps.seedData.Seeditems) {
      this.setState({
        landDetailsId: newProps.seedData.Seeditems.selectedLandDetailId,
        partitionLandDetailsId: newProps.seedData.Seeditems.selectedPartLandDetailId,
        seedCost: newProps.seedData.Seeditems.seedCost,
        nOofLabours: newProps.seedData.Seeditems.nOofLabours,
        labourCost: newProps.seedData.Seeditems.labourCost,
        id: newProps.seedData.Seeditems.id,
        seedName: newProps.seedData.Seeditems.seedName,
        quantity: newProps.seedData.Seeditems.quantity,
      })
    }
  }

  handleOnsubmit(event: any) {   
    event.preventDefault();   
    this.props.storeSeedData1(this.state);
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
              <h1> Edit Seeding </h1>
            </div>
            {this.state.id && (
            <form className="form">
              <IonRow>
                <IonCol>
                    <IonText className="reg-fields">
                      {this.props.seedData.Seeditems.landDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handleLandChange}>
                          {this.props.seedData.Seeditems.landDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.props.seedData.Seeditems.selectedLandDetailId} > {data.name} </IonSelectOption>) })}
                        </IonSelect>)}
                      <label> Partition Land Name </label>
                      {this.props.seedData.Seeditems.partLandDetailName && (
                        <IonSelect className="dropclr" onIonChange={this.handlePLChange}>
                          {this.props.seedData.Seeditems.partLandDetailName.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.props.seedData.Seeditems.selectedPartLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                        </IonSelect>)}
                      Quantity <input type="text" name="quantity" className="input-text" onChange={this.handleChange} value={this.state.quantity} />
                      Seed Name <input type="text" name="seedName" className="input-text" onChange={this.handleChange} value={this.state.seedName} />
                      Seed Cost <input type="text" name="seedCost" className="input-text" onChange={this.handleChange} value={this.state.seedCost} />
                      NO of Labours <input type="text" name="nOofLabours" className="input-text" onChange={this.handleChange} value={this.state.nOofLabours} />
                      Labour Cost <input type="text" name="labourCost"  className="input-text" onChange={this.handleChange} value={this.state.labourCost} />
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
  const { seedData } = state;

  return {
    seedData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getSeedById1: (id: any) => {
      dispatch(getSeedById(id));
    },
    storeSeedData1: (id: any) => {
      dispatch(storeSeedData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(SeedEditPage);