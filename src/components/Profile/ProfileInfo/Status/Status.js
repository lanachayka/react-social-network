import React, { Component } from 'react'

export default class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateProfileStatus(this.state.status);
    }
    
    onStatusChange = (event) => {
        this.setState({ status: event.target.value });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status || "----------"}</span>
                    : <input
                        autoFocus={true}
                        defaultValue={this.state.status}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onStatusChange}
                    ></input>}
            </>
        )
    }
}
