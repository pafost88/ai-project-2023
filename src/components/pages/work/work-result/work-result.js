import {useLocation} from "react-router-dom";
import { Editor, EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRef, useState} from "react";

import './work-result.css'
import ContentState from "draft-js/lib/ContentState";

export function WorkResult() {
    const location = useLocation();
    const result = location.state.text;

    const [editorState, setEditorState] = useState(() =>
        EditorState.createWithContent(ContentState.createFromText(result))
    );

    const editor = useRef(null);
    function focusEditor() {
        editor.current.focus();
    }

    return (
        <div className='editor' onClick={focusEditor}
        >
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                value={result}
            />
        </div>
    );
}