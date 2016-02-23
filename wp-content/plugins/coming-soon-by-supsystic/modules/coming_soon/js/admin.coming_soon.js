jQuery(document).ready(function(){
	jQuery('#scsSettingsSaveBtn').click(function(){
		_scsSaveMainOpts();
		return false;
	});
	jQuery('#scsSettingsForm').submit(function(){
		jQuery(this).sendFormScs({
			btn: jQuery('#scsSettingsSaveBtn')
		,	onSuccess: function(res) {
				if(!res.error) {
					if(jQuery('#scsSettingsForm input[name="opt_values[cs_mode]"]:checked').val() == 'dsbl') {
						jQuery('#wp-admin-bar-comingsoon-supsystic').slideUp( g_scsAnimationSpeed );
					} else {
						jQuery('#wp-admin-bar-comingsoon-supsystic').slideDown( g_scsAnimationSpeed );
					}
				}
			}
		});
		return false;
	});
	jQuery('#scsSettingsForm input[name="opt_values[cs_mode]"]').change(function(){
		if(!jQuery(this).prop('checked')) return;
		var newMode = jQuery(this).val();
		jQuery('.scsOptCat_cs_mode_coming_soon, .scsOptCat_cs_mode_redirect').slideUp( g_scsAnimationSpeed );
		jQuery('.scsOptCat_cs_mode_'+ newMode).slideDown( g_scsAnimationSpeed );
	}).trigger('change');
	scsInitChangeTpl();
	jQuery('.preset-select-btn').click(function(){
		_scsSaveMainOpts();
	});
	jQuery('.template-list-main-select').click(function(e){
		if(!jQuery(this).parents('.temlplate-list-item:first').hasClass('sup-promo')) {
			e.preventDefault();
		}
	});
	// Transform al custom chosen selects
	jQuery('.chosen').chosen();
});
function scsInitChangeTpl() {
	jQuery('.temlplate-list-item').click(function(){
		jQuery('.temlplate-list-item').removeClass('active');
		jQuery(this).addClass('active');
		var id = parseInt( jQuery(this).data('id') );
		if(id) {
			jQuery('#scsSettingsForm').find('[name="opt_values[cs_original_tpl_id]"]').val( jQuery(this).data('id') );
		}
	});
	var currentId = parseInt(jQuery('#scsSettingsForm').find('[name="opt_values[cs_original_tpl_id]"]').val());
	if(currentId) {
		jQuery('.temlplate-list .temlplate-list-item[data-id="'+ currentId+ '"]').addClass('active');
	}
}
function _scsSaveMainOpts() {
	jQuery('#scsSettingsForm').submit();
}