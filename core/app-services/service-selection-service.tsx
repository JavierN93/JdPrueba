import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { ServiceSelectionDialog } from '../../components/dialogs/service-selection-dialog';
import useGAService from './ga-service';

interface ServiceSelectionService {
  showServiceSelectionDialog: () => void;
}

export default function useServiceSelectionService(): ServiceSelectionService {
  const dialog = useDialog();
  const gaService = useGAService();

  const showServiceSelectionDialog = () => {
    gaService.event('Dialog Opened', 'Service Selection Dialog Opened');
    gaService.modalView('Service Selection Dialog');
    dialog.openDialog(<ServiceSelectionDialog />);
  };

  return {
    showServiceSelectionDialog,
  };
}
