import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonGrid, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getViewAllReportList } from "../../../store/actions/ViewAllReport";
import { useDispatch, connect } from 'react-redux';



interface IViewReportProps {
  dispatch: Dispatch<any>;
  getViewAllReportList1: any; 
  match: any;
  params: any;  
  viewAllReportData:any;
}

interface IViewReportState {
  name: any;
  id: 0;
  landDirection : any;  
  income: any;
  purpose: any;
  expense:any;
  ViewAllReportdata :any;
  }


class ViewAll extends React.Component<IViewReportProps, IViewReportState> {
  constructor(props: any) {
    super(props);

    this.state = {
      ViewAllReportdata: [],
      name: null,
      id: 0,
      landDirection: null,
      income: null,
      purpose: null,
      expense: null     
    };
  }

  componentWillMount() {
    this.props.getViewAllReportList1(this.props.match.params.id);
  }

  componentWillReceiveProps(newprops:any) {   
    if (newprops.viewAllReportData.viewAllReports) {
      this.setState({  
        ViewAllReportdata: newprops.viewAllReportData.viewAllReports  
       
      })
    }
  }
 
  render() {
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>View All Reports </h1>
            </div>
           
              <form className="Viewform">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <IonGrid>
                                          
                      <table className="table">
                          <tr>       
                            <th>Land Name</th>                     
                            <th>Partition</th>                             
                            <th>Inc</th>
                            <th>Exp</th>
                          </tr>
                          { this.state.ViewAllReportdata && this.state.ViewAllReportdata.map((report : any, i : any) => 
                             
                                <tr>   
                                  <td>{report.landName}</td>                              
                                  <td>{report.partition}</td>                                  
                                  <td>{report.totalIncome}</td>
                                  <td>{report.totalExpenses}</td>                                  
                                </tr> 
                            )
                          }
                        </table>
                      </IonGrid>
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
          
          </div>
        </IonContent>
       </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { viewAllReportData } = state;

  return {
    viewAllReportData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getViewAllReportList1: () => {
      dispatch(getViewAllReportList());
    },
   
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ViewAll);