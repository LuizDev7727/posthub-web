type GetProjectsHttpParams = {
  slug: string;
  nextCursor: string | null;
};

type GetProjectsHttpResponse = {
  projects: [];
  nextCursor: string | null;
};

export async function getProjectsHttp(
  params: GetProjectsHttpParams,
): Promise<GetProjectsHttpResponse> {
  return {
    projects: [],
    nextCursor: null,
  };
}
