// Button.tsx
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success'; // محدود کردن گزینه‌ها
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button 
      className={`btn btn-${color}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;