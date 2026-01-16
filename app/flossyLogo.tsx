import Svg, { Ellipse, Path } from 'react-native-svg';

export function ToothIcon() {
  return (
    <Svg
      viewBox="0 0 120 140" 
      width={80}
      height={80}
    >
      {/* Tooth shape */}
      <Path
        d="M60 10C40 10 25 20 25 40C25 50 23 65 23 75C23 90 25 110 35 125C40 132 45 135 50 135C55 135 58 130 60 120C62 130 65 135 70 135C75 135 80 132 85 125C95 110 97 90 97 75C97 65 95 50 95 40C95 20 80 10 60 10Z"
        fill="white"
        stroke="#4DD4E8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tooth shine/highlight */}
      <Ellipse
        cx={45}
        cy={35}
        rx={8}
        ry={12}
        fill="#E0F7FA"
        opacity={0.6}
      />
    </Svg>
  );
}
