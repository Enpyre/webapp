import React from 'react';
import AceEditor from 'react-ace';

import('ace-builds/src-noconflict/theme-dracula');
import('ace-builds/src-noconflict/mode-python');

interface Props {
  onChange: (value: string, event?: any) => void;
}

export const Editor: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <AceEditor mode="python" theme="dracula" onChange={onChange} />
    </div>
  );
};

export default Editor;
