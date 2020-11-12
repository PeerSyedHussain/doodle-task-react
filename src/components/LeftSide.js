import React, { Component } from 'react';

class LeftSide extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories : [
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
                }
            ]
        }
    }

    render() {
        const { categories } = this.state;
        console.log(categories)
        return (
            <>
                <div>
                    <p className="font-weight-bold">Browse by Categories</p>
                    <div className="category-box">
                        <ul>
                            {
                                categories.map((item,key) => {
                                    return(
                                        <>
                                            <li id={key} data-key={item.id}>
                                                <button type='button' className='btn w-100 text-left'>
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
            </>
        );
    }
}

export default LeftSide;