import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { useParams } from "@tanstack/react-router";
import { UploadCloud } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function PostsEmpty() {
  const { slug } = useParams({
    from: "/dashboard/orgs/$slug",
  });

  return (
    <Empty className="border border-dashed aspect-video">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UploadCloud />
        </EmptyMedia>
        <EmptyTitle>Posts Empty</EmptyTitle>
        <EmptyDescription>
          There is no post to see here. Start uploading to see.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm" asChild>
          <Link
            to={`/dashboard/orgs/$slug/posts/create-posts`}
            params={{ slug }}
          >
            Start Upload
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
