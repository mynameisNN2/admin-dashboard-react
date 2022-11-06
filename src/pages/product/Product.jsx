import { Link } from 'react-router-dom';
import './product.css';
import Charts from '../../components/charts/Charts';
import { productData } from '../../dummydata';
import { Publish } from '@mui/icons-material';


export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Charts data={productData} dataKey="Sales" title="Sales Perfromance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.pexels.com/photo/white-earphones-on-black-surface-3780681/" alt="" className='productinfoImg' />
                        <span className="productname">Apple Airpods</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id :</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales :</span>
                            <span className="productInfoValue">1523</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active :</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock :</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>



            <div className="productBottom">
                <form action="" className="productform">
                    <div className="productformLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='apple airpods' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    <div className="productformRight">
                        <div className="productUpload">
                            <img src="https://www.pexels.com/photo/white-earphones-on-black-surface-3780681/" alt="" className="productuploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
