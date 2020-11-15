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
            edit_product_category_error : false,
            edit_product_title_error : false,
            edit_product_price_error : false,
            edit_product_image_error : false,
            product_title : '',
            product_price : '',
            product_category : '',
            product_img : '', 
            product_top : false,
            edit_product_title : '',
            edit_product_price : '',
            edit_product_category : '',
            edit_product_img : '', 
            edit_product_top : false,
            closeModal : false,
            addTopProducts : [],
            pageNumber : [],
            paginationResponse : [],
            pageWiseProducts : [],
            initialValue  : '',
            finalValue : '',
            midValue : '',
            filtered_by_price : [],
            editableItem : ''
        }
    }

    componentDidMount(){
        this.addTopProducts()
        let response = this.paginator(this.state.products,1,9)
        this.setPageDatas(response)
        this.getFilterByPrice()
    }

    getFilterByPrice(){
        
        let final_array = []

        final_array = this.sortDummyArray(final_array)

        final_array.sort(
            function(a, b){
                // console.log(a.dataSort - b.dataSort)
                return  a.dataSort - b.dataSort
            }
        )
        let initialValueIndex = 0

        let initialValue = final_array[initialValueIndex].dataSort

        let finalValueIndex = final_array.length-1

        let finalValue = final_array[finalValueIndex].dataSort
        
        let midValue = finalValue / 2
        console.log('cjec',initialValue,finalValue,midValue)

        this.setState({
            initialValue : initialValue,
            finalValue : finalValue,
            midValue : midValue
        })
    }

    setPageDatas(response){
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
                }     
                // console.log('check',dummy_array)  
                this.setState({
                    category_filter_products : dummy_array,
                },() => {
                    let response = this.paginator(this.state.category_filter_products,1,9)
                    this.setPageDatas(response)
                    // console.log(this.state.category_filter_products)
                })     
            }
            else{
                let response = this.paginator(this.state.category_filter_products,1,9)
                this.setPageDatas(response)
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
            let response = this.paginator(this.state.sort_products,1,9)
            this.setPageDatas(response)
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
            let response = this.paginator(this.state.sort_products,1,9)
            this.setPageDatas(response)
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
            let response = this.paginator(this.state.sort_products,1,9)
            this.setPageDatas(response)
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
                this.setPageDatas(response)
                this.getFilterByPrice()
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
        // console.log(e.target.dataset.page)
        let dummy_array = []

        let page_click_response

        // console.log(this.state.products)
        if(this.state.sort_products.length === 0){
            page_click_response = this.paginator(this.state.products,e.target.dataset.page,9)
        }
        else{
            page_click_response = this.paginator(this.state.sort_products,e.target.dataset.page,9)
        }

        // console.log(page_click_response)
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

    filterByPrice = (e) => {
        let min = parseInt(this.state.initialValue)
        let max = parseInt(this.state.finalValue)

        // console.log(min,max)
        let dummy_array =[]
        if(this.state.sort_products.length !== 0){
            for(let i=0;i<this.state.sort_products.length;i++){
                if((this.state.sort_products[i].dataSort >= min) && (max >= this.state.sort_products[i].dataSort)){
                    dummy_array.push(this.state.sort_products[i])
                }
            }
        }
        else if(this.state.category_filter_products.length !== 0){
            for(let i=0;i<this.state.category_filter_products.length;i++){
                if((this.state.category_filter_products[i].dataSort >= min) && (max >= this.state.category_filter_products[i].dataSort)){
                    dummy_array.push(this.state.category_filter_products[i])
                }
            }
        }
        else{
            for(let i=0;i<this.state.pageWiseProducts.length;i++){
                if((this.state.pageWiseProducts[i].dataSort >= min) && (max >= this.state.pageWiseProducts[i].dataSort)){
                    dummy_array.push(this.state.products[i])
                }
            }
        }
       // console.log(dummy_array)
        this.setState({
            filtered_by_price : dummy_array
        },()=>{
            let response = this.paginator(this.state.filtered_by_price,1,9)
            this.setPageDatas(response)
        })
    }

    editProduct(e,item){
        e.preventDefault()

        console.log(item)

        let edit_category = ''
        let edit_title = ''
        let edit_price = ''
        let edit_top_product = false
        let edit_img = ''

        edit_category = this.state.edit_product_category
        edit_title = this.state.edit_product_title
        edit_price = this.state.edit_product_price
        edit_top_product = this.state.edit_product_top
        edit_img = this.state.edit_product_img

        // let index = item - 1

        // this.setState((prevState) => {
        //     let products = Object.assign({},prevState.products[index])
        //     // console.log(products)
        //     products.dataCategory = edit_category
        //     products.secChildChilFirData = edit_title
        //     products.secChildChilSecData = parseInt(edit_price)
        //     products.dataSort = parseInt(edit_price)
        //     products.dataTopProduct = (edit_top_product === false ? 'off' : 'on')
        //     products.img_url = edit_img
        //     return { products }
        // },()=>{
        //     this.setState({
        //         closeModal : true
        //     })
        //     console.log(this.state.products)
        // })
        // this.setState(prevState => {
        //     let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
        //     jasper.name = 'someothername';                     // update the name property, assign a new value                 
        //     return { jasper };                                 // return new object jasper object
        //   })

        this.setState(prevState => ({

            products: prevState.products.map(
                el => el.id === item ? { 
                    ...el,
                    dataCategory : edit_category,
                    secChildChilFirData : edit_title,
                    secChildChilSecData : parseInt(edit_price),
                    dataSort : parseInt(edit_price),
                    dataTopProduct : (edit_top_product === false ? 'off' : 'on'),
                    img_url : edit_img
                }
                : el
            )
        }),()=> {
            this.setState({
                closeModal : true
            })
            console.log(this.state.products)
        })
    }
    editModal(e,id){
        let item = id
        let edit_category = ''
        let edit_title = ''
        let edit_price = ''
        let edit_top_product = false
        let edit_img = ''

        for(let i=0;i<this.state.products.length;i++){
            // console.log(this.state.products[i])
            if(item === this.state.products[i].id){
                console.log(this.state.products[i])
                edit_category = this.state.products[i].dataCategory
                edit_title = this.state.products[i].secChildChilFirData
                edit_price = this.state.products[i].secChildChilSecData
                edit_top_product = this.state.products[i].dataTopProduct
                edit_img = this.state.products[i].img_url
            }
        }
        console.log(edit_img,edit_category,edit_price,edit_title,edit_top_product)
        this.setState({
            editableItem : item,
            edit_product_category : edit_category,
            edit_product_img : edit_img,
            edit_product_price : edit_price,
            edit_product_title : edit_title,
            edit_product_top : edit_top_product 
        })
    }


    render() {

        const { categories,add_product_category_error,add_product_title_error,
                add_product_price_error,add_product_image_error,product_title,product_price,
                product_category,product_top,closeModal,addTopProducts,
                pageNumber,pageWiseProducts,initialValue,midValue,finalValue,edit_product_category_error,
                edit_product_image_error,edit_product_title_error,edit_product_price_error,editableItem,edit_product_category,
                edit_product_price,edit_product_title,edit_product_top } = this.state;
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
                        <div className="my-4">
                            <p className="font-weight-bold">Filter by price</p>
                            <div data-role="rangeslider" className="rangeslider">
                                <input type="range" name="range-1a" id="range-1a" min={initialValue} 
                                    max={midValue} value={initialValue} step="10" onChange={(e) => {
                                        console.log(e.target.value)
                                        this.setState({
                                            initialValue : e.target.value
                                        })
                                    }} />
                                <input type="range" name="range-1b" id="range-1b" min={midValue} 
                                    max={finalValue} value={finalValue} step="10" onChange={(e) => {
                                        console.log(e.target.value)
                                        this.setState({
                                            finalValue : e.target.value
                                        })
                                    }} />
                            </div>
                            <p>Price : Rs {initialValue}.00 - Rs {finalValue}.00</p>
                            <button type='button' className='btn btn-secondary' onClick={this.filterByPrice} >Filter</button>
                        </div>
                        <div className=''>
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
                                <p className="m-0">Showing {pageWiseProducts.length !== 0 ?`1 - ${pageWiseProducts.length}` : '0'} of {pageWiseProducts.length} results</p>

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
                                        // (pageWiseProducts.length !== 0) ? 
                                            pageWiseProducts.map((item,key) => {
                                                return(
                                                    <>
                                                        <li id={key} data-id={item.id} data-category={item.dataCategory} 
                                                            data-topproduct={item.dataTopProduct} data-sort={item.dataSort} 
                                                            className={item.className} onClick={(e) => this.editModal(e,item.id)} 
                                                            data-toggle='modal' data-target='#editProduct'>
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
                                        // : 
                                            // products.map((item,key) => {
                                            //     return(
                                            //         <>
                                            //             <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                            //                 <div className={item.firstChildClass}>
                                            //                     <img src={item.img_url} alt="pic"/>
                                            //                 </div>
                                            //                 <div className={item.secChildClass}>
                                            //                     <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                            //                     <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                            //                 </div>
                                            //             </li>
                                            //         </>
                                            //     )
                                            // }) 
                                        // (category_filter_products.length === 0) ? 
                                        //     (sort_products.length === 0) ?
                                        //         (pageWiseProducts.length !== 0) ? 
                                        //             pageWiseProducts.map((item,key) => {
                                        //                 return(
                                        //                     <>
                                        //                         <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                        //                             <div className={item.firstChildClass}>
                                        //                                 <img src={item.img_url} alt="pic"/>
                                        //                             </div>
                                        //                             <div className={item.secChildClass}>
                                        //                                 <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                        //                                 <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                        //                             </div>
                                        //                         </li>
                                        //                     </>
                                        //                 )
                                        //             })
                                        //             :
                                        //             products.map((item,key) => {
                                        //                 return(
                                        //                     <>
                                        //                         <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                        //                             <div className={item.firstChildClass}>
                                        //                                 <img src={item.img_url} alt="pic"/>
                                        //                             </div>
                                        //                             <div className={item.secChildClass}>
                                        //                                 <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                        //                                 <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                        //                             </div>
                                        //                         </li>
                                        //                     </>
                                        //                 )
                                        //             }) 
                                        //             :
                                        //             sort_products.map((item,key) => {
                                        //                 return(
                                        //                     <>
                                        //                         <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                        //                             <div className={item.firstChildClass}>
                                        //                                 <img src={item.img_url} alt="pic"/>
                                        //                             </div>
                                        //                             <div className={item.secChildClass}>
                                        //                                 <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                        //                                 <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                        //                             </div>
                                        //                         </li>
                                        //                     </>
                                        //                 )
                                        //             }) 

                                        //     :
                                        //     (sort_products.length === 0) ? 
                                        //     category_filter_products.map((item,key) => {
                                        //         return(
                                        //             <>
                                        //                 <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                        //                     <div className={item.firstChildClass}>
                                        //                         <img src={item.img_url} alt="pic"/>
                                        //                     </div>
                                        //                     <div className={item.secChildClass}>
                                        //                         <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                        //                         <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                        //                     </div>
                                        //                 </li>
                                        //             </>
                                        //         )
                                        //     })
                                        //     :
                                        //     sort_products.map((item,key) => {
                                        //         return(
                                        //             <>
                                        //                 <li id={key} data-id={item.id} data-category={item.dataCategory} data-topproduct={item.dataTopProduct} data-sort={item.dataSort} className={item.className}>
                                        //                     <div className={item.firstChildClass}>
                                        //                         <img src={item.img_url} alt="pic"/>
                                        //                     </div>
                                        //                     <div className={item.secChildClass}>
                                        //                         <p className={item.secChildChilFirClass} data-title={item.secChildChilFirData}>{item.secChildChilFirData}</p>
                                        //                         <p className={item.secChildChilSecClass} data-price={item.secChildChilSecData}>Rs {item.secChildChilSecData}</p>
                                        //                     </div>
                                        //                 </li>
                                        //             </>
                                        //         )
                                        //     })
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
                                <form id='editForm' action="/" encType="multipart/form-data" onSubmit={ (e) => this.editProduct(e,editableItem)} >
                                    <div className="my-3">
                                        <label htmlFor="category">Product Category</label>
                                        <select className="custom-select" id="editCategory"
                                            value={edit_product_category} onChange={(e) => {
                                                console.log(e.target.value)   
                                                this.setState({
                                                    edit_product_category : e.target.value   
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
                                            (edit_product_category_error) ? 
                                            <span className="text-danger" id='editproductCategorySpan'>Select Product Category</span>
                                            : ''
                                        }
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="productTitle">Product Title</label>
                                        <input type="text" className="form-control" id="editproductTitle" 
                                            placeholder="Enter Product Title" value={edit_product_title}
                                            onChange={(e)=>{
                                                console.log(e.target.value)
                                                this.setState({
                                                    edit_product_title : e.target.value
                                                })
                                            }}    
                                        />
                                        {
                                            (edit_product_title_error) ?
                                            <span className="text-danger" id='editproductTitleSpan'>Enter Product Title</span>
                                            : ''
                                        }
                                    </div>
                                    <label htmlFor="productPrice">Product Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Rs</span>
                                        </div>
                                        <input type="text" className="form-control" id="editproductPrice" 
                                            placeholder="Enter Product Price" value={edit_product_price}
                                            onChange={(e)=>{
                                                console.log(e.target.value)
                                                this.setState({
                                                    edit_product_price : e.target.value
                                                })
                                            }}
                                        />
                                        <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                    {
                                        (edit_product_price_error) ? 
                                        <span className="text-danger" id='editproductPriceSpan'>Enter Product Price</span>
                                        : ''
                                    }
                                    <div className="form-check my-3">
                                        <input className="form-check-input" type="checkbox" checked={edit_product_top === 'on' ? true : false} 
                                        id="edittopProduct" onChange={(e) => {
                                            console.log(e.target.checked)
                                            this.setState({
                                                edit_product_top : e.target.checked
                                            })
                                        }}/>
                                        <label className="form-check-label" htmlFor="edittopProduct">
                                        Top Product
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="uploadImage">Upload Product Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="edituploadImage" 
                                                onChange={(e) => {
                                                    console.log(URL.createObjectURL(e.target.files[0]))
                                                    this.setState({
                                                        edit_product_img : URL.createObjectURL(e.target.files[0])
                                                    })
                                                }}
                                            />
                                            {
                                                (edit_product_image_error) ? 
                                                <span className="text-danger" id='editproductFileSpan'>Select Product Image</span>                                            
                                                : ''
                                            }
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <input type="submit" id='editProductSave' className="btn btn-primary" data-dismiss={closeModal ? 'modal' : ''} value="Save"/>
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