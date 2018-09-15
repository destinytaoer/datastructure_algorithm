# 树的遍历

遍历二叉树

树的遍历就是按某种次序访问树中的结点，要求每个结点访问一次且只访问一次 一个二叉树由根结点与左子树和右子树组成 设访问根结点用 D 表示，遍历左右子树用 L、R表示 如果按规定先左子树后右子树，则共有三种组合：

D L R 先序遍历 L D R 中序遍历 L R D 后序遍历 3.1 先序遍历

算法：

若二叉树为空，则返回 访问根结点 遍历左子树 遍历右子树 实现：

void PreOrdeeTraverse\(BinTree T\) { if \(T\) { cout &lt;&lt; T-&gt;data; PreOrderTraverse\(T-&gt;lchild\); PreOrderTraverse\(T-&gt;rchild\); } } 先序遍历中，第一个输出结点必为根结点

3.2 中序遍历

算法：

若二叉树为空，则返回 遍历左子树 访问根结点 遍历右子树 实现：

void InOrderTraverse \(BinTree T\) { if \(T\) { InOrderTraverse\(T-&gt;lchild\); count&lt;data; InOrderTraverse\(T-&gt;rchild\); } } 3.3 后序遍历

算法：

若二叉树为空，则返回 遍历左子树 遍历右子树 访问根结点 实现：

void PostOrderTraverse \(BinTree T\) { if \(T\) { PostOrderTraverse\(T-&gt;lchild\); PostOrderTraverse\(T-&gt;rchild\); count&lt;data; } } 3.4 根据先、中遍历求序列二叉树

如果已知一颗二叉树的先序遍历和中序遍历序列，则可以唯一确定这颗二叉树。

算法：

在先序遍历序列中，第一个结点是根结点 D，之后跟左子树 + 右子树 在中序遍历序列中，根结点 D左边的结点为左子树，右边为右子树 对每个子树反复使用 1、2步，直到确定二叉树 3.5 根据后、中遍历求序列二叉树

如果已知一颗二叉树的先序遍历和中序遍历序列，则可以唯一确定这颗二叉树。

算法：

在后序遍历序列中，最后一个结点为根结点，前为左子树 + 右子树 在中序遍历序列中，根结点 D左边的结点为左子树，右边为右子树 对每个子树反复使用 1、2步，直到确定二叉树

