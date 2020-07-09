let db;

const request = indexedDB.open("budget", 1);

request.onsuccess = (event)=>{
    db = event.target.result
    if(navigator.onLine){
        checkDB()
    }
}

request.onerror = (event)=>{
  console.log(event.target.errorCode);
}
