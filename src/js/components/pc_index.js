import React from 'react';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PcNewscontainar from './pc_newscontainar'

export default class PcIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PcNewscontainar></PcNewscontainar>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
PcIndex.defaultProps = {
};
