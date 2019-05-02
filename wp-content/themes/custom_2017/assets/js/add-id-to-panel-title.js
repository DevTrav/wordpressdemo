jQuery( "h2.entry-title" ).each( function() {
  var panelId = jQuery( this ).html().toLowerCase().replace(/\s+/g, "-");
  jQuery( this ).wrapInner(function() {
    return "<span style='padding-top:96px;' id='" + panelId + "'></span>";
  })
})