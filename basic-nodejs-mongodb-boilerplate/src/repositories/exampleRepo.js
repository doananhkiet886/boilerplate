import { ObjectId } from 'mongodb'
import exampleModel from '~/models/exampleModel'
import { getDB } from '~/configs/mongodb'

const createNew = async (board) => {
  try {
    const validBoard = await exampleModel.COLLECTION_SCHEMA.validateAsync(board, { abortEarly: false })
    return await getDB().collection(exampleModel.COLLECTION_NAME).insertOne(validBoard)
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (id) => {
  try {
    return await getDB().collection(exampleModel.COLLECTION_NAME).findOne({
      _id: new ObjectId(id)
    })
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  createNew,
  findOneById
}
