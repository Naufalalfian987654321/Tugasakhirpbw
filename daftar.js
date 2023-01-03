
let totalHargaLapangan = 0;
let lapangan = [
    {
        name:`Lapangan A`,
        stok: 3,
        harga: 200000,
        image: 'lapangan futsal 2.jpg'
    },
    {
        name:`Lapangan B`,
        stok: 0,
        harga: 100000,
        image: 'lapangan futsal 4.jpg'
    },
    {
        name:`Lapangan C`,
        stok: 0,
        harga: 200000,
        image: 'lapangan futsal.jpg'
    },
    {
        name:`Lapangan D`,
        stok: 1,
        harga: 250000,
        image: 'lapangan futsal 6.jpg'

    },
    {
        name:`Lapangan E`,
        stok: 2,
        harga: 200000,
        image: 'lapangan futsal 3.jpg'

    },
]

let cart = [

];

let pembelian =[

];

function debug(){
    console.log(pembelian); 
}

function checkAvailable(){
    var available = true;
    for(var i = 0; i<cart.length; i++){
        for(var j = 0; j<lapangan.length; j++){
            if(cart[i].name === lapangan[j].name){
                if(lapangan[j].stok < cart[i].jumlah){
                    available = false;
                    alert(`Stok ${lapangan[j].name} tinggal ${lapangan[j].stok}`);
                    break;
                }
            }  
        }
        if(!available){
            break;
        }
    }

    return available
}

function orderLapangan(){
    // for(var i = 0; i<cart.length; i++){
    //     var notAvailable = false;
    //     for(var j = 0; j<lapangan.length; j++){
    //         if(cart[i].name === lapangan[j].name){
    //             if(lapangan[j].stok < cart[i].jumlah){
    //                 notAvailable = true;
    //                 alert(`Stok ${lapangan[j].name} tinggal ${lapangan[j].stok}`);
    //                 break;
    //             }
    //             // if(!notAvailable){
    //             //     lapangan[j].stok -= cart[i].jumlah;
    //             // }      
    //         }  
    //     }
    //     if(notAvailable){
    //         break;
    //     }
    // }
    
    if(checkAvailable()){
        for(var x = 0; x<cart.length; x++){
            for(var y = 0; y<lapangan.length; y++){
                if(cart[x].name === lapangan[y].name){  
                        lapangan[y].stok -= cart[x].jumlah;
                }
            }
        }
        var cartList = document.getElementById('cartList');

        // UNTUK MATIKAN CARTLIST
        cartList.setAttribute('style','display:none');
        alert(`Pesanan telah diterima, Mohon menunggu, Total Harga : Rp${toRupiah(totalHarga)},00`);
        cart.push(totalHargaLapangan);
        pembelian.push(cart);
        totalHargaLapangan = 0;
        cart = [];
        generateData();    
    }
    console.log(pembelian); 
    console.log(lapangan);
}

function addtoCart(index) {
    console.log(lapangan[index].name);
    var hasExist = false;
    var hasEmpty = false;
    if(lapangan[index].stok <= 0){
        alert(`${lapangan[index].name} habis, silahkan pesan menu lainnya`);
        hasEmpty = true;
    }
    for(var i = 0; i<cart.length; i++){
        if(lapangan[index].name === cart[i].name){
            if(lapangan[index].stok - cart[i].jumlah <=0){
                alert(`${lapangan[index].name} habis, silahkan pesan menu lainnya`);
                hasEmpty = true;
                break;
            }else{
                totalHargaLapangan += cart[i].harga;
                //console.log(totalHargaLapangan);
                cart[i].jumlah ++;
                hasExist = true;
                break;
            }      
        }
    }
    if(!hasExist && !hasEmpty){
        let obj ={
            name: lapangan[index].name,
            harga: lapangan[index].harga,
            jumlah: 1,
            image: lapangan[index].image,
        }
        totalHargaLapangan +=lapangan[index].harga;
        cart.push(obj);
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }
}

