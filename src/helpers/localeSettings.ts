import { ukUA } from '@mui/x-date-pickers/locales';

const ukrainianLocale =
  ukUA.components.MuiLocalizationProvider.defaultProps.localeText;

ukrainianLocale.fieldMonthPlaceholder = () => 'мм';
ukrainianLocale.fieldDayPlaceholder = () => 'дд';
ukrainianLocale.fieldYearPlaceholder = () => 'рррр';

export default ukrainianLocale;
