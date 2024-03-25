import {
  ContainerTextField,
  Error,
  Input,
  Label,
} from './styles';

interface TextFieldProps {
  error?: string;
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const TextField = ({
  error,
  id,
  label,
  value,
  placeholder,
  onChange,
}: TextFieldProps) => {
  return (
    <ContainerTextField>
      <Label htmlFor={id} error={!!error}>
        {label}
      </Label>

      <Input
        id={id}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        error={!!error}
      />

      {error && <Error>{error}</Error>}
    </ContainerTextField>
  );
};

export default TextField;
