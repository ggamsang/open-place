import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import styled from "styled-components";
const Wrapper = styled.div`
    p {
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px; 
    }
`;
export const Editor = ({ config, value, onChange }) => {
    const editor = useRef(null);
    const [text, onChangeText] = useState("");
    const handleChangeContent = async (content) => {
        onChangeText(content);
        await onChange(content);
    }
    return (
        <Wrapper>
            <JoditEditor
                ref={editor}
                config={config}
                onChange={newContent => handleChangeContent(newContent)}
                value={text}
            />
        </Wrapper>
    )
}

