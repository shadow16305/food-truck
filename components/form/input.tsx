import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  icon: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icon, ...props }, ref) => {
  return (
    <div className="border-b border-b-neutral-300 w-full pb-3 flex justify-between">
      <input type="text" ref={ref} {...props} className="w-full focus:border-none focus:outline-none" required />
      {icon}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
