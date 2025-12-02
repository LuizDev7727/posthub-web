type GetPostsHttp = {
  slug: string;
  titleFilter: string;
  statusFilter: string | null;
  pageIndex: number;
  pageSize: number;
};

type GetPostsHttpResponse = {
  id: string;
  thumbnailUrl: string;
  title: string;
  size: number;
  status: ["SUCCESS", "PROCESSING", "SCHEDULED", "ERROR"];
  scheduledTo: Date;
  duration: number; //ms
  createdAt: Date;
  socialsToPost: {
    id: string;
    social: string;
  }[];
  author: {
    name: string;
    avatarUrl: string | null;
  };
};

export async function getPostsHttp(
  params: GetPostsHttp,
): Promise<GetPostsHttpResponse[]> {
  return [];
}
