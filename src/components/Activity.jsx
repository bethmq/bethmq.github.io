import React, { Component } from 'react';

import Tree from './Tree/Tree';

class Activity extends Component {
    static findEmptyNode(data, index) {
        const randChildIndex = Math.floor(Math.random() * data.length);

        if (randChildIndex > -1) {
            if (data[randChildIndex].children && data[randChildIndex].children.length < 2) {
                data[randChildIndex].children.push({
                    children: [],
                    name: `${index}`,
                });
            } else {
                Activity.findEmptyNode(data[randChildIndex].children, index);
            }
        }
    }

    static generateRandomTreeData(numNodes) {
        const childrenData = [];

        for (let i = 1; i < numNodes; i += 1) {
            if (childrenData.length < 2) {
                childrenData.push({
                    children: [],
                    name: `${i}`,
                });
            } else {
                Activity.findEmptyNode(childrenData, i);
            }
        }

        return [{
            name: '0',
            children: childrenData,
        }];
    }

    constructor(props) {
        super(props);

        this.state = {
            numNodes: '5',
            treeData: null,
            error: '',
            correctOrder: [],
            selectedOrder: [],
            algorithm: 'inOrder',
            resultMessage: '',
            showOrder: false,
            showCheck: false,
            hasAttempted: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickNode = this.handleClickNode.bind(this);
        this.checkOrder = this.checkOrder.bind(this);
        this.showCorrectAnswer = this.showCorrectAnswer.bind(this);
    }

    inOrderTraversal(data) {
        if (data.children[0]) {
            this.inOrderTraversal(data.children[0]);
        }

        this.setState(prevState => ({
            correctOrder: [...prevState.correctOrder, data.name],
        }));

        if (data.children[1]) {
            this.inOrderTraversal(data.children[1]);
        }
    }

    postOrderTraversal(data) {
        if (data.children[0]) {
            this.postOrderTraversal(data.children[0]);
        }

        if (data.children[1]) {
            this.postOrderTraversal(data.children[1]);
        }

        this.setState(prevState => ({
            correctOrder: [...prevState.correctOrder, data.name],
        }));
    }

    preOrderTraversal(data) {
        this.setState(prevState => ({
            correctOrder: [...prevState.correctOrder, data.name],
        }));

        if (data.children[0]) {
            this.preOrderTraversal(data.children[0]);
        }

        if (data.children[1]) {
            this.preOrderTraversal(data.children[1]);
        }
    }

    breadthFirstTraversal(data) {
        const queue = [];
        queue.push(data);

        while (queue.length > 0) {
            const currentNode = queue[0];
            this.setState(prevState => ({
                correctOrder: [...prevState.correctOrder, currentNode.name],
            }));

            if (currentNode.children[0]) {
                queue.push(currentNode.children[0]);
            }

            if (currentNode.children[1]) {
                queue.push(currentNode.children[1]);
            }

            queue.shift();
        }
    }

    useCorrectAlgorithm(algorithm) {
        if (this.state.treeData) {
            switch (algorithm) {
            case 'inOrder':
                this.inOrderTraversal(this.state.treeData[0]);
                break;
            case 'preOrder':
                this.preOrderTraversal(this.state.treeData[0]);
                break;
            case 'postOrder':
                this.postOrderTraversal(this.state.treeData[0]);
                break;
            case 'breadthFirst':
                this.breadthFirstTraversal(this.state.treeData[0]);
                break;
            default:
                break;
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const { numNodes } = this.state;

        if (numNodes < 2 || numNodes > 10) {
            this.setState({ error: 'Please enter between 2 and 10', resultMessage: '', showOrder: false });
        } else {
            const treeData = Activity.generateRandomTreeData(numNodes);
            this.setState({
                treeData, error: '', correctOrder: [], resultMessage: '', showOrder: false, showCheck: true,
                hasAttempted: false,
            }, () => {
                this.useCorrectAlgorithm(this.state.algorithm);
            });
        }
    }

    handleChange(e) {
        this.setState({
            algorithm: e.target.value, correctOrder: [], resultMessage: '', showOrder: false, hasAttempted: false,
        });
        this.clearSelections();
        this.useCorrectAlgorithm(e.target.value);
    }

    handleClickNode(node, evt) {
        if (this.state.selectedOrder.indexOf(node.name) === -1 && evt.target.tagName === 'circle') {
            evt.target.classList.add('active-node');
            this.setState(prevState => ({
                selectedOrder: [...prevState.selectedOrder, node.name],
                resultMessage: '',
                showOrder: false,
            }));
        }
    }

    checkOrder(e) {
        e.preventDefault();

        const { correctOrder, selectedOrder } = this.state;
        let areEqual = true;

        if (!correctOrder || !selectedOrder || correctOrder.length !== selectedOrder.length) {
            areEqual = false;
        }

        for (let i = 0; i < correctOrder.length; i += 1) {
            if (correctOrder[i] !== selectedOrder[i]) {
                areEqual = false;
            }
        }

        if (areEqual) {
            this.setState({ resultMessage: 'That\'s correct!!' });
        } else {
            this.setState({ resultMessage: 'That\'s wrong, try again.'});
        }

        this.setState({ hasAttempted: true })
        this.clearSelections();
    }

    showCorrectAnswer(e) {
        e.preventDefault();

        this.setState({ resultMessage: 'The correct order is ', showOrder: true});
        this.clearSelections();
    }

    clearSelections() {
        const activeNodes = document.getElementsByClassName('active-node');

        Array.from(activeNodes).forEach(node => node.classList.remove('active-node'));
        this.setState({ selectedOrder: [] });
    }

    render() {
        return (
            <div className='activity'>
                <div className='activity-header'>
                    <form className='activity-form' onSubmit={this.handleSubmit}>
                        Number of Nodes
                        <input type='text' placeholder='5' value={this.state.numNodes} onChange={e => this.setState({ numNodes: e.target.value })} />
                        <button className='btnGreen' type='submit'>Build Tree</button>
                        <div className='error-message'>{this.state.error}</div>
                    </form>
                    {this.state.showCheck &&
                        <div className='activity-test'>
                            <select className='activity-select' onChange={this.handleChange} value={this.state.algorithm}>
                                <option value='inOrder'>In-Order</option>
                                <option value='preOrder'>Pre-Order</option>
                                <option value='postOrder'>Post-Order</option>
                                <option value='breadthFirst'>Breadth-First</option>
                            </select>
                            <div>
                            <button
                                className='activity-test btnGreen'
                                onClick={this.checkOrder}
                                disabled={Number(this.state.numNodes)
                                    !== this.state.selectedOrder.length}
                            >Check your traversal!
                            </button>
                            </div>
                            <button
                                className='activity-test btnGreen'
                                disabled={!this.state.hasAttempted}
                                onClick={this.showCorrectAnswer}
                            >Show Answer
                            </button>
                            <div className='activity-result-message'>{this.state.resultMessage}</div>
                            <div className='activity-order'>
                                {this.state.showOrder
                                    && this.state.correctOrder.map(item => <span>{item}</span>)}
                            </div>
                        </div>
                    }
                </div>
                {this.state.treeData &&
                    <Tree treeData={this.state.treeData} handleClick={this.handleClickNode} />}
            </div>
        );
    }
}

export default Activity;
