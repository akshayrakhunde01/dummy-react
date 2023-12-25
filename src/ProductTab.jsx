import Product from "./Product.jsx"
function ProductTab(){
    return(
        <div>
            <Product Title="Latop" Price={30000} />
            <Product Title="Bag" Price={1500} />
            <Product Title="Pen" Price={100}/>
            <Product Title="Mobile" Price={25000}/>

        </div>
    )
}
export default ProductTab;