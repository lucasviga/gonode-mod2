const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    // vou na tabela User e busco onde o provider é verdadeiro
    const providers = await User.findAll({ where: { provider: true } })

    return res.render('dashboard', { providers })
  }
}

module.exports = new DashboardController()
