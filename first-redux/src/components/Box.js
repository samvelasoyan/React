import React from "react";
import {
    removeUserAction,
    editAction
} from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Box({ fullName, email, position, country, id, editAction, removeUserAction }) {
    return (
        <tr className="row">
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td>{country}</td>
            <td>
                <span id={id} onClick={(e) => editAction(e.target.id)}>
                    <i id={id} className="fas fa-pen-nib"></i>
                </span>
                <span id={id} onClick={(e) => removeUserAction(e.target.id)}>
                    <i id={id} className="fas fa-trash"></i>
                </span>
            </td>
        </tr>
    );
}

export default connect(
    (state) => {
        return { body: state.getData };
    },
    (dispatch) => {
        return bindActionCreators(
            { removeUserAction, editAction },
            dispatch
        );
    }
)(Box);
