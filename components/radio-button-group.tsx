"use client";

import { Button } from "@/components/ui/button";

interface RadioButtonGroupOption<T extends string> {
  value: T;
  label: string;
}

interface RadioButtonGroupProps<T extends string> {
  ariaLabel: string;
  options: RadioButtonGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function RadioButtonGroup<T extends string>({
  ariaLabel,
  options,
  value,
  onChange,
}: RadioButtonGroupProps<T>) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex gap-1">
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
