import t from"../web_modules/react.js";import{TodoItem as r}from"./5TodoItem.js";import{useQuery as o}from"./flamingo-hooks/index.js";export const TodoList=()=>{const i=o("completed(Todo).").map(e=>e.Todo),m=o("text(Todo) = Text, visible(Todo).");return t.createElement("ul",{className:"todo-list"},m.map(({Todo:e,Text:s})=>t.createElement(r,{todoID:e,key:e,completed:i.includes(e),text:s})))};
