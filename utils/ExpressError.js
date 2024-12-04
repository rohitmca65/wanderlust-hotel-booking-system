class ExpressError extends Error {
  constructor(statusCode, messages) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ExpressError;
