import {useState, useMemo} from "react";

export default function Tree({data}) {
    return ( <ul>{renderItem(data)}</ul>);
}

export function renderItem(data) {
    return data.map((arr) => {
        return (
            <>
                <li>{arr.title}</li>
                {!!arr?.childs ? <ul>{ renderItem(arr.childs)}</ul> : null}

            </>
        )
    })
}