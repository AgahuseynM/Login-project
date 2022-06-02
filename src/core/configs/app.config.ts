export enum environment {
  env = process.env.NODE_ENV,
  applicationUrl = process.env.BASE_URL,
  applicationName = process.env.VUE_APP_TITLE,
  apiMain = process.env.VUE_APP_API_MAIN,
  applicationVersion = require('../../../package.json').version,
}
