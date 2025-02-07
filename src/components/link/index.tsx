import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { buttonVariants } from "../ui/button";

export default function Link({
  children,
  className,
  ...props
}: ComponentProps<"a">) {
  return (
    <a {...props} className={cn(buttonVariants({ className }))}>
      {children}
    </a>
  );
}
