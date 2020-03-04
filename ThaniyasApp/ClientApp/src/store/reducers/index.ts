import { combineReducers } from 'redux';
import regData from './Registration/Registration';
import harvestData from './Harvestings/Harvestings';
import weedRemoveData from './WeedRemove/WeedRemove';
import seedData from './Seedings/Seedings';
import saleData from './Sales/Sales';
import plowingData from './Plowings/Plowing';
import pestControlData from './PestControl/PestControl';
import PartitionLandData from './PartitionLand/PartitionLand';
import LandDetailData from './LandDetail/LandDetail';
import stateListData from './StateList/SateList';

const reducers = combineReducers({
  regData,
  harvestData,
  weedRemoveData,
  seedData,
  saleData,
  plowingData,
  pestControlData,
  PartitionLandData,
  LandDetailData,
  stateListData
})

export default reducers;