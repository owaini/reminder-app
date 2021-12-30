import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_reminders, remove_reminders, remove_all } from "../actions";
import moment from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import logo from '../think2.png'
class App extends Component {
    state = {
        text: '',
        date: new Date()
    }

    render_reminders = () => {
        const {reminder} = this.props;
        return (
            <ul className="list-group">
                {
                    reminder.map(rem => {
                        return (
                            <li className="list-group-item">
                                <div>{rem.text}</div>
                                <div>{moment(new Date(rem.date)).fromNow()}</div>
                                <div
                                    className="remove btn btn-danger"
                                    onClick={() =>
                                        this.props.remove_reminders(rem.id)
                                    }
                                >
                                    REMOVE
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
    render() {
        console.log(this.props)
        return (
					<div className="App">
						<img src={logo} alt='img' />
						<div className="reminder-title">
							<h2>What Shoud U Do ?</h2>
						</div>
						<input
							type="text"
							className="form-control"
							placeholder="Enter What U think ... ?"
							onChange={(e) => this.setState({ text: e.target.value })}
							value={this.state.text}
						/>
						{/* <input
							type="datetime-local"
							className="form-control"
							value={this.state.date}
							onChange={(e) => {
								this.setState({ date: e.target.value });
							}}
						/> */}
						<DatePicker
							className="form-control"
							value={this.state.date}
							selected={this.state.date}
							onChange={(date) => {
								this.setState({ date: date });
							}}
							showTimeSelect
							timeFormat="HH:mm"
							dateFormat="MMMM d, yyyy h:mm aa"
							timeCaption="Time"
						/>

						<button
							className="btn btn-primary col-12 mb-2"
							onClick={() => {
								this.setState({ text: "", date: "" });

								this.props.add_reminders(this.state.text, this.state.date);
							}}
						>
							Add Reminder
						</button>
						{this.render_reminders()}
						<button
							className="btn btn-danger col-12"
							onClick={() => this.props.remove_all()}
						>
							Clear Reminders
						</button>
					</div>
				);
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
// 			add_reminders: ()=> dispatch(add_reminders())
// 		};
// }

function mapStateToProps(state){
    return {
        reminder : state
    }
}

export default connect(mapStateToProps, {
	add_reminders,
	remove_reminders,
	remove_all
})(App);