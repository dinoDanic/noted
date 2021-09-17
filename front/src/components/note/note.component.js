import React from "react";

import Paper from "../ui/paper/paper.component";

const Note = ({ note }) => {
  const { title, text } = note;
  return (
    <div>
      <Paper color="yellow" title={title}>
        {text}
      </Paper>
    </div>
  );
};

export default Note;
