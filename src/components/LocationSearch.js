import React from 'react';
import Autocomplete from 'react-md/lib/Autocompletes';

const LocationSearch = (props) => {
  const {
    data,
    filter = Autocomplete.caseInsensitiveFilter,
    onSelect,
  } = props;

  const deleteKeys = [
    'gradesets'
  ];

  const onAutocomplete = (label, index, matches) => {
    const location = matches[index];

    if (location) {
      onSelect(location);
    }
  };

  return (
    <Autocomplete
      id='location-search'
      label='Location'
      data={data}
      dataLabel='label'
      filter={filter}
      deleteKeys={deleteKeys}
      clearOnAutocomplete
      onAutocomplete={onAutocomplete} />
  );
}

export default LocationSearch;
