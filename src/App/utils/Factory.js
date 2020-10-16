
class Factory {
  formFields(){
    return {
      val: "",
      err: false
    }
  }
}

export default function getModel(model){
  const factory = new Factory();
  return factory[model]();
}

