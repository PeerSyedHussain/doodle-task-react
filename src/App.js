import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';


class App extends Component {
    render() {
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
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addProduct">
                                Add Product
                            </button>
                        </div>
                    </div>
                </section>
                <section className='row my-4'>
                    <div className='col-md-3'>
                        <LeftSide/>
                    </div>
                    <div className='col-md-9'>
                        <div className="d-flex align-items-center">
                            <p className="m-0">Showing 1-9 of 10 results</p>

                            <div className="dropdown sorting mx-4">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="sortingBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sorting
                                </button>
                                <div className="dropdown-menu" aria-labelledby="sortingBtn">
                                    <button className="dropdown-item" type="button" id='PriceL_H'>Price Low to High</button>
                                    <button className="dropdown-item" type="button" id='PriceH_L'>Price High to Low</button>
                                    <button className="dropdown-item" type="button" id="Price_def">Default Sorting</button>
                                </div>
                            </div>
                        </div>

                        <RightSide/>
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
                                <form id='addForm' action='/' encType='multipart/form-data'>
                                    <div className='my-3'>
                                        <label htmlFor="category">Product Category</label>
                                        <select className="custom-select" id="category">
                                            <option value=''>Select Category</option>
                                            <option value="books">Books</option>
                                            <option value="bags">Bags</option>
                                            <option value="tshirt">Tshirts</option>
                                            <option value="misc">Misc</option>
                                        </select>
                                        <span className="text-danger" id='productCategorySpan'>Select Product Category</span>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="productTitle">Product Title</label>
                                        <input type="text" className="form-control" id="productTitle" placeholder="Enter Product Title" />
                                        <span className="text-danger" id='productTitleSpan'>Enter Product Title</span>
                                    </div>
                                    <label htmlFor="productPrice">Product Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rs</span>
                                        </div>
                                        <input type="number" className="form-control" id="productPrice"  placeholder="Enter Product Price"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                    </div>
                                    <span className="text-danger" id='productPriceSpan'>Enter Product Price</span>
                                    <div className="form-check my-3">
                                        <input className="form-check-input" type="checkbox" value="" id="topProduct"/>
                                        <label className="form-check-label" htmlFor="topProduct">
                                        Top Product
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="uploadImage">Upload Product Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="uploadImage"/>
                                            <span className="text-danger" id='productFileSpan'>Select Product Image</span>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <input type="submit" id='addProductSave' className="btn btn-primary" value="Save"/>
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