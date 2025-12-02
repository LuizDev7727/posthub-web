"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type PostsPaginationProps = {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
};

export function PostsPagination({
  pageCount,
  pageIndex,
  pageSize,
}: PostsPaginationProps) {
  const { slug } = useParams({
    from: "/dashboard/orgs/$slug",
  });

  const navigate = useNavigate();

  function navigateToPage(pageIndex: number) {
    navigate({
      to: "/dashboard/orgs/$slug/posts",
      params: { slug },
      search: (prev) => ({ ...prev, pageIndex }),
    });
  }

  function setPageSize(pageSize: string) {
    navigate({
      to: "/dashboard/orgs/$slug/posts",
      params: { slug },
      search: (prev) => ({ ...prev, pageSize }),
    });
  }

  const page = pageIndex + 1;
  const hasPreviousPage = page > 1;
  const hasNextPage = page < pageCount;

  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <p className="text-sm text-muted-foreground">Showing 10 of 228 items</p>
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select value={`${pageSize}`} onValueChange={setPageSize}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {pageCount}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => navigateToPage(0)}
            disabled={!hasPreviousPage}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => navigateToPage(pageIndex - 1)}
            disabled={!hasPreviousPage}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => navigateToPage(pageIndex + 1)}
            disabled={!hasNextPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => navigateToPage(pageCount - 1)}
            disabled={!hasNextPage}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
