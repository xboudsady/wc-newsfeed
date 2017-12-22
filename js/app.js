const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfChecked = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(e) {
    
    // check if checkox has been checked
    // if zero checkboxes are checked
    if ($(':checked').length === 0) {
        // prevent download of document
        event.preventDefault();
        // alert the user
        alert('Please check the box to allow PDF downloads.');
    }
        
        
    // else allow the download
});

$('#links').append($pdfChecked);