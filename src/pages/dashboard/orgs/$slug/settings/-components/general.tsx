import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export function General() {
  return (
    <div>
      <p>General</p>
      <Button type="submit" variant="destructive" className="w-56">
        <XCircle className="mr-2 size-4" />
        Shutdown organization
      </Button>
    </div>
  );
}
