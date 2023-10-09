import { FC, useState } from 'react';
import { MenuItem, SelectChangeEvent, Box } from '@mui/material';
import SvgSpriteIcon from '../../Common/SvgSprite';
import { aspectRatioMenu } from '@/assets/constants/aspectRatio';
import { CustomSelect } from './styles';

interface RatioSelectProps {
  onChangeValue: (value: number) => void;
}

const RatioSelect: FC<RatioSelectProps> = ({ onChangeValue }) => {
  const [value, setValue] = useState<number | ''>('');

  const onChange = (e: SelectChangeEvent<unknown>) => {
    setValue(e.target.value as number);
    onChangeValue(e.target.value as number);
  };

  return (
    <CustomSelect
      id="aspect-ratio-select"
      value={value}
      onChange={onChange}
      IconComponent={(props) => (
        <SvgSpriteIcon {...props} iconId="select-arrow" />
      )}
      displayEmpty
      renderValue={() =>
        value !== '' ? (
          aspectRatioMenu.find((item) => item.value === value)?.title || ''
        ) : (
          <Box component="span">Пропорції фото</Box>
        )
      }
      MenuProps={{
        PaperProps: {
          sx: {
            borderColor: 'transparent',
            mt: 1,
          },
        },
        MenuListProps: {
          sx: {
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',

            '& .MuiMenuItem-root': {
              padding: '8px',
              fontSize: 18,
              fontWeight: 500,
              justifyContent: 'center',
            },
          },
        },
      }}
    >
      {aspectRatioMenu.map((item) => (
        <MenuItem key={item.title} value={item.value}>
          {item.title}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default RatioSelect;
