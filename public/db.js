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

request.onupgradeneeded = (event)=>{
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });

}