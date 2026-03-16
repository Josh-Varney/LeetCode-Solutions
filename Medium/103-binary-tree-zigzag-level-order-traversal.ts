function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    let res: number[][] = [];
    let queue: TreeNode[] | null = [root];
    let count = 0;

    while (queue.length > 0){
        let qLen = queue.length;
        let level = [];

        for (let i = 0; i < qLen; i++){
            const node = queue.shift();
            if (node){
                level.push(node!.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            } 
        }


        if (level.length > 0 && count === 0){
            res.push(level);
            count++;
        } else if (level.length > 0 && count === 1)  {
            level.reverse();
            res.push(level);
            count--;
        }
    }

    return res;
};