function alignWrapCenter() {
    let minHeight = 1070;
    let realHeight = $( window ).height();
    if (realHeight > minHeight) {
        $( 'html' ).css( 'height', '100%' );
        $( 'body' ).css( 'height', '100%' );
    } else {
        $( 'html' ).css( 'height', 'auto' );
        $( 'body' ).css( 'height', 'auto' );
    }
}

function selectColor() {
    $( 'ellipse' ).not( $( this ) ).removeClass( 'selected-color' );
    $( this ).addClass('selected-color');
}

function selectItem() {
    $( '.item-nav div' ).not( $( this ) ).removeClass( 'nav-select' );
    $( this ).addClass('nav-select');
}

$( document ).ready( alignWrapCenter );
$( window ).resize( alignWrapCenter );
$( 'ellipse' ).click( selectColor );
$( '.item-nav div' ).click( selectItem );
