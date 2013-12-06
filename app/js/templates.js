define(['hogan'], function(Hogan) {

  this["Templates"] = this["Templates"] || {};

  this["Templates"]["article.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1 data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b(_.v(_.f("title",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.f("content",c,p,0)));_.b("</p>");_.b("\n");return _.fl();;});

  this["Templates"]["index.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<ul>");_.b("\n" + i);if(_.s(_.f("articles",c,p,1),c,p,0,20,150,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <li>");_.b("\n" + i);_.b("    <h1 data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("      <a href=\"/articles/");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        ");_.b(_.v(_.f("title",c,p,0)));_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("    </h1>");_.b("\n" + i);_.b("  </li>");_.b("\n");});c.pop();}_.b("</ul>");_.b("\n");return _.fl();;});

  return this["Templates"];
});