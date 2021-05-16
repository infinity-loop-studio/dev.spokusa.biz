module.exports = {
  categories: async (req, res) => {
    return res.view('administrator/templates/il_dashboard/pages/categories', {
      layout: 'administrator/templates/il_dashboard/index'
    });
  },
  products: async (req, res) => {
    return res.view('administrator/templates/il_dashboard/pages/products', {
      layout: 'administrator/templates/il_dashboard/index'
    });
  }
};

