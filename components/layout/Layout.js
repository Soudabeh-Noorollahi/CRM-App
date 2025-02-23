import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM APP</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>

      <footer className="footer">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/soudabeh-noorollahi/"
          target="_blank"
        >
          Soudabeh
        </a>{" "}
        with 💗 &copy;
      </footer>
    </>
  );
}

export default Layout;
