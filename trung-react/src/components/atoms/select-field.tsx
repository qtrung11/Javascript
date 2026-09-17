interface Option {
  label: string,
  value: string
}

interface SelectFieldProps {
  id?: string,
  options: Option[],
  placeHolder?: string
}

function SelectField({ id, options = [], placeHolder = 'Choose a country', ...restProps }: SelectFieldProps) {
  return (
    <select 
      id={id} 
      className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
      {...restProps}
   >
      <option selected>{placeHolder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default SelectField