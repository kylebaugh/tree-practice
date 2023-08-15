export default class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }


}



    // first() {
    //     return this.items[0]
    // }

    // all() {
    //     return this.items
    // }

    // size() {
    //     return this.items.length
    // }

    // isMT(){
    //     return this.size() === 0
    // }