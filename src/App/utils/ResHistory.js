class ResHistory {

  constructor(){
    this._historyItems = JSON.parse(localStorage.getItem('reqItems')) || [];
  }

  get historyItems () {
    return this._historyItems.reverse();
  }

  set historyItems (val) {
    this._historyItems = val;
  }
  
  writeResHistory (req, isErr) {
    const fullReq = {...req, isErr};
  
    if(this.historyItems?.length >= 15) return false;

    const uniqueHistory = this.#uniqueArr(fullReq);
    if(uniqueHistory){
      localStorage.setItem('reqItems', JSON.stringify(uniqueHistory));
      return uniqueHistory;
    }
    return this.historyItems;
  }

  deleteReqItemById (actionId) {
    const filteredArr = this.historyItems.filter(el=>{
      return el.actionId !== actionId;
    });
    this.historyItems = [...filteredArr];
    localStorage.setItem('reqItems', JSON.stringify(this.historyItems));
    console.log(2,this.historyItems);
    return this.historyItems;
  }

  deleteAllHistoryItems () {
    this.historyItems = [];
    localStorage.setItem('reqItems', JSON.stringify(this.historyItems));
    return this.historyItems;
  }

  #uniqueArr(reqItem){
    for(const el of this.historyItems){
      if(this.#isEqualObjects(reqItem, el)){
        return false;
      };
    }
    this.historyItems.push(reqItem);
    return [...this.historyItems];
  }

  #isEqualObjects(o1, o2) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if(key === 'actionId') continue;
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
  
    return true;
  }
}

export default new ResHistory();