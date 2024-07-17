import React from "react";
import "../../../css/universal-components/info-card.css";

class InfoCard extends React.Component<{ title: never, message: never }> {
    render() {
        const {title, message} = this.props;
        return (
            <div className="info-card">
                <div className={"info-card-title"}>
                    <p style={{textAlign: "center", margin: 0, fontSize: 25}}>{title}</p>
                </div>
                <div className={"info-card-message"}>
                <p style={{ textAlign: "center", margin: 10 }}>{message}</p>
                </div>
            </div>
        );
    }
}

export default InfoCard;
