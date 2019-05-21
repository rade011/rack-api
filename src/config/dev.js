export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl:
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost:27017/rack-api'
}
