var forIform = function(data){
   alert("here is your data "+data);
};
$(document).ready(function(){
    var iform=$('#Form'),
        fperrorslink = $('#fperrorslink');
    
    iform.validate({
        invalidHandler: function(form, validator){
            fperrorslink.click();
            var html = '';
            for (var key in validator.submitted){
                var label=$('label[for^="'+key+'"]').not('[generated]');
                var legend=label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldname = legend.length ? legend.text() : label.text();
                html += '<li>' + fieldname +'</li>';
            };
            $("#formpageerrors ul").html(html);
        },
        submitHandler: function(){
            var data = iform.serializeArray();
            alert("form submitted");
            forIForm(data);
        }
    });
});

















