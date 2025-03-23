import {IncomingMessage, ServerResponse} from "http"; 
import {serviceListEpsiodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentTypes } from "../utils/consten-type";
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceListEpsiodes(); 

    res.writeHead(content.statuscode, {"Content-Type": ContentTypes.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
}

export const getFilterEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);


    res.writeHead(content.statuscode, {"Content-Type": ContentTypes.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
}
