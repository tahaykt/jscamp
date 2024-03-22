
function addToCard(productname) {
    console.log("Sepete eklendi:" + productname)
    
}

addToCard("elma")
addToCard("armut")
addToCard("çilek")

let sayHello = () =>{
    console.log("hello")
}
sayHello()

let sayHello2 = function() {
    console.log("hello2")

}

sayHello2()

function addToCard2(productname,quantity,unitPrice) {

}

addToCard2("Elma",5,10)
addToCard2("Karpuz",20,30)
addToCard2("Kavun",40,90)

let product1 = {productname : "elma" ,unitPrice: "10",quantity:"5"}

function addToCard3(product) {
    console.log("Ürün: "+product.productname)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)


}

addToCard3(product1)

let product2 = {productname : "elma" ,unitPrice: "10",quantity:"5"}
let product3 = {productname : "elma" ,unitPrice: "10",quantity:"5"}
product2=product3
product2.productname="ÇİLEK"

console.log(product3.productname)   //Çilek 

function addToCard4(x) {
    console.log(x)
}

let products = [
    {productname : "elma" ,unitPrice: "10",quantity:"5"},
    {productname : "armut" ,unitPrice: "40",quantity:"15"},
    {productname : "kel mahmut" ,unitPrice: "30",quantity:"35"}
]

addToCard4(products)

function add(...numbers){

    console.log(numbers)
}

add(10,20)
add(10,30,50)


let numbers=[10,30,440,1221,23432232322332]
console.log(Math.random(...numbers))

let [İcAnadolu,Marmara] =["İc Anadolu","Karadeniz","Dogu Anadolu","Marmara","Akdeniz"]

console.log(Marmara)


let [icAnadolu,marmara,Karadeniz,[İcAnadoluSehirleri]]=[
    {Name:"İç Anadolu",population:"20M"},
    {Name:"Marmara",population:"50M"},
    {Name:"Karadeniz",population:"100M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["çanakkale","adana"]
    ]


]

console.log(İcAnadoluSehirleri)
console.log(marmara)
console.log(icAnadolu)

//console.log("7" - 6)
