function removeLapangan(value){
    
    //console.log(cart[value].jumlah);
    if(cart[value].jumlah > 0){
        totalHargaLapangan -=cart[value].harga;
        cart[value].jumlah--;
    }   
    if(cart[value].jumlah === 0){
        cart.splice(value,1);
        
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }else{

        // UNTUK MATIKAN CARTLIST

        
        cartlist.setAttribute('style', 'display:none');
    }
}

function toRupiah(harga){
    var result = '';
    harga = String(harga);
    var arr = [];
    var count = 0;
    for(var i = harga.length-1; i>=0; i--){
        if(count === 3 && harga[i] !=undefined){
            arr.push('.');
            arr.push(harga[i]);
            count = 1;
            // console.log(count,i,'MASUK'); 
        }else{
            arr.push(harga[i]);
            count++;
            //console.log(count,i-1);
        }
    }
    //console.log(arr);
    for(var i = arr.length-1; i>=0; i--){
        result += arr[i];
    }
    return result;
}

//console.log(toRupiah(1910450));

function generateData(){
    const lapanganList = document.getElementById('lapanganList');
    const cartList = document.getElementById('cartList');
    lapanganList.innerHTML = '';
    cartList.innerHTML = '';
    
    for(var i =0; i<lapangan.length; i++){
        let name = lapangan[i].name;
        let stok = lapangan[i].stok;
        let harga = lapangan[i].harga;
        let image = lapangan[i].image;
      
        let divCard = document.createElement('div');
        divCard.classList.add('card')

    
        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCard.appendChild(imageData);
    
        let title = document.createElement('p');
        title.innerHTML = name;
        divCard.appendChild(title);

        let divAction = document.createElement('div');
        divAction.classList.add('action');

        let spanData = document.createElement('span');
        spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
        divAction.appendChild(spanData);

        let buttonAdd = document.createElement('button');
        buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
        buttonAdd.setAttribute('value', i);
        buttonAdd.setAttribute('onclick', 'addtoCart(this.value)');
        divAction.appendChild(buttonAdd);
        divCard.appendChild(divAction);
        //console.log(divCard);
        lapanganList.appendChild(divCard);
    
    }

    let totalDiv = document.createElement('div');
    totalDiv.classList.add('total');

    let totalh1 = document.createElement('h1');
    totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargaLapangan)},00`;
    totalDiv.appendChild(totalh1);

    let totalhr = document.createElement('hr');
    totalDiv.appendChild(totalhr);
    //console.log(totalDiv);
    cartList.appendChild(totalDiv);

    //console.log('BelumMasuk');
    for(var x =0; x<cart.length; x++){
        
        let name = cart[x].name;
        let jumlah = cart[x].jumlah;
        let harga = cart[x].harga;
        let image = cart[x].image;
        //console.log('MASUK');
        let divCardx = document.createElement('div');
        divCardx.classList.add('card-order') ;  
        //console.log(divCardx);

        let divCardDetail = document.createElement('div');
        divCardDetail.classList.add('detail');

        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCardDetail.appendChild(imageData);
        
        let lapanganName = document.createElement('p');
        // lapanganName.setAttribute('id','nameCart')
        lapanganName.innerHTML = name;
        divCardDetail.appendChild(lapanganName);

        let lapanganJumlah = document.createElement('span');
        lapanganJumlah.innerHTML = jumlah;
        divCardDetail.appendChild(lapanganJumlah);
        
        divCardx.appendChild(divCardDetail);

        let buttonCancel = document.createElement('button');
        buttonCancel.setAttribute('value', x );
        buttonCancel.setAttribute('id', 'cancelCart' );
        buttonCancel.setAttribute('onclick', 'removeLapangan(this.value)');
        buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
        divCardx.appendChild(buttonCancel);
        //console.log(divCardx);
    
        cartList.appendChild(divCardx);
    }

    let divbutton = document.createElement('div');
    divbutton.classList.add("card-finish");

    

  

}
generateData()