class ResHistory {
  constructor(){
    this.historyItems = JSON.parse(localStorage.getItem('reqItems')) || [];
  }

  writeResHistory (req, isErr) {
    const fullReq = {...req, isErr};
  
    if(this.historyItems?.length >= 15) return false;

    this.historyItems.push(fullReq);
    const uniqueHistory = this.#uniqueArr(this.historyItems);
    localStorage.setItem('reqItems', JSON.stringify(uniqueHistory));
    return uniqueHistory;
  }

  deleteHistoryItem (item) {
    const stringedItem = JSON.stringify(item);
    const filteredArr = this.historyItems.filter(el=>{
      return JSON.stringify(el) !== stringedItem;
    });
    this.historyItems = filteredArr;
    localStorage.setItem('reqItems', JSON.stringify(this.historyItems));
    return this.historyItems;
  }

  #uniqueArr(history){
    const uniqueArr = [...new Set(history.map(el=>JSON.stringify(el)))];
    return uniqueArr.map(el=>JSON.parse(el));
  }

}

export default new ResHistory();