import React from 'react';

const Information = () => (
    <div className='bulkinformation'>
        <h2> The Basics </h2>
        <hr />
        <p id='centered'>
            A binary tree is a type of hierarchical data structure, made up of nodes.
            The name {'"'}binary{'"'} tree comes from the defining characteristic where each node in the tree can
            have a maximum of two children. Binary trees are useful in many situations,
            such as with sorting or search, or for handling hierarchical
            data such as the file system in a home computer.
        </p>
        <h3>Characteristics and terminology</h3>
        <hr />
        <ul className='discBullets'>
            <li>The node at the very top of the tree is called the root node.</li>
            <li>
                There are {'"'}parent{'"'} and {'"'}child{'"'} nodes,
                where the parent of a node is the one directly above it,
                and the children nodes are the ones branching directly below.
            </li>
            <img src='/img/parentandchild.png' className='image' alt='Parent and child nodes' />
            <li>Nodes which share the same parent are {'"'}siblings{'"'}.</li>
            <li>Nodes with no children are called {'"'}leaves{'"'}.</li>
            <li>
                A {'"'}complete{'"'} binary tree, is a tree in which every level of the tree is filled,
                and the lowest level is filled from left to right.
            </li>
            <img src='/img/Complete.png' className='image' alt='Complete binary tree' />
            <li>A {'"'}full{'"'} binary tree, is a tree in which every node has either two children or none at all.</li>
            <img src='/img/full.png' className='image' alt='Full binary tree' />
        </ul>

        <h2> Traversals </h2>
        <hr />
        <p id='centered'>
            To traverse a binary tree means to visit every node in it,
            and this can be done using multiple different methods.
            There are two main types of traversals: Depth First, and Breadth First.
        </p>

        <h3>Depth First</h3>
        <hr />
        <p>There are three different depth-first traversal methods:</p>
        <ul className='discBullets'>
            <li>InOrder</li>
            <li>PreOrder</li>
            <li>PostOrder</li>
        </ul>

        <h4>InOrder</h4>
        <hr />
        <p>
            InOrder traversals are carried out from left to right,
            traversing the leftmost subtree first, then the parent node, then the right subtree.
        </p>
        <h4>Examples</h4>
        <img src='/img/inorder.png' className='image' alt='Binary tree 1' />
        <p>
            With InOrder traversal, the nodes in this tree would be visited in the order D-B-F-E-A-C
        </p>
        <img src='/img/inorder2.png' className='image' alt='Binary tree 2' />
        <p>The nodes in this tree would be visited in the order D-B-E-A-F-C-G</p>
        <p className='solidBorder'>
            <strong>Memorising tips:</strong>
            <br />
            An easy way to remember this traversal is {'"'}Left-Root-Right{'"'}.
            <br />
            The traversal is {'"'}in order{'"'} of how you would usually read, left to right.
        </p>

        <h4>PreOrder</h4>
        <hr />
        <p>
            PreOrder traversals are carried out starting from
            the root node. The parent node is visited first,
            then the left subtree is traversed, then the right subtree.
        </p>
        <h4>Examples</h4>
        <img src='/img/inorder.png' className='image' alt='Binary tree 1' />
        <p>
            With PreOrder traversal, the nodes in
            this tree would be visited in the order A-B-D-E-F-C
        </p>
        <img src='/img/inorder2.png' className='image' alt='Binary tree 2' />
        <p>The nodes in this tree would be visited in the order A-B-D-E-C-F-G</p>
        <p className='solidBorder'>
            <strong>Memorising tips:</strong>
            <br />
            An easy way to remember this traversal is {'"'}Root-Left-Right{'"'}.
            <br />
            The root node is visited {'"'}pre{'"'} the other nodes.
        </p>

        <h4>PostOrder</h4>
        <hr />
        <p>
            PostOrder traversals visit the root node last. The left subtree is traversed first,
            followed by the right subtree, and then the root.
        </p>
        <h4>Examples</h4>
        <img src='/img/inorder.png' className='image' alt='Binary tree 1' />
        <p>
            With PostOrder traversal, the nodes in
            this tree would be visited in the order D-F-E-B-C-A
        </p>
        <img src='/img/inorder2.png' className='image' alt='Binary tree 2' />
        <p>The nodes in this tree would be visited in the order D-E-B-F-G-C-A</p>
        <p className='solidBorder'>
            <strong>Memorising tips:</strong>
            <br />
            An easy way to remember this traversal is {'"'}Left-Right-Root{'"'}. <br />
            The root node is visited {'"'}post{'"'} the other nodes.
        </p>

        <h3>Breadth First</h3>
        <hr />
        <p>
            The breadth-first traversal of a tree is known as
            {'"'}level order{'"'}, this is because the traversal is carried out based on the levels of the tree.
            The nodes are visited from left to right for
            every level of the tree from the root node downwards.
        </p>
        <h4>Examples</h4>
        <img src='/img/inorder.png' className='image' alt='Binary tree 1' />
        <p>This tree would be traversed in the order A-B-C-D-E-F</p>
        <img src='/img/inorder2.png' className='image' alt='Binary tree 2' />
        <p>This tree would be traversed in the order A-B-C-D-E-F-G</p>
        <p className='solidBorder'>
            <strong>Memorising tips:</strong>
            <br />
            Breadth-first traversal traverses the breadth (width) of the tree.
            <br />
            It can also help to remember it as {'"'}level order{'"'} traversal as this can help to remind you that
            the traversal consists of traversing each level in order.
        </p>

        <p id='centeredLarge'>
            <br />
            Now that you{'\''}ve learned all about traversals, why not test your knowledge?
            <br />
        </p>
        <div className='buttonGreen'>
            <a href='activity.html' className='btnGreen btn-one'> Go to Activity</a>
        </div>
    </div>
);

export default Information;
