class Node {
    constructor(data, children=[]){
        this.data = data
        this.children = children
    }

    find(data){
        let toVisit = [this]

        while(toVisit.length > 0){
            console.log(toVisit)
            let current = toVisit.pop()

            if(current.data === data){
                return current
            }

            toVisit = toVisit.concat(current.children)
        }
    }
}

const morgan = new Node('Morgan')
const taylor = new Node('Taylor')
const zuza = new Node('Zuza')
const rachna = new Node('Rachna')
const kyo = new Node('Kyo')
const dawa = new Node('Dawa')
const riley = new Node('Riley')
const mien = new Node('Mien')
const seamus = new Node('Seamus')
const harlow = new Node('Harlow')
const les = new Node('Les')
const endi = new Node('Endi')
const isi = new Node('Isi')

morgan.children.push(taylor, zuza, rachna)
    taylor.children.push(kyo)

    zuza.children.push(dawa, riley)
        dawa.children.push(seamus, harlow)
        riley.children.push(les, endi)

    rachna.children.push(mien)
        mien.children.push(isi)



console.log(morgan.find('Seamus'))