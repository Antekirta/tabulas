import {MODELS} from "../registry/MODELS"
import * as mongoose from 'mongoose'
import {modelsManager} from "../utils/models-manager"
import {CUSTOM_SCHEMA_TYPES} from "../../shared/registry/SCHEMA_TYPES";
import {ISchemaOptions} from "../interfaces/mongoose";

interface IArticle {
    _id?: mongoose.Schema.Types.ObjectId // it's automatically added by Mongo
    title: string
    description: string
    content: string
    showOnMainPage: boolean
}

const schemaOptions: ISchemaOptions = {
    collection: MODELS.ARTICLES,
    modelPrettyName: 'Статьи'
}

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        customType: CUSTOM_SCHEMA_TYPES.STRING,
        required: true,
        unique: true,
        label: 'Заголовок'
    },
    description: {
        type: String,
        customType: CUSTOM_SCHEMA_TYPES.HTML,
        // required: true,
        label: 'Описание'
    },
    content: {
        type: String,
        customType: CUSTOM_SCHEMA_TYPES.STRING,
        // required: true,
        label: 'Текст'
    },
    showOnMainPage: {
        type: Boolean,
        customType: CUSTOM_SCHEMA_TYPES.SWITCH,
        label: 'Показывать на главной странице'
    }
}, schemaOptions)

const ArticleModel = mongoose.model(MODELS.ARTICLES, articleSchema)

// Wrap mongoose model method in order to it it register model, if possible
// You must register all the models!
modelsManager.register(MODELS.ARTICLES, articleSchema)

export {IArticle, ArticleModel}
