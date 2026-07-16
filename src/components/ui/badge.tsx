import { cn } from "@/lib/utils";
import * as React from "react";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "success" | "warning" | "destructive" | "outline" }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    destructive: "bg-red-500/10 text-red-400 border-red-500/30",
    outline: "border-zinc-600 text-zinc-300",
  };

  return (
    <div
      ref={ref}
      className={cn("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors", variants[variant], className)}
      {...props}
    />
  );
}));
Badge.displayName = "Badge";

export { Badge };
