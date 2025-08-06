import React, { useRef } from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage() {
  const value = useRef();

  const handleOnclick = () => {
    alert(value.current.value);
  };

  return (
    <Button
      title="ji"
      spellCheck={true}
      size="small"
      //   color="red"
      color="coral"
      variant="contained"
      onClick={handleOnclick}
    >
      hello
    </Button>
  );
}
