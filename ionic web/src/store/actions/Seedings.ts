export const STORE_SEEDINGS_STARTED = "STORE_SEEDINGS_STARTED";
export const STORE_SEEDINGS_COMPLETED = "STORE_SEEDINGS_COMPLETED";
export const STORE_SEEDINGS_FAILED = "STORE_SEEDINGS_FAILED";

export const GET_SEEDING_STARTED = "GET_SEEDING_STARTED";
export const GET_SEEDING_COMPLETED = "GET_SEEDING_COMPLETED";
export const GET_SEEDING_FAILED = "GET_SEEDING_FAILED";

export const DELETE_SEEDING_STARTED = "DELETE_SEEDING_STARTED";
export const DELETE_SEEDING_COMPLETED = "DELETE_SEEDING_COMPLETED";
export const DELETE_SEEDING_FAILED = "DELETE_SEEDING_FAILED";

export const GET_SEEDINGBYID_STARTED = "GET_SEEDINGBYID_STARTED";
export const GET_SEEDINGBYID_COMPLETED = "GET_SEEDINGBYID_COMPLETED";
export const GET_SEEDINGBYID_FAILED = "GET_SEEDINGBYID_FAILED";

export const storeSeedData = (seedInput: any) => {
  return {
    type: STORE_SEEDINGS_STARTED,
    input: seedInput
  };
};

export const getSeedList = () => {
  return {
    type: GET_SEEDING_STARTED
  };
};

export const getSeedById = (id: any) => {
  return {
    type: GET_SEEDINGBYID_STARTED,
    id: id
  };
};


export const deleteSeed = (id: any) => {
  return {
    type: DELETE_SEEDING_STARTED,
    id: id
  };
};
