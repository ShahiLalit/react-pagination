import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { classnames } from "../../utils";
import { defaultOptions } from "../../constants";
import { IRowsCountProps } from "./RowsCount.types";

const RowsCount = ({
  options = defaultOptions,
  onSelection,
  numberOfRows,
}: IRowsCountProps) => {
  const [selected, setSelected] = useState(`${numberOfRows}`);

  const handleChange = (selectedOption: string) => {
    onSelection(Number(selectedOption));
    setSelected(selectedOption);
  };
  return (
    <Select.Root defaultValue={selected} onValueChange={handleChange}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 data-[placeholder]:text-indigo-500 outline-none"
        aria-label="Rows"
      >
        <Select.Value defaultValue={selected} />
        <Select.Icon className="text-indigo-500">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-indigo-500 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11 font-bold">
                Rows Count
              </Select.Label>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  Show {option}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-indigo-500 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        "text-[13px] leading-none text-gray-700 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-indigo-600 data-[highlighted]:text-white",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default RowsCount;
