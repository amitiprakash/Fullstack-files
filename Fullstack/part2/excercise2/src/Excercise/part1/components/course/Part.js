import React from "react";
const Part = ({partname,exercises}) => {
  return (
    <p>
      {partname} {exercises}
    </p>
  );
};

export default Part;