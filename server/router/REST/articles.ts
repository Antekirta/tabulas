import express from 'express'
import {IArticle, ArticleModel} from "../../../db/models/Article";

const getArticle = async (req: express.Request, res: express.Response) => {
    console.log('getArticle!!!')
    const {_id} = req.params

    if (!_id) {
        const articles = await ArticleModel.find()

        res.status(200).send(articles)

        return
    }

    const article = await ArticleModel.findById(_id)

    res.status(200).send(article)
}

const createArticle = async (req: express.Request, res: express.Response) => {
    const {body} = req as any

    console.log('body: ', body)

    const article: IArticle = {
        title: body.title,
        description: body.description,
        content: body.content,
        showOnMainPage: body.showOnMainPage
    }

    await new ArticleModel(article).save()

    res.status(201).send(`New article ${article.title} has been created!`)
}

const updateArticle = async (req: express.Request, res: express.Response) => {
    const {body} = req as any

    if (!body._id) {
        res.status(500).send('Resource _id is not specified!')
    }

    await ArticleModel.findOneAndUpdate({_id: body._id}, body, {
        upsert: false
    })

    res.status(200).send(`Article ${body.title} has been updated!`)
}

const deleteArticle = async (req: express.Request, res: express.Response) => {
    const {body} = req as any

    if (!body._id) {
        res.status(500).send('Resource _id is not specified!')
    }

    await ArticleModel.findByIdAndDelete(body._id)

    res.status(200).send(`Article ${body.title} has been deleted!`)
}

export {getArticle, createArticle, updateArticle, deleteArticle}
