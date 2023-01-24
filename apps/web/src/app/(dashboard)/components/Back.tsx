"use client";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconButton } from "@opendash/ui";

export const Back = ({ href }: { href?: string }) => {
  const router = useRouter();
  const icon = (
    <ArrowLeftIcon className="group-hover:-translate-x-[1px] transition-all" />
  );

  if (href) {
    return (
      <IconButton
        as={Link}
        href={href}
        className="group"
        size="1"
        variant="text"
      >
        {icon}
      </IconButton>
    );
  }

  return (
    <IconButton
      onClick={() => router.back()}
      className="group"
      size="1"
      variant="text"
    >
      {icon}
    </IconButton>
  );
};
