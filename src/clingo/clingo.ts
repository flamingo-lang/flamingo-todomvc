import Module from "wasm-clingo/clingo";
import clingoModule from "wasm-clingo/clingo.wasm";

export interface ClingoResult {
  Solver: string,
  Calls: number,
  Call: { Witnesses: { Value: string[] }[] }[],
  Models: { More: "yes" | "no", Number: number },
  Result: "SATISFIABLE" | "UNSATISFIABLE",
  Time: {
    CPU: number,
    Model: number,
    Solve: number,
    Total: number,
    Unsat: number,
  }
};

export const run = (program: string, models: number = 1, options: string = "") =>
  new Promise((res, rej) => {
    const results: string[] = [];
    const params = {
      locateFile(path: any) {
        if (path.endsWith('.wasm')) {
          return clingoModule;
        }
        return path;
      },
      print: (x: any) => results.push(x),
      printErr: console.error,
      postRun: () => {
        const parsedResults = JSON.parse(results.join(""));
        delete parsedResults.Solver;
        delete parsedResults.Input;
        res(parsedResults);
      },
    };
    Module(params).then((clingo: any) => {
      clingo.ccall('run', 'number', ['string',
        'string'],
        [program, `--outf=2 ${options} ${models}`])
    });
  }) as Promise<ClingoResult>;
