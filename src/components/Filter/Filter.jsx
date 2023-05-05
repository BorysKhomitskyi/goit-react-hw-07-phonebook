import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';

import { FilterWrapper } from './Filter.styled';
import { Label } from '../ContactForm/ContactForm.styled';

const FilterInput = styled(DebounceInput)`
  min-width: 50%;
  border-radius: 8px;
  font-size: 16px;
  placeholder: #B6B6B6;
  padding: 12px;
  margin-left: 10px;
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          placeholder="Enter contact to search"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          debounceTimeout={500}
        />
      </Label>
    </FilterWrapper>
  );
};
