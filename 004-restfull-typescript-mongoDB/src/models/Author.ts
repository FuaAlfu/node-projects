import mongoose, {Document, Schema} from "mongoose";

export interface IAuthor{
    name: string;
}

export interface IAuthorModel extends IAuthor, Document{}

const AthorSchema: Schema = new Schema({
    name: {type: String, required: true }
});