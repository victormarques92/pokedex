import {
  ContainerTextArea,
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

const TextArea = ({
  error,
  id,
  label,
  value,
  placeholder,
  onChange,
}: TextFieldProps) => {
  return (
    <ContainerTextArea>
      <Label htmlFor={id} error={!!error}>
        {label}
      </Label>

      <Input
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        error={!!error}
        rows={4}
      />

      {error && <Error>{error}</Error>}
    </ContainerTextArea>
  );
};

export default TextArea;
