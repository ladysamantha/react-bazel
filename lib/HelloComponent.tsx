import * as React from 'react';

interface HelloProps {
    name: string;
}

export const HelloComponent = ({ name }: HelloProps) => {
    console.log("hello component: name", name);
    return (
        <div>Hello, {name}!</div>
    );
}
