import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import PatioPackageDialog from '../../components/dialogs/patio-package-dialog';
import { PatioPackage } from '../types/patio-package';

interface PatioPackageDialogService {
  showPatioPackageDialog: (packageType: PatioPackage) => void;
}

export default function usePatioPackageDialogService(): PatioPackageDialogService {
  const dialog = useDialog();

  const showPatioPackageDialog = (packageType: PatioPackage) => {
    dialog.openDialog(<PatioPackageDialog packageType={packageType} />);
  };

  return {
    showPatioPackageDialog,
  };
}
