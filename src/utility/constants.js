class Constants {
  getExtraLongWait() { return 120000; }
  getLongWait() { return 60000; }
  getMeduimWait() { return 20000; }
  getShortWait() { return 5000; }


  getBaseUrl() {
    const env = process.env.TEST_ENV;
    if (env == "prod") {
      return "http://news.ycombinator.com";
    } else {
      return "http://news.ycombinator.com";
    }
  }

  getLocatorPath() {
    let pagePath = process.cwd() + "/src/locators/";
    const product = process.env.PRODUCT;
    if (product === undefined) {
    //TODO: Get correct product name from client
      return pagePath + "";
    } else {
      return pagePath + product + "/";
    }
  }
}
export default new Constants();