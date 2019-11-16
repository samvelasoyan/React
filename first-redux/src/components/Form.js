import React from "react";
import {
    postUserDataAction,
    getUserDataAction,
    removeUserAction,
    changeUserNameAction,
    changeUserEmailAction,
    changeUserPositionAction,
    changeUserCountryAction,
    addUserAction,
    editAction
} from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Form({
    fullName,
    email,
    position,
    country,
    id,
    getUserDataAction,
    changeUserNameAction,
    changeUserEmailAction,
    changeUserPositionAction,
    changeUserCountryAction,
    addUserAction,
    editAction
}) {
    const discard = (e) => {
        return getUserDataAction(), editAction(e.target.id);
    };
    const confirm = (e) => {
        return addUserAction(fullName, email, position, country), editAction(e.target.id);
    };
    return (
        <div className="box" id={id}>
            <form onSubmit={(e) => e.preventDefault()}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    id={id}
                                    type="text"
                                    name="name"
                                    value={fullName}
                                    onChange={(e) =>
                                        changeUserNameAction(e.target.id, e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    id={id}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) =>
                                        changeUserEmailAction(e.target.id, e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Position:</td>
                            <td>
                                <input
                                    id={id}
                                    type="text"
                                    name="position"
                                    value={position}
                                    onChange={(e) =>
                                        changeUserPositionAction(e.target.id, e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>
                                <input
                                    id={id}
                                    type="text"
                                    name="country"
                                    value={country}
                                    onChange={(e) =>
                                        changeUserCountryAction(e.target.id, e.target.value)
                                    }
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    type="submit"
                    id={id}
                    onClick={(e) => confirm(e)}
                    className={(fullName === undefined || fullName === "") && "disabled"}
                    disabled={fullName === undefined || fullName === ""}
                >
                    <i id={id} className="fas fa-check-circle"></i> Confirm
                </button>
                <button
                    id={id}
                    onClick={(e) => discard(e)}
                    className={(fullName === undefined || fullName === "") && "disabled"}
                    disabled={fullName === undefined || fullName === ""}
                >
                    <i id={id} className="fas fa-times-circle"></i> Discard
                </button>
            </form>
        </div>
    );
}

export default connect(
    (state) => {
        return { body: state.getData };
    },
    (dispatch) => {
        return bindActionCreators(
            {
                getUserDataAction,
                removeUserAction,
                postUserDataAction,
                changeUserNameAction,
                changeUserEmailAction,
                changeUserPositionAction,
                changeUserCountryAction,
                addUserAction,
                editAction
            },
            dispatch
        );
    }
)(Form);
