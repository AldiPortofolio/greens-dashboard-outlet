interface ITextInput {
  type: string;
  label: string;
  value: string;
  name: string;
  handleChange: any;
  required: boolean;
}

const TextInput: React.FC<ITextInput> = ({
  type = 'text',
  label,
  value,
  name,
  handleChange,
  required,
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="rounded-12 form-control form-control-lg"
        required={required}
      />
      <label className={value && 'filled'} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
