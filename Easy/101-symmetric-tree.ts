function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    
    function isMirror(leftSubtree: TreeNode | null, rightSubtree: TreeNode | null): boolean {
        if (!leftSubtree && !rightSubtree) return true;
        if (!leftSubtree || !rightSubtree) return false;
        if (leftSubtree.val !== rightSubtree.val) return false;

        const res: boolean = isMirror(leftSubtree.left, rightSubtree.right) && (isMirror(leftSubtree.right, rightSubtree.left));

        return res;
    }

    return isMirror(root.left, root.right);
};