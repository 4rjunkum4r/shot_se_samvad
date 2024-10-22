import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import jsPDF from "jspdf";
import "./scriptEditor.css"; // Import your styles

const ScriptEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Function to handle key commands (e.g., Bold, Italic)
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  // Function to apply inline styles (like BOLD, ITALIC)
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Function to toggle block types (like H1 for Scene headings)
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // Function to save the script as PDF
  const saveScriptAsPDF = () => {
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();

    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text(text, 10, 10);
    pdf.save("script.pdf");
  };

  return (
    <div>
      <h2>
        <center>Script Editor</center>
      </h2>

      {/* Toolbar */}
      <div className="toolbar">
        <button onClick={() => toggleBlockType("header-one")}>Scene</button>
        <button onClick={() => toggleBlockType("unstyled")}>Action</button>
        <button onClick={() => toggleInlineStyle("BOLD")}>Character</button>
        <button onClick={() => toggleBlockType("blockquote")}>Dialogue</button>
      </div>

      {/* Editor */}
      <div className="editor-container">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>

      {/* Save Script Buttons */}
      <div className="save-buttons">
        <center>
          <button onClick={saveScriptAsPDF}>Download as PDF</button>
        </center>
      </div>
    </div>
  );
};

export default ScriptEditor;
