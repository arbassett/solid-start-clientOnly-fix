import { editor as mEditor, Uri } from 'monaco-editor';
import type { Component } from 'solid-js';
import { createEffect } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';

const Editor: Component<{}> = () => {
  let parent!: HTMLDivElement;
  let editor: mEditor.IStandaloneCodeEditor;

  onMount(async () => {
    console.log('editor');

    editor = mEditor.create(parent, {
      value: 'console.log("test")',
      language: 'typescript',
      // automaticLayout: true,
      // readOnly: props.disabled,
      fontSize: 14,
      lineDecorationsWidth: 5,
      lineNumbersMinChars: 3,
      padding: { top: 15 },
      minimap: {
        enabled: false,
      },
    });
  });

  onCleanup(() => editor?.dispose());

  return <div style="height: 500px;" ref={parent} />;
};

export default Editor;
