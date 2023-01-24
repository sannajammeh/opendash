"use client";
import React, { useState } from "react";
import { Input } from "@opendash/ui";

const DisplayNameInput = ({ displayName }: { displayName: string }) => {
  const [value, setValue] = useState(displayName);
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name="connection"
    />
  );
};

export default DisplayNameInput;
