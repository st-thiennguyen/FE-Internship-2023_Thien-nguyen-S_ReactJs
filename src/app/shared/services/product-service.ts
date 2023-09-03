import { Dispatch } from "redux";
import { ProductModel } from "../../models";
import { getDataFailure, getDataStart, getDataSuccess } from "../../redux/actions";
import { RootAction, RootThunk } from "../../redux/store";
import { StorageKey } from "../constants";
import { saveDataToStorage } from "../utils";

export const fetchDataProduct = (): RootThunk => async (dispatch: Dispatch<RootAction>) => {
  try {
    dispatch(getDataStart());
    const res = await fetch("data.json");
    const data = await res.json();
    const products = data.map((item: ProductModel) => new ProductModel(item));
    saveDataToStorage(StorageKey.PRODUCT, products);
    dispatch(getDataSuccess(products));
  } catch (error) {
    dispatch(getDataFailure(`$error`));
  }
}