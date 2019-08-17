
import { GenericResponseModel } from "./generic.response.model";
import { PostModel } from "./post.model";

export class AllPostResponseModel extends GenericResponseModel {

    result : PostModel[];
    
}