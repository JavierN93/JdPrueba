import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { RequestDesignEstimateDialog } from '../../components/dialogs/request-design-estimate-dialog';
import { CustomerType } from '../data/how-it-works';
import useGAService from './ga-service';

interface RequestDesignEstimate {
  showRequestDesignEstimateDialog: (customerType: CustomerType) => void;
}

export default function useRequestDesignEstimateService() {
  const gaService = useGAService();
  const dialog = useDialog();

  const showRequestDesignEstimateDialog = (customerType: CustomerType) => {
    gaService.event('Dialog Opened', 'Request Design Estimate Dialog Opened');
    gaService.modalView('Request Design Estimate Dialog');
    dialog.openDialog(
      <RequestDesignEstimateDialog customerType={customerType} />
    );
  };

  return {
    showRequestDesignEstimateDialog,
  };
}
