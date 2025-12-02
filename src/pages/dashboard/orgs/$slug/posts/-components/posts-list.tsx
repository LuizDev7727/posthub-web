import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { formatBytes } from "@/utils/format-bytes";
import { formatDuration } from "@/utils/format-seconds-to-minutes";
import { getInitials } from "@/utils/get-initials";
import { ArrowRight, Box, Calendar, Clapperboard } from "lucide-react";

type SocialToPost = {
  social: string; // você pode ajustar os valores possíveis
};

type Post = {
  id: string;
  thumbnailUrl: string | null;
  title: string;
  scheduledTo: Date;
  socialsToPost: SocialToPost[];
  status: string; // ajuste conforme seus estados
  size: number; // bytes
  duration: number; // seconds
  author: {
    name: string;
    avatarUrl: string | null;
  };
  createdAt: Date;
};

type PostsTableProps = {
  posts: Post[];
};

export function PostsList({ posts }: PostsTableProps) {
  function getPostStatusBadge(postStatus: string) {
    switch (postStatus) {
      case "SUCCESS":
        return <Badge variant={"success"}>SUCCESS</Badge>;
      case "PROCESSING":
        return (
          <Badge>
            <Spinner />
            Processing
          </Badge>
        );
    }
  }

  return (
    <div className="flex items-center flex-wrap mt-4 gap-4">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="bg-[#18181B]/20 w-[320px] border border-zinc-800 rounded-lg"
          >
            <header className="relative h-[180px]">
              {post.thumbnailUrl ? (
                <>
                  <img
                    className="rounded-t-lg w-full"
                    src={post.thumbnailUrl}
                    alt=""
                  />
                  <div className="bg-zinc-950 rounded-md p-1 absolute bottom-2 right-2">
                    <p className="text-zinc-300">
                      {formatDuration(post.duration)}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex items-center rounded-t-lg h-full justify-center bg-zinc-800">
                  <Clapperboard className="text-muted-foreground" />
                </div>
              )}
            </header>

            <section className="px-[19px] py-[17px]">
              <h1 className="font-semibold">{post.title}</h1>
              <div className="flex mt-4 items-center justify-between">
                {getPostStatusBadge(post.status)}

                <div className="flex items-center text-muted-foreground gap-x-2">
                  <Box className="size-5" />
                  <p>{formatBytes(post.size)}</p>
                </div>
              </div>

              <Separator className="my-4" />

              <section className="mb-4">
                <p>Share to socials media</p>
                <div className="flex items-center gap-x-1">
                  {post.socialsToPost.map((social) => {
                    return (
                      <Badge
                        key={social.social}
                        className="font-semibold text-xs"
                      >
                        {social.social}
                      </Badge>
                    );
                  })}
                </div>
              </section>

              <section className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">
                      Agendado para
                    </p>
                    <p className="text-sm font-medium text-zinc-200">
                      {new Date().toDateString()}
                    </p>
                  </div>
                </div>
              </section>
            </section>

            <div className="p-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-9">
                  {post.author.avatarUrl && (
                    <AvatarImage
                      src={post.author.avatarUrl}
                      alt={post.author.name}
                    />
                  )}
                  <AvatarFallback className="bg-lime-500/10 text-lime-400 text-xs">
                    {getInitials(post.author.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs text-zinc-500">Upload por</p>
                  <p className="text-sm font-medium text-zinc-200">
                    {post.author.name}
                  </p>
                </div>
              </div>

              <Button variant={"outline"} asChild>
                <Link
                  href={`/dashboard/orgs/019a976c-320a-764f-8e91-d5c865fab515/posts/${post.id}`}
                >
                  View
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
