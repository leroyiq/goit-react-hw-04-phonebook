import { Label } from './Filter.styled';
import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter, onChange }) => {
  return (
    <>
      <Label>
        Find name
        <Input
          type="text"
          name="filter"
          value={onFilter}
          onChange={onChange}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
