import React, { useState } from "react";

type NavData = {
    label: string,
    link: string,
    children?: NavData[] | null
}


export const Treeview = ({ node }: { node: NavData[] }) => {
    return (
        <div>
            {
                node.map((item, index) => (
                    <Node node={item} key={index} />
                ))
            }
        </div>
    );
};

export const Node = ({ node }: { node: NavData }) => {
    const [parent, setParent] = useState<string>('');
    return (
        <ul>
            <ul onClick={() => setParent((prev) => (
                node.label == prev ? "" : node.label
            ))} style={{
                cursor: "pointer"
            }}>
                <li style={{
                    cursor: 'pointer'
                }}>{node.label}</li>
            </ul>
            {node.children && node.children.length > 0 && parent === node.label && (
                <ul>
                    {node.children.map((item) => (
                        <Node node={item} key={item.label} />
                    ))}
                </ul>
            )}
        </ul>
    );
};


