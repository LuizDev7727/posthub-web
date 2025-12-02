import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PostsEmpty } from "./-components/posts-empty";
import { PostsFilter } from "./-components/posts-filter";
import { PostsList } from "./-components/posts-list";
import { PostsPagination } from "./-components/posts-pagination";
import { useQuery } from "@tanstack/react-query";
import { getPostsHttp } from "@/http/posts/get-posts.http";
import { PostsLoading } from "./-components/posts-loading";

const postsPageSearchParams = z.object({
  titleFilter: z.string().default(""),
  statusFilter: z
    .enum(["SUCCESS", "PROCESSING", "SCHEDULED", "ERROR"])
    .nullable()
    .default(null),
  pageIndex: z.coerce.number().default(0),
  pageSize: z.coerce.number().default(10),
});

export const Route = createFileRoute("/dashboard/orgs/$slug/posts/")({
  component: PostsPage,
  validateSearch: postsPageSearchParams,
});

function PostsPage() {
  const { titleFilter, statusFilter, pageIndex, pageSize } = Route.useSearch();
  const { slug } = Route.useParams();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      getPostsHttp({
        slug,
        titleFilter,
        statusFilter,
        pageIndex,
        pageSize,
      }),
  });

  if (!isLoading) {
    return <PostsLoading />;
  }

  const isPostsEmpty = posts.length === 0;

  if (isPostsEmpty) {
    return <PostsEmpty />;
  }

  return (
    <div>
      <h1 className="text-xl font-medium">Posts</h1>
      <p className="text-sm text-muted-foreground">See all your posts here</p>

      <PostsFilter />

      <PostsList posts={[]} />

      <PostsPagination
        pageCount={5}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </div>
  );
}
