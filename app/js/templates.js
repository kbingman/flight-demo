define(['hogan'], function(Hogan) {

  this["Templates"] = this["Templates"] || {};

  this["Templates"]["article.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1>");_.b("\n" + i);_.b("  Title: ");_.b(_.v(_.f("name",c,p,0)));_.b("\n" + i);_.b("</h1>");return _.fl();;});

  return this["Templates"];
});