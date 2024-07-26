let dataarray = [];
document.getElementById('addbutton').addEventListener('click', function(){
    const inputdata = document.getElementById('inputdata').value;
    if (inputdata && !dataarray.includes(inputdata)){
        dataarray.push(inputdata);
        updatelist();
        document.getElementById('inputdata').value = '';
    }
    else{
        window.alert("Type something");    
    }
});

function updatelist(){
    const datalist = document.getElementById('datalist');
    datalist.innerHTML = '';
    dataarray.forEach(function(item, index){
        const span = document.createElement('span');
        span.textContent = item;
        span.style.display = 'block';

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'delete';
        deletebutton.onclick = function(){
        deleteItem(index);
        };
        span.appendChild(deletebutton);
        datalist.appendChild(span);
    });
}

function deleteItem(index){
    dataarray.splice(index, 1);
    updatelist();
}


//1 .Write a JavaScript function to calculate the sum of two numbers. 
    let ans;
    function addTwoNumber(number1,number2){
        return number1+number2;
    }
    ans = addTwoNumber(1,3)

    let answerDiv = document.querySelector('.answer')
    showoutput = (ans) => {
        answerDiv.textContent = ans;
}

showoutput(ans);
console.log("outPut : ",ans);



// 2. Write a JavaScript program to find the maximum number in an array. 
//     function findMaxNumber(numberArray){
//     return Math.max(...numberArray) //spread operator
//     }
//     ans =findMaxNumber([1,4,5])

