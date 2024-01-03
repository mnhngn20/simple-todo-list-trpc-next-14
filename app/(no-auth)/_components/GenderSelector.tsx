import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

export default function GenderSelector({ ...rest }: SelectProps) {
  return (
    <Select {...rest}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Male">Male</SelectItem>
        <SelectItem value="Female">Female</SelectItem>
      </SelectContent>
    </Select>
  );
}
