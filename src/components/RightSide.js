import React, { Component } from 'react';
import booksImg from './../assets/img/books.jpg';
import miscImg from './../assets/img/misc.jpg';
import tshirtImg from './../assets/img/tshirt.jpg';
import bagImg from './../assets/img/bags.jpg';

class RightSide extends Component {
    constructor(props){
        super(props);

        this.state = {
            products : [
                { 
                    id : 1,
                    dataCategory : "books",
                    dataSort : 49,
                    dataTopProduct : "on",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:booksImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Books",
                    secChildChilSecData  : 49,
                },
                { 
                    id : 2,
                    dataCategory : "tshirt",
                    dataSort : 79,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:tshirtImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Tshirts",
                    secChildChilSecData  : 79,
                },
                { 
                    id : 3,
                    dataCategory : "tshirt",
                    dataSort : 59,
                    dataTopProduct : "on",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:tshirtImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Tshirts",
                    secChildChilSecData  : 59,
                },
                { 
                    id : 4,
                    dataCategory : "bags",
                    dataSort : 69,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:bagImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Bags",
                    secChildChilSecData  : 69,
                },
                { 
                    id : 5,
                    dataCategory : "bags",
                    dataSort : 39,
                    dataTopProduct : "on",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:bagImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Bags",
                    secChildChilSecData  : 39,
                },
                { 
                    id : 6,
                    dataCategory : "misc",
                    dataSort : 29,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:miscImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Misc",
                    secChildChilSecData  : 29,
                },
                { 
                    id : 7,
                    dataCategory : "misc",
                    dataSort : 19,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:miscImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Misc",
                    secChildChilSecData  : 19,
                },
                { 
                    id : 8,
                    dataCategory : "books",
                    dataSort : 99,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:booksImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Books",
                    secChildChilSecData  : 99,
                },
                { 
                    id : 9,
                    dataCategory : "books",
                    dataSort : 990,
                    dataTopProduct : "off",
                    className : "shadow-sm",
                    firstChildClass : "product-img",
                    img_url:booksImg,
                    secChildClass : "product-desc" ,
                    secChildChilFirClass : "product-title",
                    secChildChilSecClass : "product-price",
                    secChildChilFirData  : "Books",
                    secChildChilSecData  : 990,
                }
            ]
        }
    }
    render() {
        const { products } = this.state;
        console.log(products)
        return (
            <>
                <div className="products">
                    <ul>
                        {
                            products.map((item,key) => {
                                return(
                                    <>
                                        <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                            <div className={item.firstChildClass}>
                                                <img src={item.img_url} alt="pic"/>
                                            </div>
                                            <div className={item.secChildClass}>
                                                <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                                <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
}

export default RightSide;