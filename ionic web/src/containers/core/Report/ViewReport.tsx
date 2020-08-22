import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonGrid, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getLandDetailById } from "../../../store/actions/LandDetail";
//import { getPartitionLandById } from "../../../store/actions/PartitionLand";
import { getPartitionLandList } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';

interface IViewReportProps {
  dispatch: Dispatch<any>;
  getLandDetailById1: any;
  getPartitionLandList1: any;
  match: any;
  params: any;
  PartitionLandData: any;
  LandDetailData: any;
}

interface IViewReportState {
  name: any;
  id: 0;
  //landDirection : any;  
  }


class ViewReport extends React.Component<IViewReportProps, IViewReportState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: null,
      id: 0,
      //landDirection: null,
    };
  }

  componentWillMount() {
    this.props.getLandDetailById1(this.props.match.params.id);  
    this.props.getPartitionLandList1(this.props.match.params.id);   
  }

  componentWillReceiveProps(newProps: any) {   
    if (newProps.LandDetailData.LandItem) {
      this.setState({        
        name: newProps.LandDetailData.LandItem.name,
        id: newProps.LandDetailData.LandItem.id,
        // state: newProps.LandDetailData.Landitems.state
      })
    }
  }
  //{this.state.id > 0 && (      )}
  render() {

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>View Reports </h1>
            </div>
            {this.state.id > 0 && ( 
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <IonGrid>
                      <table className="table">
                          <tr>
                            <th>Land </th>
                            <th>Partition Land</th> 
                            <th>Income</th>
                            <th>cost</th>
                            <th>Module</th>
                          </tr>
                          <tr>
                            <td>{this.state.name} </td>
                            <td>{this.state.id}</td>
                            <td>50</td>
                          </tr>                         
                        </table>
                      </IonGrid>
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
           )}
          </div>
        </IonContent>
       </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { LandDetailData, PartitionLandData } = state;

  return {
    LandDetailData, PartitionLandData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetailById1: (id: any) => {
      dispatch(getLandDetailById(id));
    },
    getPartitionLandList1: () => {
      dispatch(getPartitionLandList);
    },
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ViewReport);