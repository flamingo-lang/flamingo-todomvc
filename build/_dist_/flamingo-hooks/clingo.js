import i from"../../web_modules/wasm-clingo/clingo.js";import u from"../../web_modules/wasm-clingo/clingo.wasm.proxy.js";export const run=(o,s=1,n="")=>new Promise((t,c)=>{const r=[],l={locateFile(e){return e.endsWith(".wasm")?u:e},print:e=>r.push(e),printErr:console.error,postRun:()=>{const e=JSON.parse(r.join(""));delete e.Solver,delete e.Input,t(e)}};i(l).then(e=>{e.ccall("run","number",["string","string"],[o,`--outf=2 ${n} ${s}`])})});
