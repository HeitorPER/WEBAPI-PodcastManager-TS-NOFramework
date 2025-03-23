import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import {repoPodcast} from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpsiodes = async (): Promise <PodcastTransferModel> => {
    
    let responseFormat: PodcastTransferModel = {
        statuscode: 0,
        body: [],
    }
    
    const data = await repoPodcast();

    responseFormat = {
        statuscode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
    
};
