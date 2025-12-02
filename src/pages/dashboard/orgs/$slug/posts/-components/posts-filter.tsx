import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearch } from "@tanstack/react-router";

export function PostsFilter() {
  const searchParams = useSearch({
    from: "/dashboard/orgs/$slug/posts/",
    select: (search) => ({
      titleFilter: "",
      statusFilter: "",
    }),
  });

  const [title, setTitle] = useState(searchParams.titleFilter ?? "");
  const [status, setStatus] = useState(searchParams.statusFilter ?? "");

  function handleFilter() {}

  function handleResetFilters() {
    setTitle("");
    setStatus("");

    // router.push(`/dashboard/orgs/`);
  }

  return (
    <form className="mt-4 flex items-center gap-x-2">
      <Input
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-fit"
      />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a status" defaultValue={status} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="success">SUCCESS</SelectItem>
            <SelectItem value="processing">PROCESSING</SelectItem>
            <SelectItem value="scheduled">SCHEDULED</SelectItem>
            <SelectItem value="error">ERROR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6" />
    </form>
  );
}
