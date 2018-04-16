import React from 'react';
import PropTypes from 'prop-types';
import D3Tree from 'react-d3-tree';

const Tree = ({ treeData, handleClick }) => (
    <div className='tree-wrapper'>
        <D3Tree
            data={treeData}
            nodeSvgShape={{ shape: 'circle', shapeProps: { r: 30 } }}
            orientation='vertical'
            pathFunc='straight'
            collapsible={false}
            textLayout={{
                textAnchor: 'start', x: -5, y: 0,
            }}
            translate={{ x: 400, y: 80 }}
            zoom={0.7}
            onClick={handleClick}
        />
    </div>
);

Tree.propTypes = {
    treeData: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Tree;
