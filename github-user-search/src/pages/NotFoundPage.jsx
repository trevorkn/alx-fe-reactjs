function NotFoundPage() {
  return (
    <section>
    <h1 className='h1'>404</h1>
    <p className='muted'>
      That page doesn't exist. Try checking the URL or go back to the <Link to="/" className="accent">Home page</Link>.
    </p>
    </section>
  );
}

export default NotFoundPage;