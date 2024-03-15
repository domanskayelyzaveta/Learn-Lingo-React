import Select, {
} from "react-select";
import {
  FilterWrapper,
  InputWrapper,
  Label,
  SelectWrapper,
} from "./Filter.styled";

const optionsLanguage = [
  { value: "French", label: "French" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Polish", label: "Polish" },
];
const optionsLevel = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
];
const optionsPrice = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
];

const Filter = () => {
  const handleChange = () => {};

  return (
    <FilterWrapper className="container">
      <SelectWrapper>
        <InputWrapper>
          <Label htmlFor="language">Language</Label>
          <Select
            options={optionsLanguage}
            value={undefined}
            onChange={handleChange}
            placeholder="Language"
            styles={customStyles}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Level of knowledge">Level of knowledge</Label>
          <Select
            options={optionsLevel}
            value={undefined}
            onChange={handleChange}
            placeholder="Level"
            styles={customStyles}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Price">Price</Label>
          <Select
            options={optionsPrice}
            value={undefined}
            onChange={handleChange}
            placeholder="Price"
            styles={customStyles}
          />
        </InputWrapper>
      </SelectWrapper>
    </FilterWrapper>
  );
};

export default Filter;

// * Select Styles

const customStyles = {
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "var(--black)",
  }),
  option: (base, props) => ({
    ...base,
    color: props.isFocused ? "var(--black)" : "var(--light-grey)",
    backgroundColor: props.isFocused ? "var(--yellow)" : "inherit",
    fontWeight: "500",
  }),
  control: (base, props) => ({
    ...base,
    width: "auto",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
    borderColor: props.isFocused ? "var(--orange)" : "inherit",
    outlineColor: props.isFocused ? "var(--orange)" : "inherit",
    boxShadow: props.isFocused ? "0 0 0 2px var(--orange)" : "none",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--black)",
    fontWeight: "500",
  }),
};
