export class Task{
    constructor(id, title,  completed){
      this._id = id;
      this._title = title;
      this._completed = completed;
    }

    // Mark Task as Completed
    completed(){
      this._completed = true;
    }

    // Getters
    get id() {
      return this._id;
    }

    get title() {
      return this._title;
    }

    set title(value) {
      this._title = value;
    }


    get completed() {
      return this._completed;
    }
}

