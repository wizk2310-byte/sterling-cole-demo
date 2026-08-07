import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 rounded-sm text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        brass:
          "bg-brass text-primary-foreground shadow-[0_10px_30px_-14px_var(--brass)] hover:bg-brass-soft hover:shadow-brass hover:-translate-y-0.5",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-brass hover:bg-brass/10 hover:-translate-y-0.5",
        ghost: "text-brass hover:text-brass-soft",
      },
      size: {
        sm: "h-10 px-5",
        default: "h-12 px-7",
        lg: "h-14 px-9",
      },
    },
    defaultVariants: { variant: "brass", size: "default" },
  },
);

export function Cta({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof ctaVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(ctaVariants({ variant, size }), className)} {...props} />
  );
}

export { ctaVariants };
