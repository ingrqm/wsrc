import { ChangeEvent, FC, ReactNode } from 'react';

import { TextField } from '@material-ui/core';
import {
  Autocomplete,
  AutocompleteRenderOptionState,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/lab';

const AutocompleteWrapper: FC<{
  disabled: boolean;
  onChange?: (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: ChangeEvent<{}>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => void;
  options: [];
  getOptionLabel?: ((option: string) => string) | undefined;
  renderOption?: ((option: string, state: AutocompleteRenderOptionState) => ReactNode) | undefined;
  isError: boolean;
  label: string;
}> = ({ disabled, onChange, options, getOptionLabel, isError, label, renderOption }) => (
  <Autocomplete
    disabled={disabled}
    onChange={onChange}
    options={options}
    getOptionLabel={getOptionLabel}
    renderOption={renderOption}
    renderInput={({ disabled, InputLabelProps, InputProps, fullWidth, inputProps }) => (
      <TextField
        error={isError}
        InputProps={InputProps}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={inputProps}
        InputLabelProps={InputLabelProps}
        disabled={disabled}
        fullWidth={fullWidth}
        label={label}
        margin='normal'
      />
    )}
  />
);

export default AutocompleteWrapper;
