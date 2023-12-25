import './Product.css'
function Product({Title,Price}) {
  let styles = {backgroundColor: Price>15000? "Skyblue": ""};

  return (
    <div className="Product" style={styles}>
      <h3> Name : {Title}</h3>
      <h4> Price: {Price}</h4>
      {Price > 15000 ?<p>Descount 15% </p>:null}
      
    </div>
  );
}
export default Product;
