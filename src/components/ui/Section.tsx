import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({ children, id, className, containerClassName, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 sm:py-32", className)}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
