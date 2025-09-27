import { Label } from "@/components/ui/label";

interface InfoFieldProps {
  label: string;
  labelBold?: string;
  value: string;
}

export function InfoField({ label, labelBold, value }: InfoFieldProps) {
  return (
    <div className="grid gap-2 text-left">
        <Label>
            {label}
            {labelBold && <strong>{labelBold}</strong>}
        </Label>
      <div className="p-3 bg-gray-100 rounded-md text-sm px-4">
        {value}
      </div>
    </div>
  );
}