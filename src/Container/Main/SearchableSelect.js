import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SearchableSelect = ({ apiUrl }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch(apiUrl,{
      headers: { Authorization: `Bearer Bearer POPTELECOM@987612` },
    })
      .then((response) => response.json())
      .then((data) => {
        setOptions(data); // Assuming the API returns an array of options
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search and Select"
        optionFilterProp="children"
        onChange={handleSelectChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <div>
        Selected Option: {selectedOption}
      </div>
    </div>
  );
};

export default SearchableSelect;
