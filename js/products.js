let products= [
    {'image': 'pictures/fortune.webp', 'name':'Fortune Sunflower Oil 1L' , 'price': 150},
    {'image': 'pictures/tata.jfif', 'name':'Tata Salt 1Kg' , 'price': 28 },
    {'image': 'pictures/pazzta.avif', 'name': 'Maggi Pazzta Cheese Macaroni' , 'price': 36},
    {'image': 'pictures/bread.jpg', 'name':'Kwality Special Bread' , 'price': 40},
    {'image': 'pictures/rice.jpg', 'name': 'India Gate Basmati Rice Super 1kg' , 'price': 200},
    {'image': 'pictures/toor.jpg', 'name':'Tata Sampann Toor Dal 1kg' , 'price': 240},
    {'image': 'pictures/milk.webp', 'name':'Amul Milk 500ml' , 'price': 28 },
    ];
    
    const itemContainer = document.getElementsByClassName('products')[0];

    products.forEach(function (item){
        let itemDiv= document.createElement('div');
        itemDiv.classList.add('item');

        let itemFigure= document.createElement('figure');

        let img= document.createElement('img');
        img.src= item.image;

        let namePara = document.createElement('p');
        namePara.classList.add('itemName');
        namePara.textContent = item.name;

        let pricePara= document.createElement('p');
        pricePara.classList.add('itemPrice');
        price= "Rs. "+ item.price;
        pricePara.textContent= price;

        let button= document.createElement('button');
        button.textContent= "BUY";

        let detail= document.createElement('div');
        detail.classList.add('details');

        itemFigure.appendChild(img);

        itemDiv.appendChild(itemFigure);
        detail.appendChild(namePara);
        detail.appendChild(pricePara);
        detail.appendChild(button);
        itemDiv.appendChild(detail);
        itemContainer.appendChild(itemDiv);

    })