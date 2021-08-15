// ? Task: Modify paragraph text style through javascript code using button

// Solution 1
const insertRow=()=>
{
let x=document.querySelector('#table').insertRow(0);
let y = x.insertCell(0);
let z = x.insertCell(1);
let f = x.insertCell(2);
y.innerHTML="New Cell";
z.innerHTML = "New Cell";
f.innerHTML = "New Cell";    
}

// ! Explanation:Испольсуем insertRow()  и вставляем в нее нужное количество ячеек с соотв индексом. Тут3 шт. Вставляем текс в каждую .
