import { Label } from './Filter.styled';
import { Input } from './Filter.styled';

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

