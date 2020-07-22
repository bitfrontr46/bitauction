import React from "react";
import Style from "styled-components";

const Block = Style.div`
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #FFFFFF;
position: absolute;
display: flex;
`;

const Styles = ({ obj }) => {
  return (<Block>
    {obj}
    </Block>)
};

export default Styles;
