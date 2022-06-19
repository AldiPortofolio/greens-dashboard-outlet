import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  listMenus: [],
  listBatches: [],
};

const createOrderReducer = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    setDataMenus: (state, action: PayloadAction<any>) => {
      let data = action.payload;
      const products: any = produce(data, (draft: any) => {
        if (data) {
          data.map((_key: any, idx: number) => {
            return (draft[idx]['count'] = 0);
          });
        }
      });
      state.listMenus = products;
    },
    setUpdateDataMenus: (state, action: PayloadAction<any>) => {
      state.listMenus = action.payload;
    },
    setDataBatches: (state, action: PayloadAction<any>) => {
      let data = action.payload;

      let newproductTypeList = [];
      data?.items?.map((item: any) => {
        item?.productTypeList.map((type: any) => {
          newproductTypeList.push({ _id: item.id, batches: [] });
        });
      });

      let nextState: any = [];
      if (data?.items.length > 0) {
        const nextItems = produce(data?.items, (draftState: any) => {
          data.items?.map((_key: any, idx: number) => {
            const item = produce(
              data.items[idx].productTypeList,
              (draftStateType: any) => {
                data.items[idx].productTypeList.map(
                  (type: any, subIdx: number) => {
                    return (draftStateType[subIdx] = {
                      _id: type,
                      label: type,
                      batches: [],
                    });
                  }
                );
              }
            );
            return (draftState[idx]['productTypeList'] = item);
          });
        });
        nextState = produce(data, (draftState: any) => {
          draftState.items = nextItems;
        });
      }
      state.listBatches = nextState;
    },
    setUpdateDataBatches: (state, action: PayloadAction<any>) => {
      state.listBatches = action.payload;
    },
  },
});

export const {
  setDataMenus,
  setUpdateDataMenus,
  setDataBatches,
  setUpdateDataBatches,
} = createOrderReducer.actions;

export default createOrderReducer.reducer;
