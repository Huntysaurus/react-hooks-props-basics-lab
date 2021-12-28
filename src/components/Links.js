import React from "react";
const Links = (props) => {
    return (
        <>
            <h3>Links</h3>
            <a href={props.links.github}>{props.links.github}</a>
            <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </>
    );
}

export default Links;

