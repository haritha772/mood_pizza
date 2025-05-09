import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define mood variant types for our component
type MoodVariants = 
  | "mood-happy" | "mood-sad" | "mood-excited" 
  | "mood-angry" | "mood-chill" | "mood-love";

// Define standard button variant types
type StandardVariants = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

// Combined type for all button variants
type ButtonVariant = StandardVariants | MoodVariants;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "mood-happy": "bg-[#F97316] text-white hover:bg-[#F97316]/90",
        "mood-sad": "bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/90",
        "mood-excited": "bg-[#D946EF] text-white hover:bg-[#D946EF]/90",
        "mood-angry": "bg-[#EA384C] text-white hover:bg-[#EA384C]/90",
        "mood-chill": "bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90",
        "mood-love": "bg-[#FEC6A1] text-black hover:bg-[#FEC6A1]/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonVariant }
