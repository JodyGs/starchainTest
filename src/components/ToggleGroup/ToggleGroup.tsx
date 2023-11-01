import React from "react";
import { Root, Item } from "@radix-ui/react-toggle-group";
import clsx from "clsx";

export type ToggleGroupProps = {
  values: any[];
  value?: any;
  onChange?: (value: any) => void;
  className?: string;
  itemClassName?: string;
  id: string;
  label?: string;
  formatter?: (v: any) => string;
};

export default function ToggleGroup({
  values,
  onChange,
  value,
  className,
  itemClassName,
  formatter,
}: ToggleGroupProps) {
  const activeIndex = values.findIndex((id) => id === value);
  const onValueChange = (val: any) => {
    if (onChange && val !== null && val !== undefined && val !== "") {
      onChange(val);
    }
  };

  return (
    <Root
      className={clsx(
        "font-exo font-semibold text-xs flex space-x-2 md:space-x-4 md:flex-nowrap flex-wrap justify-left md:text-lg",
        className
      )}
      type="single"
      value={value}
      onValueChange={onValueChange}
    >
      {values.map((id, i) => {
        return (
          <Item
            key={id}
            value={id}
            className={clsx(
              "px-4 md:px-8 border rounded-full py-2 md:py-4 tracking-[0.45px] bg-custom-grey capitalize whitespace-nowrap text-[#bcacfa] hover:opacity-80 transition-all my-2 md:my-0",
              {
                "border-[#bcacfa] bg-opacity-40": activeIndex !== i,
                "border-transparent from-[#BCACFA] to-white bg-gradient-to-l !text-purple-900":
                  activeIndex === i,
              },
              itemClassName
            )}
          >
            {formatter ? formatter(id) : id}
          </Item>
        );
      })}
    </Root>
  );
}
