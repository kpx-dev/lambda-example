exports.handler = (event, context, callback) => {

  const message = 'Hello awesome Wedbush team!';
  const payload = {
    statusCode: 200,
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    }
  };

  // const payload = {};

  return callback(null, payload);
};
