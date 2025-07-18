interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="error">
      <div className="error-icon">⚠️</div>
      <p>Something went wrong!</p>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;
