import { createClassed } from "@tw-classed/react";
import { twMerge } from "tailwind-merge";

const { classed } = createClassed({
  merger: twMerge,
});

export { classed };
