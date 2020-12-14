class FormFields{
  constructor(data = {}){
    this.val = data.val || "";
    this.err = data.err || false;
  }
}

export default FormFields;