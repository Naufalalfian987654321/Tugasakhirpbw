function validasi(){
    var nama_lengkap = document.getElementById("nama_lengkap").value;
    var email = document.getElementById("email").value;
    var no_hp = document.getElementById("no_hp").value;
    var negara = document.getElementById("negara").value;
    var check_in = document.getElementById("check_in").value;
    var check_out = document.getElementById("check_out").value;
    var jumlah_tamu = document.getElementById("jumlah_tamu").value;
    var tipe_kamar = document.getElementById("tipe_kamar").value;
    var a1 = "Anda harus mengisi data ";

    if(nama_lengkap == ""){
        a1 = a1 + "nama lengkap, ";
        console.log("Tidak ada nama lengkap");
    }
    if(email == ""){
        a1 = a1 + "email, "
        console.log("Tidak ada email");
    }
    if(no_hp == ""){
        a1 = a1 + "no hp, ";
        console.log("Tidak ada no hp");
    }
    if(negara == ""){
        a1 = a1 + "negara, ";
        console.log("Tidak ada negara");
    }
    if(check_in == ""){
        a1 = a1 + "Jam awal ";
        console.log("Tidak ada tanggal check in");
    }
    if(check_out == ""){
        a1 = a1 + "Jam selesai, ";
        console.log("Tidak ada Jam selesai");
    }
    if(jumlah_tamu == ""){
        a1 = a1 + "jumlah tamu, ";
        console.log("Tidak ada Jumlah");
    }
    if(tipe_kamar == ""){
        a1 = a1 + "tipe kamar. ";
        console.log("Tidak ada tipe kamar");
    }
    if(a1 == "Anda harus mengisi data lengkap"){
        console.log("Data Anda Lengkap");
        alert("Data Anda Lengkap");
    }else{
        alert(a1);
    }
}