// class Animal{
//     constructor(legs){
//         this.legs = legs
//     }


// walk(){
//     console.log('walking on' + this.legs + 'legs');
// }
// }

// //child class
// class Bird extends Animal{
//     constructor(legs,color,name){
//         super(legs);
//         this.color=color;
//         this.name=name;
//     }


// fly(){
//     console.log('flying');
//     console.log(bird.legs, bird.color, bird.name);

// }

// }

// let bird=new Bird(2,"blue", "swallow");
// bird.walk();
// bird.fly();


function cEmp(e)
{
e.preventDefault();
var f = document.getElementById('first').value;
var l = document.getElementById('last').value;
var a = document.getElementById('age').value;
var cit = document.getElementById('city').value;
var sta = document.getElementById('state').value;
var cnt = document.getElementById('cntry').value;
var zipc = document.getElementById('zip').value;
var sal = document.getElementById('sal').value;
var jt = document.getElementById('jt').value;
var dep = document.getElementById('dept').value;
var srv = document.getElementById('serve').value;
var doc = document.getElementById('info')




class Employee{
    constructor(fn,ln,age,city,zip,state,cntry){
        this.fn = f
        this.ln=l
        this.age=a
        this.city=cit
        this.zip=zipc
        this.state=sta
        this.cntry=cnt
    }
        createEmployee(){
        console.log( this.fn +  this.ln +this.age+this.city+this.zip+this.state+this.cntry);
        }

    }

        class Details extends Employee{
            constructor(fn,ln,salary,jobTitle,dept,service){
                super(fn,ln)
                this.salary=sal
                this.jobTitle=jt
                this.dept=dep
                this.service=srv
            }
        
            createDetails(){
                console.log("First Name Is: " + " " + Person.fn + "Last Name Is: "  + " " + Person.ln + " " + 'Job Title Is: ' + " " + Person.jobTitle + " " + "Department is: " +  " " + Person.dept + Person.service);
                let div= document.createElement("div");
                div.innerHTML = ("First Name Is: " + " " + Person.fn + " " + "Last Name Is: " + " " + Person.ln + " " + 'Job Title Is: ' + " " + Person.jobTitle + " " + "Department is: " + " " + Person.dept);
                doc.append(div)
                var info = document.getElementById("info").innerHTML =  "First Name Is: " + " " + Person.fn + " " + "Last Name Is: " + " " + Person.ln + " " + 'Job Title Is: ' + " " + Person.jobTitle + " " + "Department is: " + " " + Person.dept 
                }

        }

   

        let Person = new Details(f, l, sal, jt, srv);
Person.createEmployee();
Person.createDetails();

    }