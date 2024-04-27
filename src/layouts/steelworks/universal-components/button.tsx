import React from "react";
import "../../../css/universal-components/button.css";
class Button extends React.Component<{ message: any, onClick: any }> {
    render() {
        const {message, onClick} = this.props;
        return (
            <button
                className="custom-button"
                onClick={onClick}
            >
                {message}
            </button>
        );
    }
}

export default Button;
