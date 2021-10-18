//Bai1
let vatLy = parseInt(prompt('Nhap diem mon Vat ly'));
let hoaHoc = parseInt(prompt('Nhap diem mon Hoa hoc'));
let sinhHoc = parseInt(prompt('Nhap diem mon Sinh hoc'));
let trungbinhcong = (vatLy + hoaHoc + sinhHoc) / 3;
let tongDiem = vatLy + sinhHoc + hoaHoc;
document.write('Trung binh cong cua ban la : ' + trungbinhcong);
document.write('<br>')
document.write('Tong diem 3 mon cua ban la : ' + tongDiem);
document.write('<br>')

//Bai2

let celsius = parseInt(prompt('Nhap gia tri do C '));
let fahrenheit = celsius * (9 / 5) + 32;
document.write('Gia tri do C chuyen thanh do F la : ' + fahrenheit)
document.write('<br>')

//Bai3
const pi = 3.14;
let radius = parseInt(prompt('Nhap ban kinh hinh tron '));
areaCirle = (radius * radius) * pi;
document.write('Dien tich hinh tron nay la :  ' + areaCirle);
document.write('<br>')


//Bai4
radius = parseInt(prompt('Nhap ban kinh hinh tron '));
perimeter = radius * 2 * pi;
document.write('Chu vi hinh tron nay la ' + perimeter);
