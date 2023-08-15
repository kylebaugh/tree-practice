

class BinaryTree {
    constructor(data, left=null, right=null){
        this.data = data
        this.left = left
        this.right = right
    }

    add(newNode){
        let current = this

        while(current !== null){
            if(current.data > newNode.data){
                if(current.left !== null){
                    current = current.left
                }else{
                    current.left = newNode
                    return
                }
            }else{
                if(current.right !== null){
                    current = current.right
                }else{
                    current.right = newNode
                    return
                }
            }
        }

    }

}


let medium = new BinaryTree(8)

let large  = new BinaryTree(22)

let small = new BinaryTree(4)

let asdf = new BinaryTree(17)
let asdf2 = new BinaryTree(1)

medium.add(large)
medium.add(small)
medium.add(asdf)
medium.add(asdf2)

console.log(medium)
