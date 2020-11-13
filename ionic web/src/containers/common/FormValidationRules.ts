
function checkIsNullorEmpty(value: any) {
  if (!value || value === "" || value === null || value === 0) {
    return true;
  }
  else {
    return false;
  }
}

function checkValidNumeric(value: any){
  if (value <= 0){
    return true;
  }
  else {
    return false;
  }
}

function CheckAlphabets(value:any){  
  if(value)
  {
    return true;
  }
  else{
    return false;
  }
}

export const validateLandDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.StateId)) {
    errors.StateId = 'Please select the state';
  }
  if (checkIsNullorEmpty(values.city)) {
    errors.city = 'Please fill the value of city ';
  }

  if (checkIsNullorEmpty(values.village)) {
    errors.village = 'Please fill the value of village';
  }

  //if (checkIsNullorEmpty(values.pattaNumber)) {
  //  errors.pattaNumber = 'Please fill the value of pattaNumber';
  //}

  //if (checkIsNullorEmpty(values.areaSize)) {
    //errors.areaSize = 'Please fill the value of areaSize';
  //}

  if (checkIsNullorEmpty(values.name)) {
    errors.name = 'Please fill the value of name';
  }
  //else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //  errors.email = 'Email address is invalid';
  //}
  if (checkValidNumeric(values.areaSize)){
    errors.areaSize = ' Please enter valid value';
  }

  if (checkValidNumeric(values.pattaNumber)){
    errors.pattaNumber = ' Please enter valid value';
  }
  if (checkValidNumeric(values.surveyNumber)){
    errors.surveyNumber = ' Please enter valid value';
  }
  return errors;
};

export const validatePartiation = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }  

  if (checkIsNullorEmpty(values.landDirection)) {
    errors.landDirection = 'Please fill the value of land direction';
  }

 // if (checkIsNullorEmpty(values.areaSize)) {
   // errors.areaSize = 'Please fill the value of areaSize';
  //}
  if (checkValidNumeric(values.areaSize)){
    errors.areaSize='Please enter valid value';
  }
  return errors;
};


export const validatePlowingDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  if (checkIsNullorEmpty(values.plowingDate)) {
    errors.plowingDate = 'Please fill the value of plowingDate ';
  }

  if (checkIsNullorEmpty(values.typeofPlowing)) {
    errors.typeofPlowing = 'Please fill the value of type of plowing';
  }

  //if (checkIsNullorEmpty(values.plowingExp)) {
   // errors.pattaNumber = 'Please fill the value of plowingExp';
  //}
  if (checkValidNumeric(values.plowingExp)){
    errors.plowingExp ='Please enter valid value';
  }
  return errors;
};

export const validatePestControl = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  if (checkIsNullorEmpty(values.pestControlDate)) {
    errors.pestControlDate = 'Please fill the value of pestControlDate ';
  }
  if (checkIsNullorEmpty(values.nameofthePestSide)) {
    errors.nameofthePestSide = 'Please fill the value of name of the pesticide ';
  }
  //if (checkIsNullorEmpty(values.cost)) {
    //errors.cost = 'Please fill the value of Cost ';
  //}
  if (checkValidNumeric(values.cost)) {
    errors.cost = 'Please enter valid value ';
  }
  if (checkIsNullorEmpty(values.purpose)) {
    errors.purpose = 'Please fill the value of purpose';
  }

  //if (checkIsNullorEmpty(values.labourCost)) {
    //errors.labourCost = 'Please fill the value of labourCost';
  //}
  if (checkValidNumeric(values.labourCost)) {
    errors.labourCost = 'Please enter valid value';
  }
  return errors;
};

export const validateHarvesting = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date ';
  }  
  //if (checkIsNullorEmpty(values.cost)) {
    //errors.cost = 'Please fill the value of Cost ';
 // }
  if (checkValidNumeric(values.cost)) {
    errors.cost = 'Please enter valid value ';
  }
  if (checkValidNumeric(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of labours';
  }
  //if (checkIsNullorEmpty(values.labourCost)) {
   // errors.labourCost = 'Please fill the value of labourCost';
  //}
  if (checkValidNumeric(values.labourCost)) {
    errors.labourCost = 'Please enter valid value';
  }
  return errors;
};


export const validateSale = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  //if (checkIsNullorEmpty(values.quantity)) {
    //errors.quantity = 'Please select the quantity';
 // }
  if (checkValidNumeric(values.quantity)) {
    errors.quantity = 'Please enter valid value';
  }
  if (checkIsNullorEmpty(values.saleDate)) {
    errors.saleDate = 'Please fill the value of saleDate';
  }
  //if (checkIsNullorEmpty(values.price)) {
   // errors.price = 'Please fill the value of price';
  //}
  if (checkValidNumeric(values.price)){
    errors.price = 'Please enter valid value';
  }
  if (checkIsNullorEmpty(values.buyerName)) {
    errors.buyerName = 'Please fill the value of buyer name';
  }
  if (checkValidNumeric(values.buyerMobileNumber)) {
    errors.buyerMobileNumber = 'Please fill the value of buyer Mobile Number';
  }
  return errors;
};


export const validateSeeding = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  //if (checkIsNullorEmpty(values.quantity)) {
   // errors.quantity = 'Please fill the value of quantity';
 // }
  if(checkValidNumeric(values.quantity)){
    errors.quantity ='Please enter valid value';
  }
  if (checkValidNumeric(values.seedName)) {
    errors.seedName = 'Please fill the value of seed name';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date';
  }
  //if (checkIsNullorEmpty(values.seedCost)) {
    //errors.seedCost = 'Please fill the value of cost';
  //}
  if(checkValidNumeric(values.seedCost)){
    errors.seedCost ='Please enter valid value';
  }
  if (checkValidNumeric(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of labours';
  }
  //if (checkIsNullorEmpty(values.labourCost)) {
    //errors.labourCost = 'Please fill the value of labourCost';
  //}
  if (checkValidNumeric(values.labourCost)) {
    errors.labourCost = 'Please enter valid value';
  }
  return errors;
};

export const validateWeedRemove = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please select the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please select the partition land';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date ';
  }
  //if (checkIsNullorEmpty(values.cost)) {
    //errors.cost = 'Please fill the value of Cost ';
  //}
  if (checkValidNumeric(values.cost)) {
    errors.cost = 'Please enter valid value ';
  }
  if (checkValidNumeric(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of labours';
  }
  //if (checkIsNullorEmpty(values.labourCost)) {
   // errors.labourCost = 'Please fill the value of labourCost';
 // }
  if (checkValidNumeric(values.labourCost)) {
    errors.labourCost = 'Please enter valid value';
  }
  return errors;
};
