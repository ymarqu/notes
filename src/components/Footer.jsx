// import React from "react";

function Footer(){
    let d = new Date();
    let curYear = d.getFullYear();
    // const curYear = d.getFullYear();

    return(<footer><p>Yesenia Marquina © {curYear}</p></footer>);
};

export default Footer;