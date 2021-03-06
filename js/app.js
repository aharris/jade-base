var App = App || {};

App = {
  init: function () {
    this.currentPattern = '';
    this.getCurrentRoute();
    this.bindNav();
  },

  bindNav: function () {
    var self = this;
    $('.nav a').click(function (e) {
      e.preventDefault();

      var file = e.target.hash.split('#')[1];

      self.updateRoute(file);
      self.getPatterns(file);
    });
  },

  getCurrentRoute: function () {
    this.getPatterns(window.location.hash.split('#')[1]);
  },

  updateRoute: function (route) {
    window.location.hash = route;
  },

  getPatterns: function (file) {
    if (this.currentPattern === file) {return false;}
    this.currentPattern = file;
    var container = $('[data-content-block]'),
      tmpl = this.templatizer["_" + file];

    container.html(tmpl);
  }

};

$().ready(function () {
  App.init();
});
