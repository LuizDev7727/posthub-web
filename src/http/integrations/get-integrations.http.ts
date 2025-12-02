type GetIntegrationsHttpParams = {
  slug: string;
};

type GetIntegrationsHttpResponse = {
  integrations: {
    id: string;
    social: string;
    channelName: string;
  }[];
};

export async function getIntegrationsHttp(
  params: GetIntegrationsHttpParams,
): Promise<GetIntegrationsHttpResponse> {
  return {
    integrations: [],
  };
}
