"use client";

import { cn } from "@/lib/utils";

interface StepperProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

export function WebsiteCreationStepper({
  totalSteps,
  currentStep,
  className,
}: StepperProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-colors duration-200",
            index === currentStep
              ? "bg-primary"
              : index < currentStep
                ? "bg-primary/50"
                : "bg-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}
