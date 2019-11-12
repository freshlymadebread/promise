function (root){
    var result =[];
    var treeStack = []
    var current=null
    treeStack.push(root)
    while(current || treeStack.length < 1){
        current = treeStack.pop()
        result.push(current.val)
        current.right || treeStack.push(current.right)
        current.left || treeStack.push(current.left)
    }
    console.log(result)
}