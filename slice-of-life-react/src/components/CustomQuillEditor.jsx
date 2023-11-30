
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';



import Quill from 'quill';


const CustomQuillEditor = () => {
  const [quill, setQuill] = useState(null);

  React.useEffect(() => {
    if (!quill) {
      const quillInstance = new Quill('#editor-container', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
          ],
          syntax: true,
        },
        placeholder: 'Compose an epic...',
        theme: 'snow', // or 'bubble'
      });

      setQuill(quillInstance);
    }
  }, [quill]);

  return <div id="editor-container"></div>;
};

export default CustomQuillEditor;
