export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/rack-api'
}
