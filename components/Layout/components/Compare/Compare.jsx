import React, {useEffect, useState} from 'react'

export default function Compare(){

    const [compareItem, compareData] = useState([]);
    useEffect(() => {
        compareData(JSON.parse(localStorage.getItem('compare')))
    }, [])
   const removeProduct = (id) =>{
       const filterCompareItem = compareItem.filter( x => x.id !== id);
       localStorage.setItem('compare',  JSON.stringify(filterCompareItem));
       compareData(filterCompareItem)
   }
    return (
        <div>
            <main className="main">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title">Müqayisə</h1>
                    </div>
                </div>
                <nav className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="/home">Ana Səhifə</a></li>
                            <li>Müqayisə</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content mb-10 pb-2">
                    <div className="container">
                        <div className="compare-table">
                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                                <div className="compare-col compare-field">Məhsul</div>
                                {compareItem.map(e=>(
                                    <div className="compare-col compare-product">
                                        <a href="#" className="btn remove-product" onClick={()=>{removeProduct(e.id)}}><i
                                            className="w-icon-times-solid"></i></a>
                                        <div className="product text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src={e.main_image} alt="Product"
                                                         width="228"
                                                         height="257"/>
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-cart w-icon-cart"></a>
                                                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"></a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name"><a href="product-default.html">Electronics
                                                    Black Wrist
                                                    Watch</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                                <div className="compare-col compare-field">Qiymət</div>
                                {compareItem.map(e=>(
                                    <div className="compare-col compare-value">
                                        <div className="product-price">
                                            <span className="new-price">₼{e.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                                <div className="compare-col compare-field">Təsviri</div>
                                {compareItem.map(e=>(
                                    <div className="compare-col compare-value">
                                        <ul className="list-style-none list-type-check">
                                            <li>{e.short_desc1}</li>
                                            <li>{e.short_desc2}</li>
                                            <li>{e.short_desc3}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                                <div className="compare-col compare-field">Reytinqlər &amp; Rəylər</div>
                                {compareItem.map(e=>(
                                    <div className="compare-col compare-rating">
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">({e.rating}
                                                Reviews)</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                                <div className="compare-col compare-field">Kateqoriya</div>
                                {compareItem.map(e=>(
                                    <div className="compare-col compare-value">Watches</div>
                                ))}
                            </div>
                            {compareItem.map(e=>(
                                <div>
                                    {e.filter_values.map(k=>(
                                        <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
                                            <div className="compare-col compare-field">SKU</div>
                                            <div className="compare-col compare-value">MS46891344</div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}