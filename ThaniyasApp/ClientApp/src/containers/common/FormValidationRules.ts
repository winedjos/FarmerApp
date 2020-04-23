
function checkIsNullorEmpty(value: any) {
  if (!value || value === "" || value === null || value === 0) {
    return true;
  }
  else {
    return false;
  }
}
export const validateLandDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.StateId)) {
    errors.StateId = 'Please selecte the state';
  }
  if (checkIsNullorEmpty(values.city)) {
    errors.city = 'Please fill the value of city ';
  }

  if (checkIsNullorEmpty(values.village)) {
    errors.village = 'Please fill the value of village';
  }

  if (checkIsNullorEmpty(values.pattaNumber)) {
    errors.pattaNumber = 'Please fill the value of pattaNumber';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please fill the value of areaSize';
  }

  if (checkIsNullorEmpty(values.name)) {
    errors.name = 'Please fill the value of name';
  }
  //else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //  errors.email = 'Email address is invalid';
  //}
  return errors;
};

export const validatePlowingDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailsId)) {
    errors.landDetailsId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.plowingDate)) {
    errors.city = 'Please fill the value of plowingDate ';
  }

  if (checkIsNullorEmpty(values.typeofPlowing)) {
    errors.village = 'Please fill the value of typeofPlowing';
  }

  if (checkIsNullorEmpty(values.plowingExp)) {
    errors.pattaNumber = 'Please fill the value of plowingExp';
  }
  return errors;
};

export const validatePartiation = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailsId)) {
    errors.landDetailsId = 'Please selecte the land';
  }  

  if (checkIsNullorEmpty(values.landDirection)) {
    errors.landDirection = 'Please fill the value of landDirection';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please fill the value of areaSize';
  }
  return errors;
};
