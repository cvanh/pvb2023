import Alert from "./alert/alert";
import Footer from "./footer/footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
