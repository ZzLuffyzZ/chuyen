/*bài 1
console.log(`
__________________
< srsly dude, why? >
 ------------------
        \\   ^__^
         \\  (oo)\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`);


//bài 2: cho mảng a = [1,2,3,4,5,6,7,8]. không sử duingj vòng lặp hay tương tự như vòng lặp
//tìm số chẵn


let a = [1,2,3,4,5,6,7,8]

console.log(2,4,6,8);

//bài 3 cho đầu vào x nhận giá trị 0 hoặc 1. Nếu không sử dụng câu điều kiện , in ra màn hình nếu x =0 thì in ra 1 ; nếu x=1 thì in ra 0

let x = Number(prompt("Nhập x"));

/*let b = [1,0];
console.log(a[x]);
console.log(1-x);

//bài 4: cho đầu vào x là một số. Chỉ dùng switch case. nếu x = 10 hãy in ra màn hình A+.Nếu x= 9 in ra A.nếu x=8 in ra B+.nếu x=7 in ra B. Nếu x = 6 in C+. Nếu x =5 in C

let z = Number(prompt("Nhập z"));
switch(z){
    case 10:
        console.log(`A+`);
        break;
    case 9:
        console.log(`A`);
        break;
    case 8:
        console.log(`B`);
        break;
}

// bài 5: cho đầu vào x là 1 số. Sử dụng swtich case. Nếu x>10 in ra "không hợp lệ".Nếu 9<=x <= 10 in ra A+. Nếu 8<=x< 9 in ra A. Nếu 7<=x,8 in ra B+

let q = Number(prompt("Nhập q"));

switch(true){
    case q>10:
        console.log(`Khong hop le`);
        break;
    case q>=9 && q<10:
        console.log(`A+`);
        break;
    case q>=8 && q<9:
        console.log(`A`);
        break;
    case q>=7 && q<8:
        console.log(`B`);
        break;
}*/

let $answers = document.getElementById('answers');
let $no = document.getElementById('no'); 
let count = 0;
$no.addEventListener('mouseover',function(){ // thêm listener
    count++;
    if(count<5){
    $answers.classList.toggle(`reverse`);
    } else{
        alert(`Đồng ý rồi không phải ấn nữa`)
        $answers.style.display = 'none'
    }
})

/* ghi đè listener
$no.onmouseover = function()*/


/*Bài 1: Tìm hiểu về OOP
-Khái niệm
-Tính chất.Nêu Vd
Bài 2: Nhập 1 mảng(dãy số).Hãy tìm tất cá số nguyên tố trong mảng
Bài 3: 