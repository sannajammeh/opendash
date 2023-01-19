import { classed } from "./classed.config";

const _Card = classed("article", {
  variants: {
    color: {
      slate1: "bg-radix-slate1 border-radix-slate6",
      slate2: "bg-radix-slate2 border-radix-slate6",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },

    bordered: {
      true: "border",
    },
  },
  defaultVariants: {
    color: "slate1",
    rounded: "md",
  },
});

const CardHeader = classed("header", "card-header");

const CardBody = classed("div", {
  variants: {
    size: {
      small: "p-3",
      medium: "p-4",
      large: "p-5",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const CardFooter = classed("footer", "card-footer");

type CardComponentType = typeof _Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

const Card = _Card as CardComponentType;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card };
