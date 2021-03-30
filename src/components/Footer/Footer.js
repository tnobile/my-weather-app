import React from 'react';
import classes from './Footer.module.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myKey: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ myKey: event.target.value });
    }
    handleSubmit(event) {
        alert('submitting:' +this.state.myKey)
        this.props.handleSubmit(this.state.myKey);
        event.preventDefault();
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.item}>Page created by tnobile.</div>
                <div className={classes.item}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Key:
                            <input type="text" value={this.state.myKey} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value='sub' />
                    </form>
                </div>
            </div>
        );
    };
}

export default Footer;