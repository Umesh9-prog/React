// const heading=React.createElement("h1",{id:"heading"},"Hello from React");
// console.log("heading object",heading)
const  root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/* <div id="parent">
<div id="child1">
   <h1 id="h1">h1 tag</h1>
</div>

<div id="child2">
    <h1 id="h2">h2 tag</h1>
</div>

</div> */}

// Example of Code wich looks complex to make it simple JSX is used

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},React.createElement("h1",{id:"h1"},"h1 tag"))],
React.createElement("div",{id:"child2"},React.createElement("h1",{id:"h2"},"h2 tag"))
)

console.log("parent",parent)
root.render(parent)




