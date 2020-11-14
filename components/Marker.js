import { Component } from 'react';

export class Marker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : this.props.location
        }
        this.renderFunction = this.renderFunction.bind(this);
    }
    renderFunction(parentMap,fakeProps) {
        const marker = new window.google.maps.Marker({
            position: fakeProps.location,
            map: parentMap,
        });
    }

    render() {
        return (null);
    }
}