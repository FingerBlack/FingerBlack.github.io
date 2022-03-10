function calculate_1() {
    age=document.getElementById('age').value;
    weight=document.getElementById('weight').value;
    data={};
    data['age']=age;
    data['weight']=weight;

    console.log(JSON.stringify(data));
    return false
}
function calculate() {
    age=document.getElementById('age').value;
    weight=document.getElementById('weight').value;
    data={};
    data['age']=age;
    data['weight']=weight;
    document.getElementById('age').value="";
    document.getElementById('weight').value="";
    console.log(JSON.stringify(data));
    fetch('/calculate',{
        method: 'post', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
        },
        dataType:'json',
        body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        result=document.getElementById("result");
        result.innerText=data["result"]
      });
    return false
}
