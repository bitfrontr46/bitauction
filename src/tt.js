import React from "react";
import Style from "styled-components";

const Block = Style.div`
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #FFFFFF;
postiion: absolute;
display: flex;
`;

const TT = ({ obj }) => {
  return (<Block>
    {obj}
    </Block>)
};

export default TT;
