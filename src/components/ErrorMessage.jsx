export default function ErrorMessage({ message }) {
  return (
    <div>
      <p className="error">
        <span>❌</span> {message}
      </p>
    </div>
  );
}
