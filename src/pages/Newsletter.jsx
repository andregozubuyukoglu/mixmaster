const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" name="" className="form-input" />
      </div>
    </form>
  )
}

export default Newsletter
