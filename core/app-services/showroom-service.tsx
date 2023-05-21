import {
  ColorClass,
  CustomerType,
  paverColors,
  ProductCategory,
  wallColors,
} from '../data/product';
import { rawProducts } from '../data/prduct-id-array';
import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import useGAService from './ga-service';
import { ShowroomSubmitDialog } from '../../components/dialogs/showroom-submit-dialog';
import { ShowroomDIYContactDialog } from '../../components/dialogs/showroom-diy-contact-dialog';

interface ShowroomService {
  getColorsByCategory: (
    category: ProductCategory
  ) => { colorClass: ColorClass; title: string; image: string }[];
  getProducts: (
    category: ProductCategory,
    colorClass: ColorClass,
    from: number,
    take: number
  ) => { id: string; image: string }[];
  showShowroomSubmitDialog: (
    customerType: CustomerType,
    category: ProductCategory,
    colorClass: ColorClass,
    id: string
  ) => void;
  showShowroomDIYContactDialog: () => void;
  getProductImageUrl: (
    category: ProductCategory,
    colorClass: ColorClass,
    id: string
  ) => string;
}

export default function useShowroomService(): ShowroomService {
  const dialog = useDialog();
  const gaService = useGAService();
  const showShowroomSubmitDialog = (
    customerType: CustomerType,
    category: ProductCategory,
    colorClass: ColorClass,
    id: string
  ) => {
    gaService.modalView('Showroom Submit Dialog');
    dialog.openDialog(
      <ShowroomSubmitDialog
        customerType={customerType}
        category={category}
        colorClass={colorClass}
        id={id}
      />
    );
  };

  const showShowroomDIYContactDialog = () => {
    dialog.openDialog(<ShowroomDIYContactDialog />);
  };

  const getColorsByCategory = (
    category: ProductCategory
  ): { colorClass: ColorClass; title: string; image: string }[] => {
    if (category === ProductCategory.Pavers) {
      return paverColors;
    } else {
      return wallColors;
    }
  };

  const getProductImageUrl = (
    category: ProductCategory,
    colorClass: ColorClass,
    id: string
  ): string => {
    const categoryName = String(category).toLowerCase().replace(/_/g, '-');
    const colorName = String(colorClass).toLowerCase().replace(/_/g, '-');
    const imageRoot = 'https://assets.jdlandscaping.net/marketplace';
    return `${imageRoot}/${categoryName}/${colorName}-${id}.jpg`;
  };

  const getProducts = (
    category: ProductCategory,
    colorClass: ColorClass,
    from: number,
    take: number
  ): { id: string; image: string }[] => {
    const series = rawProducts.find(
      (rawProduct) =>
        rawProduct.category === category && rawProduct.colorClass === colorClass
    ) || { ids: [] };
    const products = series.ids.map((id) => ({
      id,
      image: getProductImageUrl(category, colorClass, id),
    }));
    return products.slice(from, from + take);
  };

  return {
    getColorsByCategory,
    getProducts,
    showShowroomSubmitDialog,
    showShowroomDIYContactDialog,
    getProductImageUrl,
  };
}
