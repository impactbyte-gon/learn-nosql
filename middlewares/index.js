const root = {
  hello: (req, res) => {
    res.send({
      message: 'Hello World'
    })
  }
}

module.exports = root
