const RegisterPage = () => {
  return (
    <>
      <header className="row col">
        <h1>Register Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <p>Formulario de Registro</p>
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Usuario</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>

        </article>
      </main>
    </>
  );
};

export default RegisterPage;
