
$(function(){
	// キャンセルポリシーチェック
	$('input[name="privacy_check"]').change(function() {
		if($(this).prop('checked')) {
			$('input[name="send"]').attr('disabled',false);
		} else {
			$('input[name="send"]').attr('disabled',true);
		}
	});
	
});
