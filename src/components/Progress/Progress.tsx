import {
  BaseProgress,
  ContainerProgress,
  ProgressBar,
  Title,
} from './styles';

interface ProgressProps {
  title: string;
  value: number;
}

const Progress = ({ title, value }: ProgressProps) => {
  return (
    <ContainerProgress>
      <Title>{title}</Title>

      <BaseProgress>
        <ProgressBar value={value}>{value}</ProgressBar>
      </BaseProgress>
    </ContainerProgress>
  );
};

export default Progress;
