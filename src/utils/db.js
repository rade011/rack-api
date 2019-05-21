import mongoose from 'mongoose'
import options from '../config'

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true },
    (err, res) => {
      if (err) {
        console.log('DB Connetct error :' + url + '. ' + err)
      } else {
        console.log('Succeeded connected to: ' + url)
      }
    }
  )
}
