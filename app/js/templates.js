define(['hogan'], function(Hogan) {

  this["Templates"] = this["Templates"] || {};

  this["Templates"]["articles/index.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<ul>");_.b("\n" + i);if(_.s(_.f("articles",c,p,1),c,p,0,20,170,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <li>");_.b("\n" + i);_.b("    <h1 data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("      <a class=\"articleLink\" href=\"/articles/");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        ");_.b(_.v(_.f("title",c,p,0)));_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("      ");_.b("\n" + i);_.b("    </h1>");_.b("\n" + i);_.b("  </li>");_.b("\n");});c.pop();}_.b("</ul>");_.b("\n");return _.fl();;});

  this["Templates"]["articles/menu.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<a href=\"#\" class=\"new\">New</a>");_.b("\n" + i);_.b("<a href=\"/images\" class=\"nav\">Images</a>");_.b("\n");return _.fl();;});

  this["Templates"]["articles/show.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1 class=\"title\" data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\" data-attr=\"title\" contenteditable=\"true\">");_.b("\n" + i);_.b("  ");_.b(_.v(_.f("title",c,p,0)));_.b("\n" + i);_.b("</h1>");_.b("\n" + i);_.b("\n" + i);_.b("<p>");_.b("\n" + i);_.b("  <a data-uploader=\"image\" href=\"#\">Upload image</a>");_.b("\n" + i);_.b("</p>");_.b("\n" + i);_.b("\n" + i);_.b("<h2 data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\" data-attr=\"slug\" contenteditable=\"true\">");_.b("\n" + i);_.b("  ");_.b(_.v(_.f("slug",c,p,0)));_.b("\n" + i);_.b("</h2>");_.b("\n" + i);_.b("<p>");_.b(_.t(_.f("content",c,p,0)));_.b("</p>");_.b("\n");return _.fl();;});

  this["Templates"]["images/index.mustache"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<ul>");_.b("\n" + i);if(_.s(_.f("images",c,p,1),c,p,0,18,184,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <li>");_.b("\n" + i);_.b("\n" + i);_.b("    <h1 data-id=\"");_.b(_.v(_.f("_id",c,p,0)));_.b("\">");_.b(_.v(_.f("filename",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("      <a class=\"\" href=\"http://localhost:5000");_.b(_.v(_.f("path",c,p,0)));_.b("\">");_.b("\n" + i);_.b("        /images/");_.b(_.v(_.f("_id",c,p,0)));_.b("\n" + i);_.b("      </a>");_.b("\n" + i);_.b("    ");_.b("\n" + i);_.b("\n" + i);_.b("  </li>");_.b("\n");});c.pop();}_.b("</ul>");_.b("\n");return _.fl();;});

  return this["Templates"];
});