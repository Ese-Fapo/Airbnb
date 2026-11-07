// Run component smoke tests with the project's existing TypeScript dependency.
import { readFile, access } from 'node:fs/promises';
import ts from 'typescript';

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
    for (const extension of ['.ts', '.tsx']) {
      const url = new URL(specifier + extension, context.parentURL);
      try { await access(url); return { url: url.href, shortCircuit: true }; }
      catch { /* Try the next extension, then the standard resolver. */ }
    }
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.css')) return { format: 'module', source: 'export {};', shortCircuit: true };
  if (/\.tsx?$/.test(url)) {
    const source = await readFile(new URL(url), 'utf8');
    const result = ts.transpileModule(source, { compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2023,
    } });
    return { format: 'module', source: result.outputText, shortCircuit: true };
  }
  return nextLoad(url, context);
}
