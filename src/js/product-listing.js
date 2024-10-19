import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);
// document.querySelector('#subcategorySelector').innerHTML +=' '+category

listing.init();
