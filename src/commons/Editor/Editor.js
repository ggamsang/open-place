import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

export const Editor = ({config,value,onChange})=>{
    const editor = useRef(null);
    const [text,onChangeText] = useState("");
    const handleChangeContent = async(content) =>{
        await onChange(content);
    }
    return(
        <JoditEditor
            ref = {editor}
            config={config}
            onChange={newContent=>handleChangeContent(newContent)}
            value={value}
        />
    )
}

