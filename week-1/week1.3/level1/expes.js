const transaction =[
    {id:1,
     item:"food",
     itemName:"Fizza",
     price:250,
     time:12
    },
    {id:2,
        item:"food",
        itemName:"burger",
        price:250,
        time:12
       },
       {id:3,
        item:"cloth",
        itemName:"pant",
        price:1150,
        time:12
       },
       {id:4,
        item:"cloth",
        itemName:"Shirt",
        price:750,
        time:12
       }
]

function totalexpenceByitem(tran){
    spentbyItem = {};
    console.log(spentbyItem);
    tran.forEach(element => {
        const {item,price} =element;
        console.log(item," ",price)
    if(spentbyItem[item]){
        spentbyItem[item]+=price;
    }
    else{
        spentbyItem[item]=price;
    }
    
    });
  return Object.keys(spentbyItem).map((item)=>{
    return{
        item : item,
        totalspent:spentbyItem[item]
    }
  })

}
console.log(totalexpenceByitem(transaction));

