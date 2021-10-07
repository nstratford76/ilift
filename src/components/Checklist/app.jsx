import React from "react";
import './app.css'
import { Dropdown } from 'semantic-ui-react'
class Checklist extends React.Component {

    // constructor(props) {
    //     super(props);


    // }
    state = {selectValue: 'Workout A'};

    handleChange = (event) => {
        this.setState({selectValue: event.target.value});
    }

    render() {
        return(
            <div className="checklist">
                <h1>Checklist component</h1>
                <select name="dropdown" defaultValue={this.state.selectValue} id="dropdown" onChange={this.handleChange}>
                    <option value="Workout A">Workout A</option>
                    <option value="Workout B">Workout B</option>
                    <option value="Workout C">Workout C</option>
                </select>
            </div>
        );
    }
}
export default Checklist