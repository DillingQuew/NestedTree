import {useState} from "react";

export default function Tree({data}) {
    return (
        <ul>
            {renderItem({data})}
        </ul>
    );
}

export function renderItem({data}) {
    
}