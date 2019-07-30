import * as mongoose from 'mongoose'

/**
 * Models manager make all the models accessible by their names
 */
class ModelsManager {
    private schemas: Map<string, mongoose.Schema> = new Map()

    public register(modelName: string, schema: mongoose.Schema) {
        this.schemas.set(modelName, schema)
    }

    public getModelSchema(modelName: string) {
        return this.schemas.get(modelName)
    }

    public getSchemas () {
        return this.schemas
    }
}

const modelsManager = new ModelsManager()

export {modelsManager}
