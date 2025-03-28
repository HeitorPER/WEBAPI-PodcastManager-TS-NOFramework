import { repoPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise <PodcastTransferModel> => {
    
    let responseFormat: PodcastTransferModel = {
        statuscode: 0,
        body: [],
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    responseFormat.statuscode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
};    