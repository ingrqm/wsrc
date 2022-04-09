import { useTranslation } from 'react-i18next';
import { Input } from 'antd';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const { Search } = Input;

const FilterSearch = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => {
  const { t } = useTranslation();
  const handleSearch = (value: string): void => {
    if (value !== '') {
      setSelectedKeys([value]);
      confirm();
    } else if (clearFilters) {
      clearFilters();
      confirm();
    }
  };

  return (
    <div className='p-2'>
      <Search
        placeholder={t('components.table.filterSearchInputPlaceholder')}
        allowClear
        defaultValue={selectedKeys[0]}
        enterButton
        onSearch={handleSearch}
      />
    </div>
  );
};

export default FilterSearch;
