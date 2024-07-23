const getRandomPin = (req, reply) => {
  const pinLen = parseInt(req.query.len);
  const pinArray = [];

  for (let i = 0; i < pinLen; i++) {
    pinArray.push(Math.floor(Math.random() * 9));
  }

  reply.send(pinArray.join(""));
}

const getRandomPassword = (req, reply) => {
  const randomPassword = Math.random().toString(36).substring(2, 8);
  reply.send(randomPassword);
}

const hashPassword = (req, reply) => {
  const password = req.query.pw;
  const hashCode = password.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)
  reply.send(hashCode.toString());
}

export const authController = {
  hashPassword, getRandomPassword, getRandomPin
}