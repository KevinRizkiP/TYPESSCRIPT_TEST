function prosesInput(input: string | number){
    // belum narrowing jadi bisa string atau number

    // narrowing (membuat tipe sebuah value menjadi lebih spesifik)
    if(typeof input === "string"){//masuk ke sini sudah pasti string
        input.toUpperCase();
    }else{// masuk ke sini sudah pasti number, dikarenakan hanya ada 2 kemungkinan yaitu string atau number
        input.toString()
    }
}
