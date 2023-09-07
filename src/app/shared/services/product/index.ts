import { ProductModel } from "../../../models";
import { StorageKey } from "../../constants";
import { saveDataToStorage } from "../../utils";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch('data.json');
        const data = await res.json();
        const products = data.map((item: ProductModel) => new ProductModel(item));
        saveDataToStorage(StorageKey.PRODUCT, products);
        resolve(products);
      } catch (error) {
        reject(error);
      }
    }, 2000)
  });
}

