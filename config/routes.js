module.exports.routes = {
  '/': (req, res) => {
    res.redirect('/dashboard');
  },
  '/dashboard': 'DashboardController.index',
  '/administrator/categories': 'AdministratorController.categories',
  '/administrator/products': 'AdministratorController.products'
};
