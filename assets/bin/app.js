jQuery(function($){

	$("body").css({
		"padding-bottom": $(".navbar").height()
	});

	// inisialisasi bulan ini

	tanggalan = new Date();
	bulan = tanggalan.getMonth();
	bulan++;
	bulan2 = bulan++;

	// memilih antara bulan ini atau semua bulan

	bulan_ini = function(){
		$(".bulan").hide();
		$(".bulan-"+bulan).show();
		$(".bulan-"+bulan2).show();
		$(".button").removeClass("is-active");
		$(".bulan-ini").addClass("is-active");
	}
	semua_bulan = function(){
		$(".bulan").show();
		$(".button").removeClass("is-active");
		$(".semua-bulan").addClass("is-active");
	}

	bulan_ini();

	$(".bulan-ini").click(function(){
		bulan_ini();
	});
	$(".semua-bulan").click(function(){
		semua_bulan();
	});

	// tampilkan modal

	$(".tombol-modal").click(function(){
		$(".modal").addClass("is-active");
	});

	// sembunyikan modal

	$(".modal-close, .modal-background").click(function(){
		$(".modal").removeClass("is-active");
	});
});