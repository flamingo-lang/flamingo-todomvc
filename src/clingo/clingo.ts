import Module from "wasm-clingo/clingo";
import clingoModule from "wasm-clingo/clingo.wasm";
console.log(clingoModule);
var Clingo = {
  preRun: [],
  locateFile(path:any) {
    if(path.endsWith('.wasm')) {
      return clingoModule;
    }
    return path;
  },
  postRun: [],
  print: console.log,
  printErr: console.error,
  onRuntimeInitialized: function() {
      (this as any).ccall('run', 'number', ['string', 'string'], ["a. b :- a.", '0'])
  },
  totalDependencies: 0,
  monitorRunDependencies: function(left: number) {
      this.totalDependencies = Math.max(this.totalDependencies, left);
      console.log(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
  }
};
console.log(Module);

Module(Clingo);
