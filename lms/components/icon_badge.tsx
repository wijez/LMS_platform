import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variants: {
        default: "bg-sky-100",
        success: "bg-emerald-100",
      },
      size: {
        default: "p-2",
        sm: "p-1",
      },
    },
    defaultVariants: {
      variants: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    variants: {
      default: "text-sky-700",
      success: "text-emerald-700",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variants: "default",
    size: "default",
  },
});

type backgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type iconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends backgroundVariantsProps, iconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variants, size }: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variants, size }))}>
      <Icon className={cn(iconVariants({ variants, size }))} />
    </div>
  );
};
