function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        © {new Date().toLocaleDateString("en-US", {month: "2-digit", year: "numeric"})} • Built with React
      </div>
    </footer>
  );
}

export default Footer;