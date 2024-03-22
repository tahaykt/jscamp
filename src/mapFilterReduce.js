let card = [
    {id:1,productname:"Telefon",quantity:"3",unitPrice:"2000"},
    {id:2,productname:"Bardak",quantity:"2",unitPrice:"30"},
    {id:3,productname:"Kalem",quantity:"1",unitPrice:"20"},
    {id:4,productname:"Sarj Cihazı",quantity:"2",unitPrice:"100"},
    {id:5,productname:"Kitap",quantity:"3",unitPrice:"30"},
    {id:6,productname:"Pot",quantity:"5",unitPrice:"150"}

]

card.map(product=>{
    console.log(product.productname+ ": "+product.unitPrice * product.quantity )
})



function addToCard(sepet){
    sepet.push({id:2,productname:"Ruhsat",quantity:1,unitPrice:20})


}

addToCard(card)
console.log(card)

console.log("<ul>")
card.map(product=>{
    console.log("<li>"+product.productname+":"
    +product.unitPrice*product.quantity+"</li>")
})
console.log("</ul>")

let quantityOver2=card.filter(product=>product.quantity>2)

console.log(quantityOver2)

let total =card.reduce((acc,product)=>acc+product.unitPrice *product.quantity,0)
console.log(total)







