import { PostModel } from './post.model';
import { GenericResponseModel } from "./generic.response.model";

export class PostListResponseModel extends GenericResponseModel {

    result :PostModel[];
    
}