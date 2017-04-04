var socket = io();
socket.on( "welc", function (d) {
	$('#res').html( d.desc );
} );
socket.on( "welc2", function (d) {
	$('#res2').html( d.desc );
} );