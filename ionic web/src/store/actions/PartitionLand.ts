﻿export const STORE_PARTITIONLAND_STARTED = "STORE_PARTITIONLAND_STARTED";
export const STORE_PARTITIONLAND_COMPLETED = "STORE_PARTITIONLAND_COMPLETED";
export const STORE_PARTITIONLAND_FAILED = "STORE_PARTITIONLAND_FAILED";

export const GET_PARTITIONLAND_STARTED = "GET_PARTITIONLAND_STARTED";
export const GET_PARTITIONLAND_COMPLETED = "GET_PARTITIONLAND_COMPLETED";
export const GET_PARTITIONLAND_FAILED = "GET_PARTITIONLAND_FAILED";

export const DELETE_PARTITIONLAND_STARTED = "DELETE_PARTITIONLAND_STARTED";
export const DELETE_PARTITIONLAND_COMPLETED = "DELETE_PARTITIONLAND_COMPLETED";
export const DELETE_PARTITIONLAND_FAILED = "DELETE_PARTITIONLAND_FAILED";

export const GET_PARTITIONLANDBYID_STARTED = "GET_PARTITIONLANDBYID_STARTED";
export const GET_PARTITIONLANDBYID_COMPLETED = "GET_PARTITIONLANDBYID_COMPLETED";
export const GET_PARTITIONLANDBYID_FAILED = "GET_PARTITIONLANDBYID_FAILED";

export const storePartitionLandData = (partitionLandInput: any) => {
  return {
    type: STORE_PARTITIONLAND_STARTED,
    input: partitionLandInput
  };
};

export const getPartitionLandList = () => {
  return {
    type: GET_PARTITIONLAND_STARTED
  };
};

export const getPartitionLandById = (id:any) => {
  return {
    type: GET_PARTITIONLANDBYID_STARTED,
    id:id
  };
};

export const deletePartitionLand = (id:any) => {
  return {
    type: DELETE_PARTITIONLAND_STARTED,
    //payload: status,
    id: id
  };
};

