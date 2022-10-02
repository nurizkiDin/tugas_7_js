var tinggi = [172, 167, 170, 169, 171, 171, 168, 172, 178, 167];

for(i=0;i<tinggi.length;i++){
    console.log(tinggi[i]);
}
console.log('');
for(let x of tinggi){
    console.log(x);
}

/*tidak ada perbedaan dalam output - akan tetapi dalam instruksi terdapat perbedaan
 yakni for biasa memanggil dengan menetapkan blok index array dan untuk let 
 tanpa menetapkan blok index*/