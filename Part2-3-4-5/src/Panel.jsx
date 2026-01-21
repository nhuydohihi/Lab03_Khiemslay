export default function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel">
      <h4>{title}</h4>

      {isActive ? (
        <div>{children}</div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  )
}
