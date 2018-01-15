import React from "react";
import Select from "./select-component.js";


const selectData = [
    { id: 1, value: "text 1"},
    { id: 2, value: "text 2"},
    { id: 3, value: "text 3"}
];

console.log("test-data", selectData);

export default () => <div>
    <Select items={selectData}
            onFocusIn={() => console.log("Select: focus in")}
            onFocusOut={() => console.log("Select: focus out")}
            onChange={id => console.log("Select: change", id)} />
    <input />
</div>
