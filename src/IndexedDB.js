class IndexedDB{
    constructor(){
        if(!window.indexedDB){
            console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }

    }

    init(){
        this.request = window.indexedDB.open("MovieDatabase");
        this.request.onupgradeneeded = function(event){
            const db = this.request.result;
            const storeData = db.createObjectStore("movies",{keyPath : "id"})  
        }
        this.request.onsuccess = function ()  {
            this.db = this.request.result;
            this.transaction = this.db.transaction("movies","readwrite");
            this.store = this.transaction.objectStore("movies");
        }
    }


    addFavoriteMovie(movie){
        if(movie == null){
            return false;
        }

        this.store.put(movie);
        return true;
    }

    getFavoriteMovie(){
        return this.store.getAll();
    }

    closeDB(){
        this.transaction.oncomplete = function (){
            this.db.close();
        }
    }
}

export default IndexedDB;