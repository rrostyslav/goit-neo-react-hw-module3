import Input from '@/components/Input';

export default function SearchBox({ value, onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Input
      value={value}
      onChange={handleSearch}
      placeholder="Search"
      label="Find contacts by name"
    />
  );
}
