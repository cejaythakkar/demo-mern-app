import React from "react";
import './loader.scss';
export default (props) => (<div className="loader-screen">
    <div className="message-container">
        <span>{props.children}...</span>
    </div>
</div>);
