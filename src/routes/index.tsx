import { RouteDataArgs, useRouteData, unstable_clientOnly } from 'solid-start';

// import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
// import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
// import { isServer } from 'solid-js/web';

const Editor = unstable_clientOnly(() => import('~/components/Editor'));

// if (!isServer) {
//   window.MonacoEnvironment = {
//     getWorker(_moduleId: unknown, label: string) {
//       switch (label) {
//         case 'json':
//           return new jsonWorker();
//         case 'css':
//           return new cssWorker();
//         case 'typescript':
//         case 'javascript':
//           return new tsWorker();
//         default:
//           return new editorWorker();
//       }
//     },
//   };
// }

export default function Test() {
  return <Editor fallback={'loading...'} />;
}
