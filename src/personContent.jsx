import React from 'react';

class PersonContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name} = this.props;
        return (<div>
            id: {id}
            name: {name}
        </div>);
    }
};

export default PersonContent;
