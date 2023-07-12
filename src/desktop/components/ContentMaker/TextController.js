// import React, { Component } from "react";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
// import Heading from "@ckeditor/ckeditor5-heading/src/heading";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import Table from "@ckeditor/ckeditor5-table/src/table";
// import Link from "@ckeditor/ckeditor5-link/src/link";
// import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
// import Indent from "@ckeditor/ckeditor5-indent/src/indent";
// import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
// import styled from "styled-components";
// // import noimg from "source/noimg.png"

// const Wrapper = styled.div`
//   .ck-editor__editable {
//     height: max-content;
//     min-height: ${(props) =>
//       props.userHeight == null ? "max-content" : props.userHeight + "px"};
//   }
// `;

// // import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
// ClassicEditor.builtinPlugins = [
//   Essentials,
//   Autoformat,
//   Alignment,
//   Font,
//   Bold,
//   Italic,
//   BlockQuote,
//   Heading,
//   Link,
//   Paragraph,
//   Table,
//   TableToolbar,
//   Indent,
//   IndentBlock,
// ];

// class TextController extends Component {
//   render() {
//     const { item } = this.props;
//     return (
//       <div>
//         <CKEditor editor={ClassicEditor} />
//       </div>
//     );
//   }
// }

// export default TextController;

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
ClassicEditor.defaultConfig = {
  startupFocus: true,
  alignment: { options: ["left", "center", "justify", "right"] },
  toolbar: {
    items: [
      "heading",
      "|",
      "fontSize",
      /*'fontFamily',*/ "fontColor",
      "fontBackgroundColor",
      "bold",
      "italic",
      "alignment",
      "|",
      "outdent",
      "indent",
      "|",
      "link",
      "blockQuote",
      "insertTable",
      "undo",
      "redo",
    ],
  },
  table: { contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"] },
  indentBlock: {
    offset: 5,
    unit: "em",
  },
  fontSize: { options: [14, 16, 18, 22, 24, 30, 36, 48] },
  language: "en",
};
class App extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data={item.content}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            this.props.getValue(data);
          }}
          onBlur={(event, editor) => {
            const data = editor.getData();
            console.log("Blur.", { event, editor, data });
            this.props.getValue(data);
            this.props.onBlur();
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
