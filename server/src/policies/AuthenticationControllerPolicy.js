const Joi = require('joi')

module.exports = {
    register (req, res, next) {
      const schema = {
        email: Joi.string().email(),
        password: Joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
      }
      const {error, value} = Joi.validate(req.body, schema)
      if (error) {
        switch (error.details[0].context.key) {
          case 'email':
            res.status(400).send({
              error: 'пожалуйста, введите корректный email'
            })
            break
          case 'password':
            res.status(400).send({
              error: `введенный пароль не соответствует следующим правилам:
                <br>
                1. пароль может содержать только буквы и цифры
                <br>
                2. длинна пароля не менее 8 и не более 32 символов              
              `
            })
            break
          default:
            res.status(400).send({
              error: 'некорректная информация'
            })
        }
      } else {
        next()
      }
    }
}