import { StrengthBar } from './StrengthBarFill.styles'

export interface StrengthBarProps {
  strength: string;

}

const getColorFromStrength = (strength: string) => {
  switch (strength) {
    case 'TOO WEAK!':
      return { color: '#F64A4A', level: 1, opacity: 0.72 };
    case 'WEAK':
      return { color: '#FB7C58', level: 2, opacity: 1 };
    case 'MEDIUM':
      return { color: '#F8CD65', level: 3, opacity: 1 };
    case 'STRONG':
      return { color: '#A4FFAF', level: 4, opacity: 1 };
    default:
      return { color: '#18171F', level: 0, opacity: 1 };
  }
};

const StrengthBarFill = ({ strength }: StrengthBarProps) => {
  const { color, level, opacity } = getColorFromStrength(strength);
  const bars = new Array(4).fill(false).fill(true, 0, level);

  return (
    <StrengthBar backgroundColor={color} borderColor={color} opacity={opacity}>
      {bars.map((isFilled, index) => (
        <div
          key={index}
          className={`strength-bar-fill ${isFilled ? 'filled' : ''}`}
        />
      ))}
    </StrengthBar>
  )
}
export default StrengthBarFill