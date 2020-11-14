import React, { Component } from 'react';
import booksImg from './assets/img/books.jpg';
import miscImg from './assets/img/misc.jpg';
import tshirtImg from './assets/img/tshirt.jpg';
import bagImg from './assets/img/bags.jpg';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories : [
                {
                    id : 'all',
                    categoryTitle : 'All'
                },
                {
                    id : 'books',
                    categoryTitle : 'Books'
                },
                {
                    id : 'tshirt',
                    categoryTitle : 'Tshirt'
                },
                {
                    id : 'bags',
                    categoryTitle : 'Bags'
                },
                {
                    id : 'misc',
                    categoryTitle : 'Misc'
                },
            ],
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
            ],
            category_filter_products : [],
            sort_products : [],
            add_product_category_error : false,
            add_product_title_error : false,
            add_product_price_error : false,
            add_product_image_error : false,
            product_title : '',
            product_price : '',
            product_category : '',
            product_img : '', 
            product_top : false,
            closeModal : false,
            addTopProducts : [],
            pageNumber : [],
            paginationResponse : [],
            pageWiseProducts : []
        }
    }

    componentDidMount(){
        this.addTopProducts()
        let response = this.paginator(this.state.products,1,9)
        this.setState({
            paginationResponse : response
        },()=>{
            // console.log('this.state.paginationResponse',this.state.paginationResponse)
            this.loadPageNumber(this.state.paginationResponse)
            this.onLoadProductData(this.state.paginationResponse)
        })
    }

    categoryFilter(e){
        // console.log(e.target.dataset.key)
        e.preventDefault();
        let filterable_type = e.target.dataset.key

        let dummy_array = []

        this.setState({
            category_filter_products : this.state.products,
            sort_products : []
        },() => {
            // console.log(this.state.category_filter_products)
            if(filterable_type !== 'all'){
                for(let i=0;i<this.state.category_filter_products.length;i++){
                    // console.log(this.state.category_filter_products[i].dataCategory)
                    let pro_attr_val = this.state.category_filter_products[i].dataCategory
                    let temp_obj = {}
                    if(filterable_type === pro_attr_val){
                        temp_obj = this.state.category_filter_products[i]
                        dummy_array.push(temp_obj)
                    }
                    this.setState({
                        category_filter_products : dummy_array,
                    },() => {
                        // console.log(this.state.category_filter_products)
                    })
                }            
            }
            else{
                // console.log('1',this.state.category_filter_products)
            }
        })
    }

    sortLowToHigh = (e) => {
        // console.log(e)
 
        e.preventDefault();

        let dummy_array = []

        dummy_array = this.sortDummyArray(dummy_array)

        dummy_array.sort(
            function(a, b){
                // console.log(a.dataSort - b.dataSort)
                return  a.dataSort - b.dataSort
            }
        )
        
        this.setState({
            sort_products : dummy_array
        },()=> {
            // console.log('this.state.sort_products',this.state.sort_products)
        })
    }

    sortHighToLow = (e) => {
        // console.log(e)

        e.preventDefault();

        let dummy_array = []

        dummy_array = this.sortDummyArray(dummy_array)

        dummy_array.sort(
            function(a, b){
                // console.log(a.dataSort - b.dataSort)
                return  b.dataSort - a.dataSort
            }
        )
        // this.sortSetState
        this.setState({
            sort_products : dummy_array
        },()=> {
            // console.log('this.state.sort_products',this.state.sort_products)
        })
    }

    sortDefault = (e) => {
        // console.log(e)

        e.preventDefault();

        let dummy_array = []

        dummy_array = this.sortDummyArray(dummy_array)
    
        this.setState({
            sort_products : dummy_array
        },()=> {
            // console.log('this.state.sort_products',this.state.sort_products)
        })
    }

    sortDummyArray(dummy_array){
        if(this.state.category_filter_products.length === 0){
            return dummy_array = JSON.parse(JSON.stringify(this.state.products))
        }
        else{
           return dummy_array = this.state.category_filter_products
        }
    }

    addProduct = (e) => {
        e.preventDefault()
        // console.log('addproduct',this.state.product_category,this.state.product_img,this.state.product_title,this.state.product_top,this.state.product_price)

        if(this.state.product_title === '' || this.state.product_price === '' || this.state.product_category === '' || this.state.product_img === ''){
            if(this.state.product_category !== ''){
                this.setState({
                    add_product_category_error : false 
                })
            }
            else{
                this.setState({
                    add_product_category_error : true 
                })
            }
            if(this.state.product_img !== ''){
                this.setState({
                    add_product_image_error : false 
                })
            }
            else{
                this.setState({
                    add_product_image_error : true 
                })
            }
            if(this.state.product_price !== ''){
                this.setState({
                    add_product_price_error : false
                })
            }
            else{
                this.setState({
                    add_product_price_error : true
                })
            }
            if(this.state.product_title !== ''){
                this.setState({
                    add_product_title_error : false
                })
            }
            else{
                this.setState({
                    add_product_title_error : true
                })
            }
        }
        else{
            let new_product = {
                id : this.state.products.length + 1,
                dataCategory : this.state.product_category,
                dataSort : parseInt(this.state.product_price),
                dataTopProduct : this.state.product_top,
                className : "shadow-sm",
                firstChildClass : "product-img",
                img_url:this.state.product_img,
                secChildClass : "product-desc" ,
                secChildChilFirClass : "product-title",
                secChildChilSecClass : "product-price",
                secChildChilFirData  : this.state.product_title,
                secChildChilSecData  : parseInt(this.state.product_price),
            }
            this.state.products.push(new_product)
            this.setState({
                products : this.state.products,
                closeModal : true,
                product_title : '',
                product_price : '',
                product_category : '',
                product_img : '', 
                product_top : false,
                add_product_category_error : false,
                add_product_title_error : false,
                add_product_price_error : false,
                add_product_image_error : false,

            },() => {
                console.log(this.state.products)
                this.addTopProducts()
                let response = this.paginator(this.state.products,1,9)
                this.setState({
                    paginationResponse : response
                },()=>{
                    console.log('this.state.paginationResponse',this.state.paginationResponse)
                    this.loadPageNumber(this.state.paginationResponse)
                    this.onLoadProductData(this.state.paginationResponse)
                })
            })
        }
    }

    handleModal = (e) => {
        this.setState({
            closeModal : false
        },
        ()=> {
            // console.log(this.state.closeModal)
        })
    }

    addTopProducts(){

        let dummy_array = []
        
        for(let i=0;i<this.state.products.length;i++){
            if(this.state.products[i].dataTopProduct === 'on' || this.state.products[i].dataTopProduct === true){
                dummy_array.push(this.state.products[i])
            }
        }
        this.setState({
            addTopProducts : dummy_array
        },()=>{
            // console.log(this.state.addTopProducts)
        })
    }

    loadPageNumber(response){

        let dummy_array = []
 
        for(let i=1;i<=response.total_pages;i++){
            dummy_array.push(i)
        }
        this.setState({
            pageNumber : dummy_array
        },()=>{
            // console.log('this.state.page',this.state.pageNumber)
        })
    }
    onLoadProductData(response){
        let dummy_array = []

        for(let i=0;i<response.data.length;i++){
            dummy_array.push(response.data[i])
        }

        this.setState({
            pageWiseProducts : dummy_array
        },()=>{
            console.log('onload data',this.state.pageWiseProducts)
        })
    }

    pageNumbClick = (e) => {
        e.preventDefault();
        console.log(e.target.dataset.page)
        let dummy_array = []

        console.log(this.state.products)
        let page_click_response = this.paginator(this.state.products,e.target.dataset.page,9)

        console.log(page_click_response)
        for(let i=0;i<page_click_response.data.length;i++){
            dummy_array.push(page_click_response.data[i])
        }

        this.setState({
            pageWiseProducts : dummy_array
        })
    }

    // Paginate calculation function
    paginator(items, current_page, per_page_items) {
        let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,

        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);

        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }
    render() {

        const { categories,products,category_filter_products,sort_products,add_product_category_error,
                add_product_title_error,add_product_price_error,add_product_image_error,product_title,product_price,
                product_category,product_img,product_top,closeModal,addTopProducts,pageNumber,pageWiseProducts } = this.state;
        // console.log(categories,products)

        return (
            <>
                <section className='row my-4'>
                    <div className='col-md-12 flexible-div'>
                        <div>
                            <h2 className="main-heading">
                                Products
                            </h2>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={this.handleModal} data-toggle="modal" data-target="#addProduct">
                                Add Product
                            </button>
                        </div>
                    </div>
                </section>
                <section className='row my-4'>
                    <div className='col-md-3'>
                        <div>
                            <p className="font-weight-bold">Browse by Categories</p>
                            <div className="category-box">
                                <ul>
                                    {
                                        categories.map((item,key) => {
                                            return(
                                                <>
                                                    <li id={key} data-key={item.id} onClick={(e) => this.categoryFilter(e)}>
                                                        <button type='button' className='btn text-left'>
                                                            {item.categoryTitle}
                                                        </button>
                                                    </li>
                                                </>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='my-4'>
                            <p className="font-weight-bold">Our best sellers</p>

                            <div className="top-product-list">
                                <ul>
                                    {
                                        addTopProducts.map((item,key) => {
                                            return(
                                                <>
                                                    <li id={key}>
                                                        <div className="top-product-img">
                                                            <img src={item.img_url} alt="pic"/>
                                                        </div>
                                                        <div className="top-product-desc mx-3">
                                                            <p className="title m-0">
                                                                {item.secChildChilFirData}
                                                            </p>
                                                            <p className="rating m-0"></p>
                                                            <p className="rate m-0">
                                                                Rs {item.secChildChilSecData}.00
                                                            </p>
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className="d-flex align-items-center">
                                <p className="m-0">Showing 1-9 of {products.length} results</p>

                            <div className="dropdown sorting mx-4">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="sortingBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sorting
                                </button>
                                <div className="dropdown-menu" aria-labelledby="sortingBtn">
                                    <button className="dropdown-item" type="button" id='PriceL_H' onClick={this.sortLowToHigh}>Price Low to High</button>
                                    <button className="dropdown-item" type="button" id='PriceH_L' onClick={this.sortHighToLow}>Price High to Low</button>
                                    <button className="dropdown-item" type="button" id="Price_def" onClick={this.sortDefault}>Default Sorting</button>
                                </div>
                            </div>
                        </div>

                        <div className="products">
                            <ul>
                                <>
                                    {
                                        (category_filter_products.length === 0) ? 
                                            (sort_products.length === 0) ?
                                                (pageWiseProducts.length !== 0) ? 
                                                    pageWiseProducts.map((item,key) => {
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
                                                    :
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
                                                    :
                                                    sort_products.map((item,key) => {
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

                                            :
                                            (sort_products.length === 0) ? 
                                            category_filter_products.map((item,key) => {
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
                                            :
                                            sort_products.map((item,key) => {
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
                                </>
                            </ul>
                        </div>
                        <div className="pagination">
                            <ul>
                                {
                                    pageNumber.map((item,key) => {
                                        return(
                                            <>
                                                <li className='page-num' id={key} data-page={item} onClick={this.pageNumbClick}>
                                                    {item}
                                                </li> 
                                            </>  
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>



                <div className='modal fade' id='addProduct' tabIndex='-1' role='dialog' aria-hidden='true' aria-labelledby='addProductTitle'>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className="modal-title" id="addProductTitle">Add Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>
                                <form id='addForm' action='/' encType='multipart/form-data' onSubmit={this.addProduct}>
                                    <div className='my-3'>
                                        <label htmlFor="category">Product Category</label>
                                        <select className="custom-select" id="category"
                                            value={product_category} onChange={(e) => {
                                                this.setState({
                                                    product_category : e.target.value,
                                                },()=> {
                                                    // console.log(product_category)
                                                })
                                            }}
                                        >
                                            <option value=''>Select Category</option>
                                            <option value="books">Books</option>
                                            <option value="bags">Bags</option>
                                            <option value="tshirt">Tshirts</option>
                                            <option value="misc">Misc</option>  
                                        </select>
                                        {
                                            (add_product_category_error) ? 
                                            <span className="text-danger" id='productCategorySpan'>Select Product Category</span> 
                                            : ''
                                        }
                                       
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="productTitle">Product Title</label>
                                        <input type="text" className="form-control" id="productTitle" 
                                            placeholder="Enter Product Title" 
                                            value={product_title} 
                                            onChange={(e) => {
                                                this.setState({
                                                    product_title : e.target.value,
                                                },()=> {
                                                    // console.log(product_title)
                                                })
                                            }}
                                        />
                                        {
                                            (add_product_title_error) ? 
                                            <span className="text-danger" id='productTitleSpan'>Enter Product Title</span> 
                                            : ''
                                        }
                                    </div>
                                    <label htmlFor="productPrice">Product Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rs</span>
                                        </div>
                                        <input type="number" className="form-control" id="productPrice"  
                                            placeholder="Enter Product Price"
                                            value={product_price}
                                            onChange = {(e) => {
                                                this.setState({
                                                    product_price : e.target.value,
                                                },()=>{
                                                    // console.log(product_price)
                                                })
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                    {
                                        (add_product_price_error) ? 
                                        <span className="text-danger" id='productPriceSpan'>Enter Product Price</span>
                                        : ''
                                    }
                                    <div className="form-check my-3">
                                        <input className="form-check-input" type="checkbox" value="" 
                                            id="topProduct"
                                            checked={product_top}
                                            onChange={(e) => {
                                                this.setState({
                                                    product_top : e.target.checked,
                                                },()=>{
                                                    // console.log(product_top)
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="topProduct">
                                        Top Product
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="uploadImage">Upload Product Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="uploadImage" 
                                                onChange={(e) => {
                                                    this.setState({
                                                        product_img : URL.createObjectURL(e.target.files[0]),
                                                    },()=> {
                                                        // console.log(product_img)
                                                    })
                                                }}
                                            />
                                            {
                                                (add_product_image_error) ? 
                                                <span className="text-danger" id='productFileSpan'>Select Product Image</span>
                                                :''
                                            }
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <input type="submit" id='addProductSave' data-dismiss={closeModal ? 'modal' : ''} className="btn btn-primary" value='Save'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="editProduct" tabIndex="-1" role="dialog" aria-labelledby="editProductTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editProductTitle">Edit Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id='editForm' action="/" encType="multipart/form-data">
                                    <div className="my-3">
                                        <label htmlFor="category">Product Category</label>
                                        <select className="custom-select" id="editCategory">
                                            <option value=''>Select Category</option>
                                            <option value="books">Books</option>
                                            <option value="bags">Bags</option>
                                            <option value="tshirt">Tshirts</option>
                                            <option value="misc">Misc</option>
                                        </select>
                                        <span className="text-danger" id='editproductCategorySpan'>Select Product Category</span>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="productTitle">Product Title</label>
                                        <input type="text" className="form-control" id="editproductTitle" placeholder="Enter Product Title"/>
                                        <span className="text-danger" id='editproductTitleSpan'>Enter Product Title</span>
                                    </div>
                                    <label htmlFor="productPrice">Product Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Rs</span>
                                        </div>
                                        <input type="text" className="form-control" id="editproductPrice" placeholder="Enter Product Price"/>
                                        <span className="text-danger" id='editproductPriceSpan'>Enter Product Price</span>
                                        <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                    <div className="form-check my-3">
                                        <input className="form-check-input" type="checkbox" value="" id="edittopProduct"/>
                                        <label className="form-check-label" htmlFor="edittopProduct">
                                        Top Product
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="uploadImage">Upload Product Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="edituploadImage" value=""/>
                                            <span className="text-danger" id='editproductFileSpan'>Select Product Image</span>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <input type="submit" id='editProductSave' className="btn btn-primary" value="Save"/>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;