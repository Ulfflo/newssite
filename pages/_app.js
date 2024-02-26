import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BookmarkProvider } from "@/context/BookmarkContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <BookmarkProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BookmarkProvider>
    </div>
  );
}
