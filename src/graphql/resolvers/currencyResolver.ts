import EquipmentCategoryModel from '../../models/equipmentCategory/index.js';
import { Equipment } from '../../models/equipment/types';
import { equipmentFieldResolvers } from './common.js';

const Currency = {
  ...equipmentFieldResolvers,
  currency_category: async (currency: Equipment) => {
    const index = currency.currency_category?q.toLowerCase();
    return await EquipmentCategoryModel.findOne({ index }).lean();
  },
};

export default Currency;
