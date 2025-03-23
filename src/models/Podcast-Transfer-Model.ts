import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
    statuscode: number;
    body: PodcastModel[];
}