import { buttonProps } from "@/types/common";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitBtn = ({ children, isValid, className }: buttonProps) => {
  return (
    <Button
      type="submit"
      disabled={isValid}
      className={cn("shad-primary-btn w-full", className)}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
